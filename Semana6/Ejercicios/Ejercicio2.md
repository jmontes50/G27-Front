# ENUNCIADO  
**Imprime en la consola los números del 20 al 1, comenzando desde el 20 hasta llegar al 1.**

---

## Planteamiento de ideas individuales  
El ejercicio sugiere desglosar estas ideas:  

1. **¿Cómo puedo imprimir números en orden descendente?**  
   - Necesitamos comenzar desde un número grande e ir reduciéndolo en cada iteración.

2. **¿Cómo puedo controlar el bucle para que se detenga en el número 1?**  
   - Establecemos una condición que verifique cuándo detenerse.

3. **¿Qué significa que un bucle funcione "de 20 a 1"?**  
   - Esto implica que en cada paso, el número disminuye en una unidad (`n--`).

---

## Ejercicio manual  
Antes de escribir código, podemos hacer el ejercicio manualmente para entender la lógica:  
- Comenzamos con el número 20.  
- Restamos 1 repetidamente hasta llegar a 1.  
- La secuencia sería:  
  `20, 19, 18, ..., 3, 2, 1`

Esto muestra que en cada paso debemos **decrementar** el número.

---

## Identificación de patrones  
1. Partimos de un número inicial (`20`).  
2. En cada iteración, reducimos el número (`n--`).  
3. Nos detenemos cuando el número sea menor que 1.  

---

## Pseudocódigo  
```plaintext
Inicializar una variable en 20.
Mientras la variable sea mayor o igual a 1:
    Imprimir el valor de la variable.
    Decrementar la variable en 1.

```

## Solución

Busca plantear tu, tu propia solución y si ves la solución, busca plantearlo de manera diferente. Esto ayuda a involucrarse con la sintaxis del lenguaje y mejora el pensamiento computacional.

[Ver posible solución](./Ejercicio2.js)
