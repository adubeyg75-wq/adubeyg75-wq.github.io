export type TodoPlaceholder = `[[TODO: ${string}]]`;

export type LocalizedText = {
  en: string;
  hi: string;
};

export type Business = {
  name: LocalizedText;
  firm: LocalizedText;
  established: LocalizedText;
  udyam: string;
  hours: LocalizedText;
  address: LocalizedText;
  addressParts: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phones: {
    primary: string;
    secondary: string;
    primaryDial: string;
    secondaryDial: string;
  };
  email: string;
  googleRating: {
    value: number;
    count: number;
  };
  googleRatingLabel: LocalizedText;
  googleReviewUrl: string;
};

export type Association = {
  name: LocalizedText;
};

export type Credential = LocalizedText;

export type Service = {
  slug: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  bullets: LocalizedText[];
  price: LocalizedText;
};

export type Scheme = {
  name: LocalizedText;
  line: LocalizedText;
};

export type Book = {
  title: LocalizedText;
  format: LocalizedText;
  edition: LocalizedText;
  date: LocalizedText;
  dateIso: string;
  price: LocalizedText;
  priceAmount: string;
  priceCurrency: string;
  bookFormat: string;
  amazonUrl: string;
};

export type Course = {
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  whoFor: LocalizedText;
  outcomes: LocalizedText[];
  modules: LocalizedText[];
  format: LocalizedText;
  duration: LocalizedText;
  language: LocalizedText;
  price: LocalizedText;
  certificate: LocalizedText;
  nextBatch: LocalizedText;
  paymentUrl: string;
  published: boolean;
};

export type Testimonial = {
  name: LocalizedText;
  role: LocalizedText;
  quote: LocalizedText;
};

export type Faq = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type SocialLink = {
  name: LocalizedText;
  url: string;
};

export type NavItem = {
  label: LocalizedText;
  href: string;
};

export type FooterContent = {
  about: LocalizedText;
  quickLinks: LocalizedText;
  services: LocalizedText;
  contact: LocalizedText;
  legal: LocalizedText;
  social: LocalizedText;
  phone: LocalizedText;
  email: LocalizedText;
  copyright: LocalizedText;
};

export type HomeContent = {
  heroEyebrow: LocalizedText;
  heroTitle: LocalizedText;
  heroSubline: LocalizedText;
  heroPrimaryCta: LocalizedText;
  heroSecondaryCta: LocalizedText;
  trustUdyam: LocalizedText;
  trustAuthorPrefix: LocalizedText;
  whoTitle: LocalizedText;
  whoSubtitle: LocalizedText;
  whoCards: Array<{ title: LocalizedText; description: LocalizedText }>;
  howTitle: LocalizedText;
  howSubtitle: LocalizedText;
  howSteps: Array<{ title: LocalizedText; description: LocalizedText }>;
  servicesTitle: LocalizedText;
  servicesSubtitle: LocalizedText;
  serviceLinkLabel: LocalizedText;
  coursesTitle: LocalizedText;
  coursesSubtitle: LocalizedText;
  coursesEmpty: LocalizedText;
  courseLinkLabel: LocalizedText;
  coursesPageLabel: LocalizedText;
  aboutTitle: LocalizedText;
  aboutBio: LocalizedText;
  aboutCredentialsLabel: LocalizedText;
  aboutLink: LocalizedText;
  bookLabel: LocalizedText;
  bookLine: LocalizedText;
  bookBuyLabel: LocalizedText;
  reviewsTitle: LocalizedText;
  reviewsRatingLabel: LocalizedText;
  faqTitle: LocalizedText;
  faqSubtitle: LocalizedText;
  finalEyebrow: LocalizedText;
  finalTitle: LocalizedText;
  finalConsultationCta: LocalizedText;
  finalWhatsappCta: LocalizedText;
};

export type FormOption = {
  value: string;
  label: LocalizedText;
};

export type ProjectFinanceFormContent = {
  title: LocalizedText;
  subtitle: LocalizedText;
  stepProgress: LocalizedText;
  questionProgress: LocalizedText;
  stepNames: LocalizedText[];
  next: LocalizedText;
  back: LocalizedText;
  submit: LocalizedText;
  submitting: LocalizedText;
  errors: {
    required: LocalizedText;
    mobile: LocalizedText;
    email: LocalizedText;
    consent: LocalizedText;
    schemes: LocalizedText;
  };
  projectType: { label: LocalizedText; options: FormOption[] };
  sector: { label: LocalizedText; options: FormOption[] };
  loanAmount: { label: LocalizedText; options: FormOption[] };
  highPriorityLoanValues: string[];
  location: { label: LocalizedText; placeholder: LocalizedText };
  stage: { label: LocalizedText; options: FormOption[] };
  contribution: { label: LocalizedText; options: FormOption[] };
  scheme: { label: LocalizedText; hint: LocalizedText; notSure: LocalizedText };
  name: { label: LocalizedText; placeholder: LocalizedText };
  mobile: { label: LocalizedText; placeholder: LocalizedText };
  email: { label: LocalizedText; placeholder: LocalizedText };
  callTime: { label: LocalizedText; options: FormOption[] };
  consent: { label: LocalizedText };
  honeypotLabel: LocalizedText;
  success: {
    title: LocalizedText;
    body: LocalizedText;
    whatsapp: LocalizedText;
  };
  fallback: {
    title: LocalizedText;
    body: LocalizedText;
    whatsapp: LocalizedText;
  };
  summaryLabels: {
    intro: LocalizedText;
    projectType: LocalizedText;
    sector: LocalizedText;
    loanAmount: LocalizedText;
    location: LocalizedText;
    stage: LocalizedText;
    contribution: LocalizedText;
    schemes: LocalizedText;
    name: LocalizedText;
    mobile: LocalizedText;
    email: LocalizedText;
    callTime: LocalizedText;
    notProvided: LocalizedText;
  };
};

export type ProjectFinanceContent = {
  heroEyebrow: LocalizedText;
  heroTitle: LocalizedText;
  heroSubline: LocalizedText;
  heroPrimaryCta: LocalizedText;
  problemTitle: LocalizedText;
  problemBody: LocalizedText;
  solutionTitle: LocalizedText;
  solutionBody: LocalizedText;
  dprTitle: LocalizedText;
  dprItems: LocalizedText[];
  schemesTitle: LocalizedText;
  schemesSubtitle: LocalizedText;
  processTitle: LocalizedText;
  processSubtitle: LocalizedText;
  documentsTitle: LocalizedText;
  documentsTodo: LocalizedText;
  whyTitle: LocalizedText;
  whyAssociationsLabel: LocalizedText;
  whyCredentialsLabel: LocalizedText;
  faqTitle: LocalizedText;
  faqSubtitle: LocalizedText;
  relevantFaqQuestions: LocalizedText[];
  form: ProjectFinanceFormContent;
};

export type CourseWaitlistContent = {
  title: LocalizedText;
  subtitle: LocalizedText;
  name: { label: LocalizedText; placeholder: LocalizedText };
  mobile: { label: LocalizedText; placeholder: LocalizedText };
  interest: { label: LocalizedText; placeholder: LocalizedText };
  honeypotLabel: LocalizedText;
  submit: LocalizedText;
  submitting: LocalizedText;
  errors: { required: LocalizedText; mobile: LocalizedText };
  success: {
    title: LocalizedText;
    body: LocalizedText;
    whatsapp: LocalizedText;
  };
  fallback: {
    title: LocalizedText;
    body: LocalizedText;
    whatsapp: LocalizedText;
  };
  summaryLabels: {
    intro: LocalizedText;
    name: LocalizedText;
    mobile: LocalizedText;
    interest: LocalizedText;
    notProvided: LocalizedText;
  };
};

export type CoursesContent = {
  heroEyebrow: LocalizedText;
  heroTitle: LocalizedText;
  heroSubtitle: LocalizedText;
  coursesTitle: LocalizedText;
  factLabels: {
    format: LocalizedText;
    duration: LocalizedText;
    language: LocalizedText;
    price: LocalizedText;
  };
  viewCourse: LocalizedText;
  waitlist: CourseWaitlistContent;
};

