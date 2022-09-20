import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getDataBase } from "../../Firebase/Firebase";

export const FirebaseItems = () => {
	const [item, setItem] = useState({});
	const [productos, setProducts] = useState([]);

	useEffect(() => {
		const db = getDataBase();
		const productoRef = doc(db, "products", "uSozWSfsqXV9l3l0gnrt");
		getDoc(productoRef).then((res) => {
			const myProduct = { ...res.data(), id: res.id };
			setItem(myProduct);
		});
	}, []);

	useEffect(() => {
		const db = getDataBase();
		const collectionRef = collection(db, "products");
		getDocs(collectionRef).then((res) =>
			setProducts(
				res.docs.map((prod) => ({
					id: prod.id,
					...prod.data(),
				}))
			)
		);
	}, []);

	return (
		<div>
			<img src={item.urlImg} alt='' srcset='' />
			{item.id}
			<br />
			{productos.map((item) => (
				<h1>{item.id}</h1>
			))}
		</div>
	);
};
