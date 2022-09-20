import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { getDataBase } from "../../Firebase/Firebase";
import { CartEmpty } from "../CartEmpty/CartEmpty";
import { Loading } from "../Loading/Loading";
import "./checkout.css";

export const Checkout = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [id, setId] = useState("");
	const [showId, setShowId] = useState(false);
	const [loading, setLoading] = useState(true);

	const { cart, totalCart, clearCart } = useContext(CartContext);
	const db = getDataBase();

	const checkoutForm = (e) => {
		e.preventDefault();
		setShowId(true);
		let order = {
			buyer: {
				name,
				phone,
				email,
			},
			items: cart,
			total: totalCart(),
			date: new Date().toISOString().replace("T", " | "),
		};
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order)
			.then(({ id }) => setId(id))
			.finally(() => {
				clearCart();
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			});
	};

	return (
		<div className='checkout--container'>
			{showId ? (
				<>
					{loading && <Loading />}
					{!loading && (
						<div className='checkout--msg'>
							Su compra fue registrada exitosamente con el
							identificador 👉
							<span className='checkout--msg--id'>{id}</span>
						</div>
					)}
				</>
			) : cart.length === 0 ? (
				<CartEmpty />
			) : (
				<form onSubmit={checkoutForm} className='checkout--form'>
					<label className='checkout--form--label'>
						Nombre
						<input
							name='name'
							type='text'
							value={name}
							placeholder='nombre'
							onChange={(e) => setName(e.target.value)}
							className='checkout--form--input'
						/>
					</label>
					<label className='checkout--form--label'>
						Telefono
						<input
							name='phone'
							type='text'
							value={phone}
							placeholder='phone'
							onChange={(e) => setPhone(e.target.value)}
							className='checkout--form--input'
						/>
					</label>
					<label className='checkout--form--label'>
						Email
						<input
							name='email'
							type='email'
							value={email}
							placeholder='email'
							onChange={(e) => setEmail(e.target.value)}
							className='checkout--form--input'
						/>
					</label>
					<button
						className='checkout--form--button'
						type='submit'
						disabled={name === "" || email === "" || phone === ""}>
						Comprar
					</button>
				</form>
			)}
		</div>
	);
};
