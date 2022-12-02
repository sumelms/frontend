import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

export interface CardReminderProps {
  title: string;
  reminderAt?: string;
}

const CardReminder: React.FC<CardReminderProps> = ({ title, reminderAt }) => {
  return (
    <a
      href="/"
      className="flex items-center justify-between h-24 pl-6 pr-3 bg-white border-l-8 border-red-500 border-solid rounded-lg hover:border-red-600 w-72 focus:ring-2 hover:bg-indigo-100/75 ring-indigo-500 ring-inset"
    >
      <div className="flex flex-col justify-center w-full h-full text-xl text-gray-700 justify-items-center hover:text-gray-900">
        <p>{title}</p>
        <p className="font-light text-gray-700">Date:{reminderAt}</p>
      </div>
      <HiChevronRight className="w-11 h-11 fill-gray-700 hover:fill-gray-900" />
    </a>
  );
};

export default CardReminder;
