import React from "react";
import { Link } from "react-router-dom";
import "./movie.css";

export const Movie = ({ movie }) => {
	return (
		<Link to={`/movies-week/${movie.id}`} className='movie--card'>
			<h3 className='movie--title'>{movie.title}</h3>
			<img
				className='movie--img'
				src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
				alt={movie.title}
			/>
			<button className='movie--button'>Ver Mas Info</button>
		</Link>
	);
};
