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
    id: "3",
    slug: "luxor-marsa-alam",
    name: {
      en: "Luxor Bus Tour: Temples, Nile Crossing & Ancient Wonders",
      ru: "Автобусный тур в Луксор: храмы, переправа через Нил и чудеса древности",
      de: "Luxor Busreise: Tempel, Nilüberquerung und antike Wunder",
      ar: "رحلة حافلة الأقصر: معابد وعبور النيل وعجائب قديمة"
    },
    description: {
      en: "Embark on an unforgettable journey to Luxor, the timeless land of the pharaohs. Discover the Valley of the Kings, Karnak Temple, and the majestic Nile crossing.",
      ru: "Отправьтесь в незабываемое путешествие в Луксор, вечную землю фараонов.",
      de: "Begeben Sie sich auf eine unvergessliche Reise nach Luxor, dem zeitlosen Land der Pharaonen.",
      ar: "انطلق في رحلة لا تنسى إلى الأقصر، أرض الفراعنة الخالدة"
    },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 75,
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/Ramses_II_in_Luxor_Temple.jpg",
    rating: 4.9,
    highlights: [
      { en: "Valley of the Kings", ru: "Долина Царей", de: "Tal der Könige", ar: "وادي الملوك" },
      { en: "Karnak Temple", ru: "Храм Карнак", de: "Karnak-Tempel", ar: "معبد الكرنك" },
      { en: "Hatshepsut Temple", ru: "Храм Хатшепсут", de: "Hatschepsut-Tempel", ar: "معبد حتشبسوت" },
      { en: "Nile Crossing", ru: "Переправа через Нил", de: "Nilüberquerung", ar: "عبور النيل" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
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
    id: "5",
    slug: "cairo-gem-marsa-alam",
    name: {
      en: "Cairo & GEM Tour: Pyramids, Sphinx & Museum",
      ru: "Каир и Большой Египетский музей: пирамиды, сфинкс и музей",
      de: "Kairo & GEM: Pyramiden, Sphinx und Museum",
      ar: "جولة القاهرة والمتحف المصري الكبير: الأهرامات وأبو الهول والمتحف"
    },
    description: {
      en: "Get ready for a day full of wonders - where ancient history meets modern marvels. Visit the Pyramids, Sphinx, and the new Grand Egyptian Museum (GEM).",
      ru: "Приготовьтесь ко дню, полному чудес - где древняя история встречается с современными чудесами.",
      de: "Bereiten Sie sich auf einen Tag voller Wunder vor - wo alte Geschichte auf moderne Wunder trifft.",
      ar: "استعد ليوم مليء بالعجائب - حيث يلتقي التاريخ القديم بالعجائب الحديثة"
    },
    duration: { en: "2 days / 1 night", ru: "2 дня / 1 ночь", de: "2 Tage / 1 Nacht", ar: "يومان / ليلة واحدة" },
    price: 90,
    currency: "EUR",
    category: "Cairo",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/3b48adcc-b2d6-4dda-a6d1-08fa9b301820.jpg",
    rating: 4.9,
    highlights: [
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "Grand Egyptian Museum", ru: "Большой Египетский музей", de: "Großes Ägyptisches Museum", ar: "المتحف المصري الكبير" },
      { en: "Sphinx Area", ru: "Зона Сфинкса", de: "Sphinx-Bereich", ar: "منطقة أبو الهول" },
      { en: "Lunch at Local Restaurant", ru: "Обед в местном ресторане", de: "Mittagessen im lokalen Restaurant", ar: "غداء في مطعم محلي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "GEM Entrance Fee", ru: "Входной билет в ГЭМ", de: "GEM-Eintrittsgebühr", ar: "رسوم دخول المتحف المصري الكبير" },
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
    id: "8",
    slug: "nile-cruise-aswan-luxor",
    name: {
      en: "Nile Cruise: Luxor-Aswan Temples & River Magic",
      ru: "Круиз по Нилу: Луксор-Асуан храмы и магия реки",
      de: "Nilkreuzfahrt: Luxor-Assuan Tempel und Flusszauber",
      ar: "رحلة النيل: معابد الأقصر وأسوان وسحر النهر"
    },
    description: {
      en: "Embark on one of Egypt's most enchanting experiences - a Nile cruise between Luxor and Aswan. Visit magnificent temples and enjoy the magic of the Nile.",
      ru: "Отправьтесь в одно из самых захватывающих приключений Египта - круиз по Нилу между Луксором и Асуаном.",
      de: "Begeben Sie sich auf eine der bezauberndsten Erfahrungen Ägyptens - eine Nilkreuzfahrt zwischen Luxor und Assuan.",
      ar: "انطلق في واحدة من أكثر تجارب مصر سحراً - رحلة نيلية بين الأقصر وأسوان"
    },
    duration: { en: "4 days / 3 nights", ru: "4 дня / 3 ночи", de: "4 Tage / 3 Nächte", ar: "4 أيام / 3 ليال" },
    price: 350,
    currency: "EUR",
    category: "Cultural Tours",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/Ramses_II_in_Luxor_Temple.jpg",
    rating: 4.9,
    highlights: [
      { en: "Luxor Temple", ru: "Луксорский храм", de: "Luxor-Tempel", ar: "معبد الأقصر" },
      { en: "Karnak Temple", ru: "Храм Карнак", de: "Karnak-Tempel", ar: "معبد الكرنك" },
      { en: "Valley of the Kings", ru: "Долина Царей", de: "Tal der Könige", ar: "وادي الملوك" },
      { en: "Philae Temple", ru: "Храм Филе", de: "Philae-Tempel", ar: "معبد فيلة" }
    ],
    included: [
      { en: "Cabin Accommodation", ru: "Проживание в каюте", de: "Kabinenunterkunft", ar: "الإقامة في الكابينة" },
      { en: "All Meals", ru: "Все питание", de: "Alle Mahlzeiten", ar: "جميع الوجبات" },
      { en: "All Entrance Fees", ru: "Все входные билеты", de: "Alle Eintrittsgebühren", ar: "جميع رسوم الدخول" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" }
    ]
  },
  {
    id: "9",
    slug: "house-riding-marsa-alam",
    name: {
      en: "Beach Horse Ride: Sunset & Sea Adventure",
      ru: "Конная прогулка по пляжу: закат и море",
      de: "Strandausritt: Sonnenuntergang und Meer",
      ar: "ركوب الخيل على الشاطئ: مغامرة الغروب والبحر"
    },
    description: {
      en: "Saddle up for an unforgettable experience at Marsa Alam's only beachfront stable. Ride along the golden sand with the Red Sea breeze in your hair as the sun sets.",
      ru: "Седлайте коня для незабываемой прогулки по пляжу Марса-Алам с видом на закат.",
      de: "Erleben Sie einen unvergesslichen Ausritt am Strand von Marsa Alam bei Sonnenuntergang.",
      ar: "استعد لتجربة لا تُنسى في الإسطبل الوحيد على الشاطئ في مرسى علم"
    },
    duration: { en: "2 hours", ru: "2 часа", de: "2 Stunden", ar: "ساعتان" },
    price: 40,
    currency: "EUR",
    category: "Marsa Alam",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/download-19.jpg",
    rating: 4.8,
    highlights: [
      { en: "Beach Horseback Riding", ru: "Верховая езда по пляжу", de: "Strandausritt", ar: "ركوب الخيل على الشاطئ" },
      { en: "Sunset Views", ru: "Вид на закат", de: "Sonnenuntergangsblicke", ar: "إطلالة على الغروب" },
      { en: "Photo Opportunity", ru: "Фотосессия", de: "Fotomöglichkeit", ar: "فرصة التصوير" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Horse & Equipment", ru: "Лошадь и снаряжение", de: "Pferd & Ausrüstung", ar: "الحصان والمعدات" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" }
    ]
  },
  {
    id: "10",
    slug: "quad-sunrise-alaa-eladin",
    name: {
      en: "Aladin Safari: Quads, Camels & Desert Adventure",
      ru: "Аладин Сафари: квадроциклы, верблюды и приключения",
      de: "Aladin Safari: Quads, Kamele und Wüstenabenteuer",
      ar: "سفاري علاء الدين: دراجات رباعية وجمال ومغامرة صحراوية"
    },
    description: {
      en: "Start your morning with an unforgettable desert adventure where history, culture, and natural beauty come together. Ride quads and camels through the golden desert.",
      ru: "Начните утро с незабываемого приключения в пустыне, где история, культура и природа соединяются.",
      de: "Beginnen Sie Ihren Morgen mit einem unvergesslichen Wüstenabenteuer.",
      ar: "ابدأ صباحك بمغامرة صحراوية لا تُنسى حيث يلتقي التاريخ والثقافة والجمال الطبيعي"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Desert Safari",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/download-17.jpg",
    rating: 4.7,
    highlights: [
      { en: "Quad Biking", ru: "Квадроциклы", de: "Quad-Fahren", ar: "ركوب الدراجات الرباعية" },
      { en: "Camel Ride", ru: "Прогулка на верблюде", de: "Kamelritt", ar: "ركوب الجمل" },
      { en: "Sunrise Desert Views", ru: "Рассвет в пустыне", de: "Sonnenaufgang in der Wüste", ar: "مناظر شروق الشمس في الصحراء" },
      { en: "Bedouin Tea", ru: "Бедуинский чай", de: "Beduinen-Tee", ar: "شاي بدوي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Quad Bike", ru: "Квадроцикл", de: "Quad", ar: "دراجة رباعية" },
      { en: "Safety Gear", ru: "Защитное снаряжение", de: "Sicherheitsausrüstung", ar: "معدات السلامة" }
    ]
  },
  {
    id: "11",
    slug: "quad-safari-moto-marine",
    name: {
      en: "Quad Safari & Turtle Snorkel Adventure",
      ru: "Квадросафари и снорклинг с черепахами",
      de: "Quad-Safari und Schildkröten-Schnorchelabenteuer",
      ar: "سفاري الدراجات الرباعية والغوص مع السلاحف"
    },
    description: {
      en: "Get ready for a day bursting with adventure - ride quads through the desert and then snorkel with sea turtles in the crystal clear Red Sea.",
      ru: "Приготовьтесь ко дню, полному приключений - поездка на квадроциклах по пустыне и снорклинг с морскими черепахами.",
      de: "Bereiten Sie sich auf einen Tag voller Abenteuer vor - Quad fahren in der Wüste und Schnorcheln mit Meeresschildkröten.",
      ar: "استعد ليوم مليء بالمغامرة - ركوب الدراجات الرباعية في الصحراء والغوص مع السلاحف البحرية"
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Desert Safari",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/8f433bda-0384-49dc-909e-b18bf82aa09f.jpg",
    rating: 4.8,
    highlights: [
      { en: "Quad Biking", ru: "Квадроциклы", de: "Quad-Fahren", ar: "ركوب الدراجات الرباعية" },
      { en: "Snorkeling with Turtles", ru: "Снорклинг с черепахами", de: "Schnorcheln mit Schildkröten", ar: "الغوص مع السلاحف" },
      { en: "Desert & Sea Combo", ru: "Комбо пустыня и море", de: "Wüsten- & Meer-Kombination", ar: "مزيج الصحراء والبحر" },
      { en: "Lunch on Beach", ru: "Обед на пляже", de: "Mittagessen am Strand", ar: "غداء على الشاطئ" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Quad & Snorkel Gear", ru: "Квадроцикл и снаряжение", de: "Quad- & Schnorchelausrüstung", ar: "الدراجة الرباعية ومعدات الغوص" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "12",
    slug: "buggy-marsa-alam",
    name: {
      en: "Family Buggy Safari: Desert Fun & Bedouin Life",
      ru: "Семейное багги сафари: веселье и бедуинская жизнь",
      de: "Familien-Buggy-Safari: Wüstenspaß und Beduinenleben",
      ar: "سفاري البغي العائلية: متعة الصحراء والحياة البدوية"
    },
    description: {
      en: "Looking for the perfect family activity that combines adventure, culture, and breathtaking scenery? Drive buggies through the desert and visit a Bedouin village.",
      ru: "Ищете идеальное семейное приключение, сочетающее адреналин, культуру и живописные виды?",
      de: "Suchen Sie nach der perfekten Familienaktivität, die Abenteuer, Kultur und atemberaubende Landschaften vereint?",
      ar: "هل تبحث عن النشاط العائلي المثالي الذي يجمع بين المغامرة والثقافة والمناظر الخلابة؟"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 45,
    currency: "EUR",
    category: "Desert Safari",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/download-23.jpg",
    rating: 4.7,
    highlights: [
      { en: "Buggy Driving", ru: "Вождение багги", de: "Buggy-Fahren", ar: "قيادة البغي" },
      { en: "Bedouin Village Visit", ru: "Посещение бедуинской деревни", de: "Besuch im Beduinendorf", ar: "زيارة القرية البدوية" },
      { en: "Desert Scenery", ru: "Пустынные пейзажи", de: "Wüstenlandschaft", ar: "مناظر الصحراء" },
      { en: "Family Friendly", ru: "Для всей семьи", de: "Familienfreundlich", ar: "مناسب للعائلة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Buggy Rental", ru: "Аренда багги", de: "Buggy-Miete", ar: "استئجار البغي" },
      { en: "Safety Helmets", ru: "Защитные шлемы", de: "Sicherheitshelme", ar: "خوذات السلامة" }
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
    id: "16",
    slug: "coral-garden-trip",
    name: {
      en: "Coral Garden: Snorkel, Dive & Red Sea Magic",
      ru: "Коралловый сад: снорклинг, дайвинг и магия Красного моря",
      de: "Korallengarten: Schnorcheln, Tauchen & Rotmeer-Magie",
      ar: "الحديقة المرجانية: غوص وسباحة وسحر البحر الأحمر"
    },
    description: {
      en: "Discover the underwater paradise of the Red Sea's coral gardens. Snorkel or dive among vibrant coral reefs and colorful marine life.",
      ru: "Откройте подводный рай коралловых садов Красного моря.",
      de: "Entdecken Sie das Unterwasserparadies der Korallengärten des Roten Meeres.",
      ar: "اكتشف الجنة تحت الماء في الحدائق المرجانية للبحر الأحمر"
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/96a29fd2-0b31-4717-85e5-06f3f9f98463.webp",
    rating: 4.7,
    highlights: [
      { en: "Coral Reef Snorkeling", ru: "Снорклинг на коралловых рифах", de: "Schnorcheln an Korallenriffen", ar: "الغوص في الشعاب المرجانية" },
      { en: "Marine Life", ru: "Морская жизнь", de: "Meeresleben", ar: "الحياة البحرية" },
      { en: "Diving Option", ru: "Дайвинг", de: "Tauchmöglichkeit", ar: "خيار الغوص" },
      { en: "Beach Relaxation", ru: "Отдых на пляже", de: "Strandentspannung", ar: "الاسترخاء على الشاطئ" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "17",
    slug: "sataya-overnight-trip",
    name: {
      en: "Sataya Overnight: Dolphins, Diving & Reef Magic",
      ru: "Сатая с ночевкой: дельфины, дайвинг и магия рифа",
      de: "Sataya Übernachtung: Delfine, Tauchen & Riffzauber",
      ar: "ساتايا للمبيت: دلافين وغوص وسحر الشعاب المرجانية"
    },
    description: {
      en: "Spend an unforgettable night at Sataya Dolphin Reef. Swim with dolphins, dive in crystal clear waters, and sleep under the stars on a remote island.",
      ru: "Проведите незабываемую ночь на дельфиньем рифе Сатая.",
      de: "Verbingen Sie eine unvergessliche Nacht am Sataya-Delfinriff.",
      ar: "اقض ليلة لا تُنسى في شعاب ساتايا للدلافين"
    },
    duration: { en: "2 days / 1 night", ru: "2 дня / 1 ночь", de: "2 Tage / 1 Nacht", ar: "يومان / ليلة واحدة" },
    price: 120,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/Ras-Mohammed-Snorkelling-Trip-Sharm-El-Sheikh-e1669505579298.jpg",
    rating: 4.8,
    highlights: [
      { en: "Swimming with Dolphins", ru: "Плавание с дельфинами", de: "Schwimmen mit Delfinen", ar: "السباحة مع الدلافين" },
      { en: "Night on the Island", ru: "Ночь на острове", de: "Nacht auf der Insel", ar: "المبيت في الجزيرة" },
      { en: "Snorkeling & Diving", ru: "Снорклинг и дайвинг", de: "Schnorcheln & Tauchen", ar: "الغوص والسباحة" },
      { en: "Stargazing", ru: "Наблюдение за звездами", de: "Sternenbeobachtung", ar: "مراقبة النجوم" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "All Meals", ru: "Все питание", de: "Alle Mahlzeiten", ar: "جميع الوجبات" },
      { en: "Snorkel & Dive Gear", ru: "Снаряжение для снорклинга и дайвинга", de: "Schnorchel- & Taucherausrüstung", ar: "معدات الغوص" },
      { en: "Overnight Accommodation", ru: "Проживание", de: "Unterkunft", ar: "الإقامة" }
    ]
  },
  {
    id: "18",
    slug: "el-qulan-sharm-el-luli-beach",
    name: {
      en: "Sharm El Luli Beach Trip: Paradise in Marsa Alam",
      ru: "Пляж Шарм-эль-Лули: рай в Марса-Алам",
      de: "Sharm El Luli Strand: Paradies in Marsa Alam",
      ar: "رحلة شاطئ شرم اللولي: جنة في مرسى علم"
    },
    description: {
      en: "Discover one of the most beautiful beaches in Egypt. Sharm El Luli offers crystal turquoise waters, pristine white sand, and incredible snorkeling.",
      ru: "Откройте один из самых красивых пляжей Египта - Шарм-эль-Лули.",
      de: "Entdecken Sie einen der schönsten Strände Ägyptens - Sharm El Luli.",
      ar: "اكتشف واحداً من أجمل الشواطئ في مصر - شرم اللولي"
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Marsa Alam",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-26-at-02.24.38_b2ee4396.jpg",
    rating: 4.8,
    highlights: [
      { en: "Pristine Beach", ru: "Девственный пляж", de: "Unberührter Strand", ar: "شاطئ بكر" },
      { en: "Turquoise Waters", ru: "Бирюзовая вода", de: "Türkisfarbenes Wasser", ar: "مياه فيروزية" },
      { en: "Snorkeling", ru: "Снорклинг", de: "Schnorcheln", ar: "الغوص" },
      { en: "Relaxation", ru: "Отдых", de: "Entspannung", ar: "استرخاء" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Beach Entry", ru: "Вход на пляж", de: "Strandeintritt", ar: "دخول الشاطئ" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "19",
    slug: "samadai-dolphin-reef",
    name: {
      en: "Samadai Dolphin Reef: Snorkel & Sea Adventure",
      ru: "Дельфиний риф Самадай: снорклинг и морское приключение",
      de: "Samadai Delfinriff: Schnorchel- & Meeresabenteuer",
      ar: "شعاب ساماداي للدلافين: غوص ومغامرة بحرية"
    },
    description: {
      en: "Visit the famous Samadai Dolphin Reef, a protected area where dolphins gather in their natural habitat. Snorkel alongside these magnificent creatures.",
      ru: "Посетите знаменитый дельфиний риф Самадай, где дельфины собираются в естественной среде обитания.",
      de: "Besuchen Sie das berühmte Samadai-Delfinriff, ein Schutzgebiet, in dem sich Delfine in ihrem natürlichen Lebensraum versammeln.",
      ar: "قم بزيارة شعاب ساماداي الشهيرة للدلافين، وهي منطقة محمية تتجمع فيها الدلافين في بيئتها الطبيعية"
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 45,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-26-at-00.37.57_8e983bf8.jpg",
    rating: 4.9,
    highlights: [
      { en: "Dolphin Reef Snorkeling", ru: "Снорклинг с дельфинами", de: "Schnorcheln mit Delfinen", ar: "الغوص مع الدلافين" },
      { en: "Protected Marine Area", ru: "Охраняемая морская зона", de: "Geschütztes Meeresgebiet", ar: "منطقة بحرية محمية" },
      { en: "Coral Reefs", ru: "Коралловые рифы", de: "Korallenriffe", ar: "الشعاب المرجانية" },
      { en: "Boat Ride", ru: "Прогулка на лодке", de: "Bootsfahrt", ar: "رحلة بالقارب" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "20",
    slug: "marsa-mubarak",
    name: {
      en: "Marsa Mubarak Adventure: Red Sea Paradise",
      ru: "Марса Мубарак: рай Красного моря",
      de: "Marsa Mubarak Abenteuer: Rotmeer-Paradies",
      ar: "مغامرة مرسى مبارك: جنة البحر الأحمر"
    },
    description: {
      en: "Explore Marsa Mubarak, a stunning bay known for its crystal clear waters and abundant marine life. Perfect for snorkeling and relaxation.",
      ru: "Исследуйте Марса Мубарак - потрясающую бухту с кристально чистой водой.",
      de: "Entdecken Sie Marsa Mubarak, eine atemberaubende Bucht mit kristallklarem Wasser.",
      ar: "استكشف مرسى مبارك، خليج مذهل بمياهه الصافية"
    },
    duration: { en: "5 hours", ru: "5 часов", de: "5 Stunden", ar: "5 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-25-at-22.05.31_a19389e0.jpg",
    rating: 4.7,
    highlights: [
      { en: "Snorkeling", ru: "Снорклинг", de: "Schnorcheln", ar: "الغوص" },
      { en: "Marine Life", ru: "Морская жизнь", de: "Meeresleben", ar: "الحياة البحرية" },
      { en: "Crystal Clear Waters", ru: "Кристально чистая вода", de: "Kristallklares Wasser", ar: "مياه صافية" },
      { en: "Beach Time", ru: "Время на пляже", de: "Strandzeit", ar: "وقت الشاطئ" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "21",
    slug: "nefertari",
    name: {
      en: "Nefertari Royal Sunset: Snorkel & Coral Views",
      ru: "Нефертари Королевский закат: снорклинг и кораллы",
      de: "Nefertari Königlicher Sonnenuntergang: Schnorcheln & Korallen",
      ar: "نفرتاري الملكي عند الغروب: غوص ومناظر مرجانية"
    },
    description: {
      en: "Set sail on a beautiful sunset cruise with snorkeling stops at pristine coral reefs. Enjoy dinner on board as the sun sets over the Red Sea.",
      ru: "Отправьтесь в красивый круиз на закате с остановками для снорклинга у коралловых рифов.",
      de: "Segeln Sie bei einer schönen Sonnenuntergangsfahrt mit Schnorchelstopps an unberührten Korallenriffen.",
      ar: "أبحر في رحلة غروب جميلة مع التوقف للغوص في الشعاب المرجانية البكر"
    },
    duration: { en: "5 hours", ru: "5 часов", de: "5 Stunden", ar: "5 ساعات" },
    price: 30,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/IMG_20250624_180038_494-1.webp",
    rating: 4.7,
    highlights: [
      { en: "Sunset Cruise", ru: "Круиз на закате", de: "Sonnenuntergangsfahrt", ar: "رحلة غروب الشمس" },
      { en: "Snorkeling", ru: "Снорклинг", de: "Schnorcheln", ar: "الغوص" },
      { en: "Coral Reef Views", ru: "Коралловые рифы", de: "Korallenriff-Blicke", ar: "مناظر الشعاب المرجانية" },
      { en: "Dinner on Board", ru: "Ужин на борту", de: "Abendessen an Bord", ar: "عشاء على متن القارب" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Dinner", ru: "Ужин", de: "Abendessen", ar: "العشاء" }
    ]
  },
  {
    id: "22",
    slug: "sataya-dolphin-house",
    name: {
      en: "Sataya Dolphin House: Snorkel with Dolphins",
      ru: "Дом дельфинов Сатая: снорклинг с дельфинами",
      de: "Sataya Delfinhaus: Schnorcheln mit Delfinen",
      ar: "بيت الدلافين ساتايا: الغوص مع الدلافين"
    },
    description: {
      en: "Visit the famous Sataya Dolphin House, a sanctuary where spinner dolphins live year-round. Snorkel in crystal clear waters surrounded by dolphins.",
      ru: "Посетите знаменитый Дом дельфинов Сатая, где круглый год живут дельфины.",
      de: "Besuchen Sie das berühmte Sataya Delfinhaus, wo das ganze Jahr über Delfine leben.",
      ar: "قم بزيارة بيت الدلافين الشهير ساتايا، حيث تعيش الدلافين على مدار السنة"
    },
    duration: { en: "7 hours", ru: "7 часов", de: "7 Stunden", ar: "7 ساعات" },
    price: 45,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-26-at-01.30.00_60d3fb67.jpg",
    rating: 4.8,
    highlights: [
      { en: "Swimming with Dolphins", ru: "Плавание с дельфинами", de: "Schwimmen mit Delfinen", ar: "السباحة مع الدلافين" },
      { en: "Snorkeling", ru: "Снорклинг", de: "Schnorcheln", ar: "الغوص" },
      { en: "Coral Reefs", ru: "Коралловые рифы", de: "Korallenriffe", ar: "الشعاب المرجانية" },
      { en: "Boat Trip", ru: "Поездка на лодке", de: "Bootsausflug", ar: "رحلة بالقارب" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "23",
    slug: "hamata-islands",
    name: {
      en: "Hamata Islands: Snorkel, Nature & Paradise",
      ru: "Острова Хамата: снорклинг, природа и рай",
      de: "Hamata-Inseln: Schnorcheln, Natur & Paradies",
      ar: "جزر هماتا: غوص وطبيعة وجنة"
    },
    description: {
      en: "Explore the untouched Hamata Islands, a paradise of white sandy beaches and vibrant coral reefs. Enjoy snorkeling in some of the Red Sea's most pristine waters.",
      ru: "Исследуйте нетронутые острова Хамата - рай с белыми песчаными пляжами и яркими коралловыми рифами.",
      de: "Erkunden Sie die unberührten Hamata-Inseln, ein Paradies mit weißen Sandstränden und lebhaften Korallenriffen.",
      ar: "استكشف جزر هماتا البكر، جنة من الشواطئ الرملية البيضاء والشعاب المرجانية النابضة بالحياة"
    },
    duration: { en: "8 hours", ru: "8 часов", de: "8 Stunden", ar: "8 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/ae.jpg",
    rating: 4.8,
    highlights: [
      { en: "Island Exploration", ru: "Исследование островов", de: "Inselerkundung", ar: "استكشاف الجزيرة" },
      { en: "Snorkeling", ru: "Снорклинг", de: "Schnorcheln", ar: "الغوص" },
      { en: "White Sandy Beaches", ru: "Белые песчаные пляжи", de: "Weiße Sandstrände", ar: "الشواطئ الرملية البيضاء" },
      { en: "Marine Life", ru: "Морская жизнь", de: "Meeresleben", ar: "الحياة البحرية" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
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
    id: "26",
    slug: "deep-blue-diving-adventure",
    name: {
      en: "Deep Blue Diving Adventure: Explore the Depths",
      ru: "Глубокое синее приключение: исследуйте глубины",
      de: "Tiefblau-Tauchabenteuer: Erkunden Sie die Tiefe",
      ar: "مغامرة الغوص في الأزرق العميق: استكشف الأعماق"
    },
    description: {
      en: "Dive into the deep blue waters of the Red Sea. Explore underwater caves, vibrant coral walls, and encounter exotic marine life in this guided diving tour.",
      ru: "Погрузитесь в глубокие синие воды Красного моря.",
      de: "Tauchen Sie in das tiefe Blau des Roten Meeres ein.",
      ar: "اغوص في المياه الزرقاء العميقة للبحر الأحمر"
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 70,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/Ras-Mohammed-Snorkelling-Trip-Sharm-El-Sheikh-e1669505579298.jpg",
    rating: 4.9,
    highlights: [
      { en: "Guided Diving", ru: "Дайвинг с инструктором", de: "Geführtes Tauchen", ar: "الغوص بإرشاد" },
      { en: "Underwater Caves", ru: "Подводные пещеры", de: "Unterwasserhöhlen", ar: "الكهوف تحت الماء" },
      { en: "Coral Walls", ru: "Коралловые стены", de: "Korallenwände", ar: "جدران مرجانية" },
      { en: "Exotic Marine Life", ru: "Экзотическая морская жизнь", de: "Exotisches Meeresleben", ar: "حياة بحرية غريبة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Diving Equipment", ru: "Снаряжение для дайвинга", de: "Tauchausrüstung", ar: "معدات الغوص" },
      { en: "Professional Dive Instructor", ru: "Инструктор", de: "Tauchlehrer", ar: "مدرب غوص محترف" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "27",
    slug: "sunset-fishing-trip",
    name: {
      en: "Sunset Fishing Trip: Relax & Reel In",
      ru: "Рыбалка на закате: расслабьтесь и ловите",
      de: "Sonnenuntergangs-Angeltour: Entspannen & Einholen",
      ar: "رحلة صيد عند الغروب: استرخِ واصطد"
    },
    description: {
      en: "Enjoy a peaceful fishing excursion on the Red Sea as the sun sets. Perfect for beginners and experienced anglers alike.",
      ru: "Насладитесь спокойной рыбалкой на Красном море на закате.",
      de: "Genießen Sie einen friedlichen Angelausflug auf dem Roten Meer bei Sonnenuntergang.",
      ar: "استمتع برحلة صيد هادئة في البحر الأحمر عند غروب الشمس"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-26-at-00.37.57_8e983bf8.jpg",
    rating: 4.5,
    highlights: [
      { en: "Fishing Experience", ru: "Рыбалка", de: "Angelerlebnis", ar: "تجربة الصيد" },
      { en: "Sunset Views", ru: "Вид на закат", de: "Sonnenuntergangsblick", ar: "إطلالة الغروب" },
      { en: "Boat Cruise", ru: "Прогулка на лодке", de: "Bootsfahrt", ar: "رحلة بحرية" },
      { en: "All Fishing Gear", ru: "Все снаряжение", de: "Komplette Angelausrüstung", ar: "جميع معدات الصيد" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Fishing Equipment", ru: "Снаряжение для рыбалки", de: "Angelausrüstung", ar: "معدات الصيد" },
      { en: "Bait & Tackle", ru: "Наживка", de: "Köder & Zubehör", ar: "الطُعم والمعدات" }
    ]
  },
  {
    id: "28",
    slug: "luxury-yacht-dinner-cruise",
    name: {
      en: "Luxury Yacht Dinner Cruise: Elegance on Water",
      ru: "Роскошный яхтенный ужин: элегантность на воде",
      de: "Luxus-Yacht-Dinner-Kreuzfahrt: Eleganz auf dem Wasser",
      ar: "عشاء فاخر على اليخت: أناقة على الماء"
    },
    description: {
      en: "Indulge in a luxurious evening aboard a premium yacht. Enjoy a gourmet dinner under the stars with the gentle sea breeze and stunning coastal views.",
      ru: "Насладитесь роскошным вечером на премиум яхте.",
      de: "Genießen Sie einen luxuriösen Abend an Bord einer Premium-Yacht.",
      ar: "انغمس في أمسية فاخرة على متن يخت راقي"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 80,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-25-at-22.05.31_a19389e0.jpg",
    rating: 4.9,
    highlights: [
      { en: "Luxury Yacht Cruise", ru: "Круиз на роскошной яхте", de: "Luxus-Yacht-Kreuzfahrt", ar: "رحلة يخت فاخر" },
      { en: "Gourmet Dinner", ru: "Ресторанный ужин", de: "Gourmet-Abendessen", ar: "عشاء فاخر" },
      { en: "Open Bar", ru: "Открытый бар", de: "Offene Bar", ar: "بار مفتوح" },
      { en: "Night Skyline Views", ru: "Ночные огни", de: "Nachtblick", ar: "إطلالة الليل" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Yacht Charter", ru: "Аренда яхты", de: "Yacht-Charter", ar: "استئجار اليخت" },
      { en: "Dinner & Drinks", ru: "Ужин и напитки", de: "Abendessen & Getränke", ar: "العشاء والمشروبات" }
    ]
  },
  {
    id: "29",
    slug: "sea-paradise-snorkel-lunch",
    name: {
      en: "Sea Paradise Snorkel & Lunch: Full Day Fun",
      ru: "Морской рай: снорклинг и обед",
      de: "Meeresparadies Schnorcheln & Mittagessen",
      ar: "جنة البحر: غوص وغداء"
    },
    description: {
      en: "A full day of sea adventure with snorkeling at multiple reefs, a delicious lunch on board, and plenty of time to soak up the sun.",
      ru: "Полный день морских приключений со снорклингом на нескольких рифах.",
      de: "Ein ganzer Tag voller Meeresabenteuer mit Schnorcheln an mehreren Riffen.",
      ar: "يوم كامل من مغامرات البحر مع الغوص في شعاب مرجانية متعددة"
    },
    duration: { en: "8 hours", ru: "8 часов", de: "8 Stunden", ar: "8 ساعات" },
    price: 50,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/IMG_20250624_180038_494-1.webp",
    rating: 4.6,
    highlights: [
      { en: "Multi-Reef Snorkeling", ru: "Многорифовый снорклинг", de: "Multi-Riff-Schnorcheln", ar: "الغوص في شعاب متعددة" },
      { en: "Lunch on Board", ru: "Обед на борту", de: "Mittagessen an Bord", ar: "غداء على متن القارب" },
      { en: "Sunbathing Deck", ru: "Солярий", de: "Sonnenliegen", ar: "منصة للحمامات الشمسية" },
      { en: "Marine Life Spotting", ru: "Наблюдение за морской жизнью", de: "Meeresleben beobachten", ar: "مشاهدة الحياة البحرية" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Equipment", ru: "Снаряжение", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch & Soft Drinks", ru: "Обед и напитки", de: "Mittagessen & Getränke", ar: "الغداء والمشروبات" }
    ]
  },
  {
    id: "30",
    slug: "red-sea-explorer",
    name: {
      en: "Red Sea Explorer: Ultimate Marine Adventure",
      ru: "Исследователь Красного моря: главное морское приключение",
      de: "Rotes-Meer-Entdecker: Ultimatives Meeresabenteuer",
      ar: "مستكشف البحر الأحمر: مغامرة بحرية فائقة"
    },
    description: {
      en: "An ultimate Red Sea experience combining snorkeling, island visits, marine life spotting, and a barbecue lunch on a pristine beach.",
      ru: "Главное приключение на Красном море снорклинг, острова и обед на пляже.",
      de: "Ein ultimatives Rotmeer-Erlebnis mit Schnorcheln, Inselbesuchen und BBQ am Strand.",
      ar: "تجربة البحر الأحمر المثلى تجمع الغوص وزيارة الجزر والغداء على الشاطئ"
    },
    duration: { en: "8 hours", ru: "8 часов", de: "8 Stunden", ar: "8 ساعات" },
    price: 55,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-26-at-01.30.00_60d3fb67.jpg",
    rating: 4.7,
    highlights: [
      { en: "Island Hopping", ru: "Острова", de: "Inselhopping", ar: "جولات بين الجزر" },
      { en: "Snorkeling", ru: "Снорклинг", de: "Schnorcheln", ar: "الغوص" },
      { en: "BBQ Lunch on Beach", ru: "Барбекю на пляже", de: "BBQ-Mittagessen am Strand", ar: "غداء شواء على الشاطئ" },
      { en: "Dolphin Spotting", ru: "Наблюдение за дельфинами", de: "Delfinbeobachtung", ar: "مشاهدة الدلافين" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Snorkeling Gear", ru: "Снаряжение", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "BBQ Lunch", ru: "Барбекю", de: "BBQ-Mittagessen", ar: "غداء شواء" }
    ]
  },
  {
    id: "31",
    slug: "private-fishing-charter",
    name: {
      en: "Private Fishing Charter: Exclusive Angling",
      ru: "Частная рыбалка: эксклюзивная ловля",
      de: "Private Angelcharter: Exklusives Angeln",
      ar: "رحلة صيد خاصة: صيد حصري"
    },
    description: {
      en: "Charter a private fishing boat for a day of exclusive angling in the Red Sea's richest fishing grounds. Perfect for serious anglers.",
      ru: "Арендуйте частную лодку для рыбалки в богатейших водах Красного моря.",
      de: "Chartern Sie ein privates Angelboot für einen Tag am reichsten Fischgrund des Roten Meeres.",
      ar: "استأجر قارب صيد خاص ليوم من الصيد الحصري في أغنى مناطق الصيد بالبحر الأحمر"
    },
    duration: { en: "8 hours", ru: "8 часов", de: "8 Stunden", ar: "8 ساعات" },
    price: 120,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-16-at-03.50.36_8cd1dd8d.jpg",
    rating: 4.8,
    highlights: [
      { en: "Private Boat Charter", ru: "Частная лодка", de: "Privater Bootscharter", ar: "استئجار قارب خاص" },
      { en: "Expert Fishing Guide", ru: "Гид-рыболов", de: "Angelführer", ar: "مرشد صيد خبير" },
      { en: "Premium Fishing Gear", ru: "Премиум снаряжение", de: "Premium-Angelausrüstung", ar: "معدات صيد فاخرة" },
      { en: "Catch & Cook Option", ru: "Поймай и приготовь", de: "Fangen & Kochen", ar: "خيار الصيد والطهي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Private Boat", ru: "Частная лодка", de: "Privates Boot", ar: "قارب خاص" },
      { en: "Fishing Equipment", ru: "Снаряжение", de: "Angelausrüstung", ar: "معدات الصيد" },
      { en: "Lunch & Drinks", ru: "Обед и напитки", de: "Mittagessen & Getränke", ar: "الغداء والمشروبات" }
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
    id: "34",
    slug: "stargazing-desert-adventure",
    name: {
      en: "Stargazing Desert Adventure: Night Sky Magic",
      ru: "Приключение под звездами: магия ночного неба",
      de: "Sternenbeobachtungs-Wüstenabenteuer: Nachtzauber",
      ar: "مغامرة مراقبة النجوم: سحر السماء ليلاً"
    },
    description: {
      en: "Escape far from city lights for a breathtaking night of stargazing in the desert. Astronomer-guided tour with telescope viewing of constellations and planets.",
      ru: "Убегите от городских огней для наблюдения за звездами в пустыне.",
      de: "Fliehen Sie weit weg von den Stadtlichtern für eine atemberaubende Nacht der Sternenbeobachtung in der Wüste.",
      ar: "اهرب بعيداً عن أضواء المدينة لقضاء ليلة رائعة من مراقبة النجوم في الصحراء"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Desert Safari",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/8f433bda-0384-49dc-909e-b18bf82aa09f.jpg",
    rating: 4.9,
    highlights: [
      { en: "Telescope Stargazing", ru: "Наблюдение в телескоп", de: "Teleskop-Sternenbeobachtung", ar: "مراقبة النجوم بالتليسكوب" },
      { en: "Astronomer Guide", ru: "Гид-астроном", de: "Astronom als Führer", ar: "مرشد فلكي" },
      { en: "Desert Night Silence", ru: "Тишина пустыни", de: "Wüstennachtstille", ar: "هدوء الصحراء ليلاً" },
      { en: "Hot Drinks & Snacks", ru: "Горячие напитки", de: "Heiße Getränke & Snacks", ar: "مشروبات ساخنة ووجبات خفيفة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Telescope & Guide", ru: "Телескоп и гид", de: "Teleskop & Führer", ar: "تليسكوب ومرشد" },
      { en: "Hot Beverages", ru: "Горячие напитки", de: "Heiße Getränke", ar: "مشروبات ساخنة" }
    ]
  },
  {
    id: "35",
    slug: "desert-safari-private-tour",
    name: {
      en: "Private Desert Safari: Exclusive Adventure",
      ru: "Частное сафари: эксклюзивное приключение",
      de: "Private Wüstensafari: Exklusives Abenteuer",
      ar: "سفاري صحراء خاص: مغامرة حصرية"
    },
    description: {
      en: "Enjoy a private desert safari tailored to your preferences. Quad bikes, camel rides, and a visit to a Bedouin village - all at your own pace.",
      ru: "Насладитесь частным сафари по пустыне с квадроциклами, верблюдами и бедуинской деревней.",
      de: "Genießen Sie eine private Wüstensafari mit Quads, Kamelritten und Beduinendorf.",
      ar: "استمتع بسفاري صحراوي خاص مصمم حسب رغبتك"
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 80,
    currency: "EUR",
    category: "Desert Safari",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/download-23.jpg",
    rating: 4.8,
    highlights: [
      { en: "Private Guide & Vehicle", ru: "Частный гид и автомобиль", de: "Privater Führer & Fahrzeug", ar: "مرشد ومركبة خاصة" },
      { en: "Quad & Camel Combo", ru: "Квадроцикл и верблюд", de: "Quad & Kamel Kombi", ar: "دراجة رباعية وجمل" },
      { en: "Bedouin Tea", ru: "Бедуинский чай", de: "Beduinen-Tee", ar: "شاي بدوي" },
      { en: "Flexible Itinerary", ru: "Гибкий маршрут", de: "Flexibler Reiseplan", ar: "جدول مرن" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Private Vehicle", ru: "Частный автомобиль", de: "Privatfahrzeug", ar: "مركبة خاصة" },
      { en: "Quad & Camel", ru: "Квадроцикл и верблюд", de: "Quad & Kamel", ar: "دراجة وجمل" }
    ]
  },
  {
    id: "36",
    slug: "sunrise-quad-adventure",
    name: {
      en: "Sunrise Quad Adventure: Desert Awakening",
      ru: "Рассветное приключение: пробуждение пустыни",
      de: "Sonnenaufgangs-Quad-Abenteuer: Wüsten-Erwachen",
      ar: "مغامرة الفجر الرباعية: صحوة الصحراء"
    },
    description: {
      en: "Rise early and conquer the dunes at sunrise. Ride quads through the golden desert as the sun paints the sky in brilliant colors.",
      ru: "Встаньте рано и покорите дюны на рассвете.",
      de: "Stehen Sie früh auf und erobern Sie die Dünen bei Sonnenaufgang.",
      ar: "استيقظ مبكراً واقهر الكثبان الرملية عند شروق الشمس"
    },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Desert Safari",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/3-9-870x555-1.jpg",
    rating: 4.6,
    highlights: [
      { en: "Sunrise Over Dunes", ru: "Рассвет над дюнами", de: "Sonnenaufgang über Dünen", ar: "شروق الشمس فوق الكثبان" },
      { en: "Quad Biking", ru: "Квадроциклы", de: "Quadfahren", ar: "ركوب الدراجات الرباعية" },
      { en: "Desert Photography", ru: "Фото пустыни", de: "Wüstenfotografie", ar: "تصوير الصحراء" },
      { en: "Morning Tea", ru: "Утренний чай", de: "Morgentee", ar: "شاي الصباح" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Quad Bike", ru: "Квадроцикл", de: "Quad", ar: "دراجة رباعية" },
      { en: "Safety Gear", ru: "Защита", de: "Sicherheitsausrüstung", ar: "معدات السلامة" }
    ]
  },
  {
    id: "37",
    slug: "camel-trekking-safari",
    name: {
      en: "Camel Trekking Safari: Desert Caravan",
      ru: "Сафари на верблюдах: пустынный караван",
      de: "Kamel-Trekking-Safari: Wüstenkarawane",
      ar: "سفاري ركوب الجمال: قافلة صحراوية"
    },
    description: {
      en: "Travel like the ancient Bedouins on a camel trekking adventure through the desert. Visit remote oases and experience true desert hospitality.",
      ru: "Путешествуйте как древние бедуины на верблюдах через пустыню.",
      de: "Reisen Sie wie die alten Beduinen auf einem Kamel-Trekking-Abenteuer durch die Wüste.",
      ar: "سافر مثل البدو القدماء في مغامرة ركوب الجمال عبر الصحراء"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Desert Safari",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/1-8-870x555-1.jpg",
    rating: 4.6,
    highlights: [
      { en: "Camel Ride", ru: "Прогулка на верблюде", de: "Kamelritt", ar: "ركوب الجمل" },
      { en: "Oasis Visit", ru: "Посещение оазиса", de: "Oasenbesuch", ar: "زيارة الواحة" },
      { en: "Bedouin Camp", ru: "Бедуинский лагерь", de: "Beduinenlager", ar: "مخيم بدوي" },
      { en: "Traditional Lunch", ru: "Традиционный обед", de: "Traditionelles Mittagessen", ar: "غداء تقليدي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Camel & Guide", ru: "Верблюд и гид", de: "Kamel & Führer", ar: "جمل ومرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "38",
    slug: "marsa-alam-city-tour",
    name: {
      en: "Marsa Alam City Tour: Local Life & Culture",
      ru: "Городской тур Марса-Алам: местная жизнь и культура",
      de: "Marsa Alam Stadtrundgang: Lokales Leben & Kultur",
      ar: "جولة مدينة مرسى علم: الحياة المحلية والثقافة"
    },
    description: {
      en: "Discover the charming city of Marsa Alam with its markets, local cafes, and cultural landmarks. Experience authentic Egyptian coastal life.",
      ru: "Откройте очаровательный город Марса-Алам с его рынками и кафе.",
      de: "Entdecken Sie die charmante Stadt Marsa Alam mit ihren Märkten und Cafés.",
      ar: "اكتشف مدينة مرسى علم الساحرة بأسواقها ومقاهيها"
    },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 20,
    currency: "EUR",
    category: "Marsa Alam",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/download-19.jpg",
    rating: 4.4,
    highlights: [
      { en: "Local Market Visit", ru: "Посещение рынка", de: "Marktbesuch", ar: "زيارة السوق المحلي" },
      { en: "Seaside Walk", ru: "Прогулка у моря", de: "Spaziergang am Meer", ar: "نزهة على شاطئ البحر" },
      { en: "Local Café", ru: "Местное кафе", de: "Lokales Café", ar: "مقهى محلي" },
      { en: "Photo Stops", ru: "Фото-остановки", de: "Fotostopps", ar: "توقف للتصوير" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Local Guide", ru: "Местный гид", de: "Lokaler Führer", ar: "مرشد محلي" }
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
    id: "42",
    slug: "mangrove-forest-kayaking",
    name: {
      en: "Mangrove Forest Kayaking: Eco-Adventure",
      ru: "Каякинг в мангровом лесу: эко-приключение",
      de: "Mangrovenwald-Kajakfahren: Öko-Abenteuer",
      ar: "التجديف في غابات المانجروف: مغامرة بيئية"
    },
    description: {
      en: "Paddle through the serene mangrove forests of Marsa Alam. Spot birds, crabs, and learn about this vital ecosystem on an eco-friendly kayaking tour.",
      ru: "Проплывите через спокойные мангровые леса Марса-Алам на каяке.",
      de: "Paddeln Sie durch die ruhigen Mangrovenwälder von Marsa Alam.",
      ar: "جدف عبر غابات المانجروف الهادئة في مرسى علم"
    },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 30,
    currency: "EUR",
    category: "Marsa Alam",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/download-19.jpg",
    rating: 4.5,
    highlights: [
      { en: "Kayaking", ru: "Каякинг", de: "Kajakfahren", ar: "التجديف" },
      { en: "Mangrove Ecosystem", ru: "Экосистема мангров", de: "Mangroven-Ökosystem", ar: "نظام المانجروف البيئي" },
      { en: "Bird Watching", ru: "Наблюдение за птицами", de: "Vogelbeobachtung", ar: "مراقبة الطيور" },
      { en: "Eco Guide", ru: "Эко-гид", de: "Öko-Führer", ar: "مرشد بيئي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Kayak & Equipment", ru: "Каяк и снаряжение", de: "Kajak & Ausrüstung", ar: "قوارب التجديف والمعدات" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" }
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
    id: "44",
    slug: "cairo-shopping-cultural-tour",
    name: {
      en: "Cairo Shopping & Cultural Tour: Bazaars & Heritage",
      ru: "Шопинг и культура Каира: базары и наследие",
      de: "Kairo Shopping- & Kulturtour: Basare & Erbe",
      ar: "جولة تسوق وثقافة القاهرة: أسواق وتراث"
    },
    description: {
      en: "Dive into Cairo's vibrant culture with a shopping tour through Khan El Khalili bazaar, visit Al-Azhar Mosque, and explore historic Islamic Cairo.",
      ru: "Погрузитесь в яркую культуру Каира с шопингом на базаре Хан-эль-Халили.",
      de: "Tauchen Sie ein in Kairos lebendige Kultur mit einem Shopping-Bummel durch den Khan-El-Khalili-Basar.",
      ar: "انغمس في ثقافة القاهرة النابضة بالحياة بجولة تسوق في خان الخليلي"
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 50,
    currency: "EUR",
    category: "Cairo",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/3b48adcc-b2d6-4dda-a6d1-08fa9b301820.jpg",
    rating: 4.5,
    highlights: [
      { en: "Khan El Khalili Bazaar", ru: "Базар Хан-эль-Халили", de: "Khan-El-Khalili-Basar", ar: "خان الخليلي" },
      { en: "Islamic Cairo Walk", ru: "Прогулка по исламскому Каиру", de: "Spaziergang durch das islamische Kairo", ar: "جولة في القاهرة الإسلامية" },
      { en: "Al-Azhar Mosque", ru: "Мечеть Аль-Азхар", de: "Al-Azhar-Moschee", ar: "مسجد الأزهر" },
      { en: "Local Lunch", ru: "Местный обед", de: "Lokales Mittagessen", ar: "غداء محلي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "45",
    slug: "islamic-cairo-walking-tour",
    name: {
      en: "Islamic Cairo Walking Tour: History & Architecture",
      ru: "Пеший тур по исламскому Каиру: история и архитектура",
      de: "Islamische Kairo-Wanderung: Geschichte & Architektur",
      ar: "جولة سير في القاهرة الإسلامية: تاريخ وهندسة"
    },
    description: {
      en: "Walk through the historic streets of Islamic Cairo, visiting medieval mosques, madrasas, and the famous Citadel of Saladin.",
      ru: "Пройдите по историческим улицам исламского Каира, посещая средневековые мечети.",
      de: "Schlendern Sie durch die historischen Straßen des islamischen Kairo.",
      ar: "تجول في شوارع القاهرة الإسلامية التاريخية"
    },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Cairo",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/b7f4e4fa-b2a0-4190-8333-0908f73c8ca7.jpg",
    rating: 4.6,
    highlights: [
      { en: "Citadel of Saladin", ru: "Цитадель Саладина", de: "Zitadelle von Saladin", ar: "قلعة صلاح الدين" },
      { en: "Mohamed Ali Mosque", ru: "Мечеть Мохамеда Али", de: "Mohamed-Ali-Moschee", ar: "مسجد محمد علي" },
      { en: "Medieval Architecture", ru: "Средневековая архитектура", de: "Mittelalterliche Architektur", ar: "العمارة في العصور الوسطى" },
      { en: "Local Guide", ru: "Местный гид", de: "Lokaler Führer", ar: "مرشد محلي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" }
    ]
  },
  {
    id: "46",
    slug: "coptic-cairo-tour",
    name: {
      en: "Coptic Cairo Tour: Christian Heritage Walk",
      ru: "Тур по коптскому Каиру: христианское наследие",
      de: "Koptische Kairo-Tour: Christliches Erbe",
      ar: "جولة القاهرة القبطية: تراث مسيحي"
    },
    description: {
      en: "Explore the ancient churches and religious sites of Coptic Cairo, including the Hanging Church, Ben Ezra Synagogue, and the Coptic Museum.",
      ru: "Исследуйте древние церкви и религиозные места коптского Каира.",
      de: "Erkunden Sie die alten Kirchen und religiösen Stätten des koptischen Kairo.",
      ar: "استكشف الكنائس القديمة والمواقع الدينية في القاهرة القبطية"
    },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 30,
    currency: "EUR",
    category: "Cairo",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/9904d6be-f2b3-462d-b501-41f73074bb0b.jpg",
    rating: 4.5,
    highlights: [
      { en: "The Hanging Church", ru: "Висячая церковь", de: "Hängende Kirche", ar: "الكنيسة المعلقة" },
      { en: "Coptic Museum", ru: "Коптский музей", de: "Koptisches Museum", ar: "المتحف القبطي" },
      { en: "Ben Ezra Synagogue", ru: "Синагога Бен Эзра", de: "Ben-Ezra-Synagoge", ar: "معبد بن عزرا" },
      { en: "Ancient Churches", ru: "Древние церкви", de: "Alte Kirchen", ar: "كنائس قديمة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" }
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
    id: "48",
    slug: "luxor-east-west-bank",
    name: {
      en: "Luxor East & West Bank Tour: Full Day",
      ru: "Тур по Восточному и Западному берегу Луксора",
      de: "Luxor Ost- & Westufer-Tour: Ganztägig",
      ar: "جولة البر الشرقي والغربي للأقصر: يوم كامل"
    },
    description: {
      en: "A comprehensive full-day tour covering both the East and West Banks of Luxor. Visit Karnak, Luxor Temple, Valley of the Kings, and Hatshepsut Temple.",
      ru: "Полный дневной тур по обоим берегам Луксора.",
      de: "Eine umfassende Ganztagestour zu beiden Ufern von Luxor.",
      ar: "جولة شاملة ليوم كامل تغطي البرين الشرقي والغربي للأقصر"
    },
    duration: { en: "1 day", ru: "1 день", de: "1 Tag", ar: "يوم واحد" },
    price: 70,
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/Luxor-Hot-Air-Balloon-1.jpeg",
    rating: 4.8,
    highlights: [
      { en: "Karnak Temple", ru: "Храм Карнак", de: "Karnak-Tempel", ar: "معبد الكرنك" },
      { en: "Luxor Temple", ru: "Луксорский храм", de: "Luxor-Tempel", ar: "معبد الأقصر" },
      { en: "Valley of the Kings", ru: "Долина Царей", de: "Tal der Könige", ar: "وادي الملوك" },
      { en: "Hatshepsut Temple", ru: "Храм Хатшепсут", de: "Hatschepsut-Tempel", ar: "معبد حتشبسوت" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch", ru: "Обед", de: "Mittagessen", ar: "غداء" }
    ]
  },
  {
    id: "49",
    slug: "luxor-temple-night-visit",
    name: {
      en: "Luxor Temple by Night: Sound & Light Show",
      ru: "Луксорский храм ночью: световое шоу",
      de: "Luxor-Tempel bei Nacht: Sound- & Light-Show",
      ar: "معبد الأقصر ليلاً: عرض الصوت والضوء"
    },
    description: {
      en: "Experience the magic of Luxor Temple illuminated at night with the spectacular Sound and Light show. A mesmerizing journey through ancient Egyptian history.",
      ru: "Испытайте магию Луксорского храма, освещенного ночью, со световым шоу.",
      de: "Erleben Sie die Magie des beleuchteten Luxor-Tempels bei Nacht mit der Sound- und Light-Show.",
      ar: "اختبر سحر معبد الأقصر المضاء ليلاً بعرض الصوت والضوء"
    },
    duration: { en: "2 hours", ru: "2 часа", de: "2 Stunden", ar: "ساعتان" },
    price: 25,
    currency: "EUR",
    category: "Luxor",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/2222.png",
    rating: 4.7,
    highlights: [
      { en: "Sound & Light Show", ru: "Световое шоу", de: "Sound- & Light-Show", ar: "عرض الصوت والضوء" },
      { en: "Illuminated Temple", ru: "Освещенный храм", de: "Beleuchteter Tempel", ar: "معبد مضاء" },
      { en: "Night Photography", ru: "Ночная фотосессия", de: "Nachtfotografie", ar: "تصوير ليلي" },
      { en: "Guided Narrative", ru: "Рассказ гида", de: "Geführte Erzählung", ar: "سرد موجه" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Show Ticket", ru: "Билет на шоу", de: "Show-Ticket", ar: "تذكرة العرض" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" }
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
    id: "55",
    slug: "philae-sound-light",
    name: {
      en: "Philae Temple Sound & Light: Night Magic",
      ru: "Световое шоу в храме Филе: ночная магия",
      de: "Philae-Tempel Sound & Light: Nachtzauber",
      ar: "عرض الصوت والضوء في معبد فيلة: سحر الليل"
    },
    description: {
      en: "Experience the enchanting Sound and Light show at Philae Temple. Watch the temple come alive with colorful lights as the story of Isis unfolds.",
      ru: "Испытайте завораживающее световое шоу в храме Филе.",
      de: "Erleben Sie die bezaubernde Sound- und Light-Show am Philae-Tempel.",
      ar: "اختبر عرض الصوت والضوء الساحر في معبد فيلة"
    },
    duration: { en: "2 hours", ru: "2 часа", de: "2 Stunden", ar: "ساعتان" },
    price: 30,
    currency: "EUR",
    category: "Aswan",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2026/02/IMG-20260212-WA0029-e1770908632870.jpg",
    rating: 4.7,
    highlights: [
      { en: "Sound & Light Show", ru: "Световое шоу", de: "Sound- & Light-Show", ar: "عرض الصوت والضوء" },
      { en: "Philae Temple by Night", ru: "Храм Филе ночью", de: "Philae-Tempel bei Nacht", ar: "معبد فيلة ليلاً" },
      { en: "Isis Mythology", ru: "Мифология Исиды", de: "Isis-Mythologie", ar: "أسطورة إيزيس" },
      { en: "Boat Transfer to Temple", ru: "Лодка к храму", de: "Bootstransfer zum Tempel", ar: "نقل بالقوارب إلى المعبد" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Show Ticket", ru: "Билет на шоу", de: "Show-Ticket", ar: "تذكرة العرض" },
      { en: "Boat Ride", ru: "Поездка на лодке", de: "Bootsfahrt", ar: "رحلة بالقارب" }
    ]
  },
  {
    id: "56",
    slug: "nubian-museum-culture-tour",
    name: {
      en: "Nubian Museum & Culture Tour: Heritage & Art",
      ru: "Музей нубийской культуры: наследие и искусство",
      de: "Nubisches Museum & Kulturreise: Erbe & Kunst",
      ar: "متحف النوبة والثقافة: تراث وفن"
    },
    description: {
      en: "Discover the rich history and culture of Nubia at the Nubian Museum in Aswan. See artifacts, traditional crafts, and learn about Nubian traditions.",
      ru: "Откройте богатую историю и культуру Нубии в Нубийском музее Асуана.",
      de: "Entdecken Sie die reiche Geschichte und Kultur Nubiens im Nubischen Museum in Assuan.",
      ar: "اكتشف التاريخ والثقافة الغنية للنوبة في متحف النوبة بأسوان"
    },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 25,
    currency: "EUR",
    category: "Aswan",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2026/02/IMG-20260212-WA0029-e1770908632870.jpg",
    rating: 4.6,
    highlights: [
      { en: "Nubian Museum", ru: "Нубийский музей", de: "Nubisches Museum", ar: "متحف النوبة" },
      { en: "Ancient Artifacts", ru: "Древние артефакты", de: "Alte Artefakte", ar: "قطع أثرية قديمة" },
      { en: "Nubian Crafts", ru: "Нубийские ремесла", de: "Nubische Handwerkskunst", ar: "الحرف النوبية" },
      { en: "Cultural Guide", ru: "Гид по культуре", de: "Kulturführer", ar: "مرشد ثقافي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Museum Entrance", ru: "Вход в музей", de: "Museumseintritt", ar: "دخول المتحف" },
      { en: "Guide", ru: "Гид", de: "Führer", ar: "مرشد" }
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
    id: "59",
    slug: "bowling-games-night",
    name: {
      en: "Bowling & Games Night: Fun & Entertainment",
      ru: "Боулинг и игры: вечер веселья",
      de: "Bowling- & Spieleabend: Spaß & Unterhaltung",
      ar: "ليلة بولينغ وألعاب: متعة وترفيه"
    },
    description: {
      en: "Enjoy a fun evening of bowling, billiards, and arcade games at a modern entertainment center. Great for groups and families.",
      ru: "Насладитесь веселым вечером боулинга, бильярда и аркадных игр.",
      de: "Genießen Sie einen unterhaltsamen Abend mit Bowling, Billard und Arcade-Spielen.",
      ar: "استمتع بأمسية ممتعة من البولينغ والبلياردو وألعاب الأركيد"
    },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 25,
    currency: "EUR",
    category: "Entertainment",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/6-1.jpg",
    rating: 4.3,
    highlights: [
      { en: "Bowling", ru: "Боулинг", de: "Bowling", ar: "بولينغ" },
      { en: "Billiards", ru: "Бильярд", de: "Billard", ar: "بلياردو" },
      { en: "Arcade Games", ru: "Аркадные игры", de: "Arcade-Spiele", ar: "ألعاب أركيد" },
      { en: "Snacks & Drinks", ru: "Закуски и напитки", de: "Snacks & Getränke", ar: "وجبات خفيفة ومشروبات" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Game Credits", ru: "Кредиты для игр", de: "Spielguthaben", ar: "رصيد الألعاب" }
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
    id: "61",
    slug: "luxor-ballon-trip",
    name: { en: "Luxor Balloon Ride: Sunrise Views & West Bank Tour", ru: "Полет на воздушном шаре в Луксоре: рассвет и западный берег", de: "Luxor Heißluftballonfahrt: Sonnenaufgang und Westbank", ar: "ركوب المنطاد في الأقصر: مناظر شروق الشمس وجولة البر الغربي" },
    description: { en: "Experience the ultimate adventure at sunrise with a breathtaking hot air balloon ride over Luxor's West Bank. Soar above the Valley of the Kings and ancient temples.", ru: "Испытайте незабываемое приключение на рассвете с полетом на воздушном шаре над Луксором.", de: "Erleben Sie das ultimative Abenteuer bei Sonnenaufgang mit einer atemberaubenden Heißluftballonfahrt über Luxor.", ar: "اختبر المغامرة المثلى عند شروق الشمس مع رحلة منطاد مذهلة فوق الأقصر" },
    duration: { en: "4 hours", ru: "4 часа", de: "4 Stunden", ar: "4 ساعات" },
    price: 120,
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/Luxor-Hot-Air-Balloon-1.jpeg",
    rating: 5.0,
    highlights: [
      { en: "Hot Air Balloon Ride", ru: "Полет на воздушном шаре", de: "Heißluftballonfahrt", ar: "ركوب المنطاد" },
      { en: "Sunrise Over Luxor", ru: "Рассвет над Луксором", de: "Sonnenaufgang über Luxor", ar: "شروق الشمس فوق الأقصر" },
      { en: "Valley of the Kings View", ru: "Вид на Долину Царей", de: "Blick auf das Tal der Könige", ar: "إطلالة على وادي الملوك" },
      { en: "West Bank Temples", ru: "Храмы западного берега", de: "Westbank-Tempel", ar: "معابد البر الغربي" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Balloon Flight", ru: "Полет на шаре", de: "Ballonfahrt", ar: "رحلة المنطاد" },
      { en: "Safety Briefing", ru: "Инструктаж", de: "Sicherheitseinweisung", ar: "إرشادات السلامة" },
      { en: "Breakfast", ru: "Завтрак", de: "Frühstück", ar: "إفطار" }
    ]
  },
  {
    id: "62",
    slug: "luxor-over-night-trip",
    name: { en: "Luxor Overnight: East & West Bank Highlights", ru: "Ночь в Луксоре: восточный и западный берег", de: "Luxor Übernachtung: Ost- und Westbank-Highlights", ar: "رحلة الأقصر الليلية: معالم البر الشرقي والغربي" },
    description: { en: "Uncover the secrets of ancient Egypt with our Luxor Overnight Tour, designed for those who want to experience both the East and West Banks of Luxor in depth.", ru: "Откройте тайны древнего Египта с ночным туром по Луксору.", de: "Entdecken Sie die Geheimnisse des alten Ägypten mit unserer Luxor-Übernachtungstour.", ar: "اكتشف أسرار مصر القديمة مع جولة الأقصر الليلية" },
    duration: { en: "2 days / 1 night", ru: "2 дня / 1 ночь", de: "2 Tage / 1 Nacht", ar: "يومان / ليلة واحدة" },
    price: 140,
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/2222.png",
    rating: 4.9,
    highlights: [
      { en: "Karnak Temple", ru: "Храм Карнак", de: "Karnak-Tempel", ar: "معبد الكرنك" },
      { en: "Valley of the Kings", ru: "Долина Царей", de: "Tal der Könige", ar: "وادي الملوك" },
      { en: "Luxor Temple", ru: "Луксорский храм", de: "Luxor-Tempel", ar: "معبد الأقصر" },
      { en: "Hotel Stay Included", ru: "Проживание", de: "Hotelübernachtung", ar: "إقامة في فندق" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "1 Night Hotel", ru: "1 ночь в отеле", de: "1 Nacht Hotel", ar: "ليلة واحدة في فندق" },
      { en: "All Entrance Fees", ru: "Все входные билеты", de: "Alle Eintrittsgebühren", ar: "جميع رسوم الدخول" },
      { en: "Guide & Meals", ru: "Гид и питание", de: "Führer & Mahlzeiten", ar: "مرشد ووجبات" }
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
    id: "66",
    slug: "speed-boot-2-pax",
    name: { en: "Private Red Sea Speed Boat Trip", ru: "Частная поездка на скоростном катере", de: "Private Rotmeer-Speedbootfahrt", ar: "رحلة زورق سريع خاص في البحر الأحمر" },
    description: { en: "Looking for an exclusive and thrilling experience on the Red Sea? Hop aboard our 200HP RIB speed boat for a private adventure with up to 2 guests.", ru: "Ищете эксклюзивный опыт на Красном море? Садитесь на скоростной катер RIB 200HP.", de: "Suchen Sie ein exklusives Erlebnis auf dem Roten Meer? Steigen Sie an Bord unseres 200-PS-RIB-Schnellboots.", ar: "هل تبحث عن تجربة حصرية ومثيرة في البحر الأحمر؟ استقل زورقنا السريع RIB بقوة 200 حصان" },
    duration: { en: "3 hours", ru: "3 часа", de: "3 Stunden", ar: "3 ساعات" },
    price: 200,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-16-at-03.50.36_8cd1dd8d.jpg",
    rating: 4.9,
    highlights: [
      { en: "Speed Boat Ride", ru: "Поездка на катере", de: "Schnellbootfahrt", ar: "ركوب الزورق السريع" },
      { en: "Private Experience", ru: "Частный опыт", de: "Privates Erlebnis", ar: "تجربة خاصة" },
      { en: "Snorkeling Stop", ru: "Остановка для снорклинга", de: "Schnorchelstopp", ar: "توقف للغوص" },
      { en: "Island Visit", ru: "Посещение острова", de: "Inselbesuch", ar: "زيارة جزيرة" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер", de: "Transfer", ar: "التوصيل" },
      { en: "Speed Boat", ru: "Катер", de: "Schnellboot", ar: "زورق سريع" },
      { en: "Snorkel Gear", ru: "Снаряжение", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Refreshments", ru: "Напитки", de: "Getränke", ar: "مرطبات" }
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