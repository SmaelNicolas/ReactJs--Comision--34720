import "./app.css";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavbarMUI } from "./Components/Navbar/NavbarMUI";

function App() {
	return (
		<div className='app--container'>
			<NavbarMUI />
			<ItemListContainer message={"HOLA!"} />
		</div>
	);
}

export default App;
