import React, { createContext, useState } from "react";
import { AddToCartAlert } from "../SweetAlerts/AddToCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item, quantity) => {
		if (isInCart(item.id)) {
			const itemInCart = cart.find((it) => it.id === item.id);
			itemInCart.quantity = itemInCart.quantity + quantity;
			setCart([...cart]);
		} else {
			item.quantity = quantity;
			setCart([...cart, item]);
		}
		AddToCartAlert(item.title, quantity);
	};

	const quantityItems = () => {
		return cart.reduce((totalQ, prod) => totalQ + prod.quantity, 0);
	};

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const removeItem = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				quantityItems,
				addToCart,
				clearCart,
				removeItem,
			}}>
			{children}
		</CartContext.Provider>
	);
};
