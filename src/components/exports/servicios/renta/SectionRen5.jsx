import styles from '../../../../styles/modules/servicios/compra/sectionCs3.module.css';

import { Form } from '../../../form/Form';

export const SectionRen5 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2 className="formula-bold">Contáctanos</h2>

                <p className="alliance-text">Rellena el formulario y uno de nuestros asesores te contactará para evaluar tu propiedad</p>
            </header>

            <div className={styles.sectionForm}>
                <Form />
            </div>
        </section>
    );
};
