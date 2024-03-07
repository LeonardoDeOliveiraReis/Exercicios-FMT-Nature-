function saveKeyfromLocalStorage(){
    let name = prompt("Digite o seu nome: ");
    let idade = prompt("Digite a sua idade: ");
    let email = prompt("Digite o seu email: ");
    let user = {'name': name, 'age' : idade, 'email': email}
       localStorage.setItem('user', JSON.stringify(user))
}