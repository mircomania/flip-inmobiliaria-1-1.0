import { TitleSEO } from '../../utils/TitleSEO';

import { SectionCs1 } from '../../exports/servicios/compra/SectionCs1';

const ServicioCompra = () => {
    return (
        <main>
            <TitleSEO
                title="Comprar Casas | Flip Inmobiliaria"
                description="Encuentra la casa ideal para ti. Te ayudamos a comprar propiedades en México con asesoría profesional, opciones a tu medida y apoyo en financiamiento."
                canonical="https://flipinmobiliaria.com.mx/comprar"
            />

            <SectionCs1 />
        </main>
    );
};

export default ServicioCompra;
