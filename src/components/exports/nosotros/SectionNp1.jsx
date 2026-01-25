import styles from '../../../styles/modules/nosotros/sectionNp1.module.css';

import logo from '../../../assets/images/global/logo.png';

import { useBackVideo } from '../../../hooks/UseBackVideo';

export const SectionNp1 = () => {
    const videoRef = useBackVideo(0.7);

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <video
                    ref={videoRef}
                    className={`${styles.videoBackground} fade-in-background`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/flip-inmobiliaria-1-1.0/videos/poster-nosotros.jpg"
                >
                    <source src="/flip-inmobiliaria-1-1.0/videos/video-nosotros.mp4" type="video/mp4" />
                </video>

                <img src={logo} alt="logotipo de Flip Inmobiliaria" />

                <div className={`${styles.sectionTexto} alliance-text`}>
                    <p>Contamos con experiencia en compra y venta de inmuebles, gestion de créditos infonavit y proyectos de remodelación.</p>

                    <p>Nuestro proceso prioriza la transparencia, tiempos reducidos y atención personalizada.</p>
                </div>
            </div>
        </section>
    );
};
