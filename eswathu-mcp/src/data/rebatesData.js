// ── Section 4.3 in PropertyClassificationPage ────────────────────────────────
// First dropdown = "Category Type" column from rebates_criteria.md
export const REBATE_PROPERTY_TYPE_OPTIONS = [
  { value: 'own-residential',       label: 'Own Residential Building',                  labelKn: 'ಸ್ವಂತ ವಾಸದ ಕಟ್ಟಡ' },
  { value: 'commercial-industrial', label: 'Commercial or Industrial Building',          labelKn: 'ವಾಣಿಜ್ಯ ಅಥವಾ ಕೈಗಾರಿಕಾ ಕಟ್ಟಡ' },
  { value: 'residential-land',      label: 'Residential Land or Residential Building',  labelKn: 'ವಸತಿ ಬಡಾವಣೆಯ ಆಸ್ತಿಗಳಿಗೆ' },
  { value: 'non-residential',       label: 'Non Residential Building',                  labelKn: 'ವಾಣಿಜ್ಯೇತರ ಕಟ್ಟಡ' },
  { value: 'industrial',            label: 'Industrial Building',                        labelKn: 'ಕೈಗಾರಿಕಾ ಕಟ್ಟಡ' },
  { value: 'vacant-land',           label: 'Vacant Land',                               labelKn: 'ಖಾಲಿ ಜಮೀನು' },
  { value: 'agro-production',       label: 'Agro Based Production Unit Building',        labelKn: 'ಕೃಷಿ ಆಧಾರಿತ ಉತ್ಪಾದನಾ ಘಟಕ ಕಟ್ಟಡ' },
  { value: 'residential-building',  label: 'Residential Building',                      labelKn: 'ವಾಸದ ಕಟ್ಟಡ' },
];

