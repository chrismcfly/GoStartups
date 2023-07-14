//BOTON MENU HAMBURGUESA
const botonMenu = document.getElementById('botonBars');
const menuMovil = document.querySelector('.nav-menu');

botonMenu.addEventListener('click', ()=>{
    menuMovil.classList.toggle('nav-menu-show');
});

//SLIDER PAGINA WEB
const imagenesSlider = ['img/slider-img/slider1.jpg', 'img/slider-img/slider2.jpg', 'img/slider-img/slider3.jpg'];
let index = 0;

function Delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function cambiarImagenes() {
    const sliderImagenes = document.getElementById('imagenes-slider');
    sliderImagenes.style.opacity = "0";
    

    const nextImage = new Image();
    nextImage.src = imagenesSlider[index];

    await nextImage.decode();
    await Delay(1000);
    sliderImagenes.src = nextImage.src;

    await Delay(1000);

    sliderImagenes.style.opacity = "1";
    index = (index + 1) % imagenesSlider.length;

    await Delay(5000);
    cambiarImagenes();
};

cambiarImagenes();

