async function getAddress() {
    let enderecoArmazenado = localStorage.getItem("endereco")
    if (enderecoArmazenado) {
        let confirmarNovaRequisicao = confirm("Já existe um endereço na nossa base de dados. Deseja fazer uma nova requisição para um novo endereço?")
            if (!confirmarNovaRequisicao) {
                return
            }
    }
    let cep = prompt("Digite o seu CEP: ")
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let data = await response.json()
   
    if (data.erro) {
        alert('CEP não encontrado')
    } else {
        let address = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`
        alert(address)
        if (confirm("Seus dados estão corretos?")) {
            localStorage.setItem("endereco", JSON.stringify(data))
        }
    }
}
getAddress()
