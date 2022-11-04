// función para crear popup al cargar la página
const popup = () => {
    const containerPopup = document.createElement("article");
    containerPopup.setAttribute("id", "container-popup");
    containerPopup.classList.add("popup-on");
    containerPopup.innerHTML = `
        <img src="assets/popup-image.png" alt="" id="img-popup" draggable="false">
        <article id="popup">
        <h3 id="heading-popup">${isItalian ? "Pensiamo alla tua esperienza❤️." : "Pensamos en tu experiencia❤️."}</h3>
        <span id="text-popup">${isItalian ? "Vuoi vedere il sito in italiano?" : "¿Deseas ver el sitio en español?"}</span >
        <div id="container-btn-popup">
            <button id="close-popup" class="btn-popup">${isItalian ? "No grazie" : "No gracias"}</button>
            <button id="agree-popup" class="btn-popup">${isItalian ? "Cambia lingua" : "Cambiar idioma"}</button>
        </div>
        </article>
    `;

    const main = document.getElementById("container-main");
    main.appendChild(containerPopup);

    // evento para cerrar popup
    const closeBtn = document.getElementById("close-popup")
    closeBtn.addEventListener("click", () => {
        closeElemento(containerPopup);
    });

    // evento para cambiar idioma
    const agreeBtn = document.getElementById("agree-popup")
    agreeBtn.addEventListener("click", () => {
        // función para cambiar idioma
        changeLanguage();
        // función de typeWriting
        typeWriting();
        // función para borrar popup
        closeElemento(containerPopup);
    });
};
// función para cerrar el popup
const closeElemento = (elemento) => {
    elemento.classList.remove("popup-on");
    elemento.classList.add("popup-off")
    setTimeout(() => {
        elemento.remove()
    }, 500);
}
// función para cambiar el idioma de los textos
let isItalian = true;
const changeLanguage = () => {
    // if language was changed, change variable
    isItalian = !isItalian;

    const mainHeading = document.getElementById("main-heading");
    const mainParagraph = document.getElementById("main-paragraph");
    mainHeading.innerHTML = `Cento <span id="main-type"></span> `;
    mainParagraph.textContent = "Mirato a generare un'educazione di qualità, multiculturale e coerente con i valori di Loris Malaguzzi."

    const firstHeading = document.getElementById("first-art-heading")
    const firstParagraph = document.getElementById("first-art-paragraph")
    firstHeading.textContent = "Il potenziale viene da loro"
    firstParagraph.textContent = "Tutti i bambini hanno il potenziale e la curiosità per costruire il loro apprendimento. Saranno loro a prendere l'iniziativa."

    const secondHeadingCreative = document.getElementById("second-art-heading-creative")
    const secondParagraphCreative = document.getElementById("second-art-paragraph-creative")
    secondHeadingCreative.textContent = "Educazione creativa"
    secondParagraphCreative.textContent = "La nostra proposta educativa è attenta al ruolo del bambino, all'apprendimento attraverso l'osservazione."

    const secondHeadingHarmonious = document.getElementById("second-art-heading-harmonious")
    const secondParagraphHarmonious = document.getElementById("second-art-paragraph-harmonious")
    secondHeadingHarmonious.textContent = "Educazione armonica"
    secondParagraphHarmonious.textContent = "La nostra istituzione tiene conto delle esigenze architettoniche dello spazio per ottenere un ambiente di apprendimento ideale."

    const secondHeadingReggioEmilia = document.getElementById("second-art-heading-reggio-emilia")
    const secondParagraphReggioEmilia = document.getElementById("second-art-paragraph-reggio-emilia")
    secondHeadingReggioEmilia.textContent = "Istruzione Reggio Emilia"
    secondParagraphReggioEmilia.textContent = "La nostra filosofia mantiene un d’insegnamento basato sulla ricerca e sulla riflessione, privilegiando il rapporto dello studente con la famiglia e l'insegnante."

    const thirdHeading = document.getElementById("third-art-heading")
    const thirdParagraph = document.getElementById("third-art-paragraph")
    thirdHeading.textContent = "Contatto"
    thirdParagraph.textContent = "Ci piacerebbe parlarvi del nostro Progetto Educativo e vogliamo conoscere i vostri dubbi e le vostre esigenze."

    const thirdSectHeadingUs = document.getElementById("third-art-sect-heading-us")
    const thirdSectParagraphUs = document.getElementById("third-art-sect-p-time")
    const thirdSectParagraphMedia = document.getElementById("third-art-sect-p-media")
    thirdSectHeadingUs.textContent = "Noi"
    thirdSectParagraphUs.textContent = "Ci trovi dal lunedì al venerdì dalle 9:00 alle 11:00 o dalle 14:00 alle 16:00 a Rivadavia 3628 - Mar del Plata"
    thirdSectParagraphMedia.textContent = "Contattaci anche via e-mail!"

    const thirdSectInterview = document.getElementById("third-art-sect-interview")
    const thirdSectParagraphInterview = document.getElementById("third-art-sect-paragraph-interview")
    thirdSectInterview.textContent = "Colloquio"
    thirdSectParagraphInterview.textContent = "Contattaci e fissa un colloquio con noi!"
}

