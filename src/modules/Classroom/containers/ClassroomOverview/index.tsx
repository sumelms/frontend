import { Button } from 'flowbite-react';
import React from 'react';
import {
  HiOutlineAnnotation,
  HiOutlineBookOpen,
  HiOutlinePlay,
} from 'react-icons/hi';
import { useParams } from 'react-router-dom';

import AccordionLessons, { Lesson } from '../../components/AccordionLessons';
import CardReminder, { CardReminderProps } from '../../components/CardReminder';

type RouteParams = {
  classroom: string;
};

const ClassroomView: React.FC = () => {
  const params = useParams() as RouteParams;

  const cardReminders: CardReminderProps[] = [
    {
      title: 'Exames finais',
      reminderAt: '18/02/2022',
    },
    {
      title: 'Exames',
      reminderAt: '19/02/2022',
    },
  ];

  const lessons: Lesson[] = [
    {
      name: 'Funções',
      info: [
        {
          icon: HiOutlinePlay,
          value: 10,
          name: 'videos',
        },
        {
          icon: HiOutlineBookOpen,
          value: 8,
          name: 'texts',
        },
        {
          icon: HiOutlineAnnotation,
          value: 5,
          name: 'exercicies',
        },
      ],
      activities: [
        {
          name: 'Matematica',
          type: 'video',
          status: 'completed',
          progress: 100,
          measurement: '15 min',
        },
        {
          name: 'Lógica',
          type: 'quiz',
          status: 'started',
          progress: 10,
          measurement: '5 questões',
        },
        {
          name: 'Matematica II',
          type: 'video',
          status: 'notstarted',
          progress: 0,
          measurement: '50 min',
        },
        {
          name: 'Matematica II',
          type: 'slide',
          status: 'completed',
          progress: 0,
          measurement: '5 slides',
        },
        {
          name: 'Lógica',
          type: 'exam',
          status: 'started',
          progress: 10,
          measurement: '50 questões',
        },
      ],
    },
    {
      name: 'Derivadas',
      info: [
        {
          icon: HiOutlinePlay,
          value: 10,
          name: 'videos',
        },
        {
          icon: HiOutlineBookOpen,
          value: 8,
          name: 'texts',
        },
        {
          icon: HiOutlineAnnotation,
          value: 5,
          name: 'exercicies',
        },
      ],
      activities: [
        {
          name: 'Matematica',
          type: 'video',
          status: 'completed',
          progress: 100,
          measurement: '15 min',
        },
        {
          name: 'Lógica',
          type: 'quiz',
          status: 'started',
          progress: 10,
          measurement: '5 questões',
        },
        {
          name: 'Matematica II',
          type: 'video',
          status: 'notstarted',
          progress: 0,
          measurement: '50 min',
        },
        {
          name: 'Matematica II',
          type: 'slide',
          status: 'completed',
          progress: 0,
          measurement: '5 slides',
        },
        {
          name: 'Lógica',
          type: 'exam',
          status: 'started',
          progress: 10,
          measurement: '50 questões',
        },
      ],
    },
  ];

  return (
    <div className="h-screen py-12">
      <p className="mb-5 text-3xl font-bold text-gray-700 capitalize lg:mb-10 dark:text-white">
        {params.classroom}
      </p>
      <div className="flex w-ful gap-x-10">
        <div className="space-y-6 text-lg font-semibold w-96 ">
          <p>Meu progresso</p>
          <div>
            <div className="relative">
              <div
                role="status"
                className="flex items-center justify-center w-32 h-32"
              >
                <svg
                  aria-hidden="true"
                  className="mr-2 text-gray-200 w-80 h-80 dark:text-gray-600 fill-blue-500"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="absolute text-2xl">25%</span>
              </div>
            </div>
            <span>
              Lorem, ipsum dolor sit amet consectetur. ipsum dolor sit amet
              consectetur.
            </span>
          </div>

          <div className="p-2 text-center bg-white rounded-lg h-72 w-72">
            calendar
          </div>

          <div className="flex items-center justify-between text-xl">
            <p>Atividades recentes</p>
            <Button outline color="light">
              Ver mais
            </Button>
          </div>
          {cardReminders &&
            cardReminders.map(({ title, reminderAt }, key) => (
              <CardReminder key={key} title={title} reminderAt={reminderAt} />
            ))}
        </div>

        <div className="w-full space-y-6">
          <p className="text-lg font-semibold">Aulas</p>
          <AccordionLessons lessons={lessons} />
        </div>
      </div>
    </div>
  );
};

export default ClassroomView;
