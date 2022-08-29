import React from "react";
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

			<button className='item--card--button'>Ver 🔎</button>
		</div>
	);
};
