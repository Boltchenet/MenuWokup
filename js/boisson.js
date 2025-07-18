document.addEventListener('DOMContentLoaded', function() {
    const boissonsData = {
        classiques: [
            { name: "王老吉 Thé aux herbes chinoises (33cl)", price: "3€" },
            { name: "Coca-Cola (33cl)", price: "3€" },
            { name: "Coca-Cola Zero (33cl)", price: "3€" },
            { name: "Fanta (33cl)", price: "3€" },
            { name: "7Up (33cl)", price: "3€" },
            { name: "Ice Tea (33cl)", price: "3€" },
            { name: "Perrier (33cl/1L)", price: "3€/5€" },
            { name: "Eau minérale (50cl/1.5L)", price: "3€/5€" },
            { name: "Lait de coco (33cl)", price: "3€" },
            { name: "Jus de litchi (25cl)", price: "3€" },
            { name: "Lait de soja (33cl)", price: "3€" },
            { name: "Thé vert", price: "3€/personne" },
            { name: "Café", price: "2€" },
            { name: "Café au lait", price: "3€" }
        ],
        speciales: [
            { 
                name: "Thé au citron (fait maison)", 
                desc: "Notre thé maison infusé avec des tranches de citron frais", 
                price: "5€/carafe",
                image: "images/boissons/the-citron.jpg"
            },
            { 
                name: "Thé aux prunes aigres", 
                desc: "Boisson traditionnelle chinoise à base de prunes umeboshi", 
                price: "5€/carafe",
                image: "images/boissons/the-prune.jpg"
            }
        ],
        vins: [
            { name: "Bière Tsingtao (33cl)", price: "4.9€" },
            { name: "Bière Tsingtao (64cl)", price: "6.9€" },
            { name: "Vin blanc (Entre-deux-Mers)", price: "4€ (33cl) / 6.5€ (37.5cl) / 16€ (75cl)" },
            { name: "Vin rosé (Plessis du Val)", price: "4€ (33cl) / 6.5€ (37.5cl) / 16€ (75cl)" },
            { name: "Vin rouge (Pied d'Argent Cuvée)", price: "4€ (33cl) / 6.5€ (37.5cl) / 16€ (75cl)" },
            { name: "Vin rouge (Saint-Émilion Grand Cru)", price: "38€ (75cl)" }
        ]
    };

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

    const specialGrid = document.querySelector('.special-boissons-grid');
    boissonsData.speciales.forEach(boisson => {
        const card = document.createElement('div');
        card.className = 'special-boisson-card';
        card.innerHTML = `
            <img src="${boisson.image}" alt="${boisson.name}" class="special-boisson-image" loading="lazy">
            <div class="special-boisson-info">
                <h3 class="special-boisson-name">${boisson.name}</h3>
                <p class="special-boisson-desc">${boisson.desc}</p>
                <div class="special-boisson-price">${boisson.price}</div>
            </div>
        `;
        specialGrid.appendChild(card);
    });

    const vinsList = document.querySelectorAll('.boissons-list')[1];
    boissonsData.vins.forEach(vin => {
        const item = document.createElement('div');
        item.className = 'boisson-item';
        item.innerHTML = `
            <div class="boisson-name">${vin.name}</div>
            <div class="boisson-price">${vin.price}</div>
        `;
        vinsList.appendChild(item);
    });
});
