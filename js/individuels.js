document.addEventListener('DOMContentLoaded', () => {
    console.log('Plats Individuels JS loaded');
    
    try {
        // Données du menu
        const menuData = {
            poissons: [
                { 
                    name: "Bar grillé à la sauce piquante", 
                    price: "32,00 €", 
                    image: "images/plat/individuel/spicy_grilled_sea_bass.jpg",
                    translations: {
                        en: "Spicy Grilled Sea Bass",
                        zh: "香辣烤鱼"
                    }
                },
                { 
                    name: "Choucroute de poisson", 
                    price: "32,00 €", 
                    image: "images/plat/individuel/choucroute_de_poisson.jpg",
                    translations: {
                        en: "Boiled Fish with Pickles",
                        zh: "酸菜鱼"
                    }
                },
                { 
                    name: "Intestins et poisson", 
                    price: "32,00 €", 
                    image: "images/plat/individuel/intestins_et_poisson.jpg",
                    translations: {
                        en: "Intestines and Fish",
                        zh: "肠肚鱼"
                    }
                },
                { 
                    name: "Poisson bouilli au piment et poivre", 
                    price: "32,00 €", 
                    image: "images/plat/individuel/poisson_bouilli_au_piment_et_poivre.JPG",
                    translations: {
                        en: "Boiled Fish with Chili and Pepper",
                        zh: "沸腾鱼"
                    }
                },
                { 
                    name: "Crevettes épicées", 
                    price: "19,00 €", 
                    image: "images/plat/individuel/crevettes_epicees.jpg",
                    translations: {
                        en: "Spicy Shrimps",
                        zh: "辣子虾"
                    }
                },
                { 
                    name: "Couteaux de mer à l'huile d'oignons verts", 
                    price: "16,00 €", 
                    image: "images/plat/individuel/couteaux_mer_oignons_verts.jpg",
                    translations: {
                        en: "Oil Fried Razor Clam with Green Onions",
                        zh: "葱油蛏子"
                    }
                },
                { 
                    name: "Calamars et crevettes au sel et poivre", 
                    price: "18,00 €", 
                    image: "images/plat/individuel/calamars_crevettes_sel_poivre.jpg",
                    translations: {
                        en: "Squid and Shrimp with Salt and Pepper",
                        zh: "椒盐鱿虾"
                    }
                },
                { 
                    name: "Calamars sautés avec légumes", 
                    price: "14,00 €", 
                    image: "images/plat/individuel/calamars_sautes_legumes.jpg",
                    translations: {
                        en: "Fried Squid with Pickles",
                        zh: "鱿鱼炒蔬菜"
                    }
                },
                // Nouveaux plats poissons
                { 
                    name: "Écrevisses épicées au poivre de Sichuan", 
                    price: "16,80 €", 
                    image: "images/plat/individuel/ecrevisses-epicees-sichuan.JPG",
                    translations: {
                        en: "Spicy and Numbing Crayfish",
                        zh: "麻辣小龙虾"
                    }
                },
                { 
                    name: "Crevettes braisées à la sauce soja", 
                    price: "19,80 €", 
                    image: "images/plat/individuel/crevettes-braisees-sauce-soja.JPG",
                    translations: {
                        en: "Braised Shrimp in Soy Sauce",
                        zh: "红烧虾"
                    }
                },
                { 
                    name: "Salade froide de peau de poisson au poivre vert", 
                    price: "14,80 €", 
                    image: "images/plat/individuel/salade-peau-de-poisson-poivre-vert.JPG",
                    translations: {
                        en: "Cold Fish Skin Salad with Green Sichuan Pepper",
                        zh: "凉拌藤椒鱼皮"
                    }
                }
            ],
            viandes: [
                { 
                    name: "Porc frit à la sauce aigre-douce", 
                    price: "15,00 €", 
                    image: "images/plat/individuel/fried_pork_sweet_sour_sauce.jpg",
                    translations: {
                        en: "Fried Pork with Sweet and Sour Sauce",
                        zh: "锅包肉"
                    }
                },
                { 
                    name: "Marmite de bœuf", 
                    price: "22,00 €", 
                    image: "images/plat/individuel/sichuan_boiled_beef.jpg",
                    translations: {
                        en: "Sichuan Boiled Beef",
                        zh: "水煮牛肉"
                    }
                },
                { 
                    name: "Spécialité de Sichuan (épicé)", 
                    price: "22,00 €", 
                    image: "images/plat/individuel/sichuan_specialty_spicy.jpg",
                    translations: {
                        en: "Sichuan Specialty (Spicy)",
                        zh: "毛血旺"
                    }
                },
                { 
                    name: "Pieds de cochon braisés", 
                    price: "15,00 €", 
                    image: "images/plat/individuel/pieds_de_cochon_braises.PNG",
                    translations: {
                        en: "Braised Pork Feets",
                        zh: "红焖猪脚"
                    }
                },
                { 
                    name: "Pot de tendon de bœuf", 
                    price: "22,00 €", 
                    image: "images/plat/individuel/pot_de_tendon_de_boeuf.jpg",
                    translations: {
                        en: "Braised Beef Tendon",
                        zh: "牛筋煲"
                    }
                },
                { 
                    name: "Pot d'agneau", 
                    price: "22,00 €", 
                    image: "images/plat/individuel/pot_d_agneau.jpg",
                    translations: {
                        en: "Lamb Pot",
                        zh: "羊肉煲"
                    }
                },
                { 
                    name: "Poulet épicé", 
                    price: "16,00 €", 
                    image: "images/plat/individuel/poulet_epice.jpg",
                    translations: {
                        en: "Spicy Chicken",
                        zh: "辣子鸡"
                    }
                },
                { 
                    name: "Porc déchiqueté à la sauce d'ail", 
                    price: "12,00 €", 
                    image: "images/plat/individuel/porc_dechiquete_sauce_ail.jpg",
                    translations: {
                        en: "Shredded Pork with Garlic Sauce",
                        zh: "鱼香肉丝"
                    }
                },
                { 
                    name: "Intestins de porc au piment fort", 
                    price: "14,80 €", 
                    image: "images/plat/individuel/intestins_porc_piment_fort.JPG",
                    translations: {
                        en: "Pork Intestines with Hot Pepper",
                        zh: "尖椒肥肠"
                    }
                },
                { 
                    name: "Bœuf sauté aux oignons", 
                    price: "14,80 €", 
                    image: "images/plat/individuel/boeuf_saute_oignons.jpg",
                    translations: {
                        en: "Beef Sautéed with Onions",
                        zh: "洋葱炒牛肉"
                    }
                },
                { 
                    name: "Bœuf aromatisé au cumin", 
                    price: "14,80 €", 
                    image: "images/plat/individuel/boeuf_cumin.jpg",
                    translations: {
                        en: "Cumin Beef",
                        zh: "孜然牛肉"
                    }
                },
                { 
                    name: "Poulet à la sauce aigre-douce", 
                    price: "13,80 €", 
                    image: "images/plat/individuel/poulet_sauce_aigre_douce.jpg",
                    translations: {
                        en: "Chicken with Sweet and Sour Sauce",
                        zh: "咕咾鸡"
                    }
                },
                { 
                    name: "Travers de porc à la sauce aigre-douce", 
                    price: "13,80 €", 
                    image: "images/plat/individuel/travers_porc_sauce_aigre_douce.JPG",
                    translations: {
                        en: "Pork Ribs with Sweet and Sour Sauce",
                        zh: "糖醋排骨"
                    }
                },
                { 
                    name: "Filet de porc à la sauce aigre-douce", 
                    price: "15,80 €", 
                    image: "images/plat/individuel/filet_porc_sauce_aigre_douce.jpg",
                    translations: {
                        en: "Pork Fillet with Sweet and Sour Sauce",
                        zh: "糖醋里脊"
                    }
                },
                { 
                    name: "Porc cuit en deux temps", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/porc_cuit_en_deux_temps.jpg",
                    translations: {
                        en: "Twice-Cooked Pork",
                        zh: "回锅肉"
                    }
                },
                { 
                    name: "Travers de porc sel et poivre", 
                    price: "13,80 €", 
                    image: "images/plat/individuel/travers_porc_sel_poivre.jpg",
                    translations: {
                        en: "Salt and Pepper Pork Ribs",
                        zh: "椒盐排骨"
                    }
                },
                // Nouveaux plats viandes
                { 
                    name: "Bœuf sauté au melon amer", 
                    price: "16,80 €", 
                    image: "images/plat/individuel/boeuf-saute-au-melon-amer.JPG",
                    translations: {
                        en: "Bitter Melon Stir-Fried with Beef",
                        zh: "苦瓜炒牛肉"
                    }
                },
                { 
                    name: "Bœuf au poivre vert de Sichuan", 
                    price: "16,80 €", 
                    image: "images/plat/individuel/boeuf-poivre-vert-sichuan.JPG",
                    translations: {
                        en: "Beef with Green Sichuan Pepper",
                        zh: "藤椒牛肉"
                    }
                },
                { 
                    name: "Émincé de porc sauté aux tiges de laitue", 
                    price: "16,80 €", 
                    image: "images/plat/individuel/porc-saute-tiges-de-laitue.JPG",
                    translations: {
                        en: "Stir-Fried Lettuce Stems with Sliced Pork",
                        zh: "莴笋肉片"
                    }
                },
                { 
                    name: "Abats de poulet au poivre vert de Sichuan", 
                    price: "16,80 €", 
                    image: "images/plat/individuel/abats-poulet-poivre-vert-sichuan.JPG",
                    translations: {
                        en: "Chicken Offal with Green Sichuan Pepper",
                        zh: "藤椒鸡杂"
                    }
                }
            ],
            legumes: [
                { 
                    name: "Mapo Tofu (Épicé)", 
                    price: "10,80 €", 
                    image: "images/plat/individuel/mapo_tofu_epice.jpg",
                    translations: {
                        en: "Mapo Tofu (Spicy)",
                        zh: "麻辣豆腐"
                    }
                },
                { 
                    name: "Aubergine à l'ail", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/aubergine_ail.jpg",
                    translations: {
                        en: "Eggplant with Garlic Sauce",
                        zh: "鱼香茄子"
                    }
                },
                { 
                    name: "Feuilles de tofu au poivre", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/feuilles_tofu_poivre.JPG",
                    translations: {
                        en: "Tofu Sheets with Pepper",
                        zh: "尖椒干豆腐"
                    }
                },
                { 
                    name: "Zizania avec porc sauté", 
                    price: "14,80 €", 
                    image: "images/plat/individuel/zizania_porc_saute.jpg",
                    translations: {
                        en: "Zizania with Healthy Pork",
                        zh: "荸白炒肉丝"
                    }
                },
                { 
                    name: "Luffa sauté avec edamames", 
                    price: "14,80 €", 
                    image: "images/plat/individuel/luffa_edamames.jpg",
                    translations: {
                        en: "Luffa with Edamames",
                        zh: "丝瓜炒毛豆"
                    }
                },
                { 
                    name: "Chou blanc sauté", 
                    price: "9,80 €", 
                    image: "images/plat/individuel/chou_blanc_saute.jpg",
                    translations: {
                        en: "Chinese Cabbage Stir-Fry",
                        zh: "手撕包菜"
                    }
                },
                { 
                    name: "Haricots verts sautés", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/haricots_verts_saute.jpg",
                    translations: {
                        en: "Dry Fried Green Beans",
                        zh: "干煸四季豆"
                    }
                },
                { 
                    name: "Chou-fleur sauté", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/chou_fleur_saute.jpg",
                    translations: {
                        en: "Stir Fried Cauliflower",
                        zh: "干煸花菜"
                    }
                },
                { 
                    name: "Pommes de terre aigres et piquantes", 
                    price: "9,80 €", 
                    image: "images/plat/individuel/pommes_de_terre_aigres_piquantes.jpg",
                    translations: {
                        en: "Hot and Sour Shredded Potato",
                        zh: "酸辣土豆丝"
                    }
                },
                { 
                    name: "Chou de Shanghai sauté", 
                    price: "9,00 €", 
                    image: "images/plat/individuel/chou_shanghai_saute.jpg",
                    translations: {
                        en: "Sautéed Shanghai Cabbage",
                        zh: "清炒上海青"
                    }
                },
                { 
                    name: "Légumes sautés", 
                    price: "12,00 €", 
                    image: "images/plat/individuel/legumes_sautes.jpg",
                    translations: {
                        en: "Sautéed Vegetables",
                        zh: "清炒时蔬"
                    }
                },
                // Nouveaux plats légumes
                { 
                    name: "Chou chinois au tofu frit", 
                    price: "10,80 €", 
                    image: "images/plat/individuel/chou-chinois-au-tofu-frit.JPG",
                    translations: {
                        en: "Napa Cabbage with Fried Tofu",
                        zh: "白菜油豆腐"
                    }
                },
                { 
                    name: "Laitue romaine sautée à l'ail", 
                    price: "16,80 €", 
                    image: "images/plat/individuel/laitue-romaine-sautee-ail.JPG",
                    translations: {
                        en: "Stir-Fried Romaine Lettuce with Garlic",
                        zh: "蒜蓉油麦菜"
                    }
                }
            ],
            soupes: [
                { 
                    name: "Mala Tang (Bœuf/Agneau)", 
                    price: "12,00 €", 
                    image: "images/plat/individuel/mala_tang_boeuf_agneau.jpg",
                    translations: {
                        en: "Mala Tang (Beef/Lamb) (Spicy vegetables and meats)",
                        zh: "麻辣烫（牛肉/羊肉）"
                    }
                },
                { 
                    name: "Soupe Pékinoise", 
                    price: "12,00 €", 
                    image: "images/plat/individuel/soupe_pekinoise.jpg",
                    translations: {
                        en: "Hot and Sour Soup",
                        zh: "酸辣汤"
                    }
                },
                { 
                    name: "Soupe aux tomates et aux œufs", 
                    price: "12,00 €", 
                    image: "images/plat/individuel/soupe_tomates_oeufs.JPG",
                    translations: {
                        en: "Tomato and Egg Soup",
                        zh: "番茄蛋汤"
                    }
                },
                { 
                    name: "Soupe aux raviolis de feuilles de tofu au porc", 
                    price: "14,00 €", 
                    image: "images/plat/individuel/soupe_raviolis_tofu_porc.jpg",
                    translations: {
                        en: "Tofu Skin and Pork Dumplings Soup",
                        zh: "百叶包馄饨汤"
                    }
                },
                { 
                    name: "Soupe de nouilles aux intestins de porc", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/nouilles_intestins_porc.jpg",
                    translations: {
                        en: "Noodle Soup with Pig Intestines",
                        zh: "猪肠面汤"
                    }
                },
                { 
                    name: "Soupe de nouilles à la marmite de bœuf", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/nouilles_marmite_boeuf.JPG",
                    translations: {
                        en: "Noodle Soup with Sichuan Boiled Beef",
                        zh: "水煮牛肉面"
                    }
                },
                { 
                    name: "Soupe de nouilles à la choucroute et porc haché cru", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/nouilles_choucroute_porc_hache.jpg",
                    translations: {
                        en: "Noodle Soup with Pork and Pickles",
                        zh: "酸菜猪肉末面"
                    }
                },
                { 
                    name: "Nouilles aux tomates et bœuf", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/nouilles_tomates_boeuf.jpg",
                    translations: {
                        en: "Noodles with Tomatoes and Beef",
                        zh: "番茄牛肉面"
                    }
                },
                { 
                    name: "Soupe de nouilles aux pieds de cochon", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/nouilles_pieds_de_cochon.jpg",
                    translations: {
                        en: "Pork Feets Noodles",
                        zh: "猪脚面汤"
                    }
                },
                { 
                    name: "Soupe de nouilles à la choucroute de poisson", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/nouilles_choucroute_poisson.jpg",
                    translations: {
                        en: "Noodles with Boiled Fish and Pickles",
                        zh: "酸菜鱼面"
                    }
                },
                { 
                    name: "Soupe de nouilles aux côtes de porc saumuré", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/nouilles_cotes_porc_saumure.jpg",
                    translations: {
                        en: "Noodles with Chop Pork",
                        zh: "咸排骨面"
                    }
                },
                { 
                    name: "Soupe de nouilles de riz", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/soupe_nouilles_de_riz.jpg",
                    translations: {
                        en: "Soup Rice Noodles",
                        zh: "米粉汤"
                    }
                },
                // Nouveau plat soupes
                { 
                    name: "Marmite de côtes de porc aux légumes fermentés", 
                    price: "35,80 €", 
                    image: "images/plat/individuel/marmite-cotes-de-porc-legumes-fermentes.JPG",
                    translations: {
                        en: "Pickled Cabbage and Pork Bone Hotpot",
                        zh: "酸菜筒骨砂锅"
                    }
                }
            ],
            riz: [
                { 
                    name: "Riz nature", 
                    price: "2,00 €", 
                    image: "images/plat/individuel/riz_nature.jpg",
                    translations: {
                        en: "Steamed Rice",
                        zh: "白米饭"
                    }
                },
                { 
                    name: "Raviolis (Frit) au Porc et Chou", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/raviolis_frit_porc_chou.JPG",
                    translations: {
                        en: "Dumplings (Fried) with Pork and Cabbage",
                        zh: "手工水饺 (15PCS)"
                    }
                },
                { 
                    name: "Soupe de Wontons", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/soupe_wontons.jpg",
                    translations: {
                        en: "Wontons Soup (Pork and Shrimps)",
                        zh: "馄饨"
                    }
                },
                { 
                    name: "Gâteau de Riz Glutineux Sauté", 
                    price: "13,80 €", 
                    image: "images/plat/individuel/gateau_riz_glutineux_saute.jpg",
                    translations: {
                        en: "Wrice Cake Saute Glutinous (Beef/Chicken/Vegetables/Seafood+2€)",
                        zh: "炒年糕 (牛肉鸡肉蔬菜海鲜+2€)"
                    }
                },
                { 
                    name: "Nouilles à l'Agneau", 
                    price: "13,80 €", 
                    image: "images/plat/individuel/nouilles_agneau.JPG",
                    translations: {
                        en: "Noodles with Lamb",
                        zh: "红焖羊肉面"
                    }
                },
                { 
                    name: "Nouilles de Riz Sautées", 
                    price: "12,80 €", 
                    image: "images/plat/individuel/nouilles_riz_sautees.jpg",
                    translations: {
                        en: "Fried Rice Noodles (Beef/Chicken/Vegetables/Seafood+2€)",
                        zh: "炒河粉 (牛肉鸡肉蔬菜海鲜+2€)"
                    }
                },
                { 
                    name: "Nouilles Sautées", 
                    price: "10,80 €", 
                    image: "images/plat/individuel/nouilles_sautees.jpg",
                    translations: {
                        en: "Fried Noodles (Beef/Chicken/Seafood+2€)",
                        zh: "炒面 (牛肉鸡肉海鲜+2€)"
                    }
                },
                { 
                    name: "Riz Sauté", 
                    price: "10,80 €", 
                    image: "images/plat/individuel/riz_saute.jpg",
                    translations: {
                        en: "Fried Rice (Beef/Chicken/Shrimps+2€/Foie Gras+2€)",
                        zh: "炒饭 (牛肉鸡虾+2€/鹅肝酱+2€)"
                    }
                },
                { 
                    name: "Nouilles Pékinnoises", 
                    price: "10,80 €", 
                    image: "images/plat/individuel/nouilles_pekinnoises.jpg",
                    translations: {
                        en: "Noodles with Soybean Paste",
                        zh: "炸酱面"
                    }
                }
            ]
        };

        // [Le reste du code original reste exactement le même...]
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
                dishCard.dataset.category = dish.category;
                
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
        generateDishes('poissons-grid', menuData.poissons);
        generateDishes('viandes-grid', menuData.viandes);
        generateDishes('legumes-grid', menuData.legumes);
        generateDishes('soupes-grid', menuData.soupes);
        generateDishes('riz-grid', menuData.riz);

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

         // Gestion des filtres
        document.querySelectorAll('.filter-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.dataset.category;
                scrollToCategory(category);
            });
        });

        // Activer le premier filtre par défaut
        document.querySelector('.filter-tab[data-category="poissons"]').classList.add('active');

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

    } catch (error) {
        console.error('Error in individuels.js:', error);
    }
});
