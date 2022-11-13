import React from 'react';
import { RiHome2Fill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

import { BreadcrumbProps } from '../../../../components/Breadcrumb';
import PageLayout from '../../components/PageLayout';
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
  const params = useParams<RouteParams>();

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
      <div>THIS IS THE COURSE ({course.title}) CLASSROOM PAGE</div>
    </PageLayout>
  );
};

export default CourseClassrooms;
