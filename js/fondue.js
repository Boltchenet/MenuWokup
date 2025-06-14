document.addEventListener('DOMContentLoaded', () => {
    const menuData = {
        formules: [
            { 
                name: "Formule Bouillon 'Tub Bone Casserole'", 
                description: "", 
                price: "25,80 €"
            },
            { 
                name: "Formule Bouillon 'Choucroute de Poisson'", 
                description: "Bouillon au choix: os, carottes, tomates, feuilles de tofu au porc", 
                price: "34,80 €"
            }
        ],
        viandes: [
            { name: "Os", price: "6,90 €" },
            { name: "Tranches de bœuf", price: "5,90 €" },
            { name: "Tranches d'agneau", price: "5,90 €" },
            { name: "Bœuf mariné épicé", price: "9,90 €" },
            { name: "Calamar", price: "9,90 €" },
            { name: "Champignons tranchés", price: "6,90 €" },
            { name: "Tripes", price: "6,90 €" },
            { name: "Sangue en gelée de porc", price: "6,90 €" },
            { name: "Intestin de sèche", price: "8,90 €" },
            { name: "Boules de sèche", price: "9,90 €" }
        ],
        legumes: [
            { name: "Assortiment de champignons", price: "12,90 €" },
            { name: "Assortiment de légumes", price: "7,90 €" },
            { name: "Assortiment de produits à base de soja", price: "12,90 €" },
            { name: "Algues", price: "4,90 €" },
            { name: "Colibier à pied velouté", price: "5,90 €" },
            { name: "Champignons shiitake", price: "4,90 €" },
            { name: "Tranches de pomme de terre", price: "4,90 €" },
            { name: "Concombres", price: "4,90 €" },
            { name: "Tofu", price: "4,90 €" },
            { name: "Rouleau de tofu séché", price: "4,90 €" }
        ]
    };

    function generateDishes(categoryId, dishes) {
        const grid = document.getElementById(categoryId);
        
        dishes.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.className = 'dish-card';
            
            dishCard.innerHTML = `
                <div class="dish-info">
                    <h4 class="dish-name">${dish.name}</h4>
                    ${dish.description ? `<p class="dish-description">${dish.description}</p>` : ''}
                    <p class="dish-price">${dish.price}</p>
                </div>
            `;
            
            grid.appendChild(dishCard);
        });
    }

    // Générer les formules comme des cartes aussi
    generateDishes('formules-grid', menuData.formules);
    generateDishes('viandes-grid', menuData.viandes);
    generateDishes('legumes-grid', menuData.legumes);

    // Animation des cartes
    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
});
