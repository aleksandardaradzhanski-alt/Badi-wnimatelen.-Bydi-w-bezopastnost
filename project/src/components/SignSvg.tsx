interface SignSvgProps {
  type: string;
  className?: string;
}

export function SignSvg({ type, className = 'w-full h-full' }: SignSvgProps) {
  switch (type) {
    // Warning signs (yellow triangle)
    case 'pedestrian-crossing':
      return <WarningTriangle className={className}>{<PedestrianIcon />}</WarningTriangle>;
    case 'children':
      return <WarningTriangle className={className}>{<ChildrenIcon />}</WarningTriangle>;
    case 'curve-right':
      return <WarningTriangle className={className}>{<CurveRightIcon />}</WarningTriangle>;
    case 'bumps':
      return <WarningTriangle className={className}>{<BumpsIcon />}</WarningTriangle>;
    case 'bike-crossing':
      return <WarningTriangle className={className}>{<BikeCrossingIcon />}</WarningTriangle>;

    // Prohibitory signs (red circle with bar)
    case 'no-entry':
      return <ProhibitoryBar className={className} />;
    case 'no-overtaking':
      return <ProhibitoryCircle className={className}>{<NoOvertakingIcon />}</ProhibitoryCircle>;
    case 'no-stopping':
      return <ProhibitoryBlueRed className={className} type="stopping" />;
    case 'speed-limit':
      return <SpeedLimitSign className={className} />;

    // Mandatory signs (blue circle)
    case 'straight-only':
      return <MandatoryCircle className={className}>{<StraightOnlyIcon />}</MandatoryCircle>;
    case 'roundabout':
      return <MandatoryCircle className={className}>{<RoundaboutIcon />}</MandatoryCircle>;
    case 'bike-path':
      return <MandatoryCircle className={className}>{<BikePathIcon />}</MandatoryCircle>;

    // Informative signs (blue square)
    case 'pedestrian-info':
      return <InformativeSquare className={className}>{<PedestrianCrossingInfo />}</InformativeSquare>;
    case 'hospital':
      return <InformativeSquareRed className={className}>{<HospitalIcon />}</InformativeSquareRed>;
    case 'parking':
      return <ParkingSign className={className} />;
    case 'bike-allowed':
      return <InformativeSquare className={className}>{<BikeAllowedIcon />}</InformativeSquare>;

    default:
      return <div className={className} />;
  }
}

// --- Warning sign shape ---
function WarningTriangle({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,8 92,86 8,86" fill="#fde047" stroke="#dc2626" strokeWidth="6" strokeLinejoin="round" />
      <g transform="translate(50, 55) scale(0.5) translate(-50, -50)">{children}</g>
    </svg>
  );
}

// --- Prohibitory circle ---
function ProhibitoryCircle({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="white" stroke="#dc2626" strokeWidth="8" />
      <g transform="translate(50, 50) scale(0.45) translate(-50, -50)">{children}</g>
    </svg>
  );
}

// --- Prohibitory bar (no entry) ---
function ProhibitoryBar({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="#dc2626" stroke="white" strokeWidth="3" />
      <rect x="22" y="44" width="56" height="12" fill="white" rx="2" />
    </svg>
  );
}

// --- Prohibitory no-stopping/no-parking ---
function ProhibitoryBlueRed({ className, type }: { className: string; type: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="#1d4ed8" stroke="#dc2626" strokeWidth="8" />
      {type === 'stopping' ? (
        <>
          <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" strokeWidth="8" />
          <line x1="78" y1="22" x2="22" y2="78" stroke="#dc2626" strokeWidth="8" />
        </>
      ) : (
        <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" strokeWidth="8" />
      )}
    </svg>
  );
}

// --- Speed limit ---
function SpeedLimitSign({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="white" stroke="#dc2626" strokeWidth="8" />
      <text x="50" y="44" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">50</text>
      <text x="50" y="68" textAnchor="middle" fontSize="9" fill="#1e3a8a">км/ч</text>
    </svg>
  );
}

// --- Mandatory blue circle ---
function MandatoryCircle({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="#2563eb" />
      <g transform="translate(50, 50) scale(0.5) translate(-50, -50)">{children}</g>
    </svg>
  );
}

