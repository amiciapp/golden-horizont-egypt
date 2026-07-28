import type { Language } from "./translations";

export interface Trip {
  id: string;
  slug: string;
  name: Record<string, string>;
  description: Record<string, string>;
  duration: Record<string, string>;
  price: number;
  currency: string;
  priceLabel?: Record<string, string>;
  category: string;
  popular: boolean;
  image: string;
  rating: number;
  highlights: Record<string, string>[];
  included: Record<string, string>[];
  gallery?: string[];
}

export const trips: Trip[] = [
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
      en: "The Nefertari Luxury Sea Trip is a magnificent Red Sea excursion combining a Pharaonic-themed boat experience with underwater exploration. Step aboard a stunning floating replica of Queen Nefertari’s tomb and descend into the air-conditioned submarine deck with panoramic windows to marvel at vibrant coral reefs and marine life without getting wet. The trip also includes stops at prime snorkeling spots, a unique Pharaonic photo session dressed as ancient Egyptian royalty, and a delicious set-menu dinner (seafood or chicken) served on board while you relax on the sun deck.",
      ru: "Роскошная морская прогулка в фараоновском стиле с панорамной подводной лодкой, снорклингом на красивых рифах, фотосессией и ужином на борту.",
      de: "Luxuriöse Seereise im pharaonischen Stil mit U-Boot-Besichtigung, Schnorcheln an Korallenriffen, Fotoshooting und Abendessen an Bord.",
      ar: "رحلة بحرية فاخرة بأسلوب فرعوني مع مشاهدة بانورامية من غواصة، وغوص في الشعاب المرجانية، وجلسة تصوير، وعشاء على متن القارب."
    },
    duration: { en: "6 hours", ru: "6 часов", de: "6 Stunden", ar: "6 ساعات" },
    price: 90,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/diving-adventure-hurghada/diving-1.webp",
    rating: 4.8,
    highlights: [
      { en: "Air-Conditioned Submarine Deck", ru: "Подводная лодка с кондиционером", de: "Klimatisiertes U-Boot-Deck", ar: "سطح غواصة مكيف" },
      { en: "Snorkeling at Prime Coral Reefs", ru: "Снорклинг на лучших рифах", de: "Schnorcheln an besten Riffen", ar: "الغوص في أفضل الشعاب المرجانية" },
      { en: "Pharaonic Photo Session", ru: "Фараоновская фотосессия", de: "Pharaonisches Fotoshooting", ar: "جلسة تصوير فرعونية" },
      { en: "Delicious Dinner on Board", ru: "Вкусный ужин на борту", de: "Köstliches Abendessen an Bord", ar: "عشاء لذيذ على متن القارب" }
    ],
    included: [
      { en: "Hotel Transfer", ru: "Трансфер из отеля", de: "Hoteltransfer", ar: "التوصيل من الفندق" },
      { en: "Submarine Viewing", ru: "Просмотр из подводной лодки", de: "U-Boot-Besichtigung", ar: "مشاهدة الغواصة" },
      { en: "Snorkeling Gear", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Dinner & Drinks", ru: "Ужин и напитки", de: "Abendessen & Getränke", ar: "العشاء والمشروبات" }
    ],
    gallery: [
      "/photos/diving-adventure-hurghada/diving-1.webp"
    ]
  },
  {
    id: "4",
    slug: "cairo-emc-marsa-alam",
    name: {
      en: "Cairo Golden Bus Tour – Grand Egyptian Museum",
      ru: "Золотой автобусный тур в Каир – Большой Египетский музей",
      de: "Kairo Golden Bus Tour – Grand Egyptian Museum",
      ar: "جولة الحافلة الذهبية القاهرة – المتحف المصري الكبير"
    },
    description: {
      en: "Cairo Golden Bus Tour – Grand Egyptian Museum (Large Group Bus, up to 50 seats). Embark on an unforgettable journey to Cairo with a modern luxury coach (air-conditioned, comfortable seats, WiFi). This large-group tour offers the best value way to discover the wonders of the Egyptian capital. Visit the iconic Pyramids of Giza and the Great Sphinx, explore the vibrant Khan el Khalili bazaar, and discover the Grand Egyptian Museum (GEM) – home to the treasures of Tutankhamun and thousands of ancient artifacts. Enjoy a delicious lunch at a renowned restaurant featuring authentic Egyptian cuisine. Hotel pickup: 01:00 AM | Return: by 11:00 PM. Return to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Золотой автобусный тур в Каир – Большой Египетский музей (большая групповая автобус, до 50 мест). Отправьтесь в незабываемое путешествие в Каир на современном роскошном автобусе (кондиционер, удобные кресла, WiFi). Посетите пирамиды Гизы и Великого Сфинкса, исследуйте базар Хан эль-Халили, и откройте для себя Большой Египетский музей – дом сокровищ Тутанхамона. Обед в известном ресторане. Выезд из отеля: 01:00 | Возврат: до 23:00.",
      de: "Kairo Golden Bus Tour – Grand Egyptian Museum (Großgruppenbus, bis zu 50 Sitze). Begeben Sie sich mit einem modernen Luxusbus (klimatisiert, bequeme Sitze, WLAN) auf eine unvergessliche Reise nach Kairo. Besuchen Sie die Pyramiden von Gizeh und die Große Sphinx, erkunden Sie den Khan el-Khalili Basar und das Grand Egyptian Museum (GEM) – Heimat der Schätze des Tutanchamun. Genießen Sie ein köstliches Mittagessen. Abfahrt: 01:00 Uhr | Rückkehr: bis 23:00 Uhr.",
      ar: "جولة الحافلة الذهبية القاهرة – المتحف المصري الكبير (حافلة مجموعة كبيرة، حتى 50 مقعداً). انطلق في رحلة لا تُنسى إلى القاهرة على متن حافلة فاخرة حديثة (مكيفة، مقاعد مريحة، واي فاي). زُر أهرامات الجيزة وأبو الهول العظيم، واستكشف سوق خان الخليلي، واكتشف المتحف المصري الكبير (GEM) – موطن كنوز توت عنخ آمون. غداء في مطعم شهير. الانطلاق من الفندق: 01:00 صباحاً | العودة: بحلول 11:00 مساءً."
    },
    duration: { en: "1 day (01:00 AM – 11:00 PM)", ru: "1 день (01:00–23:00)", de: "1 Tag (01:00–23:00 Uhr)", ar: "يوم واحد (01:00 صباحاً – 11:00 مساءً)" },
    price: 80,
    currency: "EUR",
    category: "Cairo",
    popular: true,
    image: "/photos/cairo-golden-bus/166744703.webp",
    rating: 4.8,
    highlights: [
      { en: "Large Group Bus (Up to 50 Seats)", ru: "Большой автобус (до 50 мест)", de: "Großgruppenbus (bis 50 Sitze)", ar: "حافلة كبيرة للمجموعات (حتى 50 مقعداً)" },
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Great Sphinx", ru: "Великий Сфинкс", de: "Die Große Sphinx", ar: "أبو الهول العظيم" },
      { en: "Grand Egyptian Museum (GEM)", ru: "Большой Египетский музей (GEM)", de: "Grand Egyptian Museum (GEM)", ar: "المتحف المصري الكبير (GEM)" },
      { en: "Khan el Khalili Bazaar", ru: "Базар Хан эль-Халили", de: "Khan el-Khalili Basar", ar: "سوق خان الخليلي" }
    ],
    included: [
      { en: "Luxury Bus Transfer", ru: "Трансфер на люксовом автобусе", de: "Luxusbus-Transfer", ar: "نقل بالحافلة الفاخرة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch at Restaurant", ru: "Обед в ресторане", de: "Mittagessen im Restaurant", ar: "غداء في مطعم" }
    ],
    gallery: [
      "/photos/cairo-golden-bus/689691961.webp"
    ]
  },
  {
    id: "6",
    slug: "cairo-bus-gem",
    name: {
      en: "Cairo Classic Bus Tour – National Museum of Egyptian Civilization",
      ru: "Классический автобусный тур в Каир – Национальный музей египетской цивилизации",
      de: "Kairo Classic Bus Tour – Nationalmuseum der ägyptischen Zivilisation",
      ar: "جولة الحافلة الكلاسيكية القاهرة – المتحف القومي للحضارة المصرية"
    },
    description: {
      en: "Cairo Classic Bus Tour – National Museum of Egyptian Civilization (Large Group Bus, up to 50 seats). Travel comfortably aboard a premium modern coach to the heart of ancient Egypt. This tour takes you to the majestic Pyramids of Giza, the mysterious Great Sphinx, the lively Khan el Khalili market, and the impressive National Museum of Egyptian Civilization, which showcases the complete history of Egyptian civilization, including royal mummies. Savor a traditional Egyptian lunch at a famous local restaurant. Perfect for large groups seeking excellent value and comfort. Hotel pickup: 01:00 AM | Return: by 11:00 PM. Return to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Классический автобусный тур в Каир – Национальный музей египетской цивилизации (большая групповая автобус, до 50 мест). Отправьтесь в комфортабельное путешествие на современном автобусе к сердцу Древнего Египта. Посетите пирамиды Гизы, Сфинкса, базар Хан эль-Халили и Национальный музей египетской цивилизации с королевскими мумиями. Традиционный обед в местном ресторане. Выезд из отеля: 01:00 | Возврат: до 23:00.",
      de: "Kairo Classic Bus Tour – Nationalmuseum der ägyptischen Zivilisation (Großgruppenbus, bis zu 50 Sitze). Reisen Sie bequem in einem modernen Luxusbus zu den Wundern von Kairo. Besuchen Sie die Pyramiden von Gizeh, die Große Sphinx, den Basar Khan el-Khalili und das Nationalmuseum der ägyptischen Zivilisation mit den königlichen Mumien. Genießen Sie ein traditionelles ägyptisches Mittagessen. Abfahrt: 01:00 Uhr | Rückkehr: bis 23:00 Uhr.",
      ar: "جولة الحافلة الكلاسيكية القاهرة – المتحف القومي للحضارة المصرية (حافلة مجموعة كبيرة، حتى 50 مقعداً). سافر براحة على متن حافلة حديثة فاخرة إلى قلب مصر القديمة. زُر أهرامات الجيزة، وأبو الهول العظيم، وسوق خان الخليلي، والمتحف القومي للحضارة المصرية الذي يعرض المومياوات الملكية. استمتع بغداء مصري تقليدي في مطعم شهير. الانطلاق من الفندق: 01:00 صباحاً | العودة: بحلول 11:00 مساءً."
    },
    duration: { en: "1 day (01:00 AM – 11:00 PM)", ru: "1 день (01:00–23:00)", de: "1 Tag (01:00–23:00 Uhr)", ar: "يوم واحد (01:00 صباحاً – 11:00 مساءً)" },
    price: 60,
    currency: "EUR",
    category: "Cairo",
    popular: false,
    image: "/photos/cairo-golden-bus/166744703.webp",
    rating: 4.7,
    highlights: [
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Great Sphinx", ru: "Великий Сфинкс", de: "Die Große Sphinx", ar: "أبو الهول العظيم" },
      { en: "National Museum of Egyptian Civilization (NMEC)", ru: "Национальный музей египетской цивилизации", de: "Nationalmuseum der ägyptischen Zivilisation", ar: "المتحف القومي للحضارة المصرية" },
      { en: "Khan el Khalili Bazaar", ru: "Базар Хан эль-Халили", de: "Khan el-Khalili Basar", ar: "سوق خان الخليلي" },
      { en: "Modern Coach with AC & WiFi (up to 50 seats)", ru: "Современный автобус с кондиционером и WiFi (до 50 мест)", de: "Moderner Bus mit Klima & WLAN (bis zu 50 Sitze)", ar: "حافلة حديثة مكيفة مع واي فاي (حتى 50 مقعداً)" }
    ],
    included: [
      { en: "Luxury Bus Transfer", ru: "Трансфер на автобусе", de: "Bus-Transfer", ar: "نقل بالحافلة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Professional Guide", ru: "Профессиональный гид", de: "Professioneller Führer", ar: "مرشد محترف" },
      { en: "Lunch at Local Restaurant", ru: "Обед в ресторане", de: "Mittagessen im Restaurant", ar: "غداء في مطعم محلي" }
    ],
    gallery: [
      "/photos/cairo-golden-bus/689691961.webp"
    ]
  },
  {
    id: "7",
    slug: "cairo-van-gem",
    name: {
      en: "Cairo Premium Minibus Tour – Grand Egyptian Museum",
      ru: "Премиум минивэн тур в Каир – Большой Египетский музей",
      de: "Kairo Premium Minibus Tour – Grand Egyptian Museum",
      ar: "جولة الحافلة الصغيرة الفاخرة القاهرة – المتحف المصري الكبير"
    },
    description: {
      en: "Enjoy a more intimate and comfortable experience with a premium minibus (maximum 8 passengers). You'll have extra space, flexibility, and more time at each site. The tour includes the Pyramids of Giza, Great Sphinx, a walk through Khan el Khalili bazaar, and an in-depth visit to the Grand Egyptian Museum (GEM). Delight in a special lunch at a top-rated restaurant with authentic Egyptian dishes. Hotel pickup: 01:00 AM | Return: by 11:00 PM. Return to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Насладитесь более интимным и комфортным опытом с премиальным минивэном (максимум 8 пассажиров). Больше пространства, гибкости и времени на каждой остановке. Тур включает пирамиды Гизы, Великого Сфинкса, прогулку по базару Хан эль-Халили и подробное посещение Большого Египетского музея (GEM). Специальный обед в ресторане с аутентичными египетскими блюдами. Выезд из отеля: 01:00 | Возврат: к 23:00.",
      de: "Genießen Sie ein intimères und komfortableres Erlebnis mit einem Premium-Minibus (maximal 8 Fahrgäste). Mehr Platz, Flexibilität und mehr Zeit an jedem Ort. Die Tour umfasst die Pyramiden von Gizeh, die Große Sphinx, einen Spaziergang durch den Khan el-Khalili Basar und einen ausführlichen Besuch des Grand Egyptian Museum (GEM). Spezielles Mittagessen in einem erstklassigen Restaurant mit authentischen ägyptischen Gerichten. Abfahrt: 01:00 Uhr | Rückkehr: bis 23:00 Uhr.",
      ar: "استمتع بتجربة أكثر حميمية وراحة مع حافلة صغيرة فاخرة (حد أقصى 8 ركاب). مساحة إضافية ومرونة ووقت أكثر في كل م site. تشمل الجولة أهرامات الجيزة، وأبو الهول العظيم، ومشي في سوق خان الخليلي، وزيارة معمقة للمتحف المصري الكبير (GEM). غداء خاص في مطعم ممتاز مع أطباق مصرية أصيلة. الانطلاق من الفندق: 01:00 صباحاً | العودة: بحلول 11:00 مساءً."
    },
    duration: { en: "1 day (01:00 AM – 11:00 PM)", ru: "1 день (01:00–23:00)", de: "1 Tag (01:00–23:00 Uhr)", ar: "يوم واحد (01:00 ص – 11:00 م)" },
    price: 85,
    currency: "EUR",
    priceLabel: {
      en: "/ person",
      ru: "/ человек",
      de: "/ Person",
      ar: "/ شخص"
    },
    category: "Cairo",
    popular: true,
    image: "/photos/cairo-premium-minibus/1260566.jpeg.webp",
    rating: 4.8,
    highlights: [
      { en: "Premium Minibus (Up to 8 Seats)", ru: "Премиальный минивэн (до 8 мест)", de: "Premium-Minibus (bis 8 Sitze)", ar: "حافلة صغيرة فاخرة (حتى 8 مقاعد)" },
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Great Sphinx", ru: "Великий Сфинкс", de: "Die Große Sphinx", ar: "أبو الهول العظيم" },
      { en: "Grand Egyptian Museum (GEM)", ru: "Большой Египетский музей (GEM)", de: "Grand Egyptian Museum (GEM)", ar: "المتحف المصري الكبير (GEM)" },
      { en: "Khan el Khalili Bazaar", ru: "Базар Хан эль-Халили", de: "Khan el-Khalili Basar", ar: "سوق خان الخليلي" }
    ],
    included: [
      { en: "Premium Minibus Transfer", ru: "Трансфер на премиальном минивэне", de: "Premium-Minibus-Transfer", ar: "نقل بالحافلة الصغيرة الفاخرة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch at Restaurant", ru: "Обед в ресторане", de: "Mittagessen im Restaurant", ar: "غداء في مطعم" }
    ],
    gallery: [
      "/photos/cairo-premium-minibus/videoframe_779.webp"
    ]
  },
  {
    id: "13",
    slug: "elite-vip-yacht",
    name: {
      en: "Elite VIP Yacht: Luxury Red Sea Experience",
      ru: "Элитная VIP яхта: роскошный отдых на Красном море",
      de: "Elite VIP-Yacht: Luxuriöses Rotmeer-Erlebnis",
      ar: "اليخت الفاخر VIP: تجربة البحر الأحمر الفاخرة"
    },
    description: {
      en: "Step aboard our private Elite VIP Yacht for an exclusive and sophisticated Red Sea journey. This premium experience is designed for those who seek privacy, comfort, and unforgettable moments at sea.",
      ru: "Поднимитесь на борт нашей частной элитной VIP яхты для эксклюзивного и изысканного путешествия по Красному морю. Этот премиум- опыт создан для тех, кто ищет приватность, комфорт и незабываемые моменты в море.",
      de: "Steigen Sie an Bord unserer privaten Elite VIP-Yacht für eine exklusive und anspruchsvolle Reise auf dem Roten Meeres. Dieses Premium-Erlebnis wurde für alle entwickelt, die Privatsphäre, Komfort und unvergessliche Momente auf dem Meer suchen.",
      ar: "استقل يختنا الخاص الفاخر VIP لرحلة حصرية وراقيه على البحر الأحمر. هذه التجربة المميزة مصممة لمن يبحث عن الخصوصية والراحة واللحظات التي لا تُنسى في البحر."
    },
    duration: { en: "4-6 hours", ru: "4-6 часов", de: "4-6 Stunden", ar: "4-6 ساعات" },
    price: 200,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/ELITE8-scaled.jpg",
    rating: 4.9,
    highlights: [
      { en: "Private cruise along the stunning coastline", ru: "Частный круиз вдоль живописного побережья", de: "Private Kreuzfahrt entlang der atemberaubenden Küste", ar: "رحلة خاصة على طول الساحل الخلاب" },
      { en: "Snorkeling at exclusive coral reef locations", ru: "Снорклинг на эксклюзивных коралловых рифах", de: "Schnorcheln an exklusiven Korallenriffstandorten", ar: "الغوص في مواقع الحطام الحصرية" },
      { en: "Spacious sun deck with premium loungers", ru: "Просторная солнечная палуба с премиум шезлонгами", de: "Großzügiges Sonnendeck mit Premium-Liegestühlen", ar: "deck مشمس واسع مع كراسي استرخاء فاخرة" },
      { en: "Gourmet lunch or dinner on board", ru: "Гурме обед или ужин на борту", de: "Gourmet-Mittagessen oder Abendessen an Bord", ar: "غداء أو عشاء فاخر على متن اليخت" },
      { en: "Open bar with premium drinks and cocktails", ru: "Отрытый бар с премиальными напитками и коктейлями", de: "Offene Bar mit Premiumgetränken und Cocktails", ar: "بار مفتوح مع مشروبات فاخرة وكوكتيلات" },
      { en: "Sunset views and romantic atmosphere", ru: "Виды на закат и романтическая атмосфера", de: "Sonnenuntergangsblick und romantische Atmosphäre", ar: "مناظر غروب الشمس والأجواء الرومانسية" }
    ],
    included: [
      { en: "Private hotel pickup and drop-off", ru: "Частный трансфер из отеля и обратно", de: "Privater Hotel-Transfer hin und zurück", ar: "نقل خاص من الفندق وإليه" },
      { en: "Exclusive use of the luxury yacht", ru: "Исключительное использование роскошной яхты", de: "Exklusive Nutzung der Luxusyacht", ar: "الاستخدام الحصري لليخت الفاخر" },
      { en: "Snorkeling equipment and professional guide", ru: "Снаряжение для снорклинга и профессиональный гид", de: "Schnorchelausrüstung und professioneller Guide", ar: "معدات الغوص ودليل محترف" },
      { en: "Gourmet meal + premium open bar", ru: "Гурме блюда + премиальный открытый бар", de: "Gourmet-Mahlzeit + Premium-Open-Bar", ar: "وجبة فاخرة + بار مفتوح ممتاز" },
      { en: "Dedicated crew and safety equipment", ru: "Персональный экипаж и средства безопасности", de: "Dedicated Besatzung und Sicherheitsausrüstung", ar: "طاقم مخصص ومعدات السلامة" }
    ],
    gallery: [
      "/photos/elite-vip-yacht/9.jpg"
    ]
  },
  {
    id: "15",
    slug: "super-safari",
    name: {
      en: "Super Safari – Full Desert Adventure",
      ru: "Супер Сафари – полное приключение в пустыне",
      de: "Super Safari – Vollständiges Wüstenabenteuer",
      ar: "السفاري الفائق – مغامرة صحراوية كاملة"
    },
    description: {
      en: "Get ready for the ultimate desert thrill with this action-packed Super Safari! This popular excursion combines excitement and authentic Bedouin culture in the Egyptian Eastern Desert. Dune bashing, quad bike adventure, camel ride, Bedouin village visit, oriental folk show with belly dancing and live music, delicious Bedouin dinner with barbecue, tea, shisha, and stargazing.",
      ru: "Приготовьтесь к идеальному адреналину в пустыне! Эта популярная экскурсия сочетает острые ощущения и подлинную бедуинскую культуру в Восточной пустыне Египта. Драйв по дюнам, квадроциклы, поездка на верблюде, посещение бедуинской деревни, восточный шоу с танцем живота и живой музыкой, восхитительный бедуинский ужин с барбекю, чай, кальян и звёздное небо.",
      de: "Bereiten Sie sich auf das ultimative Wüstenabenteuer mit dieser aktionsreichen Super Safari vor! Diese beliebte Ausflug kombiniert Nervenkitzel und authentische Beduinenkultur in der östlichen Wüste Ägyptens. Dünenbashing, Quad-Abenteuer, Kamelritt, Besuch eines Beduinen Dorfs, orientalisches Folkloreshow mit Bauchtanz und Live-Musik, köstliches Beduinen-Dinner mit Barbecue, Tee, Shisha und Sternenbestaunung.",
      ar: "استعد لأقصى إثارة في الصحراء مع هذه السفاري المليئة بالفعل! هذه الجولة المشهورة تجمع بين الإثارة والثقافة البدوية الأصيلة في الصحراء الشرقية المصرية. قيادة عبر الكثبان، مغامرة الدراجات الرباعية، ركوب الجمل، زيارة القرية البدوية، عرض فلكلوري شرقي مع رقص البطون وموسيقى حية، عشاء بدوي لذيذ مع مشاوي وشاي وكالياح ومراقبة النجوم."
    },
    duration: { en: "5 – 6 hours (afternoon / evening)", ru: "5 – 6 часов (вечер)", de: "5 – 6 Stunden (Nachmittag / Abend)", ar: "5 – 6 ساعات (بعد الظهر / مساءً)" },
    price: 50,
    priceLabel: {
      en: "/ person",
      ru: "/ чел.",
      de: "/ Person",
      ar: "/ شخص"
    },
    currency: "EUR",
    category: "Desert Safari",
    popular: true,
    image: "/photos/super-safari/12.jpg",
    rating: 4.8,
    highlights: [
      { en: "Dune Bashing & 4x4 Jeep Ride", ru: "Драйв по дюнам и джип 4x4", de: "Dünenbashing & 4x4 Jeep-Fahrt", ar: "قيادة عبر الكثبان وسطوة 4x4" },
      { en: "Camel Ride in the Desert", ru: "Поездка на верблюде в пустыне", de: "Kamelritt in der Wüste", ar: "ركوب الجمل في الصحراء" },
      { en: "Visit to Traditional Bedouin Village", ru: "Посещение традиционного бедуинского посёлка", de: "Besuch eines traditionellen Beduinen Dorfs", ar: "زيارة قرية بدوية تقليدية" },
      { en: "Oriental Folk Show & Belly Dancing", ru: "Восточный шоу и танец живота", de: "Orientalisches Folkloreshow & Bauchtanz", ar: "عرض فلكلوري شرقي ورقص البطون" },
      { en: "Bedouin Dinner with Barbecue", ru: "Бедуинский ужин с барбекю", de: "Beduinen-Dinner mit Barbecue", ar: "عشاء بدوي مع مشاوي" },
      { en: "Shisha & Stargazing", ru: "Кальян и звёздное небо", de: "Shisha & Sternenbestaunung", ar: "كالياح ومراقبة النجوم" }
    ],
    included: [
      { en: "Modern 4x4 transportation", ru: "Современный трансфер 4x4", de: "Moderne 4x4-Transport", ar: "نقل حديث 4x4" },
      { en: "Professional guide and drivers", ru: "Профессиональный гид и водители", de: "Professioneller Führer und Fahrer", ar: "مرشد وسائقون محترفون" },
      { en: "All activities (jeep safari, camel ride, show)", ru: "Все активности (джип-сафари, верблюд, шоу)", de: "Alle Aktivitäten (Jeep-Safari, Kamelritt, Show)", ar: "جميع الأنشطة (سفاري بالسيارة، ركوب الجمل، العرض)" },
      { en: "Full Bedouin dinner + soft drinks", ru: "Полноценный бедуинский ужин + напитки", de: "Vollständiges Beduinen-Dinner + Softdrinks", ar: "عشاء بدوي كامل + مشروبات خفيفة" },
      { en: "Hotel pickup and drop-off", ru: "Трансфер от отеля и обратно", de: "Hotelabholung und Rückfahrt", ar: "pickup من وإلى الفندق" }
    ],
    gallery: [
    ]
  },

  {
    id: "43",
    slug: "cairo-private-pyramids-museum",
    name: {
      en: "Cairo Private VIP Tour – National Museum of Egyptian Civilization",
      ru: "Частный VIP тур в Каир – Национальный музей египетской цивилизации",
      de: "Kairo Private VIP-Tour – Nationalmuseum der ägyptischen Zivilisation",
      ar: "جولة القاهرة الخاصة VIP – المتحف القومي للحضارة المصرية"
    },
    description: {
      en: "The most exclusive and luxurious option with a private car (dedicated driver + guide, max. 3 passengers). Visit the majestic Pyramids of Giza, Great Sphinx, explore Khan el Khalili at your own pace, and discover the National Museum of Egyptian Civilization. Savor a refined lunch at a top traditional restaurant. Perfect for couples or small families seeking complete privacy and maximum comfort. Hotel pickup: 01:00 AM | Return: by 11:00 PM. Price: approx. 300 euro per car (total for 1-3 persons). Return to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Самый эксклюзивный и роскошный вариант с частным автомобилем (выделенный водитель + гид, макс. 3 пассажира). Посетите величественные пирамиды Гизы, Великого Сфинкса, исследуйте базар Хан эль-Халили в своем темпе и откройте для себя Национальный музей египетской цивилизации. Насладитесь изысканным обедом в традиционном ресторане. Идеально для пар или небольших семей, ищущих полную конфиденциальность и максимальный комфорт. Выезд из отеля: 01:00 | Возврат: к 23:00. Цена: ок. 300 евро за автомобиль (всего для 1-3 человек).",
      de: "Die exklusivste und luxuriöste Option mit einem privaten Auto (zugewiesener Fahrer + Guide, max. 3 Personen). Besuchen Sie die majestätischen Pyramiden von Gizeh, die Große Sphinx, erkunden Sie Khan el Khalili in Ihrem eigenen Tempo und entdecken Sie das Nationalmuseum der ägyptischen Zivilisation. Genießen Sie ein raffiniertes Mittagessen in einem erstklassigen traditionellen Restaurant. Perfekt für Paare oder kleine Familien, die vollständige Privatsphäre und maximalen Komfort suchen. Abholung: 01:00 Uhr | Rückkehr: bis 23:00 Uhr. Preis: ca. 300 Euro pro Auto (gesamt für 1-3 Personen).",
      ar: "الخيار الأ exclusivist والأكثر فخامة مع سيارة خاصة (سائق مخصص + مرشد، الحد الأقصى 3 ركاب). قم بزيارة أهرامات الجيزة المهيبة، وأبو الهول العظيم، واستكشف سوق خان الخليلي بنفسك، واكتشف المتحف القومي للحضارة المصرية. استمتع بغداء راقي في مطعم تقليدي عالي المستوى. مثالي للأزواج أو العائلات الصغيرة الباحثة عن الخصوصية التامة والراحة القصيلة. الانطلاق من الفندق: 01:00 صباحاً | العودة: بحلول 11:00 مساءً. السعر: حوالي 300 يورو للسيارة (المجموع لـ 1-3 أشخاص)."
    },
    duration: { en: "1 day (01:00 AM – 11:00 PM)", ru: "1 день (01:00–23:00)", de: "1 Tag (01:00–23:00 Uhr)", ar: "يوم واحد (01:00 ص – 11:00 م)" },
    price: 300,
    currency: "EUR",
    priceLabel: {
      en: "/ car (1-3 persons)",
      ru: "/ автомобиль (1-3 человека)",
      de: "/ Auto (1-3 Personen)",
      ar: "/ سيارة (1-3 أشخاص)"
    },
    category: "Cairo",
    popular: true,
    image: "/photos/cairo-private-vip/166744703.webp",
    rating: 4.9,
    highlights: [
      { en: "Private Car (Up to 3 Persons)", ru: "Частный автомобиль (до 3 человек)", de: "Privates Auto (bis 3 Personen)", ar: "سيارة خاصة (حتى 3 أشخاص)" },
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Great Sphinx", ru: "Великий Сфинкс", de: "Die Große Sphinx", ar: "أبو الهول العظيم" },
      { en: "National Museum of Egyptian Civilization", ru: "Национальный музей египетской цивилизации", de: "Nationalmuseum der ägyptischen Zivilisation", ar: "المتحف القومي للحضارة المصرية" },
      { en: "Khan el Khalili Bazaar", ru: "Базар Хан эль-Халили", de: "Khan el-Khalili Basar", ar: "سوق خان الخليلي" }
    ],
    included: [
      { en: "Private Car Transfer", ru: "Трансфер на частном автомобиле", de: "Privater Auto-Transfer", ar: "نقل بالسيارة الخاصة" },
      { en: "Dedicated Driver + Guide", ru: "Выделенный водитель + гид", de: "Zugewiesener Fahrer + Guide", ar: "سائق مخصص + مرشد" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Lunch at Restaurant", ru: "Обед в ресторане", de: "Mittagessen im Restaurant", ar: "غداء في مطعم" }
    ],
    gallery: [
      "/photos/cairo-private-vip/689691961.webp"
    ]
  },
  {
    id: "47",
    slug: "luxor-hot-air-balloon-premium-minibus",
    name: {
      en: "Luxor Hot Air Balloon Premium Minibus Tour – 1 Day & 1 Night",
      ru: "Луксор: Полёт на воздушном шаре + минибус премиум — 1 день и 1 ночь",
      de: "Luxor Heißluftballon Premium Minibus Tour – 1 Tag & 1 Nacht",
      ar: "جولة بالون الهواء الساخن في الأقصر بالباص المميز — يوم وليلة"
    },
    description: {
      en: "Experience the magic of Luxor from above and explore its ancient wonders in complete comfort. This exclusive 1 Day & 1 Night tour combines the breathtaking sunrise Hot Air Balloon flight over the Valley of the Kings with a full guided exploration of Luxor's most iconic sites.",
      ru: "Испытайте волшебство Луксора с высоты и исследуйте его древние чудеса в полном комфорте. Этот эксклюзивный тур на 1 день и 1 ночь сочетает захватывающий рассветный полёт на воздушном шаре над Долиной Царей с полноценной экскурсией по самым знаковым местам Луксора.",
      de: "Erleben Sie den Zauber Luxors von oben und erkunden Sie seine antiken Wunder in vollem Komfort. Diese exklusive 1-Tages- & 1-Nacht-Tour verbindet den atemberaubenden Sonnenaufgangs-Heißluftballonflug über das Tal der Könige mit einer vollständigen geführten Erkundung der ikonischsten Stätten Luxors.",
      ar: "استمتع بسحر الأقصر من الأعلى واستكشف عجائبها القديمة بأقصى راحة. تجمع هذه الجولة الحصرية ليوم وليلة بين رحلة بالون الهواء الساخن المذهلة عند شروق الشمس فوق وادي الملوك واستكشاف كامل لأكثر معالم الأقصر شهرة."
    },
    duration: { en: "2 Days / 1 Night", ru: "2 дня / 1 ночь", de: "2 Tage / 1 Nacht", ar: "يومان / ليلة واحدة" },
    price: 150,
    priceLabel: {
      en: "/ person (minibus up to 8)",
      ru: "/ человек (минибус до 8 чел.)",
      de: "/ Person (Minibus bis 8 Pers.)",
      ar: "/ شخص (باص حتى 8 أشخاص)"
    },
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "/photos/luxor-hot-air-balloon-premium-minibus/339793097.webp",
    rating: 4.9,
    highlights: [
      { en: "Sunrise Hot Air Balloon Flight", ru: "Рассветный полёт на воздушном шаре", de: "Sonnenaufgangs-Heißluftballonflug", ar: "رحلة بالون الهواء الساخن عند شروق الشمس" },
      { en: "Valley of the Kings & Karnak Temple", ru: "Долина Царей и храм Карнак", de: "Tal der Könige & Karnak-Tempel", ar: "وادي الملوك ومعبد الكرنك" },
      { en: "Luxor Temple & Hatshepsut", ru: "Храм Луксора и Хатшепсут", de: "Luxor-Tempel & Hatschepsut", ar: "معبد الأقصر وحتشبسوت" },
      { en: "Professional Egyptologist Guide", ru: "Профессиональный гид-египтолог", de: "Professioneller Ägyptologe", ar: "مرشد مصري محترف" },
      { en: "Overnight 4-5* Hotel", ru: "Ночёвка в отеле 4-5*", de: "Übernachtung im 4-5* Hotel", ar: "إقامة في فندق 4-5 نجوم" }
    ],
    included: [
      { en: "Round-trip premium minibus transfer", ru: "Туда и обратно премиум минибус", de: " Hin und zurück Premium-Minibus", ar: "انتقال بالباص المميز ذهاباً وإياباً" },
      { en: "Sunrise Hot Air Balloon flight with breakfast & certificate", ru: "Рассветный полёт на шаре с завтраком и сертификатом", de: "Sonnenaufgangsballonflug mit Frühstück & Zertifikat", ar: "رحلة بالون الهواء الساخن مع فطور وشهادة" },
      { en: "Full guided tour of Luxor highlights with professional Egyptologist", ru: "Полная экскурсия по Луксору с профессиональным гидом", de: "Geführte Tour der Luxor-Highlights mit Ägyptologen", ar: "جولة إرشادية كاملة لمعالم الأقصر مع مرشد مصري محترف" },
      { en: "Lunch on Day 1 + hotel accommodation with breakfast", ru: "Обед первого дня + проживание в отеле с завтраком", de: "Mittagessen am Tag 1 + Hotelunterkunft mit Frühstück", ar: "غداء اليوم الأول + إقامة في الفندق مع فطور" },
      { en: "All entrance fees (main sites)", ru: "Все входные билеты", de: "Alle Eintrittskarten", ar: "جميع رسوم الدخول للمواقع الرئيسية" },
      { en: "Professional assistance", ru: "Профессиональная помощь", de: "Professionelle Hilfe", ar: "مساعدة مهنية" }
    ],
    gallery: [
    ]
  },
  {
    id: "50",
    slug: "luxor-private-vip",
    name: {
      en: "Luxor Private VIP Tour (Private Car, up to 3 persons)",
      ru: "Луксор: Частный VIP-тур (автомобиль до 3 чел.)",
      de: "Luxor Private VIP Tour (Privatwagen, bis 3 Pers.)",
      ar: "جولة VIP خاصة في الأقصر (سيارة خاصة حتى 3 أشخاص)"
    },
    description: {
      en: "Enjoy the ultimate luxury and personalized experience on this private VIP tour to Luxor with a dedicated car and guide (maximum 3 passengers). Discover at your own peace the highlights of ancient Thebes: Karnak Temple, Luxor Temple, Valley of the Kings, Temple of Hatshepsut, and the Colossi of Memnon. Savor a premium lunch at one of Luxor's best traditional restaurants. Perfect for couples or small families who want exclusivity and maximum comfort.",
      ru: "Наслаждайтесь роскошью и персональным вниманием в этом частном VIP-туре в Луксор с выделенным автомобилем и гидом (максимум 3 пассажира). Откройте для себя в своём темпе главные достопримечательности древних Фив: храм Карнак, храм Луксора, Долину Царей, храм Хатшепсут и Колоссы Мемнона. Насладитесь премиальным обедом в одном из лучших традиционных ресторанов Луксора.",
      de: "Genießen Sie den ultimativen Luxus und ein personalisiertes Erlebnis auf dieser privaten VIP-Tour nach Luxor mit einem eigenen Wagen und Führer (maximale 3 Passagiere). Entdecken Sie in Ihrem eigenen Tempo die Höhepunkte des antiken Theben: Karnak-Tempel, Luxor-Tempel, Tal der Könige, Hatschepsut-Tempel und die Kolosse des Memnon. Genießen Sie ein Premium-Mittagessen in einem der besten traditionellen Restaurants Luxors.",
      ar: "استمتع بالفخامة المطلقة والتجربة الشخصية في جولة VIP خاصة إلى الأقصر بسيارة ومرشد مخصصين (3 ركاب كحد أقصى). اكتشف بالקצב الخاص بك معالم طيبة القديمة: معبد الكرنك، معبد الأقصر، وادي الملوك، معبد حتشبسوت، وأعمدة ممنون. تذوق غداء فاخراً في أحد أفضل مطاعم الأقصر التقليدية."
    },
    duration: { en: "18 hours (01:00 AM – 11:00 PM)", ru: "18 часов (01:00 – 23:00)", de: "18 Stunden (01:00 – 23:00)", ar: "18 ساعة (01:00 – 23:00)" },
    price: 350,
    priceLabel: {
      en: "/ car (1-3 persons)",
      ru: "/ автомобиль (1-3 чел.)",
      de: "/ Wagen (1-3 Pers.)",
      ar: "/ سيارة (1-3 أشخاص)"
    },
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "/photos/luxor-private-vip/473125693.webp",
    rating: 4.9,
    highlights: [
      { en: "Private Car & Guide", ru: "Частный автомобиль и гид", de: "Privatwagen & Führer", ar: "سيارة ومرشد خاص" },
      { en: "Valley of the Kings", ru: "Долина Царей", de: "Tal der Könige", ar: "وادي الملوك" },
      { en: "Karnak & Luxor Temples", ru: "Храмы Карнак и Луксор", de: "Karnak- & Luxor-Tempel", ar: "معابد الكرنك والأقصر" },
      { en: "Premium Lunch", ru: "Премиальный обед", de: "Premium-Mittagessen", ar: "غداء فاخر" },
      { en: "Temple of Hatshepsut & Colossi of Memnon", ru: "Храм Хатшепсут и Колоссы Мемнона", de: "Hatschepsut-Tempel & Kolosse des Memnon", ar: "معبد حتشبسوت وأعمدة ممنون" }
    ],
    included: [
      { en: "Hotel pickup & return (01:00 AM – 11:00 PM)", ru: "Трансфер от отеля и обратно (01:00 – 23:00)", de: "Hotelaufholung & Rückfahrt (01:00 – 23:00)", ar: "pickup وإعادة من الفندق (01:00 – 23:00)" },
      { en: "Private car & professional driver", ru: "Частный автомобиль и профессиональный водитель", de: "Privatwagen & professioneller Fahrer", ar: "سيارة خاصة وسائق محترف" },
      { en: "Licensed Egyptologist guide", ru: "Лицензированный гид-египтолог", de: "Lizenzierter Ägyptologe", ar: "مرشد مصري مرخص" },
      { en: "Premium lunch at a traditional restaurant", ru: "Премиальный обед в традиционном ресторане", de: "Premium-Mittagessen in einem traditionellen Restaurant", ar: "غداء فاخر في مطعم تقليدي" },
      { en: "All entrance fees (main sites)", ru: "Все входные билеты", de: "Alle Eintrittskarten", ar: "جميع رسوم الدخول" },
      { en: "Bottled water during the tour", ru: "Бутилированная вода", de: "Flaschenwasser während der Tour", ar: "مياه معبأة أثناء الجولة" }
    ],
    gallery: [
    ]
  },
  {
    id: "51",
    slug: "abydos-dendera-premium-minibus",
    name: {
      en: "Abydos & Dendera Premium Minibus Tour (Minibus, up to 8 persons)",
      ru: "Абидос и Дендеры: премиум минибус (до 8 чел.)",
      de: "Abydos & Dendera Premium Minibus Tour (Minibus, bis 8 Pers.)",
      ar: "جولة أبيدوس ودندرة بالباص المميز (باص حتى 8 أشخاص)"
    },
    description: {
      en: "Enjoy a comfortable and affordable journey to some of Egypt's hidden gems. Traveling in a premium minibus (max. 8 passengers), you will explore the impressive Abydos Temple and the breathtaking Dendera Temple. Professional Egyptologist guide and a delicious traditional Egyptian lunch at a well-known restaurant are included.",
      ru: "Наслаждайтесь комфортной и доступной поездкой к жемчужинам Египта. Премиум минибус (макс. 8 пассажиров) доставит вас к впечатляющему храму Абидоса и великолепному храму Дендеры. Профессиональный гид-египтолог и вкусный традиционный обед включены.",
      de: "Genießen Sie eine komfortable und erschwingliche Reise zu einigen Ägyptens versteckten Schätzen. Mit einem Premium-Minibus (max. 8 Fahrgäste) erkunden Sie den beeindruckenden Abydos-Tempel und den atemberaubenden Dendera-Tempel. Professioneller Ägyptologe und köstliches ägyptisches Mittagessen sind inklusive.",
      ar: "استمتع برحلة مريحة وبأسعار معقولة إلى بعض جواهر مصر المخفية. بالباص المميز (8 ركاب كحد أقصى) ستستكشف معبد أبيدوس المبهر ومعبد دندرة الآسر. مرشد مصري محترف وغداء مصري تقليدي لذيذ م Included."
    },
    duration: { en: "12 hours (01:00 AM – 11:00 PM)", ru: "12 часов (01:00 – 23:00)", de: "12 Stunden (01:00 – 23:00)", ar: "12 ساعة (01:00 – 23:00)" },
    price: 80,
    currency: "EUR",
    category: "Luxor",
    popular: false,
    image: "/photos/abydos-dendera-premium-minibus/1.jpg",
    rating: 4.8,
    highlights: [
      { en: "Abydos Temple", ru: "Храм Абидоса", de: "Abydos-Tempel", ar: "معبد أبيدوس" },
      { en: "Dendera Temple", ru: "Храм Дендеры", de: "Dendera-Tempel", ar: "معبد دندرة" },
      { en: "Professional Egyptologist Guide", ru: "Профессиональный гид-египтолог", de: "Professioneller Ägyptologe", ar: "مرشد مصري محترف" },
      { en: "Traditional Egyptian Lunch", ru: "Традиционный египетский обед", de: "Traditionelles ägyptisches Mittagessen", ar: "غداء مصري تقليدي" }
    ],
    included: [
      { en: "Hotel pickup & return (01:00 AM – 11:00 PM)", ru: "Трансфер от отеля и обратно (01:00 – 23:00)", de: "Hotelaufholung & Rückfahrt (01:00 – 23:00)", ar: "pickup وإعادة من الفندق (01:00 – 23:00)" },
      { en: "Comfortable premium minibus transportation", ru: "Комфортный премиум минибус", de: "Komfortabler Premium-Minibus", ar: "نقل بالباص المميز المريح" },
      { en: "Professional Egyptologist guide", ru: "Профессиональный гид-египтолог", de: "Professioneller Ägyptologe", ar: "مرشد مصري محترف" },
      { en: "Traditional Egyptian lunch at a renowned restaurant", ru: "Традиционный обед в известном ресторане", de: "Traditionelles Mittagessen in einem bekannten Restaurant", ar: "غداء مصري تقليدي في مطعم مشهور" },
      { en: "All entrance fees", ru: "Все входные билеты", de: "Alle Eintrittskarten", ar: "جميع رسوم الدخول" },
      { en: "Water and full assistance", ru: "Вода и полная помощь", de: "Wasser und vollständige Hilfe", ar: "مياه ومساعدة كاملة" }
    ],
    gallery: [
    ]
  },
  {
    id: "74",
    slug: "abydos-dendera-private-car",
    name: {
      en: "Abydos & Dendera Private Car Tour (Private Car, up to 3 persons)",
      ru: "Абидос и Дендеры: частный автомобиль (до 3 чел.)",
      de: "Abydos & Dendera Privatwagen-Tour (Privatwagen, bis 3 Pers.)",
      ar: "جولة أبيدوس ودندرة بسيارة خاصة (سيارة خاصة حتى 3 أشخاص)"
    },
    description: {
      en: "Discover two of the most beautifully preserved and spiritually significant temples of Ancient Egypt on this exclusive excursion. With a private car and dedicated guide, you will visit the magnificent Abydos Temple (dedicated to Osiris, famous for its exquisite reliefs and the King List) and the stunning Dendera Temple (one of the best-preserved temples in Egypt, dedicated to Goddess Hathor, with the famous zodiac ceiling and hypostyle hall). Traditional Egyptian lunch at a renowned restaurant is included.",
      ru: "Откройте для себя два красивейших и духовно значимых храма Древнего Египта в этой эксклюзивной экскурсии. С частным автомобилем и персональным гидом вы посетите великолепный храм Абидоса (посвящён Осирису, славится изысканными рельефами и Царским списком) и потрясающий храм Дендеры (один из лучших по сохранности храмов Египта, посвящён богине Хатхор, с известным зодиакальным потолком и гипостильным залом). Традиционный египетский обед в ресторане включён.",
      de: "Entdecken Sie zwei der schönsten und spirituell bedeutsamsten Tempel des alten Ägyptens auf dieser exklusiven Reise. Mit einem privaten Wagen und einem Führer besuchen Sie den prächtigen Abydos-Tempel (gewidmet Osiris, berühmt für seine kunstvollen Reliefs und den Königsmann) und den atemberaubenden Dendera-Tempel (einer der besterhaltenen Tempel Ägyptens, gewidmet der Göttin Hathor, mit dem berühmten Tierkreis-Decke und Hypostyl-Saal). Traditionelles ägyptisches Mittagessen ist inklusive.",
      ar: "اكتشف اثنين من أجمل المعابد وأكثرها أهمية روحية في مصر القديمة في هذه الجولة الحصرية. بسيارة خاصة ومرشد مخصص، ستزور معبد أبيدوس الرائع (مكرس لأوزيريس، مشهور بنقوشه الرائعة وقائمة الملوك) ومعبد دندرة الآسر (أحد أفضل المعابد حفظاً في مصر، مكرس للإلهة حتحور، بالسقف الفلكي الشهير والقاعة الأعمدة). غداء مصري تقليدي في مطعم مشهور مشمول."
    },
    duration: { en: "12 hours (01:00 AM – 11:00 PM)", ru: "12 часов (01:00 – 23:00)", de: "12 Stunden (01:00 – 23:00)", ar: "12 ساعة (01:00 – 23:00)" },
    price: 300,
    priceLabel: {
      en: "/ car (1-3 persons)",
      ru: "/ автомобиль (1-3 чел.)",
      de: "/ Wagen (1-3 Pers.)",
      ar: "/ سيارة (1-3 أشخاص)"
    },
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "/photos/abydos-dendera-private-car/1c.jpg",
    rating: 4.9,
    highlights: [
      { en: "Abydos Temple (Osiris, King List)", ru: "Храм Абидоса (Осирис, Царский список)", de: "Abydos-Tempel (Osiris, Königsmann)", ar: "معبد أبيدوس (أوزيريس، قائمة الملوك)" },
      { en: "Dendera Temple (Hathor, Zodiac Ceiling)", ru: "Храм Дендеры (Хатхор, зодиакальный потолок)", de: "Dendera-Tempel (Hathor, Tierkreis-Decke)", ar: "معبد دندرة (حتحور، السقف الفلكي)" },
      { en: "Private Car & Dedicated Guide", ru: "Частный автомобиль и персональный гид", de: "Privatwagen & Führer", ar: "سيارة خاصة ومرشد مخصص" },
      { en: "Exquisite Reliefs & Hypostyle Hall", ru: "Изысканные рельефы и гипостильный зал", de: "Kunstvolle Reliefs & Hypostyl-Saal", ar: "نقوش رائعة والقاعة الأعمدة" },
      { en: "Traditional Egyptian Lunch", ru: "Традиционный египетский обед", de: "Traditionelles ägyptisches Mittagessen", ar: "غداء مصري تقليدي" }
    ],
    included: [
      { en: "Hotel pickup & return (01:00 AM – 11:00 PM)", ru: "Трансфер от отеля и обратно (01:00 – 23:00)", de: "Hotelaufholung & Rückfahrt (01:00 – 23:00)", ar: "pickup وإعادة من الفندق (01:00 – 23:00)" },
      { en: "Private car & professional driver", ru: "Частный автомобиль и профессиональный водитель", de: "Privatwagen & professioneller Fahrer", ar: "سيارة خاصة وسائق محترف" },
      { en: "Licensed Egyptologist guide", ru: "Лицензированный гид-египтолог", de: "Lizenzierter Ägyptologe", ar: "مرشد مصري مرخص" },
      { en: "Traditional Egyptian lunch at a renowned restaurant", ru: "Традиционный обед в известном ресторане", de: "Traditionelles Mittagessen in einem bekannten Restaurant", ar: "غداء مصري تقليدي في مطعم مشهور" },
      { en: "All entrance fees", ru: "Все входные билеты", de: "Alle Eintrittskarten", ar: "جميع رسوم الدخول" },
      { en: "Water and full assistance", ru: "Вода и полная помощь", de: "Wasser und vollständige Hilfe", ar: "مياه ومساعدة كاملة" }
    ],
    gallery: [
      "/photos/abydos-dendera-private-car/Luxor-Dendera-Abydos-Tour-1-webp.webp"
    ]
  },
  {
    id: "60",
    slug: "cairo-bus-trip",
    name: {
      en: "Cairo Classic Bus Tour – National Museum of Egyptian Civilization",
      ru: "Классический автобусный тур в Каир – Национальный музей египетской цивилизации",
      de: "Kairo Klassische Bustour – Nationalmuseum der ägyptischen Zivilisation",
      ar: "جولة حافلة القاهرة الكلاسيكية – المتحف القومي للحضارة المصرية"
    },
    description: {
      en: "Travel comfortably aboard a premium modern coach (Large Group Bus, up to 50 seats) to the heart of ancient Egypt. This tour takes you to the majestic Pyramids of Giza, the mysterious Great Sphinx, the lively Khan el Khalili market, and the impressive National Museum of Egyptian Civilization, which showcases the complete history of Egyptian civilization, including royal mummies. Savor a traditional Egyptian lunch at a famous local restaurant. Perfect for large groups seeking excellent value and comfort. Hotel pickup: 01:00 AM | Return: by 11:00 PM. Return to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Отправьтесь в незабываемое путешествие в Каир на современном комфортабельном автобусе (большой группы, до 50 мест). Посетите пирамиды Гизы, Сфинкса, базар Хан эль-Халили и Национальный музей египетской цивилизации с королевскими мумиями. Обед в традиционном ресторане. Выезд из отеля: 01:00 | Возврат: к 23:00.",
      de: "Begeben Sie sich auf eine unvergessliche Reise nach Kairo mit einem modernen Luxusbus (Großgruppenbus, bis 50 Sitze). Besuchen Sie die Pyramiden, die Sphinx, den Khan el-Khalili-Basar und das Nationalmuseum der ägyptischen Zivilisation (NMEC), einschließlich königlicher Mumien. Mittagessen in einem traditionellen Restaurant. Abfahrt: 01:00 Uhr | Rückkehr: bis 23:00 Uhr.",
      ar: "سافر براحة على متن حافلة حديثة (حافلة كبيرة للمجموعات، حتى 50 مقعداً) إلى قلب مصر القديمة. تأخذك هذه الجولة إلى أهرامات الجيزة، وأبو الهول العظيم، وسوق خان الخليلي، والمتحف القومي للحضارة المصرية المثير للإعجاب بما في ذلك المومياوات الملكية. الانطلاق من الفندق: 01:00 صباحاً | العودة: بحلول 11:00 مساءً."
    },
    duration: { en: "1 day (01:00 AM – 11:00 PM)", ru: "1 день (01:00–23:00)", de: "1 Tag (01:00–23:00 Uhr)", ar: "يوم واحد (01:00 ص – 11:00 م)" },
    price: 60,
    currency: "EUR",
    category: "Cairo",
    popular: true,
    image: "/photos/cairo-classic-bus/unnamed (1).webp",
    rating: 4.8,
    highlights: [
      { en: "Large Group Bus (Up to 50 Seats)", ru: "Большой автобус (до 50 мест)", de: "Großgruppenbus (bis 50 Sitze)", ar: "حافلة كبيرة للمجموعات (حتى 50 مقعداً)" },
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Great Sphinx", ru: "Великий Сфинкс", de: "Die Große Sphinx", ar: "أبو الهول العظيم" },
      { en: "National Museum of Egyptian Civilization", ru: "Национальный музей египетской цивилизации", de: "Nationalmuseum der ägyptischen Zivilisation", ar: "المتحف القومي للحضارة المصرية" },
      { en: "Khan el Khalili Bazaar", ru: "Базар Хан эль-Халили", de: "Khan el-Khalili Basar", ar: "سوق خان الخليلي" }
    ],
    included: [
      { en: "Premium Modern Coach Transfer", ru: "Трансфер на современном автобусе", de: "Premium-Luxusbus-Transfer", ar: "نقل بالحافلة الحديثة الفاخرة" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Professional Guide", ru: "Гид", de: "Führer", ar: "مرشد" },
      { en: "Lunch at Restaurant", ru: "Обед в ресторане", de: "Mittagessen im Restaurant", ar: "غداء في مطعم" }
    ],
    gallery: [
      "/photos/cairo-classic-bus/unnamed.webp"
    ]
  },
  {
    id: "63",
    slug: "luxor-golden-bus",
    name: {
      en: "Luxor Golden Bus Tour (Large Group Bus, up to 50 seats)",
      ru: "Луксор: Золотой автобус (большой автобус до 50 мест)",
      de: "Luxor Golden Bus Tour (Großgruppenbus, bis 50 Sitzplätze)",
      ar: "جولة الأقصر بالباص الذهبي (باص كبير حتى 50 مقعد)"
    },
    description: {
      en: "Embark on an epic day trip to the world's greatest open-air museum — Luxor. Travel comfortably in a modern luxury coach (air-conditioned, WiFi) from Hurghada. Explore the magnificent Karnak Temple, the impressive Luxor Temple, the legendary Valley of the Kings (including Tutankhamun's tomb option), the beautiful Temple of Hatshepsut, and the Colossi of Memnon. Enjoy a delicious lunch at a renowned restaurant with traditional Egyptian cuisine.",
      ru: "Отправьтесь в эпическое дневное путешествие к величайшему в мире музею под открытым небом — Луксор. Комфортно путешествуйте в современном лукс-автобусе (кондиционер, WiFi) из Хургады. Исследуйте великолепный храм Карнак, впечатляющий храм Луксора, легендарную Долину Царей (включая вариант с гробницей Тутанхамона), прекрасный храм Хатшепсут и Колоссы Мемнона. Наслаждайтесь вкусным обедом в ресторане с традиционной египетской кухней.",
      de: "Begeben Sie sich auf eine epische Tagesreise zum größten Freilichtmuseum der Welt — Luxor. Reisen Sie bequem in einem modernen Luxusbus (klimatisiert, WLAN) von Hurghada. Erkunden Sie den prächtigen Karnak-Tempel, den eindrucksvollen Luxor-Tempel, das legendäre Tal der Könige (inklusive Tutanchamun-Grab-Option), den wunderschönen Hatschepsut-Tempel und die Kolosse des Memnon. Genießen Sie ein köstliches Mittagessen in einem renommierten Restaurant mit traditioneller ägyptischer Küche.",
      ar: "انطلق في رحلة يومية ملحمية إلى أعظم متحف في الهواء الطلق في العالم — الأقصر. سافر براحة في حافلة فاخرة حديثة (مكيفة، واي فاي) من الغردقة. استكشف معبد الكرنك الرائع، معبد الأقصر المبهر، وادي الملوك الأسطوري (بما في ذلك خيار مقبرة توت عنخ آمون)، معبد حتشبسوت الجميل، وأعمدة ممنون. استمتع بغداء لذيذ في مطعم مشهور بمطبخه المصري التقليدي."
    },
    duration: { en: "12 hours (01:00 AM – 11:00 PM)", ru: "12 часов (01:00 – 23:00)", de: "12 Stunden (01:00 – 23:00)", ar: "12 ساعة (01:00 – 23:00)" },
    price: 75,
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "/photos/luxor-golden-bus/129871954.webp",
    rating: 4.8,
    highlights: [
      { en: "Modern Luxury Coach (AC, WiFi)", ru: "Современный лукс-автобус (кондиционер, WiFi)", de: "Moderner Luxusbus (Klima, WLAN)", ar: "حافلة فاخرة حديثة (مكيفة، واي فاي)" },
      { en: "Valley of the Kings (Tutankhamun option)", ru: "Долина Царей (вариант с Тутанхамоном)", de: "Tal der Könige (Tutanchamun-Option)", ar: "وادي الملوك (خيار مقبرة توت عنخ آمون)" },
      { en: "Karnak & Luxor Temples", ru: "Храмы Карнак и Луксор", de: "Karnak- & Luxor-Tempel", ar: "معابد الكرنك والأقصر" },
      { en: "Temple of Hatshepsut & Colossi of Memnon", ru: "Храм Хатшепсут и Колоссы Мемнона", de: "Hatschepsut-Tempel & Kolosse des Memnon", ar: "معبد حتشبسوت وأعمدة ممنون" },
      { en: "Delicious Lunch at Renowned Restaurant", ru: "Вкусный обед в ресторане", de: "Köstliches Mittagessen in einem Restaurant", ar: "غداء لذيذ في مطعم مشهور" }
    ],
    included: [
      { en: "Hotel pickup & return (01:00 AM – 11:00 PM)", ru: "Трансфер от отеля и обратно (01:00 – 23:00)", de: "Hotelaufholung & Rückfahrt (01:00 – 23:00)", ar: "pickup وإعادة من الفندق (01:00 – 23:00)" },
      { en: "Modern luxury coach (air-conditioned, WiFi)", ru: "Современный лукс-автобус (кондиционер, WiFi)", de: "Moderner Luxusbus (klimatisiert, WLAN)", ar: "حافلة فاخرة حديثة (مكيفة، واي فاي)" },
      { en: "Professional guide", ru: "Профессиональный гид", de: "Professioneller Führer", ar: "مرشد محترف" },
      { en: "Delicious lunch at a renowned restaurant", ru: "Вкусный обед в ресторане", de: "Köstliches Mittagessen in einem Restaurant", ar: "غداء لذيذ في مطعم مشهور" },
      { en: "All entrance fees", ru: "Все входные билеты", de: "Alle Eintrittskarten", ar: "جميع رسوم الدخول" },
      { en: "Water and full assistance", ru: "Вода и полная помощь", de: "Wasser und vollständige Hilfe", ar: "مياه ومساعدة كاملة" }
    ],
    gallery: [
    ]
  },
  {
    id: "64",
    slug: "luxor-premium-minibus",
    name: {
      en: "Luxor Premium Minibus Tour (Minibus, up to 8 seats)",
      ru: "Луксор: Премиум минибус тур (минибус до 8 мест)",
      de: "Luxor Premium Minibus Tour (Minibus, bis 8 Plätze)",
      ar: "جولة الأقصر بالباص المميز (باص حتى 8 مقاعد)"
    },
    description: {
      en: "Experience Luxor in greater comfort and with more personal attention on this premium minibus tour (maximum 8 passengers). Visit the colossal Karnak Temple, Luxor Temple, the famous Valley of the Kings, Hatshepsut Temple, and the Colossi of Memnon. A dedicated guide provides detailed explanations, and you will enjoy a special lunch at a high-quality restaurant serving authentic Egyptian dishes. Ideal for small groups seeking extra comfort and flexibility.",
      ru: "Испытайте Луксор в большем комфорте и с персональным вниманием в этом премиум минибус туре (максимум 8 пассажиров). Посетите колоссальный храм Карнак, храм Луксора, знаменитую Долину Царей, храм Хатшепсут и Колоссы Мемнона. Персональный гид подробно расскажет обо всем, а вы насладитесь особым обедом в ресторане высокого класса с аутентичными египетскими блюдами.",
      de: "Erleben Sie Luxor mit mehr Komfort und persönlicher Aufmerksamkeit auf dieser Premium-Minibus-Tour (maximal 8 Fahrgäste). Besuchen Sie den gewaltigen Karnak-Tempel, den Luxor-Tempel, das berühmte Tal der Könige, den Hatschepsut-Tempel und die Kolosse des Memnon. Ein ausgewiesener Führer bietet detaillierte Erklärungen genießen Sie ein besonderes Mittagessen in einem hochwertigen Restaurant mit authentischen ägyptischen Gerichten.",
      ar: "استمتع بالأقصر بأعلى راحة واهتمام شخصي في جولة الباص المميز (8 ركاب كحد أقصى). زُر معبد الكرنك الضخم، معبد الأقصر، وادي الملوك الشهير، معبد حتشبسوت، وأعمدة ممنون. مرشد مخصص يقدم شروحات مفصلة، وستستمتع بغداء خاص في مطعم راقي يقدم أطباقاً مصرية أصيلة."
    },
    duration: { en: "12 hours (01:00 AM – 11:00 PM)", ru: "12 часов (01:00 – 23:00)", de: "12 Stunden (01:00 – 23:00)", ar: "12 ساعة (01:00 – 23:00)" },
    price: 85,
    currency: "EUR",
    category: "Luxor",
    popular: true,
    image: "/photos/luxor-premium-minibus/129873760.webp",
    rating: 4.8,
    highlights: [
      { en: "Karnak & Luxor Temples", ru: "Храмы Карнак и Луксор", de: "Karnak- & Luxor-Tempel", ar: "معابد الكرنك والأقصر" },
      { en: "Valley of the Kings", ru: "Долина Царей", de: "Tal der Könige", ar: "وادي الملوك" },
      { en: "Hatshepsut Temple & Colossi of Memnon", ru: "Храм Хатшепсут и Колоссы Мемнона", de: "Hatschepsut-Tempel & Kolosse des Memnon", ar: "معبد حتشبسوت وأعمدة ممنون" },
      { en: "Premium Lunch at High-Quality Restaurant", ru: "Премиальный обед в ресторане высокого класса", de: "Premium-Mittagessen in einem hochwertigen Restaurant", ar: "غداء فاخر في مطعم راقي" },
      { en: "Professional Egyptologist Guide", ru: "Профессиональный гид-египтолог", de: "Professioneller Ägyptologe", ar: "مرشد مصري محترف" }
    ],
    included: [
      { en: "Hotel pickup & return (01:00 AM – 11:00 PM)", ru: "Трансфер от отеля и обратно (01:00 – 23:00)", de: "Hotelaufholung & Rückfahrt (01:00 – 23:00)", ar: "pickup وإعادة من الفندق (01:00 – 23:00)" },
      { en: "Premium minibus transportation (up to 8 seats)", ru: "Премиум минибус (до 8 мест)", de: "Premium-Minibus (bis 8 Plätze)", ar: "نقل بالباص المميز (حتى 8 مقاعد)" },
      { en: "Professional Egyptologist guide", ru: "Профессиональный гид-египтолог", de: "Professioneller Ägyptologe", ar: "مرشد مصري محترف" },
      { en: "Special lunch at a high-quality restaurant", ru: "Особый обед в ресторане высокого класса", de: "Besonderes Mittagessen in einem hochwertigen Restaurant", ar: "غداء خاص في مطعم راقي" },
      { en: "All entrance fees", ru: "Все входные билеты", de: "Alle Eintrittskarten", ar: "جميع رسوم الدخول" },
      { en: "Water and full assistance", ru: "Вода и полная помощь", de: "Wasser und vollständige Hilfe", ar: "مياه ومساعدة كاملة" }
    ],
    gallery: [
    ]
  },
  {
    id: "65",
    slug: "dolphin-house-snorkeling",
    name: {
      en: "Dolphin House Snorkeling Tour from Hurghada",
      ru: "Тур на Дельфиний дом снорклинг из Хургады",
      de: "Dolphin House Schnorcheltour ab Hurghada",
      ar: "جولة غوص دار الدلافين من الغردقة"
    },
    description: {
      en: "The ultimate Red Sea adventure! Sail to the famous Dolphin House, one of the best places in Hurghada to meet wild dolphins in their natural environment.\n\nWhat you'll enjoy:\n• High chance to swim and play with friendly wild dolphins\n• Two excellent snorkeling stops on beautiful coral reefs\n• Fun boat ride with music and great atmosphere\n• Relaxing time on the boat\n\nThis is one of the most exciting and joyful tours in Hurghada — perfect for families, couples, and everyone who dreams of swimming with dolphins!\n\nReturn to your hotel filled with unforgettable memories, amazing dolphin photos, and stories that will stay with you forever.",
      ru: "Абсолютное приключение в Красном море! Отправьтесь к знаменитому Дельфиньему дому — одному из лучших мест в Хургаде для встречи с дикими дельфинами в их естественной среде.\n\nЧто вас ждёт:\n• Высокий шанс поплавать и поиграть с дружелюбными дикими дельфинами\n• Отличные остановки для снорклинга на красивых коралловых рифах\n• Веселая поездка на лодке с музыкой и отличной атмосферой\n• Расслабляющее время на лодке\n\nЭто одно из самых захватывающих и радостных путешествий в Хургаде — идеально подходит для семей, пар и всех, кто мечтает поплавать с дельфинами!\n\nВернитесь в отель с незабываемыми воспоминаниями, потрясающими фотографиями дельфинов и историями, которые останутся с вами навсегда.",
      de: "Das ultimative Rote Meer-Abenteuer! Segeln Sie zum berühmten Dolphin House, einem der besten Orte in Hurghada, um wilde Delfine in ihrer natürlichen Umgebung zu treffen.\n\nWas Sie erwartet:\n• Hohe Chance, mit freundlichen wilden Delfinen zu schwimmen und zu spielen\n• Zwei ausgezeichnete Schnorchelstopps an wunderschönen Korallenriffen\n• Spaß bei der Bootsfahrt mit Musik und toller Atmosphäre\n• Entspannte Zeit auf dem Boot\n\nDies ist eine der spannendsten und freudvollsten Touren in Hurghada — perfekt für Familien, Paare und alle, die davon träumen, mit Delfinen zu schwimmen!\n\nKehren Sie mit unvergesslichen Erinnerungen, tollen Delfinfotos und Geschichten, die Sie nie vergessen werden, in Ihr Hotel zurück.",
      ar: "المغامرة النهائية في البحر الأحمر! انطلق إلى دار الدلافين الشهير، أحد أفضل الأماكن في الغردقة للقاء الدلافين البرية في بيئتها الطبيعية.\n\nما سيستمتع به:\n• فرصة كبيرة للسباح واللعب مع الدلافين البرية الودية\n• توقفان ممتازان للغوص في الشعاب المرجانية الجميلة\n• رحلة قارب ممتعة مع موسيقى وأجواء رائعة\n• وقت ممتع على متن القارب\n\nهذه واحدة من أكثر الرحلات إثارة ومتعة في الغردقة — مثالية للعائلات والأزواج وكل من يحلم بالسباح مع الدلافين!\n\n عُد إلى فندقك مليئاً بالذكريات التي لا تُنسى، وصور الدلافين المذهلة، والقصص التي ستبقى معك إلى الأبد."
    },
    duration: { en: "6–7 hours", ru: "6–7 часов", de: "6–7 Stunden", ar: "6–7 ساعات" },
    price: 25,
    currency: "EUR",
    category: "Entertainment",
    popular: true,
    image: "/photos/dolphin-house-snorkeling/dolphin-house-1.webp",
    rating: 4.8,
    highlights: [
      { en: "Swim with Wild Dolphins", ru: "Плавание с дикими дельфинами", de: "Mit wilden Delfinen schwimmen", ar: "السباحة مع الدلافين البرية" },
      { en: "Two Snorkeling Stops on Coral Reefs", ru: "Две остановки для снорклинга на коралловых рифах", de: "Zwei Schnorchelstopps an Korallenriffen", ar: "توقفان للغوص على الشعاب المرجانية" },
      { en: "Fun Boat Ride with Music", ru: "Веселая поездка на лодке с музыкой", de: "Spaßige Bootsfahrt mit Musik", ar: "رحلة قارب ممتعة مع موسيقى" },
      { en: "Relaxing Time on the Boat", ru: "Расслабляющее время на лодке", de: "Entspannte Zeit auf dem Boot", ar: "وقت ممتع على متن القارب" }
    ],
    included: [
      { en: "Hotel Pickup & Drop-off", ru: "Трансфер из отеля и обратно", de: "Hotel-Abholung & Rücktransfer", ar: "التوصيل من الفندق والعودة" },
      { en: "Modern Boat Trip", ru: "Рыбалка на современной лодке", de: "Moderne Bootsfahrt", ar: "رحلة قارب حديثة" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Lunch + Soft Drinks", ru: "Обед + безалкогольные напитки", de: "Mittagessen + Erfrischungsgetränke", ar: "غداء + مشروبات خفيفة" },
      { en: "Professional Guide", ru: "Профессиональный гид", de: "Professioneller Guide", ar: "مرشد محترف" }
    ],
    gallery: [
      "/photos/dolphin-house-snorkeling/dolphin-house-12.webp"
    ]
  },
  {
    id: "69",
    slug: "one-way-cairo-private-trip",
    name: {
      en: "Cairo Private Car Tour – Grand Egyptian Museum",
      ru: "Частный автомобильный тур в Каир – Большой Египетский музей",
      de: "Kairo Private Auto-Tour – Grand Egyptian Museum",
      ar: "جولة القاهرة بالسيارة الخاصة – المتحف المصري الكبير"
    },
    description: {
      en: "Cairo Private Car Tour – Grand Egyptian Museum (Private Car, up to 3 persons). The ultimate personalized luxury experience with a private car (sedan or small van, max. 3 passengers) and dedicated driver-guide. Enjoy maximum flexibility and extra time at the Pyramids of Giza, Great Sphinx, Khan el Khalili bazaar, and a detailed visit to the Grand Egyptian Museum (GEM). Enjoy a premium lunch at one of Cairo's finest traditional restaurants. Full VIP service from start to finish. Hotel pickup: 01:00 AM | Return: by 11:00 PM. Price: approx. 350 euro per car (total for 1-3 persons). Return to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Частный автомобильный тур в Каир – Большой Египетский музей (частный автомобиль, до 3 человек). Абсолютно персонализированный роскошный опыт с частным автомобилем (седан или небольшой минивэн, макс. 3 пассажира) и выделенным водителем-гидом. Насладитесь максимальной гибкостью и дополнительным временем на пирамидах Гизы, Великом Сфинксе, базаре Хан эль-Халили и подробным посещением Большого Египетского музея (GEM). Премиальный обед в одном из лучших традиционных ресторанов Каира. Полный VIP сервис от начала до конца. Выезд из отеля: 01:00 | Возврат: к 23:00. Цена: ок. 350 евро за автомобиль (всего для 1-3 человек).",
      de: "Kairo Private Auto-Tour – Grand Egyptian Museum (Privates Auto, bis 3 Personen). Das ultimative personalisierte Luxuserlebnis mit einem privaten Auto (Limousine oder kleiner Van, max. 3 Personen) und einem zugewiesenen Fahrer-Guide. genießen Sie maximale Flexibilität und zusätzliche Zeit an den Pyramiden von Gizeh, der Großen Sphinx, dem Khan el-Khalili Basar und einen detaillierten Besuch des Grand Egyptian Museum (GEM). Premium-Mittagessen in einem der besten traditionellen Restaurants Kairos. VIP-Service von Anfang bis Ende. Abholung: 01:00 Uhr | Rückkehr: bis 23:00 Uhr. Preis: ca. 350 Euro pro Auto (gesamt für 1-3 Personen).",
      ar: "جولة القاهرة بالسيارة الخاصة – المتحف المصري الكبير (سيارة خاصة، حتى 3 أشخاص). التجربة الفاخرة الشخصية المطلقة مع سيارة خاصة (سيدان أو حافلة صغيرة، الحد الأقصى 3 ركاب) ومرشد سائق مخصص. استمتع بأقصى قدر من المرونة والوقت الإضافي في أهرامات الجيزة، وأبو الهول العظيم، وسوق خان الخليلي، وزيارة معمقة للمتحف المصري الكبير (GEM). غداء فاخر في أحد أفضل المطاعم التقليدية في القاهرة. خدمة VIP كاملة من البداية إلى النهاية. الانطلاق من الفندق: 01:00 صباحاً | العودة: بحلول 11:00 مساءً. السعر: حوالي 350 يورو للسيارة (المجموع لـ 1-3 أشخاص)."
    },
    duration: { en: "1 day (01:00 AM – 11:00 PM)", ru: "1 день (01:00–23:00)", de: "1 Tag (01:00–23:00 Uhr)", ar: "يوم واحد (01:00 ص – 11:00 م)" },
    price: 350,
    currency: "EUR",
    priceLabel: {
      en: "/ car (1-3 persons)",
      ru: "/ автомобиль (1-3 человека)",
      de: "/ Auto (1-3 Personen)",
      ar: "/ سيارة (1-3 أشخاص)"
    },
    category: "Cairo",
    popular: true,
    image: "/photos/diving-adventure-hurghada/diving-1.webp",
    rating: 4.9,
    highlights: [
      { en: "Private Car (Up to 3 Persons)", ru: "Частный автомобиль (до 3 человек)", de: "Privates Auto (bis 3 Personen)", ar: "سيارة خاصة (حتى 3 أشخاص)" },
      { en: "Pyramids of Giza", ru: "Пирамиды Гизы", de: "Pyramiden von Gizeh", ar: "أهرامات الجيزة" },
      { en: "The Great Sphinx", ru: "Великий Сфинкс", de: "Die Große Sphinx", ar: "أبو الهول العظيم" },
      { en: "Grand Egyptian Museum (GEM)", ru: "Большой Египетский музей (GEM)", de: "Grand Egyptian Museum (GEM)", ar: "المتحف المصري الكبير (GEM)" },
      { en: "Khan el Khalili Bazaar", ru: "Базар Хан эль-Халили", de: "Khan el-Khalili Basar", ar: "سوق خان الخليلي" }
    ],
    included: [
      { en: "Private Car Transfer", ru: "Трансфер на частном автомобиле", de: "Privater Auto-Transfer", ar: "نقل بالسيارة الخاصة" },
      { en: "Dedicated Driver-Guide", ru: "Выделенный водитель-гид", de: "Zugewiesener Fahrer-Guide", ar: "مرشد سائق مخصص" },
      { en: "Entrance Fees", ru: "Входные билеты", de: "Eintrittsgebühren", ar: "رسوم الدخول" },
      { en: "Premium Lunch at Restaurant", ru: "Премиальный обед в ресторане", de: "Premium-Mittagessen im Restaurant", ar: "غداء فاخر في مطعم" }
    ],
    gallery: [
    ]
  },
  {
    id: "93",
    slug: "abu-simbel-premium-minibus",
    name: {
      en: "Abu Simbel Premium Minibus Tour – 3 Days / 2 Nights",
      ru: "Премиум минивэн тур к Абу-Симбелу – 3 дня / 2 ночи",
      de: "Abu Simbel Premium Minibus Tour – 3 Tage / 2 Nächte",
      ar: "جولة أبو سمبل بالحافلة الصغيرة الفاخرة – 3 أيام / 2 ليالي"
    },
    description: {
      en: "Abu Simbel Premium Minibus Tour – 3 Days / 2 Nights (Minibus, up to 8 persons). Enjoy an unforgettable journey to one of Egypt's most spectacular monuments. This 3 Days & 2 Nights tour takes you to the majestic Abu Simbel Temples (Ramses II and Nefertari). Traveling in a premium minibus (max. 8 passengers), you will also visit key sites in Aswan such as the High Dam, Philae Temple, and enjoy a relaxing felucca ride on the Nile. Traditional Egyptian meals and comfortable accommodation are included. Hotel pickup: 01:00 AM (Day 1) | Return to Hurghada: Evening of Day 3. Price: 250 EUR per person. Both tours include: Comfortable transportation (premium minibus / private car), Professional Egyptologist guide, 2 nights accommodation in Aswan with breakfast, Traditional Egyptian meals (lunches/dinners as per program), All entrance fees to main sites, Full assistance throughout the trip. Return to your hotel filled with unforgettable memories, stunning photos of the colossal temples, and stories that will stay with you forever.",
      ru: "Премиум минивэн тур к Абу-Симбелу – 3 дня / 2 ночи (минивэн, до 8 человек). Насладитесь незабываемым путешествием к одному из самых впечатляющих памятников Египта. Этот тур на 3 дня и 2 ночи带你 к величественным храмам Абу-Симбела (Рамзес II и Нефертари). Путешествуя в премиальном минивэне (макс. 8 пассажиров), вы также посетите ключевые объекты в Асуане, такие как Высотная плотина, храм Филе, и насладитесь расслабляющей прогулкой на фелюке по Нилу. Традиционные египетские блюда и комфортное проживание включены. Выезд из отеля: 01:00 (День 1) | Возврат в Хургаду: вечер Дня 3. Цена: 250 евро за человека.",
      de: "Abu Simbel Premium Minibus Tour – 3 Tage / 2 Nächte (Minibus, bis 8 Personen). Genießen Sie eine unvergessliche Reise zu einem der spektakulärsten Monumente Ägyptens. Diese 3-Tage / 2-Nächte Tour führt Sie zu den majestätischen Tempeln von Abu Simbel (Ramses II. und Nefertari). Mit einem Premium-Minibus (max. 8 Fahrgäste) besuchen Sie auch wichtige Orte in Assuan wie den Hochdamm, den Tempel von Philae und genießen Sie eine entspannte Felucca-Fahrt auf dem Nil. Traditionelle ägyptische Mahlzeiten und komfortable Unterkunft sind inklusive. Abholung: 01:00 Uhr (Tag 1) | Rückkehr nach Hurghada: Abend des 3. Tages. Preis: 250 EUR pro Person.",
      ar: "جولة أبو سمبل بالحافلة الصغيرة الفاخرة – 3 أيام / 2 ليالي (حافلة صغيرة، حتى 8 أشخاص). استمتع برحلة لا تُنسى إلى أحد أروع المعالم في مصر. تأخذك هذه الجولة لمدة 3 أيام و2 ليالي إلى معابد أبو سمبل المهيبة (رمسيس الثاني ونفرتاري). السفر في حافلة صغيرة فاخرة (حد أقصى 8 ركاب)، ستزور أيضاً مواقع رئيسية في أسوان مثل السد العالي ومعبد فيله، واستمتع ب رحلة مريحة على الفلكة على النيل. الوجبات المصرية التقليدية والإقامة المريحة مشمولة. الانطلاق من الفندق: 01:00 صباحاً (اليوم 1) | العودة إلى الغردقة: مساء اليوم 3. السعر: 250 يورو للشخص."
    },
    duration: { en: "3 Days / 2 Nights", ru: "3 дня / 2 ночи", de: "3 Tage / 2 Nächte", ar: "3 أيام / 2 ليالي" },
    price: 250,
    currency: "EUR",
    priceLabel: {
      en: "/ person",
      ru: "/ человека",
      de: "/ Person",
      ar: "/ شخص"
    },
    category: "Aswan",
    popular: true,
    image: "/photos/abu-simbel-premium-minibus/00.jpg",
    rating: 4.9,
    highlights: [
      { en: "Abu Simbel Temples (Ramses II & Nefertari)", ru: "Храмы Абу-Симбела (Рамзес II и Нефертари)", de: "Tempel von Abu Simbel (Ramses II. & Nefertari)", ar: "معابد أبو سمبل (رمسيس الثاني ونفرتاري)" },
      { en: "Premium Minibus (Up to 8 Persons)", ru: "Премиальный минивэн (до 8 человек)", de: "Premium-Minibus (bis 8 Personen)", ar: "حافلة صغيرة فاخرة (حتى 8 أشخاص)" },
      { en: "High Dam & Philae Temple", ru: "Высотная плотина и храм Филе", de: "Hochdamm & Tempel von Philae", ar: "السد العالي ومعبد فيله" },
      { en: "Felucca Ride on the Nile", ru: "Прогулка на фелюке по Нилу", de: "Felucca-Fahrt auf dem Nil", ar: "رحلة بالفلكة على النيل" },
      { en: "2 Nights Accommodation in Aswan", ru: "2 ночи в Асуане", de: "2 Nächte Unterkunft in Assuan", ar: "ليلتان في أسوان" }
    ],
    included: [
      { en: "Premium Minibus Transfer", ru: "Трансфер на премиальном минивэне", de: "Premium-Minibus-Transfer", ar: "نقل بالحافلة الصغيرة الفاخرة" },
      { en: "Professional Egyptologist Guide", ru: "Профессиональный гид-египтолог", de: "Professioneller Ägyptologe-Führer", ar: "مرشد مصري محترف" },
      { en: "2 Nights Accommodation with Breakfast", ru: "2 ночи с завтраком", de: "2 Nächte mit Frühstück", ar: "ليلتان مع إفطار" },
      { en: "Traditional Egyptian Meals", ru: "Традиционные египетские блюда", de: "Traditionelle ägyptische Mahlzeiten", ar: "وجبات مصرية تقليدية" },
      { en: "All Entrance Fees", ru: "Все входные билеты", de: "Alle Eintrittsgebühren", ar: "جميع رسوم الدخول" }
    ],
    gallery: [
      "/photos/abu-simbel-premium-minibus/caption (3).jpg"
    ]
  },
  {
    id: "71",
    slug: "abu-simbel-private-vip",
    name: {
      en: "Abu Simbel Private VIP Tour – 3 Days / 2 Nights",
      ru: "Частный VIP тур к Абу-Симбелу – 3 дня / 2 ночи",
      de: "Abu Simbel Private VIP-Tour – 3 Tage / 2 Nächte",
      ar: "جولة أبو سمبل الخاصة VIP – 3 أيام / 2 ليالي"
    },
    description: {
      en: "Abu Simbel Private VIP Tour – 3 Days / 2 Nights (Private Car, up to 3 persons). Experience the ultimate luxury and exclusivity on this private 3 Days & 2 Nights tour to Abu Simbel. With your own private car and dedicated guide (max. 3 persons), you will have a personalized program including the breathtaking Abu Simbel Temples at sunrise/sunset, Aswan highlights (Philae Temple, High Dam, Unfinished Obelisk), and a peaceful Nile felucca sail. Premium accommodation and traditional Egyptian meals at renowned restaurants are included. Hotel pickup: 01:00 AM (Day 1) | Return to Hurghada: Evening of Day 3. Price: 800 EUR per car (total for 1-3 persons). Both tours include: Comfortable transportation (premium minibus / private car), Professional Egyptologist guide, 2 nights accommodation in Aswan with breakfast, Traditional Egyptian meals (lunches/dinners as per program), All entrance fees to main sites, Full assistance throughout the trip. Return to your hotel filled with unforgettable memories, stunning photos of the colossal temples, and stories that will stay with you forever.",
      ru: "Частный VIP тур к Абу-Симбелу – 3 дня / 2 ночи (частный автомобиль, до 3 человек). Испытайте предельную роскошь и эксклюзивность в этом частном туре на 3 дня и 2 ночи к Абу-Симбелу. С собственным автомобилем и выделенным гидом (макс. 3 пассажира), у вас будет персональная программа, включающая захватывающие храмы Абу-Симбела на рассвете/закате, основные достопримечательности Асуана (храм Филе, Высотная плотина, Незаконченный обелиск) и спокойное плавание на фелюке по Нилу. Премиальное проживание и традиционные египетские блюда в известных ресторанах включены. Выезд из отеля: 01:00 (День 1) | Возврат в Хургаду: вечер Дня 3. Цена: 800 евро за автомобиль (всего для 1-3 человек).",
      de: "Abu Simbel Private VIP-Tour – 3 Tage / 2 Nächte (Privates Auto, bis 3 Personen). Erleben Sie ultimativen Luxus und Exklusivität bei dieser privaten 3-Tage / 2-Nächte Tour nach Abu Simbel. Mit Ihrem eigenen Privatauto und zugewiesenem Guide (max. 3 Personen) haben Sie ein personalisiertes Programm, darunter die atemberaubenden Tempel von Abu Simbel bei Sonnenaufgang/Untergang, Assuan-Highlights (Philae-Tempel, Hochdamm, Unvollendeter Obelisk) und eine friedliche Felucca-Fahrt auf dem Nil. Premium-Unterkunft und traditionelle ägyptische Mahlzeiten in renommierten Restaurants sind inklusive. Abholung: 01:00 Uhr (Tag 1) | Rückkehr nach Hurghada: Abend des 3. Tages. Preis: 800 EUR pro Auto (gesamt für 1-3 Personen).",
      ar: "جولة أبو سمبل الخاصة VIP – 3 أيام / 2 ليالي (سيارة خاصة، حتى 3 أشخاص). اختبر الفخامة المطلقة والحصرية في هذه الجولة الخاصة لمدة 3 أيام و2 ليالي إلى أبو سمبل. مع سيارتك الخاصة ومرشد مخصص (حد أقصى 3 أشخاص)، سيكون لديك برنامج شخصي يشمل معابد أبو سمبل المذهلة عند شروق/غروب الشمس، وhighlight أسوان (معبد فيله، السد العالي، المسلة غير المكتملة)، و رحلة هادئة على الفلكة على النيل. الإقامة الفاخرة والوجبات المصرية التقليدية في المطاعم مشمولة. الانطلاق من الفندق: 01:00 صباحاً (اليوم 1) | العودة إلى الغردقة: مساء اليوم 3. السعر: 800 يورو للسيارة (المجموع لـ 1-3 أشخاص)."
    },
    duration: { en: "3 Days / 2 Nights", ru: "3 дня / 2 ночи", de: "3 Tage / 2 Nächte", ar: "3 أيام / 2 ليالي" },
    price: 800,
    currency: "EUR",
    priceLabel: {
      en: "/ car (total for 1-3 persons)",
      ru: "/ автомобиль (всего для 1-3 человек)",
      de: "/ Auto (gesamt für 1-3 Personen)",
      ar: "/ سيارة (المجموع لـ 1-3 أشخاص)"
    },
    category: "Aswan",
    popular: true,
    image: "/photos/abu-simbel-private-vip/Abu-Simbel.webp",
    rating: 5.0,
    highlights: [
      { en: "Private Car (Up to 3 Persons)", ru: "Частный автомобиль (до 3 человек)", de: "Privates Auto (bis 3 Personen)", ar: "سيارة خاصة (حتى 3 أشخاص)" },
      { en: "Abu Simbel Temples at Sunrise/Sunset", ru: "Храмы Абу-Симбела на рассвете/закате", de: "Tempel von Abu Simbel bei Sonnenaufgang/Untergang", ar: "معابد أبوسمبل عند شروق/غروب الشمس" },
      { en: "Dedicated Egyptologist Guide", ru: "Выделенный гид-египтолог", de: "Zugewiesener Ägyptologe-Führer", ar: "مرشد مصري مخصص" },
      { en: "Aswan Highlights (Philae, High Dam, Obelisk)", ru: "Достопримечательности Асуана (Филе, Плотина, Обелиск)", de: "Assuan-Highlights (Philae, Hochdamm, Obelisk)", ar: "_highlight أسوان (فيله، السد العالي، المسلة)" },
      { en: "Premium Nile Felucca Sail", ru: "Премиальное плавание на фелюке по Нилу", de: "Premium Nil-Felucca-Fahrt", ar: "رحلة فاخرة بالفلكة على النيل" }
    ],
    included: [
      { en: "Private Car Transfer", ru: "Трансфер на частном автомобиле", de: "Privater Auto-Transfer", ar: "نقل بالسيارة الخاصة" },
      { en: "Dedicated Egyptologist Guide", ru: "Выделенный гид-египтолог", de: "Zugewiesener Ägyptologe-Führer", ar: "مرشد مصري مخصص" },
      { en: "2 Nights Premium Accommodation", ru: "2 ночи премиального проживания", de: "2 Nächte Premium-Unterkunft", ar: "ليلتان إقامة فاخرة" },
      { en: "Traditional Egyptian Meals", ru: "Традиционные египетские блюда", de: "Traditionelle ägyptische Mahlzeiten", ar: "وجبات مصرية تقليدية" },
      { en: "All Entrance Fees", ru: "Все входные билеты", de: "Alle Eintrittsgebühren", ar: "جميع رسوم الدخول" }
    ],
    gallery: [
      "/photos/abu-simbel-private-vip/Temple-Entrance-Between-Timeless-Titans.webp"
    ]
  },
  {
    id: "72",
    slug: "aswan-premium-minibus",
    name: {
      en: "Aswan Premium Minibus Tour",
      ru: "Премиум минивэн тур в Асуан",
      de: "Aswan Premium Minibus Tour",
      ar: "جولة أسوان بالحافلة الصغيرة الفاخرة"
    },
    description: {
      en: "Aswan Premium Minibus Tour (Minibus, up to 8 persons). Discover the beauty and ancient treasures of Aswan on this comfortable full-day excursion. Traveling in a premium minibus (maximum 8 passengers), you will visit the impressive High Dam, the beautiful Temple of Philae (dedicated to Goddess Isis), and the unfinished Obelisk. Enjoy a scenic view of the Nile and the Nubian culture. A delicious traditional Egyptian lunch at a renowned restaurant is included. Hotel pickup: 01:00 AM | Return: by 11:00 PM. Price: 250 EUR per person. Both tours include: Comfortable transportation (premium minibus / private car), Professional Egyptologist guide, Traditional Egyptian lunch at a renowned restaurant, All entrance fees, Water and full assistance. Return to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Премиум минивэн тур в Асуан (минивэн, до 8 человек). Откройте для себя красоту и древние сокровища Асуана в этом комфортном дневном путешествии. Путешествуя в премиальном минивэне (макс. 8 пассажиров), вы посетите впечатляющую Высотную плотину, прекрасный храм Филе (посвященный богине Исиде) и Незаконченный обелиск. Насладитесь живописным видом на Нил и нубийскую культуру. Вкусный традиционный египетский обед в известном ресторане включен. Выезд из отеля: 01:00 | Возврат: к 23:00. Цена: 250 евро за человека.",
      de: "Aswan Premium Minibus Tour (Minibus, bis 8 Personen). Entdecken Sie die Schönheit und die antiken Schätze Assuans auf this komfortvollen ganztägigen Exkursion. Mit einem Premium-Minibus (max. 8 Fahrgäste) besuchen Sie den eindrucksvollen Hochdamm, den schönen Tempel von Philae (gewidmet der Göttin Isis) und den unvollendeten Obelisken. Genießen Sie den malerischen Blick auf den Nil und die nubische Kultur. Ein köstliches traditionelles ägyptisches Mittagessen in einem renommierten Restaurant ist inklusive. Abholung: 01:00 Uhr | Rückkehr: bis 23:00 Uhr. Preis: 250 EUR pro Person.",
      ar: "جولة أسوان بالحافلة الصغيرة الفاخرة (حافلة صغيرة، حتى 8 أشخاص). اكتشف جمال كنوز أسوان القديمة في هذه الرحلة المريحة ليوم كامل. السفر في حافلة صغيرة فاخرة (حد أقصى 8 ركاب)، ستزور السد العالي المثير للإعجاب، ومعبد فيله الجميل (مكرمة للإلهة إيزيس)، والمسلة غير المكتملة. استمتع بالإطلالة الخلابة على النيل والثقافة النوبية. غداء مصري تقليدي لذيذ في مطعم شهير مشمول. الانطلاق من الفندق: 01:00 صباحاً | العودة: بحلول 11:00 مساءً. السعر: 250 يورو للشخص."
    },
    duration: { en: "1 day (01:00 AM – 11:00 PM)", ru: "1 день (01:00–23:00)", de: "1 Tag (01:00–23:00 Uhr)", ar: "يوم واحد (01:00 ص – 11:00 م)" },
    price: 250,
    currency: "EUR",
    priceLabel: {
      en: "/ person",
      ru: "/ человека",
      de: "/ Person",
      ar: "/ شخص"
    },
    category: "Aswan",
    popular: true,
    image: "/photos/aswan-premium-minibus/1.jpg",
    rating: 4.8,
    highlights: [
      { en: "Premium Minibus (Up to 8 Persons)", ru: "Премиальный минивэн (до 8 человек)", de: "Premium-Minibus (bis 8 Personen)", ar: "حافلة صغيرة فاخرة (حتى 8 أشخاص)" },
      { en: "High Dam of Aswan", ru: "Высотная плотина Асуана", de: "Hochdamm von Assuan", ar: "سد أسوان العالي" },
      { en: "Temple of Philae (Goddess Isis)", ru: "Храм Филе (богиня Исида)", de: "Tempel von Philae (Göttin Isis)", ar: "معبد فيله (الإلهة إيزيس)" },
      { en: "Unfinished Obelisk", ru: "Незаконченный обелиск", de: "Unvollendeter Obelisk", ar: "المسلة غير المكتملة" },
      { en: "Traditional Egyptian Lunch", ru: "Традиционный египетский обед", de: "Traditionelles ägyptisches Mittagessen", ar: "غداء مصري تقليدي" }
    ],
    included: [
      { en: "Premium Minibus Transfer", ru: "Трансфер на премиальном минивэне", de: "Premium-Minibus-Transfer", ar: "نقل بالحافلة الصغيرة الفاخرة" },
      { en: "Professional Egyptologist Guide", ru: "Профессиональный гид-египтолог", de: "Professioneller Ägyptologe-Führer", ar: "مرشد مصري محترف" },
      { en: "Traditional Egyptian Lunch", ru: "Традиционный египетский обед", de: "Traditionelles ägyptisches Mittagessen", ar: "غداء مصري تقليدي" },
      { en: "All Entrance Fees", ru: "Все входные билеты", de: "Alle Eintrittsgebühren", ar: "جميع رسوم الدخول" },
      { en: "Water & Full Assistance", ru: "Вода и полная помощь", de: "Wasser & volle Unterstützung", ar: "مياه ومساعدة كاملة" }
    ],
    gallery: [
    ]
  },
  {
    id: "73",
    slug: "aswan-private-vip",
    name: {
      en: "Aswan Private VIP Tour",
      ru: "Частный VIP тур в Асуан",
      de: "Aswan Private VIP-Tour",
      ar: "جولة أسوان الخاصة VIP"
    },
    description: {
      en: "Aswan Private VIP Tour (Private Car, up to 3 persons). Enjoy a luxurious and fully personalized experience in Aswan with a private car and dedicated guide (max. 3 persons). Explore the High Dam, the majestic Philae Temple, the Unfinished Obelisk, and enjoy a relaxing felucca sail on the Nile. You will also have time to discover local Nubian villages. Premium traditional Egyptian lunch at a high-quality restaurant is included. Hotel pickup: 01:00 AM | Return: by 11:00 PM. Price: 800 EUR per car (total for 1-3 persons). Both tours include: Comfortable transportation (premium minibus / private car), Professional Egyptologist guide, Traditional Egyptian lunch at a renowned restaurant, All entrance fees, Water and full assistance. Return to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Частный VIP тур в Асуан (частный автомобиль, до 3 человек). Насладитесь роскошным и полностью персонализированным опытом в Асуане с частным автомобилем и выделенным гидом (макс. 3 пассажира). Исследуйте Высотную плотину, величественный храм Филе, Незаконченный обелиск и насладитесь расслабляющей прогулкой на фелюке по Нилу. У вас также будет время открыть для себя местные нубийские деревни. Премиальный традиционный египетский обед в ресторане высокого качества включен. Выезд из отеля: 01:00 | Возврат: к 23:00. Цена: 800 евро за автомобиль (всего для 1-3 человек).",
      de: "Aswan Private VIP-Tour (Privates Auto, bis 3 Personen). Genießen Sie ein luxuriöses und vollständig personalisiertes Erlebnis in Assuan mit einem privaten Auto und zugewiesenem Guide (max. 3 Personen). Erkunden Sie den Hochdamm, den majestätischen Philae-Tempel, den unvollendeten Obelisken und genießen Sie eine entspannte Felucca-Fahrt auf dem Nil. Sie haben auch Zeit, lokale nubische Dörfer zu entdecken. Premium traditionelles ägyptisches Mittagessen in einem Restaurant hoher Qualität ist inklusive. Abholung: 01:00 Uhr | Rückkehr: bis 23:00 Uhr. Preis: 800 EUR pro Auto (gesamt für 1-3 Personen).",
      ar: "جولة أسوان الخاصة VIP (سيارة خاصة، حتى 3 أشخاص). استمتع بتجربة فاخرة ومخصصة بالكامل في أسوان مع سيارة خاصة ومرشد مخصص (حد أقصى 3 أشخاص). استكشف السد العالي، ومعبد فيله المهيب، والمسلة غير المكتملة، واستمتع برحلة هادئة على الفلكة على النيل. سيكون لديك أيضاً وقت لاكتشاف القرى النوبية المحلية. غداء مصري تقليدي فاخر في مطعم عالي الجودة مشمول. الانطلاق من الفندق: 01:00 صباحاً | العودة: بحلول 11:00 مساءً. السعر: 800 يورو للسيارة (المجموع لـ 1-3 أشخاص)."
    },
    duration: { en: "1 day (01:00 AM – 11:00 PM)", ru: "1 день (01:00–23:00)", de: "1 Tag (01:00–23:00 Uhr)", ar: "يوم واحد (01:00 ص – 11:00 م)" },
    price: 800,
    currency: "EUR",
    priceLabel: {
      en: "/ car (total for 1-3 persons)",
      ru: "/ автомобиль (всего для 1-3 человек)",
      de: "/ Auto (gesamt für 1-3 Personen)",
      ar: "/ سيارة (المجموع لـ 1-3 أشخاص)"
    },
    category: "Aswan",
    popular: true,
    image: "/photos/aswan-private-vip/ASWAN VIP (2).jpg",
    rating: 5.0,
    highlights: [
      { en: "Private Car (Up to 3 Persons)", ru: "Частный автомобиль (до 3 человек)", de: "Privates Auto (bis 3 Personen)", ar: "سيارة خاصة (حتى 3 أشخاص)" },
      { en: "High Dam of Aswan", ru: "Высотная плотина Асуана", de: "Hochdamm von Assuan", ar: "سد أسوان العالي" },
      { en: "Majestic Philae Temple", ru: "Величественный храм Филе", de: "Majestätischer Philae-Tempel", ar: "معبد فيله المهيب" },
      { en: "Unfinished Obelisk", ru: "Незаконченный обелиск", de: "Unvollendeter Obelisk", ar: "المسلة غير المكتملة" },
      { en: "Relaxing Felucca Sail on the Nile", ru: "Расслабляющая прогулка на фелюке по Нилу", de: "Entspannte Felucca-Fahrt auf dem Nil", ar: "رحلة مريحة بالفلكة على النيل" }
    ],
    included: [
      { en: "Private Car Transfer", ru: "Трансфер на частном автомобиле", de: "Privater Auto-Transfer", ar: "نقل بالسيارة الخاصة" },
      { en: "Dedicated Egyptologist Guide", ru: "Выделенный гид-египтолог", de: "Zugewiesener Ägyptologe-Führer", ar: "مرشد مصري مخصص" },
      { en: "Premium Traditional Egyptian Lunch", ru: "Премиальный традиционный египетский обед", de: "Premium traditionelles ägyptisches Mittagessen", ar: "غداء مصري تقليدي فاخر" },
      { en: "All Entrance Fees", ru: "Все входные билеты", de: "Alle Eintrittsgebühren", ar: "جميع رسوم الدخول" },
      { en: "Water & Full Assistance", ru: "Вода и полная помощь", de: "Wasser & volle Unterstützung", ar: "مياه ومساعدة كاملة" }
    ],
    gallery: [
      "/photos/aswan-private-vip/ASWAN VIP (8).jpg"
    ]
  },
  {
    id: "75",
    slug: "dolphin-house-marsa-alam",
    name: {
      en: "Dolphin House Marsa Alam – Snorkeling & Dolphin Watching Day Trip",
      ru: "Дом дельфинов Марса-Алам – снорклинг и наблюдение за дельфинами",
      de: "Delfinhaus Marsa Alam – Schnorcheln & Delfinbeobachtung",
      ar: "منزل الدلافين مرسى علم – رحلات سباحة ومراقبة الدلافين"
    },
    description: {
      en: "Enjoy an unforgettable day in the crystal-clear waters of Marsa Alam. This special excursion takes you to the famous Dolphin House – a protected area known for frequent encounters with wild dolphins in their natural habitat. Sail by comfortable boat, snorkel at multiple stunning coral reef sites, and have a great chance to swim alongside playful dolphins. The tour also includes time to relax on beautiful beaches and enjoy the rich marine life of the Red Sea.",
      ru: "Незабываемый день в кристально чистых водах Марса-Алама. Эта экскурсия доставит вас к знаменитому Дому дельфинов – защищённой зоне, где часто встречаются дикие дельфины в естественной среде обитания. Комфортная лодка, снорклинг на нескольких коралловых рифах и реальный шанс поплавать рядом с игривыми дельфинами. Также включён отдых на красивых пляжах и наслаждение богатой морской жизнью Красного моря.",
      de: "Genießen Sie einen unvergesslichen Tag in den kristallklaren Gewässern von Marsa Alam. Diese Ausfahrt bringt Sie zum berühmten Delfinhaus – einem Schutzgebiet mit häufigen Begegnungen mit wilden Delfinen in ihrem natürlichen Lebensraum. Segeln Sie mit einem komfortablem Boot, schnorcheln Sie an mehreren atemberaubenden Korallenriffen und haben Sie die Chance, neben verspielten Delfinen zu schwimmen. Die Tour umfasst auch Erholung an wunderschönen Stränden und den Genuss des reichen Meereslebens des Roten Meeres.",
      ar: "استمتع بيوم لا يُنسى في مياه مرسى العلم الصافية. تأخذك هذه الجولة إلى منزل الدلافين الشهير – منطقة محمية تعرف بلقاءات متكررة مع الدلافين البرية في موطنها الطبيعي. اركب قارب مريح، ومارس السباحة بالزنبرك عند شعاب مرجانية مذهلة، وفرصة رائعة للسباحة بجوار الدلافين المرحة. تتضمن الجولة أيضاً وقتاً للاسترخاء على الشواطئ الجميلة والاستمتاع بالحياة البحرية الغنية للبحر الأحمر."
    },
    duration: { en: "14 hours (05:00 – 20:00)", ru: "14 часов (05:00 – 20:00)", de: "14 Stunden (05:00 – 20:00)", ar: "14 ساعة (05:00 – 20:00)" },
    price: 90,
    priceLabel: {
      en: "/ person",
      ru: "/ чел.",
      de: "/ Person",
      ar: "/ شخص"
    },
    currency: "EUR",
    category: "Marsa Alam",
    popular: true,
    image: "/photos/dolphin-house-marsa-alam/3001b31c5a6c755aee647cd70456da4fc9e8aba96239574ef1f53282cde9de2e.webp",
    rating: 4.8,
    highlights: [
      { en: "Dolphin House – Wild Dolphin Encounters", ru: "Дом дельфинов – встречи с дикими дельфинами", de: "Delfinhaus – Begegnungen mit wilden Delfinen", ar: "منزل الدلافين – لقاءات مع الدلافين البرية" },
      { en: "Snorkeling at Multiple Coral Reef Sites", ru: "Снорклинг на нескольких коралловых рифах", de: "Schnorcheln an mehreren Korallenriffen", ar: "السباحة بالزنبرك في عدة مواقع شعاب مرجانية" },
      { en: "Comfortable Boat Trip", ru: "Комфортная поездка на лодке", de: "Komfortable Bootsfahrt", ar: "رحلة قارب مريحة" },
      { en: "Swimming with Playful Dolphins", ru: "Плавание с игривыми дельфинами", de: "Schwimmen mit verspielten Delfinen", ar: "السباحة مع الدلافين المرحة" },
      { en: "Beautiful Beaches & Rich Marine Life", ru: "Красивые пляжи и богатая морская жизнь", de: "Wunderschöne Strände & reiches Meeresleben", ar: "شواطئ جميلة وحياة بحرية غنية" }
    ],
    included: [
      { en: "Round-trip transportation from Hurghada", ru: "Трансфер из Хургады и обратно", de: "Hin- und Rückfahrt von Hurghada", ar: "نقل ذهاب وعودة من الغردقة" },
      { en: "Boat trip to Dolphin House", ru: "Лодочная поездка к Дому дельфинов", de: "Bootsfahrt zum Delfinhaus", ar: "رحلة قارب إلى منزل الدلافين" },
      { en: "Professional guide", ru: "Профессиональный гид", de: "Professioneller Führer", ar: "مرشد محترف" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Оборудование для снорклинга (маска, трубка, ласты)", de: "Schnorchel-Ausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات السباحة بالزنبرك (قناع، أنبوب، زعانف)" },
      { en: "Lunch on board + soft drinks", ru: "Обед на борту + безалкогольные напитки", de: "Mittagessen an Bord + Softdrinks", ar: "غداء على متن القارب + مشروبات خفيفة" },
      { en: "Multiple snorkeling stops", ru: "Несколько остановок для снорклинга", de: "Mehrere Schnorchelstops", ar: "عدة توقفات للسباحة بالزنبرك" }
    ],
    gallery: [
      "/photos/dolphin-house-marsa-alam/ee3570a2fc780e28fce762a97292234a071b27a31dc402b3343b3053674220ff.webp"
    ]
  },
  {
    id: "76",
    slug: "marsa-alam-abu-dabbab-beach",
    name: {
      en: "Marsa Alam Abu Dabbab Beach Day Trip (Minibus / Bus)",
      ru: "Марса-Алам, пляж Абу-Даббаб (миниавтобус / автобус)",
      de: "Marsa Alam Abu Dabbab Strand-Tagesausflug (Minibus / Bus)",
      ar: "رحلة شاطئ أبو دباب مرسى علم (ميكروباص / باص)"
    },
    description: {
      en: "Escape to one of the most beautiful beaches in the Red Sea on this relaxing day trip from Hurghada. Travel comfortably to Marsa Alam and spend a wonderful day at Abu Dabbab Beach – famous for its crystal-clear turquoise water, soft white sand, and excellent snorkeling with sea turtles, dugongs, and colorful coral reefs. You will have plenty of free time to swim, snorkel, relax on the beach, or enjoy water activities. A tasty lunch with drinks is included at a beach restaurant.",
      ru: "Отдых на одном из красивейших пляжей Красного моря в этой расслабляющей поездке из Хургады. Комфортно доберитесь до Марса-Алама и проведите замечательный день на пляже Абу-Даббаб – известном кристально чистой бирюзовой водой, мягким белым песком и отличным снорклингом с морскими черепахами, дугонгами и разноцветными кораллами. Много свободного времени для купания, снорклинга или отдыха на пляже. Вкусный обед с напитками в пляжном ресторане включён.",
      de: "Entfliehen Sie an einen der schönsten Strände des Roten Meeres bei diesem entspannten Tagesausflug aus Hurghada. Reisen Sie bequem nach Marsa Alam und verbringen Sie einen wundervollen Tag am Abu-Dabbab-Strand – berühmt für sein kristallklares türkisfarbenes Wasser, seinen weichen weißen Sand und hervorragendes Schnorcheln mit Meeresschildkröten, Dugongs und bunten Korallenriffen. Sie haben viel Freizeit zum Schwimmen, Schnorcheln, Entspannen oder für Wassersport. Ein leckeres Mittagessen mit Getränken ist im Strandrestaurant inklusive.",
      ar: "هروب إلى أحد أجمل الشواطئ في البحر الأحمر في هذه الرحلة المريحة من الغردقة. سافر براحة إلى مرسى علم واقض يوماً رائعاً على شاطئ أبو دباب – المشهور بمياهه الصافية الزرقاء الرمادية ورماله البيضاء الناعمة والسباحة الممتازة مع السلاحف البحرية والأطوم والشعاب المرجانية الملونة. لديك الكثير من الوقت الحر للسباحة أو الاسترخاء أو الاستمتاع بالأنشطة المائية. غداء لذيذ مع مشروبات مشمول في مطعم على الشاطئ."
    },
    duration: { en: "12 hours (06:00 – 19:00)", ru: "12 часов (06:00 – 19:00)", de: "12 Stunden (06:00 – 19:00)", ar: "12 ساعة (06:00 – 19:00)" },
    price: 75,
    priceLabel: {
      en: "/ person",
      ru: "/ чел.",
      de: "/ Person",
      ar: "/ شخص"
    },
    currency: "EUR",
    category: "Marsa Alam",
    popular: false,
    image: "/photos/marsa-alam-abu-dabbab-beach/Abu-Dabbab-Bay-Egypt-tour-magic.webp",
    rating: 4.7,
    highlights: [
      { en: "Abu Dabbab Beach – Crystal-Clear Turquoise Water", ru: "Пляж Абу-Даббаб – кристально чистая бирюзовая вода", de: "Abu-Dabbab-Strand – kristallklares türkisfarbenes Wasser", ar: "شاطئ أبو دباب – مياه صافية زرقاء رمادية" },
      { en: "Snorkeling with Sea Turtles & Dugongs", ru: "Снорклинг с морскими черепахами и дугонгами", de: "Schnorcheln mit Meeresschildkröten und Dugongs", ar: "السباحة بالزنبرك مع السلاحف البحرية والأطوم" },
      { en: "Soft White Sand Beach", ru: "Пляж с мягким белым песком", de: "Weißer Sandstrand", ar: "شاطئ رمال بيضاء ناعمة" },
      { en: "Free Time for Swimming & Relaxing", ru: "Свободное время для купания и отдыха", de: "Freizeit zum Schwimmen und Entspannen", ar: "وقت حر للسباحة والاسترخاء" },
      { en: "Lunch with Drinks at Beach Restaurant", ru: "Обед с напитками в пляжном ресторане", de: "Mittagessen mit Getränken im Strandrestaurant", ar: "غداء مع مشروبات في مطعم على الشاطئ" }
    ],
    included: [
      { en: "Round-trip comfortable transportation", ru: "Комфортный трансфер в оба направления", de: "Bequeme Hin- und Rückfahrt", ar: "نقل مريح ذهاب وعودة" },
      { en: "Entrance to Abu Dabbab Beach", ru: "Вход на пляж Абу-Даббаб", de: "Eintritt zum Abu-Dabbab-Strand", ar: "دخول شاطئ أبو دباب" },
      { en: "Lunch + soft drinks", ru: "Обед + безалкогольные напитки", de: "Mittagessen + Softdrinks", ar: "غداء + مشروبات خفيفة" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Оборудование для снорклинга (маска, трубка, ласты)", de: "Schnorchel-Ausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات السباحة بالزنبرك (قناع، أنبوب، زعانف)" },
      { en: "Guide assistance", ru: "Помощь гида", de: "Führerhilfe", ar: "مساعدة المرشد" }
    ],
    gallery: [
      "/photos/marsa-alam-abu-dabbab-beach/caption (15).jpg"
    ]
  },
  {
    id: "77",
    slug: "wadi-el-gemal-national-park",
    name: {
      en: "Wadi El Gemal National Park – Full Day Beach & Nature Tour",
      ru: "Национальный парк Вади-эль-Гемаль – полный день на пляже и природе",
      de: "Wadi El Gemal Nationalpark – Ganztages-Strand- & Naturausflug",
      ar: "متنزه وادي الجمال الوطني – جولة كاملة على الشاطئ والطبيعة"
    },
    description: {
      en: "Discover the pristine beauty of Wadi El Gemal National Park (Valley of the Camels), one of the most stunning protected areas on the Red Sea coast. This relaxing and scenic day trip offers crystal-clear waters, untouched beaches, rich marine life, and breathtaking desert landscapes. You will enjoy excellent snorkeling at beautiful coral reefs, relax on white sandy beaches, and have the chance to see sea turtles, colorful fish, and possibly dolphins. The park is famous for its untouched nature and peaceful atmosphere.",
      ru: "Откройте для себя нетронутую красоту национального парка Вади-эль-Гемаль (Долина верблюдов) – одного из самых потрясающих охраняемых территорий побережья Красного моря. Расслабляющая живописная поездка предлагает кристально чистые воды, нетронутые пляжи, богатую морскую жизнь и захватывающие пейзажи пустыны. Отличный снорклинг на коралловых рифах, отдых на белоснежных пляжах и шанс увидеть морских черепах, ярких рыб и, возможно, дельфинов. Парк славится своей нетронутой природой и спокойной атмосферой.",
      de: "Entdecken Sie die unberührte Schönheit des Wadi-El-Gemal-Nationalparks (Tal der Kamele), eines der atemberaubendsten Schutzgebiete der Rotmeerküste. Dieser entspannte und malerische Tagesausflug bietet kristallklares Wasser, unberührte Strände, reiches Meeresleben und atemberaubende Wüstenlandschaften. Genießen Sie hervorragendes Schnorcheln an wunderschönen Korallenriffen, entspannen Sie sich an weißsandigen Stränden und haben Sie die Chance, Meeresschildkröte, bunte Fische und vielleicht sogar Delfine zu sehen. Der Park ist berühmt für seine unberührte Natur und friedvolle Atmosphäre.",
      ar: "اكتشف الجمال البكر لمتنزه وادي الجمال الوطني (وادي الإبل)، أحد أجمل المناطق المحمية على ساحل البحر الأحمر. تقدم هذه الرحلة المريحة والجميلة مياه صافية وشواطئ بكر وحياة بحرية غنية ومناظر طبيعية صحراوية خلابة. استمتع بالسباحة بالزنبرك عند الشعاب المرجانية الجميلة واسترخ على الشواطئ الرملية البيضاء وفرصة لرؤية السلاحف البحرية والسمون الملونة وربما الدلافين. مشهور بطبيعته البكر وأجواءه الهادئة."
    },
    duration: { en: "12 hours (06:00 – 19:00)", ru: "12 часов (06:00 – 19:00)", de: "12 Stunden (06:00 – 19:00)", ar: "12 ساعة (06:00 – 19:00)" },
    price: 75,
    priceLabel: {
      en: "/ person",
      ru: "/ чел.",
      de: "/ Person",
      ar: "/ شخص"
    },
    currency: "EUR",
    category: "Marsa Alam",
    popular: false,
    image: "/photos/wadi-el-gemal-national-park/63c66a83c8165.webp",
    rating: 4.7,
    highlights: [
      { en: "Wadi El Gemal National Park (Valley of the Camels)", ru: "Национальный парк Вади-эль-Гемаль (Долина верблюдов)", de: "Wadi-El-Gemal-Nationalpark (Tal der Kamele)", ar: "متنزه وادي الجمال الوطني (وادي الإبل)" },
      { en: "Crystal-Clear Waters & Untouched Beaches", ru: "Кристально чистая вода и нетронутые пляжи", de: "Kristallklares Wasser & unberührte Strände", ar: "مياه صافية وشواطئ بكر" },
      { en: "Snorkeling at Beautiful Coral Reefs", ru: "Снорклинг на красивых коралловых рифах", de: "Schnorcheln an wunderschönen Korallenriffen", ar: "السباحة بالزنبرك عند الشعاب المرجانية الجميلة" },
      { en: "Sea Turtles, Colorful Fish & Dolphins", ru: "Морские черепахи, яркие рыбы и дельфины", de: "Meeresschildkröte, bunte Fische & Delfine", ar: "سلاحف بحرية وسمون ملون ودلافين" },
      { en: "Breathtaking Desert Landscapes", ru: "Захватывающие пейзажи пустыни", de: "Atemberaubende Wüstenlandschaften", ar: "مناظر طبيعية صحراوية خلابة" }
    ],
    included: [
      { en: "Round-trip comfortable transportation", ru: "Комфортный трансфер в оба направления", de: "Bequeme Hin- und Rückfahrt", ar: "نقل مريح ذهاب وعودة" },
      { en: "Entrance fees to Wadi El Gemal National Park", ru: "Входные билеты в национальный парк", de: "Eintrittskarten zum Nationalpark", ar: "رسوم الدخول لمتنزه وادي الجمال الوطني" },
      { en: "Boat or beach access for snorkeling", ru: "Лодочный или пляжный доступ для снорклинга", de: "Boot- oder Strandzugang zum Schnorcheln", ar: "وصول بالقارب أو الشاطئ للسباحة بالزنبرك" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Оборудование для снорклинга (маска, трубка, ласты)", de: "Schnorchel-Ausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات السباحة بالزنبرك (قناع، أنبوب، زعانف)" },
      { en: "Lunch + soft drinks", ru: "Обед + безалкогольные напитки", de: "Mittagessen + Softdrinks", ar: "غداء + مشروبات خفيفة" },
      { en: "Guide assistance", ru: "Помощь гида", de: "Führerhilfe", ar: "مساعدة المرشد" }
    ],
    gallery: [
      "/photos/wadi-el-gemal-national-park/wadi-el-gemal-park.webp"
    ]
  },
  {
    id: "78",
    slug: "horse-riding-safari",
    name: {
      en: "Horse Riding Safari Adventure from Hurghada",
      ru: "Конная сафари-поездка из Хургады",
      de: "Pferdereit-Safari-Abenteuer von Hurghada",
      ar: "مغامرة ركوب الخيول في الصحراء من الغردقة"
    },
    description: {
      en: "Experience the magic of the Egyptian desert on horseback with this exciting Horse Riding Safari. Ride beautiful Arabian horses through golden sand dunes, enjoy breathtaking desert landscapes, and feel the freedom of the Sahara. Includes professional riding instructions for all levels, a visit to a traditional Bedouin camp with tea and snacks.",
      ru: "Испытайте магию египетской пустыни верхом на лошади в этой захватывающей конной сафари-поездке. Ездите на красивых арабских лошадях по золотым песчаным дюнам, наслаждайтесь захватывающими пейзажами пустыни и почувствуйте свободу Сахары. Профессиональная инструкция для всех уровней, посещение традиционного бедуинского лагеря с чаем и закусками.",
      de: "Erleben Sie den Zauber der ägyptischen Wüste zu Pferd mit diesem aufregenden Pferdereit-Safari. Reiten Sie schöne arabische Pferde durch goldene Sanddünen, genießen Sie atemberaubende Wüstenlandschaften und spüren Sie die Freiheit der Sahara. Professionelle Reitanfänge für alle Niveaus, Besuch eines traditionellen Beduinenlagers mit Tee und Snacks.",
      ar: "استشعر سحر الصحراء المصرية على ظهر الحصان مع هذه المغامرة المثيرة. اركب خيلاً عربية جميلة عبر الكثبان الرملية الذهبية واستمتع بالمناظر الطبيعية الخلابة وشعر بحرية الصحراء. تتضمن تعليمات ركوب احترافية لجميع المستويات وزيارة لمعسكر بدوي تقليدي مع شاي ووجبات خفيفة."
    },
    duration: { en: "3 – 4 hours (morning or afternoon)", ru: "3 – 4 часа (утро или вечер)", de: "3 – 4 Stunden (Vormittag oder Nachmittag)", ar: "3 – 4 ساعات (صباحاً أو بعد الظهر)" },
    price: 40,
    priceLabel: {
      en: "/ person",
      ru: "/ чел.",
      de: "/ Person",
      ar: "/ شخص"
    },
    currency: "EUR",
    category: "Desert Safari",
    popular: true,
    image: "/photos/horse-riding-safari/39.jpg",
    rating: 4.8,
    highlights: [
      { en: "Arabian Horse Ride Through Golden Dunes", ru: "Поездка на арабской лошади по золотым дюнам", de: "Arabisches Pferd durch goldene Dünen", ar: "ركوب حصان عربي عبر الكثبان الذهبية" },
      { en: "Professional Riding Instructions (all levels)", ru: "Профессиональная инструкция (все уровни)", de: "Professionelle Reitanfänge (alle Niveaus)", ar: "تعليمات ركوب احترافية (جميع المستويات)" },
      { en: "Traditional Bedouin Camp Visit", ru: "Посещение традиционного бедуинского лагеря", de: "Besuch eines traditionellen Beduinenlagers", ar: "زيارة معسكر بدوي تقليدي" },
      { en: "Breathtaking Desert Landscapes", ru: "Захватывающие пейзажи пустыни", de: "Atemberaubende Wüstenlandschaften", ar: "مناظر طبيعية صحراوية خلابة" },
      { en: "Bedouin Tea & Light Snacks", ru: "Бедуинский чай и лёгкие закуски", de: "Beduinentee & leichte Snacks", ar: "شاي بدوي ووجبات خفيفة" }
    ],
    included: [
      { en: "Round-trip transportation", ru: "Трансфер в оба направления", de: "Hin- und Rückfahrt", ar: "نقل ذهاب وعودة" },
      { en: "Horse riding session with guide/instructor", ru: "Сеанс верховой езды с гидом/инструктором", de: "Pferdereit-Sitzung mit Führer/Instruktor", ar: "جلسة ركوب خيول مع مرشد/مدرّب" },
      { en: "Helmet and safety equipment", ru: "Шлем и средства безопасности", de: "Helm und Sicherheitsausrüstung", ar: "خوذة ومعدات الأمان" },
      { en: "Bedouin tea and light snacks", ru: "Бедуинский чай и лёгкие закуски", de: "Beduinentee und leichte Snacks", ar: "شاي بدوي ووجبات خفيفة" },
      { en: "Hotel pickup and drop-off", ru: "Трансфер от отеля и обратно", de: "Hotelabholung und Rückfahrt", ar: "pickp من وإلى الفندق" }
    ],
    gallery: [
      "/photos/horse-riding-safari/caption.jpg"
    ]
  },
  {
    id: "79",
    slug: "quad-adventure-mini-desert-safari",
    name: {
      en: "Quad Adventure Mini Desert Safari from Hurghada",
      ru: "Квадроцикл мини-сафари из Хургады",
      de: "Quad-Abenteuer Mini-Wüstensafari von Hurghada",
      ar: "مغامرة دراجات رباعية صحراوية مصغرة من الغردقة"
    },
    description: {
      en: "Experience the thrill of the Egyptian desert on this exciting Mini Desert Safari! Drive your own Quad Bike (ATV) through golden sand dunes, enjoy stunning desert landscapes, and feel the real adrenaline of the Sahara. Includes a short camel ride, visit to a traditional Bedouin village, and oriental tea with light snacks.",
      ru: "Испытайте адреналин египетской пустыни в этой захватывающей мини-сафари-поездке! Управляйте собственным квадроциклом (ATV) по золотым песчаным дюнам, наслаждайтесь потрясающими пейзажами пустыни и почувствуйте настоящий адреналин Сахары. Включает короткую поездку на верблюде, посещение традиционного бедуинского посёлка и восточный чай с лёгкими закусками.",
      de: "Erleben Sie den Nervenkitzel der ägyptischen Wüste bei dieser aufregenden Mini-Wüstensafari! Fahren Sie Ihr eigenes Quad-Bike (ATV) durch goldene Sanddünen, genießen Sie atemberaubende Wüstenlandschaften und spüren Sie den echten Adrenalin der Sahara. Kurze Kamelfahrt, Besuch eines traditionellen Beduinen Dorfs und orientalischer Tee mit leichten Snacks.",
      ar: "استشعر إثارة الصحراء المصرية في هذه المغامرة المثيرة! قُد دراجتك الرباعية (ATV) عبر الكثبان الرملية الذهبية واستمتع بالمناظر الطبيعية الخلابة وشعر بال-adrenaline الحقيقي للصحراء. تتضمن رحلة قصيرة على الجمل وزيارة لقرية بدوية تقليدية وشاي شرقي مع وجبات خفيفة."
    },
    duration: { en: "2.5 – 3.5 hours (morning or afternoon)", ru: "2.5 – 3.5 часа (утро или вечер)", de: "2,5 – 3,5 Stunden (Vormittag oder Nachmittag)", ar: "2.5 – 3.5 ساعات (صباحاً أو بعد الظهر)" },
    price: 30,
    priceLabel: {
      en: "/ person",
      ru: "/ чел.",
      de: "/ Person",
      ar: "/ شخص"
    },
    currency: "EUR",
    category: "Desert Safari",
    popular: true,
    image: "/photos/quad-adventure-mini-desert-safari/26.jpg",
    rating: 4.7,
    highlights: [
      { en: "Quad Bike (ATV) Ride Through Golden Dunes", ru: "Поездка на квадроцикле (ATV) по золотым дюнам", de: "Quad-Bike (ATV) durch goldene Dünen", ar: "ركوب دراجة رباعية (ATV) عبر الكثبان الذهبية" },
      { en: "Short Camel Ride", ru: "Короткая поездка на верблюде", de: "Kurze Kamelfahrt", ar: "رحلة قصيرة على الجمل" },
      { en: "Visit to Traditional Bedouin Village", ru: "Посещение традиционного бедуинского посёлка", de: "Besuch eines traditionellen Beduinen Dorfs", ar: "زيارة قرية بدوية تقليدية" },
      { en: "Oriental Tea & Light Snacks", ru: "Восточный чай и лёгкие закуски", de: "Orientalischer Tee & leichte Snacks", ar: "شاي شرقي ووجبات خفيفة" },
      { en: "Professional Safety Briefing", ru: "Профессиональный инструктаж по безопасности", de: "Professionelle Sicherheitsunterweisung", ar: "إرشادات أمان احترافية" }
    ],
    included: [
      { en: "Quad bike rental with fuel", ru: "Аренда квадроцикла с топливом", de: "Quad-Bike-Miete mit Kraftstoff", ar: "تأجير دراجة رباعية مع وقود" },
      { en: "Helmet and safety equipment", ru: "Шлем и средства безопасности", de: "Helm und Sicherheitsausrüstung", ar: "خوذة ومعدات الأمان" },
      { en: "Experienced guide / instructor", ru: "Опытный гид / инструктор", de: "Erfahrener Führer / Instructor", ar: "مرشد / درّب م经验丰富" },
      { en: "Camel ride + Bedouin tea", ru: "Поездка на верблюде + бедуинский чай", de: "Kamelfahrt + Beduinentee", ar: "رحلة على الجمل + شاي بدوي" },
      { en: "Hotel pickup and drop-off", ru: "Трансфер от отеля и обратно", de: "Hotelabholung und Rückfahrt", ar: "pickp من وإلى الفندق" }
    ],
    gallery: [
      "/photos/quad-adventure-mini-desert-safari/caption (2).jpg"
    ]
  },
  {
    id: "80",
    slug: "city-tour-hurghada",
    name: {
      en: "Hurghada City Tour – Discover the Real Hurghada",
      ru: "Городской тур Хургада – откройте настоящую Хургаду",
      de: "Hurghada Stadtrundfahrt – Entdecken Sie das echte Hurghada",
      ar: "جولة مدينة الغردقة – اكتشف الغردقة الحقيقية"
    },
    description: {
      en: "Get to know the authentic side of Hurghada beyond the resorts with this enjoyable and informative City Tour. Explore the old town El Dahar – the historical heart of Hurghada. Walk through the lively local market and bazaar (souvenirs, spices, clothes, and handicrafts). Visit the beautiful Hurghada Marina and promenade with yachts. Enjoy a scenic drive along the coastline and new modern areas. Photo stops at panoramic viewpoints.\n\nImportant note:\n10 euro from inside the city's hotels\n15 euro from Makadi and neighboring hotels\n20 euro from Safaga Hotels\n\nIdeal for those who want to experience local Egyptian life, shop for souvenirs, and understand the real Hurghada.\n\nReturn to your hotel filled with unforgettable memories, great photos, and stories that will stay with you forever.",
      ru: "Познакомьтесь с подлинной стороной Хургады за пределами курортов во время этого интересного и познавательного городского тура. Исследуйте старый город Эль-Дахар – историческое сердце Хургады. Прогуляйтесь по оживленному местному рынку и базару (сувениры, специи, одежда и ремесла). Посетите красивую набережную Хургады с яхтами. Насладитесь живописной поездкой вдоль побережья и новых современных районов. Фотоостановки на панорамных смотровых площадках.\n\nВажная заметка:\n10 евро из отелей внутри города\n15 евро из Макади и соседних отелей\n20 евро из отелей Сафага\n\nИдеально для тех, кто хочет познакомиться с египетской жизнью, купить сувениры и узнать настоящую Хургаду.\n\nВернитесь в отель с незабываемыми воспоминаниями, потрясающими фотографиями и историями, которые останутся с вами навсегда.",
      de: "Lernen Sie die authentische Seite von Hurghada abseits der Resorts mit dieser angenehmen und informativen Stadtrundfahrt kennen. Erkunden Sie die Altstadt El Dahar – das historische Herz von Hurghada. Spazieren Sie durch den lebhaften lokalen Markt und Basar (Souvenirs, Gewürze, Kleidung und Handwerkskunst). Besuchen Sie die wunderschöne Hurghada Marina und Promenade mit Jachten. Genießen Sie eine malerische Fahrt entlang der Küste und der neuen modernen Bereiche. Fotostopps an Panorama-Aussichtspunkten.\n\nWichtiger Hinweis:\n10 Euro aus Hotels in der Stadt\n15 Euro aus Makadi und benachbarten Hotels\n20 Euro aus Safaga Hotels\n\nIdeal für alle, die das ägyptische Leben erleben, Souvenirs kaufen und das echte Hurghada kennenlernen möchten.\n\nKehren Sie mit unvergesslichen Erinnerungen, tollen Fotos und Geschichten, die Sie nie vergessen werden, in Ihr Hotel zurück.",
      ar: "تعرّف على الجانب الأصيل من الغردقة خلف المنتجعات مع هذه الجولة المدينة الممتعة والتعليمية. استكشف البلدة القديمة الداهر – القلب التاريخي للغردقة. مشِّ عبر السوق المحلي النابض بالحياة والبازار (الهدايا التذكارية، التوابل، الملابس والحرف اليدوية). زُر رصيف الغردقة الجميل والواجهة البحرية مع اليخوت. استمتع بقيادة مشاهدة على طول الساحل والمناطق الحديثة. محطات تصوير في مناطق المشاهدة البانورامية.\n\nملاحظة هامة:\n10 يورو من فنادق داخل المدينة\n15 يورو من فنادق ماكادي والمنطقة المجاورة\n20 يورو من فنادق سفاجا\n\nمثالي للذين يريدون تجربة الحياة المصرية المحلية، وشراء الهدايا التذكارية، والتعرف على الغردقة الحقيقية.\n\n عُد إلى فندقك مليئاً بالذكريات التي لا تُنسى، والصور الرائعة، والقصص التي ستبقى معك إلى الأبد."
    },
    duration: { en: "3–4 hours", ru: "3–4 часа", de: "3–4 Stunden", ar: "3–4 ساعات" },
    price: 0,
    currency: "EUR",
    priceLabel: {
      en: "Ask for price",
      ru: "Уточните цену",
      de: "Preis auf Anfrage",
      ar: "اسأل عن السعر"
    },
    category: "Entertainment",
    popular: false,
    image: "/photos/city-tour-hurghada/city-tour-1.jpg",
    rating: 4.6,
    highlights: [
      { en: "El Dahar Old Town", ru: "Старый город Эль-Дахар", de: "Altstadt El Dahar", ar: "البلدة القديمة الداهر" },
      { en: "Local Market & Bazaar", ru: "Местный рынок и базар", de: "Lokaler Markt & Basar", ar: "السوق المحلي والبازار" },
      { en: "Hurghada Marina & Promenade", ru: "Набережная Хургады", de: "Hurghada Marina & Promenade", ar: "رصيف الغردقة والواجهة البحرية" },
      { en: "Coastal Scenic Drive", ru: "Живописная поездка вдоль побережья", de: "Malerische Küstenfahrt", ar: "قيادة مشاهدة على طول الساحل" },
      { en: "Panoramic Photo Stops", ru: "Панорамные фотоостановки", de: "Panorama-Fotostopps", ar: "محطات تصوير بانورامية" }
    ],
    included: [
      { en: "Hotel Pickup & Drop-off", ru: "Трансфер из отеля и обратно", de: "Hotel-Abholung & Rücktransfer", ar: "التوصيل من الفندق والعودة" },
      { en: "Air-Conditioned Transport", ru: "Транспорт с кондиционером", de: "Klimatisiertes Transportmittel", ar: "نقل مكيف" },
      { en: "Professional Local Guide", ru: "Профессиональный местный гид", de: "Professioneller lokaler Guide", ar: "مرشد محترف محلي" },
      { en: "Soft Drinks", ru: "Безалкогольные напитки", de: "Erfrischungsgetränke", ar: "مشروبات خفيفة" }
    ],
    gallery: [
    ]
  },
  {
    id: "81",
    slug: "grand-aquarium-hurghada",
    name: {
      en: "Grand Aquarium Hurghada – Underwater World Adventure",
      ru: "Гранд Аквариум Хургада – Подводное приключение",
      de: "Grand Aquarium Hurghada – Unterwasserwelt-Abenteuer",
      ar: "المتحف المائي الكبير الغردقة – مغامرة عالم تحت الماء"
    },
    description: {
      en: "Discover the magic of the Red Sea without getting wet at the impressive Grand Aquarium Hurghada! This modern aquarium is one of the largest in the Middle East and offers a spectacular journey through the marine life of Egypt.\n\nHighlights:\n• Walk through a long underwater tunnel with sharks, rays, and thousands of colorful fish swimming above and around you\n• See turtles, moray eels, and many exotic species\n• Interactive displays and educational zones\n• Beautiful photo opportunities\n\nPerfect for families with children, couples, and anyone who wants to enjoy the underwater world comfortably and safely.\n\nReturn to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Откройте для себя магию Красного моря, не намокая, в впечатляющем Гранд Аквариуме Хургада! Этот современный аквариум — один из крупнейших на Ближнем Востоке и предлагает захватывающее путешествие по морской жизни Египта.\n\nДостопримечательности:\n• Прогулка по длинному подводному тоннелю с акулами, скатами и тысячами разноцветных рыб\n• Черепахи, мурены и многие экзотические виды\n• Интерактивные экспозиции и образовательные зоны\n• Прекрасные возможности для фото\n\nИдеально для семей с детьми, пар и всех, кто хочет насладиться подводным миром комфортно и безопасно.\n\nВернитесь в отель с незабываемыми воспоминаниями, потрясающими фотографиями и историями, которые останутся с вами навсегда.",
      de: "Entdecken Sie die Magie des Roten Meeres, ohne nass zu werden, im beeindruckenden Grand Aquarium Hurghada! Dieses moderne Aquarium ist eines der größten im Nahen Osten und bietet eine spektakuläre Reise durch das Meeresleben Ägyptens.\n\nHöhepunkte:\n• Gehen Sie durch einen langen Unterwassertunnel mit Haien, Rochen und Tausenden bunter Fische\n• Sehen Sie Schildkröten, Muränen und viele exotische Arten\n• Interaktive Ausstellungen und Bildungszonen\n• Wunderschöne Fotomöglichkeiten\n\nPerfekt für Familien mit Kindern, Paare und alle, die die Unterwasserwelt bequem und sicher genießen möchten.\n\nKehren Sie mit unvergesslichen Erinnerungen, tollen Fotos und Geschichten, die Sie nie vergessen werden, in Ihr Hotel zurück.",
      ar: "اكتشف سحر البحر الأحمر دون أن تبتل في المتحف المائي الكبير الغردقة المذهل! يعتبر هذا المتحف المائي الحديث من الأكبر في الشرق الأوسط ويوفر رحلة مذهلة عبر الحياة البحرية في مصر.\n\nأبرز ما يميزه:\n• مشي عبر نفق تحت الماء طويل مع القرش والشفاح وآلاف الأسماك الملونة\n• سلحفاث ونervals وأنواع استوائية كثيرة\n• عروض تفاعلية ومناطق تعليمية\n• فرص تصوير جميلة\n\nمثالي للعائلات والأزواج وكل من يريد الاستمتاع بعالم تحت الماء براحة وأمان.\n\n عُد إلى فندقك مليئاً بالذكريات التي لا تُنسى، والصور المذهلة، والقصص التي ستبقى معك إلى الأبد."
    },
    duration: { en: "3–4 hours", ru: "3–4 часа", de: "3–4 Stunden", ar: "3–4 ساعات" },
    price: 45,
    currency: "EUR",
    category: "Entertainment",
    popular: false,
    image: "/photos/grand-aquarium-hurghada/aquarium-1.jpg",
    rating: 4.7,
    highlights: [
      { en: "Underwater Tunnel with Sharks & Rays", ru: "Подводный тоннель с акулами и скатами", de: "Unterwassertunnel mit Haien und Rochen", ar: "نفق تحت الماء مع القرش والشفاح" },
      { en: "Turtles, Moray Eels & Exotic Species", ru: "Черепахи, мурены и экзотические виды", de: "Schildkröten, Muränen & exotische Arten", ar: "سلحفاث ونervals وأنواع استوائية" },
      { en: "Interactive Displays & Educational Zones", ru: "Интерактивные экспозиции и образовательные зоны", de: "Interaktive Ausstellungen & Bildungszonen", ar: "عروض تفاعلية ومناطق تعليمية" },
      { en: "Beautiful Photo Opportunities", ru: "Прекрасные возможности для фото", de: "Wunderschöne Fotomöglichkeiten", ar: "فرص تصوير جميلة" }
    ],
    included: [
      { en: "Hotel Pickup & Drop-off", ru: "Трансфер из отеля и обратно", de: "Hotel-Abholung & Rücktransfer", ar: "التوصيل من الفندق والعودة" },
      { en: "Entrance Ticket to Grand Aquarium", ru: "Билет в Гранд Аквариум", de: "Eintrittskarte für das Grand Aquarium", ar: "تذكرة دخول المتحف المائي الكبير" },
      { en: "Professional Guide", ru: "Профессиональный гид", de: "Professioneller Guide", ar: "مرشد محترف" },
      { en: "Soft Drinks", ru: "Безалкогольные напитки", de: "Erfrischungsgetränke", ar: "مشروبات خفيفة" }
    ],
    gallery: [
    ]
  },
  {
    id: "82",
    slug: "hurghada-museum-tour",
    name: {
      en: "Hurghada Museum – History & Culture Day Trip",
      ru: "Музей Хургады – Экскурсия по истории и культуре",
      de: "Hurghada Museum – Geschichte & Kultur Tagesausflug",
      ar: "متحف الغردقة – رحلة تاريخ وثقافة"
    },
    description: {
      en: "Discover the rich history and heritage of the Red Sea region at the modern Hurghada Museum. This impressive museum showcases artifacts from ancient Egypt, Greco-Roman times, and Islamic periods, all beautifully displayed in a contemporary setting.\n\nHighlights:\n• Large collection of ancient Egyptian statues, jewelry, and daily life objects\n• Exhibits about the Red Sea's history and marine heritage\n• Beautifully designed halls with great photo opportunities\n• Short guided explanation of the most important pieces\n\nIdeal for families, culture lovers, and anyone who wants to learn more about Egypt's history without traveling far from the beach.\n\nReturn to your hotel filled with unforgettable memories, great photos, and new knowledge about ancient Egypt.",
      ru: "Откройте для себя богатую историю и наследие региона Красного моря в современном музее Хургады. Этот впечатляющий музей демонстрирует артефакты из Древнего Египта, греко-римского и исламского периодов, все красиво представленные в современном оформлении.\n\nДостопримечательности:\n• Богатая коллекция древнеегипетских статуй, украшений и предметов быта\n• Экспозиции об истории Красного моря и его морском наследии\n• Красиво оформленные залы с возможностями для фото\n• Краткое описание самых важных экспонатов с гидом\n\nИдеально для семей, любителей культуры и всех, кто хочет узнать больше об истории Египта, не уезжая далеко от пляжа.\n\nВернитесь в отель с незабываемыми воспоминаниями, хорошими фотографиями и новыми знаниями о Древнем Египте.",
      de: "Entdecken Sie die reiche Geschichte und das Erbe der Region des Roten Meeres im modernen Hurghada Museum. Dieses beeindruckende Museum präsentiert Artefakte aus dem alten Ägypten, der griechisch-römischen Zeit und islamischen Epochen, alle wunderschön in einem zeitgenössischen Rahmen dargestellt.\n\nHöhepunkte:\n• Große Sammlung altägyptischer Statuen, Schmuck und Alltagsgegenstände\n• Ausstellungen über die Geschichte und das maritime Erbe des Roten Meeres\n• Wunderschön gestaltete Säle mit tollen Fotomöglichkeiten\n• Kurze geführte Erklärung der wichtigsten Stücke\n\nPerfekt für Familien, Kulturliebhaber und alle, die mehr über die Geschichte Ägyptens erfahren möchten, ohne weit vom Strand entfernt zu sein.\n\nKehren Sie mit unvergesslichen Erinnerungen, tollen Fotos und neuem Wissen über das alte Ägypten in Ihr Hotel zurück.",
      ar: "اكتشف التاريخ الغني والتراث لمنطقة البحر الأحمر في المتحف الحديث للغردقة. يعرض هذا المتحف المذهل القطع الأثرية من مصر القديمة والعصور اليونانية الرومانية والعصور الإسلامية، جميعها معروض بشكل جميل في بيئة معاصرة.\n\nأبرز ما يميزه:\n• مجموعة كبيرة من التماثيل المصرية القديمة والمجوهرات وأدوات الحياة اليومية\n• معارض عن تاريخ البحر الأحمر وتراثه البحري\n• قاعات مصممة بشكل جميل مع فرص تصوير رائعة\n• شرح قصير من مرشد لأهم القطع\n\nمثالي للعائلات ومحبي الثقافة ومن يريد معرفة المزيد عن تاريخ مصر دون السفر بعيداً عن الشاطئ.\n\n عُد إلى فندقك مليئاً بالذكريات التي لا تُنسى، والصور الجيدة، والمعرفة الجديدة عن مصر القديمة."
    },
    duration: { en: "3–4 hours", ru: "3–4 часа", de: "3–4 Stunden", ar: "3–4 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Entertainment",
    popular: false,
    image: "/photos/diving-adventure-hurghada/diving-1.webp",
    rating: 4.6,
    highlights: [
      { en: "Ancient Egyptian Statues & Jewelry", ru: "Древнеегипетские статуи и украшения", de: "Altägyptische Statuen & Schmuck", ar: "تماثيل ومجوهرات مصر القديمة" },
      { en: "Red Sea History & Marine Heritage", ru: "История Красного моря и морское наследие", de: "Geschichte & maritimes Erbe des Roten Meeres", ar: "تاريخ البحر الأحمر وتراثه البحري" },
      { en: "Beautifully Designed Halls", ru: "Красиво оформленные залы", de: "Wunderschön gestaltete Säle", ar: "قاعات مصممة بشكل جميل" },
      { en: "Guided Explanation of Key Pieces", ru: "Экскурсия к важнейшим экспонатам", de: "Geführte Erklärung der Hauptstücke", ar: "شرح مرشد لأهم القطع" }
    ],
    included: [
      { en: "Hotel Pickup & Drop-off", ru: "Трансфер из отеля и обратно", de: "Hotel-Abholung & Rücktransfer", ar: "التوصيل من الفندق والعودة" },
      { en: "Entrance Ticket to Hurghada Museum", ru: "Билет в Музей Хургады", de: "Eintrittskarte für das Hurghada Museum", ar: "تذكرة دخول متحف الغردقة" },
      { en: "Professional Guide", ru: "Профессиональный гид", de: "Professioneller Guide", ar: "مرشد محترف" },
      { en: "Soft Drinks", ru: "Безалкогольные напитки", de: "Erfrischungsgetränke", ar: "مشروبات خفيفة" }
    ],
    gallery: [
    ]
  },
  {
    id: "83",
    slug: "la-tenda-lights-bedouin-dinner",
    name: {
      en: "La Tenda Lights – Magical Bedouin Night (Dinner & Show)",
      ru: "La Tenda Lights – Волшебная бедуинская ночь (ужин и шоу)",
      de: "La Tenda Lights – Magischer Beduinennacht (Dinner & Show)",
      ar: "لا تنتا لايتز – ليلة بدوية ساحرة (عشاء وعرض)"
    },
    description: {
      en: "Step into a magical world under the stars at La Tenda Lights, one of the most entertaining evening experiences in Hurghada.\n\nEnjoy an authentic Bedouin-style evening in a beautifully decorated tent with thousands of colorful lights creating a fairy-tale atmosphere.\n\nProgram Includes:\n• Warm welcome with traditional drinks\n• Rich Bedouin dinner buffet (grilled meats, oriental dishes, salads, desserts)\n• Live entertainment: belly dancing, folkloric music, fire show\n• Camel rides and photo opportunities\n• Fun and relaxed desert atmosphere\n\nPerfect for families, couples, and groups who want a memorable, fun, and photogenic night in the desert.\n\nReturn to your hotel filled with unforgettable memories, beautiful photos under the lights, and stories that will stay with you forever.",
      ru: "Окажитесь в волшебном мире под звездами в La Tenda Lights — одном из самых развлекательных вечерних мероприятий в Хургаде.\n\nНаслаждайтесь аутентичным бедуинским вечером в красиво украшенной палатке с тысячами разноцветных огней, создающих сказочную атмосферу.\n\nПрограмма включает:\n• Традиционный прием с напитками\n• Щедрый бедуинский шведский стол (мясо на гриле, восточные блюда, салаты, десерты)\n• Живые развлечения: танец живота, фольклорная музыка, огненное шоу\n• Верблюжьи прогулки и возможности для фото\n• Веселая и расслабленная атмосфера пустыни\n\nИдеально для семей, пар и групп, которые хотят запоминающуюся, веселую и фотогеничную ночь в пустыне.\n\nВернитесь в отель с незабываемыми воспоминаниями, красивыми фотографиями под огнями и историями, которые останутся с вами навсегда.",
      de: "Tauchen Sie ein in eine magische Welt unter den Sternen bei La Tenda Lights, einem der unterhaltsamsten Abenderlebnisse in Hurghada.\n\nGenießen Sie einen authentischen Beduinenabend in einem wunderschön geschmückten Zelt mit Tausenden bunter Lichter, die eine Märchenatmosphäre schaffen.\n\nProgramm beinhaltet:\n• Warmer Empfang mit traditionellen Getränken\n• Reichhaltiges Beduinen-Buffet (Grillfleisch, orientalische Gerichte, Salate, Desserts)\n• Live-Unterhaltung: Bauchtanz, Folkloremusik, Feuershow\n• Kamelritte und Fotomöglichkeiten\n• Lustige und entspannte Wüstenatmosphäre\n\nPerfekt für Familien, Paare und Gruppen, die eine unvergessliche, lustige und fotogene Nacht in der Wüste suchen.\n\nKehren Sie mit unvergesslichen Erinnerungen, schönen Fotos unter den Lichtern und Geschichten, die Sie nie vergessen werden, in Ihr Hotel zurück.",
      ar: "ادخل عالم سحري تحت النجوم في لا تنتا لايتز، أحد أكثر الأمسيات الترفيهية إثارة في الغردقة.\n\nاستمتع بمساء بدوي أصيل في خيمة مزينة بشكل جميل مع آلاف الأضواء الملونة التي تخلق أجواء خيالية.\n\nالبرنامج يشمل:\n• ترحيب دافئ مع مشروبات تقليدية\n• بوفيت عشاء بدوي غني (لحوم مشوية، أطباق شرقية، سل السلطات، حلويات)\n• ترفيه مباشر: رقص شرقي، موسيقى شعبية، عرض ناري\n• ركوب الإبل وفرص التصوير\n• أجواء صحراء ممتعة ومريحة\n\nمثالي للعائلات والأزواج والمجموعات التي تريد ليلة لا تُنسى وممتعة وجميلة في الصحراء.\n\n عُد إلى فندقك مليئاً بالذكريات التي لا تُنسى، والصور الجميلة تحت الأضواء، والقصص التي ستبقى معك إلى الأبد."
    },
    duration: { en: "4–5 hours", ru: "4–5 часов", de: "4–5 Stunden", ar: "4–5 ساعات" },
    price: 45,
    currency: "EUR",
    category: "Entertainment",
    popular: false,
    image: "/photos/diving-adventure-hurghada/diving-1.webp",
    rating: 4.7,
    highlights: [
      { en: "Authentic Bedouin-Style Evening", ru: "Аутентичный бедуинский вечер", de: "Authentischer Beduinenabend", ar: "مساء بدوي أصيل" },
      { en: "Rich Dinner Buffet", ru: "Щедрый шведский стол", de: "Reichhaltiges Dinner-Buffet", ar: "بوفيت عشاء غني" },
      { en: "Live Entertainment: Belly Dancing & Fire Show", ru: "Живые развлечения: танец живота и огненное шоу", de: "Live-Unterhaltung: Bauchtanz & Feuershow", ar: "ترفيه مباشر: رقص شرقي وعرض ناري" },
      { en: "Camel Rides & Photo Opportunities", ru: "Верблюжьи прогулки и фото", de: "Kamelritte & Fotomöglichkeiten", ar: "ركوب الإبل وفرص التصوير" },
      { en: "Thousands of Colorful Lights", ru: "Тысячи разноцветных огней", de: "Tausende bunte Lichter", ar: "آلاف الأضواء الملونة" }
    ],
    included: [
      { en: "Hotel Pickup & Drop-off", ru: "Трансфер из отеля и обратно", de: "Hotel-Abholung & Rücktransfer", ar: "التوصيل من الفندق والعودة" },
      { en: "Dinner Buffet + Soft Drinks", ru: "Шведский стол + безалкогольные напитки", de: "Dinner-Buffet + Erfrischungsgetränke", ar: "بوفيت عشاء + مشروبات خفيفة" },
      { en: "Full Entertainment Program", ru: "Полная программа развлечений", de: "Vollständiges Unterhaltungsprogramm", ar: "برنامج ترفيهي كامل" },
      { en: "Professional Guide", ru: "Профессиональный гид", de: "Professioneller Guide", ar: "مرشد محترف" }
    ],
    gallery: [
    ]
  },
  {
    id: "84",
    slug: "diving-adventure-hurghada",
    name: {
      en: "Diving Adventure – Discover the Red Sea",
      ru: "Дайвинг приключение – Откройте Красное море",
      de: "Tauchabenteuer – Entdecken Sie das Rote Meer",
      ar: "مغامرة الغوص – اكتشف البحر الأحمر"
    },
    description: {
      en: "Explore the breathtaking underwater world of Hurghada with this exciting Diving Adventure. Whether you are a beginner or already certified, this trip offers an unforgettable experience in one of the world's best diving destinations.\n\nProgram Highlights:\n• Boat trip to beautiful coral reefs\n• 1 or 2 guided dives (depending on level)\n• Professional PADI instructors and divemasters\n• Rich marine life: colorful corals, reef fish, turtles, and possibly dolphins\n• Time for relaxation and snorkeling on the boat\n\nPerfect for adventure seekers and nature lovers who want to experience the magic of the Red Sea depths.\n\nReturn to your hotel filled with unforgettable memories, stunning underwater photos, and stories that will stay with you forever.",
      ru: "Исследуйте захватывающий подводный мир Хургады с этим увлекательным дайвинг-приключением. Независимо от того, новичок вы или уже сертифицированный дайвер, это путешествие предлагает незабываемый опыт в одном из лучших дайвиновых направлений мира.\n\nДостопримечательности:\n• Поездка на лодке к красивым коралловым рифам\n• 1 или 2 организованных погружения (в зависимости от уровня)\n• Профессиональные инструкторы PADI\n• Богатая морская жизнь: цветные кораллы, рифовые рыбы, черепахи и, возможно, дельфины\n• Время для отдыха и снорклинга на лодке\n\nИдеально для любителей приключений и природы, которые хотят почувствовать магию глубин Красного моря.\n\nВернитесь в отель с незабываемыми воспоминаниями, потрясающими подводными фотографиями и историями, которые останутся с вами навсегда.",
      de: "Erkunden Sie die atemberaubende Unterwasserwelt von Hurghada mit diesem spannenden Tauchabenteuer. Egal ob Anfänger oder bereits zertifiziert – dieses Angebot bietet ein unvergessliches Erlebnis in einem der besten Tauchziele der Welt.\n\nHöhepunkte:\n• Bootsfahrt zu wunderschönen Korallenriffen\n• 1 oder 2 geführte Tachgänge (je nach Niveau)\n• Professionelle PADI-Instruktoren und Tauchleiter\n• Reiche Tierwelt: bunte Korallen, Riffische, Schildkröten und möglicherweise Delfine\n• Zeit für Entspannung und Schnorcheln auf dem Boot\n\nPerfekt für Abenteurer und Naturliebhaber, die die Magie der Tiefen des Roten Meeres erleben möchten.\n\nKehren Sie mit unvergesslichen Erinnerungen, atemberaubenden Unterwasserfotos und Geschichten, die Sie nie vergessen werden, in Ihr Hotel zurück.",
      ar: "استكشف عالم تحت الماء المذهل في الغردقة مع هذه المغامرة المثيرة للغوص. سواء كنت مبتدئاً أو حاصلاً على شهادة، تقدم هذه الرحلة تجربة لا تُنسى في واحدة من أفضل وجهات الغوص في العالم.\n\nأبرز ما يميزه:\n• رحلة قارب إلى شعاب مرجانية جميلة\n• 1 أو 2 غوص مرشد (حسب المستوى)\n• مدربون محترفون من PADI\n• حياة بحرية غنية: مرجان ملون، أسماك شعاب، سلحفاث، وربما دلافين\n• وقت للراحة والغوص على متن القارب\n\nمثالي لمحبي المغامرات والطبيعة الذين يريدون تجربة سحر أعماق البحر الأحمر.\n\n عُد إلى فندقك مليئاً بالذكريات التي لا تُنسى، والصور المذهلة تحت الماء، والقصص التي ستبقى معك إلى الأبد."
    },
    duration: { en: "6–8 hours", ru: "6–8 часов", de: "6–8 Stunden", ar: "6–8 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/diving-adventure-hurghada/diving-1.webp",
    rating: 4.8,
    highlights: [
      { en: "Boat Trip to Beautiful Coral Reefs", ru: "Поездка на лодке к коралловым рифам", de: "Bootsfahrt zu Korallenriffen", ar: "رحلة قارب إلى الشعاب المرجانية" },
      { en: "1 or 2 Guided Dives", ru: "1 или 2 погружения с гидом", de: "1 oder 2 geführte Tachgänge", ar: "1 أو 2 غوص مرشد" },
      { en: "Professional PADI Instructors", ru: "Профессиональные инструкторы PADI", de: "Professionelle PADI-Instruktoren", ar: "مدربون محترفون من PADI" },
      { en: "Rich Marine Life: Corals, Turtles & Dolphins", ru: "Богатая морская жизнь: кораллы, черепахи, дельфины", de: "Reiche Tierwelt: Korallen, Schildkröten & Delfine", ar: "حياة بحرية غنية: مرجان وسلحفاث ودلافين" },
      { en: "Snorkeling Option for Non-Divers", ru: "Снорклинг для недайверов", de: "Schnorcheloption für Nicht-Taucher", ar: "خيار الغوص لمن لا يغوص" }
    ],
    included: [
      { en: "Round-Trip Hotel Transfer", ru: "Трансфер из отеля и обратно", de: "Hin- und Rücktransfer", ar: "نقل ذهاب وعودة من الفندق" },
      { en: "Boat Trip & Diving Equipment", ru: "Поездка на лодке и снаряжение для дайвинга", de: "Bootsfahrt & Tauchausrüstung", ar: "رحلة قارب ومعدات الغوص" },
      { en: "Professional Instructor/Guide", ru: "Профессиональный инструктор/гид", de: "Professioneller Instructor/Guide", ar: "مدرب/مرشد محترف" },
      { en: "Lunch on Board + Soft Drinks", ru: "Обед на борту + безалкогольные напитки", de: "Mittagessen an Bord + Erfrischungsgetränke", ar: "غداء على متن القارب + مشروبات خفيفة" },
      { en: "Snorkeling Option for Non-Divers", ru: "Снорклинг для недайверов", de: "Schnorcheloption für Nicht-Taucher", ar: "خيار الغوص لمن لا يغوص" }
    ],
    gallery: [
    ]
  },
  {
    id: "85",
    slug: "eden-island-snorkeling",
    name: {
      en: "Eden Island – Snorkeling & Beach Paradise",
      ru: "Остров Эдем – Снорклинг и пляжный рай",
      de: "Eden Island – Schnorcheln & Strandparadies",
      ar: "جزيرة عدن – غوص وشاطئ جنة"
    },
    description: {
      en: "Experience pure bliss at Eden Island, one of the most beautiful and serene islands in the Red Sea. This tropical paradise offers calm turquoise waters, stunning coral reefs, and a relaxing beach atmosphere.\n\nProgram Highlights:\n• Excellent snorkeling among colorful corals and tropical fish\n• Relaxing on the soft white sandy beach\n• Swimming in crystal-clear shallow lagoons\n• Peaceful and scenic environment\n\nPerfect for couples, families, and those seeking a tranquil, high-quality island day with great snorkeling.\n\nReturn to your hotel filled with unforgettable memories, stunning photos, and stories that will stay with you forever.",
      ru: "Испытайте чистое блаженство на острове Эдем — одном из самых красивых и спокойных островов Красного моря. Этот тропический рай предлагает спокойные бирюзовые воды, потрясающие коралловые рифы и расслабляющую пляжную атмосферу.\n\nДостопримечательности:\n• Отличный снорклинг среди цветных кораллов и тропических рыб\n• Отдых на мягком белом песчаном пляже\n• Плавание в кристально чистых мелких лагунах\n• Спокойная и живописная обстановка\n\nИдеально для пар, семей и тех, кто ищет спокойный, качественный отдых на острове с отличным снорклингом.\n\nВернитесь в отель с незабываемыми воспоминаниями, потрясающими фотографиями и историями, которые останутся с вами навсегда.",
      de: "Erleben Sie reines Glück auf der Eden Island, einer der schönsten und ruhigsten Inseln im Roten Meer. Dieses tropische Paradies bietet ruhige türkisfarbene Wasser, atemberaubende Korallenriffe und eine entspannte Strandatmosphäre.\n\nHöhepunkte:\n• Ausgezeichnetes Schnorcheln zwischen bunten Korallen und tropischen Fischen\n• Entspannung am weichen weißen Sandstrand\n• Schwimmen in kristallklaren flachen Lagunen\n• Friedliche und malerische Umgebung\n\nPerfekt für Paare, Familien und alle, die einen ruhigen, hochwertigen Inseltag mit tollen Schnorchelmöglichkeiten suchen.\n\nKehren Sie mit unvergesslichen Erinnerungen, atemberaubenden Fotos und Geschichten, die Sie nie vergessen werden, in Ihr Hotel zurück.",
      ar: "استمتع بالسعادة المطلقة في جزيرة عدن، אחת من أجمل وأكثر جزر البحر الأحمر هدوءاً. يوفر هذا الفرد الاستوائي مياه فيروزية هادئة وشعاب مرجانية مذهلة وأجواء شاطئ مريحة.\n\nأبرز ما يميزه:\n• غوص ممتاز بين المرجان الملون والأسماك الاستوائية\n• الاسترخاء على الشاطئ الرملي الأبيض الناعم\n• السباحة في البحيرات الضحلة الصافية\n• بيئة هادئة وجميلة\n\nمثالي للأزواج والعائلات ومن يبحث عن يوم هادئ عالي الجودة على الجزيرة مع غوص رائع.\n\n عُد إلى فندقك مليئاً بالذكريات التي لا تُنسى، والصور المذهلة، والقصص التي ستبقى معك إلى الأبد."
    },
    duration: { en: "7–8 hours", ru: "7–8 часов", de: "7–8 Stunden", ar: "7–8 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Sea Adventures",
    popular: false,
    image: "/photos/eden-island-snorkeling/eden-1.jpg",
    rating: 4.7,
    highlights: [
      { en: "Excellent Snorkeling Among Corals & Fish", ru: "Отличный снорклинг среди кораллов и рыб", de: "Ausgezeichnetes Schnorcheln zwischen Korallen & Fischen", ar: "غوص ممتاز بين المرجان والأسماك" },
      { en: "Relaxing on White Sandy Beach", ru: "Отдых на белом песчаном пляже", de: "Entspannung am weißen Sandstrand", ar: "الاسترخاء على الشاطئ الرملي الأبيض" },
      { en: "Swimming in Crystal-Clear Lagoons", ru: "Плавание в кристально чистых лагунах", de: "Schwimmen in kristallklaren Lagunen", ar: "السباحة في البحيرات الصافية" },
      { en: "Peaceful & Scenic Environment", ru: "Спокойная и живописная обстановка", de: "Friedliche & malerische Umgebung", ar: "بيئة هادئة وجميلة" }
    ],
    included: [
      { en: "Hotel Pickup & Drop-off", ru: "Трансфер из отеля и обратно", de: "Hotel-Abholung & Rücktransfer", ar: "التوصيل من الفندق والعودة" },
      { en: "Comfortable Boat Trip", ru: "Комфортабельная поездка на лодке", de: "Komfortable Bootsfahrt", ar: "رحلة قارب مريحة" },
      { en: "Snorkeling Equipment", ru: "Снаряжение для снорклинга", de: "Schnorchelausrüstung", ar: "معدات الغوص" },
      { en: "Delicious Lunch + Soft Drinks", ru: "Вкусный обед + безалкогольные напитки", de: "Köstliches Mittagessen + Erfrischungsgetränke", ar: "غداء لذيذ + مشروبات خفيفة" },
      { en: "Guide Assistance", ru: "Помощь гида", de: "Guide-Unterstützung", ar: "مساعدة المرشد" }
    ],
    gallery: [
    ]
  },
  {
    id: "86",
    slug: "hula-hula-island-snorkeling",
    name: {
      en: "Hula-Hula Island Snorkeling & Beach Day",
      ru: "Снорклинг и пляжный день на острове Хула-Хула",
      de: "Hula-Hula Insel Schnorcheln & Strandtag",
      ar: "سباحة وشاطئ جزيرة هولا هولا"
    },
    description: {
      en: "Enjoy a fantastic day at Hula-Hula Island (one of the most beautiful islands in the Red Sea). This tour offers excellent snorkeling, shallow crystal-clear waters, and a relaxing beach atmosphere.",
      ru: "Насладитесь фантастическим днём на острове Хула-Хула (одном из красивейших островов Красного моря). Эта экскурсия предлагает превосходный снорклинг, мелкие кристально чистые воды и расслабляющую пляжную атмосферу.",
      de: "Genießen Sie einen fantastischen Tag auf der Hula-Hula Insel (einer der schönsten Inseln des Roten Meeres). Dieses Ausflug bietet hervorragendes Schnorcheln, flaches kristallklares Wasser und eine entspannte Strandatmosphäre.",
      ar: "استمتع بيوم رائع على جزيرة هولا هولا (واحدة من أجمل جزر البحر الأحمر). هذه الجولة تقدم رياضة سباحة ممتازة، مياه صافية ضحلة، وأجواء شاطئ مريحة."
    },
    duration: { en: "7-8 hours", ru: "7-8 часов", de: "7-8 Stunden", ar: "7-8 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/hula-hula-island-snorkeling/1.jpg",
    rating: 4.8,
    highlights: [
      { en: "Snorkeling at vibrant coral reefs with colorful fish", ru: "Снорклинг на живых коралловых рифах с разноцветными рыбами", de: "Schnorcheln an lebendigen Korallenriffen mit bunten Fischen", ar: "السباحة بالقرب من الشعاب المرجانية الملونة مع الأسماك الملونة" },
      { en: "Relaxing on the white sandy beach", ru: "Отдых на белоснежном песчаном пляже", de: "Entspannen am weißen Sandstrand", ar: "الاسترخاء على الشاطئ الرملي الأبيض" },
      { en: "Swimming in turquoise lagoons", ru: "Купание в бирюзовых лагунах", de: "Schwimmen in türkisfarbenen Lagunen", ar: "السباحة في البحيرات الفيروزية" },
      { en: "Fun water activities (banana boat, sofa ride – optional)", ru: "Весёлые водные развлечения (банан, диван – по желанию)", de: "Spaßige Wasserspiele (Banana Boat, Sofa Ride – optional)", ar: "أنشطة مائية ممتعة (زورق الموز، ركوب الأريكة – اختياري)" }
    ],
    included: [
      { en: "Hotel pickup and drop-off", ru: "Трансфер из отеля и обратно", de: "Hotelabholung und Rückfahrt", ar: "التنقل من الفندق وإليه" },
      { en: "Comfortable boat trip", ru: "Комфортабельная поездка на лодке", de: "Komfortable Bootsfahrt", ar: "رحلة بحرية مريحة" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Снаряжение для снорклинга (маска, трубка, ласты)", de: "Schnorchelausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات السباحة بالقرب من الشعاب (قناع، أنبوب، زعانف)" },
      { en: "Tasty lunch on board + soft drinks", ru: "Вкусный обед на борту + напитки", de: "Leckeres Mittagessen an Bord + Softdrinks", ar: "غداء لذيذ على متن السفينة + مشروبات خفيفة" },
      { en: "Guide assistance", ru: "Помощь гида", de: "Führerhilfe", ar: "مساعدة الدليل" }
    ],
    gallery: [
    ]
  },
  {
    id: "87",
    slug: "magawish-island-snorkeling",
    name: {
      en: "Magawish Island – Snorkeling & Beach Day",
      ru: "Остров Магавиш – снорклинг и пляжный день",
      de: "Magawish Insel – Schnorcheln & Strandtag",
      ar: "جزيرة مجاويش – سباحة وشاطئ"
    },
    description: {
      en: "Enjoy a relaxing and beautiful day at Magawish Island, one of the charming islands near Hurghada. Known for its clear turquoise waters, good snorkeling spots, and peaceful beach, Magawish is an excellent choice for a classic Red Sea island experience.",
      ru: "Наслаждайтесь расслабляющим и прекрасным днём на острове Магавиш, одном из очаровательных островов недалеко от Хургады. Известный своими прозрачными бирюзовыми водами, хорошими местами для снорклинга и спокойным пляжем, Магавиш — отличный выбор для классического отдыха на островах Красного моря.",
      de: "Genießen Sie einen entspannten und wunderschönen Tag auf der Magawish Insel, einer der charmanten Inseln in der Nähe von Hurghada. Bekannt für ihr klares türkisfarbenes Wasser, gute Schnorchelorte und den ruhigen Strand ist Magawish eine ausgezeichnete Wahl für ein klassisches Insel-Erlebnis auf dem Roten Meer.",
      ar: "استمتع بيوم مريح وجميل في جزيرة مجاويش، واحدة من الجزر الساحرة بالقرب من الغردقة. تشتهر بمياهها الفيروزية الصافية، وأماكن جيدة للسباحة بالقرب من الشعاب، والشاطئ الهادئ، تعد مجاويش خياراً ممتازاً لتجربة جزيرة كلاسيكية على البحر الأحمر."
    },
    duration: { en: "7-8 hours", ru: "7-8 часов", de: "7-8 Stunden", ar: "7-8 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/magawish-island-snorkeling/1.jpg",
    rating: 4.8,
    highlights: [
      { en: "Snorkeling at vibrant coral reefs with colorful fish", ru: "Снорклинг на живых коралловых рифах с разноцветными рыбами", de: "Schnorcheln an lebendigen Korallenriffen mit bunten Fischen", ar: "السباحة بالقرب من الشعاب المرجانية الملونة مع الأسماك الملونة" },
      { en: "Relaxing on the sandy beach", ru: "Отдых на песчаном пляже", de: "Entspannen am Sandstrand", ar: "الاسترخاء على الشاطئ الرملي" },
      { en: "Swimming in calm, shallow waters", ru: "Купание в спокойных мелких водах", de: "Schwimmen in ruhigem, flachem Wasser", ar: "السباحة في المياه الهادئة الضحلة" },
      { en: "Scenic boat journey with nice views", ru: "Пейзажная поездка на лодке с красивыми видами", de: "Malerische Bootsfahrt mit schöner Aussicht", ar: "رحلة بحرية مناظر طبيعية جميلة" }
    ],
    included: [
      { en: "Hotel pickup and drop-off", ru: "Трансфер из отеля и обратно", de: "Hotelabholung und Rückfahrt", ar: "التنقل من الفندق وإليه" },
      { en: "Comfortable boat trip", ru: "Комфортабельная поездка на лодке", de: "Komfortable Bootsfahrt", ar: "رحلة بحرية مريحة" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Снаряжение для снорклинга (маска, трубка, ласты)", de: "Schnorchelausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات السباحة بالقرب من الشعاب (قناع، أنبوب، زعانف)" },
      { en: "Lunch on board + soft drinks", ru: "Обед на борту + напитки", de: "Mittagessen an Bord + Softdrinks", ar: "غداء على متن السفينة + مشروبات خفيفة" },
      { en: "Guide assistance", ru: "Помощь гида", de: "Führerhilfe", ar: "مساعدة الدليل" }
    ],
    gallery: [
      "/photos/magawish-island-snorkeling/12.webp"
    ]
  },
  {
    id: "88",
    slug: "mahmya-island-snorkeling",
    name: {
      en: "Mahmya Island – Premium Snorkeling & Beach Day",
      ru: "Остров Махмия – премиальный снорклинг и пляжный день",
      de: "Mahmya Insel – Premium-Schnorcheln & Strandtag",
      ar: "جزيرة محمية – سباحة ممتازة وشاطئ"
    },
    description: {
      en: "Experience one of the most exclusive and beautiful islands in the Red Sea — Mahmya Island. Known for its pristine white beaches, calm turquoise waters, and rich coral reefs, Mahmya offers a more peaceful and upscale alternative to the busier islands.",
      ru: "Испытайте один из самых эксклюзивных и красивых островов Красного моря — остров Махмия. Известный своими первозданными белыми пляжами, спокойными бирюзовыми водами и богатыми коралловыми рифами, Махмия предлагает более спокойную и престижную альтернативу более загруженным островам.",
      de: "Erleben Sie eine der exklusivsten und schönsten Inseln des Roten Meeres — Mahmya Insel. Bekannt für ihre unberührten weißen Strände, ruhiges türkisfarbenes Wasser und reiche Korallenriffe, bietet Mahmya eine ruhigere und hochwertigere Alternative zu den belebteren Inseln.",
      ar: "اختبر واحدة من أجمل وأكثر الجزر حصرية على البحر الأحمر — جزيرة محمية. تشتهر بشواطئها البيضاء النقية، ومياهها الفيروزية الهادئة، وشعابها المرجانية الغنية، توفر محمية بديلاً أكثر هدوءاً ورفاهية للجزر الأكثر ازدحاماً."
    },
    duration: { en: "7-8 hours", ru: "7-8 часов", de: "7-8 Stunden", ar: "7-8 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/mahmya-island-snorkeling/1.jpg",
    rating: 4.9,
    highlights: [
      { en: "Excellent snorkeling at protected coral reefs", ru: "Превосходный снорклинг на защищённых коралловых рифах", de: "Hervorragendes Schnorcheln an geschützten Korallenriffen", ar: "سباحة ممتازة بالقرب من الشعاب المرجانية المحمية" },
      { en: "Relaxing on the soft white sandy beach", ru: "Отдых на мягком белоснежном пляже", de: "Entspannen am weichen weißen Sandstrand", ar: "الاسترخاء على الشاطئ الرملي الأبيض الناعم" },
      { en: "Swimming in crystal-clear shallow waters", ru: "Купание в кристально чистых мелких водах", de: "Schwimmen in kristallklarem flachem Wasser", ar: "السباحة في المياه الصافية الضحلة" },
      { en: "Premium beach club atmosphere", ru: "Атмосфера премиального пляжного клуба", de: "Premium-Strandclub-Atmosphäre", ar: "أجواء نادي الشاطئ الفاخر" }
    ],
    included: [
      { en: "Hotel pickup and drop-off", ru: "Трансфер из отеля и обратно", de: "Hotelabholung und Rückfahrt", ar: "التنقل من الفندق وإليه" },
      { en: "Comfortable boat trip", ru: "Комфортабельная поездка на лодке", de: "Komfortable Bootsfahrt", ar: "رحلة بحرية مريحة" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Снаряжение для снорклинга (маска, трубка, ласты)", de: "Schnorchelausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات السباحة بالقرب من الشعاب (قناع، أنبوب، زعانف)" },
      { en: "Delicious lunch + soft drinks", ru: "Вкусный обед + напитки", de: "Leckeres Mittagessen + Softdrinks", ar: "غداء لذيذ + مشروبات خفيفة" },
      { en: "Guide assistance", ru: "Помощь гида", de: "Führerhilfe", ar: "مساعدة الدليل" }
    ],
    gallery: [
    ]
  },
  {
    id: "89",
    slug: "orange-bay-snorkeling",
    name: {
      en: "Orange Bay Snorkeling & Beach Day",
      ru: "Снорклинг и пляжный день в Оранжевом заливе",
      de: "Orange Bay Schnorcheln & Strandtag",
      ar: "شاطئ بورتوفين – سباحة واستجمام"
    },
    description: {
      en: "One of the most popular and beautiful day trips in Hurghada! Sail to the famous Orange Bay on Giftun Island, famous for its vibrant orange-gold sand, crystal-clear turquoise water, and rich coral reefs.",
      ru: "Одна из самых популярных и красивых однодневных экскурсий в Хургаде! Отправьтесь в знаменитый Оранжевый залив на острове Гифтун, известном своим ярким оранжево-золотым песком, кристально чистой бирюзовой водой и богатыми коралловыми рифами.",
      de: "Einer der beliebtesten und schönsten Tagesausflüge in Hurghada! Segeln Sie zur berühmten Orange Bay auf Giftun Island, berühmt für ihren lebhaften orangegoldenen Sand, kristallklares türkisfarbenes Wasser und reiche Korallenriffe.",
      ar: "واحدة من أكثر الرحلات اليومية شعبية وجمالاً في الغردقة! ابحر إلى خليج بورتوفين الشهير على جزيرة جيفتون، المشهورة برمالها البرتقالية الذهبية، ومياهها الفيروزية الصافية، وشعابها المرجانية الغنية."
    },
    duration: { en: "7-8 hours", ru: "7-8 часов", de: "7-8 Stunden", ar: "7-8 ساعات" },
    price: 30,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/orange-bay-snorkeling/1.jpg",
    rating: 4.8,
    highlights: [
      { en: "Excellent snorkeling among colorful corals and tropical fish", ru: "Превосходный снорклинг среди разноцветных кораллов и тропических рыб", de: "Hervorragendes Schnorcheln unter bunten Korallen und tropischen Fischen", ar: "سباحة رائعة بين الشعاب المرجانية الملونة والأسماك الاستوائية" },
      { en: "Relaxing time on the soft sandy beach", ru: "Расслабляющее время на мягком песчаном пляже", de: "Entspannte Zeit am weichen Sandstrand", ar: "وقت ممتع على الشاطئ الرملي الناعم" },
      { en: "Swimming in the warm, shallow lagoon", ru: "Купание в тёплой мелкой лагуне", de: "Schwimmen in der warmen, flachen Lagune", ar: "السباحة في البحيرة الدافئة الضحلة" },
      { en: "Fun atmosphere with music and water activities", ru: "Весёлая атмосфера с музыкой и водными развлечениями", de: "Spaßige Atmosphäre mit Musik und Wasserspielen", ar: "أجواء ممتعة مع موسيقى وأنشطة مائية" }
    ],
    included: [
      { en: "Hotel pickup and drop-off", ru: "Трансфер из отеля и обратно", de: "Hotelabholung und Rückfahrt", ar: "التنقل من الفندق وإليه" },
      { en: "Comfortable boat trip", ru: "Комфортабельная поездка на лодке", de: "Komfortable Bootsfahrt", ar: "رحلة بحرية مريحة" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Снаряжение для снорклинга (маска, трубка, ласты)", de: "Schnorchelausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات السباحة بالقرب من الشعاب (قناع، أنبوب، زعانف)" },
      { en: "Delicious lunch on board + soft drinks", ru: "Вкусный обед на борту + напитки", de: "Leckeres Mittagessen an Bord + Softdrinks", ar: "غداء لذيذ على متن السفينة + مشروبات خفيفة" },
      { en: "Guide assistance", ru: "Помощь гида", de: "Führerhilfe", ar: "مساعدة الدليل" }
    ],
    gallery: [
      "/photos/orange-bay-snorkeling/1.jpg",
      "/photos/orange-bay-snorkeling/2.jpg",
      "/photos/orange-bay-snorkeling/10.jpg",
      "/photos/orange-bay-snorkeling/11.jpg",
      "/photos/orange-bay-snorkeling/12.jpg",
      "/photos/orange-bay-snorkeling/13.jpg",
      "/photos/orange-bay-snorkeling/14.jpg",
      "/photos/orange-bay-snorkeling/15.jpg",
      "/photos/orange-bay-snorkeling/16.jpg",
      "/photos/orange-bay-snorkeling/17.jpg",
      "/photos/orange-bay-snorkeling/18.jpg",
      "/photos/orange-bay-snorkeling/19.jpg"
    ]
  },
  {
    id: "90",
    slug: "ozirea-island-snorkeling",
    name: {
      en: "Ozirea Island – Snorkeling & Beach Day",
      ru: "Остров Озирея – снорклинг и пляжный день",
      de: "Ozirea Insel – Schnorcheln & Strandtag",
      ar: "جزيرة أوزيريا – سباحة وشاطئ"
    },
    description: {
      en: "Discover the beautiful and less crowded Ozirea Island, a real gem in the Red Sea. This island is known for its calm turquoise waters, excellent snorkeling spots, and peaceful atmosphere.",
      ru: "Откройте для себя красивый и менее многолюдный остров Озирея — настоящую жемчужину Красного моря. Этот остров известен своими спокойными бирюзовыми водами, превосходными местами для снорклинга и мирной атмосферой.",
      de: "Entdecken Sie die schöne und weniger überfüllte Ozirea Insel, ein echtes Juwel des Roten Meeres. Diese Insel ist bekannt für ihr ruhiges türkisfarbenes Wasser, hervorragende Schnorchelorte und friedliche Atmosphäre.",
      ar: "اكتشف جزيرة أوزيريا الجميلة والأقل ازدحاماً، الجوهرة الحقيقية في البحر الأحمر. تشتهر هذه الجزيرة بمياهها الفيروزية الهادئة، وأماكنها الممتازة للسباحة بالقرب من الشعاب، وأجواءها الهادئة."
    },
    duration: { en: "7-8 hours", ru: "7-8 часов", de: "7-8 Stunden", ar: "7-8 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/ozirea-island-snorkeling/1.jpg",
    rating: 4.8,
    highlights: [
      { en: "Snorkeling at vibrant coral reefs with rich marine life", ru: "Снорклинг на живых коралловых рифах с богатой морской жизнью", de: "Schnorcheln an lebendigen Korallenriffen mit reichem Meeresleben", ar: "السباحة بالقرب من الشعاب المرجانية الغنية بالحياة البحرية" },
      { en: "Relaxing on the soft sandy beach", ru: "Отдых на мягком песчаном пляже", de: "Entspannen am weichen Sandstrand", ar: "الاسترخاء على الشاطئ الرملي الناعم" },
      { en: "Swimming in crystal-clear shallow waters", ru: "Купание в кристально чистых мелких водах", de: "Schwimmen in kristallklarem flachem Wasser", ar: "السباحة في المياه الصافية الضحلة" },
      { en: "Scenic boat ride with beautiful views", ru: "Пейзажная поездка на лодке с красивыми видами", de: "Malerische Bootsfahrt mit schöner Aussicht", ar: "رحلة بحرية مناظر طبيعية جميلة" }
    ],
    included: [
      { en: "Hotel pickup and drop-off", ru: "Трансфер из отеля и обратно", de: "Hotelabholung und Rückfahrt", ar: "التنقل من الفندق وإليه" },
      { en: "Comfortable boat trip", ru: "Комфортабельная поездка на лодке", de: "Komfortable Bootsfahrt", ar: "رحلة بحرية مريحة" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Снаряжение для снорклинга (маска, трубка, ласты)", de: "Schnorchelausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات السباحة بالقرب من الشعاب (قناع، أنبوب، زعانف)" },
      { en: "Lunch on board + soft drinks", ru: "Обед на борту + напитки", de: "Mittagessen an Bord + Softdrinks", ar: "غداء على متن السفينة + مشروبات خفيفة" },
      { en: "Guide assistance", ru: "Помощь гида", de: "Führerhilfe", ar: "مساعدة الدليل" }
    ],
    gallery: [
    ]
  },
  {
    id: "91",
    slug: "parasailing-hurghada",
    name: {
      en: "Parasailing Sea Adventure",
      ru: "Парашютное приключение на море",
      de: "Parasailing Meerabenteuer",
      ar: "مغامرة التحليق بالمظلات الشراعية"
    },
    description: {
      en: "Take your Red Sea experience to new heights with this thrilling Parasailing Adventure! Soar high above the beautiful turquoise waters of Hurghada, enjoying panoramic views of the coastline, coral reefs, and the endless sea.",
      ru: "Поднимите свой опыт на Красном море на новую высоту с этим захватывающим парашютным приключением! Парите над прекрасными бирюзовыми водами Хургады, наслаждаясь панорамными видами побережья, коралловых рифов и бескрайнего моря.",
      de: "Heben Sie Ihr Rotmeer-Erlebnis mit diesem aufregenden Parasailing-Abenteuer auf ein neues Niveau! Schweben Sie hoch über dem wunderschönen türkisfarbenen Wasser von Hurghada und genießen Sie Panoramablicke auf die Küste, Korallenriffe und das endlose Meer.",
      ar: "ارتقِ بتجربتك على البحر الأحمر إلى آفاق جديدة مع هذه المغامرة المثيرة للتحليق بالمظلات الشراعية! الطير فوق المياه الفيروزية الجميلة في الغردقة، واستمتع بالإطلالات البانورامية على الساحل والشعاب المرجانية والبحر اللانهائي."
    },
    duration: { en: "3-4 hours", ru: "3-4 часа", de: "3-4 Stunden", ar: "3-4 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/parasailing-hurghada/1.jpg",
    rating: 4.8,
    highlights: [
      { en: "Parasailing flight (10-15 minutes in the air)", ru: "Полёт на парашюте (10-15 минут в воздухе)", de: "Parasailing-Flug (10-15 Minuten in der Luft)", ar: "رحلة التحليق بالمظلات الشراعية (10-15 دقيقة في الهواء)" },
      { en: "Speedboat ride and safety briefing", ru: "Поездка на катере и инструктаж по безопасности", de: "Speedbootfahrt und Sicherheitsunterweisung", ar: "رحلة بالزورق السريع وتعليمات السلامة" },
      { en: "Relaxing beach time after the flight", ru: "Расслабляющее время на пляже после полёта", de: "Entspannte Strandzeit nach dem Flug", ar: "وقت ممتع على الشاطئ بعد الرحلة" },
      { en: "Delicious lunch with drinks", ru: "Вкусный обед с напитками", de: "Leckeres Mittagessen mit Getränken", ar: "غداء لذيذ مع مشروبات" }
    ],
    included: [
      { en: "Round-trip hotel transfer", ru: "Трансфер из отеля и обратно", de: "Hin- und Rücktransport", ar: "الانتقال من وإلى الفندق" },
      { en: "Parasailing session with professional team", ru: "Сеанс парашютного полёта с профессиональной командой", de: "Parasailing-Sitzung mit professionellem Team", ar: "جلسة التحليق بالمظلات مع فريق محترف" },
      { en: "Safety equipment", ru: "Средства безопасности", de: "Sicherheitsausrüstung", ar: "معدات السلامة" },
      { en: "Beach access and relaxation time", ru: "Доступ к пляжу и время для отдыха", de: "Strandzugang und Entspannungszeit", ar: "الوصول إلى الشاطئ وقت الاسترخاء" },
      { en: "Lunch + soft drinks", ru: "Обед + напитки", de: "Mittagessen + Softdrinks", ar: "غداء + مشروبات خفيفة" }
    ],
    gallery: [
      "/photos/parasailing-hurghada/11.jpg"
    ]
  },
  {
    id: "92",
    slug: "white-island-snorkeling",
    name: {
      en: "White Island – Snorkeling & Beach Paradise",
      ru: "Белый остров – снорклинг и пляжный рай",
      de: "White Island – Schnorcheln & Strandparadies",
      ar: "الجزيرة البيضاء – سباحة وشاطئ جنة"
    },
    description: {
      en: "Discover the stunning White Island, one of the most beautiful and photogenic spots in the Red Sea. This small pristine island features powdery white sand, shallow turquoise lagoons, and excellent snorkeling sites with vibrant coral reefs and colorful fish.",
      ru: "Откройте для себя потрясающий Белый остров — одно из красивейших и самых фотогеничных мест Красного моря. Этот небольшой первозданный остров отличается белоснежным песком, мелкими бирюзовыми лагунами и превосходными местами для снорклинга с живыми коралловыми рифами и разноцветными рыбами.",
      de: "Entdecken Sie die atemberaubende White Island, einen der schönsten und fotogensten Orte des Roten Meeres. Diese kleine unberührte Insel bietet puderweißen Sand, flache türkisfarbene Lagunen und hervorragende Schnorchelstellen mit lebendigen Korallenriffen und bunten Fischen.",
      ar: "اكتشف الجزيرة البيضاء المذهلة، واحدة من أجمل الأماكن وأكثرها صوراً على البحر الأحمر. تتميز هذه الجزيرة الصغيرة النقية بالرمال البيضاء الناعمة، والبحيرات الفيروزية الضحلة، ومواقع سباحة ممتازة بالقرب من الشعاب المرجانية النابضة بالحياة والأسماك الملونة."
    },
    duration: { en: "7-8 hours", ru: "7-8 часов", de: "7-8 Stunden", ar: "7-8 ساعات" },
    price: 40,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/white-island-snorkeling/1.jpg",
    rating: 4.8,
    highlights: [
      { en: "Boat cruise to White Island", ru: "Морская прогулка до Белого острова", de: "Bootsfahrt zur White Island", ar: "رحلة بحرية إلى الجزيرة البيضاء" },
      { en: "Snorkeling in crystal-clear waters", ru: "Снорклинг в кристально чистых водах", de: "Schnorcheln in kristallklarem Wasser", ar: "السباحة في المياه الصافية" },
      { en: "Relaxing time on the white sandy beach", ru: "Расслабляющее время на белоснежном пляже", de: "Entspannte Zeit am weißen Sandstrand", ar: "وقت ممتع على الشاطئ الرملي الأبيض" },
      { en: "Swimming and sunbathing in a tropical setting", ru: "Купание и загорание в тропической обстановке", de: "Schwimmen und Sonnenbaden in tropischer Umgebung", ar: "السباحة والتشمس في بيئة استوائية" }
    ],
    included: [
      { en: "Round-trip hotel transfer", ru: "Трансфер из отеля и обратно", de: "Hin- und Rücktransport", ar: "الانتقال من وإلى الفندق" },
      { en: "Comfortable boat trip", ru: "Комфортабельная поездка на лодке", de: "Komfortable Bootsfahrt", ar: "رحلة بحرية مريحة" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Снаряжение для снорклинга (маска, трубка, ласты)", de: "Schnorchelausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات السباحة بالقرب من الشعاب (قناع، أنبوب، زعانف)" },
      { en: "Lunch on board + soft drinks", ru: "Обед на борту + напитки", de: "Mittagessen an Bord + Softdrinks", ar: "غداء على متن السفينة + مشروبات خفيفة" },
      { en: "Guide assistance", ru: "Помощь гида", de: "Führerhilfe", ar: "مساعدة الدليل" }
    ],
    gallery: [
    ]
  },
  {
    id: "93",
    slug: "paradise-island-snorkeling",
    name: {
      en: "Paradise Island Snorkeling Tour from Hurghada",
      ru: "Снорклинг тур на Остров Рая из Хургады",
      de: "Paradise Island Schnorchel-Tour ab Hurghada",
      ar: "جولة الغطس في جنة الجزيرة من الغردقة"
    },
    description: {
      en: "Escape to Paradise Island, one of the most loved destinations in the Red Sea. This beautiful island offers shallow turquoise waters, vibrant coral gardens, and a true tropical paradise atmosphere. Enjoy fantastic snorkeling among colorful corals and tropical fish, relax on the soft white sandy beach, swim in calm crystal-clear lagoons, and soak up the sun and sea.",
      ru: "Сбегите на Остров Рая — одно из самых любимых направлений Красного моря. Этот прекрасный остров предлагает мелкие бирюзовые воды, яркие коралловые сады и настоящую тропическую атмосферу. Наслаждайтесь снорклингом среди красочных кораллов и тропических рыб, расслабьтесь на мягком белом песчаном пляже, поплавайте в спокойных кристально чистых лагунах.",
      de: "Entfliehen Sie nach Paradise Island, einem der beliebtesten Orte am Roten Meer. Diese wunderschöne Insel bietet flache türkisfarbene Wasser, lebendige Korallengärten und eine echte tropische Atmosphäre. Genießen Sie fantastisches Schnorcheln unter bunt Korallen und tropischen Fischen, entspannen Sie am weichen weißen Sandstrand und schwimmen Sie in ruhigen, kristallklaren Lagunen.",
      ar: "اهرب إلى جنة الجزيرة، واحدة من أكثر الوجهات المحبوبة في البحر الأحمر. تقدم هذه الجزيرة الرائعة مياه فيروزية ضحلة وحدائق مرجانية نابضة بالحياة وأجواء جنة استوائية حقيقية. استمتع بالغطس المذهل بين الشعاب المرجانية الملونة والأسماك الاستوائية، واسترخِ على الشاطئ الرملي الأبيض الناعم، وسبح في البحيرات الهادئة الصافية."
    },
    duration: { en: "7–8 hours", ru: "7–8 часов", de: "7–8 Stunden", ar: "7–8 ساعات" },
    price: 35,
    currency: "EUR",
    category: "Sea Adventures",
    popular: true,
    image: "/photos/white-island-snorkeling/1.jpg",
    rating: 4.7,
    highlights: [
      { en: "Fantastic snorkeling among colorful corals and tropical fish", ru: "Потрясающий снорклинг среди ярких кораллов и тропических рыб", de: "Fantastisches Schnorcheln unter bunten Korallen und tropischen Fischen", ar: "غطس مذهل بين الشعاب المرجانية الملونة والأسماك الاستوائية" },
      { en: "Relaxing on the soft white sandy beach", ru: "Отдых на мягком белом песчаном пляже", de: "Entspannen am weichen weißen Sandstrand", ar: "الاسترخاء على الشاطئ الرملي الأبيض الناعم" },
      { en: "Swimming in calm, crystal-clear lagoons", ru: "Купание в спокойных кристально чистых лагунах", de: "Schwimmen in ruhigen, kristallklaren Lagunen", ar: "السباحة في البحيرات الهادئة الصافية" },
      { en: "Plenty of time to enjoy the sun and sea", ru: "Много времени для отдыха на солнце и в море", de: "Genügend Zeit für Sonne und Meer", ar: "وقت كافٍ للاستمتاع بالشمس والبحر" }
    ],
    included: [
      { en: "Hotel pickup and drop-off", ru: "Трансфер из отеля и обратно", de: "Hoteltransfer hin und zurück", ar: "التوصيل من الفندق وإلى الفندق" },
      { en: "Comfortable boat trip", ru: "Комфортабельная поездка на лодке", de: "Komfortable Bootsfahrt", ar: "رحلة قارب مريحة" },
      { en: "Snorkeling equipment (mask, snorkel, fins)", ru: "Снаряжение для снорклинга (маска, трубка, ласты)", de: "Schnorchelausrüstung (Maske, Schnorchel, Flossen)", ar: "معدات الغطس (قناع، أنبوب، زعانف)" },
      { en: "Tasty lunch on board + soft drinks", ru: "Вкусный обед на борту + безалкогольные напитки", de: "Leckerer Lunch an Bord + Softdrinks", ar: "غداء لذيذ على متن القارب + مشروبات غازية" },
      { en: "Guide assistance", ru: "Сопровождение гида", de: "Begleitung durch einen Guide", ar: "مرشد سياحي" }
    ],
    gallery: [
      "/photos/white-island-snorkeling/9.webp"
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

export function generateWhatsAppLink(
  trip: Trip,
  whatsappNumber: string,
  greeting?: string,
  lang: Language = "en"
): string {
  const tripName = trip.name[lang] || trip.name.en || "";
  const tripDuration = trip.duration[lang] || trip.duration.en || "";
  const priceText = trip.price > 0 ? `Price: €${trip.price}` : "Price: Ask for details";
  const message = encodeURIComponent(
    `${greeting || "Hello"}: ${tripName}\n\nDuration: ${tripDuration}\n${priceText}`
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
}