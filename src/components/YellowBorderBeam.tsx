interface YellowBorderBeamProps {
    rx?: number | string;
    strokeWidth?: number;
    className?: string;
}

export default function YellowBorderBeam({
    rx = 16,
    strokeWidth = 2.5,
    className = '',
}: YellowBorderBeamProps) {
    return (
        <svg
            className={`pointer-events-none absolute inset-0 h-full w-full rounded-[inherit] overflow-visible z-20 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx={rx}
                fill="none"
                stroke="#FACC15"
                strokeWidth={strokeWidth}
                pathLength="100"
                strokeDasharray="26 74"
                strokeLinecap="round"
                className="yellow-beam-stroke"
            />
        </svg>
    );
}
