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
    <div className={className ?? 'inline-flex items-center h-9 -ml-3'}>
      {Icon && <Icon className="mx-2" />}
      <span className="mx-1">{item}</span>
      <span className="">{itemText}</span>
    </div>
  );
};

export default PresentationHeaderItem;
