import { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Button from '../../components/Button/Button';
import PageHeading from '../../components/PageHeading/PageHeading';
import HomepageSection from '../../components/HomepageSection/HomepageSection';
import CardHomepage from '../../components/CardHomepage/CardHomepage';
import HelpCards from '../../components/HelpCards/HelpCards';
import HelpCardList from '../../components/HelpCardList/HelpCardList';
import InfoBox from '../../components/InfoBox/InfoBox';
import HomePagePopup from '../../components/HomePagePopup/HomePagePopup';
import { useTranslation } from '../../i18n';
import './HomePage.css';

const CITIZEN_SERVICES_ITEMS = [
  { label: 'Get EKhata', path: '/get-ekhata' },
  { label: 'Citizen Pending Applications', path: '/pending-applications' },
  { label: 'Submitted Applications', path: '/submitted-applications' },
  { label: 'Objection Report', path: '/objection-report' },
  { label: 'Returned Applications for Modification', path: '/returned-applications' },
  { label: 'New Applications', path: '/new-applications' },
  { label: 'Download Khatha (Successful Payment)', path: '/download-khatha' },
];

// CLASSIFICATION_ITEMS is now derived from t() inside the component

/* ── Bilingual popup content ─────────────────────────────────────────
   Each string value is { en: '...', kn: '...' }.
   Items with no Kannada source have only en; loc() falls back to en.
   Source: e-khata-processes.md (bilingual table).
──────────────────────────────────────────────────────────────────── */
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
        label: {
          en: 'Phase 1 — Initial Registration (40% of Sites)',
          kn: 'ಹಂತ 1 — ಪ್ರಾರಂಭಿಕ ನೋಂದಣಿ (ಶೇ. 40 ರಷ್ಟು ನಿವೇಶನಗಳು)',
        },
        text: {
          en: 'An e-Khata application may be initiated for the first 40% of sites once the developer obtains Preliminary Technical Layout Approval from the competent planning authority. The layout plan — including roads, parks, and civic amenity areas — must have been verified, and the transfer of public areas completed through a registered Relinquishment Deed.',
          kn: 'ಅಭಿವೃದ್ಧಿಪಡಿಸುವವರು (Developer) ಸಕ್ಷಮ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ಪ್ರಾಥಮಿಕ ವಿನ್ಯಾಸ ಅನುಮೋದನೆ ಪಡೆದ ನಂತರ ಮೊದಲ ಶೇ. 40 ರಷ್ಟು ನಿವೇಶನಗಳಿಗೆ ಇ-ಖಾತೆ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಬಹುದು. ವಿನ್ಯಾಸ ನಕ್ಷೆಯಲ್ಲಿನ ರಸ್ತೆಗಳು, ಉದ್ಯಾನವನಗಳು ಮತ್ತು ನಾಗರಿಕ ಸೌಲಭ್ಯಗಳ ಪ್ರದೇಶಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಅವುಗಳನ್ನು ನೋಂದಾಯಿತ ಪರಿತ್ಯಾಜನ ಪತ್ರದ ಮೂಲಕ ವರ್ಗಾಯಿಸಿದ ನಂತರ ನಿವೇಶನಗಳನ್ನು ತಂತ್ರಾಂಶದಲ್ಲಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.',
        },
      },
      {
        label: {
          en: 'Phase 2 — Final Registration (Remaining 60% of Sites)',
          kn: 'ಹಂತ 2 — ಅಂತಿಮ ನೋಂದಣಿ (ಉಳಿದ ಶೇ. 60 ರಷ್ಟು ನಿವೇಶನಗಳು)',
        },
        text: {
          en: 'The remaining 60% of sites are eligible only after all basic infrastructure works (roads, water supply, electricity) are completed. The developer must submit a Completion Certificate and a Defect Liability Period declaration. Upon issuance of Final Technical Layout Approval (Form XII), the Gram Panchayat must record the remaining sites within one month.',
          kn: 'ಎಲ್ಲಾ ಮೂಲಭೂತ ಸೌಕರ್ಯ ಕಾಮಗಾರಿಗಳು (ರಸ್ತೆ, ನೀರು ಸರಬರಾಜು, ವಿದ್ಯುತ್) ಪೂರ್ಣಗೊಂಡ ನಂತರವೇ ಉಳಿದ ಶೇ. 60 ರಷ್ಟು ನಿವೇಶನಗಳು ನೋಂದಣಿಗೆ ಅರ್ಹವಾಗುತ್ತವೆ. ಅಭಿವೃದ್ಧಿಪಡಿಸುವವರು ಕಾಮಗಾರಿ ಪೂರ್ಣಗೊಂಡ ಪ್ರಮಾಣ ಪತ್ರ ಮತ್ತು ಲೋಪ ದೋಷಗಳ ಹೊಣೆಗಾರಿಕೆ ಅವಧಿಯ ಘೋಷಣೆಯನ್ನು ಸಲ್ಲಿಸಬೇಕು. ಅಂತಿಮ ತಾಂತ್ರಿಕ ವಿನ್ಯಾಸ ಅನುಮೋದನೆ (ನಮೂನೆ-XII) ದೊರೆತ ಒಂದು ತಿಂಗಳೊಳಗೆ ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯು ಉಳಿದ ನಿವೇಶನಗಳನ್ನು ದಾಖಲಿಸಬೇಕು.',
        },
      },
      {
        label: {
          en: 'Registration in Form 11A',
          kn: 'ನಮೂನೆ-11ಎ ನಲ್ಲಿ ನೋಂದಣಿ',
        },
        text: {
          en: 'The applicant must hold a valid Land Conversion Order (Revenue Department) and Technical Layout Approval (Planning Authority). Upon receipt, the Gram Panchayat Secretary conducts field inspection and document verification, with the record finalised within 15 working days. Following PDO approval, a Property Identification Number (PID) is generated and the e-Khata is finalised in Form 11A.',
          kn: 'ಅರ್ಜಿದಾರರು ಕಂದಾಯ ಇಲಾಖೆಯಿಂದ ನೀಡಲಾದ ಭೂ-ಪರಿವರ್ತನಾ ಆದೇಶ ಪತ್ರ ಮತ್ತು ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆಯನ್ನು ಕಡ್ಡಾಯವಾಗಿ ಹೊಂದಿರಬೇಕು. ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಕಾರ್ಯದರ್ಶಿಯು ಸ್ಥಳ ಪರಿಶೀಲನೆ ಮತ್ತು ದಾಖಲೆಗಳ ಪರಿಶೀಲನೆ ನಡೆಸಿ 15 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ದಾಖಲೆಯನ್ನು ಅಂತಿಮಗೊಳಿಸಬೇಕು. ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳ ಅನುಮೋದನೆಯ ನಂತರ ಪಿಐಡಿ ಸಂಖ್ಯೆ ಸೃಜನೆಯಾಗಿ ನಮೂನೆ-11ಎ ರಿಜಿಸ್ಟರ್‌ನಲ್ಲಿ ಇ-ಖಾತೆ ಅಂತಿಮಗೊಳ್ಳುತ್ತದೆ.',
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
        label: {
          en: 'Stage 1 — Name Transfer (Mutation)',
          kn: 'ಹಂತ 1: ಹೆಸರು ವರ್ಗಾವಣೆ (ಮ್ಯುಟೇಷನ್)',
        },
        text: {
          en: 'Apply within 15 days of signing the Sale Deed. A Khata transfer must be initiated right after the first sale of the apartment (from the promoter/developer to the buyer), upon execution of a Registered Sale Deed or J-Form. The system must process and finalise the ownership change within 15 days from the date of application.',
          kn: 'ಕ್ರಯ ಪತ್ರಕ್ಕೆ ಸಹಿ ಮಾಡಿದ 15 ದಿನಗಳ ಒಳಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ. ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ನ ಮೊದಲ ಮಾರಾಟದ (ಪ್ರವರ್ತಕರಿಂದ/ಡೆವಲಪರ್‌ನಿಂದ ಖರೀದಿದಾರರಿಗೆ) ತಕ್ಷಣ ಖಾತೆ ವರ್ಗಾವಣೆ (ಮ್ಯುಟೇಷನ್) ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಬೇಕು. ನೋಂದಾಯಿತ ಕ್ರಯ ಪತ್ರ ಅಥವಾ ಜೆ-ಫಾರ್ಮ್ ಅನ್ವಯಿಸುತ್ತದೆ. ಡಿಜಿಟಲ್ ವ್ಯವಸ್ಥೆಯು 15 ದಿನಗಳೊಳಗೆ ಮಾಲೀಕತ್ವ ಬದಲಾವಣೆಯನ್ನು ಅಂತಿಮಗೊಳಿಸಬೇಕು.',
        },
      },
      {
        label: {
          en: 'Stage 2 — Status Update to "Building"',
          kn: 'ಹಂತ 2: "ಕಟ್ಟಡ" ಎಂದು ಸ್ಥಿತಿಯನ್ನು ನವೀಕರಿಸುವುದು',
        },
        text: {
          en: 'Apply immediately after receiving the Occupancy Certificate. Once construction is complete, the property status must be updated from "Vacant Site" to "Building". Requires submission of a Completion Certificate or Occupancy Certificate. This update is processed within 1 day, and a nominal fee of ₹100 (or as prescribed) is charged.',
          kn: 'ಅಭೋಗ ಪ್ರಮಾಣ ಪತ್ರ ಪಡೆದ ತಕ್ಷಣ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ. ನಿರ್ಮಾಣ ಪೂರ್ಣಗೊಂಡ ನಂತರ, ಆಸ್ತಿಯ ಸ್ಥಿತಿಯನ್ನು "ಖಾಲಿ ನಿವೇಶನ"ದಿಂದ "ಕಟ್ಟಡ" ಎಂದು ನವೀಕರಿಸಬೇಕು. ಪೂರ್ಣಗೊಂಡ ಪ್ರಮಾಣ ಪತ್ರ ಅಥವಾ ಅಭೋಗ ಪ್ರಮಾಣ ಪತ್ರ ಸಲ್ಲಿಸಬೇಕು. 1 ದಿನದೊಳಗೆ ಪ್ರಕ್ರಿಯೆ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ; ₹100 ನಾಮಮಾತ್ರ ಶುಲ್ಕ ವಿಧಿಸಲಾಗುತ್ತದೆ.',
        },
      },
      {
        label: {
          en: 'Final Compliance for Form 11A Registration',
          kn: 'ನಮೂನೆ-11ಎ ನೋಂದಣಿಗಾಗಿ ಅಂತಿಮ ಅನುಸರಣೆ',
        },
        text: {
          en: 'For the apartment to be officially recorded in the Form 11A register, a valid Land Conversion Order and an Approved Layout Plan from the competent Planning Authority must be submitted. After field inspection and document verification by the Gram Panchayat Secretary, records must be finalised within 15 working days.',
          kn: 'ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಅನ್ನು ಅಧಿಕೃತವಾಗಿ ನಮೂನೆ-11ಎ ರಿಜಿಸ್ಟರ್‌ನಲ್ಲಿ ದಾಖಲಿಸಲು ಕಂದಾಯ ಇಲಾಖೆಯ ಭೂ-ಪರಿವರ್ತನಾ ಆದೇಶ ಮತ್ತು ಸಕ್ಷಮ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದ ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ ಅಗತ್ಯ. ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಕಾರ್ಯದರ್ಶಿಯ ಸ್ಥಳ ಪರಿಶೀಲನೆ ಮತ್ತು ದಾಖಲೆ ಪರಿಶೀಲನೆಯ ನಂತರ 15 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ದಾಖಲೆ ಅಂತಿಮಗೊಳ್ಳಬೇಕು.',
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
          kn: 'ಕಾನೂನು ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶವಿಲ್ಲದೆ ವ್ಯವಸಾಯೇತರ ಉದ್ದೇಶಕ್ಕಾಗಿ ಪರಿವರ್ತನೆ ಮಾಡದ ಜಮೀನಿನ ಮೇಲೆ ಕಟ್ಟಡ ನಿರ್ಮಿಸಿದ್ದರೆ.',
        },
      },
      {
        label: { en: 'Unauthorized Layouts', kn: 'ಅನಧಿಕೃತ ವಿನ್ಯಾಸ ನಕ್ಷೆಗಳು' },
        text: {
          en: 'If the land or buildings are part of a layout developed without obtaining formal Technical Approval from a competent planning authority.',
          kn: 'ಸಕ್ಷಮ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ವಿನ್ಯಾಸ ನಕ್ಷೆಗೆ ತಾಂತ್ರಿಕ ಅನುಮೋದನೆ ಪಡೆಯದೆ ಅಭಿವೃದ್ಧಿ ಪಡಿಸಿದ ಜಮೀನು ಅಥವಾ ಕಟ್ಟಡಗಳು.',
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
      kn: 'ಮ್ಯುಟೇಷನ್ (ದಾಖಲೆ ನವೀಕರಣ) ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಮತ್ತು ಬಹು-ವಾಸ ಘಟಕಗಳನ್ನು ನಿರ್ದಿಷ್ಟವಾಗಿ ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ. ನಮೂನೆ ೧೧ಎ ಅಥವಾ ೧೧ಬಿ ನಲ್ಲಿ ದಾಖಲಾದ ಆಸ್ತಿ ನಿವೇಶನವನ್ನು ಈ ಕೆಳಗಿನ ಸಂದರ್ಭಗಳಲ್ಲಿ ಪ್ರತ್ಯೇಕ ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಘಟಕಗಳನ್ನು ತೋರಿಸಲು ನವೀಕರಿಸಲಾಗುತ್ತದೆ:',
    },
    items: [
      {
        label: { en: 'Completion and Occupancy', kn: 'ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಮತ್ತು ವಾಸ' },
        text: {
          en: 'The property status is changed from "Site to Building" or "Building to Site" in the registers once a Completion Certificate or Occupancy Certificate is issued.',
          kn: 'ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಪ್ರಮಾಣಪತ್ರ ಅಥವಾ ವಾಸ ಪ್ರಮಾಣಪತ್ರ ನೀಡಿದ ನಂತರ ದಾಖಲೆಗಳಲ್ಲಿ "ನಿವೇಶನದಿಂದ ಕಟ್ಟಡ" ಅಥವಾ "ಕಟ್ಟಡದಿಂದ ನಿವೇಶನ" ಎಂಬ ಸ್ಥಿತಿ ಬದಲಾಯಿಸಲಾಗುತ್ತದೆ.',
        },
      },
      {
        label: { en: 'Registration of Sale', kn: 'ಮಾರಾಟ ನೋಂದಣಿ' },
        text: {
          en: 'The individual e-Khata for a flat or apartment is created upon the First Sale (from the Promoter / Developer to the Purchaser) or upon subsequent sales via a registered Sale Deed.',
          kn: 'ನೋಂದಾಯಿತ ಕ್ರಯ ಪತ್ರದ ಮೂಲಕ ಪ್ರಚಾರಕ / ಡೆವಲಪರ್‌ನಿಂದ ಖರೀದಿದಾರರಿಗೆ ಆದ ಮೊದಲ ಮಾರಾಟ ಅಥವಾ ನಂತರದ ಮಾರಾಟ ನಡೆದಾಗ ಪ್ರತ್ಯೇಕ ಫ್ಲ್ಯಾಟ್ / ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗೆ ಇ-ಖಾತಾ ಸೃಷ್ಟಿಸಲಾಗುತ್ತದೆ.',
        },
      },
      {
        label: { en: 'Mutation Timeline', kn: 'ಮ್ಯುಟೇಷನ್ ಅವಧಿ' },
        text: {
          en: 'Once the necessary sale documents or occupancy certificates are submitted through the digital system, the mutation must be processed and owner details updated within 15 days.',
          kn: 'ಡಿಜಿಟಲ್ ವ್ಯವಸ್ಥೆಯ ಮೂಲಕ ಅಗತ್ಯ ಮಾರಾಟ ದಾಖಲೆಗಳು ಅಥವಾ ವಾಸ ಪ್ರಮಾಣಪತ್ರ ಸಲ್ಲಿಸಿದ ೧೫ ದಿನಗಳ ಒಳಗೆ ಮ್ಯುಟೇಷನ್ ಪ್ರಕ್ರಿಯೆ ಪೂರ್ಣಗೊಳಿಸಿ ಮಾಲೀಕರ ವಿವರ ನವೀಕರಿಸಬೇಕು.',
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
      en: 'Form 11B is maintained strictly for the purpose of levying and collecting tax and does not constitute a regularisation of any illegality or violation. To move a property to a legally transactable Form 11A register, the following conditions must be met:',
      kn: 'ನಮೂನೆ ೧೧ಬಿ ಅನ್ನು ಕೇವಲ ತೆರಿಗೆ ವಿಧಿಸಲು ಮತ್ತು ಸಂಗ್ರಹಿಸಲು ಮಾತ್ರ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ; ಇದು ಆಸ್ತಿಯ ಅಕ್ರಮ ಅಥವಾ ಉಲ್ಲಂಘನೆಯನ್ನು ನಿಯಮಿತಗೊಳಿಸುವುದಿಲ್ಲ. ಆಸ್ತಿಯನ್ನು ೧೧ಬಿ "ತೆರಿಗೆ-ಮಾತ್ರ" ದಾಖಲೆಯಿಂದ ಕಾನೂನು ವ್ಯವಹಾರಯೋಗ್ಯ ನಮೂನೆ ೧೧ಎ ದಾಖಲೆಗೆ ಸ್ಥಳಾಂತರಿಸಲು ಈ ಕೆಳಗಿನ ಷರತ್ತುಗಳನ್ನು ಪೂರೈಸಬೇಕು:',
    },
    items: [
      {
        label: { en: 'Submission of Missing Documents', kn: 'ಕಾಣೆಯಾದ ದಾಖಲೆಗಳ ಸಲ್ಲಿಕೆ' },
        text: {
          en: 'The owner must provide the legal documents that were previously missing, such as a formal Conversion Order from the Revenue Department or a Technical Layout Approval from the Urban Development Authority (UDA) or Local Planning Authority (LPA).',
          kn: 'ಮಾಲೀಕರು ಮೊದಲು ಇಲ್ಲದಿದ್ದ ಕಾನೂನು ದಾಖಲೆಗಳನ್ನು ಒದಗಿಸಬೇಕು; ಉದಾಹರಣೆಗೆ ಕಂದಾಯ ಇಲಾಖೆಯಿಂದ ಔಪಚಾರಿಕ ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಅಥವಾ ನಗರಾಭಿವೃದ್ಧಿ ಪ್ರಾಧಿಕಾರ (UDA) ಅಥವಾ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ (LPA) ದಿಂದ ತಾಂತ್ರಿಕ ವಿನ್ಯಾಸ ಅನುಮೋದನೆ.',
        },
      },
      {
        label: { en: 'Statutory Regularisation', kn: 'ಶಾಸನಬದ್ಧ ನಿಯಮಿತೀಕರಣ' },
        text: {
          en: 'A property may move to Form 11A if ownership rights are granted under specific legislative sections, such as Sections 94C, 94CC, or 94D of the Land Revenue Act 1964.',
          kn: 'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮ 1964ರ ಪ್ರಕರಣ 94ಸಿ, 94ಸಿಸಿ, ಅಥವಾ 94ಡಿ ಅಡಿಯಲ್ಲಿ ಹಕ್ಕುಪತ್ರ ನೀಡಿದ್ದಲ್ಲಿ ಆಸ್ತಿಯನ್ನು ನಮೂನೆ ೧೧ಎ ಗೆ ಸ್ಥಳಾಂತರಿಸಬಹುದು.',
        },
      },
      {
        label: { en: 'Verification and Approval', kn: 'ಪರಿಶೀಲನೆ ಮತ್ತು ಅನುಮೋದನೆ' },
        text: {
          en: 'Once the necessary legal approvals are obtained and uploaded to the centralised database, the property details are verified by the Panchayat Development Officer (PDO) or Secretary and must be approved within the system to be migrated to the Form 11A register.',
          kn: 'ಅಗತ್ಯ ಕಾನೂನು ಅನುಮೋದನೆಗಳನ್ನು ಕೇಂದ್ರೀಕೃತ ದತ್ತಾಂಶಕ್ಕೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ನಂತರ, ಪಂಚಾಯಿತಿ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿ (PDO) ಅಥವಾ ಕಾರ್ಯದರ್ಶಿ ಆಸ್ತಿ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ನಮೂನೆ ೧೧ಎ ದಾಖಲೆಗೆ ವರ್ಗಾಯಿಸಲು ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಅನುಮೋದಿಸಬೇಕು.',
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
          en: 'Mutation is required when property rights are transferred through registered legal instruments, including: Sale Deed, Gift Deed, Will / Inheritance, Relinquishment Deed, Exchange Deed, Court Order / Decree, or general Transfer (Vargaavane).',
          kn: 'ಈ ಕೆಳಗಿನ ನೋಂದಾಯಿತ ಕಾನೂನು ದಾಖಲೆಗಳ ಮೂಲಕ ಆಸ್ತಿ ಹಕ್ಕು ವರ್ಗಾಯಿಸಿದಾಗ ಮ್ಯುಟೇಷನ್ ಅಗತ್ಯ: ಕ್ರಯ ಪತ್ರ, ದಾನ ಪತ್ರ, ಉಯಿಲು ಪತ್ರ / ಪಿತ್ರಾರ್ಜಿತ ಆಸ್ತಿ (ಪೌತಿ ಖಾತೆ), ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ / ತ್ಯಾಗ ಪತ್ರ, ಅದಲು ಬದಲು ಪತ್ರ, ನ್ಯಾಯಾಲಯದ ಆದೇಶ / ತೀರ್ಪು, ಅಥವಾ ವರ್ಗಾವಣೆ.',
        },
      },
      {
        label: { en: 'Physical Changes to the Property', kn: 'ಆಸ್ತಿಯ ಭೌತಿಕ ಬದಲಾವಣೆಗಳು' },
        text: {
          en: 'Includes: Site to Building (when a building is newly constructed on a vacant plot), Building to Site (when a building is demolished), or Structural Upgrades (e.g., roof type changes from mud/sheet to RCC).',
          kn: 'ನಿವೇಶನದಿಂದ ಕಟ್ಟಡ (ಖಾಲಿ ನಿವೇಶನದಲ್ಲಿ ಹೊಸ ಕಟ್ಟಡ ನಿರ್ಮಿಸಿದಾಗ), ಕಟ್ಟಡದಿಂದ ನಿವೇಶನ (ಕಟ್ಟಡ ತೆರವುಗೊಳಿಸಿದಾಗ), ಅಥವಾ ಮೇಲ್ಛಾವಣಿ ವಿಧ ಬದಲಾದಾಗ (ಉದಾ: ಮಣ್ಣು ಅಥವಾ ಶೀಟ್‌ನಿಂದ RCC ಮೇಲ್ಛಾವಣಿಗೆ).',
        },
      },
      {
        label: { en: 'Changes in Land Use or Classification', kn: 'ಜಮೀನಿನ ಬಳಕೆ ಅಥವಾ ವರ್ಗೀಕರಣದ ಬದಲಾವಣೆ' },
        text: {
          en: 'When a property transitions from Residential to Commercial use, or when the government grants titles under the Land Revenue Act (Sections 94C, 94CC, 94D) or the Land Reforms Act (Section 38A).',
          kn: 'ಆಸ್ತಿ ವಾಸಯೋಗ್ಯದಿಂದ ವಾಣಿಜ್ಯ ಉಪಯೋಗಕ್ಕೆ ಪರಿವರ್ತನೆ ಆದಾಗ, ಅಥವಾ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮ (ಪ್ರಕರಣ 94ಸಿ, 94ಸಿಸಿ, 94ಡಿ) ಅಥವಾ ಭೂ-ಸುಧಾರಣಾ ಅಧಿನಿಯಮ (ಪ್ರಕರಣ 38ಎ) ಅಡಿಯಲ್ಲಿ ಸರ್ಕಾರ ಹಕ್ಕುಪತ್ರ ನೀಡಿದಾಗ.',
        },
      },
      {
        label: { en: 'Administrative / Legal Reorganisation', kn: 'ಆಡಳಿತಾತ್ಮಕ / ಕಾನೂನು ಪುನರ್ ಸಂಘಟನೆ' },
        text: {
          en: 'Includes Amalgamation (combining properties into a single unit), Bifurcation / Partition (dividing a property among family members or heirs), or Lease or Mortgage.',
          kn: 'ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ (ಎರಡು ಅಥವಾ ಹೆಚ್ಚು ಆಸ್ತಿಗಳನ್ನು ಒಂದು ಘಟಕವಾಗಿ ವಿಲೀನ), ವಿಭಜನೆ / ವಿಭಾಗ ಪತ್ರ (ಕುಟುಂಬ ಸದಸ್ಯರು ಅಥವಾ ಉತ್ತರಾಧಿಕಾರಿಗಳ ನಡುವೆ ಆಸ್ತಿ ವಿಭಜನೆ), ಅಥವಾ ಗುತ್ತಿಗೆ / ಅಡಮಾನ.',
        },
      },
      {
        label: { en: 'Special Categories — Apartments / Flats', kn: 'ವಿಶೇಷ ವರ್ಗಗಳು – ಅಪಾರ್ಟ್‌ಮೆಂಟ್ / ಫ್ಲ್ಯಾಟ್‌ಗಳು' },
        text: {
          en: 'Covers First Sale (initial transfer from Promoter/Developer to Purchaser), Subsequent Sales (any resale of a flat or apartment unit), and Institutional Allotment (sales or allotments by government bodies such as BDA or KHB).',
          kn: 'ಮೊದಲ ಮಾರಾಟ (ಪ್ರಚಾರಕ / ಡೆವಲಪರ್‌ನಿಂದ ಖರೀದಿದಾರರಿಗೆ ಆದ ಆರಂಭಿಕ ವರ್ಗಾವಣೆ), ನಂತರದ ಮಾರಾಟ (ಫ್ಲ್ಯಾಟ್ ಅಥವಾ ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಘಟಕದ ಯಾವುದೇ ಮರು-ಮಾರಾಟ), ಮತ್ತು ಸಂಸ್ಥೆಯ ಹಂಚಿಕೆ (BDA ಅಥವಾ KHB ಮುಂತಾದ ಸಂಸ್ಥೆಗಳಿಂದ ಮಾರಾಟ ಅಥವಾ ಹಂಚಿಕೆ).',
        },
      },
      {
        label: { en: 'Timeline', kn: 'ಅವಧಿ' },
        text: {
          en: 'For registered ownership changes (Sales, Gifts, etc.), mutation and owner details must be updated within 15 days of the application being processed. For simpler administrative changes, the timeline is 1 day.',
          kn: 'ನೋಂದಾಯಿತ ಮಾಲೀಕತ್ವ ಬದಲಾವಣೆ (ಮಾರಾಟ, ದಾನ, ಇತ್ಯಾದಿ) ಸಂದರ್ಭದಲ್ಲಿ, ಅರ್ಜಿ ಸ್ವೀಕರಿಸಿದ ೧೫ ದಿನಗಳ ಒಳಗೆ ಡಿಜಿಟಲ್ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಮ್ಯುಟೇಷನ್ ಮತ್ತು ಮಾಲೀಕರ ವಿವರ ನವೀಕರಿಸಬೇಕು. ಸರಳ ಆಡಳಿತಾತ್ಮಕ ಬದಲಾವಣೆಗಳಿಗೆ ಅವಧಿ ೧ ದಿನ.',
        },
      },
    ],
  },
};

/* ── Popup body renderer ──────────────────────────────────────── */
const PopupBody = ({ contentKey, lang }) => {
  const content = POPUP_CONTENT[contentKey];
  if (!content) return null;
  const loc = (v) => (lang === 'kn' && v?.kn) ? v.kn : (v?.en ?? '');
  return (
    <>
      {content.intro && <p className="hp-popup__intro">{loc(content.intro)}</p>}
      <ul className="hp-popup__items">
        {content.items.map((item, i) => (
          <li key={i} className="hp-popup__item">
            {item.label && <span className="hp-popup__item-label">{loc(item.label)}</span>}
            <p className="hp-popup__item-text">{loc(item.text)}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

/* ── Component ────────────────────────────────────────────────── */
const HomePage = ({ onNavigate }) => {
  const [activePopup, setActivePopup] = useState(null);
  const { t, lang } = useTranslation('home');

  const handleApplyNewEKhata = () => {
    onNavigate && onNavigate('login');
  };

  const classification11AItems = [
    t('hp_class_11a_item1'),
    t('hp_class_11a_item2'),
    t('hp_class_11a_item3'),
    t('hp_class_11a_item4'),
    t('hp_class_11a_item5'),
    t('hp_class_11a_item6'),
    t('hp_class_11a_item7'),
    t('hp_class_11a_item8'),
    t('hp_class_11a_item9'),
    t('hp_class_11a_item10'),
    t('hp_class_11a_item11'),
    t('hp_class_11a_item12'),
    t('hp_class_11a_item13'),
    t('hp_class_11a_item14'),
    t('hp_class_11a_item15'),
  ];

  const classification11BItems = [
    t('hp_class_11b_item1'),
    t('hp_class_11b_item2'),
    t('hp_class_11b_item3'),
    t('hp_class_11b_item4'),
    t('hp_class_11b_item5'),
    t('hp_class_11b_item6'),
    t('hp_class_11b_item7'),
  ];

  const openPopup = (key) => setActivePopup(key);
  const closePopup = () => setActivePopup(null);

  const activeContent = activePopup ? POPUP_CONTENT[activePopup] : null;
  const loc = (v) => (lang === 'kn' && v?.kn) ? v.kn : (v?.en ?? '');

  return (
    <div className="page-homepage">
      {/* 1. Navigation Bar */}
      <NavigationBar
        variant="homepage"
        citizenServicesItems={CITIZEN_SERVICES_ITEMS}
        onCitizenLogin={handleApplyNewEKhata}
        onDeptLogin={() => {}}
        onNavigate={onNavigate}
      />

      {/* 2. Carousel / Hero */}
      <Carousel
        slides={[
          {
            subtitle: t('hp_carousel_subtitle'),
            heading: t('hp_carousel_heading'),
            description: t('hp_carousel_desc'),
            actions: (
              <>
                <Button variant="cta-filled" onClick={handleApplyNewEKhata}>
                  {t('hp_carousel_btn_apply')}
                </Button>
                <Button variant="cta-outlined">{t('hp_carousel_btn_status')}</Button>
              </>
            ),
          },
        ]}
      />

      {/* 3. All Citizen Services */}
      <section className="hp-services">
        <div className="hp-services__inner">
          <PageHeading
            subtitle={t('hp_services_subtitle')}
            title={t('hp_services_title')}
          />

          <div className="hp-services__groups">
            {/* e-Khata Related Services */}
            <HomepageSection icon="file_copy" title={t('hp_section_ekhata')}>
              <div className="hp-card-grid">
                <CardHomepage
                  icon="add_circle_outline"
                  title={t('card_newEkhata_title')}
                  onClick={() => openPopup('newEkhata')}
                />
                <CardHomepage
                  icon="search"
                  title={t('card_pidEkhata_title')}
                  onClick={() => openPopup('pidEkhata')}
                />
                <CardHomepage
                  icon="add_circle_outline"
                  title={t('card_newLayouts_title')}
                  onClick={() => openPopup('newLayouts')}
                />
                <CardHomepage
                  icon="add_circle_outline"
                  title={t('card_newApartments_title')}
                  onClick={() => openPopup('newApartments')}
                />
                <CardHomepage
                  icon="pending_actions"
                  title={t('card_pending_title')}
                  description={t('card_pending_desc')}
                />
                <CardHomepage
                  icon="error_outline"
                  title={t('card_reportObjection_title')}
                  description={t('card_reportObjection_desc')}
                />
                <CardHomepage
                  icon="assignment_return"
                  title={t('card_returnApps_title')}
                  description={t('card_returnApps_desc')}
                />
              </div>
            </HomepageSection>

            {/* Conversions */}
            <HomepageSection icon="file_copy" title={t('hp_section_conversions')}>
              <div className="hp-card-grid">
                <CardHomepage
                  icon="file_copy"
                  title={t('card_conv11ATo11B_title')}
                  onClick={() => openPopup('conv11ATo11B')}
                />
                <CardHomepage
                  icon="file_copy"
                  title={t('card_convApartments_title')}
                  onClick={() => openPopup('convApartments')}
                />
                <CardHomepage
                  icon="file_copy"
                  title={t('card_conv11BTransactable_title')}
                  onClick={() => openPopup('conv11BTransactable')}
                />
              </div>
            </HomepageSection>

            {/* Check Status | Download | Print */}
            <HomepageSection header={
              <>
                <span className="material-icons-outlined hp-section__icon">image_search</span>
                <span className="hp-section__title">{t('hp_section_checkStatus')}</span>
                <span className="hp-section__title">|</span>
                <span className="material-icons-outlined hp-section__icon">download</span>
                <span className="hp-section__title">{t('hp_section_download')}</span>
                <span className="hp-section__title">|</span>
                <span className="material-icons-outlined hp-section__icon">print</span>
                <span className="hp-section__title">{t('hp_section_print')}</span>
              </>
            }>
              <div className="hp-card-grid">
                <CardHomepage
                  icon="image_search"
                  title={t('card_checkStatus_title')}
                  description={t('card_checkStatus_desc')}
                />
                <CardHomepage
                  icon="download"
                  title={t('card_downloadEkhata_title')}
                  description={t('card_downloadEkhata_desc')}
                />
                <CardHomepage
                  icon="check_circle"
                  title={t('card_checkRegistrable_title')}
                />
              </div>
            </HomepageSection>

            {/* Mutation and Transfer */}
            <HomepageSection icon="people" title={t('hp_section_mutation')}>
              <div className="hp-card-grid">
                <CardHomepage
                  icon="people"
                  title={t('card_mutation_title')}
                  onClick={() => openPopup('mutation')}
                />
              </div>
            </HomepageSection>

            {/* Reports and Dashboards */}
            <HomepageSection icon="dashboard" title={t('hp_section_reports')}>
              <div className="hp-card-grid">
                <CardHomepage
                  icon="dashboard"
                  title={t('card_reports_title')}
                  description={t('card_reports_desc')}
                />
              </div>
            </HomepageSection>
          </div>
        </div>
      </section>

      {/* 4. Understanding E-Khata */}
      <section className="hp-ekhata">
        <div className="hp-ekhata__inner">
          <PageHeading
            subtitle={t('hp_ekhata_subtitle')}
            title={t('hp_ekhata_title')}
          />
          <div className="hp-ekhata__cards">
            <HelpCards
              icon="file_copy"
              title={t('hp_ekhata_card1_title')}
              description={t('hp_ekhata_card1_desc')}
            />
            <HelpCards
              icon="file_copy"
              title={t('hp_ekhata_card2_title')}
              description={t('hp_ekhata_card2_desc')}
            />
            <HelpCards
              icon="person"
              title={t('hp_ekhata_card3_title')}
              description={t('hp_ekhata_card3_desc')}
            />
            <HelpCards
              icon="file_copy"
              title={t('hp_ekhata_card4_title')}
              description={t('hp_ekhata_card4_desc')}
            />
          </div>
        </div>
      </section>

      {/* 5. Classification Types */}
      <section className="hp-classification">
        <div className="hp-classification__inner">
          <PageHeading
            subtitle={t('hp_class_subtitle')}
            title={t('hp_class_title')}
            className="page-heading--light"
          />
          <p className="hp-classification__desc">{t('hp_class_desc')}</p>

          <div className="hp-classification__cards">
            <HelpCardList
              subtitle={t('hp_class_11a_subtitle')}
              title={t('hp_class_11a_title')}
              description={t('hp_class_11a_desc')}
              items={classification11AItems}
            />
            <HelpCardList
              subtitle={t('hp_class_11b_subtitle')}
              title={t('hp_class_11b_title')}
              description={t('hp_class_11b_desc')}
              items={classification11BItems}
            />
          </div>

          <InfoBox variant="red">
            <div>
              <strong>{t('hp_class_infobox_strong')}</strong>
              <p>{t('hp_class_infobox_desc')}</p>
            </div>
          </InfoBox>
        </div>
      </section>

      {/* 6. Need Help */}
      <section className="hp-help">
        <div className="hp-help__inner">
          <PageHeading subtitle={t('hp_support_subtitle')} title={t('hp_support_title')} />
          <p className="hp-help__desc">
            {t('hp_support_desc')}
          </p>
          <div className="hp-help__cards">
            <HelpCards
              icon="phone"
              title={t('hp_support_card1_title')}
              description={t('hp_support_card1_desc')}
              buttonLabel={t('hp_support_card1_btn')}
              onButtonClick={() => {}}
            />
            <HelpCards
              icon="video_library"
              title={t('hp_support_card2_title')}
              description={t('hp_support_card2_desc')}
              buttonLabel={t('hp_support_card2_btn')}
              onButtonClick={() => {}}
            />
            <HelpCards
              icon="place"
              title={t('hp_support_card3_title')}
              description={t('hp_support_card3_desc')}
              buttonLabel={t('hp_support_card3_btn')}
              onButtonClick={() => {}}
            />
          </div>
        </div>
      </section>

      {/* 7. Connected Services */}
      <section className="hp-connected">
        <div className="hp-connected__inner">
          <PageHeading
            subtitle={t('hp_connected_subtitle')}
            title={t('hp_connected_title')}
          />
          <div className="hp-connected__cards">
            <HelpCards
              icon="public"
              title={t('hp_connected_card1_title')}
              description={t('hp_connected_card1_desc')}
              buttonLabel={t('hp_connected_card_btn')}
              onButtonClick={() => window.open('https://landrecords.karnataka.gov.in', '_blank', 'noopener')}
            />
            <HelpCards
              icon="public"
              title={t('hp_connected_card2_title')}
              description={t('hp_connected_card2_desc')}
              buttonLabel={t('hp_connected_card_btn')}
              onButtonClick={() => window.open('https://kaverionline.karnataka.gov.in', '_blank', 'noopener')}
            />
            <HelpCards
              icon="public"
              title={t('hp_connected_card3_title')}
              description={t('hp_connected_card3_desc')}
              buttonLabel={t('hp_connected_card_btn')}
              onButtonClick={() => window.open('https://ksrsac.karnataka.gov.in', '_blank', 'noopener')}
            />
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <Footer variant="homepage" />

      {/* Popup overlay */}
      {activePopup && activeContent && (
        <HomePagePopup
          title={loc(activeContent.title)}
          onClose={closePopup}
          onProceed={handleApplyNewEKhata}
          proceedLabel="Proceed to Application"
        >
          <PopupBody contentKey={activePopup} lang={lang} />
        </HomePagePopup>
      )}
    </div>
  );
};

export default HomePage;
