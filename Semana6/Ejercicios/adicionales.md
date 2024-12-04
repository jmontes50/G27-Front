# Ejercicios Adicionales

Los siguientes ejercicios requieren usar diferentes herramientas de JavaScript, como estructuras condicionales, repetitivas, métodos específicos, manejo de strings y manejo de arreglos. Cada ejercicio tendrá pistas y un planteamiento base que puedes tomar.

---

## Ejercicio 1: comboString

### ENUNCIADO

Implementa la función `comboString` para que reciba dos cadenas, `a` y `b`, y devuelva una cadena de la forma **corta + larga + corta**, con la cadena más corta en el exterior y la cadena más larga en el interior.  

- Las cadenas no tendrán la misma longitud, pero pueden estar vacías (longitud 0).  
- [Enlace al ejercicio original](https://the-winter.github.io/codingjs/exercise.html?name=comboString&title=String-1)

```javascript
function comboString(a, b) {
  // Tu código aquí
}
```

### IDEAS INDIVIDUALES

1. Identificar cuál de las dos cadenas (a o b) es más corta.
2. Concatenar las cadenas en el formato requerido: corta + larga + corta.
3. Utilizar métodos o propiedades para determinar la longitud de las cadenas.

### IDENTIFICACIÓN DE PATRONES

- Uso de la propiedad .length para comparar longitudes.
- Operadores condicionales (if/else) o un operador ternario para decidir el orden de las cadenas.
- Concatenación de texto con operadores (+) o template literals.

```plaintext
1. Si la longitud de `a` es menor que la longitud de `b`:
   - Retornar `a + b + a`.
2. Caso contrario:
   - Retornar `b + a + b`.
3. Utilizar concatenación o template literals para formar la cadena.
```

--- 

---

## Ejercicio 2: Same on both ends

### ENUNCIADO
Dada una oración, retorna el número de palabras cuya primera y última letra sean iguales. 
- No cuentes palabras que tengan un solo carácter (por ejemplo, "I" o "a").  
- La función no debería ser *case sensitive* (es decir, "P" debería coincidir con "p").  
- Ignora signos de puntuación u otros caracteres que no sean letras.  

[Enlace al ejercicio original](https://edabit.com/challenge/JDDeK9jSFKJbfzhMt)

**Ejemplos:**
```javascript
countSameEnds("Pop! goes the balloon"); // => 1
countSameEnds("And the crowd goes wild!"); // => 0
countSameEnds("No I am not in a gang."); // => 1
```

### IDEAS INDIVIDUALES

1. Dividir la oración en palabras individuales.
2. Limpiar cada palabra eliminando caracteres no alfabéticos.
3. Convertir todas las letras a minúsculas para evitar problemas de sensibilidad al caso.
4. Verificar si la primera y última letra de la palabra coinciden.
5. Ignorar palabras de un solo carácter.

### PLANTEAMIENTO DE IDEAS

- Utilizar el método .split() para dividir la oración en palabras.
- Emplear una expresión regular para eliminar signos de puntuación y caracteres no alfabéticos.
- Convertir las palabras a minúsculas usando .toLowerCase().
- Comparar la primera y última letra de cada palabra, asegurándose de que la longitud sea mayor a 1.

### IDENTIFICACIÓN DE PATRONES
- Manipulación de cadenas con métodos como .split(), .replace(), y .toLowerCase().
- Uso de expresiones regulares para eliminar caracteres no deseados.
- Iterar sobre un arreglo de palabras con un bucle (for o métodos como .filter()).
- Contar las palabras que cumplen la condición.

### PSEUDOCÓDIGO O PISTA

```plaintext
1. Dividir la oración en palabras usando el espacio como separador.
2. Limpiar cada palabra eliminando caracteres no alfabéticos.
3. Convertir cada palabra a minúsculas.
4. Para cada palabra:
   - Si la longitud es mayor a 1 y la primera letra es igual a la última:
     - Incrementar el contador.
5. Retornar el contador.
```

---

## Ejercicio 3: Secret Society

### ENUNCIADO
Un grupo de amigos ha decidido iniciar una sociedad secreta. El nombre de la sociedad será la primera letra de cada uno de ellos, ordenados alfabéticamente.  
- El nombre de la sociedad secreta debe ser enteramente en **mayúsculas**.  

**Ejemplos:**
```javascript
societyName(["Adam", "Sarah", "Malcolm"]); // ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]); // ➞ "CHLN"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]); // ➞ "CJMPRR"
```

### IDEAS INDIVIDUALES
- Acceder a la primera letra de cada nombre.
- Convertir todas las letras a mayúsculas.
- Ordenar las letras alfabéticamente.
- Unir las letras en un solo string.

### PLANTEAMIENTO DE IDEAS
- Iterar sobre el arreglo de nombres para extraer la primera letra de cada elemento.
- Convertir cada letra a mayúscula usando `.toUpperCase()`.
- Ordenar las letras con `.sort()`.
- Unir las letras en un único string usando `.join("")`.

### IDENTIFICACIÓN DE PATRONES
- Uso de propiedades de strings para acceder a caracteres individuales (`texto[0]`).
- Métodos de arreglos como `.map()`, `.sort()`, y `.join()`.
- Transformación de texto a mayúsculas con `.toUpperCase()`.


## Ejercicio 3: Secret Society

### ENUNCIADO
Un grupo de amigos ha decidido iniciar una sociedad secreta. El nombre de la sociedad será la primera letra de cada uno de ellos, ordenados alfabéticamente.  
- El nombre de la sociedad secreta debe ser enteramente en **mayúsculas**.  

**Ejemplos:**
```javascript
societyName(["Adam", "Sarah", "Malcolm"]); // ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]); // ➞ "CHLN"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]); // ➞ "CJMPRR"
```
### IDEAS INDIVIDUALES
- Acceder a la primera letra de cada nombre.
- Convertir todas las letras a mayúsculas.
- Ordenar las letras alfabéticamente.
- Unir las letras en un solo string.
### PLANTEAMIENTO DE IDEAS
- Iterar sobre el arreglo de nombres para extraer la primera letra de cada elemento.
- Convertir cada letra a mayúscula usando .toUpperCase().
- Ordenar las letras con .sort().
- Unir las letras en un único string usando .join("").
### IDENTIFICACIÓN DE PATRONES
- Uso de propiedades de strings para acceder a caracteres individuales (texto[0]).
- Métodos de arreglos como .map(), .sort(), y .join().
- Transformación de texto a mayúsculas con .toUpperCase().
### PSEUDOCÓDIGO O PISTA

```plaintext
1. Crear un arreglo con la primera letra de cada nombre.
2. Convertir todas las letras a mayúsculas.
3. Ordenar las letras alfabéticamente.
4. Unir las letras en un único string.
5. Retornar el resultado.
```