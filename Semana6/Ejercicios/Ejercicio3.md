# ENUNCIADO  
**Según el número ingresado por un usuario, calcula la suma de los valores positivos menores a este número (comenzando desde 1).**

---

## Planteamiento de ideas individuales  
El ejercicio se puede desglosar en los siguientes pasos:  

1. **¿Qué significa "valores positivos menores a este número"?**  
   - Son todos los números positivos comenzando desde 1 y menores que el número ingresado.  

2. **¿Cómo calcular la suma de una serie de números?**  
   - Necesitamos recorrer los números uno por uno y acumularlos en una variable que guarde el total.

3. **¿Cómo manejar el ingreso del usuario?**  
   - Utilizamos un `prompt` para obtener el número. Si trabajamos en un entorno no interactivo, podemos usar una variable simulando este ingreso.

---

## Ejercicio manual  
Si el usuario ingresa el número 5:  
- Los valores positivos menores a 5 son: `1, 2, 3, 4`.  
- Su suma es: `1 + 2 + 3 + 4 = 10`.  

Esto muestra que necesitamos:  
1. Recorrer todos los números desde 1 hasta el número ingresado - 1.  
2. Acumularlos en una variable para calcular la suma total.

---

## Identificación de patrones  
1. Inicializar un acumulador en 0 para guardar la suma total.  
2. Recorrer todos los números desde 1 hasta (número ingresado - 1).  
3. En cada iteración, sumar el número actual al acumulador.  
4. Imprimir la suma total al finalizar el recorrido.

---

## Pseudocódigo  
```plaintext
Solicitar al usuario un número.
Inicializar una variable suma en 0.
Para cada número desde 1 hasta el número ingresado - 1:
    Sumar el número actual a la variable suma.
Imprimir el valor de suma.

```

## Solución

Busca plantear tu, tu propia solución y si ves la solución, busca plantearlo de manera diferente. Esto ayuda a involucrarse con la sintaxis del lenguaje y mejora el pensamiento computacional.

[Ver posible solución](./Ejercicio3.js)
