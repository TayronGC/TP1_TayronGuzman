//Valor de phi
const phi = (1 + Math.sqrt(5)) / 2;

//Crear una interfaz con readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Obtener el numero introducido por el usuario
rl.question('Type an integer from 2 to 45: ', (num) =>{
    if(num >= 2 && num <= 45) {
        imprimirInfo(num)
    }else{
        console.log("Invalide Number");
    }
    rl.close();
});

// console.log("Valor de fibo 5", calcularFibo(5));

function calcularFibo(numero){
    let actual;
    let penultimo = 0;
    let ultimo = 1;
    let fib = [];

    for (let index = 0; index <= numero; index++) {
        //Añadir el numero al array
        fib.push(penultimo);
        // console.log("fib es: ", fib[index]);
        actual = penultimo + ultimo;
        penultimo = ultimo;
        ultimo = actual;
    }
    //return fib[numero]
    return fib;
}


//console.log("Phi ~ ",phi);

function imprimirInfo(num){
    //Imprimir Phi
    console.log("Phi ~ ",phi,"\n");

    //llamado a calculoFibo y asignacion a la const secu
    const secu = calcularFibo(num);

    for (let index = 2; index < secu.length; index++) {
        let divi = secu[index] / secu[index -1];
        let difeConPhi = Math.abs(divi - phi);
        // console.log(`Fib(${index}) / Fib(${index-1}) = ${secu[index] / secu[index -1]}`)
        console.log(`Fib(${index}) / Fib(${index-1}) ~ ${divi} [+- ${difeConPhi}]`)
    // console.log("Punto 2 = ", secu[index] / secu[index -1]);
}

    console.log(`\nFib(${num}) = ${secu[num]}`);
    console.log(`Fib(${num-1}) = ${secu[num-1]}`);
}


//imprimirInfo(5);

