import styles from '../../styles/modules/sectionLp4.module.css';

import img from '../../assets/images/img-lp-section-3-2.png';

import { Form } from '../form/Form';

import { useMediaQuery } from '../../hooks/UseMediaQuery';

export const SectionLp4 = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.fondo}>
                <header className={styles.sectionTitle}>
                    <h2 className="formula-bold">Contáctanos</h2>

                    <p className="alliance-text">Estamos listos para ayudarte con la compra o venta de tu inmueble</p>
                </header>

                <div className={styles.sectionContenido}>
                    <div className={styles.sectionForm}>
                        <Form />
                    </div>

                    {!isMobile && <img src={img} alt="Un agente de Flip Inmobiliaria asesorando una familia" loading="lazy" decoding="async" />}
                </div>
            </div>
        </section>
    );
};
