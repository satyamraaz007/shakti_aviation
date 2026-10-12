import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CTASectionProps {
    title: string;
    subtitle?: string;
    primaryLabel: string;
    primaryPath: string;
    secondaryLabel?: string;
    secondaryPath?: string;
}

export default function CTASection({
    title,
    subtitle,
    primaryLabel,
    primaryPath,
    secondaryLabel,
    secondaryPath,
}: CTASectionProps) {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <section className="py-20 lg:py-28">
            <div className="container-sacs">
                <div
                    ref={ref}
                    className="reveal relative overflow-hidden rounded-3xl gradient-sacs px-8 py-14 lg:px-16 lg:py-20"
                >
                    {/* Decorative grid overlay */}
                    <div className="absolute inset-0 aviation-grid opacity-30" aria-hidden="true" />
                    {/* Decorative circle */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-white/10" aria-hidden="true" />
                    <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full border border-white/5" aria-hidden="true" />

                    <div className="relative z-10 max-w-3xl">
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[42px] leading-[1.15] text-white text-balance">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed text-pretty">
                                {subtitle}
                            </p>
                        )}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to={primaryPath} className="btn-primary">
                                {primaryLabel}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            {secondaryLabel && secondaryPath && (
                                <Link to={secondaryPath} className="btn-secondary">
                                    <Phone className="w-4 h-4" />
                                    {secondaryLabel}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
