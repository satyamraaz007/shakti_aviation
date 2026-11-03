import { Link } from 'react-router-dom';
import { ArrowRight, Plane } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';
import YellowBorderBeam from '@/components/YellowBorderBeam';
import type { ServiceItem } from '@/data/services';

interface ServiceCardProps {
    service: ServiceItem;
    index?: number;
}

const DEFAULT_SERVICE_IMAGE =
    'https://images.pexels.com/photos/30475501/pexels-photo-30475501.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1';

export default function ServiceCard({ service, index }: ServiceCardProps) {
    const Icon = service.icon || Plane;
    const numberStr = (index !== undefined ? index + 1 : parseInt(service.id, 10) || 1)
        .toString()
        .padStart(2, '0');

    return (
        <Link
            to={`/services/${service.slug}`}
            className="card-sacs group relative bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(234,179,8,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full overflow-hidden"
        >
            <YellowBorderBeam rx={16} />
            {/* Top Image with Overlapping Circular Badge */}
            <div className="relative w-full">
                {/* Image Container with zoom effect */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <ImageWithFallback
                        src={service.image || DEFAULT_SERVICE_IMAGE}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Circular Badge overlapping bottom edge of image */}
                <div className="absolute -bottom-[26px] left-6 w-[52px] h-[52px] rounded-full bg-[#052640] border-[3px] border-white shadow-md flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-6 h-6 text-[#168DE2]" strokeWidth={2} />
                </div>
            </div>

            {/* Card Content Area */}
            <div className="pt-9 px-6 pb-6 flex flex-col flex-grow">
                {/* Number Indicator */}
                <span className="text-[14px] md:text-[15px] font-semibold text-[#5B7B9D] tracking-wide mb-1.5 block">
                    {numberStr}
                </span>

                {/* Service Title */}
                <h3 className="font-display font-bold text-[18px] md:text-[19px] text-[#0A2540] leading-snug mb-2.5 group-hover:text-[#168DE2] transition-colors duration-200">
                    {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-[13.5px] md:text-[14px] text-gray-500 leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {service.shortDescription}
                </p>

                {/* Explore Service CTA */}
                <div className="mt-auto">
                    <span className="text-[13.5px] md:text-[14px] font-semibold text-[#0875D1] inline-flex items-center gap-1.5 group-hover:text-[#0056A6] transition-colors">
                        Explore service
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                </div>
            </div>
        </Link>
    );
}
