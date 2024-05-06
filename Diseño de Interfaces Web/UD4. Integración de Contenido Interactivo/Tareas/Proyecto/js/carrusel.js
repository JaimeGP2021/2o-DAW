const grande    =document.querySelector('.grande')
const punto     =document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos ehcho CLICK

punto.forEach( (cadaPunto, i)=> {
    punto [i].addEventListener('click', ()=>{
        let posicion = i
        let operacion = posicion * (-(100/3)) //100% entre el número de imágenes

        grande.style.transform = `translateX(${ operacion }% )`

        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
});
