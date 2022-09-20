import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getDataBase } from "../../../Firebase/Firebase";
import { ItemCount } from "../../Items/ItemCount/ItemCount";
import { Loading } from "../../Loading/Loading";

import "./itemDetailContainer.css";

export const FirebaseItemDetailContainer = () => {
	const { idItemFirebase } = useParams();
	const [loading, setLoading] = useState(true);
	const [item, setItem] = useState({});

	useEffect(() => {
		const db = getDataBase();
		const productoRef = doc(db, "products", `${idItemFirebase}`);
		getDoc(productoRef)
			.then((res) => {
				const myProduct = { ...res.data(), id: res.id };
				setItem(myProduct);
			})
			.finally(() => setLoading(false));
	}, [idItemFirebase]);

	return loading ? (
		<Loading />
	) : (
		<div className='itemDetail--container'>
			<div className='itemDetail--card'>
				<h3>{item.title}</h3>
				<img
					className='itemDetail--card--img'
					src={item.pictureUrl}
					alt={item.title}
				/>
				<div> Precio : {item.price}</div>
				<ItemCount product={item} />
				<div>Descripcion : {item.description}</div>
			</div>
		</div>
	);
};
