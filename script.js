document.addEventListener("DOMContentLoaded", function() {
    const privacyLink = document.querySelector('.privacy-link');
    const privacySection = document.querySelector('.privacy-section');
    const togglePrivacyButton = document.querySelector('.toggle-privacy');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');

    // Función para mostrar/ocultar la política de privacidad
    privacyLink.addEventListener('click', function(event) {
        event.preventDefault();
        privacySection.style.display = privacySection.style.display === 'none' || privacySection.style.display === '' ? 'block' : 'none';
    });

    // Función para ocultar la política de privacidad
    togglePrivacyButton.addEventListener('click', function() {
        privacySection.style.display = 'none';
    });

    // Función para manejar el menú hamburguesa
    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});