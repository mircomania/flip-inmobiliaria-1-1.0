import styles from '../../../../styles/modules/servicios/renta/sectionRen4.module.css';

import { PasosServiciosRenta } from '../../../utils/PasosServiciosRenta';

export const SectionRen4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2 className="formula-bold">Cómo funciona</h2>
            </header>

            <div className={styles.serviciosContainer}>
                {PasosServiciosRenta.map((servicio) => (
                    <div key={servicio.id} className={`${styles.servicio} alliance-text`}>
                        <h3>{servicio.titulo}</h3>

                        <p>{servicio.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
