// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { InputVocal } from "./Components/InputVocal/InputVocal";
import { ItemDetailContainer } from "./Components/Items/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./Components/Items/ItemListContainer/ItemListContainer";
import { MovieDetailContainer } from "./Components/Movies/MovieDetailContainer/MovieDetailContainer";
import { MoviesListContainer } from "./Components/Movies/MovieListContainer.jsx/MoviesListContainer";

import { Navbar } from "./Components/Navbar/Navbar";
import { PokemonListContainer } from "./Components/Pokemon/PokemonListContainer/PokemonListContainer";
import { Error } from "./Pages/Error";
import { HomeContainer } from "./Pages/HomeContainer";

function App() {
	return (
		<div className='app--container'>
			<Navbar />
			<Routes>
				<Route element={<HomeContainer />} path='/' />
				<Route element={<ItemListContainer />} path='/items' />
				<Route
					element={<ItemDetailContainer />}
					path='/items/:idItem'
				/>
				<Route element={<PokemonListContainer />} path='/pokemon' />
				<Route element={<MoviesListContainer />} path='/movies-week' />
				<Route
					element={<MovieDetailContainer />}
					path='/movies-week/:idMovie'
				/>
				<Route element={<InputVocal />} path='/input-vocal' />
				<Route element={<Error />} path='/*' />
			</Routes>
		</div>
	);
}

export default App;
