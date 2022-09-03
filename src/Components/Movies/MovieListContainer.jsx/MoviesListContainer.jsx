import React, { useEffect, useState } from "react";
import { Loading } from "../../Loading/Loading";
import { Movie } from "../Movie/Movie";
import "./movieListContainer.css";

export const MoviesListContainer = () => {
	// GUARDAR EN UN ESTADO SI EL FETCH SE RESOLVIO
	const [arrayMovies, setArrayMovies] = useState();
	// GUARDAR EN UN ESTADO SI EL FETCH NO SE RESOLVIO
	const [error, setError] = useState(false);
	// SIMULAR EL RETRASO
	const [loading, setLoading] = useState(true);
	// ESTADO PARA ALMACENAR EL VALOR DEL INPUT
	// para mostrar el contenido una vez que comienze la busqueda
	const [show, setShow] = useState(false);

	//useEffect se encarga del fetch y manejar los estados segun resultados
	useEffect(() => {
		//muestra el estado de la busqueda. False no muestra nada
		setShow(true);
		//loading true para asegurar que muestra el loading en 2 o mas busquedas
		setLoading(true);
		//llamada fetch a la url con el valor del input
		fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=c9c649f8dc1856154cf88a683b935a6e`
		)
			//transformo la respuesta en algo que pueda leer
			.then((response) => response.json())
			//recibo la respuestra traducida
			.then((data) => {
				//guardo el pokemon en el estado
				setArrayMovies(data.results);
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
			});
		//siempre reseteo el valor ingresado en el input
	}, []);

	return (
		<div className='fetch--container'>
			{/* RENDER CONDICIONAL */}
			{show &&
				(loading ? (
					<Loading />
				) : error ? (
					<div className='fetch--error'>No existe Esa Pelicula</div>
				) : (
					<div className='cards--container'>
						{arrayMovies.map((movie) => (
							<Movie movie={movie} />
						))}
					</div>
				))}
		</div>
	);
};
