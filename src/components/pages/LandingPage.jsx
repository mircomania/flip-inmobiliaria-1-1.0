import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SectionLp1 } from '../exports/SectionLp1';
import { SectionLp2 } from '../exports/SectionLp2';
import { SectionLp4 } from '../exports/SectionLp4';
import { SectionLp5 } from '../exports/SectionLp5';

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const offsetTop = element.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    return (
        <main>
            <SectionLp1 />

            <SectionLp2 />

            <SectionLp5 />

            <SectionLp4 />
        </main>
    );
};

export default LandingPage;
