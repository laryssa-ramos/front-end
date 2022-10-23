console.log('-------------------------Ex1-------------------')

function parimpar(n){
    if(n%2 == 0){
        return 'O número é par!'
    } else{
        return 'O número é ímpar!'
    }
}

// let res = parimpar (4)
// console.log(res)

console.log(parimpar(37))

console.log('\n-------------------------Ex2-------------------')

// function soma (n1, n2)

function soma (n1=0, n2=0){
    return n1 + n2
}

console.log(`O resultado é ${soma(2, 5)}`)

console.log('\n-------------------------Ex3-------------------')

let v = function(x){
    return x*2
}

console.log(`O resultado é ${v(5)}`)

console.log('\n-------------------------Ex4-------------------')

function fatorial(n){
    let fat = 1

    for(let c = n; c > 1; c--){
        fat *= c
    }

    return fat    
}

console.log(`O fatorial é ${fatorial(5)}`)

console.log('\n-------------------------Ex5-------------------')

function fatorial (n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(`Fatorial de forma recursiva ${fatorial(4)}\n`)