/**
 * Facts that appear on more than one page. Deliberately not translated - these
 * are names, numbers and addresses that read the same in every locale.
 */

export const SITE = {
  name: 'PL Real Estate',
  wordmark: 'PL Real Estate by Patrick Landuyt',

  address: {
    street: 'Nazarethstraat 6',
    city: 'De Pinte',
    postalCode: '9840',
    country: 'België',
  },

  /** Displayed as typed; `tel:` needs the punctuation stripped. */
  phone: '(+32) 477 624 790',
  phoneHref: 'tel:+32477624790',

  email: 'patrick.landuyt@pl-realestate.com',
  get emailHref() {
    return `mailto:${this.email}`;
  },

  offices: [
    'De Pinte',
    'Sint-Martens-Latem',
    'Brussel',
    'Antwerpen',
    'Brugge',
    'Knokke-Heist',
  ],

  social: {
    linkedin: 'https://www.linkedin.com/in/patrick-landuyt-a3062a19/',
    luxevastgoed: 'https://www.luxevastgoed.be/',
  },

  /** Regulatory details required on a Belgian estate agent's site. */
  legal: {
    role: 'Zaakvoerder',
    profession: 'Vastgoedmakelaar bemiddelaar',
    bivNumber: '50.38.58',
    companyNumber: '0865.666.008 – CommV MASD',
    vat: 'BE0865.666.008',
    thirdPartyAccount: 'BNP Parisbas Fortis: BE61 0016 9111 9117',
    insurance: 'nv AXA Belgium (polis nr 730.390.160)',
    supervisor: 'BIV, Luxemburgstraat 16B te 1000 Brussel',
    supervisorEmail: 'info@biv.be',
    supervisorPhone: '02/505.38.50',
    codeOfConduct: 'www.biv.be/plichtenleer',
    codeOfConductHref: 'https://www.biv.be/plichtenleer',
  },
} as const;
