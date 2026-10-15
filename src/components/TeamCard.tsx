import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';
import type { TeamMember } from '@/data/team';

interface TeamCardProps {
    member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className="card-sacs overflow-hidden flex flex-col h-full">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <ImageWithFallback
                    src={member.photo}
                    alt={member.photoAlt}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F4A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display font-bold text-[18px] text-white leading-tight">
                        {member.name}
                    </h3>
                    <p className="text-[13px] text-[#168DE2] font-medium mt-0.5">{member.designation}</p>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <p className="text-[14px] leading-relaxed text-gray-600 mb-4">
                    {member.summary}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.expertise.slice(0, 4).map((exp) => (
                        <span
                            key={exp}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#402E6D]/6 text-[#402E6D]"
                        >
                            {exp}
                        </span>
                    ))}
                </div>

                {/* Expandable detailed bio */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-auto flex items-center justify-between w-full pt-4 border-t border-gray-100 text-[13px] font-semibold text-[#168DE2] hover:text-[#052640] transition-colors"
                    aria-expanded={expanded}
                >
                    {expanded ? 'Hide Profile' : 'View Profile'}
                    <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                </button>

                {expanded && (
                    <div className="mt-4 space-y-3">
                        {member.detailedBio.map((para, idx) => (
                            <p key={idx} className="text-[13.5px] leading-relaxed text-gray-600">
                                {para}
                            </p>
                        ))}
                        <div className="pt-3">
                            <p className="text-[12px] font-bold uppercase tracking-wide text-gray-400 mb-2">Full Expertise</p>
                            <div className="flex flex-wrap gap-1.5">
                                {member.expertise.map((exp) => (
                                    <span
                                        key={exp}
                                        className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#A34354]/8 text-[#A34354]"
                                    >
                                        {exp}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
