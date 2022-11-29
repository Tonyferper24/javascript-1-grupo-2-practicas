
//Ejercicio 1

/*
let parametro = [60, 29, 25, 16];
let numMayor = 0;

for(i = 0; i < parametro.length; i++){
    if (parametro[i] > numMayor)
    {
        numMayor = parametro[i];
    }
}

console.log(numMayor);

*/

//Ejercicio 2

/*
let array = [];

function palindromo(string) {
    for (let i = string.length - 1; i >= 0; i--) {
        array.push(string[i]);
}

const invert = array.join("");
    if (invert === string) {
        return "Es un palindromo";
}
else {
    return "No es un palindromo";
}
}
console.log(palindromo("Hola"));
*/

//EJERCICIO 3

/*
function Cont(){
    const array = [
        [1,0,0], 
        [0,1,1],
        [0,1,0],
];
let cantidad = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] == 0){
            cantidad ++
        }
    }
}
return 'Los numeros de ceros son: ' + cantidad
}
console.log(Cont())
*/


//EJERCICIO 4

/*
function NumRepet(num){
    let repet = [];
        for (let i = 0; i < num.length; i++) {
            if (num[i + 1] === num[i]) {
                repet.push(num[i]);
    }
} 
    if(repet.length >= 1){
        return repet;
    }
    else{
        return 'no hay numeros repetidos'
    }
}
console.log(NumRepet([2,5,6,3,6,2,5,10,11]))
*/
