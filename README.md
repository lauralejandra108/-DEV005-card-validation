Página de compras 

Esta pagina esta pensada para una academia de yoga que tiene servicios de compra de cursos online, así que se pensó en :

-Una línea horizontal con el logo de la academia que atraviesa toda la página. 

- Un resumen de la compra que adquirió el usuario con el valor total y la imagen del producto.

-Sugerencia para que el usuario cree una cuenta en la página.

-Uno formato de información de tarjeta de crédito el cual tiene un algoritmo que válida el número.



css:

Para la construcción de la página se creo desde cero logo y publicidad de la academia. 

pusimos color en el formulario de información de tarjeta de crédito para guiar más facil al usuario

Puse el resumen de la publicidad para que el usuario estuviera seguro de lo que está comprando. 

-Agregue un justify-content: space-between para poner las fechas en una misma línea.

-Agregue un selec para que el usurio pudiera seleccionar el mes y el año 



HTML

-Agregue un selec para que el usurio pudiera seleccionar el mes y el año

-Agregue inputos para que el usuario pudiera insertar los datos de la tarjeta y poder obtener el numero para validarlo

- Agregue un boton para enviar toda la información y verificar 

-El input de los números solo puede tener un máximo de 16 caracteres.

- agregue un evento para que se tomaran los numeros que inserto el usuario al momento de darl click 



Javascript

-Con un ElementById obtuvimos los números de usuario y los llevamos a validator para poder realizar el algoritmo de Luhun

Sé reverso el número ingresado, se multiplicó su segundo dígito y se sumaron los dígitos mayores de 10.

- Con  push se van guardado en una constane todos los numero para al final sumarlos

-  Después de la suma, se divide el número en 10 y si el residuo es igual a cero se imprime con un innerHTML un mensaje el cual dice “Tarjeta válida" Si el número es diferente de 0 se imprime “Tarjeta invalida"

-Declaramos una funcion para enmascararos los 11 primero dígitos y se agragó una evento (click) para que se ejecutara el mskify. 



