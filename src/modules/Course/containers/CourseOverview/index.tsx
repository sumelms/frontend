import { Breadcrumb } from 'flowbite-react';
import React from 'react';
import {
  RiBarChartBoxLine,
  RiHome2Fill,
  RiQuestionnaireLine,
  RiTimer2Line,
} from 'react-icons/ri';
import { useParams } from 'react-router-dom';

import { HeaderInfoItem, HeaderInfoProps } from './HeaderInfoItem';

type RouteParams = {
  course: string;
};

type HeaderProps = {
  title: string;
  subtitle: string;
  headerInfo: HeaderInfoProps[];
};

const header: HeaderProps = {
  title: 'Sistemas de Informação',
  subtitle: 'O caminho para a sua formação profissional e pessoal.',
  headerInfo: [
    {
      icon: RiTimer2Line,
      item: 'Grau',
      itemText: 'Bacharelado',
      className: `inline-flex mr-2 mt-10 text-base`,
    },
    {
      icon: RiQuestionnaireLine,
      item: 'Modalidade do curso:',
      itemText: 'Híbrido',
      className: `inline-flex mr-2 mt-10 text-base`,
    },
    {
      icon: RiBarChartBoxLine,
      item: '25:',
      itemText: 'Lições',
      className: `inline-flex mr-2 mt-10 text-base`,
    },
  ],
};

const CourseOverview: React.FC = () => {
  const { course } = useParams<RouteParams>();

  return (
    <>
      <header>
        <div className="flex w-full bg-zinc-900 text-white min-h-fit h-80">
          <div className="flex-col pl-24 pt-14">
            <h1>{header.title}</h1>
            <br></br>
            <h3>{header.subtitle}</h3>
            <div>
              {header.headerInfo.map((info: HeaderInfoProps) => {
                return <HeaderInfoItem key={info.key} {...info} />;
              })}
            </div>
          </div>
        </div>
      </header>
      <div className="bg-gray-200 flex mx-auto flex max-w-4xl flex-col gap-4">
        <div>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="#" icon={RiHome2Fill}>
              Home
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="flex flex-col gap-2">
          THIS IS THE COURSE {course} OVERVIEW PAGE;
        </div>
      </div>
    </>
  );
};

export default CourseOverview;
