import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
    end: number;
    duration?: number;
    start?: number;
}

/**
 * Animates a number from start to end when the element enters the viewport.
 * Respects prefers-reduced-motion.
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>({
    end,
    duration = 2000,
    start = 0,
}: UseCountUpOptions) {
    const ref = useRef<T>(null);
    const [count, setCount] = useState(start);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            setCount(end);
            setHasAnimated(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        const startTime = performance.now();

                        const animate = (currentTime: number) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const eased = 1 - Math.pow(1 - progress, 3);
                            setCount(Math.floor(start + (end - start) * eased));

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                setCount(end);
                            }
                        };

                        requestAnimationFrame(animate);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [end, duration, start, hasAnimated]);

    return { ref, count };
}
