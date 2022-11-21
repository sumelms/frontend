import React, { useEffect, useState } from 'react';
import {
  HiArrowNarrowUp,
  HiOutlineChatAlt2,
  HiOutlinePlay,
  HiOutlineStar,
  HiOutlineUsers,
} from 'react-icons/hi';
import { useParams } from 'react-router-dom';

import Markdown from '../../../../components/Markdown';
import CardEducator from '../../components/CardEducator';
import Section from '../../components/Section';
import CourseService, { ICourse } from '../../services/CourseService';

type RouteParams = {
  course: string;
};

const CourseOverview: React.FC = () => {
  const params = useParams() as RouteParams;
  const [course, setCourse] = useState<ICourse>();

  const fetchCourse = (): void => {
    CourseService.fetchCourse(
      params.course as string,
      'fields=description,educators,gallery',
    ).then((response): void => {
      setCourse(response);
    });
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  if (!course) {
    return <>Course Not found</>;
  }

  return (
    <>
      <Section title="Apresentação do Curso">
        <Markdown content={course.description} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
          {course.gallery.map(({ img, text }, key) => (
            <div key={key}>
              <img
                className="object-cover rounded-[28px] w-full max-h-72"
                src={img}
                alt=""
              />
              <div className="px-6 mt-2 leading-tight">
                <em className="text-xs text-center text-gray-600 dark:text-white">
                  {text}
                </em>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Corpo Docente">
        {course &&
          course.educators.map((educator, key) => (
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
