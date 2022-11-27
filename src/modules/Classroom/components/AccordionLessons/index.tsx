import { Accordion, Progress } from 'flowbite-react';
import React from 'react';
import {
  HiOutlineAnnotation,
  HiOutlineBookOpen,
  HiOutlinePlay,
} from 'react-icons/hi';

const AccordionLessons: React.FC = () => {
  return (
    <Accordion
      className="w-full border-none divide-y-0 divide-transparent"
      alwaysOpen={true}
    >
      <Accordion.Panel>
        <Accordion.Title className="mb-5 text-gray-100 bg-gray-800 first:!rounded-t-lg rounded-lg hover:bg-gray-900 hover:text-white capitalize">
          funções
        </Accordion.Title>
        <Accordion.Content className="!px-0 !py-0 -mt-5 bg-white black:bg-gray-600">
          <div className="flex justify-between w-full h-full px-6 py-3 bg-gray-100 rounded-lg">
            <div className="flex items-center gap-x-5">
              <HiOutlinePlay className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-700">1h30min de vídeos</span>
            </div>
            <div className="flex items-center gap-x-5">
              <HiOutlineBookOpen className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-700">10 textos</span>
            </div>
            <div className="flex items-center gap-x-5">
              <HiOutlineAnnotation className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-700">O Atividades</span>
            </div>
          </div>
          <div className="flex w-full p-5">
            <div className="flex items-center w-full space-x-5">
              <HiOutlinePlay className="w-10 h-10 text-green-500" />
              <div className="flex items-end justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">Matemática fácil</p>
                  <div className="grid grid-cols-3 divide-x">
                    <span className="px-3">Video</span>
                    <span className="px-3">15min</span>
                  </div>
                </div>
                <Progress
                  className="flex w-48 "
                  progress={45}
                  label="--"
                  size="sm"
                  labelPosition="outside"
                  labelProgress={true}
                />
              </div>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AccordionLessons;
