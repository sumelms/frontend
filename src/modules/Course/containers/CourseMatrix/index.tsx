import { Accordion, Button, Table } from 'flowbite-react';
import React from 'react';
import { HiDownload, HiViewGrid } from 'react-icons/hi';

import Section from '../../components/Section';

const CourseMatrix: React.FC = () => {
  return (
    <>
      <Section title="Matriz Curricular">
        <div className="space-y-6 break-words whitespace-pre-wrap">
          <p className="indent-8">
            Essa matriz curricular busca um equilíbrio que faça com que a
            predominância do caráter formador do curso se harmonize com a
            necessária extensão de informação fundamental, sobretudo ação
            profissional do docente de Segundo Grau inclui-se de forma decisiva
            entre os objetivos do curso.
          </p>
          <ol className="space-y-1 list-decimal list-inside">
            <li>
              <strong>Disciplinas Obrigatórias:</strong> O curso possui 14
              disciplinas obrigatórias, das quais 2 são de 12 créditos e 12 de 6
              créditos. Estas disciplinas dividem-se em 3 grupos:
            </li>

            <p>
              1.1 <strong>Disciplinas introdutórias:</strong>
              Introdução à Filosofia e Filosofia Geral. Ambas de 12 créditos,
              uma em cada semestre. O aluno obrigatoriamente deve cursá-las
              antes de todas as demais.
            </p>
            <p>
              a) Introdução à Filosofia I e Filosofia Geral I, ambas de 06
              créditos, uma em cada semestre. O aluno as cursa no 1º ano; 1.2
            </p>
            <p>
              b) Introdução à Filosofia I e Filosofia Geral I, ambas de 06
              créditos, uma em cada semestre. O aluno as cursa no 1º ano; 1.2
            </p>
            <p>
              1.2 <strong>Disciplinas históricas:</strong> Histórias da
              Filosofia Antiga, Medieval, Moderna I e II, e Contemporânea.
              Algumas das quais são ordenadas por pré-requisitos como adiante
              será descrito.
            </p>
          </ol>
          <div className="flex content-center space-x-3">
            <HiDownload className="w-6 h-6" />
            <span className="items-center font-semibold tracking-wider font-roboto">
              Clique no botão abaixo para download a Matriz Curricular do curso
            </span>
          </div>
          <Button outline color="red" className="content-center">
            Baixar matriz curricular
          </Button>
        </div>
        <div className="flex w-full">
          <Accordion
            className="w-full border-none divide-y-0 divide-transparent"
            alwaysOpen={true}
          >
            <Accordion.Panel>
              <Accordion.Title className="mb-2 text-gray-100 bg-gray-800 first:!rounded-t-lg rounded rounded-lg hover:bg-gray-900 hover:text-white capitalize">
                Primeiro semestre
              </Accordion.Title>
              <Accordion.Content className="px-0 py-0 -mt-2 bg-white black:bg-gray-600">
                <div className="flex justify-between w-full h-full px-6 py-3 bg-gray-100 rounded-lg">
                  <p className="font-semibold text-gray-700">
                    Informações gerais do semestre
                  </p>
                  <div className="flex items-center gap-x-5">
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
                <Table
                  hoverable={true}
                  className="border-none rounded-none shadow-none sm:rounded-none"
                >
                  <Table.Head>
                    <Table.HeadCell className="bg-white">
                      Nome da Disciplina
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-white">
                      Descrição
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-white">
                      Category
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-white">
                      Pré-requisitos
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-white">Tipo</Table.HeadCell>
                    <Table.HeadCell className="bg-white">
                      Carga horária
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Cálculo
                      </Table.Cell>
                      <Table.Cell>
                        O curso cobre o material básico sobre funções de várias
                        varáveis, incluindo: curvas no plano e no espaço,
                        continuidade, derivadas parciais, diferenciabilidade,
                        máximos e mínimos, e extremos com vínculos
                        (Multiplicadores de Lagrange)
                      </Table.Cell>
                      <Table.Cell>8</Table.Cell>
                      <Table.Cell>Não há</Table.Cell>
                      <Table.Cell>Obrigatória</Table.Cell>
                      <Table.Cell>90h</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Integração Humano Computador (IHC)
                      </Table.Cell>
                      <Table.Cell>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, unde corrupti. Id asperiores beatae quos nemo
                        voluptatem inventore, porro nostrum omnis hic, iusto
                        odio nam animi? Voluptatibus quo neque alias.
                      </Table.Cell>
                      <Table.Cell>8</Table.Cell>
                      <Table.Cell>Não há</Table.Cell>
                      <Table.Cell>Obrigatória</Table.Cell>
                      <Table.Cell>90h</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Cálculo
                      </Table.Cell>
                      <Table.Cell>
                        O curso cobre o material básico sobre funções de várias
                        varáveis, incluindo: curvas no plano e no espaço,
                        continuidade, derivadas parciais, diferenciabilidade,
                        máximos e mínimos, e extremos com vínculos
                        (Multiplicadores de Lagrange)
                      </Table.Cell>
                      <Table.Cell>8</Table.Cell>
                      <Table.Cell>Não há</Table.Cell>
                      <Table.Cell>Obrigatória</Table.Cell>
                      <Table.Cell>90h</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="mb-2 text-gray-100 bg-gray-800 first:!rounded-t-lg rounded rounded-lg hover:bg-gray-900 hover:text-white">
                Segundo Semestre
              </Accordion.Title>
              <Accordion.Content className="px-0 py-0 -mt-2 bg-white black:bg-gray-600">
                <div className="flex justify-between w-full h-full p-2 bg-gray-100 rounded-lg">
                  <p className="font-semibold text-gray-700">
                    Informações gerais do semestre
                  </p>
                  <div className="flex items-center gap-x-5">
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
                <Table
                  hoverable={true}
                  className="border-none rounded-none shadow-none sm:rounded-none"
                >
                  <Table.Head>
                    <Table.HeadCell className="bg-white">
                      Nome da Disciplina
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-white">
                      Descrição
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-white">
                      Category
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-white">
                      Pré-requisitos
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-white">Tipo</Table.HeadCell>
                    <Table.HeadCell className="bg-white">
                      Carga horária
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Cálculo
                      </Table.Cell>
                      <Table.Cell>
                        O curso cobre o material básico sobre funções de várias
                        varáveis, incluindo: curvas no plano e no espaço,
                        continuidade, derivadas parciais, diferenciabilidade,
                        máximos e mínimos, e extremos com vínculos
                        (Multiplicadores de Lagrange)
                      </Table.Cell>
                      <Table.Cell>8</Table.Cell>
                      <Table.Cell>Não há</Table.Cell>
                      <Table.Cell>Obrigatória</Table.Cell>
                      <Table.Cell>90h</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Integração Humano Computador (IHC)
                      </Table.Cell>
                      <Table.Cell>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, unde corrupti. Id asperiores beatae quos nemo
                        voluptatem inventore, porro nostrum omnis hic, iusto
                        odio nam animi? Voluptatibus quo neque alias.
                      </Table.Cell>
                      <Table.Cell>8</Table.Cell>
                      <Table.Cell>Não há</Table.Cell>
                      <Table.Cell>Obrigatória</Table.Cell>
                      <Table.Cell>90h</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Cálculo
                      </Table.Cell>
                      <Table.Cell>
                        O curso cobre o material básico sobre funções de várias
                        varáveis, incluindo: curvas no plano e no espaço,
                        continuidade, derivadas parciais, diferenciabilidade,
                        máximos e mínimos, e extremos com vínculos
                        (Multiplicadores de Lagrange)
                      </Table.Cell>
                      <Table.Cell>8</Table.Cell>
                      <Table.Cell>Não há</Table.Cell>
                      <Table.Cell>Obrigatória</Table.Cell>
                      <Table.Cell>90h</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </Section>
    </>
  );
};

export default CourseMatrix;
