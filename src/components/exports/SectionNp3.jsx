import styles from '../../styles/modules/sectionNp3.module.css';

import { Servicios } from '../utils/Servicios';

import { NavLink } from 'react-router-dom';

export const SectionNp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <div className={styles.sectionOficinas}>
                    <h2 className="formula-bold">Nuestras Oficinas</h2>

                    <div className={styles.direccion}>
                        <h3 className="alliance-text">Monterrey</h3>

                        <p className="alliance-text">
                            Emilio Carranza 732, Centro,
                            <br /> 64700 Monterrey, N.L.
                        </p>
                    </div>
                </div>

                <div className={styles.sectionServicios}>
                    <h2 className="formula-bold">Servicios que ofrecemos</h2>

                    <div className={styles.serviciosContainer}>
                        {Servicios.map((servicio) => (
                            <NavLink
                                key={servicio.id}
                                className={styles.servicio}
                                to={servicio.to}
                                {...(servicio.dataLink2 && { 'data-link': servicio.dataLink2 })}
                            >
                                <img src={servicio.icono} alt={servicio.texto} />

                                <h3 className="alliance-text">{servicio.titulo2}</h3>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
