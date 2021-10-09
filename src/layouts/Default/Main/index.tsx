import React, { ReactNode } from 'react';

export interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }: MainProps) => {
  return (
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      {children}
    </main>
  );
};

export default Main;
