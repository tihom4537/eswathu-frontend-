/**
 * step3 namespace — PropertyDetailsPage
 * Section 3.1 — Location Details
 * Section 3.2 — Property boundary details (Area Details → Site Dimensions → Checkbandi)
 * Section 3.3 — Review Details
 * Covers: Kaveri flow + No-Kaveri flow
 */
const step3 = {
  en: {
    // ——— Page ———
    page_step_label: 'Step 3',
    page_title:      'Property details',

    // ——— Section titles ———
    s31_title:  'Location Details',
    s32_title:  'Property boundary details',
    s33_title:  'Review Details',

    // ——— Section 3.1 — Location Details ———
    s31_sub_location_search: 'Location search',
    s31_infobox: 'Enter a landmark near your property and then drag the red pin to select your specific property. In case, you cannot find your property, proceed with the nearest landmark',
    s31_search_placeholder:  'Search for a landmark near your property',
    s31_search_btn:          'Search',
    s31_address_sub:         'Address of the Property',
    s31_door_plot:           'Door/ Plot No.',
    s31_building_name:       'Building/ Land Name',
    s31_area_locality:       'Area/ Locality',
    s31_lat_lng:             'Latitude & Longitude',
    s31_pincode:             'Pincode',
    s31_road_type_label:     'What type of road does the property reside on',
    s31_road_type_placeholder: 'Choose Road Type',
    s31_landmark:            'Nearest Landmark',
    s31_property_image:      'Property Image',
    s31_upload_btn:          'Upload File',
    s31_upload_caption:      "Click property photo with it's front elevation visible",
    s31_upload_success:      'Image uploaded successfully',
    s31_upload_warning:      'The uploaded image does not show the complete building. Please re-upload with full front elevation.',
    s31_save_btn:            'Save and Continue',
    s31_edit_btn:            'Edit',

    // ——— Section 3.2 info-boxes ———
    s32_infobox_kaveri:    'Please keep the property sale deed ready for entering the correct property area details.',
    s32_infobox_no_kaveri: 'Please keep the property ownership document ready for entering the correct property area details.',

    // ——— Section 3.2 placeholder headings ———
    s32_site_dim_placeholder:   'Site Dimension Details',
    s32_checkbandi_placeholder: 'Checkbandi Details',

    // ——— Road type dropdown options ———
    road_corner:        'Corner Property',
    road_two_side:      'Any Two side Roads Property',
    road_nh_bypass:     'Abutting to NH, Bypass, Ringroad',
    road_sh_commercial: 'Abutting to SH Commercial Purpose',
    road_district_main: 'District Main Road / 80 ft. Main Road',
    road_other:         'Other Roads',

    // ——— Error / warning overlays ———
    error_not_found_msg: 'Your exact property location was not found. Please choose a landmark near your property and proceed to add address details.',
    edit31_warn_base:    'You will lose progress in Section 3.2 \u2014 Property Boundary Details',
    edit31_warn_sub:     'You will need to re-enter area, dimensions, and checkbandi.',
    yes_edit_btn:        'Yes, Edit',
    cancel_btn:          'Cancel',
    save_and_proceed_btn:'Save and Proceed',
    step4_short:         'Property Classification (Step 4)',
    step5_short:         'Upload EC (Step 5)',

    // ——— Unit labels (shared across AreaDetails components) ———
    unit_sqft:  'Sq.Ft',
    unit_sqmt:  'Sq.Mt',
    unit_gunta: 'Gunta',
    unit_acre:  'Acre',
    unit_cent:  'Cent',

    // ——— Area-in-unit pill/label strings ———
    ad_area_in_sqft:    'Area in Sq.Ft',
    ad_area_in_sqmt:    'Area in Sq.Mt',
    ad_area_in_sqmtr:   'Area in Sq.Mtr',
    ad_area_in_gunta:   'Area in Gunta',
    ad_area_in_acre:    'Area in Acre',
    ad_area_in_cent:    'Area in Cent',
    ad_area_in_default: 'Area in selected unit',

    // ——— PropertyDetails_AreaDetails (Kaveri) ———
    ad_heading:              'Area Details',
    ad_choose_unit:          'Please choose a unit',
    ad_total_area:           'Total Area',
    ad_final_area_heading:   'Your Final Property Area (in Sq.Mt)',
    ad_conversion_infobox:   'The area you enter in Sq.Ft, Gunta, Acre or cent will be converted to Sq.Mt',
    ad_area_in_sqmtr_pill:   'Area in Sq.Mtr',
    ad_accept_q:             'Do you accept the property area dimensions shown above (as per the Kaveri System)?',
    ad_accept_yes:           'I Accept',
    ad_accept_no:            'No, I want to change the area dimensions',
    ad_pdo_infobox:          'If the applicant disagrees with the area shown and enters a different area, the application will be sent to the Panchayat Development Officer (PDO) for approval.',
    ad_enter_new_dims:       'Please enter the new area dimensions',
    ad_confirm_area_btn:     'Confirm Area',
    ad_new_area_entered:     'New Area Entered. Please proceed.',
    ad_enter_property_area:  'Please enter the property area',
    ad_area_entered_caption: 'Area entered. Please proceed.',

    // ——— PropertyDetails_AreaDetails_NoKaveri extra ———
    ad_nk_enter_area_label:       'Please enter your property area and choose a unit',
    ad_nk_area_added:             'Area added.',
    ad_nk_area_of_property:       'Area of Property (in Sq.Mt)',
    ad_nk_conversion_infobox:     'The area you enter in Sq.Ft, Gunta, Acre or cent will be converted to Sq.Mt for displaying in E-Khata',

    // ——— PropertyDetails_SiteDimensions (Kaveri + NoKaveri shared) ———
    sd_heading:          'Site Dimension Details',
    sd_odd_q:            'Does your property have Odd dimensions?',
    sd_yes:              'Yes',
    sd_no:               'No',
    sd_enter_all_sides:  'Enter all sides dimensions',
    sd_where_dims:       'Where to find your property dimensions',
    sd_click_sample:     'Click to view sample',
    sd_num_sides_label:  'Number of sides',
    sd_choose_num_sides: 'Choose number of sides',
    sd_side_tpl:         'Side {n} (ft)',
    sd_odd_success:      'Side dimensions entered. You can proceed to the next step.',
    sd_ns_ew_sub:        'Property N-S and E-W dimensions',
    sd_ns_dim:           'N-S Dimension (ft)',
    sd_ew_dim:           'E-W Dimension (ft)',
    sd_existing_data:    'Existing Data as per Digitization',
    sd_property_area:    'Property Area',
    sd_area_in_sqft:     'Area in Sq.Ft',
    sd_area_in_sqmt:     'Area in Sq.Mt',
    sd_current_sqft:     'Current area in Square Feet',
    sd_current_sqmt:     'Current Area in Square Meter',
    sd_calc_ns_ew:       'Calculated Property Area (N-S*E-W)',
    sd_calc_sqft:        'Calculated Property Area (Square Feet)',
    sd_calc_sqmt:        'Calculated Property Area (Square Meter)',
    sd_match_success:    'Dimensions and property area details completed. Proceed to next step',
    sd_mismatch_kaveri:  'The calculated area does not match the existing area records. Please re-enter the dimensions or update the area in the Area Details section above.',
    sd_mismatch_rejected:'The calculated area does not match the area you entered. Please re-check your dimensions or update the area in the Area Details section above.',

    // ——— PropertyDetails_SiteDimensions_NoKaveri extra ———
    sd_nk_where_dims:    'Where to find your property dimensions and check Bandi Details',
    sd_nk_choose_sides:  'Choose the number of sides',
    sd_nk_road_facing:   'Road Facing Side Length (ft)',
    sd_nk_ns_short:      'N-S (ft)',
    sd_nk_ew_short:      'E-W (ft)',
    sd_nk_calc_plot:     'Calculated Plot Area (N-S*E-W)',

    // ——— PropertyDetails_Checkbandi ———
    cb_heading:       'Checkbandi Details',
    cb_sub_kaveri:    'Your checkbandi details as per Sale Deed',
    cb_sub_no_kaveri: 'Enter your checkbandi details as per your Sale Deed',
    cb_east:          'Checkbandi East',
    cb_west:          'Checkbandi West',
    cb_north:         'Checkbandi North',
    cb_south:         'Checkbandi South',
    cb_save_btn:      'Save and Proceed',
    cb_edit_btn:      'Edit',

    // ——— PropertyDetails_ReviewDetails ———
    rd_prop_address:   'Property Address',
    rd_lat_lng:        'Latitude and Longitude',
    rd_prop_photo:     'Property Photo',
    rd_total_area_col: 'Total Area Details (Sq.Mts)',
    rd_prop_dims_col:  'Property Dimensions (Mts)',
    rd_irregular_site: 'Irregular site/ site with odd dimensions',
    rd_success_caption:'Property details have been entered successfully. Please proceed to the next step.',
    rd_no_photo:       'No photo',
    rd_yes:            'Yes',
    rd_no_val:         'No',
    rd_na:             'N/A',
    rd_odd_tpl:        'Odd ({n} sides)',
    rd_sqmts_suffix:   'Sq.Mts',
  },

  kn: {
    // ——— Page ———
    page_step_label: 'ಹಂತ 3',
    page_title:      'ಆಸ್ತಿ ವಿವರಗಳು',

    // ——— Section titles ———
    s31_title:  'ಸ್ಥಳ ವಿವರಗಳು',
    s32_title:  'ಆಸ್ತಿ ಗಡಿ ವಿವರಗಳು',
    s33_title:  'ವಿವರಗಳ ಪರಿಶೀಲನೆ',

    // ——— Section 3.1 — Location Details ———
    s31_sub_location_search: 'ಸ್ಥಳ ಹುಡುಕು',
    s31_infobox: 'ನಿಮ್ಮ ಆಸ್ತಿಯ ಸಮೀಪದ ಗುರುತಿನ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ನಂತರ ಕೆಂಪು ಪಿನ್ ಅನ್ನು ಎಳೆದು ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಆಸ್ತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ. ನಿಮ್ಮ ಆಸ್ತಿಯನ್ನು ಕಂಡುಹಿಡಿಯಲು ಸಾಧ್ಯವಾಗದಿದ್ದರೆ, ಸಮೀಪದ ಗುರುತಿನ ಸ್ಥಳದೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ',
    s31_search_placeholder:  'ನಿಮ್ಮ ಆಸ್ತಿಯ ಸಮೀಪದ ಗುರುತಿನ ಸ್ಥಳವನ್ನು ಹುಡುಕಿ',
    s31_search_btn:          'ಹುಡುಕು',
    s31_address_sub:         'ಆಸ್ತಿಯ ವಿಳಾಸ',
    s31_door_plot:           'ಬಾಗಿಲು / ಜಾಗ ಸಂಖ್ಯೆ',
    s31_building_name:       'ಕಟ್ಟಡ / ಭೂಮಿ ಹೆಸರು',
    s31_area_locality:       'ಪ್ರದೇಶ / ಸ್ಥಳ',
    s31_lat_lng:             'ಅಕ್ಷಾಂಶ ಮತ್ತು ರೇಖಾಂಶ',
    s31_pincode:             'ಪಿನ್\u200cಕೋಡ್',
    s31_road_type_label:     'ಆಸ್ತಿ ಯಾವ ರೀತಿಯ ರಸ್ತೆಯಲ್ಲಿ ಇದೆ',
    s31_road_type_placeholder: 'ರಸ್ತೆ ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ',
    s31_landmark:            'ಸಮೀಪದ ಗುರುತಿನ ಸ್ಥಳ',
    s31_property_image:      'ಆಸ್ತಿ ಚಿತ್ರ',
    s31_upload_btn:          'ಫೈಲ್ ಅಪ್\u200cಲೋಡ್ ಮಾಡಿ',
    s31_upload_caption:      'ಮುಂಭಾಗದ ದೃಶ್ಯ ಕಾಣಿಸುವಂತೆ ಆಸ್ತಿ ಫೋಟೋ ತೆಗೆಯಿರಿ',
    s31_upload_success:      'ಚಿತ್ರವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್\u200cಲೋಡ್ ಮಾಡಲಾಗಿದೆ',
    s31_upload_warning:      'ಅಪ್\u200cಲೋಡ್ ಮಾಡಿದ ಚಿತ್ರದಲ್ಲಿ ಸಂಪೂರ್ಣ ಕಟ್ಟಡ ಕಾಣಿಸುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಸಂಪೂರ್ಣ ಮುಂಭಾಗದ ದೃಶ್ಯದೊಂದಿಗೆ ಮತ್ತೆ ಅಪ್\u200cಲೋಡ್ ಮಾಡಿ.',
    s31_save_btn:            'ಉಳಿಸಿ ಮತ್ತು ಮುಂದುವರಿಸಿ',
    s31_edit_btn:            'ತಿದ್ದುಪಡಿ',

    // ——— Section 3.2 info-boxes ———
    s32_infobox_kaveri:    'ಸರಿಯಾದ ಆಸ್ತಿ ಪ್ರದೇಶ ವಿವರಗಳನ್ನು ನಮೂದಿಸಲು ಆಸ್ತಿ ಮಾರಾಟದ ದಾಖಲೆ (sale deed) ಸಿದ್ಧವಾಗಿರಲಿ',
    s32_infobox_no_kaveri: 'ಸರಿಯಾದ ಆಸ್ತಿ ಪ್ರದೇಶ ವಿವರಗಳನ್ನು ನಮೂದಿಸಲು ಆಸ್ತಿ ಮಾಲೀಕತ್ವ ದಾಖಲೆ ಸಿದ್ಧವಾಗಿರಲಿ',

    // ——— Section 3.2 placeholder headings ———
    s32_site_dim_placeholder:   'ಜಾಗದ ಆಯಾಮ ವಿವರಗಳು',
    s32_checkbandi_placeholder: 'ಚೆಕ್\u200cಬಂದಿ ವಿವರಗಳು',

    // ——— Road type dropdown options ———
    road_corner:        'ಮೂಲೆಯ ಆಸ್ತಿ',
    road_two_side:      'ಎರಡು ರಸ್ತೆ ಸ್ಪರ್ಶಿಸುವ ಆಸ್ತಿ',
    road_nh_bypass:     'ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ, ಬೈಪಾಸ್, ರಿಂಗ್\u200cರೋಡ್ ಸ್ಪರ್ಶಿಸುವ ಆಸ್ತಿ',
    road_sh_commercial: 'ರಾಜ್ಯ ಹೆದ್ದಾರಿ ವಾಣಿಜ್ಯ ಉದ್ದೇಶಕ್ಕೆ ಸ್ಪರ್ಶಿಸುವ ಆಸ್ತಿ',
    road_district_main: 'ಜಿಲ್ಲಾ ಮುಖ್ಯ ರಸ್ತೆ / 80 ಅಡಿ ಮುಖ್ಯ ರಸ್ತೆ',
    road_other:         'ಇತರ ರಸ್ತೆಗಳು',

    // ——— Error / warning overlays ———
    error_not_found_msg: 'ನಿಮ್ಮ ನಿಖರ ಆಸ್ತಿ ಸ್ಥಳ ಕಂಡುಹಿಡಿಯಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಸ್ತಿಯ ಸಮೀಪದ ಗುರುತಿನ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ವಿಳಾಸ ವಿವರಗಳನ್ನು ನಮೂದಿಸಲು ಮುಂದುವರಿಯಿರಿ.',
    edit31_warn_base:    'ವಿಭಾಗ 3.2 \u2014 ಆಸ್ತಿ ಗಡಿ ವಿವರಗಳಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಗತಿ ಕಳೆದುಹೋಗುತ್ತದೆ',
    edit31_warn_sub:     'ನೀವು ಪ್ರದೇಶ, ಆಯಾಮಗಳು ಮತ್ತು ಚೆಕ್\u200cಬಂದಿ ಮತ್ತೆ ನಮೂದಿಸಬೇಕಾಗುತ್ತದೆ.',
    yes_edit_btn:        'ಹೌದು, ತಿದ್ದುಪಡಿ',
    cancel_btn:          'ರದ್ದುಮಾಡಿ',
    save_and_proceed_btn:'ಉಳಿಸಿ ಮತ್ತು ಮುಂದುವರಿಸಿ',
    step4_short:         'ಆಸ್ತಿ ವರ್ಗೀಕರಣ (ಹಂತ 4)',
    step5_short:         'EC ಅಪ್\u200cಲೋಡ್ (ಹಂತ 5)',

    // ——— Unit labels ———
    unit_sqft:  'ಚದರ ಅಡಿ',
    unit_sqmt:  'ಚದರ ಮೀಟರ್',
    unit_gunta: 'ಗುಂಟಾ',
    unit_acre:  'ಏಕರ್',
    unit_cent:  'ಸೆಂಟ್',

    // ——— Area-in-unit pill/label strings ———
    ad_area_in_sqft:    'ಚದರ ಅಡಿಯಲ್ಲಿ ಪ್ರದೇಶ',
    ad_area_in_sqmt:    'ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ ಪ್ರದೇಶ',
    ad_area_in_sqmtr:   'ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ ಪ್ರದೇಶ',
    ad_area_in_gunta:   'ಗುಂಟಾದಲ್ಲಿ ಪ್ರದೇಶ',
    ad_area_in_acre:    'ಏಕರ್\u200cನಲ್ಲಿ ಪ್ರದೇಶ',
    ad_area_in_cent:    'ಸೆಂಟ್\u200cನಲ್ಲಿ ಪ್ರದೇಶ',
    ad_area_in_default: 'ಆಯ್ಕೆಮಾಡಿದ ಘಟಕದಲ್ಲಿ ಪ್ರದೇಶ',

    // ——— PropertyDetails_AreaDetails (Kaveri) ———
    ad_heading:              'ಪ್ರದೇಶ ವಿವರಗಳು',
    ad_choose_unit:          'ದಯವಿಟ್ಟು ಒಂದು ಘಟಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    ad_total_area:           'ಒಟ್ಟು ಪ್ರದೇಶ',
    ad_final_area_heading:   'ನಿಮ್ಮ ಅಂತಿಮ ಆಸ್ತಿ ಪ್ರದೇಶ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    ad_conversion_infobox:   'ನೀವು ಚದರ ಅಡಿ, ಗುಂಟಾ, ಏಕರ್ ಅಥವಾ ಸೆಂಟ್\u200cನಲ್ಲಿ ನಮೂದಿಸುವ ಪ್ರದೇಶವನ್ನು ಚದರ ಮೀಟರ್\u200cಗೆ ಪರಿವರ್ತಿಸಲಾಗುತ್ತದೆ',
    ad_area_in_sqmtr_pill:   'ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ ಪ್ರದೇಶ',
    ad_accept_q:             'ಮೇಲಿನಂತೆ ತೋರಿಸಿರುವ ಆಸ್ತಿ ಪ್ರದೇಶದ ಆಯಾಮಗಳನ್ನು (ಕಾವೇರಿ ವ್ಯವಸ್ಥೆಯ ಪ್ರಕಾರ) ನೀವು ಒಪ್ಪುತ್ತೀರಾ?',
    ad_accept_yes:           'ನಾನು ಒಪ್ಪುತ್ತೇನೆ',
    ad_accept_no:            'ಇಲ್ಲ, ನಾನು ಪ್ರದೇಶದ ಆಯಾಮಗಳನ್ನು ಬದಲಾಯಿಸಲು ಬಯಸುತ್ತೇನೆ',
    ad_pdo_infobox:          'ಅರ್ಜಿದಾರರು ತೋರಿಸಿದ ಪ್ರದೇಶವನ್ನು ಒಪ್ಪದಿದ್ದರೆ ಮತ್ತು ಬೇರೆ ಪ್ರದೇಶವನ್ನು ನಮೂದಿಸಿದರೆ, ಅರ್ಜಿಯನ್ನು ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿ (PDO) ಅವರ ಅನುಮೋದನೆಗಾಗಿ ಕಳುಹಿಸಲಾಗುತ್ತದೆ',
    ad_enter_new_dims:       'ದಯವಿಟ್ಟು ಹೊಸ ಪ್ರದೇಶದ ಆಯಾಮಗಳನ್ನು ನಮೂದಿಸಿ',
    ad_confirm_area_btn:     'ಪ್ರದೇಶವನ್ನು ದೃಢೀಕರಿಸಿ',
    ad_new_area_entered:     'ಹೊಸ ಪ್ರದೇಶ ನಮೂದಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಮುಂದುವರಿಯಿರಿ.',
    ad_enter_property_area:  'ದಯವಿಟ್ಟು ಆಸ್ತಿ ಪ್ರದೇಶವನ್ನು ನಮೂದಿಸಿ',
    ad_area_entered_caption: 'ಪ್ರದೇಶ ನಮೂದಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಮುಂದುವರಿಯಿರಿ.',

    // ——— PropertyDetails_AreaDetails_NoKaveri extra ———
    ad_nk_enter_area_label:   'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಸ್ತಿ ಪ್ರದೇಶವನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ಒಂದು ಘಟಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
    ad_nk_area_added:         'ಪ್ರದೇಶ ಸೇರಿಸಲಾಗಿದೆ.',
    ad_nk_area_of_property:   'ಆಸ್ತಿ ಪ್ರದೇಶ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    ad_nk_conversion_infobox: 'ನೀವು ಚದರ ಅಡಿ, ಗುಂಟಾ, ಏಕರ್ ಅಥವಾ ಸೆಂಟ್\u200cನಲ್ಲಿ ನಮೂದಿಸುವ ಪ್ರದೇಶವನ್ನು E-Khata ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಚದರ ಮೀಟರ್\u200cಗೆ ಪರಿವರ್ತಿಸಲಾಗುತ್ತದೆ',

    // ——— PropertyDetails_SiteDimensions (shared) ———
    sd_heading:          'ಜಾಗದ ಆಯಾಮ ವಿವರಗಳು',
    sd_odd_q:            'ನಿಮ್ಮ ಆಸ್ತಿಗೆ ಅಸಮ ಆಯಾಮಗಳಿವೆಯೇ?',
    sd_yes:              'ಹೌದು',
    sd_no:               'ಇಲ್ಲ',
    sd_enter_all_sides:  'ಎಲ್ಲಾ ಬದಿಗಳ ಆಯಾಮಗಳನ್ನು ನಮೂದಿಸಿ',
    sd_where_dims:       'ನಿಮ್ಮ ಆಸ್ತಿಯ ಆಯಾಮಗಳನ್ನು ಎಲ್ಲಿ ಕಂಡುಹಿಡಿಯುವುದು',
    sd_click_sample:     'ಮಾದರಿಯನ್ನು ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
    sd_num_sides_label:  'ಬದಿಗಳ ಸಂಖ್ಯೆ',
    sd_choose_num_sides: 'ಬದಿಗಳ ಸಂಖ್ಯೆ ಆಯ್ಕೆ ಮಾಡಿ',
    sd_side_tpl:         'ಬದಿ {n} (ಅಡಿ)',
    sd_odd_success:      'ಬದಿಯ ಆಯಾಮಗಳನ್ನು ನಮೂದಿಸಲಾಗಿದೆ. ನೀವು ಮುಂದಿನ ಹಂತಕ್ಕೆ ಮುಂದುವರಿಯಬಹುದು.',
    sd_ns_ew_sub:        'ಆಸ್ತಿಯ ಉತ್ತರ-ದಕ್ಷಿಣ ಮತ್ತು ಪೂರ್ವ-ಪಶ್ಚಿಮ ಆಯಾಮಗಳು',
    sd_ns_dim:           'ಉತ್ತರ-ದಕ್ಷಿಣ ಆಯಾಮ (ಅಡಿ)',
    sd_ew_dim:           'ಪೂರ್ವ-ಪಶ್ಚಿಮ ಆಯಾಮ (ಅಡಿ)',
    sd_existing_data:    'ಡಿಜಿಟೈಸೇಶನ್ ಪ್ರಕಾರದ ಇತ್ತೀಚಿನ ಡೇಟಾ',
    sd_property_area:    'ಆಸ್ತಿ ಪ್ರದೇಶ',
    sd_area_in_sqft:     'ಚದರ ಅಡಿಯಲ್ಲಿ ಪ್ರದೇಶ',
    sd_area_in_sqmt:     'ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ ಪ್ರದೇಶ',
    sd_current_sqft:     'ಪ್ರಸ್ತುತ ಪ್ರದೇಶ (ಚದರ ಅಡಿಯಲ್ಲಿ)',
    sd_current_sqmt:     'ಪ್ರಸ್ತುತ ಪ್ರದೇಶ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    sd_calc_ns_ew:       'ಲೆಕ್ಕ ಹಾಕಿದ ಆಸ್ತಿ ಪ್ರದೇಶ (ಉತ್ತರ-ದಕ್ಷಿಣ \u00d7 ಪೂರ್ವ-ಪಶ್ಚಿಮ)',
    sd_calc_sqft:        'ಲೆಕ್ಕ ಹಾಕಿದ ಆಸ್ತಿ ಪ್ರದೇಶ (ಚದರ ಅಡಿಯಲ್ಲಿ)',
    sd_calc_sqmt:        'ಲೆಕ್ಕ ಹಾಕಿದ ಆಸ್ತಿ ಪ್ರದೇಶ (ಚದರ ಮೀಟರ್\u200cನಲ್ಲಿ)',
    sd_match_success:    'ಆಯಾಮಗಳು ಮತ್ತು ಆಸ್ತಿ ಪ್ರದೇಶದ ವಿವರಗಳು ಪೂರ್ಣಗೊಂಡಿವೆ. ಮುಂದಿನ ಹಂತಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ',
    sd_mismatch_kaveri:  'ಲೆಕ್ಕ ಹಾಕಿದ ಪ್ರದೇಶ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ದಾಖಲೆಗಳೊಂದಿಗೆ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಆಯಾಮಗಳನ್ನು ಮರು-ನಮೂದಿಸಿ ಅಥವಾ ಮೇಲಿನ ಪ್ರದೇಶ ವಿವರಗಳ ವಿಭಾಗದಲ್ಲಿ ಪ್ರದೇಶವನ್ನು ನವೀಕರಿಸಿ.',
    sd_mismatch_rejected:'ಲೆಕ್ಕ ಹಾಕಿದ ಪ್ರದೇಶ ನೀವು ನಮೂದಿಸಿದ ಪ್ರದೇಶದೊಂದಿಗೆ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಯಾಮಗಳನ್ನು ಮರು-ಪರಿಶೀಲಿಸಿ ಅಥವಾ ಮೇಲಿನ ಪ್ರದೇಶ ವಿವರಗಳ ವಿಭಾಗದಲ್ಲಿ ಪ್ರದೇಶವನ್ನು ನವೀಕರಿಸಿ.',

    // ——— PropertyDetails_SiteDimensions_NoKaveri extra ———
    sd_nk_where_dims:    'ನಿಮ್ಮ ಆಸ್ತಿ ಆಯಾಮಗಳು ಮತ್ತು ಚೆಕ್\u200cಬಂದಿ ವಿವರಗಳನ್ನು ಎಲ್ಲಿ ಕಾಣಬಹುದು',
    sd_nk_choose_sides:  'ಬದಿಗಳ ಸಂಖ್ಯೆ ಆಯ್ಕೆ ಮಾಡಿ',
    sd_nk_road_facing:   'ರಸ್ತೆ ಮುಖ ಬದಿ ಉದ್ದ (ಅಡಿ)',
    sd_nk_ns_short:      'ಉ-ದ (ಅಡಿ)',
    sd_nk_ew_short:      'ಪೂ-ಪ (ಅಡಿ)',
    sd_nk_calc_plot:     'ಲೆಕ್ಕ ಹಾಕಿದ ಜಾಗದ ಪ್ರದೇಶ (ಉ-ದ \u00d7 ಪೂ-ಪ)',

    // ——— PropertyDetails_Checkbandi ———
    cb_heading:       'ಚೆಕ್\u200cಬಂದಿ ವಿವರಗಳು',
    cb_sub_kaveri:    'ಮಾರಾಟದ ದಾಖಲೆ ಪ್ರಕಾರ ನಿಮ್ಮ ಚೆಕ್\u200cಬಂದಿ ವಿವರಗಳು',
    cb_sub_no_kaveri: 'ನಿಮ್ಮ ಮಾರಾಟ ದಾಖಲೆ ಪ್ರಕಾರ ನಿಮ್ಮ ಚೆಕ್\u200cಬಂದಿ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
    cb_east:          'ಚೆಕ್\u200cಬಂದಿ ಪೂರ್ವ',
    cb_west:          'ಚೆಕ್\u200cಬಂದಿ ಪಶ್ಚಿಮ',
    cb_north:         'ಚೆಕ್\u200cಬಂದಿ ಉತ್ತರ',
    cb_south:         'ಚೆಕ್\u200cಬಂದಿ ದಕ್ಷಿಣ',
    cb_save_btn:      'ಉಳಿಸಿ ಮತ್ತು ಮುಂದುವರಿಸಿ',
    cb_edit_btn:      'ತಿದ್ದುಪಡಿ',

    // ——— PropertyDetails_ReviewDetails ———
    rd_prop_address:   'ಆಸ್ತಿ ವಿಳಾಸ',
    rd_lat_lng:        'ಅಕ್ಷಾಂಶ ಮತ್ತು ರೇಖಾಂಶ',
    rd_prop_photo:     'ಆಸ್ತಿ ಫೋಟೋ',
    rd_total_area_col: 'ಒಟ್ಟು ಪ್ರದೇಶ ವಿವರಗಳು (ಚದರ ಮೀಟರ್)',
    rd_prop_dims_col:  'ಆಸ್ತಿ ಆಯಾಮಗಳು (ಮೀಟರ್)',
    rd_irregular_site: 'ಅಸಮ ಆಯಾಮಗಳ ಜಾಗ',
    rd_success_caption:'ಆಸ್ತಿ ವಿವರಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಮೂದಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಮುಂದಿನ ಹಂತಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ.',
    rd_no_photo:       'ಫೋಟೋ ಇಲ್ಲ',
    rd_yes:            'ಹೌದು',
    rd_no_val:         'ಇಲ್ಲ',
    rd_na:             'ಅನ್ವಯಿಸುವುದಿಲ್ಲ',
    rd_odd_tpl:        'ಅಸಮ ({n} ಬದಿಗಳು)',
    rd_sqmts_suffix:   'ಚ.ಮೀ',
  },
};

export default step3;
