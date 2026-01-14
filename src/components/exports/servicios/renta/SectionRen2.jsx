import styles from '../../../../styles/modules/servicios/venta/sectionVs2.module.css';

import img from '../../../../assets/images/servicios/renta/img-section-ren-2.png';

import { useMediaQuery } from '../../../../hooks/UseMediaQuery';

import { CatServiciosRenta } from '../../../utils/CatServiciosRenta';

export const SectionRen2 = () => {
    const isMobile = useMediaQuery('(max-width: 1199px)');

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                {!isMobile && <img src={img} alt="Agente de ventas de Flip Inmobiliaria" className={styles.imgWeb} />}

                <div className={styles.serviciosContainer}>
                    {CatServiciosRenta.map((servicio) => (
                        <div key={servicio.id} className={styles.servicio}>
                            <img src={servicio.img} alt={servicio.titulo} className={styles.servicioImg} />

                            <div className={styles.serviciosTextos}>
                                <h3 className="alliance-text">{servicio.titulo}</h3>
                                <p className="alliance-text">{servicio.texto}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
