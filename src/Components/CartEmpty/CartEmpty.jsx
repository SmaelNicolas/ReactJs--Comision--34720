import React from "react";
import { Link } from "react-router-dom";

export const CartEmpty = () => {
	return (
		<div className='cart--empty'>
			<div className='cart--empty--text'>CARRITO VACIO</div>
			<Link className='cart--empty--link' to='/items'>
				Ir a Comprar
			</Link>
		</div>
	);
};
