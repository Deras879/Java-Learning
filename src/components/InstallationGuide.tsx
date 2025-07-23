import React, { useState } from 'react';
import { 
  Monitor, 
  Apple, 
  Laptop, 
  Download, 
  CheckCircle,
  ExternalLink,
  Terminal,
  Settings
} from 'lucide-react';

export const InstallationGuide: React.FC = () => {
  const [selectedOS, setSelectedOS] = useState<'windows' | 'mac' | 'linux'>('windows');

  const osOptions = [
    { id: 'windows', name: 'Windows', icon: Monitor },
    { id: 'mac', name: 'macOS', icon: Apple },
    { id: 'linux', name: 'Linux', icon: Laptop }
  ];

  const installationSteps = {
    windows: [
      {
        title: 'Descargar Oracle JDK',
        description: 'Ve al sitio oficial de Oracle y descarga la última versión de JDK para Windows',
        details: [
          'Visita https://www.oracle.com/java/technologies/downloads/',
          'Selecciona "Windows" y descarga el instalador .exe',
          'Elige la versión LTS más reciente (Java 17 o Java 21)'
        ],
        command: null
      },
      {
        title: 'Ejecutar el instalador',
        description: 'Ejecuta el archivo descargado y sigue el asistente de instalación',
        details: [
          'Haz doble clic en el archivo .exe descargado',
          'Acepta los términos y condiciones',
          'Deja la ruta de instalación por defecto o personalízala',
          'Espera a que termine la instalación'
        ],
        command: null
      },
      {
        title: 'Configurar variables de entorno',
        description: 'Configura JAVA_HOME y actualiza PATH',
        details: [
          'Clic derecho en "Este equipo" → Propiedades',
          'Configuración avanzada del sistema → Variables de entorno',
          'Nueva variable de sistema JAVA_HOME con la ruta de instalación',
          'Editar PATH y agregar %JAVA_HOME%\\bin'
        ],
        command: null
      },
      {
        title: 'Verificar instalación',
        description: 'Abre la terminal y verifica que Java esté instalado correctamente',
        details: [
          'Abre CMD o PowerShell',
          'Ejecuta los comandos de verificación',
          'Deberías ver la versión de Java instalada'
        ],
        command: 'java -version\njavac -version'
      }
    ],
    mac: [
      {
        title: 'Descargar Oracle JDK',
        description: 'Descarga el JDK para macOS desde el sitio oficial',
        details: [
          'Visita https://www.oracle.com/java/technologies/downloads/',
          'Selecciona "macOS" y descarga el instalador .dmg',
          'Elige la versión para tu arquitectura (Intel x64 o Apple Silicon ARM64)'
        ],
        command: null
      },
      {
        title: 'Instalar usando el .dmg',
        description: 'Ejecuta el instalador descargado',
        details: [
          'Haz doble clic en el archivo .dmg',
          'Ejecuta el paquete de instalación',
          'Sigue las instrucciones del instalador',
          'Proporciona tu contraseña de administrador cuando se solicite'
        ],
        command: null
      },
      {
        title: 'Configurar variables de entorno (Opcional)',
        description: 'Configurar JAVA_HOME en tu shell profile',
        details: [
          'Abre Terminal',
          'Edita tu archivo ~/.zshrc o ~/.bash_profile',
          'Agrega las variables de entorno',
          'Recarga tu configuración'
        ],
        command: 'export JAVA_HOME=$(/usr/libexec/java_home)\nexport PATH=$JAVA_HOME/bin:$PATH'
      },
      {
        title: 'Verificar instalación',
        description: 'Confirma que Java está instalado correctamente',
        details: [
          'Abre Terminal',
          'Ejecuta los comandos de verificación',
          'Verifica que aparezca la versión correcta'
        ],
        command: 'java -version\njavac -version'
      }
    ],
    linux: [
      {
        title: 'Actualizar repositorios',
        description: 'Actualiza la lista de paquetes disponibles',
        details: [
          'Abre la terminal',
          'Ejecuta el comando de actualización',
          'Espera a que termine el proceso'
        ],
        command: 'sudo apt update'
      },
      {
        title: 'Instalar OpenJDK',
        description: 'Instala Java usando el gestor de paquetes',
        details: [
          'Instala la versión LTS de OpenJDK',
          'También instala las herramientas de desarrollo',
          'Confirma la instalación cuando se solicite'
        ],
        command: 'sudo apt install openjdk-17-jdk openjdk-17-jre'
      },
      {
        title: 'Configurar JAVA_HOME (Opcional)',
        description: 'Configura la variable de entorno JAVA_HOME',
        details: [
          'Edita tu archivo ~/.bashrc',
          'Agrega las variables de entorno',
          'Recarga la configuración'
        ],
        command: 'echo \'export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64\' >> ~/.bashrc\necho \'export PATH=$JAVA_HOME/bin:$PATH\' >> ~/.bashrc\nsource ~/.bashrc'
      },
      {
        title: 'Verificar instalación',
        description: 'Confirma que la instalación fue exitosa',
        details: [
          'Ejecuta los comandos de verificación',
          'Deberías ver información sobre la versión de Java',
          'Tanto java como javac deben estar disponibles'
        ],
        command: 'java -version\njavac -version'
      }
    ]
  };

  const ides = [
    {
      name: 'IntelliJ IDEA',
      description: 'IDE más popular para Java, con versión gratuita Community',
      url: 'https://www.jetbrains.com/idea/',
      features: ['Autocompletado inteligente', 'Debugging avanzado', 'Refactoring automático']
    },
    {
      name: 'Eclipse',
      description: 'IDE gratuito y de código abierto, muy completo',
      url: 'https://www.eclipse.org/',
      features: ['Gratuito y open source', 'Extensible con plugins', 'Integración con Maven/Gradle']
    },
    {
      name: 'Visual Studio Code',
      description: 'Editor ligero con extensiones para Java',
      url: 'https://code.visualstudio.com/',
      features: ['Ligero y rápido', 'Extension Pack for Java', 'Integración con Git']
    },
    {
      name: 'NetBeans',
      description: 'IDE oficial de Oracle para Java',
      url: 'https://netbeans.apache.org/',
      features: ['Soporte nativo para Java', 'GUI Builder integrado', 'Profiler incluido']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <Download className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Instalación de Java
        </h1>
        <p className="text-gray-600">
          Guía paso a paso para instalar Java en tu sistema operativo
        </p>
      </div>

      {/* OS Selection */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Selecciona tu Sistema Operativo
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {osOptions.map(os => {
            const Icon = os.icon;
            return (
              <button
                key={os.id}
                onClick={() => setSelectedOS(os.id as any)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedOS === os.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">{os.name}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Installation Steps */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Pasos de Instalación para {osOptions.find(os => os.id === selectedOS)?.name}
        </h2>
        
        <div className="space-y-6">
          {installationSteps[selectedOS].map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                  
                  {/* Command */}
                  {step.command && (
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm flex items-center">
                          <Terminal className="w-4 h-4 mr-2" />
                          Terminal
                        </span>
                      </div>
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{step.command}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Connector Line */}
              {index < installationSteps[selectedOS].length - 1 && (
                <div className="ml-4 w-0 h-6 border-l-2 border-gray-200 mt-4"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Success Message */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <p className="text-green-800 font-medium">
              ¡Perfecto! Si todos los comandos funcionan correctamente, Java está instalado y listo para usar.
            </p>
          </div>
        </div>
      </div>

      {/* IDEs Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <Settings className="w-6 h-6 text-gray-600 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">
            Entornos de Desarrollo Recomendados
          </h2>
        </div>
        
        <p className="text-gray-600 mb-6">
          Aunque puedes programar Java con cualquier editor de texto, te recomendamos usar un IDE 
          (Integrated Development Environment) para una mejor experiencia de desarrollo.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {ides.map((ide, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-800">{ide.name}</h3>
                <a
                  href={ide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-gray-600 text-sm mb-3">{ide.description}</p>
              <ul className="text-gray-600 text-sm space-y-1">
                {ide.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm">
            💡 <strong>Recomendación:</strong> Si eres principiante, te sugerimos empezar con IntelliJ IDEA Community 
            (gratuito) ya que tiene excelente soporte para Java y es muy fácil de usar.
          </p>
        </div>
      </div>
    </div>
  );
};