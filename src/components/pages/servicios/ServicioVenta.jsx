import { TitleSEO } from '../../utils/TitleSEO';

import { SectionVs1 } from '../../exports/servicios/venta/SectionVs1';

const ServicioVenta = () => {
    return (
        <main>
            <TitleSEO
                title="Vender Casa Rápido | Flip Inmobiliaria"
                description="Vende tu propiedad de forma rápida y segura. En Flip Inmobiliaria te ayudamos a encontrar compradores y maximizar el valor de tu inmueble."
                canonical="https://flipinmobiliaria.com.mx/vender"
            />

            <SectionVs1 />
        </main>
    );
};

export default ServicioVenta;
