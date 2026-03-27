// E-Swathu Property Classification — Questionnaire Data
// Ported from property-classifier-logic (1).html

/**
 * GLOSSARY — maps exact term strings to their i18n definition keys.
 * Terms are matched case-sensitively in question and option text.
 * The matching value is looked up via t(key) using the 'newAppFirst' namespace.
 * English definitions live in newAppFirst.js under def_* keys.
 * Kannada definitions follow the same keys in the kn object.
 *
 * ORDERING: list longer / more specific terms before shorter ones to prevent
 * a shorter substring from matching before the intended longer term.
 * e.g. 'single layout plan' must come before 'layout plan'.
 */
export const GLOSSARY = {
  // single layout plan before layout plan (substring containment)
  'single layout plan':                        'def_singleLayoutPlan',
  'layout plan':                               'def_layoutPlan',
  'building permit':                           'def_buildingPermit',

  // alphabetical from here
  'Civic Amenities (CA)':                      'def_civicAmenities',
  'Corporation / Board / Limited / Authority': 'def_corpBoard',
  'Gram Panchayat':                            'def_gramPanchayat',
  'Gram Tana':                                 'def_gramTana',
  'Group / Mandal Panchayat':                  'def_groupMandal',
  'KIADB / KSSIDC':                            'def_kiadbKssidc',
  'Karnataka Land Reforms Act, 1961':          'def_landReformsAct',
  'Karnataka Land Revenue Act, 1964':          'def_landRevenueAct',
  'Local Planning Area':                       'def_localPlanningArea',
  'Local Planning Authority':                  'def_lpa',
  'Notified Area Committee':                   'def_notifiedAreaCommittee',
  'Partition Deed':                            'def_partitionDeed',
  'Podi / Hissa':                              'def_podiHissa',
  'Rehabilitation':                            'def_rehabilitation',
  'RGRHCL':                                    'def_rgrhcl',
  'Site':                                      'def_site',
  'Urban Development Authority':               'def_uda',

  // ── These must stay at the END so compound "X Deed" terms above match first ──
  // 'Partition Deed' (above) is matched before standalone 'Deed' because it
  // appears earlier in insertion order → earlier in the regex alternation.
  'land has been converted':                   'def_convertedLand',
  'non-converted land':                        'def_nonConvertedLand',
  'RTC':                                       'def_rtc',
  'Relinquishment Deed':                       'def_relinquishmentDeed',
  'Conversion Order':                          'def_conversionOrder',
  'Deed':                                      'def_deed',
};

/**
 * KN_GLOSSARY — maps exact Kannada term strings (as they appear in Kannada text)
 * to the same def_* i18n keys used by the English GLOSSARY.
 * ORDERING: longer / more specific terms must precede shorter ones to prevent a
 * shorter substring from matching before the intended longer term.
 */
export const KN_GLOSSARY = {
  // ── Longer / more-specific terms first ──────────────────────────────────────
  'ಏಕ ವಿನ್ಯಾಸ ನಕ್ಷೆ':                         'def_singleLayoutPlan',  // before 'ವಿನ್ಯಾಸ ನಕ್ಷೆ'
  'ವಿನ್ಯಾಸ ನಕ್ಷೆ':                             'def_layoutPlan',
  'ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ':                     'def_buildingPermit',
  'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಅಧಿನಿಯಮ, 1964':          'def_landRevenueAct',
  'ಕರ್ನಾಟಕ ಭೂ-ಸುಧಾರಣಾ ಅಧಿನಿಯಮ, 1961':        'def_landReformsAct',
  'ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ':                   'def_lpa',              // before 'ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶ'
  'ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶ':                      'def_localPlanningArea',
  'ಗ್ರೂಪ್ ಪಂಚಾಯಿತಿ / ಮಂಡಲ ಪಂಚಾಯಿತಿ':          'def_groupMandal',      // before 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ'
  'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ':                            'def_gramPanchayat',
  'ನಾಗರಿಕ ಸೌಲಭ್ಯ (CA)':                       'def_civicAmenities',
  'ನಗರಾಭಿವೃದ್ಧಿ ಪ್ರಾಧಿಕಾರ':                   'def_uda',
  'ನೋಟಿಫೈಡ್ ಏರಿಯಾ ಸಮಿತಿ':                     'def_notifiedAreaCommittee',
  'ಪೋಡಿ ಸಂಖ್ಯೆ / ಹಿಸ್ಸಾ ಸಂಖ್ಯೆ':              'def_podiHissa',
  'ಪರಿವರ್ತನೆಯಾಗದ ಜಮೀನು':                      'def_nonConvertedLand',
  'ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ':                        'def_conversionOrder',
  'ಪರಿತ್ಯಾಜನಾ ಪತ್ರ':                           'def_relinquishmentDeed',
  'ವಿಭಾಗ ಪತ್ರ':                                'def_partitionDeed',
  'ಕೆಐಎಡಿಬಿ/ಕೆಎಎಸ್‌ಐಡಿಸಿ':                   'def_kiadbKssidc',
  'ಗ್ರಾಮ ಠಾಣ':                                 'def_gramTana',
  'ಪುನರ್ವಸತಿ':                                 'def_rehabilitation',
  'RGRHCL':                                    'def_rgrhcl',
  'ನಿವೇಶನ':                                   'def_site',
  'RTC':                                       'def_rtc',
};

