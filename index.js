// Función para que el header se esconda/aparezca

let scrollPrevio = window.scrollY;

window.onscroll = () => {
    let header = document.getElementById("container-header");
    let scrollActual = window.scrollY;

    if (scrollPrevio > scrollActual) {
        header.style.top = "0";
    } else {
        header.style.top = "-20%";
    }
    scrollPrevio = scrollActual;
};

// Redirecciones

const imageHeader = document.getElementById("header-img");

const imageFooter = document.getElementById("footer-img");


imageHeader.onclick = () => open("#", "_self")

imageFooter.onclick = () => open("#", "_self")


// redirecciones de íconos footer-media

const facebookRedirect = document.getElementById("footer-facebook");

const instagramRedirect = document.getElementById("footer-instagram");

const gMapsRedirect = document.getElementById("footer-gmaps");

facebookRedirect.onclick = () => open("https://www.facebook.com/LorisMDulceC")

instagramRedirect.onclick = () => open("https://www.instagram.com/lorismdulcec/")

gMapsRedirect.onclick = () => open("https://g.page/jardinInfantes?share")