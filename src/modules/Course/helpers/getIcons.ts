import { ComponentProps } from 'react';
import {
  RiBarChartBoxLine,
  RiQuestionnaireLine,
  RiTimer2Line,
} from 'react-icons/ri';

import { PageHeaderItemProps } from '../components/PageLayout';
import { overviewInfo } from '../services/CourseService';

const headerItemsIcons: { [key: string]: React.FC<ComponentProps<'svg'>> } = {
  grade: RiTimer2Line,
  modality: RiQuestionnaireLine,
  lessons: RiBarChartBoxLine,
};

const getIcons = (items: Array<overviewInfo>): PageHeaderItemProps[] => {
  const headerItems: PageHeaderItemProps[] = [];

  items.forEach((item) => {
    headerItems.push({
      icon: headerItemsIcons[item.key],
      ...item,
    });
  });

  return headerItems;
};

export default getIcons;
