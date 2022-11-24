// Variables
const formulario = document.querySelector('#formulario');
const listaIdeas = document.querySelector('#lista-ideas');
let ideas = [];

// Event Listeners
eventListeners();

function eventListeners(){

    //Cuando el usuario ag
    formulario.addEventListener('submit', agregarIdea);


    //Cuando el documento esta listo

    document.addEventListener('DOMContentLoaded', () =>{
        ideas = JSON.parse(localStorage.getItem('ideas'))|| []

        console.log(ideas);
        
        crearHTML();

    })
}

// Funciones
function agregarIdea(e){
   e.preventDefault();

   //Text area donde el usuario escribe
    const idea = document.querySelector('#idea').value;
if(idea===""){
   mostrarError('Este campo no puede ir vacio');
    return; //Evita que se ejecuten mas lines de codigo
}
const ideaObj ={
    id: Date.now(), //Utilizamos el metodo Date.now() para asignar un id
    idea
}

//Añadir el arreglo de tweets
ideas = [...ideas, ideaObj];

console.log(ideas)


//Una vez agregado creamos el HTML
crearHTML()


//Reiniciar el formulario
formulario.reset()
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

//Muestra un listado de las ideas

function crearHTML(){
    limpiarHTML()
    if(ideas.length>0){
        ideas.forEach(idea => {
            //Crear el HTML

            const li = document.createElement('li');

            li.textContent = idea.idea

            listaIdeas.appendChild(li);
        })

    }

    sincronizarStorage()
}

//Agrega las ideas al LocalStorage

function sincronizarStorage(){
localStorage.setItem('ideas', JSON.stringify(ideas))
}
//Limpiar HTML

function limpiarHTML(){
    while(listaIdeas.firstChild){
        listaIdeas.removeChild(listaIdeas.firstChild);
    }
}
