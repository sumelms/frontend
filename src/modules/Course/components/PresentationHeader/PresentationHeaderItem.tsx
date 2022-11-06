import React, { ComponentProps, PropsWithChildren } from 'react';

export type PresentationHeaderItemProps = PropsWithChildren<
  ComponentProps<'li'>
> & {
  icon?: React.FC<ComponentProps<'svg'>>;
  item: string;
  itemText: string;
  className?: string;
};

//@TODO MOVE TO COURSE/COMPONENTS
const PresentationHeaderItem: React.FC<PresentationHeaderItemProps> = ({
  icon: Icon,
  className,
  item,
  itemText,
}: PresentationHeaderItemProps): JSX.Element => {
  return (
    <div className={className ?? 'inline-flex mr-2 mt-10 text-base'}>
      {Icon && <Icon />}
      <span className="text-base px-1">{item}</span>
      <span className="text-base px-1">{itemText}</span>
    </div>
  );
};

export default PresentationHeaderItem;
