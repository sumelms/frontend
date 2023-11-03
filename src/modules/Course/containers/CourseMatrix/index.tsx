import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Accordion, Button, Table } from 'flowbite-react';
import { HiDocumentDownload } from 'react-icons/hi';

import CourseMatrixService, { IMatrix } from '../../services/CourseMatrixService';

import Section from '../../components/Section';

type RouteParams = {
  course: string;
};

const CourseMatrix: React.FC = () => {
  const params = useParams() as RouteParams;
  const [matrix, setMatrix] = useState<IMatrix>();

  const fetchMatrix = (): void => {
    CourseMatrixService.fetchMatrix(params.course as string).then(
      (response): void => {
        setMatrix(response);
      },
    );
  };

  useEffect(() => {
    fetchMatrix();

    // TO DO: Remove Console Log
    console.log(matrix);
  }, []);

  return (
    <>
      <Section title="Matriz Curricular">
        <div className="space-y-6 break-words whitespace-pre-wrap">
          <p className="indent-8">
            {/*
              TO DO: Add Matrix Description
              {matrix.description}
            */}
            Description
          </p>
          <Button outline color="primary" onClick={() => console.log("Download Matrix")}>
            <HiDocumentDownload /> Baixar matriz curricular
          </Button>
        </div>
      </Section>
      <Accordion>
        <Accordion.Panel>
          {/*
            TO DO: Add Matrix Subjects
            { matrix.groups.map((group: IMatrixGroup) =>
              <Accordion>
                <Table>
                { group.subjects.map((subject: ISubjects) =>
                  <Table.Row />
                }
                </Table>
              </Accordion>
            )}
          */}
          <Accordion.Title>Primeiro semestre</Accordion.Title>
          <Accordion.Content>
            <Table hoverable={true} className="border-none rounded-none shadow-none sm:rounded-none">
              <Table.Head>
                <Table.HeadCell>Disciplina</Table.HeadCell>
                <Table.HeadCell>Descrição</Table.HeadCell>
                <Table.HeadCell>Créditos</Table.HeadCell>
                <Table.HeadCell>Carga horária</Table.HeadCell>
                <Table.HeadCell>Pré-requisitos</Table.HeadCell>
                <Table.HeadCell>Tipo</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Cálculo</Table.Cell>
                  <Table.Cell>
                    O curso cobre o material básico sobre funções de várias varáveis, incluindo: curvas no plano e no
                    espaço, continuidade, derivadas parciais, diferenciabilidade, máximos e mínimos, e extremos com
                    vínculos (Multiplicadores de Lagrange)
                  </Table.Cell>
                  <Table.Cell>8</Table.Cell>
                  <Table.Cell>90h</Table.Cell>
                  <Table.Cell>Não há</Table.Cell>
                  <Table.Cell>Obrigatória</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Integração Humano Computador (IHC)</Table.Cell>
                  <Table.Cell>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, unde corrupti. Id asperiores beatae
                    quos nemo voluptatem inventore, porro nostrum omnis hic, iusto odio nam animi? Voluptatibus quo
                    neque alias.
                  </Table.Cell>
                  <Table.Cell>8</Table.Cell>
                  <Table.Cell>90h</Table.Cell>
                  <Table.Cell>Não há</Table.Cell>
                  <Table.Cell>Obrigatória</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cálculo</Table.Cell>
                  <Table.Cell>
                    O curso cobre o material básico sobre funções de várias varáveis, incluindo: curvas no plano e no
                    espaço, continuidade, derivadas parciais, diferenciabilidade, máximos e mínimos, e extremos com
                    vínculos (Multiplicadores de Lagrange)
                  </Table.Cell>
                  <Table.Cell>8</Table.Cell>
                  <Table.Cell>90h</Table.Cell>
                  <Table.Cell>Não há</Table.Cell>
                  <Table.Cell>Obrigatória</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Accordion.Content>
          <Accordion.Title>Segundo semestre</Accordion.Title>
          <Accordion.Content>
            <Table hoverable={true} className="border-none rounded-none shadow-none sm:rounded-none">
              <Table.Head>
                <Table.HeadCell>Disciplina</Table.HeadCell>
                <Table.HeadCell>Descrição</Table.HeadCell>
                <Table.HeadCell>Créditos</Table.HeadCell>
                <Table.HeadCell>Carga horária</Table.HeadCell>
                <Table.HeadCell>Pré-requisitos</Table.HeadCell>
                <Table.HeadCell>Tipo</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Cálculo</Table.Cell>
                  <Table.Cell>
                    O curso cobre o material básico sobre funções de várias varáveis, incluindo: curvas no plano e no
                    espaço, continuidade, derivadas parciais, diferenciabilidade, máximos e mínimos, e extremos com
                    vínculos (Multiplicadores de Lagrange)
                  </Table.Cell>
                  <Table.Cell>8</Table.Cell>
                  <Table.Cell>90h</Table.Cell>
                  <Table.Cell>Não há</Table.Cell>
                  <Table.Cell>Obrigatória</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Integração Humano Computador (IHC)</Table.Cell>
                  <Table.Cell>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, unde corrupti. Id asperiores beatae
                    quos nemo voluptatem inventore, porro nostrum omnis hic, iusto odio nam animi? Voluptatibus quo
                    neque alias.
                  </Table.Cell>
                  <Table.Cell>8</Table.Cell>
                  <Table.Cell>90h</Table.Cell>
                  <Table.Cell>Não há</Table.Cell>
                  <Table.Cell>Obrigatória</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cálculo</Table.Cell>
                  <Table.Cell>
                    O curso cobre o material básico sobre funções de várias varáveis, incluindo: curvas no plano e no
                    espaço, continuidade, derivadas parciais, diferenciabilidade, máximos e mínimos, e extremos com
                    vínculos (Multiplicadores de Lagrange)
                  </Table.Cell>
                  <Table.Cell>8</Table.Cell>
                  <Table.Cell>90h</Table.Cell>
                  <Table.Cell>Não há</Table.Cell>
                  <Table.Cell>Obrigatória</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default CourseMatrix;
