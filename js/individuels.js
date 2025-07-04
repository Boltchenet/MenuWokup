document.addEventListener('DOMContentLoaded', () => {
    console.log('Plats Individuels JS loaded');
    
    const menuData = {
        poissons: [
            { name: "Bar grillé à la sauce piquante", price: "32,80 €", image: "images/plat/individuel/spicy_grilled_sea_bass.jpg", category: "poissons" },
            { name: "Choucroute de poisson", price: "32,80 €", image: "images/plat/individuel/pickled_spicy_fish.jpg", category: "poissons" },
            { name: "Intestins et poisson", price: "32,80 €", image: "images/plat/individuel/fish_and_intestines.jpg", category: "poissons" },
            { name: "Poisson bouilli au piment et poivre", price: "32,80 €", image: "images/plat/individuel/chili_pepper_boiled_fish.jpg", category: "poissons" },
            { name: "Crevettes épicées", price: "19,80 €", image: "images/plat/individuel/spicy_shrimps.jpg", category: "poissons" },
            { name: "Couteaux de mer à l'huile d'oignons verts", price: "16,80 €", image: "images/plat/individuel/razor_clam_green_onion.jpg", category: "poissons" },
            { name: "Calamars et crevettes au sel et poivre", price: "18,80 €", image: "images/plat/individuel/salt_pepper_squid_shrimp.jpg", category: "poissons" },
            { name: "Calamars sautés avec légumes", price: "14,80 €", image: "images/plat/individuel/fried_squid_vegetables.jpg", category: "poissons" }
        ],
        viandes: [
            { name: "Cuisses de poulet entières grillées", price: "18,80 €", image: "images/plat/individuel/whole_chicken_legs.jpg", category: "viandes" },
            { name: "Marmite de bœuf", price: "22,80 €", image: "images/plat/individuel/sichuan_boiled_beef.jpg", category: "viandes" },
            { name: "Spécialité de Sichuan (épicé)", price: "22,80 €", image: "images/plat/individuel/sichuan_specialty_spicy.jpg", category: "viandes" },
            { name: "Pieds de cochon braisés", price: "15,80 €", image: "images/plat/individuel/braised_pork_feets.jpg", category: "viandes" },
            { name: "Pot de tendon de bœuf", price: "22,00 €", image: "images/plat/individuel/braised_beef_tendon.jpg", category: "viandes" },
            { name: "Pot d'agneau", price: "22,00 €", image: "images/plat/individuel/lamb_pot.jpg", category: "viandes" },
            { name: "Porc frit à la sauce aigre-douce", price: "15,80 €", image: "images/plat/individuel/fried_pork_sweet_sour_sauce.jpg", category: "viandes" },
            { name: "Intestins de porc au piment fort", price: "14,80 €", image: "images/plat/individuel/spicy_pork_intestines.jpg", category: "viandes" },
            { name: "Porc déchiqueté à la sauce d'ail", price: "12,80 €", image: "images/plat/individuel/garlic_sauce_shredded_pork.jpg", category: "viandes" },
            { name: "Poulet épicé", price: "16,80 €", image: "images/plat/individuel/spicy_chicken.jpg", category: "viandes" },
            { name: "Poulet sauce aigre-douce", price: "13,80 €", image: "images/plat/individuel/sweet_sour_chicken.jpg", category: "viandes" }
        ],
        legumes: [
            { name: "Assortiment de légumes du marché", price: "14,80 €", image: "images/plat/individuel/fresh_vegetables.jpg", category: "legumes" },
            { name: "Mapo Tofu (épicé)", price: "10,80 €", image: "images/plat/individuel/mapo_tofu_spicy.jpg", category: "legumes" },
            { name: "Aubergine à l'ail", price: "12,80 €", image: "images/plat/individuel/eggplant_garlic_sauce.jpg", category: "legumes" },
            { name: "Feuilles de tofu au poivre", price: "12,80 €", image: "images/plat/individuel/tofu_sheets_pepper.jpg", category: "legumes" },
            { name: "Zizania avec porc", price: "14,80 €", image: "images/plat/individuel/zizania_pork.jpg", category: "legumes" },
            { name: "Luffa avec edamames", price: "12,80 €", image: "images/plat/individuel/luffa_edamame.jpg", category: "legumes" },
            { name: "Chou blanc sauté", price: "9,80 €", image: "images/plat/individuel/stir_fried_cabbage.jpg", category: "legumes" },
            { name: "Haricots verts sautés", price: "12,80 €", image: "images/plat/individuel/dry_fried_green_beans.jpg", category: "legumes" }
        ],
        soupes: [
            { name: "Mala Tang (bœuf, agneau, légumes et viandes épicés)", price: "12,80 €", image: "images/plat/individuel/mala_tang.jpg", category: "soupes" },
            { name: "Soupe pékinoise", price: "12,80 €", image: "images/plat/individuel/hot_sour_soup.jpg", category: "soupes" },
            { name: "Soupe aux tomates et aux œufs", price: "12,80 €", image: "images/plat/individuel/tomato_egg_soup.jpg", category: "soupes" },
            { name: "Soupe aux raviolis de feuilles de tofu au porc", price: "12,80 €", image: "images/plat/individuel/tofu_skin_pork_dumpling_soup.jpg", category: "soupes" }
        ],
        riz: [
            { name: "Riz pilaf aux champignons sauvages", price: "14,80 €", image: "images/plat/individuel/mushroom_rice.jpg", category: "riz" },
            { name: "Riz nature", price: "3,80 €", image: "images/plat/individuel/steamed_rice.jpg", category: "riz" },
            { name: "Raviolis (frit) au porc et chou", price: "12,80 €", image: "images/plat/individuel/fried_pork_dumplings.jpg", category: "riz" },
            { name: "Soupe de wontons (porc et crevettes)", price: "12,80 €", image: "images/plat/individuel/wonton_soup_pork_shrimp.jpg", category: "riz" },
            { name: "Gâteau de riz gluant sauté (bœuf, poulet, légumes, fruits de mer +2€)", price: "13,80 €", image: "images/plat/individuel/glutinous_rice_cake_mix.jpg", category: "riz" }
        ]
    };

    const translations = {
        fr: {
            "Plats principaux": "Plats principaux",
            "Fondue": "Fondue",
            "Menu Midi": "Menu Midi",
            "Tous": "Tous",
            "Poissons": "Poissons",
            "Viandes": "Viandes",
            "Légumes": "Légumes",
            "Soupes": "Soupes",
            "Riz": "Riz",
            "Poissons & Fruits de Mer": "Poissons & Fruits de Mer",
            "Viandes & Volaille": "Viandes & Volaille",
            "Légumes & Tofu": "Légumes & Tofu",
            "Soupes & Nouilles": "Soupes & Nouilles",
            "Riz & Raviolis": "Riz & Raviolis",
            "Bar grillé à la sauce piquante": "Bar grillé à la sauce piquante",
            "Choucroute de poisson": "Choucroute de poisson",
            "Intestins et poisson": "Intestins et poisson",
            "Poisson bouilli au piment et poivre": "Poisson bouilli au piment et poivre",
            "Crevettes épicées": "Crevettes épicées",
            "Couteaux de mer à l'huile d'oignons verts": "Couteaux de mer à l'huile d'oignons verts",
            "Calamars et crevettes au sel et poivre": "Calamars et crevettes au sel et poivre",
            "Calamars sautés avec légumes": "Calamars sautés avec légumes",
            "Cuisses de poulet entières grillées": "Cuisses de poulet entières grillées",
            "Marmite de bœuf": "Marmite de bœuf",
            "Spécialité de Sichuan (épicé)": "Spécialité de Sichuan (épicé)",
            "Pieds de cochon braisés": "Pieds de cochon braisés",
            "Pot de tendon de bœuf": "Pot de tendon de bœuf",
            "Pot d'agneau": "Pot d'agneau",
            "Porc frit à la sauce aigre-douce": "Porc frit à la sauce aigre-douce",
            "Intestins de porc au piment fort": "Intestins de porc au piment fort",
            "Porc déchiqueté à la sauce d'ail": "Porc déchiqueté à la sauce d'ail",
            "Poulet épicé": "Poulet épicé",
            "Poulet sauce aigre-douce": "Poulet sauce aigre-douce",
            "Assortiment de légumes du marché": "Assortiment de légumes du marché",
            "Mapo Tofu (épicé)": "Mapo Tofu (épicé)",
            "Aubergine à l'ail": "Aubergine à l'ail",
            "Feuilles de tofu au poivre": "Feuilles de tofu au poivre",
            "Zizania avec porc": "Zizania avec porc",
            "Luffa avec edamames": "Luffa avec edamames",
            "Chou blanc sauté": "Chou blanc sauté",
            "Haricots verts sautés": "Haricots verts sautés",
            "Mala Tang (bœuf, agneau, légumes et viandes épicés)": "Mala Tang (bœuf, agneau, légumes et viandes épicés)",
            "Soupe pékinoise": "Soupe pékinoise",
            "Soupe aux tomates et aux œufs": "Soupe aux tomates et aux œufs",
            "Soupe aux raviolis de feuilles de tofu au porc": "Soupe aux raviolis de feuilles de tofu au porc",
            "Riz pilaf aux champignons sauvages": "Riz pilaf aux champignons sauvages",
            "Riz nature": "Riz nature",
            "Raviolis (frit) au porc et chou": "Raviolis (frit) au porc et chou",
            "Soupe de wontons (porc et crevettes)": "Soupe de wontons (porc et crevettes)",
            "Gâteau de riz gluant sauté (bœuf, poulet, légumes, fruits de mer +2€)": "Gâteau de riz gluant sauté (bœuf, poulet, légumes, fruits de mer +2€)"
        },
        en: {
            "Plats principaux": "Main Courses",
            "Fondue": "Fondue",
            "Menu Midi": "Lunch Menu",
            "Tous": "All",
            "Poissons": "Fish",
            "Viandes": "Meats",
            "Légumes": "Vegetables",
            "Soupes": "Soups",
            "Riz": "Rice",
            "Poissons & Fruits de Mer": "Fish & Seafood",
            "Viandes & Volaille": "Meats & Poultry",
            "Légumes & Tofu": "Vegetables & Tofu",
            "Soupes & Nouilles": "Soups & Noodles",
            "Riz & Raviolis": "Rice & Dumplings",
            "Bar grillé à la sauce piquante": "Spicy grilled sea bass",
            "Choucroute de poisson": "Fish with pickled cabbage",
            "Intestins et poisson": "Fish with intestines",
            "Poisson bouilli au piment et poivre": "Fish boiled with chili and pepper",
            "Crevettes épicées": "Spicy shrimps",
            "Couteaux de mer à l'huile d'oignons verts": "Razor clams with scallion oil",
            "Calamars et crevettes au sel et poivre": "Salt and pepper squid with shrimp",
            "Calamars sautés avec légumes": "Stir-fried squid with vegetables",
            "Cuisses de poulet entières grillées": "Whole grilled chicken legs",
            "Marmite de bœuf": "Sichuan boiled beef",
            "Spécialité de Sichuan (épicé)": "Sichuan specialty (spicy)",
            "Pieds de cochon braisés": "Braised pork feet",
            "Pot de tendon de bœuf": "Braised beef tendon",
            "Pot d'agneau": "Lamb hot pot",
            "Porc frit à la sauce aigre-douce": "Sweet and sour pork",
            "Intestins de porc au piment fort": "Spicy pork intestines",
            "Porc déchiqueté à la sauce d'ail": "Shredded pork with garlic sauce",
            "Poulet épicé": "Spicy chicken",
            "Poulet sauce aigre-douce": "Sweet and sour chicken",
            "Assortiment de légumes du marché": "Seasonal vegetable assortment",
            "Mapo Tofu (épicé)": "Mapo Tofu (spicy)",
            "Aubergine à l'ail": "Eggplant with garlic sauce",
            "Feuilles de tofu au poivre": "Peppered tofu sheets",
            "Zizania avec porc": "Zizania with pork",
            "Luffa avec edamames": "Luffa with edamame",
            "Chou blanc sauté": "Stir-fried cabbage",
            "Haricots verts sautés": "Dry-fried green beans",
            "Mala Tang (bœuf, agneau, légumes et viandes épicés)": "Mala Tang (spicy beef, lamb and vegetables)",
            "Soupe pékinoise": "Peking hot and sour soup",
            "Soupe aux tomates et aux œufs": "Tomato and egg soup",
            "Soupe aux raviolis de feuilles de tofu au porc": "Tofu skin pork dumpling soup",
            "Riz pilaf aux champignons sauvages": "Wild mushroom pilaf rice",
            "Riz nature": "Steamed rice",
            "Raviolis (frit) au porc et chou": "Fried pork and cabbage dumplings",
            "Soupe de wontons (porc et crevettes)": "Wonton soup (pork and shrimp)",
            "Gâteau de riz gluant sauté (bœuf, poulet, légumes, fruits de mer +2€)": "Stir-fried glutinous rice cake (beef, chicken, vegetables, seafood +€2)"
        },
        zh: {
            "Plats principaux": "主菜",
            "Fondue": "火锅",
            "Menu Midi": "午餐菜单",
            "Tous": "全部",
            "Poissons": "鱼类",
            "Viandes": "肉类",
            "Légumes": "蔬菜",
            "Soupes": "汤类",
            "Riz": "米饭",
            "Poissons & Fruits de Mer": "海鲜类",
            "Viandes & Volaille": "肉类和家禽",
            "Légumes & Tofu": "蔬菜和豆腐",
            "Soupes & Nouilles": "汤和面条",
            "Riz & Raviolis": "米饭和饺子",
            "Bar grillé à la sauce piquante": "香辣烤鲈鱼",
            "Choucroute de poisson": "酸菜鱼",
            "Intestins et poisson": "鱼杂",
            "Poisson bouilli au piment et poivre": "水煮鱼",
            "Crevettes épicées": "香辣虾",
            "Couteaux de mer à l'huile d'oignons verts": "葱油蛏子",
            "Calamars et crevettes au sel et poivre": "椒盐鱿鱼虾",
            "Calamars sautés avec légumes": "蔬菜炒鱿鱼",
            "Cuisses de poulet entières grillées": "烤全鸡腿",
            "Marmite de bœuf": "水煮牛肉",
            "Spécialité de Sichuan (épicé)": "四川特色菜(辣)",
            "Pieds de cochon braisés": "红烧猪蹄",
            "Pot de tendon de bœuf": "红烧牛筋",
            "Pot d'agneau": "羊肉锅",
            "Porc frit à la sauce aigre-douce": "咕咾肉",
            "Intestins de porc au piment fort": "火爆肥肠",
            "Porc déchiqueté à la sauce d'ail": "蒜泥白肉",
            "Poulet épicé": "辣子鸡",
            "Poulet sauce aigre-douce": "糖醋鸡",
            "Assortiment de légumes du marché": "时令蔬菜拼盘",
            "Mapo Tofu (épicé)": "麻婆豆腐(辣)",
            "Aubergine à l'ail": "鱼香茄子",
            "Feuilles de tofu au poivre": "椒油豆腐皮",
            "Zizania avec porc": "茭白炒肉",
            "Luffa avec edamames": "丝瓜毛豆",
            "Chou blanc sauté": "手撕包菜",
            "Haricots verts sautés": "干煸四季豆",
            "Mala Tang (bœuf, agneau, légumes et viandes épicés)": "麻辣烫(辣味牛羊肉和蔬菜)",
            "Soupe pékinoise": "酸辣汤",
            "Soupe aux tomates et aux œufs": "番茄蛋汤",
            "Soupe aux raviolis de feuilles de tofu au porc": "千张包肉汤",
            "Riz pilaf aux champignons sauvages": "野生菌菇炒饭",
            "Riz nature": "白米饭",
            "Raviolis (frit) au porc et chou": "猪肉白菜煎饺",
            "Soupe de wontons (porc et crevettes)": "鲜虾馄饨汤",
            "Gâteau de riz gluant sauté (bœuf, poulet, légumes, fruits de mer +2€)": "炒年糕(牛肉/鸡肉/蔬菜/海鲜+2€)"
        }
    };

    function generateDishes(categoryId, dishes) {
        const grid = document.getElementById(categoryId);
        if (!grid) {
            console.error(`Element #${categoryId} not found`);
            return;
        }
        
        grid.innerHTML = '';
        
        dishes.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.className = 'dish-card';
            dishCard.dataset.category = dish.category;
            
            dishCard.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}" class="dish-image" loading="lazy">
                <div class="dish-info">
                    <h4 class="dish-name">${dish.name}</h4>
                    <p class="dish-price">${dish.price}</p>
                </div>
            `;
            
            grid.appendChild(dishCard);
        });
    }

    function scrollToCategory(category) {
        const element = document.getElementById(`${category}-grid`);
        if (element) {
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    generateDishes('poissons-grid', menuData.poissons);
    generateDishes('viandes-grid', menuData.viandes);
    generateDishes('legumes-grid', menuData.legumes);
    generateDishes('soupes-grid', menuData.soupes);
    generateDishes('riz-grid', menuData.riz);

    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            if (category === 'all') {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                scrollToCategory(category);
            }
        });
    });

    let currentLanguage = 'fr';
    const languageBtns = document.querySelectorAll('.language-btn');
    
    languageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLanguage = btn.dataset.lang;
            updateTranslations();
            updateActiveLanguageButton();
        });
    });

    function updateActiveLanguageButton() {
        languageBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
        });
    }

    function updateTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
    }

    const animateDishCards = () => {
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
    };

    setTimeout(animateDishCards, 300);
});