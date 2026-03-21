import { TitleSEO } from '../../utils/TitleSEO';

import { SectionRem1 } from '../../exports/servicios/remodela/SectionRem1';

const ServicioRemodelar = () => {
    return (
        <main>
            <TitleSEO
                title="Remodelación de Casas | Flip Inmobiliaria"
                description="Aumenta el valor de tu propiedad con nuestros servicios de remodelación. Diseñamos y mejoramos espacios para venta, renta o uso personal."
                canonical="https://flipinmobiliaria.com.mx/remodelar"
            />

            <SectionRem1 />
        </main>
    );
};

export default ServicioRemodelar;
