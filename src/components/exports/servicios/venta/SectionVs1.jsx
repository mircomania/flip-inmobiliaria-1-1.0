import styles from '../../../../styles/modules/servicios/venta/sectionVs1.module.css';

import img from '../../../../assets/images/servicios/venta/img-section-vs-1.png';

export const SectionVs1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h1 className="formula-bold">Vende tu Casa</h1>
            </header>

            <div className={styles.sectionContenido}>
                <img src={img} alt="Agente de ventas de Flip Inmobiliaria" />

                <div className={`${styles.contenidoTexto} alliance-text`}>
                    <p>Transforma tu propiedad en liquidez rápida, segura y sin complicaciones.</p>

                    <p>Nosotros nos encargamos de todo el proceso.</p>
                </div>
            </div>

            <h2 className="formula-bold">¿Por qué vender con nosotros?</h2>
        </section>
    );
};
