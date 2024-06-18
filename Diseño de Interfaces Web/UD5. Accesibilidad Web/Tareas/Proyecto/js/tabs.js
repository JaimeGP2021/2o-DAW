const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')

//CLiCK en li
    //TODOS .li quitar clase activo
    //TODOS .bloque quitar clase activo
    //.li con la posicion clicada añadimos clase activo
    //.bloque con la posicion clicada añadimos clase activo

li.forEach( (cadaLi, i)=>{
    li[i].addEventListener('mouseover', ()=>{
        
        li.forEach( (cadaLi, i)=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

        li[i].classList.add('activo')
        bloque[i].classList.add('activo')

    })
})
