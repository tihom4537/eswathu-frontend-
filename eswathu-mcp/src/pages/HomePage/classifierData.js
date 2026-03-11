// E-Swathu Property Classification — Questionnaire Data
// Ported from property-classifier-logic (1).html

/**
 * OPTIONAL_DOCS — maps classification code to an array of doc indices
 * that are NOT mandatory (no red *). All other doc indices are mandatory.
 * Empty means all docs for all classifications are mandatory by default.
 */
export const OPTIONAL_DOCS = {
  // e.g. '11A-1': [2]  ← 3rd doc is optional for 11A-1
};

export const DOCS = {
  '11A-1': [
    'Dishank / Tahsildar Village Station Map',
    'Encumbrance Certificate (Form 15)',
    'Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed (Hakku Patra) / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange',
  ],
  '11A-2': [
    'Title Deed of the Government / Possession Certificate / Sanction Order of Corporation or Board',
    'Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Deed (Mention)',
  ],
  '11A-3': [
    'Land Conversion Order Certificate',
    'Preliminary Layout Approval and Site Release Order / Final Layout Approval and Site Release Order',
    'Approved Layout Plan',
  ],
  '11A-4': [
    'Land Conversion Order Certificate',
    'Confirmation Letter from the competent authority outside the Local Planning Area',
    'Approved Layout Plan of Group / Mandal Panchayat',
  ],
  '11A-5': [
    'Land Conversion Order Certificate',
    'Approved Layout Plan',
  ],
  '11A-6': [
    'Jamabandi Register / Mutation Register',
  ],
  '11A-7': [
    'KIADB / KSSIDC Land Acquisition Certificate',
    'Industrial Area Layout Plan',
    'Industrial Site Layout Plan',
    'Industrial Site Allotment Letter',
  ],
  '11A-8': [
    'Land Conversion Order Certificate',
    'Gram Panchayat Building Permit / Gram Panchayat Approved Building Plan',
  ],
  '11A-9': [
    'Government Title Deed / Possession Certificate / Sanction Order / Certificate of Government',
    'Encumbrance Certificate (Form 15/16)',
  ],
  '11A-10': [
    'Government Title Deed / Possession Certificate',
    'Approved Layout Plan',
  ],
  '11A-11': [
    'Endorsement Letter of the Tahsildar / Land Conversion Order',
    'Plan of Converted Land / Pahani',
  ],
  '11A-12': [
    'Land Conversion Order',
    'Preliminary Layout Approval and Site Release Order / Final Layout Approval and Site Release Order',
    'Approved Layout Plan',
    'Declaration Letter of competent authority for land located outside the Local Planning Area',
  ],
  '11A-14': [
    'Government Title Deed / Possession Certificate / Sanction Order / Certificate of Government',
    'Encumbrance Certificate (Form 15/16)',
  ],
  '11B-1': [
    'Registered Deed / Tax Payment Receipt (Before: 07.04.2025)',
    'Electricity Bill (Before: 07.04.2025)',
    'RTC',
    'Encumbrance Certificate (EC)',
  ],
  '11B-2': [
    'Registered Deed',
    'RTC',
    'Encumbrance Certificate (EC)',
  ],
  '11B-3': [
    'Registered Deed',
    'Land Conversion Order',
    'Layout Approved Order',
    'Approved Layout Plan',
    'Site Release Order',
    'Encumbrance Certificate (EC)',
  ],
  '11B-4': [
    'RTC',
    'Registered Relinquishment Deed',
    'Encumbrance Certificate (EC)',
  ],
  '11B-5': [
    'Land Conversion Order / Sanction Order',
  ],
};

