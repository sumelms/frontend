import React, { ComponentProps } from 'react';

import PresentationHeaderItem, {
  PresentationHeaderItemProps,
} from './PresentationHeaderItem';

export type PresentationHeaderProps = {
  title: string;
  subtitle: string;
  presentationItems: PresentationHeaderItemProps[];
};

const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  title,
  subtitle,
  presentationItems,
  ...props
}: PresentationHeaderProps) => {
  return (
    <header {...props}>
      <div className="w-full bg-zinc-900 text-white min-h-fit h-80">
        <div className="flex-col px-16 py-14">
          <h1>{title}</h1>
          <br></br>
          <h3>{subtitle}</h3>
          <div>
            {presentationItems.map((elementProps, index) => (
              <PresentationHeaderItem
                {...elementProps}
                key={index.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PresentationHeader;
