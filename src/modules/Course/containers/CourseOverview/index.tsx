import React from 'react';
import { useParams } from 'react-router-dom';

type RouteParams = {
  course: string;
};

const CourseOverview: React.FC = () => {
  const { course } = useParams<RouteParams>();
  return <>THIS IS THE COURSE {course} OVERVIEW PAGE</>;
};

export default CourseOverview;
