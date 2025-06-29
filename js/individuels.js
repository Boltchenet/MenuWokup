document.addEventListener('DOMContentLoaded', () => {
    const menuData = {
        poissons: [
            { name: "Bar grillé à la sauce piquante", name_en: "Spicy grilled sea bass", price: "32,80 €", image: "images/plat/individuel/spicy_grilled_sea_bass.jpg" },
            { name: "Choucroute de poisson", name_en: "Boiled fish with pickles, Sichuan spicy fish", price: "32,80 €", image: "images/plat/individuel/pickled_spicy_fish.jpg" },
            { name: "Intestins et poisson", name_en: "Intestines and fish", price: "32,80 €", image: "images/plat/individuel/fish_and_intestines.jpg" },
            { name: "Poisson bouilli au piment et poivre", name_en: "Boiled fish with chili and pepper", price: "32,80 €", image: "images/plat/individuel/chili_pepper_boiled_fish.jpg" },
            { name: "Crevettes épicées", name_en: "Spicy Shrimps", price: "19,80 €", image: "images/plat/individuel/spicy_shrimps.jpg" },
            { name: "Couteaux de mer à l'huile d'oignons verts", name_en: "Oil Fried Razor Clam with Green Onions", price: "16,80 €", image: "images/plat/individuel/razor_clam_green_onion.jpg" },
            { name: "Calamars et crevettes au sel et poivre", price: "18,80 €", image: "images/plat/individuel/salt_pepper_squid_shrimp.jpg" },
            { name: "Calamars sautés avec légumes", price: "14,80 €", image: "images/plat/individuel/fried_squid_vegetables.jpg" }
        ],
        viandes: [
            { name: "Cuisses de poulet entières grillées", name_en: "Whole grilled chicken legs", price: "18,80 €", image: "images/plat/individuel/whole_chicken_legs.jpg" },
            { name: "Marmite de bœuf", name_en: "Sichuan boiled beef", price: "22,80 €", image: "images/plat/individuel/sichuan_boiled_beef.jpg" },
            { name: "Spécialité de Sichuan (épicé)", name_en: "Sichuan specialty (spicy)", price: "22,80 €", image: "images/plat/individuel/sichuan_specialty_spicy.jpg" },
            { name: "Pieds de cochon braisés", name_en: "Braised Pork Feets", price: "15,80 €", image: "images/plat/individuel/braised_pork_feets.jpg" },
            { name: "Pot de tendon de bœuf", name_en: "Braised Beef Tendon", price: "22,00 €", image: "images/plat/individuel/braised_beef_tendon.jpg" },
            { name: "Pot d'agneau", name_en: "Lamb Pot", price: "22,00 €", image: "images/plat/individuel/lamb_pot.jpg" },
            { name: "Porc frit à la sauce aigre-douce", name_en: "Fried pork with sweet and sour sauce", price: "15,80 €", image: "images/plat/individuel/fried_pork_sweet_sour_sauce.jpg" },
            { name: "Intestins de porc au piment fort", name_en: "Pork intestines with hot pepper", price: "14,80 €", image: "images/plat/individuel/spicy_pork_intestines.jpg" },
            { name: "Porc déchiqueté à la sauce d'ail", name_en: "Shredded Pork with Garlic Sauce", price: "12,80 €", image: "images/plat/individuel/garlic_sauce_shredded_pork.jpg" },
            { name: "Poulet épicé", name_en: "Spicy Chicken", price: "16,80 €", image: "images/plat/individuel/spicy_chicken.jpg" },
            { name: "Poulet sauce aigre-douce", name_en: "Sweet and sour chicken", price: "13,80 €", image: "images/plat/individuel/sweet_sour_chicken.jpg" }
        ],
        legumes: [
            { name: "Assortiment de légumes du marché", name_en: "Market fresh vegetables selection", price: "14,80 €", image: "images/plat/individuel/fresh_vegetables.jpg" },
            { name: "Mapo Tofu (épicé)", price: "10,80 €", image: "images/plat/individuel/mapo_tofu_spicy.jpg" },
            { name: "Aubergine à l'ail", name_en: "Eggplant with Garlic Sauce", price: "12,80 €", image: "images/plat/individuel/eggplant_garlic_sauce.jpg" },
            { name: "Feuilles de tofu au poivre", name_en: "Tofu Sheets with Pepper", price: "12,80 €", image: "images/plat/individuel/tofu_sheets_pepper.jpg" },
            { name: "Zizania avec porc", name_en: "Zizania with Healthy Pork", price: "14,80 €", image: "images/plat/individuel/zizania_pork.jpg" },
            { name: "Luffa avec edamames", price: "12,80 €", image: "images/plat/individuel/luffa_edamame.jpg" },
            { name: "Chou blanc sauté", name_en: "Stir-Fried Cabbage", price: "9,80 €", image: "images/plat/individuel/stir_fried_cabbage.jpg" },
            { name: "Haricots verts sautés", name_en: "Dry-Fried Green Beans", price: "12,80 €", image: "images/plat/individuel/dry_fried_green_beans.jpg" }
        ],
        soupes: [
            { name: "Mala Tang (bœuf, agneau, légumes et viandes épicés)", price: "12,80 €", image: "images/plat/individuel/mala_tang.jpg" },
            { name: "Soupe pékinoise", price: "12,80 €", image: "images/plat/individuel/hot_sour_soup.jpg" },
            { name: "Soupe aux tomates et aux œufs", price: "12,80 €", image: "images/plat/individuel/tomato_egg_soup.jpg" },
            { name: "Soupe aux raviolis de feuilles de tofu au porc", price: "12,80 €", image: "images/plat/individuel/tofu_skin_pork_dumpling_soup.jpg" }
        ],
        riz: [
            { name: "Riz pilaf aux champignons sauvages", name_en: "Wild mushroom pilaf rice", price: "14,80 €", image: "images/plat/individuel/mushroom_rice.jpg" },
            { name: "Riz nature", price: "3,80 €", image: "images/plat/individuel/steamed_rice.jpg" },
            { name: "Raviolis (frit) au porc et chou", price: "12,80 €", image: "images/plat/individuel/fried_pork_dumplings.jpg" },
            { name: "Soupe de wontons (porc et crevettes)", price: "12,80 €", image: "images/plat/individuel/wonton_soup_pork_shrimp.jpg" },
            { name: "Gâteau de riz gluant sauté (bœuf, poulet, légumes, fruits de mer +2€)", price: "13,80 €", image: "images/plat/individuel/glutinous_rice_cake_mix.jpg" }
        ]
    };

    function generateDishes(categoryId, dishes) {
        const grid = document.getElementById(categoryId);
        grid.innerHTML = '';
        
        dishes.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.className = 'dish-card';
            dishCard.dataset.category = categoryId.replace('-grid', '');
            
            let descriptionHTML = '';
            if (dish.name_en) {
                descriptionHTML = `<p class="dish-description">${dish.name_en}</p>`;
            }
            
            dishCard.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}" class="dish-image" width="280" height="210">
                <div class="dish-info">
                    <h4 class="dish-name">${dish.name}</h4>
                    ${descriptionHTML}
                    <p class="dish-price">${dish.price}</p>
                </div>
            `;
            
            grid.appendChild(dishCard);
        });
    }

    function setupFilterNavigation() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const navHeight = document.querySelector('.main-nav').offsetHeight;
        const filterHeight = document.querySelector('.filters-container').offsetHeight;
        const totalOffset = navHeight + filterHeight + 20; // 20px de marge
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const category = btn.dataset.category;
                if (category === 'all') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    const section = document.getElementById(`${category}-grid`).parentElement;
                    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
                    
                    window.scrollTo({
                        top: sectionPosition - totalOffset,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialisation
        const firstBtn = document.querySelector('.filter-btn[data-category="all"]');
        if (firstBtn) {
            firstBtn.click();
        }
    }

    // Initialiser la page
    generateDishes('poissons-grid', menuData.poissons);
    generateDishes('viandes-grid', menuData.viandes);
    generateDishes('legumes-grid', menuData.legumes);
    generateDishes('soupes-grid', menuData.soupes);
    generateDishes('riz-grid', menuData.riz);
    
    setupFilterNavigation();
});