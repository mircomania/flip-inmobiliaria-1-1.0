import styles from '../../../../styles/modules/servicios/compra/sectionCs1.module.css';

import img from '../../../../assets/images/img-section-cs-1.png';

export const SectionCs1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h1 className="formula-bold">Compra un Inmueble</h1>
            </header>

            <div className={styles.sectionContenido}>
                <img src={img} alt="Agente de ventas de Flip Inmobiliaria" />

                <p className="alliance-text">
                    Comprar un inmueble es una inversión importante. En Flip Inmobiliaria ofrecemos una amplia variedad de propiedades —apartamentos,
                    casas y terrenos— para que encuentres la que mejor se ajuste a tus necesidades y presupuesto. Te asesoramos en zonas, precios de
                    mercado y opciones de financiamiento para que tomes una decisión informada y libre de estrés.
                </p>
            </div>
        </section>
    );
};
