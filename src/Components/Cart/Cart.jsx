import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { CartEmpty } from "../CartEmpty/CartEmpty";
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
		<CartEmpty />
	) : (
		<div className='cart--container'>
			<button className='cart--emptyButton' onClick={() => clearCart()}>
				VACIAR CARRITO
			</button>
			<Link to='/checkout' className='cart--checkout'>
				FINALIZAR COMPRA! 🔥
			</Link>
			{cart.map((item) => (
				<ItemCard key={item.id} item={item} />
			))}
		</div>
	);
};
