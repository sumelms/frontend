import { Button, Table } from 'flowbite-react';
import React from 'react';
import { HiDownload, HiSearch, HiViewGrid } from 'react-icons/hi';

import Section from '../../components/Section';

const CourseClassroomsSubscription: React.FC = () => {
  return (
    <>
      <Section title="Inscrição nas Turmas">
        <div className="w-full bg-white rounded-lg lg:p-4">
          <div className="flex justify-between m-5">
            <p className="text-lg font-semibold text-gray-700">Tumas em andamento</p>
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
                  <HiSearch className="w-6 h-6 fill-gray-500 dark:fill-white" />
                </span>
              </label>
              <button>
                <span className="text-gray-500 hover:text-blue-500 dark:text-white hover:underline hover:underline-offset-4">
                  Filtros
                </span>
              </button>
              <button>
                <HiViewGrid className="w-6 h-6 fill-gray-500 hover:fill-blue-500 dark:fill-white" />
              </button>
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
                    className="flex font-medium text-gray-500 dark:text-white hover:text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    <HiDownload className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Baixar Plano</span>
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <Button outline color="failure">
                    Solicitar dispensa
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Álgebra</Table.Cell>
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
                    className="flex font-medium text-gray-500 dark:text-white hover:text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    <HiDownload className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Baixar Plano</span>
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <Button outline color="failure">
                    Solicitar dispensa
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Geometria
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
                    className="flex font-medium text-gray-500 dark:text-white hover:text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    <HiDownload className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Baixar Plano</span>
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <Button outline color="success">
                    Solicitar Inscrição
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Section>
    </>
  );
};

export default CourseClassroomsSubscription;
