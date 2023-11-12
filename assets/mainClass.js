

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
 //Mostrar Menu

if(navToggle){
    navToggle.addEventListener('click', () =>{
        
        navMenu.classList.add('show-menu')
        
    })
}

 //Ocultar Menu

 if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
 }


 //Quitar menu Mobile
 const navLink = document.querySelectorAll('.nav_link')
 const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //Cuando hacemos click en cada link borramos la clase showw menu
    navMenu.classList.remove('show-menu')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))


 //Add shadow header
 const shadowHeader = () =>{
    const header = document.getElementById('header')
    //cuando el scroll es mas de 50 de altura de vista añade sombra.
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
 }
 window.addEventListener('scroll', shadowHeader)

//Email js
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  emailjs
    .sendForm('service_3sqclph', 'template_g4p7ony', '#contact-form', 'kAjQGwULjuyaNJjcQ')
    .then(
      () => {
        // show sent message with success style
        contactMessage.textContent = 'El mensaje se envió correctamente!';
        contactMessage.classList.remove('text-error'); // Remove error class if present
        contactMessage.classList.add('text-success'); // Add success class
        // Clear message
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);

        contactForm.reset();
      },
      () => {
        // show error message with error style
        contactMessage.textContent = 'Se ha producido un error.';
        contactMessage.classList.remove('text-success'); // Remove success class if present
        contactMessage.classList.add('text-error'); // Add error class
      }
    );
};

contactForm.addEventListener('submit', sendEmail);


//Animacion al scroll

const sectionHrElements = document.querySelectorAll('.section_hr');

// Función para verificar si un elemento está visible en la ventana gráfica
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Función para activar la animación cuando la sección está en la ventana gráfica
  function activateAnimation() {
    console.log('Activating animation');
    sectionHrElements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('animate');
      }
    });
  }
  
  // Llamar a activateAnimation al cargar la página
  window.addEventListener('load', activateAnimation);
  
  // Agregar un evento de desplazamiento (scroll) para activar la animación
  window.addEventListener('scroll', activateAnimation);
  

  //Mostrar scroll up

  const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higuer 350viewport

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-line' : 'ri-sun-line';

// Function to change the theme image
function cambiarImagenTema() {
  const imagenTema = document.querySelector('.home_img'); // Get the image with the class 'home_img'
  if (getCurrentTheme() === 'dark') {
    imagenTema.src = 'assets/images/imgPerfilOscuro.jpg'; // Dark theme image
  } else {
    imagenTema.src = 'assets/images/imgPerfilClaro.jpg'; // Light theme image
  }
}

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'](iconTheme);
  cambiarImagenTema(); // Call the function to change the image when the theme changes
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  cambiarImagenTema(); // Call the function to change the image when the theme changes
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