// function to close if scrolled down

const observer = new IntersectionObserver((entries) => {
    const elemento = entries[0];
    const containerPopup = document.getElementById("container-popup");
    if (elemento.isIntersecting) {
        if (!containerPopup || !containerPopup.classList.contains("popup-off")) popup()
    } else {
        if (containerPopup || containerPopup.classList.contains("popup-off")) closeElemento(containerPopup)
    }
}, { threshold: [0.7] });
const main = document.getElementById("container-main");
observer.observe(main);

// función para crear orientación de observer
const observerMaker = (orientacion) => {
    const observer = new IntersectionObserver((entries) => {
        const elemento = entries[0];
        if (elemento.isIntersecting) {
            elemento.target.classList.add(`fade-${orientacion}`)
            console.log("hola", elemento.target)
        } else {
            elemento.target.classList.remove(`fade-${orientacion}`)
            console.log("chau", elemento.target)
        }
    }, { threshold: [0.3] });

    const fadeElements = [...document.getElementsByClassName(`fade-${orientacion}`)];

    fadeElements.forEach((element) => {
        observer.observe(element);
    });
}

// observers
const rightFade = observerMaker("right");
const leftFade = observerMaker("left");

// función para esconder header
let scrollPrevio = window.scrollY;
window.addEventListener("scroll", () => {
    const header = document.getElementById("container-header");
    const scrollActual = window.scrollY;
    if (scrollPrevio > scrollActual) {
        header.classList.add("header-on");
        header.classList.remove("header-off");
    } else {
        header.classList.remove("header-on");
        header.classList.add("header-off");
    }
    scrollPrevio = scrollActual;
})

const logoHeader = document.getElementById("header-img");
logoHeader.onclick = () => open("#", "_self")

// función para el typewriter effect
// referir a https://safi.me.uk/typewriterjs/ para la documentación con los parametros disponibles
const typeWriting = () => {
    const mainType = document.getElementById('main-type');
    const typewriter = new Typewriter(mainType, {
        loop: true,
        cursor: "",
        delay: 75,
    });

    const agreeBtn = document.getElementById("agree-popup");
    if (agreeBtn) {
        return typewriter.deleteAll()
            .typeString('lingue')
            .pauseFor(500)
            .deleteAll()
            .typeString('mani')
            .pauseFor(450)
            .deleteAll()
            .typeString('pensieri')
            .pauseFor(450)
            .deleteAll()
            .typeString('modi di pensare')
            .pauseFor(450)
            .deleteChars(7)
            .typeString('giocare')
            .pauseFor(450)
            .deleteChars(7)
            .typeString('parlare')
            .pauseFor(450)
            .deleteChars(7)
            .typeString('amare')
            .pauseFor(450)
            .deleteAll()
            .typeString('gioia')
            .pauseFor(450)
            .deleteAll()
            .typeString('sempre!')
            .pauseFor(1250)
            .deleteAll()
            .start();
    }

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

    // si la función se llama del botón de idioma

}
typeWriting();

// Redirecciones de iconos - footer

const iconFacebook = document.getElementById("icon-facebook")
const iconInstagram = document.getElementById("icon-instagram")
const iconGoogleMaps = document.getElementById("icon-gmaps")
const footerLogo = document.getElementById("footer-img")

iconFacebook.addEventListener("click", () => open("https://www.facebook.com/LorisMDulceC", ""))
iconInstagram.addEventListener("click", () => open("https://www.instagram.com/lorismdulcec/", ""))
iconGoogleMaps.addEventListener("click", () => open("https://g.page/LorisMDulceC?share", ""))
footerLogo.addEventListener("click", () => open("#", "_self"))