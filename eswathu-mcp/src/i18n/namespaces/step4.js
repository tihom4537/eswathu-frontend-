/**
 * step4 namespace — PropertyClassificationPage + BuildingDetails
 * Section 4.1 — Property Classification & Documents Upload
 * Section 4.2 — Property Type / Category / Building Details
 * Section 4.3 — Avail Rebates
 */
const step4 = {
  en: {
    // ——— Page / Step header ———
    step4_step_label: 'Step 4',
    step4_title:      'Property Classification',

    // ——— Common buttons ———
    btn_yes:          'Yes',
    btn_no:           'No',
    btn_edit:         'Edit',
    btn_save_next:    'Save and Next',
    btn_save_proceed: 'Save and Proceed',
    btn_search:       'Search',
    btn_back:         'Back',
    btn_next:         'Next',
    btn_start_over:   'Start Over',
    btn_cancel:       'Cancel',

    // ——— Section 4.1 — Property Classification & Documents Upload ———
    s41_title:                   'Property Classification & Documents Upload',
    s41_infobox1:                "If you are not sure, please use 'Find My Classification' to confirm your Property Classification",
    s41_find_btn:                'Find My Classification',
    s41_infobox2:                'If you are aware of your Property Classification, please proceed and choose it',
    s41_classification_label:    'Property Classification',
    s41_classification_ph:       'Choose Property Classification',
    s41_doc_instruction:         'Please upload the documents mentioned below according to your classification',
    s41_table_sl:                'Sl No.',
    s41_table_doc_type:          'Document Type',
    s41_table_reg_date:          'Document Registration Date',
    s41_table_doc_no:            'Document No.',
    s41_table_upload:            'Upload Document',
    s41_table_view:              'View file',
    s41_upload_file_btn:         'Upload File',
    s41_upload_success:          'Document uploaded successfully',
    s41_upload_size_error:       'Document exceeds 5MB',
    s41_upload_info:             'Only PDF size up-to 5MB allowed',
    s41_doc_name_ph:             'Enter document name',
    s41_doc_no_ph:               'Enter doc no.',
    s41_no_docs:                 'No additional documents required for this classification.',
    s41_survey_heading:          'Survey Number Details',
    s41_village_label:           'Village Name',
    s41_survey_label:            'Survey Number',
    s41_survey_ph:               'Enter survey number',
    s41_survey_tooltip:          'Survey number can be found on your RTC / Pahani extract or the property registration document.',
    s41_surnoc_label:            'Surnoc and Hissa No.',
    s41_surnoc_ph:               'Select Surnoc and Hissa No.',
    s41_surnoc_tooltip:          'Surnoc and Hissa number can be found on your RTC / Pahani extract or property registration document.',
    s41_fetch_rtc_btn:           'Fetch RTC owner details',
    s41_no_fetch_infobox:        'Bhoomi details were not fetched, please proceed by entering the details manually',
    s41_surnoc_no_label:         'Surnoc No.',
    s41_hissa_no_label:          'Hissa No.',
    s41_hissa_ph:                'e.g. 5',
    s41_manual_surnoc_tooltip:   'Where to find your Surnoc and Hissa Number',
    s41_survey_no_frozen_label:  'Survey No.',
    s41_rtc_select:              'Select',
    s41_rtc_owner_no:            'Owner No.',
    s41_rtc_main_owner_no:       'Main Owner No.',
    s41_rtc_owner_name:          'Owner Name',
    s41_rtc_father_name:         'Father Name',
    s41_rtc_land_code:           'Land code',
    s41_rtc_acre:                'ext Acre',
    s41_rtc_gunta:               'ext Gunta',
    s41_rtc_fgunta:              'ext_fgunta',
    s41_rtc_question:            'Does the RTC owner fetched from Bhoomi match the property owner?',

    // ——— Section 4.2 — Property Type and Category Details ———
    s42_title:             'Property Type and Category Details',
    s42_prop_type_label:   'Property Type',
    s42_prop_type_ph:      'Select',
    s42_prop_cat_label:    'Property Category',
    s42_prop_cat_ph:       'Select',
    s42_corner_label:      'Is it a corner site',
    s42_corner_ph:         'Choose Yes/No',
    s42_sale_deed_infobox: 'Please keep sale deed document ready for entering the correct Building Details.',
    s42_building_area_title:  'Building Area Details',
    s42_multi_storey_title:   'Details of Usage of Multi-Storey Flat',
    s42_parking_title:        'Parking Details',
    s42_undivided_title:      'Undivided Land Details',
    s42_escom_title:          'ESCOM Details',
    s42_tenant_title:         'Tenant Details',

    // ——— Section 4.3 — Avail Rebates ———
    s43_title:              'Avail Rebates',
    s43_click_here:         'Click here to know more about Rebates',
    s43_question:           'Will you be availing any rebates for your property?',
    s43_cat_details_label:  'Category Details',
    s43_cat_ph:             'Select',
    s43_table_issued_date:  'Issued Date',

    // ——— Modal strings ———
    modal_title:            'Find My Classification',
    modal_confirm:          'Confirm my Classification',
    modal_confirm_caption:  'This will be used in your application',

    // ——— Warning modal strings ———
    warn41_message:       'You will lose progress in Section 4.1 — Property Classification & Documents Upload',
    warn41_ec_suffix:     ', and Upload EC (Step 5)',
    warn41_submessage:    'You will need to re-save your survey and classification details.',
    warn_yes_edit:        'Yes, Edit',
    warn_class_message:   'You will lose progress you have made in the Property Classification section',
    warn_class_ec_suffix: ' and EC details',
    warn_class_submessage:'You will need to start Section 4.1 again from the documents upload.',
    warn_yes_change:      'Yes, Change',
    warn_type_message:    'You will lose progress in Section 4.2 — Property Type & Building Details',
    warn_type_ec_suffix:  ', and Upload EC (Step 5)',
    warn_type_submessage: 'You will need to re-enter the building details again.',

    // ——— View Document popup ———
    view_doc_title:   'View Document',
    view_doc_preview: 'PDF preview not available in prototype',

    // ——— Section 4.2 — Building Details ———

    // Section titles
    bd_section_area_details:   'Building Area Details',
    bd_section_usage_details:  'Usage Details',
    bd_section_escom_meters:   'Details of All ESCOM Meters',
    bd_section_water_meters:   'Details of All Water Meters',
    bd_section_multi_storey:   'Details of Usage of Multi-Storey Flat',
    bd_section_parking:        'Parking Details',
    bd_section_undivided_land: 'Undivided Land Details',
    bd_section_escom_details:  'ESCOM Details',

    // Shared field labels
    bd_plinth_area:      'Plinth Area of the Building (in sq. metres)',
    bd_escom_type:       'ESCOM Type',
    bd_rr_number:        'RR Number',
    bd_year_construction:'Year of Construction / Usage Started',
    bd_table_no:         'No.',
    bd_owner_name:       'Owner Name',
    bd_address:          'Address',
    bd_cancel:           'Cancel',

    // General building — Section 1 & 2 fields
    bd_num_storeys:       'Enter No. of Storeys',
    bd_floor_wise_details:'Floor Wise Details',
    bd_built_up_area:     'Enter Built Up Area (in sq. metres)',
    bd_property_type:     'Property Type',
    bd_year_demolition:   'Year of Demolition',
    bd_usage_type:        'Usage Type',
    bd_floor_type:        'Floor Type',
    bd_roof_type:         'Roof Type',
    bd_wood_used:         'Wood Used',
    bd_remarks:           'Remarks (if any)',
    bd_escom_account_id:  'ESCOM Account ID',
    bd_water_meter_number:'Water Meter Number',

    // Apartment/flat — Section 1 extra fields
    bd_undivided_plot_size:       'Undivided Plot Size (in sq. metres)',
    bd_total_undivided_plot_size:  'Total Undivided Plot Size (in sq. metres)',

    // Apartment/flat — Section 2 fields
    bd_super_built_area:        'Super Built Area (in sq. metres)',
    bd_carpet_area:             'Carpet Area \u2014 Roughly 70% of built-up area (in sq. metres)',
    bd_additional_area:         'Additional Area (in sq. metres)',
    bd_block_name:              'Block Name',
    bd_flat_number:             'Flat Number',
    bd_flat_floor_q:            'Is this Flat/Unit on single floor or multi-floors',
    bd_single_floor_flat:       'Single Floor Flat',
    bd_single_flat_multi_floors:'Single Flat on Multi-Floors',
    bd_basement:                'Basement (floor level)',
    bd_ground:                  'Ground (floor level)',
    bd_floors:                  'Floors (number of floors above ground)',

    // Apartment/flat — Section 3 Parking
    bd_num_parking:  'Number of Parking attached to Flat / Unit',
    bd_parking_area: 'Total Parking Slots Area (in sq. metres)',

    // Apartment/flat — Section 4 Undivided Land
    bd_undivided_land_share_type: 'Undivided Land Share Type',

    // Apartment/flat — Section 5 ESCOM
    bd_escom_id: 'ESCOM ID',

    // Buttons and UI strings
    bd_save_area_details:   'Save Building Area Details',
    bd_area_saved_msg:      'Building Area Details have been saved. Please proceed to next step.',
    bd_confirm_storeys:     'Confirm',
    bd_floor_wise_title:    'Please add Floor wise Details',
    bd_save_floor_details:  'Save Floor wise Details',
    bd_escom_verify_btn:    'Verify ESCOM meter/s',
    bd_escom_verifying:     'Verifying\u2026',
    bd_escom_get_updated:   'Get updated details from ESCOM',
    bd_escom_fetched_title: 'Please check the fetched ESCOM meter Details',
    bd_water_verify_btn:    'Verify Water meter/s',
    bd_water_verifying:     'Verifying\u2026',
    bd_water_fetched_title: 'Please check the fetched Water Meter Details',
    bd_fetch_escom_btn:     'Fetch ESCOM Details',
    bd_escom_fetching:      'Fetching\u2026',
    bd_save_building_details: 'Save Building Details',
    bd_storey_prefix:       'Storey',
    bd_floor_prefix:        'Floor',
    bd_escom_multi_info:    'If same property has multiple ESCOM meters, please add all of them',
    bd_water_multi_info:    'If same property has multiple water meters, please add all of them',
    bd_tenants_section_title: 'Please add Details of All Tenants (if applicable for your property)',
    bd_water_section_title:   'Please add Details of All Water Meters (if applicable to you)',
    bd_escom_add_title:       'Please add Details of All ESCOM Meters',
    bd_are_tenants:           'Are there Tenants living in the building?',
    bd_infobox_sale_deed:     'Please keep sale deed document ready for entering the correct Building Details.',
    bd_escom_where_tooltip:   'Where to find your ESCOM Account ID and RR number',
    bd_tooltip_click:         'Click to view sample',

    // ——— Section 4.4 — Avail Rebates ———

    // Page / section labels
    rebates_question: 'Will you be availing any rebates for your property?',
    rebates_category_label: 'Rebates Category',
    rebates_category_placeholder: 'Select category',
    rebates_subcategory_label: 'Select Sub-Category',
    rebates_subcategory_placeholder: 'Select sub-category',
    rebates_docs_heading: 'Documents Required',
    rebates_docs_col_no: 'Sr. No.',
    rebates_docs_col_doc: 'Document Required',
    rebates_upload_label: 'Upload Supporting Document',
    rebates_caption: 'Under {subCategory}, you are eligible for {amount} upon verification and approval from the Gram Panchayat office',

    // Category dropdown options
    rebate_cat_1:  '1 - Ex-Servicemen / Servicemen / Widow of Soldiers',
    rebate_cat_2:  '2 - Handicapped / Widows / HIV Affected / Leprosy Affected',
    rebate_cat_3:  '3 - Women\'s Self Help Society / Handicapped Commercial Units',
    rebate_cat_4:  '4 - Residential Estate with Self-Managed Civic Facilities',
    rebate_cat_5:  '5 - Educational Institution / Greenery Area',
    rebate_cat_6:  '6 - Industrial / Airport Authority Greening (Vacant Lots)',
    rebate_cat_7:  '7 - Unused Vacant Land for Renewable Energy (Government Lease)',
    rebate_cat_8:  '8 - Residential Building with Solar Power Generation Unit',
    rebate_cat_9:  '9 - Residential Building with Rainwater Harvesting / Waste Treatment',
    rebate_cat_10: '10 - Poultry Farm (up to 2000 sq.ft.)',
    rebate_cat_11: '11 - Handloom / Cottage Industry / Agro Production in Dwelling House',

    // Sub-category dropdown options — Category 1
    rebate_cat1_sub1: 'Ex-Servicemen',
    rebate_cat1_sub2: 'Servicemen',
    rebate_cat1_sub3: 'Widows of Soldiers',

    // Sub-category dropdown options — Category 2
    rebate_cat2_sub1: 'Handicapped (Specially Disabled)',
    rebate_cat2_sub2: 'Widows',
    rebate_cat2_sub3: 'HIV (AIDS) Affected Owner',
    rebate_cat2_sub4: 'Leprosy Affected Owner',

    // Sub-category dropdown options — Category 3
    rebate_cat3_sub1: "Women's Self Help Society / Societies Registered under Government",
    rebate_cat3_sub2: 'Small Commercial / Industrial Units Run by Handicapped',

    // Sub-category dropdown options — Category 5
    rebate_cat5_sub1: 'Educational Institution Properties with Self-Governing Civic Facilities',
    rebate_cat5_sub2: 'Greenery Area',

    // Sub-category dropdown options — Category 11
    rebate_cat11_sub1: 'Handloom in a Dwelling House',
    rebate_cat11_sub2: 'Cottage Industry in a Residential Home',
    rebate_cat11_sub3: 'Agricultural Based Production Activity in a Dwelling House',
  },

  kn: {
    // ——— Page / Step header ———
    step4_step_label: 'ಹಂತ 4',
    step4_title:      'ಆಸ್ತಿ ವರ್ಗೀಕರಣ',

    // ——— Common buttons ———
    btn_yes:          'ಹೌದು',
    btn_no:           'ಇಲ್ಲ',
    btn_edit:         'ಸಂಪಾದಿಸಿ',
    btn_save_next:    'ಉಳಿಸಿ ಮತ್ತು ಮುಂದೆ',
    btn_save_proceed: 'ಉಳಿಸಿ ಮತ್ತು ಮುಂದುವರಿಯಿರಿ',
    btn_search:       'ಹುಡುಕಿ',
    btn_back:         'ಹಿಂದೆ',
    btn_next:         'ಮುಂದೆ',
    btn_start_over:   'ಮೊದಲಿನಿಂದ ಪ್ರಾರಂಭಿಸಿ',
    btn_cancel:       'ರದ್ದುಮಾಡಿ',

    // ——— Section 4.1 ———
    s41_title:                   '4.1 ಆಸ್ತಿ ವರ್ಗೀಕರಣ ಮತ್ತು ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್',
    s41_infobox1:                "ನೀವು ಖಚಿತವಾಗಿಲ್ಲದಿದ್ದರೆ, ನಿಮ್ಮ ಆಸ್ತಿ ವರ್ಗೀಕರಣವನ್ನು ದೃಢೀಕರಿಸಲು 'ನನ್ನ ವರ್ಗೀಕರಣವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ' ಅನ್ನು ಬಳಸಿ",
    s41_find_btn:                'ನನ್ನ ವರ್ಗೀಕರಣವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
    s41_infobox2:                'ನಿಮ್ಮ ಆಸ್ತಿ ವರ್ಗೀಕರಣದ ಬಗ್ಗೆ ನಿಮಗೆ ತಿಳಿದಿದ್ದರೆ, ಮುಂದುವರಿಸಿ ಮತ್ತು ಅದನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    s41_classification_label:    'ಆಸ್ತಿ ವರ್ಗೀಕರಣ',
    s41_classification_ph:       'ಆಸ್ತಿ ವರ್ಗೀಕರಣ ಆಯ್ಕೆಮಾಡಿ',
    s41_doc_instruction:         'ನಿಮ್ಮ ವರ್ಗೀಕರಣದ ಪ್ರಕಾರ ಕೆಳಗೆ ಉಲ್ಲೇಖಿಸಿದ ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    s41_table_sl:                'ಕ್ರಮ ಸಂಖ್ಯೆ',
    s41_table_doc_type:          'ದಾಖಲೆ ಪ್ರಕಾರ',
    s41_table_reg_date:          'ದಾಖಲೆ ನೋಂದಣಿ ದಿನಾಂಕ',
    s41_table_doc_no:            'ದಾಖಲೆ ಸಂಖ್ಯೆ',
    s41_table_upload:            'ದಾಖಲೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    s41_table_view:              'ಫೈಲ್ ವೀಕ್ಷಿಸಿ',
    s41_upload_file_btn:         'ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    s41_upload_success:          'ದಾಖಲೆ ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಆಗಿದೆ',
    s41_upload_size_error:       'ದಾಖಲೆ 5MB ಮೀರಿದೆ',
    s41_upload_info:             'ಕೇವಲ PDF ಫೈಲ್‌ಗಳು 5MB ವರೆಗೆ ಅನುಮತಿ',
    s41_doc_name_ph:             'ದಾಖಲೆ ಹೆಸರು ನಮೂದಿಸಿ',
    s41_doc_no_ph:               'ದಾಖಲೆ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    s41_no_docs:                 'ಈ ವರ್ಗೀಕರಣಕ್ಕೆ ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ದಾಖಲೆಗಳ ಅಗತ್ಯವಿಲ್ಲ.',
    s41_survey_heading:          'ಸರ್ವೆ ಸಂಖ್ಯೆ ವಿವರಗಳು',
    s41_village_label:           'ಗ್ರಾಮದ ಹೆಸರು',
    s41_survey_label:            'ಸರ್ವೆ ಸಂಖ್ಯೆ',
    s41_survey_ph:               'ಸರ್ವೆ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    s41_survey_tooltip:          'ಸರ್ವೆ ಸಂಖ್ಯೆಯನ್ನು ನಿಮ್ಮ RTC / ಪಹಣಿ ಪ್ರತಿಯಲ್ಲಿ ಅಥವಾ ಆಸ್ತಿ ನೋಂದಣಿ ದಾಖಲೆಯಲ್ಲಿ ಕಾಣಬಹುದು.',
    s41_surnoc_label:            'ಸರ್ನಾಕ್ ಮತ್ತು ಹಿಸ್ಸಾ ಸಂಖ್ಯೆ',
    s41_surnoc_ph:               'ಸರ್ನಾಕ್ ಮತ್ತು ಹಿಸ್ಸಾ ಸಂಖ್ಯೆ ಆಯ್ಕೆಮಾಡಿ',
    s41_surnoc_tooltip:          'ಸರ್ನಾಕ್ ಮತ್ತು ಹಿಸ್ಸಾ ಸಂಖ್ಯೆಯನ್ನು ನಿಮ್ಮ RTC / ಪಹಣಿ ಪ್ರತಿಯಲ್ಲಿ ಅಥವಾ ಆಸ್ತಿ ನೋಂದಣಿ ದಾಖಲೆಯಲ್ಲಿ ಕಾಣಬಹುದು.',
    s41_fetch_rtc_btn:           'RTC ಮಾಲೀಕರ ವಿವರಗಳನ್ನು ತರಿಸಿ',
    s41_no_fetch_infobox:        'ಭೂಮಿ ವಿವರಗಳನ್ನು ತರಿಸಲಾಗಲಿಲ್ಲ, ದಯವಿಟ್ಟು ವಿವರಗಳನ್ನು ಕೈಯಾರೆ ನಮೂದಿಸಿ',
    s41_surnoc_no_label:         'ಸರ್ನಾಕ್ ಸಂಖ್ಯೆ',
    s41_hissa_no_label:          'ಹಿಸ್ಸಾ ಸಂಖ್ಯೆ',
    s41_hissa_ph:                'ಉದಾ. 5',
    s41_manual_surnoc_tooltip:   'ನಿಮ್ಮ ಸರ್ನಾಕ್ ಮತ್ತು ಹಿಸ್ಸಾ ಸಂಖ್ಯೆ ಎಲ್ಲಿ ಕಾಣಬಹುದು',
    s41_survey_no_frozen_label:  'ಸರ್ವೆ ಸಂಖ್ಯೆ',
    s41_rtc_select:              'ಆಯ್ಕೆ',
    s41_rtc_owner_no:            'ಮಾಲೀಕರ ಸಂಖ್ಯೆ',
    s41_rtc_main_owner_no:       'ಮುಖ್ಯ ಮಾಲೀಕರ ಸಂಖ್ಯೆ',
    s41_rtc_owner_name:          'ಮಾಲೀಕರ ಹೆಸರು',
    s41_rtc_father_name:         'ತಂದೆಯ ಹೆಸರು',
    s41_rtc_land_code:           'ಭೂಮಿ ಕೋಡ್',
    s41_rtc_acre:                'ವಿಸ್ತೀರ್ಣ (ಎಕರೆ)',
    s41_rtc_gunta:               'ವಿಸ್ತೀರ್ಣ (ಗುಂಟ)',
    s41_rtc_fgunta:              'ವಿಸ್ತೀರ್ಣ (f.ಗುಂಟ)',
    s41_rtc_question:            'ಭೂಮಿಯಿಂದ ತರಿಸಿದ RTC ಮಾಲೀಕರು ಆಸ್ತಿ ಮಾಲೀಕರಿಗೆ ಹೊಂದಿಕೆಯಾಗುವರೇ?',

    // ——— Section 4.2 ———
    s42_title:             '4.2 ಆಸ್ತಿ ಪ್ರಕಾರ ಮತ್ತು ವರ್ಗ ವಿವರಗಳು',
    s42_prop_type_label:   'ಆಸ್ತಿ ಪ್ರಕಾರ',
    s42_prop_type_ph:      'ಆಯ್ಕೆಮಾಡಿ',
    s42_prop_cat_label:    'ಆಸ್ತಿ ವರ್ಗ',
    s42_prop_cat_ph:       'ಆಯ್ಕೆಮಾಡಿ',
    s42_corner_label:      'ಇದು ಮೂಲೆಯ ಸೈಟ್ ಆಗಿದೆಯೇ',
    s42_corner_ph:         'ಹೌದು/ಇಲ್ಲ ಆಯ್ಕೆಮಾಡಿ',
    s42_sale_deed_infobox: 'ಸರಿಯಾದ ಕಟ್ಟಡ ವಿವರಗಳನ್ನು ನಮೂದಿಸಲು ಮಾರಾಟ ಪತ್ರದ ದಾಖಲೆ ಸಿದ್ಧವಾಗಿರಲಿ',
    s42_building_area_title:  'ಕಟ್ಟಡ ಪ್ರದೇಶ ವಿವರಗಳು',
    s42_multi_storey_title:   'ಬಹು ಮಹಡಿ ಫ್ಲಾಟ್ ಬಳಕೆ ವಿವರಗಳು',
    s42_parking_title:        'ಪಾರ್ಕಿಂಗ್ ವಿವರಗಳು',
    s42_undivided_title:      'ಅವಿಭಜಿತ ಭೂಮಿ ವಿವರಗಳು',
    s42_escom_title:          'ಇಎಸ್\u200cಕಾಂ ವಿವರಗಳು',
    s42_tenant_title:         'ಬಾಡಿಗೆ ವಿವರಗಳು',

    // ——— Section 4.3 ———
    s43_title:              'ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ',
    s43_click_here:         'ರಿಯಾಯಿತಿಗಳ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ',
    s43_question:           'ನಿಮ್ಮ ಆಸ್ತಿಗೆ ಯಾವುದೇ ರಿಯಾಯಿತಿಗಳನ್ನು ಪಡೆಯುವಿರಾ?',
    s43_cat_details_label:  'ವರ್ಗ ವಿವರಗಳು',
    s43_cat_ph:             'ಆಯ್ಕೆಮಾಡಿ',
    s43_table_issued_date:  'ನೀಡಿದ ದಿನಾಂಕ',

    // ——— Modal strings ———
    modal_title:            'ನನ್ನ ವರ್ಗೀಕರಣವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
    modal_confirm:          'ನನ್ನ ವರ್ಗೀಕರಣವನ್ನು ದೃಢಪಡಿಸಿ',
    modal_confirm_caption:  'ಇದನ್ನು ನಿಮ್ಮ ಅರ್ಜಿಯಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ',

    // ——— Warning modal strings ———
    warn41_message:       'ವಿಭಾಗ 4.1 — ಆಸ್ತಿ ವರ್ಗೀಕರಣ ಮತ್ತು ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಗತಿ ಕಳೆದುಹೋಗುತ್ತದೆ',
    warn41_ec_suffix:     ', ಮತ್ತು EC ಅಪ್‌ಲೋಡ್ (ಹಂತ 5)',
    warn41_submessage:    'ನಿಮ್ಮ ಸರ್ವೆ ಮತ್ತು ವರ್ಗೀಕರಣ ವಿವರಗಳನ್ನು ಮತ್ತೆ ಉಳಿಸಬೇಕಾಗುತ್ತದೆ.',
    warn_yes_edit:        'ಹೌದು, ಸಂಪಾದಿಸಿ',
    warn_class_message:   'ಆಸ್ತಿ ವರ್ಗೀಕರಣ ವಿಭಾಗದಲ್ಲಿ ನೀವು ಮಾಡಿದ ಪ್ರಗತಿ ಕಳೆದುಹೋಗುತ್ತದೆ',
    warn_class_ec_suffix: ' ಮತ್ತು EC ವಿವರಗಳು',
    warn_class_submessage:'ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್‌ನಿಂದ ವಿಭಾಗ 4.1 ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಬೇಕಾಗುತ್ತದೆ.',
    warn_yes_change:      'ಹೌದು, ಬದಲಾಯಿಸಿ',
    warn_type_message:    'ವಿಭಾಗ 4.2 — ಆಸ್ತಿ ಪ್ರಕಾರ ಮತ್ತು ಕಟ್ಟಡ ವಿವರಗಳಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಗತಿ ಕಳೆದುಹೋಗುತ್ತದೆ',
    warn_type_ec_suffix:  ', ಮತ್ತು EC ಅಪ್‌ಲೋಡ್ (ಹಂತ 5)',
    warn_type_submessage: 'ಕಟ್ಟಡ ವಿವರಗಳನ್ನು ಮತ್ತೆ ನಮೂದಿಸಬೇಕಾಗುತ್ತದೆ.',

    // ——— View Document popup ———
    view_doc_title:   'ದಾಖಲೆ ವೀಕ್ಷಿಸಿ',
    view_doc_preview: 'PDF ಪೂರ್ವವೀಕ್ಷಣೆ ಮೂಲಮಾದರಿಯಲ್ಲಿ ಲಭ್ಯವಿಲ್ಲ',

    // ——— Section 4.2 — Building Details ———

    // Section titles
    bd_section_area_details:   'ಕಟ್ಟಡದ ಏರಿಯಾ ವಿವರಗಳು',
    bd_section_usage_details:  'ಬಳಕೆ ವಿವರಗಳು',
    bd_section_escom_meters:   'ಎಲ್ಲಾ ಇಎಸ್\u200cಕಾಂ ಮೀಟರ್ ವಿವರಗಳು',
    bd_section_water_meters:   'ಎಲ್ಲಾ ನೀರಿನ ಮೀಟರ್ ವಿವರಗಳು',
    bd_section_multi_storey:   'ಬಹು ಮಹಡಿ ಫ್ಲಾಟ್ ಬಳಕೆ ವಿವರಗಳು',
    bd_section_parking:        'ಪಾರ್ಕಿಂಗ್ ವಿವರಗಳು',
    bd_section_undivided_land: 'ಅವಿಭಜಿತ ಭೂಮಿ ವಿವರಗಳು',
    bd_section_escom_details:  'ಇಎಸ್\u200cಕಾಂ ವಿವರಗಳು',

    // Shared field labels
    bd_plinth_area:      'ಕಟ್ಟಡದ ಪ್ಲಿಂತ್ ಏರಿಯಾ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    bd_escom_type:       'ಇಎಸ್\u200cಕಾಂ ಪ್ರಕಾರ',
    bd_rr_number:        'ಆರ್\u200cಆರ್ ಸಂಖ್ಯೆ',
    bd_year_construction:'ನಿರ್ಮಾಣ ವರ್ಷ / ಬಳಕೆ ಆರಂಭವಾದ ವರ್ಷ',
    bd_table_no:         'ಸಂಖ್ಯೆ',
    bd_owner_name:       'ಮಾಲೀಕರ ಹೆಸರು',
    bd_address:          'ವಿಳಾಸ',
    bd_cancel:           'ರದ್ದುಮಾಡಿ',

    // General building — Section 1 & 2 fields
    bd_num_storeys:       'ಮಹಡಿಗಳ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    bd_floor_wise_details:'ಮಹಡಿ ಪ್ರಕಾರ ವಿವರಗಳು',
    bd_built_up_area:     'ನಿರ್ಮಿತ ಏರಿಯಾ ನಮೂದಿಸಿ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    bd_property_type:     'ಆಸ್ತಿಯ ಪ್ರಕಾರ',
    bd_year_demolition:   'ಧ್ವಂಸ ವರ್ಷ',
    bd_usage_type:        'ಬಳಕೆ ಪ್ರಕಾರ',
    bd_floor_type:        'ನೆಲದ ಪ್ರಕಾರ',
    bd_roof_type:         'ಮೇಲ್ಛಾವಣಿ ಪ್ರಕಾರ',
    bd_wood_used:         'ಬಳಸಿದ ಮರ',
    bd_remarks:           'ಟಿಪ್ಪಣಿಗಳು (ಇದ್ದರೆ)',
    bd_escom_account_id:  'ಇಎಸ್\u200cಕಾಂ  ಖಾತೆ ಐಡಿ',
    bd_water_meter_number:'ನೀರಿನ ಮೀಟರ್ ಸಂಖ್ಯೆ',

    // Apartment/flat — Section 1 extra fields
    bd_undivided_plot_size:       'ಅವಿಭಜಿತ ಜಾಗದ ಗಾತ್ರ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    bd_total_undivided_plot_size:  'ಒಟ್ಟು ಅವಿಭಜಿತ ಜಾಗದ ಗಾತ್ರ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',

    // Apartment/flat — Section 2 fields
    bd_super_built_area:        'ಸೂಪರ್ ಬಿಲ್ಟ್ ಏರಿಯಾ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    bd_carpet_area:             'ಕಾರ್ಪೆಟ್ ಏರಿಯಾ \u2014 ನಿರ್ಮಿತ ಏರಿಯಾದ ಸುಮಾರು 70% (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    bd_additional_area:         'ಹೆಚ್ಚುವರಿ ಏರಿಯಾ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    bd_block_name:              'ಬ್ಲಾಕ್ ಹೆಸರು',
    bd_flat_number:             'ಫ್ಲಾಟ್ ಸಂಖ್ಯೆ',
    bd_flat_floor_q:            'ಈ ಫ್ಲಾಟ್ / ಮನೆ ಒಂದೇ ಮಹಡಿಯಲ್ಲಿ ಇದೆಯಾ ಅಥವಾ ಹಲವು ಮಹಡಿಗಳಲ್ಲಿ ಇದೆಯಾ?',
    bd_single_floor_flat:       'ಒಂದೇ ಮಹಡಿ ಫ್ಲಾಟ್',
    bd_single_flat_multi_floors:'ಹಲವು ಮಹಡಿಗಳ ಫ್ಲಾಟ್',
    bd_basement:                'ಬೇಸ್\u200cಮೆಂಟ್ (ಮಹಡಿ ಮಟ್ಟ)',
    bd_ground:                  'ನೆಲ ಮಹಡಿ (ಮಹಡಿ ಮಟ್ಟ)',
    bd_floors:                  'ಮಹಡಿಗಳ ಸಂಖ್ಯೆ (ನೆಲದ ಮೇಲಿರುವ ಮಹಡಿಗಳು)',

    // Apartment/flat — Section 3 Parking
    bd_num_parking:  'ಫ್ಲಾಟ್/ಘಟಕಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಪಾರ್ಕಿಂಗ್ ಸಂಖ್ಯೆ',
    bd_parking_area: 'ಒಟ್ಟು ಪಾರ್ಕಿಂಗ್ ಪ್ರದೇಶ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',

    // Apartment/flat — Section 4 Undivided Land
    bd_undivided_land_share_type: 'ಅವಿಭಜಿತ ಭೂಮಿ ಹಂಚಿಕೆ ಪ್ರಕಾರ',

    // Apartment/flat — Section 5 ESCOM
    bd_escom_id: 'ಇಎಸ್\u200cಕಾಂ ಅಂಕಿಯ ಖಾತೆ ಐಡಿ',

    // Buttons and UI strings
    bd_save_area_details:   'ಕಟ್ಟಡದ ಏರಿಯಾ ವಿವರಗಳನ್ನು ಉಳಿಸಿ',
    bd_area_saved_msg:      'ಕಟ್ಟಡದ ಏರಿಯಾ ವಿವರಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಮುಂದಿನ ಹಂತಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ.',
    bd_confirm_storeys:     'ದೃಢಪಡಿಸಿ',
    bd_floor_wise_title:    'ದಯವಿಟ್ಟು ಮಹಡಿ ಪ್ರಕಾರ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
    bd_save_floor_details:  'ಮಹಡಿ ಪ್ರಕಾರ ವಿವರಗಳನ್ನು ಉಳಿಸಿ',
    bd_escom_verify_btn:    'ಇಎಸ್\u200cಕಾಂ ಮೀಟರ್\u200cಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
    bd_escom_verifying:     'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ\u2026',
    bd_escom_get_updated:   'ಇಎಸ್\u200cಕಾಂನಿಂದ ನವೀಕರಿಸಿದ ವಿವರಗಳನ್ನು ತರಿಸಿ',
    bd_escom_fetched_title: 'ದಯವಿಟ್ಟು ತರಿಸಿದ ಇಎಸ್\u200cಕಾಂ ಮೀಟರ್ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
    bd_water_verify_btn:    'ನೀರಿನ ಮೀಟರ್\u200cಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
    bd_water_verifying:     'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ\u2026',
    bd_water_fetched_title: 'ದಯವಿಟ್ಟು ತರಿಸಿದ ನೀರಿನ ಮೀಟರ್ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
    bd_fetch_escom_btn:     'ಇಎಸ್\u200cಕಾಂ ವಿವರಗಳನ್ನು ತರಿಸಿ',
    bd_escom_fetching:      'ತರಿಸಲಾಗುತ್ತಿದೆ\u2026',
    bd_save_building_details: 'ಕಟ್ಟಡದ ವಿವರಗಳನ್ನು ಉಳಿಸಿ',
    bd_storey_prefix:       'ಮಹಡಿ',
    bd_floor_prefix:        'ಮಹಡಿ',
    bd_escom_multi_info:    'ಒಂದೇ ಆಸ್ತಿಯಲ್ಲಿ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಇಎಸ್\u200cಕಾಂ ಮೀಟರ್\u200cಗಳಿದ್ದರೆ ಎಲ್ಲವನ್ನೂ ನಮೂದಿಸಿ',
    bd_water_multi_info:    'ಒಂದೇ ಆಸ್ತಿಯಲ್ಲಿ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ನೀರಿನ ಮೀಟರ್\u200cಗಳಿದ್ದರೆ ಎಲ್ಲವನ್ನೂ ನಮೂದಿಸಿ',
    bd_tenants_section_title: 'ಆಸ್ತಿಗೆ ಅನ್ವಯಿಸಿದರೆ ಎಲ್ಲಾ ಬಾಡಿಗೆಯಿರುವ ವ್ಯಕ್ತಿಗಳ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
    bd_water_section_title:   'ನಿಮಗೆ ಅನ್ವಯಿಸಿದರೆ ಎಲ್ಲಾ ನೀರಿನ ಮೀಟರ್ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
    bd_escom_add_title:       'ಎಲ್ಲಾ ಇಎಸ್\u200cಕಾಂ ಮೀಟರ್ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
    bd_are_tenants:           'ಕಟ್ಟಡದಲ್ಲಿ ಬಾಡಿಗೆಯಿರುವ ವ್ಯಕ್ತಿಗಳಿದ್ದಾರೆಯೇ?',
    bd_infobox_sale_deed:     'ಸರಿಯಾದ ಕಟ್ಟಡದ ವಿವರಗಳನ್ನು ನಮೂದಿಸಲು ಮಾರಾಟ ದಾಖಲಾತಿ ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ.',
    bd_escom_where_tooltip:   'ನಿಮ್ಮ ಇಎಸ್\u200cಕಾಂ ಖಾತೆ ಐಡಿ ಮತ್ತು ಆರ್\u200cಆರ್ ಸಂಖ್ಯೆ ಎಲ್ಲಿ ಕಾಣಬಹುದು',
    bd_tooltip_click:         'ಮಾದರಿ ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ',

    // ——— Section 4.4 — Avail Rebates ———

    rebates_question: 'ನಿಮ್ಮ ಆಸ್ತಿಗೆ ಯಾವುದಾದರೂ ರಿಯಾಯಿತಿ ಪಡೆಯಲು ಇಚ್ಛಿಸುವಿರಾ?',
    rebates_category_label: 'ರಿಯಾಯಿತಿ ವರ್ಗ',
    rebates_category_placeholder: 'ವರ್ಗ ಆಯ್ಕೆ ಮಾಡಿ',
    rebates_subcategory_label: 'ಉಪ-ವರ್ಗ ಆಯ್ಕೆ ಮಾಡಿ',
    rebates_subcategory_placeholder: 'ಉಪ-ವರ್ಗ ಆಯ್ಕೆ ಮಾಡಿ',
    rebates_docs_heading: 'ಅಗತ್ಯ ದಾಖಲಾತಿಗಳು',
    rebates_docs_col_no: 'ಕ್ರ.ಸಂ.',
    rebates_docs_col_doc: 'ದಾಖಲಾತಿ',
    rebates_upload_label: 'ಸಹಾಯಕ ದಾಖಲಾತಿ ಅಪ್ಲೋಡ್ ಮಾಡಿ',
    rebates_caption: '{subCategory} ಅಡಿಯಲ್ಲಿ, ಗ್ರಾಮ ಪಂಚಾಯತ್ ಕಚೇರಿಯ ಪರಿಶೀಲನೆ ಮತ್ತು ಅನುಮೋದನೆ ನಂತರ ನೀವು {amount} ರಿಯಾಯಿತಿಗೆ ಅರ್ಹರಾಗಿರುತ್ತೀರಿ',

    // Category dropdown options
    rebate_cat_1:  '1 (ಈ) - ಮಾಜಿ ಸೈನಿಕರು / ಸೈನಿಕರು / ಮಾಜಿ ಸೈನಿಕರ ವಿಧವಾ ಮಹಿಳೆಯರು',
    rebate_cat_2:  '2 (ಉ) - ವಿಶೇಷ ಚೇತನರು / ವಿಧವೆಯರು / ಹೆಚ್.ಐ.ವಿ. ಪೀಡಿತರು / ಕುಷ್ಠರೋಗ ಪೀಡಿತರು',
    rebate_cat_3:  '3 (ಊ) - ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘ / ವಿಶೇಷ ಚೇತನರ ವಾಣಿಜ್ಯ ಘಟಕ',
    rebate_cat_4:  '4 (ಋ) - ಸ್ವ-ನಿರ್ವಹಣೆಯ ಸೌಲಭ್ಯಗಳ ವಸತಿ ಬಡಾವಣೆ',
    rebate_cat_5:  '5 (ಎ) - ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆ / ಹಸರೀಕರಣ ಜಾಗ',
    rebate_cat_6:  '6 (ಐ) - ಕೈಗಾರಿಕೆ / ವಿಮಾನ ನಿಲ್ದಾಣ ಪ್ರಾಧಿಕಾರದ ಖಾಲಿ ಜಾಗ ಹಸಿರೀಕರಣ',
    rebate_cat_7:  '7 (ಒ) - ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ ಘಟಕಕ್ಕೆ ಉಳಿಕೆ ಖಾಲಿ ಜಮೀನು',
    rebate_cat_8:  '8 (ಓ) - ಸೌರ ವಿದ್ಯುತ್‌ ಉತ್ಪಾದನಾ ಘಟಕ ಅಳವಡಿಸಿದ ವಾಸದ ಕಟ್ಟಡ',
    rebate_cat_9:  '9 (ಔ) - ಹಸಿ ಕಸ ಸಂಸ್ಕರಣೆ / ಮಳೆ ನೀರು ಕೋಯ್ಲು ಅಳವಡಿಸಿದ ವಾಸದ ಕಟ್ಟಡ',
    rebate_cat_10: '10 (ಅಂ) - ಪೌಲ್ಟ್ರಿ ಫಾರಂ (2000 ಚ.ಅ. ವಿಸ್ತೀರ್ಣದವರೆಗೆ)',
    rebate_cat_11: '11 (ಅಃ) - ವಾಸದ ಮನೆಯಲ್ಲಿ ಕೈಮಗ್ಗ / ಗುಡಿ ಕೈಗಾರಿಕೆ / ಕೃಷಿ ಉತ್ಪಾದನೆ',

    // Sub-category dropdown options — Category 1
    rebate_cat1_sub1: 'ಮಾಜಿ ಸೈನಿಕರು',
    rebate_cat1_sub2: 'ಸೈನಿಕರು',
    rebate_cat1_sub3: 'ಮಾಜಿ ಸೈನಿಕರ ವಿಧವಾ ಮಹಿಳೆಯರು',

    // Sub-category dropdown options — Category 2
    rebate_cat2_sub1: 'ವಿಶೇಷ ಚೇತನರು',
    rebate_cat2_sub2: 'ವಿಧವೆಯರು',
    rebate_cat2_sub3: 'ಹೆಚ್.ಐ.ವಿ. (ಏಡ್ಸ್) ಪೀಡಿತ ಮಾಲೀಕರು',
    rebate_cat2_sub4: 'ಕುಷ್ಠರೋಗ ಪೀಡಿತ ಮಾಲೀಕರು',

    // Sub-category dropdown options — Category 3
    rebate_cat3_sub1: 'ಸರ್ಕಾರದ ಯೋಜನೆಗಳಡಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟ ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘ/ಒಕ್ಕೂಟಗಳು',
    rebate_cat3_sub2: 'ವಿಶೇಷ ಚೇತನರು ನಡೆಸುವ ಸಣ್ಣ ವಾಣಿಜ್ಯ/ಉದ್ಯಮ ಘಟಕಗಳಿಗೆ',

    // Sub-category dropdown options — Category 5
    rebate_cat5_sub1: 'ಸ್ವ-ನಿರ್ವಹಣೆಯ ಪ್ರತ್ಯೇಕ ನಾಗರೀಕ ಸೌಲಭ್ಯಗಳನ್ನು ಹೊಂದಿರುವ ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಯ ಆಸ್ತಿಗಳಿಗೆ',
    rebate_cat5_sub2: 'ಹಸರೀಕರಣ ಮಾಡಿರುವ ಜಾಗಕ್ಕೆ',

    // Sub-category dropdown options — Category 11
    rebate_cat11_sub1: 'ವಾಸದ ಮನೆಯಲ್ಲಿ ನಡೆಸಲಾಗುವ ಕೈಮಗ್ಗ',
    rebate_cat11_sub2: 'ವಾಸದ ಮನೆಯಲ್ಲಿ ನಡೆಸಲಾಗುವ ಗುಡಿ ಕೈಗಾರಿಕೆ',
    rebate_cat11_sub3: 'ವಾಸದ ಮನೆಯಲ್ಲಿ ನಡೆಸಲಾಗುವ ಕೃಷಿ ಅಧಾರಿತ ಉತ್ಪಾದನಾ ಚಟುವಟಿಕೆ',
  },
};

export default step4;
