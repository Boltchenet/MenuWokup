document.addEventListener('DOMContentLoaded', () => {
    // Gestion du loader
    const loader = document.querySelector('.loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        });
    }

    // Animation des boutons de navigation
    const navButtons = document.querySelectorAll('.simple-nav-btn');
    
    navButtons.forEach((btn, index) => {
        btn.style.transition = `all 0.5s ease ${0.9 + (index * 0.1)}s`;
        
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 900 + (index * 100));
    });

    // Navigation hide/show on scroll
    let lastScroll = 0;
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