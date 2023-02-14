import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.scss'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>NOMBRE</h3>
			<nav ref={navRef}>
				<a href="/home">Inicio</a>
				<a href="/gallery">Galería</a>
				<a href="/location">Ubicación</a>
				<a href="/contact">Contacto</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
