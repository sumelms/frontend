import { Avatar, Card } from 'flowbite-react';
import React from 'react';
import { HiArrowUp, HiOutlineChatAlt2 } from 'react-icons/hi';
import { IconType } from 'react-icons/lib';

interface Educator {
  avatar?: string;
  name: string;
  title: string;
}

interface Info {
  icon: IconType;
  name: string;
  value: number;
}

interface CardEducatorProps {
  educator: Educator;
  info: Info[];
}

const CardEducator: React.FC<CardEducatorProps> = ({ educator, info }) => {
  return (
    <Card className="lg:w-72">
      <div className="flex flex-col my-2">
        <div className="self-center justify-center space-y-3">
          <Avatar img={educator.avatar} size="xl" rounded={true} />
          <p className="text-gray-900 text-center	dark:text-white">
            {educator.name}
          </p>
          <p className="font-bold text-center text-gray-900 dark:text-white">
            {educator.title}
          </p>
        </div>

        <div className="my-6">
          <div className="h-12 flex">
            <a
              href="/"
              className="flex items-center gap-x-5 hover:text-blue-500 hover:delay-150"
            >
              <HiArrowUp className="w-5 h-5" />
              <p className="text-sm font-semibold text-gray-600 dark:text-white hover:text-blue-500 hover:underline hover:underline-offset-4">
                Conferir Currículo Lattes
              </p>
            </a>
          </div>
          <div className="h-12 flex">
            <a
              href="/"
              className="flex items-center gap-x-5 hover:text-blue-500 hover:delay-150"
            >
              <HiOutlineChatAlt2 className="w-5 h-5" />
              <p className="text-sm font-semibold text-gray-600 dark:text-white hover:text-blue-500 hover:underline hover:underline-offset-4">
                Enviar uma mensagem
              </p>
            </a>
          </div>
        </div>

        <div className="space-y-2">
          {info.map(({ icon: Icon, name, value }, key) => (
            <div key={key} className="flex">
              <Icon className="h-4	text-red-700" />
              <div className="flex w-full justify-between ml-4">
                <p className="text-xs font-semibold text-gray-600 dark:text-white">
                  {name}
                </p>
                <p className="text-xs font-semibold text-gray-600 dark:text-white">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CardEducator;
