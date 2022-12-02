import { Button } from 'flowbite-react';
import React from 'react';
import {
  HiOutlineAnnotation,
  HiOutlineBookOpen,
  HiOutlinePlay,
} from 'react-icons/hi';
import { useParams } from 'react-router-dom';

import AccordionLessons, { Lesson } from '../../components/AccordionLessons';
import Calendar from '../../components/Calendar';
import CardReminder, { CardReminderProps } from '../../components/CardReminder';
import CircleProgress from '../../components/CircleProgress';

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

          <div className="space-y-3">
            <CircleProgress progress={40} sqSize={100} />
            <span className="flex text-sm text-gray-700">
              Good work! Let’s finish all your progress!
            </span>
          </div>

          <Calendar />

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
