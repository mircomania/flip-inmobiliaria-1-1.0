import styles from '../../styles/modules/sectionLp1.module.css';

import { BotonNav } from '../utils/BotonNav';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <header>
                    <h1 className="formula-bold">
                        Compra, remodela <br /> y vende tu casa <br /> con asesoría <br /> profesional
                    </h1>
                </header>

                <div className={styles.contenido}>
                    <p className="alliance-text">
                        En Flip Inmobiliaria ayudamos a liberar tu ahorro Infonavit, comprar propiedades con o sin adeudo y transformar inmuebles para
                        su venta o renta. Atención personalizada y procesos claros
                    </p>

                    <BotonNav dataCta="inicio-1-btn"> Contáctanos Ahora</BotonNav>
                </div>
            </div>
        </section>
    );
};
