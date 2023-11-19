const listasDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idDoElementoAudio){
    document.querySelector(idDoElementoAudio).play();
}
for(let contador = 0; contador < listasDeTeclas.length; contador++){

    const teclas = listasDeTeclas[contador];    
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function (){
         tocaSom(idAudio);
    }

    teclas.onkeydown = function (elemento){
        if(elemento.code === 'Space' || elemento.code === 'Enter' || elemento.code === 'NumpadEnter'){
            teclas.classList.add('ativa');
        }
        
    }

    teclas.onkeyup = function (){
        teclas.classList.remove('ativa');
    }
 
}
