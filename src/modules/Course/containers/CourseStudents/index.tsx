import React from 'react';
import { useParams } from 'react-router-dom';

type RouteParams = {
  course: string;
};

const CourseStudents: React.FC = () => {
  const { course } = useParams<RouteParams>();
  return <>THIS IS THE COURSE STUDENT PAGE</>;
};

export default CourseStudents;
