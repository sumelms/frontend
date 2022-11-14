import { Accordion, Checkbox, Label, Tooltip } from 'flowbite-react';
import React, { ComponentProps, PropsWithChildren } from 'react';
import { HiX } from 'react-icons/hi';

export interface FilterAccordionProps
  extends PropsWithChildren<ComponentProps<'div'>> {
  title: string;
  titleClassName?: string;
  sections: FilterSectionProps[];
}

export interface FilterSectionProps {
  id: string;
  name: string;
  options: FilterSectionOptionProps[];
}

export interface FilterSectionOptionProps {
  id: string;
  name: string;
  value: string;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
  title,
  titleClassName,
  sections,
  ...props
}) => {
  return (
    <div {...props}>
      <div className="flex items-center justify-between w-64 h-16 p-3 border-b border-gray-300 rounded-t-lg bg-red-200/25 dark:bg-gray-900 ">
        <p className="text-2xl text-gray-600 dark:text-white">{title}</p>

        <Tooltip content="Ocultar  filtros">
          <button className="flex items-center">
            <HiX className="w-5 h-5 text-gray-600 hover:text-blue-600" />
          </button>
        </Tooltip>
      </div>
      <Accordion
        className="border-transparent divide-y divide-gray-300 dark:divide-gray-300 dark:border-transparent"
        alwaysOpen={true}
      >
        {sections.map(({ id, name, options }, key) => (
          <Accordion.Panel
            className="px-2 py-2 last:rounded-none dark:bg-gray-900 first:rounded-none"
            key={key}
          >
            <Accordion.Title className="capitalize" id={id}>
              {name}
            </Accordion.Title>
            <Accordion.Content>
              <div className="space-y-8">
                {options.map((option, okey) => (
                  <div className="flex items-center" key={okey}>
                    <Checkbox
                      className="w-6 h-6 mr-5 border-2 border-gray-500 dark:border-gray-100 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      id={option.id}
                      value={option.value}
                    />
                    <Label
                      className="text-2xl text-gray-600 capitalize"
                      htmlFor={option.id}
                    >
                      {option.name}
                    </Label>
                  </div>
                ))}
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterAccordion;
