import { Button, Table } from 'flowbite-react';
import React from 'react';
import { HiDownload, HiSearch, HiViewGrid } from 'react-icons/hi';
import { RiHome2Fill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

import { BreadcrumbProps } from '../../../../components/Breadcrumb';
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

const CourseClassroomsSubscription: React.FC = () => {
  const params = useParams() as RouteParams;

  // @TODO: Refactor to use a Service HTTP request.
  const course = CourseService.getCourse(params.course);
  const { title, subtitle } = course;

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      items={getIcons(course.overview.info)}
      breadcrumb={breadcrumb}
      menuItems={getMenuItems(params.course)}
    >
      <Section
        title="Inscrição nas Turmas"
        titleAs="h2"
        titleClassName="text-3xl font-bold text-gray-700 dark:text-white"
        className=""
      >
        <div className="w-full mt-10 bg-white rounded-lg lg:p-4">
          <div className="flex justify-between my-5">
            <p className="ml-4 text-lg font-semibold text-gray-700">
              Tumas em andamento
            </p>
            <div className="flex items-center gap-x-5">
              <label className="relative block ">
                <span className="sr-only">Search</span>
                <input
                  className="block w-full py-2 pl-3 bg-gray-100 border border-transparent rounded-md shadow-sm placeholder:italic placeholder:text-gray-400 pr-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="burcar turmas, disciplinas..."
                  type="text"
                  name="search"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <HiSearch className="w-6 h-6 fill-gray-500" />
                </span>
              </label>
              <span className="text-gray-700">Filtros</span>
              <HiViewGrid className="w-6 h-6 fill-gray-500" />
            </div>
          </div>
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell>diciplina</Table.HeadCell>
              <Table.HeadCell>tipo</Table.HeadCell>
              <Table.HeadCell>vagas</Table.HeadCell>
              <Table.HeadCell>modalidade</Table.HeadCell>
              <Table.HeadCell>horário</Table.HeadCell>
              <Table.HeadCell>status</Table.HeadCell>
              <Table.HeadCell>professor titular</Table.HeadCell>
              <Table.HeadCell>turma</Table.HeadCell>
              <Table.HeadCell>plano de ensino</Table.HeadCell>
              <Table.HeadCell>inscrição</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Cálculo I
                </Table.Cell>
                <Table.Cell>obrigatória</Table.Cell>
                <Table.Cell>90</Table.Cell>
                <Table.Cell>Remoto</Table.Cell>
                <Table.Cell>19:00</Table.Cell>
                <Table.Cell>andamento</Table.Cell>
                <Table.Cell>Prof. Dra. Marie Curie</Table.Cell>
                <Table.Cell>Sistemas de Informação</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="flex font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    <span>
                      <HiDownload />
                    </span>
                    <span>Baixar Plano</span>
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <Button outline fullSized color="red">
                    Solicitar dispensa
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Section>
    </PageLayout>
  );
};

export default CourseClassroomsSubscription;
