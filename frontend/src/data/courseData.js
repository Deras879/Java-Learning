export const courseTopics = [
  {
    id: 1,
    title: 'Variables y Tipos de Datos',
    completed: false,
    explanation: `En Java, una variable es un contenedor que almacena un valor de datos. Cada variable tiene un tipo específico que determina qué tipo de valor puede almacenar y qué operaciones se pueden realizar con ella.

Los tipos de datos básicos en Java incluyen:
- int: para números enteros
- double: para números decimales
- String: para texto
- boolean: para valores verdadero/falso
- char: para caracteres individuales`,
    codeExample: `// Declaración e inicialización de variables
int edad = 25;
String nombre = "María";
double salario = 1234.56;
boolean esEstudiante = true;
char inicial = 'M';

// Uso de variables
System.out.println("Nombre: " + nombre);
System.out.println("Edad: " + edad + " años");
System.out.println("Salario: $" + salario);`,
    exercises: [
      {
        id: 1,
        title: 'Declarar variables básicas',
        description: 'Declara una variable de tipo String llamada "ciudad" y asígnale el valor "Madrid".',
        initialCode: `public class Main {
  public static void main(String[] args) {
    // Declara una variable String llamada "ciudad" con valor "Madrid"
    
  }
}`,
        solution: `public class Main {
  public static void main(String[] args) {
    // Declara una variable String llamada "ciudad" con valor "Madrid"
    String ciudad = "Madrid";
  }
}`,
        hints: [
          'Recuerda usar la palabra clave "String" para declarar una variable de texto',
          'El valor debe estar entre comillas dobles'
        ]
      },
      {
        id: 2,
        title: 'Trabajar con números',
        description: 'Declara una variable int llamada "numero" con valor 42 y una variable double llamada "precio" con valor 19.99.',
        initialCode: `public class Main {
  public static void main(String[] args) {
    // Tu código aquí
    
  }
}`,
        solution: `public class Main {
  public static void main(String[] args) {
    int numero = 42;
    double precio = 19.99;
  }
}`,
        hints: [
          'Usa "int" para números enteros',
          'Usa "double" para números decimales'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: '¿Cuál es el tipo de dato correcto para almacenar un número entero en Java?',
          options: ['String', 'int', 'double', 'char'],
          correctAnswer: 1,
          explanation: 'El tipo "int" se usa para almacenar números enteros en Java.'
        },
        {
          id: 2,
          question: '¿Qué valor puede almacenar una variable de tipo boolean?',
          options: ['Números', 'Texto', 'true o false', 'Caracteres'],
          correctAnswer: 2,
          explanation: 'Una variable boolean solo puede almacenar los valores true (verdadero) o false (falso).'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Operadores',
    completed: false,
    explanation: `Los operadores se utilizan para realizar operaciones en variables y valores. Java tiene varios tipos de operadores:

1. Operadores aritméticos: +, -, *, /, %
2. Operadores de asignación: =, +=, -=, *=, /=
3. Operadores de comparación: ==, !=, <, >, <=, >=
4. Operadores lógicos: &&, ||, !
5. Operadores de incremento/decremento: ++, --`,
    codeExample: `// Operadores aritméticos
int a = 10;
int b = 5;
int suma = a + b;        // 15
int resta = a - b;       // 5
int multiplicacion = a * b; // 50
int division = a / b;    // 2
int modulo = a % b;      // 0

// Operadores de comparación
boolean esMayor = a > b;     // true
boolean esIgual = a == b;    // false

// Operadores lógicos
boolean resultado = (a > b) && (b > 0); // true`,
    exercises: [
      {
        id: 1,
        title: 'Operadores aritméticos',
        description: 'Calcula el área de un rectángulo con base 10 y altura 5. Almacena el resultado en una variable llamada "area".',
        initialCode: `public class Main {
  public static void main(String[] args) {
    int base = 10;
    int altura = 5;
    // Calcula el área (base * altura)
    
  }
}`,
        solution: `public class Main {
  public static void main(String[] args) {
    int base = 10;
    int altura = 5;
    // Calcula el área (base * altura)
    int area = base * altura;
  }
}`,
        hints: [
          'El área de un rectángulo se calcula multiplicando base por altura',
          'Usa el operador * para multiplicar'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: '¿Cuál es el resultado de 15 % 4 en Java?',
          options: ['3', '4', '3.75', '15'],
          correctAnswer: 0,
          explanation: 'El operador % devuelve el resto de la división. 15 dividido entre 4 es 3 con resto 3.'
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Estructuras de Control',
    completed: false,
    explanation: `Las estructuras de control permiten controlar el flujo de ejecución de un programa:

1. if-else: Ejecuta código basado en condiciones
2. for: Repite código un número específico de veces
3. while: Repite código mientras una condición sea verdadera
4. switch: Selecciona entre múltiples opciones

Estas estructuras son fundamentales para crear programas dinámicos e interactivos.`,
    codeExample: `// Estructura if-else
int edad = 18;
if (edad >= 18) {
    System.out.println("Eres mayor de edad");
} else {
    System.out.println("Eres menor de edad");
}

// Bucle for
for (int i = 1; i <= 5; i++) {
    System.out.println("Número: " + i);
}

// Bucle while
int contador = 0;
while (contador < 3) {
    System.out.println("Contador: " + contador);
    contador++;
}`,
    exercises: [
      {
        id: 1,
        title: 'Bucle for básico',
        description: 'Usa un bucle for para imprimir los números del 1 al 5 en la consola.',
        initialCode: `public class Main {
  public static void main(String[] args) {
    // Usa un bucle for para imprimir números del 1 al 5
    
  }
}`,
        solution: `public class Main {
  public static void main(String[] args) {
    // Usa un bucle for para imprimir números del 1 al 5
    for (int i = 1; i <= 5; i++) {
      System.out.println(i);
    }
  }
}`,
        hints: [
          'La sintaxis del for es: for(inicialización; condición; incremento)',
          'Usa System.out.println() para imprimir cada número'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: '¿Cuántas veces se ejecutará este bucle? for(int i = 0; i < 5; i++)',
          options: ['4 veces', '5 veces', '6 veces', 'Infinitas veces'],
          correctAnswer: 1,
          explanation: 'El bucle se ejecuta mientras i < 5, comenzando desde 0: 0, 1, 2, 3, 4 (5 veces).'
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Arrays',
    completed: false,
    explanation: `Los arrays (arreglos) son estructuras de datos que pueden almacenar múltiples valores del mismo tipo. En Java, los arrays tienen un tamaño fijo una vez creados.

Características importantes:
- Todos los elementos deben ser del mismo tipo
- El índice comienza en 0
- El tamaño es fijo una vez declarado
- Se puede acceder a elementos usando corchetes []`,
    codeExample: `// Declaración e inicialización de arrays
int[] numeros = {1, 2, 3, 4, 5};
String[] nombres = {"Ana", "Luis", "María"};

// Acceso a elementos
System.out.println(numeros[0]); // Imprime 1
System.out.println(nombres[1]); // Imprime "Luis"

// Modificar elementos
numeros[2] = 10; // Cambia el tercer elemento a 10

// Longitud del array
System.out.println("Longitud: " + numeros.length);`,
    exercises: [
      {
        id: 1,
        title: 'Crear y usar arrays',
        description: 'Crea un array de enteros con los valores 10, 20, 30 y luego imprime el segundo elemento.',
        initialCode: `public class Main {
  public static void main(String[] args) {
    // Crea un array con valores 10, 20, 30
    
    // Imprime el segundo elemento (índice 1)
    
  }
}`,
        solution: `public class Main {
  public static void main(String[] args) {
    // Crea un array con valores 10, 20, 30
    int[] numeros = {10, 20, 30};
    
    // Imprime el segundo elemento (índice 1)
    System.out.println(numeros[1]);
  }
}`,
        hints: [
          'Usa la sintaxis int[] nombre = {valor1, valor2, valor3}',
          'Recuerda que los índices empiezan en 0'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'En un array int[] numeros = {5, 10, 15}, ¿cuál es el valor de numeros[2]?',
          options: ['5', '10', '15', 'Error'],
          correctAnswer: 2,
          explanation: 'Los índices empiezan en 0, por lo que numeros[2] es el tercer elemento: 15.'
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Métodos',
    completed: false,
    explanation: `Los métodos son bloques de código que realizan una tarea específica. Permiten organizar el código, reutilizarlo y hacerlo más legible.

Componentes de un método:
- Modificador de acceso (public, private)
- Tipo de retorno (void, int, String, etc.)
- Nombre del método
- Parámetros (opcionales)
- Cuerpo del método`,
    codeExample: `// Método sin parámetros ni valor de retorno
public static void saludar() {
    System.out.println("¡Hola!");
}

// Método con parámetros y valor de retorno
public static int sumar(int a, int b) {
    return a + b;
}

// Uso de los métodos
public static void main(String[] args) {
    saludar(); // Llama al método saludar
    int resultado = sumar(5, 3); // Llama al método sumar
    System.out.println("Resultado: " + resultado);
}`,
    exercises: [
      {
        id: 1,
        title: 'Crear un método simple',
        description: 'Crea un método llamado "multiplicar" que tome dos parámetros enteros y devuelva su producto.',
        initialCode: `public class Main {
  // Crea el método multiplicar aquí
  
  
  public static void main(String[] args) {
    int resultado = multiplicar(4, 5);
    System.out.println(resultado);
  }
}`,
        solution: `public class Main {
  // Crea el método multiplicar aquí
  public static int multiplicar(int a, int b) {
    return a * b;
  }
  
  public static void main(String[] args) {
    int resultado = multiplicar(4, 5);
    System.out.println(resultado);
  }
}`,
        hints: [
          'Usa "public static int" para el tipo de retorno',
          'Usa "return" para devolver el resultado'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: '¿Qué palabra clave se usa para devolver un valor desde un método?',
          options: ['give', 'return', 'send', 'output'],
          correctAnswer: 1,
          explanation: 'La palabra clave "return" se usa para devolver un valor desde un método.'
        }
      ]
    }
  }
];

export const glossaryTerms = [
  {
    id: 1,
    term: 'JDK',
    definition: 'Java Development Kit - Conjunto de herramientas necesarias para desarrollar aplicaciones en Java.',
    example: 'Incluye el compilador javac, la máquina virtual Java y las librerías estándar.'
  },
  {
    id: 2,
    term: 'JVM',
    definition: 'Java Virtual Machine - Máquina virtual que ejecuta el bytecode de Java.',
    example: 'Permite que el código Java sea multiplataforma ("Write once, run anywhere").'
  },
  {
    id: 3,
    term: 'Variable',
    definition: 'Contenedor que almacena un valor de datos que puede cambiar durante la ejecución.',
    example: 'int edad = 25; // "edad" es una variable de tipo entero'
  },
  {
    id: 4,
    term: 'Método',
    definition: 'Bloque de código que realiza una tarea específica y puede ser reutilizado.',
    example: 'public static void saludar() { System.out.println("Hola"); }'
  },
  {
    id: 5,
    term: 'Clase',
    definition: 'Plantilla que define las propiedades y comportamientos de un objeto.',
    example: 'public class Persona { String nombre; int edad; }'
  },
  {
    id: 6,
    term: 'Objeto',
    definition: 'Instancia de una clase que tiene estado y comportamiento específicos.',
    example: 'Persona juan = new Persona(); // "juan" es un objeto de la clase Persona'
  },
  {
    id: 7,
    term: 'Array',
    definition: 'Estructura de datos que almacena múltiples valores del mismo tipo.',
    example: 'int[] numeros = {1, 2, 3, 4, 5};'
  },
  {
    id: 8,
    term: 'Bucle',
    definition: 'Estructura de control que repite un bloque de código mientras se cumpla una condición.',
    example: 'for (int i = 0; i < 10; i++) { System.out.println(i); }'
  },
  {
    id: 9,
    term: 'Condición',
    definition: 'Expresión que evalúa a verdadero o falso para controlar el flujo del programa.',
    example: 'if (edad >= 18) { System.out.println("Mayor de edad"); }'
  },
  {
    id: 10,
    term: 'Compilación',
    definition: 'Proceso de convertir código fuente Java en bytecode ejecutable.',
    example: 'javac MiPrograma.java // Compila el archivo .java a .class'
  }
];