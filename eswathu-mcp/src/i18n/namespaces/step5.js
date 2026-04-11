/**
 * step5 namespace — ECStep
 * Section 5.1 — Upload EC
 * Section 5.2 — Declaration
 * Section 5.3 — Preview of Khata
 * Section 5.4 — Draft Khata
 *
 * Kannada sources:
 *   Section 5.1 info block  → taken from newAppFirst.js kn (s01_ec_*)
 *   Section 5.1 field/btn   → kannada_reference_2.md STEP 5 table
 *   Section 5.2 declaration → kannada_reference_2.md STEP 5 table
 *   Section 5.3 table cols  → reused from step1/step2/step3/step4 kn values
 *   Self-generated strings  → logged in claudetranslations.md § step5
 */
const step5 = {
  en: {
    /* ── Step header ── */
    step_label: 'Step 5',
    step_title: 'Upload EC',

    /* ── Page-level notice (above section boxes) ── */
    page_notice_pre:  'If you do not have your Encumbrance Certificate (Form 15),',
    page_notice_link: 'please click here',
    page_notice_post: 'to issue the document and then complete this last step.',

    /* ══ SECTION 5.1 — Upload EC ══ */
    s51_title: 'Upload EC',

    /* Info block (red border) — mirrors newAppFirst section 0.1 EC info */
    s51_info_main:       'Encumbrance Certificate (Form 15) from at least one day before date of registration until issued at least in the last 15 days are accepted.',
    s51_info_link:       'To know more click here',
    s51_info_note_label: 'Note:',
    s51_info_note:       'If your registered deed is before 01.04.2004, then you will have to give two ECs.',
    s51_info_list1:      'i. EC from 01.04.2004 until issued at least in the last 15 days are accepted.',
    s51_info_list2:      'ii. EC from at least one date before your registration date until 31.03.2004.',
    s51_info_example:    '(For example, if your Regd Deed is registered on 17-08-1998, then obtain the EC from 16-08-1998. Note: if your Regd Deed is not in the submitted EC, then the application won\'t be processed.)',

    /* Field labels & placeholders */
    s51_deed_label:       'Registration Deed Number',
    s51_deed_placeholder: 'Enter Registration Deed Number',
    s51_ec_label:         'Enter EC No.',
    s51_ec_placeholder:   'Enter your EC Number',

    /* Buttons */
    s51_fetch_btn:    'Fetch EC Details',
    s51_edit_btn:     'Edit',
    s51_validate_btn: 'Validate and Save EC',

    /* Tooltip */
    s51_tooltip_label:   'Where to find your EC number',
    s51_tooltip_caption: 'Click to view sample',

    /* Kaveri EC summary table title */
    s51_kaveri_title: 'Kaveri EC Document Data',

    /* EC summary table column headers */
    s51_col_ec_number:  'EC Number',
    s51_col_from_date:  'From Date',
    s51_col_to_date:    'To Date',
    s51_col_total_deeds:'Total Deeds',
    s51_col_reg_number: 'Registration Number',
    s51_col_is_latest:  'Is Registration Latest',

    /* Kaveri key-value table labels */
    s51_kv_location:       'Location Measurement',
    s51_kv_article:        'Article Name',
    s51_kv_reg_datetime:   'Registration Date and Time',
    s51_kv_executant:      'Executant Name',
    s51_kv_claimant:       'Claimant Name',
    s51_kv_total_regs:     'Total Registrations',
    s51_kv_is_latest_reg:  'Is this Latest Registration:',
    s51_kv_latest_reg_no:  'Latest Registration No.',

    /* ══ SECTION 5.2 — Declaration ══ */
    s52_title: 'Declaration',
    s52_intro: 'Please read the following carefully:',
    s52_item1: '11A & 11B Khatha is being issued as per existing Panchatantra Records & subject to final verification as per my submitted documents.',
    s52_item2: 'In case of any discrepancy between existing Panchatantra records & my submitted information or missing information, my case will be referred to the jurisdictional PDO for decision or merit.',
    s52_item3: 'Any eKhatha on government or government organization land is liable to be rejected or cancelled.',
    s52_item4: 'Any wrongful or incorrect eKhatha issued is liable to be cancelled.',
    s52_check1: 'I understand and accept all of the above',
    s52_check2: 'I certify that information submitted is true & correct to the best of my knowledge & belief and any false or wrong information makes eKhatha liable to be cancelled & make me liable for criminal/suitable action as per law.',

    /* CTA buttons (main flow) */
    btn_verify:      'Verify Your Data',
    btn_save_proceed:'Save and Proceed',

    /* ══ SECTION 5.3 — Preview of Khata ══ */
    s53_title:   'Preview of Khata',
    s53_infobox: 'Please Preview Details of all the sections. You can click Edit to go back to the particular section or scroll to the bottom to proceed.',

    /* Preview block headings */
    s53_block_deed:           'Deed Details',
    s53_block_owner:          'Owner KYC',
    s53_block_property:       'Property Details',
    s53_block_classification: 'Property Classification',
    s53_block_ec:             'Upload EC',

    /* Deed Details table — Kaveri flow columns */
    s53_col_gp:       'Gram Panchayat',
    s53_col_village:  'Village',
    s53_col_reg_no:   'Registration number',
    s53_col_asset_no: 'Asset number',

    /* Deed Details table — No-Kaveri extra columns */
    s53_col_doc_type: 'Document Type',
    s53_col_doc_no:   'Document Number',
    s53_col_doc_date: 'Document Date',

    /* Owner KYC table columns */
    s53_col_owner_photo:    'Owner photograph',
    s53_col_owner_name:     'Owner Name',
    s53_col_owner_relation: 'Father/Mother/Guardian/Spouse/Name',
    s53_col_owner_id:       "Owner's Identification Document No.",
    s53_col_owner_address:  "Owner's Address",

    /* Property Details table columns */
    s53_col_prop_address: 'Property Address',
    s53_col_lat_lng:      'Latitude and Longitude',
    s53_col_prop_photo:   'Property Photo',
    s53_col_total_area:   'Total Area Details (Sq.Mts)',
    s53_col_irregular:    'Irregular Site Yes/No',
    s53_col_dimensions:   'Property Dimensions (Mts) North South, East West',

    /* Checkbandi columns */
    s53_col_cb_east:  'Checkbandi East',
    s53_col_cb_west:  'Checkbandi West',
    s53_col_cb_north: 'Checkbandi North',
    s53_col_cb_south: 'Checkbandi South',

    /* Property Classification table */
    s53_col_classification: 'Property Classification',
    s53_col_survey_no:      'Survey No.',
    s53_col_prop_cat:       'Property Category',
    s53_col_prop_type:      'Property Type',
    s53_col_corner_site:    'Corner Site Yes/No',
    s53_col_plinth_area:    'Plinth Area',
    s53_col_undivided_plot: 'Undivided Plot size / Total Land divided plot size',
    s53_col_floor_no:       'Floor No.',
    s53_col_year_usage:     'Year of construction / Usage',

    /* Edit button in preview blocks */
    s53_edit_btn: 'Edit',

    /* ══ SECTION 5.4 — Draft Khata ══ */
    s54_title:         'Draft Khata',
    s54_download_btn:  'Download',
    s54_final_save_btn:'FINAL SAVE',
    s54_prev_edit_btn: 'Previous and Edit',

    /* Success caption (split around inline link) */
    s54_success_pre:  'Your e-khata application has been saved. Please track your approval status in the',
    s54_success_link: 'pending applications',
    s54_success_post: 'page.',

    /* ── Final Save confirmation modal ── */
    modal_message:    'Are you sure you want to FINAL SAVE?',
    modal_submessage: 'You cannot make any changes to the application once you final save.',
    modal_yes:        'Yes, Final Save',
    modal_cancel:     'Cancel',
  },

  kn: {
    /* ── Step header ── */
    step_label: 'ಹಂತ 5',
    step_title: 'EC ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',

    /* ── Page-level notice ── */
    page_notice_pre:  'ನಿಮ್ಮ ಬಳಿ ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (ಫಾರ್ಮ್ 15) ಇಲ್ಲದಿದ್ದರೆ,',
    page_notice_link: 'ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ',
    page_notice_post: 'ದಾಖಲೆ ನೀಡಿಸಿ ಮತ್ತು ನಂತರ ಈ ಕೊನೆಯ ಹಂತ ಪೂರ್ಣಗೊಳಿಸಿ.',

    /* ══ SECTION 5.1 ══ */
    s51_title: 'EC ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',

    /* Info block — from newAppFirst.js kn (s01_ec_*) */
    s51_info_main:       'EC- ಎನ್ಕಂಬ್ರನ್ಸ್ ಪ್ರಮಾಣಪತ್ರ/ ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (ಫಾರ್ಮ್ 15) : ನೋಂದಣಿ ದಿನಾಂಕಕ್ಕೆ ಕನಿಷ್ಠ ಒಂದು ದಿನ ಮೊದಲು ನೀಡಲಾದ EC (ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ) ಅಗತ್ಯವಿದೆ. ಕಳೆದ 15 ದಿನಗಳಲ್ಲಿ ನೀಡಲಾದ EC ಗಳನ್ನು ಸ್ವೀಕರಿಸಲಾಗುತ್ತದೆ.',
    s51_info_link:       'ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ',
    s51_info_note_label: 'ಟಿಪ್ಪಣಿ:',
    s51_info_note:       'ನಿಮ್ಮ ನೋಂದಾಯಿತ ಪತ್ರದ ದಿನಾಂಕ 01.04.2004 ಕ್ಕಿಂತ ಮೊದಲು ಇದ್ದರೆ, ನೀವು ಎರಡು EC ಗಳನ್ನು ಸಲ್ಲಿಸಬೇಕಾಗುತ್ತದೆ:',
    s51_info_list1:      'i. 01.04.2004 ರಿಂದ ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ ನೀಡಲಾದ ದಿನಾಂಕದವರೆಗೆ (ಕಳೆದ 15 ದಿನಗಳೊಳಗೆ) ಇರುವ ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ.',
    s51_info_list2:      'ii. ನಿಮ್ಮ ನೋಂದಾಯಿತ ಪತ್ರದ ದಿನಾಂಕಕ್ಕಿಂತ ಕನಿಷ್ಠ ಒಂದು ದಿನ ಮೊದಲುಗಳಿಂದ 31.03.2004 ರವರೆಗೆ ಇರುವ ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ.',
    s51_info_example:    '(ಉದಾಹರಣೆ: ನಿಮ್ಮ ನೋಂದಾಯಿತ ಪತ್ರದ ದಿನಾಂಕ 17.08.1998 ಆಗಿದ್ದರೆ, ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರವು 16.08.1998 ರಿಂದ ಪ್ರಾರಂಭ ಆಗಬೇಕು. ಟಿಪ್ಪಣಿ: ನಿಮ್ಮ ನೋಂದಾಯಿತ ಪತ್ರವು ಸಲ್ಲಿಸಿದ EC ಯಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ, ಅರ್ಜಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ.)',

    /* Field labels & placeholders — from kannada_reference_2.md STEP 5 */
    s51_deed_label:       'ನೋಂದಣಿ ದಾಖಲೆ ಸಂಖ್ಯೆ',
    s51_deed_placeholder: 'ನೋಂದಣಿ ದಾಖಲೆ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    s51_ec_label:         'EC ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    s51_ec_placeholder:   'ನಿಮ್ಮ EC ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',

    /* Buttons — from reference */
    s51_fetch_btn:    'EC ವಿವರಗಳನ್ನು ಪಡೆಯಿರಿ',
    s51_edit_btn:     'ಸಂಪಾದಿಸಿ',
    s51_validate_btn: 'EC ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಉಳಿಸಿ',

    /* Tooltip — from reference */
    s51_tooltip_label:   'ನಿಮ್ಮ EC ಸಂಖ್ಯೆಯನ್ನು ಎಲ್ಲಿಗೆ ಹುಡುಕುವುದು',
    s51_tooltip_caption: 'ಮಾದರಿಯನ್ನು ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ',

    /* Kaveri EC table — from reference */
    s51_kaveri_title: 'ಕಾವೇರಿ EC ದಸ್ತಾವೇಜು ಮಾಹಿತಿ',

    s51_col_ec_number:   'EC ಸಂಖ್ಯೆ',
    s51_col_from_date:   'ಪ್ರಾರಂಭ ದಿನಾಂಕ',
    s51_col_to_date:     'ಅಂತಿಮ ದಿನಾಂಕ',
    s51_col_total_deeds: 'ಒಟ್ಟು ದಾಖಲೆಗಳು',
    s51_col_reg_number:  'ನೋಂದಣಿ ಸಂಖ್ಯೆ',
    s51_col_is_latest:   'ಇದು ಇತ್ತೀಚಿನ ನೋಂದಣಿಯೇ',

    /* KV table labels — from reference */
    s51_kv_location:      'ಸ್ಥಳದ ಅಳತೆ',
    s51_kv_article:       'ಲೇಖನದ ಹೆಸರು',
    s51_kv_reg_datetime:  'ನೋಂದಣಿ ದಿನಾಂಕ ಮತ್ತು ಸಮಯ',
    s51_kv_executant:     'ಕಾರ್ಯನಿರ್ವಾಹಕನ ಹೆಸರು',
    s51_kv_claimant:      'ಹಕ್ಕುದಾರರ ಹೆಸರು',
    s51_kv_total_regs:    'ಒಟ್ಟು ನೋಂದಣಿಗಳು',
    s51_kv_is_latest_reg: 'ಇದು ಇತ್ತೀಚಿನ ನೋಂದಣಿಯೇ:',
    s51_kv_latest_reg_no: 'ಇತ್ತೀಚಿನ ನೋಂದಣಿ ಸಂಖ್ಯೆ',

    /* ══ SECTION 5.2 — Declaration — from reference ══ */
    s52_title: 'ಘೋಷಣೆ',
    s52_intro: 'ದಯವಿಟ್ಟು ಕೆಳಗಿನವನ್ನು ಗಮನದಿಂದ ಓದಿ:',
    s52_item1: '11A ಮತ್ತು 11B ಖಾತಾ ಪ್ರಸ್ತುತ ಪಂಚತಂತ್ರ ದಾಖಲೆಗಳ ಪ್ರಕಾರ ನೀಡಲಾಗುತ್ತಿದೆ ಮತ್ತು ನಾನು ಸಲ್ಲಿಸಿದ ದಾಖಲೆಗಳ ಅಂತಿಮ ಪರಿಶೀಲನೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.',
    s52_item2: 'ಪ್ರಸ್ತುತ ಪಂಚತಂತ್ರ ದಾಖಲೆಗಳು ಮತ್ತು ನಾನು ಸಲ್ಲಿಸಿದ ಮಾಹಿತಿಯ ನಡುವೆ ಯಾವುದೇ ವ್ಯತ್ಯಾಸ ಅಥವಾ ಮಾಹಿತಿಯ ಕೊರತೆ ಇದ್ದಲ್ಲಿ, ನನ್ನ ಪ್ರಕರಣವನ್ನು ನಿರ್ಧಾರಕ್ಕಾಗಿ ಸಂಬಂಧಿತ PDO ಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.',
    s52_item3: 'ಸರ್ಕಾರ ಅಥವಾ ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಯ ಭೂಮಿಯ ಮೇಲೆ ಯಾವುದೇ eKhatha ತಿರಸ್ಕರಿಸಬಹುದಾಗಿದೆ ಅಥವಾ ರದ್ದುಪಡಿಸಬಹುದಾಗಿದೆ.',
    s52_item4: 'ಯಾವುದೇ ತಪ್ಪಾದ ಅಥವಾ ತಪ್ಪು eKhatha ನೀಡಲಾಗಿದ್ದರೆ ಅದು ರದ್ದುಪಡಿಸಬಹುದಾಗಿದೆ.',
    s52_check1: 'ಮೇಲಿನ ಎಲ್ಲವನ್ನು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಒಪ್ಪುತ್ತೇನೆ',
    s52_check2: 'ನಾನು ಸಲ್ಲಿಸಿದ ಮಾಹಿತಿ ನನ್ನ ತಿಳುವಳಿಕೆ ಮತ್ತು ನಂಬಿಕೆಯ ಮಟ್ಟಿಗೆ ಸತ್ಯ ಮತ್ತು ಸರಿಯಾಗಿದೆ ಎಂದು ಪ್ರಮಾಣೀಕರಿಸುತ್ತೇನೆ ಮತ್ತು ಯಾವುದೇ ತಪ್ಪು ಅಥವಾ ತಪ್ಪಾದ ಮಾಹಿತಿ eKhatha ರದ್ದುಪಡಿಸುವಂತೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಕಾನೂನಿನ ಪ್ರಕಾರ ನನ್ನ ಮೇಲೆ ಕ್ರಿಮಿನಲ್/ಯೋಗ್ಯ ಕ್ರಮ ಕೈಗೊಳ್ಳುವಂತೆ ಮಾಡುತ್ತದೆ.',

    /* CTA buttons */
    btn_verify:       'ನಿಮ್ಮ ಮಾಹಿತಿ ಪರಿಶೀಲಿಸಿ',
    btn_save_proceed: 'ಉಳಿಸಿ ಮತ್ತು ಮುಂದುವರಿಯಿರಿ',

    /* ══ SECTION 5.3 — Preview of Khata ══ */
    /* Title — from reference */
    s53_title:   'ಖಾತಾ ಪೂರ್ವವೀಕ್ಷಣೆ',
    /* Infobox — from reference */
    s53_infobox: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ವಿಭಾಗಗಳ ವಿವರಗಳನ್ನು ಪೂರ್ವದೃಶ್ಯಗೊಳಿಸಿ. ನಿರ್ದಿಷ್ಟ ವಿಭಾಗಕ್ಕೆ ಹಿಂತಿರುಗಲು ನೀವು ಸಂಪಾದನೆ ಕ್ಲಿಕ್ ಮಾಡಬಹುದು ಅಥವಾ ಮುಂದುವರಿಯಲು ಕೆಳಭಾಗಕ್ಕೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಬಹುದು.',

    /* Block headings */
    s53_block_deed:           'ದಾಖಲೆ ವಿವರಗಳು',
    s53_block_owner:          'ಮಾಲೀಕರ KYC',
    s53_block_property:       'ಆಸ್ತಿ ವಿವರಗಳು',
    s53_block_classification: 'ಆಸ್ತಿ ವರ್ಗೀಕರಣ',
    s53_block_ec:             'EC ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',

    /* Deed table — Kaveri columns (from step1 kn) */
    s53_col_gp:       'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ',
    s53_col_village:  'ಗ್ರಾಮ',
    s53_col_reg_no:   'ನೋಂದಣಿ ಸಂಖ್ಯೆ',
    s53_col_asset_no: 'ಆಸ್ತಿ ಸಂಖ್ಯೆ',

    /* Deed table — No-Kaveri extra columns (from step1 kn) */
    s53_col_doc_type: 'ದಾಖಲೆ ಪ್ರಕಾರ',
    s53_col_doc_no:   'ದಾಖಲೆ ಸಂಖ್ಯೆ',
    s53_col_doc_date: 'ದಾಖಲೆ ದಿನಾಂಕ',

    /* Owner KYC columns (from step2/kannada_reference kn) */
    s53_col_owner_photo:    'ಮಾಲೀಕರ ಚಿತ್ರ',
    s53_col_owner_name:     'ಮಾಲೀಕರ ಹೆಸರು',
    s53_col_owner_relation: 'ತಂದೆ/ತಾಯಿ/ಪೋಷಕ/ಪತಿ-ಪತ್ನಿ/ಹೆಸರು',
    s53_col_owner_id:       'ಮಾಲೀಕರ ಗುರುತಿನ ದಾಖಲೆ ಸಂಖ್ಯೆ',
    s53_col_owner_address:  'ಮಾಲೀಕರ ವಿಳಾಸ',

    /* Property Details columns (from step3 kn) */
    s53_col_prop_address: 'ಆಸ್ತಿ ವಿಳಾಸ',
    s53_col_lat_lng:      'ಅಕ್ಷಾಂಶ ಮತ್ತು ರೇಖಾಂಶ',
    s53_col_prop_photo:   'ಆಸ್ತಿ ಫೋಟೋ',
    s53_col_total_area:   'ಒಟ್ಟು ಪ್ರದೇಶ ವಿವರಗಳು (ಚ.ಮೀ)',
    s53_col_irregular:    'ಅಸಮ ಜಾಗ ಹೌದು/ಇಲ್ಲ',
    s53_col_dimensions:   'ಆಸ್ತಿ ಆಯಾಮಗಳು (ಮೀ) ಉತ್ತರ ದಕ್ಷಿಣ, ಪೂರ್ವ ಪಶ್ಚಿಮ',

    /* Checkbandi columns (from step3 kn) */
    s53_col_cb_east:  'ಚೆಕ್‌ಬಂದಿ ಪೂರ್ವ',
    s53_col_cb_west:  'ಚೆಕ್‌ಬಂದಿ ಪಶ್ಚಿಮ',
    s53_col_cb_north: 'ಚೆಕ್‌ಬಂದಿ ಉತ್ತರ',
    s53_col_cb_south: 'ಚೆಕ್‌ಬಂದಿ ದಕ್ಷಿಣ',

    /* Property Classification (from step4 kn) */
    s53_col_classification: 'ಆಸ್ತಿ ವರ್ಗೀಕರಣ',
    s53_col_survey_no:      'ಸರ್ವೆ ಸಂಖ್ಯೆ',
    s53_col_prop_cat:       'ಆಸ್ತಿ ವರ್ಗ',
    s53_col_prop_type:      'ಆಸ್ತಿ ಪ್ರಕಾರ',
    s53_col_corner_site:    'ಮೂಲೆಯ ಜಾಗ ಹೌದು/ಇಲ್ಲ',
    s53_col_plinth_area:    'ಪ್ಲಿಂತ್ ಏರಿಯಾ',
    s53_col_undivided_plot: 'ಅವಿಭಜಿತ ಜಾಗದ ಗಾತ್ರ / ಒಟ್ಟು ಭೂಮಿ ವಿಭಜಿತ ಜಾಗದ ಗಾತ್ರ',
    s53_col_floor_no:       'ಮಹಡಿ ಸಂಖ್ಯೆ',
    s53_col_year_usage:     'ನಿರ್ಮಾಣ ವರ್ಷ / ಬಳಕೆ',

    /* Edit button */
    s53_edit_btn: 'ಸಂಪಾದಿಸಿ',

    /* ══ SECTION 5.4 — Draft Khata ══ */
    s54_title:          'ಕರಡು ಖಾತಾ',
    s54_download_btn:   'ಡೌನ್‌ಲೋಡ್',
    s54_final_save_btn: 'ಅಂತಿಮ ಉಳಿತಾಯ',
    s54_prev_edit_btn:  'ಹಿಂದಿನ ಮತ್ತು ತಿದ್ದುಪಡಿ',

    /* Success caption */
    s54_success_pre:  'ನಿಮ್ಮ e-ಖಾತಾ ಅರ್ಜಿ ಉಳಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು',
    s54_success_link: 'ನಿಲ್ಲಿಸಿರುವ ಅರ್ಜಿಗಳು',
    s54_success_post: 'ಪುಟದಲ್ಲಿ ನಿಮ್ಮ ಅನುಮೋದನೆ ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.',

    /* Final Save modal */
    modal_message:    'ನೀವು ಅಂತಿಮ ಉಳಿತಾಯ ಮಾಡಲು ಖಚಿತರಾಗಿದ್ದೀರಾ?',
    modal_submessage: 'ಅಂತಿಮ ಉಳಿತಾಯ ಮಾಡಿದ ನಂತರ ಅರ್ಜಿಯಲ್ಲಿ ಯಾವುದೇ ಬದಲಾವಣೆ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ.',
    modal_yes:        'ಹೌದು, ಅಂತಿಮ ಉಳಿತಾಯ',
    modal_cancel:     'ರದ್ದುಮಾಡಿ',
  },
};

export default step5;
