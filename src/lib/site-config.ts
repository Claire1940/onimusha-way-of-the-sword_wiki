export const SITE_URL_FALLBACK = "https://onimusha-way-of-the-sword.wiki";
export const SITE_NAME = "Onimusha: Way of the Sword Wiki";
export const SITE_SHORT_NAME = "Onimusha Wiki";
export const NAV_BRAND_NAME = "Onimusha";
export const NAV_BRAND_MOBILE = "OWS";
export const NAV_INITIAL = "O";
export const HERO_IMAGE_ALT = "Onimusha: Way of the Sword key art";
export const YOUTUBE_VIDEO_ID = "LNq35HHUtNc";
export const YOUTUBE_VIDEO_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;
export const OFFICIAL_SITE_URL = "https://www.capcom-games.com/onimusha/ws/";
export const STEAM_URL =
  "https://store.steampowered.com/app/2638890/Onimusha_Way_of_the_Sword/";

type HeroStat = {
  value: string;
  label: string;
};

type LocaleHomeCopy = {
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: HeroStat[];
  };
  video: {
    title: string;
    description: string;
  };
};

const EN_COPY: LocaleHomeCopy = {
  seo: {
    title: "Onimusha: Way of the Sword Wiki - Release & Demo Guide",
    description:
      "Onimusha: Way of the Sword Wiki with release date, demo guide, combat tips, bosses, characters, weapons, locations, editions, and platform details.",
    keywords:
      "Onimusha, Way of the Sword, release date, demo, combat, bosses, PS5, Xbox, PC",
    ogTitle: "Onimusha: Way of the Sword Wiki - Release & Demo Guide",
    ogDescription:
      "Track the release date, demo details, combat systems, bosses, characters, and platforms for Onimusha: Way of the Sword.",
    twitterTitle: "Onimusha: Way of the Sword Wiki - Release & Demo Guide",
    twitterDescription:
      "Release date, demo guide, combat tips, bosses, characters, and platform details for Onimusha: Way of the Sword.",
  },
  hero: {
    badge: "Dark Fantasy Swordplay Action",
    title: SITE_NAME,
    description:
      "Fight through a dark Edo-period Kyoto as Miyamoto Musashi, mastering parries, Issen strikes, Oni Gauntlet powers, and brutal boss duels against the Genma.",
    primaryCta: "Download Demo",
    secondaryCta: "Pre-Order on Steam",
    stats: [
      { value: "Sep 25, 2026", label: "Release Date" },
      { value: "Available Now", label: "Playable Demo" },
      { value: "PS5 / Xbox / PC", label: "Platforms" },
      { value: "30 Minutes", label: "Demo Length" },
    ],
  },
  video: {
    title: "Onimusha: Way of the Sword - Release Date Trailer",
    description:
      "Watch the official Onimusha: Way of the Sword release date announcement trailer.",
  },
};

