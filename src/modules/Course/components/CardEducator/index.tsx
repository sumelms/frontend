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
    <div className="w-72">
      <Card>
        <div className="flex flex-col gap-6">
          <div className="self-center space-y-3 justify-center">
            <Avatar img={educator.avatar} size="xl" rounded={true} />
            <p className="text-gray-900 text-center	dark:text-white">
              {educator.name}
            </p>
            <p className="font-bold text-center text-gray-900 dark:text-white">
              {educator.title}
            </p>
          </div>

          <div>
            <a
              href="/"
              className="flex items-center space-x-4 h-12 hover:text-blue-500 	"
            >
              <HiArrowUp className="w-8 h-8" />
              <p className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-500 hover:underline hover:underline-offset-4">
                Conferir Currículo Lattes
              </p>
            </a>
            <a
              href="/"
              className="flex items-center space-x-4 h-12 hover:text-blue-500 hover:text-blue-500"
            >
              <HiOutlineChatAlt2 className="w-8 h-8" />
              <p className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-500 hover:text-blue-500 hover:delay-150">
                Enviar uma mensagem
              </p>
            </a>
          </div>

          <div className="space-y-2">
            {info.map(({ icon: Icon, name, value }, key) => (
              <div key={key} className="flex">
                <Icon className="h-4	text-red-700" />
                <div className="flex w-full justify-between ml-4">
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">
                    {name}
                  </p>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardEducator;
