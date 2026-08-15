/**
 * FR-BE and EN-GB translations, keyed by the Dutch source string exactly as it
 * appears in app/src/locale/messages.xlf (whitespace collapsed).
 *
 * Feed into build-translations.mjs to regenerate the XLIFF files.
 *
 * ── REVIEW STATUS ──────────────────────────────────────────────────────────
 * Marketing copy: drafted here, PENDING CLIENT PROOFREADING.
 * Legal copy (/algemene-voorwaarden): drafted here, PENDING LEGAL REVIEW. The
 * Dutch source itself names the wrong company throughout (Immophone-Partners)
 * and cites the pre-2018 Privacy Commission — that has to be fixed in Dutch
 * first, after which these translations must be redone. See the note in
 * app/src/app/pages/terms/terms.ts.
 *
 * Belgian French conventions used: "vous" throughout, "€" spacing per Belgian
 * usage, and Belgian institution names left in their official form (BIV/IPI).
 */

/** @type {Record<string, Record<string, string>>} */
export const TRANSLATIONS = {
  'fr-BE': {
    // ---------------------------------------------------------- services
    'Verkoop van alle vastgoed': 'Vente de tous types de biens immobiliers',
    'Residentieel vastgoed:': 'Immobilier résidentiel :',
    "Gronden, appartementen, klassieke woningen & exclusieve villa's, uitzonderlijk & uniek vastgoed":
      "Terrains, appartements, maisons classiques & villas exclusives, biens d'exception et uniques",
    'Investeringsvastgoed:': "Immobilier d'investissement :",
    'Projecten en verkavelingen': 'Projets et lotissements',
    'Bedrijfsvastgoed:': "Immobilier d'entreprise :",
    'Kantoren, loodsen, KMO-units, …': 'Bureaux, entrepôts, unités PME, …',
    'Commercieel vastgoed:': 'Immobilier commercial :',
    'Winkelruimtes, hotels, ...': 'Surfaces commerciales, hôtels, ...',

    'Discrete verkoop': 'Vente discrète',
    "Wenst u een 'stille' verkoop, waarbij uw buren dit niet merken?":
      'Vous souhaitez une vente « silencieuse », sans que vos voisins ne le remarquent ?',
    'Als géén ander hanteert Patrick Landuyt deze vruchtbare techniek en zorgt ervoor dat enkel de juiste kandidaten uw eigendom zullen bezoeken.':
      'Mieux que quiconque, Patrick Landuyt maîtrise cette technique fructueuse et veille à ce que seuls les candidats appropriés visitent votre bien.',
    'Hierbij wordt Patrick Landuyt ondersteunt door een database van zoekende klanten en een uitgebreid netwerk, welke eveneens erg op hun discretie zijn gesteld.':
      "Patrick Landuyt s'appuie pour cela sur une base de données de clients en recherche et sur un vaste réseau, lui aussi très attaché à la discrétion.",
    'Een méést doorgedreven discrete vastgoedcommunicatie.':
      'Une communication immobilière discrète poussée à son maximum.',

    'Erkende schattingen - Pro evaluation': 'Estimations agréées - Pro evaluation',
    'Een professionele schatting gebeurt vanuit diverse invalshoeken, ervaring en marktkennis.':
      "Une estimation professionnelle repose sur des angles d'approche variés, sur l'expérience et sur la connaissance du marché.",
    'We verzorgen multidisciplinaire & erkende schattingen op basis van VLABEL-methodologie, KAVEX rekenmodellen, Stadim, …':
      'Nous réalisons des estimations multidisciplinaires et agréées sur la base de la méthodologie VLABEL, des modèles de calcul KAVEX, de Stadim, …',

    'SOS-Vastgoed': 'SOS-Immobilier',
    'Uw eigendom staat reeds te koop, maar verloopt dit niet naar wens? U bent niet tevreden omtrent de huidige begeleiding of vooropgestelde verwachtingen worden niet ingelost?':
      "Votre bien est déjà en vente, mais cela ne se passe pas comme vous le souhaitez ? Vous n'êtes pas satisfait de l'accompagnement actuel ou les attentes annoncées ne sont pas rencontrées ?",
    'We herkennen deze situaties zeker en vast.':
      'Ces situations nous sont tout à fait familières.',
    'Menige verkoopopdrachten hebben we overgenomen en tot een goed einde geleid. Referenties worden u ter beschikking gesteld.':
      'Nous avons repris de nombreuses missions de vente et les avons menées à bien. Des références sont à votre disposition.',

    'PRO-advice': 'PRO-advice',
    'Uniek platform en samenwerkingsverbanden, waarbij advies en verkoopondersteuning wordt versterkt aan collega makelaars, landmeters, notarissen, bankiers en vermogensbeheerders, family offices, …':
      'Une plateforme unique et des partenariats qui renforcent le conseil et le soutien à la vente auprès de confrères agents immobiliers, géomètres, notaires, banquiers et gestionnaires de patrimoine, family offices, …',
    'Tevens bieden we ondersteuning en oplossingen bij onverdeeldheid en vastgoedconflicten.':
      "Nous proposons également un accompagnement et des solutions en cas d'indivision et de conflits immobiliers.",

    'Share deals & asset deals': 'Share deals & asset deals',
    'Een klassieke verkoop onderworpen aan verkooprechten of registratierechten is het meest voorkomend.':
      "La vente classique, soumise aux droits de vente ou d'enregistrement, est la plus courante.",
    'Zit uw vastgoed echter in een vennootschap? Samen met u en uw accountant waarderen we de aandelen en berekenen we de latenties. Ook wordt er gezocht naar een koper voor de aandelen.':
      "Votre bien est toutefois logé dans une société ? Avec vous et votre comptable, nous valorisons les actions et calculons les latences fiscales. Nous recherchons également un acquéreur pour les actions.",

    'Aankoopbegeleiding': "Accompagnement à l'achat",
    'U overweegt de aankoop van een eigendom?': "Vous envisagez l'achat d'un bien ?",
    'We verdedigen uw belangen als koper.': "Nous défendons vos intérêts en tant qu'acquéreur.",
    "We besparen u vele euro's & kopzorgen!":
      "Nous vous épargnons de nombreux euros et bien des soucis !",
    'Voor een méér "Op maat begeleidingspakket", verzoeken we u een kijkje te nemen op:':
      'Pour une formule d\'accompagnement « sur mesure », nous vous invitons à consulter :',

    'Gratis homefinder: wij vinden uw droomwoning!':
      'Homefinder gratuit : nous trouvons la maison de vos rêves !',
    'We helpen u bij het vinden van uw droomwoning.':
      'Nous vous aidons à trouver la maison de vos rêves.',
    'De zoektocht naar uw ideale woning kan een ingewikkelde en lange zoektocht zijn. Het ene huis voldoet nét niet aan alle eisen en voor het andere bent u nét te laat. U wilt eigenlijk als eerste op de hoogte zijn en bericht krijgen wanneer uw droomwoning beschikbaar is.':
      "La recherche du logement idéal peut être longue et compliquée. Une maison ne répond pas tout à fait à vos critères, et pour une autre vous arrivez tout juste trop tard. En réalité, vous voulez être le premier informé dès que la maison de vos rêves est disponible.",
    'Onze troef is het persoonlijke & discrete karakter van onze begeleidingen. Als grondlegger van de PRO-SALE community beschikken we over een méést uitgebreid – en op maat aangepast - netwerk om eigendommen te vinden welke grotendeels nog niet via openbare kanalen te koop worden aangeboden.':
      "Notre atout est le caractère personnel et discret de nos accompagnements. Fondateurs de la communauté PRO-SALE, nous disposons d'un réseau des plus étendus – et adapté sur mesure – pour trouver des biens qui, pour la plupart, ne sont pas encore proposés à la vente par les canaux publics.",
    'We nodigen u uit na te denken hoe uw droomwoning eruit ziet, waar uw prioriteiten liggen en de criteria die ons hierbij zouden kunnen helpen. We toetsen dit dan af een onze interne checklisten.':
      "Nous vous invitons à réfléchir à quoi ressemble la maison de vos rêves, à vos priorités et aux critères qui pourraient nous aider. Nous confrontons ensuite le tout à nos check-lists internes.",
    'Laat het ons weten via': 'Faites-le nous savoir via',

    'Kleinschalige projectontwikkeling': 'Développement de projets à petite échelle',
    'Heeft u bouwgrond of een renovatiepand welke eventueel in aanmerking komt voor herbestemming of projectontwikkeling?':
      "Vous possédez un terrain à bâtir ou un bien à rénover susceptible de faire l'objet d'une reconversion ou d'un développement de projet ?",
    'Via een haalbaarheidsstudie onderzoeken we de mogelijkheden en optimale winst of opbrengst.':
      'Une étude de faisabilité nous permet d’examiner les possibilités ainsi que le bénéfice ou le rendement optimal.',
    'We leggen contacten met de diensten van de gemeenten of steden. We toetsen dit alles af bij bouwheren/ontwikkelaars.':
      'Nous prenons contact avec les services communaux ou urbains et soumettons le tout à des maîtres d’ouvrage et promoteurs.',

    'Vermogen, optimalisatie & successie': 'Patrimoine, optimisation & succession',
    'Wij helpen je mee met het optimaliseren van je vermogen, zowel privé als professioneel. En hoe toekomstgericht geld te besparen of hoe een vastgoedverkoop zien in het kader van successie. Iedere klant krijgt een gratis introductie sessie.':
      "Nous vous aidons à optimiser votre patrimoine, tant privé que professionnel : comment épargner en préparant l'avenir, ou comment envisager une vente immobilière dans le cadre d'une succession. Chaque client bénéficie d'une séance d'introduction gratuite.",

    // ------------------------------------------------------ header/footer
    'Private & flex offices:': 'Bureaux privés & flex :',
    'Wij zijn beschikbaar 24/24, 7/7.': 'Nous sommes disponibles 24h/24, 7j/7.',
    'Meer info': "Plus d'infos",
    'Doorgaan naar inhoud': 'Aller au contenu',
    'Menu': 'Menu',
    'Hoofdnavigatie': 'Navigation principale',
    'Over': 'À propos',
    'Diensten': 'Services',
    'Referenties': 'Références',
    'Contact': 'Contact',

    // ------------------------------------------------------------ contact
    'Contacteer ons': 'Contactez-nous',
    'Maatschappelijke zetel:': 'Siège social :',
    'Volg Patrick Landuyt op LinkedIn en Luxevastgoed:':
      'Suivez Patrick Landuyt sur LinkedIn et Luxevastgoed :',
    'Verdere info': 'Informations complémentaires',
    'Zaakvoerder': 'Gérant',
    'Vastgoedmakelaar bemiddelaar': 'Agent immobilier intermédiaire',
    'BIV erkenningsnummer voor Belgïe:': "Numéro d'agrément IPI pour la Belgique :",
    'Ondernemingsnummer:': "Numéro d'entreprise :",
    'BTW': 'TVA',
    'Derdenrekening:': 'Compte de tiers :',
    'BA & Borgstelling:': 'RC & cautionnement :',
    'Onderworpen aan de deontologische code van het BIV, Beroepsinstituut van de Vastgoedmakelaars.':
      "Soumis au code de déontologie de l'IPI, Institut professionnel des agents immobiliers.",
    'Toezichthoudende autoriteit': 'Autorité de surveillance',
    'Deontologie & Plichtenleer:': 'Déontologie :',
    'Als u deze site bezoekt, gaat u akkoord met de':
      'En visitant ce site, vous acceptez les',
    'Algemene voorwaarden': 'Conditions générales',
    'Verzekering BA en borgstelling via NV AXA Belgium ( polis nr.730.390.160)':
      'Assurance RC et cautionnement via NV AXA Belgium (police n° 730.390.160)',
    'Contact | PL Real Estate': 'Contact | PL Real Estate',
    'Neem contact op met Patrick Landuyt — Nazarethstraat 6, De Pinte. Bereikbaar 24/24, 7/7.':
      'Contactez Patrick Landuyt — Nazarethstraat 6, De Pinte. Joignable 24h/24, 7j/7.',

    // ----------------------------------------------------------- services page
    'Een gezin wandelt door een landschapstuin naar een oranjerie':
      'Une famille traverse un jardin paysager en direction d’une orangerie',
    'U kan bij Patrick Landuyt terecht voor verscheidene diensten, waar expertise, ervaring en resultaat steeds garant staan.':
      "Patrick Landuyt vous propose divers services, où l'expertise, l'expérience et le résultat sont toujours au rendez-vous.",
    'Diensten | PL Real Estate': 'Services | PL Real Estate',
    'Verkoop, discrete verkoop, erkende schattingen, aankoopbegeleiding, share deals en projectontwikkeling — waar expertise, ervaring en resultaat steeds garant staan.':
      "Vente, vente discrète, estimations agréées, accompagnement à l'achat, share deals et développement de projets — où l'expertise, l'expérience et le résultat sont toujours au rendez-vous.",

    // -------------------------------------------------------------- homepage
    'BEMIDDELING ZOALS HET MOET': 'UNE INTERMÉDIATION COMME IL SE DOIT',
    "“Niemand beheerst een danige variëteit in vastgoeddossiers als Patrick Landuyt. Over regio's heen overstijgen zijn aanpak en resultaten iedere aanwezige lokale expertise. Met een ongeziene empathie, focus en karakter weet hij verkoper én koper met elkander te verbinden”":
      "« Personne ne maîtrise une telle variété de dossiers immobiliers que Patrick Landuyt. D'une région à l'autre, son approche et ses résultats dépassent toute expertise locale en place. Avec une empathie, une concentration et un caractère hors du commun, il parvient à rapprocher vendeur et acquéreur »",
    '(Referentie op aanvraag)': '(Référence sur demande)',
    'PL Real Estate by Patrick Landuyt': 'PL Real Estate by Patrick Landuyt',
    'Bemiddeling zoals het moet. Discrete begeleiding van vastgoedtransacties in België, met meer dan 500 afgeronde opdrachten.':
      "Une intermédiation comme il se doit. Accompagnement discret de transactions immobilières en Belgique, avec plus de 500 missions menées à bien.",

    // ------------------------------------------------------------------- 404
    'Pagina niet gevonden': 'Page introuvable',
    'De pagina die u zoekt bestaat niet of werd verplaatst.':
      "La page que vous recherchez n'existe pas ou a été déplacée.",
    'Terug naar de homepage': "Retour à la page d'accueil",
    'Pagina niet gevonden | PL Real Estate': 'Page introuvable | PL Real Estate',

    // ----------------------------------------------------------------- about
    'Grondlegger in het discreet begeleiden van vastgoedtransacties.':
      "Pionnier de l'accompagnement discret des transactions immobilières.",
    'Bemiddeling zoals het moet': 'Une intermédiation comme il se doit',
    "Opgestart in 2009 koos Patrick Landuyt de moeilijkste weg. In alle stilte, zonder borden of grote budgetten, maar met de hoogste eisen stellende aan zichzelf. Gedreven en innovatief in vastgoedcommunicatie & verkoopstrategieën. Als een pragmatische doorzetter met een empathisch vermogen, een uitmuntend gevoel voor zintuiglijkheid en een ongeëvenaarde focus op elk dossier, klein of groot. Daardoor wist hij snel het vertrouwen te winnen van een vééleisend cliënteel. En wordt gerespecteerd door vele collega's in de vastgoedsector vanwege zijn voorbeeldfunctie en behaalde resultaten in soms zeer uitdagende verkoopdossiers.":
      "Lancé en 2009, Patrick Landuyt a choisi la voie la plus difficile. En toute discrétion, sans panneaux ni gros budgets, mais avec les exigences les plus élevées envers lui-même. Passionné et innovant en matière de communication immobilière et de stratégies de vente. Persévérant et pragmatique, doté d'une grande capacité d'empathie, d'un sens aigu du détail sensoriel et d'une concentration inégalée sur chaque dossier, petit ou grand. Il a ainsi rapidement gagné la confiance d'une clientèle très exigeante. Et il est respecté par de nombreux confrères du secteur immobilier pour son exemplarité et pour les résultats obtenus dans des dossiers de vente parfois très complexes.",
    'Onze klanten': 'Nos clients',
    'Ondernemers, bedrijfsleiders, kaderleden, vrije beroepers, zelfstandigen, …':
      'Entrepreneurs, dirigeants d’entreprise, cadres, professions libérales, indépendants, …',
    'Allen die dagdagelijks het beste geven van zichzelf.':
      "Tous ceux qui donnent chaque jour le meilleur d'eux-mêmes.",
    'Gegroeid vanuit mond-tot-mondreclame': 'Développé par le bouche-à-oreille',
    'Onze sociale meerwaarde': 'Notre valeur ajoutée sociale',
    '“De Geest wordt rijk door wat hij ontvangt, het Hart wordt rijk, door wat hij geeft, …” - Victor Hugo':
      "« L'Esprit s'enrichit de ce qu'il reçoit, le Cœur s'enrichit de ce qu'il donne, … » - Victor Hugo",
    'Naast onze professionele engagement bouwen we graag aan een sociale nalatenschap.':
      "Au-delà de notre engagement professionnel, nous aimons construire un héritage social.",
    'We hebben de mogelijkheden, de mentale/fysieke gezondheid en de kracht om ons dagelijks in te mogen zetten. Dit is niet iedereen gegeven. Dit indachtig wordt jaarlijks een deel van onze resultaten voorbehouden aan sociale en menselijke doelen.':
      "Nous avons les moyens, la santé mentale et physique ainsi que la force de nous investir au quotidien. Ce n'est pas donné à tout le monde. Conscients de cela, nous réservons chaque année une partie de nos résultats à des causes sociales et humaines.",
    'Over Patrick Landuyt | PL Real Estate': 'À propos de Patrick Landuyt | PL Real Estate',
    'Grondlegger in het discreet begeleiden van vastgoedtransacties. Sinds 2009 bemiddeling zoals het moet, voor een vééleisend cliënteel.':
      "Pionnier de l'accompagnement discret des transactions immobilières. Depuis 2009, une intermédiation comme il se doit, pour une clientèle très exigeante.",

    // ------------------------------------------------------------ references
    'De slideshow geeft een aantal referenties weer van begeleide transacties, verkopen en adviesopdrachten. Een representatieve greep uit de +/- 500 opdrachten waarin we het vertrouwen mochten verdienen.':
      "Le diaporama présente une sélection de références de transactions, de ventes et de missions de conseil accompagnées. Un échantillon représentatif des quelque 500 missions pour lesquelles nous avons mérité la confiance de nos clients.",
    'Discretie is één van onze uitgangspunten, met als doel vertrouwen en gemoedsrust te creëren. Op aanvraag geven we u graag onze échte referenties.':
      "La discrétion est l'un de nos principes fondamentaux, afin de créer confiance et sérénité. Sur demande, nous vous communiquons volontiers nos véritables références.",
    'Referenties | PL Real Estate': 'Références | PL Real Estate',
    'Een representatieve greep uit de +/- 500 begeleide transacties, verkopen en adviesopdrachten van PL Real Estate.':
      "Un échantillon représentatif des quelque 500 transactions, ventes et missions de conseil accompagnées par PL Real Estate.",

    // ------------------------------------------------------------ terms page
    // ⚠ Machine-assisted draft of a legal document. PENDING LEGAL REVIEW.
    'GDPR': 'RGPD',
    'Privacy': 'Vie privée',
    'Immophone-Partners verwerkt persoonsgegevens overeenkomstig deze privacyverklaring. Voor verdere informatie, vragen of opmerkingen omtrent ons privacy beleid, kunt u terecht op www.immophone&Partners.be en via info@immophone-partners.be':
      "Immophone-Partners traite les données à caractère personnel conformément à la présente déclaration de confidentialité. Pour toute information complémentaire, question ou remarque concernant notre politique de confidentialité, vous pouvez consulter www.immophone&Partners.be ou écrire à info@immophone-partners.be",
    'Verwerkingsdoeleinden': 'Finalités du traitement',
    'Immophone-Partners verzamelt en verwerkt de persoonsgegevens van klanten voor klantenbeheer (o.a. klantenadministratie, georganiseerde bezoeken, wettelijke rapportering naar opdrachtgevers en het verzenden van marketing mails in de vorm van gepersonaliseerde matching mailings).':
      "Immophone-Partners collecte et traite les données à caractère personnel des clients à des fins de gestion de la clientèle (notamment l'administration des clients, les visites organisées, le reporting légal aux donneurs d'ordre et l'envoi de courriels marketing sous la forme de mailings de correspondance personnalisés).",
    'Hieronder vindt u een overzicht van de verzamelde gegevens:':
      'Vous trouverez ci-dessous un aperçu des données collectées :',
    'Voor- en achternaam': 'Nom et prénom',
    'E-mailadres': 'Adresse e-mail',
    'Adresgegevens': 'Coordonnées postales',
    'Geslacht': 'Sexe',
    'Telefoonnummer': 'Numéro de téléphone',
    'GSM nummer': 'Numéro de GSM',
    'IP-adres': 'Adresse IP',
    'Rechtsgrond(en) van de verwerking': 'Base(s) juridique(s) du traitement',
    'Persoonsgegevens worden verwerkt op basis van artikel 6.1.':
      "Les données à caractère personnel sont traitées sur la base de l'article 6.1.",
    '(a) toestemming,': '(a) consentement,',
    '(b) noodzakelijk voor de uitvoering van een overeenkomst':
      "(b) nécessaire à l'exécution d'un contrat",
    '(c) noodzakelijk om te voldoen aan een wettelijke verplichting':
      '(c) nécessaire au respect d’une obligation légale',
    '(f) noodzakelijk voor de behartiging van onze gerechtvaardigde belang om te ondernemen':
      "(f) nécessaire à la poursuite de notre intérêt légitime à entreprendre",
    'van de Algemene Verordening Gegevensbescherming.':
      'du Règlement général sur la protection des données.',
    'In zoverre de verwerking van de persoonsgegevens plaatsvindt op basis van artikel 6.1. a) toestemming, heeft de klant steeds het recht om de gegeven toestemming terug in te trekken.':
      "Dans la mesure où le traitement des données à caractère personnel repose sur l'article 6.1. a) consentement, le client a toujours le droit de retirer le consentement donné.",
    'Overmaken aan derden': 'Transmission à des tiers',
    'Indien dit noodzakelijk is ter verwezenlijking van de vooropgestelde doeleinden, zullen de persoonsgegevens van de klant worden gedeeld met andere vennootschappen (van de Immophone&Partners groep) binnen de Europese Economische Ruimte die rechtstreeks of onrechtstreeks met Immophone-Partners verbonden zijn of met enige andere partner van Immophone-Partners groep) Immophone-Partners garandeert dat deze ontvangers de nodige technische en organisatorische maatregelen zullen nemen ter bescherming van de persoonsgegevens.':
      "Si cela s'avère nécessaire à la réalisation des finalités précitées, les données à caractère personnel du client seront partagées avec d'autres sociétés (du groupe Immophone&Partners) au sein de l'Espace économique européen, liées directement ou indirectement à Immophone-Partners, ou avec tout autre partenaire du groupe Immophone-Partners. Immophone-Partners garantit que ces destinataires prendront les mesures techniques et organisationnelles nécessaires à la protection des données à caractère personnel.",
    'Bewaarperiode': 'Durée de conservation',
    'De persoonsgegevens verwerkt voor klantenbeheer zullen worden bewaard gedurende de termijn die noodzakelijk is om aan de wettelijke vereisten te voldoen (onder andere op het gebied van boekhouding).':
      "Les données à caractère personnel traitées à des fins de gestion de la clientèle seront conservées pendant la durée nécessaire au respect des obligations légales (notamment en matière comptable).",
    'Recht van inzage, verbetering, wissen, beperking, bezwaar en overdraagbaarheid van de persoonsgegevens':
      "Droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité des données à caractère personnel",
    'De klant heeft te allen tijde recht op inzage van zijn persoonsgegevens en kan ze (laten) verbeteren indien ze onjuist of onvolledig zijn, ze laten verwijderen, de verwerking ervan laten beperken en bezwaar te maken tegen de verwerking van hem betreffende persoonsgegevens op basis van artikel 6.1 (f).':
      "Le client a à tout moment le droit d'accéder à ses données à caractère personnel et peut les (faire) rectifier si elles sont inexactes ou incomplètes, les faire effacer, en faire limiter le traitement et s'opposer au traitement des données à caractère personnel le concernant sur la base de l'article 6.1 (f).",
    'Bovendien, heeft de klant het recht om een kopie (in een gestructureerde, gangbare en machinaal leesbare vorm) van zijn persoonsgegevens te bekomen en de persoonsgegevens te laten doorsturen naar een andere vennootschap.':
      "En outre, le client a le droit d'obtenir une copie (sous une forme structurée, couramment utilisée et lisible par machine) de ses données à caractère personnel et de les faire transmettre à une autre société.",
    'Teneinde bovenvermelde rechten uit te oefenen, wordt de klant gevraagd om een van volgende stappen te ondernemen:':
      'Afin d’exercer les droits précités, le client est invité à effectuer l’une des démarches suivantes :',
    'zelf de instellingen van zijn klant account aan te passen;':
      'modifier lui-même les paramètres de son compte client ;',
    'een e-mail te verzenden naar het volgende e-mailadres: info@immophone-partners.be':
      "envoyer un e-mail à l'adresse suivante : info@immophone-partners.be",
    'een brief te richten aan Immophone-partners, Nazarethstraat 6 te 9840 De Pinte':
      'adresser un courrier à Immophone-partners, Nazarethstraat 6, 9840 De Pinte',
    'Direct marketing': 'Marketing direct',
    'De klant heeft het recht zich kosteloos te verzetten tegen elke verwerking van zijn persoonsgegevens met het oog op direct marketing.':
      "Le client a le droit de s'opposer gratuitement à tout traitement de ses données à caractère personnel à des fins de marketing direct.",
    'Klacht': 'Réclamation',
    'De Klant beschikt over het recht om een klacht in te dienen bij de Commissie voor de Bescherming van de Persoonlijke Levenssfeer (Drukpersstraat 35, 1000 Brussel - commission@privacycommission.be).':
      "Le Client dispose du droit d'introduire une réclamation auprès de la Commission de la protection de la vie privée (rue de la Presse 35, 1000 Bruxelles - commission@privacycommission.be).",
    'Cookieverklaring': 'Déclaration relative aux cookies',
    'Immophone-partners groep bevestigd géén gebruik te maken van cookies.':
      "Le groupe Immophone-partners confirme n'utiliser aucun cookie.",
    'Voorwaarden': 'Conditions',
    'Uw gebruik van de site “www.immophone-partners.be” houdt in dat u de volgende gebruiksvoorwaarden integraal aanvaardt.':
      "Votre utilisation du site « www.immophone-partners.be » implique que vous acceptez intégralement les conditions d'utilisation suivantes.",
    'Betrouwbaarheid van de informatie op de site':
      'Fiabilité des informations figurant sur le site',
    'Op onze site informeren wij u op geheel vrijblijvende wijze. Deze gegevens worden u geheel ter informatie aangeboden en wij kunnen u dus niet garanderen dat de informatie betrouwbaar, volledig en pertinent is. Wij bevelen u bijgevolg aan een beroep te doen op betrouwbare professionele adviseurs (vastgoedmakelaars, experts, architecten, advocaten, notarissen, fiscalisten of andere) alvorens een beslissing te nemen in verband met één of ander aspect van uw onroerende goederen. Wij doen al het mogelijke om op de “Immophone-partners” makelaars-site betrouwbare en regelmatig geüpdate vastgoedinformatie ter beschikking te stellen. De website kan echter niet verantwoordelijk gesteld worden voor eventuele fouten in de informatie. Wij raden u bijgevolg ten stelligste aan om, voordat u eender welke beslissing neemt (aankoop, huur,...) omtrent het vastgoed, zelf de juistheid van de informatie en de beschikbaarheid van het vastgoed na te gaan door contact met ons op te nemen.':
      "Sur notre site, nous vous informons à titre purement indicatif. Ces données vous sont fournies uniquement à titre d'information et nous ne pouvons donc pas garantir qu'elles soient fiables, complètes et pertinentes. Nous vous recommandons dès lors de faire appel à des conseillers professionnels fiables (agents immobiliers, experts, architectes, avocats, notaires, fiscalistes ou autres) avant de prendre une décision concernant l'un ou l'autre aspect de vos biens immobiliers. Nous mettons tout en œuvre pour mettre à disposition, sur le site de courtage « Immophone-partners », des informations immobilières fiables et régulièrement mises à jour. Le site web ne peut toutefois être tenu responsable d'éventuelles erreurs dans les informations. Nous vous conseillons dès lors vivement, avant de prendre quelque décision que ce soit (achat, location, ...) concernant le bien, de vérifier vous-même l'exactitude des informations et la disponibilité du bien en prenant contact avec nous.",
    'Beschikbaarheid van de site': 'Disponibilité du site',
    'Hoewel wij ons inzetten om de "Immophone-partners” makelaars-site 7 dagen op 7 en 24 uur op 24 ter beschikking te stellen, behouden wij ons het recht om op elk moment en zonder voorafgaande waarschuwing, de toegang tot de site te onderbreken om technische redenen of andere. Wij behoudens ons eveneens het recht onze diensten te beëindigen. Dit zonder dat we kunnen verantwoordelijk gehouden worden voor deze onderbrekingen en de mogelijke gevolgen hiervan voor u of een derde.':
      "Bien que nous nous efforcions de rendre le site de courtage « Immophone-partners » accessible 7 jours sur 7 et 24 heures sur 24, nous nous réservons le droit d'interrompre à tout moment et sans avertissement préalable l'accès au site pour des raisons techniques ou autres. Nous nous réservons également le droit de mettre fin à nos services. Ceci sans que nous puissions être tenus responsables de ces interruptions ni de leurs conséquences éventuelles pour vous ou pour un tiers.",
    'Toegangsverbod tot de site': "Interdiction d'accès au site",
    'Wij behouden ons het recht eenzijdig de toegang te verbieden tot heel de site of een gedeelte ervan voor elke fysieke of rechtspersoon:':
      "Nous nous réservons le droit d'interdire unilatéralement l'accès à tout ou partie du site à toute personne physique ou morale :",
    'die deze gebruiksvoorwaarden zou overtreden':
      "qui enfreindrait les présentes conditions d'utilisation",
    'die op de één of andere manier de goede reputatie van de site zou aantasten':
      "qui porterait atteinte, d'une manière ou d'une autre, à la bonne réputation du site",
    'die inbreuk zou plegen op de intellectuele rechten van derden':
      'qui porterait atteinte aux droits intellectuels de tiers',
    'die de site zou aanwenden voor onwettige doeleinden':
      'qui utiliserait le site à des fins illicites',
    'Wij behouden ons eveneens het recht om diezelfde personen gerechtelijk te vervolgen.':
      'Nous nous réservons également le droit de poursuivre ces mêmes personnes en justice.',
    'Wet van toepassing en rechtspraak': 'Droit applicable et juridiction',
    'Voor elk eventueel geschil dat voortvloeit uit het gebruik van de “Immophone-partners” makelaars-site is de Belgische wet van toepassing, en enkel de Belgische rechtbanken zijn bevoegd.':
      "Tout litige éventuel découlant de l'utilisation du site de courtage « Immophone-partners » est régi par le droit belge, et seuls les tribunaux belges sont compétents.",
    'Bescherming van intellectuele rechten': 'Protection des droits intellectuels',
    'Het logo, evenals de bedrijfsnaam van Immophone-Partners behoren tot diens eigen auteursrecht en mogen onder geen beding worden gereproduceerd of weergegeven zonder toestemming van Immophone-partners.':
      "Le logo ainsi que la dénomination sociale d'Immophone-Partners relèvent de son propre droit d'auteur et ne peuvent en aucun cas être reproduits ou représentés sans l'autorisation d'Immophone-partners.",
    'De aanwezigheid van andere handelsnamen of merknamen of de website van Immophone-partners, geschiedt na uitdrukkelijke toestemming van de rechthebbenden daarop.':
      "La présence d'autres noms commerciaux ou de marques sur le site web d'Immophone-partners intervient après autorisation expresse de leurs ayants droit.",
    'Immophone-partners draagt niettemin geen enkele aansprakelijkheid voor de aanwezigheid van informatie op haar website die mogelijks een inbreuk zouden plegen op intellectuele rechten van derden.':
      "Immophone-partners n'assume néanmoins aucune responsabilité quant à la présence, sur son site web, d'informations susceptibles de porter atteinte aux droits intellectuels de tiers.",
    'Partijen die menen dat hun intellectuele rechten werden geschonden door een niet toegelaten gebruik van hun werk op de website van Immophone-partners, worden vriendelijk uitgenodigd hiervan ten spoedigste Immophone-partners in kennis te stellen, welke alsdan het nodige zal doen om het inbreukmakend materiaal minstens tijdelijk van de website te verwijderen.':
      "Les parties qui estiment que leurs droits intellectuels ont été violés par une utilisation non autorisée de leur œuvre sur le site web d'Immophone-partners sont aimablement invitées à en informer Immophone-partners dans les meilleurs délais ; celle-ci fera alors le nécessaire pour retirer, au moins temporairement, le matériel litigieux du site web.",
    'Informatie verplichting (Europese AVG-Richtlijn 2016/679 in voege vanaf 25 mei 2018)':
      'Obligation d’information (Règlement européen RGPD 2016/679, en vigueur depuis le 25 mai 2018)',
    'Ons algemeen beleid op het vlak van gegevensbescherming vindt u terug onder de link Privacy. U hebt het recht om uw gegevens in te zien, te verbeteren en in bepaalde omstandigheden te laten wissen. Als u het niet eens bent met de manier waarop wij uw gegevens verwerken, gelieve u te wenden tot de Gegevensbeschermingsautoriteit (www.privacycommission.be – Drukpersstraat 35 te 1000 Brussel).':
      "Notre politique générale en matière de protection des données figure sous le lien Vie privée. Vous avez le droit de consulter vos données, de les rectifier et, dans certaines circonstances, de les faire effacer. Si vous n'êtes pas d'accord avec la manière dont nous traitons vos données, veuillez vous adresser à l'Autorité de protection des données (www.privacycommission.be – rue de la Presse 35, 1000 Bruxelles).",
    'Algemene voorwaarden | PL Real Estate': 'Conditions générales | PL Real Estate',
    'Privacyverklaring, cookieverklaring en gebruiksvoorwaarden van PL Real Estate.':
      "Déclaration de confidentialité, déclaration relative aux cookies et conditions d'utilisation de PL Real Estate.",

    // ------------------------------------------------------------------ form
    'Naam': 'Nom',
    'Vul uw naam in.': 'Veuillez indiquer votre nom.',
    'E-mail': 'E-mail',
    'Vul een geldig e-mailadres in.': 'Veuillez indiquer une adresse e-mail valide.',
    'Onderwerp': 'Objet',
    'Bericht': 'Message',
    'Vul uw bericht in.': 'Veuillez saisir votre message.',
    'Verzenden…': 'Envoi en cours…',
    'Verzenden': 'Envoyer',
    'Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.':
      'Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.',
    'Er ging iets mis bij het verzenden. Probeer het opnieuw of bel ons rechtstreeks.':
      "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous appeler directement.",

    // ---------------------------------------------------------------- shared
    'Samen aan de slag?': 'On travaille ensemble ?',
    'Benieuwd wat ik voor u kan betekenen of voor een kort gratis advies:':
      "Curieux de savoir ce que je peux faire pour vous, ou pour un bref conseil gratuit :",
    'Referenties diavoorstelling': 'Diaporama des références',
    'Diavoorstelling pauzeren': 'Mettre le diaporama en pause',
    'Diavoorstelling afspelen': 'Lancer le diaporama',
    'Vorige referentie': 'Référence précédente',
    'Volgende referentie': 'Référence suivante',
    'MORE SOON...': 'BIENTÔT PLUS...',
    'Patrick Landuyt op LinkedIn': 'Patrick Landuyt sur LinkedIn',
    'Patrick Landuyt op Luxevastgoed': 'Patrick Landuyt sur Luxevastgoed',
  },

  'en-GB': {
    // ---------------------------------------------------------- services
    'Verkoop van alle vastgoed': 'Sale of all types of property',
    'Residentieel vastgoed:': 'Residential property:',
    "Gronden, appartementen, klassieke woningen & exclusieve villa's, uitzonderlijk & uniek vastgoed":
      'Land, apartments, classic houses & exclusive villas, exceptional and one-of-a-kind property',
    'Investeringsvastgoed:': 'Investment property:',
    'Projecten en verkavelingen': 'Developments and subdivisions',
    'Bedrijfsvastgoed:': 'Business property:',
    'Kantoren, loodsen, KMO-units, …': 'Offices, warehouses, SME units, …',
    'Commercieel vastgoed:': 'Commercial property:',
    'Winkelruimtes, hotels, ...': 'Retail units, hotels, ...',

    'Discrete verkoop': 'Discreet sale',
    "Wenst u een 'stille' verkoop, waarbij uw buren dit niet merken?":
      'Would you prefer a "quiet" sale, one your neighbours never notice?',
    'Als géén ander hanteert Patrick Landuyt deze vruchtbare techniek en zorgt ervoor dat enkel de juiste kandidaten uw eigendom zullen bezoeken.':
      'Patrick Landuyt handles this fruitful technique like no other, ensuring that only the right candidates ever view your property.',
    'Hierbij wordt Patrick Landuyt ondersteunt door een database van zoekende klanten en een uitgebreid netwerk, welke eveneens erg op hun discretie zijn gesteld.':
      'In doing so he draws on a database of actively searching clients and an extensive network, who equally value their discretion.',
    'Een méést doorgedreven discrete vastgoedcommunicatie.':
      'Property communication taken to the highest degree of discretion.',

    'Erkende schattingen - Pro evaluation': 'Accredited valuations - Pro evaluation',
    'Een professionele schatting gebeurt vanuit diverse invalshoeken, ervaring en marktkennis.':
      'A professional valuation draws on multiple perspectives, on experience and on market knowledge.',
    'We verzorgen multidisciplinaire & erkende schattingen op basis van VLABEL-methodologie, KAVEX rekenmodellen, Stadim, …':
      'We provide multidisciplinary and accredited valuations based on the VLABEL methodology, KAVEX calculation models, Stadim, …',

    'SOS-Vastgoed': 'SOS Property',
    'Uw eigendom staat reeds te koop, maar verloopt dit niet naar wens? U bent niet tevreden omtrent de huidige begeleiding of vooropgestelde verwachtingen worden niet ingelost?':
      'Your property is already on the market, but it is not going as you had hoped? You are not satisfied with the current guidance, or the expectations you were given are not being met?',
    'We herkennen deze situaties zeker en vast.':
      'These situations are certainly familiar to us.',
    'Menige verkoopopdrachten hebben we overgenomen en tot een goed einde geleid. Referenties worden u ter beschikking gesteld.':
      'We have taken over many sales instructions and brought them to a successful conclusion. References are available on request.',

    'PRO-advice': 'PRO-advice',
    'Uniek platform en samenwerkingsverbanden, waarbij advies en verkoopondersteuning wordt versterkt aan collega makelaars, landmeters, notarissen, bankiers en vermogensbeheerders, family offices, …':
      'A unique platform and set of partnerships, strengthening advice and sales support for fellow agents, surveyors, notaries, bankers and wealth managers, family offices, …',
    'Tevens bieden we ondersteuning en oplossingen bij onverdeeldheid en vastgoedconflicten.':
      'We also offer support and solutions in cases of joint ownership and property disputes.',

    'Share deals & asset deals': 'Share deals & asset deals',
    'Een klassieke verkoop onderworpen aan verkooprechten of registratierechten is het meest voorkomend.':
      'A conventional sale, subject to transfer or registration duties, is the most common route.',
    'Zit uw vastgoed echter in een vennootschap? Samen met u en uw accountant waarderen we de aandelen en berekenen we de latenties. Ook wordt er gezocht naar een koper voor de aandelen.':
      'But is your property held within a company? Together with you and your accountant we value the shares and calculate the latent tax liabilities. We also search for a buyer for the shares.',

    'Aankoopbegeleiding': 'Purchase guidance',
    'U overweegt de aankoop van een eigendom?': 'Are you considering buying a property?',
    'We verdedigen uw belangen als koper.': 'We represent your interests as the buyer.',
    "We besparen u vele euro's & kopzorgen!":
      'We save you a great many euros and a great deal of worry!',
    'Voor een méér "Op maat begeleidingspakket", verzoeken we u een kijkje te nemen op:':
      'For a more bespoke guidance package, we invite you to take a look at:',

    'Gratis homefinder: wij vinden uw droomwoning!':
      'Free homefinder: we will find your dream home!',
    'We helpen u bij het vinden van uw droomwoning.':
      'We help you find your dream home.',
    'De zoektocht naar uw ideale woning kan een ingewikkelde en lange zoektocht zijn. Het ene huis voldoet nét niet aan alle eisen en voor het andere bent u nét te laat. U wilt eigenlijk als eerste op de hoogte zijn en bericht krijgen wanneer uw droomwoning beschikbaar is.':
      'The search for your ideal home can be a long and complicated one. One house falls just short of your requirements, and for another you are just too late. What you really want is to be the first to know the moment your dream home becomes available.',
    'Onze troef is het persoonlijke & discrete karakter van onze begeleidingen. Als grondlegger van de PRO-SALE community beschikken we over een méést uitgebreid – en op maat aangepast - netwerk om eigendommen te vinden welke grotendeels nog niet via openbare kanalen te koop worden aangeboden.':
      'Our strength is the personal and discreet character of our guidance. As the founder of the PRO-SALE community, we have an exceptionally extensive — and bespoke — network for finding properties that are largely not yet offered for sale through public channels.',
    'We nodigen u uit na te denken hoe uw droomwoning eruit ziet, waar uw prioriteiten liggen en de criteria die ons hierbij zouden kunnen helpen. We toetsen dit dan af een onze interne checklisten.':
      'We invite you to consider what your dream home looks like, where your priorities lie and which criteria might help us. We then measure this against our internal checklists.',
    'Laat het ons weten via': 'Let us know at',

    'Kleinschalige projectontwikkeling': 'Small-scale property development',
    'Heeft u bouwgrond of een renovatiepand welke eventueel in aanmerking komt voor herbestemming of projectontwikkeling?':
      'Do you own building land or a renovation property that might qualify for redevelopment or a change of use?',
    'Via een haalbaarheidsstudie onderzoeken we de mogelijkheden en optimale winst of opbrengst.':
      'Through a feasibility study we examine the possibilities and the optimal profit or return.',
    'We leggen contacten met de diensten van de gemeenten of steden. We toetsen dit alles af bij bouwheren/ontwikkelaars.':
      'We make contact with the relevant municipal or city departments, and test the whole picture with clients and developers.',

    'Vermogen, optimalisatie & successie': 'Wealth, optimisation & succession',
    'Wij helpen je mee met het optimaliseren van je vermogen, zowel privé als professioneel. En hoe toekomstgericht geld te besparen of hoe een vastgoedverkoop zien in het kader van successie. Iedere klant krijgt een gratis introductie sessie.':
      'We help you optimise your wealth, both private and professional: how to save with an eye on the future, and how to view a property sale in the context of succession. Every client receives a free introductory session.',

    // ------------------------------------------------------ header/footer
    'Private & flex offices:': 'Private & flex offices:',
    'Wij zijn beschikbaar 24/24, 7/7.': 'We are available 24/7.',
    'Meer info': 'More info',
    'Doorgaan naar inhoud': 'Skip to content',
    'Menu': 'Menu',
    'Hoofdnavigatie': 'Main navigation',
    'Over': 'About',
    'Diensten': 'Services',
    'Referenties': 'References',
    'Contact': 'Contact',

    // ------------------------------------------------------------ contact
    'Contacteer ons': 'Contact us',
    'Maatschappelijke zetel:': 'Registered office:',
    'Volg Patrick Landuyt op LinkedIn en Luxevastgoed:':
      'Follow Patrick Landuyt on LinkedIn and Luxevastgoed:',
    'Verdere info': 'Further information',
    'Zaakvoerder': 'Managing director',
    'Vastgoedmakelaar bemiddelaar': 'Estate agent — intermediary',
    'BIV erkenningsnummer voor Belgïe:': 'BIV registration number for Belgium:',
    'Ondernemingsnummer:': 'Company number:',
    'BTW': 'VAT',
    'Derdenrekening:': 'Client account:',
    'BA & Borgstelling:': 'Liability insurance & bond:',
    'Onderworpen aan de deontologische code van het BIV, Beroepsinstituut van de Vastgoedmakelaars.':
      'Subject to the code of conduct of the BIV, the Belgian Professional Institute of Estate Agents.',
    'Toezichthoudende autoriteit': 'Supervisory authority',
    'Deontologie & Plichtenleer:': 'Code of conduct:',
    'Als u deze site bezoekt, gaat u akkoord met de':
      'By visiting this site, you agree to the',
    'Algemene voorwaarden': 'Terms and conditions',
    'Verzekering BA en borgstelling via NV AXA Belgium ( polis nr.730.390.160)':
      'Liability insurance and bond via NV AXA Belgium (policy no. 730.390.160)',
    'Contact | PL Real Estate': 'Contact | PL Real Estate',
    'Neem contact op met Patrick Landuyt — Nazarethstraat 6, De Pinte. Bereikbaar 24/24, 7/7.':
      'Get in touch with Patrick Landuyt — Nazarethstraat 6, De Pinte. Available 24/7.',

    // ----------------------------------------------------------- services page
    'Een gezin wandelt door een landschapstuin naar een oranjerie':
      'A family walking through a landscaped garden towards an orangery',
    'U kan bij Patrick Landuyt terecht voor verscheidene diensten, waar expertise, ervaring en resultaat steeds garant staan.':
      'Patrick Landuyt offers a range of services, in which expertise, experience and results are always assured.',
    'Diensten | PL Real Estate': 'Services | PL Real Estate',
    'Verkoop, discrete verkoop, erkende schattingen, aankoopbegeleiding, share deals en projectontwikkeling — waar expertise, ervaring en resultaat steeds garant staan.':
      'Sales, discreet sales, accredited valuations, purchase guidance, share deals and property development — where expertise, experience and results are always assured.',

    // -------------------------------------------------------------- homepage
    'BEMIDDELING ZOALS HET MOET': 'BROKERAGE AS IT SHOULD BE',
    "“Niemand beheerst een danige variëteit in vastgoeddossiers als Patrick Landuyt. Over regio's heen overstijgen zijn aanpak en resultaten iedere aanwezige lokale expertise. Met een ongeziene empathie, focus en karakter weet hij verkoper én koper met elkander te verbinden”":
      '"No one commands such a range of property files as Patrick Landuyt. Across regions, his approach and his results surpass any local expertise on the ground. With rare empathy, focus and character, he brings seller and buyer together."',
    '(Referentie op aanvraag)': '(Reference on request)',
    'PL Real Estate by Patrick Landuyt': 'PL Real Estate by Patrick Landuyt',
    'Bemiddeling zoals het moet. Discrete begeleiding van vastgoedtransacties in België, met meer dan 500 afgeronde opdrachten.':
      'Brokerage as it should be. Discreet guidance of property transactions in Belgium, with more than 500 completed instructions.',

    // ------------------------------------------------------------------- 404
    'Pagina niet gevonden': 'Page not found',
    'De pagina die u zoekt bestaat niet of werd verplaatst.':
      'The page you are looking for does not exist or has been moved.',
    'Terug naar de homepage': 'Back to the homepage',
    'Pagina niet gevonden | PL Real Estate': 'Page not found | PL Real Estate',

    // ----------------------------------------------------------------- about
    'Grondlegger in het discreet begeleiden van vastgoedtransacties.':
      'A pioneer in the discreet guidance of property transactions.',
    'Bemiddeling zoals het moet': 'Brokerage as it should be',
    "Opgestart in 2009 koos Patrick Landuyt de moeilijkste weg. In alle stilte, zonder borden of grote budgetten, maar met de hoogste eisen stellende aan zichzelf. Gedreven en innovatief in vastgoedcommunicatie & verkoopstrategieën. Als een pragmatische doorzetter met een empathisch vermogen, een uitmuntend gevoel voor zintuiglijkheid en een ongeëvenaarde focus op elk dossier, klein of groot. Daardoor wist hij snel het vertrouwen te winnen van een vééleisend cliënteel. En wordt gerespecteerd door vele collega's in de vastgoedsector vanwege zijn voorbeeldfunctie en behaalde resultaten in soms zeer uitdagende verkoopdossiers.":
      'Starting out in 2009, Patrick Landuyt chose the hardest road. Quietly, without boards or large budgets, but holding himself to the highest standards. Driven and innovative in property communication and sales strategy. A pragmatic and persistent operator with a capacity for empathy, an exceptional feel for the sensory qualities of a property, and an unrivalled focus on every file, large or small. He quickly earned the trust of a highly demanding clientele, and he is respected by many colleagues in the property sector for the example he sets and for the results he has achieved in sometimes very challenging sales.',
    'Onze klanten': 'Our clients',
    'Ondernemers, bedrijfsleiders, kaderleden, vrije beroepers, zelfstandigen, …':
      'Entrepreneurs, company directors, senior managers, professionals, the self-employed, …',
    'Allen die dagdagelijks het beste geven van zichzelf.':
      'All those who give the best of themselves every day.',
    'Gegroeid vanuit mond-tot-mondreclame': 'Grown through word of mouth',
    'Onze sociale meerwaarde': 'Our social contribution',
    '“De Geest wordt rijk door wat hij ontvangt, het Hart wordt rijk, door wat hij geeft, …” - Victor Hugo':
      '"The Mind grows rich from what it receives, the Heart grows rich from what it gives, …" - Victor Hugo',
    'Naast onze professionele engagement bouwen we graag aan een sociale nalatenschap.':
      'Alongside our professional commitment, we like to build a social legacy.',
    'We hebben de mogelijkheden, de mentale/fysieke gezondheid en de kracht om ons dagelijks in te mogen zetten. Dit is niet iedereen gegeven. Dit indachtig wordt jaarlijks een deel van onze resultaten voorbehouden aan sociale en menselijke doelen.':
      'We have the means, the mental and physical health, and the strength to apply ourselves every day. Not everyone is so fortunate. Mindful of that, each year a portion of our results is set aside for social and humanitarian causes.',
    'Over Patrick Landuyt | PL Real Estate': 'About Patrick Landuyt | PL Real Estate',
    'Grondlegger in het discreet begeleiden van vastgoedtransacties. Sinds 2009 bemiddeling zoals het moet, voor een vééleisend cliënteel.':
      'A pioneer in the discreet guidance of property transactions. Since 2009, brokerage as it should be, for a highly demanding clientele.',

    // ------------------------------------------------------------ references
    'De slideshow geeft een aantal referenties weer van begeleide transacties, verkopen en adviesopdrachten. Een representatieve greep uit de +/- 500 opdrachten waarin we het vertrouwen mochten verdienen.':
      'The slideshow shows a selection of references from transactions, sales and advisory instructions we have guided. A representative sample of the roughly 500 instructions in which we earned our clients’ trust.',
    'Discretie is één van onze uitgangspunten, met als doel vertrouwen en gemoedsrust te creëren. Op aanvraag geven we u graag onze échte referenties.':
      'Discretion is one of our guiding principles, with the aim of creating trust and peace of mind. On request, we are glad to share our genuine references with you.',
    'Referenties | PL Real Estate': 'References | PL Real Estate',
    'Een representatieve greep uit de +/- 500 begeleide transacties, verkopen en adviesopdrachten van PL Real Estate.':
      'A representative sample of the roughly 500 transactions, sales and advisory instructions guided by PL Real Estate.',

    // ------------------------------------------------------------ terms page
    // ⚠ Machine-assisted draft of a legal document. PENDING LEGAL REVIEW.
    'GDPR': 'GDPR',
    'Privacy': 'Privacy',
    'Immophone-Partners verwerkt persoonsgegevens overeenkomstig deze privacyverklaring. Voor verdere informatie, vragen of opmerkingen omtrent ons privacy beleid, kunt u terecht op www.immophone&Partners.be en via info@immophone-partners.be':
      'Immophone-Partners processes personal data in accordance with this privacy statement. For further information, questions or comments regarding our privacy policy, please visit www.immophone&Partners.be or write to info@immophone-partners.be',
    'Verwerkingsdoeleinden': 'Purposes of processing',
    'Immophone-Partners verzamelt en verwerkt de persoonsgegevens van klanten voor klantenbeheer (o.a. klantenadministratie, georganiseerde bezoeken, wettelijke rapportering naar opdrachtgevers en het verzenden van marketing mails in de vorm van gepersonaliseerde matching mailings).':
      'Immophone-Partners collects and processes clients’ personal data for client management (including client administration, organised viewings, statutory reporting to instructing parties, and sending marketing emails in the form of personalised matching mailings).',
    'Hieronder vindt u een overzicht van de verzamelde gegevens:':
      'Below is an overview of the data collected:',
    'Voor- en achternaam': 'First and last name',
    'E-mailadres': 'Email address',
    'Adresgegevens': 'Address details',
    'Geslacht': 'Gender',
    'Telefoonnummer': 'Telephone number',
    'GSM nummer': 'Mobile number',
    'IP-adres': 'IP address',
    'Rechtsgrond(en) van de verwerking': 'Legal basis (or bases) for processing',
    'Persoonsgegevens worden verwerkt op basis van artikel 6.1.':
      'Personal data are processed on the basis of Article 6.1.',
    '(a) toestemming,': '(a) consent,',
    '(b) noodzakelijk voor de uitvoering van een overeenkomst':
      '(b) necessary for the performance of a contract',
    '(c) noodzakelijk om te voldoen aan een wettelijke verplichting':
      '(c) necessary for compliance with a legal obligation',
    '(f) noodzakelijk voor de behartiging van onze gerechtvaardigde belang om te ondernemen':
      '(f) necessary for the purposes of our legitimate interest in conducting business',
    'van de Algemene Verordening Gegevensbescherming.':
      'of the General Data Protection Regulation.',
    'In zoverre de verwerking van de persoonsgegevens plaatsvindt op basis van artikel 6.1. a) toestemming, heeft de klant steeds het recht om de gegeven toestemming terug in te trekken.':
      'Insofar as the processing of personal data takes place on the basis of Article 6.1(a) consent, the client always has the right to withdraw the consent given.',
    'Overmaken aan derden': 'Transfer to third parties',
    'Indien dit noodzakelijk is ter verwezenlijking van de vooropgestelde doeleinden, zullen de persoonsgegevens van de klant worden gedeeld met andere vennootschappen (van de Immophone&Partners groep) binnen de Europese Economische Ruimte die rechtstreeks of onrechtstreeks met Immophone-Partners verbonden zijn of met enige andere partner van Immophone-Partners groep) Immophone-Partners garandeert dat deze ontvangers de nodige technische en organisatorische maatregelen zullen nemen ter bescherming van de persoonsgegevens.':
      'Where necessary to achieve the stated purposes, the client’s personal data will be shared with other companies (of the Immophone&Partners group) within the European Economic Area that are directly or indirectly connected to Immophone-Partners, or with any other partner of the Immophone-Partners group. Immophone-Partners guarantees that these recipients will take the necessary technical and organisational measures to protect the personal data.',
    'Bewaarperiode': 'Retention period',
    'De persoonsgegevens verwerkt voor klantenbeheer zullen worden bewaard gedurende de termijn die noodzakelijk is om aan de wettelijke vereisten te voldoen (onder andere op het gebied van boekhouding).':
      'Personal data processed for client management will be retained for the period necessary to comply with statutory requirements (including in the area of accounting).',
    'Recht van inzage, verbetering, wissen, beperking, bezwaar en overdraagbaarheid van de persoonsgegevens':
      'Right of access, rectification, erasure, restriction, objection and portability of personal data',
    'De klant heeft te allen tijde recht op inzage van zijn persoonsgegevens en kan ze (laten) verbeteren indien ze onjuist of onvolledig zijn, ze laten verwijderen, de verwerking ervan laten beperken en bezwaar te maken tegen de verwerking van hem betreffende persoonsgegevens op basis van artikel 6.1 (f).':
      'The client has the right at all times to access their personal data and may have them rectified if they are inaccurate or incomplete, have them erased, have their processing restricted, and object to the processing of personal data concerning them on the basis of Article 6.1(f).',
    'Bovendien, heeft de klant het recht om een kopie (in een gestructureerde, gangbare en machinaal leesbare vorm) van zijn persoonsgegevens te bekomen en de persoonsgegevens te laten doorsturen naar een andere vennootschap.':
      'In addition, the client has the right to obtain a copy of their personal data (in a structured, commonly used and machine-readable format) and to have the personal data transmitted to another company.',
    'Teneinde bovenvermelde rechten uit te oefenen, wordt de klant gevraagd om een van volgende stappen te ondernemen:':
      'In order to exercise the rights set out above, the client is asked to take one of the following steps:',
    'zelf de instellingen van zijn klant account aan te passen;':
      'adjust the settings of their client account themselves;',
    'een e-mail te verzenden naar het volgende e-mailadres: info@immophone-partners.be':
      'send an email to the following address: info@immophone-partners.be',
    'een brief te richten aan Immophone-partners, Nazarethstraat 6 te 9840 De Pinte':
      'send a letter to Immophone-partners, Nazarethstraat 6, 9840 De Pinte',
    'Direct marketing': 'Direct marketing',
    'De klant heeft het recht zich kosteloos te verzetten tegen elke verwerking van zijn persoonsgegevens met het oog op direct marketing.':
      'The client has the right to object, free of charge, to any processing of their personal data for direct marketing purposes.',
    'Klacht': 'Complaint',
    'De Klant beschikt over het recht om een klacht in te dienen bij de Commissie voor de Bescherming van de Persoonlijke Levenssfeer (Drukpersstraat 35, 1000 Brussel - commission@privacycommission.be).':
      'The Client has the right to lodge a complaint with the Commission for the Protection of Privacy (Drukpersstraat 35, 1000 Brussels - commission@privacycommission.be).',
    'Cookieverklaring': 'Cookie statement',
    'Immophone-partners groep bevestigd géén gebruik te maken van cookies.':
      'The Immophone-partners group confirms that it does not use cookies.',
    'Voorwaarden': 'Terms of use',
    'Uw gebruik van de site “www.immophone-partners.be” houdt in dat u de volgende gebruiksvoorwaarden integraal aanvaardt.':
      'Your use of the site "www.immophone-partners.be" means that you accept the following terms of use in full.',
    'Betrouwbaarheid van de informatie op de site':
      'Reliability of the information on the site',
    'Op onze site informeren wij u op geheel vrijblijvende wijze. Deze gegevens worden u geheel ter informatie aangeboden en wij kunnen u dus niet garanderen dat de informatie betrouwbaar, volledig en pertinent is. Wij bevelen u bijgevolg aan een beroep te doen op betrouwbare professionele adviseurs (vastgoedmakelaars, experts, architecten, advocaten, notarissen, fiscalisten of andere) alvorens een beslissing te nemen in verband met één of ander aspect van uw onroerende goederen. Wij doen al het mogelijke om op de “Immophone-partners” makelaars-site betrouwbare en regelmatig geüpdate vastgoedinformatie ter beschikking te stellen. De website kan echter niet verantwoordelijk gesteld worden voor eventuele fouten in de informatie. Wij raden u bijgevolg ten stelligste aan om, voordat u eender welke beslissing neemt (aankoop, huur,...) omtrent het vastgoed, zelf de juistheid van de informatie en de beschikbaarheid van het vastgoed na te gaan door contact met ons op te nemen.':
      'On our site we inform you entirely without obligation. This information is provided purely for information purposes and we therefore cannot guarantee that it is reliable, complete or pertinent. We accordingly recommend that you engage reliable professional advisers (estate agents, experts, architects, lawyers, notaries, tax advisers or others) before taking any decision regarding any aspect of your real property. We do everything possible to make reliable and regularly updated property information available on the "Immophone-partners" agency site. The website cannot, however, be held responsible for any errors in the information. We therefore strongly advise you, before taking any decision whatsoever (purchase, rental, ...) regarding the property, to verify the accuracy of the information and the availability of the property yourself by contacting us.',
    'Beschikbaarheid van de site': 'Availability of the site',
    'Hoewel wij ons inzetten om de "Immophone-partners” makelaars-site 7 dagen op 7 en 24 uur op 24 ter beschikking te stellen, behouden wij ons het recht om op elk moment en zonder voorafgaande waarschuwing, de toegang tot de site te onderbreken om technische redenen of andere. Wij behoudens ons eveneens het recht onze diensten te beëindigen. Dit zonder dat we kunnen verantwoordelijk gehouden worden voor deze onderbrekingen en de mogelijke gevolgen hiervan voor u of een derde.':
      'Although we strive to make the "Immophone-partners" agency site available 7 days a week and 24 hours a day, we reserve the right to interrupt access to the site at any time and without prior warning, for technical or other reasons. We likewise reserve the right to discontinue our services. This without our being held responsible for such interruptions or their possible consequences for you or for a third party.',
    'Toegangsverbod tot de site': 'Prohibition of access to the site',
    'Wij behouden ons het recht eenzijdig de toegang te verbieden tot heel de site of een gedeelte ervan voor elke fysieke of rechtspersoon:':
      'We reserve the right to unilaterally prohibit access to all or part of the site to any natural or legal person:',
    'die deze gebruiksvoorwaarden zou overtreden': 'who breaches these terms of use',
    'die op de één of andere manier de goede reputatie van de site zou aantasten':
      'who in any way damages the good reputation of the site',
    'die inbreuk zou plegen op de intellectuele rechten van derden':
      'who infringes the intellectual property rights of third parties',
    'die de site zou aanwenden voor onwettige doeleinden':
      'who uses the site for unlawful purposes',
    'Wij behouden ons eveneens het recht om diezelfde personen gerechtelijk te vervolgen.':
      'We likewise reserve the right to bring legal proceedings against those same persons.',
    'Wet van toepassing en rechtspraak': 'Applicable law and jurisdiction',
    'Voor elk eventueel geschil dat voortvloeit uit het gebruik van de “Immophone-partners” makelaars-site is de Belgische wet van toepassing, en enkel de Belgische rechtbanken zijn bevoegd.':
      'Any dispute arising from the use of the "Immophone-partners" agency site is governed by Belgian law, and only the Belgian courts have jurisdiction.',
    'Bescherming van intellectuele rechten': 'Protection of intellectual property rights',
    'Het logo, evenals de bedrijfsnaam van Immophone-Partners behoren tot diens eigen auteursrecht en mogen onder geen beding worden gereproduceerd of weergegeven zonder toestemming van Immophone-partners.':
      'The logo, as well as the company name of Immophone-Partners, are subject to its own copyright and may under no circumstances be reproduced or displayed without the permission of Immophone-partners.',
    'De aanwezigheid van andere handelsnamen of merknamen of de website van Immophone-partners, geschiedt na uitdrukkelijke toestemming van de rechthebbenden daarop.':
      'The presence of other trade names or brand names on the Immophone-partners website occurs with the express permission of their rights holders.',
    'Immophone-partners draagt niettemin geen enkele aansprakelijkheid voor de aanwezigheid van informatie op haar website die mogelijks een inbreuk zouden plegen op intellectuele rechten van derden.':
      'Immophone-partners nevertheless accepts no liability for the presence on its website of information that may infringe the intellectual property rights of third parties.',
    'Partijen die menen dat hun intellectuele rechten werden geschonden door een niet toegelaten gebruik van hun werk op de website van Immophone-partners, worden vriendelijk uitgenodigd hiervan ten spoedigste Immophone-partners in kennis te stellen, welke alsdan het nodige zal doen om het inbreukmakend materiaal minstens tijdelijk van de website te verwijderen.':
      'Parties who believe that their intellectual property rights have been infringed by unauthorised use of their work on the Immophone-partners website are kindly invited to notify Immophone-partners as soon as possible, whereupon it will take the necessary steps to remove the infringing material from the website, at least temporarily.',
    'Informatie verplichting (Europese AVG-Richtlijn 2016/679 in voege vanaf 25 mei 2018)':
      'Information obligation (European GDPR Regulation 2016/679, in force since 25 May 2018)',
    'Ons algemeen beleid op het vlak van gegevensbescherming vindt u terug onder de link Privacy. U hebt het recht om uw gegevens in te zien, te verbeteren en in bepaalde omstandigheden te laten wissen. Als u het niet eens bent met de manier waarop wij uw gegevens verwerken, gelieve u te wenden tot de Gegevensbeschermingsautoriteit (www.privacycommission.be – Drukpersstraat 35 te 1000 Brussel).':
      'Our general data protection policy can be found under the Privacy link. You have the right to access your data, to have them rectified and, in certain circumstances, to have them erased. If you disagree with the way we process your data, please contact the Data Protection Authority (www.privacycommission.be – Drukpersstraat 35, 1000 Brussels).',
    'Algemene voorwaarden | PL Real Estate': 'Terms and conditions | PL Real Estate',
    'Privacyverklaring, cookieverklaring en gebruiksvoorwaarden van PL Real Estate.':
      'Privacy statement, cookie statement and terms of use of PL Real Estate.',

    // ------------------------------------------------------------------ form
    'Naam': 'Name',
    'Vul uw naam in.': 'Please enter your name.',
    'E-mail': 'Email',
    'Vul een geldig e-mailadres in.': 'Please enter a valid email address.',
    'Onderwerp': 'Subject',
    'Bericht': 'Message',
    'Vul uw bericht in.': 'Please enter your message.',
    'Verzenden…': 'Sending…',
    'Verzenden': 'Send',
    'Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.':
      'Thank you for your message. We will be in touch as soon as possible.',
    'Er ging iets mis bij het verzenden. Probeer het opnieuw of bel ons rechtstreeks.':
      'Something went wrong while sending. Please try again, or call us directly.',

    // ---------------------------------------------------------------- shared
    'Samen aan de slag?': 'Shall we work together?',
    'Benieuwd wat ik voor u kan betekenen of voor een kort gratis advies:':
      'Curious what I can do for you, or after a short piece of free advice:',
    'Referenties diavoorstelling': 'References slideshow',
    'Diavoorstelling pauzeren': 'Pause the slideshow',
    'Diavoorstelling afspelen': 'Play the slideshow',
    'Vorige referentie': 'Previous reference',
    'Volgende referentie': 'Next reference',
    'MORE SOON...': 'MORE SOON...',
    'Patrick Landuyt op LinkedIn': 'Patrick Landuyt on LinkedIn',
    'Patrick Landuyt op Luxevastgoed': 'Patrick Landuyt on Luxevastgoed',
  },
};
