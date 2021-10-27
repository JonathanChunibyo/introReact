//desestructuracion de arreglos


const arreglo = ['jefe', 'lider', 'maestro', 'estudiante'];

console.log(arreglo);
console.log(arreglo[2]);

const retornaArreglo = () => {
    return ['AXQW', 1234];
}
const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//tarea
const useState = (valor) => {

    return[valor, ()=>{console.log('Hola mundo')}];
}

const arr= useState('goku');

console.log(arr);

const [nombre, setnombre]= useState('goku');
console.log(nombre);
setnombre();