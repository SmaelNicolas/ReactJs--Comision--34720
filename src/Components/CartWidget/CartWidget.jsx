import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./cartWidget.css";

export const CartWidget = () => {
	return (
		<div>
			<FiShoppingCart className='cart--icon--widget' />
		</div>
	);
};
