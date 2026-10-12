import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface StatCardProps {
    value: string;
    suffix: string;
    label: string;
    isNumber: boolean;
    index: number;
}

export default function StatCard({ value, suffix, label, isNumber }: StatCardProps) {
    const revealRef = useScrollReveal<HTMLDivElement>();

    if (!isNumber) {
        return (
            <div ref={revealRef} className="reveal flex flex-col items-center text-center px-4">
                <span className="font-display font-bold text-3xl md:text-4xl lg:text-[40px] text-white leading-none">
                    {suffix}
                </span>
                <span className="mt-3 text-[13px] text-white/60 leading-snug max-w-[180px]">{label}</span>
            </div>
        );
    }

    const endValue = parseInt(value, 10);
    const { ref, count } = useCountUp<HTMLDivElement>({ end: endValue, duration: 2200 });

    return (
        <div
            ref={(el) => {
                (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
                (revealRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
            }}
            className="reveal flex flex-col items-center text-center px-4"
        >
            <span className="font-display font-bold text-3xl md:text-4xl lg:text-[40px] text-white leading-none tabular-nums">
                {count}
                {suffix}
            </span>
            <span className="mt-3 text-[13px] text-white/60 leading-snug max-w-[200px]">{label}</span>
        </div>
    );
}