// Second dropdown = "Category Details" column from rebates_criteria.md, keyed by Category Type
export const REBATE_CATEGORY_BY_TYPE = {
  'own-residential': [
    { value: 'ex-servicemen',    label: 'Ex-Servicemen',                  labelKn: 'ಮಾಜಿ ಸೈನಿಕರು' },
    { value: 'servicemen',       label: 'Servicemen',                     labelKn: 'ಸೈನಿಕರು' },
    { value: 'widows-soldiers',  label: 'Widows of Soldiers',             labelKn: 'ಮಾಜಿ ಸೈನಿಕರ ವಿಧವಾ ಮಹಿಳೆಯರು' },
    { value: 'handicapped',      label: 'Handicapped (Specially Disabled)', labelKn: 'ವಿಶೇಷ ಚೇತನರು' },
    { value: 'widows',           label: 'Widows',                         labelKn: 'ವಿಧವೆಯರು' },
    { value: 'hiv-affected',     label: 'HIV (AIDS) Affected Owner',      labelKn: 'ಹೆಚ್.ಐ.ವಿ. (ಏಡ್ಸ್) ಪೀಡಿತ ಮಾಲೀಕರು' },
    { value: 'leprosy-affected', label: 'Leprosy Affected Owner',         labelKn: 'ಕುಷ್ಠರೋಗ ಪೀಡಿತ ಮಾಲೀಕರು' },
  ],
  'commercial-industrial': [
    { value: 'womens-shg',             label: "Women's Self Help Society / Societies Registered under Government", labelKn: 'ಸರ್ಕಾರದ ಯೋಜನೆಗಳಡಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟ ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘ/ಒಕ್ಕೂಟಗಳು' },
    { value: 'handicapped-commercial', label: 'For Small Commercial / Industrial Units Run by Handicapped',       labelKn: 'ವಿಶೇಷ ಚೇತನರು ನಡೆಸುವ ಸಣ್ಣ ವಾಣಿಜ್ಯ/ಉದ್ಯಮ ಘಟಕಗಳಿಗೆ' },
  ],
  'residential-land': [
    { value: 'self-managed-civic', label: 'For Residential Estates with Self-Managed Separate Civic Facilities', labelKn: 'ಸ್ವ-ನಿರ್ವಹಣೆಯ ಪ್ರತ್ಯೇಕ ನಾಗರೀಕ ಸೌಲಭ್ಯಗಳನ್ನು ಹೊಂದಿರುವ ವಸತಿ ಬಡಾವಣೆಯ ಆಸ್ತಿಗಳಿಗೆ' },
  ],
  'non-residential': [
    { value: 'educational-institution', label: 'For Educational Institution Properties with Self-Governing Separate Civic Facilities', labelKn: 'ಸ್ವ-ನಿರ್ವಹಣೆಯ ಪ್ರತ್ಯೇಕ ನಾಗರೀಕ ಸೌಲಭ್ಯಗಳನ್ನು ಹೊಂದಿರುವ ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಯ ಆಸ್ತಿಗಳಿಗೆ' },
    { value: 'greenery-area',           label: 'For Greenery Area',                                               labelKn: 'ಹಸರೀಕರಣ ಮಾಡಿರುವ ಜಾಗಕ್ಕೆ' },
  ],
  'industrial': [
    { value: 'industrial-greening', label: 'For Areas Where Plantation / Greening Has Been Developed in Vacant Lots under Industrial / Airport Authority Jurisdiction', labelKn: 'ಕೈಗಾರಿಕೆ ಹಾಗೂ ವಿಮಾನ ನಿಲ್ದಾಣ ಪ್ರಾಧಿಕಾರಗಳ ವ್ಯಾಪ್ತಿಯ ಖಾಲಿ ಜಾಗಗಳಲ್ಲಿ ನೆಡುತೋಪು/ಹಸಿರೀಕರಣ(ಲ್ಯಾಂಡ್‌ ಸ್ಕೇಪ್)ಗಳನ್ನು ಬೆಳೆಸಿರುವ ಪ್ರದೇಶಗಳಿಗೆ' },
  ],
  'vacant-land': [
    { value: 'renewable-energy', label: 'For Remaining Unused Vacant Land Acquired on Lease Basis for Renewable Energy Plant from Revenue / Forest / Mujarai Dept.', labelKn: 'ಕಂದಾಯ/ಅರಣ್ಯ/ಮುಜರಾಯಿ ಇಲಾಖೆ ಮತ್ತಿತರೆ ಸರ್ಕಾರದ ಇಲಾಖೆಗಳಿಂದ ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ ಘಟಕಕ್ಕೆ ಗುತ್ತಿಗೆ ಆಧಾರದ ಮೇಲೆ ಪಡೆದ ಉಳಿಕೆ ಖಾಲಿ ಜಮೀನುಗಳಿಗೆ' },
  ],
  'agro-production': [
    { value: 'poultry-farm', label: 'Poultry Farm — Buildings Area of up to 2000 sq.ft.', labelKn: 'ಪೌಲ್ಟ್ರಿ ಫಾರಂನ 2000 ಚ.ಅ. ವಿಸ್ತೀರ್ಣದವರೆಗಿನ ಕಟ್ಟಡಗಳಿಗೆ' },
  ],
  'residential-building': [
    { value: 'solar-power',          label: 'For Residential Buildings Fitted with Solar Power Generation Units',                         labelKn: 'ಸೌರ ವಿದ್ಯುತ್‌ ಉತ್ಪಾದನಾ ಘಟಕ ಅಳವಡಿಸಿದ ವಾಸದ ಕಟ್ಟಡಗಳಿಗೆ' },
    { value: 'rainwater-harvesting', label: 'Residential Building Equipped with Raw Garbage Treatment / Rain Water Harvesting',            labelKn: 'ಹಸಿ ಕಸ ಸಂಸ್ಕರಣೆ, ಮಳೆ ನೀರು ಕೋಯ್ಲು ಅಳವಡಿಸಿದ ವಾಸದ ಕಟ್ಟಡ' },
    { value: 'handloom',             label: 'A Handloom Operated in a Dwelling House',                                                    labelKn: 'ವಾಸದ ಮನೆಯಲ್ಲಿ ನಡೆಸಲಾಗುವ ಕೈಮಗ್ಗ' },
    { value: 'cottage-industry',     label: 'A Cottage Industry Carried Out in a Residential Home',                                       labelKn: 'ವಾಸದ ಮನೆಯಲ್ಲಿ ನಡೆಸಲಾಗುವ ಗುಡಿ ಕೈಗಾರಿಕೆ' },
    { value: 'agro-activity',        label: 'An Agricultural Based Production Activity Carried Out in a Dwelling House',                   labelKn: 'ವಾಸದ ಮನೆಯಲ್ಲಿ ನಡೆಸಲಾಗುವ ಕೃಷಿ ಅಧಾರಿತ ಉತ್ಪಾದನಾ ಚಟುವಟಿಕೆ' },
  ],
};

