import React from "react";
import { Link } from "react-router-dom";
// import { ItemCount } from "../ItemCount/ItemCount";
import "./itemFirebase.css";

export const ItemFirebase = ({ producto }) => {
	const reduceString = (str) => {
		return str.length > 100 ? str.slice(0, 97).concat("...") : str;
	};

	return (
		<div className='item--card'>
			<h3>{producto.title}</h3>
			<img
				className='item--card--image'
				src={producto.pictureUrl}
				alt={producto.title}
			/>
			<div>$ {producto.price}</div>
			<div className='item--card--description'>
				{reduceString(producto.description)}
			</div>
			{/* <ItemCount product={producto} /> */}

			<Link
				to={`/firebase/item/${producto.id}`}
				className='item--card--button'>
				Ver Detalles 🔎
			</Link>
		</div>
	);
};
