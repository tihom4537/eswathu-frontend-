import { useState, useRef, useEffect } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import StepHeader from '../../../components/StepHeader/StepHeader';
import Stepper from '../../../components/Stepper/Stepper';
import SectionBox from '../../../components/SectionBox/SectionBox';
import InfoBox from '../../../components/InfoBox/InfoBox';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import Checkbox from '../../../components/Checkbox/Checkbox';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import Tooltip from '../../../components/Tooltip/Tooltip';
import Table from '../../../components/Table/Table';
import './ECStep.css';

/* ── Mock data ─────────────────────────────────────────────── */
const DEED_OPTIONS = [
  { value: 'deed1', label: 'KA-BLR-2024-12345 — Sale Deed (15/08/2024)' },
  { value: 'deed2', label: 'KA-BLR-2022-67890 — Sale Deed (03/05/2022)' },
];

const MOCK_EC = {
  ecNumber:             'EC-2024-98765',
  fromDate:             '14-08-2024',
  toDate:               '10-03-2026',
  totalDeeds:           1,
  registrationNumber:   'KA-BLR-2024-12345',
  isLatest:             'Yes',
  locationMeasurement:  'XXXXXXXXXXXXXXX',
  articleName:          'Sale',
  registrationDateTime: 'Sale deed',
  executantName:        'XXXXXXXXXXXXXXX',
  claimantName:         'XXXXXXXXXXXXXXX',
  totalRegistrations:   'XXXXXXXXXXXXXXX',
  isLatestRegistration: 'Yes',
  latestRegistrationNo: 'XXXXXXXXXXXXXXX',
};

/* ── Section 5.3 mock preview data ──────────────────────────── */
const MOCK_OWNERS = [
  {
    name:     'Doddahasala',
    relation: 'D/o Sushil Kumar Singh',
    idNo:     'XXXXXXXXXXXX',
    address:  'No. 6, 5th main, Vidhana Soudha, Bengaluru, Karnataka- 560043',
  },
  {
    name:     'Doddahasala',
    relation: 'D/o Sushil Kumar Singh',
    idNo:     'XXXXXXXXXXXX',
    address:  'No. 6, 5th main, Vidhana Soudha, Bengaluru, Karnataka- 560043',
  },
];

/* ─────────────────────────────────────────────────────────── */

