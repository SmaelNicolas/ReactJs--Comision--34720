import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDataBase } from "../../../Firebase/Firebase";
import { Loading } from "../../Loading/Loading";
import { ItemFirebase } from "../FirebaseItem/ItemFirebase";
import "./firebaseItemList.css";

export const FirebaseItems = () => {
	const [productos, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const { category } = useParams();

	useEffect(() => {
		const db = getDataBase();
		const collectionRef = category
			? query(
					collection(db, "products"),
					where("category", "==", category)
			  )
			: collection(db, "products");
		// const collectionRef = collection(db, "products");
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
	}, [category]);

	return (
		<div className='firebase--layout '>
			<div className='firebase--group--links'>
				<Link to='/firebase' className='firebase--links'>
					Ver Todos
				</Link>
				<Link to='/firebase/apple' className='firebase--links'>
					Ver Apple
				</Link>
				<Link to='/firebase/samsung' className='firebase--links'>
					Ver Samsung
				</Link>
			</div>

			{loading ? (
				<Loading />
			) : (
				<div className='firebase--layout'>
					{productos.map((item) => (
						<ItemFirebase producto={item} />
					))}
				</div>
			)}
		</div>
	);
};
