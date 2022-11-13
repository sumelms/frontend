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
import getMenuItems from '../../helpers/getMenuItems';
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
      menuItems={getMenuItems(params.course)}
    >
      <div>
        <Section
          title="Apresentação do Curso"
          titleAs="h2"
          titleClassName="text-3xl font-bold text-gray-700 dark:text-white"
        >
          <div className="my-6 space-y-6 text-lg font-semibold leading-8 text-gray-600 dark:text-white ">
            <div>{course.description}</div>
            <div>{course.description}</div>
          </div>
          <div>
            <div className="space-y-9 lg:space-y-0 lg:flex lg:gap-x-14">
              {[1, 2, 3].map((i) => (
                <div className="w-4/5 lg:w-1/3" key={i.toString()}>
                  <img
                    className="object-cover rounded-[28px] w-full	"
                    src="https://www.placecage.com/c/500/300"
                    alt=""
                  />
                  <div className="m-6 mt-3">
                    <em className="text-xs text-center text-gray-600 dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat cumque error maiores commodi ipsum, temporibus
                      similique at facere deleniti suscipit nulla culpa iste,
                      distinctio. {i}
                    </em>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Corpo Docente" className="mt-7">
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
