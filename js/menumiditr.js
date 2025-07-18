const menuMidiTranslations = {
    fr: {
        "Menu Midi": "Menu Midi",
        "Formule Midi": "Formule Midi",
        "Entrée + Plat ou Plat + Dessert": "Entrée + Plat ou Plat + Dessert",
        "Entrée + Plat + Dessert": "Entrée + Plat + Dessert",
        "Entrées": "Entrées",
        "Plats Principaux": "Plats Principaux",
        "Desserts": "Desserts",
        "Salade aux Légumes": "Salade aux Légumes",
        "Nems au Poulet (3 pièces)": "Nems au Poulet (3 pièces)",
        "Raviolis Frits (4 pièces)": "Raviolis Frits (4 pièces)",
        "Potage Pékinois": "Potage Pékinois",
        "Riz au Crevette à la Sauce Aigre-Douce": "Riz au Crevette à la Sauce Aigre-Douce",
        "Riz au Bœuf Sauté aux Oignons": "Riz au Bœuf Sauté aux Oignons",
        "Riz à l'Escalope de Poulet Frit": "Riz à l'Escalope de Poulet Frit",
        "Riz au Poulet à la Sauce Aigre-Douce": "Riz au Poulet à la Sauce Aigre-Douce",
        "Riz au Travers de Porc à la Sauce Aigre-Douce": "Riz au Travers de Porc à la Sauce Aigre-Douce",
        "Nouilles Sautées avec Poulet": "Nouilles Sautées avec Poulet",
        "Riz Sauté avec Poulet": "Riz Sauté avec Poulet",
        "Soupe de Wontons (Porc et Crevette)": "Soupe de Wontons (Porc et Crevette)",
        "Raviolis au Porc et Chou (12 pièces)": "Raviolis au Porc et Chou (12 pièces)",
        "Boulette de riz avec sésame (4 pièces)": "Boulette de riz avec sésame (4 pièces)",
        "Perle de coco (2 pièces)": "Perle de coco (2 pièces)",
        "Lichi au sirop": "Lichi au sirop",
        "Ananas au sirop": "Ananas au sirop"
    },
    en: {
        "Menu Midi": "Lunch Menu",
        "Formule Midi": "Lunch Set",
        "Entrée + Plat ou Plat + Dessert": "Starter + Main or Main + Dessert",
        "Entrée + Plat + Dessert": "Starter + Main + Dessert",
        "Entrées": "Starters",
        "Plats Principaux": "Main Courses",
        "Desserts": "Desserts",
        "Salade aux Légumes": "Fresh Vegetable Salad",
        "Nems au Poulet (3 pièces)": "Chicken Nems (3PCS)",
        "Raviolis Frits (4 pièces)": "Fried Dumplings (4PCS)",
        "Potage Pékinois": "Hot and Sour Soup",
        "Riz au Crevette à la Sauce Aigre-Douce": "Shrimp with Sweet and Sour Sauce with Rice",
        "Riz au Bœuf Sauté aux Oignons": "Beef Onion with Rice",
        "Riz à l'Escalope de Poulet Frit": "Chicken Chop with Rice",
        "Riz au Poulet à la Sauce Aigre-Douce": "Chicken with Sweet and Sour Sauce with Rice",
        "Riz au Travers de Porc à la Sauce Aigre-Douce": "Pork Ribs with Sweet and Sour Sauce with Rice",
        "Nouilles Sautées avec Poulet": "Noodles Fried with Chicken",
        "Riz Sauté avec Poulet": "Rice Fried with Chicken",
        "Soupe de Wontons (Porc et Crevette)": "Wontons Soup (Pork and Shrimps)",
        "Raviolis au Porc et Chou (12 pièces)": "Dumplings (12PCS)",
        "Boulette de riz avec sésame (4 pièces)": "Balls glutinous rice (4pcs)",
        "Perle de coco (2 pièces)": "Stuffed sticky rice balls with coconut",
        "Lichi au sirop": "Lychee in syrup",
        "Ananas au sirop": "Pineapple in syrup"
    },
    zh: {
        "Menu Midi": "午餐菜单",
        "Formule Midi": "午餐套餐",
        "Entrée + Plat ou Plat + Dessert": "前菜+主菜 或 主菜+甜点",
        "Entrée + Plat + Dessert": "前菜+主菜+甜点",
        "Entrées": "前菜",
        "Plats Principaux": "主菜",
        "Desserts": "甜点",
        "Salade aux Légumes": "蔬菜沙拉",
        "Nems au Poulet (3 pièces)": "炸春卷 (3个)",
        "Raviolis Frits (4 pièces)": "炸饺子 (4个)",
        "Potage Pékinois": "酸辣汤",
        "Riz au Crevette à la Sauce Aigre-Douce": "酸甜虾饭",
        "Riz au Bœuf Sauté aux Oignons": "洋葱牛肉饭",
        "Riz à l'Escalope de Poulet Frit": "鸡排饭",
        "Riz au Poulet à la Sauce Aigre-Douce": "咕咾肉饭",
        "Riz au Travers de Porc à la Sauce Aigre-Douce": "糖醋排骨饭",
        "Nouilles Sautées avec Poulet": "鸡肉炒面",
        "Riz Sauté avec Poulet": "鸡肉炒饭",
        "Soupe de Wontons (Porc et Crevette)": "馄饨",
        "Raviolis au Porc et Chou (12 pièces)": "手工水饺",
        "Boulette de riz avec sésame (4 pièces)": "糯汤圆 (4个)",
        "Perle de coco (2 pièces)": "糯米糍 (2个)",
        "Lichi au sirop": "糖水荔枝",
        "Ananas au sirop": "糖水菠萝"
    }
};

// Fonction de traduction
function updateTranslations(lang) {
    try {
        const translations = menuMidiTranslations[lang] || menuMidiTranslations.fr;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    } catch (error) {
        console.error('Translation error:', error);
    }
}

// Gestion du changement de langue
document.addEventListener('DOMContentLoaded', () => {
    const languageBtns = document.querySelectorAll('.language-btn');
    
    languageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            languageBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTranslations(lang);
        });
    });
    
    // Initialiser avec le français
    updateTranslations('fr');
});
