import styles from '../../../../styles/modules/servicios/renta/sectionRen3.module.css';

import img from '../../../../assets/images/servicios/renta/img-section-ren-3.png';

export const SectionRen3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2 className="formula-bold">¿Por qué elegir Flip Inmobiliaria?</h2>
            </header>

            <div className={styles.sectionContenido}>
                <img src={img} alt="Agente de ventas de Flip Inmobiliaria" />

                <div className={styles.sectionTexto}>
                    <ul className="alliance-text">
                        <li>Generamos ingresos pasivos con seguridad.</li>
                        <li>Proceso integral: difusión, selección, contrato y mantenimiento.</li>
                        <li>Atención local en Monterrey y seguimiento personalizado. </li>
                    </ul>

                    <div className={`${styles.textoHorarios} alliance-text`}>
                        <h3>Horario:</h3>

                        <p>Lunes - Viernes </p>

                        <p>9:00 am - 6:00 pm</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
