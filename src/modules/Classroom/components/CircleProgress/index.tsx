import React from 'react';

export interface CircleProgressProps {
  progress: number;
  sqSize?: number;
  strokeWidth?: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  progress,
  sqSize = 100,
  strokeWidth = 7,
}) => {
  const radius = (sqSize - strokeWidth) / 2;

  const viewBox = `0 0 ${sqSize} ${sqSize}`;

  const dashArray = radius * Math.PI * 2;

  const dashOffset = dashArray - (dashArray * progress) / 100;

  return (
    <>
      <svg
        aria-hidden="true"
        className="stroke-gray-200"
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}
      >
        <circle
          className="fill-none"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="fill-none stroke-red-500/75"
          strokeLinecap="round"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        />
        <text
          className="text-xl font-semibold fill-gray-600 stroke-gray-600"
          x={'50%'}
          y={'50%'}
          dy=".3em"
          textAnchor="middle"
        >
          {`${progress}%`}
        </text>
      </svg>
    </>
  );
};

export default CircleProgress;
