/* Hamburger menu */
const hamburger = document.querySelector('.hamburger');
const navMenue = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navMenue.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () =>{
    hamburger.classList.remove('active');
    navMenue.classList.remove('active');
}));

/* Accordion */

const accordion = document.getElementsByClassName('content-box');

for (i = 0; i < accordion.length; i++ ){
    let x;
    x = accordion[i];
    x.addEventListener('click', () => {
        x.classList.toggle('active');
    });
}