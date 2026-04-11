import { useState, useRef, useEffect } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import StepHeader from '../../../components/StepHeader/StepHeader';
import Stepper from '../../../components/Stepper/Stepper';
import SectionBox from '../../../components/SectionBox/SectionBox';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import DatePicker from '../../../components/DatePicker/DatePicker';
import Button from '../../../components/Button/Button';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import FileUpload from '../../../components/FileUpload/FileUpload';
import ErrorMessageCard from '../../../components/ErrorMessageCard/ErrorMessageCard';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import CollapseHeader from '../../../components/CollapseHeader/CollapseHeader';
import Table from '../../../components/Table/Table';
import Tooltip from '../../../components/Tooltip/Tooltip';
import { useTranslation } from '../../../i18n';
import './SaleDeedDetailsPage.css';

/* ── Mock Kaveri API response ──────────────────────────────── */
const MOCK_KAVERI = {
  dateOfRegistration: '15/08/2024',
  natureOfDeed: 'Sale Deed',
  sroName: 'Devanahalli',
  sroDistrict: 'Bengaluru Rural',
  registrationNumber: 'KA-BLR-2024-12345',
  village: 'Doddahasala',
  hobli: 'Channarayapatna',
  district: 'Bengaluru Rural',
  taluk: 'Devanahalli',
  panchayat: 'Doddahasala GP',
  propertyId: 'PROP-001-2024',
  documentId: 'DOC-001-2024',
  zoneName: 'A',
  boundaries: {
    east: 'Checkbandi',
    west: 'Doddahasala',
    north: 'Doddahasala',
    south: 'Doddahasala',
  },
  properties: [
    {
      propertyId: '34567890',
      documentId: '23456789',
      village: 'Doddahasala',
      sroName: 'Whitefield',
    },
  ],
  schedules: [
    {
      type: '1A',
      description: 'Sale deed',
      propertyArea: 'Doddahasala',
    },
  ],
  parties: [
    { name: 'XXXXXXXXXXXXXXX', type: 'Sale deed', address: 'XXXXXXXXXXXXXXX' },
    { name: 'XXXXXXXXXXXXXXX', type: 'Sale deed', address: 'XXXXXXXXXXXXXXX' },
    { name: 'XXXXXXXXXXXXXXX', type: 'Sale deed', address: 'XXXXXXXXXXXXXXX' },
  ],
  appId: 'APP-2024-98765',
  generatedPropertyId: 'P-2024-54321',
};


