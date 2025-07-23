import { GlossaryTerm } from '../types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "API",
    definition: "Application Programming Interface. Conjunto de definiciones y protocolos que se usan para desarrollar e integrar software de aplicaciones.",
    example: "La API de Java Collections proporciona interfaces para trabajar con colecciones de datos."
  },
  {
    term: "Bytecode",
    definition: "Código intermedio generado por el compilador de Java, que es ejecutado por la JVM.",
    example: "Los archivos .class contienen bytecode que puede ejecutarse en cualquier JVM."
  },
  {
    term: "Constructor",
    definition: "Método especial que se ejecuta automáticamente cuando se crea una instancia de una clase.",
    example: "public Persona(String nombre) { this.nombre = nombre; }"
  },
  {
    term: "Encapsulamiento",
    definition: "Principio de OOP que consiste en ocultar los detalles internos de una clase y exponer solo lo necesario.",
    example: "Usar modificadores private para atributos y métodos públicos para acceder a ellos."
  },
  {
    term: "Exception",
    definition: "Evento que ocurre durante la ejecución del programa y que interrumpe el flujo normal de las instrucciones.",
    example: "NullPointerException se lanza cuando se intenta usar una referencia nula."
  },
  {
    term: "Herencia",
    definition: "Mecanismo que permite que una clase adquiera las propiedades y métodos de otra clase.",
    example: "class Estudiante extends Persona { ... }"
  },
  {
    term: "IDE",
    definition: "Integrated Development Environment. Entorno de desarrollo integrado para programar.",
    example: "IntelliJ IDEA, Eclipse, NetBeans son IDEs populares para Java."
  },
  {
    term: "JDK",
    definition: "Java Development Kit. Kit de desarrollo que incluye el compilador, JVM y bibliotecas necesarias para desarrollar en Java.",
    example: "Necesitas instalar el JDK para compilar programas Java."
  },
  {
    term: "JRE",
    definition: "Java Runtime Environment. Entorno de ejecución que incluye la JVM y bibliotecas necesarias para ejecutar programas Java.",
    example: "El JRE es suficiente si solo quieres ejecutar aplicaciones Java, sin compilar."
  },
  {
    term: "JVM",
    definition: "Java Virtual Machine. Máquina virtual que ejecuta el bytecode de Java.",
    example: "La JVM permite que Java sea portable entre diferentes sistemas operativos."
  },
  {
    term: "Método",
    definition: "Bloque de código que realiza una tarea específica y puede ser llamado desde otras partes del programa.",
    example: "public void saludar() { System.out.println('Hola'); }"
  },
  {
    term: "Objeto",
    definition: "Instancia de una clase que tiene estado (atributos) y comportamiento (métodos).",
    example: "Persona juan = new Persona('Juan', 25);"
  },
  {
    term: "Package",
    definition: "Mecanismo para organizar clases relacionadas en directorios.",
    example: "package com.empresa.proyecto;"
  },
  {
    term: "Polimorfismo",
    definition: "Capacidad de un objeto de tomar múltiples formas. Permite que una referencia de tipo padre apunte a objetos de tipo hijo.",
    example: "Animal perro = new Perro(); // Polimorfismo"
  },
  {
    term: "Static",
    definition: "Modificador que indica que un miembro pertenece a la clase en lugar de a una instancia específica.",
    example: "public static void main(String[] args) { ... }"
  },
  {
    term: "String",
    definition: "Clase que representa una secuencia de caracteres inmutable.",
    example: "String mensaje = 'Hola mundo';"
  },
  {
    term: "this",
    definition: "Palabra clave que hace referencia al objeto actual.",
    example: "this.nombre = nombre; // Asigna el parámetro al atributo del objeto"
  },
  {
    term: "Variable",
    definition: "Espacio de memoria con un nombre que almacena un valor de un tipo específico.",
    example: "int edad = 25; String nombre = 'Ana';"
  },
  {
    term: "Abstract",
    definition: "Palabra clave que indica que una clase o método no puede ser instanciado directamente y debe ser implementado por subclases.",
    example: "abstract class Figura { abstract double calcularArea(); }"
  },
  {
    term: "ArrayList",
    definition: "Implementación de List que usa un array dinámico para almacenar elementos.",
    example: "List<String> lista = new ArrayList<>();"
  },
  {
    term: "Collection",
    definition: "Interfaz raíz del framework de colecciones que representa un grupo de objetos.",
    example: "Collection<Integer> numeros = new ArrayList<>();"
  },
  {
    term: "Default",
    definition: "Palabra clave para métodos en interfaces que tienen implementación por defecto (Java 8+).",
    example: "default void metodo() { System.out.println('Default'); }"
  },
  {
    term: "Enum",
    definition: "Tipo especial de clase que representa un conjunto fijo de constantes.",
    example: "enum Dia { LUNES, MARTES, MIERCOLES }"
  },
  {
    term: "Final",
    definition: "Palabra clave que indica que una variable, método o clase no puede ser modificada, sobrescrita o heredada.",
    example: "final int CONSTANTE = 100;"
  },
  {
    term: "Generics",
    definition: "Característica que permite escribir código que funciona con diferentes tipos manteniendo seguridad de tipos.",
    example: "List<String> lista = new ArrayList<String>();"
  },
  {
    term: "HashMap",
    definition: "Implementación de Map que almacena pares clave-valor usando una tabla hash.",
    example: "Map<String, Integer> mapa = new HashMap<>();"
  },
  {
    term: "Implements",
    definition: "Palabra clave que indica que una clase implementa una o más interfaces.",
    example: "class MiClase implements MiInterface { ... }"
  },
  {
    term: "Lambda",
    definition: "Expresión que representa una función anónima que puede ser tratada como un valor.",
    example: "x -> x * 2"
  },
  {
    term: "List",
    definition: "Interfaz que representa una colección ordenada que permite elementos duplicados.",
    example: "List<String> nombres = Arrays.asList('Ana', 'Juan');"
  },
  {
    term: "Map",
    definition: "Interfaz que representa una colección de pares clave-valor.",
    example: "Map<String, Integer> edades = new HashMap<>();"
  },
  {
    term: "Optional",
    definition: "Contenedor que puede o no contener un valor, usado para evitar NullPointerException.",
    example: "Optional<String> valor = Optional.of('Hola');"
  },
  {
    term: "Override",
    definition: "Anotación que indica que un método sobrescribe un método de la clase padre.",
    example: "@Override public String toString() { return 'Mi objeto'; }"
  },
  {
    term: "Protected",
    definition: "Modificador de acceso que permite acceso dentro del mismo paquete y clases hijas.",
    example: "protected String atributo;"
  },
  {
    term: "Set",
    definition: "Interfaz que representa una colección que no permite elementos duplicados.",
    example: "Set<Integer> numeros = new HashSet<>();"
  },
  {
    term: "Stream",
    definition: "Secuencia de elementos que soporta operaciones funcionales para procesamiento de datos.",
    example: "lista.stream().filter(x -> x > 5).collect(Collectors.toList());"
  },
  {
    term: "Super",
    definition: "Palabra clave que hace referencia a la clase padre.",
    example: "super.metodo(); // Llama al método del padre"
  },
  {
    term: "Synchronized",
    definition: "Palabra clave que indica que un método o bloque es thread-safe.",
    example: "synchronized void metodo() { ... }"
  },
  {
    term: "Throws",
    definition: "Palabra clave que declara que un método puede lanzar ciertas excepciones.",
    example: "public void metodo() throws IOException { ... }"
  },
  {
    term: "Try-catch",
    definition: "Estructura para manejar excepciones en Java.",
    example: "try { codigo(); } catch (Exception e) { manejar(e); }"
  },
  {
    term: "Void",
    definition: "Palabra clave que indica que un método no retorna ningún valor.",
    example: "public void saludar() { System.out.println('Hola'); }"
  }
];