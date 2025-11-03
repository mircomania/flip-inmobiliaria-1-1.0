import logoFooter from '../../assets/images/logo.png';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

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

    return (
        <footer className="footer">
            <a href="/" aria-label="Ir a la página de inicio" data-link="footer-logo-btn" onClick={handleLogoClick}>
                <img src={logoFooter} alt="Logotipo de Method Lab en el pie de página" />
            </a>

            <NavLink className="alliance-text" to="/politica-privacidad" title="Ver la política de privacidad" data-link="footer-politica-link">
                Política de privacidad
            </NavLink>
        </footer>
    );
};
