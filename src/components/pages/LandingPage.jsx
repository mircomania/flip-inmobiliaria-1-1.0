import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SectionLp1 } from '../exports/landing/SectionLp1';
import { SectionLp2 } from '../exports/landing/SectionLp2';
import { SectionLp3 } from '../exports/landing/SectionLp3';
import { SectionLp4 } from '../exports/landing/SectionLp4';

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

            <SectionLp3 />

            <SectionLp4 />
        </main>
    );
};

export default LandingPage;
