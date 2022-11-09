import React from 'react';
import { useParams } from 'react-router-dom';

type RouteParams = {
  course: string;
};

const CourseClassrooms: React.FC = () => {
  const { course } = useParams<RouteParams>();

  return <>THIS IS THE COURSE ({course}) CLASSROOMS PAGE</>;
};

export default CourseClassrooms;
