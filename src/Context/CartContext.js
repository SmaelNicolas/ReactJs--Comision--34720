import React, { createContext, useEffect, useState } from "react";
import { AddToCart, AddToCartAlert } from "../SweetAlerts/AddToCart";

export const CartContext = createContext();

const prodArrayExample = [
	{
		id: 1,
		title: "Producto N°1",
		price: 500,
		pictureUrl: "https://picsum.photos/id/237/200/300",
		quantity: 1,
	},
	{
		id: 2,
		title: "Producto N°2",
		price: 350,
		pictureUrl: "https://picsum.photos/id/405/200/300",
		quantity: 1,
	},
	{
		id: 3,
		title: "Producto N°3",
		price: 99,
		pictureUrl: "https://picsum.photos/id/100/200/300",
		quantity: 1,
	},
];

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {}, [cart]);

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
