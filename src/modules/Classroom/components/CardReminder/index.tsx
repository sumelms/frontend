import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

export interface CardReminderProps {
  title: string;
  data?: string;
}

const CardReminder: React.FC<CardReminderProps> = ({ title, data }) => {
  return (
    <div className="flex items-center justify-between h-24 pl-6 pr-3 bg-white border-l-8 border-red-700 border-solid rounded-lg w-72">
      <div className="text-xl text-gray-600">
        <p>{title}</p>
        <p className="font-light text-gray-600">Date:{data}</p>
      </div>
      <HiChevronRight className="w-11 h-11 fill-gray-500" />
    </div>
  );
};

export default CardReminder;
