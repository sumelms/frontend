import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Main: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      {children}
    </div>
  );
};

export default Main;
