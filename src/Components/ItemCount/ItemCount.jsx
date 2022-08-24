import React from "react";
import "./itemCount.css";

// RECIBIMOS LAS PROPS , ya desestructuradas
export const ItemCount = ({ stock, initial, onAdd, onRemove }) => {
	const handleClick = () => {
		alert(`Compraste ${initial} productos`);
	};

	return (
		<div className='itemCount--container'>
			<div>STOCK DISPONIBLE {stock}</div>
			<div>Cantidad : {initial}</div>
			<div className='itemCount--buttons--container'>
				<button
					className='itemCount--buttons--button'
					onClick={onRemove}
				>
					Eliminar
				</button>
				<button className='itemCount--buttons--button' onClick={onAdd}>
					Agregar
				</button>
			</div>
			<button className='itemCount--buttonBuy' onClick={handleClick}>
				COMPRAR
			</button>
		</div>
	);
};
