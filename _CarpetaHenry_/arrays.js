/*
var colores = ['amarillo', 'azul'];
colores.push('rojo');
colores.unshift('verde');
colores.pop()
colores.shift();
console.log(colores);
*/
/* var pintores = ['Picasso','Velazquez','Van Gogh', 'Dali'];
var incluyeDali = pintores.includes('Monet');
console.log(incluyeDali); */

var numeros = [10, 6, 8, 9];
var cumplenCondicion = numeros.every(num => {
    return num > 5;
});
console.log(cumplenCondicion);