export type CourseDetailContent = {
  backToCourses: LocalizedText;
  factLabels: {
    format: LocalizedText;
    duration: LocalizedText;
    language: LocalizedText;
    certificate: LocalizedText;
    nextBatch: LocalizedText;
    price: LocalizedText;
  };
  whoForTitle: LocalizedText;
  outcomesTitle: LocalizedText;
  modulesTitle: LocalizedText;
  moduleDetails: LocalizedText;
  trainerTitle: LocalizedText;
  faqTitle: LocalizedText;
  faqSubtitle: LocalizedText;
  relevantFaqQuestions: LocalizedText[];
  enrol: LocalizedText;
  enquire: LocalizedText;
  enquiryMessage: LocalizedText;
  refundPolicyLink: LocalizedText;
};

export type RefundPolicyContent = {
  reviewLine: LocalizedText;
  title: LocalizedText;
  detailsTodo: LocalizedText;
  backHome: LocalizedText;
};

export type ServicesContent = {
  heroEyebrow: LocalizedText;
  heroTitle: LocalizedText;
  heroSubtitle: LocalizedText;
  priceLabel: LocalizedText;
  priceFallback: LocalizedText;
  enquireCta: LocalizedText;
  whatsappCta: LocalizedText;
  whatsappMessage: LocalizedText;
};

export type AboutContent = {
  heroEyebrow: LocalizedText;
  heroTitle: LocalizedText;
  bio: LocalizedText;
  valuesLine: LocalizedText;
  fieldTitle: LocalizedText;
  associationsLabel: LocalizedText;
  credentialsLabel: LocalizedText;
  udyamLabel: LocalizedText;
  authorLabel: LocalizedText;
  cta: LocalizedText;
};

export type BookPageContent = {
  heroEyebrow: LocalizedText;
  heroTitle: LocalizedText;
  detailsLabel: LocalizedText;
  formatLabel: LocalizedText;
  editionLabel: LocalizedText;
  publishedLabel: LocalizedText;
  priceLabel: LocalizedText;
  whoForTitle: LocalizedText;
  whoFor: LocalizedText;
  topicsTitle: LocalizedText;
  topicsTodo: LocalizedText;
  buyLabel: LocalizedText;
};

export type ContactFormContent = {
  title: LocalizedText;
  subtitle: LocalizedText;
  name: { label: LocalizedText; placeholder: LocalizedText };
  mobile: { label: LocalizedText; placeholder: LocalizedText };
  message: { label: LocalizedText; placeholder: LocalizedText };
  consent: { label: LocalizedText };
  honeypotLabel: LocalizedText;
  submit: LocalizedText;
  submitting: LocalizedText;
  errors: { required: LocalizedText; mobile: LocalizedText; consent: LocalizedText };
  success: {
    title: LocalizedText;
    body: LocalizedText;
    whatsapp: LocalizedText;
  };
  fallback: {
    title: LocalizedText;
    body: LocalizedText;
    whatsapp: LocalizedText;
  };
  summaryLabels: {
    intro: LocalizedText;
    name: LocalizedText;
    mobile: LocalizedText;
    message: LocalizedText;
    notProvided: LocalizedText;
  };
};

export type ContactContent = {
  heroEyebrow: LocalizedText;
  heroTitle: LocalizedText;
  heroSubtitle: LocalizedText;
  detailsTitle: LocalizedText;
  addressLabel: LocalizedText;
  phonesLabel: LocalizedText;
  emailLabel: LocalizedText;
  hoursLabel: LocalizedText;
  whatsappLabel: LocalizedText;
  mapTitle: LocalizedText;
  mapUrl: string;
  socialTitle: LocalizedText;
  form: ContactFormContent;
};

export type LegalPageContent = {
  reviewLine: LocalizedText;
  title: LocalizedText;
  backHome: LocalizedText;
};

export type PrivacyContent = LegalPageContent & {
  intro: LocalizedText;
  fieldsTitle: LocalizedText;
  projectFinanceTitle: LocalizedText;
  projectFinanceFields: LocalizedText[];
  waitlistTitle: LocalizedText;
  waitlistFields: LocalizedText[];
  contactTitle: LocalizedText;
  contactFields: LocalizedText[];
  antiSpam: LocalizedText;
  purposeTitle: LocalizedText;
  purposeBody: LocalizedText;
  notSoldTitle: LocalizedText;
  notSoldBody: LocalizedText;
  deletionTitle: LocalizedText;
  deletionBody: LocalizedText;
};

export type TermsContent = LegalPageContent & {
  intro: LocalizedText;
  guidanceTitle: LocalizedText;
  guidanceBody: LocalizedText;
  noGuaranteeTitle: LocalizedText;
  noGuaranteeBody: LocalizedText;
  courseAccessTitle: LocalizedText;
  courseAccessTodo: LocalizedText;
};

export type NotFoundContent = {
  title: LocalizedText;
  body: LocalizedText;
  homeLabel: LocalizedText;
  projectFinanceLabel: LocalizedText;
  contactLabel: LocalizedText;
};

const HINDI_TODO: TodoPlaceholder = "[[TODO: Hindi]]";

export const imageCopy = {
  portrait: {
    alt: { en: "Chandra Shekhar Arora", hi: HINDI_TODO },
  },
  bookCover: {
    alt: {
      en: "Cover of Business Plan and Project Report by C.S. Arora",
      hi: HINDI_TODO,
    },
  },
  teaching: {
    alt: {
      en: "C.S. Arora teaching an entrepreneurship session",
      hi: HINDI_TODO,
    },
    caption: {
      en: "C.S. Arora teaching an entrepreneurship session",
      hi: HINDI_TODO,
    },
  },
  speaking: {
    alt: {
      en: "C.S. Arora speaking at an entrepreneurship awareness camp",
      hi: HINDI_TODO,
    },
    caption: {
      en: "C.S. Arora speaking at an entrepreneurship awareness camp",
      hi: HINDI_TODO,
    },
  },
};

export const hindiEnabled = false;

export const business: Business = {
  name: { en: "Chandra Shekhar Arora", hi: HINDI_TODO },
  firm: { en: "CS ARORA", hi: HINDI_TODO },
  established: { en: "Since 2000", hi: HINDI_TODO },
  udyam: "UDYAM-UP-03-0002934",
  hours: { en: "10:00 AM to 5:00 PM", hi: HINDI_TODO },
  address: {
    en: "Flat UFO-205, Block-B, Ashok Vihar Apartment, Ashok Nagar, Prayagraj, Uttar Pradesh 211001, India",
    hi: HINDI_TODO,
  },
  addressParts: {
    streetAddress: "Flat UFO-205, Block-B, Ashok Vihar Apartment, Ashok Nagar",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    postalCode: "211001",
    addressCountry: "IN",
  },
  phones: {
    primary: "+91 94735 95944",
    secondary: "+91 93693 74490",
    primaryDial: "919473595944",
    secondaryDial: "919369374490",
  },
  email: "chandra.arora2@gmail.com",
  googleRating: {
    value: 4.5,
    count: 13,
  },
  googleRatingLabel: {
    en: "4.5 on Google (13 reviews)",
    hi: HINDI_TODO,
  },
  googleReviewUrl: "[[TODO: Google review URL]]",
};

export const associations: Association[] = [
  { name: { en: "MSME-DFO Prayagraj", hi: HINDI_TODO } },
  { name: { en: "NSIC", hi: HINDI_TODO } },
  { name: { en: "DIEPC", hi: HINDI_TODO } },
  { name: { en: "NIESBUD (Ministry of Skill Development)", hi: HINDI_TODO } },
  { name: { en: "UPICON", hi: HINDI_TODO } },
];

