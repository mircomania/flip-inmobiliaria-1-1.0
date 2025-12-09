import { useEffect, useState } from 'react';

export const Counter = ({ end, duration, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [end, duration, isVisible]);

    return <span>{count.toLocaleString()}</span>;
};
