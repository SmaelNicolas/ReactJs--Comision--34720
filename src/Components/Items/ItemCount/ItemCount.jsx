import React from "react";
import "./itemCount.css";

// RECIBIMOS LAS PROPS , ya desestructuradas
export const ItemCount = ({ stock, initial, onAdd, onRemove }) => {
	//estados para manejar los botones de desafios

	// ESTADO PARA MANEJAR EL VALOR EN EL CUAL COMIENZA LA CANTIDAD Y PUEDE IR AUMENTANDO HASTA EL STOCK o DISMINUIR HASTA 1
	// const [initial, setInitial] = useState(1);

	// ESTADO PARA MANEJAR EL STOCK.
	// const [stock, setStock] = useState(5);

	//FUNCION PARA MANEJAR CUANDO SE AGREGAR UNO A LA CANTIDAD INICIAL
	// const onAdd = () => {
	// 	initial < stock && setInitial(initial + 1);
	// };

	//FUNCION PARA MANEJAR CUANDO SE ELIMINA UNO A LA CANTIDAD INICIAL
	// const onRemove = () => {
	// 	initial > 1 && setInitial(initial - 1);
	// };
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
