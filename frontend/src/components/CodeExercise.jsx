import React, { useState } from 'react';

const CodeExercise = ({ topic }) => {
  const [code, setCode] = useState(topic.exercise.initialCode);
  const [output, setOutput] = useState('');

  const runCode = () => {
    // Simulate code execution
    if (code.trim() === topic.exercise.solution) {
      setOutput('¡Felicidades! ¡Has resuelto el ejercicio!');
      // Here you would also update the topic's completed status
    } else {
      setOutput('El código no es correcto. ¡Sigue intentando!');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">{topic.title}</h2>
      <p className="mt-4">{topic.explanation}</p>
      <div className="mt-4">
        <h3 className="font-bold">Ejemplo de código:</h3>
        <pre className="bg-gray-900 text-white p-2 rounded mt-2">
          <code>{topic.codeExample}</code>
        </pre>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">{topic.exercise.title}</h2>
        <p className="mt-4">{topic.exercise.description}</p>
        <div className="mt-4">
          <textarea
            className="w-full h-64 p-2 font-mono text-sm bg-gray-900 text-white rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={runCode}
        >
          Ejecutar
        </button>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">Salida:</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodeExercise;
