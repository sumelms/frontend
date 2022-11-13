import { ComponentProps } from 'react';
import {
  RiBarChartBoxLine,
  RiQuestionnaireLine,
  RiTimer2Line,
} from 'react-icons/ri';

import { overviewInfo } from '../../services/CourseService';
import { HeaderItemProps } from './Header';
import { NavbarItemsProps } from './Navbar';

const getMenuItems = (course: string): NavbarItemsProps[] => {
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

const headerItemsIcons: { [key: string]: React.FC<ComponentProps<'svg'>> } = {
  grade: RiTimer2Line,
  modality: RiQuestionnaireLine,
  lessons: RiBarChartBoxLine,
};

const getIcons = (items: Array<overviewInfo>): HeaderItemProps[] => {
  const headerItems: HeaderItemProps[] = [];

  items.forEach((item) => {
    headerItems.push({
      icon: headerItemsIcons[item.key],
      ...item,
    });
  });

  return headerItems;
};

export { getMenuItems, getIcons };
