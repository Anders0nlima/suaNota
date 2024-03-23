function CalcularSimple(){
    let linguagem = document.getElementById('linguagem')
    let humanas = document.getElementById('humanas')
    let natureza = document.getElementById('natureza')
    let mate = document.getElementById('mate')
    let redação = document.getElementById('redação')
    let resultado = document.getElementById('resultado')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    let ling = Number(linguagem.value)
    let hum = Number(humanas.value)
    let nat = Number(natureza.value)
    let mat = Number(mate.value)
    let red = Number(redação.value)

    let media = ((ling + hum + nat + mat + red) / 5)

       
    if(media <= 560){
        resultado.innerHTML = `Sua média simples é: ${media.toFixed(2)}`
        img.setAttribute('src', 'img/imagemBaixa.jpg')
    } else if (media <= 660){
        resultado.innerHTML = `Sua média simples é: ${media.toFixed(2)}`
        img.setAttribute('src', 'img/imagemRuim.jpg')
    } else if (media <= 760){
        resultado.innerHTML = `Sua média simples é: ${media.toFixed(2)}`
        img.setAttribute('src', 'img/imagemModerada.jpg')
    } else {
        resultado.innerHTML = `Sua média simples é: ${media.toFixed(2)}`
        img.setAttribute('src', 'img/imagemBoa.jpg')
    }
resultado.style.textAlign = 'center'
resultado.appendChild(img)
    
}

function CalcularCota(){
    let linguagem = document.getElementById('linguagem')
    let humanas = document.getElementById('humanas')
    let natureza = document.getElementById('natureza')
    let mate = document.getElementById('mate')
    let redação = document.getElementById('redação')
    let resultadoCota = document.getElementById('resultadoCota')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    let ling = Number(linguagem.value)
    let hum = Number(humanas.value)
    let nat = Number(natureza.value)
    let mat = Number(mate.value)
    let red = Number(redação.value)

    let media = ((ling + hum + nat + mat + red) / 5) * (1.1)
     
    if(media <= 560){
        resultadoCota.innerHTML = `Sua média, com cota nortista, é: ${media.toFixed(2)}`
        img.setAttribute('src', 'img/imagemBaixa.jpg')
    } else if (media <= 660){
        resultadoCota.innerHTML = `Sua média, com cota nortista, é: ${media.toFixed(2)}`
        img.setAttribute('src', 'img/imagemRuim.jpg')
    } else if (media <= 760){
        resultadoCota.innerHTML = `Sua média, com cota nortista, é: ${media.toFixed(2)}`
        img.setAttribute('src', 'img/imagemModerada.jpg')
    } else {
        resultadoCota.innerHTML = `Sua média, com cota nortista, é: ${media.toFixed(2)}`
        img.setAttribute('src', 'img/imagemBoa.jpg')
    }
resultadoCota.style.textAlign = 'center'
resultadoCota.appendChild(img)
    

}