import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../../../i18n';
import BuildingDetails_GeneralFlow from './BuildingDetails_GeneralFlow';
import BuildingDetails_AreaDetails from './BuildingDetails_AreaDetails';
import BuildingDetails_MultiStoreyUsage from './BuildingDetails_MultiStoreyUsage';
import BuildingDetails_ParkingDetails from './BuildingDetails_ParkingDetails';
import BuildingDetails_UndividedLand from './BuildingDetails_UndividedLand';
import BuildingDetails_ESCOMDetails from './BuildingDetails_ESCOMDetails';
import BuildingDetails_TenantDetails from './BuildingDetails_TenantDetails';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import StepHeader from '../../../components/StepHeader/StepHeader';
import Stepper from '../../../components/Stepper/Stepper';
import SectionBox from '../../../components/SectionBox/SectionBox';
import InfoBox from '../../../components/InfoBox/InfoBox';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import DatePicker from '../../../components/DatePicker/DatePicker';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Checkbox from '../../../components/Checkbox/Checkbox';
import Tooltip from '../../../components/Tooltip/Tooltip';
import QuestionnaireField from '../../../components/QuestionnaireField/QuestionnaireField';
import HelpCardList from '../../../components/HelpCardList/HelpCardList';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import ErrorMessageCard from '../../../components/ErrorMessageCard/ErrorMessageCard';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import FileUpload from '../../../components/FileUpload/FileUpload';
import { nodes, DOCS } from '../../HomePage/classifierData';
import { CLASSIFICATION_DATA } from '../../../data/classificationData';
import {
  REBATE_PROPERTY_TYPE_OPTIONS,
  REBATE_CATEGORY_BY_TYPE,
  REBATE_DOCS_BY_DETAIL,
  REBATE_EXEMPTION_BY_DETAIL,
} from '../../../data/rebatesData';
import './PropertyClassificationPage.css';

/* ── Classification options ─────────────────────────────── */
const CLASSIFICATION_OPTIONS = [
  { value: '11A-1',  label: '11A Grama Thana',                                                                                                                                                                                                                                                                                            labelKn: '11A ಗ್ರಾಮ ಠಾಣಾ' },
  { value: '11A-2',  label: '11A Property sanctioned under the Government Housing Corporation scheme*',                                                                                                                                                                                                                                    labelKn: '11A ಸರ್ಕಾರದ ವಸತಿ ನಿಗಮದ ಯೋಜನೆಯ ಮಂಜೂರಾದ ಆಸ್ತಿ' },
  { value: '11A-3',  label: '11A Design Approved Property of Urban Development Authority in Local Planning Area and Outside Local Planning Area/ Local Planning Authority',                                                                                                                                                                 labelKn: '11A ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದಲ್ಲಿನ ನಗರಾಭಿವೃದ್ಧಿ ಪ್ರಾಧಿಕಾರ ಹಾಗೂ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರ ಭಾಗದಲ್ಲಿ/ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರದ ವಿನ್ಯಾಸ ಅನುಮೋದಿತ ಆಸ್ತಿ' },
  { value: '11A-4',  label: '11A Design approved property of Group/Mandal Panchayat on outskirts of the Local Planning Area before Date: 11.11.2014*',                                                                                                                                                                                     labelKn: '11A ದಿನಾಂಕ:11.11.2014 ರ ಪೂರ್ವದಲ್ಲಿ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರ ಭಾಗದಲ್ಲಿ ಗ್ರೂಪ್/ಮಂಡಲ ಪಂಚಾಯತಿಯ ವಿನ್ಯಾಸ ಅನುಮೋದಿತ ಆಸ್ತಿ*' },
  { value: '11A-5',  label: '11A Property in the Local Planning Area approved by the Group/Mandal Panchayat before 16-11-1992*',                                                                                                                                                                                                           labelKn: '11A ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದಲ್ಲಿ ದಿನಾಂಕ:16-11-1992ರ ಪೂರ್ವದಲ್ಲಿ ಗ್ರೂಪ್/ಮಂಡಲ ಪಂಚಾಯಿತಿಯಿಂದ ಅನುಮೋದನೆಯಾಗಿರುವ ಆಸ್ತಿ*' },
  { value: '11A-6',  label: '11A Property managed by Notified Area Committee/Notified Property prior the term of Mandal Panchayat*',                                                                                                                                                                                                       labelKn: '11A ಮಂಡಲ ಪಂಚಾಯತಿ ಅವಧಿಯ ಪೂರ್ವದಲ್ಲಿ ನೋಟಿ ಪೈಡ್ ಏರಿಯಾ ಸಮಿತಿಯಲ್ಲಿ ನಿರ್ವಹಿಸಲಾದ ಆಸ್ತಿ/ಅಧಿಸೂಚಿತ ಪ್ರದೇಶದ ಆಸ್ತಿ*' },
  { value: '11A-7',  label: '11A KIADB/KSSIDC Industrial Design Approved Property*',                                                                                                                                                                                                                                                      labelKn: '11A ಕೆಐಎಡಿಬಿ/ಕೆಎಎಸ್‌ಐಡಿಸಿ ಕೈಗಾರಿಕಾ ವಿನ್ಯಾಸ ಅನುಮೋದಿತ ಆಸ್ತಿ*' },
  { value: '11A-8',  label: '11A From 16.11.1992 to 14-06-2013 Gram Panchayat permission letter/approved building plan, building constructed land converted property',                                                                                                                                                                     labelKn: '11A ದಿನಾಂಕ:16.11.1992 ರಿಂದ ದಿನಾಂಕ:14-06-2013 ರವರೆಗೆ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಅನುಮತಿ ಪತ್ರ/ಅನುಮೋದಿತ ಕಟ್ಟಡ ನಕ್ಷೆಯ ಕಟ್ಟಡ ನಿರ್ಮಿತ ಭೂ ಪರಿವರ್ತಿತ ಆಸ್ತಿ' },
  { value: '11A-9',  label: '11A Property sanctioned under Section 94C/94CC/94D of the Karnataka Land Revenue Act, 1964',                                                                                                                                                                                                                  labelKn: '11A ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಕಾಯಿದೆ 1964ರ ಸೆಕ್ಷನ್ 94/94ರಡಿಯಲ್ಲಿ ಮಂಜೂರಾದ ಆಸ್ತಿ' },
  { value: '11A-10', label: '11A Rehabilitation Scheme Property*',                                                                                                                                                                                                                                                                        labelKn: '11A ಪುನರ್ವಸತಿ ಯೋಜನೆಯ ಆಸ್ತಿ*' },
  { value: '11A-11', label: '11A Podi as registered in partnership deed/Individual Family Property with Hissa Number (for Dakshina Kannada and Udupi District)*',                                                                                                                                                                         labelKn: '11A ಪಾಲುದಾರಿಕೆ ನೋಂದಾಯಿತ ಪತ್ರದಂತೆ ಪೋಡಿ/ಹಿಸ್ಸಾ ನಂಬರ್ ಪಡೆದ ವೈಯಕ್ತಿಕ ಕುಟುಂಬದ ಆಸ್ತಿ (ದಕ್ಷಿಣ ಕನ್ನಡ ಮತ್ತು ಉಡುಪಿ ಜಿಲ್ಲೆ)*' },
  { value: '11A-12', label: '11A Approved Property Panchayat design outside the local planning area from 11.11.2014 to with Gram 10.01.2025.',                                                                                                                                                                                            labelKn: '11A ದಿನಾಂಕ: 11.11.2014 ರಿಂದ ದಿನಾಂಕ:10.01.2025ರವರೆಗೆ ಸ್ಥಳೀಯ ಯೋಜನಾ ಪ್ರದೇಶದ ಹೊರ ಭಾಗದಲ್ಲಿ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಅನುಮೋದಿತ ಆಸ್ತಿ ವಿನ್ಯಾಸ*' },
  { value: '11A-13', label: '11A Central Government/State Government/Local Bodies Site/Building',                                                                                                                                                                                                                                          labelKn: '11A ಕೇಂದ್ರ ಸರ್ಕಾರ/ರಾಜ್ಯಸರ್ಕಾರ/ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳ ನಿವೇಶನ/ಕಟ್ಟಡ' },
  { value: '11A-14', label: '11A Property sanctioned under Section 3. 38(a) of the Karnataka Land Reforms Act, 1961',                                                                                                                                                                                                                     labelKn: '11A ಕರ್ನಾಟಕ ಭೂ-ಸುಧಾರಣಾ ಅಧಿನಿಯಮ 1961 ರ ಪ್ರಕರಣ 38ಎ ರಡಿಯಲ್ಲಿ ಮಂಜೂರಾದ ಆಸ್ತಿ' },
  { value: '11A-15', label: '11A Corporation/Board/Limited/Authority Site/Building*',                                                                                                                                                                                                                                                     labelKn: '11A ನಿಗಮ/ಮಂಡಳಿ/ನಿಯಮಿತ/ಪ್ರಾಧಿಕಾರ ದ ನಿವೇಶನ/ಕಟ್ಟಡ*' },
  { value: '11B-1',  label: '11B Violating the provisions of the Model Building Bye-laws & Constructing Buildings on agricultural land or on converted land',                                                                                                                                                                              labelKn: '11B ಮಾದರಿ ಕಟ್ಟಡ ಉಪವಿಧಿಗಳ ಉಪಬಂಧಗಳನ್ನು ಉಲ್ಲಂಘಿಸಿ ಕೃಷಿ ಜಮೀನಿನಲ್ಲಿನ ಅಥವಾ ಭೂ-ಪರಿವರ್ತಿತ ಜಮೀನಿನಲ್ಲಿನ ಕಟ್ಟಡಗಳು' },
  { value: '11B-2',  label: '11B Sites on converted/non-converted or agricultural land.',                                                                                                                                                                                                                                                 labelKn: '11B ಪರಿವರ್ತಿತ/ಪರಿವರ್ತನೆಯಿಲ್ಲದ ಅಥವಾ ಕೃಷಿ ಭೂಮಿಯಲ್ಲಿನ ನಿವೇಶನಗಳು.' },
  { value: '11B-3',  label: '11B Buildings acquired in violation of the provisions of the Model Building Bye-laws or without obtaining occupancy or completion certificate in a layout approved by the competent authority.',                                                                                                               labelKn: '11B ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರದಿಂದ ವಿನ್ಯಾಸ ಅನುಮೋದಿತ ಬಡಾವಣೆಯಲ್ಲಿ ಮಾದರಿ ಕಟ್ಟಡ ಉಪವಿಧಿಗಳ ಉಪಬಂಧಗಳನ್ನು ಉಲ್ಲಂಘಿಸಿ ಅಥವಾ ಅಧಿಬೋಗ ಅಥವಾ ಪೂರ್ಣಗೊಳಿಸಿದ ಪ್ರಮಾಣ ಪತ್ರವನ್ನು ಪಡೆಯದೆ ಸ್ವಾಧೀನಪಡಿಸಿಕೊಂಡ ಕಟ್ಟಡಗಳು.' },
  { value: '11B-4',  label: '11B Sites on revenue land/converted land without layout design approval, but with provision of basic amenities, parks, civic amenities, roads transferred free of cost to the Gram Panchayat under Section 17 of the Karnataka Town and Country Planning Act, 1961 through a surrender deed/transferred',  labelKn: '11B ಬಡಾವಣೆ ವಿನ್ಯಾಸ ಅನುಮೋದನೆಯಿಲ್ಲದ, ಆದರೆ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳನ್ನು ಒದಗಿಸಿ, ಕರ್ನಾಟಕ ನಗರ ಮತ್ತು ಗ್ರಾಮಾಂತರ ಯೋಜನಾ ಅಧಿನಿಯಮ, 1961 ರ ಪ್ರಕರಣ 17 ರನ್ವಯ ಗ್ರಾಮ ಪಂಚಾಯಿತಿಗೆ ವರ್ಗಾಯಿಸಿರುವ ಕಂದಾಯ ಭೂಮಿ/ಭೂ-ಪರಿವರ್ತಿತ ಜಮೀನಿನಲ್ಲಿನ ನಿವೇಶನಗಳು' },
  { value: '11B-5',  label: '11B Converted Land/Assumed Converted land(Single Site)',                                                                                                                                                                                                                                                     labelKn: '11B ಭೂ-ಪರಿವರ್ತಿತ / ಭಾವಿತ ಭೂ-ಪರಿವರ್ತಿತ ಜಮೀನುಗಳು (ಏಕ ನಿವೇಶನ)' },
];

