document.addEventListener('DOMContentLoaded', () => {
    const menuData = {
        entrees: [
            { name: "Salade aux légumes", price: "4,08 €", image: "images/plat/menumidi/saladelegume.jpg" },
            { name: "3 nems au poulet", price: "3,08 €", image: "images/plat/menumidi/nemspoulet3pcs.jpg" },
            { name: "4 raviolis frits", price: "3,08 €", image: "images/plat/menumidi/ravliolisfrits4pcs.jpeg" },
            { name: "Potage chinois", price: "4,08 €", image: "images/plat/menumidi/potagepekinois.jpeg" }
        ],
        plats: [
            { name: "Riz au travers de porc, sauce aigre-douce", price: "10,08 €", image: "images/plat/menumidi/rizporcaigredouce.jpeg" },
            { name: "Riz au bœuf sauté aux oignons", price: "10,08 €", image: "images/plat/menumidi/rziboeufoignon.jpg" },
            { name: "Riz à l'escalope de poulet frit", price: "10,08 €", image: "images/plat/menumidi/rizescalopepouletfrit.jpg" },
            { name: "Riz au poulet, sauce aigre-douce", price: "10,08 €", image: "images/plat/menumidi/rzipouletaigredouce.jpeg" },
            { name: "Riz aux crevettes, sauce aigre-douce", price: "10,08 €", image: "images/plat/menumidi/rizcrevetteaigredouce.avif" },
            { name: "Nouilles sautées au poulet", price: "10,08 €", image: "images/plat/menumidi/nouillesautépoulet.jpg" }
        ],
        desserts: [
            { name: "4 boulettes de riz au sésame", price: "4,08 €", image: "images/plat/menumidi/bouletterizsesame.jpg" },
            { name: "Litchis au sirop", price: "4,08 €", image: "images/plat/menumidi/lichisirop.png" },
            { name: "2 perles de coco", price: "4,08 €", image: "images/plat/menumidi/perlecoco2pcs.jpg" },
            { name: "Ananas au sirop", price: "4,08 €", image: "images/plat/menumidi/ananassirop.avif" }
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

    generateDishes('entrees-grid', menuData.entrees);
    generateDishes('plats-grid', menuData.plats);
    generateDishes('desserts-grid', menuData.desserts);

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