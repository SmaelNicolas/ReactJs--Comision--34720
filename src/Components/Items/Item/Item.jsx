import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./item.css";

export const Item = ({ producto }) => {
	const { addToCart } = useContext(CartContext);

	const onAdd = () => {
		addToCart(producto);
	};

	return (
		<div className='item--card'>
			<h3>{producto.title}</h3>
			<img src={producto.pictureUrl} alt={producto.title} />
			<div>$ {producto.price}</div>
			<div className='item--card--description'>
				{producto.description}
			</div>
			<ItemCount product={producto} />

			<Link to={`/items/${producto.id}`} className='item--card--button'>
				Ver Detalles 🔎
			</Link>
		</div>
	);
};
