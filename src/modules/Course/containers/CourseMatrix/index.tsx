import React from 'react';
import { useParams } from 'react-router-dom';

type RouteParams = {
  course: string;
};

const CourseMatrix: React.FC = () => {
  const { course } = useParams<RouteParams>();

  return <>THIS IS THE COURSE {course} MATRIX PAGE</>;
};

export default CourseMatrix;