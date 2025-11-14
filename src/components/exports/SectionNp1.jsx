import styles from '../../styles/modules/sectionNp1.module.css';
import logo from '../../assets/images/logo.png';

import { useBackVideo } from '../../hooks/UseBackVideo';

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
                    <source src="/flip-inmobiliaria-1-1.0/videos/video-nosotros.webm" type="video/webm" />
                    <source src="/flip-inmobiliaria-1-1.0/videos/video-nosotros.mp4" type="video/mp4" />
                </video>

                <img src={logo} alt="logotipo de Flip Inmobiliaria" />
            </div>
        </section>
    );
};
