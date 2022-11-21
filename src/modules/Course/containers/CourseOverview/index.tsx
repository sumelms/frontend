import React from 'react';
import {
  HiArrowNarrowUp,
  HiOutlineChatAlt2,
  HiOutlinePlay,
  HiOutlineStar,
  HiOutlineUsers,
} from 'react-icons/hi';
// import { RiHome2Fill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

// import { BreadcrumbProps } from '../../../../components/Breadcrumb';
import CardEducator from '../../components/CardEducator';
import Section from '../../components/Section';
import CourseService from '../../services/CourseService';

type RouteParams = {
  course: string;
};

const CourseOverview: React.FC = () => {
  const params = useParams() as RouteParams;

  // @TODO: Refactor to use a Service HTTP request.
  const { description, educators, gallery } = CourseService.getCourseOverview(
    params.course,
  );

  return (
    <>
      <Section
        title="Apresentação do Curso"
        titleAs="h2"
        titleClassName="text-3xl font-bold text-gray-700 dark:text-white"
      >
        <div className="my-6 space-y-6 text-lg leading-8 text-gray-600 dark:text-white ">
          {description}
        </div>
        <div>
          <div className="space-y-9 lg:space-y-0 lg:flex lg:gap-x-14">
            {gallery.map(({ img, text }, key) => (
              <div className="w-4/5 lg:w-1/3 " key={key}>
                <img
                  className="object-cover rounded-[28px] w-full max-h-72"
                  src={img}
                  alt=""
                />
                <div className="m-6 mt-3">
                  <em className="text-xs text-center text-gray-600 dark:text-white">
                    {text}
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
            key={key}
            educator={educator}
            action={[
              { icon: HiArrowNarrowUp, name: 'Conferir Currículo' },
              { icon: HiOutlineChatAlt2, name: 'Enviar mensagem' },
            ]}
            info={[
              { icon: HiOutlinePlay, name: 'Subjects', value: 7 },
              { icon: HiOutlineUsers, name: 'Estudantes', value: 7 },
              { icon: HiOutlineStar, name: 'Avaliação', value: 7 },
            ]}
          />
        ))}
      </Section>
    </>
  );
};

export default CourseOverview;
