import React from 'react';
import { useParams } from 'react-router-dom';
import { string } from 'yup';

export type RouteParams = {
  course: string;
  activity: string;
};

const CourseActivity: React.FC = () => {
  const { course, activity } = useParams<RouteParams>();

  return (
    <>
      THIS IS THE COURSE ({course}) ACTIVITY ({activity}) PAGE
    </>
  );
};

export default CourseActivity;
