import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import './GlossaryPage.css';

const GLOSSARY_TERMS = [
  {
    number: 1,
    titleEn: 'Deed Document',
    titleKn: 'ದಾಖಲೆ ಪತ್ರ',
    defEn: '"Deed" refers to the original written document of evidence that creates or transfers ownership or records an intentional transfer.\n\nExamples:',
    defEnExamples: [
      'Sale Deed (Kraya Pathra)',
      'Gift Deed (Dana Pathra / Kanike Pathra)',
      'Partition Deed (Vibhaga Pathra)',
      'Relinquishment Deed (Hakku Bidugade Pathra / Parityajana Pathra / Tyaga Pathra)',
      'Exchange Deed (Adalu Badalu Pathra)',
      'Release Deed',
      'Cancellation Deed',
      'Settlement Deed (Settlement Pathra)',
    ],
    defKn: '"ಪತ್ರ" ಎಂದರೆ ಮಾಲೀಕತ್ವ ಸೃಜಿಸುವ ಅಥವಾ ವರ್ಗಾಯಿಸುವ ಅಥವಾ ಉದ್ದೇಶಪೂರ್ವಕವಾದ ವರ್ಗಾವಣೆ ದಾಖಲಿಸುವ ಸಾಕ್ಷ್ಯದ ಮೂಲ ಲಿಖಿತ ಪತ್ರ.\n\nಉದಾಹರಣೆಗಳು:',
    defKnExamples: [
      'ಕ್ರಯ ಪತ್ರ',
      'ದಾನ ಪತ್ರ / ಕಾಣಿಕೆ ಪತ್ರ',
      'ವಿಭಾಗ ಪತ್ರ',
      'ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ / ಪರಿತ್ಯಾಜನ ಪತ್ರ / ತ್ಯಾಗ ಪತ್ರ',
      'ಅದಲು ಬದಲು ಪತ್ರ',
      'ರಿಲೀಜ್ ಡೀಡ್',
      'ಕ್ಯಾನ್ಸಲೇಶನ್ ಡೀಡ್',
      'ಸೆಟಲ್‌ಮೆಂಟ್ ಪತ್ರ',
    ],
  },
  {
    number: 2,
    titleEn: 'KIADB / KSSIDC',
    titleKn: 'ಕೆಐಎಡಿಬಿ / ಕೆಎಸ್ಎಸ್ಐಡಿಸಿ',
    defEn: 'Karnataka Industrial Areas Development Board (KIADB)\nKarnataka State Small Industries Development Corporation Limited (KSSIDC)',
    defKn: 'ಕರ್ನಾಟಕ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶಾಭಿವೃದ್ಧಿ ಮಂಡಳಿ (ಕೆ.ಐ.ಎ.ಡಿ.ಬಿ)\nಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳ ಅಭಿವೃದ್ಧಿ ನಿಗಮ ನಿಯಮಿತ (ಕೆ.ಎಸ್.ಎಸ್.ಐ.ಡಿ.ಸಿ)',
  },
  {
    number: 3,
    titleEn: 'Grama Tana',
    titleKn: 'ಗ್ರಾಮ ಠಾಣ',
    defEn: 'Unsurveyed settlement sites or buildings located within the inhabited area of a village boundary, which have not been brought under a formal survey.',
    defKn: 'ಗ್ರಾಮದ ಗಡಿಯೊಳಗಿನ ಜನವಸತಿ ಪ್ರದೇಶದಲ್ಲಿರುವ, ಸರ್ವೇಗೆ ಒಳಪಡಿಸದ ನಿವೇಶನಗಳು ಅಥವಾ ಕಟ್ಟಡಗಳು. ಇವು ಔಪಚಾರಿಕ ಸರ್ವೇ ಪ್ರಕ್ರಿಯೆಗೆ ಒಳಪಟ್ಟಿರುವುದಿಲ್ಲ.',
  },
  {
    number: 4,
    titleEn: 'Podi Number / Hissa Number',
    titleKn: 'ಪೋಡಿ ಸಂಖ್ಯೆ / ಹಿಸ್ಸಾ ಸಂಖ್ಯೆ',
    defEn: 'Identification numbers assigned to individual portions of family property that have been divided based on a registered family partition or partnership deed.',
    defKn: 'ನೋಂದಾಯಿತ ಕುಟುಂಬ ವಿಭಜನೆ ಅಥವಾ ಪಾಲುದಾರಿಕೆ ಪತ್ರದ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಕುಟುಂಬದ ಆಸ್ತಿಯ ಪ್ರತ್ಯೇಕ ಭಾಗಗಳಿಗೆ ನಿಗದಿಪಡಿಸಲಾದ ಗುರುತಿನ ಸಂಖ್ಯೆಗಳು.',
  },
  {
    number: 5,
    titleEn: 'Partition Deed',
    titleKn: 'ವಿಭಾಗ ಪತ್ರ',
    defEn: 'A registered legal document executed to formally divide a property among heirs, co-owners, or family members.',
    defKn: 'ಉತ್ತರಾಧಿಕಾರಿಗಳು, ಸಹ-ಮಾಲೀಕರು ಅಥವಾ ಕುಟುಂಬ ಸದಸ್ಯರ ನಡುವೆ ಆಸ್ತಿಯನ್ನು ಔಪಚಾರಿಕವಾಗಿ ಹಂಚಿಕೆ ಮಾಡಲು ನೋಂದಾಯಿಸಲಾದ ಕಾನೂನು ದಾಖಲೆ.',
  },
  {
    number: 6,
    titleEn: 'Notified Area',
    titleKn: 'ಅಧಿಸೂಚಿತ ಪ್ರದೇಶ',
    defEn: 'Properties that were managed by a Notified Area Committee prior to the formal establishment of Mandal Panchayats.',
    defKn: 'ಮಂಡಲ ಪಂಚಾಯಿತಿಗಳ ಔಪಚಾರಿಕ ಸ್ಥಾಪನೆಗೆ ಮೊದಲು ಅಧಿಸೂಚಿತ ಪ್ರದೇಶ ಸಮಿತಿ (ನೋಟಿಫೈಡ್ ಏರಿಯಾ ಕಮಿಟಿ) ಅಡಿಯಲ್ಲಿ ನಿರ್ವಹಿಸಲಾಗುತ್ತಿದ್ದ ಆಸ್ತಿಗಳು.',
  },
  {
    number: 7,
    titleEn: 'Land Revenue Act 1964',
    titleKn: 'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮ 1964',
    defEn: 'The Karnataka state legislation governing land administration, under which property titles are granted specifically under Sections 94C, 94CC, and 94D, typically for regularisation of unauthorised constructions or settlements.',
    defKn: 'ಭೂ ಆಡಳಿತವನ್ನು ನಿಯಂತ್ರಿಸುವ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಕಾಯ್ದೆ. ಅನಧಿಕೃತ ನಿರ್ಮಾಣಗಳು ಅಥವಾ ವಸಾಹತುಗಳ ನಿಯಮಿತೀಕರಣಕ್ಕಾಗಿ ಈ ಅಧಿನಿಯಮದ ಪ್ರಕರಣ 94ಸಿ, 94ಸಿಸಿ ಮತ್ತು 94ಡಿ ರ ಅಡಿಯಲ್ಲಿ ಹಕ್ಕುಪತ್ರ ನೀಡಲಾಗುತ್ತದೆ.',
  },
  {
    number: 8,
    titleEn: 'Rehabilitation Scheme',
    titleKn: 'ಪುನರ್ವಸತಿ ಯೋಜನೆ',
    defEn: 'A government scheme under which sites or buildings are allotted to families displaced by dam reservoirs, floods, or other disasters. Such properties, after the grant of entitlement deeds, are transferred to and maintained by the Gram Panchayat.',
    defKn: 'ಅಣೆಕಟ್ಟು ಜಲಾಶಯದ ಹಿನ್ನೀರು, ಪ್ರವಾಹ ಅಥವಾ ಇತರ ಗಂಡಾಂತರಗಳಿಂದ ಸಂತ್ರಸ್ಥರಾದ ಕುಟುಂಬಗಳಿಗೆ ಪುನರ್ವಸತಿ ಕಲ್ಪಿಸಲು ಸರ್ಕಾರ ಹಕ್ಕುಪತ್ರ ನೀಡಿ ಗ್ರಾಮ ಪಂಚಾಯಿತಿಗೆ ಹಸ್ತಾಂತರಿಸಿದ ನಿವೇಶನಗಳು ಅಥವಾ ಕಟ್ಟಡಗಳನ್ನು ಒಳಗೊಂಡ ಸರ್ಕಾರಿ ಯೋಜನೆ.',
  },
  {
    number: 9,
    titleEn: 'Karnataka Land Reforms Act 1961',
    titleKn: 'ಕರ್ನಾಟಕ ಭೂ-ಸುಧಾರಣಾ ಅಧಿನಿಯಮ 1961',
    defEn: 'Karnataka legislation under which dwelling site rights are granted to agricultural labourers and other eligible persons. Properties granted under Section 38A of this Act, along with the accompanying entitlement deed, are required to be recorded in the Gram Panchayat registers.',
    defKn: 'ಕೃಷಿ ಕಾರ್ಮಿಕರು ಮತ್ತು ಇತರ ಅರ್ಹ ವ್ಯಕ್ತಿಗಳಿಗೆ ವಾಸದ ನಿವೇಶನದ ಹಕ್ಕುಗಳನ್ನು ನೀಡುವ ಕರ್ನಾಟಕ ಕಾಯ್ದೆ. ಈ ಅಧಿನಿಯಮದ ಪ್ರಕರಣ 38ಎ ರ ಅಡಿಯಲ್ಲಿ ನೀಡಲಾದ ಆಸ್ತಿಗಳನ್ನು ಹಕ್ಕುಪತ್ರ ಸಮೇತ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ದಾಖಲೆಗಳಲ್ಲಿ ನೋಂದಾಯಿಸಬೇಕು.',
  },
  {
    number: 10,
    titleEn: 'RGRHCL',
    titleKn: 'ರಾಜೀವ್ ಗಾಂಧಿ ಗ್ರಾಮೀಣ ವಸತಿ ನಿಗಮ (ಸರ್ಕಾರದ ವಸತಿ ನಿಗಮ)',
    defEn: 'Rajiv Gandhi Rural Housing Corporation Limited — the state housing corporation through which the government allocates residential sites or buildings under various government housing schemes.',
    defKn: 'ರಾಜೀವ್ ಗಾಂಧಿ ಗ್ರಾಮೀಣ ವಸತಿ ನಿಗಮ ನಿಯಮಿತ — ಸರ್ಕಾರದ ವಿವಿಧ ವಸತಿ ಯೋಜನೆಗಳ ಅಡಿಯಲ್ಲಿ ವಸತಿ ನಿವೇಶನಗಳು ಅಥವಾ ಕಟ್ಟಡಗಳನ್ನು ಫಲಾನುಭವಿಗಳಿಗೆ ಹಂಚಿಕೆ ಮಾಡಲು ರಾಜ್ಯ ಸರ್ಕಾರ ಬಳಸುವ ವಸತಿ ನಿಗಮ.',
  },
  {
    number: 11,
    titleEn: 'Layout Plan',
    titleKn: 'ವಿನ್ಯಾಸ ನಕ್ಷೆ',
    defEn: 'A technical drawing of a proposed development area, showing the division of land into sites, roads, and civic amenity areas, which has received formal approval from a competent planning authority.',
    defKn: 'ಪ್ರಸ್ತಾವಿತ ಅಭಿವೃದ್ಧಿ ಪ್ರದೇಶದ ತಾಂತ್ರಿಕ ರೇಖಾಚಿತ್ರ; ಇದರಲ್ಲಿ ಜಮೀನನ್ನು ನಿವೇಶನಗಳು, ರಸ್ತೆಗಳು ಮತ್ತು ನಾಗರಿಕ ಸೌಲಭ್ಯ ಪ್ರದೇಶಗಳಾಗಿ ವಿಂಗಡಿಸಿರುತ್ತದೆ. ಸಕ್ಷಮ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ಔಪಚಾರಿಕ ಅನುಮೋದನೆ ಪಡೆದ ನಕ್ಷೆ.',
  },
  {
    number: 12,
    titleEn: 'Building Permit',
    titleKn: 'ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ',
    defEn: 'Formal written authorisation or an approved building plan issued by the Gram Panchayat permitting the construction or modification of a building within its jurisdiction.',
    defKn: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅಥವಾ ಮಾರ್ಪಾಡಿಗೆ ಅನುಮತಿ ನೀಡಲು ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಹೊರಡಿಸುವ ಔಪಚಾರಿಕ ಲಿಖಿತ ಅನುಮತಿ ಪತ್ರ ಅಥವಾ ಅನುಮೋದಿತ ಕಟ್ಟಡ ನಕ್ಷೆ.',
  },
  {
    number: 13,
    titleEn: 'Conversion Order',
    titleKn: 'ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ',
    defEn: 'An official order issued by the Revenue Department converting agricultural land to non-agricultural use in accordance with the Karnataka Land Revenue Act. Such an order is a prerequisite for developing land for residential, commercial, or industrial purposes.',
    defKn: 'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮದ ಅನ್ವಯ ಕಂದಾಯ ಇಲಾಖೆ ಹೊರಡಿಸುವ ಅಧಿಕೃತ ಆದೇಶ; ಇದರ ಮೂಲಕ ಕೃಷಿ ಜಮೀನನ್ನು ವ್ಯವಸಾಯೇತರ ಉದ್ದೇಶಕ್ಕಾಗಿ ಪರಿವರ್ತಿಸಲಾಗುತ್ತದೆ. ವಸತಿ, ವಾಣಿಜ್ಯ ಅಥವಾ ಕೈಗಾರಿಕಾ ಉದ್ದೇಶಕ್ಕಾಗಿ ಜಮೀನು ಅಭಿವೃದ್ಧಿ ಮಾಡಲು ಇದು ಪೂರ್ವ ಷರತ್ತಾಗಿದೆ.',
  },
  {
    number: 14,
    titleEn: 'Converted Land',
    titleKn: 'ಪರಿವರ್ತಿತ ಜಮೀನು',
    defEn: 'Agricultural land that has been formally converted to non-agricultural use through a Conversion Order and has received the required approval from the competent planning authority.',
    defKn: 'ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶದ ಮೂಲಕ ಕೃಷಿ ಉದ್ದೇಶದಿಂದ ವ್ಯವಸಾಯೇತರ ಉದ್ದೇಶಕ್ಕೆ ಕಾನೂನುಬದ್ಧವಾಗಿ ಪರಿವರ್ತಿಸಲ್ಪಟ್ಟ ಮತ್ತು ಸಕ್ಷಮ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ಅನುಮೋದನೆ ಪಡೆದ ಜಮೀನು.',
  },
  {
    number: 15,
    titleEn: 'Non-Converted Land',
    titleKn: 'ಪರಿವರ್ತನೆಯಾಗದ ಜಮೀನು',
    defEn: 'Land on which buildings have been constructed without a formal Conversion Order, or land that has been converted but not yet developed or approved by the competent authority for a layout.',
    defKn: 'ಔಪಚಾರಿಕ ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶವಿಲ್ಲದೆ ಕಟ್ಟಡ ನಿರ್ಮಿಸಲಾದ ಜಮೀನು; ಅಥವಾ ಭೂ ಪರಿವರ್ತನೆ ಆಗಿದ್ದರೂ ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರದಿಂದ ವಿನ್ಯಾಸ ನಕ್ಷೆಗೆ ಅನುಮೋದನೆ ಪಡೆಯದೆ ಅಭಿವೃದ್ಧಿ ಮಾಡದ ಜಮೀನು.',
  },
  {
    number: 16,
    titleEn: 'UDA – Urban Development Authority',
    titleKn: 'ನಗರಾಭಿವೃದ್ಧಿ ಪ್ರಾಧಿಕಾರ',
    defEn: 'The statutory planning authority responsible for regulating land use, issuing technical layout approvals, and overseeing urban development within a designated urban development area.',
    defKn: 'ನಿಯೋಜಿತ ನಗರ ಅಭಿವೃದ್ಧಿ ಪ್ರದೇಶದಲ್ಲಿ ಭೂ ಬಳಕೆ ನಿಯಂತ್ರಣ, ತಾಂತ್ರಿಕ ವಿನ್ಯಾಸ ನಕ್ಷೆ ಅನುಮೋದನೆ ಮತ್ತು ನಗರ ಅಭಿವೃದ್ಧಿ ಮೇಲ್ವಿಚಾರಣೆ ನಡೆಸುವ ಶಾಸನಬದ್ಧ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ.',
  },
  {
    number: 17,
    titleEn: 'Mandal / Group Panchayat',
    titleKn: 'ಮಂಡಲ / ಗ್ರೂಪ್ ಪಂಚಾಯಿತಿ',
    defEn: 'Historical local government bodies that existed prior to the current Gram Panchayat system. Layout approvals and property records issued by these bodies are still referenced in current e-Khata documentation.',
    defKn: 'ಪ್ರಸ್ತುತ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ವ್ಯವಸ್ಥೆಗೆ ಮೊದಲು ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದ ಐತಿಹಾಸಿಕ ಸ್ಥಳೀಯ ಸ್ವಯಂ ಆಡಳಿತ ಸಂಸ್ಥೆಗಳು. ಇವು ನೀಡಿದ ವಿನ್ಯಾಸ ಅನುಮೋದನೆಗಳು ಮತ್ತು ಆಸ್ತಿ ದಾಖಲೆಗಳನ್ನು ಇಂದಿಗೂ ಇ-ಖಾತಾ ದಾಖಲಾತಿಯಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾಗುತ್ತದೆ.',
  },
  {
    number: 18,
    titleEn: 'LPA – Local Planning Authority',
    titleKn: 'ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ',
    defEn: 'A statutory authority responsible for granting technical layout approvals and regulating land use within a designated local planning area. The LPA approves layout plans before sites can be legally sold or developed.',
    defKn: 'ನಿಯೋಜಿತ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದಲ್ಲಿ ತಾಂತ್ರಿಕ ವಿನ್ಯಾಸ ನಕ್ಷೆ ಅನುಮೋದನೆ ನೀಡಲು ಮತ್ತು ಭೂ ಬಳಕೆ ನಿಯಂತ್ರಿಸಲು ಜವಾಬ್ದಾರವಾದ ಶಾಸನಬದ್ಧ ಪ್ರಾಧಿಕಾರ. ನಿವೇಶನಗಳನ್ನು ಕಾನೂನುಬದ್ಧವಾಗಿ ಮಾರಾಟ ಮಾಡಲು ಅಥವಾ ಅಭಿವೃದ್ಧಿ ಮಾಡಲು ಮೊದಲು ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದ ಅನುಮೋದನೆ ಅಗತ್ಯ.',
  },
  {
    number: 19,
    titleEn: 'Gram Panchayat',
    titleKn: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ',
    defEn: 'The primary local self-government body at the village level, responsible for property tax administration, maintaining property registers (Forms 9, 11A, 11B), issuing building permits, and processing e-Khata applications within its jurisdiction.',
    defKn: 'ಗ್ರಾಮ ಮಟ್ಟದ ಪ್ರಾಥಮಿಕ ಸ್ಥಳೀಯ ಸ್ವಯಂ ಆಡಳಿತ ಸಂಸ್ಥೆ. ಇದು ಆಸ್ತಿ ತೆರಿಗೆ ಆಡಳಿತ, ಆಸ್ತಿ ದಾಖಲೆಗಳ (ನಮೂನೆ ೯, ೧೧ಎ, ೧೧ಬಿ) ನಿರ್ವಹಣೆ, ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ ನೀಡುವಿಕೆ ಮತ್ತು ತನ್ನ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಇ-ಖಾತಾ ಅರ್ಜಿಗಳ ಪ್ರಕ್ರಿಯೆ ನಿರ್ವಹಿಸುತ್ತದೆ.',
  },
  {
    number: 20,
    titleEn: 'Single Layout Plan',
    titleKn: 'ಏಕ ವಿನ್ಯಾಸ / ಏಕ ನಿವೇಶನ',
    defEn: '"Single Layout Plan" refers to land converted for non-agricultural purposes that has not received layout approval from a Planning Authority.',
    defKn: '"ಏಕ ವಿನ್ಯಾಸ" ಎಂದರೆ ವ್ಯವಸಾಯೇತರ ಉದ್ದೇಶಕ್ಕಾಗಿ ಭೂ-ಪರಿವರ್ತಿತ, ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ವಿನ್ಯಾಸ ಅನುಮೋದನೆಯಾಗದ ಜಮೀನು.',
  },
  {
    number: 21,
    titleEn: 'RTC (Pahani)',
    titleKn: 'ಪಹಣಿ ಪತ್ರ',
    defEn: 'Record of Rights, Tenancy and Crops — a mandatory revenue document that records land ownership, tenancy details, and crop information. It is used to verify the ownership and land-use status of agricultural or non-converted land.',
    defKn: 'ಹಕ್ಕು, ಗೇಣಿ ಮತ್ತು ಬೆಳೆ ದಾಖಲೆ (ಪಹಣಿ) — ಭೂ ಮಾಲೀಕತ್ವ, ಗೇಣಿ ವಿವರಗಳು ಮತ್ತು ಬೆಳೆ ಮಾಹಿತಿಯನ್ನು ದಾಖಲಿಸುವ ಕಡ್ಡಾಯ ಕಂದಾಯ ದಾಖಲೆ. ಕೃಷಿ ಜಮೀನು ಅಥವಾ ಪರಿವರ್ತನೆಯಾಗದ ಜಮೀನಿನ ಮಾಲೀಕತ್ವ ಮತ್ತು ಭೂ ಬಳಕೆ ಸ್ಥಿತಿಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಬಳಸಲಾಗುತ್ತದೆ.',
  },
  {
    number: 22,
    titleEn: 'Relinquishment Deed',
    titleKn: 'ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ / ತ್ಯಾಗ ಪತ್ರ',
    defEn: 'A registered legal document through which a property owner formally surrenders or relinquishes their ownership rights or claims over a property in favour of another person or authority.',
    defKn: 'ಆಸ್ತಿ ಮಾಲೀಕರು ತಮ್ಮ ಆಸ್ತಿಯ ಮೇಲಿನ ಮಾಲೀಕತ್ವ ಹಕ್ಕುಗಳನ್ನು ಇನ್ನೊಬ್ಬ ವ್ಯಕ್ತಿ ಅಥವಾ ಪ್ರಾಧಿಕಾರದ ಪರವಾಗಿ ಔಪಚಾರಿಕವಾಗಿ ಬಿಟ್ಟುಕೊಡಲು ನೋಂದಾಯಿಸಲಾದ ಕಾನೂನು ದಾಖಲೆ. ಇದನ್ನು ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ ಅಥವಾ ತ್ಯಾಗ ಪತ್ರ ಎಂದೂ ಕರೆಯಲಾಗುತ್ತದೆ.',
  },
  {
    number: 23,
    titleEn: 'Local Planning Area',
    titleKn: 'ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶ',
    defEn: 'An area in which a Planning Authority has been established under the Karnataka Town and Country Planning Act, 1961 (Karnataka Act No. 11 of 1963). Land development, layout approvals, and change of land use within this area fall under the jurisdiction of the Local Planning Authority (LPA).',
    defKn: 'ಕರ್ನಾಟಕ ನಗರ ಮತ್ತು ಗ್ರಾಮಾಂತರ ಯೋಜನೆ ಅಧಿನಿಯಮ, 1961 (1963ರ ಕರ್ನಾಟಕ ಅಧಿನಿಯಮ ಸಂಖ್ಯೆ: 11) ರ ಅಡಿಯಲ್ಲಿ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ ರಚನೆಯಾದ ಪ್ರದೇಶ. ಈ ಪ್ರದೇಶದಲ್ಲಿ ಜಮೀನು ಅಭಿವೃದ್ಧಿ, ವಿನ್ಯಾಸ ನಕ್ಷೆ ಅನುಮೋದನೆ ಮತ್ತು ಭೂ ಬಳಕೆ ಬದಲಾವಣೆ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ (LPA) ವ್ಯಾಪ್ತಿಗೆ ಒಳಪಡುತ್ತದೆ.',
  },
  {
    number: 24,
    titleEn: 'Civic Amenities (CA)',
    titleKn: 'ನಾಗರಿಕ ಸೌಲಭ್ಯಗಳು',
    defEn: 'Areas designated within an approved layout plan for public infrastructure including roads, parks, parking spaces, civic amenity sites, public utility zones, and other basic infrastructure. These areas cannot be sold as private sites and are reserved for community use.',
    defKn: 'ಬಡಾವಣೆ ವಿನ್ಯಾಸದ ಪ್ರಕಾರ ರಸ್ತೆಗಳು, ಉದ್ಯಾನವನಗಳು, ಪಾರ್ಕಿಂಗ್ ಸ್ಥಳಗಳು, ನಾಗರಿಕ ಸೌಲಭ್ಯದ ಪ್ರದೇಶಗಳು (Civic Amenities), ಸಾರ್ವಜನಿಕ ಬಳಕೆಯ ಪ್ರದೇಶಗಳು ಮತ್ತು ಇತರ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳ ಪ್ರದೇಶಗಳು. ಇವುಗಳನ್ನು ಖಾಸಗಿ ನಿವೇಶನಗಳಾಗಿ ಮಾರಾಟ ಮಾಡಲಾಗದು; ಇವು ಸಮುದಾಯ ಬಳಕೆಗಾಗಿ ಮೀಸಲಿಡಲಾಗಿರುತ್ತವೆ.',
  },
  {
    number: 25,
    titleEn: 'Site',
    titleKn: 'ನಿವೇಶನ',
    defEn: 'A portion of a developed area that has been divided into plots for residential, commercial, non-residential, or industrial purposes. Also refers to a specific parcel of land held under a defined title on which no building has been constructed.',
    defKn: '"ನಿವೇಶನ" ಎಂದರೆ ವಸತಿ, ವಾಣಿಜ್ಯ, ವಸತಿಯೇತರ ಅಥವಾ ಕೈಗಾರಿಕಾ ಉದ್ದೇಶಕ್ಕೆ ಸೈಟುಗಳಾಗಿ ವಿಭಾಗಿಸಲಾದ, ಅಭಿವೃದ್ಧಿ ಪಡಿಸಿದ ಪ್ರದೇಶದ ಭಾಗ ಅಥವಾ ಕಟ್ಟಡವು ಇಲ್ಲದ ನಿರ್ದಿಷ್ಟ ಶೀರ್ಷಿಕೆ ಆಧಾರದ ಜಾಗ.',
  },
  {
    number: 26,
    titleEn: 'Corporation / Board / Limited / Authority',
    titleKn: 'ನಿಗಮ / ಮಂಡಳಿ / ನಿಯಮಿತ / ಪ್ರಾಧಿಕಾರ',
    defEn: 'A Possession Certificate (ಭೂ-ಸ್ವಾಧೀನ ಪತ್ರ) issued by the respective Corporation, Board, or Authority.',
    defKn: 'ಸಂಬಂಧಿತ ನಿಗಮ, ಮಂಡಳಿ ಅಥವಾ ಪ್ರಾಧಿಕಾರ ನೀಡಿದ ಭೂ-ಸ್ವಾಧೀನ ಪತ್ರ.',
  },
];

