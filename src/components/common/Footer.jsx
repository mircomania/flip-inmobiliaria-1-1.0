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

    return (
        <footer className="footer">
            <div className="contenido-footer">
                <a href="/" aria-label="Ir a la página de inicio" data-link="footer-logo-btn" onClick={handleLogoClick}>
                    <img src={logoFooter} alt="Logotipo de Flip Inmobiliaria en el pie de página" />
                </a>

                <div className="nav-footer">
                    <ul className="alliance-text">
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.to}
                                    title={item.title}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    {...(item.dataLink && { 'data-link': item.dataLink })}
                                    {...(item.dataCta && { 'data-cta': item.dataCta })}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="utils-footer alliance-text">
                <p>All right reserved.</p>

                <div className="utils-nav">
                    <NavLink to="/politica-privacidad" title="Ver la política de privacidad" data-link="footer-politica-link">
                        Politica de Privacidad
                    </NavLink>

                    <NavLink to="/terminos-condiciones" title="Ver los términos y condiciones" data-link="footer-terminos-link">
                        Terminos y Condiciones
                    </NavLink>

                    <NavLink to="/faq" title="Ver las preguntas preguntas frecuentes" data-link="footer-faq-link">
                        FAQ
                    </NavLink>
                </div>
            </div>
        </footer>
    );
};
