import styles from '../../styles/modules/sectionCp2.module.css';

import { ContactoDatos } from '../utils/ContactoDatos';

export const SectionCp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            {ContactoDatos.map((data) => (
                <div key={data.id} className={styles.data}>
                    <picture>
                        <source media="(min-width: 1200px)" srcSet={data.img2} />
                        <img src={data.img1} alt={data.titulo} />
                    </picture>

                    <div className={styles.dataTexto}>
                        <h2 className="formula-bold">{data.titulo}</h2>
                        <p className="alliance-text">{data.texto}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};
