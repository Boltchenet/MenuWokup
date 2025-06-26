document.addEventListener('DOMContentLoaded', () => {
    // Animation du titre et sous-titre
    const title = document.querySelector('.title-anim');
    const subtitle = document.querySelector('.subtitle-anim');
    const navButtons = document.querySelectorAll('.simple-nav-btn');
    
    // Animation des boutons de navigation
    navButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        btn.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 900 + (index * 100));
    });
});