document.addEventListener('DOMContentLoaded', () => {
    console.log('Menu Midi JS loaded');
    
    try {
        // Données du menu
        const menuData = {
            entrees: [
                { 
                    name: "Salade aux Légumes", 
                    price: "4,80 €", 
                    image: "images/plat/menumidi/fresh_vegetable_salad.jpg",
                    translations: {
                        en: "Fresh Vegetable Salad",
                        zh: "蔬菜沙拉"
                    }
                },
                { 
                    name: "Nems au Poulet (3 pièces)", 
                    price: "3,80 €", 
                    image: "images/plat/menumidi/chicken_nems.jpg",
                    translations: {
                        en: "Chicken Nems (3PCS)",
                        zh: "炸春卷 (3个)"
                    }
                },
                { 
                    name: "Raviolis Frits (4 pièces)", 
                    price: "3,80 €", 
                    image: "images/plat/menumidi/fried_dumplings.jpg",
                    translations: {
                        en: "Fried Dumplings (4PCS)",
                        zh: "炸饺子 (4个)"
                    }
                },
                { 
                    name: "Potage Pékinois", 
                    price: "4,80 €", 
                    image: "images/plat/menumidi/hot_and_sour_soup.jpg",
                    translations: {
                        en: "Hot and Sour Soup",
                        zh: "酸辣汤"
                    }
                }
            ],
            plats: [
                { 
                    name: "Riz au Crevette à la Sauce Aigre-Douce", 
                    price: "10,80 €", 
                    image: "images/plat/menumidi/riz_au_crevette_a_la_sauce_aigre_douce.jpg",
                    translations: {
                        en: "Shrimp with Sweet and Sour Sauce with Rice",
                        zh: "酸甜虾饭"
                    }
                },
                { 
                    name: "Riz au Bœuf Sauté aux Oignons", 
                    price: "10,80 €", 
                    image: "images/plat/menumidi/riz_au_boeuf_saute_aux_oignons.jpg",
                    translations: {
                        en: "Beef Onion with Rice",
                        zh: "洋葱牛肉饭"
                    }
                },
                { 
                    name: "Riz à l'Escalope de Poulet Frit", 
                    price: "10,80 €", 
                    image: "images/plat/menumidi/riz_a_l_escalope_de_poulet_frit.jpg",
                    translations: {
                        en: "Chicken Chop with Rice",
                        zh: "鸡排饭"
                    }
                },
                { 
                    name: "Riz au Poulet à la Sauce Aigre-Douce", 
                    price: "10,80 €", 
                    image: "images/plat/menumidi/riz_au_poulet_a_la_sauce_aigre_douce.jpg",
                    translations: {
                        en: "Chicken with Sweet and Sour Sauce with Rice",
                        zh: "咕咾肉饭"
                    }
                },
                { 
                    name: "Riz au Travers de Porc à la Sauce Aigre-Douce", 
                    price: "10,80 €", 
                    image: "images/plat/menumidi/pork_ribs_sweet_sour_rice.jpg",
                    translations: {
                        en: "Pork Ribs with Sweet and Sour Sauce with Rice",
                        zh: "糖醋排骨饭"
                    }
                },
                { 
                    name: "Nouilles Sautées avec Poulet", 
                    price: "10,80 €", 
                    image: "images/plat/menumidi/noodles_fried_chicken.jpg",
                    translations: {
                        en: "Noodles Fried with Chicken",
                        zh: "鸡肉炒面"
                    }
                },
                { 
                    name: "Riz Sauté avec Poulet", 
                    price: "10,80 €", 
                    image: "images/plat/menumidi/rice_fried_chicken.jpg",
                    translations: {
                        en: "Rice Fried with Chicken",
                        zh: "鸡肉炒饭"
                    }
                },
                { 
                    name: "Soupe de Wontons (Porc et Crevette)", 
                    price: "12,80 €", 
                    image: "images/plat/menumidi/wontons_soup_pork_shrimps.jpg",
                    translations: {
                        en: "Wontons Soup (Pork and Shrimps)",
                        zh: "馄饨"
                    }
                },
                { 
                    name: "Raviolis au Porc et Chou (12 pièces)", 
                    price: "10,80 €", 
                    image: "images/plat/menumidi/dumplings_12pcs.jpg",
                    translations: {
                        en: "Dumplings (12PCS)",
                        zh: "手工水饺"
                    }
                }
            ],
            desserts: [
                { 
                    name: "Boulette de riz avec sésame (4 pièces)", 
                    price: "4,80 €", 
                    image: "images/plat/menumidi/boulette_de_riz_avec_sesame.jpg",
                    translations: {
                        en: "Balls glutinous rice (4pcs)",
                        zh: "糯汤圆 (4个)"
                    }
                },
                { 
                    name: "Perle de coco (2 pièces)", 
                    price: "4,80 €", 
                    image: "images/plat/menumidi/perle_de_coco.jpg",
                    translations: {
                        en: "Stuffed sticky rice balls with coconut",
                        zh: "撒米糕 (2个)"
                    }
                },
                { 
                    name: "Lichi au sirop", 
                    price: "4,80 €", 
                    image: "images/plat/menumidi/lichi_au_sirop.jpg",
                    translations: {
                        en: "Lychee in syrup",
                        zh: "糖水荔枝"
                    }
                },
                { 
                    name: "Ananas au sirop", 
                    price: "4,80 €", 
                    image: "images/plat/menumidi/ananas_au_sirop.jpg",
                    translations: {
                        en: "Pineapple in syrup",
                        zh: "糖水菠萝"
                    }
                }
            ]
        };

        // Fonction pour générer les cartes de plats
        const generateDishes = (categoryId, dishes) => {
            const grid = document.getElementById(categoryId);
            if (!grid) {
                console.error(`Element #${categoryId} not found`);
                return;
            }
            
            grid.innerHTML = '';
            
            dishes.forEach(dish => {
                const dishCard = document.createElement('div');
                dishCard.className = 'dish-card';
                
                dishCard.innerHTML = `
                    <img src="${dish.image}" alt="${dish.name}" class="dish-image" loading="lazy">
                    <div class="dish-info">
                        <h4 class="dish-name" data-translate="${dish.name}">${dish.name}</h4>
                        <p class="dish-price">${dish.price}</p>
                    </div>
                `;
                
                grid.appendChild(dishCard);
            });
        };

        // Génération des sections
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

    } catch (error) {
        console.error('Error in menu-midi.js:', error);
    }
});