/**
 * OPTIONAL_DOCS — maps classification code to an array of doc indices
 * that are NOT mandatory (no red *). All other doc indices are mandatory.
 * Empty means all docs for all classifications are mandatory by default.
 */
export const OPTIONAL_DOCS = {
  // e.g. '11A-1': [2]  ← 3rd doc is optional for 11A-1
};

/**
 * KN_TITLES — Kannada classification names.
 * Exact labels from kannada-classification.md. One entry per result code.
 * 11A-13 and 11A-15 have noDoc:true so no KN_DOCS entries are needed for them.
 */
export const KN_TITLES = {
  '11A-1':  'ಗ್ರಾಮ ಠಾಣಾ',
  '11A-2':  'ಸರ್ಕಾರದ ವಸತಿ ನಿಗಮದ ಯೋಜನೆಯ ಮಂಜೂರಾದ ಆಸ್ತಿ',
  '11A-3':  'ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದಲ್ಲಿನ ನಗರಾಭಿವೃದ್ಧಿ ಪ್ರಾಧಿಕಾರ ಹಾಗೂ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರ ಭಾಗದಲ್ಲಿ/ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದ ವಿನ್ಯಾಸ ಅನುಮೋದಿತ ಆಸ್ತಿ',
  '11A-4':  'ದಿನಾಂಕ:11.11.2014 ರ ಪೂರ್ವದಲ್ಲಿ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರ ಭಾಗದಲ್ಲಿ ಗ್ರೂಪ್/ಮಂಡಲ ಪಂಚಾಯತಿಯ ವಿನ್ಯಾಸ ಅನುಮೋದಿತ ಆಸ್ತಿ',
  '11A-5':  'ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದಲ್ಲಿ ದಿನಾಂಕ:16-11-1992ರ ಪೂರ್ವದಲ್ಲಿ ಗ್ರೂಪ್/ಮಂಡಲ ಪಂಚಾಯಿತಿಯಿಂದ ಅನುಮೋದನೆಯಾಗಿರುವ ಆಸ್ತಿ',
  '11A-6':  'ಮಂಡಲ ಪಂಚಾಯತಿ ಅವಧಿಯ ಪೂರ್ವದಲ್ಲಿ ನೋಟಿ ಪೈಡ್ ಏರಿಯಾ ಸಮಿತಿಯಲ್ಲಿ ನಿರ್ವಹಿಸಲಾದ ಆಸ್ತಿ/ಅಧಿಸೂಚಿತ ಪ್ರದೇಶದ ಆಸ್ತಿ',
  '11A-7':  'ಕೆಐಎಡಿಬಿ/ಕೆಎಎಸ್‌ಐಡಿಸಿ ಕೈಗಾರಿಕಾ ವಿನ್ಯಾಸ ಅನುಮೋದಿತ ಆಸ್ತಿ',
  '11A-8':  'ದಿನಾಂಕ:16.11.1992 ರಿಂದ ದಿನಾಂಕ:14-06-2013 ರವರೆಗೆ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಅನುಮತಿ ಪತ್ರ/ಅನುಮೋದಿತ ಕಟ್ಟಡ ನಕ್ಷೆಯ ಕಟ್ಟಡ ನಿರ್ಮಿತ ಭೂ ಪರಿವರ್ತಿತ ಆಸ್ತಿ',
  '11A-9':  'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಕಾಯಿದೆ 19640 ಸೆಕ್ಷನ್ 94/94ರಡಿಯಲ್ಲಿ ಮಂಜೂರಾದ ಆಸ್ತಿ',
  '11A-10': 'ಪುನರ್ವಸತಿ ಯೋಜನೆಯ ಆಸ್ತಿ',
  '11A-11': 'ಪಾಲುದಾರಿಕೆ ನೋಂದಾಯಿತ ಪತ್ರದಂತೆ ಪೋಡಿ/ಹಿಸ್ಸಾ ನಂಬರ್ ಪಡೆದ ವೈಯಕ್ತಿಕ ಕುಟುಂಬದ ಆಸ್ತಿ (ದಕ್ಷಿಣ ಕನ್ನಡ ಮತ್ತು ಉಡುಪಿ ಜಿಲ್ಲೆ)',
  '11A-12': 'ದಿನಾಂಕ: 11.11.2014 ರಿಂದ ದಿನಾಂಕ:10.01.2025ರವರೆಗೆ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರ ಭಾಗದಲ್ಲಿ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಅನುಮೋದಿತ ಆಸ್ತಿ * ವಿನ್ಯಾಸ',
  '11A-13': 'ಕೇಂದ್ರ ಸರ್ಕಾರ/ರಾಜ್ಯಸರ್ಕಾರ/ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳ ನಿವೇಶನ/ಕಟ್ಟಡ',
  '11A-14': 'ಕರ್ನಾಟಕ ಭೂ-ಸುಧಾರಣಾ ಅಧಿನಿಯಮ 1961 ರರ್ಪಕರಣ 38ಎ ರಡಿಯಲ್ಲಿ ಮಂಜೂರಾದ ಆಸ್ತಿ',
  '11A-15': 'ನಿಗಮ/ಮಂಡಳಿ/ನಿಯಮಿತ/ಪ್ರಾಧಿಕಾರ ದ ನಿವೇಶನ/ಕಟ್ಟಡ',
  '11B-1':  'ಮಾದರಿ ಕಟ್ಟಡ ಉಪವಿಧಿಗಳ ಉಪಬಂಧಗಳನ್ನು ಉಲ್ಲಂಘಿಸಿ | ಕೃಷಿ ಜಮೀನಿನಲ್ಲಿನ ಅಥವಾ ಭೂ-ಪರಿವರ್ತಿತ ಜಮೀನಿನಲ್ಲಿನ ಕಟ್ಟಡಗಳು',
  '11B-2':  'ಪರಿವರ್ತಿತ/ಪರಿವರ್ತನೆಯಿಲ್ಲದ ಅಥವಾ ಕೃಷಿ ಭೂಮಿಯಲ್ಲಿನ ನಿವೇಶನಗಳು.',
  '11B-3':  'ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರದಿಂದ ವಿನ್ಯಾಸ ಅನುಮೋದಿತ | ಬಡಾವಣೆಯಲ್ಲಿ ಮಾದರಿ ಕಟ್ಟಡ ಉಪವಿಧಿಗಳ ಉಪಬಂಧಗಳನ್ನು ಉಲ್ಲಂಘಿಸಿ ಅಥವಾ ಅಧಿಬೋಗ ಅಥವಾ ಪೂರ್ಣಗೊಳಿಸಿದ ಪ್ರಮಾಣ ಪತ್ರವನ್ನು ಪಡೆಯದೆ ಸ್ವಾಧೀನಪಡಿಸಿಕೊಂಡ ಕಟ್ಟಡಗಳು.',
  '11B-4':  'ಬಡಾವಣೆ ವಿನ್ಯಾಸ ಅನುಮೋದನೆಯಿಲ್ಲದ, ಆದರೆ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳನ್ನು ಒದಗಿಸಿ, ಉದ್ಯಾನವನ, ನಾಗರೀಕ ಸೌಕರ್ಯ ನಿವೇಶನ, ರಸ್ತೆಗಳನ್ನು ಕರ್ನಾಟಕ ನಗರ ಮತ್ತು ಗ್ರಾಮಾಂತರ ಯೋಜನಾ ಅಧಿನಿಯಮ, 1961 ರ ಪ್ರಕರಣ 17 ರನ್ವಯ ಗ್ರಾಮ ಪಂಚಾಯಿತಿಗೆ ಉಚಿತವಾಗಿ ಪರಿತ್ಯಾಜನಾ ಪತ್ರದ ಮೂಲಕ ವರ್ಗಾಯಿಸಿರುವ /ವರ್ಗಾಯಿಸಿಕೊಂಡು ಕಂದಾಯ ಭೂಮಿ/ ಭೂ-ಪರಿವರ್ತಿತ ಜಮೀನಿನಲ್ಲಿನ ನಿವೇಶನಗಳು',
  '11B-5':  'ಭೂ-ಪರಿವರ್ತಿತ / ಭಾವಿತ ಭೂ-ಪರಿವರ್ತಿತ ಜಮೀನುಗಳು (ಏಕ ನಿವೇಶನ)',
};

