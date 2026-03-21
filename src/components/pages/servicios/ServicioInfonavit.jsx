import { TitleSEO } from '../../utils/TitleSEO';

import { SectionIs1 } from '../../exports/servicios/infonavit/SectionIs1';

const ServicioInfonavit = () => {
    return (
        <main>
            <TitleSEO
                title="Créditos Infonavit | Flip Inmobiliaria"
                description="Te asesoramos para usar tu crédito Infonavit y adquirir tu vivienda. Simplificamos el proceso para que compres tu casa sin complicaciones."
                canonical="https://flipinmobiliaria.com.mx/infonavit"
            />

            <SectionIs1 />
        </main>
    );
};

export default ServicioInfonavit;
