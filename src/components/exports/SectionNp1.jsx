import styles from '../../styles/modules/sectionNp1.module.css';

import logo from '../../assets/images/logo.png';

export const SectionNp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <img src={logo} alt="logotipo de Flip Inmobiliaria" />

                {/* FONDO ANIMADO */}
                <div className={`${styles.bg} ${styles.bg1}`}></div>
            </div>
        </section>
    );
};
