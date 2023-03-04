import { Button, Card, Progress } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons/lib';

export interface Subject {
  title: string;
  subtitle?: string;
}

export interface Info {
  icon: IconType;
  name?: string;
  text?: string;
}

export interface CardSubjectProps {
  subject: Subject;
  info: Info[];
}

const CardSubject: React.FC<CardSubjectProps> = ({ subject, info }) => {
  return (
    <div>
      <Card className="w-96">
        <div className="space-y-5 ">
          <p className="text-lg font-bold text-gray-800 dark:text-white">{subject.title}</p>
          <div className="grid grid-cols-2 gap-2">
            {info.map(({ icon: Icon, name, text }, key) => (
              <div key={key} className="flex items-center text-center gap-x-2">
                <Icon className="w-4 text-gray-300 " />
                <div className="flex">
                  {name && <p className="mr-1 font-semibold text-gray-700 dark:text-white">{name}</p>}
                  <p className="text-gray-700 dark:text-white">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="font-semibold text-gray-700 dark:text-white">{subject.subtitle}</p>
            <Progress
              progress={80}
              label="todo: delet this label<"
              labelPosition="outside"
              labelProgress={true}
              color="red"
              size="sm"
            />
          </div>

          <div>
            <Button outline fullSized color="light">
              <span className="font-semibold">Acessar minha turma</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardSubject;
