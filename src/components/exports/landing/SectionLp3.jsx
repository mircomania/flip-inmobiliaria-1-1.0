import styles from '../../../styles/modules/landing/sectionLp3.module.css';
import { Comentarios } from '../../utils/Comentarios';

export const SectionLp3 = () => {
    const coments = [...Comentarios, ...Comentarios, ...Comentarios];

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.slider}>
                <div className={styles.track}>
                    {coments.map((comentario, i) => (
                        <div key={i} className={styles.comentario}>
                            <img src={comentario.img} alt={comentario.nombre} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