const LOCALE_COPY: Record<string, LocaleHomeCopy> = {
  en: EN_COPY,
  de: {
    seo: {
      title: "Onimusha: Way of the Sword Wiki - Release- und Demo-Guide",
      description:
        "Onimusha: Way of the Sword Wiki mit Release-Datum, Demo-Guide, Kampftipps, Bossen, Charakteren, Waffen, Orten, Editionen und Plattformdetails.",
      keywords:
        "Onimusha, Way of the Sword, Release-Datum, Demo, Kampf, Bosse, PS5, Xbox, PC",
      ogTitle: "Onimusha: Way of the Sword Wiki - Release- und Demo-Guide",
      ogDescription:
        "Alle Infos zu Release-Datum, Demo, Kampfsystemen, Bossen, Charakteren und Plattformen für Onimusha: Way of the Sword.",
      twitterTitle: "Onimusha: Way of the Sword Wiki - Release- und Demo-Guide",
      twitterDescription:
        "Release-Datum, Demo-Guide, Kampftipps, Bosse, Charaktere und Plattformdetails für Onimusha: Way of the Sword.",
    },
    hero: {
      badge: "Dark-Fantasy-Schwertkampf-Action",
      title: SITE_NAME,
      description:
        "Kämpfe dich als Miyamoto Musashi durch ein düsteres Kyoto der Edo-Zeit und meistere Paraden, Issen-Schläge, Oni-Handschuh-Kräfte und brutale Bossduelle gegen die Genma.",
      primaryCta: "Demo herunterladen",
      secondaryCta: "Bei Steam vorbestellen",
      stats: [
        { value: "25. Sep. 2026", label: "Release-Datum" },
        { value: "Jetzt verfügbar", label: "Spielbare Demo" },
        { value: "PS5 / Xbox / PC", label: "Plattformen" },
        { value: "30 Minuten", label: "Demo-Länge" },
      ],
    },
    video: {
      title: "Onimusha: Way of the Sword - Trailer zum Release-Datum",
      description:
        "Sieh dir den offiziellen Trailer zur Ankündigung des Release-Datums von Onimusha: Way of the Sword an.",
    },
  },
  es: {
    seo: {
      title: "Onimusha: Way of the Sword Wiki - Guía de lanzamiento y demo",
      description:
        "Onimusha: Way of the Sword Wiki con fecha de lanzamiento, guía de la demo, consejos de combate, jefes, personajes, armas, ubicaciones, ediciones y plataformas.",
      keywords:
        "Onimusha, Way of the Sword, fecha de lanzamiento, demo, combate, jefes, PS5, Xbox, PC",
      ogTitle: "Onimusha: Way of the Sword Wiki - Guía de lanzamiento y demo",
      ogDescription:
        "Consulta la fecha de lanzamiento, la demo, los sistemas de combate, los jefes, los personajes y las plataformas de Onimusha: Way of the Sword.",
      twitterTitle: "Onimusha: Way of the Sword Wiki - Guía de lanzamiento y demo",
      twitterDescription:
        "Fecha de lanzamiento, guía de la demo, consejos de combate, jefes, personajes y plataformas de Onimusha: Way of the Sword.",
    },
    hero: {
      badge: "Acción de esgrima de fantasía oscura",
      title: SITE_NAME,
      description:
        "Lucha en un Kyoto oscuro del período Edo como Miyamoto Musashi, dominando paradas, golpes Issen, poderes del Guantelete Oni y brutales duelos contra los Genma.",
      primaryCta: "Descargar demo",
      secondaryCta: "Reservar en Steam",
      stats: [
        { value: "25 sep 2026", label: "Fecha de lanzamiento" },
        { value: "Disponible ahora", label: "Demo jugable" },
        { value: "PS5 / Xbox / PC", label: "Plataformas" },
        { value: "30 minutos", label: "Duración de la demo" },
      ],
    },
    video: {
      title: "Onimusha: Way of the Sword - Tráiler de fecha de lanzamiento",
      description:
        "Mira el tráiler oficial del anuncio de la fecha de lanzamiento de Onimusha: Way of the Sword.",
    },
  },
  fr: {
    seo: {
      title: "Onimusha: Way of the Sword Wiki - Guide sortie et démo",
      description:
        "Onimusha: Way of the Sword Wiki avec date de sortie, guide de démo, astuces de combat, boss, personnages, armes, lieux, éditions et plateformes.",
      keywords:
        "Onimusha, Way of the Sword, date de sortie, démo, combat, boss, PS5, Xbox, PC",
      ogTitle: "Onimusha: Way of the Sword Wiki - Guide sortie et démo",
      ogDescription:
        "Suivez la date de sortie, la démo, les systèmes de combat, les boss, les personnages et les plateformes d’Onimusha: Way of the Sword.",
      twitterTitle: "Onimusha: Way of the Sword Wiki - Guide sortie et démo",
      twitterDescription:
        "Date de sortie, guide de démo, astuces de combat, boss, personnages et plateformes pour Onimusha: Way of the Sword.",
    },
    hero: {
      badge: "Action au sabre dark fantasy",
      title: SITE_NAME,
      description:
        "Traversez un Kyoto sombre de l’époque Edo dans la peau de Miyamoto Musashi et maîtrisez les parades, les frappes Issen, les pouvoirs du gantelet Oni et des duels de boss brutaux contre les Genma.",
      primaryCta: "Télécharger la démo",
      secondaryCta: "Précommander sur Steam",
      stats: [
        { value: "25 sept. 2026", label: "Date de sortie" },
        { value: "Disponible", label: "Démo jouable" },
        { value: "PS5 / Xbox / PC", label: "Plateformes" },
        { value: "30 minutes", label: "Durée de la démo" },
      ],
    },
    video: {
      title: "Onimusha: Way of the Sword - Bande-annonce date de sortie",
      description:
        "Regardez la bande-annonce officielle annonçant la date de sortie d’Onimusha: Way of the Sword.",
    },
  },
  ja: {
    seo: {
      title: "鬼武者 Way of the Sword Wiki - 発売日と体験版ガイド",
      description:
        "鬼武者 Way of the Sword Wiki。発売日、体験版ガイド、戦闘のコツ、ボス、キャラクター、武器、ロケーション、エディション、対応機種を掲載。",
      keywords:
        "鬼武者 Way of the Sword, 発売日, 体験版, 戦闘, ボス, PS5, Xbox, PC",
      ogTitle: "鬼武者 Way of the Sword Wiki - 発売日と体験版ガイド",
      ogDescription:
        "鬼武者 Way of the Sword の発売日、体験版、戦闘システム、ボス、キャラクター、対応機種をチェック。",
      twitterTitle: "鬼武者 Way of the Sword Wiki - 発売日と体験版ガイド",
      twitterDescription:
        "発売日、体験版ガイド、戦闘のコツ、ボス、キャラクター、対応機種をまとめた鬼武者 Way of the Sword 情報サイト。",
    },
    hero: {
      badge: "ダークファンタジー剣戟アクション",
      title: "鬼武者 Way of the Sword Wiki",
      description:
        "宮本武蔵として妖しき江戸初期の京都を駆け抜け、弾き、パリィ、一閃、鬼の籠手の力を使いこなし、幻魔との苛烈なボス戦に挑もう。",
      primaryCta: "体験版を確認",
      secondaryCta: "Steamで予約注文",
      stats: [
        { value: "2026年9月25日", label: "発売日" },
        { value: "配信中", label: "体験版" },
        { value: "PS5 / Xbox / PC", label: "対応機種" },
        { value: "約30分", label: "体験版の長さ" },
      ],
    },
    video: {
      title: "鬼武者 Way of the Sword - 発売日発表トレーラー",
      description:
        "鬼武者 Way of the Sword の公式発売日発表トレーラーを視聴できます。",
    },
  },
  pt: {
    seo: {
      title: "Onimusha: Way of the Sword Wiki - Guia de lancamento e demo",
      description:
        "Onimusha: Way of the Sword Wiki com data de lancamento, guia da demo, dicas de combate, chefes, personagens, armas, locais, edicoes e plataformas.",
      keywords:
        "Onimusha, Way of the Sword, lancamento, demo, combate, chefes, PS5, Xbox, PC",
      ogTitle: "Onimusha: Way of the Sword Wiki - Guia de lancamento e demo",
      ogDescription:
        "Acompanhe data de lancamento, demo, sistemas de combate, chefes, personagens e plataformas de Onimusha: Way of the Sword.",
      twitterTitle: "Onimusha: Way of the Sword Wiki - Guia de lancamento e demo",
      twitterDescription:
        "Data de lancamento, guia da demo, dicas de combate, chefes, personagens e plataformas de Onimusha: Way of the Sword.",
    },
    hero: {
      badge: "Acao de espada em fantasia sombria",
      title: SITE_NAME,
      description:
        "Enfrente um Kyoto sombrio do periodo Edo como Miyamoto Musashi, dominando parries, golpes Issen, poderes da Manopla Oni e duelos brutais contra os Genma.",
      primaryCta: "Baixar demo",
      secondaryCta: "Reservar na Steam",
      stats: [
        { value: "25 set 2026", label: "Lancamento" },
        { value: "Disponivel agora", label: "Demo jogavel" },
        { value: "PS5 / Xbox / PC", label: "Plataformas" },
        { value: "30 minutos", label: "Duracao da demo" },
      ],
    },
    video: {
      title: "Onimusha: Way of the Sword - Trailer da data de lancamento",
      description:
        "Assista ao trailer oficial de anuncio da data de lancamento de Onimusha: Way of the Sword.",
    },
  },
  ru: {
    seo: {
      title: "Onimusha: Way of the Sword Wiki - data vyhoda i demo-gaid",
      description:
        "Onimusha: Way of the Sword Wiki: data vyhoda, demo-gaid, sovety po boyu, bossy, personazhi, oruzhie, lokacii, izdaniya i platformy.",
      keywords:
        "Onimusha, Way of the Sword, data vyhoda, demo, boy, bossy, PS5, Xbox, PC",
      ogTitle: "Onimusha: Way of the Sword Wiki - data vyhoda i demo-gaid",
      ogDescription:
        "Sledite za datoi vyhoda, demo-versiei, boevymi sistemami, bossami, personazhami i platformami Onimusha: Way of the Sword.",
      twitterTitle: "Onimusha: Way of the Sword Wiki - data vyhoda i demo-gaid",
      twitterDescription:
        "Data vyhoda, demo-gaid, sovety po boyu, bossy, personazhi i platformy dlya Onimusha: Way of the Sword.",
    },
    hero: {
      badge: "Mrachnoe fehtovanie v dark fantasy",
      title: SITE_NAME,
      description:
        "Prokladyvaite put cherez temnyi Kyoto epokhi Edo v roli Miyamoto Musashi, osvaivaya parirovanie, udary Issen, sily Oni Gauntlet i zhestokie bitvy s Genma.",
      primaryCta: "Skachat demo",
      secondaryCta: "Predzakaz v Steam",
      stats: [
        { value: "25 sent. 2026", label: "Data vyhoda" },
        { value: "Dostupna seichas", label: "Demo" },
        { value: "PS5 / Xbox / PC", label: "Platformy" },
        { value: "30 minut", label: "Dlina demo" },
      ],
    },
    video: {
      title: "Onimusha: Way of the Sword - Trailer s datoi vyhoda",
      description:
        "Smotrite oficialnyi trailer s anonsom daty vyhoda Onimusha: Way of the Sword.",
    },
  },
  tr: {
    seo: {
      title: "Onimusha: Way of the Sword Wiki - cikis tarihi ve demo rehberi",
      description:
        "Onimusha: Way of the Sword Wiki cikis tarihi, demo rehberi, savas ipuclari, bosslar, karakterler, silahlar, konumlar, surumler ve platformlari kapsar.",
      keywords:
        "Onimusha, Way of the Sword, cikis tarihi, demo, savas, bosslar, PS5, Xbox, PC",
      ogTitle: "Onimusha: Way of the Sword Wiki - cikis tarihi ve demo rehberi",
      ogDescription:
        "Onimusha: Way of the Sword icin cikis tarihi, demo, savas sistemleri, bosslar, karakterler ve platformlari takip edin.",
      twitterTitle: "Onimusha: Way of the Sword Wiki - cikis tarihi ve demo rehberi",
      twitterDescription:
        "Cikis tarihi, demo rehberi, savas ipuclari, bosslar, karakterler ve platformlar icin Onimusha: Way of the Sword.",
    },
    hero: {
      badge: "Karanlik fantastik kilic aksiyonu",
      title: SITE_NAME,
      description:
        "Miyamoto Musashi olarak karanlik Edo donemi Kyoto'sunda savasin; parry, Issen darbeleri, Oni Eldiveni gucleri ve Genma'ya karsi sert boss dovuslerini ogrenin.",
      primaryCta: "Demoyu indir",
      secondaryCta: "Steam'de on siparis ver",
      stats: [
        { value: "25 Eyl 2026", label: "Cikis tarihi" },
        { value: "Simdi mevcut", label: "Oynanabilir demo" },
        { value: "PS5 / Xbox / PC", label: "Platformlar" },
        { value: "30 dakika", label: "Demo suresi" },
      ],
    },
    video: {
      title: "Onimusha: Way of the Sword - Cikis tarihi fragmani",
      description:
        "Onimusha: Way of the Sword resmi cikis tarihi duyuru fragmanini izleyin.",
    },
  },
};

export function getHomeCopy(locale: string): LocaleHomeCopy {
  return LOCALE_COPY[locale] ?? EN_COPY;
}
