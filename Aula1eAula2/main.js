// tipoes de variaveis

let num = 1;
let flo = 2.3;
let bool = true;
let abc = 'nome';
console.log(typeof(num),typeof(flo),typeof(bool),typeof(abc))

let nome = 'gustavo';
console.log(nome);
  nome = 'Rocha';
console.log(nome )

const constant= 0;
console.log(constant);

// Escopo local e Global

var escopoGlobal = 'Global';
function escopoLocal(){
    let escopoLocal = 'Local';
    console.log(escopoLocal);
}

console.log(escopoGlobal);
escopoLocal();

// operadores aritmeticos

let soma = 1+2;
let mult = 2*5;
let sub  = 10 -1;
let div = 10 /5;
let modulo  = 10 %3;
let poten = 2**3;
console.log(soma,mult,sub,div,modulo,poten);

// operadores logicos

let log = 1 > 3;
let log2 = 5==5;
let log4 = 5 < 10;
let log5 = 1 >= 3;
let log6 = 5!=5;
let log7 = 5 <= 10;
console.log(log,log2,log4,log5,log6,log7);

// ope logicos 

let se_ = 11 == 11 && 22 != 23;
let ou_ = 22 > 3 || 6 <1;

console.log(se_,ou_)

let valor = true && false;
console.log(valor)

let verdade= !false;
console.log(verdade);

console.log('teste');
