import type { Language } from "./translations";

export interface BlogPost {
  slug: string;
  category: string;
  readingTime: number; // minutes
  publishedAt: string; // ISO date
  image: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>; // HTML string per language
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-things-to-do-in-hurghada",
    category: "Hurghada",
    readingTime: 7,
    publishedAt: "2026-07-01",
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/10/ELITE8-scaled.jpg",
    title: {
      en: "15 Best Things To Do in Hurghada (2026 Complete Guide)",
      ru: "15 лучших занятий в Хургаде (полный гид 2026)",
      de: "15 Beste Aktivitäten in Hurghada (Kompletter Reiseführer 2026)",
      ar: "أفضل 15 نشاط في الغردقة (دليل شامل 2026)",
    },
    excerpt: {
      en: "From world-class snorkeling on the Red Sea to jaw-dropping desert safaris and day trips to the Pyramids — Hurghada has it all. Here is the definitive 2026 guide to the best activities in Hurghada.",
      ru: "От снорклинга мирового класса на Красном море до захватывающих сафари в пустыне и однодневных поездок к пирамидам — в Хургаде есть всё.",
      de: "Von erstklassigem Schnorcheln im Roten Meer bis zu atemberaubenden Wüstensafaris und Tagesausflügen zu den Pyramiden – Hurghada hat alles.",
      ar: "من الغوص على مستوى عالمي في البحر الأحمر إلى رحلات السفاري الصحراوية المذهلة والرحلات اليومية إلى الأهرامات — الغردقة لديها كل شيء.",
    },
    content: {
      en: `
<h2>Why Hurghada Is Egypt's #1 Resort City</h2>
<p>Hurghada, located on Egypt's Red Sea coast, has transformed from a small fishing village into one of Africa's premier beach destinations. With over 300 days of sunshine per year, crystal-clear turquoise waters, and world-class coral reefs, it's easy to see why millions of tourists flock here annually.</p>
<p>Whether you're a thrill-seeker, a history buff, a family traveller, or a couple looking for a romantic escape, Hurghada delivers experiences you'll talk about for years.</p>

<h2>1. Snorkeling at Giftun Island — The Red Sea's Crown Jewel</h2>
<p>Giftun Island National Park is widely considered one of the top snorkeling destinations in the world. The protected marine reserve is home to over 1,000 species of fish and some of the healthiest coral gardens in the Red Sea. Parrotfish, angelfish, clownfish, and even reef sharks patrol these waters.</p>
<p>A typical Giftun Island trip departs early morning from Hurghada marina, reaches the island in about 40 minutes, and offers 2–3 hours of snorkeling before a beach BBQ lunch. Most operators include equipment, lunch, and hotel transfers.</p>
<p><strong>Best time:</strong> Year-round, but April–June and September–October offer the clearest visibility (20–30m).</p>

<h2>2. Desert Safari by Quad Bike</h2>
<p>The Egyptian desert begins literally 10 minutes from Hurghada's hotels. A quad bike safari takes you into the golden dunes, past ancient Bedouin settlements, to a traditional dinner under a blanket of stars. The Super Safari — Hurghada's most popular excursion — combines quad bikes, camel rides, sandboarding, and a Bedouin dinner with live folklore music.</p>

<h2>3. Day Trip to the Cairo Pyramids</h2>
<p>The Pyramids of Giza are only 5–6 hours by bus or 45 minutes by flight from Hurghada. A well-organized day trip (or overnight tour) lets you visit the Great Pyramid of Khufu, the Sphinx, the Grand Egyptian Museum, and the Khan El Khalili bazaar all in one go.</p>
<p>This is non-negotiable if it's your first time in Egypt. No trip is complete without standing at the foot of one of the Seven Wonders of the Ancient World.</p>

<h2>4. Luxor Day Trip — Valley of the Kings</h2>
<p>Luxor, the world's greatest open-air museum, sits 4 hours south of Hurghada. A day trip covers the Valley of the Kings (Tutankhamun's tomb), the Karnak Temple complex, and the Colossi of Memnon. History enthusiasts often call Luxor one of the most emotionally overwhelming places on Earth.</p>

<h2>5. Dolphin Watching in the Open Sea</h2>
<p>Wild spinner dolphins are frequently spotted off the coast of Hurghada and Marsa Alam. Unlike dolphin parks, these encounters are completely natural — pods of 50–200 dolphins regularly surface around slow-moving boats. A dolphin house boat trip typically lasts 4–5 hours and includes a snorkeling stop at a nearby reef.</p>

<h2>6. Submarine Tour (Semi-Sub)</h2>
<p>For those who don't want to get wet, a semi-submarine tour lets you descend 2–3 metres below the surface in an air-conditioned cabin with panoramic windows. You'll glide over coral gardens and schools of fish in total comfort. Perfect for elderly travellers and young children.</p>

<h2>7. Parasailing Over the Red Sea</h2>
<p>Strap into a harness and soar 80–150 metres above the Red Sea's impossibly blue water. The views of the Hurghada coastline, the distant mountains, and the coral patterns below are simply stunning. Tandem parasailing means even nervous fliers can enjoy it safely.</p>

<h2>8. Marsa Alam & Dugong Snorkeling</h2>
<p>Abu Dabbab Bay, 100km south of Hurghada, is one of only a handful of places in the world where you can reliably snorkel with wild dugongs (sea cows) and endangered green sea turtles. The bay's shallow seagrass meadows are their feeding ground. This trip is best done as a full-day excursion from Hurghada.</p>

<h2>9. Luxury Yacht Sunset Cruise</h2>
<p>Rent a private yacht for a sunset cruise along the coastline. Premium operators like Golden Horizont Egypt offer gourmet dining on deck, snorkeling at exclusive spots, and open bar packages. Perfect for honeymoons, anniversaries, and corporate events.</p>

<h2>10. Hurghada Marina & Old Town</h2>
<p>The new Hurghada Marina is a stunning promenade lined with restaurants, boutiques, and cafés. The El Dahar old town, by contrast, is a maze of authentic Egyptian shops, spice markets, and traditional cafés. Combine both for a full day of exploration.</p>

<h2>11. Scuba Diving Courses for Beginners</h2>
<p>Hurghada is one of the world's most accessible scuba diving destinations. PADI Open Water courses run year-round, with calm warm water (25–30°C), excellent visibility, and qualified English/German/Russian-speaking instructors. Most resorts offer a discovery dive on day one, with a full certification achievable in 3–4 days.</p>

<h2>12. Glass-Bottom Boat Tour</h2>
<p>The most family-friendly way to explore the reef is a glass-bottom boat. No swimming required. You simply sit in the boat and watch the underwater world pass beneath you through a large glass viewing panel. Ideal for toddlers, non-swimmers, and anyone with mobility limitations.</p>

<h2>13. Fishing Trip on the Red Sea</h2>
<p>Sport fishing in the Red Sea is thrilling. Common catches include tuna, barracuda, grouper, and dorado. Trips depart at dawn and return by early afternoon. Equipment, bait, and a fishing guide are always included.</p>

<h2>14. Hurghada Grand Aquarium</h2>
<p>With 1,200+ species of Red Sea marine life on display, the Hurghada Grand Aquarium is ideal for a half-day visit — especially if the weather turns rough. The underwater tunnel walk and the jellyfish chamber are highlights for children.</p>

<h2>15. Aswan & Nile Felucca Weekend</h2>
<p>For those with more time, a 3-day Aswan trip is the ultimate luxury. Sail a traditional felucca on the Nile, visit the Philae Temple, the Aswan High Dam, and the Nubian villages with their vibrant painted houses. Golden Horizont Egypt runs a 3-day Royal Escape package that covers all of this.</p>

<h2>How To Book Hurghada Tours</h2>
<p>The easiest way to book any of these experiences is directly via <a href="https://goldenhorizontegypt.com">Golden Horizont Egypt</a>. We offer all 31+ excursions with hotel pickup, professional guides, and instant WhatsApp confirmation. No travel agents, no commission markups — just direct booking with the operator.</p>
<p>Browse our <a href="/#trips">full tour catalogue</a> or message us on WhatsApp for a custom itinerary.</p>
      `,
      ru: `<h2>Почему Хургада — курорт №1 в Египте</h2><p>Хургада превратилась из небольшой рыбацкой деревни в один из ведущих пляжных курортов Африки. Более 300 солнечных дней в году, кристально чистые воды и коралловые рифы мирового класса привлекают миллионы туристов ежегодно.</p><h2>1. Снорклинг на острове Гифтун</h2><p>Национальный парк острова Гифтун — одно из лучших мест для снорклинга в мире. Здесь обитают более 1000 видов рыб и одни из самых здоровых коралловых садов Красного моря.</p><h2>2. Сафари на квадроциклах</h2><p>Египетская пустыня начинается в 10 минутах от отелей Хургады. Поездка на квадроцикле уносит вас в золотые дюны, к бедуинским поселениям и под звёздное небо.</p><h2>3. Однодневная поездка к пирамидам Каира</h2><p>Пирамиды Гизы находятся в 5–6 часах езды на автобусе от Хургады. Хорошо организованная экскурсия включает Большую пирамиду, Сфинкс, Большой Египетский музей и базар Хан Эль Халили.</p><p>Забронируйте любую экскурсию напрямую через <a href="https://goldenhorizontegypt.com">Golden Horizont Egypt</a>.</p>`,
      de: `<h2>Warum Hurghada Ägyptens #1-Urlaubsstadt ist</h2><p>Hurghada hat sich von einem kleinen Fischerdorf zu einem der besten Strandziele Afrikas entwickelt. Mit über 300 Sonnentagen im Jahr, kristallklarem Wasser und weltklassigen Korallenriffen ist es leicht zu verstehen, warum Millionen von Touristen jährlich hierher kommen.</p><h2>1. Schnorcheln bei Giftun Island</h2><p>Der Giftun-Island-Nationalpark gilt weithin als eines der besten Schnorchelorte der Welt. Das geschützte Meeresschutzgebiet beherbergt über 1.000 Fischarten.</p><h2>2. Wüstensafari mit Quad</h2><p>Die ägyptische Wüste beginnt buchstäblich 10 Minuten von Hurgadas Hotels entfernt. Eine Quad-Safari führt Sie durch die goldenen Dünen zu einem Beduinen-Abendessen unter dem Sternenhimmel.</p><p>Buchen Sie alle Touren direkt bei <a href="https://goldenhorizontegypt.com">Golden Horizont Egypt</a>.</p>`,
      ar: `<h2>لماذا الغردقة هي مدينة المنتجعات الأولى في مصر</h2><p>تحولت الغردقة من قرية صيد صغيرة إلى واحدة من أبرز وجهات الشواطئ في أفريقيا. مع أكثر من 300 يوم مشمس في السنة ومياه فيروزية صافية وشعاب مرجانية على مستوى عالمي، من السهل فهم سبب توافد ملايين السياح هنا سنوياً.</p><h2>1. الغوص في جزيرة جفتون</h2><p>تُعدّ محمية جزيرة جفتون الوطنية واحدة من أفضل مناطق الغوص في العالم، وموطناً لأكثر من 1000 نوع من الأسماك.</p><h2>2. سفاري الصحراء بالدراجات الرباعية</h2><p>تبدأ الصحراء المصرية على بُعد 10 دقائق فقط من فنادق الغردقة. رحلة الدراجة الرباعية تأخذك عبر الكثبان الرملية الذهبية إلى عشاء بدوي تحت النجوم.</p><p>احجز أي جولة مباشرةً عبر <a href="https://goldenhorizontegypt.com">Golden Horizont Egypt</a>.</p>`,
    },
  },
  {
    slug: "marsa-alam-dive-sites-guide",
    category: "Marsa Alam",
    readingTime: 6,
    publishedAt: "2026-07-08",
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/09/96a29fd2-0b31-4717-85e5-06f3f9f98463.webp",
    title: {
      en: "Marsa Alam Dive Sites Guide: Top Spots for 2026",
      ru: "Гид по дайв-сайтам Марса-Алам: лучшие места 2026",
      de: "Marsa Alam Tauchplätze Guide: Top Spots für 2026",
      ar: "دليل مواقع الغوص في مرسى علم: أفضل الأماكن لعام 2026",
    },
    excerpt: {
      en: "Marsa Alam is Egypt's last unspoiled dive paradise. From wild dolphins at Dolphin House to sea turtles at Abu Dabbab — this is the complete diver's guide to Marsa Alam's best sites.",
      ru: "Марса-Алам — последний нетронутый рай для дайверов в Египте. От диких дельфинов в Доме Дельфинов до морских черепах в Абу Даббабе.",
      de: "Marsa Alam ist Ägyptens letztes unberührtes Tauch-Paradies.",
      ar: "مرسى علم هي آخر جنة غوص بكر في مصر.",
    },
    content: {
      en: `
<h2>Why Marsa Alam Is a Diver's Paradise</h2>
<p>Located 200km south of Hurghada, Marsa Alam has remained relatively undeveloped compared to its northern neighbour. This means richer marine life, less boat traffic, and dive sites still in near-pristine condition. Water visibility regularly exceeds 30 metres, and the coral coverage is among the best in the Red Sea.</p>

<h2>Dolphin House (Sha'ab Samadai)</h2>
<p>Sha'ab Samadai — known universally as Dolphin House — is a horseshoe-shaped reef enclosing a sheltered lagoon where a resident pod of 80–200 spinner dolphins live year-round. Unlike tourist dolphin encounters elsewhere, these animals are completely wild and choose to interact with snorkelers on their own terms. The Egyptian Environmental Affairs Agency strictly regulates access: only one third of the lagoon is open to swimmers, and dolphins can leave freely.</p>
<p><strong>Best for:</strong> Snorkelers, beginner divers, families</p>
<p><strong>Depth:</strong> 5–18m</p>

<h2>Abu Dabbab Bay — Sea Turtles & Dugongs</h2>
<p>Abu Dabbab is one of the world's most reliable places to see wild dugongs (manatee-like sea mammals) and endangered green sea turtles. The bay's extensive seagrass meadows provide their main food source. Visibility is typically 15–20m, and the bay is protected from waves, making it ideal for beginner snorkelers.</p>
<p><strong>Best for:</strong> Snorkelers, underwater photographers</p>
<p><strong>Highlight:</strong> Dugong sightings (especially early morning)</p>

<h2>Elphinstone Reef — Egypt's Premier Wall Dive</h2>
<p>Elphinstone is an offshore reef that drops from the surface to 70m+ on both sides. The north and south plateaux are famous for oceanic white-tip shark encounters (August–October). The reef's walls are carpeted in soft corals, and large schools of tuna, barracuda, and jackfish are a constant presence.</p>
<p><strong>Best for:</strong> Advanced divers</p>
<p><strong>Depth:</strong> 20–70m+</p>
<p><strong>Warning:</strong> Strong currents possible; guide mandatory</p>

<h2>Wadi El Gemal National Park</h2>
<p>The Wadi El Gemal National Park encompasses 7,450 km² of desert, coastal, and marine habitat. The offshore reefs here are entirely intact — no anchor damage, no bleaching — because the area only opened to tourism in the late 2000s. Hawksbill turtles, eagle rays, and napoleon wrasse are regularly spotted.</p>

<h2>Shaab Marsa Alam (Marsa Mubarak)</h2>
<p>Marsa Mubarak is a sheltered lagoon with resident sea turtles that have learned to tolerate respectful human presence. You'll often see 3–5 turtles in a single snorkel session, resting on the seabed or surfacing for air. The adjacent reef has excellent coral coverage.</p>

<h2>How To Get To Marsa Alam From Hurghada</h2>
<p>Marsa Alam is 200km south of Hurghada — about 2 hours by minivan. Golden Horizont Egypt runs full-day excursions from Hurghada to all of the above sites, with hotel pickup, equipment, lunch, and professional guides who speak English, Russian, German, and Arabic.</p>
<p>Browse the <a href="/trip/abydos-dendera-temples">Abydos & Dendera Temples trip</a> and the <a href="/trip/elite-vip-marsa-alam">Elite VIP Yacht trip</a> in our tour catalogue.</p>
      `,
      ru: `<h2>Почему Марса-Алам — рай для дайверов</h2><p>Расположенный в 200 км к югу от Хургады, Марса-Алам остаётся относительно нетронутым. Видимость под водой регулярно превышает 30 метров, а коралловые покрытия являются одними из лучших на Красном море.</p><h2>Дом Дельфинов (Ша'аб Самадай)</h2><p>Дом Дельфинов — подковообразный риф, окружающий укромную лагуну, где живёт резидентная группа из 80–200 дельфинов-спиннеров круглый год. Посмотрите наш тур <a href="/trip/elite-vip-marsa-alam">Элитная VIP яхта</a>.</p><h2>Бухта Абу Даббаб — морские черепахи и дюгони</h2><p>Абу Даббаб — одно из самых надёжных мест в мире, где можно встретить диких дюгоней и находящихся под угрозой исчезновения зелёных морских черепах. Забронируйте <a href="/trip/abydos-dendera-temples">тур в Абидос и Дендеру</a>.</p>`,
      de: `<h2>Warum Marsa Alam ein Tauch-Paradies ist</h2><p>Marsa Alam, 200 km südlich von Hurghada, ist im Vergleich zu seinem nördlichen Nachbarn relativ unentwickelt geblieben. Die Sichtweite überschreitet regelmäßig 30 Meter.</p><h2>Dolphin House (Sha'ab Samadai)</h2><p>Sha'ab Samadai ist ein hufeisenförmiges Riff mit einer ansässigen Gruppe von 80–200 Spinner-Delfinen. Entdecken Sie unsere <a href="/trip/elite-vip-marsa-alam">Elite VIP-Yacht Tour</a>.</p>`,
      ar: `<h2>لماذا مرسى علم جنة للغواصين</h2><p>تقع مرسى علم على بُعد 200 كم جنوب الغردقة، وقد ظلت غير مطورة نسبياً مقارنة بجارتها الشمالية. تتجاوز الرؤية تحت الماء 30 متراً بانتظام.</p><h2>بيت الدلافين (شعب سمادي)</h2><p>بيت الدلافين هو شعاب مرجانية على شكل حدوة حصان تضم مجموعة من 80 إلى 200 دلفين. اكتشف <a href="/trip/elite-vip-marsa-alam">جولة اليخت الفاخر VIP</a>.</p>`,
    },
  },
  {
    slug: "cairo-pyramids-day-trip-from-hurghada",
    category: "Cairo",
    readingTime: 5,
    publishedAt: "2026-07-14",
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/download-3.jpg",
    title: {
      en: "Cairo Pyramids Day Trip From Hurghada: The Complete 2026 Guide",
      ru: "Однодневная поездка к пирамидам Каира из Хургады: полный гид 2026",
      de: "Kairo Pyramiden Tagesausflug von Hurghada: Der vollständige 2026-Führer",
      ar: "رحلة يوم واحد إلى أهرامات القاهرة من الغردقة: الدليل الكامل 2026",
    },
    excerpt: {
      en: "Everything you need to know about visiting the Cairo Pyramids on a day trip from Hurghada — bus vs. flight, what to see, what to skip, and how to book the best-value tour.",
      ru: "Всё, что нужно знать о посещении пирамид Каира в однодневной поездке из Хургады — автобус или самолёт, что смотреть и как забронировать лучший тур.",
      de: "Alles, was Sie über einen Tagesausflug zu den Kairo-Pyramiden von Hurghada wissen müssen.",
      ar: "كل ما تحتاج معرفته عن زيارة أهرامات القاهرة في رحلة يوم واحد من الغردقة.",
    },
    content: {
      en: `
<h2>Can You Visit the Cairo Pyramids From Hurghada in One Day?</h2>
<p>Yes — absolutely. While 2 days is ideal, a well-organized day trip to Cairo from Hurghada is very achievable. Thousands of tourists do it every week. The key is choosing the right transport method and a tour operator who runs a tight, efficient itinerary.</p>

<h2>Bus vs. Flight: Which Is Better?</h2>

<h3>By Bus (Recommended for budget travellers)</h3>
<ul>
  <li><strong>Journey time:</strong> 5–6 hours each way</li>
  <li><strong>Cost:</strong> Included in most budget tour packages (€70–80/person)</li>
  <li><strong>Comfort:</strong> Modern air-conditioned coaches with reclining seats</li>
  <li><strong>Departs:</strong> Usually 3:00–4:00 AM from your hotel</li>
  <li><strong>Returns:</strong> Usually 11:00 PM–midnight</li>
</ul>
<p>The early departure sounds painful, but you'll sleep on the bus and arrive in Cairo just as the site opens. The return journey is at night, so you sleep again. Most people are pleasantly surprised by how manageable it is.</p>

<h3>By Flight (Premium option)</h3>
<ul>
  <li><strong>Journey time:</strong> 45 minutes</li>
  <li><strong>Cost:</strong> Significantly higher; flight + transfers + tour</li>
  <li><strong>Best for:</strong> Families with small children, elderly travellers, or anyone who wants maximum time at the sites</li>
</ul>

<h2>What To See on a Cairo Day Trip</h2>

<h3>The Giza Pyramid Complex</h3>
<p>The Three Pyramids of Giza — Khufu, Khafre, and Menkaure — are the only surviving Seven Wonders of the Ancient World. They were built over 4,500 years ago with a precision that still baffles modern engineers. Allow 2–3 hours to explore the complex.</p>
<p>The Great Pyramid of Khufu is the largest — 138.8m tall, built from 2.3 million stone blocks. You can pay extra to enter the inner chamber (claustrophobic, but extraordinary).</p>

<h3>The Great Sphinx</h3>
<p>Carved from a single limestone outcrop, the Sphinx is 73.5m long and 20.2m tall. The viewing area is just a short walk from the pyramids. Best photography angle: stand slightly to the left with a pyramid behind the Sphinx.</p>

<h3>The Grand Egyptian Museum (GEM)</h3>
<p>Opened in 2023, the GEM is the world's largest archaeological museum, housing over 100,000 artefacts including the complete treasures of Tutankhamun — the golden mask, the golden throne, the royal chariot — in person for the first time. Budget 1.5–2 hours here minimum.</p>

<h3>What To Skip on a Day Trip</h3>
<p>Cairo itself is a 20-million-person megacity. On a day trip, skip the old Cairo churches, the Citadel, and the Khan El Khalili bazaar (save these for an overnight trip). Stay focused on Giza + GEM.</p>

<h2>What's Typically Included in a Golden Horizont Egypt Cairo Tour</h2>
<ul>
  <li>✅ Hotel pickup from Hurghada in AC bus or private van</li>
  <li>✅ English/Russian/German/Arabic-speaking guide</li>
  <li>✅ Giza Pyramids entrance fee</li>
  <li>✅ Grand Egyptian Museum entrance fee</li>
  <li>✅ Lunch at a local restaurant</li>
  <li>✅ Hotel drop-off</li>
  <li>❌ Camel ride (extra, priced on-site)</li>
  <li>❌ Interior pyramid entry (extra, limited tickets)</li>
</ul>

<h2>Tips for the Pyramid Visit</h2>
<ul>
  <li><strong>Wear sunscreen and a hat.</strong> There is almost zero shade at the plateau.</li>
  <li><strong>Bring cash (EGP).</strong> Card payments are not accepted at most vendors.</li>
  <li><strong>Say no firmly to touts.</strong> Unofficial guides and camel-rental men will approach you aggressively. A firm "no thank you" works.</li>
  <li><strong>Photography:</strong> The Giza plateau is entirely open to photography. The GEM charges extra for professional camera equipment.</li>
</ul>

<h2>Book Your Cairo Day Trip</h2>
<p>Golden Horizont Egypt runs Cairo tours on a daily basis, departing from all Hurghada hotels. We offer both bus group tours (€70–80/person) and private van options (€100–120/person) with more flexibility and a personal guide.</p>
<p>Browse our <a href="/trip/cairo-bus-trip">Cairo Bus Tour</a>, or message us on WhatsApp to customise your itinerary.</p>
      `,
      ru: `<h2>Можно ли посетить пирамиды Каира из Хургады за один день?</h2><p>Да — абсолютно. Хотя 2 дня идеально, хорошо организованная однодневная поездка в Каир из Хургады вполне реальна. Тысячи туристов делают это каждую неделю.</p><h2>Автобус против самолёта</h2><p>Автобус занимает 5–6 часов, но вы спите во время поездки. Самолёт — 45 минут, но значительно дороже.</p><h2>Что посмотреть</h2><p>Пирамидный комплекс Гизы, Сфинкс и Большой Египетский музей — обязательные объекты. Забронируйте наш <a href="/trip/cairo-bus-trip">Автобусный тур в Каир</a>.</p>`,
      de: `<h2>Kann man die Kairo-Pyramiden von Hurghada aus an einem Tag besuchen?</h2><p>Ja – absolut. Ein gut organisierter Tagesausflug nach Kairo von Hurghada ist sehr machbar. Tausende von Touristen machen es jede Woche.</p><h2>Bus vs. Flug</h2><p>Der Bus dauert 5–6 Stunden, aber Sie schlafen während der Fahrt. Das Flugzeug braucht 45 Minuten, ist aber deutlich teurer.</p><p>Buchen Sie unsere <a href="/trip/cairo-bus-trip">Kairo Bus-Tour</a>.</p>`,
      ar: `<h2>هل يمكنك زيارة أهرامات القاهرة من الغردقة في يوم واحد؟</h2><p>نعم — بالتأكيد. رغم أن يومين هو الأمثل، فإن رحلة يومية منظمة جيداً إلى القاهرة من الغردقة ممكنة تماماً.</p><h2>الحافلة مقابل الطائرة</h2><p>تستغرق الحافلة 5-6 ساعات لكنك تنام خلال الرحلة. الطائرة 45 دقيقة لكنها أغلى بكثير.</p><p>احجز <a href="/trip/cairo-bus-trip">جولة الحافلة إلى القاهرة</a>.</p>`,
    },
  },
  {
    slug: "luxor-in-one-day-complete-guide",
    category: "Luxor",
    readingTime: 6,
    publishedAt: "2026-07-15",
    image: "https://goldenhorizontegypt.com/wp-content/uploads/2025/11/Ramses_II_in_Luxor_Temple.jpg",
    title: {
      en: "Luxor in One Day: The Complete 2026 Itinerary From Hurghada",
      ru: "Луксор за один день: полный маршрут из Хургады 2026",
      de: "Luxor an einem Tag: Das vollständige 2026-Reiseprogramm von Hurghada",
      ar: "الأقصر في يوم واحد: الجدول الزمني الكامل من الغردقة 2026",
    },
    excerpt: {
      en: "Luxor is the world's greatest open-air museum. Here's how to see the Valley of the Kings, Karnak Temple, and Luxor Temple all in one incredible day trip from Hurghada.",
      ru: "Луксор — величайший в мире музей под открытым небом. Вот как посмотреть Долину Царей, храм Карнак и храм Луксора за один день.",
      de: "Luxor ist das größte Freilichtmuseum der Welt. Hier erfahren Sie, wie Sie das Tal der Könige, den Karnak-Tempel und den Luxor-Tempel an einem Tag sehen können.",
      ar: "الأقصر هي أعظم متحف في العالم تحت السماء المفتوحة. إليك كيفية رؤية وادي الملوك ومعبد الكرنك ومعبد الأقصر في يوم واحد.",
    },
    content: {
      en: `
<h2>Luxor: Egypt's Greatest Historical City</h2>
<p>Luxor, known in antiquity as Thebes, was the capital of Egypt during the New Kingdom period (1550–1070 BC) — the most powerful empire on Earth at the time. Today it contains one-third of the world's ancient monuments. UNESCO has called it "the world's greatest open-air museum."</p>
<p>A Luxor day trip from Hurghada is 4 hours by bus each way, making it a long but very rewarding excursion. Many travellers say it was the highlight of their entire Egypt holiday.</p>

<h2>The Perfect Luxor One-Day Itinerary</h2>

<h3>Morning (7:00 AM – 12:00 PM): West Bank</h3>

<h4>Valley of the Kings</h4>
<p>The Valley of the Kings is a dry desert canyon on Luxor's west bank where pharaohs of the New Kingdom were buried in elaborate rock-cut tombs for 500 years. 63 tombs have been discovered here, including the famous tomb of Tutankhamun (KV62). Your entry ticket includes access to 3 tombs.</p>
<p>Must-see tombs: Ramesses VI (KV9) for its astronomical ceiling, Seti I (KV17) for the finest painted reliefs in Egypt, and Tutankhamun (KV62) — extra ticket required but essential.</p>

<h4>Temple of Hatshepsut</h4>
<p>Queen Hatshepsut's mortuary temple rises from the desert cliff in three colonnaded terraces. It's one of the most dramatic architectural achievements of the ancient world and remarkably well-preserved. Allow 30–45 minutes.</p>

<h4>Colossi of Memnon</h4>
<p>Two enormous 18-metre seated statues of Pharaoh Amenhotep III guard the entrance to what was once the largest temple in Egypt. They're now freestanding in a field — a surreal and photogenic sight. Free to photograph from the road.</p>

<h3>Afternoon (1:00 PM – 5:00 PM): East Bank</h3>

<h4>Karnak Temple Complex</h4>
<p>Karnak is not one temple but a vast complex of temples, chapels, pylons, and obelisks built over 2,000 years by 30 successive pharaohs. The Hypostyle Hall — 134 columns up to 23m tall — is one of the most awe-inspiring architectural spaces in human history. Photography permitted everywhere.</p>
<p>Allow 1.5–2 hours. Hire a guide here — the symbolism and history are so dense that it's very hard to appreciate without explanation.</p>

<h4>Luxor Temple</h4>
<p>Luxor Temple sits right on the Nile corniche in the centre of modern Luxor city. It's been a place of worship for 3,300 years continuously — first Egyptian, then Greek, then Roman, then Coptic Christian, then Islamic (there is still an active mosque inside the temple complex). The avenue of sphinxes connecting it to Karnak stretches 2.7km. Stunning at sunset and fully lit at night.</p>

<h2>Luxor Day Trip: Key Practical Info</h2>
<table>
  <thead><tr><th>Detail</th><th>Info</th></tr></thead>
  <tbody>
    <tr><td>Distance from Hurghada</td><td>~290 km (4 hours by bus)</td></tr>
    <tr><td>Best time to visit</td><td>October–April (summer is extremely hot, 40°C+)</td></tr>
    <tr><td>Currency at sites</td><td>Egyptian Pounds (EGP) for vendors; entrance fees can be paid in USD/EUR</td></tr>
    <tr><td>Dress code</td><td>Shoulders and knees covered at temple sites</td></tr>
    <tr><td>Photography</td><td>Permitted; extra fee for KV62 (Tutankhamun's tomb)</td></tr>
  </tbody>
</table>

<h2>Luxor Excursions From Hurghada</h2>
<p>Golden Horizont Egypt runs several Luxor options:</p>
<ul>
  <li><a href="/trip/luxor-premium-minibus"><strong>Luxor Bus Tour</strong></a> — Group bus, Valley of Kings + Karnak + Luxor Temple, lunch included. Most affordable option.</li>

  <li><a href="/trip/luxor-hot-air-balloon-premium-minibus"><strong>Luxor Hot Air Balloon at Sunrise</strong></a> — Float above the Valley of the Kings at dawn. Extraordinary experience.</li>
</ul>
      `,
      ru: `<h2>Луксор: величайший исторический город Египта</h2><p>Луксор, известный в древности как Фивы, был столицей Египта в период Нового Царства (1550–1070 до н.э.). Сегодня здесь находится треть древних памятников мира.</p><h2>Долина Царей</h2><p>Долина Царей — это сухой пустынный каньон на западном берегу Луксора, где фараоны Нового Царства были погребены в роскошных вырубленных в скале гробницах. Ваш входной билет включает доступ к 3 гробницам.</p><h2>Храмовый комплекс Карнак</h2><p>Карнак — это не один храм, а огромный комплекс, построенный 30 фараонами на протяжении 2000 лет. Гипостильный зал с 134 колоннами высотой до 23 м — одно из самых впечатляющих архитектурных пространств в истории человечества.</p><p>Забронируйте наш <a href="/trip/luxor-premium-minibus">Автобусный тур в Луксор</a>.</p>`,
      de: `<h2>Luxor: Ägyptens größte historische Stadt</h2><p>Luxor, im Altertum als Theben bekannt, war die Hauptstadt Ägyptens während des Neuen Reiches (1550–1070 v. Chr.). Heute enthält es ein Drittel der antiken Denkmäler der Welt.</p><h2>Tal der Könige</h2><p>Das Tal der Könige ist ein trockenes Wüstencanyon am Westufer von Luxor, wo Pharaonen 500 Jahre lang in aufwändigen Felsengräbern begraben wurden.</p><p>Buchen Sie unsere <a href="/trip/luxor-premium-minibus">Luxor Bus-Tour</a>.</p>`,
      ar: `<h2>الأقصر: أعظم مدينة تاريخية في مصر</h2><p>الأقصر، المعروفة في العصور القديمة بطيبة، كانت عاصمة مصر خلال فترة المملكة الحديثة (1550-1070 قبل الميلاد). اليوم تحتوي على ثلث آثار العالم القديم.</p><h2>وادي الملوك</h2><p>وادي الملوك وادٍ صحراوي جاف على الضفة الغربية للأقصر حيث دُفن فراعنة المملكة الحديثة في مقابر منحوتة في الصخر. تشمل بطاقة الدخول الوصول إلى 3 مقابر.</p><p>احجز <a href="/trip/luxor-premium-minibus">جولة الأقصر بالحافلة</a>.</p>`,
    },
  },
  {
    slug: "top-10-things-to-do-in-hurghada",
    category: "Hurghada",
    readingTime: 6,
    publishedAt: "2026-07-27",
    image: "/photos/city-tour-hurghada/1.jpg",
    title: {
      en: "Top 10 Things To Do In Hurghada: The Ultimate 2026 Checklist",
      ru: "Топ-10 развлечений в Хургаде: главный чек-лист на 2026 год",
      de: "Top 10 Aktivitäten in Hurghada: Die ultimative Checkliste für 2026",
      ar: "أفضل 10 أنشطة يمكنك القيام بها في الغردقة: الدليل الشامل لعام 2026"
    },
    excerpt: {
      en: "Planning a trip to Hurghada? Here is the absolute top 10 list of experiences you cannot miss, from crystal-clear marine reserves to heart-pounding desert rides.",
      ru: "Планируете поездку в Хургаду? Вот 10 главных развлечений, которые нельзя пропустить: от чистейших заповедников до захватывающего сафари.",
      de: "Planen Sie eine Reise nach Hurghada? Hier ist die absolute Top-10-Liste der Erlebnisse, die Sie nicht verpassen dürfen.",
      ar: "هل تخطط لزيارة الغردقة؟ إليك أفضل 10 أنشطة وتجارب لا يمكنك تفويتها خلال عطلتك."
    },
    content: {
      en: `
<h2>The Ultimate Hurghada Checklist</h2>
<p>Whether you're visiting Egypt for the first time or returning to the beautiful shores of the Red Sea, Hurghada offers an incredible mix of adventure, history, relaxation, and culture. To help you plan your vacation, we've compiled the definitive top 10 experiences that every traveler should check off their list.</p>

<h3>1. Snorkeling at Giftun Island National Park</h3>
<p>No trip to Hurghada is complete without visiting Giftun Island. Renowned for its powdery white sands and vibrant surrounding reefs, it's the perfect spot to snorkel alongside parrotfish, sea turtles, and colorful corals. Our <a href="/trip/orange-bay-snorkeling">Orange Bay Snorkeling</a> trip is the most popular way to experience this paradise.</p>

<h3>2. Quad Bike Desert Safari</h3>
<p>Trade the sea for the sand and head into the Eastern Desert on a quad bike. Feel the rush as you speed over sand dunes, watch the sunset behind the rugged mountains, and enjoy a traditional Bedouin dinner under the stars. Check out the <a href="/trip/super-safari-desert">Super Safari Desert Adventure</a> for the full experience.</p>

<h3>3. Day Trip to the Cairo Pyramids</h3>
<p>Take advantage of your proximity to Cairo to see the Great Pyramids of Giza, the Sphinx, and the treasures of the Grand Egyptian Museum. It's a journey through time that you will remember forever. You can book our comfortable <a href="/trip/cairo-classic-bus">Cairo Classic Bus Tour</a> to go there and back in one day.</p>

<h3>4. Discover the Ancient Temples of Luxor</h3>
<p>Luxor is the world's greatest open-air museum. Visit the Valley of the Kings, walk through the towering columns of Karnak Temple, and see the Temple of Queen Hatshepsut. Our <a href="/trip/luxor-premium-minibus">Luxor Premium Minibus Tour</a> makes it easy to explore these wonders with a professional guide.</p>

<h3>5. Swin at the Dolphin House Reef</h3>
<p>Witness spinner dolphins swimming in their natural habitat. The Dolphin House reef is a protected sanctuary where wild dolphin pods gather. Snorkeling here is an unforgettable, magical experience.</p>

<h3>6. Explore Under the Sea in a Submarine</h3>
<p>If you prefer not to swim, you can still witness the Red Sea's famous marine life. Board a submarine or semi-submarine tour to descend below the waves and view the corals and fish through panoramic glass windows.</p>

<h3>7. Fly High with Parasailing</h3>
<p>Enjoy a bird's-eye view of Hurghada's turquoise waters and resort coastline. Parasailing offers a thrilling yet peaceful flight high above the Red Sea. Perfect for couples and families alike!</p>

<h3>8. Horse Riding along the Coast or Desert</h3>
<p>Experience the beauty of Hurghada on horseback. Whether you choose to ride along the sandy beaches at sunset or traverse the desert canyons, it's a beautiful way to connect with Egypt's natural landscapes.</p>

<h3>9. Walk the Hurghada Marina Boulevard</h3>
<p>For a relaxed evening, stroll along the Hurghada Marina. Lined with beautiful yachts, fine-dining restaurants, and chic cafes, it's the perfect place to enjoy a cocktail and watch the sunset.</p>

<h3>10. Visit El Dahar (Old Town) Souk</h3>
<p>Immerse yourself in local culture by visiting the historical heart of Hurghada. Explore the traditional bazaar in El Dahar, negotiate for spices, perfumes, and souvenirs, and enjoy a traditional Egyptian tea in a local cafe.</p>

<p>Ready to book your adventure? Contact <a href="https://goldenhorizontegypt.com">Golden Horizont Egypt</a> on WhatsApp today to secure your spots!</p>
      `,
      ru: `
<h2>Главный чек-лист развлечений в Хургаде</h2>
<p>Хургада предлагает невероятное сочетание приключений, истории, отдыха и культуры. Мы собрали 10 лучших занятий, которые должен попробовать каждый путешественник.</p>
<h3>1. Снорклинг на острове Гифтун</h3><p>Посетите заповедник остров Гифтун с белоснежным песком и бирюзовой водой.</p>
<h3>2. Сафари на квадроциклах в пустыне</h3><p>Устройте гонку по барханам и поужинайте в бедуинской деревне под звёздным небом.</p>
<h3>3. Однодневная поездка к Пирамидам Каира</h3><p>Посетите великие пирамиды Гизы, Сфинкса и Большой Египетский музей.</p>
<p>Забронируйте туры напрямую на <a href="https://goldenhorizontegypt.com">Golden Horizont Egypt</a> через WhatsApp.</p>
      `,
      de: `
<h2>Die ultimative Hurghada-Checkliste</h2>
<p>Hurghada bietet eine unglaubliche Mischung aus Abenteuer, Geschichte, Entspannung und Kultur. Hier sind die Top 10 Aktivitäten für Ihren Urlaub.</p>
<h3>1. Schnorcheln auf der Insel Giftun</h3><p>Erleben Sie das geschützte Paradies Giftun Island mit weißen Sandstränden.</p>
<h3>2. Quad-Wüstensafari</h3><p>Erkunden Sie die Wüste mit dem Quad und genießen Sie ein Beduinen-Abendessen.</p>
<h3>3. Tagesausflug nach Kairo zu den Pyramiden</h3><p>Sehen Sie die weltberühmten Pyramiden von Gizeh und das Grand Egyptian Museum.</p>
<p>Buchen Sie Ihre Ausflüge direkt bei <a href="https://goldenhorizontegypt.com">Golden Horizont Egypt</a>.</p>
      `,
      ar: `
<h2>قائمة الأنشطة الأساسية في الغردقة</h2>
<p>تقدم الغردقة مزيجًا رائعًا من المغامرة والتاريخ والاسترخاء والثقافة. إليك أفضل 10 تجارب يجب عليك القيام بها.</p>
<h3>1. الغوص في جزيرة جفتون</h3><p>استمتع بالرمال البيضاء الناعمة والشعاب المرجانية الرائعة في جزيرة جفتون.</p>
<h3>2. سفاري الدراجات الرباعية في الصحراء</h3><p>انطلق في مغامرة شيقة عبر الكثبان الرملية مع عشاء بدوي تحت النجوم.</p>
<h3>3. رحلة اليوم الواحد إلى أهرامات القاهرة</h3><p>شاهد أهرامات الجيزة العظيمة، أبو الهول، والمتحف المصري الكبير.</p>
<p>احجز رحلتك مباشرة مع <a href="https://goldenhorizontegypt.com">Golden Horizont Egypt</a> عبر الواتساب.</p>
      `
    }
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, count);
}
