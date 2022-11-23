// Variables
const formulario = document.querySelector('#formulario');
const listaIdeas = document.querySelector('#lista-ideas');
let ideas = [];

// Event Listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarIdea);
}

// Funciones
function agregarIdea(e){
   e.preventDefault();

    const idea = document.querySelector('#idea').value;
if(idea===""){
   mostrarError('Este campo no puede ir vacio');
    return; //Evita que se ejecuten mas lines de codigo
}
}


//Mostrar mensaje de error

function mostrarError(error){

    const errorPrevio = document.querySelector(".error");
    if(errorPrevio){
        return;
    }

    const mensajeError = document.createElement('p');

    

    mensajeError.textContent = error;

    mensajeError.classList.add('error')


    

    //insertar en el contenido

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Eliminar la alerta despues de 2 segundos
        setTimeout(() =>{
            mensajeError.remove();
        }, 2000);

}