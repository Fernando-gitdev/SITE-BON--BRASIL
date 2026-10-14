// Ring radius for the circular text, in the 240×240 viewBox. The text is
// stretched to the full circumference so it closes the loop without a gap.
const RING_RADIUS = 92;
const RING_LENGTH = Math.round(2 * Math.PI * RING_RADIUS);
// Trailing NBSP: a regular trailing space collapses, gluing the last bullet
// to the first word where the ring's start and end meet.
const RING_TEXT = 'SELO DE QUALIDADE • BONÉ BRASIL • SERRA NEGRA DO NORTE • ';

/**
 * Seal artwork built from the brand's own "B" mark (the same mark the seal
 * system at selobonebrasil.com uses as its icon), wrapped in a slowly
 * rotating ring of text. `ringId` must be unique per instance on the page,
 * since the text follows a <path> referenced by id.
 */
export default function SeloBadge({ ringId, className = '' }: { ringId: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={`selo-badge ${className}`}
      role="img"
      aria-label="Selo de Qualidade Boné Brasil"
    >
      <defs>
        <path
          id={ringId}
          d={`M 120,120 m -${RING_RADIUS},0 a ${RING_RADIUS},${RING_RADIUS} 0 1,1 ${RING_RADIUS * 2},0 a ${RING_RADIUS},${RING_RADIUS} 0 1,1 -${RING_RADIUS * 2},0`}
        />
      </defs>

      <circle cx="120" cy="120" r="117" className="selo-badge-outer" />
      <circle cx="120" cy="120" r="74" className="selo-badge-core" />

      <g className="selo-badge-ring">
        <text className="selo-badge-ring-text">
          <textPath href={`#${ringId}`} textLength={RING_LENGTH} lengthAdjust="spacing">
            {RING_TEXT}
          </textPath>
        </text>
      </g>

      {/* Same artwork and framing as selobonebrasil.com/icon.svg; the nested
          viewport clips the lockup's accent mark that sits off to the right. */}
      <svg x="72" y="72" width="96" height="96" viewBox="0 0 512 512">
        <g transform="translate(74.00 53.13) scale(1.15924)">
          <path
            fill="currentColor"
            d="M230.03,326.19c-10.45,2.16-18.51,2.32-115.38,2.33-100.19.01-104.29-.07-108.01-2.34C1.74,323.19-.04,318.07,0,306.97c.04-10.75,2.84-17.62,9.16-22.44,8.88-6.77,10.43-6.86,112.31-6.67,51.48.09,95.84-.25,98.56-.77,14.39-2.72,27.91-13.27,34.78-27.15,13.58-27.46,1.52-61.02-26.72-74.41l-8.06-3.82-55.79-.62c-41.58-.46-56.49-1.02-58.52-2.18-4.79-2.73-6.57-6.61-6.57-14.23s4.65-20,10.64-27.83c5.74-7.53,7.69-7.82,51.19-7.82s45.05-.21,50.77-8.68c6.12-9.09.68-23.41-11.25-29.54-5.03-2.58-7.97-3.09-20.46-3.47-8.01-.24-16.13-1.08-18.04-1.86-4.3-1.77-7.07-6.92-7.05-13.1.01-5.42,10.55-27.4,15.77-32.88,4.71-4.95,13.94-7.65,23.15-6.77,32.58,3.07,63.22,29.59,73.42,63.51,3.43,11.43,2.93,29.52-1.19,42.09-1.88,5.77-2.73,10.09-2.01,10.34.68.24,4.15,2.39,7.72,4.8,18.24,12.32,32.35,31.94,39.5,54.96,2.45,7.86,2.89,11.95,2.9,27.23.02,16.46-.26,18.86-3.48,28.52-6.51,19.55-17.38,35.97-31.84,48.1-15.7,13.17-29.52,19.94-48.87,23.93Z"
          />
        </g>
      </svg>
    </svg>
  );
}
