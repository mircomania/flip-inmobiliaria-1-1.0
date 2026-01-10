import styles from '../../../styles/modules/landing/sectionLp2.module.css';

import { Servicios } from '../../utils/Servicios';

import { NavLink } from 'react-router-dom';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <header>
                    <h2 className="formula-bold">Nuestros servicios</h2>
                </header>

                <div className={styles.serviciosContainer}>
                    {Servicios.map((servicio) => (
                        <NavLink
                            key={servicio.id}
                            className={styles.servicio}
                            to={servicio.to}
                            {...(servicio.dataLink && { 'data-link': servicio.dataLink })}
                        >
                            <div className={styles.servicioTexto}>
                                <h3 className="alliance-text">{servicio.titulo}</h3>

                                <p className="alliance-text">{servicio.texto}</p>
                            </div>

                            <img src={servicio.img} alt="Agente de ventas de Flip Inmobiliaria" />
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};
