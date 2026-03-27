/**
 * Shared bilingual popup content for HomePage and CitizenLogin-HomePage.
 * Source: e-khata-processes.md (English | Kannada bilingual table).
 *
 * Each string value is { en: '...', kn: '...' }.
 * loc(v, lang) picks kn when available and lang === 'kn', else falls back to en.
 */

export function loc(v, lang) {
  if (!v) return '';
  if (lang === 'kn' && v.kn) return v.kn;
  return v.en ?? '';
}

const POPUP_CONTENT = {
  newEkhata: {
    title: {
      en: 'Apply for New e-Khata',
      kn: 'ಹೊಸ ಇ-ಖಾತಾ ಪಡೆಯಲು ಅರ್ಜಿ',
    },
    intro: {
      en: 'A property that does not currently hold an e-Khata must be registered when any of the following occur:',
      kn: 'ಪ್ರಸ್ತುತ ಇ-ಖಾತಾ ಇಲ್ಲದ ಆಸ್ತಿಗೆ, ಕೆಳಗಿನ ಯಾವುದಾದರೂ ಸಂದರ್ಭಗಳಲ್ಲಿ ಹೊಸ ಇ-ಖಾತಾ ನೋಂದಣಿ ಮಾಡಬೇಕು:',
    },
    items: [
      {
        label: { en: 'Ownership Transfer', kn: 'ಮಾಲೀಕತ್ವದ ವರ್ಗಾವಣೆ' },
        text: {
          en: 'When property rights are transferred via a registered Sale Deed, Gift Deed, Will (Inheritance), or Exchange Deed.',
          kn: 'ನೋಂದಾಯಿತ ಕ್ರಯ ಪತ್ರ, ದಾನ ಪತ್ರ, ಉಯಿಲು ಪತ್ರ (ಪಿತ್ರಾರ್ಜಿತ ಆಸ್ತಿ / ಪೌತಿ ಖಾತೆ) ಅಥವಾ ಅದಲು ಬದಲು ಪತ್ರದ ಮೂಲಕ ಆಸ್ತಿ ಹಕ್ಕುಗಳನ್ನು ವರ್ಗಾಯಿಸಿದಾಗ.',
        },
      },
      {
        label: { en: 'Family Division', kn: 'ಕುಟುಂಬ ವಿಭಜನೆ' },
        text: {
          en: 'When property is divided through a registered Partition Deed (Vibhaga Pathra).',
          kn: 'ನೋಂದಾಯಿತ ವಿಭಾಗ ಪತ್ರದ ಮೂಲಕ ಆಸ್ತಿ ಹಂಚಿಕೆ ಮಾಡಿದಾಗ.',
        },
      },
      {
        label: { en: 'Surrendering Rights', kn: 'ಹಕ್ಕುಗಳ ಬಿಟ್ಟುಕೊಡುವಿಕೆ' },
        text: {
          en: 'When an owner surrenders claims through a registered Relinquishment Deed (Hakkubidugade Pathra) or Release Deed.',
          kn: 'ಮಾಲೀಕರು ನೋಂದಾಯಿತ ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ ಅಥವಾ ತ್ಯಾಗ ಪತ್ರದ ಮೂಲಕ ತಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಬಿಟ್ಟುಕೊಟ್ಟಾಗ.',
        },
      },
      {
        label: { en: 'Legal / Court Mandates', kn: 'ಕಾನೂನು / ನ್ಯಾಯಾಲಯದ ಆದೇಶಗಳು' },
        text: {
          en: 'When ownership is established or changed based on a Court Order or Decree.',
          kn: 'ನ್ಯಾಯಾಲಯದ ಆದೇಶ ಅಥವಾ ತೀರ್ಪಿನ ಆಧಾರದ ಮೇಲೆ ಮಾಲೀಕತ್ವ ಸ್ಥಾಪಿಸಿದ ಅಥವಾ ಬದಲಾಯಿಸಿದಾಗ.',
        },
      },
      {
        label: { en: 'Physical Changes to Property', kn: 'ಆಸ್ತಿಯ ಭೌತಿಕ ಬದಲಾವಣೆಗಳು' },
        text: {
          en: 'When a building is newly constructed on a previously vacant site, or when there is an upgrade in the building type (e.g., from mud / sheet roof to RCC roof).',
          kn: 'ಹಿಂದೆ ಖಾಲಿ ಇದ್ದ ನಿವೇಶನದಲ್ಲಿ ಹೊಸ ಕಟ್ಟಡ ನಿರ್ಮಿಸಿದಾಗ, ಅಥವಾ ಕಟ್ಟಡದ ಮೇಲ್ಛಾವಣಿ ವಿಧ ಬದಲಾದಾಗ (ಉದಾ: ಮಣ್ಣು / ಶೀಟ್ ಮೇಲ್ಛಾವಣಿಯಿಂದ RCC ಮೇಲ್ಛಾವಣಿಗೆ).',
        },
      },
      {
        label: { en: 'Amalgamation or Bifurcation', kn: 'ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ ಅಥವಾ ವಿಭಜನೆ' },
        text: {
          en: 'When combining multiple properties into one or dividing a single property into multiple units.',
          kn: 'ಅನೇಕ ಆಸ್ತಿಗಳನ್ನು ಒಂದಾಗಿ ವಿಲೀನಗೊಳಿಸಿದಾಗ ಅಥವಾ ಒಂದು ಆಸ್ತಿಯನ್ನು ಅನೇಕ ಘಟಕಗಳಾಗಿ ವಿಭಜಿಸಿದಾಗ.',
        },
      },
      {
        label: { en: 'Change in Land Use', kn: 'ಜಮೀನಿನ ಬಳಕೆಯ ಬದಲಾವಣೆ' },
        text: {
          en: 'When a property transitions from residential to commercial use, or when agricultural land is legally transitioned via a Conversion Order.',
          kn: 'ಆಸ್ತಿ ವಾಸಯೋಗ್ಯ ಉದ್ದೇಶದಿಂದ ವಾಣಿಜ್ಯ ಉಪಯೋಗಕ್ಕೆ ಪರಿವರ್ತನೆ ಆದಾಗ, ಅಥವಾ ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶದ ಮೂಲಕ ಕೃಷಿ ಜಮೀನನ್ನು ಕಾನೂನುಬದ್ಧವಾಗಿ ಪರಿವರ್ತಿಸಿದಾಗ.',
        },
      },
      {
        label: { en: 'Statutory Grants', kn: 'ಶಾಸನಬದ್ಧ ಮಂಜೂರಾತಿಗಳು' },
        text: {
          en: 'When the government grants ownership rights under Sections 94C, 94CC, or 94D of the Land Revenue Act 1964 or Section 38A of the Karnataka Land Reforms Act 1961.',
          kn: 'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮ 1964ರ ಪ್ರಕರಣ 94ಸಿ, 94ಸಿಸಿ, ಅಥವಾ 94ಡಿ ಅಥವಾ ಕರ್ನಾಟಕ ಭೂ-ಸುಧಾರಣಾ ಅಧಿನಿಯಮ 1961ರ ಪ್ರಕರಣ 38ಎ ರ ಅಡಿಯಲ್ಲಿ ಸರ್ಕಾರ ಆಸ್ತಿ ಹಕ್ಕು ನೀಡಿದಾಗ.',
        },
      },
    ],
  },

  pidEkhata: {
    title: {
      en: 'Apply for e-Khata for Properties with a PID',
      kn: 'ಈಗಾಗಲೇ ಪಿಐಡಿ ಸಂಖ್ಯೆ ಹೊಂದಿರುವ ಆಸ್ತಿಗಳಿಗೆ ಇ-ಖಾತಾ ಪಡೆಯಲು ಅರ್ಜಿ',
    },
    intro: {
      en: 'For properties where a Property ID (PID) exists but a digital record is not yet finalised:',
      kn: 'ಪಿಐಡಿ ಸಂಖ್ಯೆ ಇದ್ದರೂ ಇನ್ನೂ ಡಿಜಿಟಲ್ ದಾಖಲೆ ಅಂತಿಮಗೊಳಿಸದ ಆಸ್ತಿಗಳಿಗೆ:',
    },
    items: [
      {
        label: null,
        text: {
          en: 'Owners of properties currently in existing registers (Forms 9, 9A, or 11) must ensure their data is moved to the new digital database. If documents such as a Conversion Order or Technical Approval are available, the property is registered in Form 11A; otherwise it is placed in Form 11B solely for tax collection purposes.',
          kn: 'ಪ್ರಸ್ತುತ ನಮೂನೆ ೯, ೯ಎ, ಅಥವಾ ೧೧ ನಲ್ಲಿ ನೋಂದಾಯಿಸಲಾದ ಆಸ್ತಿಗಳ ಮಾಲೀಕರು ತಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಹೊಸ ಡಿಜಿಟಲ್ ದತ್ತಾಂಶಕ್ಕೆ ವರ್ಗಾಯಿಸಲಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಬೇಕು. ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಅಥವಾ ತಾಂತ್ರಿಕ ಅನುಮೋದನೆ ಲಭ್ಯವಿದ್ದರೆ ನಮೂನೆ ೧೧ಎ ನಲ್ಲಿ ನೋಂದಣಿ ಮಾಡಲಾಗುತ್ತದೆ; ಇಲ್ಲದಿದ್ದಲ್ಲಿ ಕೇವಲ ತೆರಿಗೆ ಸಂಗ್ರಹಣೆಗಾಗಿ ನಮೂನೆ ೧೧ಬಿ ಯಲ್ಲಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.',
        },
      },
    ],
  },

  newLayouts: {
    title: {
      en: 'Apply for e-Khata for New Layouts',
      kn: 'ಹೊಸ ವಿನ್ಯಾಸ ನಕ್ಷೆ ನಿವೇಶನಗಳಿಗೆ ಇ-ಖಾತಾ ಪಡೆಯಲು ಅರ್ಜಿ',
    },
    intro: {
      en: 'For a property within a new layout, apply for your e-Khata once your site has been released for registration — in either the 40% or 60% phase, and you hold your Conversion Order and Approved Layout Plan.',
      kn: 'ಹೊಸ ವಿನ್ಯಾಸದ ವ್ಯಾಪ್ತಿಯಲ್ಲಿರುವ ಆಸ್ತಿಗಾಗಿ, ನಿಮ್ಮ ನಿವೇಶನವು ನೋಂದಣಿಗೆ ಬಿಡುಗಡೆಯಾದ ನಂತರ — ಅಂದರೆ ಶೇ. 40 ಅಥವಾ ಶೇ. 60 ರ ಹಂತದಲ್ಲಿ — ಮತ್ತು ನೀವು ಭೂ-ಪರಿವರ್ತನಾ ಆದೇಶ ಪತ್ರ ಹಾಗೂ ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆಯನ್ನು ಹೊಂದಿದ್ದಾಗ ಇ-ಖಾತೆಗಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು.',
    },
    items: [
      {
        label: { en: 'Phase 1 — Initial Registration (40% of Sites)', kn: 'ಹಂತ 1 — ಪ್ರಾರಂಭಿಕ ನೋಂದಣಿ (ಶೇ. 40 ರಷ್ಟು ನಿವೇಶನಗಳು)' },
        text: {
          en: 'An e-Khata application may be initiated for the first 40% of sites once the developer obtains Preliminary Technical Layout Approval from the competent planning authority. The layout plan — including roads, parks, and civic amenity areas — must have been verified, and the transfer of public areas completed through a registered Relinquishment Deed.',
          kn: 'ಅಭಿವೃದ್ಧಿಪಡಿಸುವವರು (Developer) ಸಕ್ಷಮ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ಪ್ರಾಥಮಿಕ ವಿನ್ಯಾಸ ಅನುಮೋದನೆ ಪಡೆದ ನಂತರ ಮೊದಲ ಶೇ. 40 ರಷ್ಟು ನಿವೇಶನಗಳಿಗೆ ಇ-ಖಾತೆ ಪ್ರಕ್ರಿಯೆ ಪ್ರಾರಂಭಿಸಬಹುದು. ವಿನ್ಯಾಸ ನಕ್ಷೆಯಲ್ಲಿನ ರಸ್ತೆ, ಉದ್ಯಾನ, ನಾಗರಿಕ ಸೌಲಭ್ಯಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ನೋಂದಾಯಿತ ಪರಿತ್ಯಾಜನ ಪತ್ರದ ಮೂಲಕ ವರ್ಗಾಯಿಸಿದ ನಂತರ ನಿವೇಶನಗಳನ್ನು ದಾಖಲಿಸಲಾಗುತ್ತದೆ.',
        },
      },
      {
        label: { en: 'Phase 2 — Final Registration (Remaining 60% of Sites)', kn: 'ಹಂತ 2 — ಅಂತಿಮ ನೋಂದಣಿ (ಉಳಿದ ಶೇ. 60 ರಷ್ಟು ನಿವೇಶನಗಳು)' },
        text: {
          en: 'The remaining 60% of sites are eligible only after all basic infrastructure works (roads, water supply, electricity) are completed. The developer must submit a Completion Certificate and a Defect Liability Period declaration. Upon issuance of Final Technical Layout Approval (Form XII), the Gram Panchayat must record the remaining sites within one month.',
          kn: 'ಎಲ್ಲಾ ಮೂಲಭೂತ ಸೌಕರ್ಯ ಕಾಮಗಾರಿಗಳು (ರಸ್ತೆ, ನೀರು, ವಿದ್ಯುತ್) ಪೂರ್ಣಗೊಂಡ ನಂತರ ಉಳಿದ ಶೇ. 60 ನಿವೇಶನಗಳು ಅರ್ಹವಾಗುತ್ತವೆ. ಕಾಮಗಾರಿ ಪೂರ್ಣಗೊಂಡ ಪ್ರಮಾಣ ಪತ್ರ ಮತ್ತು ಅಂತಿಮ ತಾಂತ್ರಿಕ ವಿನ್ಯಾಸ ಅನುಮೋದನೆ (ನಮೂನೆ-XII) ದೊರೆತ ಒಂದು ತಿಂಗಳೊಳಗೆ ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯು ನಿವೇಶನಗಳನ್ನು ದಾಖಲಿಸಬೇಕು.',
        },
      },
      {
        label: { en: 'Registration in Form 11A', kn: 'ನಮೂನೆ-11ಎ ನಲ್ಲಿ ನೋಂದಣಿ' },
        text: {
          en: 'The applicant must hold a valid Land Conversion Order (Revenue Department) and Technical Layout Approval (Planning Authority). The Gram Panchayat Secretary conducts field inspection and document verification, with the record finalised within 15 working days. Following PDO approval, a PID is generated and the e-Khata is finalised in Form 11A.',
          kn: 'ಅರ್ಜಿದಾರರು ಕಂದಾಯ ಇಲಾಖೆಯ ಭೂ-ಪರಿವರ್ತನಾ ಆದೇಶ ಮತ್ತು ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದ ವಿನ್ಯಾಸ ಅನುಮೋದನೆ ಹೊಂದಿರಬೇಕು. ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಕಾರ್ಯದರ್ಶಿಯು 15 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ಸ್ಥಳ ಪರಿಶೀಲನೆ ಮಾಡಿ ದಾಖಲೆ ಅಂತಿಮಗೊಳಿಸಬೇಕು. PDO ಅನುಮೋದನೆಯ ನಂತರ PID ಸೃಜನೆಯಾಗಿ ನಮೂನೆ-11ಎ ನಲ್ಲಿ ಇ-ಖಾತೆ ಅಂತಿಮಗೊಳ್ಳುತ್ತದೆ.',
        },
      },
    ],
  },

  newApartments: {
    title: {
      en: 'Apply for e-Khata for New Apartments',
      kn: 'ಹೊಸ ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳಿಗೆ ಇ-ಖಾತಾ ಪಡೆಯಲು ಅರ್ಜಿ',
    },
    intro: {
      en: 'Apply for an e-Khata for a new apartment at two critical stages:',
      kn: 'ಒಬ್ಬ ವ್ಯಕ್ತಿಯು ಹೊಸ ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಾಗಿ ಎರಡು ನಿರ್ಣಾಯಕ ಹಂತಗಳಲ್ಲಿ ಇ-ಖಾತೆಗಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು:',
    },
    items: [
      {
        label: { en: 'Stage 1 — Name Transfer (Mutation)', kn: 'ಹಂತ 1: ಹೆಸರು ವರ್ಗಾವಣೆ (ಮ್ಯುಟೇಷನ್)' },
        text: {
          en: 'Apply within 15 days of signing the Sale Deed. A Khata transfer must be initiated right after the first sale (from the promoter/developer to the buyer), upon execution of a Registered Sale Deed or J-Form. The system must process and finalise the ownership change within 15 days.',
          kn: 'ಕ್ರಯ ಪತ್ರಕ್ಕೆ ಸಹಿ ಮಾಡಿದ 15 ದಿನಗಳ ಒಳಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ. ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ನ ಮೊದಲ ಮಾರಾಟದ (ಪ್ರವರ್ತಕರಿಂದ ಖರೀದಿದಾರರಿಗೆ) ತಕ್ಷಣ ಖಾತೆ ವರ್ಗಾವಣೆ ಪ್ರಕ್ರಿಯೆ ಪ್ರಾರಂಭಿಸಬೇಕು. ನೋಂದಾಯಿತ ಕ್ರಯ ಪತ್ರ ಅಥವಾ ಜೆ-ಫಾರ್ಮ್ ಅನ್ವಯಿಸುತ್ತದೆ. ಡಿಜಿಟಲ್ ವ್ಯವಸ್ಥೆಯು 15 ದಿನಗಳೊಳಗೆ ಮಾಲೀಕತ್ವ ಬದಲಾವಣೆ ಅಂತಿಮಗೊಳಿಸಬೇಕು.',
        },
      },
      {
        label: { en: 'Stage 2 — Status Update to "Building"', kn: 'ಹಂತ 2: "ಕಟ್ಟಡ" ಎಂದು ಸ್ಥಿತಿಯನ್ನು ನವೀಕರಿಸುವುದು' },
        text: {
          en: 'Apply immediately after receiving the Occupancy Certificate. The property status must be updated from "Vacant Site" to "Building". Requires a Completion Certificate or Occupancy Certificate. Processed within 1 day; a nominal fee of ₹100 is charged.',
          kn: 'ಅಭೋಗ ಪ್ರಮಾಣ ಪತ್ರ ಪಡೆದ ತಕ್ಷಣ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ. ಆಸ್ತಿಯ ಸ್ಥಿತಿಯನ್ನು "ಖಾಲಿ ನಿವೇಶನ"ದಿಂದ "ಕಟ್ಟಡ" ಎಂದು ನವೀಕರಿಸಬೇಕು. ಪೂರ್ಣಗೊಂಡ ಪ್ರಮಾಣ ಪತ್ರ ಅಥವಾ ಅಭೋಗ ಪ್ರಮಾಣ ಪತ್ರ ಸಲ್ಲಿಸಬೇಕು. 1 ದಿನದೊಳಗೆ ಪ್ರಕ್ರಿಯೆ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ; ₹100 ಶುಲ್ಕ ವಿಧಿಸಲಾಗುತ್ತದೆ.',
        },
      },
      {
        label: { en: 'Final Compliance for Form 11A Registration', kn: 'ನಮೂನೆ-11ಎ ನೋಂದಣಿಗಾಗಿ ಅಂತಿಮ ಅನುಸರಣೆ' },
        text: {
          en: 'For the apartment to be officially recorded in Form 11A, a valid Land Conversion Order and Approved Layout Plan must be submitted. After field inspection and document verification by the GP Secretary, records must be finalised within 15 working days.',
          kn: 'ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಅನ್ನು ನಮೂನೆ-11ಎ ನಲ್ಲಿ ದಾಖಲಿಸಲು ಕಂದಾಯ ಇಲಾಖೆಯ ಭೂ-ಪರಿವರ್ತನಾ ಆದೇಶ ಮತ್ತು ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ ಅಗತ್ಯ. ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಕಾರ್ಯದರ್ಶಿಯ ಪರಿಶೀಲನೆಯ ನಂತರ 15 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ದಾಖಲೆ ಅಂತಿಮಗೊಳ್ಳಬೇಕು.',
        },
      },
    ],
  },

  conv11ATo11B: {
    title: {
      en: 'Conversion of Form 11A to Form 11B',
      kn: 'ನಮೂನೆ ೧೧ಎ ನಿಂದ ನಮೂನೆ ೧೧ಬಿ ಗೆ ಪರಿವರ್ತನೆ',
    },
    intro: {
      en: 'Properties are classified under Form 11B when they do not meet the legal or technical criteria for Form 9 or Form 11A. A property may be recorded in Form 11B under the following conditions:',
      kn: 'ಕಾನೂನು ಅಥವಾ ತಾಂತ್ರಿಕ ಮಾನದಂಡಗಳನ್ನು ಪೂರೈಸದ ಆಸ್ತಿಗಳನ್ನು ನಮೂನೆ ೧೧ಬಿ ಯಲ್ಲಿ ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ. ಈ ಕೆಳಗಿನ ಸಂದರ್ಭಗಳಲ್ಲಿ ಆಸ್ತಿಯನ್ನು ನಮೂನೆ ೧೧ಬಿ ಯಲ್ಲಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ:',
    },
    items: [
      {
        label: { en: 'Bylaw Violations', kn: 'ಉಪವಿಧಿ ಉಲ್ಲಂಘನೆ' },
        text: {
          en: 'If a building is constructed in violation of the model building bylaws or technical regulations of the Gram Panchayat.',
          kn: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯ ಮಾದರಿ ಕಟ್ಟಡ ಉಪವಿಧಿ ಅಥವಾ ತಾಂತ್ರಿಕ ನಿಯಮಗಳನ್ನು ಉಲ್ಲಂಘಿಸಿ ಕಟ್ಟಡ ನಿರ್ಮಿಸಿದ್ದರೆ.',
        },
      },
      {
        label: { en: 'Non-Converted Land', kn: 'ಪರಿವರ್ತನೆಯಾಗದ ಜಮೀನು' },
        text: {
          en: 'If buildings are constructed on land that has not been formally converted for non-agricultural use through a legal Conversion Order.',
          kn: 'ಕಾನೂನು ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶವಿಲ್ಲದೆ ವ್ಯವಸಾಯೇತರ ಉದ್ದೇಶಕ್ಕೆ ಪರಿವರ್ತಿಸದ ಜಮೀನಿನ ಮೇಲೆ ಕಟ್ಟಡ ನಿರ್ಮಿಸಿದ್ದರೆ.',
        },
      },
      {
        label: { en: 'Unauthorized Layouts', kn: 'ಅನಧಿಕೃತ ವಿನ್ಯಾಸ ನಕ್ಷೆಗಳು' },
        text: {
          en: 'If the land or buildings are part of a layout developed without obtaining formal Technical Approval from a competent planning authority.',
          kn: 'ಸಕ್ಷಮ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದ ತಾಂತ್ರಿಕ ಅನುಮೋದನೆ ಇಲ್ಲದೆ ಅಭಿವೃದ್ಧಿ ಪಡಿಸಿದ ಜಮೀನು ಅಥವಾ ಕಟ್ಟಡಗಳು.',
        },
      },
      {
        label: { en: 'Missing Certificates', kn: 'ಪ್ರಮಾಣಪತ್ರ ಇಲ್ಲದಿರುವಿಕೆ' },
        text: {
          en: 'If a building is occupied without the owner having obtained a formal Completion Certificate or Occupancy Certificate.',
          kn: 'ಮಾಲೀಕರು ಔಪಚಾರಿಕ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಪ್ರಮಾಣಪತ್ರ ಅಥವಾ ವಾಸ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯದೆ ಕಟ್ಟಡ ವಾಸಕ್ಕೆ ಬಳಸುತ್ತಿದ್ದರೆ.',
        },
      },
    ],
  },

  convApartments: {
    title: {
      en: 'Conversion of Form 11A/11B to Apartment/Flats',
      kn: 'ನಮೂನೆ ೧೧ಎ / ೧೧ಬಿ ನಿಂದ ಅಪಾರ್ಟ್‌ಮೆಂಟ್ / ಫ್ಲ್ಯಾಟ್‌ಗಳಿಗೆ ಪರಿವರ್ತನೆ',
    },
    intro: {
      en: 'A property site recorded in Form 11A or 11B is updated to reflect individual apartment units under these conditions:',
      kn: 'ನಮೂನೆ ೧೧ಎ ಅಥವಾ ೧೧ಬಿ ನಲ್ಲಿ ದಾಖಲಾದ ಆಸ್ತಿ ನಿವೇಶನವನ್ನು ಈ ಕೆಳಗಿನ ಸಂದರ್ಭಗಳಲ್ಲಿ ಪ್ರತ್ಯೇಕ ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಘಟಕಗಳನ್ನು ತೋರಿಸಲು ನವೀಕರಿಸಲಾಗುತ್ತದೆ:',
    },
    items: [
      {
        label: { en: 'Completion and Occupancy', kn: 'ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಮತ್ತು ವಾಸ' },
        text: {
          en: 'The property status is changed from "Site to Building" or "Building to Site" in the registers once a Completion Certificate or Occupancy Certificate is issued.',
          kn: 'ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಪ್ರಮಾಣಪತ್ರ ಅಥವಾ ವಾಸ ಪ್ರಮಾಣಪತ್ರ ನೀಡಿದ ನಂತರ ದಾಖಲೆಗಳಲ್ಲಿ "ನಿವೇಶನದಿಂದ ಕಟ್ಟಡ" ಅಥವಾ "ಕಟ್ಟಡದಿಂದ ನಿವೇಶನ" ಸ್ಥಿತಿ ಬದಲಾಯಿಸಲಾಗುತ್ತದೆ.',
        },
      },
      {
        label: { en: 'Registration of Sale', kn: 'ಮಾರಾಟ ನೋಂದಣಿ' },
        text: {
          en: 'The individual e-Khata for a flat or apartment is created upon the First Sale (from the Promoter / Developer to the Purchaser) or upon subsequent sales via a registered Sale Deed.',
          kn: 'ಪ್ರಚಾರಕ / ಡೆವಲಪರ್‌ನಿಂದ ಖರೀದಿದಾರರಿಗೆ ಆದ ಮೊದಲ ಮಾರಾಟ ಅಥವಾ ನಂತರದ ಮಾರಾಟ ನಡೆದಾಗ ಪ್ರತ್ಯೇಕ ಫ್ಲ್ಯಾಟ್ / ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗೆ ಇ-ಖಾತಾ ಸೃಷ್ಟಿಸಲಾಗುತ್ತದೆ.',
        },
      },
      {
        label: { en: 'Mutation Timeline', kn: 'ಮ್ಯುಟೇಷನ್ ಅವಧಿ' },
        text: {
          en: 'Once the necessary sale documents or occupancy certificates are submitted through the digital system, the mutation must be processed and owner details updated within 15 days.',
          kn: 'ಅಗತ್ಯ ಮಾರಾಟ ದಾಖಲೆಗಳು ಅಥವಾ ವಾಸ ಪ್ರಮಾಣಪತ್ರ ಸಲ್ಲಿಸಿದ ೧೫ ದಿನಗಳ ಒಳಗೆ ಮ್ಯುಟೇಷನ್ ಪ್ರಕ್ರಿಯೆ ಪೂರ್ಣಗೊಳಿಸಿ ಮಾಲೀಕರ ವಿವರ ನವೀಕರಿಸಬೇಕು.',
        },
      },
    ],
  },

  conv11BTransactable: {
    title: {
      en: 'Conversion of Form 11B — Non-Transactable to Transactable',
      kn: 'ನಮೂನೆ ೧೧ಬಿ – ವ್ಯವಹಾರಯೋಗ್ಯವಲ್ಲದ ಸ್ಥಿತಿಯಿಂದ ವ್ಯವಹಾರಯೋಗ್ಯ ಸ್ಥಿತಿಗೆ ಪರಿವರ್ತನೆ',
    },
    intro: {
      en: 'Form 11B is maintained strictly for the purpose of levying and collecting tax and does not constitute a regularisation of any illegality. To move a property to a legally transactable Form 11A register, the following conditions must be met:',
      kn: 'ನಮೂನೆ ೧೧ಬಿ ಅನ್ನು ಕೇವಲ ತೆರಿಗೆ ವಿಧಿಸಲು ಮತ್ತು ಸಂಗ್ರಹಿಸಲು ಮಾತ್ರ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ; ಇದು ಆಸ್ತಿಯ ಅಕ್ರಮವನ್ನು ನಿಯಮಿತಗೊಳಿಸುವುದಿಲ್ಲ. ಆಸ್ತಿಯನ್ನು ನಮೂನೆ ೧೧ಎ ದಾಖಲೆಗೆ ಸ್ಥಳಾಂತರಿಸಲು ಈ ಕೆಳಗಿನ ಷರತ್ತುಗಳನ್ನು ಪೂರೈಸಬೇಕು:',
    },
    items: [
      {
        label: { en: 'Submission of Missing Documents', kn: 'ಕಾಣೆಯಾದ ದಾಖಲೆಗಳ ಸಲ್ಲಿಕೆ' },
        text: {
          en: 'The owner must provide the legal documents that were previously missing, such as a formal Conversion Order from the Revenue Department or a Technical Layout Approval from the Urban Development Authority (UDA) or Local Planning Authority (LPA).',
          kn: 'ಮಾಲೀಕರು ಮೊದಲು ಇಲ್ಲದಿದ್ದ ಕಾನೂನು ದಾಖಲೆಗಳನ್ನು ಒದಗಿಸಬೇಕು — ಕಂದಾಯ ಇಲಾಖೆಯ ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಅಥವಾ ನಗರಾಭಿವೃದ್ಧಿ ಪ್ರಾಧಿಕಾರ (UDA) ಅಥವಾ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ (LPA) ದ ತಾಂತ್ರಿಕ ವಿನ್ಯಾಸ ಅನುಮೋದನೆ.',
        },
      },
      {
        label: { en: 'Statutory Regularisation', kn: 'ಶಾಸನಬದ್ಧ ನಿಯಮಿತೀಕರಣ' },
        text: {
          en: 'A property may move to Form 11A if ownership rights are granted under Sections 94C, 94CC, or 94D of the Land Revenue Act 1964.',
          kn: 'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮ 1964ರ ಪ್ರಕರಣ 94ಸಿ, 94ಸಿಸಿ, ಅಥವಾ 94ಡಿ ಅಡಿಯಲ್ಲಿ ಹಕ್ಕುಪತ್ರ ನೀಡಿದ್ದಲ್ಲಿ ಆಸ್ತಿಯನ್ನು ನಮೂನೆ ೧೧ಎ ಗೆ ಸ್ಥಳಾಂತರಿಸಬಹುದು.',
        },
      },
      {
        label: { en: 'Verification and Approval', kn: 'ಪರಿಶೀಲನೆ ಮತ್ತು ಅನುಮೋದನೆ' },
        text: {
          en: 'Once the necessary legal approvals are uploaded to the centralised database, the property details are verified by the PDO or Secretary and must be approved within the system to be migrated to the Form 11A register.',
          kn: 'ಅಗತ್ಯ ಕಾನೂನು ಅನುಮೋದನೆಗಳನ್ನು ಕೇಂದ್ರೀಕೃತ ದತ್ತಾಂಶಕ್ಕೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ನಂತರ, PDO ಅಥವಾ ಕಾರ್ಯದರ್ಶಿ ಆಸ್ತಿ ವಿವರ ಪರಿಶೀಲಿಸಿ ನಮೂನೆ ೧೧ಎ ದಾಖಲೆಗೆ ವರ್ಗಾಯಿಸಲು ಅನುಮೋದಿಸಬೇಕು.',
        },
      },
    ],
  },

  mutation: {
    title: {
      en: 'Mutation and Transfer',
      kn: 'ಮ್ಯುಟೇಷನ್ ಮತ್ತು ವರ್ಗಾವಣೆ',
    },
    intro: {
      en: 'For a property already having an e-Khata, Mutation and Transfer refer to the formal process of updating property records (Forms 9, 11A, or 11B) in the Gram Panchayat register when changes occur in property ownership, nature, or status.',
      kn: 'ಮ್ಯುಟೇಷನ್ ಮತ್ತು ವರ್ಗಾವಣೆ ಎಂದರೆ ಆಸ್ತಿ ಮಾಲೀಕತ್ವ, ಸ್ವರೂಪ ಅಥವಾ ಸ್ಥಿತಿಯಲ್ಲಿ ಬದಲಾವಣೆ ಆದಾಗ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ದಾಖಲೆಗಳ (ನಮೂನೆ ೯, ೧೧ಎ, ಅಥವಾ ೧೧ಬಿ) ಔಪಚಾರಿಕ ನವೀಕರಣ ಪ್ರಕ್ರಿಯೆ.',
    },
    items: [
      {
        label: { en: 'Change in Ownership', kn: 'ಆಸ್ತಿ ಮಾಲೀಕತ್ವದ ಬದಲಾವಣೆ' },
        text: {
          en: 'Mutation is required when property rights are transferred through registered legal instruments including: Sale Deed, Gift Deed, Will / Inheritance, Relinquishment Deed, Exchange Deed, Court Order / Decree, or general Transfer (Vargaavane).',
          kn: 'ಈ ಕೆಳಗಿನ ನೋಂದಾಯಿತ ಕಾನೂನು ದಾಖಲೆಗಳ ಮೂಲಕ ಆಸ್ತಿ ಹಕ್ಕು ವರ್ಗಾಯಿಸಿದಾಗ ಮ್ಯುಟೇಷನ್ ಅಗತ್ಯ: ಕ್ರಯ ಪತ್ರ, ದಾನ ಪತ್ರ, ಉಯಿಲು ಪತ್ರ / ಪಿತ್ರಾರ್ಜಿತ ಆಸ್ತಿ (ಪೌತಿ ಖಾತೆ), ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ, ಅದಲು ಬದಲು ಪತ್ರ, ನ್ಯಾಯಾಲಯದ ಆದೇಶ, ಅಥವಾ ವರ್ಗಾವಣೆ.',
        },
      },
      {
        label: { en: 'Physical Changes to the Property', kn: 'ಆಸ್ತಿಯ ಭೌತಿಕ ಬದಲಾವಣೆಗಳು' },
        text: {
          en: 'Includes: Site to Building (new construction on a vacant plot), Building to Site (demolition), or Structural Upgrades (e.g., roof type changes from mud/sheet to RCC).',
          kn: 'ನಿವೇಶನದಿಂದ ಕಟ್ಟಡ (ಖಾಲಿ ನಿವೇಶನದಲ್ಲಿ ಹೊಸ ಕಟ್ಟಡ), ಕಟ್ಟಡದಿಂದ ನಿವೇಶನ (ಕಟ್ಟಡ ತೆರವು), ಅಥವಾ ಮೇಲ್ಛಾವಣಿ ವಿಧ ಬದಲಾದಾಗ (ಮಣ್ಣು/ಶೀಟ್‌ನಿಂದ RCC ಗೆ).',
        },
      },
      {
        label: { en: 'Changes in Land Use or Classification', kn: 'ಜಮೀನಿನ ಬಳಕೆ ಅಥವಾ ವರ್ಗೀಕರಣದ ಬದಲಾವಣೆ' },
        text: {
          en: 'When a property transitions from Residential to Commercial use, or when the government grants titles under the Land Revenue Act (Sections 94C, 94CC, 94D) or the Land Reforms Act (Section 38A).',
          kn: 'ಆಸ್ತಿ ವಾಸಯೋಗ್ಯದಿಂದ ವಾಣಿಜ್ಯ ಉಪಯೋಗಕ್ಕೆ ಪರಿವರ್ತನೆ ಆದಾಗ, ಅಥವಾ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮ (ಪ್ರಕರಣ 94ಸಿ, 94ಸಿಸಿ, 94ಡಿ) ಅಥವಾ ಭೂ-ಸುಧಾರಣಾ ಅಧಿನಿಯಮ (ಪ್ರಕರಣ 38ಎ) ಅಡಿ ಸರ್ಕಾರ ಹಕ್ಕುಪತ್ರ ನೀಡಿದಾಗ.',
        },
      },
      {
        label: { en: 'Administrative / Legal Reorganisation', kn: 'ಆಡಳಿತಾತ್ಮಕ / ಕಾನೂನು ಪುನರ್ ಸಂಘಟನೆ' },
        text: {
          en: 'Includes Amalgamation (combining properties), Bifurcation / Partition (dividing among family members or heirs), or Lease or Mortgage.',
          kn: 'ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ (ಆಸ್ತಿಗಳ ವಿಲೀನ), ವಿಭಜನೆ / ವಿಭಾಗ ಪತ್ರ (ಕುಟುಂಬ ಸದಸ್ಯರ ನಡುವೆ ಆಸ್ತಿ ವಿಭಜನೆ), ಅಥವಾ ಗುತ್ತಿಗೆ / ಅಡಮಾನ.',
        },
      },
      {
        label: { en: 'Special Categories — Apartments / Flats', kn: 'ವಿಶೇಷ ವರ್ಗಗಳು – ಅಪಾರ್ಟ್‌ಮೆಂಟ್ / ಫ್ಲ್ಯಾಟ್‌ಗಳು' },
        text: {
          en: 'Covers First Sale (initial transfer from Promoter/Developer to Purchaser), Subsequent Sales (any resale), and Institutional Allotment (sales by government bodies such as BDA or KHB).',
          kn: 'ಮೊದಲ ಮಾರಾಟ (ಪ್ರಚಾರಕ/ಡೆವಲಪರ್‌ನಿಂದ ಖರೀದಿದಾರರಿಗೆ), ನಂತರದ ಮಾರಾಟ (ಮರು-ಮಾರಾಟ), ಮತ್ತು ಸಂಸ್ಥೆಯ ಹಂಚಿಕೆ (BDA ಅಥವಾ KHB ಮುಂತಾದ ಸಂಸ್ಥೆಗಳ ಮಾರಾಟ).',
        },
      },
      {
        label: { en: 'Timeline', kn: 'ಅವಧಿ' },
        text: {
          en: 'For registered ownership changes (Sales, Gifts, etc.), mutation and owner details must be updated within 15 days. For simpler administrative changes, the timeline is 1 day.',
          kn: 'ನೋಂದಾಯಿತ ಮಾಲೀಕತ್ವ ಬದಲಾವಣೆಗಳಿಗೆ ೧೫ ದಿನಗಳ ಒಳಗೆ ಮ್ಯುಟೇಷನ್ ನವೀಕರಿಸಬೇಕು. ಸರಳ ಆಡಳಿತಾತ್ಮಕ ಬದಲಾವಣೆಗಳಿಗೆ ಅವಧಿ ೧ ದಿನ.',
        },
      },
    ],
  },
};

export default POPUP_CONTENT;