export const credentials: Credential[] = [
  { en: "CA Inter (Group 1)", hi: HINDI_TODO },
  { en: "Former Assistant Professor, SHIATS University", hi: HINDI_TODO },
  {
    en: "Certificate in Import-Export Management (IIMM Baroda)",
    hi: HINDI_TODO,
  },
  { en: "IRDA exam qualified", hi: HINDI_TODO },
  { en: "PG Diploma in Computers", hi: HINDI_TODO },
  { en: "Intent Letter from UP Government", hi: HINDI_TODO },
];

export const services: Service[] = [
  {
    slug: "bankable-project-reports",
    title: { en: "Bankable Project Reports / DPRs", hi: HINDI_TODO },
    shortDescription: {
      en: "Bankable project reports and DPRs covering the required financial details.",
      hi: HINDI_TODO,
    },
    bullets: [
      { en: "Cost of project", hi: HINDI_TODO },
      { en: "Means of finance", hi: HINDI_TODO },
      { en: "5-year profitability", hi: HINDI_TODO },
      { en: "DSCR", hi: HINDI_TODO },
      { en: "Break-even analysis", hi: HINDI_TODO },
      { en: "Scheme-specific requirements", hi: HINDI_TODO },
    ],
    price: { en: "[[TODO: price]]", hi: HINDI_TODO },
  },
  {
    slug: "project-loan-facilitation",
    title: { en: "Project Loan Facilitation with Banks", hi: HINDI_TODO },
    shortDescription: {
      en: "Facilitation with banks for project loans.",
      hi: HINDI_TODO,
    },
    bullets: [
      { en: "Term loans", hi: HINDI_TODO },
      { en: "Working capital", hi: HINDI_TODO },
    ],
    price: { en: "[[TODO: price]]", hi: HINDI_TODO },
  },
  {
    slug: "udyam-msme-registration",
    title: {
      en: "Udyam / MSME Registration and Related Licences",
      hi: HINDI_TODO,
    },
    shortDescription: {
      en: "Udyam / MSME registration and related licences.",
      hi: HINDI_TODO,
    },
    bullets: [
      { en: "Udyam registration", hi: HINDI_TODO },
      { en: "MSME registration", hi: HINDI_TODO },
      { en: "Related licences", hi: HINDI_TODO },
    ],
    price: { en: "[[TODO: price]]", hi: HINDI_TODO },
  },
  {
    slug: "government-scheme-guidance",
    title: { en: "Guidance on Government Schemes", hi: HINDI_TODO },
    shortDescription: {
      en: "Guidance on government schemes.",
      hi: HINDI_TODO,
    },
    bullets: [
      { en: "PMEGP", hi: HINDI_TODO },
      { en: "MYSY", hi: HINDI_TODO },
      { en: "ODOP", hi: HINDI_TODO },
      { en: "MUDRA", hi: HINDI_TODO },
      { en: "CGTMSE", hi: HINDI_TODO },
      { en: "Stand-Up India", hi: HINDI_TODO },
    ],
    price: { en: "[[TODO: price]]", hi: HINDI_TODO },
  },
  {
    slug: "balance-sheet-financial-analysis",
    title: {
      en: "Balance Sheet Preparation and Financial Analysis",
      hi: HINDI_TODO,
    },
    shortDescription: {
      en: "Balance sheet preparation and financial analysis.",
      hi: HINDI_TODO,
    },
    bullets: [
      { en: "Balance sheet preparation", hi: HINDI_TODO },
      { en: "Financial analysis", hi: HINDI_TODO },
    ],
    price: { en: "[[TODO: price]]", hi: HINDI_TODO },
  },
  {
    slug: "entrepreneurship-training",
    title: { en: "Entrepreneurship Training", hi: HINDI_TODO },
    shortDescription: { en: "Entrepreneurship training.", hi: HINDI_TODO },
    bullets: [{ en: "Entrepreneurship training", hi: HINDI_TODO }],
    price: { en: "[[TODO: price]]", hi: HINDI_TODO },
  },
];

export const schemes: Scheme[] = [
  { name: { en: "PMEGP", hi: HINDI_TODO }, line: { en: "Guidance on PMEGP.", hi: HINDI_TODO } },
  { name: { en: "MYSY", hi: HINDI_TODO }, line: { en: "Guidance on MYSY.", hi: HINDI_TODO } },
  { name: { en: "ODOP", hi: HINDI_TODO }, line: { en: "Guidance on ODOP.", hi: HINDI_TODO } },
  { name: { en: "MUDRA", hi: HINDI_TODO }, line: { en: "Guidance on MUDRA.", hi: HINDI_TODO } },
  {
    name: { en: "CGTMSE", hi: HINDI_TODO },
    line: { en: "Guidance on CGTMSE.", hi: HINDI_TODO },
  },
  {
    name: { en: "Stand-Up India", hi: HINDI_TODO },
    line: { en: "Guidance on Stand-Up India.", hi: HINDI_TODO },
  },
];

export const book: Book = {
  title: { en: "Business Plan and Project Report", hi: HINDI_TODO },
  format: { en: "Kindle eBook", hi: HINDI_TODO },
  edition: { en: "1st edition", hi: HINDI_TODO },
  date: { en: "9 May 2026", hi: HINDI_TODO },
  dateIso: "2026-05-09",
  price: { en: "Rs 299", hi: HINDI_TODO },
  priceAmount: "299",
  priceCurrency: "INR",
  bookFormat: "EBook",
  amazonUrl: "https://amzn.in/d/0hUWjFvG",
};

export const courses: Course[] = [
  {
    slug: "sample-course-1",
    title: { en: "[[TODO: course 1 title]]", hi: HINDI_TODO },
    subtitle: { en: "[[TODO: course 1 subtitle]]", hi: HINDI_TODO },
    whoFor: { en: "[[TODO: course 1 who for]]", hi: HINDI_TODO },
    outcomes: [{ en: "[[TODO: course 1 outcome]]", hi: HINDI_TODO }],
    modules: [{ en: "[[TODO: course 1 module]]", hi: HINDI_TODO }],
    format: { en: "[[TODO: course 1 format]]", hi: HINDI_TODO },
    duration: { en: "[[TODO: course 1 duration]]", hi: HINDI_TODO },
    language: { en: "[[TODO: course 1 language]]", hi: HINDI_TODO },
    price: { en: "[[TODO: course 1 price]]", hi: HINDI_TODO },
    certificate: { en: "[[TODO: course 1 certificate]]", hi: HINDI_TODO },
    nextBatch: { en: "[[TODO: course 1 next batch]]", hi: HINDI_TODO },
    paymentUrl: "[[TODO: Razorpay Payment Link URL for course 1]]",
    published: false,
  },
  {
    slug: "sample-course-2",
    title: { en: "[[TODO: course 2 title]]", hi: HINDI_TODO },
    subtitle: { en: "[[TODO: course 2 subtitle]]", hi: HINDI_TODO },
    whoFor: { en: "[[TODO: course 2 who for]]", hi: HINDI_TODO },
    outcomes: [{ en: "[[TODO: course 2 outcome]]", hi: HINDI_TODO }],
    modules: [{ en: "[[TODO: course 2 module]]", hi: HINDI_TODO }],
    format: { en: "[[TODO: course 2 format]]", hi: HINDI_TODO },
    duration: { en: "[[TODO: course 2 duration]]", hi: HINDI_TODO },
    language: { en: "[[TODO: course 2 language]]", hi: HINDI_TODO },
    price: { en: "[[TODO: course 2 price]]", hi: HINDI_TODO },
    certificate: { en: "[[TODO: course 2 certificate]]", hi: HINDI_TODO },
    nextBatch: { en: "[[TODO: course 2 next batch]]", hi: HINDI_TODO },
    paymentUrl: "[[TODO: Razorpay Payment Link URL for course 2]]",
    published: false,
  },
];

export const testimonials: Testimonial[] = [];

