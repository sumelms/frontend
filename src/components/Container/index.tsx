import React, { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  spaced?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  spaced = false,
}: ContainerProps) => {
  return <div className={`${spaced ? 'm-10 ml-32' : ''}`}>{children}</div>;
};

export default Container;
