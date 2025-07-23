import React from 'react';
import LearningTree from './LearningTree';
import FirstSteps from './FirstSteps';

const MainContent = ({ currentPage }) => {
  return (
    <div className="flex-1 p-10">
      {currentPage === 'Primeros Pasos' && <FirstSteps />}
      {currentPage === 'Árbol de Aprendizaje' && <LearningTree />}
    </div>
  );
};

export default MainContent;
