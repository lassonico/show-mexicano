document.addEventListener('DOMContentLoaded' , function(){
 iniciarApp()
})

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.navegacion');
const enlacesa = document.querySelectorAll('.navegacion a');
const barras = document.querySelectorAll('.ham span');

function iniciarApp(){
    btnham();
    navegar();
    creargaleria();
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
        enlaces.classList.toggle('active');
        ham.classList.toggle('activ')
        barras.forEach(barra => {barra.classList.toggle('animado') })
        })
    })
}


function creargaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1 ; i <= 12 ; i++){
        const imagen = document.createElement('PICTURE');
        imagen.innerHTML = `
            <source srcset="build/img/tumb/${i}.avif" type="image/avif">
            <source srcset="build/img/tumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="100" src="build/img/tumb/${i}.jpg" alt="Imgane galeria">
        `;

        galeria.appendChild(imagen)
    } 
}