/* ── Survey section mock data ───────────────────────────── */
const MOCK_RTC_OWNERS = [
  { ownerNo: '1', mainOwnerNo: '1', ownerName: 'Mohit Kumar Singh', fatherName: 'Kumar Singh', landCode: '6', extAcre: '0', extGunta: '4', extFgunta: '4' },
  { ownerNo: '2', mainOwnerNo: '2', ownerName: 'Mohit Singh',       fatherName: 'Kumar Singh', landCode: '7', extAcre: '0', extGunta: '4', extFgunta: '4' },
];

/* ── Section 4.2 dropdown options ──────────────────────── */
const TYPE_OPTIONS = [
  { value: 'site',      label: 'Site' },
  { value: 'building',  label: 'Building' },
  { value: 'converted', label: 'Land to be Converted' },
];

const CATEGORY_OPTIONS = [
  { value: 'residential',            label: 'Residential' },
  { value: 'commercial',             label: 'Commercial' },
  { value: 'parks',                  label: 'Parks' },
  { value: 'roads',                  label: 'Roads' },
  { value: 'civil-facilities',       label: 'Civil Facilities Area (CA Sites)' },
  { value: 'industry',               label: 'Industry' },
  { value: 'multi-ownership',        label: 'Multi-Ownership Building' },
  { value: 'non-residential',        label: 'Non-residential' },
  { value: 'agro-manufacturing',     label: 'An agro-based manufacturing unit' },
  { value: 'res-commercial',         label: 'Residential and Commercial' },
  { value: 'res-non-residential',    label: 'Residential and Non-Residential' },
  { value: 'comm-non-residential',   label: 'Commercial and Non-Residential' },
  { value: 'res-comm-non-res',       label: 'Residential, commercial and non-residential' },
  { value: 'res-industrial',         label: 'Residential and Industrial' },
  { value: 'comm-industry',          label: 'Commercial and Industry' },
  { value: 'res-comm-industrial',    label: 'Residential, Commercial and Industrial' },
  { value: 'apartment',              label: 'Apartment/ flat' },
  { value: 'villament',              label: 'Villament' },
  { value: 'tenement',               label: 'Tenement' },
  { value: 'row-house',              label: 'Row House' },
  { value: 'multi-storied',          label: 'Multi-storied building' },
  { value: 'service-apartment',      label: 'Service apartment/ flat' },
  { value: 'mall-multiplex',         label: 'Mall/Multiplex' },
  { value: 'villa',                  label: 'Villa' },
  { value: 'govt-property',          label: 'Central Government/State Government/Local Body Property' },
];

/* Allowed categories per property type (from mapping.md) */
const CATEGORY_BY_TYPE = {
  site: [
    'residential', 'commercial', 'industry', 'non-residential',
    'res-commercial', 'res-non-residential', 'comm-non-residential',
    'res-comm-non-res', 'res-industrial', 'comm-industry',
    'res-comm-industrial', 'govt-property',
  ],
  building: [
    'residential', 'commercial', 'industry', 'multi-ownership',
    'non-residential', 'agro-manufacturing',
    'res-commercial', 'res-non-residential', 'comm-non-residential',
    'res-comm-non-res', 'res-industrial', 'comm-industry',
    'res-comm-industrial', 'apartment', 'villament', 'tenement',
    'row-house', 'multi-storied', 'service-apartment', 'mall-multiplex',
    'villa', 'govt-property',
  ],
  converted: [
    'residential', 'commercial', 'industry', 'non-residential',
    'res-commercial', 'res-non-residential', 'comm-non-residential',
    'res-comm-non-res', 'res-industrial', 'comm-industry',
    'res-comm-industrial', 'govt-property',
  ],
};

/* Classifications where Parks, Roads and CA Sites categories are available */
const PARKS_ROADS_CA_CLASSIFICATIONS = new Set([
  '11A-3', '11A-4', '11A-5', '11A-7', '11A-12',
  '11B-4', '11B-5',
]);

const CORNER_SITE_OPTIONS = [
  { value: 'yes', label: 'Yes', labelKn: 'ಹೌದು' },
  { value: 'no',  label: 'No',  labelKn: 'ಇಲ್ಲ' },
];

/* ── Section 4.3 — Rebate dropdown options (from rebatesData.js) ─── */
// REBATE_PROPERTY_TYPE_OPTIONS, REBATE_CATEGORY_BY_TYPE, REBATE_DOCS_BY_DETAIL
// are imported above from rebatesData.js

/* General building categories — use the Building Area Details + storeys flow */
const GENERAL_BUILDING_CATEGORIES = new Set([
  'residential', 'commercial', 'parks', 'roads', 'civil-facilities',
  'industry', 'multi-ownership', 'non-residential', 'agro-manufacturing',
  'res-commercial', 'res-non-residential', 'comm-non-residential',
  'res-comm-non-res', 'res-industrial', 'comm-industry',
  'res-comm-industrial', 'govt-property',
]);

/* Helper: Building + Apartment flow detection */
const isBuildingApartmentFlow = (type, category) => {
  const apartmentCategories = [
    'apartment', 'villament', 'tenement', 'row-house',
    'multi-storied', 'service-apartment', 'villa',
  ];
  return type === 'building' && apartmentCategories.includes(category);
};

