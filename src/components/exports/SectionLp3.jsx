import styles from '../../styles/modules/sectionLp3.module.css';

import img1 from '../../assets/images/img-lp-section-3-1.png';
import img2 from '../../assets/images/img-lp-section-3-2.png';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2 className="formula-bold">Sobre Flip Inmobiliaria</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.contenido1}>
                    <p className="alliance-text">
                        Nuestra misión: Facilitar decisiones claras y rentables en bienes raíces para familias e inversores en Monterrey.
                    </p>

                    <img src={img1} alt="Una casa sobre una mano que tiene una llave en sus dedos" loading="lazy" decoding="async" />
                </div>

                <div className={styles.contenido2}>
                    <p className="alliance-text">
                        Contamos con experiencia en compra y venta de inmuebles, gestión de créditos Infonavit y proyectos de remodelación.
                    </p>

                    <img src={img2} alt="Un agente de Flip Inmobiliaria asesorando una familia" loading="lazy" decoding="async" />

                    <p className="alliance-text">Nuestro proceso prioriza la transparencia, tiempos reducidos y atención personalizada.</p>
                </div>
            </div>
        </section>
    );
};
