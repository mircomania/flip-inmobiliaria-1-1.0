import styles from '../../styles/modules/sectionLp2.module.css';

import { serviciosSectionLp2 } from '../utils/ServiciosSectionLp2';

import { NavLink } from 'react-router-dom';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <header>
                    <h2 className="formula-bold">Nuestros servicios</h2>
                </header>

                <div className={styles.serviciosContainer}>
                    {serviciosSectionLp2.map((servicio) => (
                        <NavLink key={servicio.id} className={styles.servicio}>
                            <h3 className="alliance-text">{servicio.titulo}</h3>

                            <p className="alliance-text">{servicio.texto}</p>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};
