import React, { ComponentProps, PropsWithChildren } from 'react';

export interface SectionProps extends PropsWithChildren<ComponentProps<'div'>> {
  title: string;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  titleAs: TitleTag = 'h2',
  titleClassName,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <TitleTag
        className={
          titleClassName ??
          'lg:mb-10 mb-5 text-3xl font-bold text-gray-700 dark:text-white'
        }
      >
        {title}
      </TitleTag>
      <div className="flex flex-wrap h-full my-4 gap-x-2 md:gap-x-8 lg:gap-x-16 gap-y-2 lg:gap-y-16 md:gap-y-8 ">
        {children}
      </div>
    </div>
  );
};

export default Section;
