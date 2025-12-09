import styles from '../../styles/modules/sectionNp4.module.css';
import img from '../../assets/images/img-np-section-3-2.png';

import { BotonNav } from '../utils/BotonNav';

export const SectionNp4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <header>
                    <h2 className="formula-bold">Nuestra Visión</h2>
                </header>

                <div className={styles.sectionTexto}>
                    <p className="alliance-text">
                        Ser una empresa lider en el mercado inmobiliario, reconocida por su execelencia en el servicio al cliente, la innovación y la
                        calidad de sus servicios.
                    </p>

                    <img
                        src={img}
                        alt="Personal de ventas de Flip inmobiliaria trabajando para darte el mejor servicio"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <BotonNav dataCta="nosotros-1-btn">Contáctanos</BotonNav>
            </div>
        </section>
    );
};
