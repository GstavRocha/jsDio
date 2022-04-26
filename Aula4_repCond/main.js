
var jogador1 = prompt("pontos do Jogar 1");
var jogador2 = prompt("Jogador 2");



function muda(texto1, texto2){
    texto1 = parseInt(texto1);
    texto2 = parseInt(texto2);
    while(texto1 < 0 || texto2 < 0){ // pode ser feito com if para ser aceito e poder passar no teste.
        if(texto1 > texto2){
            document.getElementById("saida").innerHTML = `jogador1 fez ${jogador1} pontos`;
            console.log(texto1); 
        }else if(texto1 == texto2){
            document.getElementById("saida").innerHTML = `Ninguem fez pontos pois ${jogador1} e ${jogador2} empataram!!!`;
            console.log(texto1); 
        }else{
            document.getElementById("saida").innerHTML = `jogador1 fez ${jogador2} pontos`;
            console.log(texto2); 
        }
        
        break;   
    
    }
    // testando ternário
    jogador1 != 0 && jogador2 != 0 ? document.getElementById("saida2").innerHTML = parseInt(texto1)+parseInt(texto2)/2: parseInt(texto1) + parseInt(texto2); // deu certo
}
// no getElement tem que ser aspas duplas.

// switch case;
var lista = prompt(" digite um numero");
lista = parseInt(lista);
switch(lista){
    case 1: 
    document.getElementById("saida").innerHTML = `jogador1 fez ${jogador1} switch`;
    break;
    case 2:  
    document.getElementById("saida").innerHTML = `jogador1 fez ${jogador2} switch`;
    break;
    case 3:
    document.getElementById("saida").innerHTML = `jogador1 fez ${jogador1+ jogador2}  switch`;
    break;
    default:
    document.getElementById("saida").innerHTML = `nenhum dos casos`;
    break;


}
muda(jogador1,jogador2);



