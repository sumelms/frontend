import { PageNavbarItemsProps } from '../components/PageLayout/PageNavbar';

const getMenuItems = (course: string): PageNavbarItemsProps[] => {
  return [
    { label: 'Apresentação', route: `/course/${course}` },
    { label: 'Acessar turmas', route: `/course/${course}/classrooms` },
    {
      label: 'Inscrição nas turmas',
      route: `/course/${course}/classrooms/subscription`,
    },
    {
      label: 'Matriz Curricular',
      route: `/course/${course}/matrix`,
    },
  ];
};

export default getMenuItems;
