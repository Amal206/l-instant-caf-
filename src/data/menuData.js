/**
 * Carte digitale de L’instant.
 * Les prix sont indicatifs (en dinars tunisiens) et doivent être ajustés à la carte officielle.
 */
export const menuCategories = [
  {
    id: 'petit-dejeuner',
    label: 'Petit-déjeuner',
    description: 'Des matinées douces, servies jusqu’à midi.',
    items: [
      {
        id: 'pdj-instant',
        name: 'Petit-déjeuner L’instant',
        description: 'Œufs au choix, pain maison, huile d’olive, fromage frais, confiture artisanale, olives et thé à la menthe.',
        price: 16.5,
        tags: ['Signature'],
      },
      {
        id: 'chakchouka',
        name: 'Chakchouka maison',
        description: 'Poivrons confits, tomates, œuf au plat et harissa douce, accompagnés de pain chaud.',
        price: 12,
        tags: ['Fait maison'],
      },
      {
        id: 'lablabi',
        name: 'Lablabi traditionnel',
        description: 'Pois chiches à la sauce cumin, pain rassis, œuf poché, harissa et huile d’olive.',
        price: 9,
        tags: ['Fait maison'],
      },
      {
        id: 'omelette',
        name: 'Omelette aux herbes',
        description: 'Trois œufs, persil, menthe fraîche et fromage de chèvre.',
        price: 11,
        tags: ['Végétarien'],
      },
      {
        id: 'pain-perdu',
        name: 'Pain perdu à la fleur d’oranger',
        description: 'Brioche dorée, miel de fleurs et boule de glace vanille.',
        price: 13,
        tags: ['Végétarien'],
      },
    ],
  },
  {
    id: 'cafes',
    label: 'Cafés & chauds',
    description: 'Une torréfaction soignée, des gestes précis.',
    items: [
      {
        id: 'cafe-turc',
        name: 'Café turc',
        description: 'Préparé à l’ancienne dans le cezve, mousse dorée, sucre au choix.',
        price: 3.5,
        tags: ['Traditionnel'],
      },
      {
        id: 'expresso',
        name: 'Expresso',
        description: 'Intense et velouté, un double à partager si l’envie vous prend.',
        price: 2.5,
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Espresso, lait vaporisé et mousse onctueuse.',
        price: 4.5,
        tags: ['Signature'],
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Double espresso et lait soyeux, léger et réconfortant.',
        price: 5,
      },
      {
        id: 'latte-caramel',
        name: 'Latte caramel',
        description: 'Sirop de caramel maison et crème légère.',
        price: 5.5,
      },
      {
        id: 'chocolat-chaud',
        name: 'Chocolat chaud',
        description: 'Chocolat noir 70 %, crème fouettée et copeaux.',
        price: 6,
      },
      {
        id: 'the-menthe',
        name: 'Thé à la menthe',
        description: 'Thé vert, menthe fraîche et pignons, servi en théière.',
        price: 4,
      },
    ],
  },
  {
    id: 'fraicheurs',
    label: 'Jus & fraîcheurs',
    description: 'Pressés minute, glacés ou mixés.',
    items: [
      {
        id: 'jus-orange',
        name: 'Jus d’orange pressé',
        description: 'Pressé à la minute, sans sucre ajouté.',
        price: 6,
      },
      {
        id: 'citronnade',
        name: 'Citronnade à la menthe',
        description: 'Citron frais, menthe et eau de fleur d’oranger.',
        price: 5.5,
      },
      {
        id: 'cocktail-fruits',
        name: 'Cocktail de fruits frais',
        description: 'Sélection de fruits de saison, mixés avec soin.',
        price: 6.5,
        tags: ['Végétarien'],
      },
      {
        id: 'iced-latte',
        name: 'Iced latte',
        description: 'Espresso, lait froid et glaçons.',
        price: 6,
      },
      {
        id: 'milkshake',
        name: 'Milkshake',
        description: 'Vanille, chocolat ou fraise, crème fouettée.',
        price: 7.5,
      },
      {
        id: 'eau',
        name: 'Eau minérale',
        description: '50 cl, plate ou gazeuse.',
        price: 2,
      },
    ],
  },
  {
    id: 'mezze',
    label: 'Entrées & mezze',
    description: 'À partager, pour commencer doucement.',
    items: [
      {
        id: 'salade-mechouia',
        name: 'Salade méchouia',
        description: 'Poivrons et tomates grillés, thon, œuf et olives noires.',
        price: 9,
      },
      {
        id: 'brik',
        name: 'Brik à l’œuf',
        description: 'Feuille de brick croustillante, œuf coulant et persil.',
        price: 6.5,
        tags: ['Fait maison'],
      },
      {
        id: 'houmous',
        name: 'Houmous & labneh',
        description: 'Pois chiches, tahini, pain chaud et huile d’olive.',
        price: 8,
        tags: ['Végétarien'],
      },
      {
        id: 'calamars',
        name: 'Calamars frits',
        description: 'Citron confit et sauce tartare maison.',
        price: 13,
      },
    ],
  },
  {
    id: 'plats',
    label: 'Plats du chef',
    description: 'Une cuisine généreuse, ancrée dans la tradition.',
    items: [
      {
        id: 'couscous-poisson',
        name: 'Couscous au poisson',
        description: 'Semoule roulée main, poisson du jour, sauce tomate épicée.',
        price: 24,
        tags: ['Signature'],
        featured: true,
        photo: 17649370,
      },
      {
        id: 'makloub',
        name: 'Makloub au poulet',
        description: 'Riz épicé, poulet, aubergines frites et épices douces.',
        price: 18,
        tags: ['Fait maison'],
      },
      {
        id: 'poulpe-grille',
        name: 'Poulpe grillé',
        description: 'Poulpe tendre, pommes sautées et sauce chermoula.',
        price: 32,
        featured: true,
        photo: 37068830,
      },
      {
        id: 'grillades',
        name: 'Grillades mixtes',
        description: 'Brochettes, kafta, merguez maison et salade fraîche.',
        price: 28,
      },
      {
        id: 'pates-crevettes',
        name: 'Pâtes aux crevettes',
        description: 'Pâtes fraîches, crevettes sautées, ail et persil.',
        price: 22,
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    description: 'Pâtisseries orientales et gourmandises maison.',
    items: [
      {
        id: 'baklava-cafe',
        name: 'Baklava & café turc',
        description: 'Baklava aux pistaches, accompagné d’un café turc.',
        price: 9.5,
        tags: ['Signature'],
        featured: true,
        photo: 37069694,
      },
      {
        id: 'makroudh',
        name: 'Makroudh maison',
        description: 'Semoule, dattes et fleur d’oranger.',
        price: 5,
      },
      {
        id: 'cheesecake',
        name: 'Cheesecake',
        description: 'Coulis de fruits rouges et crumble beurré.',
        price: 8,
      },
      {
        id: 'crepe',
        name: 'Crêpe chocolat-noisette',
        description: 'Chocolat-noisette fondant et banane caramélisée.',
        price: 9,
      },
      {
        id: 'glaces',
        name: 'Glaces artisanales',
        description: 'Trois boules au choix : pistache, fleur d’oranger, chocolat.',
        price: 7,
      },
    ],
  },
];

/** Plats mis en avant sur la page d’accueil. */
export const featuredItems = menuCategories
  .flatMap((category) => category.items)
  .filter((item) => item.featured);
