import React, { ComponentProps } from 'react';
import { HiCalendar, HiClock, HiInbox, HiTable, HiUser } from 'react-icons/hi';

import CardSubject from '../../components/CardSubject';

const SectionClassroom: React.FC<ComponentProps<'div'>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
        Turmas
      </h3>
      <div className="flex h-full flex flex-wrap gap-x-2 md:gap-x-6 lg:gap-x-16 gap-y-2.5 lg:gap-y-20 md:gap-y-8">
        <CardSubject
          subject={{
            title: 'Calculo - Sistemas de Informação',
          }}
          info={[
            { icon: HiCalendar, name: '28 Agosto' },
            { icon: HiClock, name: '19h' },
            { icon: HiTable, name: 'Verão' },
            { icon: HiInbox, name: 'Presencial' },
            { icon: HiUser, name: 'Dr. John' },
          ]}
        />
      </div>
    </div>
  );
};

export default SectionClassroom;
