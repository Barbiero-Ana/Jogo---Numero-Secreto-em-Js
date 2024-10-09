// Não esqueça-se de sempre formatar o código
//Ou de identar para manter o código limpo e legível
alert("Boas vindas ao jogo do número secreto!");

// O +1 serve para pedir um numero entre 1 e 10 (Math.random() *10 + 1
// Math.random()*100 + 1 - pega numero de 1 a 99
// Math.random() * variável + 1 - > pega do 1 até o numero atribuido a variável
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random()*numeroMaximo + 1);
let tentativas = 1;

console.log(numeroSecreto);
let numero;
console.log("Valor digitado pelo usuário:", numero);

//Quando utilizamos loops com contadores, precisamos garantir que um dia eles cheguem até a condição de parada do loop.
//loop infinito basta decrementá-lo a cada iteração, adicionando a linha contador-- dentro do loop.
//Enquanto o número não for igual ao numero secreto
while (numero != numeroSecreto) {
    numero = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //Console.log para verificar a comparação entre os valores distintos ou iguais
    console.log("A comparação será: ", numero == numeroSecreto);

    // Se o número for igual ao número secreto -> Win
    // O break servirá para caso o número secreto seja acertado
    // Ele interrompe o While
    if (numero == numeroSecreto) {
        break
    }
    //Se o número não for igual ao número secreto -> Lose
    else {
        if (numero > numeroSecreto) {
            alert(`O número secreto é menor que ${numero} `);

        }
        else {
            alert(`O número secreto é maior que ${numero}`);
        }
         //tentativas = tentativas +1;
    tentativas++;
}
    }
//Operador Ternário
    let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
    alert(`Isso! Você acertou o Número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);










