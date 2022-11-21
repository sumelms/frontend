import React from 'react';
import { HiCalendar, HiClock, HiInbox, HiTable, HiUser } from 'react-icons/hi';

import CardSubject, { CardSubjectProps } from '../../components/CardSubject';
import FilterAccordion, {
  FilterSectionProps,
} from '../../components/FilterAccordion';
import Section from '../../components/Section';

const CourseClassrooms: React.FC = () => {
  const filterSections: FilterSectionProps[] = [
    {
      id: 'category',
      name: 'categoria',
      options: [
        { id: 'obrigatoria', name: 'obrigatória', value: '1' },
        { id: 'optativa', name: 'optativa', value: '2' },
        { id: 'eletiva', name: 'eletiva', value: '3' },
        { id: 'livre', name: 'livre', value: '4' },
      ],
    },
    {
      id: 'modality',
      name: 'modalidade',
      options: [
        { id: 'presencial', name: 'presencial', value: '1' },
        { id: 'semipresencial', name: 'semipresencial', value: '2' },
        { id: 'remoto', name: 'remoto', value: '3' },
      ],
    },
  ];

  const cardSubjects: CardSubjectProps[] = [
    {
      subject: {
        title: 'Calculo - Sistemas de Informação',
        subtitle: 'Meu progresso na turma:',
      },

      info: [
        { icon: HiCalendar, name: 'Inicio:', text: '28 Agosto' },
        { icon: HiTable, name: 'Término:', text: '12 Dezembro' },
        { icon: HiClock, text: '19h - 22h' },
        { icon: HiInbox, text: 'Presencial' },
        { icon: HiUser, text: 'Dr. John' },
      ],
    },
    {
      subject: {
        title: 'Calculo',
        subtitle: 'Meu progresso na turma:',
      },

      info: [
        { icon: HiCalendar, name: 'Inicio:', text: '28 Agosto' },
        { icon: HiTable, name: 'Término:', text: '12 Dezembro' },
        { icon: HiClock, text: '19h - 22h' },
        { icon: HiInbox, text: 'Presencial' },
        { icon: HiUser, text: 'Dr. John' },
      ],
    },
    {
      subject: {
        title: 'Sistemas de Informação',
        subtitle: 'Meu progresso na turma:',
      },

      info: [
        { icon: HiCalendar, name: 'Inicio:', text: '28 Agosto' },
        { icon: HiTable, name: 'Término:', text: '12 Dezembro' },
        { icon: HiClock, text: '19h - 22h' },
        { icon: HiInbox, text: 'Presencial' },
        { icon: HiUser, text: 'Dr. John' },
      ],
    },
    {
      subject: {
        title: 'Banco de Dados',
        subtitle: 'Meu progresso na turma:',
      },

      info: [
        { icon: HiCalendar, name: 'Inicio:', text: '28 Agosto' },
        { icon: HiTable, name: 'Término:', text: '12 Dezembro' },
        { icon: HiClock, text: '19h - 22h' },
        { icon: HiInbox, text: 'Presencial' },
        { icon: HiUser, text: 'Dr. John' },
      ],
    },
  ];

  return (
    <>
      <Section title="Acessar turmas diponiveis">
        <div className="flex w-full space-x-6">
          <FilterAccordion title="Filtrar Turmas" sections={filterSections} />
          <div className="w-full">
            <div className="flex mb-8 text-2xl gap-x-2">
              <p>Turmas disponiveis</p>
              <p className="font-bold">obrigatórias</p>
            </div>
            <div className="flex h-full flex-wrap gap-x-4 gap-y-2.5">
              {cardSubjects.map(({ subject, info }, key) => (
                <CardSubject key={key} subject={subject} info={info} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CourseClassrooms;