export const faqs: Faq[] = [
  {
    question: { en: "What is a DPR?", hi: HINDI_TODO },
    answer: {
      en: "A DPR is a bankable project report covering cost of project, means of finance, 5-year profitability, DSCR, break-even analysis and scheme-specific requirements.",
      hi: HINDI_TODO,
    },
  },
  {
    question: { en: "How does a consultation work?", hi: HINDI_TODO },
    answer: {
      en: "[[TODO: consultation process]]",
      hi: HINDI_TODO,
    },
  },
  {
    question: { en: "Which schemes do you guide on?", hi: HINDI_TODO },
    answer: {
      en: "Guidance on PMEGP, MYSY, ODOP, MUDRA, CGTMSE and Stand-Up India.",
      hi: HINDI_TODO,
    },
  },
  {
    question: { en: "Do you work outside Prayagraj?", hi: HINDI_TODO },
    answer: {
      en: "[[TODO: service area outside Prayagraj]]",
      hi: HINDI_TODO,
    },
  },
  {
    question: { en: "How are courses delivered?", hi: HINDI_TODO },
    answer: {
      en: "[[TODO: course delivery format]]",
      hi: HINDI_TODO,
    },
  },
  {
    question: { en: "How do I contact you?", hi: HINDI_TODO },
    answer: {
      en: "Call or WhatsApp +91 94735 95944, email chandra.arora2@gmail.com, or call +91 93693 74490. Office hours are 10:00 AM to 5:00 PM.",
      hi: HINDI_TODO,
    },
  },
];

export const socials: SocialLink[] = [
  {
    name: { en: "LinkedIn", hi: HINDI_TODO },
    url: "https://in.linkedin.com/in/chandra-shekhar-arora-7482a7118",
  },
  {
    name: { en: "Medium", hi: HINDI_TODO },
    url: "https://csa2m.medium.com",
  },
  {
    name: { en: "IndiaMART", hi: HINDI_TODO },
    url: "https://www.indiamart.com/csarora/",
  },
  {
    name: { en: "GlobalLinker", hi: HINDI_TODO },
    url: "https://www.globallinker.com/seller/cs-arora",
  },
  {
    name: { en: "Facebook", hi: HINDI_TODO },
    url: "[[TODO: Facebook URL]]",
  },
  {
    name: { en: "Instagram", hi: HINDI_TODO },
    url: "[[TODO: Instagram URL]]",
  },
  {
    name: { en: "YouTube", hi: HINDI_TODO },
    url: "[[TODO: YouTube URL]]",
  },
  {
    name: { en: "Justdial", hi: HINDI_TODO },
    url: "[[TODO: Justdial URL]]",
  },
  {
    name: { en: "Goodreads", hi: HINDI_TODO },
    url: "[[TODO: Goodreads URL]]",
  },
];

export const nav: NavItem[] = [
  { label: { en: "Home", hi: "होम" }, href: "/" },
  {
    label: { en: "Project Finance", hi: "प्रोजेक्ट फाइनेंस" },
    href: "/project-finance",
  },
  { label: { en: "Courses", hi: "पाठ्यक्रम" }, href: "/courses" },
  { label: { en: "Services", hi: "सेवाएँ" }, href: "/services" },
  { label: { en: "About", hi: "परिचय" }, href: "/about" },
  { label: { en: "Book", hi: "पुस्तक" }, href: "/book" },
  { label: { en: "Contact", hi: "संपर्क" }, href: "/contact" },
];

export const ctas = {
  freeConsultation: {
    en: "Free Consultation", // CONFIRM WITH CLIENT: is the first consultation free?
    hi: "मुफ्त परामर्श",
  },
  whatsapp: { en: "WhatsApp", hi: "व्हाट्सएप" },
  call: { en: "Call Now", hi: "अभी कॉल करें" },
  enquire: { en: "Enquire Now", hi: "अभी पूछताछ करें" },
  learnMore: { en: "Learn More", hi: "और जानें" },
  viewCourses: { en: "View Courses", hi: "पाठ्यक्रम देखें" },
  viewServices: { en: "View Services", hi: "सेवाएँ देखें" },
  viewOnAmazon: { en: "View on Amazon", hi: "Amazon पर देखें" },
  sendMessage: { en: "Send Message", hi: "संदेश भेजें" },
  languageEnglish: { en: "EN", hi: "EN" },
  languageHindi: { en: "हिं", hi: "हिं" },
  languageSwitcher: { en: "Language", hi: "भाषा" },
  openMenu: { en: "Open menu", hi: "मेन्यू खोलें" },
  closeMenu: { en: "Close menu", hi: "मेन्यू बंद करें" },
  floatingWhatsApp: {
    en: "Chat on WhatsApp with CS ARORA",
    hi: "CS ARORA के साथ व्हाट्सएप पर बात करें",
  },
} satisfies Record<string, LocalizedText>;

export const messages = {
  whatsappProjectLoan: {
    en: "Hello Mr Arora, I want guidance on a project loan.",
    hi: HINDI_TODO,
  },
} satisfies Record<string, LocalizedText>;

export const disclaimer = {
  loanSanction: {
    en: "Loan sanction is at the sole discretion of the bank or agency.",
    hi: HINDI_TODO,
  },
  information: {
    en: "Information on this website is guidance, not a guarantee.",
    hi: HINDI_TODO,
  },
  footer: {
    en: "Loan sanction is at the sole discretion of the bank or agency. Information on this website is guidance, not a guarantee.",
    hi: HINDI_TODO,
  },
} satisfies Record<string, LocalizedText>;

export const footer: FooterContent = {
  about: {
    en: "CS ARORA is a Prayagraj-based MSME, project finance and banking consultant. Since 2000.",
    hi: HINDI_TODO,
  },
  quickLinks: { en: "Quick links", hi: "त्वरित लिंक" },
  services: { en: "Services", hi: "सेवाएँ" },
  contact: { en: "Contact", hi: "संपर्क" },
  legal: { en: "Legal", hi: HINDI_TODO },
  social: { en: "Profiles", hi: "प्रोफ़ाइल" },
  phone: { en: "Phone", hi: "फ़ोन" },
  email: { en: "Email", hi: "ईमेल" },
  copyright: { en: "© {year} CS ARORA", hi: HINDI_TODO },
};

