import React from 'react';

export default function ProgressRing({
  progress = 0,
  strokeWidth = 4,
  ballStrokeWidth = 16,
  reduction = 0.25,
  transitionDuration = 0.5,
  transitionTimingFunction = 'ease',
  background = '#dde2e9',
  hideBall = false,
  hideValue = false,
  gradient = [
    { stop: 0.0, color: '#00bc9b' },
    { stop: 1, color: '#5eaefd' },
  ],
  title = '',
  subtitle = '',
  circular = false,
  size = 100,
  style,
  className,
}) {
  progress = Math.round(progress * 100) / 100;
  const width = 200;
  const center = width / 2;
  const height = 200;
  const [unique] = React.useState(() => Math.random().toString());
  const rotate = 90 + (180 * reduction);
  const r = (center - (strokeWidth / 2)) - (ballStrokeWidth / 2);
  const circumference = (Math.PI * r) * 2;
  const offset = (circumference * (100 - progress * (1 - reduction))) / 100;

  return (
    <div className={`${className} progress-ring-wrapper`} style={style}>
      <svg width={size} height={size} viewBox={`0 0 ${width} ${height}`} className="progress-ring-svg">
        <defs>
          <linearGradient id={'gradient' + unique} x1="0%" y1="0%" x2="0%" y2="100%">
            {gradient.map(({ stop, color }) => (
              <stop key={stop} offset={stop * 100 + '%'} stopColor={color} />
            ))}
          </linearGradient>
        </defs>
        {!hideValue && (
          <text
            className="title"
            x={center}
            y={center}
            textAnchor="middle"
            fontSize="30"
            fill="#1D1D1D"
          >
            {/* <AnimatePercentage value={progress} duration={transitionDuration} /> */}
            {title || `${progress}%`}
          </text>
        )}
        <text
          className="subtitle"
          x={center}
          y={center + (30 * 3) / 4}
          fontSize="30"
          textAnchor="middle"
          fill="#5C5C5C"
          y="9rem"
        >
          {subtitle}
        </text>
        <circle
          className="path"
          transform={`rotate(${circular ? '-' : ''}${rotate} ${center} ${center})`}
          id="path"
          cx={center}
          cy={center}
          r={r}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * reduction}
          fill="none"
          stroke={background}
          strokeLinecap="round"
        ></circle>
        <circle
          className="ring"
          style={{ transition: `stroke-dashoffset ${transitionDuration}s ${transitionTimingFunction}` }}
          transform={`rotate(${circular ? '-' : ''}${rotate} ${center} ${center})`}
          id="path"
          cx={center}
          cy={center}
          r={r}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}`}
          strokeDashoffset={offset}
          fill="none"
          stroke={`url(#gradient${unique})`}
          strokeLinecap="round"
        ></circle>
        {!hideBall && (
          <circle
            className="ball"
            style={{ transition: `stroke-dashoffset ${transitionDuration}s ${transitionTimingFunction}` }}
            transform={`rotate(${circular ? '-' : ''}${rotate} ${center} ${center})`}
            id="path"
            cx={center}
            cy={center}
            r={r}
            strokeWidth={ballStrokeWidth}
            strokeDasharray={`1 ${circumference}`}
            strokeDashoffset={offset}
            fill="none"
            stroke={`url(#gradient${unique})`}
            strokeLinecap="round"
          ></circle>
        )}
      </svg>
    </div>
  );
}
