import { useState, useEffect } from 'react';
import { ArrowRight, X, Sparkles } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';
import YellowBorderBeam from '@/components/YellowBorderBeam';
import type { TeamMember } from '@/data/team';

interface TeamCardProps {
    member: TeamMember;
    compact?: boolean;
}

export default function TeamCard({ member }: TeamCardProps) {
    const [modalOpen, setModalOpen] = useState(false);

    // Prevent background scrolling and handle ESC key when modal is open
    useEffect(() => {
        if (!modalOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setModalOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalOpen]);

    return (
        <>
            <article className="card-sacs group flex flex-col h-full relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FACC15] transition-all duration-300">
                <YellowBorderBeam rx={16} />

                {/* Person Photo Container — displays the WHOLE image of the person cleanly without cropping */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-100/90 p-3.5 flex items-center justify-center overflow-hidden border-b border-gray-100/80">
                    <ImageWithFallback
                        src={member.photo}
                        alt={member.photoAlt}
                        className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>

                {/* Info Area below the photo */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow text-center items-center">
                    <h3 className="font-display font-bold text-[18px] text-gray-900 leading-tight">
                        {member.name}
                    </h3>
                    <p className="text-[13px] font-semibold text-[#168DE2] mt-1 mb-3">
                        {member.designation}
                    </p>
                    <p className="text-[13.5px] leading-relaxed text-gray-600 mb-4 line-clamp-3 text-pretty">
                        {member.summary}
                    </p>

                    {/* Expertise pills */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-5 mt-auto">
                        {member.expertise.slice(0, 3).map((exp) => (
                            <span
                                key={exp}
                                className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#168DE2]/8 text-[#0284C7]"
                            >
                                {exp}
                            </span>
                        ))}
                    </div>

                    {/* View Full Profile Button — Opens modal dialog so no row stretching or white space is created */}
                    <button
                        type="button"
                        onClick={() => setModalOpen(true)}
                        className="w-full mt-auto py-2.5 px-4 rounded-xl border border-[#168DE2]/30 text-[#168DE2] hover:bg-[#168DE2] hover:text-white font-semibold text-[13px] transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
                    >
                        <span>View Full Profile</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </article>

            {/* Leadership Profile Modal Dialog */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
                    onClick={() => setModalOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`modal-title-${member.id}`}
                >
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="relative p-6 bg-gradient-to-r from-[#052640] to-[#16385C] text-white flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-white/10 border-2 border-white/20 flex-shrink-0 flex items-center justify-center p-1">
                                    <img
                                        src={member.photo}
                                        alt={member.photoAlt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h2 id={`modal-title-${member.id}`} className="font-display font-bold text-xl sm:text-2xl text-white">
                                        {member.name}
                                    </h2>
                                    <p className="text-[13.5px] sm:text-[14px] text-[#8CCBFF] font-medium mt-1">
                                        {member.designation}
                                    </p>
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 mt-2 rounded-full text-[11px] font-semibold bg-white/10 text-white/90">
                                        <Sparkles className="w-3 h-3 text-[#FACC15]" /> Senior Leadership
                                    </span>
                                </div>
                            </div>

                            {/* Close button */}
                            <button
                                type="button"
                                onClick={() => setModalOpen(false)}
                                aria-label="Close profile modal"
                                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body with Full Profile */}
                        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                            <div>
                                <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#168DE2] mb-2">
                                    Executive Overview
                                </h3>
                                <p className="text-[14.5px] text-gray-700 leading-relaxed font-normal">
                                    {member.summary}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#168DE2] mb-3">
                                    Detailed Biography & Experience
                                </h3>
                                <div className="space-y-3.5">
                                    {member.detailedBio.map((para, idx) => (
                                        <p key={idx} className="text-[14px] text-gray-600 leading-relaxed">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#168DE2] mb-3">
                                    Core Competencies & Aviation Expertise
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {member.expertise.map((exp) => (
                                        <span
                                            key={exp}
                                            className="inline-flex items-center px-3 py-1.5 rounded-lg text-[12px] font-medium bg-[#168DE2]/8 text-[#0284C7] border border-[#168DE2]/15"
                                        >
                                            {exp}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 sm:px-8 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                            <span className="text-[12px] text-gray-400">
                                Sakthi Aviation Consultancy Services
                            </span>
                            <button
                                type="button"
                                onClick={() => setModalOpen(false)}
                                className="px-5 py-2 rounded-lg bg-[#052640] text-white hover:bg-[#168DE2] text-[13px] font-semibold transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
