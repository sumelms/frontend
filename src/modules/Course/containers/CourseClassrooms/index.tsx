import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiCalendar, HiClock, HiInbox, HiTable, HiUser } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

import CardSubject, { CardSubjectProps } from '../../components/CardSubject';
import FilterAccordion, {
  FilterSectionProps,
} from '../../components/FilterAccordion';
import Section from '../../components/Section';
import CourseClassroomsService, {
  IFilterSection,
} from '../../services/CourseClassroomsService';

type RouteParams = {
  course: string;
};

const getDate = (t: any, _date: string) => {
  return t('course.classrooms.class_date', {
    val: new Date(_date),
    formatParams: {
      val: {
        month: 'long',
        day: 'numeric',
      },
    },
  });
};

const CourseClassrooms: React.FC = () => {
  const params = useParams() as RouteParams;
  const { t } = useTranslation('course');
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
                  subtitle: t('course.classrooms.subtitle'),
                },
                info: [
                  {
                    name: t('course.classrooms.start'),
                    text: getDate(t, item.starts_at),
                    icon: HiCalendar,
                  },
                  {
                    icon: HiTable,
                    name: t('course.classrooms.end'),
                    text: getDate(t, item.ends_at),
                  },
                  {
                    icon: HiClock,
                    text: '19h - 22h',
                  },
                  {
                    icon: HiUser,
                    text: 'Dr. John',
                  },
                  {
                    icon: HiInbox,
                    text: item.modality.name,
                  },
                ],
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
            <div className="flex flex-wrap h-full gap-x-4">
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
