import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    light?: boolean;
    className?: string;
}

export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'left',
    light = false,
    className = '',
}: SectionHeadingProps) {
    const ref = useScrollReveal<HTMLDivElement>();
    const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
    const titleColor = light ? 'text-white' : 'text-gray-900';
    const subtitleColor = light ? 'text-white/70' : 'text-gray-600';

    return (
        <div
            ref={ref}
            className={`reveal flex flex-col ${alignClass} gap-4 ${className}`}
        >
            {eyebrow && (
                <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
                    <span className={light ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</span>
                    <span className="h-px w-8 bg-gradient-to-r from-[#168DE2] to-transparent" />
                </div>
            )}
            <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-balance ${titleColor}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${subtitleColor} text-pretty`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