/**
 * KN_DOCS — compulsory (ಕಡ್ಡಾಯ) documents only, in Kannada.
 * Exact labels from kannada-classification.md. Optional docs are excluded.
 * 11A-13 and 11A-15 are omitted (noDoc:true — same as English).
 */
export const KN_DOCS = {
  '11A-1': [
    'ದಿಶಾಂಕ್/ತಹಶೀಲ್ದಾರರ ಗ್ರಾಮ ಠಾಣಾ ನಕ್ಷೆ',
    'ಸೇಲ್ ಡೀಡ್/ ಪಿತ್ರಾರ್ಜಿತ ಆಸ್ತಿ/ಆಸ್ತಿ ವಿಭಜನೆ/ಗಿಫ್ಟ್ ಡೀಡ್/ವಿಲ್/ ಹಕ್ಕುಪತ್ರ/ ರಿಲೀಜ್ ಡೀಡ್/ವರ್ಗಾವಣೆ/ ಸೆಮೆಂಟ್/ ನ್ಯಾಯಾಲಯದ ಆದೇಶ/ಒಟ್ಟುಗೂಡಿಸು/ ವಿಭಾಗ ಪತ್ರ / ಅದಲು ಬದಲು ಪತ್ರ.',
  ],
  '11A-2': [
    'ಸರ್ಕಾರದ ಹಕ್ಕು ಪತ್ರ/ ಸ್ವಾಧೀನ ಪತ್ರ /ನಿಗಮದ/ಮಂಡಳಿಯ ಮಂಜೂರಾತಿ ಪತ್ರ',
  ],
  '11A-3': [
    'ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಪತ್ರ',
    'ಪ್ರಾಥಮಿಕ ವಿನ್ಯಾಸ ಅನುಮೋದನೆ ಮತ್ತು ನಿವೇಶನ ಬಿಡುಗಡೆ ಆದೇಶ /ಅಂತಿಮ ವಿನ್ಯಾಸ ಅನುಮೋದನೆ ಮತ್ತು ನಿವೇಶನ ಬಿಡುಗಡೆ ಆದೇಶ',
    'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ',
  ],
  '11A-4': [
    'ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಪತ್ರ',
    'ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರ ಭಾಗದಲ್ಲಿರುವ ಬಗ್ಗೆ ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರದ ದೃಢೀಕರಣ ಪತ್ರ',
    'ಗ್ರೂಪ್/ಮಂಡಲ ಪಂಚಾಯತಿಯ ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ',
  ],
  '11A-5': [
    'ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಪತ್ರ',
    'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ',
  ],
  '11A-6': [
    'ಜಮಾಬಂದಿ ರಿಜಿಸ್ಟರ್ / ಮ್ಯುಟೇಷನ್ ರಿಜಿಸ್ಟರ್',
  ],
  '11A-7': [
    'ಕೆಐಎಡಿಬಿ/ಕೆಎಎಸ್‌ ಐಡಿಸಿ ಭೂ ಸ್ವಾಧೀನ ಪತ್ರ',
    'ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ ನಕ್ಷೆ',
    'ಕೈಗಾರಿಕಾ ನಿವೇಶನ ನಕ್ಷೆ',
    'ಕೈಗಾರಿಕಾ ನಿವೇಶನ ಹಂಚಿಕೆ ಪತ್ರ',
  ],
  '11A-8': [
    'ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಪತ್ರ',
    'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಅನುಮತಿ ಪತ್ರ/ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಅನುಮೋದಿತ ಕಟ್ಟಡ ನಕ್ಷೆ',
  ],
  '11A-9': [
    'ಸರ್ಕಾರದ ಹಕ್ಕು ಪತ್ರ/ ಸ್ವಾಧೀನ ಪತ್ರ/ಮಂಜೂರಾತಿ ಆದೇಶ/ಪ್ರಮಾಣ ಪತ್ರ',
    'ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (ನಮೂನೆ-15/16)',
  ],
  '11A-10': [
    'ಸರ್ಕಾರದ ಹಕ್ಕು ಪತ್ರ / ಸ್ವಾಧೀನ ಪತ್ರ',
    'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ',
  ],
  '11A-11': [
    'ತಹಶೀಲ್ದಾರರ ಹಿಂಬರಹ ಪತ್ರ/ ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಪತ್ರ',
    'ಭೂ ಪರಿವರ್ತನಾ ನಕ್ಷೆ/ ಪಹಣಿ ಪತ್ರ',
  ],
  '11A-12': [
    'ಭೂ ಪರಿವರ್ತನಾ ಆದೇಶ ಪತ್ರ',
    'ಅನುಮೋದಿತ ವಿನ್ಯಾಸ ನಕ್ಷೆ',
    'ಋಣ ಭಾರ ಪ್ರಮಾಣ ಪತ್ರ(ನಮೂನೆ-15)',
  ],
  '11A-14': [
    'ಸರ್ಕಾರದ ಹಕ್ಕು ಪತ್ರ/ಸ್ವಾಧೀನ ಪತ್ರ/ಮಂಜೂರಾತಿ ಆದೇಶ/ಪ್ರಮಾಣ ಪತ್ರ',
    'ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (ನಮೂನೆ-15/16)',
    'ಸೇಲ್ ಡೀಡ್/ ಪಿತ್ರಾರ್ಜಿತ ಆಸ್ತಿ/ಆಸ್ತಿ ವಿಭಜನೆ/ ಗಿಫ್ಟ್ ಡೀಡ್/ ವಿಲ್/ ಹಕ್ಕು ಪತ್ರ/ರಿಲೀಜ್ ಡೀಡ್/ ವರ್ಗಾವಣೆ/ ಸೆಟ್ಟಿಮೆಂಟ್/ನ್ಯಾಯಾಲಯದ ಆದೇಶ/ ಒಟ್ಟುಗೂಡಿಸು/ವಿಭಾಗ ಪತ್ರ / ಅದಲು ಬದಲು/ ಇತರೆ ಪತ್ರ (ನಮೂದಿಸಿ)',
  ],
  '11B-1': [
    'ನೋಂದಾಯಿತ ಪ್ರಮಾಣ ಪತ್ರ /ತೆರಿಗೆ ಪಾವತಿ ರಶೀದಿ (ದಿನಾಂಕ: 07.04.2025 ರ ಪೂರ್ವದ್ದು)',
    'ವಿದ್ಯುತ್ ಬಿಲ್ (ದಿನಾಂಕ: 07.04.2025 ರ ಪೂರ್ವದು)',
    'RTC(ಪಹಣಿ ಪತ್ರ)',
    'ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (EC)',
  ],
  '11B-2': [
    'ನೋಂದಾಯಿತ ಪ್ರಮಾಣ ಪತ್ರ',
    'RTC(ಪಹಣಿ ಪತ್ರ)',
    'ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (EC)',
  ],
  '11B-3': [
    'ನೋಂದಾಯಿತ ಪ್ರಮಾಣ ಪತ್ರ.',
    'ಭೂ- ಪರಿವರ್ತನೆ ಆದೇಶ',
    'ಬಡಾವಣೆ ವಿನ್ಯಾಸ ಅನುಮೋದಿತ ಆದೇಶ',
    'ಅನುಮೋದಿತ ಬಡಾವಣೆ ನಕ್ಷೆ',
    'ನಿವೇಶನ ಬಿಡುಗಡೆ ಆದೇಶ',
    'ಋಣಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (EC)',
  ],
  '11B-4': [
    'RTC(ಪಹಣಿ ಪತ್ರ)',
    'ನೋಂದಾಯಿತ ಪರಿತ್ಯಾಜನಾ ಪತ್ರ',
    'ಋಣ ಭಾರ ಪ್ರಮಾಣ ಪತ್ರ (EC)',
  ],
  '11B-5': [
    'ಭೂ-ಪರಿವರ್ತನೆ ಆದೇಶ / ಮಂಜೂರಾತಿ ಆದೇಶ',
  ],
};

