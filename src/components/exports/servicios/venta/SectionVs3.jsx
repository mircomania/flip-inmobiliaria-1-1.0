import styles from '../../../../styles/modules/servicios/venta/sectionVs3.module.css';

import img from '../../../../assets/images/servicios/venta/img-section-vs-3.png';

import { BotonNav } from '../../../utils/BotonNav';

export const SectionVs3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <header>
                    <h2 className="formula-bold">¿Listo para vender tu casa?</h2>
                </header>

                <div className={styles.contenido}>
                    <div className={styles.contenidoTexto}>
                        <p className="alliance-text">Completa el formulario y recibe una oferta personalizada en menos de 48 horas. </p>

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
