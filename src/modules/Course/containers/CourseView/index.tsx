import Container from '@app/components/Container';
import {
  CalendarIcon as DateIcon,
  CheckCircleIcon as ExamsIcon,
  ClockIcon as TimeIcon,
  DocumentDuplicateIcon as ResourcesIcon,
  PresentationChartBarIcon as LessonsIcon,
} from '@heroicons/react/outline';
import React from 'react';

const CourseView: React.FC = () => {
  return (
    <>
      <div className="bg-gray-800 text-white">
        <h1 className="text-3xl">Learn Python Programming Masterclass</h1>
        <p className="font-bold">
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo
          de texto legível de uma página quando estiver examinando sua
          diagramação.
        </p>
        <div>Last update 3 days go</div>
        <div className="flex flex-wrap text-sm">
          <div className="flex items-center mx-3 mt-3">
            <TimeIcon className="mr-3 h-4" />
            72h 35min
          </div>
          <div className="flex items-center mx-3 mt-3">
            <ExamsIcon className="mr-3 h-4" />3 Exams
          </div>
          <div className="flex items-center mx-3 mt-3">
            <LessonsIcon className="mr-3 h-4" />
            25 Lessons
          </div>
          <div className="flex items-center mx-3 mt-3">
            <ResourcesIcon className="mr-3 h-4" />
            13 Resources
          </div>
          <div className="flex items-center mx-3 mt-3">
            <DateIcon className="mr-3 h-4" />
            01/23/2022
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseView;
