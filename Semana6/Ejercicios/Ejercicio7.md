# ENUNCIADO  
**Desarrolla una función que calcule la suma de los números impares en un array de enteros positivos.**  
La función debe:  
1. Recibir el array como parámetro.  
2. Recorrer el array usando un bucle `for`.  
3. Identificar los números impares utilizando el operador módulo (`%`).  
4. Calcular la suma de los números impares y devolver el resultado.  

---

## Planteamiento de ideas individuales  
1. **¿Qué es un número impar?**  
   - Un número es impar si al dividirlo entre 2, el residuo no es 0 (es decir, `n % 2 !== 0`).  

2. **¿Cómo calcular la suma de ciertos elementos en un array?**  
   - Recorrer el array elemento por elemento.  
   - Verificar si cada número cumple con la condición de ser impar.  
   - Acumular su valor en una variable de suma.  

3. **¿Qué devolverá la función?**  
   - La suma total de los números impares en el array.  

---

## Ejercicio manual  
Dado el array: `[1, 2, 3, 4, 5, 6]`:  
- Los números impares son: `1, 3, 5`.  
- Su suma es: `1 + 3 + 5 = 9`.  

Esto muestra que necesitamos:  
1. Recorrer todos los números del array.  
2. Verificar si cada número es impar.  
3. Sumar los números impares en una variable acumuladora.  

---

## Identificación de patrones  
1. Crear una función que reciba un array como parámetro.  
2. Inicializar una variable `suma` en 0 para almacenar el total de la suma de números impares.  
3. Recorrer el array con un bucle `for`.  
4. Verificar si cada número es impar utilizando `n % 2 !== 0`.  
5. Sumar los números impares a la variable `suma`.  
6. Retornar el valor acumulado en `suma`.  

---

## Pseudocódigo  
```plaintext
Definir una función sumarImpares que reciba un array como parámetro:
    Inicializar una variable suma en 0.
    Para cada número en el array:
        Si el número es impar (n % 2 !== 0):
            Sumarlo a la variable suma.
    Retornar el valor de suma.

```

## Solución

Busca plantear tu, tu propia solución y si ves la solución, busca plantearlo de manera diferente. Esto ayuda a involucrarse con la sintaxis del lenguaje y mejora el pensamiento computacional.

[Ver posible solución](./Ejercicio7.js)
