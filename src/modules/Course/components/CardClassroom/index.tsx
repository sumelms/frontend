import { Avatar, Button, Card } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons/lib';

interface Classroom {
  title: string;
  subtitle?: string;
}

interface Info {
  icon: IconType;
  name: string;
}

interface Students {
  avatar: string;
  text?: string;
}

interface CardClassroomProps {
  classroom: Classroom;
  info: Info[];
  students: Students;
}

const CardClassroom: React.FC<CardClassroomProps> = ({
  classroom,
  info,
  students,
}) => {
  return (
    <div>
      <Card className="lg:w-96">
        <div className="py-2">
          <p className="text-lg	font-semibold text-gray-900 dark:text-white">
            {classroom.title}
          </p>
          <div className="grid gap-x-6 gap-y-4 grid-cols-2 my-5">
            {info.map(({ icon: Icon, name }, key) => (
              <div
                key={key}
                className="flex text-center items-center h-5 gap-x-2"
              >
                <Icon className="w-4 h-4 text-gray-300" />
                <p className="text-xs text-gray-900 dark:text-white">{name}</p>
              </div>
            ))}
          </div>

          <p className="text-sm	font-medium text-gray-900 dark:text-white">
            {classroom.subtitle}
          </p>

          <div className="flex my-2 items-center gap-x-2">
            <div className="flex">
              <Avatar img={students.avatar} rounded={true} />
            </div>
            <p className="text-xs text-gray-500 dark:text-white">
              {students.text}
            </p>
          </div>

          <div className="flex justify-center mt-6">
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
