document.addEventListener('DOMContentLoaded', function() {
    const contenedorSecundarios = document.getElementById('nav-celeste-opciones').children[0]
    contenedorSecundarios.classList.add('activer')       
    const contenedorPrimarios = document.getElementById('nav-principal-gradiente').children[0]
    contenedorPrimarios.classList.add('activerPrim')      
});

/***** Btns activos *****/

const botonesMenuActivo = document.querySelectorAll('.cabezal-centro a')
console.log(botonesMenuActivo)

botonesMenuActivo.forEach( el => {
    if (el.parentElement.parentElement.classList.contains('nav-principal-gradiente')) {
        el.addEventListener('click', cambiaActivoPrim); 
    } else if (el.parentElement.parentElement.classList.contains('nav-celeste-opciones')) {
        el.addEventListener('click', cambiaActivo); 
    }         
});


function cambiaActivoPrim(evt) {
    evt.stopPropagation(); 
    document.querySelectorAll('.activerPrim').forEach( el => el.classList.remove('activerPrim'));
    const padre = evt.target.parentElement;
    padre.classList.toggle('activerPrim');
}


function cambiaActivo(evt) {
    evt.stopPropagation(); 

    const activasAnterioresPadres = document.querySelectorAll('.activer')
    activasAnterioresPadres.forEach( el => {
        if(el.classList.contains('activer')) {
            el.classList.remove('activer')
        } 
    });

    evt.target.parentElement.classList.toggle('activer');
    
}

/****** Hamburger */

const hamburger = document.getElementById('hamburger');
const navCelesteOpciones = document.getElementById('nav-celeste-opciones');
hamburger.addEventListener('click', () => {
    navCelesteOpciones.classList.toggle('mostrar');
}
);