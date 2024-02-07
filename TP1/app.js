
//Seccion Welcome Cambio de Imagen en Main
let imagen = document.getElementById('imagenwelcome');

function mouseOver() {
    imagen.src = "images/imagenmain1.jpg"
};

imagen.addEventListener('mouseover', mouseOver);


function mouseOut() {
    imagen.src = "images/imagenmain.jpg"
};

imagen.addEventListener('mouseout', mouseOut);

//Seccion Features-Slider

let slider = document.querySelector('.features-slider');
let sliderfeatures = document.querySelectorAll('.tarjeta-features');


let index = 0;

function tarjetaSlider(direccion) {
    index += direccion;

    if (index < 0) {
        index = sliderfeatures.length - 1;
    } else if (index >= sliderfeatures.length) {
        index = 0
    }

    let desplazamiento = -index * 560;
    slider.style.transform = `translateX(${desplazamiento}px)`

};

tarjetaSlider(0);


//Seccion Portfolio
let textosabermasjs = document.getElementById('textosabermas');
let botonportfoliojs = document.getElementById('boton');

function verjs(){
textosabermasjs.className = 'versabermas';
botonportfoliojs.className = 'ocultarsabermas';
};

botonportfoliojs.addEventListener('click', verjs);

//Boton Cerrar

cerrarsabermas.addEventListener('click', ()=>{
    textosabermasjs.style.display = 'none'
})

//Boton GitHub

urlgithub.addEventListener('click', respuestaClick)
function respuestaClick(){
   window.location.href = "https://github.com/Githublore";
}




//Seccion Formulario
//Definimos las variables para los valores de los elementos

document.getElementById('contactoform').addEventListener('submit', function (evento) {

    //Para evitar recargar la pagina
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let subjet = document.getElementById('subjet').value;
    let mensaje = document.getElementById('mensaje').value;
    //Respuesta con errores

    if (!nombre || !email || !mensaje) {

        document.getElementById('respuestacontacto').style.color = 'tomato';
        document.getElementById('respuestacontacto').innerText = 'Completar todos los campos';
        return;

    };

    //Respuesta sin errores
    document.getElementById('respuestacontacto').style.color = 'gray';
    document.getElementById('respuestacontacto').innerText = '¡Mensaje enviado con èxito!';


    //campos en blanco del formulario finalizado el envio
    document.getElementById('nombre').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('email').value = "";
    document.getElementById('subjet').value = "";
    document.getElementById('mensaje').value = "";
})

