import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../Loading/Loading";
import "./movieDetailContainer.css";

export const MovieDetailContainer = () => {
	const { idMovie } = useParams();
	const [movie, setMovie] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [show, setShow] = useState(false);
	useEffect(() => {
		setShow(true);
		setLoading(true);
		fetch(
			`https://api.themoviedb.org/3/movie/${idMovie}?api_key=c9c649f8dc1856154cf88a683b935a6e`
		)
			.then((response) => response.json())
			.then((data) => {
				setMovie(data);
				setError(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			})
			.catch(() => {
				setError(true);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='fetch--container'>
			{show &&
				(loading ? (
					<Loading />
				) : error ? (
					<div className='fetch--error'>No existe esa Pelicula</div>
				) : (
					<div className='movie--info'>
						<h3 className='movie--info--title'>{movie.title}</h3>
						<img
							className='movie--info--img'
							src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
							alt=''
						/>
						<div className='movie--info--data'>
							Lenguage : {movie.original_language}
						</div>
						<div className='movie--info--data'>
							Costo Produccion : USD {movie.budget}
						</div>
						<div className='movie--info--data'>
							WEB :{" "}
							<a
								className='movie--info--data--a'
								href={movie.homepage}
							>
								{movie.homepage}
							</a>
						</div>
						<div className='movie--info--description'>
							{movie.overview}
						</div>
					</div>
				))}
		</div>
	);
};
