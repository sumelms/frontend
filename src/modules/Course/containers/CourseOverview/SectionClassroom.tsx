import React, { ComponentProps } from 'react';

import CardClassroom from '../../components/CardClassroom';

const SectionClassroom: React.FC<ComponentProps<'div'>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
        Turmas de Cálculo em andamento
      </h3>
      <div className="flex h-full flex flex-wrap gap-x-2 md:gap-x-6 lg:gap-x-16 gap-y-2.5 lg:gap-y-20 md:gap-y-8">
        <CardClassroom
          classroom={{
            title: 'Calculo - Sistemas de Informação',
          }}
          info={{
            data: 'Segunda, 28 Agosto',
            time: '19',
            educator: 'Dra. Izadora Perk',
            modality: 'Remoto',
          }}
          students={{
            title: 'Estudantes',
            text: '+25 peolple joined the classroom',
          }}
        />
        <CardClassroom
          classroom={{
            title: 'Calculo - Engenharia',
          }}
          info={{
            data: 'Segunda, 28 Agosto',
            time: '19',
            educator: 'Dra. Izadora Perk',
            modality: 'Remoto',
          }}
          students={{
            title: 'Estudantes',
            text: '+25 peolple joined the classroom',
          }}
        />
      </div>
    </div>
  );
};

export default SectionClassroom;
