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
  /** Source pixel size — keeps preview aspect ratio correct. */
  width?: number;
  height?: number;
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
      "Тул'Ассар — некогда великое царство людей, прекрасный оазис с развитой магией и экономикой.",
    descriptionEn:
      "Tul'Assar was once a great human realm—a splendid oasis with advanced magic and a thriving economy.",
    sectionsRu: [
      {
        paragraphs: [
          "Тул'Ассар — некогда великое царство людей, прекрасный оазис с развитой магией и экономикой. Во время Элендорской Катастрофы оно было почти полностью уничтожено. Смерчи, землетресения, невиданные доселе песчаные бури утопили большую часть городов в песках. Те, кому удалось выжить, бежали на север в земли Даскала либо на запад в На'Кхарет.",
        ],
      },
      {
        paragraphs: [
          "Около пятидесяти лет назад природные катаклизмы стихли достаточно, чтобы вновь началось заселение пустыни, но оно идёт довольно медленно и в основном лишь с северной части. Дюны похоронили много богатств.",
        ],
      },
    ],
    sectionsEn: [
      {
        paragraphs: [
          "Tul'Assar was once a great human realm—a splendid oasis with advanced magic and a thriving economy. During the Elendor Catastrophe it was nearly wiped out entirely. Dust devils, earthquakes, and sandstorms unlike any seen before buried most of its cities beneath the dunes. Those who survived fled north to the lands of Daskal or west to Na'Khareth.",
        ],
      },
      {
        paragraphs: [
          "Some fifty years ago the natural calamities subsided enough for resettlement of the desert to begin again, but progress is slow and comes mainly from the northern reaches. The dunes have entombed vast wealth.",
        ],
      },
    ],
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
        ],
      },
      {
        paragraphs: [
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
        ],
      },
      {
        paragraphs: [
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
    images: [
      {
        src: "/Avenhold1.png",
        altRu: "Авенхолд",
        altEn: "Avenhold",
        placement: "start",
      },
    ],
    descriptionRu:
      "Авенхолд — бескрайнее королевство высоких степей, ветров и бесконечных горизонтов.",
    descriptionEn:
      "Avenhold is a boundless realm of high steppes, wind, and endless horizons.",
    sectionsRu: [
      {
        paragraphs: [
          "«Всадник может пережить поражение. Может пережить голод. Может пережить смерть своего короля. Но он не должен пережить позор служения врагу.»",
          "— старая авенхолдская поговорка.",
        ],
      },
      {
        paragraphs: [
          "Авенхолд — бескрайнее королевство высоких степей, ветров и бесконечных горизонтов. Его жители веками жили верхом, а местная знать скорее напоминает кочевые рыцарские кланы, чем оседлых аристократов.",
          "Во всём Тэфироте нет кавалерии опаснее авенхолдской. Их всадники способны неделями жить в седле, пересекать половину страны без обозов и исчезать в высокой траве прежде, чем противник поймёт, что попал в ловушку.",
          "Сегодня Авенхолд остаётся формально самостоятельным королевством, но фактически является вассалом Империи Даскал.",
          "Король сидит на троне.",
          "Лорды правят своими землями.",
          "Законы Авенхолда продолжают действовать.",
          "Но все понимают, что настоящая свобода была потеряна много поколений назад.",
        ],
      },
      {
        heading: "Милосердие, ставшее проклятием",
        paragraphs: [
          "После Великого Катаклизма Авенхолд открыл границы для беженцев.",
          "Среди них были:",
          "Для жителей равнин это казалось правильным решением.",
          "Для Октавиана Даска это выглядело как создание нового очага угрозы.",
          "Когда Даскал начал войну против магов, Авенхолд отказался выдавать беженцев.",
          "Так началась война, навсегда изменившая судьбу королевства.",
        ],
        bullets: [
          "учёные и маги Тул'Ассара;",
          "выжившие эльфы Элендора;",
          "тысячи обычных переселенцев.",
        ],
        bulletsAfter: 1,
      },
      {
        heading: "Битва у Башни Лаконии",
        paragraphs: [
          "Главным символом сопротивления Авенхолда стала Битва у Башни Лаконии.",
          "В тот день тяжёлые легионы Даскала столкнулись с союзом тул'ассарских магов и авенхолдской лёгкой конницы.",
          "Пока всадники изматывали легионеров ложными атаками и притворными отступлениями, маги превращали построения Даскала в пылающие руины.",
          "Империя потерпела одно из самых тяжёлых поражений в своей истории.",
          "Даже спустя два столетия офицеры Даскала изучают это сражение как пример того, насколько опасным может быть союз магии и мобильной армии.",
        ],
      },
      {
        heading: "Мир на Бумаге",
        paragraphs: [
          "Несмотря на победу при Лаконии, Авенхолд не смог выиграть войну.",
          "Даскал отказался сражаться на условиях противника.",
          "Вместо новых генеральных битв Империя начала душить королевство экономически.",
          "Перекрывались торговые маршруты.",
          "Блокировались города.",
          "Уничтожались склады.",
          "Год за годом ресурсы Авенхолда истощались.",
          "В конце концов был заключён договор, который жители равнин до сих пор называют «Миром на Бумаге».",
          "Согласно ему:",
        ],
        bullets: [
          "Авенхолд сохранял собственную корону и внутреннее самоуправление.",
          "Империя не размещала постоянные гарнизоны на территории королевства.",
          "Авенхолд поставлял коней и элитную кавалерию для нужд Даскала.",
          "Любая магическая деятельность объявлялась вне закона.",
        ],
        bulletsAfter: 8,
      },
      {
        paragraphs: [
          "Так Даскал уничтожил союз конницы и магии, не уничтожая сам Авенхолд.",
        ],
      },
    ],
    sectionsEn: [
      {
        paragraphs: [
          "\"A rider can survive defeat. He can survive hunger. He can survive the death of his king. But he must not survive the shame of serving the enemy.\"",
          "— an old Avenhold proverb.",
        ],
      },
      {
        paragraphs: [
          "Avenhold is a boundless realm of high steppes, wind, and endless horizons. Its people have lived in the saddle for centuries, and the local nobility resembles roaming knightly clans more than settled aristocrats.",
          "Nowhere in Tephirot is cavalry more dangerous than Avenhold's. Its riders can live in the saddle for weeks, cross half the country without baggage trains, and vanish into the tall grass before the enemy realizes they have walked into a trap.",
          "Today Avenhold remains formally an independent kingdom, yet in practice it is a vassal of the Daskal Empire.",
          "The king sits the throne.",
          "Lords rule their lands.",
          "Avenhold's laws still hold.",
          "Yet all understand that true freedom was lost many generations ago.",
        ],
      },
      {
        heading: "Mercy that became a curse",
        paragraphs: [
          "After the Great Cataclysm Avenhold opened its borders to refugees.",
          "Among them were:",
          "To the people of the plains it seemed the right choice.",
          "To Octavian Dask it looked like breeding a new threat.",
          "When Daskal began its war against mages, Avenhold refused to surrender the refugees.",
          "Thus began a war that forever changed the kingdom's fate.",
        ],
        bullets: [
          "scholars and mages from Tul'Assar;",
          "surviving elves of Elendor;",
          "thousands of ordinary settlers.",
        ],
        bulletsAfter: 1,
      },
      {
        heading: "The Battle of Laconia Tower",
        paragraphs: [
          "The great symbol of Avenhold's resistance was the Battle of Laconia Tower.",
          "That day Daskal's heavy legions faced an alliance of Tul'Assar mages and Avenhold's light cavalry.",
          "While riders wore down the legionaries with feints and false retreats, mages turned Daskal's formations into burning ruins.",
          "The Empire suffered one of the heaviest defeats in its history.",
          "Even two centuries later Daskal officers study the battle as proof of how deadly an alliance of magic and a mobile army can be.",
        ],
      },
      {
        heading: "Peace on Paper",
        paragraphs: [
          "Despite victory at Laconia, Avenhold could not win the war.",
          "Daskal refused to fight on the enemy's terms.",
          "Instead of new pitched battles the Empire strangled the kingdom economically.",
          "Trade routes were cut.",
          "Cities were blockaded.",
          "Storehouses were destroyed.",
          "Year by year Avenhold's resources bled away.",
          "At last a treaty was signed that the people of the plains still call the \"Peace on Paper.\"",
          "Under it:",
        ],
        bullets: [
          "Avenhold kept its crown and internal self-rule.",
          "The Empire placed no permanent garrisons on the kingdom's soil.",
          "Avenhold supplied horses and elite cavalry for Daskal's needs.",
          "All magical activity was outlawed.",
        ],
        bulletsAfter: 8,
      },
      {
        paragraphs: [
          "Thus Daskal broke the alliance of cavalry and magic without destroying Avenhold itself.",
        ],
      },
    ],
    pathD:
      "M1759,2122l-102,47-180-32-68,37,152,169-126,128,21,52,569,87-57-103,19-112-143-175Z",
  },
  {
    id: "daskal",
    svgPathId: "Daskal",
    nameRu: "Даскал",
    nameEn: "Daskal",
    images: [
      {
        src: "/Daskal1.png",
        altRu: "Империя Даскал",
        altEn: "Daskal Empire",
        placement: "start",
      },
    ],
    descriptionRu:
      "Империя Даскал — крупнейшая, самая дисциплинированная и технологически развитая держава Тэфирота.",
    descriptionEn:
      "The Daskal Empire is the largest, most disciplined, and most technologically advanced realm in Tephirot.",
    sectionsRu: [
      {
        paragraphs: [
          "«Они называют нас жестокими. Но посмотрите на Элендор — зияющую рану на теле мира, оставленную гордыней магов. Если цена за то, чтобы небеса больше не рвались на части, — это строгий закон и пепел на губах наших паладинов, мы будем платить её с гордостью.» — из трактата «Необходимое Решение».",
        ],
      },
      {
        paragraphs: [
          "Империя Даскал — крупнейшая, самая дисциплинированная и технологически развитая держава Тэфирота. Для внешних врагов и мятежников это безжалостная военная машина. Но для своих граждан Даскал — сияющий маяк цивилизации, щит, укрывший человечество от полного уничтожения. Это города с идеальными акведуками, безопасными дорогами, строгими, но справедливыми судами и монументальной белокаменной архитектурой с рыжеватыми прожилками.",
        ],
      },
      {
        heading: "История: наследие Октавиана Даска",
        paragraphs: [
          "Государство в его нынешнем виде было выковано в огне Великого Катаклизма. Когда мир рушился, а небеса почернели, именно полководец Октавиан Даск смог навести порядок в хаосе.",
          "Он открыто обвинил магов в гибели мира. Заключив стратегический союз с учёными из Кэр Андроса — единственными союзниками Даскала в те тёмные времена, — Октавиан получил технологическое преимущество.",
          "Объединённые силы Даскала и Кэр Андроса совершили невозможное: они разбили могущественную конницу и чародеев Авенхолда, захватив равнины, а затем подчинили лесное герцогство Велдемар. Так Октавиан сковал Империю, которая стоит до сих пор.",
        ],
      },
      {
        heading: "Эфирит (Аскалонский камень): благородная жертва",
        paragraphs: [
          "Основа военной мощи Даскала — эфирит, минерал, нейтрализующий и впитывающий прану. Оружие и щиты из эфирита позволяют обычным людям, не имеющим дара, противостоять архимагам и чудовищам.",
          "Но защита имеет цену: эфирит высасывает жизненную силу самого носителя. Элитные инквизиторы Даскала седеют к тридцати годам, их кожа бледнеет, а тела истощаются. В Империи это не скрывают — это называется «благородным увяданием». Солдаты, отдающие своё здоровье эфириту, считаются величайшими героями нации, жертвующими собой ради того, чтобы обычные граждане спали спокойно.",
        ],
      },
      {
        heading: "Внешняя политика: вассалы, враги и союзники",
        paragraphs: [
          "Империя несёт на себе колоссальный груз ответственности за континент, и её дипломатия строится на силе, прагматизме и идеологии выживания.",
        ],
        bullets: [
          "Авенхолд: вассал, покорённый Октавианом Даском. Поставляет Империи элитную кавалерию. Даскал жестоко подавляет там любые магические культы, из-за чего местные считают имперцев оккупантами.",
          "Велдемар: вассал. Поставляет провизию и дерево. Даскал позволяет им внутреннюю автономию — легионы не умеют воевать в густых лесах, а Империя умрёт от голода без велдемарского зерна.",
          "Тул'Ассар: для граждан — проклятая пустошь, памятник гордыне магов; для элиты — ресурсная база. Империя, часто руками Ордена Милосердного Пламени, контролирует там раскопки, чтобы изымать запретные техномагические артефакты и не давать им попасть в руки мятежников.",
          "Шайлаан: в прошлом Даскал вёл с ними кровопролитные войны. Сейчас прямое столкновение невозможно — горные хребты, воздвигнутые Сошедшим Кетиром, наглухо отрезали Шайлаан от мира. Контактов нет, но в Даскале к ним относятся с жгучим презрением, считая трусами, которые отгородились каменной стеной, бросив остальное человечество.",
          "Северные королевства: дикий фронтир и рассадник ереси. На севере всё ещё процветают культы и вольные поселения, открыто практикующие колдовство. Империя периодически отправляет туда карательные легионы, чтобы выжигать магическую заразу и не давать северянам объединиться.",
          "Гортмар: прагматичный и крайне ценный союзник. Дварфы предпочитают надёжный металл нестабильной магии, что идеологически полностью устраивает Даскал. Гортмар снабжает имперские легионы сталью, инструментами и сложными механизмами, получая взамен продовольствие и охрану торговых караванов.",
        ],
        bulletsAfter: 0,
      },
    ],
    sectionsEn: [
      {
        paragraphs: [
          "\"They call us cruel. But look at Elendor—a gaping wound upon the world, left by the pride of mages. If the price that the heavens never tear apart again is strict law and ash upon our paladins' lips, we will pay it with pride.\" — from the treatise \"The Necessary Resolution\".",
        ],
      },
      {
        paragraphs: [
          "The Daskal Empire is the largest, most disciplined, and most technologically advanced realm in Tephirot. To foreign enemies and rebels it is a ruthless war machine. To its own citizens Daskal is a shining beacon of civilization, the shield that saved humanity from annihilation—cities with perfect aqueducts, safe roads, strict but fair courts, and monumental white-stone architecture threaded with reddish veins.",
        ],
      },
      {
        heading: "History: the legacy of Octavian Dask",
        paragraphs: [
          "The state as it exists today was forged in the fires of the Great Cataclysm. When the world collapsed and the skies turned black, it was the commander Octavian Dask who restored order from chaos.",
          "He openly blamed mages for the world's ruin. By forging a strategic alliance with the scholars of Caer Andros—Daskal's only allies in those dark years—Octavian gained a technological edge.",
          "United Daskal and Caer Andros achieved the impossible: they shattered the mighty cavalry and sorcerers of Avenhold, seized the plains, then subjugated the forest duchy of Veldemar. Thus Octavian bound the Empire that endures to this day.",
        ],
      },
      {
        heading: "Etherite (Ascalon stone): a noble sacrifice",
        paragraphs: [
          "The foundation of Daskal's military power is etherite, a mineral that neutralizes and absorbs prana. Weapons and shields of etherite let ordinary people without the gift stand against archmages and monsters.",
          "But protection has a price: etherite drains the bearer's life force. Elite inquisitors of Daskal turn grey before thirty; their skin pales and their bodies waste away. The Empire does not hide this—it is called the \"noble withering.\" Soldiers who give their health to etherite are hailed as the nation's greatest heroes, sacrificing themselves so ordinary citizens may sleep in peace.",
        ],
      },
      {
        heading: "Foreign policy: vassals, enemies, and allies",
        paragraphs: [
          "The Empire bears a colossal burden of responsibility for the continent; its diplomacy rests on strength, pragmatism, and the ideology of survival.",
        ],
        bullets: [
          "Avenhold: a vassal conquered by Octavian Dask. Supplies elite cavalry to the Empire. Daskal brutally crushes magical cults there, so locals see imperial troops as occupiers.",
          "Veldemar: a vassal. Supplies provisions and timber. Daskal grants broad internal autonomy—legions cannot fight well in deep woods, and the Empire would starve without Veldemar's grain.",
          "Tul'Assar: to common citizens, a cursed wasteland and monument to mages' pride; to the elite, a resource base. The Empire, often through the Order of Merciful Flame, controls excavations to seize forbidden technomantic artifacts and keep them from rebels.",
          "Shaylaan: Daskal once waged bloody wars against them. Direct conflict is impossible now—the mountain ranges raised by the Descended Ketir cut Shaylaan off from the world. There is no contact, yet Daskal despises them as cowards who walled themselves away and abandoned the rest of humanity.",
          "Northern Kingdoms: wild frontier and hotbed of heresy. Cults and free settlements still flourish in the north, openly practicing sorcery. The Empire periodically sends punitive legions on crusades to burn out magical contagion and prevent the northerners from uniting.",
          "Gorthamar: a pragmatic and invaluable ally. Dwarves prefer reliable metal to unstable magic—a perfect ideological match for Daskal. Gorthamar steadily supplies imperial legions with steel, tools, and intricate mechanisms, receiving food and caravan protection in return.",
        ],
        bulletsAfter: 0,
      },
    ],
    pathD:
      "M1330,1696l97-60,112-54,52,151,79,153,77,186-49,49-41,37-182-33-78,46-185-71-68-148-87,15-73-82-66-250L726,1389l236-38,161-11,74,4-27,213,66,168Z",
  },
  {
    id: "caer-andros",
    svgPathId: "Caer_Andros",
    nameRu: "Кэр Андрос",
    nameEn: "Caer Andros",
    images: [
      {
        src: "/CaerAndros1.png",
        altRu: "Кэр Андрос",
        altEn: "Caer Andros",
        placement: "start",
      },
    ],
    descriptionRu:
      "Кэр Андрос — независимая республика учёных, инженеров, архивариусов и исследователей на севере от Даскала.",
    descriptionEn:
      "Caer Andros is an independent republic of scholars, engineers, archivists, and researchers north of Daskal.",
    sectionsRu: [
      {
        paragraphs: [
          "Кэр Андрос — независимая республика учёных, инженеров, архивариусов и исследователей, расположенная на севере от Даскала. Несмотря на сравнительно небольшую территорию, влияние республики ощущается по всему континенту.",
        ],
      },
      {
        paragraphs: [
          "Если Даскал контролирует армии, а Гортмар — промышленность, то Кэр Андрос контролирует знания.",
          "Большинство карт древних руин, описаний артефактов и сведений о погибших цивилизациях проходит через руки его архивариусов.",
          "Многие государства считают Кэр Андрос незаменимым союзником. Не меньшее число считает его самой опасной страной мира.",
        ],
      },
      {
        heading: "Наследники катастрофы",
        paragraphs: [
          "Во времена Великого Катаклизма Кэр Андрос оказался одним из немногих государств, сохранивших относительную стабильность.",
          "Пока другие народы пытались выжить, учёные республики занимались сбором знаний погибающего мира.",
          "Именно тогда будущий император Октавиан Даск заключил союз с Кэр Андросом.",
          "Республика предоставила инженеров, снабжение и научные разработки.",
        ],
      },
    ],
    sectionsEn: [
      {
        paragraphs: [
          "Caer Andros is an independent republic of scholars, engineers, archivists, and researchers, lying north of Daskal. Despite its relatively small territory, the republic's influence is felt across the continent.",
        ],
      },
      {
        paragraphs: [
          "If Daskal controls armies and Gorthamar controls industry, then Caer Andros controls knowledge.",
          "Most maps of ancient ruins, descriptions of artifacts, and records of fallen civilizations pass through the hands of its archivists.",
          "Many realms call Caer Andros an indispensable ally. No fewer call it the most dangerous country in the world.",
        ],
      },
      {
        heading: "Heirs of the catastrophe",
        paragraphs: [
          "During the Great Cataclysm Caer Andros was one of the few states to keep relative stability.",
          "While other peoples struggled merely to survive, the republic's scholars gathered the knowledge of a dying world.",
          "It was then that the future emperor Octavian Dask forged an alliance with Caer Andros.",
          "The republic supplied engineers, provisions, and scientific breakthroughs.",
        ],
      },
    ],
    pathD:
      "M1155,1020l161-46,146,41,181,32,74,54-78,156-86,226-13,104-204,118-91,23-57-187,27-197,8-145-85-72Z",
  },
  {
    id: "northern-kingdoms",
    svgPathId: "Northen_Kingsdoms",
    nameRu: "Северные королевства",
    nameEn: "Northern Kingdoms",
    images: [
      {
        src: "/NorthernKingdoms1.png",
        altRu: "Северные королевства",
        altEn: "Northern Kingdoms",
        placement: "start",
      },
    ],
    descriptionRu:
      "Северные королевства — обширный регион за пределами влияния Даскала, пёстрое собрание десятков княжеств и городов-государств.",
    descriptionEn:
      "The Northern Kingdoms are a vast region beyond Daskal's reach—a patchwork of dozens of principalities and city-states.",
    sectionsRu: [
      {
        paragraphs: [
          "«На юге человек принадлежит королю. В Даскале — Империи. На Севере человек принадлежит только себе.»",
        ],
      },
      {
        paragraphs: [
          "Северные королевства — обширный регион за пределами влияния Даскала. Несмотря на название, это не единое государство, а пёстрое собрание десятков княжеств, городов-государств, племенных союзов, торговых республик и небольших королевств, постоянно заключающих союзы и воюющих друг с другом.",
          "Здесь нет единого правителя, нет общей армии, нет общей религии — именно поэтому Север никогда не удавалось покорить окончательно.",
          "Для жителей Империи это дикий фронтир. Для северян — последний уголок мира, где человек ещё может жить без надзора Даскала.",
        ],
      },
      {
        heading: "Земля тысячи знамён",
        paragraphs: [
          "Север невероятно разнообразен. На побережьях расположены богатые торговые города, живущие за счёт рыболовства и морской торговли. В глубоких лесах скрываются княжества охотников и лесорубов. Среди гор существуют небольшие крепостные государства, контролирующие перевалы и рудники. А на далёких северных островах сохранились полукочевые народы мореходов.",
          "Некоторые государства существуют веками. Другие исчезают за одно поколение. На карте Север выглядит как лоскутное одеяло из десятков постоянно меняющихся границ.",
        ],
      },
    ],
    sectionsEn: [
      {
        paragraphs: [
          "\"In the south a man belongs to his king. In Daskal—to the Empire. In the North a man belongs only to himself.\"",
        ],
      },
      {
        paragraphs: [
          "The Northern Kingdoms are a vast region beyond Daskal's influence. Despite the name, this is not one realm but a motley collection of dozens of principalities, city-states, tribal leagues, merchant republics, and small kingdoms—forever making alliances and waging war on one another.",
          "There is no single ruler, no common army, no shared faith—and that is precisely why the North has never been conquered for good.",
          "To imperial citizens it is the wild frontier. To northerners it is the last corner of the world where a person can still live without Daskal's oversight.",
        ],
      },
      {
        heading: "The land of a thousand banners",
        paragraphs: [
          "The North is staggeringly diverse. Rich trading cities line the coasts, living on fishing and sea trade. Deep in the forests lie principalities of hunters and woodcutters. Among the mountains stand small fortress-states that control passes and mines. On distant northern isles semi-nomadic seafaring peoples endure.",
          "Some realms last for centuries. Others vanish within a generation. On the map the North looks like a patchwork quilt of dozens of ever-shifting borders.",
        ],
      },
    ],
    pathD:
      "M1148,1004.46l-76-229,99-115,165,11,181-21,188,20,130-64,276,64-2,48-163,62-83,121-115,102-32,94-75-53-252-46-196,1Z",
  },
  {
    id: "gorthamar",
    svgPathId: "Gorthamar",
    nameRu: "Гортмар",
    nameEn: "Gorthamar",
    images: [
      {
        src: "/Gorthamar1.png",
        altRu: "Гортмар",
        altEn: "Gorthamar",
        placement: "start",
      },
    ],
    descriptionRu:
      "Гортмар — величайшее государство дварфов и крупнейший промышленный центр мира.",
    descriptionEn:
      "Gorthamar is the greatest dwarven realm and the largest industrial center in the world.",
    sectionsRu: [
      {
        paragraphs: [
          "Гортмар — величайшее государство дварфов и крупнейший промышленный центр мира. Его города простираются на многие километры под горными хребтами далеко за Северными королевствами. Здесь расположены гигантские шахты, литейные комплексы, подземные крепости и древние инженерные чудеса, многие из которых работают уже сотни лет.",
        ],
      },
      {
        paragraphs: [
          "В отличие от большинства народов мира, дварфы пережили Великий Катаклизм относительно спокойно. Когда небеса раскололись, а государства рушились одно за другим, правители Гортмара приказали закрыть Великие Врата и изолировать королевство от внешнего мира.",
          "Многие на поверхности считают, что именно благодаря этому Гортмар сохранил своё могущество.",
        ],
      },
      {
        heading: "Царство стали",
        paragraphs: [
          "Дварфы Гортмара не боятся магии и не испытывают к ней религиозной ненависти. Они просто считают её плохим инструментом.",
          "В глазах дварфийского инженера магия остаётся непредсказуемой силой, зависящей от эмоций, таланта и обстоятельств. Хороший механизм, напротив, всегда работает одинаково.",
        ],
      },
      {
        heading: "Королевство кланов",
        paragraphs: [
          "Несмотря на внешнее единство, Гортмар далеко не монолитен. Власть разделена между десятками древних кланов.",
          "Наиболее влиятельными считаются:",
          "Большинство политических конфликтов в королевстве решаются не на поле боя, а за столами переговоров, через торговые соглашения, производственные квоты и многолетние экономические интриги.",
          "Дварфы редко воюют друг с другом. Они предпочитают десятилетиями спорить о том, кому принадлежит шахта.",
        ],
        bullets: [
          "Горные дома шахтёров;",
          "Кланы кузнецов;",
          "Инженерные консорциумы;",
          "Старые благородные роды;",
          "Торговые лиги.",
        ],
        bulletsAfter: 1,
      },
    ],
    sectionsEn: [
      {
        paragraphs: [
          "Gorthamar is the greatest dwarven realm and the largest industrial center in the world. Its cities stretch for many kilometers beneath the mountain ranges far beyond the Northern Kingdoms. Here stand giant mines, foundry complexes, underground fortresses, and ancient engineering marvels—many still in operation after hundreds of years.",
        ],
      },
      {
        paragraphs: [
          "Unlike most peoples of the world, the dwarves weathered the Great Cataclysm in relative calm. When the heavens split and realms fell one after another, Gorthamar's rulers ordered the Great Gates sealed and the kingdom cut off from the outside world.",
          "Many on the surface believe it was this isolation that preserved Gorthamar's power.",
        ],
      },
      {
        heading: "The realm of steel",
        paragraphs: [
          "Gorthamar's dwarves do not fear magic nor feel religious hatred toward it. They simply consider it a poor tool.",
          "To a dwarven engineer magic remains an unpredictable force, bound to emotion, talent, and circumstance. A good mechanism, by contrast, always works the same way.",
        ],
      },
      {
        heading: "The kingdom of clans",
        paragraphs: [
          "Despite outward unity Gorthamar is far from monolithic. Power is divided among dozens of ancient clans.",
          "The most influential are held to be:",
          "Most political conflicts in the realm are settled not on the battlefield but at negotiating tables—through trade agreements, production quotas, and intrigues that span decades.",
          "Dwarves rarely war on one another. They prefer to spend decades arguing over who owns a mine.",
        ],
        bullets: [
          "The Mountain Houses of miners;",
          "Smith clans;",
          "Engineering consortia;",
          "Old noble lineages;",
          "Trade leagues.",
        ],
        bulletsAfter: 1,
      },
    ],
    pathD:
      "M1842,469l-24,83-16,41,30,13-121,59-200-20-170,22-164-16,250-167Z",
  },
  {
    id: "shaylaan",
    svgPathId: "Shaylaan",
    nameRu: "Шайлаан",
    nameEn: "Shaylaan",
    images: [
      {
        src: "/Shaylaan2.png",
        altRu: "Шайлаан — земля между мирами",
        altEn: "Shaylaan — the land between worlds",
        placement: "start",
        width: 1024,
        height: 311,
      },
      {
        src: "/Shaylaan1.png",
        altRu: "Шайлаан — кланы и даймё",
        altEn: "Shaylaan — clans and daimyo",
        placement: "clans-and-daimyo",
        width: 1024,
        height: 771,
      },
    ],
    descriptionRu:
      "Шайлаан — древнее и загадочное место, скрытое за кольцом неприступных гор, воздвигнутых Сошедшим Кетиром.",
    descriptionEn:
      "Shaylaan is an ancient and mysterious land hidden behind a ring of impassable mountains raised by the Descended Ketir.",
    sectionsRu: [
      {
        paragraphs: [
          "Шайлаан — древнее и загадочное место, скрытое за кольцом неприступных гор, воздвигнутых Сошедшим Кетиром во время Великого Катаклизма.",
          "Когда большая часть мира погрузилась в хаос, Шайлаан оказался отрезан. За прошедшие века это место превратилось в самостоятельный мир со своими законами, традициями и представлениями о реальности.",
        ],
      },
      {
        heading: "Земля между мирами",
        paragraphs: [
          "Шайлаан существует на границе материального мира и Мира Духов.",
          "Прана здесь настолько плотна, что временами становится видимой.",
          "По ночам над полями дрейфуют светящиеся огни.",
          "В старых рощах можно услышать голоса тех, кого давно нет в живых.",
          "Некоторые озёра отражают не настоящее, а возможное будущее.",
          "Здесь встречаются места, которые невозможно объяснить логикой:",
        ],
        bullets: [
          "долины, где время течёт медленнее;",
          "луга, на которых никогда не наступает ночь;",
          "леса, способные менять направление дорог;",
          "острова, парящие среди облаков;",
          "регионы, где исчезают цвета;",
          "рынки, где воспоминания ценятся дороже золота.",
        ],
        bulletsAfter: 5,
      },
      {
        heading: "Кланы и даймё",
        anchorId: "clans-and-daimyo",
        paragraphs: [
          "Шайлаан не является единым государством в привычном понимании. Страна разделена между десятками кланов.",
          "Каждый клан управляет собственной территорией, хранит древние традиции и поддерживает отношения со своими духами-покровителями.",
        ],
      },
      {
        paragraphs: [
          "Во главе большинства земель стоят даймё — правители, одновременно являющиеся военными лидерами, судьями и посредниками между смертными и духами.",
          "Некоторые кланы живут среди бескрайних лугов. Другие контролируют парящие острова. Третьи обитают в долинах драконов или древних лесах.",
          "Несмотря на различия, все кланы признают священный статус Кетира и необходимость сохранять равновесие между мирами.",
        ],
      },
    ],
    sectionsEn: [
      {
        paragraphs: [
          "Shaylaan is an ancient and mysterious land hidden behind a ring of impassable mountains raised by the Descended Ketir during the Great Cataclysm.",
          "When much of the world sank into chaos Shaylaan was cut off. Over the centuries it became a world unto itself—with its own laws, traditions, and understanding of reality.",
        ],
      },
      {
        heading: "The land between worlds",
        paragraphs: [
          "Shaylaan exists on the border of the material world and the Spirit World.",
          "Prana here is so dense it sometimes becomes visible.",
          "At night luminous lights drift above the fields.",
          "In old groves one may hear the voices of those long dead.",
          "Some lakes reflect not the present but a possible future.",
          "Here one finds places logic cannot explain:",
        ],
        bullets: [
          "valleys where time flows more slowly;",
          "meadows where night never falls;",
          "forests that shift the direction of roads;",
          "islands floating among the clouds;",
          "regions where color vanishes;",
          "markets where memories are worth more than gold.",
        ],
        bulletsAfter: 5,
      },
      {
        heading: "Clans and daimyo",
        anchorId: "clans-and-daimyo",
        paragraphs: [
          "Shaylaan is not a single state in the usual sense. The country is divided among dozens of clans.",
          "Each clan governs its own territory, keeps ancient traditions, and maintains ties with its guardian spirits.",
        ],
      },
      {
        paragraphs: [
          "Most lands are led by daimyo—rulers who are at once war leaders, judges, and mediators between mortals and spirits.",
          "Some clans live among endless meadows. Others control floating islands. Still others dwell in dragon valleys or ancient forests.",
          "Despite their differences all clans honor Ketir's sacred status and the need to preserve balance between the worlds.",
        ],
      },
    ],
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
): { src: string; alt: string; width?: number; height?: number }[] {
  if (!region.images?.length) return [];
  return region.images.map((image) => ({
    src: image.src,
    alt: locale === "en" ? image.altEn : image.altRu,
    width: image.width,
    height: image.height,
  }));
}

export function getRegionImageByPlacement(
  region: Region,
  placement: string,
  locale: string,
): { src: string; alt: string; width?: number; height?: number } | null {
  const image = region.images?.find((item) => item.placement === placement);
  if (!image) return null;
  return {
    src: image.src,
    alt: locale === "en" ? image.altEn : image.altRu,
    width: image.width,
    height: image.height,
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
