import React, { useEffect, useState } from "react";
import { Loading } from "../../Loading/Loading";
import { Item } from "../Item/Item";
import "./itemList.css";

export const ItemListLayout = ({ items }) => {
	const [catalogo, setCatalogo] = useState([]);
	const [loading, setLoading] = useState(true);

	const soyUnaPromesa = new Promise((resolve, reject) => {
		items.length > 0
			? setTimeout(() => {
					resolve(items);
			  }, 2000)
			: setTimeout(() => {
					reject("NO HAY PRODUCTOS");
			  }, 2000);
	});

	useEffect(() => {
		soyUnaPromesa
			.then((data) => setCatalogo(data))
			.catch((err) => alert(err))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 3000)
			);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return loading ? (
		<Loading />
	) : (
		<div className='items--layout'>
			{catalogo.map((prod) => (
				<Item key={prod.id} producto={prod} />
			))}
		</div>
	);
};
