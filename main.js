/*============== Toggle icon navbar ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Toggles the X icon for closing the navbar
    navbar.classList.toggle('active');     // Toggles the active class for the navbar
};


/*============== Typed js ===============*/
const typed = new Typed('.multiple-text', {
    strings: [ 'Backend Developer', 'Fullstack Developer', 'UI/UX Designer'], 
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true 
});
