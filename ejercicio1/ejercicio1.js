/** Ejercicio #1
 *  Crear un algoritmo que calcule el precio final de un producto, teniendo
 *  en cuenta el iva del 19%, el usuario debe ingresar el valor del producto
 *  sin iva y el algoritmo debe retornar el valor final.
 */

let valor = Number(prompt("Ingrese el precio:"));
let iva = 19;
let valorFinal = (valor * (iva/100)) + valor;

document.write("Tiene un valor de: " + valorFinal)