function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 18){
                //Crianca
                img.setAttribute('src', 'images/crianca-m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'images/adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'images/idoso-m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 18){
                //Crianca
                img.setAttribute('src', 'images/crianca-f.png')
            }else if(idade < 50){
                img.setAttribute('src', 'images/adulto-f.png')
                //Adulto
            }else{
                //Idoso
                img.setAttribute('src', 'images/idosa-f.png')
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}