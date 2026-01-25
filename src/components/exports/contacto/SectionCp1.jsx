import styles from '../../../styles/modules/contacto/sectionCp1.module.css';
import img from '../../../assets/images/landing/img-lp-section-3-1.png';

import { Form } from '../../form/Form';

import { useMediaQuery } from '../../../hooks/UseMediaQuery';

export const SectionCp1 = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <section className={styles.sectionContainer}>
            <header>
                <h1 className="formula-bold">Contáctanos</h1>

                <h2 className="alliance-text">¡Tu nuevo hogar te espera en Flip Inmobiliaria!</h2>

                <p className="alliance-text">Contáctanos para recibir asesoria personalizada y encontrar las mejores opciones del mercado.</p>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.sectionForm}>
                    <Form />
                </div>

                {!isMobile && <img src={img} alt="Un agente de Flip Inmobiliaria asesorando una familia" loading="lazy" decoding="async" />}
            </div>
        </section>
    );
};
