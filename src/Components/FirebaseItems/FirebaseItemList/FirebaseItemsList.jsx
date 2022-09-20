import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getDataBase } from "../../../Firebase/Firebase";
import { Loading } from "../../Loading/Loading";
import { ItemFirebase } from "../FirebaseItem/ItemFirebase";
import "./firebaseItemList.css";

export const FirebaseItems = () => {
	const [productos, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const db = getDataBase();
		const collectionRef = collection(db, "products");
		getDocs(collectionRef)
			.then((res) =>
				setProducts(
					res.docs.map((prod) => ({
						id: prod.id,
						...prod.data(),
					}))
				)
			)
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, []);

	return loading ? (
		<Loading />
	) : (
		<div className='firebase--layout'>
			{productos.map((item) => (
				<ItemFirebase producto={item} />
			))}
		</div>
	);
};
