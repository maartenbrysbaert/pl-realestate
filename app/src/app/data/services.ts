/**
 * The ten accordion panels on /diensten, lifted verbatim from the original.
 *
 * These live in TypeScript rather than the template because the page is a
 * repeating structure - `$localize` still marks every string for extraction, so
 * they end up in messages.xlf exactly as template text would.
 */

export interface ServiceItem {
  /** Bold lead-in before the colon, where the original has one. */
  readonly label?: string;
  readonly text: string;
  readonly link?: { readonly text: string; readonly href: string };
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly items: readonly ServiceItem[];
}

export const SERVICES: readonly Service[] = [
  {
    id: 'verkoop',
    title: $localize`:Service heading:Verkoop van alle vastgoed`,
    items: [
      {
        label: $localize`:Service item label:Residentieel vastgoed:`,
        text: $localize`:Service item:Gronden, appartementen, klassieke woningen & exclusieve villa's, uitzonderlijk & uniek vastgoed`,
      },
      {
        label: $localize`:Service item label:Investeringsvastgoed:`,
        text: $localize`:Service item:Projecten en verkavelingen`,
      },
      {
        label: $localize`:Service item label:Bedrijfsvastgoed:`,
        text: $localize`:Service item:Kantoren, loodsen, KMO-units, …`,
      },
      {
        label: $localize`:Service item label:Commercieel vastgoed:`,
        text: $localize`:Service item:Winkelruimtes, hotels, ...`,
      },
    ],
  },
  {
    id: 'discrete-verkoop',
    title: $localize`:Service heading:Discrete verkoop`,
    items: [
      {
        text: $localize`:Service item:Wenst u een 'stille' verkoop, waarbij uw buren dit niet merken?`,
      },
      {
        text: $localize`:Service item:Als géén ander hanteert Patrick Landuyt deze vruchtbare techniek en zorgt ervoor dat enkel de juiste kandidaten uw eigendom zullen bezoeken.`,
      },
      {
        text: $localize`:Service item:Hierbij wordt Patrick Landuyt ondersteunt door een database van zoekende klanten en een uitgebreid netwerk, welke eveneens erg op hun discretie zijn gesteld.`,
      },
      {
        text: $localize`:Service item:Een méést doorgedreven discrete vastgoedcommunicatie.`,
      },
    ],
  },
  {
    id: 'schattingen',
    title: $localize`:Service heading:Erkende schattingen - Pro evaluation`,
    items: [
      {
        text: $localize`:Service item:Een professionele schatting gebeurt vanuit diverse invalshoeken, ervaring en marktkennis.`,
      },
      {
        text: $localize`:Service item:We verzorgen multidisciplinaire & erkende schattingen op basis van VLABEL-methodologie, KAVEX rekenmodellen, Stadim, …`,
      },
    ],
  },
  {
    id: 'sos-vastgoed',
    title: $localize`:Service heading:SOS-Vastgoed`,
    items: [
      {
        text: $localize`:Service item:Uw eigendom staat reeds te koop, maar verloopt dit niet naar wens? U bent niet tevreden omtrent de huidige begeleiding of vooropgestelde verwachtingen worden niet ingelost?`,
      },
      { text: $localize`:Service item:We herkennen deze situaties zeker en vast.` },
      {
        text: $localize`:Service item:Menige verkoopopdrachten hebben we overgenomen en tot een goed einde geleid. Referenties worden u ter beschikking gesteld.`,
      },
    ],
  },
  {
    id: 'pro-advice',
    title: $localize`:Service heading:PRO-advice`,
    items: [
      {
        text: $localize`:Service item:Uniek platform en samenwerkingsverbanden, waarbij advies en verkoopondersteuning wordt versterkt aan collega makelaars, landmeters, notarissen, bankiers en vermogensbeheerders, family offices, …`,
      },
      {
        text: $localize`:Service item:Tevens bieden we ondersteuning en oplossingen bij onverdeeldheid en vastgoedconflicten.`,
      },
    ],
  },
  {
    id: 'share-deals',
    title: $localize`:Service heading:Share deals & asset deals`,
    items: [
      {
        text: $localize`:Service item:Een klassieke verkoop onderworpen aan verkooprechten of registratierechten is het meest voorkomend.`,
      },
      {
        text: $localize`:Service item:Zit uw vastgoed echter in een vennootschap? Samen met u en uw accountant waarderen we de aandelen en berekenen we de latenties. Ook wordt er gezocht naar een koper voor de aandelen.`,
      },
    ],
  },
  {
    id: 'aankoopbegeleiding',
    title: $localize`:Service heading:Aankoopbegeleiding`,
    items: [
      { text: $localize`:Service item:U overweegt de aankoop van een eigendom?` },
      { text: $localize`:Service item:We verdedigen uw belangen als koper.` },
      { text: $localize`:Service item:We besparen u vele euro's & kopzorgen!` },
      {
        text: $localize`:Service item:Voor een méér "Op maat begeleidingspakket", verzoeken we u een kijkje te nemen op:`,
        link: {
          text: 'https://vastgoed-aankoopbegeleiding.be/',
          href: 'https://vastgoed-aankoopbegeleiding.be/',
        },
      },
    ],
  },
  {
    id: 'homefinder',
    title: $localize`:Service heading:Gratis homefinder: wij vinden uw droomwoning!`,
    items: [
      { text: $localize`:Service item:We helpen u bij het vinden van uw droomwoning.` },
      {
        text: $localize`:Service item:De zoektocht naar uw ideale woning kan een ingewikkelde en lange zoektocht zijn. Het ene huis voldoet nét niet aan alle eisen en voor het andere bent u nét te laat. U wilt eigenlijk als eerste op de hoogte zijn en bericht krijgen wanneer uw droomwoning beschikbaar is.`,
      },
      {
        text: $localize`:Service item:Onze troef is het persoonlijke & discrete karakter van onze begeleidingen. Als grondlegger van de PRO-SALE community beschikken we over een méést uitgebreid – en op maat aangepast - netwerk om eigendommen te vinden welke grotendeels nog niet via openbare kanalen te koop worden aangeboden.`,
      },
      {
        text: $localize`:Service item:We nodigen u uit na te denken hoe uw droomwoning eruit ziet, waar uw prioriteiten liggen en de criteria die ons hierbij zouden kunnen helpen. We toetsen dit dan af een onze interne checklisten.`,
      },
      {
        text: $localize`:Service item:Laat het ons weten via`,
        link: {
          text: 'homefinder@pl-realestate.com',
          href: 'mailto:homefinder@pl-realestate.com',
        },
      },
    ],
  },
  {
    id: 'projectontwikkeling',
    title: $localize`:Service heading:Kleinschalige projectontwikkeling`,
    items: [
      {
        text: $localize`:Service item:Heeft u bouwgrond of een renovatiepand welke eventueel in aanmerking komt voor herbestemming of projectontwikkeling?`,
      },
      {
        text: $localize`:Service item:Via een haalbaarheidsstudie onderzoeken we de mogelijkheden en optimale winst of opbrengst.`,
      },
      {
        text: $localize`:Service item:We leggen contacten met de diensten van de gemeenten of steden. We toetsen dit alles af bij bouwheren/ontwikkelaars.`,
      },
    ],
  },
  {
    id: 'vermogen',
    title: $localize`:Service heading:Vermogen, optimalisatie & successie`,
    items: [
      {
        text: $localize`:Service item:Wij helpen je mee met het optimaliseren van je vermogen, zowel privé als professioneel. En hoe toekomstgericht geld te besparen of hoe een vastgoedverkoop zien in het kader van successie. Iedere klant krijgt een gratis introductie sessie.`,
      },
    ],
  },
];
