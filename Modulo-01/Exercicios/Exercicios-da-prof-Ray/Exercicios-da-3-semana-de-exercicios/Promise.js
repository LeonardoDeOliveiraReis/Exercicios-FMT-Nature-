const array = [2, 4, 6, 8, 10]

const promise = new Promise((resolve, reject) => {
    const ePar = array.every(num => num % 2 === 0);
    if (ePar) {
        resolve("Números validado é par");
    } else {
        reject("Error: número informado é impar")
    }
});

promise
.then(mensagem => console.log(mensagem))
.catch(erro => console.log(new Error(erro)))