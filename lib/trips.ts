import type { Language } from "./translations";

export interface Trip {
  id: string;
  slug: string;
  name: Record<string, string>;
  description: Record<string, string>;
  duration: Record<string, string>;
  price: number;
  currency: string;
  category: string;
  popular: boolean;
  image: string;
  rating: number;
  highlights: Record<string, string>[];
  included: Record<string, string>[];
}

export const trips: Trip[] = [
  {
    id: "1",
    slug: "golden-crown-of-the-nile-aswan-royal-escape",
    name: {
      en: "Golden Crown of the Nile - Aswan Royal Escape",
      ru: "Золотая корона Нила - Королевский отдых в Асуане",
      de: "Goldene Krone des Nils - Königlicher Aufenthalt in Assuan",
      ar: "التاج الذهبي للنيل - رحلة أسوان الملكية"
    },
    description: {
      en: "Escape to the magical south of Egypt, where the sun shines warmer, the Nile flows calmer, and history feels closer than ever. An Aswan journey blending breathtaking landscapes, timeless temples, and authentic Egyptian culture.",
      ru: "Откройте для себя волшебный юг Египта, где солнце светит ярче, Нил течет спокойнее, а история ощущается ближе.",
      de: "Entfliehen Sie in den magischen Süden Ägyptens, wo die Sonne wärmer scheint, der Nil ruhiger fließt und die Geschichte näher ist.",
      ar: "اهرب إلى جنوب مصر السحري، حيث تشرق الشمس أكثر دفئًا، ويتدفق النيل بهدوء، ويشعرك التاريخ بالقرب"
    },
    duration: { en: "3 days / 2 nights", ru: "3 дня / 2 ночи", de: "3 Tage / 2 Nächte", ar: "3 أيام / ليلتان" },
    price: 280,
    currency: "EUR",
    category: "Aswan",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2026/02/IMG-20260212-WA0029-e1770908632870.jpg",
    rating: 4.9,
    highlights: [
      { en: "Nile Felucca Ride", ru: "Прогулка на фелуке по Нилу", de: "Nil-Feluke-Fahrt", ar: "ركوب الفلوكة في النيل" },
      { en: "Temple of Philae", ru: "Храм Филе", de: "Philae-Tempel", ar: "معبد فيلة" },
      { en: "Aswan High Dam", ru: "Высотная плотина Асуана", de: "Assuan-Staudamm", ar: "السد العالي" },
      { en: "Nubian Village", ru: "Нубийская деревня", de: "Nubisches Dorf", ar: "القرية النوبية" }
    ],
    included: [
      { en: "Hotel Accommodation", ru: "Проживание в отеле", de: "Hotelunterkunft", ar: "الإقامة في الفندق" },
      { en: "Professional Guide", ru: "Профессиональный гид", de: "Professioneller Führer", ar: "مرشد محترف" },
      { en: "All Transfers", ru: "Все трансферы", de: "Alle Transfers", ar: "جميع وسائل النقل" },
      { en: "Breakfast & Lunch", ru: "Завтрак и обед", de: "Frühstück & Mittagessen", ar: "الإفطار والغداء" }
    ]
  },
  {
    id: "2",
    slug: "nefertari-makadi-hurghada",
    name: {
      en: "Nefertari Luxury Sea Trip: Submarine, Snorkeling & Dinner",
      ru: "Нефертари Люкс морская прогулка: подводная лодка, снорклинг и ужин",
      de: "Nefertari Luxus-Seereise: U-Boot, Schnorcheln & Abendessen",
      ar: "رحلة نفرتاري البحرية الفاخرة: غواصة وغوص وعشاء"
    },
    description: {
      en: "The Nefertari trip runs twice daily offering a unique and luxurious Red Sea experience with submarine views, snorkeling at coral reefs, and a delicious dinner buffet on board.",
      ru: "Роскошная морская прогулка с подводной лодкой, снорклингом и ужином на борту.",
      de: "Luxuriöse Seereise mit U-Boot-Besichtigung, Schnorcheln und Abendessen an Bord.",
      ar: "رحلة بحرية فاخرة مع مشاهدة الغواصة والغوص وعشاء على متن القارب"
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 50,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/ae.jpg",
    rating: 4.8,
    highlights: [
      { en: "Submarine Underwater Views", ru: "Подводные виды", de: "Unterwasseransichten", ar: "مناظر تحت الماء" },
      { en: "Snorkeling at Coral Reefs", ru: "Снорклинг на коралловых рифах", de: "Schnorcheln an Korallenriffen", ar: "الغوص في الشعاب المرجانية" },
      { en: "Dinner Buffet on Board", ru: "Ужин на борту", de: "Abendessen an Bord", ar: "عشاء على متن القارب" },
      { en: "Open Bar", ru: "Открытый бар", de: "Offene Bar", ar: "بار مفتوح" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Submarine Ride", ru: "Поездка на подводной лодке", de: "U-Boot-Fahrt", ar: "ركوب الغواصة" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Dinner & Drinks", ru: "Ужин и напитки", de: "Abendessen & Getränke", ar: "العشاء والمشروبات" }
    ]
  },
  {
    id: "4",
    slug: "cairo-emc-marsa-alam",
    name: {
      en: "Cairo Bus Tour: Pyramids, Sphinx & Museum Adventure",
      ru: "Автобусный тур в Каир: пирамиды, сфинкс и музей",
      de: "Kairo Busreise: Pyramiden, Sphinx und Museum",
      ar: "رحلة حافلة القاهرة: الأهرامات وأبو الهول والمتحف"
    },
    description: {
      en: "Embark on an unforgettable journey to Cairo, the bustling capital where ancient wonders meet modern life. Visit the Pyramids of Giza, the Sphinx, and the Egyptian Museum.",
      ru: "Отправьтесь в незабываемое путешествие в Каир, где древние чудеса встречаются с современной жизнью.",
      de: "Begeben Sie sich auf eine unvergessliche Reise nach Kairo, wo antike Wunder auf das moderne Leben treffen.",
      ar: "انطلق في رحلة لا تنسى إلى القاهرة، حيث تلتقي العجائب القديمة بالحياة العصرية"
    },
    duration: { en: "2 days / 1 night", ru: "2 дня / 1 ночь", de: "2 Tage / 1 Nacht", ar: "يومان / ليلة واحدة" },
    price: 80,
    currency: "EUR",
    category: "Cairo",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/download-3.jpg",
    rating: 4.8,
    highlights: [
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Sphinx", ru: "Сфинкс", de: "Sphinx", ar: "أبو الهول" },
      { en: "Egyptian Museum", ru: "Египетский музей", de: "Ägyptisches Museum", ar: "المتحف المصري" },
      { en: "Old Cairo Bazaar", ru: "Старый Каирский базар", de: "Alt-Kairoer Basar", ar: "سوق القاهرة القديمة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "6",
    slug: "cairo-bus-gem",
    name: {
      en: "Cairo & GEM (Bus): Pyramids, Sphinx & Museum Tour",
      ru: "Каир и ГЭМ (автобус): пирамиды, сфинкс и музей",
      de: "Kairo & GEM (Bus): Pyramiden, Sphinx und Museum",
      ar: "القاهرة والمتحف المصري الكبير (حافلة): الأهرامات وأبو الهول والمتحف"
    },
    description: {
      en: "Discover the magic of Ancient Egypt in just one day! Visit the Pyramids of Giza, the Sphinx, and the Grand Egyptian Museum by comfortable bus.",
      ru: "Откройте магию Древнего Египта всего за один день!",
      de: "Entdecken Sie die Magie des Alten Ägypten an nur einem Tag!",
      ar: "اكتشف سحر مصر القديمة في يوم واحد فقط!"
    },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 70,
    currency: "EUR",
    category: "Cairo",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/b7f4e4fa-b2a0-4190-8333-0908f73c8ca7.jpg",
    rating: 4.7,
    highlights: [
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Sphinx", ru: "Сфинкс", de: "Sphinx", ar: "أبو الهول" },
      { en: "Grand Egyptian Museum", ru: "Большой Египетский музей", de: "Großes Ägyptisches Museum", ar: "المتحف المصري الكبير" },
      { en: "Lunch Included", ru: "Обед включен", de: "Mittagessen inklusive", ar: "الغداء شامل" }
    ],
    included: [
      { en: "Bus Transfer", ru: "Трансфер на автобусе", de: "Bus-Transfer", ar: "النقل بالحافلة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "7",
    slug: "cairo-van-gem",
    name: {
      en: "Cairo Gem Van: Pyramids, Sphinx & Museum",
      ru: "Каир ГЭМ (минивэн): пирамиды, сфинкс и музей",
      de: "Kairo GEM Van: Pyramiden, Sphinx und Museum",
      ar: "حافلة القاهرة الصغيرة: الأهرامات وأبو الهول والمتحف"
    },
    description: {
      en: "Enjoy a private van tour to Cairo with visits to the Pyramids of Giza, the Sphinx, and the Grand Egyptian Museum for a more exclusive experience.",
      ru: "Насладитесь частным туром на минивэне в Каир с посещением пирамид Гизы, Сфинкса и Большого Египетского музея.",
      de: "Genießen Sie eine private Van-Tour nach Kairo mit Besuchen der Pyramiden, der Sphinx und des GEM.",
      ar: "استمتع بجولة خاصة بالحافلة الصغيرة إلى القاهرة لزيارة الأهرامات وأبو الهول والمتحف المصري الكبير"
    },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 100,
    currency: "EUR",
    category: "Cairo",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/9904d6be-f2b3-462d-b501-41f73074bb0b.jpg",
    rating: 4.8,
    highlights: [
      { en: "Private Van Transfer", ru: "Частный трансфер на минивэне", de: "Privater Van-Transfer", ar: "نقل خاص بحافلة صغيرة" },
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "Grand Egyptian Museum", ru: "Большой Египетский музей", de: "Großes Ägyptisches Museum", ar: "المتحف المصري الكبير" },
      { en: "Lunch at Restaurant", ru: "Обед в ресторане", de: "Mittagessen im Restaurant", ar: "غداء في مطعم" }
    ],
    included: [
      { en: "Private Van", ru: "Частный минивэн", de: "Privater Van", ar: "حافلة صغيرة خاصة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "13",
    slug: "elite-vip-marsa-alam",
    name: {
      en: "Elite VIP Yacht: Luxury Red Sea Experience",
      ru: "Элитная VIP яхта: роскошный отдых на Красном море",
      de: "Elite VIP-Yacht: Luxuriöses Rotmeer-Erlebnis",
      ar: "اليخت الفاخر VIP: تجربة البحر الأحمر الفاخرة"
    },
    description: {
      en: "Experience the ultimate luxury on a private VIP yacht along the Red Sea coast. Enjoy premium service, gourmet dining, and exclusive access to pristine beaches and snorkeling spots.",
      ru: "Испытайте предельную роскошь на частной VIP яхте вдоль побережья Красного моря.",
      de: "Erleben Sie den ultimativen Luxus auf einer privaten VIP-Yacht entlang der Küste des Roten Meeres.",
      ar: "اختبر الفخامة المطلقة على يخت VIP خاص على طول ساحل البحر الأحمر"
    },
    duration: { en: "8 hours", ru: "8 часов", de: "8 Stunden", ar: "8 ساعات" },
    price: 150,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/ELITE8-scaled.jpg",
    rating: 4.9,
    highlights: [
      { en: "Private VIP Yacht", ru: "Частная VIP яхта", de: "Private VIP-Yacht", ar: "يخت VIP خاص" },
      { en: "Gourmet Dining on Board", ru: "Ресторанное питание на борту", de: "Gourmet-Essen an Bord", ar: "تناول الطعام الفاخر على متن اليخت" },
      { en: "Snorkeling at Private Spots", ru: "Снорклинг в частных местах", de: "Schnorcheln an privaten Orten", ar: "الغوص في أماكن خاصة" },
      { en: "Sunset Cruise", ru: "Круиз на закате", de: "Sonnenuntergangsfahrt", ar: "رحلة غروب الشمس" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Private Yacht Charter", ru: "Аренда частной яхты", de: "Private Yacht-Charter", ar: "استئجار يخت خاص" },
      { en: "Gourmet Lunch & Drinks", ru: "Ресторанный обед и напитки", de: "Gourmet-Mittagessen & Getränke", ar: "غداء فاخر ومشروبات" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" }
    ]
  },
  {
    id: "14",
    slug: "mini-safari",
    name: {
      en: "Quad Adventure: Mini Desert Safari",
      ru: "Квадроциклы: Мини сафари по пустыне",
      de: "Quad-Abenteuer: Mini-Wüstensafari",
      ar: "مغامرة الدراجات الرباعية: سفاري صحراوي مصغر"
    },
    description: {
      en: "Enjoy a quick but thrilling desert adventure on quads. Ride through the golden sands and experience the beauty of the Egyptian desert.",
      ru: "Насладитесь коротким, но захватывающим приключением в пустыне на квадроциклах.",
      de: "Genießen Sie ein kurzes, aber aufregendes Wüstenabenteuer auf Quads.",
      ar: "استمتع بمغامرة صحراوية سريعة ولكنها مثيرة على الدراجات الرباعية"
    },
    duration: { en: "2 hours", ru: "2 часа", de: "2 Stunden", ar: "ساعتان" },
    price: 30,
    currency: "EUR",
    category: "Desert Safari",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/3-9-870x555-1.jpg",
    rating: 4.6,
    highlights: [
      { en: "Quad Biking", ru: "Квадроциклы", de: "Quad-Fahren", ar: "ركوب الدراجات الرباعية" },
      { en: "Desert Landscape", ru: "Пустынный ландшафт", de: "Wüstenlandschaft", ar: "مناظر الصحراء" },
      { en: "Photo Stops", ru: "Фото-остановки", de: "Fotostopps", ar: "توقف للتصوير" },
      { en: "Adrenaline Rush", ru: "Прилив адреналина", de: "Adrenalinkick", ar: "جرعة الأدرينالين" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Quad Bike", ru: "Квадроцикл", de: "Quad", ar: "دراجة رباعية" },
      { en: "Safety Gear", ru: "Защитное снаряжение", de: "Sicherheitsausrüstung", ar: "معدات السلامة" }
    ]
  },
  {
    id: "15",
    slug: "super-safari",
    name: {
      en: "Super Safari: Quads, Bedouin Life & Sunset",
      ru: "Супер Сафари: квадроциклы, бедуинская жизнь и закат",
      de: "Super Safari: Quads, Beduinenleben & Sonnenuntergang",
      ar: "السفاري الفائق: دراجات رباعية وحياة بدوية وغروب"
    },
    description: {
      en: "An extended desert adventure combining quad biking, camel rides, Bedouin village visits, and a stunning sunset over the desert.",
      ru: "Расширенное приключение в пустыне с квадроциклами, верблюдами и посещением бедуинской деревни.",
      de: "Ein erweitertes Wüstenabenteuer mit Quadfahren, Kamelritten und Beduinendorf-Besichtigung.",
      ar: "مغامرة صحراوية موسعة تجمع بين ركوب الدراجات الرباعية والجمال وزيارة القرية البدوية"
    },
    duration: { en: "5 hours", ru: "5 часов", de: "5 Stunden", ar: "5 ساعات" },
    price: 50,
    currency: "EUR",
    category: "Desert Safari",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/1-8-870x555-1.jpg",
    rating: 4.8,
    highlights: [
      { en: "Quad Biking", ru: "Квадроциклы", de: "Quad-Fahren", ar: "ركوب الدراجات الرباعية" },
      { en: "Camel Ride", ru: "Прогулка на верблюде", de: "Kamelritt", ar: "ركوب الجمل" },
      { en: "Bedouin Village", ru: "Бедуинская деревня", de: "Beduinendorf", ar: "القرية البدوية" },
      { en: "Sunset in Desert", ru: "Закат в пустыне", de: "Sonnenuntergang in der Wüste", ar: "الغروب في الصحراء" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Quad & Camel Ride", ru: "Квадроцикл и верблюд", de: "Quad & Kamelritt", ar: "الدراجة الرباعية وركوب الجمل" },
      { en: "Dinner", ru: "Ужин", de: "Abendessen", ar: "العشاء" }
    ]
  },
  {
    id: "24",
    slug: "paradise-island-snorkeling",
    name: {
      en: "Paradise Island Snorkeling: White Sands & Coral Reefs",
      ru: "Снорклинг на райском острове: белые пески и кораллы",
      de: "Paradies-Insel Schnorcheln: Weißer Sand & Korallenriffe",
      ar: "جزيرة الجنة للغوص: الرمال البيضاء والشعاب المرجانية"
    },
    description: {
      en: "Escape to Paradise Island, a slice of heaven with powdery white sand and turquoise waters. Snorkel among vibrant coral reefs teeming with colorful fish.",
      ru: "Сбегите на райский остров с белоснежным песком и бирюзовой водой.",
      de: "Fliehen Sie auf die Paradies-Insel mit puderweißem Sand und türkisfarbenem Wasser.",
      ar: "اهرب إلى جزيرة الجنة ذات الرمال البيضاء الناعمة والمياه الفيروزية"
    },
    duration: { en: "7 hours", ru: "7 часов", de: "7 Stunden", ar: "7 ساعات" },
    price: 45,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/ELITE8-scaled.jpg",
    rating: 4.7,
    highlights: [
      { en: "Paradise Island Beach", ru: "Пляж райского острова", de: "Paradies-Insel Strand", ar: "شاطئ جزيرة الجنة" },
      { en: "Snorkeling at Coral Reefs", ru: "Снорклинг на коралловых рифах", de: "Schnorcheln an Korallenriffen", ar: "الغوص في الشعاب المرجانية" },
      { en: "Lunch on the Beach", ru: "Обед на пляже", de: "Mittagessen am Strand", ar: "غداء على الشاطئ" },
      { en: "Relaxation & Swimming", ru: "Отдых и плавание", de: "Entspannung & Schwimmen", ar: "استرخاء وسباحة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch & Drinks", ru: "Обед и напитки", de: "Mittagessen & Getränke", ar: "الغداء والمشروبات" }
    ]
  },
  {
    id: "25",
    slug: "dolphin-watching-tour",
    name: {
      en: "Dolphin Watching Tour: Encounters in the Wild",
      ru: "Наблюдение за дельфинами: встреча в дикой природе",
      de: "Delfinbeobachtungstour: Begegnungen in der Wildnis",
      ar: "جولة مشاهدة الدلافين: لقاءات في البرية"
    },
    description: {
      en: "Set out on an unforgettable dolphin watching adventure in the open sea. Watch pods of dolphins play and leap in their natural habitat.",
      ru: "Отправьтесь в незабываемое приключение по наблюдению за дельфинами в открытом море.",
      de: "Begeben Sie sich auf ein unvergessliches Delfinbeobachtungsabenteuer auf dem offenen Meer.",
      ar: "انطلق في مغامرة لا تُنسى لمشاهدة الدلافين في البحر المفتوح"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/96a29fd2-0b31-4717-85e5-06f3f9f98463.webp",
    rating: 4.8,
    highlights: [
      { en: "Dolphin Watching", ru: "Наблюдение за дельфинами", de: "Delfinbeobachtung", ar: "مشاهدة الدلافين" },
      { en: "Open Sea Boat Ride", ru: "Прогулка в открытом море", de: "Bootsfahrt auf offener See", ar: "رحلة بالقارب في البحر المفتوح" },
      { en: "Photo Opportunities", ru: "Фотосессия", de: "Fotomöglichkeiten", ar: "فرص التصوير" },
      { en: "Snorkeling Stop", ru: "Остановка для снорклинга", de: "Schnorchelstopp", ar: "توقف للغوص" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Boat Trip", ru: "Поездка на лодке", de: "Bootsausflug", ar: "رحلة بالقارب" },
      { en: "Snorkeling Gear", ru: "Снаряжение", de: "Schnorchelausrüstung", ar: "معدات الغوص" }
    ]
  },
  {
    id: "32",
    slug: "glass-bottom-boat-tour",
    name: {
      en: "Glass Bottom Boat: Coral Views Without Getting Wet",
      ru: "Лодка с прозрачным дном: кораллы не замочив ног",
      de: "Glasbodenboot: Korallen ohne nass zu werden",
      ar: "قاع الزجاج: مشاهدة المرجان دون بلل"
    },
    description: {
      en: "Explore the underwater world from the comfort of a glass-bottom boat. Perfect for families with young children or non-swimmers.",
      ru: "Исследуйте подводный мир с комфортом лодки с прозрачным дном.",
      de: "Erkunden Sie die Unterwasserwelt bequem von einem Glasbodenboot aus.",
      ar: "استكشف العالم تحت الماء من راحة قارب ذو قاع زجاجي"
    },
    duration: { en: "2 hours", ru: "2 часа", de: "2 Stunden", ar: "ساعتان" },
    price: 25,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/900x600-1-50-c322de4c47adb1105ffc87ddcb85e30e.jpg",
    rating: 4.5,
    highlights: [
      { en: "Glass Bottom Views", ru: "Вид через прозрачное дно", de: "Blick durch Glasboden", ar: "مناظر من القاع الزجاجي" },
      { en: "Coral Reef Observation", ru: "Наблюдение за рифами", de: "Korallenriffbeobachtung", ar: "مشاهدة الشعاب المرجانية" },
      { en: "Family Friendly", ru: "Для всей семьи", de: "Familienfreundlich", ar: "مناسب للعائلة" },
      { en: "Short & Sweet", ru: "Коротко и сладко", de: "Kurz & Süß", ar: "قصيرة ولطيفة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Boat Ride", ru: "Поездка на лодке", de: "Bootsfahrt", ar: "رحلة بالقارب" },
      { en: "Guide Commentary", ru: "Комментарий гида", de: "Führer-Kommentar", ar: "تعليق المرشد" }
    ]
  },
  {
    id: "33",
    slug: "evening-desert-safari-bbq",
    name: {
      en: "Evening Desert Safari: BBQ & Bedouin Stars",
      ru: "Вечернее сафари: барбекю и бедуинские звезды",
      de: "Abendliche Wüstensafari: BBQ & Beduinensterne",
      ar: "سفاري صحراء مسائي: شواء ونجوم بدوية"
    },
    description: {
      en: "Experience the magic of the desert at night. Ride quads, enjoy a BBQ dinner under the stars, and watch traditional Bedouin performances.",
      ru: "Испытайте магию пустыни ночью. Квадроциклы, ужин под звездами и бедуинские представления.",
      de: "Erleben Sie die Magie der Wüste bei Nacht. Quadfahren, BBQ-Dinner unter den Sternen und Beduinenvorführungen.",
      ar: "اختبر سحر الصحراء ليلاً. ركوب الدراجات الرباعية وعشاء شواء تحت النجوم"
    },
    duration: { en: "5 hours", ru: "5 часов", de: "5 Stunden", ar: "5 ساعات" },
    price: 45,
    currency: "EUR",
    category: "Desert Safari",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/download-17.jpg",
    rating: 4.7,
    highlights: [
      { en: "Quad Biking at Sunset", ru: "Квадроциклы на закате", de: "Quadfahren bei Sonnenuntergang", ar: "ركوب الدراجات الرباعية عند الغروب" },
      { en: "BBQ Dinner", ru: "Ужин барбекю", de: "BBQ-Abendessen", ar: "عشاء شواء" },
      { en: "Bedouin Show", ru: "Бедуинское шоу", de: "Beduinen-Show", ar: "عرض بدوي" },
      { en: "Stargazing", ru: "Наблюдение за звездами", de: "Sternenbeobachtung", ar: "مراقبة النجوم" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Quad Bike", ru: "Квадроцикл", de: "Quad", ar: "دراجة رباعية" },
      { en: "BBQ Dinner & Drinks", ru: "Ужин и напитки", de: "BBQ-Abendessen & Getränke", ar: "عشاء شواء ومشروبات" }
    ]
  },
  {
    id: "39",
    slug: "wadi-el-gemal-national-park",
    name: {
      en: "Wadi El Gemal National Park: Nature & Wildlife",
      ru: "Национальный парк Вади-эль-Гемаль: природа и дикая жизнь",
      de: "Wadi-El-Gemal-Nationalpark: Natur & Tierwelt",
      ar: "محمية وادي الجمال: الطبيعة والحياة البرية"
    },
    description: {
      en: "Explore the breathtaking Wadi El Gemal National Park with its diverse ecosystems, from desert mountains to mangrove forests and pristine beaches.",
      ru: "Исследуйте захватывающий парк Вади-эль-Гемаль с его разнообразными экосистемами.",
      de: "Erkunden Sie den atemberaubenden Wadi-El-Gemal-Nationalpark mit seinen vielfältigen Ökosystemen.",
      ar: "استكشف محمية وادي الجمال الخلابة بنظمها البيئية المتنوعة"
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 50,
    currency: "EUR",
    category: "Marsa Alam",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-26-at-02.24.38_b2ee4396.jpg",
    rating: 4.8,
    highlights: [
      { en: "National Park Tour", ru: "Тур по парку", de: "Nationalpark-Tour", ar: "جولة في المحمية" },
      { en: "Mangrove Forest", ru: "Мангровый лес", de: "Mangrovenwald", ar: "غابة المانجروف" },
      { en: "Wildlife Spotting", ru: "Наблюдение за животными", de: "Wildtierbeobachtung", ar: "مشاهدة الحياة البرية" },
      { en: "Beach Time", ru: "Время на пляже", de: "Strandzeit", ar: "وقت الشاطئ" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Park Entrance Fee", ru: "Входной билет", de: "Parkeintritt", ar: "رسوم دخول المحمية" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "40",
    slug: "abu-dabbab-beach-turtles",
    name: {
      en: "Abu Dabbab Beach: Turtles & Seagrass Paradise",
      ru: "Пляж Абу Даббаб: черепахи и рай морских трав",
      de: "Abu-Dabbab-Strand: Schildkröten & Seegras-Paradies",
      ar: "شاطئ أبو دباب: السلاحف وجنة الأعشاب البحرية"
    },
    description: {
      en: "Visit the famous Abu Dabbab Bay, home to gentle dugongs and sea turtles. Snorkel in the crystal clear waters and relax on the pristine beach.",
      ru: "Посетите знаменитую бухту Абу Даббаб с дюгонями и черепахами.",
      de: "Besuchen Sie die berühmte Abu-Dabbab-Bucht mit Dugongs und Schildkröten.",
      ar: "قم بزيارة خليج أبو دباب الشهير موطن أبقار البحر والسلاحف البحرية"
    },
    duration: { en: "5 hours", ru: "5 часов", de: "5 Stunden", ar: "5 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Marsa Alam",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/download-19.jpg",
    rating: 4.7,
    highlights: [
      { en: "Sea Turtle Snorkeling", ru: "Снорклинг с черепахами", de: "Schnorcheln mit Schildkröten", ar: "الغوص مع السلاحف" },
      { en: "Dugong Spotting", ru: "Наблюдение за дюгонями", de: "Dugong-Beobachtung", ar: "مشاهدة أبقار البحر" },
      { en: "Pristine Beach", ru: "Девственный пляж", de: "Unberührter Strand", ar: "شاطئ بكر" },
      { en: "Snorkeling Gear", ru: "Снаряжение", de: "Schnorchelausrüstung", ar: "معدات الغوص" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Beach Entry", ru: "Вход на пляж", de: "Strandeintritt", ar: "دخول الشاطئ" },
      { en: "Snorkeling Equipment", ru: "Снаряжение", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "41",
    slug: "dolphin-house-marsa-alam",
    name: {
      en: "Dolphin House Marsa Alam: Wild Dolphin Encounter",
      ru: "Дом дельфинов Марса-Алам: встреча с дикими дельфинами",
      de: "Delfinhaus Marsa Alam: Wilde Delfinbegegnung",
      ar: "بيت الدلافين مرسى علم: لقاء الدلافين البرية"
    },
    description: {
      en: "Visit the famous Dolphin House near Marsa Alam where pods of spinner dolphins reside year-round. Snorkel in their crystal clear lagoon.",
      ru: "Посетите знаменитый Дом дельфинов возле Марса-Алам.",
      de: "Besuchen Sie das berühmte Delfinhaus in der Nähe von Marsa Alam.",
      ar: "زر بيت الدلافين الشهير بالقرب من مرسى علم"
    },
    duration: { en: "7 hours", ru: "7 часов", de: "7 Stunden", ar: "7 ساعات" },
    price: 50,
    currency: "EUR",
    category: "Marsa Alam",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-26-at-02.24.38_b2ee4396.jpg",
    rating: 4.8,
    highlights: [
      { en: "Dolphin Snorkeling", ru: "Снорклинг с дельфинами", de: "Schnorcheln mit Delfinen", ar: "الغوص مع الدلافين" },
      { en: "Lagoon Exploration", ru: "Исследование лагуны", de: "Lagunenerkundung", ar: "استكشاف البحيرة" },
      { en: "Coral Reefs", ru: "Коралловые рифы", de: "Korallenriffe", ar: "الشعاب المرجانية" },
      { en: "Boat Trip", ru: "Прогулка на лодке", de: "Bootsausflug", ar: "رحلة بالقارب" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Gear", ru: "Снаряжение", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "43",
    slug: "cairo-private-pyramids-museum",
    name: {
      en: "Cairo Private Tour: Pyramids, Sphinx & Museum",
      ru: "Частный тур в Каир: пирамиды, сфинкс и музей",
      de: "Private Kairo-Tour: Pyramiden, Sphinx & Museum",
      ar: "جولة خاصة في القاهرة: الأهرامات وأبو الهول والمتحف"
    },
    description: {
      en: "Enjoy a private guided tour of Cairo's greatest wonders with your own vehicle and guide. Visit the Pyramids, Sphinx, and Egyptian Museum at your own pace.",
      ru: "Насладитесь частным туром по величайшим чудесам Каира с личным транспортом и гидом.",
      de: "Genießen Sie eine private Führung zu den größten Wundern Kairos mit eigenem Fahrzeug und Führer.",
      ar: "استمتع بجولة خاصة لأعظم عجائب القاهرة مع مركبتك ومرشدك الخاص"
    },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 120,
    currency: "EUR",
    category: "Cairo",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/download-3.jpg",
    rating: 4.9,
    highlights: [
      { en: "Private Vehicle & Guide", ru: "Частный автомобиль и гид", de: "Privatfahrzeug & Führer", ar: "مركبة ومرشد خاص" },
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Egyptian Museum", ru: "Египетский музей", de: "Ägyptisches Museum", ar: "المتحف المصري" },
      { en: "Lunch at Local Restaurant", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Private Vehicle", ru: "Частный автомобиль", de: "Privatfahrzeug", ar: "مركبة خاصة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Guide & Lunch", ru: "Гид и обед", de: "Führer & Mittagessen", ar: "مرشد وغداء" }
    ]
  },
  {
    id: "47",
    slug: "luxor-hot-air-balloon",
    name: {
      en: "Luxor Hot Air Balloon: Sunrise Over the Nile",
      ru: "Воздушный шар в Луксоре: рассвет над Нилом",
      de: "Luxor-Heißluftballon: Sonnenaufgang über dem Nil",
      ar: "بالون الهواء الساخن في الأقصر: شروق الشمس فوق النيل"
    },
    description: {
      en: "Float above the ancient city of Luxor in a hot air balloon at sunrise. See the Valley of the Kings, Karnak Temple, and the Nile from a bird's eye view.",
      ru: "Парите над древним Луксором на воздушном шаре на рассвете.",
      de: "Schweben Sie bei Sonnenaufgang im Heißluftballon über der antiken Stadt Luxor.",
      ar: "حلق فوق مدينة الأقصر القديمة في بالون هواء ساخن عند شروق الشمس"
    },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 100,
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/Ramses_II_in_Luxor_Temple.jpg",
    rating: 4.9,
    highlights: [
      { en: "Hot Air Balloon Ride", ru: "Полет на воздушном шаре", de: "Heißluftballonfahrt", ar: "ركوب بالون الهواء الساخن" },
      { en: "Sunrise Over Luxor", ru: "Рассвет над Луксором", de: "Sonnenaufgang über Luxor", ar: "شروق الشمس فوق الأقصر" },
      { en: "Valley of the Kings View", ru: "Вид на Долину Царей", de: "Blick auf das Tal der Könige", ar: "إطلالة على وادي الملوك" },
      { en: "Nile Panorama", ru: "Панорама Нила", de: "Nil-Panorama", ar: "بانوراما النيل" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Balloon Ride", ru: "Полет на шаре", de: "Ballonfahrt", ar: "ركوب البالون" },
      { en: "Safety Briefing", ru: "Инструктаж", de: "Sicherheitseinweisung", ar: "إرشادات السلامة" },
      { en: "Light Breakfast", ru: "Легкий завтрак", de: "Leichtes Frühstück", ar: "فطور خفيف" }
    ]
  },
  {
    id: "50",
    slug: "luxor-private-guided-tour",
    name: {
      en: "Luxor Private Guided Tour: Tailored Experience",
      ru: "Частный тур в Луксор: индивидуальный опыт",
      de: "Private Luxor-Führung: Maßgeschneidertes Erlebnis",
      ar: "جولة خاصة في الأقصر: تجربة مخصصة"
    },
    description: {
      en: "Design your own Luxor itinerary with a private Egyptologist guide. Choose which temples and tombs to visit and go at your own pace.",
      ru: "Составьте свой маршрут по Луксору с частным гидом-египтологом.",
      de: "Gestalten Sie Ihr eigenes Luxor-Programm mit einem privaten Ägyptologen.",
      ar: "صمم جدول رحلتك الخاص في الأقصر مع مرشد مصري خاص"
    },
    duration: { en: "8 hours", ru: "8 часов", de: "8 Stunden", ar: "8 ساعات" },
    price: 150,
    currency: "EUR",
    category: "Luxor",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/6-2.jpg",
    rating: 4.9,
    highlights: [
      { en: "Private Egyptologist", ru: "Частный египтолог", de: "Privater Ägyptologe", ar: "مرشد مصري خاص" },
      { en: "Custom Itinerary", ru: "Индивидуальный маршрут", de: "Individueller Reiseplan", ar: "جدول مخصص" },
      { en: "Private Vehicle", ru: "Частный автомобиль", de: "Privatfahrzeug", ar: "مركبة خاصة" },
      { en: "Flexible Schedule", ru: "Гибкий график", de: "Flexibler Zeitplan", ar: "جدول مرن" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Private Guide", ru: "Частный гид", de: "Privater Führer", ar: "مرشد خاص" },
      { en: "Private Vehicle", ru: "Частный автомобиль", de: "Privatfahrzeug", ar: "مركبة خاصة" },
      { en: "Entrance Fees & Lunch", ru: "Билеты и обед", de: "Eintritt & Mittagessen", ar: "رسوم الدخول والغداء" }
    ]
  },
  {
    id: "51",
    slug: "abydos-dendera-temples",
    name: {
      en: "Abydos & Dendera Temples: Off the Beaten Path",
      ru: "Храмы Абидоса и Дендеры: в стороне от туристов",
      de: "Abydos- & Dendera-Tempel: Abseits der Touristenpfade",
      ar: "معابد أبيدوس ودندرة: طريق غير مألوف"
    },
    description: {
      en: "Venture off the beaten path to the incredible temples of Abydos and Dendera. Marvel at the well-preserved reliefs and stunning astronomical ceiling at Dendera.",
      ru: "Отправляйтесь в сторону от туристических троп к храмам Абидоса и Дендеры.",
      de: "Begeben Sie sich abseits der Touristenpfade zu den unglaublichen Tempeln von Abydos und Dendera.",
      ar: "انطلق خارج المسارات المألوفة إلى معابد أبيدوس ودندرة المذهلة"
    },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 80,
    currency: "EUR",
    category: "Luxor",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/Best-Time-to-Visit-Luxor-and-Thebes.webp",
    rating: 4.8,
    highlights: [
      { en: "Abydos Temple", ru: "Храм Абидоса", de: "Abydos-Tempel", ar: "معبد أبيدوس" },
      { en: "Dendera Temple", ru: "Храм Дендеры", de: "Dendera-Tempel", ar: "معبد دندرة" },
      { en: "Astronomical Ceiling", ru: "Астрономический потолок", de: "Astronomische Decke", ar: "السقف الفلكي" },
      { en: "Ancient Reliefs", ru: "Древние рельефы", de: "Alte Reliefs", ar: "نقوش قديمة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "52",
    slug: "aswan-city-market-tour",
    name: {
      en: "Aswan City & Market Tour: Nubian Culture",
      ru: "Городской тур Асуан: нубийская культура",
      de: "Assuan Stadt- & Markttour: Nubische Kultur",
      ar: "جولة مدينة أسوان والسوق: الثقافة النوبية"
    },
    description: {
      en: "Explore the beautiful city of Aswan with its colorful Nubian market, visit the Unfinished Obelisk, and stroll along the Nile Corniche.",
      ru: "Исследуйте прекрасный Асуан с его красочным нубийским рынком.",
      de: "Erkunden Sie die schöne Stadt Assuan mit ihrem farbenfrohen nubischen Markt.",
      ar: "استكشف مدينة أسوان الجميلة بسوقها النوبي الملون"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 25,
    currency: "EUR",
    category: "Aswan",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2026/02/IMG-20260212-WA0029-e1770908632870.jpg",
    rating: 4.5,
    highlights: [
      { en: "Nubian Market", ru: "Нубийский рынок", de: "Nubischer Markt", ar: "السوق النوبي" },
      { en: "Unfinished Obelisk", ru: "Незаконченный обелиск", de: "Unvollendeter Obelisk", ar: "المسلة غير المكتملة" },
      { en: "Nile Corniche", ru: "Набережная Нила", de: "Nil-Corniche", ar: "كورنيش النيل" },
      { en: "Local Guide", ru: "Местный гид", de: "Lokaler Führer", ar: "مرشد محلي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" }
    ]
  },
  {
    id: "53",
    slug: "abu-simbel-bus-tour",
    name: {
      en: "Abu Simbel Bus Tour: Temples of Ramesses",
      ru: "Автобусный тур в Абу-Симбел: храмы Рамзеса",
      de: "Abu-Simbel-Busreise: Tempel von Ramses",
      ar: "رحلة حافلة أبو سمبل: معابد رمسيس"
    },
    description: {
      en: "Travel to the magnificent Abu Simbel temples, carved into the mountainside by Ramesses II. A true testament to ancient Egyptian engineering and artistry.",
      ru: "Отправляйтесь к величественным храмам Абу-Симбела, высеченным в скале.",
      de: "Reisen Sie zu den magnifichen Abu-Simbel-Tempeln, die Ramses II. in den Berg hauen ließ.",
      ar: "سافر إلى معابد أبو سمبل الرائعة المنحوتة في الجبل"
    },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 65,
    currency: "EUR",
    category: "Aswan",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2026/02/IMG-20260212-WA0029-e1770908632870.jpg",
    rating: 4.9,
    highlights: [
      { en: "Abu Simbel Temples", ru: "Храмы Абу-Симбела", de: "Abu-Simbel-Tempel", ar: "معابد أبو سمبل" },
      { en: "Colossal Statues", ru: "Колоссальные статуи", de: "Kolossale Statuen", ar: "التماثيل العملاقة" },
      { en: "Lake Nasser Views", ru: "Вид на озеро Насер", de: "Blick auf den Nasser-See", ar: "إطلالة على بحيرة ناصر" },
      { en: "Photo Stops", ru: "Фото-остановки", de: "Fotostopps", ar: "توقف للتصوير" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Bus Transport", ru: "Автобус", de: "Bustransport", ar: "النقل بالحافلة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Guide & Lunch", ru: "Гид и обед", de: "Führer & Mittagessen", ar: "مرشد وغداء" }
    ]
  },
  {
    id: "54",
    slug: "aswan-private-guided-tour",
    name: {
      en: "Aswan Private Guided Tour: Tailored Nile Experience",
      ru: "Частный тур в Асуан: индивидуальный опыт",
      de: "Private Assuan-Führung: Maßgeschneidertes Nil-Erlebnis",
      ar: "جولة خاصة في أسوان: تجربة نيلية مخصصة"
    },
    description: {
      en: "Create your perfect Aswan day with a private guide. Visit Philae Temple, the High Dam, a Nubian Village, and sail on a felucca at your own pace.",
      ru: "Создайте идеальный день в Асуане с частным гидом.",
      de: "Gestalten Sie Ihren perfekten Tag in Assuan mit einem privaten Führer.",
      ar: "اصنع يومك المثالي في أسوان مع مرشد خاص"
    },
    duration: { en: "8 hours", ru: "8 часов", de: "8 Stunden", ar: "8 ساعات" },
    price: 120,
    currency: "EUR",
    category: "Aswan",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2026/02/IMG-20260212-WA0029-e1770908632870.jpg",
    rating: 4.8,
    highlights: [
      { en: "Private Guide", ru: "Частный гид", de: "Privater Führer", ar: "مرشد خاص" },
      { en: "Philae Temple", ru: "Храм Филе", de: "Philae-Tempel", ar: "معبد فيلة" },
      { en: "Nubian Village", ru: "Нубийская деревня", de: "Nubisches Dorf", ar: "القرية النوبية" },
      { en: "Felucca Ride", ru: "Прогулка на фелуке", de: "Feluke-Fahrt", ar: "ركوب الفلوكة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Private Vehicle & Guide", ru: "Автомобиль и гид", de: "Privatfahrzeug & Führer", ar: "مركبة ومرشد خاص" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "57",
    slug: "marina-shopping-tour",
    name: {
      en: "Marina & Shopping Tour: Port Ghalib Experience",
      ru: "Марина и шопинг: Порт Галиб",
      de: "Marina- & Shopping-Tour: Port-Ghalib-Erlebnis",
      ar: "جولة المارينا والتسوق: تجربة بورت غالب"
    },
    description: {
      en: "Spend a relaxing day at Port Ghalib Marina. Shop at boutique stores, dine at seaside restaurants, and enjoy the vibrant atmosphere of this luxury resort area.",
      ru: "Проведите расслабляющий день в марине Порт Галиб.",
      de: "Verbingen Sie einen entspannten Tag an der Port-Ghalib-Marina.",
      ar: "اقضِ يوماً مريحاً في مارينا بورت غالب"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 20,
    currency: "EUR",
    category: "Entertainment",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/6-1.jpg",
    rating: 4.4,
    highlights: [
      { en: "Port Ghalib Marina", ru: "Марина Порт Галиб", de: "Port-Ghalib-Marina", ar: "مارينا بورت غالب" },
      { en: "Boutique Shopping", ru: "Бутики", de: "Boutique-Shopping", ar: "تسوق في البوتيكات" },
      { en: "Seaside Dining", ru: "Рестораны у моря", de: "Restaurants am Meer", ar: "تناول الطعام على البحر" },
      { en: "Scenic Walk", ru: "Прогулка", de: "Spaziergang", ar: "نزهة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" }
    ]
  },
  {
    id: "58",
    slug: "dolphin-show-aquarium",
    name: {
      en: "Dolphin Show & Aquarium: Family Fun Day",
      ru: "Шоу дельфинов и аквариум: семейный день",
      de: "Delfinshow & Aquarium: Familientag",
      ar: "عرض الدلافين والأكواريوم: يوم عائلي ممتع"
    },
    description: {
      en: "Enjoy a spectacular dolphin show and explore the aquarium with hundreds of marine species. A perfect family-friendly entertainment experience.",
      ru: "Насладитесь зрелищным шоу дельфинов и аквариумом с сотнями морских видов.",
      de: "Genießen Sie eine spektakuläre Delfinshow und erkunden Sie das Aquarium mit Hunderten von Meeresarten.",
      ar: "استمتع بعرض الدلافين المذهل واستكشف الأكواريوم"
    },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 30,
    currency: "EUR",
    category: "Entertainment",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/6-1.jpg",
    rating: 4.6,
    highlights: [
      { en: "Dolphin Performance", ru: "Шоу дельфинов", de: "Delfinvorstellung", ar: "عرض الدلافين" },
      { en: "Aquarium Exhibits", ru: "Аквариум", de: "Aquarium-Ausstellungen", ar: "معروضات الأكواريوم" },
      { en: "Interactive Sessions", ru: "Интерактив", de: "Interaktive Sitzungen", ar: "جلسات تفاعلية" },
      { en: "Children's Area", ru: "Детская зона", de: "Kinderbereich", ar: "منطقة الأطفال" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Show & Aquarium Entry", ru: "Входные билеты", de: "Show- & Aquarium-Eintritt", ar: "دخول العرض والأكواريوم" }
    ]
  },
  {
    id: "60",
    slug: "cairo-bus-trip",
    name: { en: "Cairo Bus Tour: Pyramids, Sphinx & Museum Day", ru: "Автобусный тур в Каир: пирамиды, сфинкс и музей", de: "Kairo Busreise: Pyramiden, Sphinx und Museum", ar: "رحلة حافلة القاهرة: الأهرامات وأبو الهول والمتحف" },
    description: { en: "Embark on an unforgettable journey to Cairo, the bustling capital where ancient wonders meet modern life. Visit the Pyramids of Giza, the Sphinx, and the Egyptian Museum.", ru: "Отправьтесь в незабываемое путешествие в Каир, где древние чудеса встречаются с современной жизнью.", de: "Begeben Sie sich auf eine unvergessliche Reise nach Kairo, wo antike Wunder auf das moderne Leben treffen.", ar: "انطلق في رحلة لا تنسى إلى القاهرة، حيث تلتقي العجائب القديمة بالحياة العصرية" },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 70,
    currency: "EUR",
    category: "Cairo",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/6f5ef5cdb9eb8091f6c44edae5f89f75.jpg",
    rating: 4.6,
    highlights: [
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Sphinx", ru: "Сфинкс", de: "Sphinx", ar: "أبو الهول" },
      { en: "Egyptian Museum", ru: "Египетский музей", de: "Ägyptisches Museum", ar: "المتحف المصري" },
      { en: "Old Cairo", ru: "Старый Каир", de: "Alt-Kairo", ar: "القاهرة القديمة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "63",
    slug: "luxor-vip-8-pax",
    name: { en: "Luxor VIP Tour: Private Luxury for 8 Guests", ru: "VIP тур в Луксор: частная роскошь для 8 гостей", de: "Luxor VIP-Tour: Privater Luxus für 8 Gäste", ar: "جولة الأقصر VIP: فخامة خاصة لـ 8 ضيوف" },
    description: { en: "Indulge in the ultimate luxury journey to Luxor with private transportation, expert guide, and premium service for up to 8 guests.", ru: "Насладитесь роскошным путешествием в Луксор с частным транспортом и гидом.", de: "Gönnen Sie sich die ultimative Luxusreise nach Luxor mit privatem Transport und Guide.", ar: "انغمس في رحلة فخمة إلى الأقصر مع وسائل نقل خاصة ومرشد خبير" },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 280,
    currency: "EUR",
    category: "Luxor",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/6-2.jpg",
    rating: 4.9,
    highlights: [
      { en: "Private Vehicle", ru: "Частный автомобиль", de: "Privatfahrzeug", ar: "مركبة خاصة" },
      { en: "VIP Guide", ru: "VIP гид", de: "VIP-Führer", ar: "مرشد VIP" },
      { en: "Karnak Temple", ru: "Храм Карнак", de: "Karnak-Tempel", ar: "معبد الكرنك" },
      { en: "Valley of the Kings", ru: "Долина Царей", de: "Tal der Könige", ar: "وادي الملوك" }
    ],
    included: [
      { en: "Private Transfer", ru: "Частный трансфер", de: "Privater Transfer", ar: "نقل خاص" },
      { en: "VIP Guide", ru: "VIP гид", de: "VIP-Führer", ar: "مرشد VIP" },
      { en: "All Entrance Fees", ru: "Все билеты", de: "Alle Eintrittsgebühren", ar: "جميع رسوم الدخول" },
      { en: "Lunch at Restaurant", ru: "Обед в ресторане", de: "Mittagessen im Restaurant", ar: "غداء في مطعم" }
    ]
  },
  {
    id: "64",
    slug: "luxor-bus-trip",
    name: { en: "Luxor Bus Tour: Kings' Valley, Karnak & Nile Day", ru: "Автобусный тур в Луксор: Долина Царей, Карнак и Нил", de: "Luxor Busreise: Tal der Könige, Karnak und Nil", ar: "رحلة حافلة الأقصر: وادي الملوك والكرنك ويوم النيل" },
    description: { en: "Embark on an unforgettable journey from Hurghada to the timeless land of the pharaohs - Luxor. Visit the Valley of the Kings, Karnak Temple, and more.", ru: "Отправьтесь в незабываемое путешествие из Хургады в вечную землю фараонов - Луксор.", de: "Begeben Sie sich auf eine unvergessliche Reise von Hurghada in das zeitlose Land der Pharaonen - Luxor.", ar: "انطلق في رحلة لا تُنسى من الغردقة إلى أرض الفراعنة الخالدة - الأقصر" },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 65,
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/Best-Time-to-Visit-Luxor-and-Thebes.webp",
    rating: 4.7,
    highlights: [
      { en: "Valley of the Kings", ru: "Долина Царей", de: "Tal der Könige", ar: "وادي الملوك" },
      { en: "Karnak Temple", ru: "Храм Карнак", de: "Karnak-Tempel", ar: "معبد الكرنك" },
      { en: "Nile River Views", ru: "Вид на Нил", de: "Nilblick", ar: "إطلالة على النيل" },
      { en: "Colossi of Memnon", ru: "Колоссы Мемнона", de: "Kolosse von Memnon", ar: "تماثيل ممنون" }
    ],
    included: [
      { en: "Bus Transfer", ru: "Трансфер на автобусе", de: "Bustransfer", ar: "نقل بالحافلة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "65",
    slug: "dolphin-world-trip",
    name: { en: "Dolphin World Adventure Show", ru: "Шоу дельфинов", de: "Delfin-Welt-Abenteuershow", ar: "عرض عالم الدلافين" },
    description: { en: "Experience one of the most modern delphiniums in the world with unforgettable dolphin and sea lion shows. Perfect for families and children.", ru: "Посетите один из самых современных дельфинариев с незабываемыми шоу дельфинов и морских львов.", de: "Erleben Sie eines der modernsten Delfinarien der Welt mit unvergesslichen Delfin- und Seelöwenshows.", ar: "استمتع بواحد من أحدث عروض الدلافين في العالم مع عروض لا تُنسى" },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 25,
    currency: "EUR",
    category: "Entertainment",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/6-1.jpg",
    rating: 4.6,
    highlights: [
      { en: "Dolphin Show", ru: "Шоу дельфинов", de: "Delfinshow", ar: "عرض الدلافين" },
      { en: "Sea Lion Show", ru: "Шоу морских львов", de: "Seelöwenshow", ar: "عرض أسد البحر" },
      { en: "Swimming with Dolphins", ru: "Плавание с дельфинами", de: "Schwimmen mit Delfinen", ar: "السباحة مع الدلافين" },
      { en: "Family Entertainment", ru: "Семейное развлечение", de: "Familienunterhaltung", ar: "ترفيه عائلي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Show Entry", ru: "Вход на шоу", de: "Show-Eintritt", ar: "دخول العرض" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" }
    ]
  },
  {
    id: "67",
    slug: "diving-trip",
    name: { en: "Diving Adventure in Hurghada", ru: "Дайвинг приключение в Хургаде", de: "Tauchabenteuer in Hurghada", ar: "مغامرة الغوص في الغردقة" },
    description: { en: "Dive into the crystal-clear waters of the Red Sea in Hurghada and experience a world of vibrant coral reefs and colorful marine life. Suitable for beginners and certified divers.", ru: "Погрузитесь в кристально чистые воды Красного моря и откройте мир ярких коралловых рифов.", de: "Tauchen Sie ein in das kristallklare Wasser des Roten Meeres und entdecken Sie eine Welt voller Korallenriffe.", ar: "اغوص في المياه الصافية للبحر الأحمر واستمتع بعالم من الشعاب المرجانية والحياة البحرية" },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 45,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/900x600-1-50-c322de4c47adb1105ffc87ddcb85e30e.jpg",
    rating: 4.8,
    highlights: [
      { en: "2 Dives at Coral Reefs", ru: "2 погружения на рифах", de: "2 Tauchgänge an Korallenriffen", ar: "غطستان في الشعاب المرجانية" },
      { en: "All Equipment Included", ru: "Всё оборудование", de: "Komplette Ausrüstung", ar: "جميع المعدات" },
      { en: "Professional Instructor", ru: "Инструктор", de: "Professioneller Lehrer", ar: "مدرب محترف" },
      { en: "Lunch on Board", ru: "Обед на борту", de: "Mittagessen an Bord", ar: "غداء على متن القارب" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Diving Equipment", ru: "Снаряжение для дайвинга", de: "Tauchausrüstung", ar: "معدات الغوص" },
      { en: "Instructor", ru: "Инструктор", de: "Lehrer", ar: "مدرب" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "68",
    slug: "one-trip-to-luxor-private",
    name: { en: "Luxor Full-Day Private Tour", ru: "Частный тур в Луксор на полный день", de: "Luxor Ganztägige Privattour", ar: "جولة الأقصر الخاصة ليوم كامل" },
    description: { en: "Discover the wonders of ancient Egypt with a full-day private tour to Luxor. Visit the Valley of the Kings, Karnak Temple, and Hatshepsut Temple.", ru: "Откройте чудеса древнего Египта с частным туром в Луксор на полный день.", de: "Entdecken Sie die Wunder des alten Ägypten mit einer ganztägigen Privattour nach Luxor.", ar: "اكتشف عجائب مصر القديمة بجولة خاصة ليوم كامل إلى الأقصر" },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 200,
    currency: "EUR",
    category: "Luxor",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/luxor_10835.jpg",
    rating: 4.8,
    highlights: [
      { en: "Valley of the Kings", ru: "Долина Царей", de: "Tal der Könige", ar: "وادي الملوك" },
      { en: "Karnak Temple", ru: "Храм Карнак", de: "Karnak-Tempel", ar: "معبد الكرنك" },
      { en: "Hatshepsut Temple", ru: "Храм Хатшепсут", de: "Hatschepsut-Tempel", ar: "معبد حتشبسوت" },
      { en: "Private Vehicle", ru: "Частный автомобиль", de: "Privatfahrzeug", ar: "سيارة خاصة" }
    ],
    included: [
      { en: "Private Transfer", ru: "Частный трансфер", de: "Privater Transfer", ar: "نقل خاص" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "69",
    slug: "one-way-cairo-private-trip",
    name: { en: "Cairo Private Tour - Pyramids & Museum", ru: "Частный тур в Каир - пирамиды и музей", de: "Kairo Privattour - Pyramiden und Museum", ar: "جولة القاهرة الخاصة - الأهرامات والمتحف" },
    description: { en: "Embark on an unforgettable journey with Cairo Private Tours. Visit the Pyramids of Giza, the Sphinx, and the Egyptian Museum with a private guide.", ru: "Отправьтесь в незабываемое путешествие с частным туром в Каир с посещением пирамид, сфинкса и музея.", de: "Begeben Sie sich auf eine unvergessliche Reise mit privaten Kairo-Touren.", ar: "انطلق في رحلة لا تُنسى مع جولات القاهرة الخاصة" },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 250,
    currency: "EUR",
    category: "Cairo",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/6f5ef5cdb9eb8091f6c44edae5f89f75.jpg",
    rating: 4.9,
    highlights: [
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Sphinx", ru: "Сфинкс", de: "Sphinx", ar: "أبو الهول" },
      { en: "Egyptian Museum", ru: "Египетский музей", de: "Ägyptisches Museum", ar: "المتحف المصري" },
      { en: "Private Guide", ru: "Частный гид", de: "Privater Führer", ar: "مرشد خاص" }
    ],
    included: [
      { en: "Private Vehicle", ru: "Частный автомобиль", de: "Privatfahrzeug", ar: "سيارة خاصة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Private Guide", ru: "Частный гид", de: "Privater Führer", ar: "مرشد خاص" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  }
];

export const categories = [
  { id: "all", name: { en: "All Trips", ru: "Все экскурсии", de: "Alle Ausflüge", ar: "جميع الرحلات" } },
  { id: "Cairo", name: { en: "Cairo", ru: "Каир", de: "Kairo", ar: "القاهرة" } },
  { id: "Luxor", name: { en: "Luxor", ru: "Луксор", de: "Luxor", ar: "الأقصر" } },
  { id: "Aswan", name: { en: "Aswan", ru: "Асуан", de: "Assuan", ar: "أسوان" } },
  { id: "Marsa Alam", name: { en: "Marsa Alam", ru: "Марса-Алам", de: "Marsa Alam", ar: "مرسى علم" } },
  { id: "Sea Adventures", name: { en: "Sea Adventures", ru: "Морские приключения", de: "Meeresabenteuer", ar: "مغامرات البحر" } },
  { id: "Desert Safari", name: { en: "Desert Safari", ru: "Сафари по пустыне", de: "Wüstensafari", ar: "سفاري الصحراء" } },
  { id: "Entertainment", name: { en: "Entertainment", ru: "Развлечения", de: "Unterhaltung", ar: "ترفيه" } },
  { id: "Cultural Tours", name: { en: "Cultural Tours", ru: "Культурные туры", de: "Kulturreisen", ar: "جولات ثقافية" } }
];

export function generateWhatsAppLink(trip: Trip, phoneNumber: string, greeting: string, lang: Language = "en"): string {
  const tripName = trip.name[lang] || trip.name.en;
  const tripPrice = trip.price;
  
  const message = encodeURIComponent(
    `${greeting}: ${tripName}\n\n` +
    `Price: €${tripPrice} ${trip.currency}`
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
}