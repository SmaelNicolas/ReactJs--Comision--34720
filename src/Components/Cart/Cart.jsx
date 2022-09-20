import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Loading } from "../Loading/Loading";
import "./cart.css";
import { ItemCard } from "./ItemCard";

export const Cart = () => {
	const [loading, setLoading] = useState(true);

	const { cart, quantityItems, clearCart } = useContext(CartContext);

	const itemsInCart = quantityItems();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return loading ? (
		<Loading />
	) : itemsInCart === 0 ? (
		<div className='cart--empty'>
			<div className='cart--empty--text'>CARRITO VACIO</div>
			<Link className='cart--empty--link' to='/items'>
				Ir a Comprar
			</Link>
		</div>
	) : (
		<div className='cart--container'>
			<button className='cart--emptyButton' onClick={() => clearCart()}>
				VACIAR CARRITO
			</button>
			{cart.map((item) => (
				<ItemCard item={item} />
			))}
		</div>
	);
};