export const nodes = {
  q_who: {
    type: 'question',
    label: 'Getting Started',
    question: 'Which of the following best describes you?',
    options: [
      {
        text: 'An Individual or organisation',
        next: 'q_region',
      },
      {
        text: 'Govt. property',
        next: 'q_govt_type',
      },
      {
        text: 'Industry',
        sub: 'KIADB / KSSIDC — Karnataka Industrial Areas Development Board / Karnataka State Small Industries Development Corporation',
        next: 'r_11a7',
      },
    ],
  },

  q_govt_type: {
    type: 'question',
    label: 'Government Property',
    question: 'Which type of government property is this?',
    options: [
      {
        text: 'Sites or Buildings owned by Central Government / State Government / Local Bodies within the GP (region)',
        next: 'r_11a13',
      },
    ],
  },

  q_region: {
    type: 'question',
    label: 'Region',
    question: 'What region does your property fall under?',
    options: [
      {
        text: 'Property lies in Gram Tana region',
        next: 'r_11a1',
      },
      {
        text: 'Property with a Podi / Hissa number according to registered Partition Deed (in Udupi / Dakshina Kannada district)',
        next: 'q_partition_deed',
      },
      {
        text: 'Property is maintained under Notified Area Committee',
        next: 'r_11a6',
      },
      {
        text: 'None of the above',
        next: 'q_govt_scheme',
      },
    ],
  },

  q_partition_deed: {
    type: 'question',
    label: 'Partition Deed',
    question: 'Do you have a Partition Deed?',
    options: [
      { text: 'Yes', next: 'r_11a11' },
      { text: 'No', next: 'q_govt_scheme' },
    ],
  },

  q_govt_scheme: {
    type: 'question',
    label: 'Government Scheme',
    question: 'Was your property sanctioned under any government scheme?',
    options: [
      { text: 'Yes', next: 'q_scheme_type' },
      { text: 'No', next: 'q_converted_layout' },
    ],
  },

  q_scheme_type: {
    type: 'question',
    label: 'Scheme Type',
    question: 'Which type of Govt. Grant / scheme is your property under?',
    options: [
      {
        text: 'Sec 94C / 94CC / 94D – Karnataka Land Revenue Act, 1964',
        next: 'r_11a9',
      },
      {
        text: 'Rehabilitation (Dam / Flood)',
        next: 'r_11a10',
      },
      {
        text: 'Sec 38A – Karnataka Land Reforms Act, 1961',
        next: 'r_11a14',
      },
      {
        text: 'Housing Schemes (like RGRHCL)',
        next: 'r_11a2',
      },
      {
        text: 'Sites or Buildings of Corporation / Board / Limited / Authority',
        next: 'r_11a15',
      },
    ],
  },

  q_converted_layout: {
    type: 'question',
    label: 'Conversion & Layout',
    question: 'Answer both: (1) Has the land been converted? (2) Does it have a layout plan / building permit?',
    options: [
      {
        text: 'The land has been converted and it has a layout plan / building permit',
        next: 'q_site_or_building_yes',
      },
      {
        text: 'Converted or non-converted land with no layout plan',
        next: 'q_property_type_no',
      },
    ],
  },

  q_site_or_building_yes: {
    type: 'question',
    label: 'Property Type',
    question: 'Is your property a site or a building?',
    options: [
      { text: 'Site', next: 'q_approved_by' },
      { text: 'Building', next: 'q_building_permit' },
    ],
  },

  q_building_permit: {
    type: 'question',
    label: 'Building Permit',
    question: 'Do you have a building permit?',
    options: [
      { text: 'Yes', next: 'q_approved_by' },
      { text: 'No', next: 'r_11b3' },
    ],
  },

  q_approved_by: {
    type: 'question',
    label: 'Approval Authority',
    question: 'Who approved the layout / building?',
    options: [
      {
        text: 'Urban Development Authority / Local Planning Authority / Gram Panchayat',
        next: 'r_11a3',
      },
      {
        text: 'Group / Mandal Panchayat',
        next: 'q_inside_lpa',
      },
    ],
  },

  q_inside_lpa: {
    type: 'question',
    label: 'Local Planning Area',
    question: 'Is it inside or outside the Local Planning Area?',
    options: [
      { text: 'Outside', next: 'q_when_approved_outside' },
      { text: 'Inside', next: 'q_when_approved_inside' },
    ],
  },

  q_when_approved_outside: {
    type: 'question',
    label: 'Approval Period',
    question: 'When was it approved? (Outside Local Planning Area)',
    options: [
      { text: 'From 11.11.2014 to 10.01.2025', next: 'r_11a12' },
      { text: 'Before 11.11.2014', next: 'r_11a4' },
    ],
  },

  q_when_approved_inside: {
    type: 'question',
    label: 'Approval Period',
    question: 'When was it approved? (Inside Local Planning Area)',
    options: [
      { text: 'Before 16.11.1992', next: 'r_11a5' },
      { text: 'Between 16.11.1992 and 14.06.2013', next: 'r_11a8' },
    ],
  },

  q_property_type_no: {
    type: 'question',
    label: 'Property Type',
    question: 'Choose if your property is a site / site to be converted, a building, or Civic Amenities (CA) / Parks / Roads',
    options: [
      { text: 'Site / Site to be converted', next: 'q_single_layout' },
      { text: 'Building', next: 'r_11b1' },
      { text: 'Civic Amenities (CA) / Parks / Roads', next: 'r_11b4' },
    ],
  },

  q_single_layout: {
    type: 'question',
    label: 'Layout Plan',
    question: 'Do you have a single layout plan?',
    options: [
      { text: 'Yes', next: 'r_11b5' },
      { text: 'No', next: 'r_11b2' },
    ],
  },

  // ── Results ──────────────────────────────────────────────

  r_11a1:  { type: 'result', code: '11A-1',  title: 'Grama Tana' },
  r_11a2:  { type: 'result', code: '11A-2',  title: 'Properties sanctioned under Housing Scheme of Government Housing Corporation / Housing Board' },
  r_11a3:  { type: 'result', code: '11A-3',  title: "Layout approved property of Urban Development Authority in Local Planning Area and Local Planning Authority's Layout Approval outside Local Planning Area" },
  r_11a4:  { type: 'result', code: '11A-4',  title: 'Layout approved property of Group / Mandal Panchayat on the outside of the Local Planning Area before 11.11.2014' },
  r_11a5:  { type: 'result', code: '11A-5',  title: 'Property approved by the Group / Mandal Panchayat before 16.11.1992 in the Local Planning Area' },
  r_11a6:  { type: 'result', code: '11A-6',  title: 'Property maintained in Notified Area Committee / Notified Area Property prior to the period of Mandal Panchayat' },
  r_11a7:  { type: 'result', code: '11A-7',  title: 'KIADB / KSSIDC Industrial Layout Approved Property' },
  r_11a8:  { type: 'result', code: '11A-8',  title: 'Converted land property of constructed building after obtaining permission letter / approved building plan from Gram Panchayat between 16.11.1992 to 14.06.2013' },
  r_11a9:  { type: 'result', code: '11A-9',  title: 'Property granted under Section 94C / 94CC / 94 of the Karnataka Land Revenue Act, 1964' },
  r_11a10: { type: 'result', code: '11A-10', title: 'Rehabilitation Scheme Property' },
  r_11a11: { type: 'result', code: '11A-11', title: 'Individual family property having Podi / Hissa number according to the registered partition deed (Dakshina Kannada and Udupi district)' },
  r_11a12: { type: 'result', code: '11A-12', title: 'Gram Panchayat Layout Approved Property located Outside Local Planning Area from 11.11.2014 to 10.01.2025' },
  r_11a13: { type: 'result', code: '11A-13', title: 'Site / Building of Central Government / State Government / Local Bodies', noDoc: true },
  r_11a14: { type: 'result', code: '11A-14', title: 'Property granted under Section 38A of the Karnataka Land Reforms Act, 1961' },
  r_11a15: { type: 'result', code: '11A-15', title: 'Site or Buildings of Corporation / Board / Limited / Authority', noDoc: true },
  r_11b1:  { type: 'result', code: '11B-1',  title: 'Buildings constructed on agricultural land or on converted land in contravention of the provisions of model building bye-laws' },
  r_11b2:  { type: 'result', code: '11B-2',  title: 'Sites in converted / non-converted or agricultural land' },
  r_11b3:  { type: 'result', code: '11B-3',  title: 'Buildings constructed in the layout approved site in contravention of the provisions of the Model Building Bye-Laws or without obtaining a certificate of occupancy or completion by the competent authority' },
  r_11b4:  { type: 'result', code: '11B-4',  title: 'Sites on revenue land / converted land without layout approval, but with provision of basic amenities already transferred to the Gram Panchayat under Section 17 of the Karnataka Town & Country Planning Act, 1961, through a Relinquishment Deed' },
  r_11b5:  { type: 'result', code: '11B-5',  title: 'Converted Land / Deemed to be Converted Land (Single Site)' },
};
