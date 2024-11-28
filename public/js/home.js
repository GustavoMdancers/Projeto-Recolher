document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function redirectToURL(url) {
    window.open(url, '_blank');
}

document.getElementById("start").addEventListener('click', function () {
    const targetSection = document.getElementById("sHero")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.getElementById("sobre").addEventListener('click', function () {
    const targetSection = document.getElementById("sSobre")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.getElementById("acoes").addEventListener('click', function () {
    const targetSection = document.getElementById("sBlog")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.getElementById("voluntario").addEventListener('click', function () {
    const targetSection = document.getElementById("sVoluntario")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.getElementById("centroreciclagem").addEventListener('click', function () {
    const targetSection = document.getElementById("sCentro")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.getElementById("denuncia").addEventListener('click', function () {
    const targetSection = document.getElementById("sDescarte")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

const btnMenu = document.getElementById('btn-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMenuMobile() {
    document.documentElement.classList.toggle('menu-opened');
}
btnMenu.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', openMenuMobile);