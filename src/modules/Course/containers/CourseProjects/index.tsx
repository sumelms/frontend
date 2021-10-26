import React from 'react';
import { useParams } from 'react-router-dom';

type RouteParams = {
  course: string;
};

const CourseProjects: React.FC = () => {
  const { course } = useParams<RouteParams>();

  return <>THIS IS THE COURSE {course} PROJECTS PAGE</>;
};

export default CourseProjects;
