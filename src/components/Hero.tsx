import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';
import heroBg from "@/assets/hero_airport.png"

export default function Hero() {
    return (
        <section className="relative min-h-[100vh] flex items-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <ImageWithFallback
                    src={heroBg}
                    alt="Airport runway at sunset with golden sky"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001D36]/90 via-[#001D36]/60 to-transparent" />
            </div>

            {/* Aviation grid overlay */}
            <div className="absolute inset-0 aviation-grid opacity-25" aria-hidden="true" />

            {/* Decorative flight path SVG */}
            <svg
                className="absolute right-0 top-1/4 w-[50%] h-[40%] opacity-[0.15] hidden lg:block"
                viewBox="0 0 600 400"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M 50 350 Q 200 100 550 50"
                    stroke="white"
                    strokeWidth="1.5"
                    className="flight-path-line"
                />
                <path
                    d="M 80 380 Q 250 150 580 80"
                    stroke="white"
                    strokeWidth="1"
                    className="flight-path-line"
                    style={{ animationDelay: '2s' }}
                />
                <circle cx="50" cy="350" r="4" fill="white" />
                <circle cx="550" cy="50" r="4" fill="white" />
            </svg>

            {/* Content */}
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:pl-8 lg:pr-12 xl:pl-10 relative z-10 pt-32 pb-20">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-6 animate-[slideUp_0.8s_ease-out]">
                        <span className="h-px w-10 bg-gradient-to-r from-[#168DE2] to-transparent" />
                        <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#168DE2]">
                            Aviation • Infrastructure • Consultancy
                        </span>
                    </div>

                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.08] text-white text-balance animate-[slideUp_0.8s_ease-out_0.1s_both]">
                        Engineering the Future of{' '}
                        <span className="bg-gradient-to-r from-[#8CCBFF] via-[#42A5F5] to-[#0077B6] bg-clip-text text-transparent">
                            Aviation Infrastructure
                        </span>
                    </h1>

                    <p className="mt-6 text-base md:text-lg lg:text-[20px] text-white/75 leading-relaxed max-w-2xl text-pretty animate-[slideUp_0.8s_ease-out_0.2s_both]">
                        Sakthi Aviation Consultancy Services combines decades of aviation, airport operations,
                        safety, security and technical expertise to deliver consultancy and implementation
                        solutions across India and international markets.
                    </p>

                    <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-[slideUp_0.8s_ease-out_0.3s_both]">
                        <Link to="/services" className="btn-primary">
                            Explore Our Services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/contact" className="btn-secondary">
                            <Phone className="w-4 h-4" />
                            Talk to Our Experts
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4 animate-[slideUp_0.8s_ease-out_0.4s_both]">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#E0BEC8]" />
                            <span className="text-[13px] text-white/60 font-medium">
                                Established in 2005
                            </span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[13px] text-white/60 font-medium">
                            30+ Years of Industry Expertise Across Our Senior Professionals
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold">Scroll</span>
                <ChevronDown className="w-5 h-5 text-white/40 scroll-indicator" />
            </div>
        </section>
    );
}
