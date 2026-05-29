export type ServiceConfig = {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  heroImage: string;
  benefits: string[];
  processSteps: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  formConfig: {
    caseOptions: string[];
    goalOptions: string[];
    materialOptions: string[];
  };
};

export const SITE_CONFIG = {
  name: "D&D Laboratorio",
  legalName: "D&D di Ortolani Denis",
  tagline: "Laboratorio odontotecnico dal 1990",
  phone: "0547 653788",
  telHref: "tel:+390547653788",
  email: "" as string,
  address: "Via Lorenzini Ezio, 119, 47035 Gambettola FC",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Via%20Lorenzini%20Ezio%20119%2047035%20Gambettola%20FC",
  logoUrl:
    "https://dedlaboratorio.com/cdn/shop/files/LOGO_NUOVO.png?v=1680640570&width=500",
  faviconUrl:
    "https://dedlaboratorio.com/cdn/shop/files/Progetto_senza_titolo_1.png?crop=center&height=64&v=1683058796&width=64",
  heroImage:
    "https://dedlaboratorio.com/cdn/shop/files/d_d.jpg?v=1680610409&width=1800",
  labImage:
    "https://dedlaboratorio.com/cdn/shop/files/IMG_6917.jpg?v=1680641241&width=1800",
  digitalImage:
    "https://dedlaboratorio.com/cdn/shop/files/ded3.jpg?v=1680641917&width=1800",
  socials: {
    instagram: "https://www.instagram.com/ded_laboratorio/",
  },
} as const;

const sharedFaq = [
  {
    question: "Il laboratorio lavora anche con impronte digitali?",
    answer:
      "Si. D&D affianca il flusso analogico a quello digitale, con lavorazioni CAD CAM e gestione dei file inviati dagli studi.",
  },
  {
    question: "Posso richiedere un confronto prima di inviare il caso?",
    answer:
      "Si. Il modulo raccoglie le informazioni iniziali e il laboratorio ricontatta lo studio per chiarire materiale, tempi e obiettivo del manufatto.",
  },
];

