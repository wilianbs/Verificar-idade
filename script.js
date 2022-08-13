function verificar(){

  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if ( fano.value.length == 0 || Number(fano.value) > ano){
      alert('[ERRO] Verifique os dados e tente novamente!!!')
  }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
       if (fsex[0].checked){
            genero = 'Homen'
            if(idade >=0 && idade <10){
                //bebe
                img.setAttribute( 'src', 'bebe-h.png')
            }else if ( idade < 21){
                // jovem
                img.setAttribute( 'src', 'menino-h.png')
            }else if (idade < 50){
                //aduto
                img.setAttribute( 'src', 'adulto-h.png')
            }else {
                //idoso
                img.setAttribute( 'src', 'idoso-h.png')
            }
           
      } else if (fsex[1].checked){
           genero = 'Mulher'
           if(idade >=0 && idade <10){
            //bebe
            img.setAttribute( 'src', 'bebe-m.png')
        }else if ( idade < 21){
            // jovem
            img.setAttribute( 'src', 'menina-m.png')
        }else if (idade < 50){
            //aduto
            img.setAttribute( 'src', 'adulto-m.png')
        }else {
            //idoso
            img.setAttribute( 'src', 'idosa-m.png')
        }
          
        }
            
        
    }
        res.style.textAlign='center'   
        res.innerHTML=` Detectamos ${genero} com ${idade} anos`
        res. appendChild(img)

}