document.addEventListener('DOMContentLoaded' , function(){
 iniciarApp()
})

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.navegacion');
const enlacesa = document.querySelectorAll('.navegacion a');
const barras = document.querySelectorAll('.ham span');

function iniciarApp(){
    irArriba();
    btnham();
    navegar();
    creargaleria();
    scrollNav();
    scrollUp();
    btnMeInteresa();
    barraNavBackground();
    msnWhatsApp();
    btnWhatsApp();
}

function btnham(){
    ham.addEventListener('click', () => {
        enlaces.classList.toggle('active');
        ham.classList.toggle('activ')
        barras.forEach(barra => {barra.classList.toggle('animado') })
    })
}
function navegar(){
    enlacesa.forEach(iten=> {iten.addEventListener('click', () => {
        enlaces.classList.remove('active');
        ham.classList.remove('activ')
        barras.forEach(barra => {barra.classList.remove('animado') })
        })
    })
}

function scrollNav(){
    const navegate = document.querySelectorAll('.navegacion a')
    navegate.forEach( enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault()
            const seccionId = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionId);
            seccion.scrollIntoView({ behavior: "smooth" });
        })
    } );
}

function creargaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1 ; i <= 12 ; i++){
        const imagen = document.createElement('PICTURE');
        imagen.innerHTML = `
            <source srcset="build/img/tumb/${i}.avif" type="image/avif">
            <source srcset="build/img/tumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="120" src="build/img/tumb/${i}.jpg" alt="Imgane galeria">
        `;

        imagen.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen)
    } 
}

function mostrarImagen(imagen){
    const imagenmodal = document.createElement('PICTURE');
    imagenmodal.innerHTML = `
        <source srcset="build/img/grandes/${imagen}.avif" type="image/avif">
        <source srcset="build/img/grandes/${imagen}.webp" type="image/webp">
        <img loading="lazy" width="550" height="300" src="build/img/grandes/${imagen}.jpg" alt="Imgane galeria">
    `;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagenmodal);
    overlay.classList.add('overlay');

    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('cerrar');
    cerrarModal.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

function irArriba(){
    const botonUp = document.querySelector('#btnUp');
    botonUp.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        const sec = e.target.attributes.href.value;
        const seccion = document.querySelector(sec);
        seccion.scrollIntoView({ behavior: "smooth" });
    });
}

function btnMeInteresa(){
    const botonM = document.querySelector('.cta');
    botonM.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        const sec = e.target.attributes.href.value;
        const seccion = document.querySelector(sec);
        seccion.scrollIntoView({ behavior: "smooth" });
    });
}

function scrollUp(){
    const boton = document.querySelector('.btnup');
    const whatsapp = document.querySelector('.whatsAppBtn');
    const elementoRef = document.querySelector('.referencia');

    window.addEventListener('scroll', function(){
        const punto = elementoRef.getBoundingClientRect().top
        if(punto < 0){
            boton.classList.add('activ');
            whatsapp.classList.add('act');
        }
        if(punto > 0){
            boton.classList.remove('activ');
            whatsapp.classList.remove('act');
        }
    })
}

function barraNavBackground(){
    const barra = document.querySelector('.barra');
    const elementoRef = document.querySelector('.inicio');

    window.addEventListener('scroll', function(){
        const punto = elementoRef.getBoundingClientRect().top;
        if(punto < -30){
            barra.classList.add('bground');
        }
        if(punto > -30){
            barra.classList.remove('bground');
        }
    })
}

function msnWhatsApp(){
    const whatsapp = document.querySelector('.wpp');
    const mensaje = "Hola, estoy interesado en el Mariachi. ¿Me puedes dar más información?"
    const telefono = "18327746762";
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    whatsapp.addEventListener('click', () => {
        window.open(url, "_blank");
    })
}

function btnWhatsApp(){
    const whatsapp = document.querySelector('.whatsAppBtn');
    const mensaje = "Hola, estoy interesado en el Mariachi. ¿Me puedes dar más información?"
    const telefono = "18327746762";
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    whatsapp.addEventListener('click', () => {
        window.open(url, "_blank");
    })
}
