import React, { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const FetchSinInput = () => {
	const [pokemon, setPokemon] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/85`)
			.then((res) => res.json())
			.then((data) => {
				setPokemon(data);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return loading ? <div>CARGANDO DATOS</div> : <PokemonCard pkm={pokemon} />;
};
