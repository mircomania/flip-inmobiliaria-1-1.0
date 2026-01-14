import styles from '../../../../styles/modules/servicios/venta/sectionVs1.module.css';

import img from '../../../../assets/images/servicios/remodela/img-section-rem-1.png';

export const SectionRem1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h1 className="formula-bold">Remodela tu Hogar</h1>
            </header>

            <div className={styles.sectionContenido}>
                <img src={img} alt="Agente de ventas de Flip Inmobiliaria" />

                <div className={`${styles.contenidoTexto} alliance-text`}>
                    <p>Transforma tu vivienda en el espacio que siempre has soñado, con apoyo profesional y optimización de valor.</p>
                </div>
            </div>

            <h2 className="formula-bold">¿Que ofrecemos?</h2>
        </section>
    );
};
