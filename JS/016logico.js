
"use strict";

alert(null || 2 || undefined); // 2  primer valor verdadero y el operador OR muestra el primer valor verdadero.
alert(alert(1) || 2 || alert(3)); // 2 ya  que un alert dentro de otro alert sólo muestra pero no compara.
alert(1 && null && 2); // null  Ya que el  AND devuelve el valor falso que encuentre.
alert(alert(1) && alert(2)); // undefined Ya que  no está comparando solo esta monstrando.
alert(null || (2 && 3) || 4); // 3 esta comparando 2 y 3 entonces el 2 es true y devuelve el 3 y es el 3 verdadero con el or.
