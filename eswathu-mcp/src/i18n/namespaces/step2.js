/**
 * step2 namespace — OwnerEKYCPage
 * Section 2.1 — Owner Details (Kaveri + No-Kaveri flows)
 * Section 2.2 — Do eKYC for all land owners
 * Section 2.3 — Owner Details Mismatch
 * Also covers: OwnerTable (popup), EKYCRedirectScreen
 */
const step2 = {
  en: {
    /* ── StepHeader ── */
    step_label: 'Step 2',
    step_title: 'Owner KYC',

    /* ── Section 2.1 — titles ── */
    s21_title_kaveri: 'Owner details',
    s21_title_no_kaveri: 'Ownership Details (As mentioned in your property ownership document)',
    s21_no_kaveri_infobox: "Please keep the property ownership document used in the previous stage ready for entering the correct owner's details.",

    /* ── Section 2.1 — Company sub-section ── */
    s21_company_subtitle: 'Company details',
    s21_company_question: 'Is this property owned by a company/ organisation?',
    s21_yes: 'Yes',
    s21_no: 'No',
    s21_company_name_label: 'Company/ Organisation name',
    s21_company_name_placeholder: 'Enter company or organisation name',

    /* ── Section 2.1 — Owner Name sub-section ── */
    s21_owner_name_subtitle: 'Owner Name details',
    s21_col_no: 'No.',
    s21_col_owner_name: 'Owner name',
    s21_infobox_name_wrong:
      'If owner name is spelled wrong, missing, clubbed together by mistake or there are new owner/s to be added, please add them below.',
    s21_add_new_owners_question: 'Do you want to add new owners?',
    s21_infobox_add_new:
      'When you add new owners, these names will be considered by ekyc (not the ones fetched from Kaveri Deed Details)',
    s21_owner_name_placeholder: 'Please type owner name',
    s21_name_validation_error: 'Name should contain only letters',
    s21_no_kaveri_infobox_error:
      'Please enter names of all owners of the land you are applying e-khata',

    /* ── Section 2.1 — Actions ── */
    s21_btn_save: 'Save and Proceed to KYC',
    s21_btn_edit: 'Edit',
    s21_owners_added_success:
      'Owners have been added. Please proceed to next step to complete eKYC.',

    /* ── Section 2.2 — eKYC ── */
    s22_title: 'Do eKYC for all land owners',
    s22_instruction: 'Kindly do Aadhar ekyc for all the owners',
    s22_btn_do_ekyc: 'Do eKYC',
    s22_ekyc_successful: 'eKYC successful',
    s22_detail_photo: 'Owner photograph',
    s22_detail_owner_name: 'Owner Name',
    s22_detail_rel_name: 'Father/Mother/ Guardian/ Spouse/ Name',
    s22_detail_doc_no: "Owner's Identification Document No.",
    s22_detail_address: "Owner's Address",
    s22_review_infobox:
      'Please review all your details before you proceed to the next stage. If there are any errors, go back and click edit to make changes to the owners added.',
    s22_btn_verify: 'Verify and Proceed',
    s22_uidai_error:
      'There was an error in completing eKYC due to UIDAI server issues. Please try again after 15–20 minutes.',

    /* ── Section 2.3 — Mismatch ── */
    s23_title: 'Owner Details Mismatch',
    s23_infobox_warning:
      'There is a mismatch in the Owner Name Details. Please select the reason for the mismatch.',
    s23_col_kaveri_name: 'Owner name as per Kaveri',
    s23_col_ekyc_name: 'Name as per eKYC',
    s23_col_reason: 'Reason for not matching',
    s23_col_added_name: 'Added Owner Name',
    s23_reason_placeholder: 'Select reason',

    /* Mismatch reason option labels */
    reason_name_spelling: 'Name Spelling Mismatch',
    reason_sale_transferred: 'Sale/Transferred',
    reason_unregistered_will: 'Unregistered Will',
    reason_inheritance: 'Inheritance/Succession',
    reason_court_order: 'Court Order',
    reason_bank_sale_cert: 'Bank/FI Sale Certificate',

    /* ── Section 2.3 — Actions ── */
    s23_btn_save: 'Save and Next',
    s23_btn_edit: 'Edit',

    /* ── Section 2.3 — Document upload ── */
    s23_doc_title:
      'Please upload the documents mentioned below for the mismatch reason',
    s23_col_sl_no: 'Sl No.',
    s23_col_doc_type: 'Document Type',
    s23_col_doc_no: 'Document No.',
    s23_col_issued_date: 'Issued Date',
    s23_col_upload: 'Upload File',
    s23_col_view: 'View file',
    doc_division_letter: 'Division Letter',
    doc_death_certificate: 'Death certificate',
    doc_will: 'Will',
    s23_doc_no_placeholder: 'Enter document no.',
    s23_caption_reupload: 'Please check and re-upload the document',
    s23_caption_upload_success: 'Document uploaded successfully',
    s23_btn_upload_file: 'Upload File',
    s23_caption_file_too_large: 'Document exceeds 5MB',
    s23_caption_pdf_only: 'Only PDF size up-to 5MB allowed',

    /* ── Bottom Save and Proceed ── */
    btn_save_proceed: 'Save and Proceed',

    /* ── View File Popup ── */
    popup_view_doc_title: 'View Document',
    popup_view_doc_pdf_preview: 'PDF preview not available in prototype',

    /* ── eKYC Popup ── */
    popup_ekyc_title: 'Complete eKYC',
    popup_aadhar_details: 'Aadhar details:',
    popup_fill_details: 'Kindly complete Aadhar ekyc by filling these details',
    popup_rel_person_infobox:
      'Please enter name of the related person as per your Aadhar',
    popup_rel_type_label: 'Relationship Type',
    popup_rel_type_placeholder: 'Choose Relationship Type',
    popup_rel_name_label: 'Name of the Related Person',
    popup_mobile_label: 'Mobile number',
    popup_mobile_placeholder: 'XXXXXXXXXX',
    popup_btn_get_otp: 'Get OTP',
    popup_otp_label: 'Enter OTP',
    popup_otp_error: 'Wrong OTP, please click on Get OTP and re-try',
    popup_otp_countdown: 'Please enter within {n} seconds',
    popup_btn_complete_ekyc: 'Complete eKYC',
    popup_otp_verified: 'OTP verified successfully',

    /* Relationship type option labels */
    rel_son: 'Son of',
    rel_daughter: 'Daughter of',
    rel_spouse: 'Spouse of',
    rel_care: 'Care of',

    /* ── Section 2.1 Edit warning modal ── */
    s21_warn_message: 'You will lose progress in Section 2.2 — Owner KYC',
    s21_warn_sub: 'You will need to redo the eKYC process for all owners.',
    s21_warn_yes: 'Yes, Edit',
    s21_warn_cancel: 'Cancel',
    s21_warn_step3: 'Property Details (Step 3)',
    s21_warn_step4: 'Property Classification (Step 4)',
    s21_warn_step5: 'Upload EC (Step 5)',

    /* ── OwnerTable (inside eKYC popup) ── */
    ot_photograph: "Owner's Photograph",
    ot_doc_no: "Owner's Identity Document No.",
    ot_panchatantra_name: 'Name as per Panchatantra',
    ot_verified_name: 'Verified e-KYC name',
    ot_gender: 'Gender',
    ot_dob: 'Date of birth (dd-mm-yyyy)',
    ot_address: 'Address',

    /* ── EKYCRedirectScreen ── */
    redirect_btn_complete: 'Complete eKYC',
    redirect_btn_cancel: 'Cancel',
  },

  kn: {
    /* ── StepHeader ── */
    step_label: 'ಹಂತ 2',
    step_title: 'ಮಾಲೀಕರ KYC',

    /* ── Section 2.1 — titles ── */
    s21_title_kaveri: 'ಮಾಲೀಕರ ವಿವರಗಳು',
    s21_title_no_kaveri:
      'ಮಾಲೀಕತ್ವ ವಿವರಗಳು (ನಿಮ್ಮ ಆಸ್ತಿ ಮಾಲೀಕತ್ವ ದಾಖಲೆಯಲ್ಲಿ ತಿಳಿಸಿದಂತೆ)',
    s21_no_kaveri_infobox:
      'ಸರಿಯಾದ ಮಾಲೀಕರ ವಿವರಗಳನ್ನು ನಮೂದಿಸಲು ಹಿಂದಿನ ಹಂತದಲ್ಲಿ ಬಳಸಿದ ಆಸ್ತಿ ಮಾಲೀಕತ್ವ ದಾಖಲೆಯನ್ನು ಸಿದ್ಧವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳಿ.',

    /* ── Section 2.1 — Company sub-section ── */
    s21_company_subtitle: 'ಕಂಪನಿ ವಿವರಗಳು',
    s21_company_question: 'ಈ ಆಸ್ತಿ ಕಂಪನಿ/ ಸಂಸ್ಥೆಯದೆಯೇ?',
    s21_yes: 'ಹೌದು',
    s21_no: 'ಇಲ್ಲ',
    s21_company_name_label: 'ಕಂಪನಿ / ಸಂಸ್ಥೆಯ ಹೆಸರು',
    s21_company_name_placeholder: 'ಕಂಪನಿ ಅಥವಾ ಸಂಸ್ಥೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',

    /* ── Section 2.1 — Owner Name sub-section ── */
    s21_owner_name_subtitle: 'ಮಾಲೀಕರ ಹೆಸರು ವಿವರಗಳು',
    s21_col_no: 'ಸಂಖ್ಯೆ',
    s21_col_owner_name: 'ಮಾಲೀಕರ ಹೆಸರು',
    s21_infobox_name_wrong:
      'ಮಾಲೀಕರ ಹೆಸರಿನಲ್ಲಿ ತಪ್ಪು ಇದ್ದರೆ, ಕಾಣೆಯಾಗಿದ್ದರೆ, ತಪ್ಪಾಗಿ ಒಟ್ಟುಗೂಡಿದ್ದರೆ ಅಥವಾ ಹೊಸ ಮಾಲೀಕರನ್ನು ಸೇರಿಸಬೇಕಿದ್ದರೆ, ದಯವಿಟ್ಟು ಕೆಳಗೆ ಸೇರಿಸಿ',
    s21_add_new_owners_question: 'ನೀವು ಹೊಸ ಮಾಲೀಕರನ್ನು ಸೇರಿಸಲು ಬಯಸುವಿರಾ?',
    s21_infobox_add_new:
      'ನೀವು ಹೊಸ ಮಾಲೀಕರನ್ನು ಸೇರಿಸಿದಾಗ, ಈ ಹೆಸರುಗಳನ್ನು eKYCಗಾಗಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ (Kaveri Deed ವಿವರಗಳಿಂದ ಪಡೆದ ಹೆಸರುಗಳನ್ನು ಅಲ್ಲ)',
    s21_owner_name_placeholder: 'ದಯವಿಟ್ಟು ಮಾಲೀಕರ ಹೆಸರನ್ನು ಟೈಪ್ ಮಾಡಿ',
    s21_name_validation_error: 'ಹೆಸರು ಅಕ್ಷರಗಳನ್ನು ಮಾತ್ರ ಒಳಗೊಂಡಿರಬೇಕು',
    s21_no_kaveri_infobox_error:
      'ನೀವು ಇ-ಖಾತಾ ಅರ್ಜಿ ಸಲ್ಲಿಸುತ್ತಿರುವ ಭೂಮಿಯ ಎಲ್ಲಾ ಮಾಲೀಕರ ಹೆಸರುಗಳನ್ನು ದಯವಿಟ್ಟು ನಮೂದಿಸಿ',

    /* ── Section 2.1 — Actions ── */
    s21_btn_save: 'ಉಳಿಸಿ ಮತ್ತು KYC ಗೆ ಮುಂದುವರಿಯಿರಿ',
    s21_btn_edit: 'ಸಂಪಾದಿಸಿ',
    s21_owners_added_success:
      'ಮಾಲೀಕರನ್ನು ಸೇರಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು eKYC ಪೂರ್ಣಗೊಳಿಸಲು ಮುಂದಿನ ಹಂತಕ್ಕೆ ಸಾಗಿರಿ',

    /* ── Section 2.2 — eKYC ── */
    s22_title: 'ಎಲ್ಲಾ ಭೂ ಮಾಲೀಕರಿಗಾಗಿ eKYC ಮಾಡಿ',
    s22_instruction: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಮಾಲೀಕರಿಗೂ ಆಧಾರ್ eKYC ಮಾಡಿ',
    s22_btn_do_ekyc: 'eKYC ಮಾಡಿ',
    s22_ekyc_successful: 'eKYC ಯಶಸ್ವಿಯಾಗಿದೆ',
    s22_detail_photo: 'ಮಾಲೀಕರ ಫೋಟೋ',
    s22_detail_owner_name: 'ಮಾಲೀಕರ ಹೆಸರು',
    s22_detail_rel_name: 'ತಂದೆ/ತಾಯಿ/ಪಾಲಕರು/ಪತಿ-ಪತ್ನಿ/ಹೆಸರು',
    s22_detail_doc_no: 'ಮಾಲೀಕರ ಗುರುತಿನ ದಾಖಲೆ ಸಂಖ್ಯೆ',
    s22_detail_address: 'ಮಾಲೀಕರ ವಿಳಾಸ',
    s22_review_infobox:
      'ಮುಂದಿನ ಹಂತಕ್ಕೆ ಸಾಗುವ ಮೊದಲು ನಿಮ್ಮ ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ. ಯಾವುದೇ ತಪ್ಪುಗಳಿದ್ದರೆ, ಹಿಂದೆ ಹೋಗಿ ಸೇರಿಸಲಾದ ಮಾಲೀಕರ ವಿವರಗಳನ್ನು ಬದಲಾಯಿಸಲು ಸಂಪಾದಿಸಿ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    s22_btn_verify: 'ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮುಂದುವರಿಯಿರಿ',
    s22_uidai_error:
      'UIDAI ಸರ್ವರ್ ಸಮಸ್ಯೆಯಿಂದಾಗಿ eKYC ಪೂರ್ಣಗೊಳಿಸಲು ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು 15–20 ನಿಮಿಷಗಳ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',

    /* ── Section 2.3 — Mismatch ── */
    s23_title: 'ಮಾಲೀಕರ ವಿವರ ಅಸಮಾನತೆ',
    s23_infobox_warning:
      'ಮಾಲೀಕರ ಹೆಸರಿನ ವಿವರಗಳಲ್ಲಿ ಅಸಮಾನತೆ ಇದೆ. ದಯವಿಟ್ಟು ಅಸಮಾನತೆಯ ಕಾರಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
    s23_col_kaveri_name: 'Kaveri ಪ್ರಕಾರ ಮಾಲೀಕರ ಹೆಸರು',
    s23_col_ekyc_name: 'eKYC ಪ್ರಕಾರ ಹೆಸರು',
    s23_col_reason: 'ಹೊಂದಾಣಿಕೆಯಾಗದ ಕಾರಣ',
    s23_col_added_name: 'ಸೇರಿಸಿದ ಮಾಲೀಕರ ಹೆಸರು',
    s23_reason_placeholder: 'ಕಾರಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ',

    /* Mismatch reason option labels */
    reason_name_spelling: 'ಹೆಸರಿನ ಸ್ಪೆಲ್ಲಿಂಗ್ ತಪ್ಪು',
    reason_sale_transferred: 'ಮಾರಾಟ/ವರ್ಗಾವಣೆ',
    reason_unregistered_will: 'ನೋಂದಾಯಿಸದ ವಿಲ್',
    reason_inheritance: 'ವಾರಸತ್ವ / ಉತ್ತರಾಧಿಕಾರ',
    reason_court_order: 'ನ್ಯಾಯಾಲಯದ ಆದೇಶ',
    reason_bank_sale_cert: 'ಬ್ಯಾಂಕ್ / ಹಣಕಾಸು ಸಂಸ್ಥೆಯ ಮಾರಾಟ ಪ್ರಮಾಣಪತ್ರ',

    /* ── Section 2.3 — Actions ── */
    s23_btn_save: 'ಉಳಿಸಿ ಮತ್ತು ಮುಂದೆ',
    s23_btn_edit: 'ಸಂಪಾದಿಸಿ',

    /* ── Section 2.3 — Document upload ── */
    s23_doc_title:
      'ಅಸಮಾನತೆಯ ಕಾರಣಕ್ಕಾಗಿ ಕೆಳಗೆ ತಿಳಿಸಿದ ದಾಖಲೆಗಳನ್ನು ದಯವಿಟ್ಟು ಅಪ್ಲೋಡ್ ಮಾಡಿ',
    s23_col_sl_no: 'ಕ್ರ.ಸಂ.',
    s23_col_doc_type: 'ದಾಖಲೆ ವಿಧ',
    s23_col_doc_no: 'ದಾಖಲೆ ಸಂಖ್ಯೆ',
    s23_col_issued_date: 'ನೀಡಿದ ದಿನಾಂಕ',
    s23_col_upload: 'ಫೈಲ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ',
    s23_col_view: 'ಫೈಲ್ ವೀಕ್ಷಿಸಿ',
    doc_division_letter: 'ವಿಭಾಗ ಪತ್ರ',
    doc_death_certificate: 'ಮರಣ ಪ್ರಮಾಣಪತ್ರ',
    doc_will: 'ಉಯಿಲು',
    s23_doc_no_placeholder: 'ದಾಖಲೆ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    s23_caption_reupload: 'ದಯವಿಟ್ಟು ದಾಖಲೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಅಪ್ಲೋಡ್ ಮಾಡಿ',
    s23_caption_upload_success: 'ದಾಖಲೆ ಯಶಸ್ವಿಯಾಗಿ ಅಪ್ಲೋಡ್ ಆಗಿದೆ',
    s23_btn_upload_file: 'ಫೈಲ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ',
    s23_caption_file_too_large: 'ದಾಖಲೆ 5MB ಮೀರಿದೆ',
    s23_caption_pdf_only: 'ಕೇವಲ 5MB ವರೆಗೆ PDF ಅನುಮತಿಸಲಾಗಿದೆ',

    /* ── Bottom Save and Proceed ── */
    btn_save_proceed: 'ಉಳಿಸಿ ಮತ್ತು ಮುಂದುವರಿಯಿರಿ',

    /* ── View File Popup ── */
    popup_view_doc_title: 'ದಾಖಲೆ ವೀಕ್ಷಿಸಿ',
    popup_view_doc_pdf_preview: 'ಮಾದರಿಯಲ್ಲಿ PDF ಪೂರ್ವಾವಲೋಕನ ಲಭ್ಯವಿಲ್ಲ',

    /* ── eKYC Popup ── */
    popup_ekyc_title: 'eKYC ಪೂರ್ಣಗೊಳಿಸಿ',
    popup_aadhar_details: 'ಆಧಾರ್ ವಿವರಗಳು:',
    popup_fill_details: 'ದಯವಿಟ್ಟು ಈ ವಿವರಗಳನ್ನು ತುಂಬಿ ಆಧಾರ್ eKYC ಪೂರ್ಣಗೊಳಿಸಿ',
    popup_rel_person_infobox:
      'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಧಾರ್ ಪ್ರಕಾರ ಸಂಬಂಧಿತ ವ್ಯಕ್ತಿಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
    popup_rel_type_label: 'ಸಂಬಂಧದ ವಿಧ',
    popup_rel_type_placeholder: 'ಸಂಬಂಧದ ವಿಧವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    popup_rel_name_label: 'ಸಂಬಂಧಿತ ವ್ಯಕ್ತಿಯ ಹೆಸರು',
    popup_mobile_label: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    popup_mobile_placeholder: 'XXXXXXXXXX',
    popup_btn_get_otp: 'OTP ಪಡೆಯಿರಿ',
    popup_otp_label: 'OTP ನಮೂದಿಸಿ',
    popup_otp_error:
      'ತಪ್ಪಾದ OTP, ದಯವಿಟ್ಟು OTP ಪಡೆಯಿರಿ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
    popup_otp_countdown: 'ದಯವಿಟ್ಟು {n} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ ನಮೂದಿಸಿ',
    popup_btn_complete_ekyc: 'eKYC ಪೂರ್ಣಗೊಳಿಸಿ',
    popup_otp_verified: 'OTP ಯಶಸ್ವಿಯಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',

    /* Relationship type option labels */
    rel_son: 'ಪುತ್ರ',
    rel_daughter: 'ಪುತ್ರಿ',
    rel_spouse: 'ಪತಿ/ಪತ್ನಿ',
    rel_care: 'ಆರೈಕೆಯಲ್ಲಿ',

    /* ── Section 2.1 Edit warning modal ── */
    s21_warn_message: 'ವಿಭಾಗ 2.2 — ಮಾಲೀಕರ KYC ಯಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಗತಿಯನ್ನು ಕಳೆದುಕೊಳ್ಳುತ್ತೀರಿ',
    s21_warn_sub: 'ಎಲ್ಲಾ ಮಾಲೀಕರಿಗೆ eKYC ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮತ್ತೆ ಮಾಡಬೇಕಾಗುತ್ತದೆ.',
    s21_warn_yes: 'ಹೌದು, ತಿದ್ದುಪಡಿ ಮಾಡಿ',
    s21_warn_cancel: 'ರದ್ದುಮಾಡಿ',
    s21_warn_step3: 'ಆಸ್ತಿ ವಿವರಗಳು (ಹಂತ 3)',
    s21_warn_step4: 'ಆಸ್ತಿ ವರ್ಗೀಕರಣ (ಹಂತ 4)',
    s21_warn_step5: 'EC ಅಪ್ಲೋಡ್ (ಹಂತ 5)',

    /* ── OwnerTable (inside eKYC popup) ── */
    ot_photograph: 'ಮಾಲೀಕರ ಫೋಟೋ',
    ot_doc_no: 'ಮಾಲೀಕರ ಗುರುತಿನ ದಾಖಲೆ ಸಂಖ್ಯೆ',
    ot_panchatantra_name: 'ಪಂಚತಂತ್ರದ ಪ್ರಕಾರ ಹೆಸರು',
    ot_verified_name: 'ಪರಿಶೀಲಿತ e-KYC ಹೆಸರು',
    ot_gender: 'ಲಿಂಗ',
    ot_dob: 'ಜನ್ಮ ದಿನಾಂಕ (dd-mm-yyyy)',
    ot_address: 'ವಿಳಾಸ',

    /* ── EKYCRedirectScreen ── */
    redirect_btn_complete: 'eKYC ಪೂರ್ಣಗೊಳಿಸಿ',
    redirect_btn_cancel: 'ರದ್ದುಮಾಡಿ',
  },
};

export default step2;
