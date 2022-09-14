import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

import "./itemCount.css";

export const ItemCount = ({ product }) => {
	const [initial, setInitial] = useState(1);
	const [show, setShow] = useState(false);
	const { addToCart } = useContext(CartContext);

	const handleClickCount = (value) => {
		value < 0
			? initial > 1 && setInitial(initial - 1)
			: initial < product.stock && setInitial(initial + 1);
	};

	const handleClickOnAdd = () => {
		addToCart(product, initial);
		setShow(true);
		setInitial(1);
	};
	const handleAgain = () => {
		setShow(false);
	};

	return (
		<div className='itemCount--container'>
			{!show && (
				<>
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
					<button
						className='itemCount--buttonBuy'
						onClick={handleClickOnAdd}>
						COMPRAR
					</button>
				</>
			)}

			{show && (
				<div className='itemCount--groupButtons'>
					<Link to='/cart' className='itemCount--link '>
						Ir al <FiShoppingCart />
					</Link>
					<Link to='/items' className='itemCount--link '>
						Ver Mas Productos
					</Link>
					<button
						className='itemCount--buttonBuy'
						onClick={handleAgain}>
						Comprar Denuevo
					</button>
				</div>
			)}
		</div>
	);
};
