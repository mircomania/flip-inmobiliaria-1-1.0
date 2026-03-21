import { TitleSEO } from '../utils/TitleSEO';

import { SectionNp1 } from '../exports/nosotros/SectionNp1';
import { SectionNp2 } from '../exports/nosotros/SectionNp2';
import { SectionNp3 } from '../exports/nosotros/SectionNp3';

const NosotrosPage = () => {
    return (
        <main>
            <TitleSEO
                title="Nosotros | Flip Inmobiliaria"
                description="Conoce a Flip Inmobiliaria, expertos en el mercado inmobiliario en México. Nuestro equipo te acompaña en compra, venta, renta y mejora de tu propiedad."
                canonical="https://flipinmobiliaria.com.mx/nosotros"
            />

            <SectionNp1 />

            <section className="fondo-degradado">
                <SectionNp2 />

                <SectionNp3 />
            </section>
        </main>
    );
};

export default NosotrosPage;