export const home: HomeContent = {
  heroEyebrow: { en: "MSME • Project Finance • Training • Author", hi: HINDI_TODO },
  heroTitle: {
    en: "Bankable project reports and bank-loan support for MSME projects of Rs 1 crore and above",
    hi: HINDI_TODO,
  },
  heroSubline: {
    en: "Prayagraj-based consultant since 2000; works with MSME-DFO, NSIC, DIEPC and NIESBUD.",
    hi: HINDI_TODO,
  },
  heroPrimaryCta: {
    en: "Get a free project consultation", // CONFIRM WITH CLIENT: is the first consultation free?
    hi: HINDI_TODO,
  },
  heroSecondaryCta: { en: "Explore courses", hi: HINDI_TODO },
  trustUdyam: { en: "Udyam registered", hi: HINDI_TODO },
  trustAuthorPrefix: { en: "Author,", hi: HINDI_TODO },
  whoTitle: { en: "Who this is for", hi: HINDI_TODO },
  whoSubtitle: {
    en: "Three common situations where structured project documentation and guidance help.",
    hi: HINDI_TODO,
  },
  whoCards: [
    {
      title: { en: "Setting up a new unit", hi: HINDI_TODO },
      description: {
        en: "You are setting up a new manufacturing or service unit and need a bankable project report.",
        hi: HINDI_TODO,
      },
    },
    {
      title: { en: "Expanding an MSME", hi: HINDI_TODO },
      description: {
        en: "You are expanding an existing MSME and need finance documentation.",
        hi: HINDI_TODO,
      },
    },
    {
      title: { en: "Applying under a scheme", hi: HINDI_TODO },
      description: {
        en: "You are applying under a government scheme and need guidance on scheme fit.",
        hi: HINDI_TODO,
      },
    },
  ],
  howTitle: { en: "How it works", hi: HINDI_TODO },
  howSubtitle: {
    en: "A clear path from the first conversation to bank submission and follow-up.",
    hi: HINDI_TODO,
  },
  howSteps: [
    {
      title: { en: "Free consultation", hi: HINDI_TODO }, // CONFIRM WITH CLIENT: is the first consultation free?
      description: {
        en: "We discuss your project and what you need.",
        hi: HINDI_TODO,
      },
    },
    {
      title: { en: "Feasibility and scheme fit", hi: HINDI_TODO },
      description: {
        en: "We review feasibility and which schemes may fit.",
        hi: HINDI_TODO,
      },
    },
    {
      title: { en: "DPR preparation", hi: HINDI_TODO },
      description: {
        en: "We prepare the detailed project report with the required financial details.",
        hi: HINDI_TODO,
      },
    },
    {
      title: { en: "Bank submission and follow-up", hi: HINDI_TODO },
      description: {
        en: "We support submission to the bank and follow up on queries.",
        hi: HINDI_TODO,
      },
    },
  ],
  servicesTitle: { en: "Services", hi: HINDI_TODO },
  servicesSubtitle: {
    en: "Project reports, loan facilitation, registrations, scheme guidance, financial analysis and training.",
    hi: HINDI_TODO,
  },
  serviceLinkLabel: { en: "View service", hi: HINDI_TODO },
  coursesTitle: { en: "Courses", hi: HINDI_TODO },
  coursesSubtitle: {
    en: "Training and learning resources for entrepreneurs and MSME teams.",
    hi: HINDI_TODO,
  },
  coursesEmpty: {
    en: "Course details will be published here. Browse the courses page for updates.",
    hi: HINDI_TODO,
  },
  courseLinkLabel: { en: "View course", hi: HINDI_TODO },
  coursesPageLabel: { en: "Go to courses", hi: HINDI_TODO },
  aboutTitle: { en: "About CS ARORA", hi: HINDI_TODO },
  aboutBio: {
    en: "Chandra Shekhar Arora has advised MSMEs on bankable project reports, bank finance and government schemes from Prayagraj since 2000.",
    hi: HINDI_TODO,
  },
  aboutCredentialsLabel: { en: "Credentials", hi: HINDI_TODO },
  aboutLink: { en: "Read more about CS ARORA", hi: HINDI_TODO },
  bookLabel: { en: "Book", hi: HINDI_TODO },
  bookLine: {
    en: "A practical guide to business plans and project reports.",
    hi: HINDI_TODO,
  },
  bookBuyLabel: { en: "Buy on Amazon", hi: HINDI_TODO },
  reviewsTitle: { en: "Reviews", hi: HINDI_TODO },
  reviewsRatingLabel: { en: "Google rating", hi: HINDI_TODO },
  faqTitle: { en: "Frequently asked questions", hi: HINDI_TODO },
  faqSubtitle: {
    en: "Answers to common questions about project reports, schemes and contact details.",
    hi: HINDI_TODO,
  },
  finalEyebrow: { en: "Start a conversation", hi: HINDI_TODO },
  finalTitle: {
    en: "Planning a project of Rs 1 crore or more? Talk to Mr Arora first.",
    hi: HINDI_TODO,
  },
  finalConsultationCta: {
    en: "Get a free project consultation", // CONFIRM WITH CLIENT: is the first consultation free?
    hi: HINDI_TODO,
  },
  finalWhatsappCta: { en: "WhatsApp", hi: HINDI_TODO },
};

export const projectFinance: ProjectFinanceContent = {
  heroEyebrow: { en: "Project finance support", hi: HINDI_TODO },
  heroTitle: {
    en: "Bankable DPR and bank liaison for projects of Rs 1 crore and above",
    hi: HINDI_TODO,
  },
  heroSubline: {
    en: "For entrepreneurs planning a new manufacturing or service unit, or expanding an MSME, who need complete project details prepared for banks and industry offices.",
    hi: HINDI_TODO,
  },
  heroPrimaryCta: { en: "Start your qualifying enquiry", hi: HINDI_TODO },
  problemTitle: { en: "What banks and industry offices ask for", hi: HINDI_TODO },
  problemBody: {
    en: "Banks and industry offices ask for complete project details before they can assess a proposal.",
    hi: HINDI_TODO,
  },
  solutionTitle: { en: "How Mr Arora helps", hi: HINDI_TODO },
  solutionBody: {
    en: "Mr Arora prepares the project report and coordinates with banks so the details are in one place.",
    hi: HINDI_TODO,
  },
  dprTitle: { en: "What your DPR covers", hi: HINDI_TODO },
  dprItems: [
    { en: "Cost of project", hi: HINDI_TODO },
    { en: "Means of finance", hi: HINDI_TODO },
    { en: "5-year profitability", hi: HINDI_TODO },
    { en: "DSCR", hi: HINDI_TODO },
    { en: "Break-even analysis", hi: HINDI_TODO },
    { en: "Scheme-specific requirements", hi: HINDI_TODO },
  ],
  schemesTitle: { en: "Schemes he guides on", hi: HINDI_TODO },
  schemesSubtitle: {
    en: "Guidance on scheme fit and scheme-specific requirements.",
    hi: HINDI_TODO,
  },
  processTitle: { en: "How it works", hi: HINDI_TODO },
  processSubtitle: {
    en: "From the first conversation to bank submission and follow-up.",
    hi: HINDI_TODO,
  },
  documentsTitle: { en: "Documents to keep ready", hi: HINDI_TODO },
  documentsTodo: {
    en: "[[TODO: document checklist from Mr Arora]]",
    hi: HINDI_TODO,
  },
  whyTitle: { en: "Why Mr Arora", hi: HINDI_TODO },
  whyAssociationsLabel: { en: "Associations", hi: HINDI_TODO },
  whyCredentialsLabel: { en: "Credentials", hi: HINDI_TODO },
  faqTitle: { en: "Project finance FAQs", hi: HINDI_TODO },
  faqSubtitle: {
    en: "Common questions about DPRs, schemes and contact details.",
    hi: HINDI_TODO,
  },
  relevantFaqQuestions: [
    { en: "What is a DPR?", hi: HINDI_TODO },
    { en: "Which schemes do you guide on?", hi: HINDI_TODO },
    { en: "How do I contact you?", hi: HINDI_TODO },
  ],
  form: {
    title: { en: "Tell us about your project", hi: HINDI_TODO },
    subtitle: {
      en: "Three short steps. Your answers stay with you if you go back.",
      hi: HINDI_TODO,
    },
    stepProgress: { en: "Step {current} of 3", hi: HINDI_TODO },
    questionProgress: {
      en: "Question {current} of {total}",
      hi: HINDI_TODO,
    },
    stepNames: [
      { en: "Project", hi: HINDI_TODO },
      { en: "Readiness", hi: HINDI_TODO },
      { en: "Contact", hi: HINDI_TODO },
    ],
    next: { en: "Next", hi: HINDI_TODO },
    back: { en: "Back", hi: HINDI_TODO },
    submit: { en: "Submit enquiry", hi: HINDI_TODO },
    submitting: { en: "Sending enquiry...", hi: HINDI_TODO },
    errors: {
      required: { en: "Please answer this question.", hi: HINDI_TODO },
      mobile: {
        en: "Enter a 10-digit Indian mobile number starting with 6 to 9.",
        hi: HINDI_TODO,
      },
      email: { en: "Enter a valid email address.", hi: HINDI_TODO },
      consent: { en: "Please agree to be contacted.", hi: HINDI_TODO },
      schemes: { en: "Choose at least one option.", hi: HINDI_TODO },
    },
    projectType: {
      label: { en: "What are you planning?", hi: HINDI_TODO },
      options: [
        { value: "new-unit", label: { en: "New unit", hi: HINDI_TODO } },
        { value: "expansion", label: { en: "Expansion", hi: HINDI_TODO } },
      ],
    },
    sector: {
      label: { en: "Which sector?", hi: HINDI_TODO },
      options: [
        {
          value: "manufacturing",
          label: { en: "Manufacturing", hi: HINDI_TODO },
        },
        { value: "service", label: { en: "Service", hi: HINDI_TODO } },
        { value: "trading", label: { en: "Trading", hi: HINDI_TODO } },
      ],
    },
    loanAmount: {
      label: { en: "Loan amount needed", hi: HINDI_TODO },
      options: [
        {
          value: "under-25-lakh",
          label: { en: "Under Rs 25 lakh", hi: HINDI_TODO },
        },
        {
          value: "25-lakh-to-1-crore",
          label: { en: "Rs 25 lakh to 1 crore", hi: HINDI_TODO },
        },
        {
          value: "1-to-5-crore",
          label: { en: "Rs 1 to 5 crore", hi: HINDI_TODO },
        },
        {
          value: "above-5-crore",
          label: { en: "Above Rs 5 crore", hi: HINDI_TODO },
        },
      ],
    },
    highPriorityLoanValues: ["1-to-5-crore", "above-5-crore"],
    location: {
      label: { en: "District or city", hi: HINDI_TODO },
      placeholder: { en: "Enter district or city", hi: HINDI_TODO },
    },
    stage: {
      label: { en: "What is the current stage?", hi: HINDI_TODO },
      options: [
        { value: "idea", label: { en: "Idea", hi: HINDI_TODO } },
        {
          value: "land-or-premises",
          label: { en: "Land or premises arranged", hi: HINDI_TODO },
        },
        {
          value: "running",
          label: { en: "Business already running", hi: HINDI_TODO },
        },
      ],
    },
    contribution: {
      label: { en: "Own contribution available", hi: HINDI_TODO },
      options: [
        { value: "under-10", label: { en: "Under 10%", hi: HINDI_TODO } },
        { value: "10-to-25", label: { en: "10% to 25%", hi: HINDI_TODO } },
        { value: "above-25", label: { en: "Above 25%", hi: HINDI_TODO } },
        { value: "not-sure", label: { en: "Not sure", hi: HINDI_TODO } },
      ],
    },
    scheme: {
      label: { en: "Scheme of interest", hi: HINDI_TODO },
      hint: { en: "Choose all that apply.", hi: HINDI_TODO },
      notSure: { en: "Not sure", hi: HINDI_TODO },
    },
    name: {
      label: { en: "Full name", hi: HINDI_TODO },
      placeholder: { en: "Enter full name", hi: HINDI_TODO },
    },
    mobile: {
      label: { en: "Mobile number", hi: HINDI_TODO },
      placeholder: { en: "10-digit mobile number", hi: HINDI_TODO },
    },
    email: {
      label: { en: "Email (optional)", hi: HINDI_TODO },
      placeholder: { en: "you@example.com", hi: HINDI_TODO },
    },
    callTime: {
      label: { en: "Preferred call time", hi: HINDI_TODO },
      options: [
        { value: "morning", label: { en: "Morning", hi: HINDI_TODO } },
        { value: "afternoon", label: { en: "Afternoon", hi: HINDI_TODO } },
        { value: "evening", label: { en: "Evening", hi: HINDI_TODO } },
      ],
    },
    consent: {
      label: {
        en: "I agree to be contacted by CS ARORA about my enquiry.",
        hi: HINDI_TODO,
      },
    },
    honeypotLabel: { en: "Website", hi: HINDI_TODO },
    success: {
      title: { en: "Thank you. Your enquiry is with us.", hi: HINDI_TODO },
      body: {
        en: "Thank you. Mr Arora's office will contact you during office hours ({hours}).",
        hi: HINDI_TODO,
      },
      whatsapp: { en: "Also send on WhatsApp", hi: HINDI_TODO },
    },
    fallback: {
      title: { en: "Your answers are safe.", hi: HINDI_TODO },
      body: {
        en: "We could not send the enquiry right now. Please send the same answers on WhatsApp so nothing is lost.",
        hi: HINDI_TODO,
      },
      whatsapp: { en: "Send on WhatsApp", hi: HINDI_TODO },
    },
    summaryLabels: {
      intro: { en: "Project enquiry for CS ARORA:", hi: HINDI_TODO },
      projectType: { en: "Project", hi: HINDI_TODO },
      sector: { en: "Sector", hi: HINDI_TODO },
      loanAmount: { en: "Loan amount needed", hi: HINDI_TODO },
      location: { en: "District or city", hi: HINDI_TODO },
      stage: { en: "Current stage", hi: HINDI_TODO },
      contribution: { en: "Own contribution", hi: HINDI_TODO },
      schemes: { en: "Schemes of interest", hi: HINDI_TODO },
      name: { en: "Name", hi: HINDI_TODO },
      mobile: { en: "Mobile", hi: HINDI_TODO },
      email: { en: "Email", hi: HINDI_TODO },
      callTime: { en: "Preferred call time", hi: HINDI_TODO },
      notProvided: { en: "Not provided", hi: HINDI_TODO },
    },
  },
};

