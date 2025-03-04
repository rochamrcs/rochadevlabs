// interação com o icone do menu

// interação com o icone do menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


// trocar as cores da sessão atual na barra de navegação

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)  {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // adicionar borda na barra de navegação
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    // ocultar menu ao clicar em uma pagina
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// script para troca de soluções no homepage usano typed

const typed = new Typed('.multiple-text', {
    strings: ["Desenvolvimento Web", "Automações"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 10,
    loop: true,
})