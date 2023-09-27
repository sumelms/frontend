import { Accordion, Button, Table } from 'flowbite-react';
import React from 'react';
import { HiDocumentDownload } from 'react-icons/hi';

import Section from '../../components/Section';

const CourseMatrix: React.FC = () => {
  return (
    <>
      <Section title="Matriz Curricular">
        <div className="space-y-6 break-words whitespace-pre-wrap">
          <p className="indent-8">
            Essa matriz curricular busca um equilíbrio que faça com que a predominância do caráter formador do curso se
            harmonize com a necessária extensão de informação fundamental, sobretudo ação profissional do docente de
            Segundo Grau inclui-se de forma decisiva entre os objetivos do curso.
          </p>
          <ol className="space-y-1 list-decimal list-inside">
            <li>
              <strong>Disciplinas Obrigatórias:</strong> O curso possui 14 disciplinas obrigatórias, das quais 2 são de
              12 créditos e 12 de 6 créditos. Estas disciplinas dividem-se em 3 grupos:
            </li>

            <p>
              1.1 <strong>Disciplinas introdutórias:</strong>
              Introdução à Filosofia e Filosofia Geral. Ambas de 12 créditos, uma em cada semestre. O aluno
              obrigatoriamente deve cursá-las antes de todas as demais.
            </p>
            <p>
              a) Introdução à Filosofia I e Filosofia Geral I, ambas de 06 créditos, uma em cada semestre. O aluno as
              cursa no 1º ano; 1.2
            </p>
            <p>
              b) Introdução à Filosofia I e Filosofia Geral I, ambas de 06 créditos, uma em cada semestre. O aluno as
              cursa no 1º ano; 1.2
            </p>
            <p>
              1.2 <strong>Disciplinas históricas:</strong> Histórias da Filosofia Antiga, Medieval, Moderna I e II, e
              Contemporânea. Algumas das quais são ordenadas por pré-requisitos como adiante será descrito.
            </p>
          </ol>
          <Button outline color="primary">
            <HiDocumentDownload /> Baixar matriz curricular
          </Button>
        </div>
      </Section>
      <Accordion>
        <Accordion.Panel>
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
