import React from 'react';

import { LessonInfo } from '.';

export interface AccordionLessonsInfoProps {
  info: LessonInfo[];
}

const AccordionLessonsInfo: React.FC<AccordionLessonsInfoProps> = ({
  info,
}) => {
  return (
    <div className="flex w-full h-full px-6 py-3 bg-gray-200 rounded-lg gap-x-10">
      {info.map(({ icon: Icon, value, name }, key) => (
        <div key={key} className="flex items-center text-gray-700 gap-x-3">
          <Icon className="w-4 h-4" />
          <span className="text-sm">{value}</span>
          <span className="text-sm">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default AccordionLessonsInfo;
