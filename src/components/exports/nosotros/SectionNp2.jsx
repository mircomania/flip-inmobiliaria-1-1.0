import styles from '../../../styles/modules/nosotros/sectionNp2.module.css';

import { ConocenosSectionNp2 } from '../../utils/ConocenosSectionNp2';
import { Counter } from '../../utils/Counter';

import { useScrollReveal } from '../../../hooks/useScrollReveal';

export const SectionNp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2 className="formula-bold">trayectoria </h2>
            </header>

            <div className={styles.sectionContenido}>
                {ConocenosSectionNp2.map((item) => {
                    const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });
                    return (
                        <div key={item.id} ref={ref} className={styles.sectionTexto}>
                            <h3 className="alliance-text">{item.titulo}</h3>

                            <p className="alliance-text">
                                <Counter end={Number(item.texto)} duration={1200} isVisible={isVisible} />
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
