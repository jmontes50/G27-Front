# ENUNCIADO  
**Con un `for` imprime en la consola los primeros 10 números pares de la tabla de multiplicar del 7.**  

---

## Planteamiento de ideas individuales  
1. **¿Cómo sé que un número es par?**  
   - Un número es par si es divisible entre 2 y tiene un residuo de 0 (`n % 2 === 0`).  

2. **¿Cómo hacer que un bucle funcione hasta tener 10 números en total?**  
   - Necesitamos un contador para llevar la cuenta de los números pares encontrados.  
   - El bucle debe detenerse cuando el contador alcance el valor deseado (10 en este caso).  

3. **Ejercicio manual**  
   - Identificar manualmente los primeros números pares en la tabla del 7: `14, 28, 42, ...`.  
   - Observamos que:  
     - Estos números son múltiplos de 7.  
     - Son pares porque cumplen la condición `n % 2 === 0`.  

4. **Patrones identificados**  
   - Podemos avanzar en la tabla de multiplicar del 7 de uno en uno (`7 * 1, 7 * 2, ...`).  
   - Verificamos si el resultado es par utilizando `n % 2 === 0`.  
   - Detenemos el bucle después de encontrar los primeros 10 números pares.  

---

## Pseudocódigo  
```plaintext
Inicializar un contador a 0.
Para cada número empezando en 1:
    Calcular el múltiplo de 7.
    Si el múltiplo es par:
        Imprimirlo.
        Incrementar el contador.
    Detener el bucle si se alcanzan 10 números pares.
```

