interface YellowBorderBeamProps {
    rx?: number | string;
    strokeWidth?: number;
    className?: string;
}

export default function YellowBorderBeam({
    rx = 16,
    strokeWidth = 1.5,
    className = '',
}: YellowBorderBeamProps) {
    const half = strokeWidth / 2;
    return (
        <svg
            className={`pointer-events-none absolute inset-0 h-full w-full rounded-[inherit] overflow-visible z-20 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect
                x={half}
                y={half}
                rx={rx}
                fill="none"
                stroke="#FACC15"
                strokeWidth={strokeWidth}
                pathLength="100"
                strokeDasharray="28 72"
                strokeDashoffset="0"
                strokeLinecap="round"
                className="yellow-beam-stroke"
                style={{
                    width: `calc(100% - ${strokeWidth}px)`,
                    height: `calc(100% - ${strokeWidth}px)`,
                }}
            />
        </svg>
    );
}
