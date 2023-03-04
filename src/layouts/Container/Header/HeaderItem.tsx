import React, { ComponentProps, PropsWithChildren } from 'react';

export type HeaderItemProps = PropsWithChildren<ComponentProps<'li'>> & {
  icon?: React.FC<ComponentProps<'svg'>>;
  key: string;
  label: string;
  value?: string;
  className?: string;
};

const HeaderItem: React.FC<HeaderItemProps> = ({
  icon: Icon,
  className,
  label,
  value,
}: HeaderItemProps): JSX.Element => {
  return (
    <div className={className ?? 'inline-flex items-center h-4 -ml-2 mt-2 tracking-wider'}>
      {Icon && <Icon className="w-4 h-4 mx-2" />}
      <span className="mx-1 text-xs">{label}:</span>
      <span className="text-xs font-semibold">{value}</span>
    </div>
  );
};

export default HeaderItem;
