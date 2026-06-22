export const business = {
  name: "Konditori Trianon",
  tagline: "Neighborhood konditori on Svartbäcken",
  description: "Neighborhood konditori on Svartbäcken serving pastries, sandwiches, and classic semlor.",
  category: "Café",
  address: {
    street: "Svartbäcksgatan 83",
    postalCode: "753 33",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-26 04 50",
  phoneLink: "tel:+4618260450",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "tel:+4618260450",
  bookingLabel: "Ring oss",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Konditori Trianon",
  rating: 4.3,
  reviewCount: 3,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8588, lng: 17.6386 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Hantverksbakat",
      description: "Färskt bröd och bakverk varje dag.",
    },
    {
      title: "Lokalt fika",
      description: "Ett av Uppsalas café på Svartbäcksgatan 83.",
    },
    {
      title: "Varm atmosfär",
      description: "Perfekt för fika, lunch eller en paus.",
    },
    {
      title: "Personlig service",
      description: "Välkommen in för kaffe och hembakat.",
    },
  ],
  services: [
    {
      id: "bakverk-och-t-rtor",
      name: "Bakverk och tårtor",
      description: "Professionell bakverk och tårtor med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sm-rg-sar",
      name: "Smörgåsar",
      description: "Professionell smörgåsar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "semlor",
      name: "Semlor",
      description: "Professionell semlor med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fika",
      name: "Fika",
      description: "Professionell fika med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "catering",
      name: "Catering",
      description: "Professionell catering med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Konditori Trianon. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Konditori Trianon varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "konditori Svartbäcken",
    "semla Uppsala",
    "kafé Svartbäcksgatan",
    "bakverk Uppsala",
  ],
  brandColors: {
    primary: "#6f4e37",
    secondary: "#d4a574",
    accent: "#faf7f2",
    dark: "#3d2914",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
