export type Photo = { src: string; w: number; h: number };

export const company = {
  name: "IRB Metallbau GmbH & Co. KG",
  short: "IRB Metallbau",
  street: "Südring 1",
  city: "17509 Lubmin",
  phone: "+49 38354 389967",
  phoneHref: "tel:+4938354389967",
  fax: "+49 38354 31792",
  email: "info@irb-metallbau.de",
  isoUrl: "https://irb-online.de/",
  maps: "https://www.google.com/maps/search/?api=1&query=S%C3%BCdring+1%2C+17509+Lubmin",
  mapsGreifswald: "https://www.google.com/maps/search/?api=1&query=Am+Koppelberg+10%2C+17489+Greifswald",
  employees: "15",
  founded: "1995",
};

export const homePhotos: Photo[] = [
  { src: "/images/projekte/frankenkrohnwerk-1.webp", w: 1600, h: 900 },
  { src: "/images/projekte/efh-zinnowitz-1.webp", w: 1600, h: 1200 },
  { src: "/images/projekte/frankenkrohnwerk-2.webp", w: 1600, h: 1200 },
  { src: "/images/projekte/efh-zinnowitz-2.webp", w: 1600, h: 1200 },
  { src: "/images/projekte/frankenkrohnwerk-3.webp", w: 1600, h: 1200 },
  { src: "/images/projekte/efh-zinnowitz-3.webp", w: 1600, h: 1200 },
  { src: "/images/projekte/frankenkrohnwerk-4.webp", w: 1600, h: 1200 },
  { src: "/images/projekte/frankenkrohnwerk-5.webp", w: 1600, h: 1200 },
];

export const services = [
  {
    id: "trockenbauwaende",
    title: "Trockenbauwände",
    text: "Wir errichten Innenwände in Leichtbauweise nach Ihren Vorgaben. Neben Trennwänden ohne Anforderungen realisieren wir zertifizierte Systemwände für Schallschutz, Brandschutz und Strahlenschutz im privaten, gewerblichen und medizinischen Bereich.",
    image: { src: "/images/leistungen/trockenbauwaende.webp", w: 1200, h: 1600 },
  },
  {
    id: "decken",
    title: "Gips- und Akustikdecken",
    text: "Wir gestalten Deckenflächen funktional und ästhetisch nach Ihren Vorgaben. Neben klassischen Deckenbekleidungen und abgehängten Gipsdecken ohne Anforderungen realisieren wir zertifizierte Deckensysteme für geprüften Brandschutz sowie moderne Akustikdecken zur gezielten Optimierung der Raumakustik.",
    image: { src: "/images/leistungen/akustikdecken-neu.webp", w: 1200, h: 900 },
  },
  {
    id: "dachgeschossausbau",
    title: "Dachgeschossausbau",
    text: "Wir verwandeln Dachgeschosse in bezugsfertigen Wohn- oder Arbeitsraum. Unser Service umfasst die Bekleidung von Dachdecken und Dachschrägen, den fachgerechten Einbau von Dämmung und Luftdichtheitsschicht (Dampfbremse) sowie die Umsetzung aller Vorgaben zum Brand- und Schallschutz.",
    image: { src: "/images/leistungen/dachgeschossausbau.webp", w: 1200, h: 1600 },
  },
  {
    id: "trockenestrich",
    title: "Trockenestrich",
    text: "Wir erstellen tragfähige Fußbodenkonstruktionen in Trockenbauweise ohne lange Wartezeiten. Unser Service umfasst das Verlegen von Trockenunterböden inklusive Bodenausgleich sowie systemgerechte Lösungen für Wärme-, Trittschall- und Brandschutz.",
    image: { src: "/images/leistungen/trockenboeden.webp", w: 1200, h: 670 },
  },
  {
    id: "innentueren",
    title: "Montage von Innentüren",
    text: "Wir übernehmen den fachgerechten Einbau von Innentüren passend zu Ihren Trockenbausystemen. Unser Service umfasst die Montage von Standardtüren für Privat und Gewerbe, zertifizierten Funktionstüren für Brand-, Schall- und Rauchschutz sowie platzsparenden Schiebetürelementen.",
    image: { src: "/images/leistungen/brandschutz.webp", w: 1200, h: 670 },
  },
];

