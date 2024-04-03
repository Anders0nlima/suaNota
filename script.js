function CalcularSimple(){
    let linguagem = document.getElementById('linguagem').value.trim();
    let humanas = document.getElementById('humanas').value.trim();
    let natureza = document.getElementById('natureza').value.trim();
    let mate = document.getElementById('mate').value.trim();
    let redação = document.getElementById('redação').value.trim();
    let resultado = document.getElementById('resultado')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(linguagem === '' || humanas === '' || natureza === '' || mate === '' || redação === ''){
       window.alert("preencha todas as lacunas");
       return;
    }

    let ling = Number(linguagem)
    let hum = Number(humanas)
    let nat = Number(natureza)
    let mat = Number(mate)
    let red = Number(redação)

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
    let linguagem = document.getElementById('linguagem').value.trim();
    let humanas = document.getElementById('humanas').value.trim();
    let natureza = document.getElementById('natureza').value.trim();
    let mate = document.getElementById('mate').value.trim();
    let redação = document.getElementById('redação').value.trim();
    let resultadoCota = document.getElementById('resultadoCota')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(linguagem === '' || humanas === '' || natureza === '' || mate === '' || redação === ''){
        window.alert("preencha todas as lacunas");
        return;
     }

     let ling = Number(linguagem)
     let hum = Number(humanas)
     let nat = Number(natureza)
     let mat = Number(mate)
     let red = Number(redação)

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