import { TitleSEO } from '../utils/TitleSEO';

import { SectionCp1 } from '../exports/contacto/SectionCp1';
import { SectionCp2 } from '../exports/contacto/SectionCp2';
import { SectionCp3 } from '../exports/contacto/SectionCp3';

const ContactoPage = () => {
    return (
        <main>
            <TitleSEO
                title="Contacto | Flip Inmobiliaria"
                description="Contáctanos para recibir asesoría personalizada en compra, venta, renta o remodelación de propiedades. Estamos listos para ayudarte en cada paso."
                canonical="https://flipinmobiliaria.com.mx/contacto"
            />

            <SectionCp1 />

            <SectionCp2 />

            <SectionCp3 />
        </main>
    );
};

export default ContactoPage;
