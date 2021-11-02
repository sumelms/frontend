import React from 'react';

export interface ProgressProps {
  amount: number;
  bgColorClass: string;
}

const Progressbar: React.FC<ProgressProps> = ({
  amount,
  bgColorClass,
}: ProgressProps) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={amount}
      aria-valuemin="0"
      aria-valuemax="100"
      data-testid="progressbar-element"
      className="w-full h-4 mt-3 bg-gray-400 rounded-full"
    >
      <div
        className={`h-full text-xs text-center text-white rounded-full ${bgColorClass}`}
        style={{ width: `${amount}%` }}
      >
        {amount}%
      </div>
    </div>
  );
};

export default Progressbar;
