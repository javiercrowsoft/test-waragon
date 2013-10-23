test-waragon
============

Esta solucion se puede probar en:

http://crowsoft.com.ar/waragon/permutations.html

Definicion

Se tiene un molde (con forma de tablero 3x3) y 10 unidades de distintos ingredientes (3 dulces, 3 frutas, 3 confites 1 masita) para hacer un pastel

Se considera que un pastel de 9 ingredientes es rico cuando tres mismos ingredientes estan alineados vertical u horizonalmente en el molde. La masita es especial, puede alinearse con cualquier ingrediente.

¿Cuantos pasteles ricos pueden cocinarse?
2052
Posible solucion

Son tres grupos de tres elementos cada uno.

F	F	F

D	D	D

C	C	C

Hay que obtener todas las permutaciones posibles que sean distintas.

Por ejemplo: si tenemos frutas {pera, manzana, frutilla}, confites {rojo, azul, amarillo} y dulces {bombon, alfajor, turron} (ups se me hizo dificil encontrar tres ejemplos de dulces :)

Esta combinacion:

    pera	manzana	frutilla
    rojo	azul	amarillo
    bombon	alfajor	turron

Es igual a esta otra:

    manzana	pera	frutilla
    rojo	azul	amarillo
    bombon	alfajor	turron

Solo se cambiaron la pera y la manzana dentro de la misma fila

Una permutacion valida seria:

    rojo	pera	frutilla
    manzana	azul	amarillo
    bombon	alfajor	turron

Analizando esto obtenemos que hay dos tipos de cobinaciones que nos dan un molde rico:

    a) los tres grupos alineados
    b) solo un grupo alineado

a)

    pera	manzana	frutilla
    rojo	azul	amarillo
    bombon	alfajor	turron

b)

    bombon	manzana	frutilla
    rojo	azul	amarillo
    pera	alfajor	turron

La masita es intercambiable por lo tanto para toda permutacion se puede remover el ingrediente contenido en cualquier posicion y sustituirlo por la masita.

Cuando un molde es super rico (los tres grupos alineados) se puede intercambiar la masita por cualquier ingrediente y el molde seguira siendo rico.

Cuando un molde es solo rico (solo un grupo alineado) se puede intercambiar la masita con cualquiera de las seis posiciones ocupadas por los grupos no alineados.

    bombon	manzana	frutilla
    rojo	azul	amarillo
    pera	alfajor	turron

En el molde de arriba, puedo poner la masita en las filas 1 y 3, es decir que puedo reemplazar pera, manzana, frutilla, bombon, alfajor y turron.

Existen solo 12 moldes super ricos. Todas las demas permutaciones son solo ricas u horribles :)

Por ende el numero de moldes ricos es 12 super ricos en los que puedo cambiar la masita por cualquier posicion. Esto da 12 x 9. El resto de los moldes que son ricos donde puedo cambiar la masita por cualquiera de las seis posiciones no ocupadas por el grupo que esta alineado. Esto es 324 x 6.

No se si esto esta bien, pero igual para mi estos postres son todos IGUALES ... es que me va mas lo salado :)
