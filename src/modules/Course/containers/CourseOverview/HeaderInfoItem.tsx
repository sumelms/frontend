import React, { ComponentProps, PropsWithChildren } from 'react';

export type HeaderInfoProps = PropsWithChildren<ComponentProps<'li'>> & {
  icon: React.FC<ComponentProps<'svg'>>;
  item: string;
  itemText: string;
  className?: string;
};

export const HeaderInfoItem: React.FC<HeaderInfoProps> = ({
  icon: Icon,
  className,
  item,
  itemText,
}: HeaderInfoProps): JSX.Element => {
  return (
    <>
      <div className={className}>
        <Icon />
        <span className="text-base">{item}</span>
        <span className="text-base">{itemText}</span>
        <span className="text-base">|</span>
      </div>
    </>
  );
};
