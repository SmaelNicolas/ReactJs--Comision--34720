import React, { useEffect, useState } from "react";
//comentar este catalogo cuando se descomente catalogo = [];
import { catalogo } from "../../Data/catalogoProductos";

export const Promises = () => {
	//descomentar esta const catalogo = [] para que la promesa sea rechazada
	// const catalogo = [];
	const [loading, setLoading] = useState(true);
	const [seg, setSeg] = useState(3);

	const soyUnaPromesa = new Promise((resolve, reject) => {
		//si el catalogo tiene items, la promesa se acepta y toma el valor catalogo
		//si el catalogo es vacio , la promesa es rechazada y nos informa que no tiene items
		catalogo.length > 0
			? setTimeout(() => {
					resolve(catalogo);
			  }, 3000)
			: setTimeout(() => {
					reject("NO HAY PRODUCTOS");
			  }, 3000);
	});

	//para ver la resta
	useEffect(() => {
		setTimeout(() => {
			setSeg(2);
		}, 1000);
		setTimeout(() => {
			setSeg(1);
		}, 2000);
	}, []);

	//manejo de la promesa
	//usamos useEffect con dependencia [] para que se ejecute una sola vez al crearce el componente.
	// Si no usaramos useEffect es probable que entremos en loops infinitos cada vez que un estado se modifique
	useEffect(() => {
		soyUnaPromesa
			//then es para cuando la promesa es aceptada , data es el valor del resolve. Aca DATA = CATALOGO
			//Aca es donde se darian los valores a los states creados para cuando la promesa es aceptada
			.then((data) => console.log(data))
			//err es para cuando la promesa es rechazada , err es el valor del reject. Aca ERR = "NO HAY PRODUCTOS"
			//Aca es donde se darian los valores a los states creados para cuando la promesa es rechazada
			.catch((err) => console.log(err))
			//no importa el resultado , siempre ejecuta finally
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 3000)
			);
	}, []);

	return (
		<div>
			{/* Muestra el cargando datos hasta que entra en el finally. Para simular el retraso tmb usa un setTimeout el loading */}
			{loading ? (
				<h1>CARGANDO DATOS ... {seg}</h1>
			) : (
				<h1>VER DATOS EN CONSOLA</h1>
			)}
		</div>
	);
};
