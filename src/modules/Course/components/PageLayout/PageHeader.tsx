import React from 'react';
import { HiDownload } from 'react-icons/hi';

import PageHeaderItem, { PageHeaderItemProps } from './PageHeaderItem';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  items?: PageHeaderItemProps[];
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  items,
  ...props
}: PageHeaderProps) => {
  return (
    <header {...props}>
      <div className="flex text-white bg-zinc-800 min-h-fit h-80">
        <div className="container flex flex-col self-end px-5 mx-auto lg:px-10 pb-9 space-y-11">
          <div className="space-y-6">
            <p className="text-4xl font-bold">{title}</p>
            <p className="text-xl font-semibold">{subtitle}</p>
            <div className="space-x-2 divide-x">
              {items &&
                items.map((itemProps, index) => (
                  <PageHeaderItem {...itemProps} key={index.toString()} />
                ))}
            </div>
          </div>
          <div className="w-60">
            <a
              href="/"
              className="flex content-center space-x-3 hover:text-blue-500 hover:underline hover:underline-offset-4"
            >
              <HiDownload className="w-6 h-6" />
              <span className="items-center font-medium tracking-wider font-roboto">
                Baixar matriz curricular
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
