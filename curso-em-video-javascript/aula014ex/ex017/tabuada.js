function tabuada(){
         var num = document.getElementById('num')
         var tab = document.getElementById('seltab')
         var n = Number(num.value)
         var c = 1
         if(num.value.length == 0){
                 window.alert('Por favor, digite um número!')
         }else{
                 tab.innerHTML = ''
                 while (c <= 10) {
                         var item = document.createElement('option')
                         item.text = `${n} x ${c} = ${n*c}`
                         item.value = `tab${c}`
                         tab.appendChild(item)
                         c++
                 }
         }
 }


var body = document.getElementById('body')      
var button = document.getElementById('button')
var colors = ['red', 'black', 'yellow','blue', 'orange', 'pink', 'green','violet', 'brown']

button.addEventListener('click', cor)

function cor(){

        var randomColor = colors[Math.floor(Math.random()*colors.length)]

        body.style.background = randomColor
}
