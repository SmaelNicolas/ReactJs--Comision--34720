import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Imgs/lgrt.png";
import "./navbar.css";

export const Navbar = () => {
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
			</ul>
		</nav>
	);
};
