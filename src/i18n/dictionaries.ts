import { DEFAULT_LOCALE } from "./config"

// Shared UI strings. Add a locale key to translate the site chrome + homepage
// for that language; any missing key falls back to English automatically.
export interface Dictionary {
  nav: {
    home: string
    forum: string
    library: string
    experienceReports: string
    safety: string
    vendors: string
    research: string
    experts: string
    deals: string
    premium: string
    about: string
    login: string
    join: string
  }
  hero: {
    badge: string
    titleLead: string
    titleAccent: string
    titleTail: string
    subtitle: string
    ctaJoin: string
    ctaLibrary: string
    ctaVendors: string
    ctaSafety: string
  }
  trustNotice: string
  medicalDisclaimer: string
  footerTagline: string
  languageGate: {
    title: string
    subtitle: string
    continue: string
  }
  chooseLanguage: string
}

const en: Dictionary = {
  nav: {
    home: "Home",
    forum: "Forum",
    library: "Library",
    experienceReports: "Experience Reports",
    safety: "Safety",
    vendors: "Vendors",
    research: "Research",
    experts: "Experts",
    deals: "Deals",
    premium: "Premium",
    about: "About",
    login: "Login",
    join: "Join",
  },
  hero: {
    badge: "Educational community · Not medical advice",
    titleLead: "The ",
    titleAccent: "Peptide Community",
    titleTail: " Exchange",
    subtitle:
      "Research, real-world reports, safety discussion, and verified vendor transparency — all in one structured community.",
    ctaJoin: "Join the Community",
    ctaLibrary: "Browse Peptide Library",
    ctaVendors: "Explore Verified Vendors",
    ctaSafety: "Read Safety Guidelines",
  },
  trustNotice:
    "peptides.cx is an educational and community platform. Content is not medical advice. Vendor listings and affiliate links may be paid placements and do not equal medical endorsement.",
  medicalDisclaimer:
    "Not medical advice. Content on peptides.cx is an educational and community resource. Always consult a qualified medical professional before making health-related decisions.",
  footerTagline:
    "The Peptide Community Exchange. Research, real-world reports, safety discussion, and verified vendor transparency.",
  languageGate: {
    title: "Choose your language",
    subtitle: "Select a language to continue. You can change it any time.",
    continue: "Continue",
  },
  chooseLanguage: "Choose language",
}