export type Project = {
  slug: string;
  title: string;
  ort: string;
  period: string;
  kategorie: string;
  volumen: string;
  text: string;
  leistungen: string[];
  beschreibung: string[];
  photos: Photo[];
};

export const projects: Project[] = [
  {
    slug: "efh-zinnowitz",
    title: "Neubau EFH Zinnowitz",
    ort: "Zinnowitz",
    period: "2026",
    kategorie: "Trockenbau",
    volumen: "18.000 €",
    text: "Meisterhaft gelöst im Neubau: maßgefertigte Deckenabkofferung mit integrierter Beleuchtung und Gardinenschiene.",
    leistungen: [
      "Montage von GK-Montagewänden",
      "Montage von Installationsvorwänden",
      "Deckenabkofferung mit integrierter Beleuchtung und Gardinenschiene",
    ],
    beschreibung: [
      "Das absolute Highlight dieses Neubau-Projekts beweist, was mit modernem Trockenbau und echtem Handwerksgeschick möglich ist. Statt Standard-Decken haben wir eine maßgefertigte Deckenabkofferung realisiert, die höchste Präzision erforderte.",
      "Die Gardinenschiene wurde absolut fluchtgerecht und unsichtbar in die Decke eingelassen, flankiert von einem perfekt ausgerichteten LED-Lichtband. Das verlangt millimetergenaues Arbeiten bei der Unterkonstruktion und eine makellose Spachtelung an den Lichtkanten – denn Streiflicht verzeiht keinen einzigen Fehler.",
      "Das Ergebnis ist ein atemberaubender Wow-Effekt und der stolze Mittelpunkt des Raumes. Ein Meisterstück, das zeigt: Wir setzen Ihre Wohnträume in perfekter handwerklicher Qualität um!",
    ],
    photos: [
      { src: "/images/projekte/efh-zinnowitz-1.webp", w: 1600, h: 1200 },
      { src: "/images/projekte/efh-zinnowitz-2.webp", w: 1600, h: 1200 },
      { src: "/images/projekte/efh-zinnowitz-3.webp", w: 1600, h: 1200 },
    ],
  },
  {
    slug: "frankenkrohnwerk-stralsund",
    title: "Sanierung Frankenkrohnwerk – Schulzentrum am Sund",
    ort: "Stralsund",
    period: "2025",
    kategorie: "High-End Trockenbau",
    volumen: "721.000 €",
    text: "Innenausbau eines denkmalgeschützten Gebäudes zum Schulzentrum mit dem Stahlleichtbausystem Knauf Cocoon „Transformer“.",
    leistungen: [
      "Montage einer Stahlleichtbaukonstruktion (System Cocoon „Transformer“)",
      "Montage GK-Montagewände und Installationswände",
      "Montage von Akustikdecken",
      "Montage von Wandabsorbern",
    ],
    beschreibung: [
      "Bei diesem Bauvorhaben stand der Innenausbau eines denkmalgeschützten Gebäudes im Fokus, welches nach der Sanierung in ein Schulzentrum integriert wurde. Die Aufteilung der Großfläche wurde über eine zusammenhängende Aneinanderreihung autarker Raumeinheiten realisiert, umgesetzt mit dem Stahlleichtbausystem Knauf Cocoon „Transformer“.",
      "Die statischen Rahmenbedingungen wurden im Vorfeld direkt durch Knauf bemessen, durch den objektseitigen Statiker in die Ausführungsplanung eingearbeitet und schlussendlich vom Prüfstatiker freigegeben. Da die großen Spannweiten konstruktive Abfangungen erforderten, wurden die notwendigen Stahlträger im ersten Schritt durch einen spezialisierten Nachunternehmer montiert. Unser Betrieb übernahm direkt im Anschluss den präzisen Systemaufbau der Leichtbaumodule sowie den fachgerechten Einbau der systemintegrierten Deckenkonstruktionen.",
      "Um eine optimale Raumakustik und angenehme Nachhallzeiten innerhalb der neuen Einheiten zu gewährleisten, wurde in den Modulen zusätzlich eine abgehängte Akustikdecke integriert. Der erforderliche Schallschutz sowie die Schalldämmung zwischen den einzelnen Räumen wird dabei vollständig durch das Knauf Cocoon System abgedeckt. Die abschließende Verspachtelung der Wand- und Deckenflächen erfolgte materialspezifisch und fluchtgerecht in der Qualitätsstufe Q2. Das fertige Projekt verbindet geprüfte Systemstatik und optimierte Raumakustik zu einer modernen, funktionalen Raumlösung für den Bildungsbereich.",
    ],
    photos: [
      { src: "/images/projekte/frankenkrohnwerk-1.webp", w: 1600, h: 900 },
      { src: "/images/projekte/frankenkrohnwerk-2.webp", w: 1600, h: 1200 },
      { src: "/images/projekte/frankenkrohnwerk-3.webp", w: 1600, h: 1200 },
      { src: "/images/projekte/frankenkrohnwerk-4.webp", w: 1600, h: 1200 },
      { src: "/images/projekte/frankenkrohnwerk-5.webp", w: 1600, h: 1200 },
    ],
  },
];

