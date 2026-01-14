import styles from '../../../../styles/modules/servicios/venta/sectionVs1.module.css';

import img from '../../../../assets/images/servicios/renta/img-section-ren-1.png';

export const SectionRen1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h1 className="formula-bold">Renta tu propiedad</h1>
            </header>

            <div className={styles.sectionContenido}>
                <img src={img} alt="Agente de ventas de Flip Inmobiliaria" />

                <div className={`${styles.contenidoTexto} alliance-text`}>
                    <p>Genera ingresos pasivos con la tranquilidad de que tu inmueble esta en buenas manos.</p>
                </div>
            </div>

            <h2 className="formula-bold">Alquila tu propiedad de forma segura y confiable</h2>
        </section>
    );
};