const PropertyClassificationPage = ({
  onNavigate,
  username = '',
  onBack,
  onNext,
  isBackEnabled = true,
  currentBCStep = 3,
  completedBCSteps = [],
  onBCStepClick,
  bcStepNames = [],
  completionResetKey = 0,
  step1Village = '',
  step0Classification = '',
  onResetDownstream,
}) => {
  const [isPageComplete, setIsPageComplete] = useState(false);

  const { t, lang } = useTranslation('step4');

  /* Lang-aware option arrays */
  const classificationOptions = CLASSIFICATION_OPTIONS.map(o => ({ ...o, label: lang === 'kn' ? o.labelKn : o.label }));
  const typeOptions     = TYPE_OPTIONS;
  const categoryOptions = (() => {
    const base = propertyType
      ? (CATEGORY_BY_TYPE[propertyType] || [])
          .map(v => CATEGORY_OPTIONS.find(o => o.value === v))
          .filter(Boolean)
      : CATEGORY_OPTIONS;
    if (!PARKS_ROADS_CA_CLASSIFICATIONS.has(classification)) return base;
    const existing = new Set(base.map(o => o.value));
    const extra = ['parks', 'roads', 'civil-facilities']
      .filter(v => !existing.has(v))
      .map(v => CATEGORY_OPTIONS.find(o => o.value === v))
      .filter(Boolean);
    return [...base, ...extra];
  })();
  const cornerOptions   = CORNER_SITE_OPTIONS.map(o => ({ ...o, label: lang === 'kn' ? o.labelKn : o.label }));
  const rebateTypeOptions = REBATE_PROPERTY_TYPE_OPTIONS.map(o => ({ ...o, label: lang === 'kn' ? o.labelKn : o.label }));
  const rebateCategoryOptions = (type) =>
    (REBATE_CATEGORY_BY_TYPE[type] || []).map(o => ({ ...o, label: lang === 'kn' ? o.labelKn : o.label }));

  /* ── 4.1 — Survey section state (hoisted before useEffects) ─ */
  const [villageVal, setVillageVal]         = useState('');
  const [surveyVal, setSurveyVal]           = useState('');
  const [surveySearched, setSurveySearched] = useState(false);
  const [surnocHissa, setSurnocHissa]       = useState('');
  const [surnocOptions, setSurnocOptions]   = useState([]);
  const [surnocLoading, setSurnocLoading]   = useState(false);
  const [manualHissa, setManualHissa]       = useState('');

  useEffect(() => {
    if (completionResetKey > 0) setIsPageComplete(false);
  }, [completionResetKey]);

  useEffect(() => {
    setVillageVal(step1Village || '');
  }, [step1Village]);

  /* Load Surnoc/Hissa options from API once survey is searched */
  useEffect(() => {
    if (!surveySearched) return;
    setSurnocLoading(true);
    setSurnocOptions([]);
    setSurnocHissa('');
    const timer = setTimeout(() => {
      setSurnocOptions([
        { value: '/A',  label: '/A'  },
        { value: '/B',  label: '/B'  },
        { value: '/2',  label: '/2'  },
        { value: '/4',  label: '/4'  },
        { value: '/5',  label: '/5'  },
      ]);
      setSurnocLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [surveySearched]);

  /* ── 4.1 — Classification ───────────────────────────────── */
  const [classification, setClassification] = useState('');

  /* Auto-fill from step 0 questionnaire result (only when field is empty) */
  useEffect(() => {
    if (step0Classification) {
      setClassification((prev) => prev || step0Classification);
    }
  }, [step0Classification]); // eslint-disable-line

  /* ── 4.1 — Doc uploads ──────────────────────────────────── */
  const [docUploads, setDocUploads] = useState({});
  const [viewFileDocIdx, setViewFileDocIdx] = useState(null);
  const [extraOtherDocs, setExtraOtherDocs] = useState([]);

  /* ── 4.1 — Survey section state (continued) ─────────────── */
  const [selectedOwners, setSelectedOwners] = useState(new Set());
  const [rtcFetchLocked, setRtcFetchLocked] = useState(false);
  const [rtcTableVisible, setRtcTableVisible] = useState(false);
  const [rtcOwnersAnswer, setRtcOwnersAnswer] = useState(null);
  const [s41FinalDone, setS41FinalDone]     = useState(false);

  /* ── 4.2 — Property Type ─────────────────────────────────── */
  const [propertyType, setPropertyType]         = useState('');
  const [propertyCategory, setPropertyCategory] = useState('');
  const [isCornerSite, setIsCornerSite]         = useState('');

  /* ── 4.2 — Building subsections ─────────────────────────── */
  const [areaData, setAreaData]                 = useState(null);
  const [areaSaved, setAreaSaved]               = useState(false);
  const [multiStoreySaved, setMultiStoreySaved] = useState(false);
  const [parkingSaved, setParkingSaved]         = useState(false);
  const [undividedSaved, setUndividedSaved]     = useState(false);
  const [escomSaved, setEscomSaved]             = useState(false);
  const [tenantSaved, setTenantSaved]           = useState(false);

  /* ── 4.2 — Non-apartment explicit save ───────────────────── */
  const [s42SavedNonApt,      setS42SavedNonApt]      = useState(false);
  const [generalBuildingSaved, setGeneralBuildingSaved] = useState(false);

  /* ── 4.3 — Avail Rebates ─────────────────────────────────── */
  const [availing, setAvailing]                 = useState(null);
  const [rebatePropertyType, setRebatePropertyType] = useState('');
  const [rebateCategory, setRebateCategory]         = useState('');
  const [rebateDocs, setRebateDocs]                 = useState({});
  const [viewRebateDocIdx, setViewRebateDocIdx]     = useState(null);

  /* ── 4.2 — Scroll refs ───────────────────────────────────── */
  const areaRef      = useRef(null);
  const multiRef     = useRef(null);
  const parkingRef   = useRef(null);
  const undividedRef = useRef(null);
  const escomRef     = useRef(null);
  const tenantRef    = useRef(null);
  const s43Ref       = useRef(null);
  const saveRef      = useRef(null);

  /* ── Modal state ─────────────────────────────────────────── */
  const [modalOpen, setModalOpen]           = useState(false);
  const [history, setHistory]               = useState([]);
  const [currentId, setCurrentId]           = useState('q_who');
  const [selectedOption, setSelectedOption] = useState(null);

  /* ── Section 4.1 edit warning ────────────────────────────── */
  const [showWarn41, setShowWarn41] = useState(false);

  /* ── Classification dropdown change warning ──────────────── */
  const [showClassWarn, setShowClassWarn]               = useState(false);
  const [pendingClassification, setPendingClassification] = useState('');

  /* ── Property Type / Category change warnings ────────────── */
  const [showTypeWarn, setShowTypeWarn]       = useState(false);
  const [pendingType, setPendingType]         = useState('');
  const [showCategoryWarn, setShowCategoryWarn] = useState(false);
  const [pendingCategory, setPendingCategory] = useState('');

  /* ── Derived ─────────────────────────────────────────────── */
  const node           = nodes[currentId];
  const isResult       = node?.type === 'result';
  const resultDocs     = isResult && !node.noDoc ? (DOCS[node.code] || []) : [];
  const resultFormType = isResult
    ? node.code.startsWith('11A') ? 'Form 11A' : 'Form 11B'
    : '';

  const classificationEntry = classification
    ? Object.values(CLASSIFICATION_DATA).flat().find(c => c.id === classification)
    : null;
  const currentDocs = classificationEntry ? classificationEntry.documents : [];

  /* True when the current classification has an "Other Documents" row */
  const hasOtherDocs = currentDocs.some(d => d.name.includes('Other Documents'));

  /* Add-row button enabled only when there are no extra rows yet, or the last extra row is fully filled */
  const lastExtraRow = extraOtherDocs[extraOtherDocs.length - 1];
  const canAddExtraRow = !lastExtraRow || (
    !!lastExtraRow.name.trim() &&
    !!lastExtraRow.date &&
    !!lastExtraRow.docNo.trim() &&
    lastExtraRow.uploadStatus === 'success'
  );

  const allMandatoryUploaded =
    !!classification &&
    (currentDocs.length === 0 ||
      currentDocs.every((doc, i) =>
        doc.required === 'OPTIONAL' || docUploads[i]?.uploadStatus === 'success'
      ));

  /* Grama Thana (11A-1) skips survey entirely */
  const isGramaThana = classification === '11A-1';

  /* Survey 99 → Bhoomi not fetched, manual entry */
  const isNoRTCFetch = surveySearched && surveyVal.trim() === '99';

  /* survey section visible only once docs complete AND not Grama Thana */
  const surveyVisible = allMandatoryUploaded && !isGramaThana;

  /* ── Classification change ───────────────────────────────── */
  const handleClassificationChange = (e) => {
    const newVal = e.target.value;
    const hasData = Object.keys(docUploads).length > 0 || surveySearched || s41FinalDone;
    if (hasData) {
      setPendingClassification(newVal);
      setShowClassWarn(true);
    } else {
      setClassification(newVal);
      setDocUploads({});
      setExtraOtherDocs([]);
      resetSurvey();
    }
  };

  const resetSurvey = () => {
    setVillageVal(step1Village || ''); setSurveyVal(''); setSurveySearched(false);
    setSurnocHissa(''); setSurnocOptions([]); setSurnocLoading(false); setSelectedOwners(new Set());
    setRtcFetchLocked(false); setRtcTableVisible(false);
    setRtcOwnersAnswer(null); setS41FinalDone(false);
    setPropertyType(''); setPropertyCategory(''); setIsCornerSite('');
    setAreaData(null); setAreaSaved(false);
    setMultiStoreySaved(false); setParkingSaved(false);
    setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
  };

  /* ── Doc field handlers ──────────────────────────────────── */
  const handleDocFieldChange = (docIdx, field, value) => {
    setDocUploads((prev) => ({ ...prev, [docIdx]: { ...prev[docIdx], [field]: value } }));
  };

  const handleDocFileUpload = (docIdx) => {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = '.pdf';
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) {
        setDocUploads((prev) => ({ ...prev, [docIdx]: { ...prev[docIdx], fileName: file.name, uploadStatus: 'error' } }));
      } else {
        setDocUploads((prev) => ({ ...prev, [docIdx]: { ...prev[docIdx], fileName: file.name, uploadStatus: 'success' } }));
      }
    };
    input.click();
  };

  const handleDocRemoveFile = (docIdx) => {
    setDocUploads((prev) => {
      const next = { ...prev };
      if (next[docIdx]) next[docIdx] = { ...next[docIdx], fileName: null, uploadStatus: null };
      return next;
    });
  };

  /* ── Extra "Other Documents" row handlers ────────────────── */
  const handleExtraOtherDocChange = (idx, field, value) => {
    setExtraOtherDocs(prev => prev.map((d, i) => i === idx ? { ...d, [field]: value } : d));
  };

  const handleExtraOtherDocUpload = (idx) => {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = '.pdf';
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const status = file.size > 5 * 1024 * 1024 ? 'error' : 'success';
      setExtraOtherDocs(prev => prev.map((d, i) => i === idx ? { ...d, fileName: file.name, uploadStatus: status } : d));
    };
    input.click();
  };

  const handleExtraOtherDocRemoveFile = (idx) => {
    setExtraOtherDocs(prev => prev.map((d, i) => i === idx ? { ...d, fileName: null, uploadStatus: null } : d));
  };

  /* ── 4.3 rebate doc upload handlers ─────────────────────── */
  const handleRebateDocUpload = (docIdx, file) => {
    const status = file.size > 5 * 1024 * 1024 ? 'error' : 'success';
    setRebateDocs((prev) => ({ ...prev, [docIdx]: { ...prev[docIdx], fileName: file.name, uploadStatus: status } }));
  };

  const handleRebateDocRemove = (docIdx) => {
    setRebateDocs((prev) => ({
      ...prev,
      [docIdx]: { ...prev[docIdx], fileName: null, uploadStatus: null },
    }));
  };

  const handleRebateDocFieldChange = (docIdx, field, value) => {
    setRebateDocs((prev) => ({ ...prev, [docIdx]: { ...prev[docIdx], [field]: value } }));
  };

  /* ── Survey handlers ─────────────────────────────────────── */
  const handleSurveySearch = () => {
    if (villageVal && surveyVal) setSurveySearched(true);
  };

  const handleClearSurvey = () => {
    setSurveySearched(false);
    setSurnocHissa('');
    setSurnocOptions([]);
    setSurnocLoading(false);
    setRtcFetchLocked(false);
    setRtcTableVisible(false);
    setRtcOwnersAnswer(null);
    setSelectedOwners(new Set());
    setManualHissa('');
  };

  const handleFetchRTC = () => {
    setRtcFetchLocked(true);
    setRtcTableVisible(true);
  };

  const handleRTCEdit = () => {
    setRtcFetchLocked(false);
    setRtcTableVisible(false);
    setRtcOwnersAnswer(null);
    setS41FinalDone(false);
    setSurnocHissa('');
    setSelectedOwners(new Set());
    setManualHissa('');
  };

  const handleS41FinalSave = () => {
    setS41FinalDone(true);
  };

  /* 4.1 Edit — show warning first */
  const handleS41EditClick = () => {
    setShowWarn41(true);
  };

  const handleWarn41Confirm = () => {
    setShowWarn41(false);
    setS41FinalDone(false);
    setIsPageComplete(false);
    setPropertyType(''); setPropertyCategory(''); setIsCornerSite('');
    setAreaData(null); setAreaSaved(false);
    setMultiStoreySaved(false); setParkingSaved(false);
    setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
    setS42SavedNonApt(false); setGeneralBuildingSaved(false);
    setAvailing(null); setRebatePropertyType(''); setRebateCategory(''); setRebateDocs({});
  };

  const handleWarn41Cancel = () => {
    setShowWarn41(false);
  };

  /* ── 4.2 scroll helper ───────────────────────────────────── */
  const scrollTo42 = (ref) =>
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);

  /* ── 4.2 derived state ───────────────────────────────────── */
  const allDropdownsSelected = propertyType && propertyCategory && isCornerSite;
  const showBuildingApartmentFlow =
    allDropdownsSelected && isBuildingApartmentFlow(propertyType, propertyCategory);
  const isGeneralBuildingFlow =
    allDropdownsSelected &&
    propertyType === 'building' &&
    GENERAL_BUILDING_CATEGORIES.has(propertyCategory);
  // s42Done: apartment → tenantSaved; general building → generalBuildingSaved; others → s42SavedNonApt
  const s42Done = tenantSaved || generalBuildingSaved || s42SavedNonApt;

  /* ── 4.3 derived state ───────────────────────────────────── */
  const currentRebateDocs = rebateCategory ? (REBATE_DOCS_BY_DETAIL[rebateCategory] || []) : [];
  const allRebateMandatoryUploaded =
    currentRebateDocs.length === 0 ||
    currentRebateDocs.every((doc, i) => {
      if (doc.required === 'OPTIONAL') return true;
      const d = rebateDocs[i];
      return d?.uploadStatus === 'success' && !!d?.docNo?.trim() && !!d?.issuedDate;
    });
  const s43Done =
    availing === 'no' ||
    (availing === 'yes' && !!rebatePropertyType && !!rebateCategory && allRebateMandatoryUploaded);
  const allSaved = s42Done && s43Done;

  /* ── 4.2 scroll effects ──────────────────────────────────── */
  useEffect(() => { if (allDropdownsSelected) scrollTo42(areaRef); }, [allDropdownsSelected]);
  useEffect(() => { if (areaSaved) scrollTo42(multiRef); }, [areaSaved]);
  useEffect(() => { if (multiStoreySaved) scrollTo42(parkingRef); }, [multiStoreySaved]);
  useEffect(() => { if (parkingSaved) scrollTo42(undividedRef); }, [parkingSaved]);
  useEffect(() => { if (undividedSaved) scrollTo42(escomRef); }, [undividedSaved]);
  useEffect(() => { if (escomSaved) scrollTo42(tenantRef); }, [escomSaved]);
  useEffect(() => { if (s42SavedNonApt) scrollTo42(s43Ref); }, [s42SavedNonApt]);
  useEffect(() => { if (s42Done) scrollTo42(s43Ref); }, [s42Done]);

  /* ── 4.2 subsection edit handlers ───────────────────────── */
  const handleAreaEdit = () => {
    setAreaSaved(false); setMultiStoreySaved(false); setParkingSaved(false);
    setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
  };
  const handleMultiStoreyEdit = () => {
    setMultiStoreySaved(false); setParkingSaved(false);
    setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
  };
  const handleParkingEdit = () => {
    setParkingSaved(false); setUndividedSaved(false);
    setEscomSaved(false); setTenantSaved(false);
  };
  const handleUndividedEdit = () => {
    setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
  };
  const handleEscomEdit = () => { setEscomSaved(false); setTenantSaved(false); };
  const handleTenantEdit = () => { setTenantSaved(false); };

  const handleS42FinalSave = () => {
    setIsPageComplete(true);
    onNext?.();
  };

  /* ── Modal handlers ──────────────────────────────────────── */
  const openModal  = () => { setHistory([]); setCurrentId('q_who'); setSelectedOption(null); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);

  const handleNext = () => {
    if (selectedOption === null) return;
    const nextId = node.options[selectedOption].next;
    setHistory((h) => [...h, { nodeId: currentId }]);
    setCurrentId(nextId);
    setSelectedOption(null);
  };
  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setCurrentId(prev.nodeId);
    setSelectedOption(null);
  };
  const handleRestart = () => { setHistory([]); setCurrentId('q_who'); setSelectedOption(null); };

  const handleConfirmClassification = () => {
    if (node?.code) {
      setClassification(node.code);
      setDocUploads({});
      resetSurvey();
    }
    closeModal();
  };

  return (
    <div className="pc-page">
      <NavigationBar variant="postLogin" username={username} onNavigate={onNavigate} onLogout={() => onNavigate?.('login')} />

      <Stepper steps={bcStepNames} activeStep={currentBCStep} completedBCSteps={completedBCSteps} onStepClick={onBCStepClick} />

      <StepHeader
        step={t('step4_step_label')}
        title={t('step4_title')}
        onBack={onBack}
        onNext={onNext}
        isBackEnabled={isBackEnabled}
        isNextEnabled={isPageComplete}
      />

      <div className="pc-page__sections">

        {/* ═══ SECTION 4.1 ═══════════════════════════════════════ */}
        <SectionBox number="4.1" title={t('s41_title')} open className="pc-s41-box">
          <div className="pc-s41">

            {/* Find My Classification */}
            <div className="pc-s41__find-group">
              <InfoBox variant="outline">
                {t('s41_infobox1')}
              </InfoBox>
              <div className="pc-s41__find-btn-wrap">
                <Button variant="primary" onClick={openModal}>{t('s41_find_btn')}</Button>
              </div>
            </div>

            <InfoBox variant="outline">
              {t('s41_infobox2')}
            </InfoBox>

            {/* Classification dropdown */}
            <div className="pc-s41__dropdown-section">
              <p className="pc-s41__dropdown-label">
                {t('s41_classification_label')}<span className="pc-s41__required"> *</span>
              </p>
              <div className="pc-s41__dropdown-wrap">
                <Dropdown
                  placeholder={t('s41_classification_ph')}
                  options={classificationOptions}
                  value={classification}
                  onChange={handleClassificationChange}
                />
              </div>
            </div>

            {/* Documents section — reveals when classification chosen */}
            {classification && (
              <>
                <p className="pc-s41__doc-instruction">
                  {t('s41_doc_instruction')}
                </p>

                {currentDocs.length > 0 ? (
                  <div className="pc-s41__table-wrap">
                    <table className="pc-doc-table">
                      <thead>
                        <tr className="pc-doc-table__header">
                          <th className="pc-doc-table__th pc-doc-table__th--sl">{t('s41_table_sl')}</th>
                          <th className="pc-doc-table__th pc-doc-table__th--type">{t('s41_table_doc_type')}</th>
                          <th className="pc-doc-table__th pc-doc-table__th--date">{t('s41_table_reg_date')}</th>
                          <th className="pc-doc-table__th pc-doc-table__th--no">{t('s41_table_doc_no')}</th>
                          <th className="pc-doc-table__th pc-doc-table__th--upload">{t('s41_table_upload')}</th>
                          <th className="pc-doc-table__th pc-doc-table__th--view">{t('s41_table_view')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentDocs.map((doc, i) => {
                          const d = docUploads[i] || {};
                          return (
                            <tr key={i}>
                              <td className="pc-doc-table__td pc-doc-table__td--sl">{i + 1}</td>
                              <td className="pc-doc-table__td pc-doc-table__td--type">
                                {lang === 'kn' ? doc.nameKn : doc.name}{doc.required === 'COMPULSORY' && <span className="pc-doc__required"> *</span>}
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--date">
                                <DatePicker
                                  value={d.date || ''}
                                  onChange={(e) => handleDocFieldChange(i, 'date', e.target.value)}
                                />
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--no">
                                <Input
                                  placeholder={t('s41_doc_no_ph')}
                                  value={d.docNo || ''}
                                  onChange={(e) => handleDocFieldChange(i, 'docNo', e.target.value)}
                                  inputType="alphanumeric-code"
                                />
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--upload">
                                {d.fileName ? (
                                  <div className="pc-doc__upload-cell">
                                    <div className="pc-doc__file-chip">
                                      <span className="pc-doc__file-name">{d.fileName}</span>
                                      <button type="button" className="pc-doc__file-remove" onClick={() => handleDocRemoveFile(i)}>
                                        <span className="material-icons-outlined">close</span>
                                      </button>
                                    </div>
                                    {d.uploadStatus === 'success'
                                      ? <CaptionMessage variant="success">{t('s41_upload_success')}</CaptionMessage>
                                      : <CaptionMessage variant="error">{t('s41_upload_size_error')}</CaptionMessage>
                                    }
                                  </div>
                                ) : (
                                  <div className="pc-doc__upload-cell">
                                    <Button variant="white" icon="upload_file" onClick={() => handleDocFileUpload(i)}>
                                      {t('s41_upload_file_btn')}
                                    </Button>
                                    <CaptionMessage variant="info">{t('s41_upload_info')}</CaptionMessage>
                                  </div>
                                )}
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--view">
                                <button
                                  type="button"
                                  className={`pc-view-icon ${d.uploadStatus === 'success' ? 'pc-view-icon--active' : 'pc-view-icon--inactive'}`}
                                  disabled={d.uploadStatus !== 'success'}
                                  onClick={() => d.uploadStatus === 'success' && setViewFileDocIdx(i)}
                                >
                                  <span className="material-icons-outlined">visibility</span>
                                </button>
                              </td>
                            </tr>
                          );
                        })}

                        {/* ── Extra "Other Documents" rows (editable name) ── */}
                        {hasOtherDocs && extraOtherDocs.map((extra, i) => {
                          const slNo = currentDocs.length + i + 1;
                          return (
                            <tr key={`extra-${i}`}>
                              <td className="pc-doc-table__td pc-doc-table__td--sl">{slNo}</td>
                              <td className="pc-doc-table__td pc-doc-table__td--type">
                                <Input
                                  placeholder={t('s41_doc_name_ph')}
                                  value={extra.name}
                                  onChange={(e) => handleExtraOtherDocChange(i, 'name', e.target.value)}
                                  inputType="text"
                                  disabled={s41FinalDone}
                                />
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--date">
                                <DatePicker
                                  value={extra.date || ''}
                                  onChange={(e) => handleExtraOtherDocChange(i, 'date', e.target.value)}
                                />
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--no">
                                <Input
                                  placeholder={t('s41_doc_no_ph')}
                                  value={extra.docNo}
                                  onChange={(e) => handleExtraOtherDocChange(i, 'docNo', e.target.value)}
                                  inputType="alphanumeric-code"
                                  disabled={s41FinalDone}
                                />
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--upload">
                                {extra.fileName ? (
                                  <div className="pc-doc__upload-cell">
                                    <div className="pc-doc__file-chip">
                                      <span className="pc-doc__file-name">{extra.fileName}</span>
                                      <button type="button" className="pc-doc__file-remove" onClick={() => handleExtraOtherDocRemoveFile(i)}>
                                        <span className="material-icons-outlined">close</span>
                                      </button>
                                    </div>
                                    {extra.uploadStatus === 'success'
                                      ? <CaptionMessage variant="success">{t('s41_upload_success')}</CaptionMessage>
                                      : <CaptionMessage variant="error">{t('s41_upload_size_error')}</CaptionMessage>
                                    }
                                  </div>
                                ) : (
                                  <div className="pc-doc__upload-cell">
                                    <Button variant="white" icon="upload_file" onClick={() => handleExtraOtherDocUpload(i)}>
                                      {t('s41_upload_file_btn')}
                                    </Button>
                                    <CaptionMessage variant="info">{t('s41_upload_info')}</CaptionMessage>
                                  </div>
                                )}
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--view">
                                <button
                                  type="button"
                                  className={`pc-view-icon ${extra.uploadStatus === 'success' ? 'pc-view-icon--active' : 'pc-view-icon--inactive'}`}
                                  disabled={extra.uploadStatus !== 'success'}
                                >
                                  <span className="material-icons-outlined">visibility</span>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    {/* ── Add row button — only for classifications with "Other Documents" ── */}
                    {hasOtherDocs && !s41FinalDone && (
                      <div className="pc-doc-table__action">
                        <button
                          type="button"
                          className="pc-doc__add-icon-btn"
                          disabled={!canAddExtraRow}
                          onClick={() => setExtraOtherDocs(prev => [
                            ...prev,
                            { name: '', date: '', docNo: '', fileName: null, uploadStatus: null },
                          ])}
                        >
                          <span className="material-icons-outlined">add</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="pc-s41__no-docs">{t('s41_no_docs')}</p>
                )}
              </>
            )}

            {/* ── Grama Thana: skip survey, show Save and Next directly ── */}
            {allMandatoryUploaded && isGramaThana && (
              <div className="pc-s42__actions">
                <Button
                  variant="primary"
                  disabled={s41FinalDone}
                  onClick={handleS41FinalSave}
                >
                  {t('btn_save_next')}
                </Button>
                <Button
                  variant="error"
                  disabled={!s41FinalDone}
                  onClick={handleS41EditClick}
                >
                  {t('btn_edit')}
                </Button>
              </div>
            )}

            {/* ── Survey Number Details — reveals when docs complete ── */}
            {surveyVisible && (
              <div className="pc-s41__survey-section">
                <div className="pc-s41__survey-divider" />
                <p className="pc-s41__survey-heading">{t('s41_survey_heading')}</p>

                {/* Stage 1: Village + Survey + Search + Tooltip */}
                <div className="pc-s42__village-and-search">
                  <div className="pc-s42__village-input">
                    <Input
                      label={t('s41_village_label')}
                      value={villageVal}
                      frozen
                    />
                  </div>

                  <div className="pc-s42__survey-row">
                    <div className="pc-s42__survey-group">
                      <div className="pc-s42__survey-input-wrap">
                        <Input
                          label={t('s41_survey_label')}
                          value={surveyVal}
                          onChange={(e) => setSurveyVal(e.target.value)}
                          placeholder={t('s41_survey_ph')}
                          inputType="alphanumeric-code"
                          disabled={surveySearched}
                          trailingIcon={surveySearched ? 'close' : undefined}
                          onTrailingIconClick={surveySearched ? handleClearSurvey : undefined}
                          trailingIconClassName="pd-s31__close-icon"
                        />
                      </div>
                      <Button
                        variant="primary"
                        disabled={surveySearched || !villageVal || !surveyVal}
                        onClick={handleSurveySearch}
                      >
                        {t('btn_search')}
                      </Button>
                    </div>
                    <Tooltip
                      label={t('s41_survey_tooltip')}
                      caption={t('bd_tooltip_click')}
                      className="pc-s42__tooltip"
                    />
                  </div>
                </div>

                {/* Stage 2a: Normal flow — Surnoc/Hissa dropdown + Fetch */}
                {surveySearched && !isNoRTCFetch && (
                  <div className="pc-s42__surnoc-section">
                    <div className="pc-s42__surnoc-row">
                      <div className="pc-s42__surnoc-input-wrap">
                        {surnocLoading ? (
                          <ProgressCircle size="small" />
                        ) : (
                          <Dropdown
                            label={t('s41_surnoc_label')}
                            required
                            options={surnocOptions}
                            value={surnocHissa}
                            onChange={(e) => setSurnocHissa(e.target.value)}
                            placeholder={t('s41_surnoc_ph')}
                            disabled={rtcFetchLocked}
                          />
                        )}
                      </div>
                      <Tooltip
                        label={t('s41_surnoc_tooltip')}
                        caption={t('bd_tooltip_click')}
                        className="pc-s42__surnoc-tooltip"
                      />
                    </div>

                    <div className="pc-s42__fetch-row">
                      <Button
                        variant="primary"
                        disabled={rtcFetchLocked || !surnocHissa}
                        onClick={handleFetchRTC}
                      >
                        {t('s41_fetch_rtc_btn')}
                      </Button>
                      <Button variant="error" disabled={!rtcFetchLocked} onClick={handleRTCEdit}>
                        {t('btn_edit')}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Stage 2b: No-fetch flow (survey 99) — InfoBox + manual Surnoc/Hissa */}
                {isNoRTCFetch && (
                  <div className="pc-s42__surnoc-section">
                    <InfoBox variant="error">
                      {t('s41_no_fetch_infobox')}
                    </InfoBox>
                    <div className="pc-s42__no-fetch-row">
                      <div className="pc-s42__no-fetch-inputs">
                        <div className="pc-s42__frozen-field">
                          <Input label={t('s41_surnoc_no_label')} value="/" frozen />
                        </div>
                        <div className="pc-s42__hissa-input-wrap">
                          <Input
                            label={t('s41_hissa_no_label')}
                            value={manualHissa}
                            onChange={(e) => setManualHissa(e.target.value)}
                            placeholder={t('s41_hissa_ph')}
                            required
                            disabled={s41FinalDone}
                          />
                        </div>
                      </div>
                      <Tooltip
                        label={t('s41_manual_surnoc_tooltip')}
                        caption={t('bd_tooltip_click')}
                        className="pc-s42__surnoc-tooltip"
                      />
                    </div>
                  </div>
                )}

                {/* Stage 3: frozen fields + RTC Owner table + Yes/No question */}
                {rtcTableVisible && (
                  <>
                    <div className="pc-s42__frozen-row">
                      <div className="pc-s42__frozen-field">
                        <Input label={t('s41_survey_no_frozen_label')} value={surveyVal} frozen />
                      </div>
                      <div className="pc-s42__frozen-field">
                        <Input label={t('s41_surnoc_no_label')} value="/" frozen />
                      </div>
                      <div className="pc-s42__frozen-field">
                        <Input label={t('s41_hissa_no_label')} value={surnocHissa.replace('/', '')} frozen />
                      </div>
                    </div>

                    <div className="pc-s42__rtc-table-wrap">
                      <table className="pc-rtc-table">
                        <thead>
                          <tr className="pc-rtc-table__header">
                            <th className="pc-rtc-table__th pc-rtc-table__th--cb">{t('s41_rtc_select')}</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--ownerNo">{t('s41_rtc_owner_no')}</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--mainOwnerNo">{t('s41_rtc_main_owner_no')}</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--ownerName">{t('s41_rtc_owner_name')}</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--fatherName">{t('s41_rtc_father_name')}</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--landCode">{t('s41_rtc_land_code')}</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--acre">{t('s41_rtc_acre')}</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--gunta">{t('s41_rtc_gunta')}</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--fgunta">{t('s41_rtc_fgunta')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {MOCK_RTC_OWNERS.map((owner, idx) => (
                            <tr key={idx}>
                              <td className="pc-rtc-table__td pc-rtc-table__td--cb">
                                <Checkbox
                                  checked={selectedOwners.has(idx)}
                                  onChange={(e) => {
                                    setSelectedOwners((prev) => {
                                      const next = new Set(prev);
                                      if (e.target.checked) next.add(idx);
                                      else next.delete(idx);
                                      return next;
                                    });
                                  }}
                                />
                              </td>
                              <td className="pc-rtc-table__td">{owner.ownerNo}</td>
                              <td className="pc-rtc-table__td">{owner.mainOwnerNo}</td>
                              <td className="pc-rtc-table__td">{owner.ownerName}</td>
                              <td className="pc-rtc-table__td">{owner.fatherName}</td>
                              <td className="pc-rtc-table__td">{owner.landCode}</td>
                              <td className="pc-rtc-table__td">{owner.extAcre}</td>
                              <td className="pc-rtc-table__td">{owner.extGunta}</td>
                              <td className="pc-rtc-table__td">{owner.extFgunta}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="pc-s42__radio-group">
                      <p className="pc-s42__radio-question">
                        {t('s41_rtc_question')}
                      </p>
                      <div className="pc-s42__radio-row">
                        <RadioButton
                          label={t('btn_yes')}
                          name="rtc-owners"
                          value="yes"
                          checked={rtcOwnersAnswer === 'yes'}
                          onChange={() => setRtcOwnersAnswer('yes')}
                          disabled={s41FinalDone}
                        />
                        <RadioButton
                          label={t('btn_no')}
                          name="rtc-owners"
                          value="no"
                          checked={rtcOwnersAnswer === 'no'}
                          onChange={() => setRtcOwnersAnswer('no')}
                          disabled={s41FinalDone}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* ── Save and Next: normal RTC flow ── */}
                {rtcTableVisible && !isNoRTCFetch && (
                  <div className="pc-s42__actions">
                    <Button
                      variant="primary"
                      disabled={s41FinalDone || !rtcOwnersAnswer}
                      onClick={handleS41FinalSave}
                    >
                      {t('btn_save_next')}
                    </Button>
                    <Button
                      variant="error"
                      disabled={!s41FinalDone}
                      onClick={handleS41EditClick}
                    >
                      {t('btn_edit')}
                    </Button>
                  </div>
                )}

                {/* ── Save and Next: no-fetch flow ── */}
                {isNoRTCFetch && manualHissa.trim() !== '' && (
                  <div className="pc-s42__actions">
                    <Button
                      variant="primary"
                      disabled={s41FinalDone}
                      onClick={handleS41FinalSave}
                    >
                      {t('btn_save_next')}
                    </Button>
                    <Button
                      variant="error"
                      disabled={!s41FinalDone}
                      onClick={handleS41EditClick}
                    >
                      {t('btn_edit')}
                    </Button>
                  </div>
                )}
              </div>
            )}

          </div>
        </SectionBox>

        {/* ═══ SECTION 4.2 ═══════════════════════════════════════ */}
        <SectionBox number="4.2" title={t('s42_title')} open={s41FinalDone} className="pc-s42-box">
          {s41FinalDone && (
            <div className="pc-s42__body">

              {/* ── Three opening dropdowns ── */}
              <div className="pc-s42__dropdowns-row">
                <div className="pc-s42__dropdown-item">
                  <Dropdown
                    label={t('s42_prop_type_label')}
                    placeholder={t('s42_prop_type_ph')}
                    options={typeOptions}
                    value={propertyType}
                    onChange={(e) => {
                      const newVal = e.target.value;
                      const hasS42Data = areaSaved || multiStoreySaved || parkingSaved || undividedSaved
                        || escomSaved || tenantSaved || s42SavedNonApt || generalBuildingSaved;
                      if (hasS42Data) {
                        setPendingType(newVal);
                        setShowTypeWarn(true);
                      } else {
                        setPropertyType(newVal);
                        setPropertyCategory('');
                        setAreaSaved(false); setMultiStoreySaved(false); setParkingSaved(false);
                        setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
                        setS42SavedNonApt(false); setGeneralBuildingSaved(false);
                        setAvailing(null); setRebatePropertyType(''); setRebateCategory(''); setRebateDocs({});
                      }
                    }}
                    required
                  />
                </div>
                <div className="pc-s42__dropdown-item">
                  <Dropdown
                    label={t('s42_prop_cat_label')}
                    placeholder={t('s42_prop_cat_ph')}
                    options={categoryOptions}
                    value={propertyCategory}
                    onChange={(e) => {
                      const newVal = e.target.value;
                      const hasS42Data = areaSaved || multiStoreySaved || parkingSaved || undividedSaved
                        || escomSaved || tenantSaved || s42SavedNonApt || generalBuildingSaved;
                      if (hasS42Data) {
                        setPendingCategory(newVal);
                        setShowCategoryWarn(true);
                      } else {
                        setPropertyCategory(newVal);
                        setAreaSaved(false); setMultiStoreySaved(false); setParkingSaved(false);
                        setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
                        setS42SavedNonApt(false); setGeneralBuildingSaved(false);
                        setAvailing(null); setRebatePropertyType(''); setRebateCategory(''); setRebateDocs({});
                      }
                    }}
                    required
                  />
                </div>
                <div className="pc-s42__dropdown-item">
                  <Dropdown
                    label={t('s42_corner_label')}
                    placeholder={t('s42_corner_ph')}
                    options={cornerOptions}
                    value={isCornerSite}
                    onChange={(e) => {
                      setIsCornerSite(e.target.value);
                      setS42SavedNonApt(false); setGeneralBuildingSaved(false);
                      setAvailing(null); setRebatePropertyType(''); setRebateCategory(''); setRebateDocs({});
                    }}
                    required
                  />
                </div>
              </div>

              {/* ── General Building flow (Residential, Commercial, etc.) ── */}
              {isGeneralBuildingFlow && (
                <>
                  <InfoBox variant="blue">
                    {t('s42_sale_deed_infobox')}
                  </InfoBox>
                  <BuildingDetails_GeneralFlow
                    onSave={() => setGeneralBuildingSaved(true)}
                    onEdit={() => setGeneralBuildingSaved(false)}
                  />
                </>
              )}

              {/* ── Building + Apartment flow ── */}
              {showBuildingApartmentFlow && (
                <>
                  <InfoBox variant="blue">
                    {t('s42_sale_deed_infobox')}
                  </InfoBox>

                  {/* Building Area Details */}
                  <div ref={areaRef} className="pc-s42__section">
                    <p className="pc-s42__section-title">{t('s42_building_area_title')}</p>
                    <BuildingDetails_AreaDetails
                      onSave={(data) => { setAreaData(data); setAreaSaved(true); }}
                      onEdit={handleAreaEdit}
                    />
                  </div>

                  {/* Details of Usage of Multi-Storey Flat */}
                  <div className="pc-s42__divider" />
                  {areaSaved ? (
                    <div ref={multiRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">{t('s42_multi_storey_title')}</p>
                      <BuildingDetails_MultiStoreyUsage
                        onChange={(filled) => {
                          setMultiStoreySaved(filled);
                          if (!filled) { setParkingSaved(false); setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false); }
                        }}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">{t('s42_multi_storey_title')}</p>
                  )}

                  {/* Parking Details */}
                  <div className="pc-s42__divider" />
                  {multiStoreySaved ? (
                    <div ref={parkingRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">{t('s42_parking_title')}</p>
                      <BuildingDetails_ParkingDetails
                        onChange={(filled) => {
                          setParkingSaved(filled);
                          if (!filled) { setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false); }
                        }}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">{t('s42_parking_title')}</p>
                  )}

                  {/* Undivided Land Details */}
                  <div className="pc-s42__divider" />
                  {parkingSaved ? (
                    <div ref={undividedRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">{t('s42_undivided_title')}</p>
                      <BuildingDetails_UndividedLand
                        onChange={(filled) => {
                          setUndividedSaved(filled);
                          if (!filled) { setEscomSaved(false); setTenantSaved(false); }
                        }}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">{t('s42_undivided_title')}</p>
                  )}

                  {/* ESCOM Details */}
                  <div className="pc-s42__divider" />
                  {undividedSaved ? (
                    <div ref={escomRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">{t('s42_escom_title')}</p>
                      <BuildingDetails_ESCOMDetails
                        aboveComplete={true}
                        onSave={() => setEscomSaved(true)}
                        onEdit={handleEscomEdit}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">{t('s42_escom_title')}</p>
                  )}

                  {/* Tenant Details */}
                  <div className="pc-s42__divider" />
                  {escomSaved ? (
                    <div ref={tenantRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">{t('s42_tenant_title')}</p>
                      <BuildingDetails_TenantDetails
                        onSave={() => setTenantSaved(true)}
                        onEdit={handleTenantEdit}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">{t('s42_tenant_title')}</p>
                  )}
                </>
              )}

              {/* ── Site / Land to Convert (non-building) — Save & Edit ── */}
              {allDropdownsSelected && !showBuildingApartmentFlow && !isGeneralBuildingFlow && (
                <div className="pc-s42__actions">
                  <Button
                    variant="primary"
                    disabled={s42SavedNonApt}
                    onClick={() => setS42SavedNonApt(true)}
                  >
                    {t('btn_save_next')}
                  </Button>
                  <Button
                    variant="error"
                    disabled={!s42SavedNonApt}
                    onClick={() => {
                      setS42SavedNonApt(false); setGeneralBuildingSaved(false);
                      setAvailing(null);
                      setRebatePropertyType(''); setRebateCategory(''); setRebateDocs({});
                    }}
                  >
                    {t('btn_edit')}
                  </Button>
                </div>
              )}

            </div>
          )}
        </SectionBox>

        {/* ═══ SECTION 4.3 — Avail Rebates ═══════════════════════ */}
        <div ref={s43Ref}>
          <SectionBox number="4.3" title={t('s43_title')} open={s42Done}>
            {s42Done && (
              <div className="pc-s43__body">

                {/* Info link */}
                <div className="pc-s43__info-box">
                  <span className="material-icons-outlined pc-s43__info-icon">info</span>
                  <p className="pc-s43__info-text">
                    {t('s43_click_here')}
                  </p>
                </div>

                {/* Yes / No question */}
                <div className="pc-s43__question-wrap">
                  <p className="pc-s43__question">
                    {t('s43_question')}<span className="pc-s43__required">*</span>
                  </p>
                  <div className="pc-s43__radio-group">
                    <RadioButton
                      name="availing"
                      label={t('btn_yes')}
                      value="yes"
                      checked={availing === 'yes'}
                      onChange={() => {
                        setAvailing('yes');
                        setRebatePropertyType(''); setRebateCategory(''); setRebateDocs({});
                      }}
                    />
                    <RadioButton
                      name="availing"
                      label={t('btn_no')}
                      value="no"
                      checked={availing === 'no'}
                      onChange={() => {
                        setAvailing('no');
                        setRebatePropertyType(''); setRebateCategory(''); setRebateDocs({});
                      }}
                    />
                  </div>
                </div>

                {/* Yes flow — cascading dropdowns + document table */}
                {availing === 'yes' && (
                  <>
                    {/* Two cascading dropdowns */}
                    <div className="pc-s43__dropdowns-row">
                      <div className="pc-s43__dropdown-item">
                        <Dropdown
                          label={t('rebates_category_label')}
                          required
                          placeholder={t('s43_cat_ph')}
                          options={rebateTypeOptions}
                          value={rebatePropertyType}
                          onChange={(e) => {
                            setRebatePropertyType(e.target.value);
                            setRebateCategory('');
                            setRebateDocs({});
                          }}
                        />
                      </div>
                      <div className="pc-s43__dropdown-item">
                        <Dropdown
                          label={t('s43_cat_details_label')}
                          required
                          placeholder={t('s43_cat_ph')}
                          options={rebateCategoryOptions(rebatePropertyType)}
                          value={rebateCategory}
                          onChange={(e) => {
                            setRebateCategory(e.target.value);
                            setRebateDocs({});
                          }}
                          readOnly={!rebatePropertyType}
                        />
                      </div>
                    </div>

                    {/* Document table — appears once both dropdowns selected */}
                    {rebatePropertyType && rebateCategory && currentRebateDocs.length > 0 && (
                      <div className="pc-s43__table-wrap">
                        <table className="pc-doc-table pc-s43__table">
                          <thead>
                            <tr className="pc-doc-table__header">
                              <th className="pc-doc-table__th pc-doc-table__th--sl">{t('s41_table_sl')}</th>
                              <th className="pc-doc-table__th pc-doc-table__th--type">{t('s41_table_doc_type')}</th>
                              <th className="pc-doc-table__th pc-doc-table__th--no">{t('s41_table_doc_no')}</th>
                              <th className="pc-doc-table__th pc-doc-table__th--date">{t('s43_table_issued_date')}</th>
                              <th className="pc-doc-table__th pc-doc-table__th--upload">{t('s41_table_upload')}</th>
                              <th className="pc-doc-table__th pc-doc-table__th--view">{t('s41_table_view')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentRebateDocs.map((doc, i) => {
                              const d = rebateDocs[i] || {};
                              return (
                                <tr key={i}>
                                  <td className="pc-doc-table__td pc-doc-table__td--sl">{i + 1}</td>
                                  <td className="pc-doc-table__td pc-doc-table__td--type">
                                    {lang === 'kn' ? doc.nameKn : doc.name}
                                    {doc.required === 'COMPULSORY' && <span className="pc-doc__required"> *</span>}
                                  </td>
                                  <td className="pc-doc-table__td pc-doc-table__td--no">
                                    <Input
                                      placeholder={t('s41_doc_no_ph')}
                                      value={d.docNo || ''}
                                      onChange={(e) => handleRebateDocFieldChange(i, 'docNo', e.target.value)}
                                      inputType="alphanumeric-code"
                                    />
                                  </td>
                                  <td className="pc-doc-table__td pc-doc-table__td--date">
                                    <DatePicker
                                      value={d.issuedDate || ''}
                                      onChange={(e) => handleRebateDocFieldChange(i, 'issuedDate', e.target.value)}
                                    />
                                  </td>
                                  <td className="pc-doc-table__td pc-doc-table__td--upload">
                                    <FileUpload
                                      fileName={d.fileName || null}
                                      uploadStatus={d.uploadStatus}
                                      caption={
                                        d.uploadStatus === 'success'
                                          ? t('s41_upload_success')
                                          : d.uploadStatus === 'error'
                                          ? t('s41_upload_size_error')
                                          : t('s41_upload_info')
                                      }
                                      captionVariant={
                                        d.uploadStatus === 'success' ? 'success'
                                          : d.uploadStatus === 'error' ? 'error'
                                          : 'info'
                                      }
                                      onUpload={(file) => handleRebateDocUpload(i, file)}
                                      onRemove={() => handleRebateDocRemove(i)}
                                    />
                                  </td>
                                  <td className="pc-doc-table__td pc-doc-table__td--view">
                                    <button
                                      type="button"
                                      className={`pc-view-icon ${d.uploadStatus === 'success' ? 'pc-view-icon--active' : 'pc-view-icon--inactive'}`}
                                      disabled={d.uploadStatus !== 'success'}
                                      onClick={() => d.uploadStatus === 'success' && setViewRebateDocIdx(i)}
                                    >
                                      <span className="material-icons-outlined">visibility</span>
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>

                        {/* Eligibility caption — shown once all mandatory docs uploaded */}
                        {allRebateMandatoryUploaded && REBATE_EXEMPTION_BY_DETAIL[rebateCategory] && (
                          <div className="pc-s43__eligibility-caption">
                            <CaptionMessage variant="success">
                              {t('rebates_caption')
                            .replace('{subCategory}', rebateCategoryOptions(rebatePropertyType).find(o => o.value === rebateCategory)?.label ?? rebateCategory)
                            .replace('{amount}', REBATE_EXEMPTION_BY_DETAIL[rebateCategory])}
                            </CaptionMessage>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}

              </div>
            )}
          </SectionBox>
        </div>

        {/* Save and Proceed — below 4.3, centered */}
        {s42Done && (
          <div ref={saveRef} className="pc-page__save-wrap pc-page__save-wrap--center">
            <Button
              variant="primary"
              disabled={!allSaved}
              onClick={handleS42FinalSave}
            >
              {t('btn_save_proceed')}
            </Button>
          </div>
        )}

      </div>

      {/* ════════════ QUESTIONNAIRE MODAL ════════════════════════ */}
      {modalOpen && (
        <div className="pc-modal__backdrop" onClick={closeModal}>
          <div className="pc-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pc-modal__header">
              <p className="pc-modal__title">{t('modal_title')}</p>
              <div
                role="button" tabIndex={0}
                className="pc-modal__close"
                onClick={closeModal}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') closeModal(); }}
              >
                <span className="material-icons-outlined">close</span>
              </div>
            </div>
            <div className="pc-modal__body">
              {!isResult ? (
                <>
                  <div className="pc-modal__question-header">
                    <span className="pc-modal__question-label">{node.label}</span>
                    <p className="pc-modal__question">{node.question}</p>
                  </div>
                  <div className="pc-modal__options">
                    {node.options.map((option, i) => (
                      <QuestionnaireField
                        key={i}
                        text={option.text}
                        sub={option.sub}
                        selected={selectedOption === i}
                        onChange={() => setSelectedOption(i)}
                        name="modal-questionnaire"
                        value={String(i)}
                      />
                    ))}
                  </div>
                  <div className="pc-modal__footer">
                    {history.length > 0 && (
                      <Button variant="white" icon="arrow_back" onClick={handleBack}>{t('btn_back')}</Button>
                    )}
                    <Button variant="primary" disabled={selectedOption === null} onClick={handleNext}>{t('btn_next')}</Button>
                  </div>
                </>
              ) : (
                <>
                  <HelpCardList
                    variant="document"
                    subtitle={resultFormType}
                    title={`${node.code.replace(/-\d+$/, '')} — ${node.title}`}
                    items={resultDocs}
                    noDoc={node.noDoc}
                  />
                  <div className="pc-modal__result-nav">
                    <Button variant="white" icon="arrow_back" onClick={handleBack}>{t('btn_back')}</Button>
                    <Button variant="white" icon="refresh" onClick={handleRestart}>{t('btn_start_over')}</Button>
                  </div>
                  <div className="pc-modal__confirm-row">
                    <Button variant="primary" onClick={handleConfirmClassification}>{t('modal_confirm')}</Button>
                    <CaptionMessage variant="info">{t('modal_confirm_caption')}</CaptionMessage>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ════ 4.1 EDIT WARNING ══════════════════════════════════ */}
      {showWarn41 && (
        <div className="pc-modal__backdrop" onClick={handleWarn41Cancel}>
          <div onClick={(e) => e.stopPropagation()}>
            <ErrorMessageCard
              message={`${t('warn41_message')}${completedBCSteps.includes(4) ? t('warn41_ec_suffix') : ''}.`}
              subMessage={t('warn41_submessage')}
              actions={[
                { label: t('warn_yes_edit'), onClick: () => { onResetDownstream?.(); handleWarn41Confirm(); } },
                { label: t('btn_cancel'),    onClick: handleWarn41Cancel },
              ]}
            />
          </div>
        </div>
      )}

      {/* ════ CLASSIFICATION DROPDOWN CHANGE WARNING ════════════ */}
      {showClassWarn && (
        <div className="pc-modal__backdrop" onClick={() => { setShowClassWarn(false); setPendingClassification(''); }}>
          <div onClick={(e) => e.stopPropagation()}>
            <ErrorMessageCard
              message={`${t('warn_class_message')}${completedBCSteps.includes(4) ? t('warn_class_ec_suffix') : ''}.`}
              subMessage={t('warn_class_submessage')}
              actions={[
                {
                  label: t('warn_yes_change'),
                  onClick: () => {
                    onResetDownstream?.();
                    setClassification(pendingClassification);
                    setDocUploads({});
                    setExtraOtherDocs([]);
                    resetSurvey();
                    setShowClassWarn(false);
                    setPendingClassification('');
                  },
                },
                {
                  label: t('btn_cancel'),
                  onClick: () => { setShowClassWarn(false); setPendingClassification(''); },
                },
              ]}
            />
          </div>
        </div>
      )}

      {/* ════ PROPERTY TYPE CHANGE WARNING ══════════════════════ */}
      {showTypeWarn && (
        <div className="pc-modal__backdrop" onClick={() => { setShowTypeWarn(false); setPendingType(''); }}>
          <div onClick={(e) => e.stopPropagation()}>
            <ErrorMessageCard
              message={`${t('warn_type_message')}${completedBCSteps.includes(4) ? t('warn_type_ec_suffix') : ''}.`}
              subMessage={t('warn_type_submessage')}
              actions={[
                {
                  label: t('warn_yes_change'),
                  onClick: () => {
                    onResetDownstream?.();
                    setPropertyType(pendingType);
                    setPropertyCategory('');
                    setAreaSaved(false); setMultiStoreySaved(false); setParkingSaved(false);
                    setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
                    setS42SavedNonApt(false); setGeneralBuildingSaved(false);
                    setAvailing(null); setRebatePropertyType(''); setRebateCategory(''); setRebateDocs({});
                    setShowTypeWarn(false);
                    setPendingType('');
                  },
                },
                {
                  label: t('btn_cancel'),
                  onClick: () => { setShowTypeWarn(false); setPendingType(''); },
                },
              ]}
            />
          </div>
        </div>
      )}

      {/* ════ PROPERTY CATEGORY CHANGE WARNING ══════════════════ */}
      {showCategoryWarn && (
        <div className="pc-modal__backdrop" onClick={() => { setShowCategoryWarn(false); setPendingCategory(''); }}>
          <div onClick={(e) => e.stopPropagation()}>
            <ErrorMessageCard
              message={`${t('warn_type_message')}${completedBCSteps.includes(4) ? t('warn_type_ec_suffix') : ''}.`}
              subMessage={t('warn_type_submessage')}
              actions={[
                {
                  label: t('warn_yes_change'),
                  onClick: () => {
                    onResetDownstream?.();
                    setPropertyCategory(pendingCategory);
                    setAreaSaved(false); setMultiStoreySaved(false); setParkingSaved(false);
                    setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
                    setS42SavedNonApt(false); setGeneralBuildingSaved(false);
                    setAvailing(null); setRebatePropertyType(''); setRebateCategory(''); setRebateDocs({});
                    setShowCategoryWarn(false);
                    setPendingCategory('');
                  },
                },
                {
                  label: t('btn_cancel'),
                  onClick: () => { setShowCategoryWarn(false); setPendingCategory(''); },
                },
              ]}
            />
          </div>
        </div>
      )}

      {/* ════════════ VIEW FILE POPUP ════════════════════════════ */}
      {viewFileDocIdx !== null && (
        <div className="pc-popup__overlay" onClick={() => setViewFileDocIdx(null)}>
          <div className="pc-viewfile-popup" onClick={(e) => e.stopPropagation()}>
            <div className="pc-popup__header">
              <h2 className="pc-popup__title">{t('view_doc_title')}</h2>
              <button type="button" className="pc-popup__close" onClick={() => setViewFileDocIdx(null)}>
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            <div className="pc-viewfile-popup__body">
              <p className="pc-viewfile-popup__name">
                {docUploads[viewFileDocIdx]?.fileName || 'Document'}
              </p>
              <div className="pc-viewfile-popup__preview">
                <span className="material-icons-outlined pc-viewfile-popup__icon">picture_as_pdf</span>
                <p>{t('view_doc_preview')}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyClassificationPage;
