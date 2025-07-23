import React from 'react';
import { Coffee, Zap, Shield, Globe, Code, Rocket } from 'lucide-react';

interface HomePageProps {
  onNavigate: (view: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Globe,
      title: 'Portabilidad Universal',
      description: 'Escribe una vez, ejecuta en cualquier lugar gracias a la JVM'
    },
    {
      icon: Shield,
      title: 'Seguridad Robusta',
      description: 'Diseñado con seguridad en mente desde sus inicios'
    },
    {
      icon: Zap,
      title: 'Alto Rendimiento',
      description: 'Optimizaciones avanzadas y compilación just-in-time'
    },
    {
      icon: Code,
      title: 'Orientado a Objetos',
      description: 'Paradigma completo de programación orientada a objetos'
    }
  ];

  const syntaxExample = `// Ejemplo básico de sintaxis Java
public class HolaMundo {
    public static void main(String[] args) {
        // Variables y tipos de datos
        String nombre = "Estudiante";
        int edad = 25;
        boolean esEstudiante = true;
        
        // Salida por consola
        System.out.println("¡Hola " + nombre + "!");
        System.out.println("Edad: " + edad);
        
        // Estructura de control
        if (esEstudiante) {
            System.out.println("¡Bienvenido a Java!");
        }
        
        // Bucle simple
        for (int i = 1; i <= 3; i++) {
            System.out.println("Iteración: " + i);
        }
    }
}`;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-orange-100 p-4 rounded-full">
            <Coffee className="w-16 h-16 text-orange-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Aprende Java desde Cero
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Domina uno de los lenguajes de programación más populares del mundo. 
          Java te abrirá las puertas al desarrollo empresarial, móvil y web.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => onNavigate('tree')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Rocket className="w-5 h-5" />
            <span>Comenzar Aprendizaje</span>
          </button>
          <button
            onClick={() => onNavigate('installation')}
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Instalar Java
          </button>
        </div>
      </div>

      {/* What is Java */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es Java?</h2>
        <p className="text-gray-600 mb-6">
          Java es un lenguaje de programación orientado a objetos desarrollado por Sun Microsystems 
          (ahora Oracle) en 1995. Es conocido por su filosofía <strong>"Write Once, Run Anywhere"</strong> 
          (Escribe una vez, ejecuta en cualquier lugar), lo que lo convierte en una excelente opción 
          para el desarrollo multiplataforma.
        </p>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Para qué se usa Java?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Aplicaciones Empresariales</h3>
            <p className="text-gray-600 text-sm mb-4">
              Sistemas bancarios, ERP, CRM y aplicaciones de gran escala
            </p>
            
            <h3 className="font-semibold text-gray-800 mb-2">Desarrollo Android</h3>
            <p className="text-gray-600 text-sm mb-4">
              Aplicaciones móviles para el sistema operativo Android
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Desarrollo Web</h3>
            <p className="text-gray-600 text-sm mb-4">
              APIs REST, microservicios y aplicaciones del lado del servidor
            </p>
            
            <h3 className="font-semibold text-gray-800 mb-2">Big Data y Científico</h3>
            <p className="text-gray-600 text-sm">
              Apache Hadoop, Spark, Elasticsearch y análisis de datos
            </p>
          </div>
        </div>
      </div>

      {/* Syntax Preview */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sintaxis de Java</h2>
        <p className="text-gray-600 mb-6">
          Java tiene una sintaxis clara y estructurada. Aquí tienes un ejemplo básico:
        </p>
        
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-sm text-gray-100">
            <code>{syntaxExample}</code>
          </pre>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Elementos clave de este ejemplo:</h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• <strong>Clase pública:</strong> Todo código Java está dentro de clases</li>
            <li>• <strong>Método main:</strong> Punto de entrada del programa</li>
            <li>• <strong>Variables tipadas:</strong> String, int, boolean</li>
            <li>• <strong>System.out.println:</strong> Para mostrar información</li>
            <li>• <strong>Estructuras de control:</strong> if, for, while</li>
          </ul>
        </div>
      </div>
    </div>
  );
};