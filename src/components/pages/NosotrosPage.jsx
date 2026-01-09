import { SectionNp1 } from '../exports/nosotros/SectionNp1';
import { SectionNp2 } from '../exports/nosotros/SectionNp2';
import { SectionNp3 } from '../exports/nosotros/SectionNp3';
import { SectionNp4 } from '../exports/nosotros/SectionNp4';

const NosotrosPage = () => {
    return (
        <main>
            <SectionNp1 />

            <section className="fondo-degradado">
                <SectionNp2 />

                <SectionNp3 />

                <SectionNp4 />
            </section>
        </main>
    );
};

export default NosotrosPage;
