import { Accordion } from 'flowbite-react';
import { Checkbox } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { AccordionPanel } from 'flowbite-react/lib/esm/components/Accordion/AccordionPanel';
import { AccordionTitle } from 'flowbite-react/lib/esm/components/Accordion/AccordionTitle';
import React from 'react';
import {
  HiCalendar,
  HiClock,
  HiInbox,
  HiTable,
  HiUser,
  HiX,
} from 'react-icons/hi';
import { RiHome2Fill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

import { BreadcrumbProps } from '../../../../components/Breadcrumb';
import CardSubject from '../../components/CardSubject';
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

const CourseClassrooms: React.FC = () => {
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
        title="Acessar turmas diponiveis para ({course.title})"
        titleAs="h2"
        titleClassName="text-3xl font-bold text-gray-700 dark:text-white"
      >
        <div className="flex w-full mt-16 gap-x-5">
          <div className="w-72">
            <div className="flex items-center justify-between h-16 p-3 ">
              <p className="text-2xl">Filtrar turmas</p>
              <HiX className="w-5 h-5" />
            </div>
            <Accordion alwaysOpen={true}>
              <AccordionPanel>
                <AccordionTitle>Categoria</AccordionTitle>
                <Accordion.Content>
                  <div className="space-y-8">
                    <div className="flex items-center gap-8">
                      <Checkbox className="w-6 h-6" id="need" />
                      <Label htmlFor="need">Obrigatórias</Label>
                    </div>
                  </div>
                </Accordion.Content>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Categorias</AccordionTitle>
                <Accordion.Content>
                  <div className="space-y-8">
                    <div className="flex items-center gap-8">
                      <Checkbox id="need" />
                      <Label htmlFor="need">Obrigatórias</Label>
                    </div>
                    <div className="flex items-center gap-8">
                      <Checkbox id="need" />
                      <Label htmlFor="need">Obrigatórias</Label>
                    </div>
                    <div className="flex items-center gap-8">
                      <Checkbox id="need" />
                      <Label htmlFor="need">Obrigatórias</Label>
                    </div>
                  </div>
                </Accordion.Content>
              </AccordionPanel>
            </Accordion>
          </div>
          <div className="w-full bg-blue-100">
            <div className="flex mb-8 text-2xl gap-x-2">
              <p>Turmas disponiveis</p>
              <p className="font-bold">obrigatórias</p>
            </div>
            <div className="flex h-full flex-wrap gap-x-4  gap-y-2.5">
              <CardSubject
                subject={{
                  title: 'Calculo - Sistemas de Informação',
                  subtitle: 'Meu progresso na turma:',
                }}
                info={[
                  { icon: HiCalendar, name: 'Inicio:', text: '28 Agosto' },
                  { icon: HiTable, name: 'Término:', text: '12 Dezembro' },
                  { icon: HiClock, text: '19h - 22h' },
                  { icon: HiInbox, text: 'Presencial' },
                  { icon: HiUser, text: 'Dr. John' },
                ]}
              />
              <CardSubject
                subject={{
                  title: 'Calculo - Sistemas de Informação',
                  subtitle: 'Meu progresso na turma:',
                }}
                info={[
                  { icon: HiCalendar, name: 'Inicio:', text: '28 Agosto' },
                  { icon: HiTable, name: 'Término:', text: '12 Dezembro' },
                  { icon: HiClock, text: '19h - 22h' },
                  { icon: HiInbox, text: 'Presencial' },
                  { icon: HiUser, text: 'Dr. John' },
                ]}
              />
              <CardSubject
                subject={{
                  title: 'Calculo - Sistemas de Informação',
                  subtitle: 'Meu progresso na turma:',
                }}
                info={[
                  { icon: HiCalendar, name: 'Inicio:', text: '28 Agosto' },
                  { icon: HiTable, name: 'Término:', text: '12 Dezembro' },
                  { icon: HiClock, text: '19h - 22h' },
                  { icon: HiInbox, text: 'Presencial' },
                  { icon: HiUser, text: 'Dr. John' },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default CourseClassrooms;
