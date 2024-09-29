document.addEventListener("DOMContentLoaded", function() {
    const privacyLink = document.querySelector('.privacy-link');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');

    // Función para manejar la redirección a la política de privacidad
    privacyLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        const privacySection = document.querySelector('#privacy-policy');
        privacySection.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente a la sección
    });

    // Función para manejar el menú hamburguesa
    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
