import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageWithFallback from '@/components/ImageWithFallback';

interface PageHeroProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
    image: string;
    imageAlt: string;
    breadcrumbs: { label: string; path?: string }[];
}

export default function PageHero({ eyebrow, title, subtitle, image, imageAlt, breadcrumbs }: PageHeroProps) {
    return (
        <section className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] flex items-center justify-center py-14 sm:py-16 lg:py-20 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <ImageWithFallback
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                {/* Subtle gradient vignette to preserve full image colors and ensure text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
            </div>
            <div className="absolute inset-0 aviation-grid opacity-15" aria-hidden="true" />

            <div className="container-sacs relative z-10 text-center flex flex-col items-center">
                <div className="mb-6 flex justify-center">
                    <Breadcrumbs items={breadcrumbs} />
                </div>
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#8CCBFF]" />
                        <span className="eyebrow-light drop-shadow-sm">{eyebrow}</span>
                        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#8CCBFF]" />
                    </div>
                    <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-[40px] leading-[1.15] text-white text-balance text-center drop-shadow-md">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] font-medium text-white/90 leading-relaxed max-w-2xl text-pretty text-center drop-shadow-sm">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