// Documents required per Category Detail (for the doc table in Section 4.3)
export const REBATE_DOCS_BY_DETAIL = {
  'ex-servicemen':    [{ name: 'Retirement Salary Certificate', nameKn: 'ನಿವೃತ್ತಿ ವೇತನ ಪ್ರಮಾಣ ಪತ್ರ', required: 'COMPULSORY' }, { name: 'Copy of Discharge Book', nameKn: 'ಡಿಸ್ಚಾರ್ಜ್‌ ಪುಸ್ತಕದ ಪ್ರತಿ', required: 'COMPULSORY' }],
  'servicemen':       [{ name: 'Retirement Salary Certificate', nameKn: 'ನಿವೃತ್ತಿ ವೇತನ ಪ್ರಮಾಣ ಪತ್ರ', required: 'COMPULSORY' }, { name: 'Copy of Discharge Book', nameKn: 'ಡಿಸ್ಚಾರ್ಜ್‌ ಪುಸ್ತಕದ ಪ್ರತಿ', required: 'COMPULSORY' }],
  'widows-soldiers':  [{ name: 'Retirement Salary Certificate', nameKn: 'ನಿವೃತ್ತಿ ವೇತನ ಪ್ರಮಾಣ ಪತ್ರ', required: 'COMPULSORY' }, { name: 'Copy of Discharge Book', nameKn: 'ಡಿಸ್ಚಾರ್ಜ್‌ ಪುಸ್ತಕದ ಪ್ರತಿ', required: 'COMPULSORY' }, { name: 'Widow Certificate', nameKn: 'Widow Certificate', required: 'COMPULSORY' }],
  'handicapped':      [{ name: 'District Surgeon Certificate', nameKn: 'District Surgeon Certificate', required: 'COMPULSORY' }],
  'widows':           [{ name: 'Widow Certificate from Competent Authority (Revenue Department) Tehsildar', nameKn: 'ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರ (ಕಂದಾಯ ಇಲಾಖೆ) ತಹಸಿಲ್ದಾರರಿಂದ ಪಡೆದ ವಿಧವೆ ಧೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }],
  'hiv-affected':     [{ name: 'District Surgeon Certificate', nameKn: 'District Surgeon Certificate', required: 'COMPULSORY' }],
  'leprosy-affected': [{ name: 'District Surgeon Certificate', nameKn: 'District Surgeon Certificate', required: 'COMPULSORY' }],
  'womens-shg':             [{ name: 'N. R. L. M. / Registered Copy under Sanjeevini Scheme', nameKn: 'ಎನ್‌. ಆರ್‌. ಎಲ್‌. ಎಂ. /ಸಂಜೀವಿನಿ ಯೋಜನೆಯಡಿ ನೋಂದಾಯಿತ ಪ್ರತಿ', required: 'COMPULSORY' }],
  'handicapped-commercial': [{ name: 'Certificate from Competent Medical Officer in Respect of Differently-Abled Persons', nameKn: 'ವಿಶೇಷ ಚೇತನರು ನಡೆಸುವ ಸಣ್ಣ ವಾಣಿಜ್ಯ/ಉದ್ಯಮ - ವಿಕಲಚೇತನರಿಗೆ ಸಂಬಂದಿಸಿದಂತೆ ಸಕ್ಷಮ ವೈದ್ಯಾಧಿಕಾರಿಗಳಿಂದ ಧೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }],
  'self-managed-civic':       [{ name: 'Certificate of Executive Officer', nameKn: 'ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿಯ ದೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }],
  'educational-institution':  [{ name: 'Certificate of Executive Officer', nameKn: 'ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿಯ ದೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }, { name: 'Approved Plan', nameKn: 'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ', required: 'COMPULSORY' }],
  'greenery-area':            [{ name: 'Certificate of Executive Officer', nameKn: 'ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿಯ ದೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }, { name: 'Approved Plan', nameKn: 'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ', required: 'COMPULSORY' }],
  'industrial-greening': [{ name: 'Approved Plan', nameKn: 'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ', required: 'COMPULSORY' }],
  'renewable-energy':    [{ name: 'Official Memorandum of Concerned Department', nameKn: 'ಸಂಬಂಧಿಸಿದ ಇಲಾಖೆಯ ಅಧಿಕೃತ ಜ್ಞಾಪನ ಪತ್ರ', required: 'COMPULSORY' }, { name: 'Approved Plan', nameKn: 'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ', required: 'COMPULSORY' }],
  'poultry-farm':           [{ name: 'Certificate of Animal Husbandry Department', nameKn: 'ಪಶುಸಂಗೋಪನಾ ಇಲಾಖೆಯ ದೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }],
  'solar-power':            [{ name: 'Discount Certificate Issued by ESCOMS on Electricity Bill', nameKn: 'ESCOMS ನಿಂದ ವಿದ್ಯುತ್‌ ಬಿಲ್ಲಿನ ಮೇಲೆ ನೀಡಿರುವ ರಿಯಾಯಿತಿ ಪ್ರಮಾಣ ಪತ್ರ', required: 'COMPULSORY' }],
  'rainwater-harvesting':   [{ name: 'Certificate of Panchayat Development Officer', nameKn: 'ಪಂಚಾಯಿತಿ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಯ ದೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }],
  'handloom':               [{ name: 'Certificate of Concerned Department', nameKn: 'ಸಂಬಂಧಿಸಿದ ಇಲಾಖೆಯ ದೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }],
  'cottage-industry':       [{ name: 'Certificate of Concerned Department', nameKn: 'ಸಂಬಂಧಿಸಿದ ಇಲಾಖೆಯ ದೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }],
  'agro-activity':          [{ name: 'Certificate of Concerned Department', nameKn: 'ಸಂಬಂಧಿಸಿದ ಇಲಾಖೆಯ ದೃಢೀಕರಣ ಪತ್ರ', required: 'COMPULSORY' }],
};

// Exemption amount per Category Detail
export const REBATE_EXEMPTION_BY_DETAIL = {
  'ex-servicemen':           '50%',
  'servicemen':              '50%',
  'widows-soldiers':         '50%',
  'handicapped':             '50%',
  'widows':                  '50%',
  'hiv-affected':            '50%',
  'leprosy-affected':        '50%',
  'womens-shg':              '50%',
  'handicapped-commercial':  '50%',
  'self-managed-civic':      '50%',
  'educational-institution': '25%',
  'greenery-area':           '25%',
  'industrial-greening':     '100% discount on Greenery Land (not for the Building)',
  'renewable-energy':        '100% Discount on Land (not for Building/Plant)',
  'solar-power':             '10%',
  'rainwater-harvesting':    '10%',
  'poultry-farm':            '100% on Building up to 2000 sq. Feet; after 2000 sq. Feet Building tax rates applicable',
  'handloom':                'Considered as Commercial instead of Residential (itself is a rebate)',
  'cottage-industry':        'Considered as Commercial instead of Residential (itself is a rebate)',
  'agro-activity':           'Considered as Commercial instead of Residential (itself is a rebate)',
};

/**
 * Rebate exemption amounts per category, taken verbatim from rebates_criteria.md.
 * Keys are the category value (cat1 … cat11).
 */
export const REBATE_EXEMPTIONS = {
  cat1:  '50%',
  cat2:  '50%',
  cat3:  '50%',
  cat4:  '50%',
  cat5:  '25%',
  cat6:  '100% discount on Greenery Land (not for the Building)',
  cat7:  '100% Discount on Land (not for Building/Plant)',
  cat8:  '10%',
  cat9:  '10%',
  cat10: '100% on Building up to 2000 sq. Feet after 2000 sq. Feet Building tax rates applicable',
  cat11: 'Considered as Commercial instead of Residential itself is a rebate',
};

/**
 * Required documents per rebate selection key.
 * Keys match the value used in the sub-category dropdown (for categories with
 * sub-categories) or the category dropdown (for categories with a single item).
 *
 * Each entry has { en: string[], kn: string[] }.
 * Where the MD file does not provide a Kannada name, the English name is reused.
 *
 * Source: rebates_criteria.md — strictly no invented names.
 */
export const REBATE_DOCS = {

  // ── Category 1 ────────────────────────────────────────────────────────────
  // Ex-Servicemen & Servicemen share the same two documents (Servicemen cell
  // was blank in the source table, indicating same docs as the sibling row).
  rebate_cat1_sub1: {
    en: [
      'Retirement Salary Certificate',
      'Copy of Discharge Book',
    ],
    kn: [
      'ನಿವೃತ್ತಿ ವೇತನ ಪ್ರಮಾಣ ಪತ್ರ',
      'ಡಿಸ್ಚಾರ್ಜ್‌ ಪುಸ್ತಕದ ಪ್ರತಿ',
    ],
  },
  rebate_cat1_sub2: {
    en: [
      'Retirement Salary Certificate',
      'Copy of Discharge Book',
    ],
    kn: [
      'ನಿವೃತ್ತಿ ವೇತನ ಪ್ರಮಾಣ ಪತ್ರ',
      'ಡಿಸ್ಚಾರ್ಜ್‌ ಪುಸ್ತಕದ ಪ್ರತಿ',
    ],
  },
  rebate_cat1_sub3: {
    en: [
      'Retirement Salary Certificate',
      'Copy of Discharge Book',
      'Widow Certificate',
    ],
    kn: [
      'ನಿವೃತ್ತಿ ವೇತನ ಪ್ರಮಾಣ ಪತ್ರ',
      'ಡಿಸ್ಚಾರ್ಜ್‌ ಪುಸ್ತಕದ ಪ್ರತಿ',
      'Widow Certificate',            // No Kannada provided in MD
    ],
  },

  // ── Category 2 ────────────────────────────────────────────────────────────
  rebate_cat2_sub1: {
    en: ['District Surgeon Certificate'],
    kn: ['District Surgeon Certificate'],  // No Kannada provided in MD
  },
  rebate_cat2_sub2: {
    en: [
      'Widow Certificate from Competent Authority (Revenue Department) Tehsildar',
    ],
    kn: [
      'ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರ (ಕಂದಾಯ ಇಲಾಖೆ) ತಹಸಿಲ್ದಾರರಿಂದ ಪಡೆದ ವಿಧವೆ ಧೃಢೀಕರಣ ಪತ್ರ',
    ],
  },
  rebate_cat2_sub3: {
    en: ['District Surgeon Certificate'],
    kn: ['District Surgeon Certificate'],  // No Kannada provided in MD
  },
  rebate_cat2_sub4: {
    en: ['District Surgeon Certificate'],
    kn: ['District Surgeon Certificate'],  // No Kannada provided in MD
  },

  // ── Category 3 ────────────────────────────────────────────────────────────
  rebate_cat3_sub1: {
    en: ['N. R. L. M. / Registered copy under Sanjeevini scheme'],
    kn: ['ಎನ್‌. ಆರ್‌. ಎಲ್‌. ಎಂ. /ಸಂಜೀವಿನಿ ಯೋಜನೆಯಡಿ ನೋಂದಾಯಿತ ಪ್ರತಿ'],
  },
  rebate_cat3_sub2: {
    en: [
      'Small Business/Industry run by differently-abled persons - Certificate from competent medical officer in respect of differently-abled persons',
    ],
    kn: [
      'ವಿಶೇಷ ಚೇತನರು ನಡೆಸುವ ಸಣ್ಣ ವಾಣಿಜ್ಯ/ಉದ್ಯಮ - ವಿಕಲಚೇತನರಿಗೆ ಸಂಬಂದಿಸಿದಂತೆ ಸಕ್ಷಮ ವೈದ್ಯಾಧಿಕಾರಿಗಳಿಂದ ಧೃಢೀಕರಣ ಪತ್ರ',
    ],
  },

  // ── Category 4 (no sub-categories) ───────────────────────────────────────
  cat4: {
    en: ['Certificate of Executive Officer'],
    kn: ['ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿಯ ದೃಢೀಕರಣ ಪತ್ರ'],
  },

  // ── Category 5 ────────────────────────────────────────────────────────────
  rebate_cat5_sub1: {
    en: [
      'Certificate of Executive Officer',
      'Approved Plan',
    ],
    kn: [
      'ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿಯ ದೃಢೀಕರಣ ಪತ್ರ',
      'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ',
    ],
  },
  rebate_cat5_sub2: {
    en: [
      'Certificate of Executive Officer',
      'Approved Plan',
    ],
    kn: [
      'ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿಯ ದೃಢೀಕರಣ ಪತ್ರ',
      'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ',
    ],
  },

  // ── Category 6 (no sub-categories) ───────────────────────────────────────
  cat6: {
    en: ['Approved Plan'],
    kn: ['ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ'],
  },

  // ── Category 7 (no sub-categories) ───────────────────────────────────────
  cat7: {
    en: [
      'Official memorandum of concerned department',
      'Approved Plan',
    ],
    kn: [
      'ಸಂಬಂಧಿಸಿದ ಇಲಾಖೆಯ ಅಧಿಕೃತ ಜ್ಞಾಪನ ಪತ್ರ',
      'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ',
    ],
  },

  // ── Category 8 (no sub-categories) ───────────────────────────────────────
  cat8: {
    en: ['Discount certificate issued by ESCOMS on electricity bill'],
    kn: ['ESCOMS ನಿಂದ ವಿದ್ಯುತ್‌ ಬಿಲ್ಲಿನ ಮೇಲೆ ನೀಡಿರುವ ರಿಯಾಯಿತಿ ಪ್ರಮಾಣ ಪತ್ರ'],
  },

  // ── Category 9 (no sub-categories) ───────────────────────────────────────
  cat9: {
    en: ['Certificate of Panchayat Development Officer'],
    kn: ['ಪಂಚಾಯಿತಿ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಯ ದೃಢೀಕರಣ ಪತ್ರ'],
  },

  // ── Category 10 (no sub-categories) ──────────────────────────────────────
  cat10: {
    en: ['Certificate of Animal Husbandry Department'],
    kn: ['ಪಶುಸಂಗೋಪನಾ ಇಲಾಖೆಯ ದೃಢೀಕರಣ ಪತ್ರ'],
  },

  // ── Category 11 ───────────────────────────────────────────────────────────
  rebate_cat11_sub1: {
    en: ['Certificate of concerned department'],
    kn: ['ಸಂಬಂಧಿಸಿದ ಇಲಾಖೆಯ ದೃಢೀಕರಣ ಪತ್ರ'],
  },
  rebate_cat11_sub2: {
    en: ['Certificate of concerned department'],
    kn: ['ಸಂಬಂಧಿಸಿದ ಇಲಾಖೆಯ ದೃಢೀಕರಣ ಪತ್ರ'],
  },
  rebate_cat11_sub3: {
    en: ['Certificate of concerned department'],
    kn: ['ಸಂಬಂಧಿಸಿದ ಇಲಾಖೆಯ ದೃಢೀಕರಣ ಪತ್ರ'],
  },
};
