document.addEventListener('DOMContentLoaded', () => {
    const menuData = {
        formules: [
            { 
                name: "Formule Bouillon 'Tub Bone Casserole'", 
                description: "", 
                price: "25,80 €",
                image: "images/imagesite/fondue-formule1.jpg" 
            },
            { 
                name: "Formule Bouillon 'Choucroute de Poisson'", 
                description: "Bouillon au choix: os, carottes, tomates, feuilles de tofu au porc", 
                price: "34,80 €",
                image: "images/imagesite/fondue-formule2.jpg"
            }
        ],
        viandes: [
            { name: "Os", price: "6,90 €", image: "images/imagesite/fondue-viande1.jpg" },
            { name: "Tranches de bœuf", price: "5,90 €", image: "images/imagesite/fondue-viande2.jpg" },
            { name: "Tranches d'agneau", price: "5,90 €", image: "images/imagesite/fondue-viande3.jpg" },
            { name: "Bœuf mariné épicé", price: "9,90 €", image: "images/imagesite/fondue-viande4.jpg" },
            { name: "Calamar", price: "9,90 €", image: "images/imagesite/fondue-viande5.jpg" },
            { name: "Champignons tranchés", price: "6,90 €", image: "images/imagesite/fondue-viande6.jpg" },
            { name: "Tripes", price: "6,90 €", image: "images/imagesite/fondue-viande7.jpg" },
            { name: "Sangue en gelée de porc", price: "6,90 €", image: "images/imagesite/fondue-viande8.jpg" },
            { name: "Intestin de sèche", price: "8,90 €", image: "images/imagesite/fondue-viande9.jpg" },
            { name: "Boules de sèche", price: "9,90 €", image: "images/imagesite/fondue-viande10.jpg" }
        ],
        legumes: [
            { name: "Assortiment de champignons", price: "12,90 €", image: "images/imagesite/fondue-legume1.jpg" },
            { name: "Assortiment de légumes", price: "7,90 €", image: "images/imagesite/fondue-legume2.jpg" },
            { name: "Assortiment de produits à base de soja", price: "12,90 €", image: "images/imagesite/fondue-legume3.jpg" },
            { name: "Algues", price: "4,90 €", image: "images/imagesite/fondue-legume4.jpg" },
            { name: "Colibier à pied velouté", price: "5,90 €", image: "images/imagesite/fondue-legume5.jpg" },
            { name: "Champignons shiitake", price: "4,90 €", image: "images/imagesite/fondue-legume6.jpg" },
            { name: "Tranches de pomme de terre", price: "4,90 €", image: "images/imagesite/fondue-legume7.jpg" },
            { name: "Concombres", price: "4,90 €", image: "images/imagesite/fondue-legume8.jpg" },
            { name: "Tofu", price: "4,90 €", image: "images/imagesite/fondue-legume9.jpg" },
            { name: "Rouleau de tofu séché", price: "4,90 €", image: "images/imagesite/fondue-legume10.jpg" }
        ]
    };

    function generateDishes(categoryId, dishes) {
        const grid = document.getElementById(categoryId);
        
        dishes.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.className = 'dish-card';
            
            dishCard.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}" class="dish-image">
                <div class="dish-info">
                    <h4 class="dish-name">${dish.name}</h4>
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