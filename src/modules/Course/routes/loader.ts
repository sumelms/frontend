import { LoaderFunctionArgs } from 'react-router-dom';

import { LayoutProps } from '../../../layouts/Container';
import { getHeaderItemsWithIcons } from '../../../layouts/Container/helpers';
import CourseService from '../services/CourseService';

const pageLoader = async ({ params }: LoaderFunctionArgs): Promise<LayoutProps> => {
  const { course } = params;
  const { details: headerItems, ...rest } = await CourseService.getCourseWithNavbar(
    course as string,
    'fields=title,subtitle,details',
  );

  return {
    headerItems: getHeaderItemsWithIcons(headerItems),
    ...rest,
  };
};

export { pageLoader };
