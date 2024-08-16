// On page loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    images.forEach(image => {
        observer.observe(image);
    });

    // Verifica as imagens visíveis imediatamente após carregar a página
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            image.classList.add('visible');
        }
    });
});