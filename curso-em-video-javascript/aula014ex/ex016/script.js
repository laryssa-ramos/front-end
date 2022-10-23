function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    
  
        if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Faltam dados!")
        resultado.innerHTML = ("<br>Impossível contar!")

        } else{

            if(p  <= 0){
                window.alert("Passo inválido. Considerando passo 1")

                p = 1
            }
            
            resultado.innerHTML = `<br>Contando: `

            if(i < f){

                while(i <= f){
            
                    resultado.innerHTML += `${i}\u{1F603} `
                        i = i + p;
                    }

            }else{
                while(i >= f){
            
                    resultado.innerHTML += `${i}\u{1F603} `
                        i = i - p;
                    }
            }
            resultado.innerHTML +=`\u{2764}`
        }
   
       
    
       

   
  

   
}


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
