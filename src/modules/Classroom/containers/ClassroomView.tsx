import React from 'react';
import { useParams } from 'react-router-dom';

type RouteParams = {
  classroom: string;
};

const ClassroomView: React.FC = () => {
  const params = useParams() as RouteParams;

  return <>{JSON.stringify(params)}</>;
};

export default ClassroomView;
