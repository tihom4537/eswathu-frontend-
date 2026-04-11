/**
 * step1 namespace — SaleDeedDetailsPage
 * Section 1.1 — Location and property document details
 * Section 1.2 — Property registration details (Yes/No flow)
 * Section 1.3 — Review
 *
 * Glossary terms used:
 *   Sale Deed = ಕ್ರಯ ಪತ್ರ  (#1)
 *   Deed Document = ದಾಖಲೆ ಪತ್ರ  (#1)
 *   Gift Deed = ದಾನ ಪತ್ರ  (#1)
 *   Release Deed = ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ  (#1)
 *   Gram Panchayat = ಗ್ರಾಮ ಪಂಚಾಯಿತಿ  (#19)
 */
const step1 = {
  en: {
    /* ── StepHeader ── */
    step_label: 'Step 1',
    step_title: 'Sale/ property registration deed details',

    /* ── Section 1.1 ── */
    s11_title: 'Location and property document details',
    s11_location_group: 'Location details',
    s11_district: 'District',
    s11_taluk: 'Taluk',
    s11_panchayat: 'Panchayat',
    s11_village: 'Village',
    s11_doc_group: 'Please enter your document details',
    s11_asset_label: 'Asset Number',
    s11_asset_placeholder: 'Enter your Asset Number',
    s11_tooltip_asset_label: 'Where to find your Asset Number',
    s11_tooltip_caption: 'Click to view sample',
    s11_btn_save: 'Save and Continue',
    s11_btn_edit: 'Edit',
    s11_save_success: 'Location and Property Document Details saved successfully',

    /* Section 1.1 — District dropdown options */
    s11_opt_dist_bengaluru_rural: 'Bengaluru Rural',
    s11_opt_dist_bengaluru_urban: 'Bengaluru Urban',
    s11_opt_dist_mysuru: 'Mysuru',
    s11_opt_dist_tumkur: 'Tumkur',
    s11_opt_dist_mandya: 'Mandya',

    /* Section 1.1 — Taluk dropdown options */
    s11_opt_taluk_devanahalli: 'Devanahalli',
    s11_opt_taluk_hosakote: 'Hosakote',
    s11_opt_taluk_nelamangala: 'Nelamangala',
    s11_opt_taluk_doddaballapura: 'Doddaballapura',
    s11_opt_taluk_ramanagara: 'Ramanagara',

    /* Section 1.1 — Panchayat dropdown options */
    s11_opt_gp_doddahasala: 'Doddahasala GP',
    s11_opt_gp_sadahalli: 'Sadahalli GP',
    s11_opt_gp_vijayapura: 'Vijayapura GP',
    s11_opt_gp_bashettihalli: 'Bashettihalli GP',
    s11_opt_gp_yelahanka: 'Yelahanka GP',

    /* Section 1.1 — Village dropdown options */
    s11_opt_vill_doddahasala: 'Doddahasala',
    s11_opt_vill_sadahalli: 'Sadahalli',
    s11_opt_vill_vijayapura: 'Vijayapura',
    s11_opt_vill_bashettihalli: 'Bashettihalli',
    s11_opt_vill_yelahanka: 'Yelahanka',

    /* ── Section 1.2 ── */
    s12_title: 'Property registration details',
    s12_question: 'Did the property registration happen after 01/04/2004?',
    s12_yes: 'Yes',
    s12_no: 'No',

    /* Yes flow */
    s12_reg_label: 'Registration Number',
    s12_reg_placeholder: 'e.g. XXX-1-12345-2003-04',
    s12_tooltip_reg_label: 'Where to find your Registration Number',
    s12_fetch_btn: 'Fetch Property Details',
    s12_fetch_success: 'Kaveri details fetched successfully. Please proceed to next step.',
    s12_kaveri_collapse: 'Kaveri table',

    /* Kaveri table field labels */
    s12_kav_reg_no: 'Registration number',
    s12_kav_village: 'Village',
    s12_kav_nature_deed: 'Nature of deed',
    s12_kav_hobli: 'Hobli',
    s12_kav_prop_id: 'Property ID',
    s12_kav_sro: 'SRO name',
    s12_kav_doc_id: 'Document ID',
    s12_kav_zone: 'Zone name',
    s12_kav_directions: 'Directions',
    s12_kav_east: 'East',
    s12_kav_west: 'West',
    s12_kav_north: 'North',
    s12_kav_south: 'South',
    s12_kav_checkbandi: 'Checkbandi',
    s12_kav_sch_type: 'Schedule type',
    s12_kav_prop_area: 'Property area',
    s12_kav_sch_desc: 'Schedule description',
    s12_kav_party_name: 'Party Name',
    s12_kav_party_type: 'Party type',
    s12_kav_party_addr: 'Party Address',

    /* Property/schedule selection */
    s12_select_group: 'Select property and schedule details',
    s12_col_sel_prop: 'Select property',
    s12_col_prop_id: 'Property ID',
    s12_col_doc_id: 'Document ID',
    s12_col_village: 'Village',
    s12_col_sro: 'SRO Name',
    s12_col_sel_sch: 'Select schedule',
    s12_col_sch_type: 'Schedule type',
    s12_col_sch_desc: 'Schedule description',
    s12_btn_save: 'Save and Continue',
    s12_btn_edit: 'Edit',

    /* No flow */
    s12_no_doc_type: 'Document Type',
    s12_no_doc_caption: 'Please select any of these other documents',
    s12_no_doc_no: 'Document No.',
    s12_no_doc_no_caption: 'Enter the number relevant to selected document',
    s12_no_doc_date: 'Document Date',
    s12_no_doc_date_caption: 'Please enter day-month-year',
    s12_no_upload: 'Upload Document',
    s12_no_upload_error: 'Document exceeds 5MB',
    s12_no_upload_success: 'Document uploaded successfully',
    s12_no_upload_info: 'Only PDF size up-to 5MB allowed',

    /* No flow dropdown options */
    s12_opt_property_card: 'Property card',
    s12_opt_inherited: 'Inherited property',
    s12_opt_division: 'Division of property',
    s12_opt_gift_deed: 'Gift Deed',
    s12_opt_will: 'Will',
    s12_opt_release_deed: 'Release Deed',
    s12_opt_transfer_cert: 'Transfer certificate',
    s12_opt_court_order: 'Court order',
    s12_opt_division_letter: 'Division letter',

    /* ── Section 1.3 ── */
    s13_title_yes: 'Review',
    s13_title_no: 'Review Details',
    s13_col_gp: 'Gram Panchayat',
    s13_col_village: 'Village',
    s13_col_reg_no: 'Registration number',
    s13_col_asset: 'Asset number',
    s13_col_doc_type: 'Document type',
    s13_col_doc_no: 'Document number',
    s13_col_doc_date: 'Document registration date',
    s13_success_yes: 'Application and Property ID have been generated. Kindly note both the IDs for future use to track the status of your application.',
    s13_success_no: 'Application No. and Property ID have been generated. Kindly note both the IDs for future use to track the status of your application.',
    s13_app_id: 'Application ID',
    s13_app_no: 'Application No.',
    s13_prop_id_eswathu: 'Property ID (eswathu)',
    btn_save_proceed: 'Save and Proceed',

    /* ── Error / warning messages ── */
    err_kaveri_fetch: 'Error in fetching details from Kaveri. Please Retry or Contact Kaveri helpline XXXXXXXXXX.',
    err_kaveri_warn: 'You will lose progress in Steps 2, 3, 4, and 5 — Owner KYC, Property Details, Property Classification, and Upload EC.',
    err_kaveri_warn_sub: 'This action cannot be undone.',
    err_kaveri_yes_edit: 'Yes, Edit',
    err_kaveri_cancel: 'Cancel',
  },
  kn: {
    /* ── StepHeader ── */
    step_label: 'ಹಂತ 1',
    step_title: 'ಕ್ರಯ ಪತ್ರ / ಆಸ್ತಿ ನೋಂದಣಿ ದಾಖಲೆ ವಿವರಗಳು',

    /* ── Section 1.1 ── */
    s11_title: 'ಸ್ಥಳ ಮತ್ತು ಆಸ್ತಿ ದಾಖಲೆ ವಿವರಗಳು',
    s11_location_group: 'ಸ್ಥಳ ವಿವರಗಳು',
    s11_district: 'ಜಿಲ್ಲೆ',
    s11_taluk: 'ತಾಲೂಕು',
    s11_panchayat: 'ಪಂಚಾಯಿತಿ',
    s11_village: 'ಗ್ರಾಮ',
    s11_doc_group: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ದಾಖಲೆ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
    s11_asset_label: 'ಆಸ್ತಿ ಸಂಖ್ಯೆ',
    s11_asset_placeholder: 'ನಿಮ್ಮ ಆಸ್ತಿ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    s11_tooltip_asset_label: 'ನಿಮ್ಮ ಆಸ್ತಿ ಸಂಖ್ಯೆ ಎಲ್ಲಿ ಸಿಗುತ್ತದೆ',
    s11_tooltip_caption: 'ಮಾದರಿ ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
    s11_btn_save: 'ಉಳಿಸಿ ಮುಂದುವರಿಯಿರಿ',
    s11_btn_edit: 'ತಿದ್ದುಪಡಿ ಮಾಡಿ',
    s11_save_success: 'ಸ್ಥಳ ಮತ್ತು ಆಸ್ತಿ ದಾಖಲೆ ವಿವರಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ',

    /* Section 1.1 — District dropdown options */
    s11_opt_dist_bengaluru_rural: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ',
    s11_opt_dist_bengaluru_urban: 'ಬೆಂಗಳೂರು ನಗರ',
    s11_opt_dist_mysuru: 'ಮೈಸೂರು',
    s11_opt_dist_tumkur: 'ತುಮಕೂರು',
    s11_opt_dist_mandya: 'ಮಂಡ್ಯ',

    /* Section 1.1 — Taluk dropdown options */
    s11_opt_taluk_devanahalli: 'ದೇವನಹಳ್ಳಿ',
    s11_opt_taluk_hosakote: 'ಹೊಸಕೋಟೆ',
    s11_opt_taluk_nelamangala: 'ನೆಲಮಂಗಲ',
    s11_opt_taluk_doddaballapura: 'ದೊಡ್ಡಬಳ್ಳಾಪುರ',
    s11_opt_taluk_ramanagara: 'ರಾಮನಗರ',

    /* Section 1.1 — Panchayat dropdown options */
    s11_opt_gp_doddahasala: 'ದೊಡ್ಡಹಸಲ ಗ್ರಾಪಂ',
    s11_opt_gp_sadahalli: 'ಸದಾಹಳ್ಳಿ ಗ್ರಾಪಂ',
    s11_opt_gp_vijayapura: 'ವಿಜಯಪುರ ಗ್ರಾಪಂ',
    s11_opt_gp_bashettihalli: 'ಬಸೆಟ್ಟಿಹಳ್ಳಿ ಗ್ರಾಪಂ',
    s11_opt_gp_yelahanka: 'ಯಲಹಂಕ ಗ್ರಾಪಂ',

    /* Section 1.1 — Village dropdown options */
    s11_opt_vill_doddahasala: 'ದೊಡ್ಡಹಸಲ',
    s11_opt_vill_sadahalli: 'ಸದಾಹಳ್ಳಿ',
    s11_opt_vill_vijayapura: 'ವಿಜಯಪುರ',
    s11_opt_vill_bashettihalli: 'ಬಸೆಟ್ಟಿಹಳ್ಳಿ',
    s11_opt_vill_yelahanka: 'ಯಲಹಂಕ',

    /* ── Section 1.2 ── */
    s12_title: 'ಆಸ್ತಿ ನೋಂದಣಿ ವಿವರಗಳು',
    s12_question: 'ಆಸ್ತಿ ನೋಂದಣಿ 01/04/2004 ರ ನಂತರ ಆಗಿದೆಯೇ?',
    s12_yes: 'ಹೌದು',
    s12_no: 'ಇಲ್ಲ',

    /* Yes flow */
    s12_reg_label: 'ನೋಂದಣಿ ಸಂಖ್ಯೆ',
    s12_reg_placeholder: 'ನಿಮ್ಮ ಕಾವೇರಿ ನೋಂದಣಿ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    s12_tooltip_reg_label: 'ನಿಮ್ಮ ನೋಂದಣಿ ಸಂಖ್ಯೆ ಎಲ್ಲಿ ಸಿಗುತ್ತದೆ',
    s12_fetch_btn: 'ಆಸ್ತಿ ವಿವರಗಳನ್ನು ತರಿಸಿ',
    s12_fetch_success: 'ಕಾವೇರಿ ವಿವರಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ತರಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಮುಂದಿನ ಹಂತಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ.',
    s12_kaveri_collapse: 'ಕಾವೇರಿ ವಿವರ ಪಟ್ಟಿ',

    /* Kaveri table field labels */
    s12_kav_reg_no: 'ನೋಂದಣಿ ಸಂಖ್ಯೆ',
    s12_kav_village: 'ಗ್ರಾಮ',
    s12_kav_nature_deed: 'ದಾಖಲೆ ಪತ್ರದ ಸ್ವರೂಪ',
    s12_kav_hobli: 'ಹೋಬಳಿ',
    s12_kav_prop_id: 'ಆಸ್ತಿ ಗುರುತಿನ ಸಂಖ್ಯೆ',
    s12_kav_sro: 'ಉಪ ನೋಂದಣಿ ಕಚೇರಿ ಹೆಸರು',
    s12_kav_doc_id: 'ದಾಖಲೆ ಗುರುತಿನ ಸಂಖ್ಯೆ',
    s12_kav_zone: 'ವಲಯ ಹೆಸರು',
    s12_kav_directions: 'ದಿಕ್ಕುಗಳು',
    s12_kav_east: 'ಪೂರ್ವ',
    s12_kav_west: 'ಪಶ್ಚಿಮ',
    s12_kav_north: 'ಉತ್ತರ',
    s12_kav_south: 'ದಕ್ಷಿಣ',
    s12_kav_checkbandi: 'ಚೆಕ್‌ಬಂಡಿ',
    s12_kav_sch_type: 'ಶೆಡ್ಯೂಲ್ ಪ್ರಕಾರ',
    s12_kav_prop_area: 'ಆಸ್ತಿ ಪ್ರದೇಶ',
    s12_kav_sch_desc: 'ಶೆಡ್ಯೂಲ್ ವಿವರಣೆ',
    s12_kav_party_name: 'ಪಕ್ಷದ ಹೆಸರು',
    s12_kav_party_type: 'ಪಕ್ಷದ ಪ್ರಕಾರ',
    s12_kav_party_addr: 'ಪಕ್ಷದ ವಿಳಾಸ',

    /* Property/schedule selection */
    s12_select_group: 'ಆಸ್ತಿ ಮತ್ತು ಶೆಡ್ಯೂಲ್ ವಿವರಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
    s12_col_sel_prop: 'ಆಸ್ತಿ ಆಯ್ಕೆ ಮಾಡಿ',
    s12_col_prop_id: 'ಆಸ್ತಿ ಗುರುತಿನ ಸಂಖ್ಯೆ',
    s12_col_doc_id: 'ದಾಖಲೆ ಗುರುತಿನ ಸಂಖ್ಯೆ',
    s12_col_village: 'ಗ್ರಾಮ',
    s12_col_sro: 'ಉಪ ನೋಂದಣಿ ಕಚೇರಿ ಹೆಸರು',
    s12_col_sel_sch: 'ಶೆಡ್ಯೂಲ್ ಆಯ್ಕೆ ಮಾಡಿ',
    s12_col_sch_type: 'ಶೆಡ್ಯೂಲ್ ಪ್ರಕಾರ',
    s12_col_sch_desc: 'ಶೆಡ್ಯೂಲ್ ವಿವರಣೆ',
    s12_btn_save: 'ಉಳಿಸಿ ಮುಂದುವರಿಯಿರಿ',
    s12_btn_edit: 'ತಿದ್ದುಪಡಿ ಮಾಡಿ',

    /* No flow */
    s12_no_doc_type: 'ದಾಖಲೆ ಪ್ರಕಾರ',
    s12_no_doc_caption: 'ದಯವಿಟ್ಟು ಈ ಇತರ ದಾಖಲೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
    s12_no_doc_no: 'ದಾಖಲೆ ಸಂಖ್ಯೆ',
    s12_no_doc_no_caption: 'ಆಯ್ಕೆ ಮಾಡಿದ ದಾಖಲೆಗೆ ಸಂಬಂಧಿಸಿದ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    s12_no_doc_date: 'ದಾಖಲೆ ದಿನಾಂಕ',
    s12_no_doc_date_caption: 'ದಿನ-ತಿಂಗಳು-ವರ್ಷ ನಮೂದಿಸಿ',
    s12_no_upload: 'ದಾಖಲೆ ಅಪ್ಲೋಡ್ ಮಾಡಿ',
    s12_no_upload_error: 'ದಾಖಲೆ 5MB ಮೀರಿದೆ',
    s12_no_upload_success: 'ದಾಖಲೆ ಯಶಸ್ವಿಯಾಗಿ ಅಪ್ಲೋಡ್ ಆಗಿದೆ',
    s12_no_upload_info: 'ಕೇವಲ 5MB ವರೆಗಿನ PDF ಅನುಮತಿಸಲಾಗಿದೆ',

    /* No flow dropdown options */
    s12_opt_property_card: 'ಆಸ್ತಿ ಕಾರ್ಡ್',
    s12_opt_inherited: 'ಉತ್ತರಾಧಿಕಾರ ಆಸ್ತಿ',
    s12_opt_division: 'ಆಸ್ತಿ ವಿಭಜನೆ',
    s12_opt_gift_deed: 'ದಾನ ಪತ್ರ',
    s12_opt_will: 'ಉಯಿಲು',
    s12_opt_release_deed: 'ಹಕ್ಕು ಬಿಡುಗಡೆ ಪತ್ರ',
    s12_opt_transfer_cert: 'ವರ್ಗಾವಣೆ ಪ್ರಮಾಣ ಪತ್ರ',
    s12_opt_court_order: 'ನ್ಯಾಯಾಲಯದ ಆದೇಶ',
    s12_opt_division_letter: 'ವಿಭಜನೆ ಪತ್ರ',

    /* ── Section 1.3 ── */
    s13_title_yes: 'ಪರಿಶೀಲನೆ',
    s13_title_no: 'ವಿವರ ಪರಿಶೀಲನೆ',
    s13_col_gp: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ',
    s13_col_village: 'ಗ್ರಾಮ',
    s13_col_reg_no: 'ನೋಂದಣಿ ಸಂಖ್ಯೆ',
    s13_col_asset: 'ಆಸ್ತಿ ಸಂಖ್ಯೆ',
    s13_col_doc_type: 'ದಾಖಲೆ ಪ್ರಕಾರ',
    s13_col_doc_no: 'ದಾಖಲೆ ಸಂಖ್ಯೆ',
    s13_col_doc_date: 'ದಾಖಲೆ ನೋಂದಣಿ ದಿನಾಂಕ',
    s13_success_yes: 'ಅರ್ಜಿ ಮತ್ತು ಆಸ್ತಿ ಗುರುತಿನ ಸಂಖ್ಯೆ ಸೃಷ್ಟಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಅರ್ಜಿಯ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಲು ಭವಿಷ್ಯದ ಉಪಯೋಗಕ್ಕಾಗಿ ಎರಡೂ ಗುರುತಿನ ಸಂಖ್ಯೆಗಳನ್ನು ನೋಂದಾಯಿಸಿ.',
    s13_success_no: 'ಅರ್ಜಿ ಸಂಖ್ಯೆ ಮತ್ತು ಆಸ್ತಿ ಗುರುತಿನ ಸಂಖ್ಯೆ ಸೃಷ್ಟಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಅರ್ಜಿಯ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಲು ಭವಿಷ್ಯದ ಉಪಯೋಗಕ್ಕಾಗಿ ಎರಡೂ ಗುರುತಿನ ಸಂಖ್ಯೆಗಳನ್ನು ನೋಂದಾಯಿಸಿ.',
    s13_app_id: 'ಅರ್ಜಿ ಗುರುತಿನ ಸಂಖ್ಯೆ',
    s13_app_no: 'ಅರ್ಜಿ ಸಂಖ್ಯೆ',
    s13_prop_id_eswathu: 'ಆಸ್ತಿ ಗುರುತಿನ ಸಂಖ್ಯೆ (ಇ-ಸ್ವತ್ಥು)',
    btn_save_proceed: 'ಉಳಿಸಿ ಮುಂದುವರಿಯಿರಿ',

    /* ── Error / warning messages ── */
    err_kaveri_fetch: 'ಕಾವೇರಿಯಿಂದ ವಿವರಗಳನ್ನು ತರಿಸಲು ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ಕಾವೇರಿ ಸಹಾಯವಾಣಿ XXXXXXXXXX ಸಂಪರ್ಕಿಸಿ.',
    err_kaveri_warn: 'ಕಾವೇರಿ ನೋಂದಣಿ ಸಂಖ್ಯೆ ತಿದ್ದಿದರೆ ಮಾಲೀಕ KYC, ಆಸ್ತಿ ವಿವರಗಳು ಮತ್ತು ಆಸ್ತಿ ವರ್ಗೀಕರಣ ಸೇರಿದಂತೆ ಅನೇಕ ವಿಭಾಗಗಳಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಗತಿ ಕಳೆದುಹೋಗುತ್ತದೆ. ಮುಂದುವರಿಯಲು ನೀವು ಖಚಿತವಾಗಿ ಬಯಸುತ್ತೀರಾ?',
    err_kaveri_warn_sub: 'ಈ ಕ್ರಿಯೆಯನ್ನು ರದ್ದುಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
    err_kaveri_yes_edit: 'ಹೌದು, ತಿದ್ದಿರಿ',
    err_kaveri_cancel: 'ರದ್ದುಮಾಡಿ',
  },
};

export default step1;
