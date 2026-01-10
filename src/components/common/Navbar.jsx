import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/global/logo.png';

import { useMediaQuery } from '../../hooks/UseMediaQuery';
import { BurgerMenu } from './BurgerMenu';
import { navLinks } from '../utils/NavBarMenu';

export const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 991px)');

    return (
        <header>
            <nav className="navbar" aria-label="Barra de navegación principal">
                {/* LOGO */}

                <div className="logo-container">
                    <NavLink to="/" aria-label="Ir a la página principal" data-link="navbar-logo-btn">
                        <img src={LogoNavbar} alt="Logotipo de Flip Inmobiliaria en la barra de navegación" className="logo-navbar" />
                    </NavLink>
                </div>

                {/* LISTA  */}

                {!isMobile && (
                    <ul className="menu-nav alliance-text">
                        {navLinks.map((item) => (
                            <li key={item.id} className="nav-item">
                                {item.children ? (
                                    <div className="dropdown">
                                        <span className="dropdown-trigger">{item.label}</span>

                                        <ul className="dropdown-menu">
                                            {item.children.map((child) => (
                                                <li key={child.id}>
                                                    <NavLink to={child.to}>{child.label}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <NavLink to={item.to}>{item.label}</NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </nav>

            {/* BURGERMENU */}

            {isMobile && <BurgerMenu />}
        </header>
    );
};