export const faqs = [
  {
    q: "In welchen Regionen ist IRB Metallbau tätig?",
    a: "Wir sind in ganz Vorpommern aktiv – mit Schwerpunkt im Umkreis von Greifswald, Wolgast und Stralsund.",
  },
  {
    q: "Führen Sie auch kleinere Privat-Aufträge durch?",
    a: "Für uns gibt es keine Projekte, die „zu klein“ sind. Egal, ob Sie eine einzelne Trennwand einziehen möchten, um ein Zimmer aufzuteilen, eine Decke abhängen wollen oder eine Schönheitsreparatur an einer beschädigten Gipskartonplatte benötigen – wir stehen Ihnen mit der gleichen Professionalität und handwerklichen Sorgfalt zur Seite wie bei einem Großprojekt. Gerade im privaten Bereich kommt es auf sauberes Arbeiten, Zuverlässigkeit und eine pünktliche Umsetzung an, und genau das garantieren wir Ihnen.",
  },
  {
    q: "Wie erhalte ich ein Angebot?",
    a: "Schreiben Sie uns eine Anfrage per E-Mail oder rufen Sie uns direkt an. Wir vereinbaren dann einen Termin zur Begehung und erstellen Ihnen ein unverbindliches Angebot.",
  },
  {
    q: "Wie sichern Sie die Qualität auf der Baustelle?",
    a: "Unsere Arbeit orientiert sich an den Richtlinien der Systemhersteller. Brandschutzmaßnahmen an Decken und Wänden führen wir fachgerecht nach den geltenden Normen bzw. Prüfzeugnissen aus. Um hier eine gleichbleibend hohe Qualität zu garantieren, werden unsere Mitarbeiter regelmäßig geschult. Diese verlässlichen Standards bringen wir in jedes Projekt ein – vom Wohn- und Gewerbebau bis hin zu Kitas, Pflegeheimen und Krankenhäusern.",
  },
  {
    q: "Wie lange dauert ein typisches Projekt?",
    a: "Das hängt stark vom Umfang ab. Kleinere Ausbaumaßnahmen können wenige Tage dauern, während komplexe Industrieprojekte mehrere Monate in Anspruch nehmen. Wir planen stets termingerecht und halten unsere Zusagen.",
  },
];

export const contacts = [
  { name: "Rainer Winkler", role: "Betriebsleiter", tel: "+49 38354 389967", mobil: "+49 162 2526778", mail: "rwinkler@irb-metallbau.de" },
  { name: "Rita Engel", role: "Mitarbeiterin Bauleitung", tel: "+49 38354 389967", mobil: "", mail: "rengel@irb-metallbau.de" },
  { name: "Marcus Granitza", role: "Meister Akustik- und Trockenbau", tel: "", mobil: "+49 162 2526776", mail: "mgranitza@irb-metallbau.de" },
  { name: "Jette Rinkel", role: "Buchhaltung", tel: "+49 38354 389966", mobil: "", mail: "rinkel@irb-online.de" },
];

