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
        <section className="relative pt-[120px] pb-16 lg:pt-[160px] lg:pb-20 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <ImageWithFallback
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#2A1F4A]/90 via-[#2A1F4A]/80 to-[#2A1F4A]/85" />
            </div>
            <div className="absolute inset-0 aviation-grid opacity-20" aria-hidden="true" />

            <div className="container-sacs relative z-10">
                <div className="mb-6">
                    <Breadcrumbs items={breadcrumbs} />
                </div>
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="eyebrow-light">{eyebrow}</span>
                        <span className="h-px w-8 bg-gradient-to-r from-[#E0BEC8] to-transparent" />
                    </div>
                    <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-[52px] leading-[1.1] text-white text-balance">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl text-pretty">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
