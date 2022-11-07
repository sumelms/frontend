import { Avatar, Button, Card } from 'flowbite-react';
import React from 'react';
import { HiCalendar, HiClock, HiInbox, HiUser } from 'react-icons/hi';

interface Classroom {
  title: string;
}

interface Info {
  data: string;
  time: string;
  educator: string;
  modality: string;
}

interface Students {
  avatar?: string;
  title: string;
  text?: string;
}

interface CardClassroomProps {
  classroom: Classroom;
  info: Info;
  students: Students;
}

const CardClassroom: React.FC<CardClassroomProps> = ({
  classroom,
  info,
  students,
}) => {
  return (
    <div>
      <Card>
        <div className="">
          <p className="text-lg	font-bold text-gray-900 dark:text-white">
            {classroom.title}
          </p>
          <div className="grid gap-x-6 gap-y-4 grid-cols-2 my-5">
            <div className="flex text-center items-center">
              <HiCalendar className="w-4 h-4 text-gray-300 mr-1" />
              <p className="text-sm text-gray-900 dark:text-white">
                {info.data}
              </p>
            </div>
            <div className="flex text-center items-center">
              <HiUser className="w-4 h-4 text-gray-300 mr-1" />
              <p className="text-sm text-gray-900 dark:text-white">
                {info.educator}
              </p>
            </div>
            <div className="flex text-center items-center">
              <HiClock className="w-4 h-4 text-gray-300 mr-1" />
              <p className="text-sm text-gray-900 dark:text-white">
                {info.time}
              </p>
            </div>
            <div className="flex text-center items-center">
              <HiInbox className="w-4 h-4 text-gray-300 mr-1" />
              <p className="text-sm text-gray-900 dark:text-white">
                {info.modality}
              </p>
            </div>
          </div>

          <p className="text-sm	font-semibold text-gray-900 dark:text-white">
            {students.title}
          </p>

          <div className="flex mt-2 mb-6 items-center">
            <div className="flex">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                rounded={true}
              />
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                rounded={true}
              />
            </div>
            <p className="text-xs ml-2 text-gray-500 dark:text-white">
              {students.text}
            </p>
          </div>

          <div className="flex justify-center">
            <Button outline={true} color="failure">
              Acessar minha Turma
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardClassroom;
