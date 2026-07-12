// 20 Most Common Languages for Hurghada Tourists
import { useState, useEffect } from 'react';

export const translations = {
  en: {
    nav: {
      home: "Home",
      trips: "Trips",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
      about: "About"
    },
    hero: {
      title: "Discover the Magic of Egypt",
      subtitle: "Experience Egypt the Golden Way",
      cta: "Explore Our Adventures",
      scroll: "Scroll to discover"
    },
    trips: {
      title: "Our Exclusive Experiences",
      subtitle: "Choose your perfect adventure in Egypt",
      bookNow: "Book via WhatsApp",
      duration: "Duration",
      price: "From",
      popular: "Popular"
    },
    gallery: {
      title: "Capture the Moments",
      subtitle: "Experience the beauty of Egypt"
    },
    reviews: {
      title: "What Our Guests Say",
      subtitle: "Real experiences from real travelers"
    },
    weather: {
      title: "Hurghada Weather",
      feelsLike: "Feels like",
      humidity: "Humidity",
      wind: "Wind"
    },
    exchange: {
      title: "Exchange Rate",
      eurToEgp: "EUR to EGP"
    },
    footer: {
      tagline: "Your Gateway to Egypt Adventures",
      quickLinks: "Quick Links",
      popularTrips: "Popular Trips",
      contact: "Contact Us",
      followUs: "Follow Us",
      rights: "All rights reserved",
      address: "Hurghada, Egypt"
    },
    whatsapp: {
      greeting: "Hello! I am interested in booking",
      trip: "Trip"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      trips: "Экскурсии",
      gallery: "Галерея",
      reviews: "Отзывы",
      contact: "Контакты",
      about: "О нас"
    },
    hero: {
      title: "Откройте магию Египта",
      subtitle: "Премиум туры и экскурсии по всему Египту",
      cta: "Исследовать приключения",
      scroll: "Прокрутите вниз"
    },
    trips: {
      title: "Наши эксклюзивные впечатления",
      subtitle: "Выберите идеальное приключение в Египте",
      bookNow: "Забронировать в WhatsApp",
      duration: "Продолжительность",
      price: "От",
      popular: "Популярно"
    },
    gallery: {
      title: "Запечатлейте моменты",
      subtitle: "Испытайте красоту Красного моря"
    },
    reviews: {
      title: "Отзывы наших гостей",
      subtitle: "Реальный опыт реальных путешественников"
    },
    weather: {
      title: "Погода в Хургаде",
      feelsLike: "Ощущается как",
      humidity: "Влажность",
      wind: "Ветер"
    },
    exchange: {
      title: "Курс валют",
      eurToEgp: "EUR в EGP"
    },
    footer: {
      tagline: "Ваш путь к приключениям в Египте",
      quickLinks: "Быстрые ссылки",
      popularTrips: "Популярные туры",
      contact: "Связаться с нами",
      followUs: "Подписывайтесь",
      rights: "Все права защищены",
      address: "Хургада, Египет"
    },
    whatsapp: {
      greeting: "Здравствуйте! Я заинтересован в бронировании",
      trip: "Экскурсия"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      trips: "Ausflüge",
      gallery: "Galerie",
      reviews: "Bewertungen",
      contact: "Kontakt",
      about: "Über uns"
    },
    hero: {
      title: "Entdecken Sie die Magie Ägyptens",
      subtitle: "Premium Touren & Ausflüge in ganz Ägypten",
      cta: "Entdecken Sie unsere Abenteuer",
      scroll: "Scrollen Sie, um zu entdecken"
    },
    trips: {
      title: "Unsere exklusiven Erlebnisse",
      subtitle: "Wählen Sie Ihr perfektes Abenteuer in Ägypten",
      bookNow: "Über WhatsApp buchen",
      duration: "Dauer",
      price: "Ab",
      popular: "Beliebt"
    },
    gallery: {
      title: "Momente einfangen",
      subtitle: "Erleben Sie die Schönheit des Roten Meeres"
    },
    reviews: {
      title: "Was unsere Gäste sagen",
      subtitle: "Echte Erfahrungen von echten Reisenden"
    },
    weather: {
      title: "Wetter in Hurghada",
      feelsLike: "Gefühlt wie",
      humidity: "Feuchtigkeit",
      wind: "Wind"
    },
    exchange: {
      title: "Wechselkurs",
      eurToEgp: "EUR zu EGP"
    },
    footer: {
      tagline: "Ihr Tor zu Abenteuern in Ägypten",
      quickLinks: "Schnelllinks",
      popularTrips: "Beliebte Ausflüge",
      contact: "Kontaktieren Sie uns",
      followUs: "Folgen Sie uns",
      rights: "Alle Rechte vorbehalten",
      address: "Hurghada, Ägypten"
    },
    whatsapp: {
      greeting: "Hallo! Ich bin an einer Buchung interessiert",
      trip: "Ausflug"
    }
  },
  pl: {
    nav: {
      home: "Strona główna",
      trips: "Wycieczki",
      gallery: "Galeria",
      reviews: "Opinie",
      contact: "Kontakt",
      about: "O nas"
    },
    hero: {
      title: "Odkryj magię Morza Czerwonego",
      subtitle: "Ekskluzywne wycieczki w Hurghadzie",
      cta: "Odkryj nasze przygody",
      scroll: "Przewiń, aby odkryć"
    },
    trips: {
      title: "Nasze ekskluzywne doświadczenia",
      subtitle: "Wybierz idealną przygodę w Hurghadzie",
      bookNow: "Zarezerwuj przez WhatsApp",
      duration: "Czas trwania",
      price: "Od",
      popular: "Popularne"
    },
    gallery: {
      title: "Uchwycić chwile",
      subtitle: "Doświadcz piękna Morza Czerwonego"
    },
    reviews: {
      title: "Co mówią nasi goście",
      subtitle: "Prawdziwe doświadczenia prawdziwych podróżników"
    },
    weather: {
      title: "Pogoda w Hurghadzie",
      feelsLike: "Odczuwalna",
      humidity: "Wilgotność",
      wind: "Wiatr"
    },
    exchange: {
      title: "Kurs wymiany",
      eurToEgp: "EUR do EGP"
    },
    footer: {
      tagline: "Twoja brama do przygód Morza Czerwonego",
      quickLinks: "Szybkie linki",
      popularTrips: "Popularne wycieczki",
      contact: "Skontaktuj się",
      followUs: "Obserwuj nas",
      rights: "Wszelkie prawa zastrzeżone",
      address: "Hurghada, Morze Czerwone, Egipt"
    },
    whatsapp: {
      greeting: "Cześć! Jestem zainteresowany rezerwacją",
      trip: "Wycieczka"
    }
  },
  uk: {
    nav: {
      home: "Головна",
      trips: "Екскурсії",
      gallery: "Галерея",
      reviews: "Відгуки",
      contact: "Контакти",
      about: "Про нас"
    },
    hero: {
      title: "Відкрийте магію Червоного моря",
      subtitle: "Преміум тури та екскурсії в Хургаді",
      cta: "Досліджуйте пригоди",
      scroll: "Прокрутіть, щоб відкрити"
    },
    trips: {
      title: "Наші ексклюзивні враження",
      subtitle: "Оберіть ідеальну пригоду в Хургаді",
      bookNow: "Забронювати в WhatsApp",
      duration: "Тривалість",
      price: "Від",
      popular: "Популярне"
    },
    gallery: {
      title: "Зафіксуйте моменти",
      subtitle: "Відчуйте красу Червоного моря"
    },
    reviews: {
      title: "Що кажуть наші гості",
      subtitle: "Реальний досвід реальних мандрівників"
    },
    weather: {
      title: "Погода в Хургаді",
      feelsLike: "Відчувається як",
      humidity: "Вологість",
      wind: "Вітер"
    },
    exchange: {
      title: "Курс валют",
      eurToEgp: "EUR в EGP"
    },
    footer: {
      tagline: "Ваш шлях до пригод Червоного моря",
      quickLinks: "Швидкі посилання",
      popularTrips: "Популярні екскурсії",
      contact: "Зв'яжіться з нами",
      followUs: "Слідкуйте за нами",
      rights: "Всі права захищені",
      address: "Хургада, Червоне море, Єгипет"
    },
    whatsapp: {
      greeting: "Привіт! Мене цікавить бронювання",
      trip: "Екскурсія"
    }
  },
  cs: {
    nav: {
      home: "Domů",
      trips: "Výlety",
      gallery: "Galerie",
      reviews: "Recenze",
      contact: "Kontakt",
      about: "O nás"
    },
    hero: {
      title: "Objevte kouzlo Rudého moře",
      subtitle: "Prémiové výlety v Hurghadě",
      cta: "Prozkoumejte naše dobrodružství",
      scroll: "Posuňte se dolů"
    },
    trips: {
      title: "Naše exkluzivní zážitky",
      subtitle: "Vyberte si perfektní dobrodružství v Hurghadě",
      bookNow: "Rezervujte přes WhatsApp",
      duration: "Doba trvání",
      price: "Od",
      popular: "Oblíbené"
    },
    gallery: {
      title: "Zachyťte okamžiky",
      subtitle: "Zažijte krásu Rudého moře"
    },
    reviews: {
      title: "Co říkají naši hosté",
      subtitle: "Skutečné zkušenosti skutečných cestovatelů"
    },
    weather: {
      title: "Počasí v Hurghadě",
      feelsLike: "Pocitová teplota",
      humidity: "Vlhkost",
      wind: "Vítr"
    },
    exchange: {
      title: "Směnný kurz",
      eurToEgp: "EUR na EGP"
    },
    footer: {
      tagline: "Vaše brána k dobrodružstvím Rudého moře",
      quickLinks: "Rychlé odkazy",
      popularTrips: "Oblíbené výlety",
      contact: "Kontaktujte nás",
      followUs: "Sledujte nás",
      rights: "Všechna práva vyhrazena",
      address: "Hurghada, Rudé moře, Egypt"
    },
    whatsapp: {
      greeting: "Dobrý den! Mám zájem o rezervaci",
      trip: "Výlet"
    }
  },
  nl: {
    nav: {
      home: "Home",
      trips: "Uitstapjes",
      gallery: "Galerij",
      reviews: "Beoordelingen",
      contact: "Contact",
      about: "Over ons"
    },
    hero: {
      title: "Ontdek de magie van de Rode Zee",
      subtitle: "Premium tours en excursies in Hurghada",
      cta: "Ontdek onze avonturen",
      scroll: "Scroll om te ontdekken"
    },
    trips: {
      title: "Onze exclusieve ervaringen",
      subtitle: "Kies je perfecte avontuur in Hurghada",
      bookNow: "Boek via WhatsApp",
      duration: "Duur",
      price: "Vanaf",
      popular: "Populair"
    },
    gallery: {
      title: "Leg de momenten vast",
      subtitle: "Ervaar de schoonheid van de Rode Zee"
    },
    reviews: {
      title: "Wat onze gasten zeggen",
      subtitle: "Echte ervaringen van echte reizigers"
    },
    weather: {
      title: "Weer in Hurghada",
      feelsLike: "Voelt als",
      humidity: "Vochtigheid",
      wind: "Wind"
    },
    exchange: {
      title: "Wisselkoers",
      eurToEgp: "EUR naar EGP"
    },
    footer: {
      tagline: "Jouw poort naar Rode Zee avonturen",
      quickLinks: "Snelle links",
      popularTrips: "Populaire uitjes",
      contact: "Neem contact op",
      followUs: "Volg ons",
      rights: "Alle rechten voorbehouden",
      address: "Hurghada, Rode Zee, Egypte"
    },
    whatsapp: {
      greeting: "Hallo! Ik ben geïnteresseerd in het boeken van",
      trip: "Uitstapje"
    }
  },
  it: {
    nav: {
      home: "Home",
      trips: "Escursioni",
      gallery: "Galleria",
      reviews: "Recensioni",
      contact: "Contatti",
      about: "Chi siamo"
    },
    hero: {
      title: "Scopri la magia del Mar Rosso",
      subtitle: "Tour ed escursioni premium a Hurghada",
      cta: "Esplora le nostre avventure",
      scroll: "Scorri per scoprire"
    },
    trips: {
      title: "Le nostre esperienze esclusive",
      subtitle: "Scegli la tua avventura perfetta a Hurghada",
      bookNow: "Prenota via WhatsApp",
      duration: "Durata",
      price: "Da",
      popular: "Popolare"
    },
    gallery: {
      title: "Cattura i momenti",
      subtitle: "Vivi la bellezza del Mar Rosso"
    },
    reviews: {
      title: "Cosa dicono i nostri ospiti",
      subtitle: "Esperienze reali da viaggiatori reali"
    },
    weather: {
      title: "Meteo a Hurghada",
      feelsLike: "Percepita",
      humidity: "Umidità",
      wind: "Vento"
    },
    exchange: {
      title: "Tasso di cambio",
      eurToEgp: "EUR in EGP"
    },
    footer: {
      tagline: "La tua porta per le avventure del Mar Rosso",
      quickLinks: "Link rapidi",
      popularTrips: "Escursioni popolari",
      contact: "Contattaci",
      followUs: "Seguici",
      rights: "Tutti i diritti riservati",
      address: "Hurghada, Mar Rosso, Egitto"
    },
    whatsapp: {
      greeting: "Ciao! Sono interessato a prenotare",
      trip: "Escursione"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      trips: "Excursions",
      gallery: "Galerie",
      reviews: "Avis",
      contact: "Contact",
      about: "À propos"
    },
    hero: {
      title: "Découvrez la magie de la Mer Rouge",
      subtitle: "Tours et excursions premium à Hurghada",
      cta: "Explorez nos aventures",
      scroll: "Faites défiler pour découvrir"
    },
    trips: {
      title: "Nos expériences exclusives",
      subtitle: "Choisissez votre aventure parfaite à Hurghada",
      bookNow: "Réserver via WhatsApp",
      duration: "Durée",
      price: "À partir de",
      popular: "Populaire"
    },
    gallery: {
      title: "Capturez les moments",
      subtitle: "Vivez la beauté de la Mer Rouge"
    },
    reviews: {
      title: "Ce que disent nos clients",
      subtitle: "Expériences réelles de vrais voyageurs"
    },
    weather: {
      title: "Météo à Hurghada",
      feelsLike: "Ressenti",
      humidity: "Humidité",
      wind: "Vent"
    },
    exchange: {
      title: "Taux de change",
      eurToEgp: "EUR en EGP"
    },
    footer: {
      tagline: "Votre porte vers les aventures de la Mer Rouge",
      quickLinks: "Liens rapides",
      popularTrips: "Excursions populaires",
      contact: "Contactez-nous",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés",
      address: "Hurghada, Mer Rouge, Égypte"
    },
    whatsapp: {
      greeting: "Bonjour! Je suis intéressé par la réservation",
      trip: "Excursion"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      trips: "Excursiones",
      gallery: "Galería",
      reviews: "Opiniones",
      contact: "Contacto",
      about: "Sobre nosotros"
    },
    hero: {
      title: "Descubre la magia del Mar Rojo",
      subtitle: "Tours y excursiones premium en Hurghada",
      cta: "Explora nuestras aventuras",
      scroll: "Desplázate para descubrir"
    },
    trips: {
      title: "Nuestras experiencias exclusivas",
      subtitle: "Elige tu aventura perfecta en Hurghada",
      bookNow: "Reservar por WhatsApp",
      duration: "Duración",
      price: "Desde",
      popular: "Popular"
    },
    gallery: {
      title: "Captura los momentos",
      subtitle: "Experimenta la belleza del Mar Rojo"
    },
    reviews: {
      title: "Lo que dicen nuestros huéspedes",
      subtitle: "Experiencias reales de viajeros reales"
    },
    weather: {
      title: "Clima en Hurghada",
      feelsLike: "Sensación térmica",
      humidity: "Humedad",
      wind: "Viento"
    },
    exchange: {
      title: "Tipo de cambio",
      eurToEgp: "EUR a EGP"
    },
    footer: {
      tagline: "Tu puerta a las aventuras del Mar Rojo",
      quickLinks: "Enlaces rápidos",
      popularTrips: "Excursiones populares",
      contact: "Contáctanos",
      followUs: "Síguenos",
      rights: "Todos los derechos reservados",
      address: "Hurghada, Mar Rojo, Egipto"
    },
    whatsapp: {
      greeting: "¡Hola! Estoy interesado en reservar",
      trip: "Excursión"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      trips: "الرحلات",
      gallery: "معرض الصور",
      reviews: "التقييمات",
      contact: "اتصل بنا",
      about: "نبذة عنا"
    },
    hero: {
      title: "اكتشف سحر مصر",
      subtitle: "جولات ورحلات فاخرة في جميع أنحاء مصر",
      cta: "استكشف مغامراتنا",
      scroll: "مرر للاستكشاف"
    },
    trips: {
      title: "تجاربنا الحصرية",
      subtitle: "اختر مغامرتك المثالية في مصر",
      bookNow: "احجز عبر واتساب",
      duration: "المدة",
      price: "يبدأ من",
      popular: "شائع"
    },
    gallery: {
      title: "التقط اللحظات",
      subtitle: "استمتع بجمال البحر الأحمر"
    },
    reviews: {
      title: "ماذا يقول ضيوفنا",
      subtitle: "تجارب حقيقية من مسافرين حقيقيين"
    },
    weather: {
      title: "الطقس في الغردقة",
      feelsLike: "يشعر وكأنه",
      humidity: "الرطوبة",
      wind: "الرياح"
    },
    exchange: {
      title: "سعر الصرف",
      eurToEgp: "يورو إلى جنيه"
    },
    footer: {
      tagline: "بوابتك لمغامرات مصر",
      quickLinks: "روابط سريعة",
      popularTrips: "رحلات شائعة",
      contact: "اتصل بنا",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة",
      address: "الغردقة، مصر"
    },
    whatsapp: {
      greeting: "مرحباً! أنا مهتم بحجز",
      trip: "رحلة"
    }
  },
  zh: {
    nav: {
      home: "首页",
      trips: "旅行",
      gallery: "图库",
      reviews: "评价",
      contact: "联系",
      about: "关于我们"
    },
    hero: {
      title: "探索红海的魔力",
      subtitle: "赫尔格达高端旅游和短途旅行",
      cta: "探索我们的冒险",
      scroll: "滚动以发现"
    },
    trips: {
      title: "我们的专属体验",
      subtitle: "选择您在赫尔格达的完美冒险",
      bookNow: "通过WhatsApp预订",
      duration: "时长",
      price: "起价",
      popular: "热门"
    },
    gallery: {
      title: "捕捉瞬间",
      subtitle: "体验红海之美"
    },
    reviews: {
      title: "客人怎么说",
      subtitle: "真实旅行者的真实体验"
    },
    weather: {
      title: "赫尔格达天气",
      feelsLike: "体感温度",
      humidity: "湿度",
      wind: "风速"
    },
    exchange: {
      title: "汇率",
      eurToEgp: "欧元兑埃镑"
    },
    footer: {
      tagline: "您通往红海冒险的门户",
      quickLinks: "快速链接",
      popularTrips: "热门旅行",
      contact: "联系我们",
      followUs: "关注我们",
      rights: "版权所有",
      address: "赫尔格达，红海，埃及"
    },
    whatsapp: {
      greeting: "您好！我有兴趣预订",
      trip: "旅行"
    }
  },
  pt: {
    nav: {
      home: "Início",
      trips: "Passeios",
      gallery: "Galeria",
      reviews: "Avaliações",
      contact: "Contato",
      about: "Sobre nós"
    },
    hero: {
      title: "Descubra a magia do Mar Vermelho",
      subtitle: "Tours e excursões premium em Hurghada",
      cta: "Explore nossas aventuras",
      scroll: "Role para descobrir"
    },
    trips: {
      title: "Nossas experiências exclusivas",
      subtitle: "Escolha sua aventura perfeita em Hurghada",
      bookNow: "Reserve pelo WhatsApp",
      duration: "Duração",
      price: "A partir de",
      popular: "Popular"
    },
    gallery: {
      title: "Capture os momentos",
      subtitle: "Experimente a beleza do Mar Vermelho"
    },
    reviews: {
      title: "O que nossos hóspedes dizem",
      subtitle: "Experiências reais de viajantes reais"
    },
    weather: {
      title: "Clima em Hurghada",
      feelsLike: "Sensação",
      humidity: "Umidade",
      wind: "Vento"
    },
    exchange: {
      title: "Taxa de câmbio",
      eurToEgp: "EUR para EGP"
    },
    footer: {
      tagline: "Seu portal para aventuras no Mar Vermelho",
      quickLinks: "Links rápidos",
      popularTrips: "Passeios populares",
      contact: "Entre em contato",
      followUs: "Siga-nos",
      rights: "Todos os direitos reservados",
      address: "Hurghada, Mar Vermelho, Egito"
    },
    whatsapp: {
      greeting: "Olá! Estou interessado em reservar",
      trip: "Passeio"
    }
  },
  sv: {
    nav: {
      home: "Hem",
      trips: "Utflykter",
      gallery: "Galleri",
      reviews: "Omdömen",
      contact: "Kontakt",
      about: "Om oss"
    },
    hero: {
      title: "Upptäck Röda havets magi",
      subtitle: "Premium turer och utflykter i Hurghada",
      cta: "Utforska våra äventyr",
      scroll: "Scrolla för att upptäcka"
    },
    trips: {
      title: "Våra exklusiva upplevelser",
      subtitle: "Välj ditt perfekta äventyr i Hurghada",
      bookNow: "Boka via WhatsApp",
      duration: "Varaktighet",
      price: "Från",
      popular: "Populär"
    },
    gallery: {
      title: "Fånga ögonblicken",
      subtitle: "Upplev Röda havets skönhet"
    },
    reviews: {
      title: "Vad våra gäster säger",
      subtitle: "Verkliga upplevelser från verkliga resenärer"
    },
    weather: {
      title: "Väder i Hurghada",
      feelsLike: "Känns som",
      humidity: "Luftfuktighet",
      wind: "Vind"
    },
    exchange: {
      title: "Växelkurs",
      eurToEgp: "EUR till EGP"
    },
    footer: {
      tagline: "Din port till Röda havets äventyr",
      quickLinks: "Snabblänkar",
      popularTrips: "Populära utflykter",
      contact: "Kontakta oss",
      followUs: "Följ oss",
      rights: "Alla rättigheter förbehållna",
      address: "Hurghada, Röda havet, Egypten"
    },
    whatsapp: {
      greeting: "Hej! Jag är intresserad av att boka",
      trip: "Utflykt"
    }
  },
  da: {
    nav: {
      home: "Hjem",
      trips: "Udflugter",
      gallery: "Galleri",
      reviews: "Anmeldelser",
      contact: "Kontakt",
      about: "Om os"
    },
    hero: {
      title: "Oplev Det Røde Havs magi",
      subtitle: "Premium ture og udflugter i Hurghada",
      cta: "Udforsk vores eventyr",
      scroll: "Rul for at opdage"
    },
    trips: {
      title: "Vores eksklusive oplevelser",
      subtitle: "Vælg dit perfekte eventyr i Hurghada",
      bookNow: "Book via WhatsApp",
      duration: "Varighed",
      price: "Fra",
      popular: "Populær"
    },
    gallery: {
      title: "Fang øjeblikke",
      subtitle: "Oplev Det Røde Havs skønhed"
    },
    reviews: {
      title: "Hvad vores gæster siger",
      subtitle: "Virkelige oplevelser fra virkelige rejsende"
    },
    weather: {
      title: "Vejr i Hurghada",
      feelsLike: "Føles som",
      humidity: "Luftfugtighed",
      wind: "Vind"
    },
    exchange: {
      title: "Valutakurs",
      eurToEgp: "EUR til EGP"
    },
    footer: {
      tagline: "Din port til Det Røde Hav's eventyr",
      quickLinks: "Hurtige links",
      popularTrips: "Populære udflugter",
      contact: "Kontakt os",
      followUs: "Følg os",
      rights: "Alle rettigheder forbeholdes",
      address: "Hurghada, Det Røde Hav, Egypten"
    },
    whatsapp: {
      greeting: "Hej! Jeg er interesseret i at booke",
      trip: "Udflugt"
    }
  },
  fi: {
    nav: {
      home: "Koti",
      trips: "Retket",
      gallery: "Galleria",
      reviews: "Arvostelut",
      contact: "Yhteystiedot",
      about: "Tietoa"
    },
    hero: {
      title: "Löydä Punaisen meren taika",
      subtitle: "Premium-kierrokset Hurghadassa",
      cta: "Tutustu seikkaluihimme",
      scroll: "Vieritä löytääksesi"
    },
    trips: {
      title: "Ainutlaatuiset kokemuksemme",
      subtitle: "Valitse täydellinen seikkailu Hurghadassa",
      bookNow: "Varaa WhatsAppilla",
      duration: "Kesto",
      price: "Alkaen",
      popular: "Suosittu"
    },
    gallery: {
      title: "Tallenna hetket",
      subtitle: "Koe Punaisen meren kauneus"
    },
    reviews: {
      title: "Mitä vieraamme sanovat",
      subtitle: "Aitoja kokemuksia aidoilta matkailijoilta"
    },
    weather: {
      title: "Sää Hurghadassa",
      feelsLike: "Tuntuu kuin",
      humidity: "Kosteus",
      wind: "Tuuli"
    },
    exchange: {
      title: "Vaihtokurssi",
      eurToEgp: "EUR EGP"
    },
    footer: {
      tagline: "Porttisi Punaisen meren seikkailuihin",
      quickLinks: "Pikalinkit",
      popularTrips: "Suositut retket",
      contact: "Ota yhteyttä",
      followUs: "Seuraa meitä",
      rights: "Kaikki oikeudet pidätetään",
      address: "Hurghada, Punainen meri, Egypti"
    },
    whatsapp: {
      greeting: "Hei! Olen kiinnostunut varaamaan",
      trip: "Retki"
    }
  },
  no: {
    nav: {
      home: "Hjem",
      trips: "Utflukter",
      gallery: "Galleri",
      reviews: "Anmeldelser",
      contact: "Kontakt",
      about: "Om oss"
    },
    hero: {
      title: "Opplev Rødehavets magi",
      subtitle: "Premium turer og utflukter i Hurghada",
      cta: "Utforsk våre eventyr",
      scroll: "Rull for å oppdage"
    },
    trips: {
      title: "Våre eksklusive opplevelser",
      subtitle: "Velg ditt perfekte eventyr i Hurghada",
      bookNow: "Bestill via WhatsApp",
      duration: "Varighet",
      price: "Fra",
      popular: "Populær"
    },
    gallery: {
      title: "Fang øyeblikkene",
      subtitle: "Opplev Rødehavets skjønnhet"
    },
    reviews: {
      title: "Hva våre gjester sier",
      subtitle: "Ekte opplevelser fra ekte reisende"
    },
    weather: {
      title: "Vær i Hurghada",
      feelsLike: "Føles som",
      humidity: "Luftfuktighet",
      wind: "Vind"
    },
    exchange: {
      title: "Valutakurs",
      eurToEgp: "EUR til EGP"
    },
    footer: {
      tagline: "Din port til Rødehavets eventyr",
      quickLinks: "Hurtiglenker",
      popularTrips: "Populære utflukter",
      contact: "Kontakt oss",
      followUs: "Følg oss",
      rights: "Alle rettigheter forbeholdt",
      address: "Hurghada, Rødehavet, Egypt"
    },
    whatsapp: {
      greeting: "Hei! Jeg er interessert i å bestille",
      trip: "Utflukt"
    }
  },
  hu: {
    nav: {
      home: "Főoldal",
      trips: "Kirándulások",
      gallery: "Galéria",
      reviews: "Vélemények",
      contact: "Kapcsolat",
      about: "Rólunk"
    },
    hero: {
      title: "Fedezze fel a Vörös-tenger varázsát",
      subtitle: "Prémium túrák és kirándulások Hurghadában",
      cta: "Fedezze fel kalandjainkat",
      scroll: "Görgessen a felfedezéshez"
    },
    trips: {
      title: "Exkluzív élményeink",
      subtitle: "Válassza ki tökéletes kalandját Hurghadában",
      bookNow: "Foglaljon WhatsAppon",
      duration: "Időtartam",
      price: "Kezdve",
      popular: "Népszerű"
    },
    gallery: {
      title: "Örökítse meg a pillanatokat",
      subtitle: "Tapasztalja meg a Vörös-tenger szépségét"
    },
    reviews: {
      title: "Mit mondanak vendégeink",
      subtitle: "Valódi tapasztalatok valódi utazóktól"
    },
    weather: {
      title: "Időjárás Hurghadában",
      feelsLike: "Érzet szerint",
      humidity: "Páratartalom",
      wind: "Szél"
    },
    exchange: {
      title: "Árfolyam",
      eurToEgp: "EUR - EGP"
    },
    footer: {
      tagline: "Kapuja a Vörös-tengeri kalandokhoz",
      quickLinks: "Gyors linkek",
      popularTrips: "Népszerű kirándulások",
      contact: "Kapcsolat",
      followUs: "Kövessen minket",
      rights: "Minden jog fenntartva",
      address: "Hurghada, Vörös-tenger, Egyiptom"
    },
    whatsapp: {
      greeting: "Üdvözlöm! Érdeklődöm a foglalás iránt",
      trip: "Kirándulás"
    }
  },
  ro: {
    nav: {
      home: "Acasă",
      trips: "Excursii",
      gallery: "Galerie",
      reviews: "Testimoniale",
      contact: "Contact",
      about: "Despre noi"
    },
    hero: {
      title: "Descoperiți magia Egiptului",
      subtitle: "Tururi și excursii premium în toată Egiptul",
      cta: "Explorați aventurile noastre",
      scroll: "Derulați pentru a descoperi"
    },
    trips: {
      title: "Experiențele noastre exclusive",
      subtitle: "Alegeți aventura perfectă în Egipt",
      bookNow: "Rezervați prin WhatsApp",
      duration: "Durată",
      price: "De la",
      popular: "Popular"
    },
    gallery: {
      title: "Imortalizați momentele",
      subtitle: "Descoperiți frumusețea Egiptului"
    },
    reviews: {
      title: "Ce spun clienții noștri",
      subtitle: "Experiențe reale ale călătorilor noștri"
    },
    weather: {
      title: "Vremea în Hurghada",
      feelsLike: "Percepție termică",
      humidity: "Umiditate",
      wind: "Vânt"
    },
    exchange: {
      title: "Curs valutar",
      eurToEgp: "EUR în EGP"
    },
    footer: {
      tagline: "Poarta dumneavoastră către aventurile Egiptului",
      quickLinks: "Linkuri rapide",
      popularTrips: "Excursii populare",
      contact: "Contactați-ne",
      followUs: "Urmăriți-ne",
      rights: "Toate drepturile rezervate",
      address: "Hurghada, Egipt"
    },
    whatsapp: {
      greeting: "Bună ziua! Aș dori să rezerv",
      trip: "Excursia"
    }
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      trips: "Turlar",
      gallery: "Galeri",
      reviews: "Yorumlar",
      contact: "İletişim",
      about: "Hakkımızda"
    },
    hero: {
      title: "Kızıldeniz'in büyüsünü keşfedin",
      subtitle: "Hurghada'da premium turlar ve geziler",
      cta: "Maceralarımızı keşfedin",
      scroll: "Keşfetmek için kaydırın"
    },
    trips: {
      title: "Özel deneyimlerimiz",
      subtitle: "Hurghada'da mükemmel maceranızı seçin",
      bookNow: "WhatsApp ile rezervasyon",
      duration: "Süre",
      price: "Başlangıç",
      popular: "Popüler"
    },
    gallery: {
      title: "Anları yakalayın",
      subtitle: "Kızıldeniz'in güzelliğini deneyimleyin"
    },
    reviews: {
      title: "Misafirlerimiz ne diyor",
      subtitle: "Gerçek gezginlerden gerçek deneyimler"
    },
    weather: {
      title: "Hurghada Hava Durumu",
      feelsLike: "Hissedilen",
      humidity: "Nem",
      wind: "Rüzgar"
    },
    exchange: {
      title: "Döviz Kuru",
      eurToEgp: "EUR - EGP"
    },
    footer: {
      tagline: "Kızıldeniz maceralarına açılan kapınız",
      quickLinks: "Hızlı Linkler",
      popularTrips: "Popüler turlar",
      contact: "Bize Ulaşın",
      followUs: "Bizi Takip Edin",
      rights: "Tüm hakları saklıdır",
      address: "Hurghada, Kızıldeniz, Mısır"
    },
    whatsapp: {
      greeting: "Merhaba! Rezervasyon yapmak istiyorum",
      trip: "Tur"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

// Detect browser language and return matching translation key
export function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  
  // Map browser language codes to our supported languages
  const langMap: Record<string, Language> = {
    en: 'en',
    ru: 'ru',
    de: 'de',
    pl: 'pl',
    uk: 'uk',
    cs: 'cs',
    nl: 'nl',
    it: 'it',
    fr: 'fr',
    es: 'es',
    ar: 'ar',
    zh: 'zh',
    pt: 'pt',
    sv: 'sv',
    da: 'da',
    fi: 'fi',
    no: 'no',
    nb: 'no', // Norwegian Bokmål
    nn: 'no', // Norwegian Nynorsk
    hu: 'hu',
    ro: 'ro',
    tr: 'tr'
  };
  
  return langMap[browserLang] || 'en';
}

export function getTranslations(lang: Language): TranslationKeys {
  return translations[lang] || translations.en;
}

// Hook for using translations in components

export function useTranslation() {
  const [lang, setLang] = useState<Language>('en');
  const [t, setT] = useState<TranslationKeys>(translations.en);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLang(detectedLang);
    setT(getTranslations(detectedLang));
    setMounted(true);
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    setT(getTranslations(newLang));
  };

  return { t, lang, mounted, setLang: changeLanguage };
}
