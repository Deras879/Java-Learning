# Plataforma de Aprendizaje Java

Una plataforma educativa interactiva diseñada para enseñar los fundamentos de Java de manera progresiva y práctica.

## 🚀 Características Principales

- **🎯 Roadmap Interactivo**: Visualiza tu progreso a través de los conceptos fundamentales de Java
- **💻 Ejercicios Prácticos**: Codifica directamente en la plataforma con retroalimentación inmediata
- **📝 Quizzes Evaluativos**: Valida tu comprensión con preguntas detalladas y explicaciones
- **📚 Glosario Completo**: Consulta términos y conceptos importantes cuando los necesites
- **💾 Progreso Persistente**: Tu avance se guarda automáticamente en el navegador
- **📱 Diseño Responsivo**: Aprende desde cualquier dispositivo
- **🎨 Interfaz Moderna**: Diseño limpio y enfocado en la experiencia educativa

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework de interfaz de usuario
- **Vite** - Herramienta de desarrollo rápida
- **Tailwind CSS** - Framework de estilos utilitarios
- **Heroicons** - Iconografía moderna
- **JavaScript ES6+** - Lógica de aplicación
- **LocalStorage** - Persistencia de datos del usuario

## 📁 Estructura del Proyecto

```
frontend/
├── public/
│   ├── logo.svg                    # Logo de la plataforma
│   ├── learning-illustration.svg   # Ilustración educativa
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx            # Navegación lateral
│   │   ├── Navbar.jsx             # Barra de navegación superior
│   │   ├── HomePage.jsx           # Página de inicio
│   │   ├── RoadmapPage.jsx        # Roadmap visual interactivo
│   │   ├── GlosarioPage.jsx       # Página del glosario
│   │   └── TopicPage.jsx          # Página de temas individuales
│   ├── data/
│   │   └── courseData.js          # Datos de cursos, ejercicios y glosario
│   ├── utils/
│   │   └── progressUtils.js       # Utilidades para manejo de progreso
│   ├── App.jsx                    # Componente principal
│   ├── main.jsx                   # Punto de entrada
│   └── index.css                  # Estilos globales
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎓 Contenido Educativo

### Temas del Curso

1. **Variables y Tipos de Datos**
   - Conceptos básicos de variables
   - Tipos primitivos en Java
   - Ejercicios prácticos de declaración

2. **Operadores**
   - Operadores aritméticos, lógicos y de comparación
   - Precedencia de operadores
   - Ejercicios de cálculos

3. **Estructuras de Control**
   - Condicionales (if-else)
   - Bucles (for, while)
   - Ejercicios de flujo de control

4. **Arrays**
   - Declaración e inicialización
   - Acceso y manipulación de elementos
   - Ejercicios con arreglos

5. **Métodos**
   - Definición y llamada de métodos
   - Parámetros y valores de retorno
   - Ejercicios de modularización

### Glosario

Incluye definiciones claras y ejemplos prácticos de:
- **JDK, JVM** - Herramientas fundamentales
- **Variables, Métodos, Clases** - Conceptos de programación
- **Bucles, Condiciones** - Estructuras de control
- **Y muchos más términos esenciales**

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd Java-Learning/frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Visita `http://localhost:5173`
   - La aplicación se recargará automáticamente al hacer cambios

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 📱 Uso de la Plataforma

### Navegación Principal

- **Inicio**: Página principal con resumen de progreso
- **Roadmap**: Visualización interactiva de todos los temas
- **Glosario**: Búsqueda y consulta de términos
- **Temas**: Acceso directo a cada tema del curso

### Flujo de Aprendizaje

1. **Comienza en Inicio** para ver tu progreso general
2. **Navega al Roadmap** para elegir un tema
3. **Estudia la explicación** de cada concepto
4. **Revisa el ejemplo** de código proporcionado
5. **Completa los ejercicios** prácticos
6. **Toma el quiz** para validar tu comprensión
7. **Consulta el glosario** cuando necesites aclarar términos

### Sistema de Progreso

- ✅ **Ejercicios completados** se marcan automáticamente
- 📊 **Progreso del quiz** se muestra con porcentajes
- 🏆 **Temas completados** se destacan visualmente
- 💾 **Todo se guarda** automáticamente en tu navegador

## 🎨 Personalización

### Colores del Tema

La paleta educativa incluye:
- **Primary**: Azules para elementos principales
- **Secondary**: Verdes para éxito y completado
- **Accent**: Naranjas para destacar elementos importantes
- **Neutral**: Grises para texto y elementos secundarios

### Modificar Contenido

1. **Agregar nuevos temas**: Edita `src/data/courseData.js`
2. **Modificar ejercicios**: Actualiza los arrays de ejercicios en cada tema
3. **Expandir glosario**: Añade nuevos términos al array `glossaryTerms`

## 🔧 Desarrollo

### Estructura de Componentes

- **Componentes Reutilizables**: Sidebar, Navbar, TopicPage
- **Páginas Específicas**: HomePage, RoadmapPage, GlosarioPage
- **Utilidades**: progressUtils para manejo de estado
- **Datos**: courseData para contenido educativo

### Estado y Datos

- **LocalStorage**: Para persistencia de progreso del usuario
- **React State**: Para estado temporal de la UI
- **Props**: Para comunicación entre componentes

### Estilos

- **Tailwind CSS**: Framework principal de estilos
- **Clases Personalizadas**: Definidas en `index.css`
- **Responsive Design**: Mobile-first approach

## 🚀 Despliegue

### Build de Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` con los archivos optimizados listos para desplegar.

### Opciones de Despliegue

- **Vercel**: Conecta tu repositorio para despliegue automático
- **Netlify**: Arrastra la carpeta `dist/` o conecta con Git
- **GitHub Pages**: Usa GitHub Actions para despliegue automático
- **Servidor Web**: Sirve la carpeta `dist/` con cualquier servidor web

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

¿Tienes preguntas o necesitas ayuda?

- 📧 Abre un issue en GitHub
- 💬 Revisa la documentación en el código
- 🐛 Reporta bugs con ejemplos reproducibles

---

**¡Feliz aprendizaje! 🎉**

Desarrollado con ❤️ para la comunidad de programadores Java.
