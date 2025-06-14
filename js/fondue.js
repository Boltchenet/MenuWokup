document.addEventListener('DOMContentLoaded', () => {
    const menuData = {
        formules: [
            { name: "Formule Bouillon 'Tub Bone Casserole'", description: "", price: "25,80 €" },
            { 
                name: "Formule Bouillon 'Choucroute de Poisson'", 
                description: "Bouillon maison composé de : os, carottes, tomates, feuilles de tofu au porc", 
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
            { name: "Boules de sèche", price: "9,90 €" },
            { name: "Boules de porc", price: "9,90 €" },
            { name: "Boulettes de bœuf", price: "9,90 €" },
            { name: "Assortiment de boules", price: "9,90 €" },
            { name: "Raviolis feuilles de tofu au porc", price: "9,90 €" },
            { name: "Filet de morue épicé", price: "9,90 €" },
            { name: "Crevettes entières", price: "14,90 €" },
            { name: "Tranches de bar", price: "16,90 €" },
            { name: "Chair de crevette", price: "9,90 €" },
            { name: "Raviolis œuf au porc", price: "9,90 €" }
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
            { name: "Rouleau de tofu séché", price: "4,90 €" },
            { name: "Feuilles de tofu", price: "4,90 €" },
            { name: "Vermicelles", price: "4,90 €" },
            { name: "Chou chinois", price: "4,90 €" },
            { name: "Pousses de soja", price: "4,90 €" },
            { name: "Salade", price: "4,90 €" },
            { name: "Coriandre", price: "4,90 €" },
            { name: "Tranches de racine de lotus", price: "4,90 €" },
            { name: "Champignons noirs", price: "4,90 €" },
            { name: "Nouilles ou nouilles de riz", price: "5,90 €" },
            { name: "Wontons", price: "5,90 €" }
        ]
    };

    // Generate formules
    const formuleSection = document.querySelector('.formule-section');
    if (formuleSection) {
        const formuleStacked = document.createElement('div');
        formuleStacked.className = 'formule-stacked';
        
        menuData.formules.forEach((formule, index) => {
            const formuleLine = document.createElement('div');
            formuleLine.className = `formule-line ${index === 1 ? 'highlight' : ''}`;
            
            formuleLine.innerHTML = `
                <span class="formule-combo">${formule.name} ${formule.description ? `<br><small>${formule.description}</small>` : ''}</span>
                <span class="formule-price">${formule.price}</span>
            `;
            
            formuleStacked.appendChild(formuleLine);
        });
        
        formuleSection.appendChild(formuleStacked);
    }

    // Generate tables
    function generateTable(categoryId, items) {
        const section = document.getElementById(categoryId);
        if (!section) return;
        
        const table = document.createElement('table');
        table.className = 'fondue-table';
        
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Produit</th>
                <th>Prix</th>
            </tr>
        `;
        
        const tbody = document.createElement('tbody');
        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}</td>
            `;
            tbody.appendChild(row);
        });
        
        table.appendChild(thead);
        table.appendChild(tbody);
        section.appendChild(table);
    }

    generateTable('viandes-grid', menuData.viandes);
    generateTable('legumes-grid', menuData.legumes);

    // Animation des éléments
    const animateElements = document.querySelectorAll('.formule-line, .fondue-table tr');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
});