// window.onload = () =>{
//     const header = document.getElementById("container-header")
//     const main = document.getElementById("container-main")
//     const box = main.getBoundingClientRect();
//     if(box.top < window.innerHeight && box.bottom >= 0){
//         header.style.display = "none"
//     }else{
//         header.style.display = "flex"
//     }
// }

// window.onscroll{
//     if(box.top < window.innerHeight && box.bottom >= 0){
//         header.style.display = "flex"
//     }else{
//         header.style.display = "none"
//     }
// }


let scrollPrevio = window.scrollY;
window.onscroll = () => {
    const header = document.getElementById("container-header");
    let scrollActual = window.scrollY;

    if (scrollPrevio > scrollActual){
        header.style.top = "0";
    } else {
        header.style.top = "-20%";
    };
    scrollPrevio = scrollActual;
};

const logoHeader = document.getElementById("header-img");

logoHeader.onclick = () => open("#", "_self")


// función para el typewriter effect
// referir a https://safi.me.uk/typewriterjs/ para la documentación con los parametros disponibles

let mainType = document.getElementById('main-type');

let typewriter = new Typewriter(mainType, {
    loop: true,
    cursor: "",
    delay: 75,
});

typewriter.typeString('lenguajes')
    .pauseFor(500)
    .deleteAll()
    .typeString('manos')
    .pauseFor(450)
    .deleteAll()
    .typeString('pensamientos')
    .pauseFor(450)
    .deleteAll()
    .typeString('formas de pensar')
    .pauseFor(450)
    .deleteChars(6)
    .typeString('jugar')
    .pauseFor(450)
    .deleteChars(5)
    .typeString('hablar')
    .pauseFor(450)
    .deleteChars(6)
    .typeString('amar')
    .pauseFor(450)
    .deleteAll()
    .typeString('alegrías')
    .pauseFor(450)
    .deleteAll()
    .typeString('siempre!')
    .pauseFor(1250)
    .deleteAll()
    .start();

// Redirecciones de iconos - footer

const iconFacebook = document.getElementById("icon-facebook")
const iconInstagram = document.getElementById("icon-instagram")
const iconGoogleMaps = document.getElementById("icon-gmaps")
const footerLogo = document.getElementById("footer-img")

iconFacebook.addEventListener("click", () => open("https://www.facebook.com/LorisMDulceC", ""))

iconInstagram.addEventListener("click", () => open("https://www.instagram.com/lorismdulcec/", ""))

iconGoogleMaps.addEventListener("click", () => open("https://g.page/LorisMDulceC?share", ""))

footerLogo.addEventListener("click", () => open("#", "_self"))