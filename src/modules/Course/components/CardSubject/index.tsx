import { Button, Card, Progress } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons/lib';

interface Subject {
  title: string;
  subtitle?: string;
}

interface Info {
  icon: IconType;
  name?: string;
  text?: string;
}

interface CardSubjectProps {
  subject: Subject;
  info: Info[];
}

const CardSubject: React.FC<CardSubjectProps> = ({ subject, info }) => {
  return (
    <div>
      <Card className="lg:w-96">
        <div className="p-2 space-y-5">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {subject.title}
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            {info.map(({ icon: Icon, name, text }, key) => (
              <div
                key={key}
                className="flex items-center h-5 text-center gap-x-2"
              >
                <Icon className="w-4 h-4 text-gray-300 " />
                <div className="flex">
                  <p className="text-xs font-semibold text-stone-700 dark:text-white">
                    {name}
                  </p>
                  <p className="text-xs text-stone-700 dark:text-white">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold text-stone-700 dark:text-white">
              {subject.subtitle}
            </p>
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
            <Button outline fullSized color="red">
              Acessar minha Turma
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardSubject;
