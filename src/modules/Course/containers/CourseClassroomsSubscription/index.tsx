import React from 'react';
import { useParams } from 'react-router-dom';

type RouteParams = {
  course: string;
};

const CourseClassroomsSubscription: React.FC = () => {
  const { course } = useParams<RouteParams>();

  return <>THIS IS THE COURSE ({course}) CLASSROOM SUBSCRIPTION PAGE</>;
};

export default CourseClassroomsSubscription;
