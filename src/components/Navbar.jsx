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
				<a href="/">{t('navbar.title_one')}</a>
				<a href="/gallery">{t('navbar.title_two')}</a>
				<a href="/location">{t('navbar.title_three')}</a>
				<a href="/contact">{t('navbar.title_four')}</a>
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
