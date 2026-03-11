import { useState, useRef, useEffect } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import StepHeader from '../../../components/StepHeader/StepHeader';
import Stepper from '../../../components/Stepper/Stepper';
import SectionBox from '../../../components/SectionBox/SectionBox';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Button from '../../../components/Button/Button';
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
}) => {
  /* ── Page-level completion (enables forward arrow) ──────── */
  const [isPageComplete, setIsPageComplete] = useState(false);

  /* Reset completion when upstream triggers a reset */
  useEffect(() => {
    if (completionResetKey > 0) setIsPageComplete(false);
  }, [completionResetKey]);
  /* ── Section 1.1 State ───────────────────────────────────── */
  const [kaveriYes, setKaveriYes] = useState(true); // true | false
  const [radioLocked, setRadioLocked] = useState(false);
  const [regNumber, setRegNumber] = useState('');
  const [fetchStatus, setFetchStatus] = useState('idle'); // idle | loading | success | error
  const [kaveriTableOpen, setKaveriTableOpen] = useState(false);
  const fetchAttempt = useRef(0);

  /* ── Section 1.2 State ───────────────────────────────────── */
  const [s12Visible, setS12Visible] = useState(false);
  const [assetNumber, setAssetNumber] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [s12Saved, setS12Saved] = useState(false);
  const [locDistrict, setLocDistrict] = useState('');
  const [locTaluk, setLocTaluk] = useState('');
  const [locPanchayat, setLocPanchayat] = useState('');
  const [locVillage, setLocVillage] = useState('');

  /* Expose village name to parent whenever it changes */
  useEffect(() => {
    onVillageChange?.(locVillage);
  }, [locVillage]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Section 1.3 State ───────────────────────────────────── */
  const [s13Visible, setS13Visible] = useState(false);
  const s13Ref = useRef(null);

  useEffect(() => {
    if (s13Visible && s13Ref.current) {
      setTimeout(() => s13Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, [s13Visible]);

  /* ── Kaveri reg-no edit warning ─────────────────────────── */
  const [showKaveriWarn, setShowKaveriWarn] = useState(false);

  /* ── Handlers ───────────────────────────────────────────── */
  const handleFlowSelect = (isYes) => {
    if (radioLocked) return;
    setKaveriYes(isYes);
    if (!isYes) {
      setS12Visible(true);
    } else {
      setS12Visible(false);
    }
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
      setS12Visible(true);
      setLocDistrict(MOCK_KAVERI.district);
      setLocTaluk(MOCK_KAVERI.taluk);
      setLocPanchayat(MOCK_KAVERI.panchayat);
      setLocVillage(MOCK_KAVERI.village);
    }, 1500);
  };

  const handleErrorDismiss = () => {
    setFetchStatus('idle');
  };

  const handleClear = () => {
    setRegNumber('');
    setFetchStatus('idle');
    setRadioLocked(false);
    setKaveriTableOpen(false);
    setS12Visible(false);
    setAssetNumber('');
    setSelectedProperty(null);
    setSelectedSchedule(null);
    setS12Saved(false);
    setS13Visible(false);
    setIsPageComplete(false);
    setLocDistrict('');
    setLocTaluk('');
    setLocPanchayat('');
    setLocVillage('');
    fetchAttempt.current = 0;
  };

  /* Intercept the X-button click: show warning if data exists downstream */
  const handleKaveriXClick = () => {
    setShowKaveriWarn(true);
  };

  const handleKaveriWarnConfirm = () => {
    setShowKaveriWarn(false);
    handleClear();
    onResetDownstream?.();
  };

  const handleKaveriWarnCancel = () => {
    setShowKaveriWarn(false);
  };

  const handleSave12 = () => {
    setS12Saved(true);
    setS13Visible(true);
  };

  const handleEdit12 = () => {
    setS12Saved(false);
    setS13Visible(false);
  };

  /* ── Property & Schedule table rows (with RadioButton cells) */
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

  /* ── Save enabled only when all fields filled ──────────── */
  const canSave12 =
    !s12Saved &&
    assetNumber.trim() &&
    selectedProperty !== null &&
    selectedSchedule !== null;

  /* ── Review row ────────────────────────────────────────── */
  const reviewRow = [[
    'Bengaluru Urban',
    kaveriYes ? MOCK_KAVERI.village : '—',
    regNumber || (kaveriYes ? MOCK_KAVERI.registrationNumber : '—'),
    assetNumber || '—',
  ]];

  return (
    <div className="sd-page">
      <NavigationBar
        variant="postLogin"
        username={username}
        onLogout={() => onNavigate && onNavigate('login')}
      />

      {/* ── Breadcrumb ────────────────────────────────── */}
      <Breadcrumb
        steps={bcStepNames}
        currentStep={currentBCStep}
        completedSteps={completedBCSteps}
        onStepClick={onBCStepClick}
      />

      {/* ── Stepper (standalone, above step header) ──── */}
      <Stepper activeStep={0} />

      {/* ── Step heading banner ───────────────────────── */}
      <StepHeader
        step="Step 1"
        title="Sale/ property registration deed details"
        onBack={onBack}
        onNext={onNext}
        isBackEnabled={isBackEnabled}
        isNextEnabled={isPageComplete}
      />

      <div className="sd-page__sections">

        {/* ═══ SECTION 1.1 — Registration details ═════════════ */}
        <SectionBox number="1.1" title="Registration details" open className="sd-s11-box">
          <div className="sd-s11">

            {/* Question: before/after 2004? */}
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
                  disabled={radioLocked}
                />
                <RadioButton
                  name="kaveriFlow"
                  value="no"
                  label="No"
                  checked={kaveriYes === false}
                  onChange={() => handleFlowSelect(false)}
                  disabled={radioLocked}
                />
              </div>
            </div>

            {/* ── YES Kaveri flow ────────────────────────── */}
            {kaveriYes === true && (
              <div className="sd-s11__yes-block">

                {/* Registration Number + Tooltip side by side */}
                <div className="sd-s11__reg-row">
                  <div className="sd-s11__reg-input">
                    <Input
                      label="Registration Number"
                      placeholder="Enter your Kaveri Registration Number"
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      disabled={fetchStatus === 'loading'}
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

                {/* Fetch button */}
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

                {/* Success message + Kaveri table (collapsible) */}
                {fetchStatus === 'success' && (
                  <>
                    <div className="sd-s11__success-row">
                      <span className="material-icons-outlined sd-s11__success-icon">
                        check_circle_outline
                      </span>
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

                        {/* ── Registration Info ─────────────── */}
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

                        {/* ── Spacer ────────────────────────── */}
                        <div className="kaveri-table__spacer" />

                        {/* ── Boundaries ────────────────────── */}
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

                        {/* ── Spacer ────────────────────────── */}
                        <div className="kaveri-table__spacer" />

                        {/* ── Schedule ──────────────────────── */}
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

                        {/* ── Spacer ────────────────────────── */}
                        <div className="kaveri-table__spacer" />

                        {/* ── Parties ──────────────────────── */}
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
                  </>
                )}
              </div>
            )}

            {/* ── NO Kaveri flow ─────────────────────────── */}
            {kaveriYes === false && (
              <div className="sd-s11__no-kaveri-notice">
                <span className="material-icons-outlined sd-s11__info-icon">info</span>
                <span>
                  Since your property registration was before 01/04/2004, please enter
                  your property details manually in Section 1.2 below.
                </span>
              </div>
            )}

          </div>
        </SectionBox>

        {/* ═══ SECTION 1.2 — Property details ════════════════ */}
        {s12Visible && (
          <SectionBox number="1.2" title="Property details" open className="sd-s12-box">
            <div className="sd-s12">

              {/* Location details — 4 frozen-with-edit dropdowns */}
              <div className="sd-s12__group">
                <p className="sd-s12__group-label">Location details</p>
                <div className="sd-s12__four-col">
                  <Dropdown
                    label="District"
                    value={locDistrict}
                    onChange={(e) => setLocDistrict(e.target.value)}
                    frozen={kaveriYes === true}
                    disabled={s12Saved}
                    options={[
                      { value: 'Bengaluru Rural', label: 'Bengaluru Rural' },
                      { value: 'Bengaluru Urban', label: 'Bengaluru Urban' },
                      { value: 'Mysuru', label: 'Mysuru' },
                      { value: 'Tumkur', label: 'Tumkur' },
                      { value: 'Mandya', label: 'Mandya' },
                    ]}
                  />
                  <Dropdown
                    label="Taluk"
                    value={locTaluk}
                    onChange={(e) => setLocTaluk(e.target.value)}
                    frozen={kaveriYes === true}
                    disabled={s12Saved}
                    options={[
                      { value: 'Devanahalli', label: 'Devanahalli' },
                      { value: 'Hosakote', label: 'Hosakote' },
                      { value: 'Nelamangala', label: 'Nelamangala' },
                      { value: 'Doddaballapura', label: 'Doddaballapura' },
                      { value: 'Ramanagara', label: 'Ramanagara' },
                    ]}
                  />
                  <Dropdown
                    label="Panchayat"
                    required
                    value={locPanchayat}
                    onChange={(e) => setLocPanchayat(e.target.value)}
                    frozen={kaveriYes === true}
                    disabled={s12Saved}
                    options={[
                      { value: 'Doddahasala GP', label: 'Doddahasala GP' },
                      { value: 'Sadahalli GP', label: 'Sadahalli GP' },
                      { value: 'Vijayapura GP', label: 'Vijayapura GP' },
                      { value: 'Bashettihalli GP', label: 'Bashettihalli GP' },
                      { value: 'Yelahanka GP', label: 'Yelahanka GP' },
                    ]}
                  />
                  <Dropdown
                    label="Village"
                    value={locVillage}
                    onChange={(e) => setLocVillage(e.target.value)}
                    frozen={kaveriYes === true}
                    disabled={s12Saved}
                    options={[
                      { value: 'Doddahasala', label: 'Doddahasala' },
                      { value: 'Sadahalli', label: 'Sadahalli' },
                      { value: 'Vijayapura', label: 'Vijayapura' },
                      { value: 'Bashettihalli', label: 'Bashettihalli' },
                      { value: 'Yelahanka', label: 'Yelahanka' },
                    ]}
                  />
                </div>
              </div>

              {/* Document details — Asset Number + Tooltip */}
              <div className="sd-s12__group">
                <p className="sd-s12__group-label">Please enter your document details</p>
                <div className="sd-s12__doc-row">
                  <div className="sd-s12__asset-input">
                    <Input
                      label="Asset Number"
                      placeholder="Enter your Asset Number"
                      value={assetNumber}
                      onChange={(e) => setAssetNumber(e.target.value)}
                      disabled={s12Saved}
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

              {/* Save and Continue / Edit */}
              <div className="sd-s12__actions">
                <Button
                  variant="primary"
                  disabled={!canSave12}
                  onClick={handleSave12}
                >
                  Save and Continue
                </Button>
                <Button
                  variant="error"
                  disabled={!s12Saved}
                  onClick={handleEdit12}
                >
                  Edit
                </Button>
              </div>

            </div>
          </SectionBox>
        )}

        {/* ═══ SECTION 1.3 — Review ═══════════════════════════ */}
        {s13Visible && (
          <div ref={s13Ref}>
          <SectionBox number="1.3" title="Review" open className="sd-s13-box">
            <div className="sd-s13">

              <Table
                columns={['Gram Panchayat', 'Village', 'Registration number', 'Asset number']}
                rows={reviewRow}
                className="sd-s13__summary-table"
              />

              <div className="sd-s13__success-row">
                <span className="material-icons-outlined sd-s13__success-icon">
                  check_circle_outline
                </span>
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
          </div>
        )}

        {/* ═══ SAVE AND PROCEED (centered, outside sections) ══ */}
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

      {/* ── Fullscreen overlays ─────────────────────────── */}
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

      {/* ── Kaveri Registration Number edit warning ──────────── */}
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
