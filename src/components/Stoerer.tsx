import { motion } from 'framer-motion';

type StoererVariant = 'fruehstueck' | 'aktionen' | 'mittagskarte';

interface StoererProps {
  variant: StoererVariant;
  className?: string;
}

interface StoererContent {
  topArc: string;
  centerLine1: string;
  centerLine2?: string;
  bottomArc: string;
  filled?: boolean;
}

const CONTENT: Record<StoererVariant, StoererContent> = {
  fruehstueck: {
    topArc: 'ENTDECKEN SIE UNSER',
    centerLine1: 'FRÜHSTÜCKS',
    centerLine2: 'ANGEBOT',
    bottomArc: 'SAMSTAGS & SONNTAGS',
  },
  aktionen: {
    topArc: 'HIER FINDEN SIE UNSERE',
    centerLine1: 'AKTUELLE',
    centerLine2: 'INFOS',
    bottomArc: 'EVENTS & AKTIONEN',
  },
  mittagskarte: {
    topArc: 'ENTDECKEN SIE UNSERE',
    centerLine1: 'MITTAGS',
    centerLine2: 'KARTE',
    bottomArc: 'WÖCHENTLICH WECHSELND',
    filled: true,
  },
};

const Stoerer = ({ variant, className = '' }: StoererProps) => {
  const c = CONTENT[variant];
  const id = `stoerer-${variant}`;

  const bgFill = c.filled ? '#D4AF37' : 'rgba(20, 20, 20, 0.78)';
  const ringColor = c.filled ? '#1E3A8A' : '#D4AF37';
  const arcTextColor = c.filled ? '#1E3A8A' : '#D4AF37';
  const centerTextColor = c.filled ? '#1E3A8A' : '#FFFFFF';

  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${c.centerLine1} ${c.centerLine2 ?? ''}`.trim()}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.25 }}
    >
      <defs>
        <path id={`${id}-arc-top`} d="M 28 100 A 72 72 0 0 1 172 100" />
        <path id={`${id}-arc-bottom`} d="M 28 100 A 72 72 0 0 0 172 100" />
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.4" />
        </filter>
      </defs>

      <circle
        cx="100"
        cy="100"
        r="92"
        fill={bgFill}
        filter={`url(#${id}-shadow)`}
      />

      <circle
        cx="100"
        cy="100"
        r="86"
        fill="none"
        stroke={ringColor}
        strokeWidth="1.5"
        opacity="0.9"
      />

      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke={ringColor}
        strokeWidth="0.6"
        opacity="0.5"
      />

      <text
        fill={arcTextColor}
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="11"
        letterSpacing="2.5"
      >
        <textPath href={`#${id}-arc-top`} startOffset="50%" textAnchor="middle">
          {c.topArc}
        </textPath>
      </text>

      <text
        fill={arcTextColor}
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="11"
        letterSpacing="2.5"
      >
        <textPath href={`#${id}-arc-bottom`} startOffset="50%" textAnchor="middle">
          {c.bottomArc}
        </textPath>
      </text>

      <g fill={centerTextColor} fontFamily="'Bebas Neue', sans-serif" textAnchor="middle">
        {c.centerLine2 ? (
          <>
            <text x="100" y="98" fontSize="26" letterSpacing="1">
              {c.centerLine1}
            </text>
            <text x="100" y="124" fontSize="26" letterSpacing="1">
              {c.centerLine2}
            </text>
          </>
        ) : (
          <text x="100" y="110" fontSize="30" letterSpacing="1">
            {c.centerLine1}
          </text>
        )}
      </g>

      <g fill={ringColor}>
        <circle cx="60" cy="100" r="1.4" />
        <circle cx="140" cy="100" r="1.4" />
      </g>
    </motion.svg>
  );
};

export default Stoerer;
