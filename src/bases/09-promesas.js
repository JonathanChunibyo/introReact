//promesa
import { heroeID2 } from '../bases/08-imp-exp';




const HeroeIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const heroe = heroeID2(id);
            if (heroe) {
                resolve(heroe);
            }else{
                reject('No se encontro el heroe');
            }
        }, 2000)
    });
}

HeroeIdAsync(1)
.then( console.log )
.catch(err => console.warn(err));

//otra manera de catch donde toma el primer argumento
// .catch(console.warn);