# ENUNCIADO  
**Crea una función que cuente la cantidad de números pares en un array de números.**  
La función debe:  
1. Recibir el array como parámetro.  
2. Recorrer el array para identificar los números pares.  
3. Devolver el total de números pares encontrados.

---

## Planteamiento de ideas individuales  
1. **¿Qué es un número par?**  
   - Un número es par si al dividirlo entre 2, el residuo es 0 (es decir, `n % 2 === 0`).

2. **¿Cómo contar elementos en un array que cumplan una condición?**  
   - Recorrer el array elemento por elemento (usando `for`, `forEach` o métodos funcionales).  
   - Incrementar un contador cada vez que se encuentre un número que cumpla la condición de ser par.

3. **¿Qué devolverá la función?**  
   - El total de números pares encontrados en el array.

---

## Ejercicio manual  
Dado el array: `[1, 2, 3, 4, 5, 6]`:  
- Los números pares son: `2, 4, 6`.  
- Total de números pares: `3`.  

Esto muestra que necesitamos:  
1. Recorrer el array.  
2. Verificar si cada número es par.  
3. Llevar un contador de cuántos números cumplen esta condición.

---

## Identificación de patrones  
1. Crear una función que reciba un array como parámetro.  
2. Inicializar un contador en 0 para almacenar el total de números pares.  
3. Recorrer el array y verificar si cada elemento es par.  
4. Incrementar el contador si el elemento es par.  
5. Retornar el valor del contador.

---

## Pseudocódigo  
```plaintext
Definir una función contarPares que reciba un array como parámetro:
    Inicializar un contador en 0.
    Para cada número en el array:
        Si el número es par (n % 2 === 0):
            Incrementar el contador.
    Retornar el contador.

```

## Solución

Busca plantear tu, tu propia solución y si ves la solución, busca plantearlo de manera diferente. Esto ayuda a involucrarse con la sintaxis del lenguaje y mejora el pensamiento computacional.

[Ver posible solución](./Ejercicio6.js)
