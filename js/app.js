document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded'); // Debug
    const loader = document.querySelector('.loader');

    // Fallback pour masquer le loader après 3s max
    const hideLoader = () => {
        if (loader) {
            loader.classList.add('hidden');
            console.log('Loader hidden'); // Debug
        }
    };

    // Événement principal
    window.addEventListener('load', () => {
        setTimeout(hideLoader, 500);
    });

    // Fallback au cas où l'événement 'load' ne se déclenche pas
    setTimeout(hideLoader, 3000);

    // Gestion de la navigation (reste inchangée)
    const nav = document.querySelector('.main-nav');
    const filters = document.querySelector('.filters-container');
    if (nav) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 100) {
                nav.classList.remove('hide-nav');
                if (filters) filters.style.top = '60px';
                return;
            }
            if (currentScroll > lastScroll && !nav.classList.contains('hide-nav')) {
                nav.classList.add('hide-nav');
                if (filters) filters.style.top = '0';
            } else if (currentScroll < lastScroll && nav.classList.contains('hide-nav')) {
                nav.classList.remove('hide-nav');
                if (filters) filters.style.top = '60px';
            }
            lastScroll = currentScroll;
        });
    }
});