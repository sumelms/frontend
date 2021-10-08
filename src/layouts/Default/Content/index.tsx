import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Main: React.FC<Props> = ({ children }: Props) => {
  return <>{children}</>;
};

export default Main;
