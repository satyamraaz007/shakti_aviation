interface RadarBackgroundProps {
    className?: string;
    showSweep?: boolean;
    showBlips?: boolean;
}

export default function RadarBackground({
    className = '',
    showSweep = true,
    showBlips = true,
}: RadarBackgroundProps) {
    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center ${className}`}
            aria-hidden="true"
        >
            {/* Radar Scope Container */}
            <div className="relative w-[640px] h-[640px] sm:w-[800px] sm:h-[800px] flex-shrink-0 flex items-center justify-center">
                {/* 1. Concentric Range Rings */}
                <div className="absolute w-[140px] h-[140px] rounded-full border border-[#168DE2]/20" />
                <div className="absolute w-[280px] h-[280px] rounded-full border border-[#168DE2]/15" />
                <div className="absolute w-[440px] h-[440px] rounded-full border border-[#168DE2]/12" />
                <div className="absolute w-[620px] h-[620px] rounded-full border border-[#168DE2]/10" />
                <div className="absolute w-[800px] h-[800px] rounded-full border border-[#168DE2]/8" />

                {/* 2. Expanding & Fading Radar Pulse Circles (Key requirement) */}
                <div className="absolute w-[360px] h-[360px] rounded-full border-2 border-[#168DE2]/50 animate-radar-ring-1" />
                <div className="absolute w-[360px] h-[360px] rounded-full border-2 border-[#8CCBFF]/40 animate-radar-ring-2" />
                <div className="absolute w-[360px] h-[360px] rounded-full border-2 border-[#42A5F5]/35 animate-radar-ring-3" />

                {/* 3. Azimuth Crosshairs / Compass Lines */}
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#168DE2]/15 to-transparent" />
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#168DE2]/15 to-transparent" />
                <div className="absolute w-full h-px rotate-45 bg-gradient-to-r from-transparent via-[#168DE2]/8 to-transparent" />
                <div className="absolute w-full h-px -rotate-45 bg-gradient-to-r from-transparent via-[#168DE2]/8 to-transparent" />

                {/* Range ring labels */}
                <span className="absolute top-[345px] left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#8CCBFF]/35 tracking-wider">
                    10 NM
                </span>
                <span className="absolute top-[265px] left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#8CCBFF]/30 tracking-wider">
                    25 NM
                </span>
                <span className="absolute top-[185px] left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#8CCBFF]/25 tracking-wider">
                    50 NM
                </span>

                {/* 4. Rotating Radar Sweep Beam */}
                {showSweep && (
                    <div className="absolute inset-0 flex items-center justify-center animate-radar-sweep">
                        <div
                            className="w-[780px] h-[780px] rounded-full"
                            style={{
                                background:
                                    'conic-gradient(from 0deg at 50% 50%, rgba(22, 141, 226, 0.18) 0deg, rgba(22, 141, 226, 0.05) 30deg, transparent 65deg, transparent 360deg)',
                            }}
                        />
                    </div>
                )}

                {/* 5. Faint Radar Target Blips (Aircraft transponder returns) */}
                {showBlips && (
                    <>
                        {/* Target 1: North-East corridor */}
                        <div className="absolute top-[35%] right-[28%] flex items-center gap-1.5 animate-radar-blip">
                            <span className="w-2 h-2 rounded-full bg-[#8CCBFF] shadow-[0_0_6px_#8CCBFF]" />
                            <span className="text-[8px] font-mono text-[#8CCBFF]/70 tracking-tight leading-none hidden sm:inline">
                                SACS01 FL240
                            </span>
                        </div>

                        {/* Target 2: South-West approach */}
                        <div
                            className="absolute bottom-[36%] left-[24%] flex items-center gap-1.5 animate-radar-blip"
                            style={{ animationDelay: '2.5s' }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#42A5F5] shadow-[0_0_6px_#42A5F5]" />
                            <span className="text-[8px] font-mono text-[#8CCBFF]/60 tracking-tight leading-none hidden sm:inline">
                                AI102 FL180
                            </span>
                        </div>

                        {/* Target 3: South-East climb */}
                        <div
                            className="absolute bottom-[30%] right-[32%] flex items-center gap-1.5 animate-radar-blip"
                            style={{ animationDelay: '1.2s' }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8CCBFF] shadow-[0_0_5px_#8CCBFF]" />
                            <span className="text-[8px] font-mono text-[#8CCBFF]/60 tracking-tight leading-none hidden sm:inline">
                                6E442 FL090
                            </span>
                        </div>
                    </>
                )}

                {/* Center radar origin station */}
                <div className="w-3 h-3 rounded-full bg-[#168DE2] shadow-[0_0_8px_#168DE2] z-10" />
                <div className="absolute w-6 h-6 rounded-full border border-[#168DE2]/50 animate-ping" />
            </div>
        </div>
    );
}
