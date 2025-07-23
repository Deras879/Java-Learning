import React, { useState } from 'react';
import { Search, BookOpen, Code } from 'lucide-react';
import { glossaryTerms } from '../data/glossary';

export const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const alphabetizedTerms = filteredTerms.sort((a, b) => 
    a.term.localeCompare(b.term)
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Glosario de Java
        </h1>
        <p className="text-gray-600">
          Definiciones de términos importantes que necesitas conocer en Java
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar término..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {filteredTerms.length} término{filteredTerms.length !== 1 ? 's' : ''} encontrado{filteredTerms.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Terms Grid */}
      <div className="space-y-4">
        {alphabetizedTerms.map((term, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-800">{term.term}</h3>
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                Java
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {term.definition}
            </p>
            
            {term.example && (
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                <div className="flex items-center mb-2">
                  <Code className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium text-sm">Ejemplo:</span>
                </div>
                <code className="text-blue-700 text-sm bg-white px-2 py-1 rounded">
                  {term.example}
                </code>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            No se encontraron términos
          </h3>
          <p className="text-gray-500">
            Intenta con una búsqueda diferente
          </p>
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-2">
          💡 Consejo de estudio
        </h3>
        <p className="text-gray-600 text-sm">
          Te recomendamos revisar este glosario regularmente mientras estudias. 
          La comprensión de estos términos es fundamental para dominar Java.
        </p>
      </div>
    </div>
  );
};