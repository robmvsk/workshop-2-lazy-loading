/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import registerImage from './lazy.js';

console.log('Happy hacking :)')

{/*
<div class="p-4">
    <img 
        class = "mx-auto"
        width="320" 
        src="https://randomfox.ca/images/110.jpg" 
        alt="fox"
    />
</div>
*/}

//creando la funcion random, ya que la wweb API de randomfox.ca, solo acepta 122 imagenes
const maximum = 122
const minimum = 1
const imageRandom = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

//crear una imagen
const createImageNode = () => {
    const container = document.createElement('div')
    container.className = "p-4"

    const imagen = document.createElement('img')
    imagen.className = "mx-auto"
    imagen.width = "320"

    //Esta es la linea que hace que una imagen cargue, para aplicar la
    //tecnica de lazy loading, se tiene que cambiar de lugar la carga
    //de la imagen, y solo debe hacer cuando sea visible, aqui no es el lugar correcto
    //---imagen.src = `https://randomfox.ca/images/${imageRandom()}.jpg`

    //utilizaremos la propiedad del DOM llamada dataset, para comunicar informacion
    //entre HTML y javasccript, y que basicamente son atributos personalizados
    //que llevan informacion de html para que javascript pueda tomarla y usarla
    imagen.dataset.src = `https://randomfox.ca/images/${imageRandom()}.jpg`

    container.appendChild(imagen)
    return container
}

//const nuevaImagen = createImageNode()
const mountNode = document.getElementById('images')

const addButton = document.querySelector('button')
//const accion = () => console.log("Hey!")
//addButton.addEventListener('click', accion)

//Agregar imagenes cada vez que presione click en el boton
const addImage = () => {
    const nuevaImagen = createImageNode()
    mountNode.append(nuevaImagen)
    //quiero que se registre para que el Intersection Observer la empiece a observar
    registerImage(nuevaImagen)
}

addButton.addEventListener('click', addImage)

//mountNode.append(nuevaImagen)
