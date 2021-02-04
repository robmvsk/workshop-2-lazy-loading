
const isIntersecting = (entry) => {
    //podemos hacer algo asi: si estas a 200px lejos de la pantalla -- X, Y has algo
    return entry.isIntersecting  //true: visible dentro de la pantalla
}

const accion = (entry) =>  {
    const nodo = entry.target  //IMPORTANTE: es la imagen o es el contenedor div? es el contenedor (div)
    
    const imagen = nodo.firstChild  //nodo.querySelector('img')
    const url = imagen.dataset.src
    
    //ahora si se realiza la carga real de la imagen
    imagen.src = url

    //debugger;

    //accion a realizar, en este caso mostrar el mensaje
    console.log(`hey imagen! ya te estoy observando. nodo.nodeName: ${nodo.nodeName}`)

    //1era forma: que le pasaramos al lazy loading la imagen a cargar
    //imagen.src = `https://randomfox.ca/images/${imageRandom()}.jpg`

    //des-registrar la imagen (unlisten) ya no la observes
    //una vez cargada la imagen ya no debe volver a cargarla nuevamente, 
    //porque solo es ncesario cargarla una unica vez
    observer.unobserve(nodo)  //y ahora si, si hace scroll hacia arriba o hacia abajo tantas veces, solo la 1era vez carga y el mensaje solo se imprime una sola vez
}

//const observer = new IntersectionObserver(funcionQueHacerPorCadaImagen)
const observer = new IntersectionObserver( (entries) => {
    //entries, son todos los elementos que el Obserer esta observando y verificando si so o no visibles
    entries
        .filter(isIntersecting)  //queremos saber si hay una interseccion con el viewport
        .forEach(accion)  //y por cada elemento que este dentro del viewport o dentro de la pantalla haremos algo
})

//funcion para registrar una imagen
//le va a indicar al observador que observe la imagen que esta recibiendo y la escuche
const registerImage = (image) => {
    //Intersection Observer --> observer (imagen)
    observer.observe(image)

}

export default registerImage;