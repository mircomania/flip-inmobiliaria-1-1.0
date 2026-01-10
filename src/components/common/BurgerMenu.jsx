import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { BurgerIcon } from '../../assets/icons/BurgerIcon';

import logo from '../../assets/images/global/logo.png';

import { navLinks } from '../utils/NavBarMenu';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const menuRef = useRef(null);

    /* ABRIR Y CERRAR MENU PRINCIPAL */
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    /* ABRIR Y CERRAR SUB MENU */
    const toggleSubmenu = (id) => {
        setOpenSubmenu(openSubmenu === id ? null : id);
    };

    /* CERRAR MENU SI SE CLIQUEA FUERA */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    /* BLOQUEAR EL SCROLL DEL BODY */
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className="burger-menu" ref={menuRef}>
            {/* ICONO */}
            <div className={`burger-menu-container ${isOpen ? 'open' : ''}`}>
                <BurgerIcon onClick={toggleMenu} className="burger-menu-icon" aria-label="Abrir menú" />
            </div>

            {/* CONTENEDOR MENU */}
            <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
                {/* MENUS  */}
                <ul className="burger-menu-nav alliance-text">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            {item.children ? (
                                /* SUB MENU */
                                <>
                                    <button className="submenu-trigger" onClick={() => toggleSubmenu(item.id)}>
                                        {item.label}
                                    </button>

                                    <ul className={`submenu ${openSubmenu === item.id ? 'open' : ''}`}>
                                        <li className="submenu-inner">
                                            {item.children.map((child) => (
                                                <NavLink key={child.id} to={child.to} onClick={toggleMenu}>
                                                    {child.label}
                                                </NavLink>
                                            ))}
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                /* MAIN MENU */
                                <NavLink to={item.to} onClick={toggleMenu}>
                                    {item.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* LOGO  */}
                <img src={logo} alt="Logotipo de Flip Inmobiliaria" loading="lazy" decoding="async" />
            </div>
        </div>
    );
};
