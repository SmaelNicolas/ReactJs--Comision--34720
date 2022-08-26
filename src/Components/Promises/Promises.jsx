import React, { useEffect, useState } from "react";
import { catalogo } from "../../Data/catalogoProductos";

export const Promises = () => {
	// const catalogo = [];
	const [loading, setLoading] = useState(true);
	const [seg, setSeg] = useState(3);

	const soyUnaPromesa = new Promise((resolve, reject) => {
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
	useEffect(() => {
		soyUnaPromesa
			//then es cuando la promesa es aceptada , data es el valor del resolve
			.then((data) => console.log(data))
			//err es cuando la promesa es rechazada , err es el valor del reject
			.catch((err) => console.log(err))
			//no importa el resultado , siempre ejecuta finally
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 3000)
			);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			{loading ? (
				<h1>CARGANDO DATOS ... {seg}</h1>
			) : (
				<h1>VER DATOS EN CONSOLA</h1>
			)}
		</div>
	);
};
