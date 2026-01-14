import styles from '../../../../styles/modules/servicios/venta/sectionVs3.module.css';

import img from '../../../../assets/images/servicios/infonavit/img-section-is-4.png';

import { BotonNav } from '../../../utils/BotonNav';

export const SectionIs4 = () => {
    return (
        <section>
            <div className={`${styles.sectionContenido} ${styles.sectionContenido2}`}>
                <header>
                    <h2 className="formula-bold">Recupera tu dinero sin complicaciones</h2>
                </header>

                <div className={styles.contenido}>
                    <div className={styles.contenidoTexto}>
                        <p className="alliance-text">
                            En Flip Inmobiliaria creemos que tu ahorro debe volver a tus manos. Por eso te acompañamos con trasparencia, asesoria
                            profesional y segumiento constante hasta que recibas tu dinero.{' '}
                        </p>

                        <BotonNav className="boton-2" dataCta="venta-btn-1">
                            Solicita tu devolución
                        </BotonNav>
                    </div>

                    <img src={img} alt="Agente de ventas de Flip Inmobiliaria" />
                </div>
            </div>
        </section>
    );
};
