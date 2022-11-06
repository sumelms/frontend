import React, { ComponentProps } from 'react';

const SectionPresentation: React.FC<ComponentProps<'div'>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="text-xl text-gray-900 dark:text-white">
        Apresentação do Curso
      </h3>
      <div className="my-6 space-y-2">{children}</div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <div>
            <img
              className="object-cover w-full rounded-t-lg h-96"
              src="https://via.placeholder.com/450"
              alt=""
            />
            <em className="text-xs text-gray-900 dark:text-white">
              Image subtitle
            </em>
          </div>
          <div>
            <img
              className="object-cover w-full rounded-t-lg h-96"
              src="https://via.placeholder.com/450"
              alt=""
            />
            <em className="text-xs text-gray-900 dark:text-white">
              Image subtitle
            </em>
          </div>
          <div>
            <img
              className="object-cover w-full rounded-t-lg h-96"
              src="https://via.placeholder.com/450"
              alt=""
            />
            <em className="text-xs text-gray-900 dark:text-white">
              Image subtitle
            </em>
          </div>
          <div>
            <img
              className="object-cover w-full rounded-t-lg h-96"
              src="https://via.placeholder.com/450"
              alt=""
            />
            <em className="text-xs text-gray-900 dark:text-white">
              Image subtitle
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPresentation;
