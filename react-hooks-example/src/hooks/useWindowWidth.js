import { useState, useEffect } from "react";

export default function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', resize);

        return () => {
            // 클린업
            window.removeEventListener('resize', resize);
        }
    }, []);

    return width;
}