# ENUNCIADO  
**Crea una función que encuentre el número más grande en un array de números enteros.**  
La función debe:  
1. Recibir el array como parámetro.  
2. Utilizar un bucle `for` para recorrer el array.  
3. Comparar cada elemento para encontrar el valor máximo.  
4. Inicializar una variable con el primer elemento del array como valor máximo inicial.  
5. Devolver el valor máximo encontrado.

---

## Planteamiento de ideas individuales  
1. **¿Cómo encontrar el número más grande en un array?**  
   - Inicializamos una variable `max` con el primer elemento del array, de modo que sea el valor inicial máximo.  
   - Luego, comparamos cada elemento del array con la variable `max`.  
   - Si un número es mayor que `max`, actualizamos `max` con ese número.  

2. **¿Cómo recorrer un array?**  
   - Usamos un bucle `for` para recorrer el array, comenzando desde el primer elemento hasta el último.  
   - Para cada elemento, comparamos si es mayor que el valor actual de `max`.  

3. **¿Qué devolverá la función?**  
   - El valor máximo encontrado después de recorrer todo el array.  

---

## Ejercicio manual  
Dado el array: `[3, 5, 7, 2, 8, 6]`:  
- Comenzamos con `max = 3`.  
- Comparamos con `5`, `7`, `2`, `8`, `6`, y actualizamos `max` cuando encontramos un valor mayor.  
- El valor máximo es `8`.  

Esto muestra que necesitamos:  
1. Inicializar `max` con el primer número del array.  
2. Recorrer el array y comparar cada número con `max`.  
3. Actualizar `max` si encontramos un número mayor.

---

## Identificación de patrones  
1. Crear una función que reciba un array como parámetro.  
2. Inicializar una variable `max` con el primer número del array.  
3. Recorrer el array con un bucle `for`.  
4. Comparar cada número con `max` y actualizar `max` si es mayor.  
5. Retornar el valor de `max`.  

---

## Pseudocódigo  
```plaintext
Definir una función encontrarMaximo que reciba un array como parámetro:
    Inicializar una variable max con el primer número del array.
    Para cada número en el array:
        Si el número es mayor que max:
            Actualizar max con el número.
    Retornar el valor de max.
```

## Solución

Busca plantear tu, tu propia solución y si ves la solución, busca plantearlo de manera diferente. Esto ayuda a involucrarse con la sintaxis del lenguaje y mejora el pensamiento computacional.

[Ver posible solución](./Ejercicio8.js)