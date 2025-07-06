
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const loader = document.querySelector('.loader');
    const languageBtns = document.querySelectorAll('.language-btn');
    const nav = document.querySelector('.main-header');
    const filters = document.querySelector('.filters-container');
    let lastScroll = 0;

    const hideLoader = () => {
        if (loader) {
            loader.classList.add('hidden');
            console.log('Loader hidden');
        }
    };

    window.addEventListener('load', () => {
        setTimeout(hideLoader, 500);
    });
    setTimeout(hideLoader, 3000);

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                mainNav.scrollTo(0, 0);
            } else {
                document.body.style.overflow = '';
            }
        });
        
        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') && 
                !mainNav.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
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

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (window.innerWidth <= 768) {
            if (document.body.classList.contains('page-individuels')) {
                // Comportement spécifique pour la page individuel
                if (currentScroll <= 100) {
                    nav?.classList.remove('hide-nav');
                } else if (currentScroll > lastScroll && !nav?.classList.contains('hide-nav')) {
                    nav?.classList.add('hide-nav');
                } else if (currentScroll < lastScroll && nav?.classList.contains('hide-nav')) {
                    nav?.classList.remove('hide-nav');
                }
            } else {
                // Comportement pour les autres pages
                if (currentScroll > lastScroll && currentScroll > 100) {
                    nav?.classList.add('hide-nav');
                } else {
                    nav?.classList.remove('hide-nav');
                }
            }
        }
        
        lastScroll = currentScroll;
    });

    if (languageBtns.length > 0) {
        languageBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                languageBtns.forEach(b => {
                    b.classList.remove('active');
                    b.style.backgroundColor = '';
                });
                btn.classList.add('active');
                btn.style.backgroundColor = 'var(--gold)';
                localStorage.setItem('preferredLanguage', lang);
                updateTranslations(lang);
            });
        });
        
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
        const activeBtn = document.querySelector(`.language-btn[data-lang="${preferredLanguage}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
            activeBtn.style.backgroundColor = 'var(--gold)';
        }
        updateTranslations(preferredLanguage);
    }

    function updateTranslations(lang) {
        try {
            console.log(`Language changed to ${lang}`);
            document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
        } catch (error) {
            console.error('Translation error:', error);
        }
    }

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

    function scrollToCategory(category) {
        const element = document.getElementById(`${category}-grid`);
        if (element) {
            const headerOffset = document.body.classList.contains('page-individuels') ? 140 : 60;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

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

function translateElements(lang, translations) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
