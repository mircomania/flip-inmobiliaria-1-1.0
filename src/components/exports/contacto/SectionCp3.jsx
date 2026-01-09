import styles from '../../../styles/modules/contacto/sectionCp3.module.css';
import img from '../../../assets/images/img-np-section-3-2.png';

export const SectionCp3 = () => {
    const mapsQuery = encodeURIComponent('Emilio Carranza 732, Centro, 64000 Monterrey, N.L.');
    const iframeSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

    return (
        <section className={styles.sectionContainer}>
            <img src={img} alt="Personal de ventas de Flip inmobiliaria trabajando para darte el mejor servicio" loading="lazy" decoding="async" />

            <header>
                <h2 className="formula-bold">¡En Flip Inmobiliaria siempre estamos cerca de ti!</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div className={`${styles.textoContenido} alliance-text`}>
                    <h3>Horarios de Atención</h3>

                    <p>
                        Lunes a Viernes
                        <br />
                        9:00 a.m. a 6:00 p.m.
                    </p>

                    <p>
                        Sábados
                        <br />
                        9:00 a.m. a 1:00 p.m.
                    </p>

                    <p>Visítanos en nuestra oficina o contáctanos para agendar una cita personalizada.</p>

                    <p>¡Estamos aquí para ayudarte a encontrar el lugar de tus sueños!</p>
                </div>

                <div className={styles.mapContainer} aria-hidden="false" title="Mapa — Flip Inmobiliaria">
                    <iframe
                        src={iframeSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de ubicación de Flip Inmobiliaria"
                    />

                    <p className="alliance-text">
                        <a href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`} target="_blank" rel="noopener noreferrer">
                            Abrir en Google Maps
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};
