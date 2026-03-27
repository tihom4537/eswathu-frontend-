/**
 * newAppFirst namespace — NewApplicationFirstPage (property questionnaire)
 * Keys follow the pattern: {nodeId}_label, {nodeId}_question, {nodeId}_opt{index}
 */
const newAppFirst = {
  en: {
    // q_who — Getting Started
    q_who_label: 'Getting Started',
    q_who_question: 'Which of the following best describes you?',
    q_who_opt0: 'An Individual or Organisation',
    q_who_opt1: 'Govt. Property',
    q_who_opt2: 'Industry',

    // q_govt_type — Government Property
    q_govt_type_label: 'Government Property',
    q_govt_type_question: 'Which type of government property is this?',
    q_govt_type_opt0: 'Sites or Buildings owned by Central Government / State Government / Local Bodies within the GP (region)',

    // q_region — Region
    q_region_label: 'Region',
    q_region_question: 'What region does your property fall under?',
    q_region_opt0: 'Property lies in Gram Tana region',
    q_region_opt1: 'Property with a Podi / Hissa number according to registered Partition Deed (in Udupi / Dakshina Kannada district)',
    q_region_opt2: 'Property is maintained under Notified Area Committee',
    q_region_opt3: 'None of the above',

    // q_partition_deed — Partition Deed
    q_partition_deed_label: 'Partition Deed',
    q_partition_deed_question: 'Do you have a Partition Deed?',
    q_partition_deed_opt0: 'Yes',
    q_partition_deed_opt1: 'No',

    // q_govt_scheme — Government Scheme
    q_govt_scheme_label: 'Government Scheme',
    q_govt_scheme_question: 'Was your property sanctioned under any government scheme?',
    q_govt_scheme_opt0: 'Yes',
    q_govt_scheme_opt1: 'No',

    // q_scheme_type — Scheme Type
    q_scheme_type_label: 'Scheme Type',
    q_scheme_type_question: 'Which type of Govt. Grant / scheme is your property under?',
    q_scheme_type_opt0: 'Sec 94C / 94CC / 94D – Karnataka Land Revenue Act, 1964',
    q_scheme_type_opt1: 'Rehabilitation (Dam / Flood)',
    q_scheme_type_opt2: 'Sec 38A – Karnataka Land Reforms Act, 1961',
    q_scheme_type_opt3: 'Housing Schemes (like RGRHCL)',
    q_scheme_type_opt4: 'Sites or Buildings of Corporation / Board / Limited / Authority',

    // q_converted_layout — Conversion & Layout
    q_converted_layout_label: 'Conversion & Layout',
    q_converted_layout_question: 'Answer both: (1) Has the land been converted? (2) Does it have a layout plan / building permit?',
    q_converted_layout_opt0: 'The land has been converted and it has a layout plan / building permit',
    q_converted_layout_opt1: 'Converted or non-converted land with no layout plan',

    // q_site_or_building_yes — Property Type (Converted + Layout Path)
    q_site_or_building_yes_label: 'Property Type',
    q_site_or_building_yes_question: 'Is your property a site or a building?',
    q_site_or_building_yes_opt0: 'Site',
    q_site_or_building_yes_opt1: 'Building',

    // q_building_permit — Building Permit
    q_building_permit_label: 'Building Permit',
    q_building_permit_question: 'Do you have a building permit?',
    q_building_permit_opt0: 'Yes',
    q_building_permit_opt1: 'No',

    // q_approved_by — Approval Authority
    q_approved_by_label: 'Approval Authority',
    q_approved_by_question: 'Who approved the layout / building?',
    q_approved_by_opt0: 'Urban Development Authority / Local Planning Authority / Gram Panchayat',
    q_approved_by_opt1: 'Group / Mandal Panchayat',

    // q_inside_lpa — Local Planning Area
    q_inside_lpa_label: 'Local Planning Area',
    q_inside_lpa_question: 'Is it inside or outside the Local Planning Area?',
    q_inside_lpa_opt0: 'Outside',
    q_inside_lpa_opt1: 'Inside',

    // q_when_approved_outside — Approval Period (Outside Local Planning Area)
    q_when_approved_outside_label: 'Approval Period',
    q_when_approved_outside_question: 'When was it approved? (Outside Local Planning Area)',
    q_when_approved_outside_opt0: 'From 11.11.2014 to 10.01.2025',
    q_when_approved_outside_opt1: 'Before 11.11.2014',

    // q_when_approved_inside — Approval Period (Inside Local Planning Area)
    q_when_approved_inside_label: 'Approval Period',
    q_when_approved_inside_question: 'When was it approved? (Inside Local Planning Area)',
    q_when_approved_inside_opt0: 'Before 16.11.1992',
    q_when_approved_inside_opt1: 'Between 16.11.1992 and 14.06.2013',

    // q_property_type_no — Property Type (No Layout Path)
    q_property_type_no_label: 'Property Type',
    q_property_type_no_question: 'Choose if your property is a site / site to be converted, a building, or Civic Amenities (CA) / Parks / Roads',
    q_property_type_no_opt0: 'Site / Site to be converted',
    q_property_type_no_opt1: 'Building',
    q_property_type_no_opt2: 'Civic Amenities (CA) / Parks / Roads',

    // q_single_layout — Layout Plan
    q_single_layout_label: 'Layout Plan',
    q_single_layout_question: 'Do you have a single layout plan?',
    q_single_layout_opt0: 'Yes',
    q_single_layout_opt1: 'No',

    // ——— Glossary definitions (en) ———
    def_singleLayoutPlan: '"Single Layout Plan" refers to land converted for non-agricultural purposes that has not received layout approval from a Planning Authority.',
    def_layoutPlan: 'A technical drawing of a proposed development area, showing the division of land into sites, roads, and civic amenity areas, which has received formal approval from a competent planning authority.',
    def_buildingPermit: 'Formal written authorisation or an approved building plan issued by the Gram Panchayat permitting the construction or modification of a building within its jurisdiction.',
    def_civicAmenities: 'Areas designated within an approved layout plan for public infrastructure including roads, parks, parking spaces, civic amenity sites, public utility zones, and other basic infrastructure. These areas cannot be sold as private sites and are reserved for community use.',
    def_corpBoard: 'A Possession Certificate (ಭೂ-ಸ್ವಾಧೀನ ಪತ್ರ) issued by the respective Corporation, Board, or Authority.',
    def_gramPanchayat: 'The primary local self-government body at the village level, responsible for property tax administration, maintaining property registers (Forms 9, 11A, 11B), issuing building permits, and processing e-Khata applications within its jurisdiction.',
    def_gramTana: 'Unsurveyed settlement sites or buildings located within the inhabited area of a village boundary, which have not been brought under a formal survey.',
    def_kiadbKssidc: 'Karnataka Industrial Areas Development Board (KIADB) / Karnataka State Small Industries Development Corporation Limited (KSSIDC)',
    def_groupMandal: 'Historical local government bodies that existed prior to the current Gram Panchayat system. Layout approvals and property records issued by these bodies are still referenced in current e-Khata documentation.',
    def_landReformsAct: 'Karnataka legislation under which dwelling site rights are granted to agricultural labourers and other eligible persons. Properties granted under Section 38A of this Act, along with the accompanying entitlement deed, are required to be recorded in the Gram Panchayat registers.',
    def_landRevenueAct: 'The Karnataka state legislation governing land administration, under which property titles are granted specifically under Sections 94C, 94CC, and 94D, typically for regularisation of unauthorised constructions or settlements.',
    def_localPlanningArea: 'An area in which a Planning Authority has been established under the Karnataka Town and Country Planning Act, 1961 (Karnataka Act No. 11 of 1963). Land development, layout approvals, and change of land use within this area fall under the jurisdiction of the Local Planning Authority (LPA).',
    def_lpa: 'A statutory authority responsible for granting technical layout approvals and regulating land use within a designated local planning area. The LPA approves layout plans before sites can be legally sold or developed.',
    def_notifiedAreaCommittee: 'Properties that were managed by a Notified Area Committee prior to the formal establishment of Mandal Panchayats.',
    def_partitionDeed: 'A registered legal document executed to formally divide a property among heirs, co-owners, or family members.',
    def_podiHissa: 'Identification numbers assigned to individual portions of family property that have been divided based on a registered family partition or partnership deed.',
    def_rehabilitation: 'A government scheme under which sites or buildings are allotted to families displaced by dam reservoirs, floods, or other disasters. Such properties, after the grant of entitlement deeds, are transferred to and maintained by the Gram Panchayat.',
    def_rgrhcl: 'Rajiv Gandhi Rural Housing Corporation Limited — the state housing corporation through which the government allocates residential sites or buildings under various government housing schemes.',
    def_site: 'A portion of a developed area that has been divided into plots for residential, commercial, non-residential, or industrial purposes. Also refers to a specific parcel of land held under a defined title on which no building has been constructed.',
    def_uda: 'The statutory planning authority responsible for regulating land use, issuing technical layout approvals, and overseeing urban development within a designated urban development area.',
    def_convertedLand: 'Agricultural land that has been formally converted to non-agricultural use through a Conversion Order and has received the required approval from the competent planning authority.',
    def_nonConvertedLand: 'Land on which buildings have been constructed without a formal Conversion Order, or land that has been converted but not yet developed or approved by the competent authority for a layout.',
    def_rtc: 'Record of Rights, Tenancy and Crops — a mandatory revenue document that records land ownership, tenancy details, and crop information. It is used to verify the ownership and land-use status of agricultural or non-converted land.',
    def_relinquishmentDeed: 'A registered legal document through which a property owner formally surrenders or relinquishes their ownership rights or claims over a property in favour of another person or authority.',
    def_conversionOrder: 'An official order issued by the Revenue Department converting agricultural land to non-agricultural use in accordance with the Karnataka Land Revenue Act. Such an order is a prerequisite for developing land for residential, commercial, or industrial purposes.',
    def_deed: '"Deed" refers to the original written document of evidence that creates or transfers ownership or records an intentional transfer. Examples: Sale Deed, Gift Deed, Partition Deed, Relinquishment Deed, Exchange Deed, Release Deed, Cancellation Deed, Settlement Deed.',

    // ——— Page-level UI ———
    newapp_subtitle: 'Application process',
    newapp_title: 'Get your e-khata in 5 simple steps',
    step1_label: 'Sale Deed Details',
    step2_label: 'Owner KYC',
    step3_label: 'Property Details',
    step4_label: 'Property classification',
    step5_label: 'Upload EC',
    s01_title: 'Things to keep in hand before proceeding',
    s01_infobox_before: 'The form requires you to enter most of your property details hence it would be helpful to keep',
    s01_infobox_bold: 'ALL YOUR PROPERTY RELATED DOCUMENTS',
    s01_infobox_after: 'handy before you start.',
    s01_mandatory_before: 'The following two documents are',
    s01_mandatory_bold: 'MANDATORY',
    s01_mandatory_after: 'Kindly keep both of these ready before you proceed.',
    s01_doc1_title: 'Deed Documents',
    s01_doc1_desc: 'It is the official proof that a property is registered in your name.',
    s01_doc2_title: "Owner's Aadhaar Details",
    s01_doc2_desc: "Owner's Aadhaar Card Number and registered phone number for ekyc verification",
    s01_doc3_title: 'Property Image with Geo Tag',
    s01_doc3_desc: 'Photo of the property with the front elevation visible.',
    s01_doc3_link: 'Click here to know how to click a geo tagged photo',
    s01_doc4_title: 'Encumbrance Certificate (EC)',
    s01_doc4_desc: 'An official, legal document certifying that a property is free from any financial or legal liabilities, such as mortgages, loans, or pending dues. It acts as evidence of a clear title, showing all registered transactions over a specified period.',
    s02_title: 'Property Classification',
    s02_intro: 'Please answer a few questions to find and confirm your Property Classification (11A and 11B)',
    s02_btn_back: 'Back',
    s02_btn_next: 'Next',
    s02_btn_start_over: 'Start Over',
    s02_btn_confirm: 'Confirm my Classification',
    s02_confirm_caption: 'This will be used in your application',
    proceed_btn: 'Proceed to New Application',

    // ——— Section 0.1 EC info box ———
    s01_ec_main: 'Encumbrance Certificate (Form 15): An EC issued at least one day prior to the date of registration is required. ECs issued within the last 15 days are accepted.',
    s01_ec_link: 'To know more click here',
    s01_ec_note_label: 'Note:',
    s01_ec_note_intro: 'If your registered deed is dated before 01.04.2004, then you will have to submit two ECs:',
    s01_ec_list1: 'EC from 01.04.2004 to the date of issue (within the last 15 days).',
    s01_ec_list2: 'EC from at least one day before your registration date to 31.03.2004.',
    s01_ec_example: '(Example: If your registered deed is dated 17.08.1998, the EC must begin from 16.08.1998).',
    s01_ec_important_label: 'Important:',
    s01_ec_important: 'If your registered deed is not in the submitted EC, the application will not be processed.',
  },

  kn: {
    // q_who — ಪ್ರಾರಂಭಿಸಿ
    q_who_label: 'ಪ್ರಾರಂಭಿಸಿ',
    q_who_question: 'ಕೆಳಗಿನವುಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಯಾವುದು ಉತ್ತಮವಾಗಿ ವಿವರಿಸುತ್ತದೆ?',
    q_who_opt0: 'ಒಬ್ಬ ವ್ಯಕ್ತಿ ಅಥವಾ ಸಂಸ್ಥೆ',
    q_who_opt1: 'ಸರ್ಕಾರದ ಆಸ್ತಿ',
    q_who_opt2: 'ಕೈಗಾರಿಕೆ',

    // q_govt_type — ಸರ್ಕಾರದ ಆಸ್ತಿ
    q_govt_type_label: 'ಸರ್ಕಾರದ ಆಸ್ತಿ',
    q_govt_type_question: 'ಇದು ಯಾವ ರೀತಿಯ ಸರ್ಕಾರದ ಆಸ್ತಿ?',
    q_govt_type_opt0: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ (ಪ್ರದೇಶ) ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಕೇಂದ್ರ ಸರ್ಕಾರ / ರಾಜ್ಯ ಸರ್ಕಾರ / ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳು ಹೊಂದಿರುವ ನಿವೇಶನಗಳು ಅಥವಾ ಕಟ್ಟಡಗಳು',

    // q_region — ಪ್ರದೇಶ
    q_region_label: 'ಪ್ರದೇಶ',
    q_region_question: 'ನಿಮ್ಮ ಆಸ್ತಿ ಯಾವ ಪ್ರದೇಶದಡಿ ಬರುತ್ತದೆ?',
    q_region_opt0: 'ಆಸ್ತಿಯು ಗ್ರಾಮ ಠಾಣ ಪ್ರದೇಶದಲ್ಲಿದೆ',
    q_region_opt1: 'ನೋಂದಾಯಿತ ವಿಭಾಗ ಪತ್ರದ ಪ್ರಕಾರ ಪೋಡಿ ಸಂಖ್ಯೆ / ಹಿಸ್ಸಾ ಸಂಖ್ಯೆ ಹೊಂದಿರುವ ಆಸ್ತಿ (ಉಡುಪಿ / ದಕ್ಷಿಣ ಕನ್ನಡ ಜಿಲ್ಲೆ)',
    q_region_opt2: 'ಆಸ್ತಿಯು ನೋಟಿಫೈಡ್ ಏರಿಯಾ ಸಮಿತಿ ಅಡಿಯಲ್ಲಿ ನಿರ್ವಹಿಸಲ್ಪಡುತ್ತದೆ',
    q_region_opt3: 'ಮೇಲಿನ ಯಾವುದೂ ಅಲ್ಲ',

    // q_partition_deed — ವಿಭಾಗ ಪತ್ರ
    q_partition_deed_label: 'ವಿಭಾಗ ಪತ್ರ',
    q_partition_deed_question: 'ನಿಮ್ಮ ಬಳಿ ವಿಭಾಗ ಪತ್ರ ಇದೆಯೇ?',
    q_partition_deed_opt0: 'ಹೌದು',
    q_partition_deed_opt1: 'ಇಲ್ಲ',

    // q_govt_scheme — ಸರ್ಕಾರಿ ಯೋಜನೆ
    q_govt_scheme_label: 'ಸರ್ಕಾರಿ ಯೋಜನೆ',
    q_govt_scheme_question: 'ನಿಮ್ಮ ಆಸ್ತಿಯನ್ನು ಯಾವುದಾದರೂ ಸರ್ಕಾರಿ ಯೋಜನೆಯ ಅಡಿಯಲ್ಲಿ ಮಂಜೂರು ಮಾಡಲಾಗಿದೆಯೇ?',
    q_govt_scheme_opt0: 'ಹೌದು',
    q_govt_scheme_opt1: 'ಇಲ್ಲ',

    // q_scheme_type — ಯೋಜನೆಯ ಪ್ರಕಾರ
    q_scheme_type_label: 'ಯೋಜನೆಯ ಪ್ರಕಾರ',
    q_scheme_type_question: 'ನಿಮ್ಮ ಆಸ್ತಿ ಯಾವ ರೀತಿಯ ಸರ್ಕಾರಿ ಅನುದಾನ / ಯೋಜನೆಯ ಅಡಿಯಲ್ಲಿದೆ?',
    q_scheme_type_opt0: 'ಪ್ರಕರಣ 94ಸಿ / 94ಸಿಸಿ / 94ಡಿ – ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮ, 1964',
    q_scheme_type_opt1: 'ಪುನರ್ವಸತಿ (ಅಣೆಕಟ್ಟು / ಪ್ರವಾಹ)',
    q_scheme_type_opt2: 'ಪ್ರಕರಣ 38ಎ – ಕರ್ನಾಟಕ ಭೂ-ಸುಧಾರಣಾ ಅಧಿನಿಯಮ, 1961',
    q_scheme_type_opt3: 'ವಸತಿ ಯೋಜನೆಗಳು (ಉದಾ: ವಸತಿ ನಿಗಮ – RGRHCL)',
    q_scheme_type_opt4: 'ನಿಗಮ / ಮಂಡಳಿ / ನಿಯಮಿತ / ಪ್ರಾಧಿಕಾರದ ನಿವೇಶನಗಳು ಅಥವಾ ಕಟ್ಟಡಗಳು',

    // q_converted_layout — ಪರಿವರ್ತನೆ ಮತ್ತು ವಿನ್ಯಾಸ
    q_converted_layout_label: 'ಪರಿವರ್ತನೆ ಮತ್ತು ವಿನ್ಯಾಸ',
    q_converted_layout_question: 'ಎರಡಕ್ಕೂ ಉತ್ತರಿಸಿ: (1) ಜಮೀನು ಪರಿವರ್ತನೆಯಾಗಿದೆಯೇ? (2) ಅದಕ್ಕೆ ವಿನ್ಯಾಸ ನಕ್ಷೆ / ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ ಇದೆಯೇ?',
    q_converted_layout_opt0: 'ಜಮೀನು ಪರಿವರ್ತಿತವಾಗಿದ್ದು ವಿನ್ಯಾಸ ನಕ್ಷೆ / ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ ಹೊಂದಿದೆ',
    q_converted_layout_opt1: 'ವಿನ್ಯಾಸ ನಕ್ಷೆ ಇಲ್ಲದ ಪರಿವರ್ತಿತ ಅಥವಾ ಪರಿವರ್ತನೆಯಾಗದ ಜಮೀನು',

    // q_site_or_building_yes — ಆಸ್ತಿಯ ಪ್ರಕಾರ (ಪರಿವರ್ತಿತ + ವಿನ್ಯಾಸ)
    q_site_or_building_yes_label: 'ಆಸ್ತಿಯ ಪ್ರಕಾರ',
    q_site_or_building_yes_question: 'ನಿಮ್ಮ ಆಸ್ತಿ ನಿವೇಶನವೇ ಅಥವಾ ಕಟ್ಟಡವೇ?',
    q_site_or_building_yes_opt0: 'ನಿವೇಶನ',
    q_site_or_building_yes_opt1: 'ಕಟ್ಟಡ',

    // q_building_permit — ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ
    q_building_permit_label: 'ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ',
    q_building_permit_question: 'ನಿಮ್ಮ ಬಳಿ ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ ಇದೆಯೇ?',
    q_building_permit_opt0: 'ಹೌದು',
    q_building_permit_opt1: 'ಇಲ್ಲ',

    // q_approved_by — ಅನುಮೋದನಾ ಪ್ರಾಧಿಕಾರ
    q_approved_by_label: 'ಅನುಮೋದನಾ ಪ್ರಾಧಿಕಾರ',
    q_approved_by_question: 'ವಿನ್ಯಾಸ ನಕ್ಷೆ / ಕಟ್ಟಡವನ್ನು ಯಾರು ಅನುಮೋದಿಸಿದ್ದಾರೆ?',
    q_approved_by_opt0: 'ನಗರಾಭಿವೃದ್ಧಿ ಪ್ರಾಧಿಕಾರ / ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ / ಗ್ರಾಮ ಪಂಚಾಯಿತಿ',
    q_approved_by_opt1: 'ಗ್ರೂಪ್ ಪಂಚಾಯಿತಿ / ಮಂಡಲ ಪಂಚಾಯಿತಿ',

    // q_inside_lpa — ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶ
    q_inside_lpa_label: 'ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶ',
    q_inside_lpa_question: 'ಇದು ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಒಳಗಿದೆಯೇ ಅಥವಾ ಹೊರಗಿದೆಯೇ?',
    q_inside_lpa_opt0: 'ಹೊರಗಿನ (ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರಗೆ)',
    q_inside_lpa_opt1: 'ಒಳಗಿನ (ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಒಳಗೆ)',

    // q_when_approved_outside — ಅನುಮೋದನಾ ಅವಧಿ (ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರಗೆ)
    q_when_approved_outside_label: 'ಅನುಮೋದನಾ ಅವಧಿ',
    q_when_approved_outside_question: 'ಇದನ್ನು ಯಾವಾಗ ಅನುಮೋದಿಸಲಾಯಿತು? (ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರಗೆ)',
    q_when_approved_outside_opt0: '11.11.2014 ರಿಂದ 10.01.2025 ರ ವರೆಗೆ',
    q_when_approved_outside_opt1: '11.11.2014 ಪೂರ್ವದಲ್ಲಿ',

    // q_when_approved_inside — ಅನುಮೋದನಾ ಅವಧಿ (ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಒಳಗೆ)
    q_when_approved_inside_label: 'ಅನುಮೋದನಾ ಅವಧಿ',
    q_when_approved_inside_question: 'ಇದನ್ನು ಯಾವಾಗ ಅನುಮೋದಿಸಲಾಯಿತು? (ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಒಳಗೆ)',
    q_when_approved_inside_opt0: '16.11.1992 ಪೂರ್ವದಲ್ಲಿ',
    q_when_approved_inside_opt1: '16.11.1992 ಮತ್ತು 14.06.2013 ರ ಅವಧಿಯಲ್ಲಿ',

    // q_property_type_no — ಆಸ್ತಿಯ ಪ್ರಕಾರ (ವಿನ್ಯಾಸ ನಕ್ಷೆ ಇಲ್ಲದ ಮಾರ್ಗ)
    q_property_type_no_label: 'ಆಸ್ತಿಯ ಪ್ರಕಾರ',
    q_property_type_no_question: 'ನಿಮ್ಮ ಆಸ್ತಿಯು ನಿವೇಶನ / ಪರಿವರ್ತಿಸಬೇಕಾದ ನಿವೇಶನ, ಕಟ್ಟಡ, ಅಥವಾ ನಾಗರಿಕ ಸೌಲಭ್ಯ (CA) / ಉದ್ಯಾನವನ / ರಸ್ತೆಗಳು ಎಂಬುದನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
    q_property_type_no_opt0: 'ನಿವೇಶನ / ಪರಿವರ್ತಿಸಬೇಕಾದ ನಿವೇಶನ',
    q_property_type_no_opt1: 'ಕಟ್ಟಡ',
    q_property_type_no_opt2: 'ನಾಗರಿಕ ಸೌಲಭ್ಯ (CA) / ಉದ್ಯಾನವನ / ರಸ್ತೆಗಳು',

    // q_single_layout — ವಿನ್ಯಾಸ ನಕ್ಷೆ
    q_single_layout_label: 'ವಿನ್ಯಾಸ ನಕ್ಷೆ',
    q_single_layout_question: 'ನಿಮ್ಮ ಬಳಿ ಏಕ ವಿನ್ಯಾಸ ನಕ್ಷೆ ಇದೆಯೇ?',
    q_single_layout_opt0: 'ಹೌದು',
    q_single_layout_opt1: 'ಇಲ್ಲ',

    // ——— Glossary definitions (kn) ———
    def_singleLayoutPlan: '"ಏಕ ವಿನ್ಯಾಸ" ಎಂದರೆ ವ್ಯವಸಾಯೇತರ ಉದ್ದೇಶಕ್ಕಾಗಿ ಭೂ-ಪರಿವರ್ತಿತ, ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ವಿನ್ಯಾಸ ಅನುಮೋದನೆಯಾಗದ ಜಮೀನು.',
    def_layoutPlan: 'ಪ್ರಸ್ತಾವಿತ ಅಭಿವೃದ್ಧಿ ಪ್ರದೇಶದ ತಾಂತ್ರಿಕ ರೇಖಾಚಿತ್ರ; ಇದರಲ್ಲಿ ಜಮೀನನ್ನು ನಿವೇಶನಗಳು, ರಸ್ತೆಗಳು ಮತ್ತು ನಾಗರಿಕ ಸೌಲಭ್ಯ ಪ್ರದೇಶಗಳಾಗಿ ವಿಂಗಡಿಸಿರುತ್ತದೆ. ಸಕ್ಷಮ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ಔಪಚಾರಿಕ ಅನುಮೋದನೆ ಪಡೆದ ನಕ್ಷೆ.',
    def_buildingPermit: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅಥವಾ ಮಾರ್ಪಾಡಿಗೆ ಅನುಮತಿ ನೀಡಲು ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಹೊರಡಿಸುವ ಔಪಚಾರಿಕ ಲಿಖಿತ ಅನುಮತಿ ಪತ್ರ ಅಥವಾ ಅನುಮೋದಿತ ಕಟ್ಟಡ ನಕ್ಷೆ.',
    def_civicAmenities: 'ಬಡಾವಣೆ ವಿನ್ಯಾಸದ ಪ್ರಕಾರ ರಸ್ತೆಗಳು, ಉದ್ಯಾನವನಗಳು, ಪಾರ್ಕಿಂಗ್ ಸ್ಥಳಗಳು, ನಾಗರಿಕ ಸೌಲಭ್ಯದ ಪ್ರದೇಶಗಳು (Civic Amenities), ಸಾರ್ವಜನಿಕ ಬಳಕೆಯ ಪ್ರದೇಶಗಳು ಮತ್ತು ಇತರ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳ ಪ್ರದೇಶಗಳು. ಇವುಗಳನ್ನು ಖಾಸಗಿ ನಿವೇಶನಗಳಾಗಿ ಮಾರಾಟ ಮಾಡಲಾಗದು; ಇವು ಸಮುದಾಯ ಬಳಕೆಗಾಗಿ ಮೀಸಲಿಡಲಾಗಿರುತ್ತವೆ.',
    def_gramPanchayat: 'ಗ್ರಾಮ ಮಟ್ಟದ ಪ್ರಾಥಮಿಕ ಸ್ಥಳೀಯ ಸ್ವಯಂ ಆಡಳಿತ ಸಂಸ್ಥೆ. ಇದು ಆಸ್ತಿ ತೆರಿಗೆ ಆಡಳಿತ, ಆಸ್ತಿ ದಾಖಲೆಗಳ (ನಮೂನೆ ೯, ೧೧ಎ, ೧೧ಬಿ) ನಿರ್ವಹಣೆ, ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ ನೀಡುವಿಕೆ ಮತ್ತು ತನ್ನ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಇ-ಖಾತಾ ಅರ್ಜಿಗಳ ಪ್ರಕ್ರಿಯೆ ನಿರ್ವಹಿಸುತ್ತದೆ.',
    def_gramTana: 'ಗ್ರಾಮದ ಗಡಿಯೊಳಗಿನ ಜನವಸತಿ ಪ್ರದೇಶದಲ್ಲಿರುವ, ಸರ್ವೇಗೆ ಒಳಪಡಿಸದ ನಿವೇಶನಗಳು ಅಥವಾ ಕಟ್ಟಡಗಳು. ಇವು ಔಪಚಾರಿಕ ಸರ್ವೇ ಪ್ರಕ್ರಿಯೆಗೆ ಒಳಪಟ್ಟಿರುವುದಿಲ್ಲ.',
    def_kiadbKssidc: 'ಕರ್ನಾಟಕ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶಾಭಿವೃದ್ಧಿ ಮಂಡಳಿ (ಕೆ.ಐ.ಎ.ಡಿ.ಬಿ) / ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳ ಅಭಿವೃದ್ಧಿ ನಿಗಮ ನಿಯಮಿತ (ಕೆ.ಎಸ್.ಎಸ್.ಐ.ಡಿ.ಸಿ)',
    def_landReformsAct: 'ಕೃಷಿ ಕಾರ್ಮಿಕರು ಮತ್ತು ಇತರ ಅರ್ಹ ವ್ಯಕ್ತಿಗಳಿಗೆ ವಾಸದ ನಿವೇಶನದ ಹಕ್ಕುಗಳನ್ನು ನೀಡುವ ಕರ್ನಾಟಕ ಕಾಯ್ದೆ. ಈ ಅಧಿನಿಯಮದ ಪ್ರಕರಣ 38ಎ ರ ಅಡಿಯಲ್ಲಿ ನೀಡಲಾದ ಆಸ್ತಿಗಳನ್ನು ಹಕ್ಕುಪತ್ರ ಸಮೇತ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ದಾಖಲೆಗಳಲ್ಲಿ ನೋಂದಾಯಿಸಬೇಕು.',
    def_landRevenueAct: 'ಭೂ ಆಡಳಿತವನ್ನು ನಿಯಂತ್ರಿಸುವ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಕಾಯ್ದೆ. ಅನಧಿಕೃತ ನಿರ್ಮಾಣಗಳು ಅಥವಾ ವಸಾಹತುಗಳ ನಿಯಮಿತೀಕರಣಕ್ಕಾಗಿ ಈ ಅಧಿನಿಯಮದ ಪ್ರಕರಣ 94ಸಿ, 94ಸಿಸಿ ಮತ್ತು 94ಡಿ ರ ಅಡಿಯಲ್ಲಿ ಹಕ್ಕುಪತ್ರ ನೀಡಲಾಗುತ್ತದೆ.',
    def_localPlanningArea: 'ಕರ್ನಾಟಕ ನಗರ ಮತ್ತು ಗ್ರಾಮಾಂತರ ಯೋಜನೆ ಅಧಿನಿಯಮ, 1961 (1963ರ ಕರ್ನಾಟಕ ಅಧಿನಿಯಮ ಸಂಖ್ಯೆ: 11) ರ ಅಡಿಯಲ್ಲಿ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ ರಚನೆಯಾದ ಪ್ರದೇಶ. ಈ ಪ್ರದೇಶದಲ್ಲಿ ಜಮೀನು ಅಭಿವೃದ್ಧಿ, ವಿನ್ಯಾಸ ನಕ್ಷೆ ಅನುಮೋದನೆ ಮತ್ತು ಭೂ ಬಳಕೆ ಬದಲಾವಣೆ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ (LPA) ವ್ಯಾಪ್ತಿಗೆ ಒಳಪಡುತ್ತದೆ.',
    def_lpa: 'ನಿಯೋಜಿತ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದಲ್ಲಿ ತಾಂತ್ರಿಕ ವಿನ್ಯಾಸ ನಕ್ಷೆ ಅನುಮೋದನೆ ನೀಡಲು ಮತ್ತು ಭೂ ಬಳಕೆ ನಿಯಂತ್ರಿಸಲು ಜವಾಬ್ದಾರವಾದ ಶಾಸನಬದ್ಧ ಪ್ರಾಧಿಕಾರ. ನಿವೇಶನಗಳನ್ನು ಕಾನೂನುಬದ್ಧವಾಗಿ ಮಾರಾಟ ಮಾಡಲು ಅಥವಾ ಅಭಿವೃದ್ಧಿ ಮಾಡಲು ಮೊದಲು ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದ ಅನುಮೋದನೆ ಅಗತ್ಯ.',
    def_notifiedAreaCommittee: 'ಮಂಡಲ ಪಂಚಾಯಿತಿಗಳ ಔಪಚಾರಿಕ ಸ್ಥಾಪನೆಗೆ ಮೊದಲು ಅಧಿಸೂಚಿತ ಪ್ರದೇಶ ಸಮಿತಿ (ನೋಟಿಫೈಡ್ ಏರಿಯಾ ಕಮಿಟಿ) ಅಡಿಯಲ್ಲಿ ನಿರ್ವಹಿಸಲಾಗುತ್ತಿದ್ದ ಆಸ್ತಿಗಳು.',
    def_partitionDeed: 'ಉತ್ತರಾಧಿಕಾರಿಗಳು, ಸಹ-ಮಾಲೀಕರು ಅಥವಾ ಕುಟುಂಬ ಸದಸ್ಯರ ನಡುವೆ ಆಸ್ತಿಯನ್ನು ಔಪಚಾರಿಕವಾಗಿ ಹಂಚಿಕೆ ಮಾಡಲು ನೋಂದಾಯಿಸಲಾದ ಕಾನೂನು ದಾಖಲೆ.',
    def_podiHissa: 'ನೋಂದಾಯಿತ ಕುಟುಂಬ ವಿಭಜನೆ ಅಥವಾ ಪಾಲುದಾರಿಕೆ ಪತ್ರದ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಕುಟುಂಬದ ಆಸ್ತಿಯ ಪ್ರತ್ಯೇಕ ಭಾಗಗಳಿಗೆ ನಿಗದಿಪಡಿಸಲಾದ ಗುರುತಿನ ಸಂಖ್ಯೆಗಳು.',
    def_rehabilitation: 'ಅಣೆಕಟ್ಟು ಜಲಾಶಯದ ಹಿನ್ನೀರು, ಪ್ರವಾಹ ಅಥವಾ ಇತರ ಗಂಡಾಂತರಗಳಿಂದ ಸಂತ್ರಸ್ಥರಾದ ಕುಟುಂಬಗಳಿಗೆ ಪುನರ್ವಸತಿ ಕಲ್ಪಿಸಲು ಸರ್ಕಾರ ಹಕ್ಕುಪತ್ರ ನೀಡಿ ಗ್ರಾಮ ಪಂಚಾಯಿತಿಗೆ ಹಸ್ತಾಂತರಿಸಿದ ನಿವೇಶನಗಳು ಅಥವಾ ಕಟ್ಟಡಗಳನ್ನು ಒಳಗೊಂಡ ಸರ್ಕಾರಿ ಯೋಜನೆ.',
    def_rgrhcl: 'ರಾಜೀವ್ ಗಾಂಧಿ ಗ್ರಾಮೀಣ ವಸತಿ ನಿಗಮ ನಿಯಮಿತ — ಸರ್ಕಾರದ ವಿವಿಧ ವಸತಿ ಯೋಜನೆಗಳ ಅಡಿಯಲ್ಲಿ ವಸತಿ ನಿವೇಶನಗಳು ಅಥವಾ ಕಟ್ಟಡಗಳನ್ನು ಫಲಾನುಭವಿಗಳಿಗೆ ಹಂಚಿಕೆ ಮಾಡಲು ರಾಜ್ಯ ಸರ್ಕಾರ ಬಳಸುವ ವಸತಿ ನಿಗಮ.',
    def_site: '"ನಿವೇಶನ" ಎಂದರೆ ವಸತಿ, ವಾಣಿಜ್ಯ, ವಸತಿಯೇತರ ಅಥವಾ ಕೈಗಾರಿಕಾ ಉದ್ದೇಶಕ್ಕೆ ಸೈಟುಗಳಾಗಿ ವಿಭಾಗಿಸಲಾದ, ಅಭಿವೃದ್ಧಿ ಪಡಿಸಿದ ಪ್ರದೇಶದ ಭಾಗ ಅಥವಾ ಕಟ್ಟಡವು ಇಲ್ಲದ ನಿರ್ದಿಷ್ಟ ಶೀರ್ಷಿಕೆ ಆಧಾರದ ಜಾಗ.',
    def_uda: 'ನಿಯೋಜಿತ ನಗರ ಅಭಿವೃದ್ಧಿ ಪ್ರದೇಶದಲ್ಲಿ ಭೂ ಬಳಕೆ ನಿಯಂತ್ರಣ, ತಾಂತ್ರಿಕ ವಿನ್ಯಾಸ ನಕ್ಷೆ ಅನುಮೋದನೆ ಮತ್ತು ನಗರ ಅಭಿವೃದ್ಧಿ ಮೇಲ್ವಿಚಾರಣೆ ನಡೆಸುವ ಶಾಸನಬದ್ಧ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ.',
    def_groupMandal: 'ಪ್ರಸ್ತುತ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ವ್ಯವಸ್ಥೆಗೆ ಮೊದಲು ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದ ಐತಿಹಾಸಿಕ ಸ್ಥಳೀಯ ಸ್ವಯಂ ಆಡಳಿತ ಸಂಸ್ಥೆಗಳು. ಇವು ನೀಡಿದ ವಿನ್ಯಾಸ ಅನುಮೋದನೆಗಳು ಮತ್ತು ಆಸ್ತಿ ದಾಖಲೆಗಳನ್ನು ಇಂದಿಗೂ ಇ-ಖಾತಾ ದಾಖಲಾತಿಯಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾಗುತ್ತದೆ.',
    def_convertedLand: 'ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶದ ಮೂಲಕ ಕೃಷಿ ಉದ್ದೇಶದಿಂದ ವ್ಯವಸಾಯೇತರ ಉದ್ದೇಶಕ್ಕೆ ಕಾನೂನುಬದ್ಧವಾಗಿ ಪರಿವರ್ತಿಸಲ್ಪಟ್ಟ ಮತ್ತು ಸಕ್ಷಮ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದಿಂದ ಅನುಮೋದನೆ ಪಡೆದ ಜಮೀನು.',
    def_nonConvertedLand: 'ಔಪಚಾರಿಕ ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶವಿಲ್ಲದೆ ಕಟ್ಟಡ ನಿರ್ಮಿಸಲಾದ ಜಮೀನು; ಅಥವಾ ಭೂ ಪರಿವರ್ತನೆ ಆಗಿದ್ದರೂ ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರದಿಂದ ವಿನ್ಯಾಸ ನಕ್ಷೆಗೆ ಅನುಮೋದನೆ ಪಡೆಯದೆ ಅಭಿವೃದ್ಧಿ ಮಾಡದ ಜಮೀನು.',
    def_rtc: 'ಹಕ್ಕು, ಗೇಣಿ ಮತ್ತು ಬೆಳೆ ದಾಖಲೆ (ಪಹಣಿ) — ಭೂ ಮಾಲೀಕತ್ವ, ಗೇಣಿ ವಿವರಗಳು ಮತ್ತು ಬೆಳೆ ಮಾಹಿತಿಯನ್ನು ದಾಖಲಿಸುವ ಕಡ್ಡಾಯ ಕಂದಾಯ ದಾಖಲೆ. ಕೃಷಿ ಜಮೀನು ಅಥವಾ ಪರಿವರ್ತನೆಯಾಗದ ಜಮೀನಿನ ಮಾಲೀಕತ್ವ ಮತ್ತು ಭೂ ಬಳಕೆ ಸ್ಥಿತಿಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಬಳಸಲಾಗುತ್ತದೆ.',
    def_relinquishmentDeed: 'ಆಸ್ತಿ ಮಾಲೀಕರು ತಮ್ಮ ಆಸ್ತಿಯ ಮೇಲಿನ ಮಾಲೀಕತ್ವ ಹಕ್ಕುಗಳನ್ನು ಇನ್ನೊಬ್ಬ ವ್ಯಕ್ತಿ ಅಥವಾ ಪ್ರಾಧಿಕಾರದ ಪರವಾಗಿ ಔಪಚಾರಿಕವಾಗಿ ಬಿಟ್ಟುಕೊಡಲು ನೋಂದಾಯಿಸಲಾದ ಕಾನೂನು ದಾಖಲೆ. ಇದನ್ನು ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ ಅಥವಾ ತ್ಯಾಗ ಪತ್ರ ಎಂದೂ ಕರೆಯಲಾಗುತ್ತದೆ.',
    def_conversionOrder: 'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮದ ಅನ್ವಯ ಕಂದಾಯ ಇಲಾಖೆ ಹೊರಡಿಸುವ ಅಧಿಕೃತ ಆದೇಶ; ಇದರ ಮೂಲಕ ಕೃಷಿ ಜಮೀನನ್ನು ವ್ಯವಸಾಯೇತರ ಉದ್ದೇಶಕ್ಕಾಗಿ ಪರಿವರ್ತಿಸಲಾಗುತ್ತದೆ. ವಸತಿ, ವಾಣಿಜ್ಯ ಅಥವಾ ಕೈಗಾರಿಕಾ ಉದ್ದೇಶಕ್ಕಾಗಿ ಜಮೀನು ಅಭಿವೃದ್ಧಿ ಮಾಡಲು ಇದು ಪೂರ್ವ ಷರತ್ತಾಗಿದೆ.',
    def_deed: '"ಪತ್ರ" ಎಂದರೆ ಮಾಲೀಕತ್ವ ಸೃಜಿಸುವ ಅಥವಾ ವರ್ಗಾಯಿಸುವ ಅಥವಾ ಉದ್ದೇಶಪೂರ್ವಕವಾದ ವರ್ಗಾವಣೆ ದಾಖಲಿಸುವ ಸಾಕ್ಷ್ಯದ ಮೂಲ ಲಿಖಿತ ಪತ್ರ. ಉದಾಹರಣೆಗಳು: ಕ್ರಯ ಪತ್ರ, ದಾನ ಪತ್ರ / ಕಾಣಿಕೆ ಪತ್ರ, ವಿಭಾಗ ಪತ್ರ, ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ / ಪರಿತ್ಯಾಜನ ಪತ್ರ / ತ್ಯಾಗ ಪತ್ರ, ಅದಲು ಬದಲು ಪತ್ರ, ರಿಲೀಜ್ ಡೀಡ್, ಕ್ಯಾನ್ಸಲೇಶನ್ ಡೀಡ್, ಸೆಟಲ್‌ಮೆಂಟ್ ಪತ್ರ.',

    // ——— Page-level UI (self-generated) ———
    newapp_subtitle: 'ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ',
    newapp_title: '5 ಸರಳ ಹಂತಗಳಲ್ಲಿ ನಿಮ್ಮ ಇ-ಖಾತಾ ಪಡೆಯಿರಿ',
    step1_label: 'ಕ್ರಯ ಪತ್ರ ವಿವರಗಳು',
    step2_label: 'ಮಾಲೀಕ ಕೆವೈಸಿ',
    step3_label: 'ಆಸ್ತಿ ವಿವರಗಳು',
    step4_label: 'ಆಸ್ತಿ ವರ್ಗೀಕರಣ',
    step5_label: 'ಇಸಿ ಅಪ್ಲೋಡ್',
    s01_title: 'ಮುಂದುವರಿಯುವ ಮೊದಲು ಇವುಗಳನ್ನು ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ',
    s01_infobox_before: 'ಈ ಫಾರ್ಮ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಆಸ್ತಿ ಸಂಬಂಧಿತ ಹೆಚ್ಚಿನ ವಿವರಗಳನ್ನು ನಮೂದಿಸಬೇಕಾಗುತ್ತದೆ. ಆದ್ದರಿಂದ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ನಿಮ್ಮ',
    s01_infobox_bold: 'ಎಲ್ಲಾ ಆಸ್ತಿ ಸಂಬಂಧಿತ ದಾಖಲೆಗಳನ್ನು',
    s01_infobox_after: 'ಸಿದ್ಧವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳಿ.',
    s01_mandatory_before: 'ಕೆಳಗಿನ ಎರಡು ದಾಖಲೆಗಳು',
    s01_mandatory_bold: 'ಕಡ್ಡಾಯ',
    s01_mandatory_after: 'ಮುಂದುವರಿಯುವ ಮೊದಲು ಎರಡನ್ನೂ ಸಿದ್ಧವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳಿ.',
    s01_doc1_title: 'ಪತ್ರ ದಾಖಲೆಗಳು',
    s01_doc1_desc: 'ಆಸ್ತಿ ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿದೆ ಎಂಬುದಕ್ಕೆ ಇದು ಅಧಿಕೃತ ಪುರಾವೆ.',
    s01_doc2_title: 'ಮಾಲೀಕರ ಆಧಾರ್ ವಿವರಗಳು',
    s01_doc2_desc: 'ಇ-ಕೆವೈಸಿ ಪರಿಶೀಲನೆಗಾಗಿ ಮಾಲೀಕರ ಆಧಾರ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ ಮತ್ತು ನೋಂದಾಯಿತ ದೂರವಾಣಿ ಸಂಖ್ಯೆ.',
    s01_doc3_title: 'ಜಿಯೋ ಟ್ಯಾಗ್ ಸಮೇತ ಆಸ್ತಿ ಚಿತ್ರ',
    s01_doc3_desc: 'ಮುಂಭಾಗ ಕಾಣುವಂತೆ ಆಸ್ತಿಯ ಛಾಯಾಚಿತ್ರ.',
    s01_doc3_link: 'ಜಿಯೋ ಟ್ಯಾಗ್ ಫೋಟೋ ತೆಗೆಯುವ ವಿಧಾನ ತಿಳಿಯಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ',
    s01_doc4_title: 'ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (ಇಸಿ)',
    s01_doc4_desc: 'ಆಸ್ತಿ ಯಾವುದೇ ಆರ್ಥಿಕ ಅಥವಾ ಕಾನೂನು ಹೊಣೆಗಳಿಂದ ಮುಕ್ತವಾಗಿದೆ ಎಂದು ದೃಢೀಕರಿಸುವ ಅಧಿಕೃತ ಕಾನೂನು ದಾಖಲೆ. ನಿರ್ದಿಷ್ಟ ಅವಧಿಯಲ್ಲಿ ನೋಂದಾಯಿಸಿದ ಎಲ್ಲಾ ವ್ಯವಹಾರಗಳ ಸ್ಪಷ್ಟ ದಾಖಲೆ ತೋರಿಸುತ್ತದೆ.',
    s02_title: 'ಆಸ್ತಿ ವರ್ಗೀಕರಣ',
    s02_intro: 'ನಿಮ್ಮ ಆಸ್ತಿ ವರ್ಗೀಕರಣ (11A ಮತ್ತು 11B) ಕಂಡುಹಿಡಿದು ದೃಢೀಕರಿಸಲು ಕೆಲವು ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.',
    s02_btn_back: 'ಹಿಂದೆ',
    s02_btn_next: 'ಮುಂದೆ',
    s02_btn_start_over: 'ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ',
    s02_btn_confirm: 'ನನ್ನ ವರ್ಗೀಕರಣ ದೃಢಪಡಿಸಿ',
    s02_confirm_caption: 'ಇದನ್ನು ನಿಮ್ಮ ಅರ್ಜಿಯಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ',
    proceed_btn: 'ಹೊಸ ಅರ್ಜಿಗೆ ಮುಂದುವರಿಯಿರಿ',

    // ——— Section 0.1 EC info box (kn) ———
    s01_ec_main: 'EC- ಎನ್ಕಂಬ್ರನ್ಸ್ ಪ್ರಮಾಣಪತ್ರ/ ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (ಫಾರ್ಮ್ 15) : ನೋಂದಣಿ ದಿನಾಂಕಕ್ಕೆ ಕನಿಷ್ಠ ಒಂದು ದಿನ ಮೊದಲು ನೀಡಲಾದ EC (ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ) ಅಗತ್ಯವಿದೆ. ಕಳೆದ 15 ದಿನಗಳಲ್ಲಿ ನೀಡಲಾದ EC ಗಳನ್ನು ಸ್ವೀಕರಿಸಲಾಗುತ್ತದೆ.',
    s01_ec_link: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ',
    s01_ec_note_label: 'ಟಿಪ್ಪಣಿ:',
    s01_ec_note_intro: 'ನಿಮ್ಮ ನೋಂದಾಯಿತ ಪತ್ರದ ದಿನಾಂಕ 01.04.2004 ಕ್ಕಿಂತ ಮೊದಲು ಇದ್ದರೆ, ನೀವು ಎರಡು EC ಗಳನ್ನು ಸಲ್ಲಿಸಬೇಕಾಗುತ್ತದೆ:',
    s01_ec_list1: '01.04.2004 ರಿಂದ ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ ನೀಡಲಾದ ದಿನಾಂಕದವರೆಗೆ (ಕಳೆದ 15 ದಿನಗಳೊಳಗೆ ) ಇರುವ ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ.',
    s01_ec_list2: 'ನಿಮ್ಮ ನೋಂದಾಯಿತ ಪತ್ರದ ದಿನಾಂಕಕ್ಕಿಂತ ಕನಿಷ್ಠ ಒಂದು ದಿನ ಮೊದಲುಗಳಿಂದ 31.03.2004 ರವರೆಗೆ ಇರುವ ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ.',
    s01_ec_example: '(ಉದಾಹರಣೆ: ನಿಮ್ಮ ನೋಂದಾಯಿತ ಪತ್ರದ ದಿನಾಂಕ 17.08.1998 ಆಗಿದ್ದರೆ, ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರವು 16.08.1998 ರಿಂದ ಪ್ರಾರಂಭ ಆಗಬೇಕು.)',
    s01_ec_important_label: 'ಮುಖ್ಯ:',
    s01_ec_important: 'ನಿಮ್ಮ ನೋಂದಾಯಿತ ಪತ್ರವು ಸಲ್ಲಿಸಿದ EC ಯಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ, ಅರ್ಜಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ.',
  },
};

export default newAppFirst;
