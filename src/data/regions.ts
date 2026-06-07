export const REGION_IDS = [
  "elendor",
  "tul-assar-desert",
  "na-qareth",
  "veldemar",
  "avenhold",
  "daskal",
  "caer-andros",
  "northern-kingdoms",
  "gorthamar",
  "shaylaan",
] as const;

export type RegionId = (typeof REGION_IDS)[number];

export type RegionContentSection = {
  heading?: string;
  anchorId?: string;
  paragraphs: string[];
  bullets?: string[];
  /** Insert bullets after the paragraph at this index (0-based). */
  bulletsAfter?: number;
};

export type RegionImage = {
  src: string;
  altRu: string;
  altEn: string;
  /** "start" for the opening section, or a section anchorId. */
  placement: string;
};

export type Region = {
  id: RegionId;
  svgPathId: string;
  nameRu: string;
  nameEn: string;
  descriptionRu: string;
  descriptionEn: string;
  pathD: string;
  sectionsRu?: RegionContentSection[];
  sectionsEn?: RegionContentSection[];
  images?: RegionImage[];
};

export const REGIONS: Region[] = [
  {
    id: "elendor",
    svgPathId: "Elendor",
    nameRu: "Элендор",
    nameEn: "Elendor",
    images: [
      {
        src: "/Elendor2.jpg",
        altRu: "Элендор — руины эльфийского королевства",
        altEn: "Elendor — ruins of the elven kingdom",
        placement: "start",
      },
    ],
    descriptionRu:
      "Руины эльфийского королевства. После катастрофы ещё никому не удалось добраться до этих мест и вернуться, чтобы рассказать, что там увидел.",
    descriptionEn:
      "Ruins of the elven kingdom. Since the catastrophe, no one has yet reached those lands and returned to tell what they saw.",
    pathD:
      "M1632,3357c58.45-2.16,467.09-134.19,570-143s614.66,19.78,704,20,240.37-14.04,252,40-451.2,315.67-422,387,422.61,32.83,427,80-207.66,133.91-210,181,130.39,79.72,121,136-120.55-4.98-132,29,21.69,123.07,4,150-97.19-28.23-120-4,36,365.55,20,368-176.24,112.05-257,74-114.85-283.65-195-277-115.66,59.66-156,89-409.01,136.51-447,141-241.52-111.25-266-174-127.58-265.24-152-317-83.49-159.16-83-168c-42.07-26.8,23.71-84.15-35-170C1229.16,3990.79,976.507,3381.21,1632,3357Z",
  },
  {
    id: "tul-assar-desert",
    svgPathId: "Tul_Assar_desert",
    nameRu: "Тул'Ассар",
    nameEn: "Tul'Assar",
    images: [
      {
        src: "/Bazar.png",
        altRu: "Тул'Ассар — базар",
        altEn: "Tul'Assar — bazaar",
        placement: "start",
      },
    ],
    descriptionRu:
      "Тул'Ассар — некогда великое царство людей, прекрасный оазис с развитой магией и экономикой. Во время Элендорской Катастрофы оно было почти полностью уничтожено. Смерчи, землетресения, невиданные доселе песчаные бури утопили большую часть городов в песках. Те, кому удалось выжить, бежали на север в земли Даскала либо на запад в На'Кхарет.\n\nОколо пятидесяти лет назад природные катаклизмы стихли достаточно, чтобы вновь началось заселение пустыни, но оно идёт довольно медленно и в основном лишь с северной части. Дюны похоронили много богатств.",
    descriptionEn:
      "Tul'Assar was once a great human realm—a splendid oasis with advanced magic and a thriving economy. During the Elendor Catastrophe it was nearly wiped out entirely. Dust devils, earthquakes, and sandstorms unlike any seen before buried most of its cities beneath the dunes. Those who survived fled north to the lands of Daskal or west to Na'Khareth.\n\nSome fifty years ago the natural calamities subsided enough for resettlement of the desert to begin again, but progress is slow and comes mainly from the northern reaches. The dunes have entombed vast wealth.",
    pathD:
      "M2037,2611l118,147,8,152,3,137s-51.32,77.82-38,101,33,42,33,42l-163,35-151-98s-233.83-.12-239-1-423,23-423,23L995,3268,547,3167l374-63,249-123,32-195-53-127,81-158Z",
  },
  {
    id: "na-qareth",
    svgPathId: "Na_Qareth_",
    nameRu: "На'Кхарет",
    nameEn: "Na'Khareth",
    images: [
      {
        src: "/NaQareth1.jpg",
        altRu: "На'Кхарет",
        altEn: "Na'Khareth",
        placement: "start",
      },
    ],
    descriptionRu:
      "На'Кхарет — самое густонаселённое, но при этом довольно бедное пустынное королевство.",
    descriptionEn:
      "Na'Khareth is the most densely populated yet one of the poorest desert kingdoms.",
    sectionsRu: [
      {
        paragraphs: [
          "На'Кхарет — самое густонаселённое, но при этом довольно бедное пустынное королевство. Раньше это была просто сеть разрозненных поселений: часть деревень строилась у воды, а остальные прятались на дне глубоких каньонов. Со временем они объединились. Людей здесь живет много, но из-за дефицита ресурсов народ весьма беден.",
        ],
      },
      {
        heading: "Население",
        paragraphs: [
          "Народ здесь крайне разношерстный. В основном это потомки беженцев из Тул'Ассара, а также все те, кто в разное время скрывался от властей Даскала — от политических изгоев до преступников. Единой культуры у них нет, это скорее вынужденный союз очень разных людей.",
        ],
      },
      {
        heading: "Отношения с Даскалом",
        paragraphs: [
          "Между странами идет постоянная вражда. Не так давно Даскал развязал несколько войн из-за того, что в На'Кхарете укрывалось слишком много магов.",
          "На'Кхарет проигрывал почти все крупные столкновения на поле боя, но удержать власть Даскал так и не смог — оккупационные войска каждый раз увязали в пустыне, несли потери и были вынуждены отступать.",
          "Сейчас Даскал сменил тактику: вместо прямых нападений они начали экономическую войну. За каждого живого мага, приведенного из На'Кхарета, Даскал назначил огромную награду. Для нищего населения страны это стало серьезным испытанием, и теперь магам приходится опасаться не столько чужой армии, сколько собственных соседей.",
        ],
      },
    ],
    sectionsEn: [
      {
        paragraphs: [
          "Na'Khareth is the most densely populated yet one of the poorest desert kingdoms. It was once merely a scattering of settlements: some villages built by water, others hidden in the depths of deep canyons. Over time they united. Many people live here, but scarce resources leave the populace very poor.",
        ],
      },
      {
        heading: "Population",
        paragraphs: [
          "The people here are extremely diverse—mostly descendants of refugees from Tul'Assar, and all who at various times hid from Daskal's authorities, from political exiles to criminals. They share no single culture; it is rather a forced union of very different people.",
        ],
      },
      {
        heading: "Relations with Daskal",
        paragraphs: [
          "Constant hostility runs between the two countries. Not long ago Daskal waged several wars because too many mages took refuge in Na'Khareth.",
          "Na'Khareth lost nearly every major battle on the field, yet Daskal could not hold power—occupation forces each time bogged down in the desert, took losses, and were forced to retreat.",
          "Now Daskal has changed tactics: instead of direct attacks they began an economic war. For every living mage brought from Na'Khareth, Daskal set a huge bounty. For the country's destitute population this became a serious trial, and now mages must fear their own neighbors as much as a foreign army.",
        ],
      },
    ],
    pathD:
      "M2950,2856l-293-43-84-185-50-1-72,81-119-28,14-78-28-63-285-23-67,6,60,83,131,154,6,170,177,87,245-31,101-56,65,69,156-45Z",
  },
  {
    id: "veldemar",
    svgPathId: "Veldemar",
    nameRu: "Велдемар",
    nameEn: "Veldemar",
    images: [
      {
        src: "/Veldemar1.png",
        altRu: "Велдемар — вид 1",
        altEn: "Veldemar — view 1",
        placement: "start",
      },
      {
        src: "/Veldemar2.png",
        altRu: "Велдемар — вид 2",
        altEn: "Veldemar — view 2",
        placement: "daskal-relations",
      },
      {
        src: "/Veldemar3.png",
        altRu: "Велдемар — вид 3",
        altEn: "Veldemar — view 3",
        placement: "foul-fens",
      },
    ],
    descriptionRu:
      "Велдемар — богатое лесное герцогство на юго-западной окраине Даскальской Империи.",
    descriptionEn:
      "Veldemar is a wealthy forest duchy on the southwestern fringe of the Daskal Empire.",
    sectionsRu: [
      {
        paragraphs: [
          "Велдемар — богатое лесное герцогство на юго-западной окраине Даскальской Империи, населенное преимущественно людьми и полуросликами. Формально регион подчиняется императору, платит налоги и поставляет войска, но из-за труднопроходимой лесистой местности и специфики населения сохраняет широкую внутреннюю автономию.",
        ],
      },
      {
        heading: "Политическое и экономическое устройство",
        paragraphs: [
          "Власть в Велдемаре децентрализована. Сам герцог выступает скорее верховным арбитром, чем абсолютным правителем, а реальное управление на местах разделено между пятью силами:",
          "Экономика региона держится на экспорте качественной древесины, ремесленных изделий, фруктов и овощей. Из-за развитых лесных промыслов местное ополчение не имеет тяжелой кавалерии, но славится своими первоклассными охотниками и лучниками.",
        ],
        bullets: [
          "Дворянские дома — контролируют крупные города и экспорт леса.",
          "Старосты деревень — управляют человеческими общинами.",
          "Общины полуросликов — руководят пашнями, аграрным сектором и садоводством.",
          "Лесные хранители — друиды, следящие за балансом в чаще.",
          "Ведьмы Гнилых Топей — теневая власть на заброшенных окраинах.",
        ],
        bulletsAfter: 0,
      },
      {
        heading: "Отношения с Даскалом и тайная магия",
        anchorId: "daskal-relations",
        paragraphs: [
          "Отношения с Империей строятся на деликатном и опасном балансе. Велдемар исправно платит дань провиантом и сырьем, за счет чего откупается от жесткого имперского контроля.",
          "Главный секрет герцогства — скрытное использование «мягкой» природной магии: бытовых чар, знахарства и заговоров на урожай. Она не является повсеместной, но распространена во многих общинах, особенно отдаленных от крупных городов. Местное население лояльно к практикующим друидам и покрывает их от ищеек Империи. Герцог вынужден публично демонстрировать Даскалу полную покорность, но тайно саботирует любые попытки имперских инквизиторов устроить охоту на приверженцев старой веры на его землях.",
        ],
      },
      {
        heading: "Живность и географические угрозы",
        paragraphs: [
          "Большая часть Велдемара безопасна и окультурена, однако у региона сложные границы:",
        ],
      },
      {
        heading: "Обжитые леса",
        paragraphs: [
          "Здесь водятся волки, медведи и лесные тролли, но если уйти в глубокую чащу, можно столкнуться с опасными реликтовыми существами.",
        ],
      },
      {
        heading: "Горный хребет (южная граница)",
        paragraphs: [
          "Высокие горы отделяют Велдемар от южных джунглей Саремхат. На перевалах обитают гарпии и горные львы, а из джунглей иногда залетают экзотические птицы, например, Саремхатский пересмешник.",
        ],
      },
      {
        heading: "Гнилые Топи (западная граница)",
        anchorId: "foul-fens",
        paragraphs: [
          "Дикие, труднопроходимые болота, где правят карги (ведьмы) и укрываются отступники, практикующие темные искусства. Здесь зафиксирована высокая активность нежити — в основном гулей и призраков.",
        ],
      },
      {
        heading: "Историческая справка",
        paragraphs: [
          "В прошлом Гнилые Топи занимали гораздо большую площадь. Во время Даскальской инквизиции значительную часть болот осушили, а карг загнали глубже на запад. Раны, нанесенные лесам пожарами, которые устроила карательная армия Даскала, давно заросли новой зеленью, но шрамы той войны до сих пор напоминают местным жителям об истинной цене имперского порядка.",
        ],
      },
    ],
    sectionsEn: [
      {
        paragraphs: [
          "Veldemar is a wealthy forest duchy on the southwestern fringe of the Daskal Empire, home chiefly to humans and halflings. Formally the region answers to the emperor, pays taxes, and supplies troops, yet rugged wooded terrain and the character of its people preserve broad internal autonomy.",
        ],
      },
      {
        heading: "Political and economic order",
        paragraphs: [
          "Power in Veldemar is decentralized. The duke acts more as a supreme arbiter than an absolute ruler, while real local governance is shared among five forces:",
          "The regional economy rests on exports of quality timber, crafted goods, fruit, and vegetables. With forestry so central, the local militia fields little heavy cavalry but is renowned for first-rate hunters and archers.",
        ],
        bullets: [
          "Noble houses — control major cities and the timber trade.",
          "Village elders — govern human communities.",
          "Halfling communes — oversee fields, agriculture, and orchards.",
          "Forest wardens — druids who keep balance in the deep woods.",
          "Witches of the Foul Fens — a shadow power on the forsaken margins.",
        ],
        bulletsAfter: 0,
      },
      {
        heading: "Relations with Daskal and secret magic",
        anchorId: "daskal-relations",
        paragraphs: [
          "Relations with the Empire rest on a delicate and dangerous balance. Veldemar pays its tribute faithfully in provisions and raw materials, buying relief from harsh imperial oversight.",
          "The duchy's great secret is the hidden use of \"soft\" natural magic—household charms, folk healing, and crop blessings. It is not universal, but common in many communities, especially those far from the great towns. The common folk are loyal to practicing druids and shield them from imperial hunters. The duke must publicly show Daskal complete obedience, yet secretly sabotages any attempt by imperial inquisitors to hunt followers of the old faith on his lands.",
        ],
      },
      {
        heading: "Wildlife and geographic threats",
        paragraphs: [
          "Most of Veldemar is safe and settled, yet the region's borders are treacherous:",
        ],
      },
      {
        heading: "Settled forests",
        paragraphs: [
          "Wolves, bears, and forest trolls roam here, but those who push into the deep greenwood may meet dangerous relict creatures.",
        ],
      },
      {
        heading: "The mountain range (southern border)",
        paragraphs: [
          "High peaks separate Veldemar from the southern jungles of Saremhat. Harpies and mountain lions haunt the passes, and exotic birds sometimes drift up from the jungle—such as the Saremhat mockingbird.",
        ],
      },
      {
        heading: "The Foul Fens (western border)",
        anchorId: "foul-fens",
        paragraphs: [
          "Wild, nearly impassable swamps where hags rule and outcasts practice the dark arts. Undead activity runs high—chiefly ghouls and ghosts.",
        ],
      },
      {
        heading: "Historical note",
        paragraphs: [
          "The Foul Fens once covered far more ground. During the Daskal Inquisition much of the marsh was drained and the hags driven deeper west. The wounds the punitive imperial armies burned into the woods have long since grown green again, yet scars of that war still remind the people of the true price of imperial order.",
        ],
      },
    ],
    pathD:
      "M1407,2174l152,172-126,121-294-110-197-91-258-51L504,2070l196-77,217,57,133-74,76-12,83,136Z",
  },
  {
    id: "avenhold",
    svgPathId: "Avenhold",
    nameRu: "Авенхольд",
    nameEn: "Avenhold",
    descriptionRu:
      "Авенхольд — крепости и мосты над реками, оплот торговли в сердце континента.",
    descriptionEn:
      "Avenhold's fortresses and river bridges stand as a bastion of trade in the continent's heart.",
    pathD:
      "M1759,2122l-102,47-180-32-68,37,152,169-126,128,21,52,569,87-57-103,19-112-143-175Z",
  },
  {
    id: "daskal",
    svgPathId: "Daskal",
    nameRu: "Даскал",
    nameEn: "Daskal",
    descriptionRu:
      "Горные кланы Даскала хранят древние клятвы и рудники, питающие войны низин.",
    descriptionEn:
      "Daskal's mountain clans keep ancient oaths and mines that fuel the lowlands' wars.",
    pathD:
      "M1330,1696l97-60,112-54,52,151,79,153,77,186-49,49-41,37-182-33-78,46-185-71-68-148-87,15-73-82-66-250L726,1389l236-38,161-11,74,4-27,213,66,168Z",
  },
  {
    id: "caer-andros",
    svgPathId: "Caer_Andros",
    nameRu: "Кэр Андрос",
    nameEn: "Caer Andros",
    descriptionRu:
      "Северная цитадель Кэр Андрос смотрит в море туманов и ледяных ветров.",
    descriptionEn:
      "The northern citadel of Caer Andros watches over a sea of mist and ice winds.",
    pathD:
      "M1155,1020l161-46,146,41,181,32,74,54-78,156-86,226-13,104-204,118-91,23-57-187,27-197,8-145-85-72Z",
  },
  {
    id: "northern-kingdoms",
    svgPathId: "Northen_Kingsdoms",
    nameRu: "Северные королевства",
    nameEn: "Northern Kingdoms",
    descriptionRu:
      "Союз северных коронелей — политика, интриги и сталь на границе с дикими землями.",
    descriptionEn:
      "The union of northern crowns — politics, intrigue, and steel on the edge of the wilds.",
    pathD:
      "M1148,1004.46l-76-229,99-115,165,11,181-21,188,20,130-64,276,64-2,48-163,62-83,121-115,102-32,94-75-53-252-46-196,1Z",
  },
  {
    id: "gorthamar",
    svgPathId: "Gorthamar",
    nameRu: "Гортамар",
    nameEn: "Gorthamar",
    descriptionRu:
      "Гортамар — суровые высокогорья, где ордена и отшельники хранят забытые знания.",
    descriptionEn:
      "Gorthamar's harsh highlands, where orders and hermits guard forgotten lore.",
    pathD:
      "M1842,469l-24,83-16,41,30,13-121,59-200-20-170,22-164-16,250-167Z",
  },
  {
    id: "shaylaan",
    svgPathId: "Shaylaan",
    nameRu: "Шейлаан",
    nameEn: "Shaylaan",
    descriptionRu:
      "Восточный Шейлаан — сады, базары и шёпот караванов из-за Великой Пустоши.",
    descriptionEn:
      "Eastern Shaylaan — gardens, bazaars, and whispers of caravans from beyond the Great Waste.",
    pathD:
      "M2494,786l-290,4L1945,940l-79,213-125,156-4,197,18,234,88,256,157,158,156,123,315,86,344-100,197-179,202-227,29-292-45-276-125-188L2933,931l-134-73Z",
  },
];

