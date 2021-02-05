/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import registerImage, { limpiarReporte } from './lazy.js';
import onConnectionChange from './infoNetwork.js';

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
    container.className = "p-1 py-1 mt-6 bg-green-300 rounded-md mx-auto lds-hourglass"

    const imagen = document.createElement('img')
    imagen.className = "mx-auto rounded-md"
    imagen.width = "320"
    imagen.Height = "100"

    //Hace un wrapper para que muestre el cuadro gris de pre-carga
    //ya no se requiere porque la clase lds-hourglass, 
    //incluye estas 3 instrucciones pero en CSS
        //container.style.minHeight = "100px";
        //container.style.minWidth = "320px";
        //container.style.display = "inline-block";


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

const addButton = document.getElementById('agregarImagen')
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

//boton de limpiar imagenes
//otr forma: const clean = document.querySelector("button[type='reset']");
const cleanButton = document.getElementById('limpiarImagen')
//evento para limpiar las imagenes que existan
const cleanImage = () => {
    const nodoImagenes = document.getElementById('images')
    nodoImagenes.innerHTML = ""
    limpiarReporte()  //reinicia las variables contadores de toal de imagenes y total de imagenes cargadas
}

cleanButton.addEventListener('click', cleanImage)

navigator.connection.addEventListener('change', onConnectionChange)

const verConexionButton = document.getElementById('network')
verConexionButton.addEventListener('click', onConnectionChange)
