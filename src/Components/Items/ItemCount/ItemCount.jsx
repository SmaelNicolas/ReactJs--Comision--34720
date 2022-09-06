import React, { useState } from "react";
import "./itemCount.css";

export const ItemCount = ({ onAdd, stock }) => {
	const [initial, setInitial] = useState(1);

	const handleClickCount = (value) => {
		value < 0
			? initial > 1 && setInitial(initial - 1)
			: initial < stock && setInitial(initial + 1);
	};

	const handleClickOnAdd = () => {
		onAdd(initial);
		setInitial(1);
	};

	return (
		<div className='itemCount--container'>
			<div>STOCK DISPONIBLE {stock}</div>
			<div>Comprar : {initial}</div>
			<div className='itemCount--buttons--container'>
				<button
					className='itemCount--buttons--button'
					onClick={() => handleClickCount(-1)}
				>
					Eliminar
				</button>
				<button
					className='itemCount--buttons--button'
					onClick={() => handleClickCount(1)}
				>
					Agregar
				</button>
			</div>
			<button className='itemCount--buttonBuy' onClick={handleClickOnAdd}>
				COMPRAR
			</button>
		</div>
	);
};