export const DOCS = {
  '11A-1': [
    'Dishank / Tahsildar Village Station Map',
    'Encumbrance Certificate (Form 15)',
    'Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed (Hakku Patra) / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange',
  ],
  '11A-2': [
    'Title Deed of the Government / Possession Certificate / Sanction Order of Corporation or Board',
    'Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Deed (Mention)',
  ],
  '11A-3': [
    'Land Conversion Order Certificate',
    'Preliminary Layout Approval and Site Release Order / Final Layout Approval and Site Release Order',
    'Approved Layout Plan',
  ],
  '11A-4': [
    'Land Conversion Order Certificate',
    'Confirmation Letter from the competent authority outside the Local Planning Area',
    'Approved Layout Plan of Group / Mandal Panchayat',
  ],
  '11A-5': [
    'Land Conversion Order Certificate',
    'Approved Layout Plan',
  ],
  '11A-6': [
    'Jamabandi Register / Mutation Register',
  ],
  '11A-7': [
    'KIADB / KSSIDC Land Acquisition Certificate',
    'Industrial Area Layout Plan',
    'Industrial Site Layout Plan',
    'Industrial Site Allotment Letter',
  ],
  '11A-8': [
    'Land Conversion Order Certificate',
    'Gram Panchayat Building Permit / Gram Panchayat Approved Building Plan',
  ],
  '11A-9': [
    'Government Title Deed / Possession Certificate / Sanction Order / Certificate of Government',
    'Encumbrance Certificate (Form 15/16)',
  ],
  '11A-10': [
    'Government Title Deed / Possession Certificate',
    'Approved Layout Plan',
  ],
  '11A-11': [
    'Endorsement Letter of the Tahsildar / Land Conversion Order',
    'Plan of Converted Land / Pahani',
  ],
  '11A-12': [
    'Land Conversion Order',
    'Preliminary Layout Approval and Site Release Order / Final Layout Approval and Site Release Order',
    'Approved Layout Plan',
    'Declaration Letter of competent authority for land located outside the Local Planning Area',
  ],
  '11A-14': [
    'Government Title Deed / Possession Certificate / Sanction Order / Certificate of Government',
    'Encumbrance Certificate (Form 15/16)',
  ],
  '11B-1': [
    'Registered Deed / Tax Payment Receipt (Before: 07.04.2025)',
    'Electricity Bill (Before: 07.04.2025)',
    'RTC',
    'Encumbrance Certificate (EC)',
  ],
  '11B-2': [
    'Registered Deed',
    'RTC',
    'Encumbrance Certificate (EC)',
  ],
  '11B-3': [
    'Registered Deed',
    'Land Conversion Order',
    'Layout Approved Order',
    'Approved Layout Plan',
    'Site Release Order',
    'Encumbrance Certificate (EC)',
  ],
  '11B-4': [
    'RTC',
    'Registered Relinquishment Deed',
    'Encumbrance Certificate (EC)',
  ],
  '11B-5': [
    'Land Conversion Order / Sanction Order',
  ],
};

