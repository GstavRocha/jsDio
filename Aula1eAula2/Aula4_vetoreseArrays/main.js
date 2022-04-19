/* vetores são um tipo de lista, ou matriz de variáveis, onde cada
variávle possui um indice. Os valores são de vários tipos. 
*/
var vetor = [" texto", 1, 2, true];

function printaVetor(muda){
    document.getElementsByTagName('h1').innerHTML = muda;

};

printaVetor(this.vetor[0]);

console.log(vetor.length);

