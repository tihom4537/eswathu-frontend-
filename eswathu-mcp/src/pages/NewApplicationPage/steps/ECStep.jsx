import { useState, useRef, useEffect } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import StepHeader from '../../../components/StepHeader/StepHeader';
import Stepper from '../../../components/Stepper/Stepper';
import SectionBox from '../../../components/SectionBox/SectionBox';
import InfoBox from '../../../components/InfoBox/InfoBox';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import Checkbox from '../../../components/Checkbox/Checkbox';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import ErrorMessageCard from '../../../components/ErrorMessageCard/ErrorMessageCard';
import Tooltip from '../../../components/Tooltip/Tooltip';
import Table from '../../../components/Table/Table';
import { useTranslation } from '../../../i18n';
import './ECStep.css';

/* ── Mock data ─────────────────────────────────────────────── */
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
  hasKaveri = true,
  registrationDeedNo = '',
}) => {
  const { t } = useTranslation('step5');

  /* ── Section 5.1 state ────────────────────────────────────── */
  const [localDeedNo, setLocalDeedNo]   = useState('');
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

  /* ── Final save state (section 5.4) ──────────────────────── */
  const [finalSaved, setFinalSaved] = useState(false);
  const [showFinalConfirm, setShowFinalConfirm] = useState(false);

  /* ── Scroll refs ──────────────────────────────────────────── */
  const s52Ref = useRef(null);
  const s53Ref = useRef(null);

  useEffect(() => {
    if (s52Visible && s52Ref.current) {
      s52Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [s52Visible]);

  /* On view switch: scroll to 5.3 start for preview, top otherwise */
  useEffect(() => {
    if (ecView === 'preview' && s53Ref.current) {
      s53Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (ecView !== 'preview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [ecView]);

  useEffect(() => {
    if (completionResetKey > 0) setIsPageComplete(false);
  }, [completionResetKey]);

  /* ── Derived ──────────────────────────────────────────────── */
  const effectiveDeedNo = hasKaveri ? registrationDeedNo : localDeedNo;
  const canFetch    = !!effectiveDeedNo && ecNumber.trim() && fetchStatus !== 'success';
  const canValidate = fetchStatus === 'success' && !s51Saved;
  const canProceed  = checked1 && checked2;

  /* ── Handlers ─────────────────────────────────────────────── */
  const handleFetch = () => {
    setFetchStatus('loading');
    setTimeout(() => setFetchStatus('success'), 1500);
  };

  const handleEditFetch = () => {
    setFetchStatus('idle');
    setLocalDeedNo('');
    setEcNumber('');
    setS51Saved(false);
    setS52Visible(false);
    setChecked1(false);
    setChecked2(false);
    setIsPageComplete(false);
    setFinalSaved(false);
  };

  const handleValidate = () => {
    setS51Saved(true);
    setS52Visible(true);
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
    if (ecView === 'final')   { setFinalSaved(false); setEcView('preview'); return; }
    onBack?.();
  };

  /* ─────────────────────────────────────────────────────────── */
  return (
    <div className="ec-page">
      <NavigationBar
        variant="postLogin"
        username={username}
        onNavigate={onNavigate}
        onLogout={() => onNavigate?.('login')}
      />

      <Stepper steps={bcStepNames} activeStep={currentBCStep} completedBCSteps={completedBCSteps} onStepClick={onBCStepClick} />

      {/* ── Step header ─────────────────────────────────────── */}
      <StepHeader
        step={t('step_label')}
        title={t('step_title')}
        onBack={handleBackNav}
        onNext={onNext}
        isBackEnabled={finalSaved ? false : (ecView !== 'main' ? true : isBackEnabled)}
        isNextEnabled={isPageComplete}
        hideNext
      />

      <div className="ec-page__sections">

        {/* ── Page-level notice (above SectionBox) ────────── */}
        <div className="ec-page__notice">
          <InfoBox variant="warning">
            {t('page_notice_pre')}{' '}
            <a href="#" className="ec-page__notice-link">{t('page_notice_link')}</a>{' '}
            {t('page_notice_post')}
          </InfoBox>
        </div>

        {/* ══════════════════════════════════════════════════════
            MAIN VIEW — Sections 5.1 and 5.2
        ══════════════════════════════════════════════════════ */}
        {ecView === 'main' && (
        <>

        {/* ═══ SECTION 5.1 — Upload EC ════════════════════════ */}
        <SectionBox number="5.1" title={t('s51_title')} open className="ec-s51-box">
          <div className="ec-s51">

            {/* EC requirements information block — red outline */}
            <div className="ec-s51__info-block">
              <div className="ec-s51__info-icon-wrap">
                <span className="material-icons-outlined ec-s51__info-icon">info</span>
              </div>
              <div className="ec-s51__info-text">
                <p>
                  {t('s51_info_main')}{' '}
                  <a href="#" className="ec-s51__info-link">{t('s51_info_link')}</a>
                </p>
                <p>
                  <strong>{t('s51_info_note_label')}</strong> {t('s51_info_note')}
                </p>
                <p>{t('s51_info_list1')}</p>
                <p>{t('s51_info_list2')}</p>
                <p>{t('s51_info_example')}</p>
              </div>
            </div>

            {/* Registration Deed Number */}
            <div className="ec-s51__deed-wrap">
              <Input
                label={t('s51_deed_label')}
                required={!hasKaveri}
                value={hasKaveri ? registrationDeedNo : localDeedNo}
                onChange={hasKaveri ? undefined : (e) => setLocalDeedNo(e.target.value)}
                frozen={hasKaveri}
                disabled={!hasKaveri && s51Saved}
                placeholder={hasKaveri ? '' : t('s51_deed_placeholder')}
                inputType="alphanumeric-code"
              />
            </div>

            {/* EC Number input + Fetch/Edit buttons + Tooltip */}
            <div className="ec-s51__fetch-row">
              <div className="ec-s51__fetch-left">
                <div className="ec-s51__input-wrap">
                  <Input
                    label={t('s51_ec_label')}
                    placeholder={t('s51_ec_placeholder')}
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
                    {t('s51_fetch_btn')}
                  </Button>
                  <Button
                    variant="error"
                    disabled={fetchStatus === 'idle'}
                    onClick={handleEditFetch}
                  >
                    {t('s51_edit_btn')}
                  </Button>
                </div>
              </div>
              <Tooltip
                label={t('s51_tooltip_label')}
                imageSrc="/images/sample-ec.png"
                imageAlt="Sample EC document"
                caption={t('s51_tooltip_caption')}
                className="ec-s51__tooltip"
              />
            </div>

            {/* Fetched EC data */}
            {fetchStatus === 'success' && (
              <>
                <h3 className="ec-s51__table-title">{t('s51_kaveri_title')}</h3>

                {/* EC Summary table */}
                <Table
                  columns={[
                    t('s51_col_ec_number'),
                    t('s51_col_from_date'),
                    t('s51_col_to_date'),
                    t('s51_col_total_deeds'),
                    t('s51_col_reg_number'),
                    t('s51_col_is_latest'),
                  ]}
                  rows={[[
                    MOCK_EC.ecNumber,
                    MOCK_EC.fromDate,
                    MOCK_EC.toDate,
                    String(MOCK_EC.totalDeeds),
                    MOCK_EC.registrationNumber,
                    MOCK_EC.isLatest,
                  ]]}
                />

                {/* Kaveri EC Document Data — key-value table */}
                <div className="kaveri-table ec-s51__kaveri-table">
                  <div className="kaveri-table__registration">
                    <div className="kaveri-table__row">
                      <div className="kaveri-table__label">{t('s51_kv_location')}</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.locationMeasurement}
                      </div>
                    </div>
                    <div className="kaveri-table__row kaveri-table__row--mid">
                      <div className="kaveri-table__label">{t('s51_kv_article')}</div>
                      <div className="kaveri-table__value">{MOCK_EC.articleName}</div>
                      <div className="kaveri-table__label">{t('s51_kv_reg_datetime')}</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.registrationDateTime}
                      </div>
                    </div>
                    <div className="kaveri-table__row kaveri-table__row--mid">
                      <div className="kaveri-table__label">{t('s51_kv_executant')}</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.executantName}
                      </div>
                    </div>
                    <div className="kaveri-table__row kaveri-table__row--mid">
                      <div className="kaveri-table__label">{t('s51_kv_claimant')}</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.claimantName}
                      </div>
                    </div>
                  </div>

                  <div className="kaveri-table__spacer" />

                  <div className="kaveri-table__registration">
                    <div className="kaveri-table__row">
                      <div className="kaveri-table__label">{t('s51_kv_total_regs')}</div>
                      <div className="kaveri-table__value">{MOCK_EC.totalRegistrations}</div>
                      <div className="kaveri-table__label">{t('s51_kv_is_latest_reg')}</div>
                      <div className="kaveri-table__value kaveri-table__value--last">
                        {MOCK_EC.isLatestRegistration}
                      </div>
                    </div>
                    <div className="kaveri-table__row kaveri-table__row--mid">
                      <div className="kaveri-table__label">{t('s51_kv_latest_reg_no')}</div>
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
                    {t('s51_validate_btn')}
                  </Button>
                </div>
              </>
            )}

          </div>
        </SectionBox>

        {/* ═══ SECTION 5.2 — Declaration ══════════════════════ */}
        <div ref={s52Ref}>
          <SectionBox number="5.2" title={t('s52_title')} open={s52Visible} className="ec-s52-box">
            {s52Visible && (
              <div className="ec-s52">

                {/* Declaration text */}
                <div className="ec-s52__text">
                  <p className="ec-s52__text-intro">
                    {t('s52_intro')}
                  </p>
                  <ol className="ec-s52__list">
                    <li>{t('s52_item1')}</li>
                    <li>{t('s52_item2')}</li>
                    <li>{t('s52_item3')}</li>
                    <li>{t('s52_item4')}</li>
                  </ol>
                </div>

                <hr className="ec-s52__divider" />

                {/* Checkboxes */}
                <div className="ec-s52__checkboxes">
                  <Checkbox
                    label={t('s52_check1')}
                    checked={checked1}
                    onChange={(e) => setChecked1(e.target.checked)}
                    color="blue"
                  />
                  <Checkbox
                    label={t('s52_check2')}
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
        <SectionBox number="5.3" title={t('s53_title')} open={false} />
        <SectionBox number="5.4" title={t('s54_title')} open={false} />

        {/* ── Verify Your Data CTA (after 5.2 complete) ────── */}
        {s52Visible && (
          <div className="ec-page__cta">
            <Button
              variant="primary"
              disabled={!canProceed}
              onClick={handleVerify}
            >
              {t('btn_verify')}
            </Button>
          </div>
        )}

        </> // end main view
        )}

        {/* ══════════════════════════════════════════════════════
            PREVIEW VIEW — Section 5.3 only
        ══════════════════════════════════════════════════════ */}
        {ecView === 'preview' && (
          <div ref={s53Ref}>
            <SectionBox number="5.3" title={t('s53_title')} open className="ec-s53-box">

              <div className="ec-s53">

                {/* Blue info banner */}
                <InfoBox variant="blue">
                  {t('s53_infobox')}
                </InfoBox>

                {/* ── 1. Sale Deed Details ─────────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">{t('s53_block_deed')}</h3>
                  {hasKaveri ? (
                    <Table
                      columns={[
                        t('s53_col_gp'),
                        t('s53_col_village'),
                        t('s53_col_reg_no'),
                        t('s53_col_asset_no'),
                      ]}
                      rows={[['Bengaluru Urban', 'Doddahasala', 'e.g. XXX-X-XXXXX-2004-05', '6']]}
                      className="ec-s53__table"
                    />
                  ) : (
                    <Table
                      columns={[
                        t('s53_col_gp'),
                        t('s53_col_village'),
                        t('s53_col_doc_type'),
                        t('s53_col_doc_no'),
                        t('s53_col_doc_date'),
                        t('s53_col_asset_no'),
                      ]}
                      rows={[['Bengaluru Urban', 'Doddahasala', 'Sale Deed', 'XXX-X-XXXXX-2004-05', '01-01-2020', '6']]}
                      className="ec-s53__table"
                    />
                  )}
                  <Button variant="error" className="ec-s53__edit-btn" onClick={() => onNavigate?.('new-application-step1')}>
                    {t('s53_edit_btn')}
                  </Button>
                </div>

                <div className="ec-s53__sep" />

                {/* ── 2. Owner KYC ─────────────────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">{t('s53_block_owner')}</h3>
                  <div className="ec-s53__table-wrap">
                    <table className="data-table ec-s53__table">
                      <thead>
                        <tr className="data-table__header">
                          <th className="data-table__th ec-s53__th--photo">{t('s53_col_owner_photo')}</th>
                          <th className="data-table__th">{t('s53_col_owner_name')}</th>
                          <th className="data-table__th">{t('s53_col_owner_relation').split('/').join('/<br />')
                            .split('/<br />')
                            .map((seg, i, arr) => (
                              <span key={i}>{seg}{i < arr.length - 1 ? <br /> : null}</span>
                            ))}</th>
                          <th className="data-table__th">{t('s53_col_owner_id')}</th>
                          <th className="data-table__th">{t('s53_col_owner_address')}</th>
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
                    {t('s53_edit_btn')}
                  </Button>
                </div>

                <div className="ec-s53__sep" />

                {/* ── 3. Property Details ───────────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">{t('s53_block_property')}</h3>

                  {/* Location */}
                  <div className="ec-s53__table-wrap">
                    <table className="data-table ec-s53__table">
                      <thead>
                        <tr className="data-table__header">
                          <th className="data-table__th">{t('s53_col_prop_address')}</th>
                          <th className="data-table__th">{t('s53_col_lat_lng')}</th>
                          <th className="data-table__th ec-s53__th--photo-lg">{t('s53_col_prop_photo')}</th>
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
                          <th className="data-table__th">{t('s53_col_total_area')}</th>
                          <th className="data-table__th">{t('s53_col_irregular')}</th>
                          <th className="data-table__th">{t('s53_col_dimensions')}</th>
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
                          <th className="data-table__th">{t('s53_col_cb_east')}</th>
                          <th className="data-table__th">{t('s53_col_cb_west')}</th>
                          <th className="data-table__th">{t('s53_col_cb_north')}</th>
                          <th className="data-table__th">{t('s53_col_cb_south')}</th>
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
                    {t('s53_edit_btn')}
                  </Button>
                </div>

                <div className="ec-s53__sep" />

                {/* ── 4. Property Classification ────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">{t('s53_block_classification')}</h3>

                  {/* Classification label row */}
                  <div className="ec-s53__table-wrap">
                    <table className="data-table ec-s53__table">
                      <tbody>
                        <tr className="data-table__row ec-s53__row--header-like">
                          <td className="data-table__td ec-s53__td--label-header">{t('s53_col_classification')}</td>
                          <td className="data-table__td" colSpan="3">11A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="ec-s53__table-wrap ec-s53__table-wrap--joined">
                    <table className="data-table ec-s53__table">
                      <thead>
                        <tr className="data-table__header">
                          <th className="data-table__th">{t('s53_col_survey_no')}</th>
                          <th className="data-table__th">{t('s53_col_prop_cat')}</th>
                          <th className="data-table__th">{t('s53_col_prop_type')}</th>
                          <th className="data-table__th">{t('s53_col_corner_site')}</th>
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
                          <th className="data-table__th">{t('s53_col_plinth_area')}</th>
                          <th className="data-table__th">{t('s53_col_undivided_plot')}</th>
                          <th className="data-table__th">{t('s53_col_floor_no')}</th>
                          <th className="data-table__th">{t('s53_col_year_usage')}</th>
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
                    {t('s53_edit_btn')}
                  </Button>
                </div>

                <div className="ec-s53__sep" />

                {/* ── 5. Upload EC ──────────────────────────────── */}
                <div className="ec-s53__preview-block">
                  <h3 className="ec-s53__block-heading">{t('s53_block_ec')}</h3>
                  <Table
                    columns={[
                      t('s51_col_ec_number'),
                      t('s51_col_from_date'),
                      t('s51_col_to_date'),
                      t('s51_col_total_deeds'),
                      t('s51_col_reg_number'),
                      t('s51_col_is_latest'),
                    ]}
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
                    {t('s53_edit_btn')}
                  </Button>
                </div>

              </div>
            </SectionBox>

            {/* ── Closed stub for 5.4 ──────────────────────────── */}
            <SectionBox number="5.4" title={t('s54_title')} open={false} />

            {/* ── Save and Proceed CTA ─────────────────────────── */}
            <div className="ec-page__cta">
              <Button variant="primary" onClick={handleFinalSave}>
                {t('btn_save_proceed')}
              </Button>
            </div>
          </div>
        )}

        {/* ═══ SECTION 5.4 — Draft Khata ══════════════════════ */}
        {ecView === 'final' && (
          <div>
            <SectionBox number="5.4" title={t('s54_title')} open className="ec-s54-box">
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

                {/* Download button — centered below viewer */}
                <div className="ec-s54__download-row">
                  <Button variant="primary" icon="download" onClick={() => {}}>
                    {t('s54_download_btn')}
                  </Button>
                </div>

                {/* Final Save + Previous and Edit — bigger buttons, centered */}
                <div className="ec-s54__main-actions">
                  <Button
                    variant="primary"
                    className="ec-s54__big-btn"
                    disabled={finalSaved}
                    onClick={() => setShowFinalConfirm(true)}
                  >
                    {t('s54_final_save_btn')}
                  </Button>
                  <Button
                    variant="error"
                    className="ec-s54__big-btn"
                    disabled={finalSaved}
                    onClick={handlePreviousAndEdit}
                  >
                    {t('s54_prev_edit_btn')}
                  </Button>
                </div>

                {/* Success caption — shown only after Final Save clicked */}
                {finalSaved && (
                  <div className="ec-s54__caption-wrap">
                    <CaptionMessage variant="success">
                      {t('s54_success_pre')}{' '}
                      <a href="#" className="ec-s54__success-link">{t('s54_success_link')}</a>{' '}
                      {t('s54_success_post')}
                    </CaptionMessage>
                  </div>
                )}

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

      {/* ── Final Save confirmation modal ─────────────────────── */}
      {showFinalConfirm && (
        <div className="ec-page__modal-backdrop">
          <ErrorMessageCard
            message={t('modal_message')}
            subMessage={t('modal_submessage')}
            actions={[
              {
                label: t('modal_yes'),
                onClick: () => {
                  setShowFinalConfirm(false);
                  setFinalSaved(true);
                  setIsPageComplete(true);
                },
              },
              {
                label: t('modal_cancel'),
                onClick: () => setShowFinalConfirm(false),
              },
            ]}
          />
        </div>
      )}

    </div>
  );
};

export default ECStep;
