import { LoaderFunctionArgs } from 'react-router-dom';

import { LayoutProps } from '../../../layouts/Container';
import { getHeaderItemsWithIcons } from '../../../layouts/Container/helpers';
import CourseService from '../services/CourseService';

const pageLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<LayoutProps> => {
  const { course } = params;
  const { headerItems, ...rest } = CourseService.getCoursePage(
    course as string,
  );

  return {
    headerItems: getHeaderItemsWithIcons(headerItems),
    ...rest,
  };
};

export { pageLoader };
