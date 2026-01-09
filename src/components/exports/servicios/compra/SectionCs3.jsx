import styles from '../../../../styles/modules/servicios/compra/sectionCs3.module.css';

import { Form } from '../../../form/Form';

export const SectionCs3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2 className="formula-bold">¿Buscas alguna propiedad?</h2>

                <p className="alliance-text">Rellena el formulario </p>
            </header>

            <div className={styles.sectionForm}>
                <Form />
            </div>
        </section>
    );
};
