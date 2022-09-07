import React, { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import "./cart.css";

export const Cart = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return loading ? (
		<Loading />
	) : (
		<div className='cart--container'>
			<div>Cart</div>
		</div>
	);
};
