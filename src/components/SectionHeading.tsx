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
    align = 'center',
    light = false,
    className = '',
}: SectionHeadingProps) {
    const ref = useScrollReveal<HTMLDivElement>();
    const isCentered = true;
    const alignClass = 'text-center items-center justify-center max-w-3xl mx-auto';
    const titleColor = light ? 'text-white' : 'text-gray-900';
    // Subheading color is blue as requested
    const subtitleColor = light ? 'text-[#8CCBFF]' : 'text-[#168DE2]';

    return (
        <div
            ref={ref}
            className={`reveal flex flex-col ${alignClass} gap-3 ${className}`}
        >
            {eyebrow && (
                <div className="flex items-center justify-center gap-2.5">
                    <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#168DE2]" />
                    <span className={light ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</span>
                    <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#168DE2]" />
                </div>
            )}
            <h2 className={`font-display font-bold text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] leading-[1.22] text-balance text-center ${titleColor}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-[13px] sm:text-[14px] md:text-[14.5px] font-medium leading-relaxed max-w-2xl mx-auto text-center ${subtitleColor} text-pretty`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