export const nodes = {
  q_who: {
    type: 'question',
    label: 'Getting Started',
    question: 'Which of the following best describes you?',
    options: [
      {
        text: 'An Individual or organisation',
        next: 'q_region',
      },
      {
        text: 'Govt. property',
        next: 'q_govt_type',
      },
      {
        text: 'Industry',
        sub: 'KIADB / KSSIDC — Karnataka Industrial Areas Development Board / Karnataka State Small Industries Development Corporation',
        next: 'r_11a7',
      },
    ],
  },

  q_govt_type: {
    type: 'question',
    label: 'Government Property',
    question: 'Which type of government property is this?',
    options: [
      {
        text: 'Sites or Buildings owned by Central Government / State Government / Local Bodies within the GP (region)',
        next: 'r_11a13',
      },
    ],
  },

  q_region: {
    type: 'question',
    label: 'Region',
    question: 'What region does your property fall under?',
    options: [
      {
        text: 'Property lies in Gram Tana region',
        next: 'r_11a1',
      },
      {
        text: 'Property with a Podi / Hissa number according to registered Partition Deed (in Udupi / Dakshina Kannada district)',
        next: 'q_partition_deed',
      },
      {
        text: 'Property is maintained under Notified Area Committee',
        next: 'r_11a6',
      },
      {
        text: 'None of the above',
        next: 'q_govt_scheme',
      },
    ],
  },

  q_partition_deed: {
    type: 'question',
    label: 'Partition Deed',
    question: 'Do you have a Partition Deed?',
    options: [
      { text: 'Yes', next: 'r_11a11' },
      { text: 'No', next: 'q_govt_scheme' },
    ],
  },

  q_govt_scheme: {
    type: 'question',
    label: 'Government Scheme',
    question: 'Was your property sanctioned under any government scheme?',
    options: [
      { text: 'Yes', next: 'q_scheme_type' },
      { text: 'No', next: 'q_converted_layout' },
    ],
  },

  q_scheme_type: {
    type: 'question',
    label: 'Scheme Type',
    question: 'Which type of Govt. Grant / scheme is your property under?',
    options: [
      {
        text: 'Sec 94C / 94CC / 94D – Karnataka Land Revenue Act, 1964',
        next: 'r_11a9',
      },
      {
        text: 'Rehabilitation (Dam / Flood)',
        next: 'r_11a10',
      },
      {
        text: 'Sec 38A – Karnataka Land Reforms Act, 1961',
        next: 'r_11a14',
      },
      {
        text: 'Housing Schemes (like RGRHCL)',
        next: 'r_11a2',
      },
      {
        text: 'Sites or Buildings of Corporation / Board / Limited / Authority',
        next: 'r_11a15',
      },
    ],
  },

  q_converted_layout: {
    type: 'question',
    label: 'Conversion & Layout',
    question: 'Answer both: (1) Has the land been converted? (2) Does it have a layout plan / building permit?',
    options: [
      {
        text: 'The land has been converted and it has a layout plan / building permit',
        next: 'q_site_or_building_yes',
      },
      {
        text: 'Converted or non-converted land with no layout plan',
        next: 'q_property_type_no',
      },
    ],
  },

  q_site_or_building_yes: {
    type: 'question',
    label: 'Property Type',
    question: 'Is your property a site or a building?',
    options: [
      { text: 'Site', next: 'q_approved_by' },
      { text: 'Building', next: 'q_building_permit' },
    ],
  },

  q_building_permit: {
    type: 'question',
    label: 'Building Permit',
    question: 'Do you have a building permit?',
    options: [
      { text: 'Yes', next: 'q_approved_by' },
      { text: 'No', next: 'r_11b3' },
    ],
  },

  q_approved_by: {
    type: 'question',
    label: 'Approval Authority',
    question: 'Who approved the layout / building?',
    options: [
      {
        text: 'Urban Development Authority / Local Planning Authority / Gram Panchayat',
        next: 'r_11a3',
      },
      {
        text: 'Group / Mandal Panchayat',
        next: 'q_inside_lpa',
      },
    ],
  },

  q_inside_lpa: {
    type: 'question',
    label: 'Local Planning Area',
    question: 'Is it inside or outside the Local Planning Area?',
    options: [
      { text: 'Outside', next: 'q_when_approved_outside' },
      { text: 'Inside', next: 'q_when_approved_inside' },
    ],
  },

  q_when_approved_outside: {
    type: 'question',
    label: 'Approval Period',
    question: 'When was it approved? (Outside Local Planning Area)',
    options: [
      { text: 'From 11.11.2014 to 10.01.2025', next: 'r_11a12' },
      { text: 'Before 11.11.2014', next: 'r_11a4' },
    ],
  },

  q_when_approved_inside: {
    type: 'question',
    label: 'Approval Period',
    question: 'When was it approved? (Inside Local Planning Area)',
    options: [
      { text: 'Before 16.11.1992', next: 'r_11a5' },
      { text: 'Between 16.11.1992 and 14.06.2013', next: 'r_11a8' },
    ],
  },

  q_property_type_no: {
    type: 'question',
    label: 'Property Type',
    question: 'Choose if your property is a site / site to be converted, a building, or Civic Amenities (CA) / Parks / Roads',
    options: [
      { text: 'Site / Site to be converted', next: 'q_single_layout' },
      { text: 'Building', next: 'r_11b1' },
      { text: 'Civic Amenities (CA) / Parks / Roads', next: 'r_11b4' },
    ],
  },

  q_single_layout: {
    type: 'question',
    label: 'Layout Plan',
    question: 'Do you have a single layout plan?',
    options: [
      { text: 'Yes', next: 'r_11b5' },
      { text: 'No', next: 'r_11b2' },
    ],
  },

  // ── Results ──────────────────────────────────────────────

  r_11a1:  { type: 'result', code: '11A-1',  title: 'Grama Tana' },
  r_11a2:  { type: 'result', code: '11A-2',  title: 'Properties sanctioned under Housing Scheme of Government Housing Corporation / Housing Board' },
  r_11a3:  { type: 'result', code: '11A-3',  title: "Layout approved property of Urban Development Authority in Local Planning Area and Local Planning Authority's Layout Approval outside Local Planning Area" },
  r_11a4:  { type: 'result', code: '11A-4',  title: 'Layout approved property of Group / Mandal Panchayat on the outside of the Local Planning Area before 11.11.2014' },
  r_11a5:  { type: 'result', code: '11A-5',  title: 'Property approved by the Group / Mandal Panchayat before 16.11.1992 in the Local Planning Area' },
  r_11a6:  { type: 'result', code: '11A-6',  title: 'Property maintained in Notified Area Committee / Notified Area Property prior to the period of Mandal Panchayat' },
  r_11a7:  { type: 'result', code: '11A-7',  title: 'KIADB / KSSIDC Industrial Layout Approved Property' },
  r_11a8:  { type: 'result', code: '11A-8',  title: 'Converted land property of constructed building after obtaining permission letter / approved building plan from Gram Panchayat between 16.11.1992 to 14.06.2013' },
  r_11a9:  { type: 'result', code: '11A-9',  title: 'Property granted under Section 94C / 94CC / 94 of the Karnataka Land Revenue Act, 1964' },
  r_11a10: { type: 'result', code: '11A-10', title: 'Rehabilitation Scheme Property' },
  r_11a11: { type: 'result', code: '11A-11', title: 'Individual family property having Podi / Hissa number according to the registered partition deed (Dakshina Kannada and Udupi district)' },
  r_11a12: { type: 'result', code: '11A-12', title: 'Gram Panchayat Layout Approved Property located Outside Local Planning Area from 11.11.2014 to 10.01.2025' },
  r_11a13: { type: 'result', code: '11A-13', title: 'Site / Building of Central Government / State Government / Local Bodies', noDoc: true },
  r_11a14: { type: 'result', code: '11A-14', title: 'Property granted under Section 38A of the Karnataka Land Reforms Act, 1961' },
  r_11a15: { type: 'result', code: '11A-15', title: 'Site or Buildings of Corporation / Board / Limited / Authority', noDoc: true },
  r_11b1:  { type: 'result', code: '11B-1',  title: 'Buildings constructed on agricultural land or on converted land in contravention of the provisions of model building bye-laws' },
  r_11b2:  { type: 'result', code: '11B-2',  title: 'Sites in converted / non-converted or agricultural land' },
  r_11b3:  { type: 'result', code: '11B-3',  title: 'Buildings constructed in the layout approved site in contravention of the provisions of the Model Building Bye-Laws or without obtaining a certificate of occupancy or completion by the competent authority' },
  r_11b4:  { type: 'result', code: '11B-4',  title: 'Sites on revenue land / converted land without layout approval, but with provision of basic amenities already transferred to the Gram Panchayat under Section 17 of the Karnataka Town & Country Planning Act, 1961, through a Relinquishment Deed' },
  r_11b5:  { type: 'result', code: '11B-5',  title: 'Converted Land / Deemed to be Converted Land (Single Site)' },
};
