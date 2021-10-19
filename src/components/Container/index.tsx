import React, { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  spaced?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  spaced = false,
}: ContainerProps) => {
  return (
    <div className={`layout-container ${spaced ? 'm-4' : ''}`}>{children}</div>
  );
};

export default Container;
