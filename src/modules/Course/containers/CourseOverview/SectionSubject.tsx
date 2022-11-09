import React, { ComponentProps } from 'react';
import { HiCalendar, HiClock, HiInbox, HiTable, HiUser } from 'react-icons/hi';

import CardSubject from '../../components/CardSubject';

const SectionSubject: React.FC<ComponentProps<'div'>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
        Turmas
      </h3>
      <div className="flex h-full flex-wrap gap-x-2 md:gap-x-6 lg:gap-x-16 gap-y-2.5 lg:gap-y-20 md:gap-y-8">
        <CardSubject
          subject={{
            title: 'Calculo - Sistemas de Informação',
            subtitle: 'Meu progresso na turma:',
          }}
          info={[
            { icon: HiCalendar, name: 'Inicio:', text: '28 Agosto' },
            { icon: HiTable, name: 'Término:', text: '12 Dezembro' },
            { icon: HiClock, text: '19h - 22h' },
            { icon: HiInbox, text: 'Presencial' },
            { icon: HiUser, text: 'Dr. John' },
          ]}
        />
      </div>
    </div>
  );
};

export default SectionSubject;
