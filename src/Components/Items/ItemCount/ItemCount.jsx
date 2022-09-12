import React, { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./itemCount.css";

export const ItemCount = ({ product }) => {
	const [initial, setInitial] = useState(1);
	const { addToCart } = useContext(CartContext);

	const handleClickCount = (value) => {
		value < 0
			? initial > 1 && setInitial(initial - 1)
			: initial < product.stock && setInitial(initial + 1);
	};

	const handleClickOnAdd = () => {
		addToCart(product, initial);
		setInitial(1);
	};

	return (
		<div className='itemCount--container'>
			<div>STOCK DISPONIBLE {product.stock}</div>
			<div>Comprar : {initial}</div>
			<div className='itemCount--buttons--container'>
				<button
					className='itemCount--buttons--button'
					onClick={() => handleClickCount(-1)}>
					Eliminar
				</button>
				<button
					className='itemCount--buttons--button'
					onClick={() => handleClickCount(1)}>
					Agregar
				</button>
			</div>
			<button className='itemCount--buttonBuy' onClick={handleClickOnAdd}>
				COMPRAR
			</button>
		</div>
	);
};
