import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({ producto }) => {
	return (
		<div className='item--card'>
			<h3>{producto.title}</h3>
			<img src={producto.pictureUrl} alt={producto.title} />
			<div>$ {producto.price}</div>
			<div>Stock : {producto.stock}</div>
			<div className='item--card--description'>
				{producto.description}
			</div>

			<Link to={`/items/${producto.id}`} className='item--card--button'>
				Ver 🔎
			</Link>
		</div>
	);
};
