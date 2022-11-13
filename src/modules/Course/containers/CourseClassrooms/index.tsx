import React from 'react';
import { HiCalendar, HiClock, HiInbox, HiTable, HiUser } from 'react-icons/hi';
import { RiHome2Fill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

import { BreadcrumbProps } from '../../../../components/Breadcrumb';
import CardSubject, { CardSubjectProps } from '../../components/CardSubject';
import FilterAccordion, {
  FilterSectionProps,
} from '../../components/FilterAccordion';
import Section from '../../components/Section';
import PageLayout from '../../layouts/Default';
import { getIcons, getMenuItems } from '../../layouts/Default/helpers';
import CourseService from '../../services/CourseService';

type RouteParams = {
  course: string;
};

const breadcrumb: BreadcrumbProps = {
  ariaLabel: 'course-overview',
  breadcrumbItems: [
    {
      icon: RiHome2Fill,
      linkText: 'Home',
      linkState: 'courses',
    },
    {
      linkText: 'Courses',
      linkState: 'courses',
    },
  ],
};

const CourseClassrooms: React.FC = () => {
  const params = useParams() as RouteParams;

  // @TODO: Refactor to use a Service HTTP request.
  const course = CourseService.getCourse(params.course);
  const { title, subtitle } = course;

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
    <PageLayout
      title={title}
      subtitle={subtitle}
      items={getIcons(course.overview.info)}
      breadcrumb={breadcrumb}
      menuItems={getMenuItems(params.course)}
    >
      <Section
        title="Acessar turmas diponiveis"
        titleAs="h2"
        titleClassName="text-3xl font-bold text-gray-700 dark:text-white"
      >
        <div className="flex w-full mt-16 gap-x-6">
          <FilterAccordion title="Filtrar Turmas" sections={filterSections} />
          <div className="w-full">
            <div className="flex mb-8 text-2xl gap-x-2">
              <p>Turmas disponiveis</p>
              <p className="font-bold">obrigatórias</p>
            </div>
            <div className="flex h-full flex-wrap gap-x-4  gap-y-2.5">
              {cardSubjects.map(({ subject, info }, key) => (
                <CardSubject key={key} subject={subject} info={info} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default CourseClassrooms;
