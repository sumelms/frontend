import React from 'react';
import {
  HiArrowNarrowUp,
  HiOutlineChatAlt2,
  HiOutlinePlay,
  HiOutlineStar,
  HiOutlineUsers,
} from 'react-icons/hi';
import { RiHome2Fill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

import { BreadcrumbProps } from '../../../../components/Breadcrumb';
import CardEducator from '../../components/CardEducator';
import PageLayout from '../../components/PageLayout';
import Section from '../../components/Section';
import { getIcons } from '../../helpers';
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

const CourseOverview: React.FC = () => {
  const params = useParams<RouteParams>();

  // @TODO: Refactor to use a Service HTTP request.
  const course = CourseService.getCourse(params.course);
  const { title, subtitle, educators } = course;

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      items={getIcons(course.overview.info)}
      breadcrumb={breadcrumb}
    >
      <div className="flex flex-col gap-2 my-2">
        <Section
          title="Apresentação do Curso"
          titleAs="h2"
          titleClassName="text-xl text-gray-900 dark:text-white"
        >
          <div className="my-6 space-y-2">{course.description}</div>
          <div>
            <div className="grid grid-flow-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i.toString()}>
                  <img
                    className="object-cover w-full rounded-t-lg h-96"
                    src="https://via.placeholder.com/450"
                    alt=""
                  />
                  <em className="text-xs text-gray-900 dark:text-white">
                    Image subtitle {i}
                  </em>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Corpo Docente">
          {educators.map((educator, key) => (
            <CardEducator
              key={key.toString()}
              educator={educator}
              action={[
                { icon: HiArrowNarrowUp, name: 'Conferir Currículo Lattes' },
                { icon: HiOutlineChatAlt2, name: 'Enviar uma mensagem' },
              ]}
              info={[
                { icon: HiOutlinePlay, name: 'Subjects', value: 7 },
                { icon: HiOutlineUsers, name: 'Estudantes', value: 7 },
                { icon: HiOutlineStar, name: 'Avaliação', value: 7 },
              ]}
            />
          ))}
        </Section>
      </div>
    </PageLayout>
  );
};

export default CourseOverview;
