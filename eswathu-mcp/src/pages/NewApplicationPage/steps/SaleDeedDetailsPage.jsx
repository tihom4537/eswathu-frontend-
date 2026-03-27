import { useState, useRef, useEffect } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import StepHeader from '../../../components/StepHeader/StepHeader';
import SectionBox from '../../../components/SectionBox/SectionBox';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import DatePicker from '../../../components/DatePicker/DatePicker';
import Button from '../../../components/Button/Button';
import FileUpload from '../../../components/FileUpload/FileUpload';
import ErrorMessageCard from '../../../components/ErrorMessageCard/ErrorMessageCard';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import CollapseHeader from '../../../components/CollapseHeader/CollapseHeader';
import Table from '../../../components/Table/Table';
import Tooltip from '../../../components/Tooltip/Tooltip';
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

/* ── No-flow document type options ─────────────────────────── */
const NO_FLOW_DOC_OPTIONS = [
  { value: 'property_card',        label: 'Property card' },
  { value: 'inherited_property',   label: 'Inherited property' },
  { value: 'division_of_property', label: 'Division of property' },
  { value: 'gift_deed',            label: 'Gift Deed' },
  { value: 'will',                 label: 'Will' },
  { value: 'release_deed',         label: 'Release Deed' },
  { value: 'transfer_certificate', label: 'Transfer certificate' },
  { value: 'court_order',          label: 'Court order' },
  { value: 'division_letter',      label: 'Division letter' },
];

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
        onLogout={() => onNavigate && onNavigate('login')}
      />

      <StepHeader
        step="Step 1"
        title="Sale/ property registration deed details"
        onBack={onBack}
        onNext={onNext}
        isBackEnabled={isBackEnabled}
        isNextEnabled={isPageComplete}
      />

      <div className="sd-page__sections">

        {/* ═══ SECTION 1.1 — Location and property document details ═══ */}
        <SectionBox number="1.1" title="Location and property document details" open className="sd-s11-box">
          <div className="sd-s12">

            <div className="sd-s12__group">
              <p className="sd-s12__group-label">Location details</p>
              <div className="sd-s12__four-col">
                <Dropdown
                  label="District"
                  required
                  value={locDistrict}
                  onChange={(e) => setLocDistrict(e.target.value)}
                  disabled={s11Saved}
                  options={[
                    { value: 'Bengaluru Rural',  label: 'Bengaluru Rural' },
                    { value: 'Bengaluru Urban',  label: 'Bengaluru Urban' },
                    { value: 'Mysuru',           label: 'Mysuru' },
                    { value: 'Tumkur',           label: 'Tumkur' },
                    { value: 'Mandya',           label: 'Mandya' },
                  ]}
                />
                <Dropdown
                  label="Taluk"
                  required
                  value={locTaluk}
                  onChange={(e) => setLocTaluk(e.target.value)}
                  disabled={s11Saved}
                  options={[
                    { value: 'Devanahalli',      label: 'Devanahalli' },
                    { value: 'Hosakote',         label: 'Hosakote' },
                    { value: 'Nelamangala',      label: 'Nelamangala' },
                    { value: 'Doddaballapura',   label: 'Doddaballapura' },
                    { value: 'Ramanagara',       label: 'Ramanagara' },
                  ]}
                />
                <Dropdown
                  label="Panchayat"
                  required
                  value={locPanchayat}
                  onChange={(e) => setLocPanchayat(e.target.value)}
                  disabled={s11Saved}
                  options={[
                    { value: 'Doddahasala GP',   label: 'Doddahasala GP' },
                    { value: 'Sadahalli GP',     label: 'Sadahalli GP' },
                    { value: 'Vijayapura GP',    label: 'Vijayapura GP' },
                    { value: 'Bashettihalli GP', label: 'Bashettihalli GP' },
                    { value: 'Yelahanka GP',     label: 'Yelahanka GP' },
                  ]}
                />
                <Dropdown
                  label="Village"
                  required
                  value={locVillage}
                  onChange={(e) => setLocVillage(e.target.value)}
                  disabled={s11Saved}
                  options={[
                    { value: 'Doddahasala',      label: 'Doddahasala' },
                    { value: 'Sadahalli',        label: 'Sadahalli' },
                    { value: 'Vijayapura',       label: 'Vijayapura' },
                    { value: 'Bashettihalli',    label: 'Bashettihalli' },
                    { value: 'Yelahanka',        label: 'Yelahanka' },
                  ]}
                />
              </div>
            </div>

            <div className="sd-s12__group">
              <p className="sd-s12__group-label">Please enter your document details</p>
              <div className="sd-s12__doc-row">
                <div className="sd-s12__asset-input">
                  <Input
                    label="Asset Number"
                    placeholder="Enter your Asset Number"
                    value={assetNumber}
                    onChange={(e) => setAssetNumber(e.target.value)}
                    disabled={s11Saved}
                    required
                    inputType="alphanumeric-code"
                  />
                </div>
                <Tooltip
                  label="Where to find your Asset Number"
                  imageSrc="/images/sample-asset.png"
                  imageAlt="Sample asset document"
                  caption="Click to view sample"
                  className="sd-s12__tooltip"
                />
              </div>
            </div>

            <div className="sd-s12__actions">
              <Button variant="primary" disabled={!canSave11} onClick={handleSave11}>
                Save and Continue
              </Button>
              <Button variant="error" disabled={!s11Saved} onClick={handleEdit11}>
                Edit
              </Button>
            </div>

          </div>
        </SectionBox>

        {/* ═══ SECTION 1.2 — Property registration details ════════ */}
        {s12Visible && (
          <div ref={s12Ref}>
          <SectionBox number="1.2" title="Property registration details" open className="sd-s12-box">
            <div className="sd-s11">

              {/* Radio */}
              <div className="sd-s11__q-block">
                <p className="sd-s11__question">
                  Did the property registration happen after 01/04/2004?
                </p>
                <div className="sd-s11__radios">
                  <RadioButton
                    name="kaveriFlow"
                    value="yes"
                    label="Yes"
                    checked={kaveriYes === true}
                    onChange={() => handleFlowSelect(true)}
                    disabled={fetchStatus === 'loading' || s12Saved}
                  />
                  <RadioButton
                    name="kaveriFlow"
                    value="no"
                    label="No"
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
                        label="Registration Number"
                        placeholder="Enter your Kaveri Registration Number"
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
                      label="Where to find your Registration Number"
                      imageSrc="/images/sample-registration.png"
                      imageAlt="Sample registration document"
                      caption="Click to view sample"
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
                        Fetch Property Details
                      </Button>
                    </div>
                  )}

                  {fetchStatus === 'success' && (
                    <>
                      <div className="sd-s11__success-row">
                        <span className="material-icons-outlined sd-s11__success-icon">check_circle_outline</span>
                        <span className="sd-s11__success-text">
                          Kaveri details fetched successfully. Please proceed to next step.
                        </span>
                      </div>

                      <CollapseHeader
                        title="Kaveri table"
                        open={kaveriTableOpen}
                        onToggle={setKaveriTableOpen}
                        className="sd-s11__collapse"
                      >
                        <div className="kaveri-table">
                          <div className="kaveri-table__registration">
                            <div className="kaveri-table__row">
                              <div className="kaveri-table__label">Registration number</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.registrationNumber}</div>
                              <div className="kaveri-table__label">Village</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.village}</div>
                            </div>
                            <div className="kaveri-table__row kaveri-table__row--mid">
                              <div className="kaveri-table__label">Nature of deed</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.natureOfDeed}</div>
                              <div className="kaveri-table__label">Hobli</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.hobli}</div>
                            </div>
                            <div className="kaveri-table__row kaveri-table__row--mid">
                              <div className="kaveri-table__label">Property ID</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.propertyId}</div>
                              <div className="kaveri-table__label">SRO name</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.sroName}</div>
                            </div>
                            <div className="kaveri-table__row kaveri-table__row--mid">
                              <div className="kaveri-table__label">Document ID</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.documentId}</div>
                              <div className="kaveri-table__label">Zone name</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.zoneName}</div>
                            </div>
                          </div>

                          <div className="kaveri-table__spacer" />

                          <div className="kaveri-table__boundaries">
                            <div className="kaveri-table__bnd-header">
                              <div className="kaveri-table__bnd-label">Directions</div>
                              <div className="kaveri-table__bnd-cell">East</div>
                              <div className="kaveri-table__bnd-cell">West</div>
                              <div className="kaveri-table__bnd-cell">North</div>
                              <div className="kaveri-table__bnd-cell kaveri-table__bnd-cell--last">South</div>
                            </div>
                            <div className="kaveri-table__bnd-body">
                              <div className="kaveri-table__bnd-label">Checkbandi</div>
                              <div className="kaveri-table__bnd-cell">{MOCK_KAVERI.boundaries.east}</div>
                              <div className="kaveri-table__bnd-cell">{MOCK_KAVERI.boundaries.west}</div>
                              <div className="kaveri-table__bnd-cell">{MOCK_KAVERI.boundaries.north}</div>
                              <div className="kaveri-table__bnd-cell kaveri-table__bnd-cell--last">{MOCK_KAVERI.boundaries.south}</div>
                            </div>
                          </div>

                          <div className="kaveri-table__spacer" />

                          <div className="kaveri-table__schedule">
                            <div className="kaveri-table__row">
                              <div className="kaveri-table__label">Schedule type</div>
                              <div className="kaveri-table__value">{MOCK_KAVERI.schedules[0].type}</div>
                              <div className="kaveri-table__label">Property area</div>
                              <div className="kaveri-table__value kaveri-table__value--last">{MOCK_KAVERI.schedules[0].propertyArea}</div>
                            </div>
                            <div className="kaveri-table__row kaveri-table__row--mid">
                              <div className="kaveri-table__label">Schedule description</div>
                              <div className="kaveri-table__value kaveri-table__value--span">{MOCK_KAVERI.schedules[0].description}</div>
                            </div>
                          </div>

                          <div className="kaveri-table__spacer" />

                          <div className="kaveri-table__parties">
                            {MOCK_KAVERI.parties.map((party, i) => (
                              <div className="kaveri-table__party" key={i}>
                                <div className="kaveri-table__party-left">
                                  <div className={`kaveri-table__row${i === 0 ? '' : ' kaveri-table__row--party-top'}`}>
                                    <div className="kaveri-table__label">Party Name</div>
                                    <div className="kaveri-table__value kaveri-table__value--last">{party.name}</div>
                                  </div>
                                  <div className="kaveri-table__row kaveri-table__row--mid">
                                    <div className="kaveri-table__label">Party type</div>
                                    <div className="kaveri-table__value kaveri-table__value--last">{party.type}</div>
                                  </div>
                                </div>
                                <div className="kaveri-table__party-right">
                                  <div className="kaveri-table__label">Party Address</div>
                                  <div className="kaveri-table__value kaveri-table__value--last">{party.address}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CollapseHeader>

                      {/* Select property and schedule */}
                      <div className="sd-s12__group">
                        <p className="sd-s12__group-label">Select property and schedule details</p>
                        <Table
                          columns={['Select property', 'Property ID', 'Document ID', 'Village', 'SRO Name']}
                          rows={propertyRows}
                          className="sd-s12__table"
                        />
                        <Table
                          columns={['Select schedule', 'Schedule type', 'Schedule description']}
                          rows={scheduleRows}
                          className="sd-s12__table sd-s12__table--gap"
                        />
                      </div>

                      {/* Yes-flow Save and Continue / Edit */}
                      <div className="sd-s12__actions">
                        <Button variant="primary" disabled={!canSave12} onClick={handleSave12}>
                          Save and Continue
                        </Button>
                        <Button variant="error" disabled={!s12Saved} onClick={handleEdit12}>
                          Edit
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
                      label="Document Type"
                      required
                      value={noFlowDocType}
                      onChange={(e) => setNoFlowDocType(e.target.value)}
                      options={NO_FLOW_DOC_OPTIONS}
                      caption="Please select any of these other documents"
                      captionVariant="info"
                    />
                    <Input
                      label="Document No."
                      required
                      placeholder="e.g. XXX-X-XXXXX-2004-05"
                      value={noFlowDocNo}
                      onChange={(e) => setNoFlowDocNo(e.target.value)}
                      inputType="alphanumeric-code"
                      caption="Enter the number relevant to selected document"
                      captionVariant="info"
                    />
                    <DatePicker
                      label="Document Date"
                      required
                      value={noFlowDocDate}
                      onChange={(e) => setNoFlowDocDate(e.target.value)}
                      caption="Please enter day-month-year"
                      captionVariant="info"
                    />
                  </div>

                  <div className="sd-s12__upload-block">
                    <FileUpload
                      label="Upload Document"
                      required
                      fileName={noFlowFileName}
                      uploadStatus={noFlowUploadStatus}
                      onUpload={handleNoFlowFileUpload}
                      onRemove={handleNoFlowFileRemove}
                      caption={
                        noFlowUploadStatus === 'error'
                          ? 'Document exceeds 5MB'
                          : noFlowUploadStatus === 'success'
                          ? 'Document uploaded successfully'
                          : 'Only PDF size up-to 5MB allowed'
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
              <SectionBox number="1.3" title="Review" open className="sd-s13-box">
                <div className="sd-s13">
                  <Table
                    columns={['Gram Panchayat', 'Village', 'Registration number', 'Asset number']}
                    rows={yesReviewRow}
                    className="sd-s13__summary-table"
                  />
                  <div className="sd-s13__success-row">
                    <span className="material-icons-outlined sd-s13__success-icon">check_circle_outline</span>
                    <span className="sd-s13__success-text">
                      Application and Property ID have been generated. Kindly note both the IDs
                      for future use to track the status of your application.
                    </span>
                  </div>
                  <div className="sd-s13__id-row">
                    <div className="sd-s13__id-field">
                      <span className="sd-s13__id-label">Application ID</span>
                      <span className="sd-s13__id-value">{MOCK_KAVERI.appId}</span>
                    </div>
                    <div className="sd-s13__id-field">
                      <span className="sd-s13__id-label">Property ID (eswathu)</span>
                      <span className="sd-s13__id-value">{MOCK_KAVERI.generatedPropertyId}</span>
                    </div>
                  </div>
                </div>
              </SectionBox>
            ) : (
              /* ── 1.3 No flow — Review Details ──────────────── */
              <SectionBox number="1.3" title="Review Details" open className="sd-s13-box">
                <div className="sd-s13">
                  <Table
                    columns={['Gram Panchayat', 'Village', 'Document type', 'Document number', 'Document registration date', 'Asset number']}
                    rows={noReviewRow}
                    className="sd-s13__summary-table"
                  />
                  <div className="sd-s13__success-row">
                    <span className="material-icons-outlined sd-s13__success-icon">check_circle_outline</span>
                    <span className="sd-s13__success-text">
                      Application No. and Property ID have been generated. Kindly note both the IDs
                      for future use to track the status of your application.
                    </span>
                  </div>
                  <div className="sd-s13__id-row">
                    <div className="sd-s13__id-field">
                      <span className="sd-s13__id-label">Application No.</span>
                      <span className="sd-s13__id-value">{MOCK_KAVERI.appId}</span>
                    </div>
                    <div className="sd-s13__id-field">
                      <span className="sd-s13__id-label">Property ID (eswathu)</span>
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
              onClick={() => { setIsPageComplete(true); onNext?.(); }}
            >
              Save and Proceed
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
            message="Error in fetching details from Kaveri. Please Retry or Contact Kaveri helpline XXXXXXXXXX."
            onOk={handleErrorDismiss}
          />
        </div>
      )}

      {showKaveriWarn && (
        <div className="sd-page__overlay" onClick={handleKaveriWarnCancel}>
          <div onClick={(e) => e.stopPropagation()}>
            <ErrorMessageCard
              message="Editing the Kaveri Registration Number will cause you to lose progress in multiple sections of the form including Owner KYC, Property Details and Property Classification. Are you sure you want to proceed?"
              subMessage="This action cannot be undone."
              actions={[
                { label: 'Yes, Edit', variant: 'primary', onClick: handleKaveriWarnConfirm },
                { label: 'Cancel',    variant: 'error',   onClick: handleKaveriWarnCancel  },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SaleDeedDetailsPage;
