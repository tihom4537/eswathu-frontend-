import { useState, useEffect, useRef } from 'react';
import BuildingDetails_AreaDetails from './BuildingDetails_AreaDetails';
import BuildingDetails_MultiStoreyUsage from './BuildingDetails_MultiStoreyUsage';
import BuildingDetails_ParkingDetails from './BuildingDetails_ParkingDetails';
import BuildingDetails_UndividedLand from './BuildingDetails_UndividedLand';
import BuildingDetails_ESCOMDetails from './BuildingDetails_ESCOMDetails';
import BuildingDetails_TenantDetails from './BuildingDetails_TenantDetails';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
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
import { nodes, DOCS } from '../../HomePage/classifierData';
import { CLASSIFICATION_DATA } from '../../../data/classificationData';
import './PropertyClassificationPage.css';

/* ── Classification options ─────────────────────────────── */
const CLASSIFICATION_OPTIONS = [
  { value: '11A-1',  label: '11A Grama Thana' },
  { value: '11A-2',  label: '11A Property sanctioned under the Government Housing Corporation scheme*' },
  { value: '11A-3',  label: '11A Design Approved Property of Urban Development Authority in Local Planning Area and Outside Local Planning Area/ Local Planning Authority' },
  { value: '11A-4',  label: '11A Design approved property of Group/Mandal Panchayat on outskirts of the Local Planning Area before Date: 11.11.2014*' },
  { value: '11A-5',  label: '11A Property in the Local Planning Area approved by the Group/Mandal Panchayat before 16-11-1992*' },
  { value: '11A-6',  label: '11A Property managed by Notified Area Committee/Notified Property prior the term of Mandal Panchayat*' },
  { value: '11A-7',  label: '11A KIADB/KSSIDC Industrial Design Approved Property*' },
  { value: '11A-8',  label: '11A From 16.11.1992 to 14-06-2013 Gram Panchayat permission letter/approved building plan, building constructed land converted property' },
  { value: '11A-9',  label: '11A Property sanctioned under Section 94C/94CC/94D of the Karnataka Land Revenue Act, 1964' },
  { value: '11A-10', label: '11A Rehabilitation Scheme Property*' },
  { value: '11A-11', label: '11A Podi as registered in partnership deed/Individual Family Property with Hissa Number (for Dakshina Kannada and Udupi District)*' },
  { value: '11A-12', label: '11A Approved Property Panchayat design outside the local planning area from 11.11.2014 to with Gram 10.01.2025.' },
  { value: '11A-13', label: '11A Central Government/State Government/Local Bodies Site/Building' },
  { value: '11A-14', label: '11A Property sanctioned under Section 3. 38(a) of the Karnataka Land Reforms Act, 1961' },
  { value: '11A-15', label: '11A Corporation/Board/Limited/Authority Site/Building*' },
  { value: '11B-1', label: '11B Violating the provisions of the Model Building Bye-laws & Constructing Buildings on agricultural land or on converted land' },
  { value: '11B-2', label: '11B Sites on converted/non-converted or agricultural land.' },
  { value: '11B-3', label: '11B Buildings acquired in violation of the provisions of the Model Building Bye-laws or without obtaining occupancy or completion certificate in a layout approved by the competent authority.' },
  { value: '11B-4', label: '11B Sites on revenue land/converted land without layout design approval, but with provision of basic amenities, parks, civic amenities, roads transferred free of cost to the Gram Panchayat under Section 17 of the Karnataka Town and Country Planning Act, 1961 through a surrender deed/transferred' },
  { value: '11B-5', label: '11B Converted Land/Assumed Converted land(Single Site)' },
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

const CORNER_SITE_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no',  label: 'No' },
];

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
}) => {
  const [isPageComplete, setIsPageComplete] = useState(false);

  /* ── 4.1 — Survey section state (hoisted before useEffects) ─ */
  const [villageVal, setVillageVal]         = useState('');
  const [surveyVal, setSurveyVal]           = useState('');
  const [surveySearched, setSurveySearched] = useState(false);
  const [surnocHissa, setSurnocHissa]       = useState('');
  const [surnocOptions, setSurnocOptions]   = useState([]);
  const [surnocLoading, setSurnocLoading]   = useState(false);

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
        { value: '1/A', label: '1/A' },
        { value: '1/B', label: '1/B' },
        { value: '2',   label: '2'   },
        { value: '2/A', label: '2/A' },
        { value: '3',   label: '3'   },
      ]);
      setSurnocLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [surveySearched]);

  /* ── 4.1 — Classification ───────────────────────────────── */
  const [classification, setClassification] = useState('');

  /* ── 4.1 — Doc uploads ──────────────────────────────────── */
  const [docUploads, setDocUploads] = useState({});
  const [viewFileDocIdx, setViewFileDocIdx] = useState(null);

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

  /* ── 4.3 — Avail Rebates ─────────────────────────────────── */
  const [availing, setAvailing] = useState('no');

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
  const allMandatoryUploaded =
    !!classification &&
    (currentDocs.length === 0 ||
      currentDocs.every((doc, i) =>
        doc.required === 'OPTIONAL' || docUploads[i]?.uploadStatus === 'success'
      ));

  /* survey section visible only once docs complete */
  const surveyVisible = allMandatoryUploaded;

  /* ── Classification change ───────────────────────────────── */
  const handleClassificationChange = (e) => {
    setClassification(e.target.value);
    setDocUploads({});
    resetSurvey();
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

  /* ── Survey handlers ─────────────────────────────────────── */
  const handleSurveySearch = () => {
    if (villageVal && surveyVal) setSurveySearched(true);
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
  const allSaved = tenantSaved;

  /* ── 4.2 scroll effects ──────────────────────────────────── */
  useEffect(() => { if (allDropdownsSelected) scrollTo42(areaRef); }, [allDropdownsSelected]);
  useEffect(() => { if (areaSaved) scrollTo42(multiRef); }, [areaSaved]);
  useEffect(() => { if (multiStoreySaved) scrollTo42(parkingRef); }, [multiStoreySaved]);
  useEffect(() => { if (parkingSaved) scrollTo42(undividedRef); }, [parkingSaved]);
  useEffect(() => { if (undividedSaved) scrollTo42(escomRef); }, [undividedSaved]);
  useEffect(() => { if (escomSaved) scrollTo42(tenantRef); }, [escomSaved]);
  useEffect(() => { if (tenantSaved) scrollTo42(s43Ref); }, [tenantSaved]);

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
      <NavigationBar variant="postLogin" username={username} onLogout={() => onNavigate?.('login')} />

      <Breadcrumb
        steps={bcStepNames}
        currentStep={currentBCStep}
        completedSteps={completedBCSteps}
        onStepClick={onBCStepClick}
      />

      <Stepper activeStep={3} />
      <StepHeader
        step="Step 4"
        title="Property Classification"
        onBack={onBack}
        onNext={onNext}
        isBackEnabled={isBackEnabled}
        isNextEnabled={isPageComplete}
      />

      <div className="pc-page__sections">

        {/* ═══ SECTION 4.1 ═══════════════════════════════════════ */}
        <SectionBox number="4.1" title="Property Classification & Documents Upload" open className="pc-s41-box">
          <div className="pc-s41">

            {/* Find My Classification */}
            <div className="pc-s41__find-group">
              <InfoBox variant="outline">
                If you are not sure, please use 'Find My Classification' to confirm your Property Classification
              </InfoBox>
              <div className="pc-s41__find-btn-wrap">
                <Button variant="primary" onClick={openModal}>Find My Classification</Button>
              </div>
            </div>

            <InfoBox variant="outline">
              If you are aware of your Property Classification, please proceed and choose it
            </InfoBox>

            {/* Classification dropdown */}
            <div className="pc-s41__dropdown-section">
              <p className="pc-s41__dropdown-label">
                Property Classification<span className="pc-s41__required"> *</span>
              </p>
              <div className="pc-s41__dropdown-wrap">
                <Dropdown
                  placeholder="Choose Property Classification"
                  options={CLASSIFICATION_OPTIONS}
                  value={classification}
                  onChange={handleClassificationChange}
                />
              </div>
            </div>

            {/* Documents section — reveals when classification chosen */}
            {classification && (
              <>
                <p className="pc-s41__doc-instruction">
                  Please upload the documents mentioned below according to your classification
                </p>

                {currentDocs.length > 0 ? (
                  <div className="pc-s41__table-wrap">
                    <table className="pc-doc-table">
                      <thead>
                        <tr className="pc-doc-table__header">
                          <th className="pc-doc-table__th pc-doc-table__th--sl">Sl No.</th>
                          <th className="pc-doc-table__th pc-doc-table__th--type">Document Type</th>
                          <th className="pc-doc-table__th pc-doc-table__th--date">Document Registration Date</th>
                          <th className="pc-doc-table__th pc-doc-table__th--no">Document No.</th>
                          <th className="pc-doc-table__th pc-doc-table__th--upload">Upload Document</th>
                          <th className="pc-doc-table__th pc-doc-table__th--view">View file</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentDocs.map((doc, i) => {
                          const d = docUploads[i] || {};
                          return (
                            <tr key={i}>
                              <td className="pc-doc-table__td pc-doc-table__td--sl">{i + 1}</td>
                              <td className="pc-doc-table__td pc-doc-table__td--type">
                                {doc.name}{doc.required === 'COMPULSORY' && <span className="pc-doc__required"> *</span>}
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--date">
                                <DatePicker
                                  value={d.date || ''}
                                  onChange={(e) => handleDocFieldChange(i, 'date', e.target.value)}
                                />
                              </td>
                              <td className="pc-doc-table__td pc-doc-table__td--no">
                                <Input
                                  placeholder="Enter doc no."
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
                                      ? <CaptionMessage variant="success">Document uploaded successfully</CaptionMessage>
                                      : <CaptionMessage variant="error">Document exceeds 5MB</CaptionMessage>
                                    }
                                  </div>
                                ) : (
                                  <div className="pc-doc__upload-cell">
                                    <Button variant="white" icon="upload_file" onClick={() => handleDocFileUpload(i)}>
                                      Upload File
                                    </Button>
                                    <CaptionMessage variant="info">Only PDF size up-to 5MB allowed</CaptionMessage>
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
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="pc-s41__no-docs">No additional documents required for this classification.</p>
                )}
              </>
            )}

            {/* ── Survey Number Details — reveals when docs complete ── */}
            {surveyVisible && (
              <div className="pc-s41__survey-section">
                <div className="pc-s41__survey-divider" />
                <p className="pc-s41__survey-heading">Survey Number Details</p>

                {/* Stage 1: Village + Survey + Search + Tooltip */}
                <div className="pc-s42__village-and-search">
                  <div className="pc-s42__village-input">
                    <Input
                      label="Village Name"
                      value={villageVal}
                      frozen
                    />
                  </div>

                  <div className="pc-s42__survey-row">
                    <div className="pc-s42__survey-group">
                      <div className="pc-s42__survey-input-wrap">
                        <Input
                          label="Survey Number"
                          value={surveyVal}
                          onChange={(e) => setSurveyVal(e.target.value)}
                          placeholder="Enter survey number"
                          inputType="alphanumeric-code"
                          disabled={surveySearched}
                        />
                      </div>
                      <Button
                        variant="primary"
                        disabled={surveySearched || !villageVal || !surveyVal}
                        onClick={handleSurveySearch}
                      >
                        Search
                      </Button>
                    </div>
                    <Tooltip
                      label="Survey number can be found on your RTC / Pahani extract or the property registration document."
                      caption="Click to view sample"
                      className="pc-s42__tooltip"
                    />
                  </div>
                </div>

                {/* Stage 2: Surnoc / Hissa + Fetch RTC Details */}
                {surveySearched && (
                  <div className="pc-s42__surnoc-section">
                    <div className="pc-s42__surnoc-row">
                      <div className="pc-s42__surnoc-input-wrap">
                        {surnocLoading ? (
                          <ProgressCircle size="small" />
                        ) : (
                          <Dropdown
                            label="Surnoc and Hissa No."
                            required
                            options={surnocOptions}
                            value={surnocHissa}
                            onChange={(e) => setSurnocHissa(e.target.value)}
                            placeholder="Select Surnoc and Hissa No."
                            disabled={rtcFetchLocked}
                          />
                        )}
                      </div>
                      <Tooltip
                        label="Surnoc and Hissa number can be found on your RTC / Pahani extract or property registration document."
                        caption="Click to view sample"
                        className="pc-s42__surnoc-tooltip"
                      />
                    </div>

                    <div className="pc-s42__fetch-row">
                      <Button
                        variant="primary"
                        disabled={rtcFetchLocked || !surnocHissa}
                        onClick={handleFetchRTC}
                      >
                        Fetch RTC owner details
                      </Button>
                      <Button variant="error" disabled={!rtcFetchLocked} onClick={handleRTCEdit}>
                        Edit
                      </Button>
                    </div>
                  </div>
                )}

                {/* Stage 3: frozen fields + RTC Owner table + Yes/No question */}
                {rtcTableVisible && (
                  <>
                    <div className="pc-s42__frozen-row">
                      <div className="pc-s42__frozen-field">
                        <Input label="Survey No." value={surveyVal} frozen />
                      </div>
                      <div className="pc-s42__frozen-field">
                        <Input label="Hissa No." value={surnocHissa} frozen />
                      </div>
                    </div>

                    <div className="pc-s42__rtc-table-wrap">
                      <table className="pc-rtc-table">
                        <thead>
                          <tr className="pc-rtc-table__header">
                            <th className="pc-rtc-table__th pc-rtc-table__th--cb">Select</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--ownerNo">Owner No.</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--mainOwnerNo">Main Owner No.</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--ownerName">Owner Name</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--fatherName">Father Name</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--landCode">Land code</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--acre">ext Acre</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--gunta">ext Gunta</th>
                            <th className="pc-rtc-table__th pc-rtc-table__th--fgunta">ext_fgunta</th>
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
                        Does the RTC owner fetched from Bhoomi match the property owner?
                      </p>
                      <div className="pc-s42__radio-row">
                        <RadioButton
                          label="Yes"
                          name="rtc-owners"
                          value="yes"
                          checked={rtcOwnersAnswer === 'yes'}
                          onChange={() => setRtcOwnersAnswer('yes')}
                          disabled={s41FinalDone}
                        />
                        <RadioButton
                          label="No"
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

                {/* ── Single Save and Next for all of 4.1 ── */}
                {rtcTableVisible && (
                  <div className="pc-s42__actions">
                    <Button
                      variant="primary"
                      disabled={s41FinalDone || !rtcOwnersAnswer}
                      onClick={handleS41FinalSave}
                    >
                      Save and Next
                    </Button>
                    <Button
                      variant="error"
                      disabled={!s41FinalDone}
                      onClick={handleS41EditClick}
                    >
                      Edit
                    </Button>
                  </div>
                )}
              </div>
            )}

          </div>
        </SectionBox>

        {/* ═══ SECTION 4.2 ═══════════════════════════════════════ */}
        <SectionBox number="4.2" title="Property Type and Category Details" open={s41FinalDone} className="pc-s42-box">
          {s41FinalDone && (
            <div className="pc-s42__body">

              {/* ── Three opening dropdowns ── */}
              <div className="pc-s42__dropdowns-row">
                <div className="pc-s42__dropdown-item">
                  <Dropdown
                    label="Property Type"
                    placeholder="Select"
                    options={TYPE_OPTIONS}
                    value={propertyType}
                    onChange={(e) => {
                      setPropertyType(e.target.value);
                      setAreaSaved(false); setMultiStoreySaved(false); setParkingSaved(false);
                      setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
                    }}
                    required
                  />
                </div>
                <div className="pc-s42__dropdown-item">
                  <Dropdown
                    label="Property Category"
                    placeholder="Select"
                    options={CATEGORY_OPTIONS}
                    value={propertyCategory}
                    onChange={(e) => {
                      setPropertyCategory(e.target.value);
                      setAreaSaved(false); setMultiStoreySaved(false); setParkingSaved(false);
                      setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false);
                    }}
                    required
                  />
                </div>
                <div className="pc-s42__dropdown-item">
                  <Dropdown
                    label="Is it a corner site"
                    placeholder="Choose Yes/No"
                    options={CORNER_SITE_OPTIONS}
                    value={isCornerSite}
                    onChange={(e) => setIsCornerSite(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* ── Building + Apartment flow ── */}
              {showBuildingApartmentFlow && (
                <>
                  <InfoBox variant="blue">
                    Please keep sale deed document ready for entering the correct Building Details.
                  </InfoBox>

                  {/* Building Area Details */}
                  <div ref={areaRef} className="pc-s42__section">
                    <p className="pc-s42__section-title">Building Area Details</p>
                    <BuildingDetails_AreaDetails
                      onSave={(data) => { setAreaData(data); setAreaSaved(true); }}
                      onEdit={handleAreaEdit}
                    />
                  </div>

                  {/* Details of Usage of Multi-Storey Flat */}
                  <div className="pc-s42__divider" />
                  {areaSaved ? (
                    <div ref={multiRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">Details of Usage of Multi-Storey Flat</p>
                      <BuildingDetails_MultiStoreyUsage
                        superBuiltArea={areaData?.plinthArea ?? ''}
                        onChange={(filled) => {
                          setMultiStoreySaved(filled);
                          if (!filled) { setParkingSaved(false); setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false); }
                        }}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">Details of Usage of Multi-Storey Flat</p>
                  )}

                  {/* Parking Details */}
                  <div className="pc-s42__divider" />
                  {multiStoreySaved ? (
                    <div ref={parkingRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">Parking Details</p>
                      <BuildingDetails_ParkingDetails
                        onChange={(filled) => {
                          setParkingSaved(filled);
                          if (!filled) { setUndividedSaved(false); setEscomSaved(false); setTenantSaved(false); }
                        }}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">Parking Details</p>
                  )}

                  {/* Undivided Land Details */}
                  <div className="pc-s42__divider" />
                  {parkingSaved ? (
                    <div ref={undividedRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">Undivided Land Details</p>
                      <BuildingDetails_UndividedLand
                        onChange={(filled) => {
                          setUndividedSaved(filled);
                          if (!filled) { setEscomSaved(false); setTenantSaved(false); }
                        }}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">Undivided Land Details</p>
                  )}

                  {/* ESCOM Details */}
                  <div className="pc-s42__divider" />
                  {undividedSaved ? (
                    <div ref={escomRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">ESCOM Details</p>
                      <BuildingDetails_ESCOMDetails
                        aboveComplete={true}
                        onSave={() => setEscomSaved(true)}
                        onEdit={handleEscomEdit}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">ESCOM Details</p>
                  )}

                  {/* Tenant Details */}
                  <div className="pc-s42__divider" />
                  {escomSaved ? (
                    <div ref={tenantRef} className="pc-s42__section">
                      <p className="pc-s42__section-title">Tenant Details</p>
                      <BuildingDetails_TenantDetails
                        onSave={() => setTenantSaved(true)}
                        onEdit={handleTenantEdit}
                      />
                    </div>
                  ) : (
                    <p className="pc-s42__placeholder-heading">Tenant Details</p>
                  )}
                </>
              )}

              {/* ── Other type/category combinations — placeholder ── */}
              {allDropdownsSelected && !showBuildingApartmentFlow && (
                <p className="pc-s42__placeholder-text">
                  Details form for selected type and category — coming soon.
                </p>
              )}

            </div>
          )}
        </SectionBox>

        {/* ═══ SECTION 4.3 — Avail Rebates ═══════════════════════ */}
        <div ref={s43Ref}>
          <SectionBox number="4.3" title="Avail Rebates" open={tenantSaved}>
            {tenantSaved && (
              <div className="pc-s43__body">
                <InfoBox variant="red">
                  {/* TODO: add rebates info link */}
                  <a href="#" className="pc-s43__info-link">Click here to know more about Rebates</a>
                </InfoBox>
                <div className="pc-s43__question-wrap">
                  <p className="pc-s43__question">Will you be availing any rebates for your property?</p>
                  <div className="pc-s43__radio-group">
                    <RadioButton
                      name="availing"
                      label="Yes"
                      value="yes"
                      checked={availing === 'yes'}
                      onChange={() => setAvailing('yes')}
                    />
                    <RadioButton
                      name="availing"
                      label="No"
                      value="no"
                      checked={availing === 'no'}
                      onChange={() => setAvailing('no')}
                    />
                  </div>
                </div>
              </div>
            )}
          </SectionBox>
        </div>

        {/* Save and Proceed — below 4.3 */}
        {s41FinalDone && (
          <div ref={saveRef} className="pc-page__save-wrap">
            <Button
              variant="primary"
              disabled={!allSaved}
              onClick={handleS42FinalSave}
            >
              Save and Proceed
            </Button>
          </div>
        )}

      </div>

      {/* ════════════ QUESTIONNAIRE MODAL ════════════════════════ */}
      {modalOpen && (
        <div className="pc-modal__backdrop" onClick={closeModal}>
          <div className="pc-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pc-modal__header">
              <p className="pc-modal__title">Find My Classification</p>
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
                      <Button variant="white" icon="arrow_back" onClick={handleBack}>Back</Button>
                    )}
                    <Button variant="primary" disabled={selectedOption === null} onClick={handleNext}>Next</Button>
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
                    <Button variant="white" icon="arrow_back" onClick={handleBack}>Back</Button>
                    <Button variant="white" icon="refresh" onClick={handleRestart}>Start Over</Button>
                  </div>
                  <div className="pc-modal__confirm-row">
                    <Button variant="primary" onClick={handleConfirmClassification}>Confirm my Classification</Button>
                    <CaptionMessage variant="info">This will be used in your application</CaptionMessage>
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
              message="Editing the Property Classification will cause you to lose progress in the Property Classification and Documents Upload section. Are you sure you want to proceed?"
              subMessage="Your previously entered data will remain, but you will need to re-save."
              actions={[
                { label: 'Yes, Edit', variant: 'primary', onClick: handleWarn41Confirm },
                { label: 'Cancel',    variant: 'error',   onClick: handleWarn41Cancel  },
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
              <h2 className="pc-popup__title">View Document</h2>
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
                <p>PDF preview not available in prototype</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyClassificationPage;
