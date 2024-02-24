const prompt = require("prompt-sync")()
const numeros = []
    //Escolha os 5 numeros usando prompt.sync
    for(let i = 0;i < 5 ; i++) {
       const numero = parseInt(prompt("Digite um numero: "))
       numeros.push(numero)
    }
    //Imprimir no console os 5 numeros escolhidos
    for(let i = 0;i < 5; i++) {
        console.log(`O ${i + 1} numero é ${numeros[i]}`)
    }

    //Exibindos os numeros quadrados escolhidos do array usando o .map 
    const quadrados = numeros.map(numeroatual => numeroatual ** 2)
    
    //Imprimindo o resultado
    console.log(`A raiz quadrada dos numeros é  ${quadrados}`);