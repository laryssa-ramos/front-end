function contar(){
    inicio = document.getElementById('inicio')
    fim = document.getElementById('fim')
    passo = document.getElementById('passo')
    resultado = document.getElementById('resultado')

    i = Number(inicio.value)
    f = Number(fim.value)
    p = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       resultado.innerHTML = "<br> IMPOSSÍVEL CONTAR!"

    }else{
            if(p  <= 0){
                window.alert("Passo inválido. Considerando passo 1")

                p = 1

                resultado.innerHTML = `<br>Contando:<br> `
            }

            resultado.innerHTML =`<br>Contando:<br><br>`

            if(i <= f){
                for(var c = i; c <= f; c+= p){
                    resultado.innerHTML += `${c}\u{1F603} `
                }
            }else{
                for(var c = i; c >= f; c-= p){
                    resultado.innerHTML += `${c}\u{1F603} `
            }
        }
    }

}














































// var inicio = 70
// var fim = 7
// var passo = 7


// if(inicio < fim){
//     while(inicio <= fim){
//         console.log(`${inicio}`)

//         inicio = inicio + passo;
//     } 
// }else{
//         while(inicio >= fim){
//             console.log(`${inicio}`)

//             inicio = inicio - passo;
//         }
//     }


   