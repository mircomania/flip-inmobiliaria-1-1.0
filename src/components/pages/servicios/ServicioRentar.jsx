import { TitleSEO } from '../../utils/TitleSEO';

import { SectionRen1 } from '../../exports/servicios/renta/SectionRen1';

const ServicioRentar = () => {
    return (
        <main>
            <TitleSEO
                title="Rentar Casa | Flip Inmobiliaria"
                description="Encuentra casas en renta o publica tu propiedad con nosotros. Gestión eficiente y asesoría profesional para arrendadores e inquilinos."
                canonical="https://flipinmobiliaria.com.mx/rentar"
            />

            <SectionRen1 />
        </main>
    );
};

export default ServicioRentar;
