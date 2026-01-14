import logoFooter from '../../assets/images/global/logo.png';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { navLinks } from '../utils/NavBarMenu';

export const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const handleNavClick = (e, item) => {
        if (!item.useScrollToTop) return;

        e.preventDefault();

        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <footer role="contentinfo" className="footer" aria-label="Navegación pie de página">
            <div className="contenido-footer">
                <a href="/" aria-label="Ir a la página de inicio" data-link="footer-logo-btn" onClick={handleLogoClick}>
                    <img src={logoFooter} alt="Logotipo de Flip Inmobiliaria en el pie de página" className="logo-footer" />
                </a>

                <nav className="nav-footer">
                    <ul className="alliance-text">
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.to}
                                    title={item.title}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    onClick={(e) => handleNavClick(e, item)}
                                    {...(item.dataLink && { 'data-link': item.dataLink })}
                                    {...(item.dataCta && { 'data-cta': item.dataCta })}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="utils-footer alliance-text">
                <p>All right reserved.</p>

                <div className="utils-nav">
                    <NavLink to="/politica-privacidad" title="Ver la política de privacidad" data-link="footer-politica-link">
                        Politica de Privacidad
                    </NavLink>
                </div>
            </div>
        </footer>
    );
};
