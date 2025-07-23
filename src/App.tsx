import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './components/HomePage';
import { LearningTree } from './components/LearningTree';
import { LessonView } from './components/LessonView';
import { InstallationGuide } from './components/InstallationGuide';
import { Glossary } from './components/Glossary';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tree' | 'lesson' | 'installation' | 'glossary'>('home');
  const [currentLessonId, setCurrentLessonId] = useState<string>('');

  const handleNavigate = (view: string, lessonId?: string) => {
    setCurrentView(view as any);
    if (lessonId) {
      setCurrentLessonId(lessonId);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'tree':
        return <LearningTree onNavigate={handleNavigate} />;
      case 'lesson':
        return <LessonView lessonId={currentLessonId} onNavigate={handleNavigate} />;
      case 'installation':
        return <InstallationGuide />;
      case 'glossary':
        return <Glossary />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 flex-shrink-0">
        <Sidebar currentView={currentView} onNavigate={handleNavigate} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;