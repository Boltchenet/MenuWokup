document.addEventListener('DOMContentLoaded', () => {
    console.log('Fondue JS loaded');
    
    try {
        // Données COMPLÈTES du menu
        const menuData = {
            formules: [
                { 
                    name: "Formule Bouillon 'Tub Bone Casserole'", 
                    description: "Bouillon maison composé de : os, carottes, tomates, feuilles de tofu au porc", 
                    price: "25,80 €",
                    highlight: false
                },
                { 
                    name: "Formule Bouillon 'Choucroute de Poisson'", 
                    description: "Bouillon maison à base de poisson et choucroute", 
                    price: "34,80 €",
                    highlight: true 
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

        // Génération des formules (identique à précédemment)
        const generateFormules = () => {
            const container = document.getElementById('formules-container');
            if (!container) return;

            container.innerHTML = '';
            
            menuData.formules.forEach(formule => {
                const formuleLine = document.createElement('div');
                formuleLine.className = `formule-line ${formule.highlight ? 'highlight' : ''}`;
                
                formuleLine.innerHTML = `
                    <span class="formule-combo">
                        ${formule.name}
                        ${formule.description ? `<br><small>${formule.description}</small>` : ''}
                    </span>
                    <span class="formule-price">${formule.price}</span>
                `;
                
                container.appendChild(formuleLine);
            });
        };

        // Génération des tables (identique à précédemment)
        const generateTable = (categoryId, items) => {
            const section = document.getElementById(categoryId);
            if (!section) return;
            
            section.innerHTML = '';
            
            const table = document.createElement('table');
            table.className = 'fondue-table';
            
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th data-translate="Produit">Produit</th>
                    <th data-translate="Prix">Prix</th>
                </tr>
            `;
            
            const tbody = document.createElement('tbody');
            items.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td data-translate="${item.name}">${item.name}</td>
                    <td>${item.price}</td>
                `;
                tbody.appendChild(row);
            });
            
            table.appendChild(thead);
            table.appendChild(tbody);
            section.appendChild(table);
        };

        // Initialisation
        generateFormules();
        generateTable('viandes-grid', menuData.viandes);
        generateTable('legumes-grid', menuData.legumes);

        // Animation des éléments
        const animateElements = () => {
            const elements = document.querySelectorAll('.formule-line, .fondue-table tr');
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100 + (index * 50));
            });
        };

        setTimeout(animateElements, 300);

    } catch (error) {
        console.error('Error in fondue.js:', error);
    }
});