const de: Dictionary = {
  nav: {
    home: "Start",
    forum: "Forum",
    library: "Bibliothek",
    experienceReports: "Erfahrungsberichte",
    safety: "Sicherheit",
    vendors: "Anbieter",
    research: "Forschung",
    experts: "Experten",
    deals: "Angebote",
    premium: "Premium",
    about: "Über uns",
    login: "Anmelden",
    join: "Beitreten",
  },
  hero: {
    badge: "Bildungs-Community · Keine medizinische Beratung",
    titleLead: "Die ",
    titleAccent: "Peptid-Community",
    titleTail: " Exchange",
    subtitle:
      "Forschung, echte Erfahrungsberichte, Sicherheitsdiskussion und geprüfte Anbieter-Transparenz — in einer strukturierten Community.",
    ctaJoin: "Community beitreten",
    ctaLibrary: "Peptid-Bibliothek ansehen",
    ctaVendors: "Geprüfte Anbieter entdecken",
    ctaSafety: "Sicherheitshinweise lesen",
  },
  trustNotice:
    "peptides.cx ist eine Bildungs- und Community-Plattform. Inhalte sind keine medizinische Beratung. Anbieter-Einträge und Affiliate-Links können bezahlte Platzierungen sein und bedeuten keine medizinische Empfehlung.",
  medicalDisclaimer:
    "Keine medizinische Beratung. Inhalte auf peptides.cx sind eine Bildungs- und Community-Ressource. Konsultiere vor gesundheitsbezogenen Entscheidungen immer eine qualifizierte medizinische Fachperson.",
  footerTagline:
    "Die Peptid-Community Exchange. Forschung, echte Erfahrungsberichte, Sicherheitsdiskussion und geprüfte Anbieter-Transparenz.",
  languageGate: {
    title: "Sprache wählen",
    subtitle: "Wähle eine Sprache, um fortzufahren. Du kannst sie jederzeit ändern.",
    continue: "Weiter",
  },
  chooseLanguage: "Sprache wählen",
}

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    forum: "Forum",
    library: "Bibliothèque",
    experienceReports: "Témoignages",
    safety: "Sécurité",
    vendors: "Fournisseurs",
    research: "Recherche",
    experts: "Experts",
    deals: "Offres",
    premium: "Premium",
    about: "À propos",
    login: "Connexion",
    join: "Rejoindre",
  },
  hero: {
    badge: "Communauté éducative · Pas un avis médical",
    titleLead: "La communauté ",
    titleAccent: "d'échange sur les peptides",
    titleTail: "",
    subtitle:
      "Recherche, témoignages réels, discussions sur la sécurité et transparence des fournisseurs vérifiés — dans une communauté structurée.",
    ctaJoin: "Rejoindre la communauté",
    ctaLibrary: "Parcourir la bibliothèque",
    ctaVendors: "Découvrir les fournisseurs vérifiés",
    ctaSafety: "Lire les consignes de sécurité",
  },
  trustNotice:
    "peptides.cx est une plateforme éducative et communautaire. Le contenu ne constitue pas un avis médical. Les fiches fournisseurs et les liens d'affiliation peuvent être des placements payants et ne valent pas recommandation médicale.",
  medicalDisclaimer:
    "Pas un avis médical. Le contenu de peptides.cx est une ressource éducative et communautaire. Consultez toujours un professionnel de santé qualifié avant toute décision liée à la santé.",
  footerTagline:
    "La communauté d'échange sur les peptides. Recherche, témoignages réels, sécurité et transparence des fournisseurs vérifiés.",
  languageGate: {
    title: "Choisissez votre langue",
    subtitle: "Sélectionnez une langue pour continuer. Vous pouvez la changer à tout moment.",
    continue: "Continuer",
  },
  chooseLanguage: "Choisir la langue",
}

const es: Dictionary = {
  nav: {
    home: "Inicio",
    forum: "Foro",
    library: "Biblioteca",
    experienceReports: "Experiencias",
    safety: "Seguridad",
    vendors: "Proveedores",
    research: "Investigación",
    experts: "Expertos",
    deals: "Ofertas",
    premium: "Premium",
    about: "Acerca de",
    login: "Entrar",
    join: "Unirse",
  },
  hero: {
    badge: "Comunidad educativa · No es consejo médico",
    titleLead: "La comunidad de ",
    titleAccent: "intercambio sobre péptidos",
    titleTail: "",
    subtitle:
      "Investigación, experiencias reales, debate sobre seguridad y transparencia de proveedores verificados — en una comunidad estructurada.",
    ctaJoin: "Unirse a la comunidad",
    ctaLibrary: "Explorar la biblioteca",
    ctaVendors: "Ver proveedores verificados",
    ctaSafety: "Leer las guías de seguridad",
  },
  trustNotice:
    "peptides.cx es una plataforma educativa y comunitaria. El contenido no es consejo médico. Las fichas de proveedores y los enlaces de afiliación pueden ser ubicaciones pagadas y no equivalen a una recomendación médica.",
  medicalDisclaimer:
    "No es consejo médico. El contenido de peptides.cx es un recurso educativo y comunitario. Consulta siempre a un profesional médico cualificado antes de tomar decisiones de salud.",
  footerTagline:
    "La comunidad de intercambio sobre péptidos. Investigación, experiencias reales, seguridad y transparencia de proveedores verificados.",
  languageGate: {
    title: "Elige tu idioma",
    subtitle: "Selecciona un idioma para continuar. Puedes cambiarlo en cualquier momento.",
    continue: "Continuar",
  },
  chooseLanguage: "Elegir idioma",
}

const dictionaries: Record<string, Dictionary> = { en, de, fr, es }

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
}

export function hasFullTranslation(locale: string): boolean {
  return locale in dictionaries
}
