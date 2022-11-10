import React, { ComponentProps } from 'react';
import { HiCalendar, HiClock, HiUser, HiVideoCamera } from 'react-icons/hi';

import CardClassroom from '../../components/CardClassroom';

const SectionClassroom: React.FC<ComponentProps<'div'>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
        Turmas de Cálculo em andamento
      </h3>
      <div className="flex h-full flex-wrap gap-x-2 md:gap-x-6 lg:gap-x-16 gap-y-2.5 lg:gap-y-20 md:gap-y-8">
        <CardClassroom
          classroom={{
            title: 'Calculo - Sistemas de Informação',
            subtitle: 'Students',
            number: 25,
            smalltext: 'pelople joined the class',
          }}
          info={[
            { icon: HiCalendar, name: '28 Agosto' },
            { icon: HiClock, name: '19h to 22h' },
            { icon: HiVideoCamera, name: 'Remoto' },
            { icon: HiUser, name: 'Dra Izadora Perk' },
          ]}
          students={[
            {
              avatar:
                'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
            },
            {
              avatar:
                'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
            },
            {
              avatar:
                'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SectionClassroom;
