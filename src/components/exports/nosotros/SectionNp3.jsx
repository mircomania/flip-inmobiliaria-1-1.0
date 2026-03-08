import styles from '../../../styles/modules/nosotros/sectionNp3.module.css';

import img from '../../../assets/images/global/equipo-flip.png';

export const SectionNp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <div>
                    <h2 className="formula-bold">Nuestra Misión</h2>

                    <p className="alliance-text">
                        Proporcionar servicios inmobiliarios de alta calidad, brindando soluciones integrales y personalizadas a nuestros clientes,
                        con un enfoque en la excelencia en el servicio al cliente y la satisfacción del mismo.
                    </p>
                </div>

                <div>
                    <h2 className="formula-bold">Nuestra Visión</h2>

                    <p className="alliance-text">
                        Ser una empresa líder en el mercado inmobiliario, reconocida por su excelencia en el servicio al cliente, la innovación y la
                        calidad de sus servicios.
                    </p>
                </div>
            </div>

            <img src={img} alt="Personal de ventas de Flip inmobiliaria trabajando para darte el mejor servicio" loading="lazy" decoding="async" />
        </section>
    );
};
