const navMenu = document.getElementById(`nav__menu`);
const navToggle = document.getElementById(`nav-toggle`);
const navClose = document.getElementById(`nav-close`);

if (navToggle) {
  navToggle.addEventListener(`click`, () => {
    navMenu.classList.add(`nav-menu`);
  });
}
if (navClose) {
  navClose.addEventListener(`click`, () => {
    navMenu.classList.remove(`nav-menu`);
  });
}

const navLink = document.querySelectorAll(`.nav__link`);
const linkAction = () => {
  const navMenu = document.getElementById(`nav__menu`);
  navMenu.classList.remove(`nav-menu`);
};
navLink.forEach((element) => element.addEventListener(`click`, linkAction));

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById(`header`);

  this.scrollY >= 50
    ? header.classList.add(`blur-header`)
    : header.classList.remove(`blur-header`);
};
window.addEventListener(`scroll`,blurHeader)
/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const SendEmail =(event)=>{
  event.preventDefault();
  emailjs.sendForm('service_x6jjawd','template_glxaopx','#contact-form','qqPhe1OcEbhbMfkXB')
  .then(()=>{
    contactMessage.textContent = 'Message sent Successfully ✅'
  },()=>{
    contactMessage.textContent = 'Message not sent(service error) ❌'

  })
}

contactForm.addEventListener('submit' ,SendEmail)
/*=============== SHOW SCROLL UP ===============*/

const modeToggle = document.getElementById('mode-toggle');
const root = document.documentElement;

modeToggle.addEventListener('click', () => {
  if (root.classList.contains('light-mode')) {
    // Switch to dark mode
    modeToggle.innerText="Theme☀️"
    root.classList.remove('light-mode');
  } else {
    // Switch to light mode
    modeToggle.innerText="Theme🌙"
    root.classList.add('light-mode');
  }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  reset:true,
})

sr.reveal(`.home__data,.home__social,.contact-info`);
sr.reveal(`.home__image,.contact-form`,{origin: 'bottom',});
sr.reveal(`.about__image,.skills__data,.project_img`,{origin: 'right'});
sr.reveal(`.project_img`,{origin: 'left'});
sr.reveal(`.about__data,.skills__content,.project_info`,{origin: 'left'});
sr.reveal(`.project_info`,{origin: 'right'});
sr.reveal(`.about__data,.skills__content`,{origin: 'left'});
 sr.reveal(`.nav__logo,.nav__toggle,.nav__item`,{interval:100,reset:false});