const siteConfig = {
  /* -----------------------------------------
     BASIC COMPANY INFO
  ------------------------------------------ */
  companyName: "SaiGanesh Constructions",
  tagline: "Building the Future of Fuel Infrastructure",
  description:
    "Saiganesh Constructions is a leading petrol pump construction specialist with over 25 years of experience. We deliver world-class fuel stations that combine safety, efficiency, sustainability, and modern design across India.",

  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://saiganeshconstructions.in",

  defaultCity: "Bangalore",

  address:
    "2 Stage, 34, Vijayanagara Badavane,Doddamandiganahalli, Kandalli, Hassan, Karnataka – 573217",
  mapLink: "",
  mapEmbed: "",

  phone: "+919983533999",
  whatsapp: "919983533999",
  email: "saiganeshconstructionss@gmail.com",

  

  logo: "/logo.png",

  /* -----------------------------------------
     COMPANY PROFILE
  ------------------------------------------ */
  hospitalProfile: {
    category: "Petrol Pump Construction Company",
    workingHours: "Monday - Saturday: 9:00 AM - 6:00 PM",
    areaServed: "Pan India – Highway & City Infrastructure Projects",
    commitment:
      "Saiganesh Constructions is committed to delivering precision-engineered fuel infrastructure with uncompromising safety standards, regulatory compliance, and superior construction quality.",
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
    projectsCompleted: "150+",
    happyClients: "100+",
    experience: "25+ Years",
  },

  /* -----------------------------------------
     CALL TO ACTION
  ------------------------------------------ */
  cta: {
    primary: "Request a Quote",
  },

  /* -----------------------------------------
     SOCIAL LINKS
  ------------------------------------------ */
  socialLink: "",

  /* -----------------------------------------
     SEO SETTINGS
  ------------------------------------------ */
  seo: {
    defaultTitle:
      "Saiganesh Constructions | Leading Petrol Pump Construction Company in India",
    ogTitle:
      "Saiganesh Constructions – Experts in Petrol Pump & Fuel Station Infrastructure",
    ogDescription:
      "Saiganesh Constructions specializes in turnkey petrol pump construction, underground tank installation, canopy construction, and complete fuel station infrastructure development with over 25 years of experience.",
    ogImage: "/og-image.jpg",

    keywords: [
      "Saiganesh Constructions",
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