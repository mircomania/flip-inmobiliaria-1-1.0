import styles from '../../../../styles/modules/servicios/compra/sectionCs2.module.css';

import { CatServiciosCompra } from '../../../utils/CatServiciosCompra';

export const SectionCs2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2 className="formula-bold">¿Por qué elegir Flip Inmobiliaria?</h2>
            </header>

            <div className={styles.serviciosContainer}>
                {CatServiciosCompra.map((servicio) => (
                    <div key={servicio.id} className={styles.servicio}>
                        <h3 className="alliance-text">{servicio.titulo}</h3>

                        <p className="alliance-text">{servicio.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
