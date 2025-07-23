import React from 'react';

const FirstSteps = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Primeros Pasos</h1>
      <p className="mt-4">
        En esta sección, aprenderás a instalar Java en tu computadora y a configurar tu entorno de desarrollo.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Instalación del JDK</h2>
        <p className="mt-2">
          El Java Development Kit (JDK) es necesario para compilar y ejecutar código Java. A continuación, se muestran los pasos para instalarlo en diferentes sistemas operativos.
        </p>

        <div className="mt-4">
          <h3 className="text-xl font-bold">Windows</h3>
          <ol className="list-decimal list-inside mt-2">
            <li>Descarga el instalador de OpenJDK desde <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Adoptium</a>.</li>
            <li>Ejecuta el instalador y sigue las instrucciones.</li>
            <li>Asegúrate de que la variable de entorno <code>JAVA_HOME</code> esté configurada y que el directorio <code>bin</code> del JDK esté en el <code>PATH</code>.</li>
          </ol>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold">macOS</h3>
          <ol className="list-decimal list-inside mt-2">
            <li>Puedes instalar OpenJDK usando Homebrew: <code>brew install openjdk</code>.</li>
            <li>O descarga el instalador desde <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Adoptium</a>.</li>
          </ol>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold">Linux</h3>
          <p className="mt-2">Puedes instalar OpenJDK usando el gestor de paquetes de tu distribución. Por ejemplo, en Ubuntu:</p>
          <pre className="bg-gray-900 text-white p-2 rounded mt-2"><code>sudo apt update && sudo apt install default-jdk</code></pre>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Configuración del Entorno de Desarrollo</h2>
        <p className="mt-2">
          Puedes escribir código Java en un editor de texto simple, pero se recomienda usar un Entorno de Desarrollo Integrado (IDE) para una mejor experiencia.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer" className="text-blue-500">IntelliJ IDEA</a> (Community Edition es gratuita)</li>
          <li><a href="https://www.eclipse.org/downloads/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Eclipse</a></li>
          <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Visual Studio Code</a> con la extensión de Java</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Hola, Mundo</h2>
        <p className="mt-2">
          Crea un archivo llamado <code>HelloWorld.java</code> con el siguiente contenido:
        </p>
        <pre className="bg-gray-900 text-white p-2 rounded mt-2">
          <code>
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hola, Mundo!");
  }
}`}
          </code>
        </pre>
        <p className="mt-2">
          Para compilar y ejecutar el archivo, abre una terminal y ejecuta los siguientes comandos:
        </p>
        <pre className="bg-gray-900 text-white p-2 rounded mt-2">
          <code>
{`javac HelloWorld.java
java HelloWorld`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default FirstSteps;
