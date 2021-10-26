import React from 'react';
import { useParams } from 'react-router-dom';

type RouteParams = {
  course: string;
};

const CourseCommunity: React.FC = () => {
  const { course } = useParams<RouteParams>();

  return <>THIS IS THE COURSE ({course}) COMMUNITY PAGE</>;
};

export default CourseCommunity;