export const coursesPage: CoursesContent = {
  heroEyebrow: { en: "MSME training", hi: HINDI_TODO },
  heroTitle: { en: "Courses", hi: HINDI_TODO },
  heroSubtitle: {
    en: "Practical MSME and entrepreneurship learning from a consultant who has trained for government bodies.",
    hi: HINDI_TODO,
  },
  coursesTitle: { en: "Available courses", hi: HINDI_TODO },
  factLabels: {
    format: { en: "Format", hi: HINDI_TODO },
    duration: { en: "Duration", hi: HINDI_TODO },
    language: { en: "Language", hi: HINDI_TODO },
    price: { en: "Price", hi: HINDI_TODO },
  },
  viewCourse: { en: "View course", hi: HINDI_TODO },
  waitlist: {
    title: { en: "New batches coming soon", hi: HINDI_TODO },
    subtitle: {
      en: "Share your details and we will contact you about upcoming batches.",
      hi: HINDI_TODO,
    },
    name: {
      label: { en: "Full name", hi: HINDI_TODO },
      placeholder: { en: "Enter full name", hi: HINDI_TODO },
    },
    mobile: {
      label: { en: "Mobile number", hi: HINDI_TODO },
      placeholder: { en: "10-digit mobile number", hi: HINDI_TODO },
    },
    interest: {
      label: { en: "Course of interest", hi: HINDI_TODO },
      placeholder: { en: "Enter course of interest", hi: HINDI_TODO },
    },
    honeypotLabel: { en: "Website", hi: HINDI_TODO },
    submit: { en: "Notify me", hi: HINDI_TODO },
    submitting: { en: "Sending...", hi: HINDI_TODO },
    errors: {
      required: { en: "Please answer this question.", hi: HINDI_TODO },
      mobile: {
        en: "Enter a 10-digit Indian mobile number starting with 6 to 9.",
        hi: HINDI_TODO,
      },
    },
    success: {
      title: { en: "Thank you. Your interest is noted.", hi: HINDI_TODO },
      body: {
        en: "Thank you. Mr Arora's office will contact you during office hours ({hours}).",
        hi: HINDI_TODO,
      },
      whatsapp: { en: "Also send on WhatsApp", hi: HINDI_TODO },
    },
    fallback: {
      title: { en: "Your details are safe.", hi: HINDI_TODO },
      body: {
        en: "We could not send your details right now. Please send the same details on WhatsApp so nothing is lost.",
        hi: HINDI_TODO,
      },
      whatsapp: { en: "Send on WhatsApp", hi: HINDI_TODO },
    },
    summaryLabels: {
      intro: { en: "Course batch enquiry for CS ARORA:", hi: HINDI_TODO },
      name: { en: "Name", hi: HINDI_TODO },
      mobile: { en: "Mobile", hi: HINDI_TODO },
      interest: { en: "Course of interest", hi: HINDI_TODO },
      notProvided: { en: "Not provided", hi: HINDI_TODO },
    },
  },
};

