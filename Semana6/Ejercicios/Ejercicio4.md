# ENUNCIADO  
**Cree una función que permita calcular el área de un círculo en base a su radio. Considere que la fórmula es:**  
\[
A = \pi \cdot r^2
\]  
Donde:  
- \(\pi = 3.14\)  
- \(r =\) radio  

La función debe:  
1. Recibir el radio como parámetro.  
2. Usar el valor ingresado por el usuario para calcular el área del círculo.  

---

## Planteamiento de ideas individuales  
1. **¿Cómo se calcula el área de un círculo?**  
   - Se usa la fórmula \(A = \pi \cdot r^2\).  
   - Esto implica elevar el radio al cuadrado y multiplicarlo por el valor de \(\pi\).

2. **¿Cómo estructurar la función?**  
   - La función debe:
     - Recibir el radio como parámetro.
     - Calcular el área usando la fórmula.
     - Retornar el resultado del cálculo.

3. **¿Cómo manejar el ingreso del usuario?**  
   - Usaremos `prompt` o una simulación para obtener el radio.

4. **¿Qué pasa si el usuario ingresa un valor inválido?**  
   - Validaremos que el radio sea un número mayor que 0.

---

## Ejercicio manual  
Si el usuario ingresa el radio `5`:  
- La fórmula sería:  
  \[
  A = 3.14 \cdot 5^2 = 3.14 \cdot 25 = 78.5
  \]  

Esto muestra que necesitamos:  
1. Validar que el radio sea un número positivo.  
2. Calcular el área usando la fórmula.  
3. Mostrar el resultado al usuario.

---

## Identificación de patrones  
1. Crear una función que reciba el radio como parámetro.  
2. Usar la fórmula \(A = \pi \cdot r^2\) dentro de la función.  
3. Solicitar al usuario el radio y pasar este valor a la función.  
4. Validar que el radio sea un número mayor que 0.  
5. Retornar e imprimir el resultado.

---

## Pseudocódigo  
```plaintext
Definir una función calcularArea que reciba el radio como parámetro:
    Si el radio es menor o igual a 0:
        Retornar un mensaje de error.
    Calcular el área como pi * radio^2.
    Retornar el área.

Solicitar al usuario el radio.
Si el radio ingresado no es válido:
    Mostrar un mensaje de error.
Si es válido:
    Llamar a la función calcularArea y mostrar el resultado.

```

## Solución

Busca plantear tu, tu propia solución y si ves la solución, busca plantearlo de manera diferente. Esto ayuda a involucrarse con la sintaxis del lenguaje y mejora el pensamiento computacional.

[Ver posible solución](./Ejercicio4.js)
