const siteConfig = {
  /* -----------------------------------------
     BASIC COMPANY INFO
  ------------------------------------------ */
  companyName: "Sai Ganesh Constructions",
  tagline: "Building the Future of Fuel Infrastructure",

  description:
    "Sai Ganesh Constructions is a leading petrol pump construction company in India with over 25 years of experience. We specialize in turnkey fuel station development, underground tank installation, canopy construction, and complete petroleum infrastructure solutions built with safety, precision, and regulatory compliance.",

  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000",

  defaultCity: "Bangalore",
  state: "Karnataka",
  country: "India",

  address:
    "2 Stage, 34, Vijayanagara Badavane, Doddamandiganahalli, Kandalli, Hassan, Karnataka – 573217",

  mapLink: "",
  mapEmbed: "",

  phone: "+919983533999",
  whatsapp: "919983533999",
  email: "saiganeshconstructionss@gmail.com",

  logo: "/logo.png",

  /* -----------------------------------------
     COMPANY PROFILE
  ------------------------------------------ */
  companyProfile: {
    category: "Petrol Pump Construction Company",
    workingHours: "Monday - Saturday: 9:00 AM - 6:00 PM",
    areaServed: "Pan India – Highway & City Infrastructure Projects",
    commitment:
      "Sai Ganesh Constructions is committed to delivering precision-engineered fuel infrastructure with uncompromising safety standards, regulatory compliance, and superior construction quality.",
  },

  /* -----------------------------------------
     SERVICES OFFERED
  ------------------------------------------ */
  services: [
    "Petrol Pump Construction (Turnkey Projects)",
    "Underground Storage Tank Installation",
    "Fuel Dispenser Installation",
    "Canopy & Forecourt Construction",
    "Civil & Structural Infrastructure Development",
    "Electrical & Fire Safety Systems",
    "Maintenance & Modernization of Fuel Stations",
    "Regulatory Compliance & Permit Assistance",
  ],

  /* -----------------------------------------
     TRUST METRICS
  ------------------------------------------ */
  stats: {
    projectsCompleted: "20+",
    happyClients: "20+",
    experience: "15+ Years",
  },

  /* -----------------------------------------
     CALL TO ACTION
  ------------------------------------------ */
  cta: {
    primary: "Request a Quote",
  },

  /* -----------------------------------------
     SOCIAL LINKS (IMPORTANT FOR SEO TRUST)
  ------------------------------------------ */
  socials: [
  ],

  /* -----------------------------------------
     SEO SETTINGS
  ------------------------------------------ */
  seo: {
    defaultTitle:
      "Sai Ganesh Constructions | Leading Petrol Pump Construction Company in India",

    ogTitle:
      "Sai Ganesh Constructions – Experts in Petrol Pump & Fuel Station Infrastructure",

    ogDescription:
      "Leading petrol pump construction specialists in India. We provide turnkey fuel station development, underground storage tank installation, canopy construction, and complete petroleum infrastructure services with 25+ years of expertise.",

    ogImage: "/og-image.jpg",

    keywords: [
      "Sai Ganesh Constructions",
      "petrol pump construction company",
      "fuel station construction India",
      "underground storage tank installation",
      "fuel dispenser installation",
      "canopy construction",
      "petrol pump infrastructure development",
      "fuel station contractors Bangalore",
      "highway petrol pump construction",
      "petrol pump turnkey projects",
    ],
  },
};

export default siteConfig;