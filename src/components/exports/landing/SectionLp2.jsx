import styles from '../../../styles/modules/landing/sectionLp2.module.css';

import { Servicios } from '../../utils/Servicios';

import { BotonNav } from '../../utils/BotonNav';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2 className="formula-bold">Nuestros servicios</h2>
            </header>

            <div className={styles.serviciosContainer}>
                {Servicios.map((servicio) => (
                    <div key={servicio.id} className={styles.servicioWrapper}>
                        <div className={styles.servicio} style={{ '--bg': `url(${servicio.img})` }}>
                            <h3 className="formula-bold">{servicio.titulo}</h3>

                            <p className="alliance-text">{servicio.texto}</p>

                            <BotonNav
                                to={servicio.to}
                                dataLink={servicio.dataLink}
                                ariaLabel={`Ir a la sección de ${servicio.titulo} de Flip Inmobiliaria`}
                                title={`Haz clic para ir a la sección de ${servicio.titulo}`}
                                className="boton-3"
                            >
                                <span className={styles.btnTextDesktop}>{servicio.titulo}</span>
                                <span className={styles.btnTextMobile}>Ver más</span>
                            </BotonNav>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
