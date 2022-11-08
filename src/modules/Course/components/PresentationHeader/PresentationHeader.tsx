import React from 'react';
import { HiDownload } from 'react-icons/hi';

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
      <div className="flex bg-zinc-800 text-white min-h-fit h-80">
        <div className="flex flex-col self-end pl-40 pb-9 space-y-11 ">
          <div className="space-y-6">
            <p className="text-4xl font-bold">{title}</p>
            <p className="text-xl	font-semibold">{subtitle}</p>
            <div className="divide-x space-x-2 ">
              {presentationItems.map((elementProps, index) => (
                <PresentationHeaderItem
                  {...elementProps}
                  key={index.toString()}
                />
              ))}
            </div>
          </div>
          <a href="/" className="flex content-center space-x-3">
            <HiDownload className="w-5 h-5" />
            <p className="flex items-center text-sm">
              Baixar matriz curricular
            </p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default PresentationHeader;