const SaleDeedDetailsPage = ({
  onNavigate,
  username = '',
  onBack,
  onNext,
  isBackEnabled = false,
  currentBCStep = 0,
  completedBCSteps = [],
  onBCStepClick,
  bcStepNames = [],
  completionResetKey = 0,
  onResetDownstream,
  onVillageChange,
  onFlowChange,
}) => {
  const { t } = useTranslation('step1');

  /* ── Section 1.1 — Location dropdown options (translated) ── */
  const DISTRICT_OPTIONS = [
    { value: 'Bengaluru Rural',  label: t('s11_opt_dist_bengaluru_rural') },
    { value: 'Bengaluru Urban',  label: t('s11_opt_dist_bengaluru_urban') },
    { value: 'Mysuru',           label: t('s11_opt_dist_mysuru') },
    { value: 'Tumkur',           label: t('s11_opt_dist_tumkur') },
    { value: 'Mandya',           label: t('s11_opt_dist_mandya') },
  ];
  const TALUK_OPTIONS = [
    { value: 'Devanahalli',      label: t('s11_opt_taluk_devanahalli') },
    { value: 'Hosakote',         label: t('s11_opt_taluk_hosakote') },
    { value: 'Nelamangala',      label: t('s11_opt_taluk_nelamangala') },
    { value: 'Doddaballapura',   label: t('s11_opt_taluk_doddaballapura') },
    { value: 'Ramanagara',       label: t('s11_opt_taluk_ramanagara') },
  ];
  const PANCHAYAT_OPTIONS = [
    { value: 'Doddahasala GP',   label: t('s11_opt_gp_doddahasala') },
    { value: 'Sadahalli GP',     label: t('s11_opt_gp_sadahalli') },
    { value: 'Vijayapura GP',    label: t('s11_opt_gp_vijayapura') },
    { value: 'Bashettihalli GP', label: t('s11_opt_gp_bashettihalli') },
    { value: 'Yelahanka GP',     label: t('s11_opt_gp_yelahanka') },
  ];
  const VILLAGE_OPTIONS = [
    { value: 'Doddahasala',      label: t('s11_opt_vill_doddahasala') },
    { value: 'Sadahalli',        label: t('s11_opt_vill_sadahalli') },
    { value: 'Vijayapura',       label: t('s11_opt_vill_vijayapura') },
    { value: 'Bashettihalli',    label: t('s11_opt_vill_bashettihalli') },
    { value: 'Yelahanka',        label: t('s11_opt_vill_yelahanka') },
  ];

  /* ── No-flow document type options (translated) ─────────── */
  const NO_FLOW_DOC_OPTIONS = [
    { value: 'property_card',        label: t('s12_opt_property_card') },
    { value: 'inherited_property',   label: t('s12_opt_inherited') },
    { value: 'division_of_property', label: t('s12_opt_division') },
    { value: 'gift_deed',            label: t('s12_opt_gift_deed') },
    { value: 'will',                 label: t('s12_opt_will') },
    { value: 'release_deed',         label: t('s12_opt_release_deed') },
    { value: 'transfer_certificate', label: t('s12_opt_transfer_cert') },
    { value: 'court_order',          label: t('s12_opt_court_order') },
    { value: 'division_letter',      label: t('s12_opt_division_letter') },
  ];

  /* ── Page-level completion ───────────────────────────────── */
  const [isPageComplete, setIsPageComplete] = useState(false);

  useEffect(() => {
    if (completionResetKey > 0) setIsPageComplete(false);
  }, [completionResetKey]);

  /* ── Section 1.1 State — Location and property document details ── */
  const [locDistrict, setLocDistrict] = useState('');
  const [locTaluk, setLocTaluk] = useState('');
  const [locPanchayat, setLocPanchayat] = useState('');
  const [locVillage, setLocVillage] = useState('');
  const [assetNumber, setAssetNumber] = useState('');
  const [s11Saved, setS11Saved] = useState(false);

  useEffect(() => {
    onVillageChange?.(locVillage);
  }, [locVillage]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Section 1.2 State — Property registration details ──── */
  const [s12Visible, setS12Visible] = useState(false);
  const [kaveriYes, setKaveriYes] = useState(true);

  useEffect(() => {
    onFlowChange?.(kaveriYes);
  }, [kaveriYes]); // eslint-disable-line react-hooks/exhaustive-deps
  const [radioLocked, setRadioLocked] = useState(false);

  /* Yes flow */
  const [regNumber, setRegNumber] = useState('');
  const [fetchStatus, setFetchStatus] = useState('idle'); // idle|loading|success|error
  const [kaveriTableOpen, setKaveriTableOpen] = useState(false);
  const fetchAttempt = useRef(0);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [s12Saved, setS12Saved] = useState(false);

  /* No flow */
  const [noFlowDocType, setNoFlowDocType] = useState('');
  const [noFlowDocNo, setNoFlowDocNo] = useState('');
  const [noFlowDocDate, setNoFlowDocDate] = useState('');
  const [noFlowFileName, setNoFlowFileName] = useState(null);
  const [noFlowUploadStatus, setNoFlowUploadStatus] = useState(undefined);

  /* ── Section 1.3 State ───────────────────────────────────── */
  const [s13Visible, setS13Visible] = useState(false);
  const s12Ref = useRef(null);
  const s13Ref = useRef(null);

  /* Scroll to 1.2 when it appears */
  useEffect(() => {
    if (s12Visible && s12Ref.current) {
      setTimeout(() => s12Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, [s12Visible]);

  /* Scroll to 1.3 when it appears */
  useEffect(() => {
    if (s13Visible && s13Ref.current) {
      setTimeout(() => s13Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, [s13Visible]);

  /* Auto-open 1.3 for No flow when all fields complete */
  const noFlowComplete =
    kaveriYes === false &&
    noFlowDocType &&
    noFlowDocNo.trim() &&
    noFlowDocDate &&
    noFlowFileName &&
    noFlowUploadStatus === 'success';

  useEffect(() => {
    if (kaveriYes === false) {
      if (!noFlowComplete) {
        setS13Visible(false);
        setIsPageComplete(false);
      } else {
        setS13Visible(true);
      }
    }
  }, [noFlowComplete, kaveriYes]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Kaveri reg-no edit warning ─────────────────────────── */
  const [showKaveriWarn, setShowKaveriWarn] = useState(false);
  const [pendingFlowIsYes, setPendingFlowIsYes] = useState(null);

  /* ── Handlers ───────────────────────────────────────────── */
  const applyFlowSelect = (isYes) => {
    setKaveriYes(isYes);
    setS13Visible(false);
    setIsPageComplete(false);
    if (isYes) {
      setNoFlowDocType('');
      setNoFlowDocNo('');
      setNoFlowDocDate('');
      setNoFlowFileName(null);
      setNoFlowUploadStatus(undefined);
    } else {
      setRegNumber('');
      setFetchStatus('idle');
      setRadioLocked(false);
      setKaveriTableOpen(false);
      setSelectedProperty(null);
      setSelectedSchedule(null);
      setS12Saved(false);
      fetchAttempt.current = 0;
    }
  };

  const handleFlowSelect = (isYes) => {
    if (fetchStatus === 'loading' || s12Saved) return;
    if (fetchStatus === 'success') {
      // Kaveri already fetched — warn before discarding
      setPendingFlowIsYes(isYes);
      setShowKaveriWarn(true);
      return;
    }
    applyFlowSelect(isYes);
  };

  const handleFetch = () => {
    if (!regNumber.trim()) return;
    fetchAttempt.current += 1;
    if (fetchAttempt.current === 1) {
      setFetchStatus('error');
      return;
    }
    setFetchStatus('loading');
    setRadioLocked(true);
    setTimeout(() => {
      setFetchStatus('success');
      setKaveriTableOpen(true);
    }, 1500);
  };

  const handleErrorDismiss = () => {
    setFetchStatus('idle');
  };

  /* Clears only 1.2 Yes-flow data */
  const handleClear = () => {
    setRegNumber('');
    setFetchStatus('idle');
    setRadioLocked(false);
    setKaveriTableOpen(false);
    setSelectedProperty(null);
    setSelectedSchedule(null);
    setS12Saved(false);
    setS13Visible(false);
    setIsPageComplete(false);
    fetchAttempt.current = 0;
  };

  const handleKaveriXClick = () => setShowKaveriWarn(true);

  const handleKaveriWarnConfirm = () => {
    setShowKaveriWarn(false);
    if (pendingFlowIsYes !== null) {
      applyFlowSelect(pendingFlowIsYes);
      setPendingFlowIsYes(null);
    } else {
      handleClear();
    }
    onResetDownstream?.();
  };

  const handleKaveriWarnCancel = () => {
    setShowKaveriWarn(false);
    setPendingFlowIsYes(null);
  };

  const handleSave11 = () => {
    setS11Saved(true);
    setS12Visible(true);
  };

  const handleEdit11 = () => {
    setS11Saved(false);
    setS12Saved(false);
    setS13Visible(false);
    setIsPageComplete(false);
    /* Clear No-flow state so 1.3 auto-trigger resets */
    setNoFlowDocType('');
    setNoFlowDocNo('');
    setNoFlowDocDate('');
    setNoFlowFileName(null);
    setNoFlowUploadStatus(undefined);
  };

  const handleSave12 = () => {
    setS12Saved(true);
    setS13Visible(true);
  };

  const handleEdit12 = () => {
    setS12Saved(false);
    setS13Visible(false);
    setIsPageComplete(false);
  };

  /* No-flow file handlers */
  const handleNoFlowFileUpload = (file) => {
    if (file.size > 5 * 1024 * 1024) {
      setNoFlowFileName(null);
      setNoFlowUploadStatus('error');
    } else {
      setNoFlowFileName(file.name);
      setNoFlowUploadStatus('success');
    }
  };

  const handleNoFlowFileRemove = () => {
    setNoFlowFileName(null);
    setNoFlowUploadStatus(undefined);
  };

  /* ── Derived: can save ──────────────────────────────────── */
  const canSave11 =
    !s11Saved &&
    locDistrict &&
    locTaluk &&
    locPanchayat &&
    locVillage &&
    assetNumber.trim();

  const canSave12 =
    !s12Saved &&
    selectedProperty !== null &&
    selectedSchedule !== null;

  /* ── Property & Schedule table rows ────────────────────── */
  const propertyRows = MOCK_KAVERI.properties.map((p, i) => [
    <RadioButton
      key={`prop-${i}`}
      name="selectProperty"
      value={String(i)}
      checked={selectedProperty === i}
      onChange={() => { setSelectedProperty(i); }}
      disabled={s12Saved}
    />,
    p.propertyId,
    p.documentId,
    p.village,
    p.sroName,
  ]);

  const scheduleRows = MOCK_KAVERI.schedules.map((s, i) => [
    <RadioButton
      key={`sch-${i}`}
      name="selectSchedule"
      value={String(i)}
      checked={selectedSchedule === i}
      onChange={() => { setSelectedSchedule(i); }}
      disabled={s12Saved}
    />,
    s.type,
    s.description,
  ]);

  /* ── Review rows ────────────────────────────────────────── */
  const yesReviewRow = [[
    locPanchayat || 'Bengaluru Urban',
    MOCK_KAVERI.village,
    regNumber || MOCK_KAVERI.registrationNumber,
    assetNumber || '—',
  ]];

  const noFlowDocLabel = NO_FLOW_DOC_OPTIONS.find(o => o.value === noFlowDocType)?.label || '—';
  const noReviewRow = [[
    locPanchayat || '—',
    locVillage || '—',
    noFlowDocLabel,
    noFlowDocNo || '—',
    noFlowDocDate || '—',
    assetNumber || '—',
  ]];

  return (
    <div className="sd-page">
      <NavigationBar
        variant="postLogin"
        username={username}
        onNavigate={onNavigate}
        onLogout={() => onNavigate && onNavigate('login')}
      />

      <Stepper steps={bcStepNames} activeStep={currentBCStep} completedBCSteps={completedBCSteps} onStepClick={onBCStepClick} />

      <StepHeader
        step={t('step_label')}
        title={t('step_title')}
        onBack={onBack}
        onNext={onNext}
        isBackEnabled={isBackEnabled}
        isNextEnabled={isPageComplete}
      />

      <div className="sd-page__sections">

        {/* ═══ SECTION 1.1 — Location and property document details ═══ */}
        <SectionBox number="1.1" title={t('s11_title')} open className="sd-s11-box">
          <div className="sd-s12">

            <div className="sd-s12__group">
              <p className="sd-s12__group-label">{t('s11_location_group')}</p>
              <div className="sd-s12__four-col">
                <Dropdown
                  label={t('s11_district')}
                  required
                  value={locDistrict}
                  onChange={(e) => setLocDistrict(e.target.value)}
                  disabled={s11Saved}
                  options={DISTRICT_OPTIONS}
                />
                <Dropdown
                  label={t('s11_taluk')}
                  required
                  value={locTaluk}
                  onChange={(e) => setLocTaluk(e.target.value)}
                  disabled={s11Saved}
                  options={TALUK_OPTIONS}
                />
                <Dropdown
                  label={t('s11_panchayat')}
                  required
                  value={locPanchayat}
                  onChange={(e) => setLocPanchayat(e.target.value)}
                  disabled={s11Saved}
                  options={PANCHAYAT_OPTIONS}
                />
                <Dropdown
                  label={t('s11_village')}
                  required
                  value={locVillage}
                  onChange={(e) => setLocVillage(e.target.value)}
                  disabled={s11Saved}
                  options={VILLAGE_OPTIONS}
                />
              </div>
            </div>

            <div className="sd-s12__group">
              <p className="sd-s12__group-label">{t('s11_doc_group')}</p>
              <div className="sd-s12__doc-row">
                <div className="sd-s12__asset-input">
                  <Input
                    label={t('s11_asset_label')}
                    placeholder={t('s11_asset_placeholder')}
                    value={assetNumber}
                    onChange={(e) => setAssetNumber(e.target.value)}
                    disabled={s11Saved}
                    required
                    inputType="alphanumeric-code"
                  />
                </div>
                <Tooltip
                  label={t('s11_tooltip_asset_label')}
                  imageSrc="/images/sample-asset.png"
                  imageAlt="Sample asset document"
                  caption={t('s11_tooltip_caption')}
                  className="sd-s12__tooltip"
                />
              </div>
            </div>

            <div className="sd-s12__actions">
              <Button variant="primary" disabled={!canSave11} onClick={handleSave11}>
                {t('s11_btn_save')}
              </Button>
              <Button variant="error" disabled={!s11Saved} onClick={handleEdit11}>
                {t('s11_btn_edit')}
              </Button>
            </div>
            {s11Saved && (
              <CaptionMessage variant="success">
                {t('s11_save_success')}
              </CaptionMessage>
            )}

          </div>
        </SectionBox>

        {/* ═══ SECTION 1.2 — Property registration details ════════ */}
        {s12Visible && (
          <div ref={s12Ref}>
          <SectionBox number="1.2" title={t('s12_title')} open className="sd-s12-box">
            <div className="sd-s11">

              {/* Radio */}
              <div className="sd-s11__q-block">
                <p className="sd-s11__question">
                  {t('s12_question')}
                </p>
                <div className="sd-s11__radios">
                  <RadioButton
                    name="kaveriFlow"
                    value="yes"
                    label={t('s12_yes')}
                    checked={kaveriYes === true}
                    onChange={() => handleFlowSelect(true)}
                    disabled={fetchStatus === 'loading' || s12Saved}
                  />
                  <RadioButton
                    name="kaveriFlow"
                    value="no"
                    label={t('s12_no')}
                    checked={kaveriYes === false}
                    onChange={() => handleFlowSelect(false)}
                    disabled={fetchStatus === 'loading' || s12Saved}
                  />
                </div>
              </div>

              {/* ── YES flow ───────────────────────────────────── */}
              {kaveriYes === true && (
                <div className="sd-s11__yes-block">

                  <div className="sd-s11__reg-row">
                    <div className="sd-s11__reg-input">
                      <Input
                        label={t('s12_reg_label')}
                        placeholder={t('s12_reg_placeholder')}
                        value={regNumber}
                        onChange={(e) => setRegNumber(e.target.value)}
                        disabled={fetchStatus === 'loading' || s12Saved}
                        state={fetchStatus === 'success' ? 'success' : 'empty'}
                        required
                        inputType="alphanumeric-code"
                        trailingIcon={fetchStatus === 'success' ? 'close' : undefined}
                        onTrailingIconClick={fetchStatus === 'success' ? handleKaveriXClick : undefined}
                        trailingIconClassName={fetchStatus === 'success' ? 'sd-s11__close-icon' : ''}
                      />
                    </div>
                    <Tooltip
                      label={t('s12_tooltip_reg_label')}
                      imageSrc="/images/sample-registration.png"
                      imageAlt="Sample registration document"
                      caption={t('s11_tooltip_caption')}
                      className="sd-s11__tooltip"
                    />
                  </div>

                  {fetchStatus !== 'success' && fetchStatus !== 'error' && (
                    <div className="sd-s11__fetch-row">
                      <Button
                        variant="primary"
                        disabled={!regNumber.trim() || fetchStatus === 'loading'}
                        onClick={handleFetch}
                      >
                        {t('s12_fetch_btn')}
                      </Button>
                    </div>
                  )}

                  {fetchStatus === 'success' && (
                    <>
                      <div className="sd-s11__success-row">
                        <span className="material-icons-outlined sd-s11__success-icon">check_circle_outline</span>
                        <span className="sd-s11__success-text">
                          {t('s12_fetch_success')}
                        </span>
                      </div>

                      <CollapseHeader
                        title={t('s12_kaveri_collapse')}
                        open={kaveriTableOpen}
                        onToggle={setKaveriTableOpen}
                        className="sd-s11__collapse"
                      >
                        <div className="kaveri-table">
                          <div className="kaveri-table__registration">
                            <div className="kaveri-table__row">
                              <div className="kaveri-table__label">{t('s12_kav_reg_no')}</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.registrationNumber}</div>
                              <div className="kaveri-table__label">{t('s12_kav_village')}</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.village}</div>
                            </div>
                            <div className="kaveri-table__row kaveri-table__row--mid">
                              <div className="kaveri-table__label">{t('s12_kav_nature_deed')}</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.natureOfDeed}</div>
                              <div className="kaveri-table__label">{t('s12_kav_hobli')}</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.hobli}</div>
                            </div>
                            <div className="kaveri-table__row kaveri-table__row--mid">
                              <div className="kaveri-table__label">{t('s12_kav_prop_id')}</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.propertyId}</div>
                              <div className="kaveri-table__label">{t('s12_kav_sro')}</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.sroName}</div>
                            </div>
                            <div className="kaveri-table__row kaveri-table__row--mid">
                              <div className="kaveri-table__label">{t('s12_kav_doc_id')}</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.documentId}</div>
                              <div className="kaveri-table__label">{t('s12_kav_zone')}</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.zoneName}</div>
                            </div>
                          </div>

                          <div className="kaveri-table__spacer" />

                          <div className="kaveri-table__boundaries">
                            <div className="kaveri-table__bnd-header">
                              <div className="kaveri-table__bnd-label">{t('s12_kav_directions')}</div>
                              <div className="kaveri-table__bnd-cell">{t('s12_kav_east')}</div>
                              <div className="kaveri-table__bnd-cell">{t('s12_kav_west')}</div>
                              <div className="kaveri-table__bnd-cell">{t('s12_kav_north')}</div>
                              <div className="kaveri-table__bnd-cell kaveri-table__bnd-cell--last">{t('s12_kav_south')}</div>
                            </div>
                            <div className="kaveri-table__bnd-body">
                              <div className="kaveri-table__bnd-label">{t('s12_kav_checkbandi')}</div>
                              <div className="kaveri-table__bnd-cell">{MOCK_KAVERI.boundaries.east}</div>
                              <div className="kaveri-table__bnd-cell">{MOCK_KAVERI.boundaries.west}</div>
                              <div className="kaveri-table__bnd-cell">{MOCK_KAVERI.boundaries.north}</div>
                              <div className="kaveri-table__bnd-cell kaveri-table__bnd-cell--last">{MOCK_KAVERI.boundaries.south}</div>
                            </div>
                          </div>

                          <div className="kaveri-table__spacer" />

                          <div className="kaveri-table__schedule">
                            <div className="kaveri-table__row">
                              <div className="kaveri-table__label">{t('s12_kav_sch_type')}</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.schedules[0].type}</div>
                              <div className="kaveri-table__label">{t('s12_kav_prop_area')}</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.schedules[0].propertyArea}</div>
                            </div>
                            <div className="kaveri-table__row kaveri-table__row--mid">
                              <div className="kaveri-table__label">{t('s12_kav_sch_desc')}</div>
                              <div className="kaveri-table__value kaveri-table__value--span">{MOCK_KAVERI.schedules[0].description}</div>
                            </div>
                          </div>

                          <div className="kaveri-table__spacer" />

                          <div className="kaveri-table__parties">
                            {MOCK_KAVERI.parties.map((party, i) => (
                              <div className="kaveri-table__party" key={i}>
                                <div className="kaveri-table__party-left">
                                  <div className={`kaveri-table__row${i === 0 ? '' : ' kaveri-table__row--party-top'}`}>
                                    <div className="kaveri-table__label">{t('s12_kav_party_name')}</div>
                                    <div className="kaveri-table__value kaveri-table__value--last">{party.name}</div>
                                  </div>
                                  <div className="kaveri-table__row kaveri-table__row--mid">
                                    <div className="kaveri-table__label">{t('s12_kav_party_type')}</div>
                                    <div className="kaveri-table__value kaveri-table__value--last">{party.type}</div>
                                  </div>
                                </div>
                                <div className="kaveri-table__party-right">
                                  <div className="kaveri-table__label">{t('s12_kav_party_addr')}</div>
                                  <div className="kaveri-table__value kaveri-table__value--last">{party.address}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CollapseHeader>

                      {/* Select property and schedule */}
                      <div className="sd-s12__group">
                        <p className="sd-s12__group-label">{t('s12_select_group')}</p>
                        <Table
                          columns={[t('s12_col_sel_prop'), t('s12_col_prop_id'), t('s12_col_doc_id'), t('s12_col_village'), t('s12_col_sro')]}
                          rows={propertyRows}
                          className="sd-s12__table"
                        />
                        <Table
                          columns={[t('s12_col_sel_sch'), t('s12_col_sch_type'), t('s12_col_sch_desc')]}
                          rows={scheduleRows}
                          className="sd-s12__table sd-s12__table--gap"
                        />
                      </div>

                      {/* Yes-flow Save and Continue / Edit */}
                      <div className="sd-s12__actions">
                        <Button variant="primary" disabled={!canSave12} onClick={handleSave12}>
                          {t('s12_btn_save')}
                        </Button>
                        <Button variant="error" disabled={!s12Saved} onClick={handleEdit12}>
                          {t('s12_btn_edit')}
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* ── NO flow ────────────────────────────────────── */}
              {kaveriYes === false && (
                <div className="sd-s12__no-flow">
                  <div className="sd-s12__no-flow-row">
                    <Dropdown
                      label={t('s12_no_doc_type')}
                      required
                      value={noFlowDocType}
                      onChange={(e) => setNoFlowDocType(e.target.value)}
                      options={NO_FLOW_DOC_OPTIONS}
                      caption={t('s12_no_doc_caption')}
                      captionVariant="info"
                    />
                    <Input
                      label={t('s12_no_doc_no')}
                      required
                      placeholder="e.g. XXX-X-XXXXX-2004-05"
                      value={noFlowDocNo}
                      onChange={(e) => setNoFlowDocNo(e.target.value)}
                      inputType="alphanumeric-code"
                      caption={t('s12_no_doc_no_caption')}
                      captionVariant="info"
                    />
                    <DatePicker
                      label={t('s12_no_doc_date')}
                      required
                      value={noFlowDocDate}
                      onChange={(e) => setNoFlowDocDate(e.target.value)}
                      caption={t('s12_no_doc_date_caption')}
                      captionVariant="info"
                    />
                  </div>

                  <div className="sd-s12__upload-block">
                    <FileUpload
                      label={t('s12_no_upload')}
                      required
                      fileName={noFlowFileName}
                      uploadStatus={noFlowUploadStatus}
                      onUpload={handleNoFlowFileUpload}
                      onRemove={handleNoFlowFileRemove}
                      caption={
                        noFlowUploadStatus === 'error'
                          ? t('s12_no_upload_error')
                          : noFlowUploadStatus === 'success'
                          ? t('s12_no_upload_success')
                          : t('s12_no_upload_info')
                      }
                      captionVariant={
                        noFlowUploadStatus === 'error' ? 'error'
                        : noFlowUploadStatus === 'success' ? 'success'
                        : 'info'
                      }
                    />
                  </div>

                </div>
              )}

            </div>
          </SectionBox>
          </div>
        )}

        {/* ═══ SECTION 1.3 ════════════════════════════════════ */}
        {s13Visible && (
          <div ref={s13Ref}>

            {kaveriYes === true ? (
              /* ── 1.3 Yes flow — Review ─────────────────────── */
              <SectionBox number="1.3" title={t('s13_title_yes')} open className="sd-s13-box">
                <div className="sd-s13">
                  <Table
                    columns={[t('s13_col_gp'), t('s13_col_village'), t('s13_col_reg_no'), t('s13_col_asset')]}
                    rows={yesReviewRow}
                    className="sd-s13__summary-table"
                  />
                  <div className="sd-s13__success-row">
                    <span className="material-icons-outlined sd-s13__success-icon">check_circle_outline</span>
                    <span className="sd-s13__success-text">
                      {t('s13_success_yes')}
                    </span>
                  </div>
                  <div className="sd-s13__id-row">
                    <div className="sd-s13__id-field">
                      <span className="sd-s13__id-label">{t('s13_app_id')}</span>
                      <span className="sd-s13__id-value">{MOCK_KAVERI.appId}</span>
                    </div>
                    <div className="sd-s13__id-field">
                      <span className="sd-s13__id-label">{t('s13_prop_id_eswathu')}</span>
                      <span className="sd-s13__id-value">{MOCK_KAVERI.generatedPropertyId}</span>
                    </div>
                  </div>
                </div>
              </SectionBox>
            ) : (
              /* ── 1.3 No flow — Review Details ──────────────── */
              <SectionBox number="1.3" title={t('s13_title_no')} open className="sd-s13-box">
                <div className="sd-s13">
                  <Table
                    columns={[t('s13_col_gp'), t('s13_col_village'), t('s13_col_doc_type'), t('s13_col_doc_no'), t('s13_col_doc_date'), t('s13_col_asset')]}
                    rows={noReviewRow}
                    className="sd-s13__summary-table"
                  />
                  <div className="sd-s13__success-row">
                    <span className="material-icons-outlined sd-s13__success-icon">check_circle_outline</span>
                    <span className="sd-s13__success-text">
                      {t('s13_success_no')}
                    </span>
                  </div>
                  <div className="sd-s13__id-row">
                    <div className="sd-s13__id-field">
                      <span className="sd-s13__id-label">{t('s13_app_no')}</span>
                      <span className="sd-s13__id-value">{MOCK_KAVERI.appId}</span>
                    </div>
                    <div className="sd-s13__id-field">
                      <span className="sd-s13__id-label">{t('s13_prop_id_eswathu')}</span>
                      <span className="sd-s13__id-value">{MOCK_KAVERI.generatedPropertyId}</span>
                    </div>
                  </div>
                </div>
              </SectionBox>
            )}

          </div>
        )}

        {/* ═══ SAVE AND PROCEED ════════════════════════════════ */}
        {s13Visible && (
          <div className="sd-page__proceed">
            <Button
              variant="primary"
              disabled={isPageComplete}
              onClick={() => { setIsPageComplete(true); onNext?.(); }}
            >
              {t('btn_save_proceed')}
            </Button>
          </div>
        )}

      </div>

      {/* ── Fullscreen overlays ─────────────────────────────── */}
      {fetchStatus === 'loading' && (
        <div className="sd-page__overlay">
          <ProgressCircle size={80} percentage={60} />
        </div>
      )}

      {fetchStatus === 'error' && (
        <div className="sd-page__overlay">
          <ErrorMessageCard
            message={t('err_kaveri_fetch')}
            onOk={handleErrorDismiss}
          />
        </div>
      )}

      {showKaveriWarn && (
        <div className="sd-page__overlay" onClick={handleKaveriWarnCancel}>
          <div onClick={(e) => e.stopPropagation()}>
            <ErrorMessageCard
              message={t('err_kaveri_warn')}
              subMessage={t('err_kaveri_warn_sub')}
              actions={[
                { label: t('err_kaveri_yes_edit'), variant: 'primary', onClick: handleKaveriWarnConfirm },
                { label: t('err_kaveri_cancel'),   variant: 'error',   onClick: handleKaveriWarnCancel  },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SaleDeedDetailsPage;
