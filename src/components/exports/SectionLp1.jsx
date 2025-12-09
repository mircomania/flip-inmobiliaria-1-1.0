import styles from '../../styles/modules/sectionLp1.module.css';

import { BotonNav } from '../utils/BotonNav';

import { useBackVideo } from '../../hooks/UseBackVideo';

export const SectionLp1 = () => {
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
                    poster="/flip-inmobiliaria-1-1.0/videos/poster-home.jpg"
                >
                    <source src="/flip-inmobiliaria-1-1.0/videos/video-home.webm" type="video/webm" />
                    <source src="/flip-inmobiliaria-1-1.0/videos/video-home.mp4" type="video/mp4" />
                </video>

                <header>
                    <h1 className="formula-bold">
                        Compra, remodela <br /> y vende tu casa <br /> con asesoría <br /> profesional
                    </h1>
                </header>

                <div className={styles.contenido}>
                    <p className="alliance-text">
                        En Flip Inmobiliaria ayudamos a liberar tu ahorro Infonavit, comprar propiedades con o sin adeudo y transformar inmuebles para
                        su venta o renta. Atención personalizada y procesos claros
                    </p>

                    <BotonNav dataCta="inicio-1-btn">Contáctanos Ahora</BotonNav>
                </div>
            </div>
        </section>
    );
};
