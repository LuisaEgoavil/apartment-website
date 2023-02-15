import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import LanguageButton from '../lng/LanguageButton'

function Navbar() {
	const navRef = useRef();
	const { t } = useTranslation();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>NOMBRE</h3>
			<nav ref={navRef}>
				<LanguageButton />
				<a href="/home">{t('navbar.title_one')}</a>
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
