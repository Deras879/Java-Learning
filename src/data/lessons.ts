import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'intro-java',
    title: 'Introducción a Java',
    level: 'principiante',
    description: 'Aprende qué es Java, sus características y por qué es tan popular',
    content: {
      explanation: `
# ¿Qué es Java?

Java es un lenguaje de programación orientado a objetos, desarrollado por Sun Microsystems (ahora Oracle) en 1995. Es uno de los lenguajes más populares del mundo debido a sus características únicas:

## Características principales:

- **Portabilidad**: "Write once, run anywhere" (Escribe una vez, ejecuta en cualquier lugar)
- **Orientado a objetos**: Todo en Java es un objeto (casi todo)
- **Robusto**: Manejo automático de memoria y control de errores
- **Seguro**: Diseñado con seguridad en mente
- **Multithreading**: Soporte nativo para programación concurrente

## ¿Para qué se usa Java?

- Aplicaciones empresariales
- Desarrollo web (backend)
- Aplicaciones móviles Android
- Aplicaciones de escritorio
- Sistemas distribuidos

Java es compilado a bytecode que se ejecuta en la JVM (Java Virtual Machine), lo que permite que el mismo código funcione en diferentes sistemas operativos.
      `,
      codeExample: `// Mi primer programa en Java
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, mundo!");
        System.out.println("Bienvenido a Java");
    }
}`,
      exercises: [
        {
          id: 'hello-world',
          title: 'Hola Mundo Personalizado',
          description: 'Modifica el programa para que imprima tu nombre y edad',
          expectedOutput: 'Hola, mi nombre es [tu_nombre] y tengo [tu_edad] años'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es la principal ventaja de Java?',
          options: ['Es muy rápido', 'Es portable', 'Es gratis', 'Es fácil'],
          correctAnswer: 1,
          explanation: 'La portabilidad es la característica más distintiva de Java: "Write once, run anywhere"'
        },
        {
          id: 'q2',
          question: '¿Qué significa JVM?',
          options: ['Java Virtual Machine', 'Java Visual Manager', 'Java Version Manager', 'Java Variable Method'],
          correctAnswer: 0,
          explanation: 'JVM significa Java Virtual Machine, que es la máquina virtual que ejecuta el bytecode de Java'
        },
        {
          id: 'q3',
          question: '¿En qué año fue creado Java?',
          options: ['1990', '1995', '2000', '1985'],
          correctAnswer: 1,
          explanation: 'Java fue desarrollado por Sun Microsystems y lanzado en 1995'
        }
      ]
    }
  },
  {
    id: 'sintaxis-basica',
    title: 'Sintaxis Básica',
    level: 'principiante',
    description: 'Aprende la estructura básica de un programa Java',
    content: {
      explanation: `
# Sintaxis Básica de Java

## Estructura de un programa Java

Todo programa Java debe tener al menos una clase, y si queremos ejecutarlo, necesita un método main.

### Elementos básicos:

1. **Declaración de clase**: \`public class NombreClase\`
2. **Método main**: Punto de entrada del programa
3. **Comentarios**: Para documentar el código
4. **Instrucciones**: Terminan con punto y coma (;)
5. **Bloques de código**: Delimitados por llaves { }

## Reglas importantes:

- El nombre del archivo debe coincidir con el nombre de la clase pública
- Java es case-sensitive (sensible a mayúsculas y minúsculas)
- Cada instrucción termina con punto y coma
- Los bloques se delimitan con llaves { }

## Comentarios:

- **Una línea**: \`// Comentario\`
- **Múltiples líneas**: \`/* Comentario */\`
- **Documentación**: \`/** Comentario de documentación */\`
      `,
      codeExample: `// Comentario de una línea
/*
 * Comentario de múltiples líneas
 * Explicación del programa
 */

/**
 * Clase principal de demostración
 * @author Tu nombre
 */
public class SintaxisBasica {
    
    // Método principal - punto de entrada
    public static void main(String[] args) {
        // Imprimir mensaje
        System.out.println("Aprendiendo sintaxis Java");
        
        // Declarar variable
        String mensaje = "Java es genial";
        System.out.println(mensaje);
        
        // Operación matemática
        int resultado = 10 + 5;
        System.out.println("10 + 5 = " + resultado);
    }
}`,
      exercises: [
        {
          id: 'basic-program',
          title: 'Programa Básico',
          description: 'Crea un programa que imprima tu información personal usando variables',
          expectedOutput: 'Nombre: [nombre]\nEdad: [edad]\nCiudad: [ciudad]'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cómo se declara una clase pública en Java?',
          options: ['class MiClase', 'public class MiClase', 'public MiClase', 'class public MiClase'],
          correctAnswer: 1,
          explanation: 'Una clase pública se declara con "public class NombreClase"'
        },
        {
          id: 'q2',
          question: '¿Con qué carácter terminan las instrucciones en Java?',
          options: [':', '.', ';', ','],
          correctAnswer: 2,
          explanation: 'Todas las instrucciones en Java terminan con punto y coma (;)'
        },
        {
          id: 'q3',
          question: '¿Cuál es la sintaxis correcta para un comentario de una línea?',
          options: ['# comentario', '// comentario', '/* comentario', '-- comentario'],
          correctAnswer: 1,
          explanation: 'Los comentarios de una línea en Java se hacen con //'
        }
      ]
    }
  },
  {
    id: 'tipos-datos',
    title: 'Tipos de Datos y Variables',
    level: 'principiante',
    description: 'Conoce los diferentes tipos de datos y cómo declarar variables',
    content: {
      explanation: `
# Tipos de Datos y Variables en Java

Java es un lenguaje **fuertemente tipado**, lo que significa que toda variable debe tener un tipo específico.

## Tipos de datos primitivos:

### Números enteros:
- **byte**: -128 a 127 (8 bits)
- **short**: -32,768 a 32,767 (16 bits)
- **int**: -2,147,483,648 a 2,147,483,647 (32 bits)
- **long**: -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807 (64 bits)

### Números decimales:
- **float**: Precisión simple (32 bits)
- **double**: Precisión doble (64 bits)

### Otros tipos:
- **char**: Un solo carácter Unicode (16 bits)
- **boolean**: true o false

## Declaración de variables:

\`\`\`java
tipo nombreVariable = valor;
\`\`\`

## Tipos de referencia:
- **String**: Cadenas de texto
- **Arrays**: Arreglos
- **Objetos**: Instancias de clases
      `,
      codeExample: `public class TiposDatos {
    public static void main(String[] args) {
        // Tipos enteros
        byte edad = 25;
        short year = 2024;
        int poblacion = 1000000;
        long distancia = 384400000L; // Distancia a la Luna en km
        
        // Tipos decimales
        float precio = 19.99f;
        double pi = 3.14159265359;
        
        // Otros tipos primitivos
        char inicial = 'J';
        boolean esEstudiante = true;
        
        // Tipo String (referencia)
        String nombre = "Juan Pérez";
        
        // Imprimir valores
        System.out.println("Edad: " + edad);
        System.out.println("Año: " + year);
        System.out.println("Población: " + poblacion);
        System.out.println("Distancia a la Luna: " + distancia + " km");
        System.out.println("Precio: $" + precio);
        System.out.println("Pi: " + pi);
        System.out.println("Inicial: " + inicial);
        System.out.println("¿Es estudiante? " + esEstudiante);
        System.out.println("Nombre completo: " + nombre);
    }
}`,
      exercises: [
        {
          id: 'variables-exercise',
          title: 'Calculadora de Datos Personales',
          description: 'Declara variables para tu información personal y calcula tu edad en días',
          expectedOutput: 'Información personal con cálculos'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es el rango de valores de un byte?',
          options: ['0 a 255', '-128 a 127', '-32768 a 32767', '0 a 127'],
          correctAnswer: 1,
          explanation: 'Un byte en Java tiene un rango de -128 a 127 (8 bits con signo)'
        },
        {
          id: 'q2',
          question: '¿Qué sufijo se usa para declarar un long?',
          options: ['f', 'd', 'L', 'l'],
          correctAnswer: 2,
          explanation: 'Para declarar un long se usa el sufijo L (mayúscula preferida)'
        },
        {
          id: 'q3',
          question: '¿Cuál NO es un tipo primitivo en Java?',
          options: ['int', 'String', 'boolean', 'char'],
          correctAnswer: 1,
          explanation: 'String es un tipo de referencia, no un tipo primitivo'
        }
      ]
    }
  },
  {
    id: 'operadores',
    title: 'Operadores',
    level: 'principiante',
    description: 'Aprende todos los tipos de operadores en Java',
    content: {
      explanation: `
# Operadores en Java

Los operadores son símbolos que realizan operaciones sobre variables y valores.

## Operadores Aritméticos:
- **+** : Suma
- **-** : Resta
- **\*** : Multiplicación
- **/** : División
- **%** : Módulo (resto de división)

## Operadores de Asignación:
- **=** : Asignación simple
- **+=** : Suma y asigna
- **-=** : Resta y asigna
- **\*=** : Multiplica y asigna
- **/=** : Divide y asigna
- **%=** : Módulo y asigna

## Operadores de Comparación:
- **==** : Igual a
- **!=** : Diferente de
- **>** : Mayor que
- **<** : Menor que
- **>=** : Mayor o igual que
- **<=** : Menor o igual que

## Operadores Lógicos:
- **&&** : Y lógico (AND)
- **||** : O lógico (OR)
- **!** : NO lógico (NOT)

## Operadores de Incremento/Decremento:
- **++** : Incremento
- **--** : Decremento
      `,
      codeExample: `public class Operadores {
    public static void main(String[] args) {
        // Operadores aritméticos
        int a = 10, b = 3;
        System.out.println("a + b = " + (a + b)); // 13
        System.out.println("a - b = " + (a - b)); // 7
        System.out.println("a * b = " + (a * b)); // 30
        System.out.println("a / b = " + (a / b)); // 3 (división entera)
        System.out.println("a % b = " + (a % b)); // 1 (resto)
        
        // Operadores de asignación
        int x = 5;
        x += 3; // x = x + 3 = 8
        System.out.println("x después de += 3: " + x);
        
        // Operadores de comparación
        System.out.println("a == b: " + (a == b)); // false
        System.out.println("a > b: " + (a > b));   // true
        System.out.println("a <= b: " + (a <= b)); // false
        
        // Operadores lógicos
        boolean p = true, q = false;
        System.out.println("p && q: " + (p && q)); // false
        System.out.println("p || q: " + (p || q)); // true
        System.out.println("!p: " + (!p));         // false
        
        // Incremento y decremento
        int contador = 0;
        System.out.println("contador++: " + (contador++)); // 0, luego incrementa
        System.out.println("++contador: " + (++contador)); // 2, incrementa primero
    }
}`,
      exercises: [
        {
          id: 'calculator',
          title: 'Calculadora Básica',
          description: 'Crea una calculadora que realice las 4 operaciones básicas',
          expectedOutput: 'Resultados de operaciones matemáticas'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es el resultado de 10 % 3 en Java?',
          options: ['3', '1', '0', '3.33'],
          correctAnswer: 1,
          explanation: 'El operador % devuelve el resto de la división, 10 % 3 = 1'
        },
        {
          id: 'q2',
          question: '¿Qué hace el operador += ?',
          options: ['Suma dos números', 'Asigna un valor', 'Suma y asigna', 'Compara dos valores'],
          correctAnswer: 2,
          explanation: 'El operador += suma el valor de la derecha a la variable y asigna el resultado'
        },
        {
          id: 'q3',
          question: '¿Cuál es la diferencia entre ++ y --?',
          options: ['No hay diferencia', '++ incrementa, -- decrementa', '++ suma 10, -- resta 10', 'Son operadores de comparación'],
          correctAnswer: 1,
          explanation: '++ incrementa la variable en 1, -- la decrementa en 1'
        }
      ]
    }
  },
  {
    id: 'estructuras-control',
    title: 'Estructuras de Control',
    level: 'principiante',
    description: 'if, switch, bucles for, while y do-while',
    content: {
      explanation: `
# Estructuras de Control en Java

Las estructuras de control permiten alterar el flujo de ejecución del programa.

## Estructura if-else:

\`\`\`java
if (condición) {
    // código si es verdadero
} else if (otraCondición) {
    // código para otra condición
} else {
    // código si todas son falsas
}
\`\`\`

## Estructura switch:

\`\`\`java
switch (variable) {
    case valor1:
        // código
        break;
    case valor2:
        // código
        break;
    default:
        // código por defecto
}
\`\`\`

## Bucles:

### Bucle for:
\`\`\`java
for (inicialización; condición; incremento) {
    // código a repetir
}
\`\`\`

### Bucle while:
\`\`\`java
while (condición) {
    // código a repetir
}
\`\`\`

### Bucle do-while:
\`\`\`java
do {
    // código a repetir
} while (condición);
\`\`\`
      `,
      codeExample: `public class EstructurasControl {
    public static void main(String[] args) {
        // Estructura if-else
        int edad = 18;
        if (edad >= 18) {
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("Eres menor de edad");
        }
        
        // Estructura switch
        int dia = 3;
        switch (dia) {
            case 1:
                System.out.println("Lunes");
                break;
            case 2:
                System.out.println("Martes");
                break;
            case 3:
                System.out.println("Miércoles");
                break;
            default:
                System.out.println("Otro día");
        }
        
        // Bucle for
        System.out.println("Contando del 1 al 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Número: " + i);
        }
        
        // Bucle while
        System.out.println("Cuenta regresiva:");
        int contador = 5;
        while (contador > 0) {
            System.out.println(contador);
            contador--;
        }
        
        // Bucle do-while
        System.out.println("Ejecutar al menos una vez:");
        int x = 0;
        do {
            System.out.println("x = " + x);
            x++;
        } while (x < 3);
    }
}`,
      exercises: [
        {
          id: 'grade-calculator',
          title: 'Calculadora de Calificaciones',
          description: 'Crea un programa que clasifique calificaciones (A, B, C, D, F)',
          expectedOutput: 'Clasificación de notas según rangos'
        },
        {
          id: 'multiplication-table',
          title: 'Tabla de Multiplicar',
          description: 'Genera la tabla de multiplicar de un número usando bucles',
          expectedOutput: 'Tabla de multiplicar completa'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es la diferencia entre while y do-while?',
          options: ['No hay diferencia', 'while evalúa primero, do-while después', 'do-while es más rápido', 'while es para números, do-while para texto'],
          correctAnswer: 1,
          explanation: 'while evalúa la condición antes de ejecutar, do-while ejecuta al menos una vez'
        },
        {
          id: 'q2',
          question: '¿Para qué sirve la palabra break en switch?',
          options: ['Para terminar el programa', 'Para salir del case actual', 'Para reiniciar el switch', 'No sirve para nada'],
          correctAnswer: 1,
          explanation: 'break termina la ejecución del case actual y sale del switch'
        },
        {
          id: 'q3',
          question: '¿Cuál es la sintaxis correcta de un bucle for?',
          options: ['for (i=0; i<10; i++)', 'for i=0 to 10', 'for (int i=0; i<10; i++)', 'for int i=0; i<10; i++'],
          correctAnswer: 2,
          explanation: 'La sintaxis correcta incluye la declaración del tipo: for (int i=0; i<10; i++)'
        }
      ]
    }
  },
  {
    id: 'clases-objetos',
    title: 'Clases y Objetos',
    level: 'intermedio',
    description: 'Introducción a la programación orientada a objetos',
    content: {
      explanation: `
# Clases y Objetos en Java

Java es un lenguaje orientado a objetos. Todo en Java es un objeto (excepto los tipos primitivos).

## ¿Qué es una Clase?
Una clase es un **molde** o **plantilla** que define las características (atributos) y comportamientos (métodos) que tendrán los objetos.

## ¿Qué es un Objeto?
Un objeto es una **instancia** de una clase. Es una entidad concreta creada a partir del molde de la clase.

## Estructura de una Clase:

\`\`\`java
public class NombreClase {
    // Atributos (variables de instancia)
    private tipoDato atributo1;
    private tipoDato atributo2;
    
    // Constructor
    public NombreClase(parámetros) {
        // inicialización
    }
    
    // Métodos
    public tipoDato metodo1() {
        // código
        return valor;
    }
}
\`\`\`

## Crear y usar objetos:

\`\`\`java
// Crear objeto
NombreClase objeto = new NombreClase(parámetros);

// Usar métodos
objeto.metodo1();
\`\`\`
      `,
      codeExample: `// Definición de la clase Persona
class Persona {
    // Atributos privados
    private String nombre;
    private int edad;
    private String email;
    
    // Constructor
    public Persona(String nombre, int edad, String email) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }
    
    // Métodos públicos
    public void presentarse() {
        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años");
    }
    
    public void cumplirAnios() {
        edad++;
        System.out.println("¡Feliz cumpleaños! Ahora tengo " + edad + " años");
    }
    
    public String obtenerEmail() {
        return email;
    }
    
    public void cambiarEmail(String nuevoEmail) {
        this.email = nuevoEmail;
        System.out.println("Email actualizado a: " + email);
    }
}

// Clase principal para probar
public class ClasesObjetos {
    public static void main(String[] args) {
        // Crear objetos (instancias de Persona)
        Persona persona1 = new Persona("Ana García", 25, "ana@email.com");
        Persona persona2 = new Persona("Carlos López", 30, "carlos@email.com");
        
        // Usar métodos de los objetos
        persona1.presentarse();
        persona2.presentarse();
        
        // Modificar estado de los objetos
        persona1.cumplirAnios();
        persona2.cambiarEmail("carlos.lopez@empresa.com");
        
        // Acceder a información
        System.out.println("Email de persona1: " + persona1.obtenerEmail());
    }
}`,
      exercises: [
        {
          id: 'car-class',
          title: 'Clase Automóvil',
          description: 'Crea una clase Automóvil con marca, modelo, año y métodos para acelerar y frenar',
          expectedOutput: 'Objeto automóvil funcional con métodos'
        },
        {
          id: 'bank-account',
          title: 'Cuenta Bancaria',
          description: 'Diseña una clase CuentaBancaria con saldo y métodos depositar/retirar',
          expectedOutput: 'Sistema básico de cuenta bancaria'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Qué es una clase en Java?',
          options: ['Un objeto específico', 'Una plantilla para crear objetos', 'Un método especial', 'Una variable global'],
          correctAnswer: 1,
          explanation: 'Una clase es una plantilla o molde que define la estructura y comportamiento de los objetos'
        },
        {
          id: 'q2',
          question: '¿Cómo se crea un objeto en Java?',
          options: ['create NombreClase()', 'new NombreClase()', 'NombreClase.new()', 'object NombreClase()'],
          correctAnswer: 1,
          explanation: 'Los objetos se crean usando la palabra clave "new" seguida del constructor'
        },
        {
          id: 'q3',
          question: '¿Qué palabra clave se usa para referenciar al objeto actual?',
          options: ['self', 'current', 'this', 'object'],
          correctAnswer: 2,
          explanation: 'La palabra clave "this" se usa para referenciar al objeto actual'
        }
      ]
    }
  },
  {
    id: 'metodos',
    title: 'Métodos en Java',
    level: 'intermedio',
    description: 'Aprende a crear y usar métodos para organizar tu código',
    content: {
      explanation: `
# Métodos en Java

Los métodos son bloques de código que realizan una tarea específica y pueden ser reutilizados.

## Sintaxis de un método:

\`\`\`java
modificadorAcceso tipoRetorno nombreMetodo(parámetros) {
    // código del método
    return valor; // si el método retorna algo
}
\`\`\`

## Componentes de un método:

- **Modificador de acceso**: public, private, protected
- **Tipo de retorno**: void (no retorna), int, String, etc.
- **Nombre del método**: debe ser descriptivo
- **Parámetros**: valores que recibe el método
- **Cuerpo**: código que ejecuta el método

## Tipos de métodos:

### Métodos que no retornan valor (void):
\`\`\`java
public void saludar() {
    System.out.println("¡Hola!");
}
\`\`\`

### Métodos que retornan valor:
\`\`\`java
public int sumar(int a, int b) {
    return a + b;
}
\`\`\`

### Métodos estáticos:
\`\`\`java
public static void metodoEstatico() {
    // No necesita instancia para ser llamado
}
\`\`\`
      `,
      codeExample: `public class Calculadora {
    
    // Método para sumar dos números
    public int sumar(int a, int b) {
        return a + b;
    }
    
    // Método para restar dos números
    public int restar(int a, int b) {
        return a - b;
    }
    
    // Método para multiplicar dos números
    public double multiplicar(double a, double b) {
        return a * b;
    }
    
    // Método para dividir con validación
    public double dividir(double a, double b) {
        if (b == 0) {
            System.out.println("Error: División por cero");
            return 0;
        }
        return a / b;
    }
    
    // Método void que imprime el resultado
    public void mostrarResultado(String operacion, double resultado) {
        System.out.println("Resultado de " + operacion + ": " + resultado);
    }
    
    // Método estático para obtener el valor absoluto
    public static int valorAbsoluto(int numero) {
        return numero < 0 ? -numero : numero;
    }
    
    // Método con múltiples parámetros
    public double calcularPromedio(double... numeros) {
        double suma = 0;
        for (double num : numeros) {
            suma += num;
        }
        return suma / numeros.length;
    }
}

// Clase principal para probar los métodos
public class PruebaMetodos {
    public static void main(String[] args) {
        // Crear instancia de la calculadora
        Calculadora calc = new Calculadora();
        
        // Usar métodos de instancia
        int suma = calc.sumar(10, 5);
        calc.mostrarResultado("suma", suma);
        
        double division = calc.dividir(20, 4);
        calc.mostrarResultado("división", division);
        
        // Usar método estático
        int absoluto = Calculadora.valorAbsoluto(-15);
        System.out.println("Valor absoluto de -15: " + absoluto);
        
        // Método con parámetros variables
        double promedio = calc.calcularPromedio(8.5, 9.0, 7.5, 8.0);
        calc.mostrarResultado("promedio", promedio);
    }
}`,
      exercises: [
        {
          id: 'string-methods',
          title: 'Métodos para Strings',
          description: 'Crea métodos para contar vocales, invertir texto y verificar palíndromos',
          expectedOutput: 'Métodos funcionales para manipular cadenas'
        },
        {
          id: 'math-library',
          title: 'Biblioteca Matemática',
          description: 'Diseña una clase con métodos para potencia, factorial y números primos',
          expectedOutput: 'Biblioteca de funciones matemáticas'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Qué palabra clave se usa para un método que no retorna valor?',
          options: ['null', 'void', 'empty', 'none'],
          correctAnswer: 1,
          explanation: 'void indica que el método no retorna ningún valor'
        },
        {
          id: 'q2',
          question: '¿Cómo se llama a un método estático?',
          options: ['objeto.metodo()', 'new Clase().metodo()', 'Clase.metodo()', 'static.metodo()'],
          correctAnswer: 2,
          explanation: 'Los métodos estáticos se llaman usando el nombre de la clase: Clase.metodo()'
        },
        {
          id: 'q3',
          question: '¿Qué permite hacer la sobrecarga de métodos?',
          options: ['Cambiar el tipo de retorno', 'Tener métodos con el mismo nombre pero diferentes parámetros', 'Hacer métodos más rápidos', 'Ocultar métodos'],
          correctAnswer: 1,
          explanation: 'La sobrecarga permite tener múltiples métodos con el mismo nombre pero diferentes parámetros'
        },
        {
          id: 'q4',
          question: '¿Qué significa "double... numeros" en un parámetro?',
          options: ['Un array de doubles', 'Parámetros variables (varargs)', 'Dos parámetros double', 'Un double opcional'],
          correctAnswer: 1,
          explanation: 'Los tres puntos (...) indican parámetros variables (varargs), permitiendo pasar cualquier cantidad de argumentos'
        }
      ]
    }
  },
  {
    id: 'constructores',
    title: 'Constructores',
    level: 'intermedio',
    description: 'Aprende a inicializar objetos correctamente usando constructores',
    content: {
      explanation: `
# Constructores en Java

Un constructor es un método especial que se ejecuta automáticamente cuando se crea un objeto.

## Características de los constructores:

- Tienen el mismo nombre que la clase
- No tienen tipo de retorno (ni siquiera void)
- Se ejecutan automáticamente al crear un objeto
- Pueden tener parámetros
- Una clase puede tener múltiples constructores (sobrecarga)

## Tipos de constructores:

### Constructor por defecto:
Si no defines ningún constructor, Java crea uno automáticamente sin parámetros.

### Constructor sin parámetros:
\`\`\`java
public MiClase() {
    // inicialización
}
\`\`\`

### Constructor con parámetros:
\`\`\`java
public MiClase(int valor, String texto) {
    this.valor = valor;
    this.texto = texto;
}
\`\`\`

### Sobrecarga de constructores:
Puedes tener múltiples constructores con diferentes parámetros.

## La palabra clave 'this':

- **this.atributo**: Referencia al atributo del objeto actual
- **this(parámetros)**: Llama a otro constructor de la misma clase
      `,
      codeExample: `public class Estudiante {
    private String nombre;
    private int edad;
    private String carrera;
    private double promedio;
    
    // Constructor por defecto
    public Estudiante() {
        this.nombre = "Sin nombre";
        this.edad = 0;
        this.carrera = "Sin carrera";
        this.promedio = 0.0;
        System.out.println("Estudiante creado con valores por defecto");
    }
    
    // Constructor con nombre solamente
    public Estudiante(String nombre) {
        this(); // Llama al constructor por defecto
        this.nombre = nombre;
        System.out.println("Estudiante creado con nombre: " + nombre);
    }
    
    // Constructor con nombre y edad
    public Estudiante(String nombre, int edad) {
        this(nombre); // Llama al constructor con nombre
        this.edad = edad;
    }
    
    // Constructor completo
    public Estudiante(String nombre, int edad, String carrera, double promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.promedio = promedio;
        System.out.println("Estudiante creado con todos los datos");
    }
    
    // Métodos getter
    public String getNombre() { return nombre; }
    public int getEdad() { return edad; }
    public String getCarrera() { return carrera; }
    public double getPromedio() { return promedio; }
    
    // Método para mostrar información
    public void mostrarInfo() {
        System.out.println("=== Información del Estudiante ===");
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Carrera: " + carrera);
        System.out.println("Promedio: " + promedio);
    }
}

// Clase principal para probar constructores
public class PruebaConstructores {
    public static void main(String[] args) {
        // Usando diferentes constructores
        Estudiante est1 = new Estudiante();
        est1.mostrarInfo();
        
        System.out.println();
        
        Estudiante est2 = new Estudiante("María González");
        est2.mostrarInfo();
        
        System.out.println();
        
        Estudiante est3 = new Estudiante("Carlos Ruiz", 22);
        est3.mostrarInfo();
        
        System.out.println();
        
        Estudiante est4 = new Estudiante("Ana López", 20, "Ingeniería", 8.5);
        est4.mostrarInfo();
    }
}`,
      exercises: [
        {
          id: 'product-class',
          title: 'Clase Producto',
          description: 'Crea una clase Producto con múltiples constructores para diferentes formas de inicialización',
          expectedOutput: 'Clase con constructores sobrecargados funcionales'
        },
        {
          id: 'rectangle-class',
          title: 'Clase Rectángulo',
          description: 'Diseña una clase Rectángulo con constructores para cuadrado y rectángulo',
          expectedOutput: 'Clase geométrica con constructores apropiados'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es la característica principal de un constructor?',
          options: ['Retorna un valor', 'Tiene el mismo nombre que la clase', 'Es estático', 'Es privado'],
          correctAnswer: 1,
          explanation: 'Un constructor debe tener exactamente el mismo nombre que la clase'
        },
        {
          id: 'q2',
          question: '¿Qué hace this() en un constructor?',
          options: ['Referencia al objeto actual', 'Llama a otro constructor de la misma clase', 'Crea un nuevo objeto', 'Destruye el objeto'],
          correctAnswer: 1,
          explanation: 'this() llama a otro constructor de la misma clase, útil para reutilizar código'
        },
        {
          id: 'q3',
          question: '¿Cuándo se ejecuta un constructor?',
          options: ['Al declarar la clase', 'Al crear un objeto con new', 'Al llamar un método', 'Al finalizar el programa'],
          correctAnswer: 1,
          explanation: 'El constructor se ejecuta automáticamente cuando se crea un objeto con new'
        },
        {
          id: 'q4',
          question: '¿Puede una clase tener múltiples constructores?',
          options: ['No, solo uno', 'Sí, con diferentes parámetros', 'Solo si son estáticos', 'Solo si son privados'],
          correctAnswer: 1,
          explanation: 'Una clase puede tener múltiples constructores con diferentes parámetros (sobrecarga)'
        }
      ]
    }
  },
  {
    id: 'encapsulamiento',
    title: 'Encapsulamiento',
    level: 'intermedio',
    description: 'Aprende a proteger los datos usando modificadores de acceso',
    content: {
      explanation: `
# Encapsulamiento en Java

El encapsulamiento es uno de los pilares fundamentales de la programación orientada a objetos. Consiste en ocultar los detalles internos de una clase y controlar el acceso a sus datos.

## Modificadores de Acceso:

### private:
- Solo accesible dentro de la misma clase
- Es el más restrictivo
- Usado para atributos que queremos proteger

### protected:
- Accesible dentro del mismo paquete y clases hijas
- Usado para herencia

### public:
- Accesible desde cualquier lugar
- Usado para métodos que forman la interfaz pública

### default (sin modificador):
- Accesible solo dentro del mismo paquete

## Métodos Getter y Setter:

Los métodos getter y setter permiten acceder y modificar atributos privados de forma controlada.

### Getter (obtener valor):
\`\`\`java
public TipoDato getNombreAtributo() {
    return nombreAtributo;
}
\`\`\`

### Setter (establecer valor):
\`\`\`java
public void setNombreAtributo(TipoDato valor) {
    // validaciones opcionales
    this.nombreAtributo = valor;
}
\`\`\`

## Ventajas del Encapsulamiento:

- **Control de acceso**: Decidimos qué puede ser modificado
- **Validación**: Podemos validar datos antes de asignarlos
- **Mantenimiento**: Cambios internos no afectan el código externo
- **Seguridad**: Los datos están protegidos de modificaciones no deseadas
      `,
      codeExample: `public class CuentaBancaria {
    // Atributos privados (encapsulados)
    private String numeroCuenta;
    private String titular;
    private double saldo;
    private boolean activa;
    
    // Constructor
    public CuentaBancaria(String numeroCuenta, String titular, double saldoInicial) {
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
        this.activa = true;
    }
    
    // Getters (métodos de acceso)
    public String getNumeroCuenta() {
        return numeroCuenta;
    }
    
    public String getTitular() {
        return titular;
    }
    
    public double getSaldo() {
        return saldo;
    }
    
    public boolean isActiva() {
        return activa;
    }
    
    // Setters con validación
    public void setTitular(String titular) {
        if (titular != null && !titular.trim().isEmpty()) {
            this.titular = titular;
        } else {
            System.out.println("Error: El titular no puede estar vacío");
        }
    }
    
    // Métodos de negocio que controlan el acceso al saldo
    public boolean depositar(double cantidad) {
        if (!activa) {
            System.out.println("Error: La cuenta está inactiva");
            return false;
        }
        
        if (cantidad > 0) {
            saldo += cantidad;
            System.out.println("Depósito exitoso. Nuevo saldo: $" + saldo);
            return true;
        } else {
            System.out.println("Error: La cantidad debe ser positiva");
            return false;
        }
    }
    
    public boolean retirar(double cantidad) {
        if (!activa) {
            System.out.println("Error: La cuenta está inactiva");
            return false;
        }
        
        if (cantidad > 0 && cantidad <= saldo) {
            saldo -= cantidad;
            System.out.println("Retiro exitoso. Nuevo saldo: $" + saldo);
            return true;
        } else if (cantidad > saldo) {
            System.out.println("Error: Saldo insuficiente");
            return false;
        } else {
            System.out.println("Error: La cantidad debe ser positiva");
            return false;
        }
    }
    
    public void desactivarCuenta() {
        this.activa = false;
        System.out.println("Cuenta desactivada");
    }
    
    public void mostrarEstadoCuenta() {
        System.out.println("=== Estado de Cuenta ===");
        System.out.println("Número: " + numeroCuenta);
        System.out.println("Titular: " + titular);
        System.out.println("Saldo: $" + saldo);
        System.out.println("Estado: " + (activa ? "Activa" : "Inactiva"));
    }
}

// Clase principal para demostrar encapsulamiento
public class PruebaEncapsulamiento {
    public static void main(String[] args) {
        // Crear cuenta bancaria
        CuentaBancaria cuenta = new CuentaBancaria("12345", "Juan Pérez", 1000.0);
        
        // Acceso controlado a través de métodos públicos
        cuenta.mostrarEstadoCuenta();
        
        // Operaciones válidas
        cuenta.depositar(500.0);
        cuenta.retirar(200.0);
        
        // Intentos de operaciones inválidas
        cuenta.retirar(2000.0); // Saldo insuficiente
        cuenta.depositar(-100.0); // Cantidad negativa
        
        // Cambiar titular usando setter
        cuenta.setTitular("Juan Carlos Pérez");
        
        // Acceso a información usando getters
        System.out.println("Titular actual: " + cuenta.getTitular());
        System.out.println("Saldo actual: $" + cuenta.getSaldo());
        
        // No podemos acceder directamente a los atributos privados
        // cuenta.saldo = 999999; // Esto causaría error de compilación
    }
}`,
      exercises: [
        {
          id: 'employee-class',
          title: 'Clase Empleado Encapsulada',
          description: 'Crea una clase Empleado con atributos privados y métodos getter/setter con validaciones',
          expectedOutput: 'Clase con encapsulamiento completo y validaciones'
        },
        {
          id: 'temperature-class',
          title: 'Conversor de Temperatura',
          description: 'Diseña una clase que maneje temperaturas con conversiones automáticas entre Celsius y Fahrenheit',
          expectedOutput: 'Clase con encapsulamiento y lógica de conversión'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es el modificador de acceso más restrictivo?',
          options: ['public', 'protected', 'private', 'default'],
          correctAnswer: 2,
          explanation: 'private es el más restrictivo, solo permite acceso desde la misma clase'
        },
        {
          id: 'q2',
          question: '¿Para qué sirven los métodos getter?',
          options: ['Para modificar atributos', 'Para obtener valores de atributos privados', 'Para crear objetos', 'Para eliminar objetos'],
          correctAnswer: 1,
          explanation: 'Los getters permiten obtener el valor de atributos privados de forma controlada'
        },
        {
          id: 'q3',
          question: '¿Cuál es una ventaja del encapsulamiento?',
          options: ['Hace el código más rápido', 'Permite validar datos antes de asignarlos', 'Reduce el tamaño del programa', 'Elimina la necesidad de constructores'],
          correctAnswer: 1,
          explanation: 'El encapsulamiento permite validar y controlar cómo se modifican los datos'
        },
        {
          id: 'q4',
          question: '¿Qué convención se usa para nombrar un getter?',
          options: ['obtenerNombre()', 'getNombre()', 'nombre()', 'leerNombre()'],
          correctAnswer: 1,
          explanation: 'La convención es usar "get" seguido del nombre del atributo con la primera letra en mayúscula'
        }
      ]
    }
  },
  {
    id: 'herencia',
    title: 'Herencia',
    level: 'intermedio',
    description: 'Aprende a crear jerarquías de clases y reutilizar código',
    content: {
      explanation: `
# Herencia en Java

La herencia es un mecanismo que permite crear nuevas clases basadas en clases existentes, heredando sus atributos y métodos.

## Conceptos clave:

- **Clase padre (superclase)**: La clase de la cual se hereda
- **Clase hija (subclase)**: La clase que hereda de otra
- **extends**: Palabra clave para establecer herencia
- **super**: Referencia a la clase padre

## Sintaxis:

\`\`\`java
public class ClaseHija extends ClasePadre {
    // nuevos atributos y métodos
    // sobrescritura de métodos existentes
}
\`\`\`

## Características de la herencia:

- La clase hija hereda todos los atributos y métodos públicos y protegidos
- Los atributos y métodos privados NO se heredan
- Java solo permite herencia simple (una clase padre)
- Todas las clases heredan implícitamente de Object

## La palabra clave 'super':

- **super()**: Llama al constructor de la clase padre
- **super.metodo()**: Llama a un método de la clase padre
- **super.atributo**: Accede a un atributo de la clase padre

## Sobrescritura de métodos:

Puedes redefinir métodos de la clase padre en la clase hija usando @Override.
      `,
      codeExample: `// Clase padre (superclase)
class Vehiculo {
    protected String marca;
    protected String modelo;
    protected int año;
    protected double velocidad;
    
    // Constructor de la clase padre
    public Vehiculo(String marca, String modelo, int año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidad = 0.0;
    }
    
    // Métodos de la clase padre
    public void acelerar(double incremento) {
        velocidad += incremento;
        System.out.println("Acelerando... Velocidad actual: " + velocidad + " km/h");
    }
    
    public void frenar(double decremento) {
        velocidad = Math.max(0, velocidad - decremento);
        System.out.println("Frenando... Velocidad actual: " + velocidad + " km/h");
    }
    
    public void mostrarInfo() {
        System.out.println("Vehículo: " + marca + " " + modelo + " (" + año + ")");
        System.out.println("Velocidad: " + velocidad + " km/h");
    }
    
    // Método que será sobrescrito
    public void hacerSonido() {
        System.out.println("El vehículo hace ruido");
    }
}

// Clase hija que hereda de Vehiculo
class Automovil extends Vehiculo {
    private int numeroPuertas;
    private String tipoCombustible;
    
    // Constructor de la clase hija
    public Automovil(String marca, String modelo, int año, int numeroPuertas, String tipoCombustible) {
        super(marca, modelo, año); // Llama al constructor del padre
        this.numeroPuertas = numeroPuertas;
        this.tipoCombustible = tipoCombustible;
    }
    
    // Método específico de Automovil
    public void abrirPuertas() {
        System.out.println("Abriendo las " + numeroPuertas + " puertas del automóvil");
    }
    
    // Sobrescritura del método del padre
    @Override
    public void hacerSonido() {
        System.out.println("¡Beep beep! - Sonido de automóvil");
    }
    
    // Sobrescritura con funcionalidad adicional
    @Override
    public void mostrarInfo() {
        super.mostrarInfo(); // Llama al método del padre
        System.out.println("Puertas: " + numeroPuertas);
        System.out.println("Combustible: " + tipoCombustible);
    }
}

// Otra clase hija
class Motocicleta extends Vehiculo {
    private boolean tieneSidecar;
    
    public Motocicleta(String marca, String modelo, int año, boolean tieneSidecar) {
        super(marca, modelo, año);
        this.tieneSidecar = tieneSidecar;
    }
    
    public void hacerCaballito() {
        System.out.println("¡Haciendo caballito en la motocicleta!");
    }
    
    @Override
    public void hacerSonido() {
        System.out.println("¡Vroom vroom! - Sonido de motocicleta");
    }
    
    @Override
    public void mostrarInfo() {
        super.mostrarInfo();
        System.out.println("Sidecar: " + (tieneSidecar ? "Sí" : "No"));
    }
}

// Clase principal para demostrar herencia
public class PruebaHerencia {
    public static void main(String[] args) {
        // Crear objetos de las clases hijas
        Automovil auto = new Automovil("Toyota", "Corolla", 2023, 4, "Gasolina");
        Motocicleta moto = new Motocicleta("Honda", "CBR600", 2022, false);
        
        System.out.println("=== AUTOMÓVIL ===");
        auto.mostrarInfo();
        auto.acelerar(50);
        auto.hacerSonido();
        auto.abrirPuertas();
        
        System.out.println("\n=== MOTOCICLETA ===");
        moto.mostrarInfo();
        moto.acelerar(80);
        moto.hacerSonido();
        moto.hacerCaballito();
        
        System.out.println("\n=== POLIMORFISMO ===");
        // Polimorfismo: referencia del padre, objeto del hijo
        Vehiculo vehiculo1 = new Automovil("Ford", "Focus", 2021, 4, "Híbrido");
        Vehiculo vehiculo2 = new Motocicleta("Yamaha", "R1", 2023, false);
        
        vehiculo1.hacerSonido(); // Llama al método sobrescrito de Automovil
        vehiculo2.hacerSonido(); // Llama al método sobrescrito de Motocicleta
    }
}`,
      exercises: [
        {
          id: 'animal-hierarchy',
          title: 'Jerarquía de Animales',
          description: 'Crea una jerarquía Animal -> Mamifero -> Perro con métodos específicos',
          expectedOutput: 'Jerarquía de clases con herencia funcional'
        },
        {
          id: 'shape-hierarchy',
          title: 'Figuras Geométricas',
          description: 'Diseña una jerarquía Figura -> Rectangulo, Circulo con cálculo de área',
          expectedOutput: 'Sistema de figuras geométricas con herencia'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Qué palabra clave se usa para establecer herencia?',
          options: ['inherits', 'extends', 'implements', 'super'],
          correctAnswer: 1,
          explanation: 'extends se usa para establecer herencia entre clases'
        },
        {
          id: 'q2',
          question: '¿Qué hace super() en un constructor?',
          options: ['Crea un objeto padre', 'Llama al constructor de la clase padre', 'Elimina la herencia', 'Crea una copia del objeto'],
          correctAnswer: 1,
          explanation: 'super() llama al constructor de la clase padre para inicializar sus atributos'
        },
        {
          id: 'q3',
          question: '¿Los atributos privados se heredan?',
          options: ['Sí, siempre', 'No, nunca', 'Solo si son estáticos', 'Solo con super'],
          correctAnswer: 1,
          explanation: 'Los atributos privados NO se heredan, solo los públicos y protegidos'
        },
        {
          id: 'q4',
          question: '¿Qué anotación se usa para sobrescribir métodos?',
          options: ['@Inherit', '@Override', '@Super', '@Extend'],
          correctAnswer: 1,
          explanation: '@Override indica que estamos sobrescribiendo un método de la clase padre'
        }
      ]
    }
  },
  {
    id: 'polimorfismo',
    title: 'Polimorfismo',
    level: 'intermedio',
    description: 'Comprende cómo los objetos pueden tomar múltiples formas',
    content: {
      explanation: `
# Polimorfismo en Java

El polimorfismo permite que una referencia de tipo padre pueda apuntar a objetos de diferentes tipos hijos, y que cada objeto responda de manera específica a los mismos métodos.

## Tipos de Polimorfismo:

### 1. Polimorfismo de Compilación (Sobrecarga):
- Múltiples métodos con el mismo nombre pero diferentes parámetros
- Se resuelve en tiempo de compilación

### 2. Polimorfismo de Ejecución (Sobrescritura):
- Métodos sobrescritos en clases hijas
- Se resuelve en tiempo de ejecución

## Conceptos clave:

- **Upcasting**: Asignar un objeto hijo a una referencia padre
- **Downcasting**: Convertir una referencia padre a tipo hijo
- **instanceof**: Operador para verificar el tipo de un objeto
- **Binding dinámico**: El método correcto se determina en tiempo de ejecución

## Ventajas del Polimorfismo:

- **Flexibilidad**: Un mismo código puede trabajar con diferentes tipos
- **Extensibilidad**: Fácil agregar nuevos tipos sin modificar código existente
- **Mantenimiento**: Código más limpio y organizado
- **Reutilización**: Mayor reutilización de código

## Ejemplo de uso:

\`\`\`java
Animal animal = new Perro(); // Upcasting
animal.hacerSonido(); // Llama al método de Perro

if (animal instanceof Perro) {
    Perro perro = (Perro) animal; // Downcasting
    perro.moverCola();
}
\`\`\`
      `,
      codeExample: `// Clase base abstracta
abstract class Empleado {
    protected String nombre;
    protected int id;
    protected double salarioBase;
    
    public Empleado(String nombre, int id, double salarioBase) {
        this.nombre = nombre;
        this.id = id;
        this.salarioBase = salarioBase;
    }
    
    // Método abstracto que debe ser implementado por las clases hijas
    public abstract double calcularSalario();
    
    // Método concreto que puede ser sobrescrito
    public void mostrarInfo() {
        System.out.println("ID: " + id + ", Nombre: " + nombre);
        System.out.println("Salario: $" + calcularSalario());
    }
    
    // Getters
    public String getNombre() { return nombre; }
    public int getId() { return id; }
}

// Clase hija: Empleado de tiempo completo
class EmpleadoTiempoCompleto extends Empleado {
    private double bonificacion;
    
    public EmpleadoTiempoCompleto(String nombre, int id, double salarioBase, double bonificacion) {
        super(nombre, id, salarioBase);
        this.bonificacion = bonificacion;
    }
    
    @Override
    public double calcularSalario() {
        return salarioBase + bonificacion;
    }
    
    @Override
    public void mostrarInfo() {
        super.mostrarInfo();
        System.out.println("Tipo: Tiempo Completo");
        System.out.println("Bonificación: $" + bonificacion);
    }
    
    public void trabajarHorasExtra() {
        System.out.println(nombre + " está trabajando horas extra");
    }
}

// Clase hija: Empleado por horas
class EmpleadoPorHoras extends Empleado {
    private int horasTrabajadas;
    private double tarifaPorHora;
    
    public EmpleadoPorHoras(String nombre, int id, int horasTrabajadas, double tarifaPorHora) {
        super(nombre, id, 0); // No tiene salario base fijo
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }
    
    @Override
    public double calcularSalario() {
        return horasTrabajadas * tarifaPorHora;
    }
    
    @Override
    public void mostrarInfo() {
        super.mostrarInfo();
        System.out.println("Tipo: Por Horas");
        System.out.println("Horas trabajadas: " + horasTrabajadas);
        System.out.println("Tarifa por hora: $" + tarifaPorHora);
    }
    
    public void registrarHoras(int horas) {
        this.horasTrabajadas += horas;
        System.out.println("Registradas " + horas + " horas adicionales");
    }
}

// Clase hija: Empleado freelancer
class EmpleadoFreelancer extends Empleado {
    private int proyectosCompletados;
    private double pagoPorProyecto;
    
    public EmpleadoFreelancer(String nombre, int id, int proyectosCompletados, double pagoPorProyecto) {
        super(nombre, id, 0);
        this.proyectosCompletados = proyectosCompletados;
        this.pagoPorProyecto = pagoPorProyecto;
    }
    
    @Override
    public double calcularSalario() {
        return proyectosCompletados * pagoPorProyecto;
    }
    
    @Override
    public void mostrarInfo() {
        super.mostrarInfo();
        System.out.println("Tipo: Freelancer");
        System.out.println("Proyectos completados: " + proyectosCompletados);
        System.out.println("Pago por proyecto: $" + pagoPorProyecto);
    }
    
    public void completarProyecto() {
        proyectosCompletados++;
        System.out.println(nombre + " completó un proyecto. Total: " + proyectosCompletados);
    }
}

// Clase para gestionar empleados (demuestra polimorfismo)
class GestorEmpleados {
    public static void procesarNomina(Empleado[] empleados) {
        double totalNomina = 0;
        
        System.out.println("=== PROCESANDO NÓMINA ===");
        for (Empleado emp : empleados) {
            System.out.println("\n--- Empleado ---");
            emp.mostrarInfo(); // Polimorfismo: cada tipo muestra su info específica
            
            double salario = emp.calcularSalario(); // Polimorfismo: cada tipo calcula diferente
            totalNomina += salario;
            
            // Downcasting para acceder a métodos específicos
            if (emp instanceof EmpleadoTiempoCompleto) {
                EmpleadoTiempoCompleto etc = (EmpleadoTiempoCompleto) emp;
                etc.trabajarHorasExtra();
            } else if (emp instanceof EmpleadoPorHoras) {
                EmpleadoPorHoras eph = (EmpleadoPorHoras) emp;
                eph.registrarHoras(5);
            } else if (emp instanceof EmpleadoFreelancer) {
                EmpleadoFreelancer ef = (EmpleadoFreelancer) emp;
                ef.completarProyecto();
            }
        }
        
        System.out.println("\n=== RESUMEN ===");
        System.out.println("Total empleados: " + empleados.length);
        System.out.println("Total nómina: $" + totalNomina);
    }
}

// Clase principal para demostrar polimorfismo
public class PruebaPolimorfismo {
    public static void main(String[] args) {
        // Crear array de empleados (polimorfismo)
        Empleado[] empleados = {
            new EmpleadoTiempoCompleto("Ana García", 1, 3000, 500),
            new EmpleadoPorHoras("Carlos López", 2, 40, 25),
            new EmpleadoFreelancer("María Rodríguez", 3, 3, 800)
        };
        
        // Procesar nómina usando polimorfismo
        GestorEmpleados.procesarNomina(empleados);
        
        System.out.println("\n=== DEMOSTRACIÓN DE INSTANCEOF ===");
        for (Empleado emp : empleados) {
            System.out.println(emp.getNombre() + " es:");
            if (emp instanceof EmpleadoTiempoCompleto) {
                System.out.println("  - Empleado de Tiempo Completo");
            }
            if (emp instanceof EmpleadoPorHoras) {
                System.out.println("  - Empleado Por Horas");
            }
            if (emp instanceof EmpleadoFreelancer) {
                System.out.println("  - Empleado Freelancer");
            }
            System.out.println("  - Empleado (clase base)");
        }
    }
}`,
      exercises: [
        {
          id: 'payment-system',
          title: 'Sistema de Pagos',
          description: 'Crea una jerarquía de métodos de pago (Tarjeta, PayPal, Transferencia) con polimorfismo',
          expectedOutput: 'Sistema polimórfico de procesamiento de pagos'
        },
        {
          id: 'media-player',
          title: 'Reproductor Multimedia',
          description: 'Diseña clases para diferentes tipos de archivos multimedia con reproducción polimórfica',
          expectedOutput: 'Sistema multimedia con polimorfismo'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Qué es el polimorfismo?',
          options: ['Tener múltiples constructores', 'Que un objeto pueda tomar múltiples formas', 'Heredar de múltiples clases', 'Tener métodos privados'],
          correctAnswer: 1,
          explanation: 'El polimorfismo permite que un objeto pueda ser tratado como diferentes tipos'
        },
        {
          id: 'q2',
          question: '¿Qué operador verifica el tipo de un objeto?',
          options: ['typeof', 'instanceof', 'is', 'type'],
          correctAnswer: 1,
          explanation: 'instanceof verifica si un objeto es una instancia de una clase específica'
        },
        {
          id: 'q3',
          question: '¿Cuándo se resuelve el polimorfismo de ejecución?',
          options: ['En tiempo de compilación', 'En tiempo de ejecución', 'Al crear el objeto', 'Al declarar la variable'],
          correctAnswer: 1,
          explanation: 'El polimorfismo de ejecución se resuelve en tiempo de ejecución (binding dinámico)'
        },
        {
          id: 'q4',
          question: '¿Qué es el downcasting?',
          options: ['Convertir hijo a padre', 'Convertir padre a hijo', 'Crear un nuevo objeto', 'Eliminar un objeto'],
          correctAnswer: 1,
          explanation: 'Downcasting es convertir una referencia padre a un tipo hijo específico'
        }
      ]
    }
  },
  {
    id: 'interfaces',
    title: 'Interfaces',
    level: 'intermedio',
    description: 'Aprende a definir contratos usando interfaces',
    content: {
      explanation: `
# Interfaces en Java

Una interface define un contrato que las clases deben cumplir. Especifica qué métodos debe tener una clase, pero no cómo implementarlos.

## Características de las Interfaces:

- Todos los métodos son implícitamente **public** y **abstract**
- Todas las variables son implícitamente **public**, **static** y **final**
- Una clase puede implementar múltiples interfaces
- Las interfaces pueden heredar de otras interfaces
- Desde Java 8: métodos default y static

## Sintaxis:

### Definir una interface:
\`\`\`java
public interface NombreInterface {
    // Constantes
    int CONSTANTE = 100;
    
    // Métodos abstractos
    void metodoAbstracto();
    
    // Método default (Java 8+)
    default void metodoDefault() {
        // implementación por defecto
    }
    
    // Método estático (Java 8+)
    static void metodoEstatico() {
        // implementación estática
    }
}
\`\`\`

### Implementar una interface:
\`\`\`java
public class MiClase implements Interface1, Interface2 {
    @Override
    public void metodoAbstracto() {
        // implementación obligatoria
    }
}
\`\`\`

## Ventajas de las Interfaces:

- **Múltiple herencia**: Una clase puede implementar varias interfaces
- **Contrato claro**: Define qué debe hacer una clase
- **Polimorfismo**: Permite tratar objetos de diferentes clases de manera uniforme
- **Desacoplamiento**: Reduce dependencias entre clases
- **Flexibilidad**: Fácil intercambiar implementaciones
      `,
      codeExample: `// Interface para definir comportamiento de reproducción
interface Reproducible {
    // Constantes de la interface
    int VOLUMEN_MAXIMO = 100;
    int VOLUMEN_MINIMO = 0;
    
    // Métodos abstractos que deben implementar las clases
    void reproducir();
    void pausar();
    void detener();
    void ajustarVolumen(int volumen);
    
    // Método default (implementación por defecto)
    default void mostrarEstado() {
        System.out.println("Estado del reproductor actualizado");
    }
    
    // Método estático
    static void mostrarInformacion() {
        System.out.println("Interface Reproducible v1.0");
        System.out.println("Volumen permitido: " + VOLUMEN_MINIMO + " - " + VOLUMEN_MAXIMO);
    }
}

// Interface para dispositivos conectables
interface Conectable {
    void conectar();
    void desconectar();
    boolean estaConectado();
}

// Interface para dispositivos con batería
interface ConBateria {
    int getNivelBateria();
    void cargarBateria();
    
    default boolean bateriaLow() {
        return getNivelBateria() < 20;
    }
}

// Clase que implementa múltiples interfaces
class ReproductorMP3 implements Reproducible, Conectable, ConBateria {
    private String cancionActual;
    private boolean reproduciendo;
    private boolean pausado;
    private int volumen;
    private boolean conectado;
    private int nivelBateria;
    
    public ReproductorMP3() {
        this.volumen = 50;
        this.conectado = false;
        this.nivelBateria = 100;
        this.reproduciendo = false;
        this.pausado = false;
    }
    
    // Implementación de Reproducible
    @Override
    public void reproducir() {
        if (!conectado) {
            System.out.println("Error: Dispositivo no conectado");
            return;
        }
        
        if (bateriaLow()) {
            System.out.println("Advertencia: Batería baja (" + nivelBateria + "%)");
        }
        
        reproduciendo = true;
        pausado = false;
        System.out.println("♪ Reproduciendo: " + (cancionActual != null ? cancionActual : "Sin canción"));
    }
    
    @Override
    public void pausar() {
        if (reproduciendo) {
            pausado = true;
            System.out.println("⏸ Reproducción pausada");
        }
    }
    
    @Override
    public void detener() {
        reproduciendo = false;
        pausado = false;
        System.out.println("⏹ Reproducción detenida");
    }
    
    @Override
    public void ajustarVolumen(int volumen) {
        if (volumen >= VOLUMEN_MINIMO && volumen <= VOLUMEN_MAXIMO) {
            this.volumen = volumen;
            System.out.println("🔊 Volumen ajustado a: " + volumen);
        } else {
            System.out.println("Error: Volumen debe estar entre " + VOLUMEN_MINIMO + " y " + VOLUMEN_MAXIMO);
        }
    }
    
    // Implementación de Conectable
    @Override
    public void conectar() {
        conectado = true;
        System.out.println("🔗 Reproductor MP3 conectado");
    }
    
    @Override
    public void desconectar() {
        if (reproduciendo) {
            detener();
        }
        conectado = false;
        System.out.println("🔌 Reproductor MP3 desconectado");
    }
    
    @Override
    public boolean estaConectado() {
        return conectado;
    }
    
    // Implementación de ConBateria
    @Override
    public int getNivelBateria() {
        return nivelBateria;
    }
    
    @Override
    public void cargarBateria() {
        nivelBateria = 100;
        System.out.println("🔋 Batería cargada al 100%");
    }
    
    // Métodos específicos de la clase
    public void cargarCancion(String cancion) {
        this.cancionActual = cancion;
        System.out.println("📁 Canción cargada: " + cancion);
    }
    
    public void mostrarEstadoCompleto() {
        System.out.println("=== Estado del Reproductor MP3 ===");
        System.out.println("Conectado: " + (conectado ? "Sí" : "No"));
        System.out.println("Reproduciendo: " + (reproduciendo ? "Sí" : "No"));
        System.out.println("Pausado: " + (pausado ? "Sí" : "No"));
        System.out.println("Volumen: " + volumen);
        System.out.println("Batería: " + nivelBateria + "%");
        System.out.println("Canción: " + (cancionActual != null ? cancionActual : "Ninguna"));
        mostrarEstado(); // Método default de la interface
    }
    
    // Simular uso de batería
    public void usarBateria(int consumo) {
        nivelBateria = Math.max(0, nivelBateria - consumo);
        if (nivelBateria == 0) {
            System.out.println("🪫 Batería agotada. Dispositivo apagándose...");
            detener();
            desconectar();
        }
    }
}

// Clase principal para demostrar interfaces
public class PruebaInterfaces {
    public static void main(String[] args) {
        // Mostrar información estática de la interface
        Reproducible.mostrarInformacion();
        System.out.println();
        
        // Crear reproductor MP3
        ReproductorMP3 reproductor = new ReproductorMP3();
        
        // Usar como diferentes tipos (polimorfismo con interfaces)
        Reproducible player = reproductor;
        Conectable dispositivo = reproductor;
        ConBateria bateria = reproductor;
        
        // Demostrar funcionalidad
        reproductor.mostrarEstadoCompleto();
        System.out.println();
        
        // Conectar y configurar
        dispositivo.conectar();
        reproductor.cargarCancion("Bohemian Rhapsody - Queen");
        player.ajustarVolumen(75);
        
        // Reproducir música
        player.reproducir();
        player.pausar();
        player.reproducir();
        
        // Simular uso y descarga de batería
        System.out.println("\n--- Simulando uso ---");
        reproductor.usarBateria(30);
        System.out.println("Nivel de batería: " + bateria.getNivelBateria() + "%");
        
        reproductor.usarBateria(50);
        if (bateria.bateriaLow()) {
            System.out.println("⚠️ Batería baja, considera cargar");
            bateria.cargarBateria();
        }
        
        // Estado final
        System.out.println("\n--- Estado final ---");
        reproductor.mostrarEstadoCompleto();
        
        // Demostrar que una clase puede implementar múltiples interfaces
        System.out.println("\n--- Verificación de tipos ---");
        System.out.println("¿Es Reproducible? " + (reproductor instanceof Reproducible));
        System.out.println("¿Es Conectable? " + (reproductor instanceof Conectable));
        System.out.println("¿Es ConBateria? " + (reproductor instanceof ConBateria));
    }
}`,
      exercises: [
        {
          id: 'drawable-interface',
          title: 'Interface Dibujable',
          description: 'Crea una interface Dibujable e implementala en clases Círculo, Rectángulo y Triángulo',
          expectedOutput: 'Sistema de figuras dibujables con interface común'
        },
        {
          id: 'sortable-interface',
          title: 'Interface Ordenable',
          description: 'Diseña una interface para objetos que pueden ser ordenados e implementala en diferentes clases',
          expectedOutput: 'Sistema de ordenamiento polimórfico'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Qué palabra clave se usa para implementar una interface?',
          options: ['extends', 'implements', 'uses', 'interface'],
          correctAnswer: 1,
          explanation: 'implements se usa para que una clase implemente una o más interfaces'
        },
        {
          id: 'q2',
          question: '¿Puede una clase implementar múltiples interfaces?',
          options: ['No, solo una', 'Sí, múltiples', 'Solo dos', 'Solo si son abstractas'],
          correctAnswer: 1,
          explanation: 'Una clase puede implementar múltiples interfaces, separadas por comas'
        },
        {
          id: 'q3',
          question: '¿Qué son los métodos default en interfaces?',
          options: ['Métodos obligatorios', 'Métodos con implementación por defecto', 'Métodos privados', 'Métodos estáticos'],
          correctAnswer: 1,
          explanation: 'Los métodos default tienen implementación por defecto y no es obligatorio sobrescribirlos'
        },
        {
          id: 'q4',
          question: '¿Las variables en interfaces son automáticamente?',
          options: ['private y final', 'public, static y final', 'protected y static', 'public y abstract'],
          correctAnswer: 1,
          explanation: 'Las variables en interfaces son automáticamente public, static y final (constantes)'
        }
      ]
    }
  },
  {
    id: 'excepciones',
    title: 'Manejo de Excepciones',
    level: 'intermedio',
    description: 'Aprende a manejar errores y excepciones en Java',
    content: {
      explanation: `
# Manejo de Excepciones en Java

Las excepciones son eventos que interrumpen el flujo normal del programa. Java proporciona un mecanismo robusto para manejar estos errores.

## Jerarquía de Excepciones:

- **Throwable**: Clase base de todas las excepciones
  - **Error**: Errores graves del sistema (no se deben capturar)
  - **Exception**: Excepciones que pueden ser manejadas
    - **RuntimeException**: Excepciones no verificadas
    - **Otras Exception**: Excepciones verificadas

## Tipos de Excepciones:

### Excepciones Verificadas (Checked):
- Deben ser manejadas obligatoriamente
- Se verifican en tiempo de compilación
- Ejemplo: IOException, SQLException

### Excepciones No Verificadas (Unchecked):
- No es obligatorio manejarlas
- Heredan de RuntimeException
- Ejemplo: NullPointerException, ArrayIndexOutOfBoundsException

## Palabras clave:

- **try**: Bloque donde puede ocurrir una excepción
- **catch**: Bloque que maneja la excepción
- **finally**: Bloque que siempre se ejecuta
- **throw**: Lanza una excepción manualmente
- **throws**: Declara que un método puede lanzar excepciones

## Sintaxis básica:

\`\`\`java
try {
    // código que puede lanzar excepción
} catch (TipoExcepcion e) {
    // manejo de la excepción
} finally {
    // código que siempre se ejecuta
}
\`\`\`
      `,
      codeExample: `import java.util.Scanner;
import java.io.FileReader;
import java.io.IOException;

// Excepción personalizada
class SaldoInsuficienteException extends Exception {
    private double saldoActual;
    private double montoSolicitado;
    
    public SaldoInsuficienteException(double saldoActual, double montoSolicitado) {
        super("Saldo insuficiente. Saldo: $" + saldoActual + ", Solicitado: $" + montoSolicitado);
        this.saldoActual = saldoActual;
        this.montoSolicitado = montoSolicitado;
    }
    
    public double getSaldoActual() { return saldoActual; }
    public double getMontoSolicitado() { return montoSolicitado; }
}

class CuentaBancariaSegura {
    private double saldo;
    private String numeroCuenta;
    
    public CuentaBancariaSegura(String numeroCuenta, double saldoInicial) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldoInicial;
    }
    
    // Método que puede lanzar excepción verificada
    public void retirar(double monto) throws SaldoInsuficienteException {
        if (monto <= 0) {
            throw new IllegalArgumentException("El monto debe ser positivo");
        }
        
        if (monto > saldo) {
            throw new SaldoInsuficienteException(saldo, monto);
        }
        
        saldo -= monto;
        System.out.println("Retiro exitoso. Nuevo saldo: $" + saldo);
    }
    
    public void depositar(double monto) {
        if (monto <= 0) {
            throw new IllegalArgumentException("El monto debe ser positivo");
        }
        
        saldo += monto;
        System.out.println("Depósito exitoso. Nuevo saldo: $" + saldo);
    }
    
    public double getSaldo() { return saldo; }
    public String getNumeroCuenta() { return numeroCuenta; }
}

public class ManejoExcepciones {
    
    // Método que demuestra diferentes tipos de excepciones
    public static void demostrarExcepciones() {
        System.out.println("=== DEMOSTRACIÓN DE EXCEPCIONES ===\n");
        
        // 1. Excepción de división por cero
        try {
            int resultado = 10 / 0;
            System.out.println("Resultado: " + resultado);
        } catch (ArithmeticException e) {
            System.out.println("❌ Error aritmético: " + e.getMessage());
        }
        
        // 2. Excepción de array fuera de límites
        try {
            int[] numeros = {1, 2, 3};
            System.out.println("Elemento en índice 5: " + numeros[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("❌ Índice fuera de límites: " + e.getMessage());
        }
        
        // 3. Excepción de puntero nulo
        try {
            String texto = null;
            int longitud = texto.length();
            System.out.println("Longitud: " + longitud);
        } catch (NullPointerException e) {
            System.out.println("❌ Referencia nula: " + e.getMessage());
        }
        
        // 4. Múltiples catch
        try {
            String numero = "abc";
            int valor = Integer.parseInt(numero);
            int division = valor / 0;
        } catch (NumberFormatException e) {
            System.out.println("❌ Formato de número inválido: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("❌ Error aritmético: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("❌ Error general: " + e.getMessage());
        }
        
        // 5. Try-with-resources (para recursos que se deben cerrar)
        try (Scanner scanner = new Scanner("123 456 789")) {
            while (scanner.hasNextInt()) {
                System.out.println("Número leído: " + scanner.nextInt());
            }
        } catch (Exception e) {
            System.out.println("❌ Error al leer: " + e.getMessage());
        }
        // El scanner se cierra automáticamente
    }
    
    // Método que demuestra excepciones personalizadas
    public static void demostrarExcepcionPersonalizada() {
        System.out.println("\n=== EXCEPCIONES PERSONALIZADAS ===\n");
        
        CuentaBancariaSegura cuenta = new CuentaBancariaSegura("12345", 1000.0);
        
        try {
            System.out.println("Saldo inicial: $" + cuenta.getSaldo());
            
            // Operación exitosa
            cuenta.depositar(500.0);
            
            // Operación que causará excepción
            cuenta.retirar(2000.0);
            
        } catch (SaldoInsuficienteException e) {
            System.out.println("❌ " + e.getMessage());
            System.out.println("   Saldo disponible: $" + e.getSaldoActual());
            System.out.println("   Monto solicitado: $" + e.getMontoSolicitado());
            System.out.println("   Diferencia: $" + (e.getMontoSolicitado() - e.getSaldoActual()));
        } catch (IllegalArgumentException e) {
            System.out.println("❌ Argumento inválido: " + e.getMessage());
        }
        
        // Bloque finally
        try {
            cuenta.retirar(100.0);
        } catch (SaldoInsuficienteException e) {
            System.out.println("❌ " + e.getMessage());
        } finally {
            System.out.println("🔒 Operación bancaria finalizada");
            System.out.println("   Saldo final: $" + cuenta.getSaldo());
        }
    }
    
    // Método que propaga excepciones
    public static void leerArchivo(String nombreArchivo) throws IOException {
        System.out.println("\n=== PROPAGACIÓN DE EXCEPCIONES ===\n");
        
        // Este método declara que puede lanzar IOException
        FileReader archivo = null;
        try {
            archivo = new FileReader(nombreArchivo);
            System.out.println("✅ Archivo abierto correctamente");
        } finally {
            if (archivo != null) {
                archivo.close();
                System.out.println("🔒 Archivo cerrado");
            }
        }
    }
    
    public static void main(String[] args) {
        // Demostrar diferentes tipos de excepciones
        demostrarExcepciones();
        
        // Demostrar excepciones personalizadas
        demostrarExcepcionPersonalizada();
        
        // Demostrar propagación de excepciones
        try {
            leerArchivo("archivo_inexistente.txt");
        } catch (IOException e) {
            System.out.println("❌ Error de E/S: " + e.getMessage());
        }
        
        // Ejemplo de manejo robusto con múltiples operaciones
        System.out.println("\n=== MANEJO ROBUSTO ===\n");
        
        CuentaBancariaSegura cuenta2 = new CuentaBancariaSegura("67890", 500.0);
        double[] retiros = {100.0, 200.0, 300.0, 150.0};
        
        for (double monto : retiros) {
            try {
                cuenta2.retirar(monto);
            } catch (SaldoInsuficienteException e) {
                System.out.println("⚠️ No se pudo retirar $" + monto + " - " + e.getMessage());
                // Continúa con el siguiente retiro
            } catch (IllegalArgumentException e) {
                System.out.println("⚠️ Monto inválido: " + e.getMessage());
            }
        }
        
        System.out.println("\n✅ Programa terminado correctamente");
    }
}`,
      exercises: [
        {
          id: 'calculator-exceptions',
          title: 'Calculadora con Excepciones',
          description: 'Crea una calculadora que maneje excepciones para división por cero y entradas inválidas',
          expectedOutput: 'Calculadora robusta con manejo de errores'
        },
        {
          id: 'file-processor',
          title: 'Procesador de Archivos',
          description: 'Diseña un sistema que lea archivos y maneje todas las posibles excepciones',
          expectedOutput: 'Sistema de archivos con manejo completo de excepciones'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es la diferencia entre Exception y RuntimeException?',
          options: ['No hay diferencia', 'Exception debe ser manejada, RuntimeException no', 'RuntimeException es más grave', 'Exception es para errores de sintaxis'],
          correctAnswer: 1,
          explanation: 'Exception (verificada) debe ser manejada obligatoriamente, RuntimeException (no verificada) no'
        },
        {
          id: 'q2',
          question: '¿Cuándo se ejecuta el bloque finally?',
          options: ['Solo si no hay excepción', 'Solo si hay excepción', 'Siempre', 'Solo si se usa return'],
          correctAnswer: 2,
          explanation: 'El bloque finally siempre se ejecuta, haya o no excepción'
        },
        {
          id: 'q3',
          question: '¿Qué palabra clave se usa para lanzar una excepción manualmente?',
          options: ['throws', 'throw', 'exception', 'raise'],
          correctAnswer: 1,
          explanation: 'throw se usa para lanzar una excepción manualmente'
        },
        {
          id: 'q4',
          question: '¿Qué hace throws en la declaración de un método?',
          options: ['Lanza una excepción', 'Maneja una excepción', 'Declara que el método puede lanzar excepciones', 'Crea una excepción'],
          correctAnswer: 2,
          explanation: 'throws declara que el método puede lanzar ciertas excepciones verificadas'
        }
      ]
    }
  },
  {
    id: 'arreglos',
    title: 'Arreglos (Arrays)',
    level: 'intermedio',
    description: 'Aprende a trabajar con colecciones de datos del mismo tipo',
    content: {
      explanation: `
# Arreglos en Java

Un arreglo es una estructura de datos que almacena múltiples elementos del mismo tipo en posiciones consecutivas de memoria.

## Características de los Arreglos:

- **Tamaño fijo**: Una vez creado, no puede cambiar de tamaño
- **Tipo homogéneo**: Todos los elementos deben ser del mismo tipo
- **Indexados**: Se accede a los elementos por su índice (empezando en 0)
- **Objetos**: Los arreglos son objetos en Java

## Declaración y Creación:

### Declaración:
\`\`\`java
tipo[] nombreArreglo;
// o
tipo nombreArreglo[];
\`\`\`

### Creación:
\`\`\`java
nombreArreglo = new tipo[tamaño];
\`\`\`

### Declaración e inicialización:
\`\`\`java
int[] numeros = {1, 2, 3, 4, 5};
String[] nombres = new String[]{"Ana", "Luis", "María"};
\`\`\`

## Operaciones Comunes:

- **Acceso**: \`arreglo[índice]\`
- **Asignación**: \`arreglo[índice] = valor\`
- **Longitud**: \`arreglo.length\`
- **Recorrido**: bucles for, for-each

## Arreglos Multidimensionales:

\`\`\`java
int[][] matriz = new int[filas][columnas];
int[][] tabla = {{1,2,3}, {4,5,6}};
\`\`\`
      `,
      codeExample: `import java.util.Arrays;
import java.util.Scanner;

public class EjemplosArreglos {
    
    public static void main(String[] args) {
        // Demostrar diferentes formas de crear arreglos
        demostrarCreacionArreglos();
        
        // Operaciones básicas con arreglos
        demostrarOperacionesBasicas();
        
        // Arreglos multidimensionales
        demostrarArreglosMultidimensionales();
        
        // Métodos útiles de la clase Arrays
        demostrarMetodosArrays();
        
        // Ejemplo práctico: sistema de calificaciones
        sistemaCalificaciones();
    }
    
    public static void demostrarCreacionArreglos() {
        System.out.println("=== CREACIÓN DE ARREGLOS ===\n");
        
        // 1. Declaración y creación separada
        int[] numeros;
        numeros = new int[5]; // Arreglo de 5 enteros (inicializados en 0)
        
        // 2. Declaración e inicialización con valores
        String[] frutas = {"Manzana", "Banana", "Naranja", "Uva"};
        
        // 3. Creación con new y valores
        double[] precios = new double[]{19.99, 25.50, 12.75};
        
        // 4. Arreglo de objetos
        Scanner[] scanners = new Scanner[3];
        
        System.out.println("Arreglo de números (tamaño): " + numeros.length);
        System.out.println("Arreglo de frutas: " + Arrays.toString(frutas));
        System.out.println("Arreglo de precios: " + Arrays.toString(precios));
        System.out.println();
    }
    
    public static void demostrarOperacionesBasicas() {
        System.out.println("=== OPERACIONES BÁSICAS ===\n");
        
        // Crear y llenar arreglo
        int[] numeros = new int[10];
        
        // Llenar con valores
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = (i + 1) * 2; // 2, 4, 6, 8, ...
        }
        
        System.out.println("Arreglo lleno: " + Arrays.toString(numeros));
        
        // Recorrer con for tradicional
        System.out.print("Recorrido tradicional: ");
        for (int i = 0; i < numeros.length; i++) {
            System.out.print(numeros[i] + " ");
        }
        System.out.println();
        
        // Recorrer con for-each (enhanced for)
        System.out.print("Recorrido for-each: ");
        for (int numero : numeros) {
            System.out.print(numero + " ");
        }
        System.out.println();
        
        // Buscar elemento
        int buscar = 8;
        int posicion = buscarElemento(numeros, buscar);
        if (posicion != -1) {
            System.out.println("Elemento " + buscar + " encontrado en posición: " + posicion);
        } else {
            System.out.println("Elemento " + buscar + " no encontrado");
        }
        
        // Calcular estadísticas
        System.out.println("Suma total: " + calcularSuma(numeros));
        System.out.println("Promedio: " + calcularPromedio(numeros));
        System.out.println("Máximo: " + encontrarMaximo(numeros));
        System.out.println("Mínimo: " + encontrarMinimo(numeros));
        System.out.println();
    }
    
    public static void demostrarArreglosMultidimensionales() {
        System.out.println("=== ARREGLOS MULTIDIMENSIONALES ===\n");
        
        // Matriz 3x3
        int[][] matriz = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("Matriz 3x3:");
        imprimirMatriz(matriz);
        
        // Crear matriz de notas (estudiantes x materias)
        double[][] notas = new double[4][3]; // 4 estudiantes, 3 materias
        
        // Llenar con notas aleatorias
        for (int i = 0; i < notas.length; i++) {
            for (int j = 0; j < notas[i].length; j++) {
                notas[i][j] = Math.round((Math.random() * 4 + 6) * 10.0) / 10.0; // 6.0 - 10.0
            }
        }
        
        System.out.println("Matriz de notas (Estudiantes x Materias):");
        String[] materias = {"Matemáticas", "Ciencias", "Historia"};
        
        System.out.printf("%-12s", "Estudiante");
        for (String materia : materias) {
            System.out.printf("%-12s", materia);
        }
        System.out.printf("%-12s%n", "Promedio");
        
        for (int i = 0; i < notas.length; i++) {
            System.out.printf("%-12s", "Est " + (i + 1));
            double suma = 0;
            for (int j = 0; j < notas[i].length; j++) {
                System.out.printf("%-12.1f", notas[i][j]);
                suma += notas[i][j];
            }
            System.out.printf("%-12.1f%n", suma / notas[i].length);
        }
        System.out.println();
    }
    
    public static void demostrarMetodosArrays() {
        System.out.println("=== MÉTODOS DE LA CLASE Arrays ===\n");
        
        int[] numeros = {5, 2, 8, 1, 9, 3};
        System.out.println("Arreglo original: " + Arrays.toString(numeros));
        
        // Copiar arreglo
        int[] copia = Arrays.copyOf(numeros, numeros.length);
        System.out.println("Copia: " + Arrays.toString(copia));
        
        // Ordenar
        Arrays.sort(copia);
        System.out.println("Copia ordenada: " + Arrays.toString(copia));
        
        // Búsqueda binaria (solo en arreglos ordenados)
        int indice = Arrays.binarySearch(copia, 5);
        System.out.println("Índice de 5 en arreglo ordenado: " + indice);
        
        // Llenar arreglo
        int[] lleno = new int[5];
        Arrays.fill(lleno, 42);
        System.out.println("Arreglo lleno con 42: " + Arrays.toString(lleno));
        
        // Comparar arreglos
        int[] otro = {5, 2, 8, 1, 9, 3};
        System.out.println("¿Son iguales original y otro? " + Arrays.equals(numeros, otro));
        System.out.println();
    }
    
    public static void sistemaCalificaciones() {
        System.out.println("=== SISTEMA DE CALIFICACIONES ===\n");
        
        String[] estudiantes = {"Ana García", "Carlos López", "María Rodríguez", "Juan Pérez", "Laura Martín"};
        String[] materias = {"Matemáticas", "Física", "Química", "Historia"};
        double[][] calificaciones = new double[estudiantes.length][materias.length];
        
        // Generar calificaciones aleatorias
        for (int i = 0; i < calificaciones.length; i++) {
            for (int j = 0; j < calificaciones[i].length; j++) {
                calificaciones[i][j] = Math.round((Math.random() * 4 + 6) * 10.0) / 10.0;
            }
        }
        
        // Mostrar tabla de calificaciones
        System.out.printf("%-15s", "Estudiante");
        for (String materia : materias) {
            System.out.printf("%-12s", materia);
        }
        System.out.printf("%-12s %-12s%n", "Promedio", "Estado");
        System.out.println("-".repeat(80));
        
        for (int i = 0; i < estudiantes.length; i++) {
            System.out.printf("%-15s", estudiantes[i]);
            
            double suma = 0;
            for (int j = 0; j < calificaciones[i].length; j++) {
                System.out.printf("%-12.1f", calificaciones[i][j]);
                suma += calificaciones[i][j];
            }
            
            double promedio = suma / calificaciones[i].length;
            String estado = promedio >= 7.0 ? "APROBADO" : "REPROBADO";
            
            System.out.printf("%-12.1f %-12s%n", promedio, estado);
        }
        
        // Estadísticas por materia
        System.out.println("\n--- Estadísticas por Materia ---");
        for (int j = 0; j < materias.length; j++) {
            double suma = 0;
            double max = calificaciones[0][j];
            double min = calificaciones[0][j];
            
            for (int i = 0; i < estudiantes.length; i++) {
                suma += calificaciones[i][j];
                max = Math.max(max, calificaciones[i][j]);
                min = Math.min(min, calificaciones[i][j]);
            }
            
            double promedio = suma / estudiantes.length;
            System.out.printf("%s - Promedio: %.1f, Máx: %.1f, Mín: %.1f%n", 
                            materias[j], promedio, max, min);
        }
    }
    
    // Métodos auxiliares
    public static int buscarElemento(int[] arreglo, int elemento) {
        for (int i = 0; i < arreglo.length; i++) {
            if (arreglo[i] == elemento) {
                return i;
            }
        }
        return -1;
    }
    
    public static int calcularSuma(int[] arreglo) {
        int suma = 0;
        for (int numero : arreglo) {
            suma += numero;
        }
        return suma;
    }
    
    public static double calcularPromedio(int[] arreglo) {
        return (double) calcularSuma(arreglo) / arreglo.length;
    }
    
    public static int encontrarMaximo(int[] arreglo) {
        int max = arreglo[0];
        for (int numero : arreglo) {
            if (numero > max) {
                max = numero;
            }
        }
        return max;
    }
    
    public static int encontrarMinimo(int[] arreglo) {
        int min = arreglo[0];
        for (int numero : arreglo) {
            if (numero < min) {
                min = numero;
            }
        }
        return min;
    }
    
    public static void imprimirMatriz(int[][] matriz) {
        for (int[] fila : matriz) {
            for (int elemento : fila) {
                System.out.printf("%3d ", elemento);
            }
            System.out.println();
        }
        System.out.println();
    }
}`,
      exercises: [
        {
          id: 'inventory-system',
          title: 'Sistema de Inventario',
          description: 'Crea un sistema que maneje inventario de productos usando arreglos',
          expectedOutput: 'Sistema de inventario con búsqueda y estadísticas'
        },
        {
          id: 'matrix-operations',
          title: 'Operaciones con Matrices',
          description: 'Implementa suma, multiplicación y transposición de matrices',
          expectedOutput: 'Calculadora de matrices funcional'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿En qué índice comienzan los arreglos en Java?',
          options: ['1', '0', '-1', 'Depende del tipo'],
          correctAnswer: 1,
          explanation: 'Los arreglos en Java comienzan en el índice 0'
        },
        {
          id: 'q2',
          question: '¿Cómo se obtiene la longitud de un arreglo?',
          options: ['arreglo.size()', 'arreglo.length()', 'arreglo.length', 'arreglo.count'],
          correctAnswer: 2,
          explanation: 'Se usa arreglo.length (propiedad, no método)'
        },
        {
          id: 'q3',
          question: '¿Qué pasa si accedes a un índice fuera del rango del arreglo?',
          options: ['Retorna null', 'Retorna 0', 'Lanza ArrayIndexOutOfBoundsException', 'Crea un nuevo elemento'],
          correctAnswer: 2,
          explanation: 'Acceder fuera del rango lanza ArrayIndexOutOfBoundsException'
        },
        {
          id: 'q4',
          question: '¿Cuál es la sintaxis correcta para un for-each?',
          options: ['for (int i in array)', 'for (int i : array)', 'for each (int i in array)', 'foreach (int i : array)'],
          correctAnswer: 1,
          explanation: 'La sintaxis correcta es: for (tipo variable : arreglo)'
        }
      ]
    }
  },
  {
    id: 'colecciones',
    title: 'Colecciones (Collections)',
    level: 'avanzado',
    description: 'Aprende a usar ArrayList, HashMap y otras estructuras de datos dinámicas',
    content: {
      explanation: `
# Colecciones en Java

Las colecciones son estructuras de datos dinámicas que pueden crecer y decrecer durante la ejecución del programa.

## Framework de Colecciones:

### Interfaces principales:
- **Collection**: Interfaz base para todas las colecciones
- **List**: Colecciones ordenadas que permiten duplicados
- **Set**: Colecciones que no permiten duplicados
- **Map**: Colecciones de pares clave-valor

### Implementaciones comunes:

#### List:
- **ArrayList**: Lista basada en arreglo dinámico
- **LinkedList**: Lista enlazada
- **Vector**: Lista sincronizada (thread-safe)

#### Set:
- **HashSet**: Conjunto basado en tabla hash
- **TreeSet**: Conjunto ordenado
- **LinkedHashSet**: Conjunto que mantiene orden de inserción

#### Map:
- **HashMap**: Mapa basado en tabla hash
- **TreeMap**: Mapa ordenado por claves
- **LinkedHashMap**: Mapa que mantiene orden de inserción

## Ventajas sobre arreglos:

- **Tamaño dinámico**: Crecen y decrecen automáticamente
- **Métodos útiles**: add(), remove(), contains(), etc.
- **Iteradores**: Formas seguras de recorrer
- **Generics**: Seguridad de tipos en tiempo de compilación

## Sintaxis con Generics:

\`\`\`java
List<String> lista = new ArrayList<>();
Map<String, Integer> mapa = new HashMap<>();
Set<Double> conjunto = new HashSet<>();
\`\`\`
      `,
      codeExample: `import java.util.*;

public class EjemplosColecciones {
    
    public static void main(String[] args) {
        // Demostrar diferentes tipos de colecciones
        demostrarArrayList();
        demostrarHashMap();
        demostrarHashSet();
        
        // Ejemplo práctico: sistema de biblioteca
        sistemaBiblioteca();
        
        // Operaciones avanzadas
        operacionesAvanzadas();
    }
    
    public static void demostrarArrayList() {
        System.out.println("=== ARRAYLIST ===\n");
        
        // Crear ArrayList de Strings
        List<String> frutas = new ArrayList<>();
        
        // Agregar elementos
        frutas.add("Manzana");
        frutas.add("Banana");
        frutas.add("Naranja");
        frutas.add("Uva");
        frutas.add("Manzana"); // Los duplicados están permitidos
        
        System.out.println("Lista de frutas: " + frutas);
        System.out.println("Tamaño: " + frutas.size());
        
        // Acceder a elementos
        System.out.println("Primera fruta: " + frutas.get(0));
        System.out.println("Última fruta: " + frutas.get(frutas.size() - 1));
        
        // Buscar elementos
        System.out.println("¿Contiene 'Banana'? " + frutas.contains("Banana"));
        System.out.println("Índice de 'Naranja': " + frutas.indexOf("Naranja"));
        
        // Modificar elementos
        frutas.set(1, "Fresa"); // Cambiar "Banana" por "Fresa"
        System.out.println("Después de cambiar: " + frutas);
        
        // Eliminar elementos
        frutas.remove("Uva"); // Por valor
        frutas.remove(0); // Por índice
        System.out.println("Después de eliminar: " + frutas);
        
        // Recorrer con diferentes métodos
        System.out.println("\nFormas de recorrer:");
        
        // For tradicional
        System.out.print("For tradicional: ");
        for (int i = 0; i < frutas.size(); i++) {
            System.out.print(frutas.get(i) + " ");
        }
        System.out.println();
        
        // For-each
        System.out.print("For-each: ");
        for (String fruta : frutas) {
            System.out.print(fruta + " ");
        }
        System.out.println();
        
        // Iterator
        System.out.print("Iterator: ");
        Iterator<String> it = frutas.iterator();
        while (it.hasNext()) {
            System.out.print(it.next() + " ");
        }
        System.out.println("\n");
    }
    
    public static void demostrarHashMap() {
        System.out.println("=== HASHMAP ===\n");
        
        // Crear HashMap para almacenar edades
        Map<String, Integer> edades = new HashMap<>();
        
        // Agregar pares clave-valor
        edades.put("Ana", 25);
        edades.put("Carlos", 30);
        edades.put("María", 28);
        edades.put("Juan", 35);
        
        System.out.println("Mapa de edades: " + edades);
        System.out.println("Tamaño: " + edades.size());
        
        // Acceder a valores
        System.out.println("Edad de Ana: " + edades.get("Ana"));
        System.out.println("Edad de Pedro: " + edades.get("Pedro")); // null si no existe
        
        // Verificar existencia
        System.out.println("¿Existe 'Carlos'? " + edades.containsKey("Carlos"));
        System.out.println("¿Existe edad 28? " + edades.containsValue(28));
        
        // Actualizar valor
        edades.put("Ana", 26); // Actualiza la edad existente
        System.out.println("Después de actualizar Ana: " + edades);
        
        // Obtener con valor por defecto
        int edadPedro = edades.getOrDefault("Pedro", 0);
        System.out.println("Edad de Pedro (con default): " + edadPedro);
        
        // Recorrer el mapa
        System.out.println("\nFormas de recorrer el mapa:");
        
        // Recorrer claves
        System.out.println("Solo claves:");
        for (String nombre : edades.keySet()) {
            System.out.println("  " + nombre);
        }
        
        // Recorrer valores
        System.out.println("Solo valores:");
        for (Integer edad : edades.values()) {
            System.out.println("  " + edad + " años");
        }
        
        // Recorrer pares clave-valor
        System.out.println("Pares clave-valor:");
        for (Map.Entry<String, Integer> entrada : edades.entrySet()) {
            System.out.println("  " + entrada.getKey() + " tiene " + entrada.getValue() + " años");
        }
        System.out.println();
    }
    
    public static void demostrarHashSet() {
        System.out.println("=== HASHSET ===\n");
        
        // Crear HashSet de números
        Set<Integer> numeros = new HashSet<>();
        
        // Agregar elementos
        numeros.add(5);
        numeros.add(2);
        numeros.add(8);
        numeros.add(2); // Duplicado - no se agregará
        numeros.add(1);
        
        System.out.println("Conjunto de números: " + numeros);
        System.out.println("Tamaño: " + numeros.size());
        
        // Verificar existencia
        System.out.println("¿Contiene 5? " + numeros.contains(5));
        System.out.println("¿Contiene 10? " + numeros.contains(10));
        
        // Eliminar elemento
        numeros.remove(2);
        System.out.println("Después de eliminar 2: " + numeros);
        
        // Operaciones de conjuntos
        Set<Integer> otrosNumeros = new HashSet<>(Arrays.asList(3, 5, 7, 9));
        System.out.println("Otro conjunto: " + otrosNumeros);
        
        // Unión
        Set<Integer> union = new HashSet<>(numeros);
        union.addAll(otrosNumeros);
        System.out.println("Unión: " + union);
        
        // Intersección
        Set<Integer> interseccion = new HashSet<>(numeros);
        interseccion.retainAll(otrosNumeros);
        System.out.println("Intersección: " + interseccion);
        
        // Diferencia
        Set<Integer> diferencia = new HashSet<>(numeros);
        diferencia.removeAll(otrosNumeros);
        System.out.println("Diferencia: " + diferencia);
        System.out.println();
    }
    
    public static void sistemaBiblioteca() {
        System.out.println("=== SISTEMA DE BIBLIOTECA ===\n");
        
        // Lista de libros
        List<String> libros = new ArrayList<>(Arrays.asList(
            "Don Quijote", "Cien años de soledad", "1984", 
            "El principito", "Orgullo y prejuicio"
        ));
        
        // Mapa de libros prestados (libro -> usuario)
        Map<String, String> librosPrestados = new HashMap<>();
        librosPrestados.put("1984", "Ana García");
        librosPrestados.put("El principito", "Carlos López");
        
        // Conjunto de usuarios registrados
        Set<String> usuariosRegistrados = new HashSet<>(Arrays.asList(
            "Ana García", "Carlos López", "María Rodríguez", "Juan Pérez"
        ));
        
        System.out.println("📚 Libros disponibles en la biblioteca:");
        for (int i = 0; i < libros.size(); i++) {
            String libro = libros.get(i);
            String estado = librosPrestados.containsKey(libro) ? 
                          "PRESTADO a " + librosPrestados.get(libro) : "DISPONIBLE";
            System.out.println((i + 1) + ". " + libro + " - " + estado);
        }
        
        System.out.println("\n👥 Usuarios registrados: " + usuariosRegistrados.size());
        for (String usuario : usuariosRegistrados) {
            System.out.println("  - " + usuario);
        }
        
        // Simular préstamo
        String libroAPedir = "Don Quijote";
        String usuario = "María Rodríguez";
        
        if (libros.contains(libroAPedir) && !librosPrestados.containsKey(libroAPedir)) {
            if (usuariosRegistrados.contains(usuario)) {
                librosPrestados.put(libroAPedir, usuario);
                System.out.println("\n✅ Préstamo exitoso: '" + libroAPedir + "' prestado a " + usuario);
            } else {
                System.out.println("\n❌ Usuario no registrado: " + usuario);
            }
        } else {
            System.out.println("\n❌ Libro no disponible: " + libroAPedir);
        }
        
        // Mostrar estadísticas
        System.out.println("\n📊 Estadísticas:");
        System.out.println("Total de libros: " + libros.size());
        System.out.println("Libros prestados: " + librosPrestados.size());
        System.out.println("Libros disponibles: " + (libros.size() - librosPrestados.size()));
        System.out.println();
    }
    
    public static void operacionesAvanzadas() {
        System.out.println("=== OPERACIONES AVANZADAS ===\n");
        
        // Crear lista de números para demostrar operaciones
        List<Integer> numeros = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
        System.out.println("Lista original: " + numeros);
        
        // Filtrar números pares
        List<Integer> pares = new ArrayList<>();
        for (Integer num : numeros) {
            if (num % 2 == 0) {
                pares.add(num);
            }
        }
        System.out.println("Números pares: " + pares);
        
        // Ordenar en orden descendente
        List<Integer> descendente = new ArrayList<>(numeros);
        descendente.sort(Collections.reverseOrder());
        System.out.println("Orden descendente: " + descendente);
        
        // Mezclar aleatoriamente
        List<Integer> mezclado = new ArrayList<>(numeros);
        Collections.shuffle(mezclado);
        System.out.println("Mezclado: " + mezclado);
        
        // Encontrar máximo y mínimo
        System.out.println("Máximo: " + Collections.max(numeros));
        System.out.println("Mínimo: " + Collections.min(numeros));
        
        // Frecuencia de elementos
        List<String> palabras = Arrays.asList("java", "python", "java", "c++", "java", "python");
        System.out.println("Palabras: " + palabras);
        System.out.println("Frecuencia de 'java': " + Collections.frequency(palabras, "java"));
        
        // Convertir entre colecciones
        Set<String> palabrasUnicas = new HashSet<>(palabras);
        System.out.println("Palabras únicas: " + palabrasUnicas);
        
        List<String> listaOrdenada = new ArrayList<>(palabrasUnicas);
        Collections.sort(listaOrdenada);
        System.out.println("Palabras únicas ordenadas: " + listaOrdenada);
        
        // Sublistas
        List<Integer> sublista = numeros.subList(2, 6); // Índices 2 a 5
        System.out.println("Sublista (índices 2-5): " + sublista);
        
        // Verificar si una lista está contenida en otra
        List<Integer> pequena = Arrays.asList(3, 4, 5);
        System.out.println("¿Contiene [3,4,5]? " + Collections.indexOfSubList(numeros, pequena));
    }
}`,
      exercises: [
        {
          id: 'student-management',
          title: 'Sistema de Gestión de Estudiantes',
          description: 'Crea un sistema que use diferentes colecciones para manejar estudiantes, cursos y calificaciones',
          expectedOutput: 'Sistema completo con ArrayList, HashMap y HashSet'
        },
        {
          id: 'word-frequency',
          title: 'Contador de Frecuencia de Palabras',
          description: 'Implementa un programa que cuente la frecuencia de palabras en un texto usando Map',
          expectedOutput: 'Analizador de texto con estadísticas'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es la principal diferencia entre ArrayList y LinkedList?',
          options: ['No hay diferencia', 'ArrayList es más rápido para acceso aleatorio', 'LinkedList no permite duplicados', 'ArrayList es thread-safe'],
          correctAnswer: 1,
          explanation: 'ArrayList es más eficiente para acceso aleatorio, LinkedList para inserciones/eliminaciones frecuentes'
        },
        {
          id: 'q2',
          question: '¿Qué colección NO permite elementos duplicados?',
          options: ['ArrayList', 'LinkedList', 'HashSet', 'HashMap'],
          correctAnswer: 2,
          explanation: 'HashSet (y todas las implementaciones de Set) no permiten duplicados'
        },
        {
          id: 'q3',
          question: '¿Cómo se accede a un valor en un HashMap?',
          options: ['map[key]', 'map.get(key)', 'map.value(key)', 'map.find(key)'],
          correctAnswer: 1,
          explanation: 'Se usa map.get(key) para obtener el valor asociado a una clave'
        },
        {
          id: 'q4',
          question: '¿Qué son los Generics en las colecciones?',
          options: ['Métodos especiales', 'Parámetros de tipo para seguridad', 'Interfaces avanzadas', 'Clases abstractas'],
          correctAnswer: 1,
          explanation: 'Los Generics proporcionan seguridad de tipos en tiempo de compilación'
        }
      ]
    }
  },
  {
    id: 'streams-api',
    title: 'Streams API',
    level: 'avanzado',
    description: 'Aprende programación funcional con Streams para procesar colecciones',
    content: {
      explanation: `
# Streams API en Java

Los Streams (introducidos en Java 8) proporcionan una forma funcional y declarativa de procesar colecciones de datos.

## ¿Qué es un Stream?

Un Stream es una secuencia de elementos que soporta operaciones secuenciales y paralelas para procesar datos de manera funcional.

## Características principales:

- **No almacenan datos**: Son una vista de los datos originales
- **Funcionales**: No modifican la fuente original
- **Lazy**: Las operaciones intermedias se ejecutan solo cuando es necesario
- **Consumibles**: Solo se pueden usar una vez

## Tipos de operaciones:

### Operaciones Intermedias (retornan Stream):
- **filter()**: Filtra elementos según un predicado
- **map()**: Transforma cada elemento
- **sorted()**: Ordena los elementos
- **distinct()**: Elimina duplicados
- **limit()**: Limita el número de elementos
- **skip()**: Omite los primeros n elementos

### Operaciones Terminales (retornan resultado):
- **collect()**: Recolecta elementos en una colección
- **forEach()**: Ejecuta una acción para cada elemento
- **reduce()**: Reduce a un solo valor
- **count()**: Cuenta elementos
- **anyMatch()**, **allMatch()**, **noneMatch()**: Verificaciones

## Sintaxis básica:

\`\`\`java
lista.stream()
    .filter(predicado)
    .map(transformacion)
    .sorted()
    .collect(Collectors.toList());
\`\`\`

## Expresiones Lambda:

Los Streams trabajan estrechamente con expresiones lambda:
\`\`\`java
// Lambda simple
x -> x * 2

// Lambda con múltiples parámetros
(x, y) -> x + y

// Lambda con bloque
x -> {
    System.out.println(x);
    return x * 2;
}
\`\`\`
      `,
      codeExample: `import java.util.*;
import java.util.stream.*;

// Clase para demostrar Streams con objetos
class Producto {
    private String nombre;
    private String categoria;
    private double precio;
    private int stock;
    
    public Producto(String nombre, String categoria, double precio, int stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
    
    // Getters
    public String getNombre() { return nombre; }
    public String getCategoria() { return categoria; }
    public double getPrecio() { return precio; }
    public int getStock() { return stock; }
    
    @Override
    public String toString() {
        return String.format("%s (%s) - $%.2f [Stock: %d]", 
                           nombre, categoria, precio, stock);
    }
}

public class StreamsAPI {
    
    public static void main(String[] args) {
        // Operaciones básicas con números
        operacionesBasicas();
        
        // Trabajar con objetos
        trabajarConObjetos();
        
        // Operaciones avanzadas
        operacionesAvanzadas();
        
        // Streams paralelos
        streamsParalelos();
        
        // Casos de uso prácticos
        casosDeUsoPracticos();
    }
    
    public static void operacionesBasicas() {
        System.out.println("=== OPERACIONES BÁSICAS CON STREAMS ===\n");
        
        List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        System.out.println("Lista original: " + numeros);
        
        // Filtrar números pares
        List<Integer> pares = numeros.stream()
                                    .filter(n -> n % 2 == 0)
                                    .collect(Collectors.toList());
        System.out.println("Números pares: " + pares);
        
        // Transformar (multiplicar por 2)
        List<Integer> duplicados = numeros.stream()
                                         .map(n -> n * 2)
                                         .collect(Collectors.toList());
        System.out.println("Multiplicados por 2: " + duplicados);
        
        // Filtrar, transformar y limitar
        List<Integer> resultado = numeros.stream()
                                        .filter(n -> n > 3)        // Solo mayores a 3
                                        .map(n -> n * n)           // Elevar al cuadrado
                                        .limit(4)                  // Solo los primeros 4
                                        .collect(Collectors.toList());
        System.out.println("Filtrados, cuadrados y limitados: " + resultado);
        
        // Operaciones de reducción
        int suma = numeros.stream()
                         .reduce(0, (a, b) -> a + b);
        System.out.println("Suma total: " + suma);
        
        OptionalInt maximo = numeros.stream()
                                   .mapToInt(Integer::intValue)
                                   .max();
        System.out.println("Máximo: " + maximo.orElse(0));
        
        // Verificaciones
        boolean hayPares = numeros.stream()
                                 .anyMatch(n -> n % 2 == 0);
        System.out.println("¿Hay números pares? " + hayPares);
        
        boolean todosMenoresA20 = numeros.stream()
                                        .allMatch(n -> n < 20);
        System.out.println("¿Todos menores a 20? " + todosMenoresA20);
        
        System.out.println();
    }
    
    public static void trabajarConObjetos() {
        System.out.println("=== TRABAJANDO CON OBJETOS ===\n");
        
        // Crear lista de productos
        List<Producto> productos = Arrays.asList(
            new Producto("Laptop", "Electrónicos", 1200.00, 5),
            new Producto("Mouse", "Electrónicos", 25.99, 50),
            new Producto("Teclado", "Electrónicos", 75.50, 30),
            new Producto("Silla", "Muebles", 150.00, 10),
            new Producto("Mesa", "Muebles", 300.00, 8),
            new Producto("Libro Java", "Libros", 45.99, 20),
            new Producto("Libro Python", "Libros", 39.99, 15),
            new Producto("Monitor", "Electrónicos", 250.00, 12)
        );
        
        System.out.println("📦 Catálogo de productos:");
        productos.forEach(System.out::println);
        
        // Filtrar productos electrónicos
        System.out.println("\n💻 Productos electrónicos:");
        productos.stream()
                .filter(p -> p.getCategoria().equals("Electrónicos"))
                .forEach(System.out::println);
        
        // Productos caros (más de $100)
        System.out.println("\n💰 Productos caros (>$100):");
        productos.stream()
                .filter(p -> p.getPrecio() > 100)
                .sorted((p1, p2) -> Double.compare(p2.getPrecio(), p1.getPrecio())) // Orden descendente
                .forEach(System.out::println);
        
        // Obtener solo los nombres de productos con poco stock
        System.out.println("\n⚠️ Productos con poco stock (<15):");
        List<String> pocoStock = productos.stream()
                                         .filter(p -> p.getStock() < 15)
                                         .map(Producto::getNombre)
                                         .collect(Collectors.toList());
        System.out.println(pocoStock);
        
        // Agrupar por categoría
        System.out.println("\n📂 Productos agrupados por categoría:");
        Map<String, List<Producto>> porCategoria = productos.stream()
                                                           .collect(Collectors.groupingBy(Producto::getCategoria));
        
        porCategoria.forEach((categoria, lista) -> {
            System.out.println(categoria + ":");
            lista.forEach(p -> System.out.println("  - " + p));
        });
        
        // Estadísticas de precios
        DoubleSummaryStatistics estadisticas = productos.stream()
                                                       .mapToDouble(Producto::getPrecio)
                                                       .summaryStatistics();
        
        System.out.println("\n📊 Estadísticas de precios:");
        System.out.printf("Promedio: $%.2f%n", estadisticas.getAverage());
        System.out.printf("Mínimo: $%.2f%n", estadisticas.getMin());
        System.out.printf("Máximo: $%.2f%n", estadisticas.getMax());
        System.out.printf("Total: $%.2f%n", estadisticas.getSum());
        
        System.out.println();
    }
    
    public static void operacionesAvanzadas() {
        System.out.println("=== OPERACIONES AVANZADAS ===\n");
        
        List<String> palabras = Arrays.asList("java", "stream", "lambda", "functional", "programming");
        
        // FlatMap - aplanar estructuras
        List<List<Integer>> listas = Arrays.asList(
            Arrays.asList(1, 2, 3),
            Arrays.asList(4, 5, 6),
            Arrays.asList(7, 8, 9)
        );
        
        List<Integer> aplanada = listas.stream()
                                      .flatMap(List::stream)
                                      .collect(Collectors.toList());
        System.out.println("Lista aplanada: " + aplanada);
        
        // Obtener caracteres únicos de todas las palabras
        Set<Character> caracteresUnicos = palabras.stream()
                                                 .flatMapToInt(String::chars)
                                                 .mapToObj(c -> (char) c)
                                                 .collect(Collectors.toSet());
        System.out.println("Caracteres únicos: " + caracteresUnicos);
        
        // Partitioning - dividir en dos grupos
        Map<Boolean, List<String>> palabrasLargas = palabras.stream()
                                                           .collect(Collectors.partitioningBy(p -> p.length() > 5));
        
        System.out.println("Palabras largas (>5 chars): " + palabrasLargas.get(true));
        System.out.println("Palabras cortas (<=5 chars): " + palabrasLargas.get(false));
        
        // Collectors personalizados
        String palabrasUnidas = palabras.stream()
                                       .collect(Collectors.joining(", ", "[", "]"));
        System.out.println("Palabras unidas: " + palabrasUnidas);
        
        // Operaciones con Optional
        Optional<String> palabraMasLarga = palabras.stream()
                                                  .max(Comparator.comparing(String::length));
        
        palabraMasLarga.ifPresent(p -> System.out.println("Palabra más larga: " + p));
        
        // Reduce personalizado
        String concatenacion = palabras.stream()
                                      .reduce("", (a, b) -> a.isEmpty() ? b : a + "-" + b);
        System.out.println("Concatenación con reduce: " + concatenacion);
        
        System.out.println();
    }
    
    public static void streamsParalelos() {
        System.out.println("=== STREAMS PARALELOS ===\n");
        
        // Crear una lista grande para demostrar paralelismo
        List<Integer> numeroGrandes = IntStream.rangeClosed(1, 1000000)
                                              .boxed()
                                              .collect(Collectors.toList());
        
        // Stream secuencial
        long inicioSecuencial = System.currentTimeMillis();
        long sumaSecuencial = numeroGrandes.stream()
                                          .mapToLong(Integer::longValue)
                                          .sum();
        long tiempoSecuencial = System.currentTimeMillis() - inicioSecuencial;
        
        // Stream paralelo
        long inicioParalelo = System.currentTimeMillis();
        long sumaParalela = numeroGrandes.parallelStream()
                                        .mapToLong(Integer::longValue)
                                        .sum();
        long tiempoParalelo = System.currentTimeMillis() - inicioParalelo;
        
        System.out.println("Suma secuencial: " + sumaSecuencial + " (Tiempo: " + tiempoSecuencial + "ms)");
        System.out.println("Suma paralela: " + sumaParalela + " (Tiempo: " + tiempoParalelo + "ms)");
        
        // Demostrar que el orden puede cambiar en paralelo
        System.out.println("\nOrden en stream secuencial:");
        Arrays.asList(1, 2, 3, 4, 5).stream()
                                    .map(n -> {
                                        System.out.print(n + " ");
                                        return n * 2;
                                    })
                                    .collect(Collectors.toList());
        
        System.out.println("\n\nOrden en stream paralelo:");
        Arrays.asList(1, 2, 3, 4, 5).parallelStream()
                                    .map(n -> {
                                        System.out.print(n + " ");
                                        return n * 2;
                                    })
                                    .collect(Collectors.toList());
        
        System.out.println("\n");
    }
    
    public static void casosDeUsoPracticos() {
        System.out.println("=== CASOS DE USO PRÁCTICOS ===\n");
        
        // Datos de ejemplo: ventas
        List<Venta> ventas = Arrays.asList(
            new Venta("Ana", "Laptop", 1200.00, "2024-01"),
            new Venta("Carlos", "Mouse", 25.99, "2024-01"),
            new Venta("Ana", "Teclado", 75.50, "2024-01"),
            new Venta("María", "Monitor", 250.00, "2024-02"),
            new Venta("Carlos", "Silla", 150.00, "2024-02"),
            new Venta("Ana", "Libro", 45.99, "2024-02")
        );
        
        // 1. Top 3 vendedores por monto total
        System.out.println("🏆 Top 3 vendedores:");
        ventas.stream()
              .collect(Collectors.groupingBy(Venta::getVendedor,
                      Collectors.summingDouble(Venta::getMonto)))
              .entrySet().stream()
              .sorted(Map.Entry.<String, Double>comparingByValue().reversed())
              .limit(3)
              .forEach(entry -> System.out.printf("  %s: $%.2f%n", 
                                                 entry.getKey(), entry.getValue()));
        
        // 2. Ventas por mes
        System.out.println("\n📅 Ventas por mes:");
        ventas.stream()
              .collect(Collectors.groupingBy(Venta::getMes,
                      Collectors.summingDouble(Venta::getMonto)))
              .forEach((mes, total) -> System.out.printf("  %s: $%.2f%n", mes, total));
        
        // 3. Productos más vendidos
        System.out.println("\n📦 Productos más vendidos:");
        ventas.stream()
              .collect(Collectors.groupingBy(Venta::getProducto,
                      Collectors.counting()))
              .entrySet().stream()
              .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
              .forEach(entry -> System.out.printf("  %s: %d veces%n", 
                                                 entry.getKey(), entry.getValue()));
        
        // 4. Estadísticas generales
        DoubleSummaryStatistics stats = ventas.stream()
                                             .mapToDouble(Venta::getMonto)
                                             .summaryStatistics();
        
        System.out.println("\n📊 Estadísticas generales:");
        System.out.printf("  Total de ventas: %d%n", stats.getCount());
        System.out.printf("  Monto total: $%.2f%n", stats.getSum());
        System.out.printf("  Venta promedio: $%.2f%n", stats.getAverage());
        System.out.printf("  Venta máxima: $%.2f%n", stats.getMax());
        System.out.printf("  Venta mínima: $%.2f%n", stats.getMin());
    }
}

// Clase auxiliar para el ejemplo de ventas
class Venta {
    private String vendedor;
    private String producto;
    private double monto;
    private String mes;
    
    public Venta(String vendedor, String producto, double monto, String mes) {
        this.vendedor = vendedor;
        this.producto = producto;
        this.monto = monto;
        this.mes = mes;
    }
    
    public String getVendedor() { return vendedor; }
    public String getProducto() { return producto; }
    public double getMonto() { return monto; }
    public String getMes() { return mes; }
}`,
      exercises: [
        {
          id: 'data-analysis',
          title: 'Análisis de Datos con Streams',
          description: 'Crea un sistema de análisis de datos de empleados usando todas las operaciones de Streams',
          expectedOutput: 'Sistema completo de análisis con estadísticas'
        },
        {
          id: 'text-processor',
          title: 'Procesador de Texto Avanzado',
          description: 'Implementa un analizador de texto que use Streams para estadísticas de palabras',
          expectedOutput: 'Analizador de texto con Streams y expresiones lambda'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es la diferencia entre map() y flatMap()?',
          options: ['No hay diferencia', 'map transforma 1:1, flatMap aplana estructuras', 'flatMap es más rápido', 'map solo funciona con números'],
          correctAnswer: 1,
          explanation: 'map transforma cada elemento 1:1, flatMap aplana estructuras anidadas en un solo stream'
        },
        {
          id: 'q2',
          question: '¿Qué tipo de operación es filter()?',
          options: ['Terminal', 'Intermedia', 'De reducción', 'De agrupación'],
          correctAnswer: 1,
          explanation: 'filter() es una operación intermedia que retorna un nuevo Stream'
        },
        {
          id: 'q3',
          question: '¿Cuándo se ejecutan las operaciones intermedias en un Stream?',
          options: ['Inmediatamente', 'Al crear el Stream', 'Cuando se ejecuta una operación terminal', 'Al final del programa'],
          correctAnswer: 2,
          explanation: 'Las operaciones intermedias son lazy y se ejecutan solo cuando hay una operación terminal'
        },
        {
          id: 'q4',
          question: '¿Qué hace collect(Collectors.toList())?',
          options: ['Crea un nuevo Stream', 'Convierte el Stream en una List', 'Ordena los elementos', 'Filtra duplicados'],
          correctAnswer: 1,
          explanation: 'collect(Collectors.toList()) recolecta todos los elementos del Stream en una nueva List'
        }
      ]
    }
  },
  {
    id: 'programacion-funcional',
    title: 'Programación Funcional',
    level: 'avanzado',
    description: 'Aprende expresiones lambda, referencias de métodos y programación funcional',
    content: {
      explanation: `
# Programación Funcional en Java

Java 8 introdujo características de programación funcional que permiten escribir código más conciso y expresivo.

## Expresiones Lambda

Las expresiones lambda son funciones anónimas que pueden ser tratadas como valores.

### Sintaxis:
\`\`\`java
(parámetros) -> expresión
(parámetros) -> { declaraciones; }
\`\`\`

### Ejemplos:
\`\`\`java
// Sin parámetros
() -> System.out.println("Hola")

// Un parámetro
x -> x * 2

// Múltiples parámetros
(x, y) -> x + y

// Con bloque
x -> {
    System.out.println("Procesando: " + x);
    return x * 2;
}
\`\`\`

## Interfaces Funcionales

Una interfaz funcional tiene exactamente un método abstracto y puede ser implementada con una lambda.

### Interfaces funcionales predefinidas:
- **Predicate<T>**: Función que retorna boolean
- **Function<T,R>**: Función que transforma T en R
- **Consumer<T>**: Función que consume T sin retornar nada
- **Supplier<T>**: Función que produce T sin parámetros
- **UnaryOperator<T>**: Función que toma y retorna el mismo tipo
- **BinaryOperator<T>**: Función que toma dos T y retorna T

## Referencias de Métodos

Forma abreviada de escribir lambdas que solo llaman a un método existente.

### Tipos:
- **Método estático**: \`Clase::metodoEstatico\`
- **Método de instancia**: \`objeto::metodoInstancia\`
- **Método de instancia de tipo**: \`Clase::metodoInstancia\`
- **Constructor**: \`Clase::new\`

## Ventajas:

- **Código más conciso**: Menos código repetitivo
- **Legibilidad**: Expresiones más claras de intención
- **Reutilización**: Funciones como valores de primera clase
- **Composición**: Fácil combinación de funciones
      `,
      codeExample: `import java.util.*;
import java.util.function.*;
import java.util.stream.Collectors;

// Clase para demostrar programación funcional
class Empleado {
    private String nombre;
    private String departamento;
    private double salario;
    private int edad;
    
    public Empleado(String nombre, String departamento, double salario, int edad) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.salario = salario;
        this.edad = edad;
    }
    
    // Getters
    public String getNombre() { return nombre; }
    public String getDepartamento() { return departamento; }
    public double getSalario() { return salario; }
    public int getEdad() { return edad; }
    
    @Override
    public String toString() {
        return String.format("%s (%s) - $%.0f, %d años", 
                           nombre, departamento, salario, edad);
    }
}

public class ProgramacionFuncional {
    
    public static void main(String[] args) {
        // Demostrar expresiones lambda básicas
        expresionesLambdaBasicas();
        
        // Interfaces funcionales predefinidas
        interfacesFuncionales();
        
        // Referencias de métodos
        referenciasDeMétodos();
        
        // Composición de funciones
        composicionDeFunciones();
        
        // Ejemplo práctico con empleados
        ejemploPracticoEmpleados();
    }
    
    public static void expresionesLambdaBasicas() {
        System.out.println("=== EXPRESIONES LAMBDA BÁSICAS ===\n");
        
        // Lista de números para ejemplos
        List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Lambda simple - filtrar pares
        List<Integer> pares = numeros.stream()
                                    .filter(n -> n % 2 == 0)  // Lambda: n -> n % 2 == 0
                                    .collect(Collectors.toList());
        System.out.println("Números pares: " + pares);
        
        // Lambda con transformación
        List<String> cuadrados = numeros.stream()
                                       .map(n -> "Cuadrado de " + n + " = " + (n * n))
                                       .collect(Collectors.toList());
        cuadrados.forEach(System.out::println);
        
        // Lambda con múltiples parámetros
        BinaryOperator<Integer> suma = (a, b) -> a + b;
        BinaryOperator<Integer> multiplicacion = (a, b) -> a * b;
        
        System.out.println("Suma con lambda: " + suma.apply(5, 3));
        System.out.println("Multiplicación con lambda: " + multiplicacion.apply(5, 3));
        
        // Lambda con bloque
        Consumer<String> procesador = mensaje -> {
            System.out.println("Procesando: " + mensaje);
            System.out.println("Longitud: " + mensaje.length());
            System.out.println("Mayúsculas: " + mensaje.toUpperCase());
        };
        
        procesador.accept("Hola Java");
        System.out.println();
    }
    
    public static void interfacesFuncionales() {
        System.out.println("=== INTERFACES FUNCIONALES ===\n");
        
        // Predicate - función que retorna boolean
        Predicate<Integer> esPar = n -> n % 2 == 0;
        Predicate<Integer> esMayorA5 = n -> n > 5;
        Predicate<String> esLargo = s -> s.length() > 5;
        
        System.out.println("¿8 es par? " + esPar.test(8));
        System.out.println("¿7 es mayor a 5? " + esMayorA5.test(7));
        System.out.println("¿'programación' es largo? " + esLargo.test("programación"));
        
        // Function - función que transforma
        Function<String, Integer> longitud = s -> s.length();
        Function<Integer, String> cuadrado = n -> "El cuadrado de " + n + " es " + (n * n);
        Function<Double, Double> raizCuadrada = Math::sqrt; // Referencia de método
        
        System.out.println("Longitud de 'Java': " + longitud.apply("Java"));
        System.out.println(cuadrado.apply(7));
        System.out.println("Raíz cuadrada de 16: " + raizCuadrada.apply(16.0));
        
        // Consumer - función que consume sin retornar
        Consumer<String> imprimir = System.out::println;
        Consumer<List<Integer>> imprimirLista = lista -> {
            System.out.print("Lista: ");
            lista.forEach(n -> System.out.print(n + " "));
            System.out.println();
        };
        
        imprimir.accept("Mensaje con Consumer");
        imprimirLista.accept(Arrays.asList(1, 2, 3, 4, 5));
        
        // Supplier - función que produce sin parámetros
        Supplier<String> saludo = () -> "¡Hola desde Supplier!";
        Supplier<Double> numeroAleatorio = Math::random;
        Supplier<List<String>> listaVacia = ArrayList::new;
        
        System.out.println(saludo.get());
        System.out.println("Número aleatorio: " + numeroAleatorio.get());
        System.out.println("Lista vacía: " + listaVacia.get());
        
        // UnaryOperator - función que toma y retorna el mismo tipo
        UnaryOperator<String> aMayusculas = String::toUpperCase;
        UnaryOperator<Integer> duplicar = n -> n * 2;
        
        System.out.println("'java' en mayúsculas: " + aMayusculas.apply("java"));
        System.out.println("5 duplicado: " + duplicar.apply(5));
        
        System.out.println();
    }
    
    public static void referenciasDeMétodos() {
        System.out.println("=== REFERENCIAS DE MÉTODOS ===\n");
        
        List<String> palabras = Arrays.asList("java", "lambda", "stream", "functional");
        
        // Referencia a método estático
        System.out.println("Usando Integer.parseInt:");
        List<String> numeros = Arrays.asList("1", "2", "3", "4", "5");
        List<Integer> enteros = numeros.stream()
                                      .map(Integer::parseInt)  // Equivale a: s -> Integer.parseInt(s)
                                      .collect(Collectors.toList());
        System.out.println(enteros);
        
        // Referencia a método de instancia de un objeto específico
        System.out.println("\nUsando System.out::println:");
        palabras.forEach(System.out::println);  // Equivale a: s -> System.out.println(s)
        
        // Referencia a método de instancia de un tipo arbitrario
        System.out.println("\nUsando String::length:");
        List<Integer> longitudes = palabras.stream()
                                          .map(String::length)  // Equivale a: s -> s.length()
                                          .collect(Collectors.toList());
        System.out.println("Longitudes: " + longitudes);
        
        System.out.println("\nUsando String::toUpperCase:");
        List<String> mayusculas = palabras.stream()
                                         .map(String::toUpperCase)  // Equivale a: s -> s.toUpperCase()
                                         .collect(Collectors.toList());
        System.out.println("Mayúsculas: " + mayusculas);
        
        // Referencia a constructor
        System.out.println("\nUsando ArrayList::new:");
        Supplier<List<String>> crearLista = ArrayList::new;  // Equivale a: () -> new ArrayList<>()
        List<String> nuevaLista = crearLista.get();
        nuevaLista.addAll(palabras);
        System.out.println("Nueva lista: " + nuevaLista);
        
        // Comparaciones con referencias de métodos
        System.out.println("\nOrdenamiento con referencias:");
        List<String> ordenadas = palabras.stream()
                                        .sorted(String::compareToIgnoreCase)  // Equivale a: (s1, s2) -> s1.compareToIgnoreCase(s2)
                                        .collect(Collectors.toList());
        System.out.println("Ordenadas: " + ordenadas);
        
        System.out.println();
    }
    
    public static void composicionDeFunciones() {
        System.out.println("=== COMPOSICIÓN DE FUNCIONES ===\n");
        
        // Funciones básicas
        Function<String, String> aMayusculas = String::toUpperCase;
        Function<String, String> agregarPrefijo = s -> ">>> " + s;
        Function<String, Integer> obtenerLongitud = String::length;
        
        // Composición con andThen
        Function<String, String> procesarTexto = aMayusculas.andThen(agregarPrefijo);
        System.out.println("Composición andThen: " + procesarTexto.apply("java"));
        
        // Composición con compose
        Function<String, Integer> procesarYContar = obtenerLongitud.compose(aMayusculas);
        System.out.println("Composición compose: " + procesarYContar.apply("java"));
        
        // Predicados compuestos
        Predicate<Integer> esPar = n -> n % 2 == 0;
        Predicate<Integer> esMayorA10 = n -> n > 10;
        
        Predicate<Integer> esParYMayorA10 = esPar.and(esMayorA10);
        Predicate<Integer> esParOMayorA10 = esPar.or(esMayorA10);
        Predicate<Integer> noEsPar = esPar.negate();
        
        int numero = 12;
        System.out.println(numero + " es par Y mayor a 10: " + esParYMayorA10.test(numero));
        System.out.println(numero + " es par O mayor a 10: " + esParOMayorA10.test(numero));
        System.out.println(numero + " NO es par: " + noEsPar.test(numero));
        
        // Cadena de operaciones funcionales
        List<String> textos = Arrays.asList("hola", "mundo", "java", "programacion");
        
        List<String> resultado = textos.stream()
                                      .filter(s -> s.length() > 4)           // Filtrar largos
                                      .map(String::toUpperCase)              // A mayúsculas
                                      .map(s -> "*** " + s + " ***")         // Agregar decoración
                                      .sorted()                              // Ordenar
                                      .collect(Collectors.toList());
        
        System.out.println("\nCadena de operaciones:");
        resultado.forEach(System.out::println);
        
        System.out.println();
    }
    
    public static void ejemploPracticoEmpleados() {
        System.out.println("=== EJEMPLO PRÁCTICO: GESTIÓN DE EMPLEADOS ===\n");
        
        List<Empleado> empleados = Arrays.asList(
            new Empleado("Ana García", "IT", 75000, 28),
            new Empleado("Carlos López", "Ventas", 65000, 35),
            new Empleado("María Rodríguez", "IT", 80000, 30),
            new Empleado("Juan Pérez", "Marketing", 60000, 25),
            new Empleado("Laura Martín", "IT", 85000, 32),
            new Empleado("Pedro Sánchez", "Ventas", 70000, 40),
            new Empleado("Sofia Torres", "Marketing", 62000, 27)
        );
        
        System.out.println("👥 Lista de empleados:");
        empleados.forEach(System.out::println);
        
        // Funciones reutilizables
        Predicate<Empleado> esDeIT = emp -> emp.getDepartamento().equals("IT");
        Predicate<Empleado> ganasMasDe70k = emp -> emp.getSalario() > 70000;
        Predicate<Empleado> esMayorDe30 = emp -> emp.getEdad() > 30;
        
        Function<Empleado, String> formatoCompleto = emp -> 
            String.format("%s (%d años) - %s: $%.0f", 
                         emp.getNombre(), emp.getEdad(), 
                         emp.getDepartamento(), emp.getSalario());
        
        // Análisis con programación funcional
        System.out.println("\n💻 Empleados de IT que ganan más de $70k:");
        empleados.stream()
                .filter(esDeIT.and(ganasMasDe70k))
                .map(formatoCompleto)
                .forEach(System.out::println);
        
        System.out.println("\n💰 Top 3 salarios más altos:");
        empleados.stream()
                .sorted((e1, e2) -> Double.compare(e2.getSalario(), e1.getSalario()))
                .limit(3)
                .map(formatoCompleto)
                .forEach(System.out::println);
        
        // Estadísticas por departamento
        System.out.println("\n📊 Salario promedio por departamento:");
        empleados.stream()
                .collect(Collectors.groupingBy(Empleado::getDepartamento,
                        Collectors.averagingDouble(Empleado::getSalario)))
                .forEach((dept, promedio) -> 
                    System.out.printf("  %s: $%.0f%n", dept, promedio));
        
        // Empleados jóvenes con potencial (menores de 30 con buen salario)
        System.out.println("\n🌟 Empleados jóvenes con potencial (<30 años, >$60k):");
        empleados.stream()
                .filter(emp -> emp.getEdad() < 30 && emp.getSalario() > 60000)
                .map(formatoCompleto)
                .forEach(System.out::println);
        
        // Crear función de aumento de salario
        Function<Double, UnaryOperator<Empleado>> aumentarSalario = porcentaje -> 
            empleado -> new Empleado(
                empleado.getNombre(),
                empleado.getDepartamento(),
                empleado.getSalario() * (1 + porcentaje / 100),
                empleado.getEdad()
            );
        
        System.out.println("\n💸 Simulación: aumento del 10% para IT:");
        empleados.stream()
                .filter(esDeIT)
                .map(aumentarSalario.apply(10.0))
                .map(formatoCompleto)
                .forEach(System.out::println);
        
        // Función de búsqueda personalizable
        Function<String, Predicate<Empleado>> buscarPorNombre = nombre ->
            emp -> emp.getNombre().toLowerCase().contains(nombre.toLowerCase());
        
        System.out.println("\n🔍 Búsqueda de empleados con 'ar' en el nombre:");
        empleados.stream()
                .filter(buscarPorNombre.apply("ar"))
                .map(Empleado::getNombre)
                .forEach(System.out::println);
    }
}`,
      exercises: [
        {
          id: 'functional-calculator',
          title: 'Calculadora Funcional',
          description: 'Crea una calculadora usando solo programación funcional con lambdas y Function interfaces',
          expectedOutput: 'Calculadora completamente funcional con composición de funciones'
        },
        {
          id: 'data-pipeline',
          title: 'Pipeline de Procesamiento de Datos',
          description: 'Implementa un pipeline de transformación de datos usando composición de funciones',
          expectedOutput: 'Sistema de procesamiento de datos funcional'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Cuál es la sintaxis correcta para una lambda con un parámetro?',
          options: ['(x) -> x * 2', 'x -> x * 2', 'lambda x: x * 2', 'Todas las anteriores'],
          correctAnswer: 3,
          explanation: 'Tanto (x) -> x * 2 como x -> x * 2 son sintaxis válidas para lambdas con un parámetro'
        },
        {
          id: 'q2',
          question: '¿Qué es una interfaz funcional?',
          options: ['Una interfaz con múltiples métodos', 'Una interfaz con exactamente un método abstracto', 'Una interfaz que usa lambdas', 'Una interfaz estática'],
          correctAnswer: 1,
          explanation: 'Una interfaz funcional tiene exactamente un método abstracto y puede ser implementada con lambdas'
        },
        {
          id: 'q3',
          question: '¿Qué hace String::length como referencia de método?',
          options: ['Llama al método length() de String', 'Es equivalente a s -> s.length()', 'Ambas anteriores', 'Ninguna anterior'],
          correctAnswer: 2,
          explanation: 'String::length es una referencia de método equivalente a la lambda s -> s.length()'
        },
        {
          id: 'q4',
          question: '¿Qué permite la composición de funciones?',
          options: ['Crear funciones más complejas combinando simples', 'Hacer funciones más rápidas', 'Reducir el uso de memoria', 'Eliminar errores'],
          correctAnswer: 0,
          explanation: 'La composición permite crear funciones complejas combinando funciones más simples'
        }
      ]
    }
  },
  {
    id: 'proyecto-final',
    title: 'Proyecto Final: Sistema de Gestión',
    level: 'avanzado',
    description: 'Aplica todos los conceptos aprendidos en un proyecto completo',
    content: {
      explanation: `
# Proyecto Final: Sistema de Gestión de Biblioteca

En este proyecto final, aplicarás todos los conceptos aprendidos para crear un sistema completo de gestión de biblioteca.

## Objetivos del Proyecto:

1. **Aplicar POO**: Clases, herencia, polimorfismo, encapsulamiento
2. **Usar Colecciones**: ArrayList, HashMap, HashSet
3. **Manejar Excepciones**: Try-catch, excepciones personalizadas
4. **Implementar Interfaces**: Definir contratos claros
5. **Usar Streams**: Procesamiento funcional de datos
6. **Programación Funcional**: Lambdas y referencias de métodos

## Funcionalidades Requeridas:

### Gestión de Libros:
- Agregar, buscar, actualizar y eliminar libros
- Categorización por género
- Control de disponibilidad

### Gestión de Usuarios:
- Registro de usuarios (estudiantes, profesores, público general)
- Diferentes tipos de membresía
- Historial de préstamos

### Sistema de Préstamos:
- Prestar y devolver libros
- Control de fechas de vencimiento
- Multas por retraso
- Renovaciones

### Reportes y Estadísticas:
- Libros más prestados
- Usuarios más activos
- Estadísticas por categoría
- Reportes de multas

## Estructura del Proyecto:

El proyecto estará organizado en múltiples clases que demuestren una arquitectura limpia y mantenible.

## Conceptos Aplicados:

- **Herencia**: Diferentes tipos de usuarios
- **Polimorfismo**: Comportamiento específico por tipo de usuario
- **Interfaces**: Contratos para servicios
- **Excepciones**: Manejo robusto de errores
- **Colecciones**: Almacenamiento eficiente de datos
- **Streams**: Procesamiento y análisis de datos
- **Encapsulamiento**: Protección de datos críticos
      `,
      codeExample: `import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;

// ==================== EXCEPCIONES PERSONALIZADAS ====================

class LibroNoDisponibleException extends Exception {
    public LibroNoDisponibleException(String mensaje) {
        super(mensaje);
    }
}

class UsuarioNoEncontradoException extends Exception {
    public UsuarioNoEncontradoException(String mensaje) {
        super(mensaje);
    }
}

class LimitePrestamosException extends Exception {
    public LimitePrestamosException(String mensaje) {
        super(mensaje);
    }
}

// ==================== INTERFACES ====================

interface Prestable {
    boolean puedePrestar();
    void prestar();
    void devolver();
}

interface Reportable {
    Map<String, Object> generarReporte();
}

// ==================== ENUMS ====================

enum TipoUsuario {
    ESTUDIANTE(3, 14),
    PROFESOR(5, 30),
    PUBLICO_GENERAL(2, 7);
    
    private final int limitePrestamos;
    private final int diasPrestamo;
    
    TipoUsuario(int limitePrestamos, int diasPrestamo) {
        this.limitePrestamos = limitePrestamos;
        this.diasPrestamo = diasPrestamo;
    }
    
    public int getLimitePrestamos() { return limitePrestamos; }
    public int getDiasPrestamo() { return diasPrestamo; }
}

enum EstadoLibro {
    DISPONIBLE, PRESTADO, RESERVADO, MANTENIMIENTO
}

enum GeneroLibro {
    FICCION, NO_FICCION, CIENCIA, HISTORIA, BIOGRAFIA, TECNOLOGIA, ARTE
}

// ==================== CLASES PRINCIPALES ====================

class Libro implements Prestable {
    private String isbn;
    private String titulo;
    private String autor;
    private GeneroLibro genero;
    private int añoPublicacion;
    private EstadoLibro estado;
    private int vecesPrestado;
    
    public Libro(String isbn, String titulo, String autor, GeneroLibro genero, int añoPublicacion) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.añoPublicacion = añoPublicacion;
        this.estado = EstadoLibro.DISPONIBLE;
        this.vecesPrestado = 0;
    }
    
    @Override
    public boolean puedePrestar() {
        return estado == EstadoLibro.DISPONIBLE;
    }
    
    @Override
    public void prestar() {
        if (puedePrestar()) {
            estado = EstadoLibro.PRESTADO;
            vecesPrestado++;
        }
    }
    
    @Override
    public void devolver() {
        estado = EstadoLibro.DISPONIBLE;
    }
    
    // Getters y setters
    public String getIsbn() { return isbn; }
    public String getTitulo() { return titulo; }
    public String getAutor() { return autor; }
    public GeneroLibro getGenero() { return genero; }
    public int getAñoPublicacion() { return añoPublicacion; }
    public EstadoLibro getEstado() { return estado; }
    public int getVecesPrestado() { return vecesPrestado; }
    
    public void setEstado(EstadoLibro estado) { this.estado = estado; }
    
    @Override
    public String toString() {
        return String.format("📖 %s - %s (%d) [%s] - %s", 
                           titulo, autor, añoPublicacion, genero, estado);
    }
}

abstract class Usuario implements Reportable {
    protected String id;
    protected String nombre;
    protected String email;
    protected TipoUsuario tipo;
    protected LocalDate fechaRegistro;
    protected List<Prestamo> historialPrestamos;
    protected double multasPendientes;
    
    public Usuario(String id, String nombre, String email, TipoUsuario tipo) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.tipo = tipo;
        this.fechaRegistro = LocalDate.now();
        this.historialPrestamos = new ArrayList<>();
        this.multasPendientes = 0.0;
    }
    
    public abstract boolean puedePrestarMas();
    
    public int getPrestamosActivos() {
        return (int) historialPrestamos.stream()
                                      .filter(p -> p.getFechaDevolucion() == null)
                                      .count();
    }
    
    public void agregarPrestamo(Prestamo prestamo) {
        historialPrestamos.add(prestamo);
    }
    
    public void agregarMulta(double monto) {
        multasPendientes += monto;
    }
    
    public void pagarMulta(double monto) {
        multasPendientes = Math.max(0, multasPendientes - monto);
    }
    
    // Getters
    public String getId() { return id; }
    public String getNombre() { return nombre; }
    public String getEmail() { return email; }
    public TipoUsuario getTipo() { return tipo; }
    public LocalDate getFechaRegistro() { return fechaRegistro; }
    public List<Prestamo> getHistorialPrestamos() { return historialPrestamos; }
    public double getMultasPendientes() { return multasPendientes; }
    
    @Override
    public String toString() {
        return String.format("👤 %s (%s) - %s [Préstamos activos: %d, Multas: $%.2f]", 
                           nombre, tipo, email, getPrestamosActivos(), multasPendientes);
    }
}

class Estudiante extends Usuario {
    private String carrera;
    private int semestre;
    
    public Estudiante(String id, String nombre, String email, String carrera, int semestre) {
        super(id, nombre, email, TipoUsuario.ESTUDIANTE);
        this.carrera = carrera;
        this.semestre = semestre;
    }
    
    @Override
    public boolean puedePrestarMas() {
        return getPrestamosActivos() < tipo.getLimitePrestamos() && multasPendientes == 0;
    }
    
    @Override
    public Map<String, Object> generarReporte() {
        Map<String, Object> reporte = new HashMap<>();
        reporte.put("tipo", "Estudiante");
        reporte.put("carrera", carrera);
        reporte.put("semestre", semestre);
        reporte.put("prestamosActivos", getPrestamosActivos());
        reporte.put("totalPrestamos", historialPrestamos.size());
        reporte.put("multasPendientes", multasPendientes);
        return reporte;
    }
    
    public String getCarrera() { return carrera; }
    public int getSemestre() { return semestre; }
}

class Profesor extends Usuario {
    private String departamento;
    private String especialidad;
    
    public Profesor(String id, String nombre, String email, String departamento, String especialidad) {
        super(id, nombre, email, TipoUsuario.PROFESOR);
        this.departamento = departamento;
        this.especialidad = especialidad;
    }
    
    @Override
    public boolean puedePrestarMas() {
        return getPrestamosActivos() < tipo.getLimitePrestamos();
    }
    
    @Override
    public Map<String, Object> generarReporte() {
        Map<String, Object> reporte = new HashMap<>();
        reporte.put("tipo", "Profesor");
        reporte.put("departamento", departamento);
        reporte.put("especialidad", especialidad);
        reporte.put("prestamosActivos", getPrestamosActivos());
        reporte.put("totalPrestamos", historialPrestamos.size());
        reporte.put("multasPendientes", multasPendientes);
        return reporte;
    }
    
    public String getDepartamento() { return departamento; }
    public String getEspecialidad() { return especialidad; }
}

class UsuarioGeneral extends Usuario {
    private String ocupacion;
    
    public UsuarioGeneral(String id, String nombre, String email, String ocupacion) {
        super(id, nombre, email, TipoUsuario.PUBLICO_GENERAL);
        this.ocupacion = ocupacion;
    }
    
    @Override
    public boolean puedePrestarMas() {
        return getPrestamosActivos() < tipo.getLimitePrestamos() && multasPendientes == 0;
    }
    
    @Override
    public Map<String, Object> generarReporte() {
        Map<String, Object> reporte = new HashMap<>();
        reporte.put("tipo", "Público General");
        reporte.put("ocupacion", ocupacion);
        reporte.put("prestamosActivos", getPrestamosActivos());
        reporte.put("totalPrestamos", historialPrestamos.size());
        reporte.put("multasPendientes", multasPendientes);
        return reporte;
    }
    
    public String getOcupacion() { return ocupacion; }
}

class Prestamo {
    private String id;
    private Usuario usuario;
    private Libro libro;
    private LocalDate fechaPrestamo;
    private LocalDate fechaVencimiento;
    private LocalDate fechaDevolucion;
    private double multa;
    
    public Prestamo(String id, Usuario usuario, Libro libro) {
        this.id = id;
        this.usuario = usuario;
        this.libro = libro;
        this.fechaPrestamo = LocalDate.now();
        this.fechaVencimiento = fechaPrestamo.plusDays(usuario.getTipo().getDiasPrestamo());
        this.multa = 0.0;
    }
    
    public void devolver() {
        fechaDevolucion = LocalDate.now();
        libro.devolver();
        
        // Calcular multa si hay retraso
        if (fechaDevolucion.isAfter(fechaVencimiento)) {
            long diasRetraso = ChronoUnit.DAYS.between(fechaVencimiento, fechaDevolucion);
            multa = diasRetraso * 2.0; // $2 por día de retraso
            usuario.agregarMulta(multa);
        }
    }
    
    public boolean estaVencido() {
        return fechaDevolucion == null && LocalDate.now().isAfter(fechaVencimiento);
    }
    
    public long getDiasRetraso() {
        if (fechaDevolucion != null) {
            return fechaDevolucion.isAfter(fechaVencimiento) ? 
                   ChronoUnit.DAYS.between(fechaVencimiento, fechaDevolucion) : 0;
        } else {
            return LocalDate.now().isAfter(fechaVencimiento) ? 
                   ChronoUnit.DAYS.between(fechaVencimiento, LocalDate.now()) : 0;
        }
    }
    
    // Getters
    public String getId() { return id; }
    public Usuario getUsuario() { return usuario; }
    public Libro getLibro() { return libro; }
    public LocalDate getFechaPrestamo() { return fechaPrestamo; }
    public LocalDate getFechaVencimiento() { return fechaVencimiento; }
    public LocalDate getFechaDevolucion() { return fechaDevolucion; }
    public double getMulta() { return multa; }
    
    @Override
    public String toString() {
        String estado = fechaDevolucion != null ? "DEVUELTO" : 
                       estaVencido() ? "VENCIDO" : "ACTIVO";
        return String.format("📋 Préstamo %s: %s -> %s [%s]", 
                           id, usuario.getNombre(), libro.getTitulo(), estado);
    }
}

// ==================== SISTEMA PRINCIPAL ====================

class SistemaBiblioteca {
    private Map<String, Libro> libros;
    private Map<String, Usuario> usuarios;
    private List<Prestamo> prestamos;
    private int contadorPrestamos;
    
    public SistemaBiblioteca() {
        this.libros = new HashMap<>();
        this.usuarios = new HashMap<>();
        this.prestamos = new ArrayList<>();
        this.contadorPrestamos = 1;
        
        // Inicializar con datos de ejemplo
        inicializarDatos();
    }
    
    private void inicializarDatos() {
        // Agregar libros de ejemplo
        agregarLibro(new Libro("978-0134685991", "Effective Java", "Joshua Bloch", GeneroLibro.TECNOLOGIA, 2017));
        agregarLibro(new Libro("978-0596009205", "Head First Design Patterns", "Eric Freeman", GeneroLibro.TECNOLOGIA, 2004));
        agregarLibro(new Libro("978-0451524935", "1984", "George Orwell", GeneroLibro.FICCION, 1949));
        agregarLibro(new Libro("978-0061120084", "To Kill a Mockingbird", "Harper Lee", GeneroLibro.FICCION, 1960));
        agregarLibro(new Libro("978-0486280615", "The Art of War", "Sun Tzu", GeneroLibro.HISTORIA, 2000));
        
        // Agregar usuarios de ejemplo
        registrarUsuario(new Estudiante("EST001", "Ana García", "ana@universidad.edu", "Ingeniería de Sistemas", 6));
        registrarUsuario(new Profesor("PROF001", "Dr. Carlos López", "carlos@universidad.edu", "Ciencias de la Computación", "Algoritmos"));
        registrarUsuario(new UsuarioGeneral("GEN001", "María Rodríguez", "maria@email.com", "Diseñadora"));
    }
    
    // ==================== GESTIÓN DE LIBROS ====================
    
    public void agregarLibro(Libro libro) {
        libros.put(libro.getIsbn(), libro);
        System.out.println("✅ Libro agregado: " + libro.getTitulo());
    }
    
    public List<Libro> buscarLibros(String termino) {
        return libros.values().stream()
                    .filter(libro -> 
                        libro.getTitulo().toLowerCase().contains(termino.toLowerCase()) ||
                        libro.getAutor().toLowerCase().contains(termino.toLowerCase()) ||
                        libro.getIsbn().contains(termino))
                    .collect(Collectors.toList());
    }
    
    public List<Libro> buscarPorGenero(GeneroLibro genero) {
        return libros.values().stream()
                    .filter(libro -> libro.getGenero() == genero)
                    .collect(Collectors.toList());
    }
    
    // ==================== GESTIÓN DE USUARIOS ====================
    
    public void registrarUsuario(Usuario usuario) {
        usuarios.put(usuario.getId(), usuario);
        System.out.println("✅ Usuario registrado: " + usuario.getNombre());
    }
    
    public Usuario buscarUsuario(String id) throws UsuarioNoEncontradoException {
        Usuario usuario = usuarios.get(id);
        if (usuario == null) {
            throw new UsuarioNoEncontradoException("Usuario no encontrado: " + id);
        }
        return usuario;
    }
    
    // ==================== SISTEMA DE PRÉSTAMOS ====================
    
    public Prestamo prestarLibro(String usuarioId, String isbn) 
            throws UsuarioNoEncontradoException, LibroNoDisponibleException, LimitePrestamosException {
        
        Usuario usuario = buscarUsuario(usuarioId);
        Libro libro = libros.get(isbn);
        
        if (libro == null) {
            throw new LibroNoDisponibleException("Libro no encontrado: " + isbn);
        }
        
        if (!libro.puedePrestar()) {
            throw new LibroNoDisponibleException("Libro no disponible: " + libro.getTitulo());
        }
        
        if (!usuario.puedePrestarMas()) {
            throw new LimitePrestamosException("Usuario ha alcanzado el límite de préstamos o tiene multas pendientes");
        }
        
        String prestamoId = "PREST" + String.format("%04d", contadorPrestamos++);
        Prestamo prestamo = new Prestamo(prestamoId, usuario, libro);
        
        libro.prestar();
        usuario.agregarPrestamo(prestamo);
        prestamos.add(prestamo);
        
        System.out.println("✅ Préstamo realizado: " + prestamo);
        return prestamo;
    }
    
    public void devolverLibro(String prestamoId) {
        Optional<Prestamo> prestamo = prestamos.stream()
                                              .filter(p -> p.getId().equals(prestamoId) && p.getFechaDevolucion() == null)
                                              .findFirst();
        
        if (prestamo.isPresent()) {
            prestamo.get().devolver();
            System.out.println("✅ Libro devuelto: " + prestamo.get());
            
            if (prestamo.get().getMulta() > 0) {
                System.out.printf("⚠️ Multa aplicada: $%.2f por %d días de retraso%n", 
                                prestamo.get().getMulta(), prestamo.get().getDiasRetraso());
            }
        } else {
            System.out.println("❌ Préstamo no encontrado o ya devuelto: " + prestamoId);
        }
    }
    
    // ==================== REPORTES Y ESTADÍSTICAS ====================
    
    public void generarReporteGeneral() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("📊 REPORTE GENERAL DEL SISTEMA");
        System.out.println("=".repeat(50));
        
        System.out.println("📚 Estadísticas de Libros:");
        System.out.println("  Total de libros: " + libros.size());
        
        Map<EstadoLibro, Long> librosPorEstado = libros.values().stream()
                                                      .collect(Collectors.groupingBy(Libro::getEstado, Collectors.counting()));
        librosPorEstado.forEach((estado, cantidad) -> 
            System.out.println("  " + estado + ": " + cantidad));
        
        System.out.println("\n👥 Estadísticas de Usuarios:");
        System.out.println("  Total de usuarios: " + usuarios.size());
        
        Map<TipoUsuario, Long> usuariosPorTipo = usuarios.values().stream()
                                                        .collect(Collectors.groupingBy(Usuario::getTipo, Collectors.counting()));
        usuariosPorTipo.forEach((tipo, cantidad) -> 
            System.out.println("  " + tipo + ": " + cantidad));
        
        System.out.println("\n📋 Estadísticas de Préstamos:");
        System.out.println("  Total de préstamos: " + prestamos.size());
        
        long prestamosActivos = prestamos.stream()
                                        .filter(p -> p.getFechaDevolucion() == null)
                                        .count();
        System.out.println("  Préstamos activos: " + prestamosActivos);
        
        long prestamosVencidos = prestamos.stream()
                                         .filter(Prestamo::estaVencido)
                                         .count();
        System.out.println("  Préstamos vencidos: " + prestamosVencidos);
        
        double totalMultas = usuarios.values().stream()
                                    .mapToDouble(Usuario::getMultasPendientes)
                                    .sum();
        System.out.printf("  Total multas pendientes: $%.2f%n", totalMultas);
    }
    
    public void generarTopLibros() {
        System.out.println("\n📈 TOP 5 LIBROS MÁS PRESTADOS:");
        libros.values().stream()
              .sorted((l1, l2) -> Integer.compare(l2.getVecesPrestado(), l1.getVecesPrestado()))
              .limit(5)
              .forEach(libro -> System.out.printf("  %s - %d préstamos%n", 
                                                 libro.getTitulo(), libro.getVecesPrestado()));
    }
    
    public void generarReportePorGenero() {
        System.out.println("\n📊 ESTADÍSTICAS POR GÉNERO:");
        libros.values().stream()
              .collect(Collectors.groupingBy(Libro::getGenero,
                      Collectors.summingInt(Libro::getVecesPrestado)))
              .entrySet().stream()
              .sorted(Map.Entry.<GeneroLibro, Integer>comparingByValue().reversed())
              .forEach(entry -> System.out.printf("  %s: %d préstamos%n", 
                                                 entry.getKey(), entry.getValue()));
    }
    
    public void generarReporteUsuariosActivos() {
        System.out.println("\n👑 TOP 5 USUARIOS MÁS ACTIVOS:");
        usuarios.values().stream()
                .sorted((u1, u2) -> Integer.compare(u2.getHistorialPrestamos().size(), 
                                                   u1.getHistorialPrestamos().size()))
                .limit(5)
                .forEach(usuario -> System.out.printf("  %s (%s) - %d préstamos%n", 
                                                     usuario.getNombre(), usuario.getTipo(), 
                                                     usuario.getHistorialPrestamos().size()));
    }
    
    // ==================== MÉTODOS DE CONSULTA ====================
    
    public void mostrarLibrosDisponibles() {
        System.out.println("\n📚 LIBROS DISPONIBLES:");
        libros.values().stream()
              .filter(libro -> libro.getEstado() == EstadoLibro.DISPONIBLE)
              .sorted((l1, l2) -> l1.getTitulo().compareToIgnoreCase(l2.getTitulo()))
              .forEach(System.out::println);
    }
    
    public void mostrarPrestamosVencidos() {
        System.out.println("\n⚠️ PRÉSTAMOS VENCIDOS:");
        prestamos.stream()
                .filter(Prestamo::estaVencido)
                .sorted((p1, p2) -> p1.getFechaVencimiento().compareTo(p2.getFechaVencimiento()))
                .forEach(prestamo -> {
                    System.out.println(prestamo);
                    System.out.printf("   Días de retraso: %d%n", prestamo.getDiasRetraso());
                });
    }
    
    public void mostrarUsuarios() {
        System.out.println("\n👥 USUARIOS REGISTRADOS:");
        usuarios.values().stream()
                .sorted((u1, u2) -> u1.getNombre().compareToIgnoreCase(u2.getNombre()))
                .forEach(System.out::println);
    }
}

// ==================== CLASE PRINCIPAL ====================

public class ProyectoFinalBiblioteca {
    public static void main(String[] args) {
        System.out.println("🏛️ SISTEMA DE GESTIÓN DE BIBLIOTECA");
        System.out.println("=====================================\n");
        
        SistemaBiblioteca biblioteca = new SistemaBiblioteca();
        
        // Demostrar funcionalidades del sistema
        demostrarSistema(biblioteca);
    }
    
    private static void demostrarSistema(SistemaBiblioteca biblioteca) {
        try {
            // Mostrar estado inicial
            biblioteca.mostrarLibrosDisponibles();
            biblioteca.mostrarUsuarios();
            
            // Realizar algunos préstamos
            System.out.println("\n🔄 REALIZANDO PRÉSTAMOS...");
            biblioteca.prestarLibro("EST001", "978-0134685991");
            biblioteca.prestarLibro("PROF001", "978-0596009205");
            biblioteca.prestarLibro("GEN001", "978-0451524935");
            
            // Intentar préstamo que fallará
            try {
                biblioteca.prestarLibro("EST001", "978-0451524935"); // Libro ya prestado
            } catch (LibroNoDisponibleException e) {
                System.out.println("❌ " + e.getMessage());
            }
            
            // Simular devolución
            System.out.println("\n📤 DEVOLVIENDO LIBROS...");
            biblioteca.devolverLibro("PREST001");
            
            // Generar reportes
            biblioteca.generarReporteGeneral();
            biblioteca.generarTopLibros();
            biblioteca.generarReportePorGenero();
            biblioteca.generarReporteUsuariosActivos();
            
            // Buscar libros
            System.out.println("\n🔍 BÚSQUEDA DE LIBROS:");
            List<Libro> resultados = biblioteca.buscarLibros("Java");
            resultados.forEach(System.out::println);
            
            System.out.println("\n✅ Demostración del sistema completada");
            
        } catch (Exception e) {
            System.out.println("❌ Error en el sistema: " + e.getMessage());
            e.printStackTrace();
        }
    }
}`,
      exercises: [
        {
          id: 'extend-library-system',
          title: 'Extender Sistema de Biblioteca',
          description: 'Agrega funcionalidades como reservas, renovaciones y notificaciones',
          expectedOutput: 'Sistema extendido con nuevas funcionalidades'
        },
        {
          id: 'create-inventory-system',
          title: 'Sistema de Inventario Completo',
          description: 'Crea un sistema de inventario para una tienda aplicando todos los conceptos',
          expectedOutput: 'Sistema completo de inventario con todas las funcionalidades'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: '¿Qué patrón de diseño se aplica al usar diferentes tipos de Usuario?',
          options: ['Singleton', 'Factory', 'Polimorfismo/Herencia', 'Observer'],
          correctAnswer: 2,
          explanation: 'Se usa herencia y polimorfismo para diferentes tipos de usuarios con comportamientos específicos'
        },
        {
          id: 'q2',
          question: '¿Por qué es importante el manejo de excepciones en este sistema?',
          options: ['Para hacer el código más largo', 'Para manejar errores de negocio de forma robusta', 'Para usar try-catch', 'No es importante'],
          correctAnswer: 1,
          explanation: 'Las excepciones manejan casos de error del negocio como libros no disponibles o límites excedidos'
        },
        {
          id: 'q3',
          question: '¿Qué ventaja ofrecen los Streams en los reportes?',
          options: ['Son más rápidos', 'Permiten procesamiento declarativo y funcional', 'Usan menos memoria', 'Son más fáciles de escribir'],
          correctAnswer: 1,
          explanation: 'Los Streams permiten escribir código declarativo y funcional para procesar y analizar datos'
        },
        {
          id: 'q4',
          question: '¿Cómo demuestra este proyecto el encapsulamiento?',
          options: ['Usando métodos públicos', 'Protegiendo atributos con private y controlando acceso', 'Usando herencia', 'Implementando interfaces'],
          correctAnswer: 1,
          explanation: 'Los atributos son privados y el acceso se controla a través de métodos públicos con validaciones'
        },
        {
          id: 'q5',
          question: '¿Qué concepto permite que diferentes tipos de Usuario tengan comportamientos específicos?',
          options: ['Encapsulamiento', 'Polimorfismo', 'Abstracción', 'Composición'],
          correctAnswer: 1,
          explanation: 'El polimorfismo permite que cada tipo de usuario implemente comportamientos específicos del mismo método'
        }
      ]
    }
  }
];

// Función para obtener lecciones por nivel
export const getLessonsByLevel = (level: 'principiante' | 'intermedio' | 'avanzado') => {
  return lessons.filter(lesson => lesson.level === level);
};

// Función para obtener una lección por ID
export const getLessonById = (id: string) => {
  return lessons.find(lesson => lesson.id === id);
};