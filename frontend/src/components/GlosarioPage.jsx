import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  BookOpenIcon,
  CodeBracketIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { glossaryTerms } from '../data/courseData';

const GlosarioPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    // Simple categorization based on term content
    const categories = {
      'fundamentals': ['JDK', 'JVM', 'Variable', 'Compilación'],
      'programming': ['Método', 'Clase', 'Objeto', 'Array'],
      'control': ['Bucle', 'Condición']
    };
    
    return matchesSearch && categories[selectedCategory]?.includes(term.term);
  });

  const categories = [
    { id: 'all', name: 'Todos', icon: BookOpenIcon },
    { id: 'fundamentals', name: 'Fundamentos', icon: LightBulbIcon },
    { id: 'programming', name: 'Programación', icon: CodeBracketIcon },
    { id: 'control', name: 'Control de Flujo', icon: CodeBracketIcon }
  ];

  const getTermIcon = (term) => {
    const iconMap = {
      'JDK': '🔧',
      'JVM': '⚙️',
      'Variable': '📦',
      'Método': '🔄',
      'Clase': '🏗️',
      'Objeto': '🎯',
      'Array': '📚',
      'Bucle': '🔁',
      'Condición': '❓',
      'Compilación': '⚡'
    };
    return iconMap[term] || '📖';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Glosario de Java
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra definiciones claras y ejemplos prácticos de los términos más importantes 
            en el mundo de la programación Java.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar términos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredTerms.length === glossaryTerms.length 
              ? `Mostrando todos los ${filteredTerms.length} términos`
              : `Mostrando ${filteredTerms.length} de ${glossaryTerms.length} términos`
            }
          </div>
        </div>

        {/* Terms Grid */}
        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((term) => (
              <div
                key={term.id}
                className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="p-6">
                  {/* Term Header */}
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="text-3xl">{getTermIcon(term.term)}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                        {term.term}
                      </h3>
                    </div>
                  </div>

                  {/* Definition */}
                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {term.definition}
                    </p>
                  </div>

                  {/* Example */}
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-500">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                      <CodeBracketIcon className="mr-1 h-4 w-4" />
                      Ejemplo:
                    </h4>
                    <code className="text-sm text-gray-700 font-mono leading-relaxed block">
                      {term.example}
                    </code>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-200 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron términos
            </h3>
            <p className="text-gray-600 mb-6">
              Intenta con una búsqueda diferente o selecciona otra categoría.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200"
            >
              Mostrar todos los términos
            </button>
          </div>
        )}

        {/* Quick Tips */}
        <div className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">
            💡 Consejos para Usar el Glosario
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="font-semibold mb-2">Busca Rápidamente</h3>
              <p className="text-primary-100 text-sm">
                Usa la barra de búsqueda para encontrar términos específicos al instante.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold mb-2">Filtra por Categoría</h3>
              <p className="text-primary-100 text-sm">
                Organiza los términos por temas para un aprendizaje más estructurado.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">💻</div>
              <h3 className="font-semibold mb-2">Ejemplos Prácticos</h3>
              <p className="text-primary-100 text-sm">
                Cada término incluye ejemplos de código para mejor comprensión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlosarioPage;