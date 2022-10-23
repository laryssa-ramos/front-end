let num = document.querySelector('input#fnum') //número que será analisado e adicionado
let lista = document.querySelector('select#flista')//local onde irá aparecer os números
let res = document.querySelector('div#res')//local onde irá aparecer as análises
let valores = [] // vetor onde será amarzenado os números

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
} //função para verificar se o número é maior ou igual a 1 ou menor ou igual a 100

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true

    } else{
        return false
    }
}//função para verificar se o número já está na lista

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){//analisa o número de 1 a 100 e se já foi adicionado. Só vai adicionar se os dois forem verdade
        valores.push(Number(num.value))//irá adicionar o número no vetor
        let item = document.createElement('option')//cria o option para adicionar ao select
        item.text = `Valor  ${num.value} adicionado`//o option recebe uma string
        lista.appendChild(item) //adiciona o que está na variável item no que está na variável lista
        res.innerHTML = ''//limpa a div res sempre que é apertado o botão adicionar
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''// limpa o espaço sempre que o botão é apertado
    num.focus() //matém o cursor no espaço

}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!') // analisa se o espaço está vazio
    }else{
        let total = valores.length // total recebe o tamanho do vetor
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]
            
            if(valores[pos] < menor)
                menor = valores[pos]        

        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}