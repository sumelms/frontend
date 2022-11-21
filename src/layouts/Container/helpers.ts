import { ComponentProps } from 'react';
import { HiCalendar, HiClock, HiQuestionMarkCircle } from 'react-icons/hi';
import {
  RiBarChartBoxLine,
  RiQuestionnaireLine,
  RiTimer2Line,
} from 'react-icons/ri';

import { HeaderItemProps } from './Header';

const headerItemsIcons: { [key: string]: React.FC<ComponentProps<'svg'>> } = {
  grade: RiTimer2Line,
  modality: RiQuestionnaireLine,
  lessons: RiBarChartBoxLine,
  load: HiClock,
  exams: HiQuestionMarkCircle,
  date: HiCalendar,
};

const getHeaderItemsWithIcons = (
  items: HeaderItemProps[],
): HeaderItemProps[] => {
  return items.map((item) => {
    item.icon = headerItemsIcons[item.key];
    return item;
  });
};

export { getHeaderItemsWithIcons };
