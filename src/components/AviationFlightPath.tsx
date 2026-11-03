interface AviationFlightPathProps {
    className?: string;
    variant?: 'hero' | 'compact';
}

export default function AviationFlightPath({ className = '', variant = 'hero' }: AviationFlightPathProps) {
    if (variant === 'compact') {
        return (
            <svg
                className={`w-full h-auto overflow-visible pointer-events-none select-none ${className}`}
                viewBox="0 0 600 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="compactFlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#168DE2" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#8CCBFF" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#42A5F5" stopOpacity="0.15" />
                    </linearGradient>
                </defs>

                {/* Flight path curve */}
                <path
                    id="compact-trajectory"
                    d="M 30 140 Q 280 40 570 70"
                    stroke="url(#compactFlightGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="6 5"
                    className="animate-flight-dash"
                />

                {/* Waypoint origin */}
                <circle cx="30" cy="140" r="3.5" fill="#168DE2" />
                <circle cx="30" cy="140" r="8" stroke="#168DE2" strokeWidth="1" opacity="0.4" className="animate-ping" />

                {/* Waypoint destination */}
                <circle cx="570" cy="70" r="3.5" fill="#8CCBFF" />

                {/* Moving aircraft */}
                <g>
                    <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#compact-trajectory" />
                    </animateMotion>
                    {/* Centered at 0, 0 facing +X */}
                    <g transform="translate(-10, -10)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 12L15 8.5L10 2H8.5L11 9H4.5L3 7H1.5L2.5 12L1.5 17H3L4.5 15H11L8.5 22H10L15 15.5L21 12Z"
                                fill="#8CCBFF"
                            />
                        </svg>
                    </g>
                </g>
            </svg>
        );
    }

    return (
        <svg
            className={`w-full h-full overflow-visible pointer-events-none select-none ${className}`}
            viewBox="0 0 1000 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                {/* Gradient for flight path trajectory */}
                <linearGradient id="heroFlightTrajectoryGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#168DE2" stopOpacity="0.05" />
                    <stop offset="25%" stopColor="#168DE2" stopOpacity="0.4" />
                    <stop offset="65%" stopColor="#8CCBFF" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                </linearGradient>

                {/* Secondary approach path gradient */}
                <linearGradient id="approachTrajectoryGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#402E6D" stopOpacity="0.05" />
                    <stop offset="50%" stopColor="#E0BEC8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8CCBFF" stopOpacity="0.1" />
                </linearGradient>

                {/* Aircraft glow filter */}
                <filter id="planeGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#8CCBFF" floodOpacity="0.9" />
                </filter>
            </defs>

            {/* Background secondary high-altitude flight corridor (faint) */}
            <path
                d="M 120 440 C 400 360, 620 220, 960 110"
                stroke="url(#approachTrajectoryGrad)"
                strokeWidth="1.2"
                strokeDasharray="4 8"
                opacity="0.5"
            />

            {/* Primary active flight path line */}
            <path
                id="hero-active-flight-path"
                d="M 80 400 C 320 330, 560 180, 920 60"
                stroke="url(#heroFlightTrajectoryGrad)"
                strokeWidth="1.75"
                strokeDasharray="8 6"
                className="animate-flight-dash"
            />

            {/* Waypoint 1: Origin (Runway departure fix) */}
            <g transform="translate(80, 400)">
                <circle cx="0" cy="0" r="3.5" fill="#168DE2" />
                <circle cx="0" cy="0" r="10" stroke="#168DE2" strokeWidth="1" opacity="0.35" className="animate-beacon-pulse" />
                <text x="12" y="4" fill="#8CCBFF" opacity="0.6" fontSize="9" fontFamily="monospace" letterSpacing="1">
                    DEP-DEL
                </text>
            </g>

            {/* Waypoint 2: Mid-climb navigational waypoint */}
            <g transform="translate(480, 235)">
                <polygon points="0,-4 4,0 0,4 -4,0" fill="none" stroke="#8CCBFF" strokeWidth="1" opacity="0.7" />
                <circle cx="0" cy="0" r="8" stroke="#8CCBFF" strokeWidth="0.75" opacity="0.25" />
                <text x="10" y="3" fill="#8CCBFF" opacity="0.5" fontSize="8" fontFamily="monospace" letterSpacing="0.8">
                    FIX/SACS
                </text>
            </g>

            {/* Waypoint 3: Cruise level destination */}
            <g transform="translate(920, 60)">
                <circle cx="0" cy="0" r="3.5" fill="#8CCBFF" />
                <circle cx="0" cy="0" r="12" stroke="#8CCBFF" strokeWidth="1" opacity="0.4" className="animate-beacon-pulse" />
                <text x="-48" y="4" fill="#ffffff" opacity="0.6" fontSize="9" fontFamily="monospace" letterSpacing="1">
                    FL380
                </text>
            </g>

            {/* Moving Aircraft Icon traveling along the primary active path */}
            <g>
                <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#hero-active-flight-path" />
                </animateMotion>

                {/* Aircraft Icon Container centered at (0, 0) facing +X */}
                <g transform="translate(-11, -11)" filter="url(#planeGlow)">
                    {/* Jet contrail particle trail behind aircraft */}
                    <circle cx="-6" cy="11" r="1.5" fill="#8CCBFF" opacity="0.6" />
                    <circle cx="-14" cy="11" r="1" fill="#8CCBFF" opacity="0.3" />

                    {/* Aircraft silhouette SVG */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        {/* Jet body */}
                        <path
                            d="M21 12L15 8.5L10 2H8.5L11 9H4.5L3 7H1.5L2.5 12L1.5 17H3L4.5 15H11L8.5 22H10L15 15.5L21 12Z"
                            fill="#FFFFFF"
                        />
                        {/* Cockpit glass accent */}
                        <path d="M18 12L16 10.5V13.5L18 12Z" fill="#168DE2" opacity="0.8" />
                    </svg>

                    {/* Strobe / Navigation Beacon light on wingtip */}
                    <circle cx="10" cy="2" r="1" fill="#22C55E" className="animate-ping" />
                    <circle cx="10" cy="22" r="1" fill="#EF4444" className="animate-ping" />
                </g>
            </g>
        </svg>
    );
}
