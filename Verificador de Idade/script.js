function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
       //res.innerHTML = `Idade calculada: ${idade} anos` TESTEEEEE
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked) {
           genero = "Homem"
           if( idade >= 0 && idade < 10) {
               //Criança
               img.setAttribute('src', 'img/criancamenino.jpg')
           } else if (idade < 21){
               //jovem
               img.setAttribute('src', 'img/jovemmenino.jpg')
           }else if(idade < 60){
               //adulto
               img.setAttribute('src', 'img/adultohomem.jpg')
           }else {
               //idoso
               img.setAttribute('src', 'img/idosohomem.jpg')
           }
           

       }else if(fsex[1].checked) {
           genero = 'Mulher'
        if( idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'img/criancamenina.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'img/jovemmenina.jpg')
        }else if(idade < 60){
            //adulto
            img.setAttribute('src', 'img/adultamulher.jpg')
        }else {
            //idoso
            img.setAttribute('src', 'img/idosamulher.jpg')
        }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}