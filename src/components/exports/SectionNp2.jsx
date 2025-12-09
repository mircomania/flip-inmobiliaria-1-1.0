import styles from '../../styles/modules/sectionNp2.module.css';
import { ConocenosSectionNp2 } from '../utils/ConocenosSectionNp2';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Counter } from '../utils/Counter';

export const SectionNp2 = () => {
    return (
        <section className={styles.sectionContainer}>
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
