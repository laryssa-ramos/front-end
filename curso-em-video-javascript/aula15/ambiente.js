console.log(`----------PARTE 1---------`)

let num = [5,8,2,9,3]

//num[9] = 4

num.push(7) //cria-se um espaço no final do vetor e acrecenta o número

num.sort() // ordena os números


console.log(`Esse vetor tem ${num.length} espaços`)

console.log(`Os números nos vetores são: ${num}`)

console.log(`----------PARTE 2---------`)

let valores = [8,1,7,4,2,9]


console.log(valores)

// for(let pos = 0; pos < valores.length; pos ++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
}

console.log(`----------PARTE 3---------`)

var n = [5, 8, 2, 9, 3]

n.push(1)
n.sort
console.log (n)
console.log(`O vetor tem ${n.length} posições.`)
console.log(`O primeiro valor do vetor é ${n[0]}`)

var pos = n.indexOf(6)

if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else {
    console.log(`O valor está na posição ${pos}`)
}