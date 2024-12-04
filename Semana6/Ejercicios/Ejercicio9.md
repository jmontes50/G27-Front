# ENUNCIADO  
**Desarrolla una función que reorganice un array de tres números enteros.**  

La función debe:  
1. Recibir un array con tres números como parámetro.  
2. Reorganizar los números siguiendo estas reglas:  
   - Mover el primer número al final del array.  
   - Mantener el segundo número en su posición.  
   - Colocar el tercer número al inicio del array.  
3. Retornar el array reorganizado.  

---

## Planteamiento de ideas individuales  
1. **¿Cómo mover el primer número al final?**  
   - Usar el método `shift` para extraer el primer elemento del array.  
   - Luego, usar `push` para añadirlo al final.  

2. **¿Cómo colocar el tercer número al principio?**  
   - Usar el método `pop` para extraer el último elemento del array.  
   - Luego, usar `unshift` para añadirlo al inicio.  

3. **¿Qué sucede con el segundo número?**  
   - El segundo número no necesita cambios y permanece en su posición original.  

4. **Ejemplo manual**  
   Dado el array `[3, 2, 1]`:  
   - Extraemos el primer número `3` y lo colocamos al final → `[2, 1, 3]`.  
   - Extraemos el último número `1` y lo colocamos al principio → `[1, 2, 3]`.  
   - Resultado final: `[1, 2, 3]`.  

---

## Identificación de patrones  
1. Usar `shift` para extraer el primer número.  
2. Usar `push` para mover el número extraído al final.  
3. Usar `pop` para extraer el tercer número.  
4. Usar `unshift` para moverlo al inicio del array.  

---

## Pseudocódigo  
```plaintext
Definir una función reorganizarArray que reciba un array como parámetro:
    Extraer el primer número del array usando shift.
    Añadir este número al final del array usando push.
    Extraer el último número del array usando pop.
    Añadir este número al principio del array usando unshift.
    Retornar el array modificado.
```

## Solución

Busca plantear tu, tu propia solución y si ves la solución, busca plantearlo de manera diferente. Esto ayuda a involucrarse con la sintaxis del lenguaje y mejora el pensamiento computacional.

[Ver posible solución](./Ejercicio9.js)