import React, { ReactNode } from 'react';

export interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }: MainProps) => {
  return (
    <main className="flex flex-col flex-grow -ml-64 transition-all duration-150 ease-in main md:ml-0">
      {children}
    </main>
  );
};

export default Main;
