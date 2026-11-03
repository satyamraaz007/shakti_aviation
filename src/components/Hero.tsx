import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';
import AviationFlightPath from '@/components/AviationFlightPath';
import heroBg from "@/assets/hero_airport.png";

export default function Hero() {
    return (
        <section className="relative min-h-[100vh] flex items-center overflow-hidden">
            {/* Background image with slow cinematic zoom (10-15s Ken Burns effect) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <div className="w-full h-full animate-hero-bg">
                    <ImageWithFallback
                        src={heroBg}
                        alt="Airport runway at sunset with golden sky"
                        className="w-full h-full object-cover scale-[1.02]"
                        loading="eager"
                    />
                </div>

                {/* Subtle dark gradient overlays for enhanced text readability */}
                {/* 1. Left-to-right directional gradient protecting the content column */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#000e1f]/95 via-[#001730]/80 md:via-[#001730]/65 to-transparent" />
                {/* 2. Top-to-bottom vignette darkening navbar area and grounding bottom section */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#001026]/90" />
            </div>

            {/* Aviation grid overlay */}
            <div className="absolute inset-0 aviation-grid opacity-20 pointer-events-none" aria-hidden="true" />

            {/* Animated Flight Path Line with Moving Aircraft Icon */}
            <div className="absolute right-0 top-1/4 w-[55%] h-[45%] hidden md:block pointer-events-none opacity-80 z-[5]">
                <AviationFlightPath variant="hero" />
            </div>

            {/* Content with orchestrated cinematic entrance */}
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:pl-8 lg:pr-12 xl:pl-10 relative z-10 pt-32 pb-20">
                <div className="max-w-4xl">
                    {/* Eyebrow badge */}
                    <div className="flex items-center gap-3 mb-6 animate-hero-eyebrow">
                        <span className="h-px w-10 bg-gradient-to-r from-[#168DE2] to-transparent" />
                        <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#8CCBFF]">
                            Aviation • Infrastructure • Consultancy
                        </span>
                    </div>

                    {/* Main heading: fades in and moves upward */}
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.08] text-white text-balance drop-shadow-sm animate-hero-heading">
                        Aviation & Airport{' '}
                        <span className="bg-gradient-to-r from-[#8CCBFF] via-[#42A5F5] to-[#0077B6] bg-clip-text text-transparent">
                            Consultancy Services in India
                        </span>
                    </h1>

                    {/* Supporting text: appears shortly after the heading */}
                    <p className="mt-6 text-base md:text-lg lg:text-[20px] text-white/85 leading-relaxed max-w-2xl text-pretty drop-shadow-xs animate-hero-text">
                        Sakthi Aviation Consultancy Services combines decades of aviation, airport operations,
                        safety, security and technical expertise to deliver consultancy and implementation
                        solutions across India and international markets.
                    </p>

                    {/* CTA buttons: slide up with a slight delay */}
                    <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-hero-cta">
                        <Link to="/services" className="btn-primary group">
                            <span>Explore Our Services</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/contact"
                            className="btn-secondary group hover:!bg-[#FACC15] hover:!text-[#052640] hover:!border-[#FACC15] hover:shadow-xl hover:shadow-[#FACC15]/30 transition-all duration-300"
                        >
                            <Phone className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:text-[#052640]" />
                            <span>Talk to Our Experts</span>
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 animate-hero-badge">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#E0BEC8]" />
                            <span className="text-[13px] text-white/70 font-medium">
                                Established in 2005
                            </span>
                        </div>
                        <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[13px] text-white/70 font-medium">
                            30+ Years of Industry Expertise Across Our Senior Professionals
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-hero-scroll pointer-events-none">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold">Scroll</span>
                <ChevronDown className="w-5 h-5 text-white/50 scroll-indicator" />
            </div>
        </section>
    );
}

