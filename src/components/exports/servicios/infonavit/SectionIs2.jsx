import styles from '../../../../styles/modules/servicios/infonavit/sectionIs2.module.css';

import { CatServiciosInfonavit } from '../../../utils/CatServiciosInfonavit';

export const SectionIs2 = () => {
    return (
        <section className={styles.sectionContainer}>
            {CatServiciosInfonavit.map((servicio) => (
                <div key={servicio.id} className={`${styles.servicio} alliance-text`}>
                    <h3>{servicio.titulo}</h3>

                    <p>{servicio.texto}</p>
                </div>
            ))}
        </section>
    );
};
