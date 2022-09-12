import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Loading } from "../Loading/Loading";
import "./cart.css";

export const Cart = () => {
	const [loading, setLoading] = useState(true);

	const { quantityItems } = useContext(CartContext);

	const itemsInCart = quantityItems();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return loading ? (
		<Loading />
	) : (
		<div className='cart--container'>
			<div>Total : {itemsInCart}</div>
		</div>
	);
};
