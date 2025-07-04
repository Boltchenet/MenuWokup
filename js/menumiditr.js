const menuMidiTranslations = {
    fr: {
        "Menu Midi": "Menu Midi",
        "Formule Midi": "Formule Midi",
        "Entrée + Plat ou Plat + Dessert": "Entrée + Plat ou Plat + Dessert",
        "Entrée + Plat + Dessert": "Entrée + Plat + Dessert",
        "Entrées": "Entrées",
        "Plats Principaux": "Plats Principaux",
        "Desserts": "Desserts",
        "Salade aux légumes": "Salade aux légumes",
        "3 nems au poulet": "3 nems au poulet",
        "4 raviolis frits": "4 raviolis frits",
        "Potage chinois": "Potage chinois",
        "Riz au travers de porc, sauce aigre-douce": "Riz au travers de porc, sauce aigre-douce",
        "Riz au bœuf sauté aux oignons": "Riz au bœuf sauté aux oignons",
        "Riz à l'escalope de poulet frit": "Riz à l'escalope de poulet frit",
        "Riz au poulet, sauce aigre-douce": "Riz au poulet, sauce aigre-douce",
        "Riz aux crevettes, sauce aigre-douce": "Riz aux crevettes, sauce aigre-douce",
        "Nouilles sautées au poulet": "Nouilles sautées au poulet",
        "4 boulettes de riz au sésame": "4 boulettes de riz au sésame",
        "Litchis au sirop": "Litchis au sirop",
        "2 perles de coco": "2 perles de coco",
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
        "Salade aux légumes": "Vegetable Salad",
        "3 nems au poulet": "3 Chicken Spring Rolls",
        "4 raviolis frits": "4 Fried Dumplings",
        "Potage chinois": "Chinese Soup",
        "Riz au travers de porc, sauce aigre-douce": "Pork with Sweet & Sour Sauce Rice",
        "Riz au bœuf sauté aux oignons": "Beef with Onions Rice",
        "Riz à l'escalope de poulet frit": "Fried Chicken Cutlet Rice",
        "Riz au poulet, sauce aigre-douce": "Sweet & Sour Chicken Rice",
        "Riz aux crevettes, sauce aigre-douce": "Sweet & Sour Shrimp Rice",
        "Nouilles sautées au poulet": "Chicken Fried Noodles",
        "4 boulettes de riz au sésame": "4 Sesame Rice Balls",
        "Litchis au sirop": "Lychees in Syrup",
        "2 perles de coco": "2 Coconut Balls",
        "Ananas au sirop": "Pineapple in Syrup"
    },
    zh: {
        "Menu Midi": "午餐菜单",
        "Formule Midi": "午餐套餐",
        "Entrée + Plat ou Plat + Dessert": "前菜+主菜 或 主菜+甜点",
        "Entrée + Plat + Dessert": "前菜+主菜+甜点",
        "Entrées": "前菜",
        "Plats Principaux": "主菜",
        "Desserts": "甜点",
        "Salade aux légumes": "蔬菜沙拉",
        "3 nems au poulet": "鸡肉春卷(3个)",
        "4 raviolis frits": "煎饺(4个)",
        "Potage chinois": "中式例汤",
        "Riz au travers de porc, sauce aigre-douce": "咕咾肉饭",
        "Riz au bœuf sauté aux oignons": "洋葱牛肉饭",
        "Riz à l'escalope de poulet frit": "炸鸡排饭",
        "Riz au poulet, sauce aigre-douce": "糖醋鸡饭",
        "Riz aux crevettes, sauce aigre-douce": "糖醋虾饭",
        "Nouilles sautées au poulet": "鸡肉炒面",
        "4 boulettes de riz au sésame": "芝麻汤圆(4个)",
        "Litchis au sirop": "荔枝糖水",
        "2 perles de coco": "椰丝球(2个)",
        "Ananas au sirop": "菠萝糖水"
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