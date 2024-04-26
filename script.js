/*************toggle icon navbar**************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => { // Corrected onClick to onclick
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
};


/**************scroll section active****************/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => { // Corrected windows to window
    sections.forEach(sec => {
        let top = window.pageYOffset; // Corrected screenY to pageYOffset
        let offset = sec.offsetTop - 150; // Corrected set to sec
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /**************toggle sticky header**************/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100); // Corrected .sticky selector

    /**********remove toggle icon and navbar when click navbar link*********/

    menuIcon.classList.remove('bx-x'); // Corrected class name
    navbar.classList.remove('active');
};