import { useEffect, useRef } from 'react';

/**
 * Hook that reveals elements when they enter the viewport.
 * Returns a ref to attach to the target element.
 * Respects prefers-reduced-motion.
 */
export interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: ScrollRevealOptions) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            el.classList.add('revealed');
            el.querySelectorAll('.reveal, .reveal-slide-left, .reveal-slide-right, .reveal-card, .reveal-stagger, .reveal-stagger-cards').forEach(
                (child) => child.classList.add('revealed')
            );
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        // Propagate revealed class to direct reveal children if any
                        entry.target.querySelectorAll('.reveal, .reveal-slide-left, .reveal-slide-right, .reveal-card, .reveal-stagger, .reveal-stagger-cards').forEach(
                            (child) => child.classList.add('revealed')
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: options?.threshold ?? 0.08,
                rootMargin: options?.rootMargin ?? '0px 0px -40px 0px',
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [options?.threshold, options?.rootMargin]);

    return ref;
}
