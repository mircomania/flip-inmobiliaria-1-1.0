import styles from '../../styles/modules/sectionNp2.module.css';

import { ConocenosSectionNp2 } from '../utils/ConocenosSectionNp2';

export const SectionNp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="formula-bold">Conócenos</h2>

                <p className="alliance-text">
                    En Flip Inmobiliaria nos dedicamos a la compra, remodelación y venta de inmuebles. Transformamos propiedades con potencial en
                    hogares modernos, funcionales y de alto valor.
                </p>
            </header>

            <div className={styles.conocenosContainer}>
                {ConocenosSectionNp2.map((i) => (
                    <div key={i.id} className={styles.conocenos}>
                        <h3 className="alliance-text">{i.titulo}</h3>

                        <p className="alliance-text">{i.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