export const benefits = [
  {
    title: "Faire und pünktliche Bezahlung",
    text: "Wir zahlen über dem gesetzlichen Mindestlohn und orientieren uns an der regional üblichen Vergütung. Was wir zusagen, halten wir ein – die pünktliche Überweisung ist für uns selbstverständlich.",
  },
  {
    title: "Zuverlässige Ausrüstung",
    text: "Für präzise Ergebnisse setzen wir auf hochwertiges Werkzeug von Makita. Zu den Baustellen fährst du mit einsatzbereiten Transportern, die alles an Bord haben, was du für die tägliche Arbeit brauchst.",
  },
  {
    title: "Schulungen im Haus statt langer Anreisen",
    text: "Neue Systemtheorien und Zulassungen gehören im Trockenbau dazu. Anstatt unser Team zu weit entfernten Schulungszentren zu schicken, holen wir die Hersteller alle ein bis zwei Jahre für ein kompaktes Update direkt in den Betrieb. Das spart weite Wege und wertvolle Freizeit auf der Autobahn.",
  },
  {
    title: "Eigene Arbeitskleidung",
    text: "Wir übernehmen die Ausstattung für deinen Baustellenalltag und stellen dir die passende Bekleidung sowie regelmäßig frische Arbeitshandschuhe.",
  },
];

export const jobFaqs = [
  {
    q: "Muss ich ein Anschreiben einreichen?",
    a: "Nein. Unsere Schnellbewerbung ist bewusst ohne Anschreiben gestaltet – drei Klicks reichen. Wir lernen dich lieber im persönlichen Gespräch kennen.",
  },
  {
    q: "Wie schnell höre ich von euch?",
    a: "Hinterlasse uns einfach deine Kontaktdaten. Wir melden uns kurzfristig per E-Mail oder Telefon bei dir, um alles Weitere unkompliziert zu besprechen.",
  },
  {
    q: "Kann ich mich auch ohne Berufserfahrung bewerben?",
    a: "Ja, absolut. Wir geben auch Quereinsteigern mit handwerklichem Geschick eine Chance im Trockenbau. Viel wichtiger als ein perfekter Lebenslauf sind uns Zuverlässigkeit, Pünktlichkeit und die Bereitschaft, Neues zu lernen.",
  },
  {
    q: "Gibt es Fahrtgeld oder andere Benefits?",
    a: "Ja – neben übertariflicher Bezahlung bieten wir Fahrtgeld, moderne Fahrzeuge und Werkzeuge sowie aktive Weiterbildungsförderung.",
  },
  {
    q: "Wo finden die Einsätze statt?",
    a: "Unser Haupteinsatzgebiet ist Vorpommern. Der Großteil unserer Projekte liegt in der Region rund um Lubmin, Greifswald, Wolgast und Stralsund.",
  },
];

export type Job = {
  slug: string;
  title: string;
  teaser: string;
  meta: { ort: string; art: string; bereich: string };
  intro: string[];
  sections: { title: string; items: string[] }[];
};

