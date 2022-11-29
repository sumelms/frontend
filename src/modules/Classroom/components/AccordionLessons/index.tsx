import { Accordion } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons';

import AccordionLessonActivity from './AccordionLessonActivity';
import AccordionLessonsInfo from './AccordionLessonInfo';

export interface LessonInfo {
  icon: IconType;
  name: string;
  value: number;
}

export interface Activity {
  name: string;
  type: string;
  status: 'notstarted' | 'started' | 'completed';
  progress: number;
  measurement: string;
}

export interface Lesson {
  name: string;
  info: LessonInfo[];
  activities: Activity[];
}

export interface AccordionLessonsProps {
  lessons: Lesson[];
}

const AccordionLessons: React.FC<AccordionLessonsProps> = ({ lessons }) => {
  return (
    <Accordion
      className="w-full border-none divide-y-0 divide-transparent"
      alwaysOpen={true}
    >
      {lessons.map(({ name, info, activities }, key) => (
        <Accordion.Panel key={key}>
          <Accordion.Title className="mb-3 text-gray-100 bg-gray-800 first:!rounded-t-lg rounded-lg hover:bg-gray-900 hover:text-white capitalize">
            {name}
          </Accordion.Title>
          <Accordion.Content className="!px-0 !py-0 -mt-3 mb-3 rounded-lg  bg-white black:bg-gray-600">
            <AccordionLessonsInfo info={info} />
            {activities &&
              activities.map((activity, key) => (
                <AccordionLessonActivity activity={activity} key={key} />
              ))}
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default AccordionLessons;