const GlossaryPage = ({ onNavigate }) => {
  return (
    <div className="glossary-page">
      <NavigationBar
        variant="homepage"
        onNavigate={onNavigate}
        onCitizenLogin={() => onNavigate && onNavigate('login')}
        onDeptLogin={() => {}}
      />

      <div className="glossary-page__hero">
        <div className="glossary-page__hero-inner">
          <button
            type="button"
            className="glossary-page__back"
            onClick={() => onNavigate && onNavigate('home')}
            aria-label="Go back"
          >
            <span className="material-icons-outlined">arrow_back</span>
          </button>
          <div className="glossary-page__hero-text">
            <p className="glossary-page__subtitle">Reference</p>
            <h1 className="glossary-page__title">Glossary — ಪರಿಭಾಷಾ ಕೋಶ</h1>
          </div>
        </div>
      </div>

      <div className="glossary-page__content">
        <div className="glossary-page__content-inner">
          {GLOSSARY_TERMS.map((term) => (
            <div key={term.number} className="glossary-term">
              <div className="glossary-term__header">
                <span className="glossary-term__number">{term.number}</span>
                <div className="glossary-term__titles">
                  <span className="glossary-term__title-en">{term.titleEn}</span>
                  <span className="glossary-term__title-kn">{term.titleKn}</span>
                </div>
              </div>
              <div className="glossary-term__body">
                <div className="glossary-term__def">
                  <span className="glossary-term__lang-label">English</span>
                  <div className="glossary-term__def-text">
                    {term.defEn.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    {term.defEnExamples && (
                      <ul className="glossary-term__examples">
                        {term.defEnExamples.map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="glossary-term__divider" />
                <div className="glossary-term__def">
                  <span className="glossary-term__lang-label">ಕನ್ನಡ</span>
                  <div className="glossary-term__def-text">
                    {term.defKn.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    {term.defKnExamples && (
                      <ul className="glossary-term__examples">
                        {term.defKnExamples.map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer variant="homepage" />
    </div>
  );
};

export default GlossaryPage;
