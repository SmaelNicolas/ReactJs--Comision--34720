import React, { useState } from "react";
import "./itemCount.css";

export const ItemCount = ({ stock }) => {
	const [initial, setInitial] = useState(1);
	const onAdd = () => {
		initial < stock && setInitial(initial + 1);
	};
	const onRemove = () => {
		initial > 1 && setInitial(initial - 1);
	};
	const handleClick = () => {
		alert(`Compraste ${initial} productos`);
	};

	return (
		<div className='itemCount--container'>
			<div>STOCK DISPONIBLE {stock}</div>
			<div>Comprar : {initial}</div>
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
