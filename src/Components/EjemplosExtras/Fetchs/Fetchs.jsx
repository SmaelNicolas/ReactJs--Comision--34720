import React, { useState } from "react";
import { Loading } from "../../Loading/Loading";
import "./fetch.css";
import { PokemonCard } from "./PokemonCard";

export const Fetchs = () => {
	// GUARDAR EN UN ESTADO SI EL FETCH SE RESOLVIO
	const [pokemon, setPokemon] = useState();
	// GUARDAR EN UN ESTADO SI EL FETCH NO SE RESOLVIO
	const [error, setError] = useState(false);
	// SIMULAR EL RETRASO
	const [loading, setLoading] = useState(true);
	// SIMULAR EL RETRASO
	const [value, setValue] = useState("");
	// para mostrar el contenido una vez que comienze la busqueda
	const [show, setShow] = useState(false);

	//funcion que se encarga del fetch y manejar los estados segun resultados
	const doFetch = (e) => {
		e.preventDefault();
		//muestra el estado de la busqueda. False no muestra nada
		setShow(true);
		//loading true para asegurar que muestra el loading en 2 o mas busquedas
		setLoading(true);
		//llamada fetch a la url con el valor del input
		fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
			//transformo la respuesta en algo que pueda leer
			.then((response) => response.json())
			//recibo la respuestra traducida
			.then((data) => {
				//guardo el pokemon en el estado
				setPokemon(data);
				//no hubo error por ende el estado error es falso
				setError(false);
				//simula una tardanza de 3 segundos y luego deja de cargar
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			})
			//si lo que quisimos buscar no se encuentra en la API falla
			.catch(() => {
				//tuve un error y actualizo el estado
				setError(true);
				//simula una tardanza de 3 segundos y luego deja de cargar
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			})
			//siempre reseteo el valor ingresado en el input
			.finally(() => setValue(""));
	};

	return (
		<div className='fetch--container'>
			{/*FORMULARIO  */}
			<form onSubmit={doFetch} className='fetch--form'>
				<h2 className='fetch--title'>Buscar por nombre o id</h2>
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className='fetch--input'
				/>
				<button className='fetch--button' type='submit'>
					Buscar
				</button>
			</form>
			{/* RENDER CONDICIONAL */}
			{show &&
				(loading ? (
					<Loading />
				) : error ? (
					<div className='fetch--error'>No existe ese pokemon 😔</div>
				) : (
					<PokemonCard pkm={pokemon} />
				))}
		</div>
	);
};