export const courseDetail: CourseDetailContent = {
  backToCourses: { en: "Back to courses", hi: HINDI_TODO },
  factLabels: {
    format: { en: "Format", hi: HINDI_TODO },
    duration: { en: "Duration", hi: HINDI_TODO },
    language: { en: "Language", hi: HINDI_TODO },
    certificate: { en: "Certificate", hi: HINDI_TODO },
    nextBatch: { en: "Next batch", hi: HINDI_TODO },
    price: { en: "Price", hi: HINDI_TODO },
  },
  whoForTitle: { en: "Who it is for", hi: HINDI_TODO },
  outcomesTitle: { en: "What you will learn", hi: HINDI_TODO },
  modulesTitle: { en: "Modules", hi: HINDI_TODO },
  moduleDetails: {
    en: "Detailed module content will be published with the course.",
    hi: HINDI_TODO,
  },
  trainerTitle: { en: "About the trainer", hi: HINDI_TODO },
  faqTitle: { en: "Course FAQs", hi: HINDI_TODO },
  faqSubtitle: {
    en: "Common questions about courses and contact details.",
    hi: HINDI_TODO,
  },
  relevantFaqQuestions: [
    { en: "How are courses delivered?", hi: HINDI_TODO },
    { en: "How do I contact you?", hi: HINDI_TODO },
  ],
  enrol: { en: "Enrol now", hi: HINDI_TODO },
  enquire: { en: "Enquire about this course", hi: HINDI_TODO },
  enquiryMessage: {
    en: "Hello Mr Arora, I would like to know more about {course}.",
    hi: HINDI_TODO,
  },
  refundPolicyLink: { en: "Read the refund policy", hi: HINDI_TODO },
};

export const servicesPage: ServicesContent = {
  heroEyebrow: { en: "Consulting and training", hi: HINDI_TODO },
  heroTitle: { en: "Services", hi: HINDI_TODO },
  heroSubtitle: {
    en: "Project reports, loan facilitation, registrations, scheme guidance, financial analysis and training.",
    hi: HINDI_TODO,
  },
  priceLabel: { en: "Price", hi: HINDI_TODO },
  priceFallback: { en: "Price on consultation", hi: HINDI_TODO },
  enquireCta: { en: "Enquire on project finance", hi: HINDI_TODO },
  whatsappCta: { en: "Ask on WhatsApp", hi: HINDI_TODO },
  whatsappMessage: {
    en: "Hello Mr Arora, I would like to know more about {service}.",
    hi: HINDI_TODO,
  },
};

export const aboutPage: AboutContent = {
  heroEyebrow: { en: "About CS ARORA", hi: HINDI_TODO },
  heroTitle: { en: "Chandra Shekhar Arora", hi: HINDI_TODO },
  bio: {
    en: "Chandra Shekhar Arora is a Prayagraj-based MSME and project finance consultant, trainer and author. He has worked from Prayagraj since 2000 on bankable project reports, bank finance and government schemes.",
    hi: HINDI_TODO,
  },
  valuesLine: {
    en: "Helping first-generation entrepreneurs; Atmanirbhar Bharat; Vocal for Local; Make in India.",
    hi: HINDI_TODO,
  },
  fieldTitle: { en: "In the field", hi: HINDI_TODO },
  associationsLabel: { en: "Associations", hi: HINDI_TODO },
  credentialsLabel: { en: "Credentials", hi: HINDI_TODO },
  udyamLabel: { en: "Udyam registration", hi: HINDI_TODO },
  authorLabel: { en: "Author", hi: HINDI_TODO },
  cta: { en: "Contact Mr Arora", hi: HINDI_TODO },
};

export const bookPage: BookPageContent = {
  heroEyebrow: { en: "Book", hi: HINDI_TODO },
  heroTitle: {
    en: "Business Plan and Project Report",
    hi: HINDI_TODO,
  },
  detailsLabel: { en: "Book details", hi: HINDI_TODO },
  formatLabel: { en: "Format", hi: HINDI_TODO },
  editionLabel: { en: "Edition", hi: HINDI_TODO },
  publishedLabel: { en: "Published", hi: HINDI_TODO },
  priceLabel: { en: "Price", hi: HINDI_TODO },
  whoForTitle: { en: "Who it is for", hi: HINDI_TODO },
  whoFor: { en: "First-generation entrepreneurs and students.", hi: HINDI_TODO },
  topicsTitle: { en: "Topics covered", hi: HINDI_TODO },
  topicsTodo: { en: "[[TODO: confirm chapter list]]", hi: HINDI_TODO },
  buyLabel: { en: "Buy on Amazon", hi: HINDI_TODO },
};

export const contactPage: ContactContent = {
  heroEyebrow: { en: "Contact", hi: HINDI_TODO },
  heroTitle: { en: "Get in touch", hi: HINDI_TODO },
  heroSubtitle: {
    en: "Call, WhatsApp, email or use the form below. Office hours are {hours}.",
    hi: HINDI_TODO,
  },
  detailsTitle: { en: "Contact details", hi: HINDI_TODO },
  addressLabel: { en: "Address", hi: HINDI_TODO },
  phonesLabel: { en: "Phone", hi: HINDI_TODO },
  emailLabel: { en: "Email", hi: HINDI_TODO },
  hoursLabel: { en: "Office hours", hi: HINDI_TODO },
  whatsappLabel: { en: "WhatsApp", hi: HINDI_TODO },
  mapTitle: { en: "Map to Ashok Nagar, Prayagraj", hi: HINDI_TODO },
  mapUrl:
    "https://www.google.com/maps?q=Ashok+Vihar+Apartment+Ashok+Nagar+Prayagraj+211001&output=embed",
  socialTitle: { en: "Profiles", hi: HINDI_TODO },
  form: {
    title: { en: "Send a message", hi: HINDI_TODO },
    subtitle: {
      en: "Share your details and Mr Arora's office will contact you during office hours ({hours}).",
      hi: HINDI_TODO,
    },
    name: {
      label: { en: "Name", hi: HINDI_TODO },
      placeholder: { en: "Enter your name", hi: HINDI_TODO },
    },
    mobile: {
      label: { en: "Mobile number", hi: HINDI_TODO },
      placeholder: { en: "10-digit mobile number", hi: HINDI_TODO },
    },
    message: {
      label: { en: "Message", hi: HINDI_TODO },
      placeholder: { en: "How can we help?", hi: HINDI_TODO },
    },
    consent: {
      label: {
        en: "I agree to be contacted by CS ARORA about my message.",
        hi: HINDI_TODO,
      },
    },
    honeypotLabel: { en: "Website", hi: HINDI_TODO },
    submit: { en: "Send message", hi: HINDI_TODO },
    submitting: { en: "Sending...", hi: HINDI_TODO },
    errors: {
      required: { en: "Please answer this question.", hi: HINDI_TODO },
      mobile: {
        en: "Enter a 10-digit Indian mobile number starting with 6 to 9.",
        hi: HINDI_TODO,
      },
      consent: { en: "Please agree to be contacted.", hi: HINDI_TODO },
    },
    success: {
      title: { en: "Thank you. Your message is with us.", hi: HINDI_TODO },
      body: {
        en: "Thank you. Mr Arora's office will contact you during office hours ({hours}).",
        hi: HINDI_TODO,
      },
      whatsapp: { en: "Also send on WhatsApp", hi: HINDI_TODO },
    },
    fallback: {
      title: { en: "Your details are safe.", hi: HINDI_TODO },
      body: {
        en: "We could not send your message right now. Please send the same details on WhatsApp so nothing is lost.",
        hi: HINDI_TODO,
      },
      whatsapp: { en: "Send on WhatsApp", hi: HINDI_TODO },
    },
    summaryLabels: {
      intro: { en: "Contact enquiry for CS ARORA:", hi: HINDI_TODO },
      name: { en: "Name", hi: HINDI_TODO },
      mobile: { en: "Mobile", hi: HINDI_TODO },
      message: { en: "Message", hi: HINDI_TODO },
      notProvided: { en: "Not provided", hi: HINDI_TODO },
    },
  },
};

const LEGAL_REVIEW_LINE: LocalizedText = {
  en: "[[TODO: legal review by client before launch]]",
  hi: HINDI_TODO,
};

