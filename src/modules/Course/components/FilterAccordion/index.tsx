import { Accordion, Checkbox, Label, Tooltip } from 'flowbite-react';
import React, { ComponentProps, PropsWithChildren } from 'react';
import { HiX } from 'react-icons/hi';

export interface FilterAccordionProps extends PropsWithChildren<ComponentProps<'div'>> {
  title: string;
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

const FilterAccordion: React.FC<FilterAccordionProps> = ({ title, sections, ...props }) => {
  return (
    <div {...props} className="w-64">
      <div className="flex items-center justify-between h-16 p-3 bg-white border-b border-gray-100 rounded-t-lg dark:bg-gray-900 ">
        <p className="text-lg font-semibold text-gray-600 dark:text-white">{title}</p>

        <Tooltip content="Ocultar filtros">
          <button className="flex items-center">
            <HiX className="w-5 h-5 text-gray-600 hover:text-blue-600" />
          </button>
        </Tooltip>
      </div>
      <Accordion alwaysOpen={true}>
        {sections.map(({ id, name, options }, key) => (
          <Accordion.Panel key={key}>
            <Accordion.Title id={id}>{name}</Accordion.Title>
            <Accordion.Content>
              <div className="space-y-8">
                {options.map((option, okey) => (
                  <div className="flex items-center" key={okey}>
                    <Checkbox id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.name}</Label>
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
