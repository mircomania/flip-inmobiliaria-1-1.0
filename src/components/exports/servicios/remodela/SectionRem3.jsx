import styles from '../../../../styles/modules/servicios/venta/sectionVs3.module.css';

import img from '../../../../assets/images/servicios/remodela/img-section-rem-3.png';

import { BotonNav } from '../../../utils/BotonNav';

export const SectionRem3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <header>
                    <h2 className="formula-bold">¿Listo para transformar tu hogar?</h2>
                </header>

                <div className={styles.contenido}>
                    <div className={styles.contenidoTexto}>
                        <p className="alliance-text">
                            Contáctanos y recibe una propuesta sin compromiso. Evaluamos tu casa, definimos mejoras y te mostramos el valor añadido.
                        </p>

                        <BotonNav className="boton-2" dataCta="venta-btn-1">
                            Solicitar evaluación
                        </BotonNav>
                    </div>

                    <img src={img} alt="Agente de ventas de Flip Inmobiliaria" />
                </div>
            </div>
        </section>
    );
};