export const jobs: Job[] = [
  {
    slug: "trockenbauer-mwd",
    title: "Trockenbauer (m/w/d)",
    teaser:
      "Du stellst Ständerwerke, beplankst Flächen, hängst Decken ab und verspachtelst in Qualitätsstufe Q2 – mit Profi-Werkzeug von Makita und einem Team, das zusammenhält.",
    meta: { art: "Vollzeit", ort: "Lubmin", bereich: "Trockenbau" },
    intro: [
      "Wir suchen Verstärkung für unser Team: Trockenbauer (m/w/d) für anspruchsvollen Innenausbau in Vorpommern – vom privaten Wohnbau bis zu Großprojekten im Bildungs- und Gesundheitswesen.",
    ],
    sections: [
      {
        title: "Das Aufgabengebiet",
        items: [
          "Ständerwerke stellen: Fachgerechtes Aufstellen von Wand- und Deckenkonstruktionen",
          "Flächen beplanken: Montage von klassischen Gips- sowie Brandschutz- und Funktionsplatten",
          "Decken abhängen: Montage und Ausrichtung von abgehängten Deckensystemen",
          "Flächen verspachteln: Saubere Ausführung aller Spachtelarbeiten in der Standardqualität Q2",
          "Baustellen vorbereiten: Einmessen und Einrichten der Trockenbau-Konstruktionen nach Vorgabe",
          "Systemtreue Umsetzung: Fachgerechtes Arbeiten nach Herstellervorgaben und Richtlinien",
        ],
      },
      {
        title: "Das bringst du mit",
        items: [
          "Fachkompetenz: Ausbildung als Trockenbaumonteur oder mehrjährige Berufserfahrung im Innenausbau",
          "Handwerksgeschick: Selbstständiges Arbeiten bei der Montage von Ständerwerken und Decken",
          "Qualitätsbewusstsein: Erfahrung mit fachgerechter Verspachtelung in der Qualitätsstufe Q2",
          "Einsatzbereitschaft: Zuverlässigkeit, Teamgeist und eine sorgfältige Arbeitsweise auf der Baustelle",
          "Mobilität: Führerschein der Klasse B für die Fahrten zu unseren regionalen Projekten (kein Muss, aber von Vorteil)",
        ],
      },
      {
        title: "Das bieten wir dir",
        items: [
          "Faire Vergütung: Bezahlung über dem gesetzlichen Mindestlohn, orientiert an der regional üblichen Vergütung",
          "Pünktliche Auszahlung: Was wir finanziell zusagen, halten wir absolut verlässlich ein",
          "Profi-Werkzeug: Du arbeitest auf unseren Baustellen mit hochwertiger Ausstattung von Makita",
          "Fahrzeuge gestellt: Zuverlässige, zweckmäßig eingerichtete Montagefahrzeuge für den Arbeitsalltag",
          "Inhouse-Updates: Alle ein bis zwei Jahre kompakte System- und Herstellerschulungen direkt bei uns im Betrieb",
          "Ausstattung gestellt: Kostenlose baustellengerechte Arbeitskleidung inklusive Sicherheitsschuhen und Handschuhen",
        ],
      },
    ],
  },
  {
    slug: "auszubildender-trockenbauer",
    title: "Auszubildender Trockenbauer (m/w/d)",
    teaser:
      "Lerne den modernen Trockenbau von Grund auf – mit eigenem Makita-Werkzeug, Arbeitskleidung auf unsere Kosten und besten Chancen auf Übernahme.",
    meta: { art: "Ausbildung", ort: "Lubmin", bereich: "Trockenbau" },
    intro: [
      "Du hast Spaß an praktischer Arbeit und möchtest ein Handwerk mit Zukunft lernen? Bei uns lernst du direkt von erfahrenen Kollegen auf abwechslungsreichen Baustellen – vom Wohnbau bis zum Großprojekt.",
    ],
    sections: [
      {
        title: "Das lernst du bei uns",
        items: [
          "Unterkonstruktionen bauen: Wie man Ständerwerke für Wände und Decken fachgerecht einmisst und aufstellt",
          "Flächen beplanken: Den richtigen Umgang und die Montage von Gips-, Brandschutz- und Spezialplatten",
          "Decken abhängen: Das präzise Ausrichten und Einbauen moderner Deckensysteme",
          "Flächen verspachteln: Das saubere Spachteln und Schleifen von Wand- und Deckenverbindungen",
          "Baupläne lesen: Wie man Skizzen und Ausführungspläne versteht und direkt auf der Baustelle umsetzt",
          "Material- und Systemkunde: Welches Material und welche Herstellervorgaben für Schall- und Brandschutz wichtig sind",
        ],
      },
      {
        title: "Das bringst du mit",
        items: [
          "Interesse am Handwerk: Spaß an praktischer Arbeit und handwerkliches Geschick",
          "Teamgeist: Zuverlässigkeit, Pünktlichkeit und Lust, gemeinsam im Team anzupacken",
          "Schulabschluss: Ein solider Haupt- oder Realschulabschluss als Basis",
          "Lernbereitschaft: Motivation, den modernen Trockenbau von Grund auf zu lernen",
        ],
      },
      {
        title: "Das bieten wir dir",
        items: [
          "Faire Vergütung: Eine attraktive Ausbildungsvergütung, die immer absolut pünktlich auf deinem Konto ist",
          "Profi-Ausrüstung: Von Anfang an eigenes, hochwertiges Werkzeug von Makita für deine tägliche Arbeit",
          "Kleidung gestellt: Deine komplette Arbeitskleidung inklusive Sicherheitsschuhen und Handschuhen geht auf unsere Kosten",
          "Echtes Fachwissen: Du lernst direkt von erfahrenen Kollegen auf abwechslungsreichen Baustellen",
          "Kurze Wege für Theorie: Alle ein bis zwei Jahre kommen die Systemhersteller für Schulungen direkt zu uns in den Betrieb",
          "Zukunftsperspektive: Bei guten Leistungen hast du beste Chancen auf eine Übernahme nach der Ausbildung",
        ],
      },
    ],
  },
];