const ECStep = ({
  onNavigate,
  username = '',
  onBack,
  onNext,
  isBackEnabled = true,
  currentBCStep = 4,
  completedBCSteps = [],
  onBCStepClick,
  bcStepNames = [],
  completionResetKey = 0,
}) => {
  /* ── Section 5.1 state ────────────────────────────────────── */
  const [selectedDeed, setSelectedDeed] = useState('');
  const [ecNumber, setEcNumber]         = useState('');
  // 'idle' | 'loading' | 'success'
  const [fetchStatus, setFetchStatus]   = useState('idle');
  const [s51Saved, setS51Saved]         = useState(false);

  /* ── Section 5.2 state ────────────────────────────────────── */
  const [s52Visible, setS52Visible]     = useState(false);
  const [checked1, setChecked1]         = useState(false);
  const [checked2, setChecked2]         = useState(false);

  /* ── View state: 'main' | 'preview' | 'final' ─────────────── */
  const [ecView, setEcView]             = useState('main');

  /* ── Page completion (enables forward arrow) ──────────────── */
  const [isPageComplete, setIsPageComplete] = useState(false);

  /* ── Scroll refs ──────────────────────────────────────────── */
  const s52Ref = useRef(null);

  useEffect(() => {
    if (s52Visible && s52Ref.current) {
      s52Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [s52Visible]);

  /* Scroll to top whenever the view switches */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [ecView]);

  useEffect(() => {
    if (completionResetKey > 0) setIsPageComplete(false);
  }, [completionResetKey]);

  /* ── Derived ──────────────────────────────────────────────── */
  const canFetch    = selectedDeed && ecNumber.trim() && fetchStatus !== 'success';
  const canValidate = fetchStatus === 'success' && !s51Saved;
  const canProceed  = checked1 && checked2;

  /* ── Handlers ─────────────────────────────────────────────── */
  const handleFetch = () => {
    setFetchStatus('loading');
    setTimeout(() => setFetchStatus('success'), 1500);
  };

  const handleEditFetch = () => {
    setFetchStatus('idle');
    setSelectedDeed('');
    setEcNumber('');
    setS51Saved(false);
    setS52Visible(false);
    setChecked1(false);
    setChecked2(false);
    setIsPageComplete(false);
  };

  const handleValidate = () => {
    setS51Saved(true);
    setS52Visible(true);
  };

  const handleEditValidate = () => {
    setS51Saved(false);
    setS52Visible(false);
    setChecked1(false);
    setChecked2(false);
    setIsPageComplete(false);
  };

  const handleVerify = () => {
    setEcView('preview');
  };

  /* ── Section 5.3 handlers ─────────────────────────────────── */
  const handleEditStepEC = () => {
    setEcView('main');
  };

  const handleFinalSave = () => {
    setIsPageComplete(true);
    setEcView('final');
  };

  const handlePreviousAndEdit = () => {
    setEcView('preview');
  };

  /* ── Back arrow: respects ecView ──────────────────────────── */
  const handleBackNav = () => {
    if (ecView === 'preview') { setEcView('main'); return; }
    if (ecView === 'final')   { setEcView('preview'); return; }
    onBack?.();
  };

  /* ─────────────────────────────────────────────────────────── */
  return (
    <div className="ec-page">
      <NavigationBar
        variant="postLogin"
        username={username}
        onLogout={() => onNavigate?.('login')}
      />

      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <Breadcrumb
        steps={bcStepNames}
        currentStep={currentBCStep}
        completedSteps={completedBCSteps}
        onStepClick={onBCStepClick}
      />

      {/* ── Stepper ─────────────────────────────────────────── */}
      <Stepper activeStep={4} />

      {/* ── Step header ─────────────────────────────────────── */}
      <StepHeader
        step="Step 5"
        title="Upload EC"
        onBack={handleBackNav}
        onNext={onNext}
        isBackEnabled={ecView !== 'main' ? true : isBackEnabled}
        isNextEnabled={isPageComplete}
        hideNext
      />

      <div className="ec-page__sections">

        {/* ── Page-level notice (above SectionBox) ────────── */}
        <div className="ec-page__notice">
          <InfoBox variant="red">
            If you do not have your Encumbrance Certificate (Form 15),{' '}
            <a href="#" className="ec-page__notice-link">please click here</a>{' '}
            to issue the document and then complete this last step.
          </InfoBox>
        </div>

        {/* ══════════════════════════════════════════════════════
            MAIN VIEW — Sections 5.1 and 5.2
        ══════════════════════════════════════════════════════ */}
        {ecView === 'main' && (
        <>

        {/* ═══ SECTION 5.1 — Upload EC ════════════════════════ */}
        <SectionBox number="5.1" title="Upload EC" open className="ec-s51-box">
          <div className="ec-s51">

            {/* EC requirements information block — red outline */}
            <div className="ec-s51__info-block">
              <span className="material-icons-outlined ec-s51__info-icon">info</span>
              <div className="ec-s51__info-text">
                <p>
                  Encumbrance Certificate (Form 15) from at least one day before date of
                  registration until issued at least in the last 15 days are accepted.{' '}
                  <a href="#" className="ec-s51__info-link">To know more click here</a>
                </p>
                <p>
                  <strong>Note:</strong> If your registered deed is before 01.04.2004, then you will have to give two ECs.
                </p>
                <p>
                  i. EC from 01.04.2004 until issued at least in the last 15 days are accepted.
                </p>
                <p>
                  ii. EC from at least one date before your registration date until 31.03.2004.
                </p>
                <p>
                  (For example, if your Regd Deed is registered on 17-08-1998, then obtain the EC from 16-08-1998.
                  Note: if your Regd Deed is not in the submitted EC, then the application won't be processed.)
                </p>
              </div>
            </div>

            {/* Please select Registration Deed */}
            <div className="ec-s51__deed-wrap">
              <Dropdown
                label="Please select Registration Deed"
                required
                options={DEED_OPTIONS}
                value={selectedDeed}
                onChange={(e) => setSelectedDeed(e.target.value)}
                placeholder="Choose Registration Deed"
                disabled={s51Saved}
                className="ec-s51__deed-dropdown"
              />
            </div>

            {/* EC Number input + Fetch/Edit buttons + Tooltip */}
            <div className="ec-s51__fetch-row">
              <div className="ec-s51__fetch-left">
                <div className="ec-s51__input-wrap">
                  <Input
                    label="Enter EC No."
                    placeholder="Enter your EC Number"
                    value={ecNumber}
                    onChange={(e) => setEcNumber(e.target.value)}
                    disabled={fetchStatus === 'loading' || s51Saved}
                    required
                    inputType="alphanumeric-code"
                  />
                </div>
                <div className="ec-s51__fetch-actions">
                  <Button
                    variant="primary"
                    disabled={!canFetch || fetchStatus === 'loading'}
                    onClick={handleFetch}
                  >
                    Fetch EC Details
                  </Button>
                  <Button
                    variant="error"
                    disabled={fetchStatus === 'idle'}
                    onClick={handleEditFetch}
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <Tooltip
                label="Where to find your EC number"
                imageSrc="/images/sample-ec.png"
                imageAlt="Sample EC document"
                caption="Click to view sample"
                className="ec-s51__tooltip"
              />
            </div>

            {/* Fetched EC data */}
            {fetchStatus === 'success' && (
              <>
                <h3 className="ec-s51__table-title">Kaveri EC Document Data</h3>

                {/* EC Summary table */}
                <Table
                  columns={[
                    'EC Number',
                    'From Date',
                    'To Date',
                    'Total Deeds',
                    'Registration Number',
                    'Is Registration Latest',
                  ]}
                  rows={[[
                    MOCK_EC.ecNumber,
                    MOCK_EC.fromDate,
                    MOCK_EC.toDate,
                    MOCK_EC.totalDeeds,
                    MOCK_EC.registrationNumber,
                    MOCK_EC.isLatest,
                  ]]}
                  className="ec-s51__summary-table"
                />

                {/* Kaveri EC Document Data — key-value table */}
                <div className="kaveri-table ec-s51__kaveri-table">
                  <div className="kaveri-table__registration">
                    <div className="kaveri-table__row">
                      <div className="kaveri-table__label">Location Measurement</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.locationMeasurement}
                      </div>
                    </div>
                    <div className="kaveri-table__row kaveri-table__row--mid">
                      <div className="kaveri-table__label">Article Name</div>
                      <div className="kaveri-table__value">{MOCK_EC.articleName}</div>
                      <div className="kaveri-table__label">Registration Date and Time</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.registrationDateTime}
                      </div>
                    </div>
                    <div className="kaveri-table__row kaveri-table__row--mid">
                      <div className="kaveri-table__label">Executant Name</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.executantName}
                      </div>
                    </div>
                    <div className="kaveri-table__row kaveri-table__row--mid">
                      <div className="kaveri-table__label">Claimant Name</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.claimantName}
                      </div>
                    </div>
                  </div>

                  <div className="kaveri-table__spacer" />

                  <div className="kaveri-table__registration">
                    <div className="kaveri-table__row">
                      <div className="kaveri-table__label">Total Registrations</div>
                      <div className="kaveri-table__value">{MOCK_EC.totalRegistrations}</div>
                      <div className="kaveri-table__label">Is this Latest Registration:</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.isLatestRegistration}
                      </div>
                    </div>
                    <div className="kaveri-table__row kaveri-table__row--mid">
                      <div className="kaveri-table__label">Latest Registration No.</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.latestRegistrationNo}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Validate and Save EC */}
                <div className="ec-s51__validate-row">
                  <Button
                    variant="primary"
                    disabled={!canValidate}
                    onClick={handleValidate}
                  >
                    Validate and Save EC
                  </Button>
                </div>
              </>
            )}

          </div>
        </SectionBox>

        {/* ═══ SECTION 5.2 — Declaration ══════════════════════ */}
        <div ref={s52Ref}>
          <SectionBox number="5.2" title="Declaration" open={s52Visible} className="ec-s52-box">
            {s52Visible && (
              <div className="ec-s52">

                {/* Declaration text */}
                <div className="ec-s52__text">
                  <p className="ec-s52__text-intro">
                    Please read the following carefully:
                  </p>
                  <ol className="ec-s52__list">
                    <li>
                      'A' &amp; 'B' Khatha is being issued as per existing Panchatantra
                      Records &amp; subject to final verification as per my submitted documents.
                    </li>
                    <li>
                      In case of any discrepancy between existing Panchatantra records &amp;
                      my submitted information or missing information, my case will be referred
                      to the jurisdictional PDO for decision or merit.
                    </li>
                    <li>
                      Any eKhatha on government or government organization land is liable to
                      be rejected or cancelled.
                    </li>
                    <li>
                      Any wrongful or incorrect eKhatha issued is liable to be cancelled.
                    </li>
                  </ol>
                </div>

                <hr className="ec-s52__divider" />

                {/* Checkboxes */}
                <div className="ec-s52__checkboxes">
                  <Checkbox
                    label="I understand and accept all of the above"
                    checked={checked1}
                    onChange={(e) => setChecked1(e.target.checked)}
                    color="blue"
                  />
                  <Checkbox
                    label="I certify that information submitted is true &amp; correct to the best of my knowledge &amp; belief and any false or wrong information makes eKhatha liable to be cancelled &amp; make me liable for criminal/suitable action as per law."
                    checked={checked2}
                    onChange={(e) => setChecked2(e.target.checked)}
                    color="blue"
                  />
                </div>

              </div>
            )}
          </SectionBox>
        </div>

        {/* ── Closed stubs for future sections ─────────────── */}
        <SectionBox number="5.3" title="Preview of Khata" open={false} />
        <SectionBox number="5.4" title="Draft Khata" open={false} />

        {/* ── Verify Your Data CTA (after 5.2 complete) ────── */}
        {s52Visible && (
          <div className="ec-page__cta">
            <Button
              variant="primary"
              disabled={!canProceed}
              onClick={handleVerify}
            >
              Verify Your Data
            </Button>
          </div>
        )}

        </> // end main view
        )}

        {/* ══════════════════════════════════════════════════════
            PREVIEW VIEW — Section 5.3 only
        ══════════════════════════════════════════════════════ */}
        {ecView === 'preview' && (
          <div>
            <SectionBox number="5.3" title="Preview of Khata" open className="ec-s53-box">

              <div className="ec-s53">

                {/* Blue info banner */}
                <InfoBox variant="blue">
                  Please Preview Details of all the sections. You can click Edit to go back
                  to the particular section or scroll to the bottom to proceed.
                </InfoBox>

                {/* ── 1. Sale Deed Details ─────────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">Deed Details</h3>
                  <Table
                    columns={['Gram Panchayat', 'Village', 'Registration number', 'Asset number']}
                    rows={[['Bengaluru Urban', 'Doddahasala', 'e.g. XXX-X-XXXXX-2004-05', '6']]}
                    className="ec-s53__table"
                  />
                  <Button variant="error" className="ec-s53__edit-btn" onClick={() => onNavigate?.('new-application-step1')}>
                    Edit
                  </Button>
                </div>

                <div className="ec-s53__sep" />

                {/* ── 2. Owner KYC ─────────────────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">Owner KYC</h3>
                  <div className="ec-s53__table-wrap">
                    <table className="data-table ec-s53__table">
                      <thead>
                        <tr className="data-table__header">
                          <th className="data-table__th ec-s53__th--photo">Owner photograph</th>
                          <th className="data-table__th">Owner Name</th>
                          <th className="data-table__th">Father/Mother/<br />Guardian/Spouse/<br />Name</th>
                          <th className="data-table__th">Owner's Identification Document No.</th>
                          <th className="data-table__th">Owner's Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {MOCK_OWNERS.map((owner, i) => (
                          <tr key={i} className="data-table__row">
                            <td className="data-table__td ec-s53__td--photo">
                              <div className="ec-s53__photo-box" />
                            </td>
                            <td className="data-table__td">{owner.name}</td>
                            <td className="data-table__td">{owner.relation}</td>
                            <td className="data-table__td">{owner.idNo}</td>
                            <td className="data-table__td">{owner.address}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Button variant="error" className="ec-s53__edit-btn" onClick={() => onNavigate?.('new-application-step2')}>
                    Edit
                  </Button>
                </div>

                <div className="ec-s53__sep" />

                {/* ── 3. Property Details ───────────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">Property Details</h3>

                  {/* Location */}
                  <div className="ec-s53__table-wrap">
                    <table className="data-table ec-s53__table">
                      <thead>
                        <tr className="data-table__header">
                          <th className="data-table__th">Property Address</th>
                          <th className="data-table__th">Latitude and Longitude</th>
                          <th className="data-table__th ec-s53__th--photo-lg">Property Photo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="data-table__row">
                          <td className="data-table__td">1/111, Hosur, Karje, 5762715</td>
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td ec-s53__td--photo-lg">
                            <div className="ec-s53__photo-box ec-s53__photo-box--lg" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Area details */}
                  <div className="ec-s53__table-wrap ec-s53__table-wrap--joined">
                    <table className="data-table ec-s53__table">
                      <thead>
                        <tr className="data-table__header">
                          <th className="data-table__th">Total Area Details (Sq.Mts)</th>
                          <th className="data-table__th">Irregular Site Yes/No</th>
                          <th className="data-table__th">Property Dimensions (Mts) North South, East West</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="data-table__row">
                          <td className="data-table__td">2400 Sq.Meters</td>
                          <td className="data-table__td">No</td>
                          <td className="data-table__td">13.300000, 6.600000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Checkbandi */}
                  <div className="ec-s53__table-wrap ec-s53__table-wrap--joined">
                    <table className="data-table ec-s53__table">
                      <thead>
                        <tr className="data-table__header">
                          <th className="data-table__th">Checkbandi East</th>
                          <th className="data-table__th">Checkbandi West</th>
                          <th className="data-table__th">Checkbandi North</th>
                          <th className="data-table__th">Checkbandi South</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="data-table__row">
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td">30 Feet Road</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Button variant="error" className="ec-s53__edit-btn" onClick={() => onNavigate?.('new-application-step3')}>
                    Edit
                  </Button>
                </div>

                <div className="ec-s53__sep" />

                {/* ── 4. Property Classification ────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">Property Classification</h3>

                  {/* Classification + Survey/Category/Type table */}
                  <div className="ec-s53__table-wrap">
                    <table className="data-table ec-s53__table">
                      <tbody>
                        <tr className="data-table__row ec-s53__row--header-like">
                          <td className="data-table__td ec-s53__td--label-header">Property Classification</td>
                          <td className="data-table__td" colSpan="3">11A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="ec-s53__table-wrap ec-s53__table-wrap--joined">
                    <table className="data-table ec-s53__table">
                      <thead>
                        <tr className="data-table__header">
                          <th className="data-table__th">Survey No.</th>
                          <th className="data-table__th">Property Category</th>
                          <th className="data-table__th">Property Type</th>
                          <th className="data-table__th">Corner Site Yes/No</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="data-table__row">
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td">30 Feet Road</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Plinth Area / Building details table */}
                  <div className="ec-s53__table-wrap ec-s53__table-wrap--joined">
                    <table className="data-table ec-s53__table">
                      <thead>
                        <tr className="data-table__header">
                          <th className="data-table__th">Plinth Area</th>
                          <th className="data-table__th">Undivided Plot size / Total Land divided plot size</th>
                          <th className="data-table__th">Floor No.</th>
                          <th className="data-table__th">Year of construction / Usage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="data-table__row">
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td">30 Feet Road</td>
                          <td className="data-table__td">30 Feet Road</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Button variant="error" className="ec-s53__edit-btn" onClick={() => onNavigate?.('new-application-step4')}>
                    Edit
                  </Button>
                </div>

                <div className="ec-s53__sep" />

                {/* ── 5. Upload EC ──────────────────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">Upload EC</h3>
                  <Table
                    columns={['EC Number', 'From Date', 'To Date', 'Total Deeds', 'Registration Number', 'Is Registration Latest']}
                    rows={[[
                      MOCK_EC.ecNumber,
                      MOCK_EC.fromDate,
                      MOCK_EC.toDate,
                      String(MOCK_EC.totalDeeds),
                      MOCK_EC.registrationNumber,
                      MOCK_EC.isLatest,
                    ]]}
                    className="ec-s53__table"
                  />
                  <Button variant="error" className="ec-s53__edit-btn" onClick={handleEditStepEC}>
                    Edit
                  </Button>
                </div>

              </div>
            </SectionBox>

            {/* ── Final Save CTA ────────────────────────────────── */}
            <div className="ec-page__cta">
              <Button variant="primary" onClick={handleFinalSave}>
                Final Save
              </Button>
            </div>
          </div>
        )}

        {/* ═══ SECTION 5.4 — Draft Khata ══════════════════════ */}
        {ecView === 'final' && (
          <div>
            <SectionBox number="5.4" title="Draft Khata" open className="ec-s54-box">
              <div className="ec-s54">

                {/* Scrollable khata document viewer */}
                <div className="ec-s54__scroll-frame">
                  <img
                    src="/images/Group 54813.png"
                    alt="Khata document page 1"
                    className="ec-s54__khata-img"
                  />
                  <img
                    src="/images/Group 54814.png"
                    alt="Khata document page 2"
                    className="ec-s54__khata-img"
                  />
                  <img
                    src="/images/Group 54815.png"
                    alt="Khata document page 3"
                    className="ec-s54__khata-img"
                  />
                </div>

                {/* Success message */}
                <CaptionMessage variant="success">
                  Your e-khata application has been saved. Please track your approval status in the{' '}
                  <a href="#" className="ec-s54__success-link">pending applications</a> page.
                </CaptionMessage>

                {/* Action buttons */}
                <div className="ec-s54__actions">
                  <Button variant="error" onClick={handlePreviousAndEdit}>
                    Previous and Edit
                  </Button>
                  <Button
                    variant="primary"
                    icon="download"
                    onClick={() => {}}
                  >
                    Download
                  </Button>
                </div>

              </div>
            </SectionBox>
          </div>
        )}

      </div>

      {/* ── Loading overlay ──────────────────────────────────── */}
      {fetchStatus === 'loading' && (
        <div className="ec-page__overlay">
          <ProgressCircle size={80} percentage={60} />
        </div>
      )}

    </div>
  );
};

export default ECStep;
