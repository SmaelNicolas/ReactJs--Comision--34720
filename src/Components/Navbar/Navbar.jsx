import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Imgs/lgrt.png";
import { CartContext } from "../../Context/CartContext";
import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	const { quantityItems } = useContext(CartContext);

	const itemsInCart = quantityItems();

	return (
		<nav className='navbar'>
			<Link to='/'>
				<img className='navbar--logo' src={Logo} alt='LOGO' />
			</Link>
			<ul className='navbar--ul'>
				<li className='navbar--ul--li'>
					<Link to='/items' className='navbar--ul--li--link'>
						Items
					</Link>
				</li>
				<li className='navbar--ul--li'>
					<Link to='/movies-week' className='navbar--ul--li--link'>
						Movies
					</Link>
				</li>
				<li className='navbar--ul--li'>
					<Link to='/pokemon' className='navbar--ul--li--link'>
						POKEMON
					</Link>
				</li>
				<li className='navbar--ul--li'>
					<Link to='/input-vocal' className='navbar--ul--li--link'>
						Ej Vocal
					</Link>
				</li>
				<li className='navbar--ul--li'>
					<Link to='/cart' className='navbar--ul--li--link'>
						<CartWidget /> {itemsInCart}
					</Link>
				</li>
			</ul>
		</nav>
	);
};
