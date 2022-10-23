import React, { ReactNode } from 'react';

export interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }: MainProps) => {
  return <main className="main">{children}</main>;
};

export default Main;
