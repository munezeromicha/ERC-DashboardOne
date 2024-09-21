import React from 'react';
import CardContainer from './CardContainer';
import FloatingActions from './FloatingActions ';

const MainComponent: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-left my-6 text-[#1F384C]">Articles</h2>
      <CardContainer />
      <FloatingActions />
    </div>
  );
};

export default MainComponent;
