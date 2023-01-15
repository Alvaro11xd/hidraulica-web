let indice = 1; //VARIABLE PARA INICIAR EN LA PRIMERA IMAGEN
muestraSlides(indice); //FUNCION PARA MOSTRAR LOS SLIDES

// FUNCION PARA AVANZAR SLIDER DE UNO EN UNO
function avanzaSlide(n){
    muestraSlides(indice += n);
}

// FUNCION PARA IR A LA POSICION DE MI SLIDER
function posicionSlide(n){
    muestraSlides(indice = n)
}

// FUNCTION PARA QUE EL SLIDER AVANCE DE ACUERDO UN INTERVALO DE TIEMPO
// setInterval(function(){
//     muestraSlides(indice += 1)
// }, 4000)

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('mySlider');
    let barras = document.getElementsByClassName('barra');

    // SI LA POSICION DE MI SLIDER ES MAYOR A LA CANTIDAD DE SLIDER,
    // ENTONCES REGRESAME AL PRIMER SLIDER
    if(n > slides.length){
        indice = 1;
    }
    // SI LA POSICION DE MI SLIDER ES MENOR A LA CANTIDAD DE SLIDER,
    // ENTONCES REGRESAME AL ULTIMO SLIDER
    if(n < 1){
        indice = slides.length;
    }
    // ITERAMOS CADA SLIDER PARA DESAPARECERLO CONFORME AVANZA
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    // ITERAMOS CADA BARRA PARA PINTARLA DE COLOR CONFORME AL SLIDER
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    // PINTAR DE COLOR LA BARRA Y MOSTRAR SI RETROCEDE
    slides[indice - 1].style.display = 'block';
    barras[indice - 1].className += ' active';
}