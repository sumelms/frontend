import React, { ComponentProps, useEffect, useState } from 'react';
import { HiCalendar, HiClock, HiInbox, HiTable, HiUser } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

import CardSubject, { CardSubjectProps } from '../../components/CardSubject';
import FilterAccordion, {
  FilterSectionProps,
} from '../../components/FilterAccordion';
import Section from '../../components/Section';
import CourseClassroomsService, {
  IClassroomDetail,
  IFilterSection,
} from '../../services/CourseClassroomsService';

type RouteParams = {
  course: string;
};

const infoIcons: { [key: string]: React.FC<ComponentProps<'svg'>> } = {
  start: HiCalendar,
  end: HiTable,
  lessons: HiClock,
  period: HiClock,
  modality: HiInbox,
  educator: HiUser,
};

const getInfo = (detail: IClassroomDetail) => ({
  icon: infoIcons[detail.key],
  name: detail.label,
  text: detail.value,
});

const CourseClassrooms: React.FC = () => {
  const params = useParams() as RouteParams;
  const [filterSections, setFilterSections] = useState<Array<IFilterSection>>();
  const [classrooms, setClassrooms] = useState<Array<CardSubjectProps>>();

  const fetchFilters = (): void => {
    CourseClassroomsService.fetchFilters().then((response): void => {
      setFilterSections(response);
    });
  };

  const fetchClassrooms = (): void => {
    CourseClassroomsService.fetchClassrooms(params.course as string).then(
      (response): void => {
        setClassrooms(
          response.map(
            (item) =>
              ({
                subject: {
                  title: item.name,
                  subtitle: 'Meu progresso na turma:',
                },
                info: [
                  ...item.details,
                  {
                    key: 'modality',
                    label: '',
                    value: item.modality.name,
                  },
                ].map((detail: IClassroomDetail) => {
                  const infos = getInfo(detail);

                  return infos;
                }),
              } as CardSubjectProps),
          ),
        );
      },
    );
  };

  useEffect(() => {
    fetchFilters();
    fetchClassrooms();
  }, []);

  return (
    <>
      <Section title="Acessar turmas diponiveis">
        <div className="flex w-full space-x-6">
          {filterSections && (
            <FilterAccordion
              title="Filtrar Turmas"
              sections={filterSections as FilterSectionProps[]}
            />
          )}
          <div className="w-full">
            <div className="flex mb-8 text-2xl gap-x-2">
              <p>Turmas disponiveis</p>
              <p className="font-bold">obrigatórias</p>
            </div>
            <div className="flex h-full flex-wrap gap-x-4 gap-y-2.5">
              {classrooms &&
                classrooms.map(({ subject, info }, key) => (
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
