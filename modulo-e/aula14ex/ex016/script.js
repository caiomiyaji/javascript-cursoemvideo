function contar(){
var inpIni = window.document.getElementById('inicio')
var inpFim = window.document.getElementById('fim')
var inpPas = window.document.getElementById('passo')
var msg = window.document.getElementById('msg')

var ini = Number(inpIni.value)
var fim = Number(inpFim.value)
var pas = Number(inpPas.value)
msg.innerHTML = 'Contando...</br>'

if(pas > 0 && ini < fim){
while (ini <= fim){
    msg.innerHTML += (`${ini} - `)
    ini += pas
}
}else if(pas > 0 && ini >= fim){
    while (ini >= fim){
        msg.innerHTML += (`${ini} - `)
        ini -= pas
    }
}else{
    window.alert(`[Erro] O passo precisa ser maior que ${pas}`)
}

} 
