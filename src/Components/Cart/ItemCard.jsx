import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";
import "./itemCard.css";

export const ItemCard = ({ item }) => {
	const { removeItem } = useContext(CartContext);

	return (
		<div className='itemCart--card'>
			<div className='itemCart--card--title'>{item.title}</div>
			<img
				className='itemCart--card--img'
				src={item.pictureUrl}
				alt={item.title}
			/>
			<div className='itemCart--card--text'>
				Cantidad : {item.quantity}
			</div>
			<div className='itemCart--card--text'>
				Precio Total : {item.quantity * item.price}
			</div>
			<BsTrash
				className='itemCart--card--trash'
				onClick={() => removeItem(item.id)}
			/>
		</div>
	);
};
