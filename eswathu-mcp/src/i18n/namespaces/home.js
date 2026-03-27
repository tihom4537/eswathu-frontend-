/**
 * home namespace — HomePage, LoginPage, CitizenLogin-HomePage
 * Kannada card titles sourced from e-khata-processes.md (bilingual table).
 * All other Kannada strings self-generated — see new-translations.md for review list.
 */
const home = {
  en: {
    /* ── Carousel / Hero ── */
    hp_carousel_subtitle: 'eKhata - Your Digital Property Identity',
    hp_carousel_heading: 'Your Property Records, Now Verified and Digital',
    hp_carousel_desc: 'E-Swathu helps rural citizens in Karnataka get a legally recognised digital record of their residential property. Apply for your eKhata, check status, download documents — all in one place.',
    hp_carousel_btn_apply: 'Apply for New E-Khata',
    hp_carousel_btn_status: 'Check Application Status',

    /* ── All Citizen Services section heading ── */
    hp_services_subtitle: 'All Citizen Services',
    hp_services_title: 'What would you like to do today?',

    /* ── Section headers ── */
    hp_section_ekhata: 'e-Khata Related Services',
    hp_section_conversions: 'Conversions',
    hp_section_checkStatus: 'Check Status',
    hp_section_download: 'Download',
    hp_section_print: 'Print',
    hp_section_mutation: 'Mutation and Transfer Applications',
    hp_section_reports: 'Reports and Dashboards',

    /* ── e-Khata Related Services cards ── */
    card_newEkhata_title: 'Apply for New e-Khata',
    card_pidEkhata_title: 'Apply for e-Khata for Properties with a PID',
    card_newLayouts_title: 'Apply for e-Khata for New Layouts',
    card_newApartments_title: 'Apply for e-Khata for New Apartments',
    card_pending_title: 'Complete Pending Application',
    card_pending_desc: 'Find and resume your application from where you left off — continue any previously started application through to completion.',
    card_reportObjection_title: 'Report an Objection',
    card_reportObjection_desc: 'If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments',
    card_returnApps_title: 'Return Applications (for Modifications)',
    card_returnApps_desc: 'If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments',

    /* ── Conversions ── */
    card_conv11ATo11B_title: 'Conversion of Form 11A to Form 11B',
    card_convApartments_title: 'Conversion of Form 11A/11B to Apartment/Flats',
    card_conv11BTransactable_title: 'Conversion of Form 11B from Non-Transactable to Transactable',

    /* ── Check Status / Download / Print ── */
    card_checkStatus_title: 'Check Status of Application',
    card_checkStatus_desc: 'Track the current status of your submitted e-Khata application at any stage of the processing workflow.',
    card_downloadEkhata_title: 'Download and Print e-Khata',
    card_downloadEkhata_desc: 'Download and print your approved e-Khata document once your application has been successfully processed and approved.',
    card_checkRegistrable_title: 'Check Whether Property Can Be Registered or Not',

    /* ── Mutation & Transfer ── */
    card_mutation_title: 'Mutation and Transfer',

    /* ── Reports & Dashboards ── */
    card_reports_title: 'Reports and Dashboards',
    card_reports_desc: 'Access government dashboards and statistical reports on e-Khata applications, property registrations, and Gram Panchayat activity across Karnataka.',

    /* ── Understanding E-Khata section ── */
    hp_ekhata_subtitle: 'Understanding E-Khata',
    hp_ekhata_title: 'What is e-Khata and why do you need it?',
    hp_ekhata_card1_title: 'What is eKhata ?',
    hp_ekhata_card1_desc: 'eKhata (ಇ-ಖಾತೆ) is a digital record of ownership for residential properties in rural Karnataka, issued by your Gram Panchayat through E-Swathu. It is the official proof that a property is registered in your name and your documentation required to pay property tax.',
    hp_ekhata_card2_title: 'Why is it required?',
    hp_ekhata_card2_desc: 'You need e-Khata to pay property tax, sell or transfer your property, apply for bank loans using your property, obtain building permits, and for various government welfare schemes.',
    hp_ekhata_card3_title: 'Who can apply for e-Khata on e-Swathu ?',
    hp_ekhata_card3_desc: 'Any citizen who owns a residential property within a Gram Panchayat jurisdiction in Karnataka is eligible. This applies to properties in rural areas, not urban city corporation limits.',
    hp_ekhata_card4_title: 'What documents do you need?',
    hp_ekhata_card4_desc: 'Sale deed and all other documents related to your property, Aadhaar card, and Encumbrance certificate from Kaveri (15 days validity)',

    /* ── Classification section ── */
    hp_class_subtitle: 'Understanding 11a and 11b',
    hp_class_title: 'Two Types of Khata Classification',
    hp_class_desc: "Karnataka's panchayat land records use a classification system. Understanding which type applies to your property is the first and most important step before applying.",
    hp_class_11a_subtitle: 'Form 11A · Regular Khata',
    hp_class_11a_title: '11A — Inside GramTrana Land',
    hp_class_11a_desc: 'Issued for properties that are fully legal, approved, and have clear title. This is the standard form for properties that comply with all town planning, land use, and revenue rules.',
    hp_class_11b_subtitle: 'Form 11B · Khata',
    hp_class_11b_title: '11B — Outside GramTrana Land',
    hp_class_11b_desc: 'Issued for properties where ownership is claimed but the land may have irregularities, such as agricultural land used for non-agricultural purposes without conversion, or layouts not formally approved.',
    hp_class_item1: 'Properties with clear RTC (Record of Rights, Tenancy and Crops)',
    hp_class_item2: 'Land with proper conversion order (if applicable)',
    hp_class_item3: 'Approved layouts or sites within Gram Panchayat limits',
    hp_class_item4: 'Eligible for bank loans, building licences, and all legal transactions',
    hp_class_item5: 'Can be used to apply for all government welfare schemes',
    hp_class_infobox_strong: 'Not sure which applies to you?',
    hp_class_infobox_desc: "When you begin your application, the system will guide you based on your property's documents. If your property was built with proper GP jurisdiction, apply for A-Khata. If there were any irregularities in construction or land records, B-Khata is the right starting point. Your GP staff can also guide you. You can also use the helpline number given below to get assistance with this.",

    /* ── Login page ── */
    login_subtitle: 'Citizen Services',
    login_title: 'Login',
    login_citizen: 'Citizen login',
    login_gp: 'GP Application login',
    login_mobile: 'Mobile Number:',
    login_bsk: 'BSK Login ID (Regd. Phone Number):',
    login_captcha_label: 'Captcha:',
    login_captcha_placeholder: 'Enter Captcha Answer',
    login_captcha_error: 'Incorrect captcha. Please try again.',
    login_otp_timer: 'Please enter OTP within {seconds} seconds',
    login_otp_label: 'Enter OTP:',
    login_otp_placeholder: 'Enter OTP',
    login_btn_get_otp: 'Get OTP',
    login_btn_login: 'Login',
  },
  kn: {
    /* ── Carousel / Hero (self-generated) ── */
    hp_carousel_subtitle: 'ಇ-ಖಾತಾ — ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಆಸ್ತಿ ಗುರುತು',
    hp_carousel_heading: 'ನಿಮ್ಮ ಆಸ್ತಿ ದಾಖಲೆಗಳು, ಈಗ ಪರಿಶೀಲಿತ ಮತ್ತು ಡಿಜಿಟಲ್',
    hp_carousel_desc: 'ಇ-ಸ್ವತ್ಥು ಕರ್ನಾಟಕದ ಗ್ರಾಮೀಣ ನಾಗರಿಕರಿಗೆ ತಮ್ಮ ವಸತಿ ಆಸ್ತಿಯ ಕಾನೂನುಬದ್ಧ ಡಿಜಿಟಲ್ ದಾಖಲೆ ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಇ-ಖಾತಾ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ, ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ, ದಾಖಲೆಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ — ಎಲ್ಲವೂ ಒಂದೇ ಜಾಗದಲ್ಲಿ.',
    hp_carousel_btn_apply: 'ಹೊಸ ಇ-ಖಾತಾಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    hp_carousel_btn_status: 'ಅರ್ಜಿ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ',

    /* ── All Citizen Services heading (self-generated) ── */
    hp_services_subtitle: 'ಎಲ್ಲಾ ನಾಗರಿಕ ಸೇವೆಗಳು',
    hp_services_title: 'ಇಂದು ನೀವು ಏನು ಮಾಡಲು ಬಯಸುತ್ತೀರಿ?',

    /* ── Section headers (self-generated) ── */
    hp_section_ekhata: 'ಇ-ಖಾತಾ ಸಂಬಂಧಿ ಸೇವೆಗಳು',
    hp_section_conversions: 'ಪರಿವರ್ತನೆಗಳು',
    hp_section_checkStatus: 'ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ',
    hp_section_download: 'ಡೌನ್‌ಲೋಡ್',
    hp_section_print: 'ಮುದ್ರಿಸಿ',
    hp_section_mutation: 'ಮ್ಯುಟೇಷನ್ ಮತ್ತು ವರ್ಗಾವಣೆ ಅರ್ಜಿಗಳು',
    hp_section_reports: 'ವರದಿಗಳು ಮತ್ತು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು',

    /* ── e-Khata Related Services cards (sourced from e-khata-processes.md) ── */
    card_newEkhata_title: 'ಹೊಸ ಇ-ಖಾತಾ ಪಡೆಯಲು ಅರ್ಜಿ',
    card_pidEkhata_title: 'ಈಗಾಗಲೇ ಪಿಐಡಿ ಸಂಖ್ಯೆ ಹೊಂದಿರುವ ಆಸ್ತಿಗಳಿಗೆ ಇ-ಖಾತಾ ಪಡೆಯಲು ಅರ್ಜಿ',
    card_newLayouts_title: 'ಹೊಸ ವಿನ್ಯಾಸ ನಕ್ಷೆ ನಿವೇಶನಗಳಿಗೆ ಇ-ಖಾತಾ ಪಡೆಯಲು ಅರ್ಜಿ',
    card_newApartments_title: 'ಹೊಸ ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳಿಗೆ ಇ-ಖಾತಾ ಪಡೆಯಲು ಅರ್ಜಿ',
    card_pending_title: 'ಬಾಕಿ ಇರುವ ಅರ್ಜಿ ಪೂರ್ಣಗೊಳಿಸಿ',
    card_pending_desc: 'ನೀವು ನಿಲ್ಲಿಸಿದ ಹಂತದಿಂದ ಅರ್ಜಿಯನ್ನು ಮರಳಿ ಶುರು ಮಾಡಿ — ಮೊದಲು ಪ್ರಾರಂಭಿಸಿದ ಯಾವುದೇ ಅರ್ಜಿಯನ್ನು ಮುಗಿಸಿ.',
    card_reportObjection_title: 'ಆಕ್ಷೇಪಣೆ ಸಲ್ಲಿಸಿ',
    card_reportObjection_desc: 'ಪ್ರಸ್ತುತ ಆಸ್ತಿ ತೆರಿಗೆ ಪಾವತಿಯಾಗದಿದ್ದರೆ, ಪಾವತಿ ಮಾಡಲು ಹೊಸ ಇ-ಖಾತಾ ಪಡೆಯಬೇಕು.',
    card_returnApps_title: 'ಹಿಂದಿರುಗಿದ ಅರ್ಜಿಗಳು (ತಿದ್ದುಪಡಿಗಾಗಿ)',
    card_returnApps_desc: 'ಪ್ರಸ್ತುತ ಆಸ್ತಿ ತೆರಿಗೆ ಪಾವತಿಯಾಗದಿದ್ದರೆ, ಪಾವತಿ ಮಾಡಲು ಹೊಸ ಇ-ಖಾತಾ ಪಡೆಯಬೇಕು.',

    /* ── Conversions (sourced from e-khata-processes.md) ── */
    card_conv11ATo11B_title: 'ನಮೂನೆ ೧೧ಎ ನಿಂದ ನಮೂನೆ ೧೧ಬಿ ಗೆ ಪರಿವರ್ತನೆ',
    card_convApartments_title: 'ನಮೂನೆ ೧೧ಎ / ೧೧ಬಿ ನಿಂದ ಅಪಾರ್ಟ್‌ಮೆಂಟ್ / ಫ್ಲ್ಯಾಟ್‌ಗಳಿಗೆ ಪರಿವರ್ತನೆ',
    card_conv11BTransactable_title: 'ನಮೂನೆ ೧೧ಬಿ – ವ್ಯವಹಾರಯೋಗ್ಯವಲ್ಲದ ಸ್ಥಿತಿಯಿಂದ ವ್ಯವಹಾರಯೋಗ್ಯ ಸ್ಥಿತಿಗೆ ಪರಿವರ್ತನೆ',

    /* ── Check Status / Download / Print (self-generated) ── */
    card_checkStatus_title: 'ಅರ್ಜಿ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ',
    card_checkStatus_desc: 'ಸಲ್ಲಿಸಿದ ಇ-ಖಾತಾ ಅರ್ಜಿಯ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಯ ಯಾವ ಹಂತದಲ್ಲಿಯೂ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.',
    card_downloadEkhata_title: 'ಇ-ಖಾತಾ ಡೌನ್‌ಲೋಡ್ ಮತ್ತು ಮುದ್ರಣ',
    card_downloadEkhata_desc: 'ಅರ್ಜಿ ಯಶಸ್ವಿಯಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಂಡ ನಂತರ ಅನುಮೋದಿಸಿದ ಇ-ಖಾತಾ ದಾಖಲೆಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಮುದ್ರಿಸಿ.',
    card_checkRegistrable_title: 'ಆಸ್ತಿ ನೋಂದಣಿ ಸಾಧ್ಯವೇ ಎಂದು ಪರಿಶೀಲಿಸಿ',

    /* ── Mutation & Transfer (sourced from e-khata-processes.md) ── */
    card_mutation_title: 'ಮ್ಯುಟೇಷನ್ ಮತ್ತು ವರ್ಗಾವಣೆ',

    /* ── Reports & Dashboards (self-generated) ── */
    card_reports_title: 'ವರದಿಗಳು ಮತ್ತು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು',
    card_reports_desc: 'ಇ-ಖಾತಾ ಅರ್ಜಿಗಳು, ಆಸ್ತಿ ನೋಂದಣಿ ಮತ್ತು ಕರ್ನಾಟಕದಾದ್ಯಂತ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಚಟುವಟಿಕೆಗಳ ಕುರಿತು ಸರ್ಕಾರಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು ಮತ್ತು ವರದಿಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.',

    /* ── Understanding E-Khata (self-generated) ── */
    hp_ekhata_subtitle: 'ಇ-ಖಾತಾ ಅರ್ಥ',
    hp_ekhata_title: 'ಇ-ಖಾತಾ ಎಂದರೇನು ಮತ್ತು ಅದು ಏಕೆ ಅಗತ್ಯ?',
    hp_ekhata_card1_title: 'ಇ-ಖಾತಾ ಎಂದರೇನು?',
    hp_ekhata_card1_desc: 'ಇ-ಖಾತಾ (ಇ-ಖಾತೆ) ಎಂದರೆ ಕರ್ನಾಟಕದ ಗ್ರಾಮೀಣ ಭಾಗದ ವಸತಿ ಆಸ್ತಿಗಳಿಗೆ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಇ-ಸ್ವತ್ಥು ಮೂಲಕ ನೀಡುವ ಡಿಜಿಟಲ್ ಮಾಲೀಕತ್ವ ದಾಖಲೆ. ಆಸ್ತಿ ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ ಎಂಬ ಅಧಿಕೃತ ಪುರಾವೆ ಮತ್ತು ಆಸ್ತಿ ತೆರಿಗೆ ಪಾವತಿಸಲು ಅಗತ್ಯ ದಾಖಲೆ.',
    hp_ekhata_card2_title: 'ಇದು ಏಕೆ ಅಗತ್ಯ?',
    hp_ekhata_card2_desc: 'ಆಸ್ತಿ ತೆರಿಗೆ ಪಾವತಿಸಲು, ಆಸ್ತಿ ಮಾರಾಟ ಅಥವಾ ವರ್ಗಾಯಿಸಲು, ಬ್ಯಾಂಕ್ ಸಾಲ ಪಡೆಯಲು, ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ ಪಡೆಯಲು ಮತ್ತು ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಇ-ಖಾತಾ ಅಗತ್ಯ.',
    hp_ekhata_card3_title: 'ಇ-ಸ್ವತ್ಥುವಿನಲ್ಲಿ ಇ-ಖಾತಾಗೆ ಯಾರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು?',
    hp_ekhata_card3_desc: 'ಕರ್ನಾಟಕದ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ವಸತಿ ಆಸ್ತಿ ಹೊಂದಿರುವ ಯಾವುದೇ ನಾಗರಿಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು. ಇದು ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆ, ನಗರ ನಿಗಮ ವ್ಯಾಪ್ತಿಗಲ್ಲ.',
    hp_ekhata_card4_title: 'ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?',
    hp_ekhata_card4_desc: 'ಕ್ರಯ ಪತ್ರ ಮತ್ತು ಆಸ್ತಿ ಸಂಬಂಧಿ ಎಲ್ಲಾ ದಾಖಲೆಗಳು, ಆಧಾರ್ ಕಾರ್ಡ್ ಮತ್ತು ಕಾವೇರಿ ಆನ್‌ಲೈನ್‌ನಿಂದ ಎನ್‌ಕಂಬ್ರೆನ್ಸ್ ಸರ್ಟಿಫಿಕೇಟ್ (15 ದಿನಗಳ ಮಾನ್ಯತೆ).',

    /* ── Classification section (self-generated) ── */
    hp_class_subtitle: '೧೧ಎ ಮತ್ತು ೧೧ಬಿ ಅರ್ಥ',
    hp_class_title: 'ಖಾತೆ ವರ್ಗೀಕರಣದ ಎರಡು ವಿಧಗಳು',
    hp_class_desc: 'ಕರ್ನಾಟಕದ ಪಂಚಾಯಿತಿ ಭೂ ದಾಖಲೆಗಳು ವರ್ಗೀಕರಣ ವ್ಯವಸ್ಥೆಯನ್ನು ಅನುಸರಿಸುತ್ತವೆ. ನಿಮ್ಮ ಆಸ್ತಿಗೆ ಯಾವ ವಿಧ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದು ತಿಳಿಯುವುದು ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಮೊದಲ ಮತ್ತು ಅತ್ಯಂತ ಮಹತ್ವದ ಹೆಜ್ಜೆ.',
    hp_class_11a_subtitle: 'ನಮೂನೆ ೧೧ಎ · ನಿಯಮಿತ ಖಾತೆ',
    hp_class_11a_title: '೧೧ಎ — ಗ್ರಾಮ ಠಾಣ ಒಳಗಿನ ಜಮೀನು',
    hp_class_11a_desc: 'ಸಂಪೂರ್ಣ ಕಾನೂನುಬದ್ಧ, ಅನುಮೋದಿತ ಮತ್ತು ಸ್ಪಷ್ಟ ಹಕ್ಕು ಹೊಂದಿರುವ ಆಸ್ತಿಗಳಿಗೆ ನೀಡಲಾಗುತ್ತದೆ. ಪಟ್ಟಣ ಯೋಜನೆ, ಭೂ ಬಳಕೆ ಮತ್ತು ಕಂದಾಯ ನಿಯಮಗಳನ್ನು ಅನುಸರಿಸುವ ಆಸ್ತಿಗಳಿಗೆ ಇದು ಪ್ರಮಾಣಿತ ನಮೂನೆ.',
    hp_class_11b_subtitle: 'ನಮೂನೆ ೧೧ಬಿ · ಖಾತೆ',
    hp_class_11b_title: '೧೧ಬಿ — ಗ್ರಾಮ ಠಾಣ ಹೊರಗಿನ ಜಮೀನು',
    hp_class_11b_desc: 'ಮಾಲೀಕತ್ವ ಹಕ್ಕು ಇದ್ದರೂ ಜಮೀನಿನಲ್ಲಿ ಅನಿಯಮಿತತೆ ಇರಬಹುದಾದ ಆಸ್ತಿಗಳಿಗೆ ನೀಡಲಾಗುತ್ತದೆ — ಉದಾ: ಪರಿವರ್ತನೆ ಇಲ್ಲದ ಕೃಷಿ ಜಮೀನಿನಲ್ಲಿ ಕಟ್ಟಡ, ಅನನುಮೋದಿತ ವಿನ್ಯಾಸಗಳು.',
    hp_class_item1: 'ಸ್ಪಷ್ಟ RTC (ಹಕ್ಕು, ಗೇಣಿ ಮತ್ತು ಬೆಳೆ ದಾಖಲೆ) ಹೊಂದಿರುವ ಆಸ್ತಿಗಳು',
    hp_class_item2: 'ಸರಿಯಾದ ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಹೊಂದಿರುವ ಜಮೀನು (ಅನ್ವಯವಾದರೆ)',
    hp_class_item3: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ಅಥವಾ ನಿವೇಶನಗಳು',
    hp_class_item4: 'ಬ್ಯಾಂಕ್ ಸಾಲ, ಕಟ್ಟಡ ಪರವಾನಗಿ ಮತ್ತು ಎಲ್ಲಾ ಕಾನೂನು ವ್ಯವಹಾರಗಳಿಗೆ ಅರ್ಹ',
    hp_class_item5: 'ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಬಳಸಬಹುದು',
    hp_class_infobox_strong: 'ಯಾವ ವರ್ಗ ನಿಮಗೆ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದು ಗೊತ್ತಿಲ್ಲವೇ?',
    hp_class_infobox_desc: 'ನೀವು ಅರ್ಜಿ ಪ್ರಾರಂಭಿಸಿದಾಗ, ನಿಮ್ಮ ಆಸ್ತಿ ದಾಖಲೆಗಳ ಆಧಾರದ ಮೇಲೆ ವ್ಯವಸ್ಥೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಸರಿಯಾದ GP ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ನಿರ್ಮಿಸಿದ್ದರೆ ಅ-ಖಾತೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ. ಭೂ ದಾಖಲೆ ಅಥವಾ ನಿರ್ಮಾಣದಲ್ಲಿ ಅನಿಯಮಿತತೆ ಇದ್ದರೆ ಬ-ಖಾತೆ ಸರಿಯಾದ ಆಯ್ಕೆ. ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಸಿಬ್ಬಂದಿ ಅಥವಾ ಕೆಳಗಿನ ಹೆಲ್ಪ್‌ಲೈನ್ ಸಂಖ್ಯೆ ಮೂಲಕ ಸಹಾಯ ಪಡೆಯಿರಿ.',

    /* ── Login page (self-generated) ── */
    login_subtitle: 'ನಾಗರಿಕ ಸೇವೆಗಳು',
    login_title: 'ಲಾಗಿನ್',
    login_citizen: 'ನಾಗರಿಕ ಲಾಗಿನ್',
    login_gp: 'GP ಅಪ್ಲಿಕೇಶನ್ ಲಾಗಿನ್',
    login_mobile: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:',
    login_bsk: 'BSK ಲಾಗಿನ್ ID (ನೋಂದಾಯಿತ ಫೋನ್ ಸಂಖ್ಯೆ):',
    login_captcha_label: 'ಕ್ಯಾಪ್ಚಾ:',
    login_captcha_placeholder: 'ಕ್ಯಾಪ್ಚಾ ಉತ್ತರ ನಮೂದಿಸಿ',
    login_captcha_error: 'ತಪ್ಪಾದ ಕ್ಯಾಪ್ಚಾ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
    login_otp_timer: '{seconds} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ OTP ನಮೂದಿಸಿ',
    login_otp_label: 'OTP ನಮೂದಿಸಿ:',
    login_otp_placeholder: 'OTP ನಮೂದಿಸಿ',
    login_btn_get_otp: 'OTP ಪಡೆಯಿರಿ',
    login_btn_login: 'ಲಾಗಿನ್',
  },
};

export default home;
