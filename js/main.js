// Fonctionnalités futures comme le panier, etc.
document.addEventListener('DOMContentLoaded', function() {
    // Code JS ici
    console.log('Menu WOKUP chargé');
    
    // Exemple: Gestion des boutons "Ajouter"
    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.parentElement.querySelector('.item-name').textContent;
            const itemPrice = this.parentElement.querySelector('.item-price').textContent;
            alert(`Ajouté: ${itemName} - ${itemPrice}`);
            // Ici vous pourriez ajouter la logique du panier
        });
    });
});