export const SERVICES: ServiceConfig[] = [
  {
    slug: "protesi-fissa",
    title: "Protesi Fissa",
    shortTitle: "Fissa",
    excerpt:
      "Manufatti non removibili per ripristinare forma e funzione di denti naturali persi o gravemente danneggiati.",
    description:
      "La protesi fissa D&D nasce per offrire allo studio un manufatto stabile, preciso e coerente con il piano clinico, curando funzione, margini, estetica e integrazione con il sorriso del paziente.",
    heroImage:
      "https://dedlaboratorio.com/cdn/shop/files/1.png?v=1681337412&width=1400",
    benefits: [
      "Ripristino funzionale ed estetico degli elementi compromessi.",
      "Dialogo tecnico con lo studio per materiali, colore e finalizzazione.",
      "Approccio analogico e digitale in base al caso ricevuto.",
    ],
    processSteps: [
      "Valutazione del caso, delle impronte o dei file digitali ricevuti.",
      "Progettazione del manufatto e definizione dei dettagli estetici.",
      "Produzione, controllo qualità e consegna allo studio.",
    ],
    faq: [
      {
        question: "Per quali casi è indicata?",
        answer:
          "E indicata quando serve una soluzione non removibile per elementi persi, compromessi o ricostruiti secondo il piano dello studio.",
      },
      ...sharedFaq,
    ],
    formConfig: {
      caseOptions: [
        "Corona o ponte su denti naturali",
        "Ricostruzione estetica su elementi anteriori",
        "Caso complesso con più elementi",
        "Rifacimento o controllo di un lavoro esistente",
      ],
      goalOptions: [
        "Massima precisione marginale",
        "Risultato estetico naturale",
        "Ottimizzare tempi di consegna",
        "Confronto su materiale e workflow",
      ],
      materialOptions: [
        "Impronta analogica",
        "File STL/PLY/OBJ",
        "Foto colore e informazioni cliniche",
        "Da definire con il laboratorio",
      ],
    },
  },
  {
    slug: "protesi-mobile",
    title: "Protesi Mobile",
    shortTitle: "Mobile",
    excerpt:
      "Dispositivi removibili per sostituire elementi dentali assenti o strutture ossee atrofizzate.",
    description:
      "Le protesi mobili vengono progettate per ristabilire masticazione, sostegno e comfort quotidiano, con attenzione alla stabilita e alla gestione estetica del caso.",
    heroImage:
      "https://dedlaboratorio.com/cdn/shop/files/2.png?v=1681337413&width=1400",
    benefits: [
      "Soluzione removibile calibrata sulle esigenze del paziente.",
      "Supporto tecnico per casi parziali o totali.",
      "Controllo di equilibrio, ritenzione e finitura estetica.",
    ],
    processSteps: [
      "Raccolta indicazioni cliniche, impronte e priorita del caso.",
      "Studio della base protesica e delle relazioni occlusali.",
      "Finalizzazione, rifinitura e indicazioni per eventuali adattamenti.",
    ],
    faq: [
      {
        question: "Si possono gestire protesi totali e parziali?",
        answer:
          "Si. Il laboratorio valuta con lo studio la tipologia di dispositivo removibile piu coerente con il caso.",
      },
      ...sharedFaq,
    ],
    formConfig: {
      caseOptions: [
        "Protesi totale",
        "Protesi parziale",
        "Ribasatura o modifica",
        "Valutazione di stabilita e comfort",
      ],
      goalOptions: [
        "Migliorare masticazione",
        "Aumentare stabilita",
        "Ottimizzare estetica e fonetica",
        "Ridurre tempi di lavorazione",
      ],
      materialOptions: [
        "Impronte e cere",
        "Foto del paziente",
        "Protesi precedente come riferimento",
        "Da definire con il laboratorio",
      ],
    },
  },
  {
    slug: "toronto",
    title: "Toronto",
    shortTitle: "Toronto",
    excerpt:
      "Protesi fissa avvitata su impianti dentali per sostituire un'intera arcata.",
    description:
      "La Toronto D&D e una soluzione implantare fissa pensata per ripristinare un'arcata completa, con attenzione a struttura, passivazione, estetica e funzione masticatoria.",
    heroImage:
      "https://dedlaboratorio.com/cdn/shop/files/4.png?v=1681337412&width=1400",
    benefits: [
      "Progettazione orientata a stabilita e passivazione.",
      "Supporto su arcate complete e casi implantari complessi.",
      "Gestione tecnica coordinata con il piano chirurgico-protesico.",
    ],
    processSteps: [
      "Analisi del progetto implantare e delle informazioni disponibili.",
      "Definizione di struttura, emergenze e obiettivo estetico.",
      "Produzione, prova tecnica e rifinitura del manufatto definitivo.",
    ],
    faq: [
      {
        question: "La Toronto sostituisce tutta l'arcata?",
        answer:
          "Si. E una protesi fissa avvitata su impianti, utilizzata per il ripristino di un'intera arcata secondo indicazione clinica.",
      },
      ...sharedFaq,
    ],
    formConfig: {
      caseOptions: [
        "Arcata superiore",
        "Arcata inferiore",
        "Doppia arcata",
        "Rifacimento Toronto esistente",
      ],
      goalOptions: [
        "Stabilita della struttura",
        "Estetica naturale",
        "Pianificare prove e consegna",
        "Valutare workflow digitale",
      ],
      materialOptions: [
        "File digitali e scansioni",
        "Dima o pianificazione implantare",
        "Foto e indicazioni colore",
        "Impronte analogiche",
      ],
    },
  },
  {
    slug: "toronto-estetica",
    title: "Toronto Estetica",
    shortTitle: "Toronto Estetica",
    excerpt:
      "Soluzione fissata su impianti con tecnica All on four, capace di sostituire fino a 10-12 denti.",
    description:
      "La Toronto Estetica unisce la stabilita implantare alla cura del profilo estetico, per casi in cui forma, naturalezza e gestione del sorriso sono determinanti.",
    heroImage:
      "https://dedlaboratorio.com/cdn/shop/files/Progetto_senza_titolo-4.png?v=1683059791&width=1400",
    benefits: [
      "Attenzione a volumi gengivali, colore e armonia del sorriso.",
      "Progettazione per riabilitazioni su quattro impianti quando indicate.",
      "Confronto tecnico su prove estetiche e finalizzazione.",
    ],
    processSteps: [
      "Brief iniziale su aspettativa estetica e vincoli implantari.",
      "Studio di profilo, forma dentale e passaggio alla struttura.",
      "Prova, controllo colore e rifinitura finale.",
    ],
    faq: [
      {
        question: "Cosa cambia rispetto alla Toronto classica?",
        answer:
          "Il focus comunicativo e tecnico e piu orientato alla resa estetica del sorriso, oltre alla stabilita protesica.",
      },
      ...sharedFaq,
    ],
    formConfig: {
      caseOptions: [
        "All on four superiore",
        "All on four inferiore",
        "Caso ad alta richiesta estetica",
        "Seconda opinione tecnica",
      ],
      goalOptions: [
        "Sorriso piu naturale",
        "Gestione gengiva artificiale",
        "Prove estetiche strutturate",
        "Tempi certi per il paziente",
      ],
      materialOptions: [
        "Foto extraorali e intraorali",
        "Scansioni digitali",
        "Piano implantare",
        "Indicazioni colore e forme",
      ],
    },
  },
  {
    slug: "scheletrati",
    title: "Scheletrati",
    shortTitle: "Scheletrati",
    excerpt:
      "Soluzione pratica ed economica per ristabilire equilibrio e masticazione quando i denti mancanti sono limitati.",
    description:
      "Gli scheletrati D&D rispondono a casi parziali in cui serve una soluzione funzionale, resistente e calibrata sul numero di elementi mancanti.",
    heroImage:
      "https://dedlaboratorio.com/cdn/shop/files/IMG_6917.jpg?v=1680641241&width=1400",
    benefits: [
      "Buon equilibrio tra funzione, praticita e costo.",
      "Indicati per edentulie parziali limitate.",
      "Progettazione orientata a ritenzione e comfort.",
    ],
    processSteps: [
      "Analisi dei denti residui e degli appoggi disponibili.",
      "Progettazione della struttura e delle ritenzioni.",
      "Realizzazione, prova e rifinitura del dispositivo.",
    ],
    faq: [
      {
        question: "Quando si valuta uno scheletrato?",
        answer:
          "Quando il numero di denti mancanti e limitato e lo studio desidera una soluzione removibile pratica per ristabilire funzione.",
      },
      ...sharedFaq,
    ],
    formConfig: {
      caseOptions: [
        "Edentulia parziale",
        "Scheletrato superiore",
        "Scheletrato inferiore",
        "Modifica di scheletrato esistente",
      ],
      goalOptions: [
        "Masticazione piu stabile",
        "Soluzione pratica per il paziente",
        "Buon equilibrio costo/beneficio",
        "Confronto su appoggi e ganci",
      ],
      materialOptions: [
        "Impronte analogiche",
        "Modelli studio",
        "Foto e indicazioni cliniche",
        "Da definire con il laboratorio",
      ],
    },
  },
  {
    slug: "faccette",
    title: "Faccette",
    shortTitle: "Faccette",
    excerpt:
      "Sottili lamine in ceramica o composito, da circa 0,5 a 0,7 mm, incollate sulla superficie esterna dei denti anteriori.",
    description:
      "Le faccette richiedono precisione, sensibilita cromatica e controllo delle forme. D&D supporta lo studio nella costruzione di un risultato estetico naturale e coerente con il volto del paziente.",
    heroImage:
      "https://dedlaboratorio.com/cdn/shop/files/ded3.jpg?v=1680641917&width=1400",
    benefits: [
      "Cura di spessori, texture e traslucenza.",
      "Opzioni in ceramica o composito in base al caso.",
      "Supporto su mockup, colore e finalizzazione estetica.",
    ],
    processSteps: [
      "Raccolta foto, colore, forme desiderate e file o impronte.",
      "Progettazione del risultato estetico e confronto con lo studio.",
      "Realizzazione delle lamine e controllo finale.",
    ],
    faq: [
      {
        question: "Che spessore hanno le faccette?",
        answer:
          "Il sito D&D indica spessori molto sottili, indicativamente tra 0,5 e 0,7 millimetri, in base al caso.",
      },
      ...sharedFaq,
    ],
    formConfig: {
      caseOptions: [
        "Caso singolo",
        "Settore anteriore superiore",
        "Settore anteriore inferiore",
        "Riabilitazione estetica estesa",
      ],
      goalOptions: [
        "Migliorare forma",
        "Migliorare colore",
        "Integrare con il sorriso",
        "Valutare ceramica o composito",
      ],
      materialOptions: [
        "Foto sorriso e volto",
        "File digitali",
        "Mockup o wax-up",
        "Indicazioni colore",
      ],
    },
  },
  {
    slug: "protesi-implantare",
    title: "Protesi Implantare",
    shortTitle: "Implantare",
    excerpt:
      "Sostituzione di uno o piu elementi persi con radici artificiali in titanio e applicazione di protesi fissa.",
    description:
      "La protesi implantare D&D accompagna lo studio nella fase protesica su impianti, curando emergenze, stabilita, funzione e integrazione estetica.",
    heroImage:
      "https://dedlaboratorio.com/cdn/shop/files/d_d.jpg?v=1680610409&width=1400",
    benefits: [
      "Gestione di casi singoli o multipli su impianti.",
      "Attenzione a emergenza, profilo e sovrastruttura.",
      "Compatibile con flussi analogici e digitali.",
    ],
    processSteps: [
      "Raccolta dati implantari e indicazioni del clinico.",
      "Progettazione della sovrastruttura e dei dettagli protesici.",
      "Controllo di precisione, estetica e consegna.",
    ],
    faq: [
      {
        question: "Che ruolo ha il laboratorio nel percorso implantare?",
        answer:
          "Il laboratorio realizza la componente protesica secondo le indicazioni cliniche e il progetto condiviso con lo studio.",
      },
      ...sharedFaq,
    ],
    formConfig: {
      caseOptions: [
        "Elemento singolo su impianto",
        "Ponte su impianti",
        "Arcata implantare",
        "Controllo o rifacimento",
      ],
      goalOptions: [
        "Precisione di connessione",
        "Profilo di emergenza corretto",
        "Integrazione estetica",
        "Supporto sul workflow",
      ],
      materialOptions: [
        "Scansione intraorale",
        "Scan body e librerie",
        "Impronta implantare",
        "Foto e colore",
      ],
    },
  },
  {
    slug: "abutment-personalizzato",
    title: "Abutment Personalizzato",
    shortTitle: "Abutment",
    excerpt:
      "Sostegno della sovrastruttura che replica, con un manufatto su misura, il dente naturale.",
    description:
      "L'abutment personalizzato consente di modellare il sostegno protesico intorno al caso reale, migliorando emergenza, supporto e integrazione della sovrastruttura.",
    heroImage:
      "https://dedlaboratorio.com/cdn/shop/files/Progetto_senza_titolo-4.png?v=1683059791&width=1400",
    benefits: [
      "Soluzione su misura per il profilo del caso implantare.",
      "Supporto tecnico alla sovrastruttura protesica.",
      "Controllo di forma, emergenza e adattamento.",
    ],
    processSteps: [
      "Analisi di impianto, connessione e progetto protesico.",
      "Design dell'abutment in relazione alla futura sovrastruttura.",
      "Produzione e controllo prima della consegna.",
    ],
    faq: [
      {
        question: "Perche scegliere un abutment personalizzato?",
        answer:
          "Per adattare il supporto protesico al caso specifico, replicando meglio il profilo del dente naturale e le esigenze della sovrastruttura.",
      },
      ...sharedFaq,
    ],
    formConfig: {
      caseOptions: [
        "Abutment singolo",
        "Abutment multipli",
        "Caso estetico anteriore",
        "Valutazione connessione impianto",
      ],
      goalOptions: [
        "Profilo di emergenza naturale",
        "Supporto alla corona",
        "Precisione della connessione",
        "Confronto tecnico preliminare",
      ],
      materialOptions: [
        "Scan body",
        "Librerie implantari",
        "Impronta analogica",
        "Foto e note cliniche",
      ],
    },
  },
];

export const findService = (slug: string | undefined) =>
  SERVICES.find((service) => service.slug === slug);

export const defaultFormConfig = {
  caseOptions: [
    "Protesi fissa o mobile",
    "Lavorazione implantare",
    "Faccette o estetica",
    "Flusso digitale o file da valutare",
  ],
  goalOptions: [
    "Prenotare una valutazione",
    "Confronto tecnico sul caso",
    "Organizzare tempi e consegna",
    "Ricevere supporto sul flusso digitale",
  ],
  materialOptions: [
    "Impronte analogiche",
    "File digitali STL/PLY/OBJ",
    "Foto e indicazioni colore",
    "Non ho ancora il materiale",
  ],
};

export const pages = [
  {
    path: "/lavorazioni-odontotecniche",
    label: "Lavorazioni",
  },
  {
    path: "/flusso-digitale",
    label: "Flusso Digitale",
  },
  {
    path: "/corsi",
    label: "Corsi",
  },
  {
    path: "/serate-formative",
    label: "Serate Formative",
  },
  {
    path: "/su-di-noi",
    label: "Su di Noi",
  },
  {
    path: "/contatti",
    label: "Contatti",
  },
];