export const privacyPolicy: PrivacyContent = {
  reviewLine: LEGAL_REVIEW_LINE,
  title: { en: "Privacy policy", hi: HINDI_TODO },
  backHome: { en: "Back to home", hi: HINDI_TODO },
  intro: {
    en: "This page explains what the website forms collect and why.",
    hi: HINDI_TODO,
  },
  fieldsTitle: { en: "What the forms collect", hi: HINDI_TODO },
  projectFinanceTitle: { en: "Project finance enquiry form", hi: HINDI_TODO },
  projectFinanceFields: [
    { en: "What are you planning?", hi: HINDI_TODO },
    { en: "Which sector?", hi: HINDI_TODO },
    { en: "Loan amount needed", hi: HINDI_TODO },
    { en: "District or city", hi: HINDI_TODO },
    { en: "What is the current stage?", hi: HINDI_TODO },
    { en: "Own contribution available", hi: HINDI_TODO },
    { en: "Scheme of interest", hi: HINDI_TODO },
    { en: "Full name", hi: HINDI_TODO },
    { en: "Mobile number", hi: HINDI_TODO },
    { en: "Email (optional)", hi: HINDI_TODO },
    { en: "Preferred call time", hi: HINDI_TODO },
    {
      en: "I agree to be contacted by CS ARORA about my enquiry.",
      hi: HINDI_TODO,
    },
  ],
  waitlistTitle: { en: "Course waitlist form", hi: HINDI_TODO },
  waitlistFields: [
    { en: "Full name", hi: HINDI_TODO },
    { en: "Mobile number", hi: HINDI_TODO },
    { en: "Course of interest", hi: HINDI_TODO },
  ],
  contactTitle: { en: "Contact form", hi: HINDI_TODO },
  contactFields: [
    { en: "Name", hi: HINDI_TODO },
    { en: "Mobile number", hi: HINDI_TODO },
    { en: "Message", hi: HINDI_TODO },
    {
      en: "I agree to be contacted by CS ARORA about my message.",
      hi: HINDI_TODO,
    },
  ],
  antiSpam: {
    en: "Each form also has a hidden anti-spam field. It is used only to discard automated submissions.",
    hi: HINDI_TODO,
  },
  purposeTitle: { en: "Why this information is collected", hi: HINDI_TODO },
  purposeBody: {
    en: "The details are used to respond to your enquiry, discuss project documentation and contact you about messages or batches during office hours ({hours}).",
    hi: HINDI_TODO,
  },
  notSoldTitle: { en: "Your data is not sold", hi: HINDI_TODO },
  notSoldBody: { en: "Your data is not sold.", hi: HINDI_TODO },
  deletionTitle: { en: "Deletion requests", hi: HINDI_TODO },
  deletionBody: {
    en: "To request deletion of your details, email {email}.",
    hi: HINDI_TODO,
  },
};

export const terms: TermsContent = {
  reviewLine: LEGAL_REVIEW_LINE,
  title: { en: "Terms of use", hi: HINDI_TODO },
  backHome: { en: "Back to home", hi: HINDI_TODO },
  intro: {
    en: "Please read these terms before using the website.",
    hi: HINDI_TODO,
  },
  guidanceTitle: { en: "Guidance only", hi: HINDI_TODO },
  guidanceBody: {
    en: "Information and guidance on this website are for your project and scheme questions.",
    hi: HINDI_TODO,
  },
  noGuaranteeTitle: { en: "No guarantee", hi: HINDI_TODO },
  noGuaranteeBody: {
    en: "There is no guarantee of loan sanction or subsidy. Loan sanction is at the sole discretion of the bank or agency.",
    hi: HINDI_TODO,
  },
  courseAccessTitle: { en: "Course access", hi: HINDI_TODO },
  courseAccessTodo: { en: "[[TODO: course access terms]]", hi: HINDI_TODO },
};

export const refundPolicy: RefundPolicyContent = {
  reviewLine: LEGAL_REVIEW_LINE,
  title: { en: "Refund policy", hi: HINDI_TODO },
  detailsTodo: {
    en: "[[TODO: refund terms decided by Mr Arora]]",
    hi: HINDI_TODO,
  },
  backHome: { en: "Back to home", hi: HINDI_TODO },
};

export const legalNav: NavItem[] = [
  { label: { en: "Privacy policy", hi: HINDI_TODO }, href: "/privacy" },
  { label: { en: "Terms of use", hi: HINDI_TODO }, href: "/terms" },
  { label: { en: "Refund policy", hi: HINDI_TODO }, href: "/refund-policy" },
];

export const notFoundPage: NotFoundContent = {
  title: { en: "Page not found", hi: HINDI_TODO },
  body: { en: "This page could not be found.", hi: HINDI_TODO },
  homeLabel: { en: "Home", hi: HINDI_TODO },
  projectFinanceLabel: { en: "Project Finance", hi: HINDI_TODO },
  contactLabel: { en: "Contact", hi: HINDI_TODO },
};

export type SeoRouteContent = {
  title: string;
  description: string;
};

export type SeoContent = {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteName: string;
  fallbackSiteUrl: string;
  ogType: "website";
  twitterCard: "summary_large_image";
  ogImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
    type: string;
  };
  paths: Record<
    | "home"
    | "about"
    | "book"
    | "contact"
    | "courses"
    | "projectFinance"
    | "services"
    | "privacy"
    | "terms"
    | "refundPolicy"
    | "notFound",
    string
  >;
  routes: Record<
    | "home"
    | "about"
    | "book"
    | "contact"
    | "courses"
    | "projectFinance"
    | "services"
    | "privacy"
    | "terms"
    | "refundPolicy"
    | "notFound",
    SeoRouteContent
  >;
  structured: {
    businessOpens: string;
    businessCloses: string;
    foundingDate: string;
    sameAs: string[];
  };
};

const verifiedSocialProfileNames = ["LinkedIn", "Medium", "IndiaMART", "GlobalLinker"];

export const seo: SeoContent = {
  defaultTitle: business.firm.en,
  titleTemplate: "%s | CS Arora, Prayagraj",
  defaultDescription: footer.about.en,
  siteName: business.firm.en,
  fallbackSiteUrl: "https://example.invalid",
  ogType: "website",
  twitterCard: "summary_large_image",
  ogImage: {
    url: "/images/og-image.jpg",
    alt: "C.S. Arora — Project Reports and MSME Finance, Prayagraj",
    width: 1200,
    height: 630,
    type: "image/jpeg",
  },
  paths: {
    home: "/",
    about: "/about/",
    book: "/book/",
    contact: "/contact/",
    courses: "/courses/",
    projectFinance: "/project-finance/",
    services: "/services/",
    privacy: "/privacy/",
    terms: "/terms/",
    refundPolicy: "/refund-policy/",
    notFound: "/404/",
  },
  routes: {
    home: {
      title: "Project Reports and MSME Finance, Prayagraj",
      description: home.heroSubline.en,
    },
    about: {
      title: aboutPage.heroTitle.en,
      description: aboutPage.bio.en,
    },
    book: {
      title: book.title.en,
      description: bookPage.whoFor.en,
    },
    contact: {
      title: contactPage.heroTitle.en,
      description: "Call, WhatsApp, email or use the form below.",
    },
    courses: {
      title: coursesPage.heroTitle.en,
      description: coursesPage.heroSubtitle.en,
    },
    projectFinance: {
      title: projectFinance.heroEyebrow.en,
      description: projectFinance.heroSubline.en,
    },
    services: {
      title: servicesPage.heroTitle.en,
      description: servicesPage.heroSubtitle.en,
    },
    privacy: {
      title: privacyPolicy.title.en,
      description: privacyPolicy.intro.en,
    },
    terms: {
      title: terms.title.en,
      description: terms.intro.en,
    },
    refundPolicy: {
      title: refundPolicy.title.en,
      description: refundPolicy.title.en,
    },
    notFound: {
      title: notFoundPage.title.en,
      description: notFoundPage.body.en,
    },
  },
  structured: {
    businessOpens: "10:00",
    businessCloses: "17:00",
    foundingDate: "2000",
    sameAs: socials
      .filter((social) => verifiedSocialProfileNames.includes(social.name.en))
      .map((social) => social.url),
  },
};
