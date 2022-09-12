import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../Loading/Loading";
import { ItemCount } from "../ItemCount/ItemCount";

import "./itemDetailContainer.css";

const catalogoDeProductos = [
	{
		id: 1,
		title: "Producto N°1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
		price: 500,
		pictureUrl: "https://picsum.photos/id/237/200/300",
		stock: 20,
	},
	{
		id: 2,
		title: "Producto N°2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
		price: 350,
		pictureUrl: "https://picsum.photos/id/405/200/300",
		stock: 15,
	},
	{
		id: 3,
		title: "Producto N°3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		price: 99,
		pictureUrl: "https://picsum.photos/id/100/200/300",
		stock: 2,
	},
	{
		id: 4,
		title: "Producto N°4",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
		price: 107,
		pictureUrl: "https://picsum.photos/id/369/200/300",
		stock: 9,
	},
	{
		id: 5,
		title: "Producto N°5",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
		price: 1028.65,
		pictureUrl: "https://picsum.photos/id/248/200/300",
		stock: 70,
	},
	{
		id: 6,
		title: "Producto N°6",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
		price: 209,
		pictureUrl: "https://picsum.photos/id/147/200/300",
		stock: 5,
	},
	{
		id: 7,
		title: "Producto N°7",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
		price: 746,
		pictureUrl: "https://picsum.photos/id/25/200/300",
		stock: 11,
	},
	{
		id: 8,
		title: "Producto N°8",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
		price: 10,
		pictureUrl: "https://picsum.photos/id/19/200/300",
		stock: 36,
	},
];

export const ItemDetailContainer = () => {
	const { idItem } = useParams();
	const [prod, setProd] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setProd(
			catalogoDeProductos.find((item) => item.id === parseInt(idItem))
		);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [idItem]);

	return loading ? (
		<Loading />
	) : (
		<div className='itemDetail--container'>
			<div className='itemDetail--card'>
				<h3>{prod.title}</h3>
				<img src={prod.pictureUrl} alt={prod.title} />
				<div> Precio : {prod.price}</div>
				<ItemCount product={prod} />
				<div>Descripcion : {prod.description}</div>
			</div>
		</div>
	);
};
