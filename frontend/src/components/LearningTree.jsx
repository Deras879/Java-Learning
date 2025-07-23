import React, { useState } from 'react';
import CodeExercise from './CodeExercise';

const topics = [
  {
    id: 1,
    title: 'Variables y Tipos de Datos',
    completed: false,
    explanation: 'En Java, una variable es un contenedor que almacena un valor. Cada variable tiene un tipo de dato, que determina el tipo de valor que puede almacenar.',
    codeExample: 'int edad = 25;\nString nombre = "Maria";\ndouble salario = 1234.56;',
    exercise: {
      title: 'Ejercicio: Declarar una variable',
      description: 'Declara una variable de tipo String llamada "ciudad" y asígnale el valor "Madrid".',
      initialCode: 'public class Main {\n  public static void main(String[] args) {\n    // Tu código aquí\n  }\n}',
      solution: 'public class Main {\n  public static void main(String[] args) {\n    String ciudad = "Madrid";\n  }\n}',
    },
  },
  {
    id: 2,
    title: 'Operadores',
    completed: false,
    explanation: 'Los operadores se utilizan para realizar operaciones en variables y valores. Java tiene operadores aritméticos, de asignación, de comparación, lógicos, etc.',
    codeExample: 'int x = 10 + 5; // x es 15\nint y = x * 2; // y es 30\nboolean esMayor = y > x; // esMayor es true',
    exercise: {
      title: 'Ejercicio: Operadores aritméticos',
      description: 'Calcula el área de un rectángulo con una base de 10 y una altura de 5. Almacena el resultado en una variable llamada "area".',
      initialCode: 'public class Main {\n  public static void main(String[] args) {\n    int base = 10;\n    int altura = 5;\n    // Tu código aquí\n  }\n}',
      solution: 'public class Main {\n  public static void main(String[] args) {\n    int base = 10;\n    int altura = 5;\n    int area = base * altura;\n  }\n}',
    },
  },
  {
    id: 3,
    title: 'Estructuras de Control',
    completed: false,
    explanation: 'Las estructuras de control se utilizan para controlar el flujo de ejecución de un programa. Las más comunes son if-else, for, while y switch.',
    codeExample: 'int edad = 18;\nif (edad >= 18) {\n  System.out.println("Eres mayor de edad");\n} else {\n  System.out.println("Eres menor de edad");\n}',
    exercise: {
      title: 'Ejercicio: Bucle for',
      description: 'Usa un bucle for para imprimir los números del 1 al 5 en la consola.',
      initialCode: 'public class Main {\n  public static void main(String[] args) {\n    // Tu código aquí\n  }\n}',
      solution: 'public class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(i);\n    }\n  }\n}',
    },
  },
  // ... more topics
];

const LearningTree = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div>
      <h1 className="text-3xl font-bold">Árbol de Aprendizaje</h1>
      {selectedTopic ? (
        <div>
          <button onClick={() => setSelectedTopic(null)} className="mb-4 text-blue-500">
            &larr; Volver al árbol de aprendizaje
          </button>
          <CodeExercise topic={selectedTopic} />
        </div>
      ) : (
        <ul className="mt-6">
          {topics.map((topic, index) => (
            <li key={topic.id} onClick={() => setSelectedTopic(topic)} className="flex items-center mb-4 cursor-pointer">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${topic.completed ? 'bg-green-500' : 'bg-gray-500'}`}>
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <span className="text-lg">{topic.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LearningTree;
