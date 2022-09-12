let numeros = []
let result = window.document.getElementById('res') 

function adicionar(){
    let inputNum = window.document.getElementById('num')
    let numInput = Number(inputNum.value)
    let select = window.document.getElementById('sel')

    if(inputNum.value.length == 0){
        window.alert('[Erro] Insira um valor no input')
    }else if(numInput < 1 || numInput > 100){
        window.alert('[Erro] Insira um valor entre 1 e 100')
    }else if(numeros.indexOf(numInput) != -1){
        window.alert(`O número ${numInput} já está na lista`)
    }else{
        numeros.push(numInput)
        let opt = window.document.createElement('option')
        opt.text = `Valor ${numInput} adicionado`
        opt.value = `opt${numeros.length}`
        select.appendChild(opt)
        result.innerHTML = ''
    }
    inputNum.value = ''
    inputNum.focus()
}

function finalizar(){
    if(numeros.length == 0){
        window.alert('Insira valores antes de finalizar')
    }else{
        let totalNum = numeros.length
        let maiorNum = numeros[0]
        let menorNum = numeros[0]

        result.innerHTML = ''
        result.innerHTML += `Ao todo, temos ${totalNum} cadastrados </br>`
        result.innerHTML += `O maior valor informado foi ${maiorN(maiorNum, numeros)} </br>`
        result.innerHTML += `O menor valor informado foi ${menorN(menorNum, numeros)} </br>`
        result.innerHTML += `Somando todos os valores, temos ${somar(numeros)} </br>`
        result.innerHTML += `A média dos valores digitados é: ${somar(numeros)/numeros.length}`

    }
}

function somar(nArray){
    var soma = 0
    for(let c = 0; c < nArray.length; c++){
        soma += nArray[c]
    }
    return soma
}

function maiorN(maior = 0, numArray){
    for(let pos in numArray){
        if(numArray[pos] > maior){
            maior = numArray[pos]
        }
    }
    return maior
}

function menorN(menor = 0, numArray){
    for(let pos in numArray){
        if(numArray[pos] < menor){
            menor = numArray[pos]
        }
    }
    return menor
}