// --- Informative blue square ---
function InformativeSquare({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="88" height="88" rx="6" fill="#2563eb" />
      <g transform="translate(50, 50) scale(0.55) translate(-50, -50)">{children}</g>
    </svg>
  );
}

function InformativeSquareRed({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="88" height="88" rx="6" fill="white" stroke="#dc2626" strokeWidth="4" />
      <g transform="translate(50, 50) scale(0.5) translate(-50, -50)">{children}</g>
    </svg>
  );
}

function ParkingSign({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="88" height="88" rx="6" fill="#2563eb" />
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fill="white" fontFamily="sans-serif">P</text>
    </svg>
  );
}

// --- Inner icons ---
function PedestrianIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="20" r="10" fill="#1e3a8a" />
      <path d="M40,35 L60,35 L55,55 L65,75 L55,78 L48,58 L42,75 L32,73 L38,52 Z" fill="#1e3a8a" />
      <line x1="20" y1="78" x2="80" y2="78" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ChildrenIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="38" cy="22" r="9" fill="#1e3a8a" />
      <circle cx="62" cy="22" r="9" fill="#1e3a8a" />
      <path d="M30,35 L46,35 L42,52 L48,70 L38,72 L34,55 Z" fill="#1e3a8a" />
      <path d="M54,35 L70,35 L66,52 L72,70 L62,72 L58,55 Z" fill="#1e3a8a" />
    </svg>
  );
}

function CurveRightIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,80 Q30,40 60,40 L70,40" fill="none" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" />
      <polygon points="70,30 82,40 70,50" fill="#1e3a8a" />
    </svg>
  );
}

function BumpsIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M15,65 Q25,45 35,65 Q45,45 55,65 Q65,45 75,65 Q85,45 85,65" fill="none" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function BikeCrossingIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="65" r="14" fill="none" stroke="#1e3a8a" strokeWidth="4" />
      <circle cx="72" cy="65" r="14" fill="none" stroke="#1e3a8a" strokeWidth="4" />
      <path d="M28,65 L48,35 L72,65 M48,35 L60,35" fill="none" stroke="#1e3a8a" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="33" r="3" fill="#1e3a8a" />
    </svg>
  );
}

function NoOvertakingIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="10" height="60" rx="2" fill="#1e3a8a" transform="rotate(15, 45, 45)" />
      <rect x="52" y="25" width="10" height="55" rx="2" fill="#dc2626" transform="rotate(-15, 57, 52)" />
    </svg>
  );
}

function StraightOnlyIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="75" x2="50" y2="35" stroke="white" strokeWidth="8" strokeLinecap="round" />
      <polygon points="40,38 50,22 60,38" fill="white" />
    </svg>
  );
}

function RoundaboutIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="22" fill="none" stroke="white" strokeWidth="6" />
      <path d="M50,28 L50,15 M72,50 L85,50 M50,72 L50,85 M28,50 L15,50" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <polygon points="46,18 50,10 54,18" fill="white" />
    </svg>
  );
}

function BikePathIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="65" r="14" fill="none" stroke="white" strokeWidth="4" />
      <circle cx="72" cy="65" r="14" fill="none" stroke="white" strokeWidth="4" />
      <path d="M28,65 L48,38 L72,65 M48,38 L60,38" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="35" r="3" fill="white" />
    </svg>
  );
}

function PedestrianCrossingInfo() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="22" r="9" fill="white" />
      <path d="M42,35 L58,35 L54,55 L62,72 L54,76 L48,58 L42,72 L34,70 L40,52 Z" fill="white" />
      <line x1="22" y1="82" x2="78" y2="82" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function HospitalIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="60" height="50" rx="4" fill="#dc2626" />
      <rect x="44" y="38" width="12" height="34" fill="white" />
      <rect x="34" y="49" width="32" height="12" fill="white" />
    </svg>
  );
}

function BikeAllowedIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="65" r="14" fill="none" stroke="white" strokeWidth="4" />
      <circle cx="72" cy="65" r="14" fill="none" stroke="white" strokeWidth="4" />
      <path d="M28,65 L48,38 L72,65 M48,38 L60,38" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="35" r="3" fill="white" />
    </svg>
  );
}
