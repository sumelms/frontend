import React, { ComponentProps } from 'react';
import {
  RiBarChartBoxLine,
  RiHome2Fill,
  RiQuestionnaireLine,
  RiTimer2Line,
} from 'react-icons/ri';
import { useParams } from 'react-router-dom';

import { BreadcrumbProps } from '../../../../components/Breadcrumb';
import ContainerLayout from '../../components/ContainerLayout';
import { PresentationHeaderItemProps } from '../../components/PresentationHeader/PresentationHeaderItem';
import CourseOverviewService, { overviewInfo } from './overview';
import SectionFaculty from './SectionFaculty';
import SectionPresentation from './SectionPresentation';

type RouteParams = {
  course: string;
};

const presentationIcons: { [key: string]: React.FC<ComponentProps<'svg'>> } = {
  grade: RiTimer2Line,
  modality: RiQuestionnaireLine,
  lessons: RiBarChartBoxLine,
};

const getIcons = (
  items: Array<overviewInfo>,
): PresentationHeaderItemProps[] => {
  const presentationItems: PresentationHeaderItemProps[] = [];

  items.map((item) => {
    presentationItems.push({
      icon: presentationIcons[item.key],
      ...item,
    });
  });

  return presentationItems;
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

const CourseOverview: React.FC = () => {
  const { course } = useParams<RouteParams>();

  // @TODO: Refactor to use a Service HTTP request.
  const overview = CourseOverviewService();
  const presentationItems: PresentationHeaderItemProps[] = getIcons(
    overview.course_presentation.info,
  );
  const { title, subtitle } = overview;

  return (
    <ContainerLayout
      presentationHeader={{ title, subtitle, presentationItems }}
      breadcrumb={breadcrumb}
    >
      <div className="flex flex-col gap-2 my-2">
        <SectionPresentation>
          {overview.course_presentation.description}
        </SectionPresentation>
        <SectionFaculty />
      </div>
    </ContainerLayout>
  );
};

export default CourseOverview;
