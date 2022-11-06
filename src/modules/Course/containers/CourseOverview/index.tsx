import React from 'react';
import { useParams } from 'react-router-dom';

import SectionFaculty from './SectionFaculty';

type RouteParams = {
  course: string;
};

const CourseOverview: React.FC = () => {
  const { course } = useParams<RouteParams>();
  return (
    <>
      THIS IS THE COURSE {course} OVERVIEW PAGE
      <SectionFaculty />
    </>
  );
};

export default CourseOverview;
