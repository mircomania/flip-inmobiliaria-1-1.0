import styles from '../../../../styles/modules/servicios/infonavit/sectionis1.module.css';

import img from '../../../../assets/images/servicios/infonavit/img-section-is-1.png';

export const SectionIs1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h1 className="formula-bold">Recupera el dinero que acumulaste en tu Subcuenta de Vivienda.</h1>
            </header>

            <div className={styles.sectionContenido}>
                <img src={img} alt="Agente de ventas de Flip Inmobiliaria" />

                <div className={`${styles.contenidoTexto} alliance-text`}>
                    <p>Si ya no cuentas con un crédito activo y tu dinero sigue en Infonavit, puedes solicitar la devolución de tu ahorro.</p>

                    <p>En Flip Inmobiliaria te acompañamos durante todo el proceso para que recuperes lo que es tuyo de forma rápida y segura </p>
                </div>
            </div>
        </section>
    );
};
