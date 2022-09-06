import React from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import "./item.css";

export const Item = ({ producto }) => {
	const onAdd = (value) => {
		alert(`Compraste ${value} productos`);
	};

	return (
		<div className='item--card'>
			<h3>{producto.title}</h3>
			<img src={producto.pictureUrl} alt={producto.title} />
			<div>$ {producto.price}</div>
			<div className='item--card--description'>
				{producto.description}
			</div>
			<ItemCount onAdd={onAdd} stock={producto.stock} />

			<Link to={`/items/${producto.id}`} className='item--card--button'>
				Ver 🔎
			</Link>
		</div>
	);
};
