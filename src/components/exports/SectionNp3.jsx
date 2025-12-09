import styles from '../../styles/modules/sectionNp3.module.css';
import img from '../../assets/images/img-np-section-3-1.png';

export const SectionNp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <header>
                    <h2 className="formula-bold">Nuestra Misión</h2>
                </header>

                <div className={styles.sectionTexto}>
                    <p className="alliance-text">
                        Proporcionar servicios inmobiliarios de alta calidad, brindando soluciones integrales y personalizadas a nuestros clientes,
                        con un enfoque en la excelencia en el servicio al cliente y la satisfacción del mismo.
                    </p>

                    <img
                        src={img}
                        alt="Personal de ventas de Flip inmobiliaria trabajando para darte el mejor servicio"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
};
