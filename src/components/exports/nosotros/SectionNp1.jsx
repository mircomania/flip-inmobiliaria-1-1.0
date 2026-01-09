import styles from '../../../styles/modules/nosotros/sectionNp1.module.css';

import logo from '../../../assets/images/logo.png';

export const SectionNp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <img src={logo} alt="logotipo de Flip Inmobiliaria" />

                <div className={`${styles.sectionTexto} alliance-text`}>
                    <p>Contamos con experiencia en compra y venta de inmuebles, gestion de créditos infonavit y proyectos de remodelación.</p>

                    <p>Nuestro proceso prioriza la transparencia, tiempos reducidos y atención personalizada.</p>
                </div>
            </div>
        </section>
    );
};
