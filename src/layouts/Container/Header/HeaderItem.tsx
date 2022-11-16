import React, { ComponentProps, PropsWithChildren } from 'react';

export type HeaderItemProps = PropsWithChildren<ComponentProps<'li'>> & {
  icon?: React.FC<ComponentProps<'svg'>>;
  key: string;
  label: string;
  value: string;
  className?: string;
};

const HeaderItem: React.FC<HeaderItemProps> = ({
  icon: Icon,
  className,
  label,
  value,
}: HeaderItemProps): JSX.Element => {
  return (
    <div
      className={
        className ?? 'inline-flex items-center h-9 -ml-3 tracking-wider'
      }
    >
      {Icon && <Icon className="w-6 h-6 mx-2" />}
      <span className="mx-1 font-roboto">{label}:</span>
      <span className="font-semibold font-roboto">{value}</span>
    </div>
  );
};

export default HeaderItem;
