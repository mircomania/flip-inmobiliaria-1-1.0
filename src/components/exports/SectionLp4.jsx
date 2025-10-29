import styles from '../../styles/modules/sectionLp4.module.css';

import { Form } from '../form/Form';

export const SectionLp4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitle}>
                <h2 className="formula-bold">Contáctanos</h2>

                <p className="alliance-text">Estamos listos para ayudarte con la compra o venta de tu inmueble</p>
            </header>

            <div className={styles.sectionForm}>
                <Form />
            </div>
        </section>
    );
};
