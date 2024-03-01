async function UserInfo() {
  let oldUserInfo = await getUserInfo();
  console.log(oldUserInfo)
  let name = prompt("Digite o seu nome: ")
  let age = prompt("Digite a sua idade: ")
  let email = prompt("Digite o seu email: ")
  let user = {'nome':name, 'idade': age, 'email':email }
    localStorage.setItem('user', JSON.stringify(user))
    }

async function getUserInfo() {
    return new Promise(resolve => {
        setTimeout(()=>{
            let user = JSON.parse(localStorage.getItem('user'))
            if (user === null) {
                console.log('Nenhum usuário encontrado no localStorage.')
        }
        resolve(user)
        },2000)

    })
   
   
}
    