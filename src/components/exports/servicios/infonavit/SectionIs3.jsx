import styles from '../../../../styles/modules/servicios/infonavit/sectionIs3.module.css';

import { ListaServiciosInfonavit } from '../../../utils/ListaServiciosInfonavit';

export const SectionIs3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2 className="formula-bold">¿Quiénes pueden recuperar su ahorro?</h2>
            </header>

            <div className={styles.sectionContenido}>
                {ListaServiciosInfonavit.map((item) => (
                    <div key={item.id} className={styles.listasContainer}>
                        <img src={item.img} alt={item.alt} />

                        <div className={styles.lista}>
                            <h4 className="alliance-text">{item.titulo}</h4>

                            <ul className="alliance-text">
                                {item.lista.map((lista) => (
                                    <li key={lista.id}>{lista.texto}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
