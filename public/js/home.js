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

document.querySelectorAll("#start, #m_start").addEventListener('click', function () {
    const targetSection = document.getElementById("sHero")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.querySelectorAll("#m_sobre ,#sobre").addEventListener('click', function () {
    const targetSection = document.getElementById("sSobre")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.querySelectorAll("#m_acoes ,#acoes").addEventListener('click', function () {
    const targetSection = document.getElementById("sBlog")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.querySelectorAll("#m_voluntario ,#voluntario").addEventListener('click', function () {
    const targetSection = document.getElementById("sVoluntario")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.querySelectorAll("#m_centroreciclagem ,#centroreciclagem").addEventListener('click', function () {
    const targetSection = document.getElementById("sCentro")
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.querySelectorAll("#m_denuncia ,#denuncia").addEventListener('click', function () {
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