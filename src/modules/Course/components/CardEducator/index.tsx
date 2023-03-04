import { Avatar, Button, Card } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons/lib';

interface Educator {
  avatar?: string;
  name: string;
  title: string;
}

interface Action {
  icon: IconType;
  name: string;
}

interface Info {
  icon: IconType;
  name: string;
  value: number;
}

interface CardEducatorProps {
  educator: Educator;
  info: Info[];
  action: Action[];
}

const CardEducator: React.FC<CardEducatorProps> = ({ educator, info, action }) => {
  return (
    <Card className="max-w-xs">
      <div className="flex flex-col space-y-6">
        <div className="self-center justify-center space-y-2 ">
          <Avatar img={educator.avatar} size="xl" rounded={true} />

          <p className="font-bold text-center text-gray-900 dark:text-white">{educator.name}</p>
          <p className="text-sm font-bold text-center text-gray-600 dark:text-white">{educator.title}</p>
        </div>

        <div className="space-y-2">
          {info.map(({ icon: Icon, name, value }, key) => (
            <div key={key} className="flex">
              <Icon className="w-4 h-4 text-red-700 dark:text-red-400" />
              <div className="flex justify-between w-full ml-4 text-xs font-semibold text-gray-600 dark:text-white">
                <span>{name}</span>
                <span>{value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {action.map(({ icon: Icon, name }, key) => (
            <Button key={key} fullSized outline color="light">
              <Icon className="w-5 h-5 mr-2" />
              <span className="font-semibold">{name}</span>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CardEducator;
