import { Avatar, Button, Card } from 'flowbite-react';
import AvatarGroup from 'flowbite-react/lib/esm/components/Avatar/AvatarGroup';
import React from 'react';
import { IconType } from 'react-icons/lib';

interface Classroom {
  title: string;
  subtitle?: string;
  number?: number;
  smalltext?: string;
}

interface Info {
  icon: IconType;
  name: string;
}

interface Students {
  avatar: string;
}

interface CardClassroomProps {
  classroom: Classroom;
  info: Info[];
  students: Students[];
}

const CardClassroom: React.FC<CardClassroomProps> = ({ classroom, info, students }) => {
  return (
    <div>
      <Card className="lg:w-96">
        <div className="p-2">
          <p className="text-lg	font-bold text-gray-900 dark:text-white">{classroom.title}</p>
          <div className="grid gap-x-3 gap-y-2 grid-cols-2 my-5">
            {info.map(({ icon: Icon, name }, key) => (
              <div key={key} className="flex text-center items-center h-5 gap-x-2">
                <Icon className="w-4 h-4 text-gray-300" />
                <p className="text-xs text-stone-700 dark:text-white">{name}</p>
              </div>
            ))}
          </div>

          <p className="text-sm font-semibold text-stone-700 dark:text-white">{classroom.subtitle}</p>

          <div className="flex my-2 items-center gap-x-2">
            <AvatarGroup>
              {students.map(({ avatar }, key) => (
                <Avatar key={key} img={avatar} rounded={true} />
              ))}
            </AvatarGroup>

            <p className="text-xs text-gray-500 dark:text-white">
              +{classroom.number}&nbsp;
              {classroom.smalltext}
            </p>
          </div>

          <div className="mt-6">
            <Button outline fullSized color="light">
              Solicitar inscrição na Turma
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardClassroom;
