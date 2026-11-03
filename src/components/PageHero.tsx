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
                <div className="absolute inset-0 bg-gradient-to-b from-[#2A1F4A]/75 via-[#2A1F4A]/50 to-[#2A1F4A]/35" />
            </div>
            <div className="absolute inset-0 aviation-grid opacity-20" aria-hidden="true" />

            <div className="container-sacs relative z-10 text-center flex flex-col items-center">
                <div className="mb-6 flex justify-center">
                    <Breadcrumbs items={breadcrumbs} />
                </div>
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#8CCBFF]" />
                        <span className="eyebrow-light">{eyebrow}</span>
                        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#8CCBFF]" />
                    </div>
                    <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-[30px] leading-[1.1] text-white text-balance text-center">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-4 text-[13.5px] sm:text-[14.5px] md:text-[15px] font-medium text-[#8CCBFF] leading-relaxed max-w-2xl text-pretty text-center">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
