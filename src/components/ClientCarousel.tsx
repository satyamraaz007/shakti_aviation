import { useRef } from 'react';
import { Building2, Landmark, Briefcase, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import YellowBorderBeam from '@/components/YellowBorderBeam';
import { clients } from '@/data/siteInfo';

// Subtle alternating icon accents to represent diverse infrastructure & enterprise domains
const CLIENT_ICONS = [Building2, Landmark, Briefcase, ShieldCheck];

export default function ClientCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Duplicate clients to create a seamless infinite marquee loop
    const duplicatedClients = [...clients, ...clients];

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full overflow-hidden py-4">
            {/* Edge Gradient Masks for smooth entrance & exit */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

            {/* Marquee Track sliding from right to left */}
            <div
                ref={scrollContainerRef}
                className="marquee-container flex overflow-x-hidden no-scrollbar py-2"
                tabIndex={0}
                aria-label="Client Organizations Carousel"
            >
                <div className="animate-marquee-left flex items-center gap-5 pr-5">
                    {duplicatedClients.map((client, index) => {
                        const Icon = CLIENT_ICONS[index % CLIENT_ICONS.length];
                        return (
                            <div
                                key={`${client}-${index}`}
                                className="card-sacs group relative w-[250px] sm:w-[280px] h-[96px] sm:h-[104px] flex-shrink-0 flex items-center gap-3.5 px-5 py-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#FACC15] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer select-none"
                            >
                                <YellowBorderBeam rx={12} />
                                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#052640]/5 flex items-center justify-center text-[#168DE2] group-hover:bg-[#168DE2] group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-5 h-5" />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[13.5px] sm:text-[14px] font-semibold text-gray-800 leading-snug group-hover:text-[#052640] transition-colors line-clamp-2">
                                        {client}
                                    </p>
                                    <span className="text-[11px] text-gray-400 font-medium">
                                        Consultancy Partner
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Manual navigation controls */}
            <div className="flex items-center justify-center gap-3 mt-6">
                <button
                    onClick={handleScrollLeft}
                    aria-label="Previous clients"
                    className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-[#168DE2] hover:border-[#168DE2] hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#168DE2]/30"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11.5px] text-gray-400 uppercase tracking-widest font-semibold px-2">
                    Hover to Pause
                </span>
                <button
                    onClick={handleScrollRight}
                    aria-label="Next clients"
                    className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-[#168DE2] hover:border-[#168DE2] hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#168DE2]/30"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
