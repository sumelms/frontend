import classNames from 'classnames';
import { Progress } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons';
import {
  HiCheck,
  HiDotsHorizontal,
  HiOutlineAnnotation,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlinePresentationChartLine,
} from 'react-icons/hi';

import { Activity } from '.';

export interface AccordionLessonActivityProps {
  activity: Activity;
}

const AccordionLessonActivity: React.FC<AccordionLessonActivityProps> = ({
  activity,
}) => {
  const getTypeIcon = (type: string): IconType => {
    switch (type.toLowerCase()) {
      case 'video':
        return HiOutlinePlay;
      case 'quiz':
        return HiOutlineAnnotation;
      case 'slide':
        return HiOutlinePresentationChartLine;
    }
    return HiOutlineDocumentText;
  };

  const getStatusIcon = (status: string): IconType => {
    switch (status.toLowerCase()) {
      case 'completed':
        return HiCheck;
    }
    return HiDotsHorizontal;
  };

  const ActivityIcon = getTypeIcon(activity.type);
  const StatusIcon = getStatusIcon(activity.status);

  return (
    <a
      href="/"
      className="flex w-full p-5 rounded-lg focus:ring-2 hover:bg-indigo-100/75 ring-indigo-500 ring-inset"
    >
      <div className="flex items-center w-full space-x-5">
        <div className="relative">
          <ActivityIcon
            className={classNames('w-10 h-10', {
              'text-grey-600': activity.status === 'notstarted',
              'text-yellow-500': activity.status === 'started',
              'text-green-500': activity.status === 'completed',
            })}
          />

          <div
            className={classNames(
              'absolute bottom-0 right-0 p-1 rounded-full',
              {
                'bg-green-300': activity.status === 'completed',
                'bg-yellow-300': activity.status === 'started',
                'bg-gray-300': activity.status === 'notstarted',
              },
            )}
          >
            <StatusIcon
              className={classNames('w-2.5 h-2.5', {
                'text-gray-900': activity.status === 'notstarted',
                'text-yellow-900': activity.status === 'started',
                'text-green-900': activity.status === 'completed',
              })}
            />
          </div>
        </div>

        <div className="flex items-end justify-between w-full">
          <div className="items-center space-y-2">
            <p className="text-lg font-semibold">{activity.name}</p>
            <div className="-ml-2 text-sm divide-x ">
              <span className="px-2">{activity.type}</span>
              <span className="px-2">{activity.measurement}</span>
            </div>
          </div>
          <Progress
            className="flex w-48 "
            color="green"
            progress={activity.progress}
            label="--"
            size="sm"
            labelPosition="outside"
            labelProgress={true}
          />
        </div>
      </div>
    </a>
  );
};

export default AccordionLessonActivity;
