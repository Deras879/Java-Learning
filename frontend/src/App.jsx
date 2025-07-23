import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RoadmapPage from './components/RoadmapPage';
import GlosarioPage from './components/GlosarioPage';
import TopicPage from './components/TopicPage';
import { courseTopics } from './data/courseData';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Find topic data based on current page
  const getCurrentTopic = () => {
    const topicMap = {
      'variables': 1,
      'operadores': 2,
      'control': 3,
      'arrays': 4,
      'metodos': 5
    };
    
    const topicId = topicMap[currentPage];
    return topicId ? courseTopics.find(topic => topic.id === topicId) : null;
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'roadmap':
        return <RoadmapPage setCurrentPage={setCurrentPage} />;
      case 'glosario':
        return <GlosarioPage />;
      case 'variables':
      case 'operadores':
      case 'control':
      case 'arrays':
      case 'metodos': {
        const topic = getCurrentTopic();
        return <TopicPage topic={topic} setCurrentPage={setCurrentPage} />;
      }
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="flex-1">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
