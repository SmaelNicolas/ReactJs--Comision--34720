import { useState } from "react";
import "./app.css";
import { ItemCount } from "./Components/ItemCount/ItemCount";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavbarMUI } from "./Components/Navbar/NavbarMUI";

function App() {
	// ESTADO PARA MANEJAR EL VALOR EN EL CUAL COMIENZA LA CANTIDAD Y PUEDE IR AUMENTANDO HASTA EL STOCK o DISMINUIR HASTA 1
	const [initial, setInitial] = useState(1);

	// ESTADO PARA MANEJAR EL STOCK.
	const [stock, setStock] = useState(10);

	//FUNCION PARA MANEJAR CUANDO SE AGREGAR UNO A LA CANTIDAD INICIAL
	const onAdd = () => {
		initial < stock && setInitial(initial + 1);
	};

	//FUNCION PARA MANEJAR CUANDO SE ELIMINA UNO A LA CANTIDAD INICIAL
	const onRemove = () => {
		initial > 1 && setInitial(initial - 1);
	};

	return (
		<div className='app--container'>
			<NavbarMUI />
			<ItemListContainer greeting={"TEXTO RECIBIDO POR PROP 🖐"} />

			{/* IMPORTAMOS EL COMPONENTE Y LE PASAMOS LOS ESTADOS Y LAS FUNCIONES */}
			<ItemCount
				stock={stock}
				initial={initial}
				onAdd={onAdd}
				onRemove={onRemove}
			/>
		</div>
	);
}

export default App;
