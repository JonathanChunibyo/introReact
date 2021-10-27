//funciones

const saludo = function (nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludo('Jonathelo'));

const saludo2 = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(saludo2('Juancho'));

const saludo3 = (nombre) => `Hola, ${nombre}`;

console.log(saludo3('Miguel'));

const getUser = () => ({
    uid: 'ABCD1',
    name: 'ElseñorPioPio'
});

const user = getUser();
console.log(user);

//TAREA



//funcion de flecha 
const getUsuarioActivo = (nombre) => ({
    uid: 'ABCD2',
    name: nombre
});

console.log(getUsuarioActivo('rikka'));

//retornar objeto implicito