export function getRegionById(id: RegionId): Region | undefined {
  return REGIONS.find((r) => r.id === id);
}

export function getRegionBySvgPathId(svgPathId: string): Region | undefined {
  return REGIONS.find((r) => r.svgPathId === svgPathId);
}

export function getRegionName(region: Region, locale: string): string {
  return locale === "en" ? region.nameEn : region.nameRu;
}

export function getRegionDescription(region: Region, locale: string): string {
  return locale === "en" ? region.descriptionEn : region.descriptionRu;
}

export function getRegionDescriptionParagraphs(
  region: Region,
  locale: string,
): string[] {
  return getRegionDescription(region, locale)
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function getRegionImages(
  region: Region,
  locale: string,
): { src: string; alt: string }[] {
  if (!region.images?.length) return [];
  return region.images.map((image) => ({
    src: image.src,
    alt: locale === "en" ? image.altEn : image.altRu,
  }));
}

export function getRegionImageByPlacement(
  region: Region,
  placement: string,
  locale: string,
): { src: string; alt: string } | null {
  const image = region.images?.find((item) => item.placement === placement);
  if (!image) return null;
  return {
    src: image.src,
    alt: locale === "en" ? image.altEn : image.altRu,
  };
}

export function getRegionContentSections(
  region: Region,
  locale: string,
): RegionContentSection[] {
  const sections = locale === "en" ? region.sectionsEn : region.sectionsRu;
  if (sections?.length) {
    return sections;
  }
  return [{ paragraphs: getRegionDescriptionParagraphs(region, locale) }];
}
