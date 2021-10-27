
const nombre   = 'Jonathan Adonay';
const apellido = 'Rubio Jimenez';

const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto2 = ` ${nombre} ${apellido} `;

console.log(nombreCompleto);
console.log(nombreCompleto2);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}
console.log(`mezcla texto: ${getSaludo(nombre)} es un placer`)