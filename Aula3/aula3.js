//Array e Object
let array = ['lucky', 'Cocada', 'Gustavo', 'Dany', 'Deby'];
// os valores podem ser d qualquer valor; exempolo.     
let arraymisto =['gustavo', 37, true, 2.3];
console.log(arraymisto);
console.log(array);
console.log(typeof(array));

// aray dentro de array

let arrayArray= ['Gustav0',1., ['array1'],['array2']];

console.log(arrayArray);
console.log(typeof(arrayArray));

//acessando indice

console.log(arrayArray[1]);
// for each
arraymisto.forEach(function(item, index){ console.log(item,index)});
array.push('COCO');
console.log(array); 
// parei aula 3 em 6min e 34;
array.splice(0,3)
console.log(array)

//slice ele diminui fatia o array
novoArray = array.slice(0,3);

//Objetos são dados que possuem propriedades e valores que definem suas características.
// todo objeto deve ser declarado entre chaves.
// Desestruturação: As propriedades de objetos podem  ser atribuidas às variáveis, a isso chama-se desestruturação.
var xicara = {
    cor: 'azul',
    tamanho: 'p',
    // funcao:tomarCafe()
}

// como são manipuladas?
var cor = xicara.cor;
var tamanho = xicara.tamanho;
// var funcao = tomarCafe('teste');

console.log(xicara);

// outra forma de desestruturar

var {cor} = xicara;
console.log(cor);