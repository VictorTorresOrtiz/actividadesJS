"use strict"
let name = "Peter Parker";
alert( `Hola ${1}` ); // ?
alert( `Hola ${"name"}` ); // ?
alert( `Hola ${name}` ); // ?

/*
Apareceria hola 1, hola name y hola Peter Parker ya que si ponemos la variable entre "" 
la considera como un string de texto
*/