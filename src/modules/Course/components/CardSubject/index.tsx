import { Button, Card, Progress } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons/lib';

interface Subject {
  title: string;
  subtitle?: string;
}

interface Info {
  icon: IconType;
  name: string;
}

interface CardSubjectProps {
  subject: Subject;
  info: Info[];
}

const CardSubject: React.FC<CardSubjectProps> = ({ subject, info }) => {
  return (
    <div>
      <Card className="lg:w-96">
        <div className="py-2">
          <p className="text-lg	font-semibold text-gray-900 dark:text-white">
            {subject.title}
          </p>
          <div className="grid gap-x-3 gap-y-2 grid-cols-2 my-5">
            {info.map(({ icon: Icon, name }, key) => (
              <div
                key={key}
                className="flex text-center items-center h-5 gap-x-2"
              >
                <Icon className="w-4 h-4 text-gray-300 " />
                <p className="text-xs text-gray-900 dark:text-white">{name}</p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <Progress
              progress={80}
              label="todo: delet this label"
              labelPosition="outside"
              labelProgress={true}
              color="red"
              size="sm"
            />
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

export default CardSubject;
