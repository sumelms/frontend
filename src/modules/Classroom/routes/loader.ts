import { LoaderFunctionArgs } from 'react-router-dom';

import { LayoutProps } from '../../../layouts/Container';
import { getHeaderItemsWithIcons } from '../../../layouts/Container/helpers';
import ClassroomService from '../services/ClassroomService';

const pageLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<LayoutProps> => {
  const { classroom } = params;
  const { headerItems, ...rest } = ClassroomService.getPage(
    classroom as string,
  );

  return {
    headerItems: getHeaderItemsWithIcons(headerItems),
    ...rest,
  };
};

export { pageLoader };
