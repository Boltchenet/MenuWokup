document.addEventListener('DOMContentLoaded', function() {
    const boissonsData = {
        classiques: [
            { name: "Wang Lao Ji Thé aux herbes chinoises (33cl)", price: "3€" },
            { name: "Coca-Cola (33cl)", price: "3€" },
            { name: "Coca-Cola Zero (33cl)", price: "3€" },
            { name: "Fanta (33cl)", price: "3€" },
            { name: "7Up (33cl)", price: "3€" },
            { name: "Ice Tea (33cl)", price: "3€" },
            { name: "Perrier (33cl/1L)", price: "3€ (33cl)<br>5€ (1L)" },
            { name: "Eau minérale (50cl/1.5L)", price: "3€ (50cl)<br>5€ (1.5L)" },
            { name: "Lait de coco (33cl)", price: "3€" },
            { name: "Jus de litchi (33cl)", price: "5€" }, // Modifié de 25cl à 33cl
            { name: "Lait de soja (33cl)", price: "3€" },
            { name: "Thé vert", price: "3€/personne" },
            { name: "Café", price: "2€" },
            { name: "Café au lait", price: "3€" }
        ],
        speciales: [
            { 
                name: "Thé au citron (fait maison)", 
                price: "5€ (CARAFE)", // Format modifié
                image: "images/boissons/the-citron.jpg"
            },
            { 
                name: "Thé aux prunes aigres", 
                price: "5€ (CARAFE)", // Format modifié
                image: "images/boissons/the-prune.jpg"
            }
        ],
        vins: [
            { name: "Bière Tsingtao (33cl)", price: "4.9€" },
            { name: "Bière Tsingtao (64cl)", price: "6.9€" },
            { name: "Vin blanc (Entre-deux-Mers)", price: "4€ (VERRE)<br>8.5€ (CARAFE)<br>16€ (BOUTEILLE)" },
            { name: "Vin rosé (Plessis du Val)", price: "4€ (VERRE)<br>8.5€ (CARAFE)<br>16€ (BOUTEILLE)" },
            { name: "Vin rouge (Pied d'Argent Cuvée)", price: "4€ (VERRE)<br>8.5€ (CARAFE)<br>16€ (BOUTEILLE)" },
            { name: "Vin rouge (Saint-Émilion Grand Cru)", price: "38€ (BOUTEILLE)" }
        ]
    };

    // Remplir les boissons classiques
    const boissonsList = document.querySelector('.boissons-list');
    boissonsData.classiques.forEach(boisson => {
        const item = document.createElement('div');
        item.className = 'boisson-item';
        item.innerHTML = `
            <div class="boisson-name">${boisson.name}</div>
            <div class="boisson-price">${boisson.price}</div>
        `;
        boissonsList.appendChild(item);
    });

    // Remplir les boissons spéciales
    const specialGrid = document.querySelector('.special-boissons-grid');
    boissonsData.speciales.forEach(boisson => {
        const card = document.createElement('div');
        card.className = 'special-boisson-card';
        card.innerHTML = `
            <div class="special-boisson-name">${boisson.name}</div>
            <div class="special-boisson-price">${boisson.price}</div>
        `;
        specialGrid.appendChild(card);
    });

    // Remplir les vins
    const vinsSection = document.querySelectorAll('.boissons-section')[2];
    const oldVinsList = vinsSection.querySelector('.boissons-list');
    if (oldVinsList) oldVinsList.remove();
    
    const vinsContainer = document.createElement('div');
    vinsContainer.className = 'vins-container';
    
    boissonsData.vins.forEach(vin => {
        const item = document.createElement('div');
        item.className = 'vin-item';
        item.innerHTML = `
            <div class="vin-name">${vin.name}</div>
            <div class="vin-price">${vin.price}</div>
        `;
        vinsContainer.appendChild(item);
    });
    
    vinsSection.appendChild(vinsContainer);
});
