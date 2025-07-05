
// Fichier : js/app.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    
    // Elements DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const loader = document.querySelector('.loader');
    const languageBtns = document.querySelectorAll('.language-btn');
    const nav = document.querySelector('.main-header');
    const filters = document.querySelector('.filters-container');
    let lastScroll = 0;

    // Gestion du loader
    const hideLoader = () => {
        if (loader) {
            loader.classList.add('hidden');
            console.log('Loader hidden');
        }
    };

    // Fallback pour masquer le loader après 3s max
    window.addEventListener('load', () => {
        setTimeout(hideLoader, 500);
    });
    setTimeout(hideLoader, 3000);

    // Gestion du menu hamburger
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Empêche le défilement lorsque le menu est ouvert
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Fermer le menu quand on clique sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // Gestion du scroll pour cacher le header et afficher les filtres
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (window.innerWidth <= 768) {
            // Gestion de l'affichage du header et des filtres
            if (currentScroll <= 100) {
                nav?.classList.remove('hide-nav');
                if (filters) filters.style.top = '60px';
            } else if (currentScroll > lastScroll && !nav?.classList.contains('hide-nav')) {
                nav?.classList.add('hide-nav');
                if (filters) filters.style.top = '0';
            } else if (currentScroll < lastScroll && nav?.classList.contains('hide-nav')) {
                nav?.classList.remove('hide-nav');
                if (filters) filters.style.top = '60px';
            }
            
            // Fermer le menu si ouvert pendant le scroll
            if (mainNav && mainNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        
        lastScroll = currentScroll;
    });

    // Gestion du changement de langue
    if (languageBtns.length > 0) {
        languageBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                languageBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Stocker la préférence de langue
                localStorage.setItem('preferredLanguage', lang);
                
                // Actualiser les traductions
                updateTranslations(lang);
            });
        });
        
        // Charger la langue préférée
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
        document.querySelector(`.language-btn[data-lang="${preferredLanguage}"]`)?.classList.add('active');
        updateTranslations(preferredLanguage);
    }

    // Fonction pour mettre à jour les traductions
    function updateTranslations(lang) {
        try {
            // Cette fonction sera complétée par les fichiers de traduction individuels
            console.log(`Language changed to ${lang}`);
            
            // Dispatch un événement pour informer les autres scripts
            document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
        } catch (error) {
            console.error('Translation error:', error);
        }
    }

    // Gestion des filtres
    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            
            if (category === 'all') {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                scrollToCategory(category);
            }
        });
    });

    // Fonction pour scroller vers une catégorie
    function scrollToCategory(category) {
        const element = document.getElementById(`${category}-grid`);
        if (element) {
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    // Animation des éléments au chargement
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.dish-card, .fondue-table tr, .formule-line');
        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 + (index * 50));
        });
    }, 300);
});

// Fonction helper pour les traductions
function translateElements(lang, translations) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
