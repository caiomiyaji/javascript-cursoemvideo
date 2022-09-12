
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.scr = 'images/manha.png'
        document.body.style.background = '#F7BE88'
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'images/tarde.png'
        document.body.style.background = '#965E4D'
    }else{
        //Boa noite
        img.src = 'images/noite.png'
        document.body.style.background = '#0C2752'
    }
}