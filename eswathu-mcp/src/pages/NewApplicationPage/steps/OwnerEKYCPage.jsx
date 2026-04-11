import { useState, useEffect, useRef } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import StepHeader from '../../../components/StepHeader/StepHeader';
import Stepper from '../../../components/Stepper/Stepper';
import SectionBox from '../../../components/SectionBox/SectionBox';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Button from '../../../components/Button/Button';
import InfoBox from '../../../components/InfoBox/InfoBox';
import ErrorMessageCard from '../../../components/ErrorMessageCard/ErrorMessageCard';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import DatePicker from '../../../components/DatePicker/DatePicker';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import OwnerTable from '../../../components/OwnerTable/OwnerTable';
import Table from '../../../components/Table/Table';
import EKYCRedirectScreen from './EKYCRedirectScreen';
import { useTranslation } from '../../../i18n';
import './OwnerEKYCPage.css';

/* ── Mock data (pre-fetched from Kaveri) ───────────────── */
const MOCK_OWNERS = [
  { id: 1, name: 'Mayuri Kumari',      source: 'kaveri' },
  { id: 2, name: 'Mohit Kumar Singh',  source: 'kaveri' },
];

const MOCK_EKYC_DATA = {
  identityDocNo: '123456785643',
  panchatantraName: 'Mohit Kumar Singh',
  verifiedName: 'Mohit Kumar Singh',
  gender: 'Male',
  dob: '03-08-2000',
  address:
    'No. 6, 5th main, Vidhana Soudha, Bengaluru, Karnataka- 560043',
};

/* Maps relationship value to prefix for display */
const REL_PREFIX = { son: 'S/o', daughter: 'D/o', spouse: 'W/o', care: 'C/o' };

/* ── Mock eKYC names (simulated mismatch) ──────────────── */
const MOCK_EKYC_NAMES = {
  1: 'Sri. Mayuri Kumari',
  2: 'Mohit Singh',
};

/* ── Document upload config per reason (keys only) ──────── */
const DOCS_BY_REASON_KEYS = {
  sale_transferred: [
    { key: 'division_letter', labelKey: 'doc_division_letter', mandatory: true },
    { key: 'death_certificate', labelKey: 'doc_death_certificate', mandatory: true },
    { key: 'will', labelKey: 'doc_will', mandatory: false },
  ],
  unregistered_will: [
    { key: 'division_letter', labelKey: 'doc_division_letter', mandatory: true },
    { key: 'death_certificate', labelKey: 'doc_death_certificate', mandatory: true },
    { key: 'will', labelKey: 'doc_will', mandatory: false },
  ],
  inheritance_succession: [
    { key: 'division_letter', labelKey: 'doc_division_letter', mandatory: true },
    { key: 'death_certificate', labelKey: 'doc_death_certificate', mandatory: true },
    { key: 'will', labelKey: 'doc_will', mandatory: false },
  ],
  court_order: [
    { key: 'division_letter', labelKey: 'doc_division_letter', mandatory: true },
    { key: 'death_certificate', labelKey: 'doc_death_certificate', mandatory: true },
    { key: 'will', labelKey: 'doc_will', mandatory: false },
  ],
  bank_fi_sale_certificate: [
    { key: 'division_letter', labelKey: 'doc_division_letter', mandatory: true },
    { key: 'death_certificate', labelKey: 'doc_death_certificate', mandatory: true },
    { key: 'will', labelKey: 'doc_will', mandatory: false },
  ],
};

const OwnerEKYCPage = ({
  onNavigate,
  hasKaveri = true,
  username = '',
  onBack,
  onNext,
  isBackEnabled = true,
  currentBCStep = 1,
  completedBCSteps = [],
  onBCStepClick,
  bcStepNames = [],
  completionResetKey = 0,
  onResetDownstream,
}) => {
  const { t } = useTranslation('step2');

  /* ── Translated option arrays (built fresh each render so lang changes are instant) ── */
  const RELATIONSHIP_OPTIONS = [
    { value: 'son',      label: t('rel_son') },
    { value: 'daughter', label: t('rel_daughter') },
    { value: 'spouse',   label: t('rel_spouse') },
    { value: 'care',     label: t('rel_care') },
  ];

  const MISMATCH_REASON_OPTIONS = [
    { value: 'name_spelling_mismatch',   label: t('reason_name_spelling') },
    { value: 'sale_transferred',         label: t('reason_sale_transferred') },
    { value: 'unregistered_will',        label: t('reason_unregistered_will') },
    { value: 'inheritance_succession',   label: t('reason_inheritance') },
    { value: 'court_order',             label: t('reason_court_order') },
    { value: 'bank_fi_sale_certificate', label: t('reason_bank_sale_cert') },
  ];

  const NEW_OWNER_MISMATCH_REASON_OPTIONS = [
    { value: 'sale_transferred',         label: t('reason_sale_transferred') },
    { value: 'unregistered_will',        label: t('reason_unregistered_will') },
    { value: 'inheritance_succession',   label: t('reason_inheritance') },
    { value: 'court_order',             label: t('reason_court_order') },
    { value: 'bank_fi_sale_certificate', label: t('reason_bank_sale_cert') },
  ];

  /* Build docs config with translated labels */
  const getDocsByReason = (reason) => {
    const entries = DOCS_BY_REASON_KEYS[reason] || [];
    return entries.map((e) => ({ ...e, label: t(e.labelKey) }));
  };

  /* ── Page-level completion (enables forward arrow) ──────── */
  const [isPageComplete, setIsPageComplete] = useState(false);

  useEffect(() => {
    if (completionResetKey > 0) {
      setIsPageComplete(false);
      setIsCompany(false);
      setCompanyName('');
      setAddNewOwner(false);
      setNewOwnerNames(['']);
      setOwnerNameErrors(['']);
      setS21Submitted(false);
      setS22Visible(false);
      setS22Verified(false);
      setEkycStatus({});
      setCompletedEkycData({});
      setEkycOwnerIdx(null);
      setEkycAttempts({});
      setEkycFailedOwners(new Set());
      setPopupOwnerIdx(null);
      setRelationshipType('');
      setRelatedPersonName('');
      setMobileNumber('');
      setOtp('');
      setOtpSent(false);
      setOtpVerified(false);
      setOtpError(false);
      setOtpCountdown(0);
      clearInterval(otpTimerRef.current);
      setS23Visible(false);
      setMismatchReasons({});
      setS23Submitted(false);
      setDocUploads({});
      setViewFileKey(null);
    }
  }, [completionResetKey]);

  /* ── Section 2.1 State ──────────────────────────────── */
  const [isCompany, setIsCompany] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [addNewOwner, setAddNewOwner] = useState(false);
  const [newOwnerNames, setNewOwnerNames] = useState(['']);
  const [ownerNameErrors, setOwnerNameErrors] = useState(['']);
  const [s21Submitted, setS21Submitted] = useState(false);

  /* ── Derived: combined owners (original + newly added) ── */
  const newOwners = newOwnerNames
    .filter((n) => n.trim())
    .map((n, i) => ({ id: `new-${i}`, name: n.trim(), source: 'new' }));
  const allOwners = !hasKaveri
    ? newOwners
    : (s21Submitted && addNewOwner ? newOwners : MOCK_OWNERS);

  /* ── Section 2.2 State ──────────────────────────────── */
  const [s22Visible, setS22Visible] = useState(false);
  const [s22Verified, setS22Verified] = useState(false);
  const [ekycStatus, setEkycStatus] = useState({}); // { [ownerId]: 'pending' | 'in-progress' | 'done' }
  const [completedEkycData, setCompletedEkycData] = useState({}); // { [ownerId]: { ownerName, relPrefix, relatedPersonName, identityDocNo, address } }

  /* ── eKYC Redirect State ────────────────────────────── */
  const [ekycOwnerIdx, setEkycOwnerIdx] = useState(null);
  const [ekycAttempts, setEkycAttempts] = useState({}); // { [ownerId]: number }
  const [ekycFailedOwners, setEkycFailedOwners] = useState(new Set()); // owners whose eKYC returned without popup (UIDAI failure)

  /* ── eKYC Popup / Modal State ───────────────────────── */
  const [popupOwnerIdx, setPopupOwnerIdx] = useState(null);
  const [relationshipType, setRelationshipType] = useState('');
  const [relatedPersonName, setRelatedPersonName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(0);
  const otpTimerRef = useRef(null);
  const scrollPosRef = useRef(0);

  /* ── Section scroll refs ─────────────────────────────── */
  const s22Ref = useRef(null);
  const s23Ref = useRef(null);

  /* ── Section 2.1 edit warning ───────────────────────── */
  const [showS21EditWarn, setShowS21EditWarn] = useState(false);

  /* ── Section 2.3 State — Mismatch ───────────────────── */
  const [s23Visible, setS23Visible] = useState(false);
  const [mismatchReasons, setMismatchReasons] = useState({}); // { [ownerId]: reason value }
  const [s23Submitted, setS23Submitted] = useState(false);
  const [docUploads, setDocUploads] = useState({});

  /* ── View file popup state ───────────────────────────── */
  const [viewFileKey, setViewFileKey] = useState(null);

  /* ── Derived: all owners done? ──────────────────────── */
  const allDone = allOwners.every((o) => ekycStatus[o.id] === 'done');

  /* ── Helper: eKYC name per owner source ──────────────── */
  const getEkycName = (owner) => {
    if (owner.source === 'kaveri') return MOCK_EKYC_NAMES[owner.id];
    return `Sri. ${owner.name}`;
  };

  /* ── Derived: which owners have a mismatch ────────────── */
  const mismatchedOwners = allOwners.filter((o) => {
    const ekycName = getEkycName(o);
    return ekycName && ekycName !== o.name;
  });

  /* ── Derived: mismatch type ───────────────────────────── */
  const hasMismatchKaveri = mismatchedOwners.some((o) => o.source === 'kaveri');
  const hasMismatchNew    = mismatchedOwners.some((o) => o.source === 'new');
  const hasMismatch       = hasMismatchKaveri || hasMismatchNew;

  /* ── Derived: needs document upload? ─────────────────── */
  const needsDocUpload = (reason) => reason && reason !== 'name_spelling_mismatch';

  /* ── Derived: owners shown in the active mismatch table ── */
  const mismatchTableOwners = hasMismatchKaveri
    ? allOwners
    : mismatchedOwners.filter((o) => o.source === 'new');

  /* ── Derived: merged unique docs for all reasons ─────── */
  const mergedDocs = (() => {
    const seen = new Set();
    const result = [];
    for (const owner of mismatchTableOwners) {
      const reason = mismatchReasons[owner.id];
      if (!needsDocUpload(reason)) continue;
      const docs = getDocsByReason(reason);
      for (const doc of docs) {
        if (!seen.has(doc.key)) {
          seen.add(doc.key);
          result.push(doc);
        }
      }
    }
    return result;
  })();

  /* ── Derived: all reasons selected? (enables Save & Next) ── */
  const allReasonsSelected = mismatchTableOwners.every((o) => mismatchReasons[o.id]);

  /* ── Derived: all reasons are spelling only? (Kaveri case only) ── */
  const allSpellingOnly = allReasonsSelected && mergedDocs.length === 0;

  /* ── Derived: can Save and Proceed (bottom)? ──────────── */
  const canS23Proceed = (() => {
    if (!allReasonsSelected) return false;
    if (allSpellingOnly) return true;
    if (!s23Submitted) return false;
    for (const doc of mergedDocs) {
      if (doc.mandatory) {
        const d = docUploads[doc.key];
        if (!d || !d.docNo?.trim() || !d.issuedDate || !d.fileName) return false;
        if (d.uploadStatus === 'error') return false;
      }
    }
    return true;
  })();

  /* ── Handlers: Section 2.1 ──────────────────────────── */
  const handleS21Submit = () => {
    setS21Submitted(true);
    setS22Visible(true);
  };

  const handleS21Edit = () => {
    setS21Submitted(false);
    setCompanyName('');
    setS22Visible(false);
    setS22Verified(false);
    setS23Visible(false);
    setEkycStatus({});
    setCompletedEkycData({});
    setEkycAttempts({});
    setEkycFailedOwners(new Set());
    setMismatchReasons({});
    setDocUploads({});
    setS23Submitted(false);
  };

  /* ── Handlers: Section 2.2 — Do eKYC ───────────────── */
  const handleDoEkyc = (idx) => {
    scrollPosRef.current = window.scrollY;
    const owner = allOwners[idx];
    const attempts = (ekycAttempts[owner.id] || 0) + 1;
    setEkycAttempts((prev) => ({ ...prev, [owner.id]: attempts }));
    setEkycStatus((prev) => ({ ...prev, [owner.id]: 'in-progress' }));
    setEkycFailedOwners((prev) => { const s = new Set(prev); s.delete(owner.id); return s; });
    setEkycOwnerIdx(idx);
  };

  const handleEkycComplete = () => {
    const owner = allOwners[ekycOwnerIdx];
    const attempts = ekycAttempts[owner.id] || 0;

    if (ekycOwnerIdx === 1 && attempts === 1) {
      setEkycStatus((prev) => ({ ...prev, [owner.id]: 'pending' }));
      setEkycOwnerIdx(null);
      setEkycFailedOwners((prev) => new Set([...prev, owner.id]));
      requestAnimationFrame(() => window.scrollTo(0, scrollPosRef.current));
      return;
    }

    setEkycStatus((prev) => ({ ...prev, [owner.id]: 'done' }));
    setPopupOwnerIdx(ekycOwnerIdx);
    setEkycOwnerIdx(null);
    setEkycFailedOwners((prev) => { const s = new Set(prev); s.delete(owner.id); return s; });
    requestAnimationFrame(() => window.scrollTo(0, scrollPosRef.current));
    setRelationshipType('');
    setRelatedPersonName('');
    setMobileNumber('');
    setOtp('');
    setOtpSent(false);
    setOtpVerified(false);
    setOtpError(false);
  };

  const handleEkycCancel = () => {
    const owner = allOwners[ekycOwnerIdx];
    setEkycStatus((prev) => ({ ...prev, [owner.id]: 'pending' }));
    setEkycOwnerIdx(null);
    requestAnimationFrame(() => window.scrollTo(0, scrollPosRef.current));
  };

  /* ── Handlers: Popup ────────────────────────────────── */
  const handleGetOtp = () => {
    setOtpSent(true);
    setOtpError(false);
    setOtpCountdown(60);
    clearInterval(otpTimerRef.current);
    otpTimerRef.current = setInterval(() => {
      setOtpCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(otpTimerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (popupOwnerIdx !== null) {
      setRelatedPersonName(MOCK_EKYC_DATA.panchatantraName);
    }
  }, [popupOwnerIdx]);

  useEffect(() => {
    return () => clearInterval(otpTimerRef.current);
  }, []);

  /* ── Scroll to next section when it opens ───────────── */
  useEffect(() => {
    if (s22Visible && s22Ref.current) {
      s22Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [s22Visible]);

  useEffect(() => {
    if (s23Visible && s23Ref.current) {
      s23Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [s23Visible]);

  const handleCompleteEkyc = () => {
    if (otp !== '1234') {
      setOtpError(true);
      setOtp('');
      return;
    }
    setOtpVerified(true);
    const owner = allOwners[popupOwnerIdx];
    const prefix = REL_PREFIX[relationshipType] || '';
    setCompletedEkycData((prev) => ({
      ...prev,
      [owner.id]: {
        ownerName: MOCK_EKYC_DATA.verifiedName,
        relPrefix: prefix,
        relatedPersonName,
        identityDocNo: MOCK_EKYC_DATA.identityDocNo,
        address: MOCK_EKYC_DATA.address,
      },
    }));
    setPopupOwnerIdx(null);
  };

  const handleClosePopup = () => {
    const owner = allOwners[popupOwnerIdx];
    if (!completedEkycData[owner.id]) {
      setEkycStatus((prev) => ({ ...prev, [owner.id]: 'pending' }));
    }
    setPopupOwnerIdx(null);
  };

  /* ── Handlers: Verify and Proceed ───────────────────── */
  const handleVerifyAndProceed = () => {
    setS22Verified(true);
    if (hasMismatch) {
      setS23Visible(true);
    }
  };

  /* ── Handlers: Section 2.3 — Mismatch ──────────────── */
  const handleMismatchReasonChange = (ownerId, value) => {
    setMismatchReasons((prev) => ({ ...prev, [ownerId]: value }));
    setDocUploads({});
  };

  const handleDocFieldChange = (docKey, field, value) => {
    setDocUploads((prev) => ({
      ...prev,
      [docKey]: {
        ...(prev[docKey] || {}),
        [field]: value,
      },
    }));
  };

  const handleFileUpload = (docKey) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf';
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          handleDocFieldChange(docKey, 'fileName', '');
          handleDocFieldChange(docKey, 'uploadStatus', 'error');
        } else {
          handleDocFieldChange(docKey, 'fileName', file.name);
          handleDocFieldChange(docKey, 'uploadStatus', 'success');
        }
      }
    };
    input.click();
  };

  const handleRemoveFile = (docKey) => {
    handleDocFieldChange(docKey, 'fileName', '');
    handleDocFieldChange(docKey, 'uploadStatus', undefined);
  };

  const handleS23Save = () => {
    setS23Submitted(true);
  };

  const handleS23Edit = () => {
    setS23Submitted(false);
  };

  /* ── If in eKYC redirect flow — show that screen ───── */
  if (ekycOwnerIdx !== null) {
    return (
      <EKYCRedirectScreen
        ownerName={allOwners[ekycOwnerIdx].name}
        onComplete={handleEkycComplete}
        onCancel={handleEkycCancel}
      />
    );
  }

  return (
    <div className="ekyc-page">
      {/* ── Navigation ──────────────────────────────────── */}
      <NavigationBar
        variant="postLogin"
        username={username}
        onNavigate={onNavigate}
        onLogout={() => onNavigate('login')}
      />

      <Stepper steps={bcStepNames} activeStep={currentBCStep} completedBCSteps={completedBCSteps} onStepClick={onBCStepClick} />

      {/* ── Step Header ─────────────────────────────────── */}
      <StepHeader
        step={t('step_label')}
        title={t('step_title')}
        onBack={onBack}
        onNext={onNext}
        isBackEnabled={isBackEnabled}
        isNextEnabled={isPageComplete}
      />

      {/* ── Sections container ──────────────────────────── */}
      <div className="ekyc-page__sections">

        {/* Section 2.1 — Owner Details */}

        {/* No-Kaveri: info notice above section box */}
        {!hasKaveri && (
          <InfoBox variant="info">
            {t('s21_no_kaveri_infobox')}
          </InfoBox>
        )}

        <SectionBox
          number="2.1"
          title={hasKaveri ? t('s21_title_kaveri') : t('s21_title_no_kaveri')}
          open
          className="ekyc-s21-box"
        >
          {hasKaveri ? (
            /* ── Kaveri flow ────────────── */
            <div className="ekyc-s21">

              <div className="ekyc-s21__subsection">
                <h3 className="ekyc-s21__subtitle">{t('s21_company_subtitle')}</h3>
                <div className="ekyc-s21__question">
                  <p className="ekyc-s21__question-text">
                    {t('s21_company_question')}
                  </p>
                  <div className="ekyc-s21__radio-row">
                    <RadioButton name="isCompany" value="yes" label={t('s21_yes')}
                      checked={isCompany === true}
                      onChange={() => !s21Submitted && setIsCompany(true)}
                      disabled={s21Submitted}
                    />
                    <RadioButton name="isCompany" value="no" label={t('s21_no')}
                      checked={isCompany === false}
                      onChange={() => !s21Submitted && setIsCompany(false)}
                      disabled={s21Submitted}
                    />
                  </div>
                </div>
                {isCompany && (
                  <div className="ekyc-s21__company-name">
                    <Input
                      label={t('s21_company_name_label')}
                      placeholder={t('s21_company_name_placeholder')}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      disabled={s21Submitted}
                      required
                    />
                  </div>
                )}
              </div>

              <div className="ekyc-s21__subsection">
                <h3 className="ekyc-s21__subtitle">{t('s21_owner_name_subtitle')}</h3>
                <div className="ekyc-s21__owner-table-wrap">
                  <table className="ekyc-s21__owner-table">
                    <thead>
                      <tr>
                        <th className="ekyc-s21__th ekyc-s21__th--no">{t('s21_col_no')}</th>
                        <th className="ekyc-s21__th">{t('s21_col_owner_name')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_OWNERS.map((owner, idx) => (
                        <tr key={owner.id} className="ekyc-s21__tr">
                          <td className="ekyc-s21__td ekyc-s21__td--no">{idx + 1}</td>
                          <td className="ekyc-s21__td">{owner.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <InfoBox variant="warning">
                {t('s21_infobox_name_wrong')}
              </InfoBox>

              <div className="ekyc-s21__question">
                <p className="ekyc-s21__question-text">
                  {t('s21_add_new_owners_question')}
                </p>
                <div className="ekyc-s21__radio-row">
                  <RadioButton name="addNewOwner" value="yes" label={t('s21_yes')}
                    checked={addNewOwner === true}
                    onChange={() => !s21Submitted && setAddNewOwner(true)}
                    disabled={s21Submitted}
                  />
                  <RadioButton name="addNewOwner" value="no" label={t('s21_no')}
                    checked={addNewOwner === false}
                    onChange={() => !s21Submitted && setAddNewOwner(false)}
                    disabled={s21Submitted}
                  />
                </div>
              </div>

              {addNewOwner && (
                <InfoBox variant="warning">
                  {t('s21_infobox_add_new')}
                </InfoBox>
              )}

              {addNewOwner && (
                <div className="ekyc-s21__new-owner-section">
                  <Table
                    className="ekyc-s21__new-owner-table"
                    columns={[t('s21_col_no'), t('s21_col_owner_name'), '']}
                    rows={newOwnerNames.map((name, i) => [
                      i + 1,
                      <Input
                        key={`input-${i}`}
                        placeholder={t('s21_owner_name_placeholder')}
                        value={name}
                        onChange={(e) => {
                          const updated = [...newOwnerNames];
                          updated[i] = e.target.value;
                          setNewOwnerNames(updated);
                          const errs = [...ownerNameErrors];
                          errs[i] = '';
                          setOwnerNameErrors(errs);
                        }}
                        onBlur={() => {
                          if (name.trim() && !/^[a-zA-Z\s.]+$/.test(name.trim())) {
                            const errs = [...ownerNameErrors];
                            errs[i] = t('s21_name_validation_error');
                            setOwnerNameErrors(errs);
                          }
                        }}
                        state={ownerNameErrors[i] ? 'error' : 'empty'}
                        caption={ownerNameErrors[i] || ''}
                        captionVariant={ownerNameErrors[i] ? 'error' : undefined}
                        inputType="alpha"
                        disabled={s21Submitted}
                      />,
                      <button
                        key={`remove-${i}`}
                        type="button"
                        className="ekyc-s21__remove-row-btn"
                        disabled={s21Submitted || (i === 0 && !name.trim())}
                        onClick={() => {
                          if (i === 0) {
                            setNewOwnerNames(['', ...newOwnerNames.slice(1)]);
                            setOwnerNameErrors(['', ...ownerNameErrors.slice(1)]);
                          } else {
                            setNewOwnerNames(newOwnerNames.filter((_, j) => j !== i));
                            setOwnerNameErrors(ownerNameErrors.filter((_, j) => j !== i));
                          }
                        }}
                      >
                        <span className="material-icons-outlined">close</span>
                      </button>,
                    ])}
                    actionButton={
                      !s21Submitted ? (
                        <button
                          type="button"
                          className="ekyc-s21__add-icon-btn"
                          disabled={!newOwnerNames[newOwnerNames.length - 1]?.trim()}
                          onClick={() => {
                            setNewOwnerNames([...newOwnerNames, '']);
                            setOwnerNameErrors([...ownerNameErrors, '']);
                          }}
                        >
                          <span className="material-icons-outlined">add</span>
                        </button>
                      ) : undefined
                    }
                  />
                </div>
              )}

              <div className="ekyc-s21__actions">
                <Button
                  variant="primary"
                  disabled={s21Submitted || (isCompany && !companyName.trim()) || (addNewOwner && newOwnerNames.every((n) => !n.trim()))}
                  onClick={handleS21Submit}
                >
                  {t('s21_btn_save')}
                </Button>
                <Button variant="error" disabled={!s21Submitted} onClick={() => setShowS21EditWarn(true)}>
                  {t('s21_btn_edit')}
                </Button>
              </div>

              {s21Submitted && addNewOwner && newOwnerNames.some((n) => n.trim()) && (
                <div className="ekyc-s21__success-msg">
                  <span className="material-icons-outlined ekyc-s21__success-icon">check_circle_outline</span>
                  <span className="ekyc-s21__success-text">
                    {t('s21_owners_added_success')}
                  </span>
                </div>
              )}

            </div>
          ) : (
            /* ── No-Kaveri flow ───────── */
            <div className="ekyc-s21">

              <div className="ekyc-s21__subsection">
                <h3 className="ekyc-s21__subtitle">{t('s21_company_subtitle')}</h3>
                <div className="ekyc-s21__question">
                  <p className="ekyc-s21__question-text">
                    {t('s21_company_question')}
                  </p>
                  <div className="ekyc-s21__radio-row">
                    <RadioButton name="isCompany" value="yes" label={t('s21_yes')}
                      checked={isCompany === true}
                      onChange={() => !s21Submitted && setIsCompany(true)}
                      disabled={s21Submitted}
                    />
                    <RadioButton name="isCompany" value="no" label={t('s21_no')}
                      checked={isCompany === false}
                      onChange={() => !s21Submitted && setIsCompany(false)}
                      disabled={s21Submitted}
                    />
                  </div>
                </div>
                {isCompany && (
                  <div className="ekyc-s21__company-name">
                    <Input
                      label={t('s21_company_name_label')}
                      placeholder={t('s21_company_name_placeholder')}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      disabled={s21Submitted}
                      required
                    />
                  </div>
                )}
              </div>

              <div className="ekyc-s21__subsection">
                <h3 className="ekyc-s21__subtitle">{t('s21_owner_name_subtitle')}</h3>
                <InfoBox variant="error">
                  {t('s21_no_kaveri_infobox_error')}
                </InfoBox>

                <Table
                  className="ekyc-s21__new-owner-table"
                  columns={[t('s21_col_no'), t('s21_col_owner_name'), '']}
                  rows={newOwnerNames.map((name, i) => [
                    i + 1,
                    <Input
                      key={`input-${i}`}
                      placeholder={t('s21_owner_name_placeholder')}
                      value={name}
                      onChange={(e) => {
                        const updated = [...newOwnerNames];
                        updated[i] = e.target.value;
                        setNewOwnerNames(updated);
                        const errs = [...ownerNameErrors];
                        errs[i] = '';
                        setOwnerNameErrors(errs);
                      }}
                      onBlur={() => {
                        if (name.trim() && !/^[a-zA-Z\s.]+$/.test(name.trim())) {
                          const errs = [...ownerNameErrors];
                          errs[i] = t('s21_name_validation_error');
                          setOwnerNameErrors(errs);
                        }
                      }}
                      state={ownerNameErrors[i] ? 'error' : 'empty'}
                      caption={ownerNameErrors[i] || ''}
                      captionVariant={ownerNameErrors[i] ? 'error' : undefined}
                      inputType="alpha"
                      disabled={s21Submitted}
                    />,
                    <button
                      key={`remove-${i}`}
                      type="button"
                      className="ekyc-s21__remove-row-btn"
                      disabled={s21Submitted || (i === 0 && !name.trim())}
                      onClick={() => {
                        if (i === 0) {
                          setNewOwnerNames(['', ...newOwnerNames.slice(1)]);
                          setOwnerNameErrors(['', ...ownerNameErrors.slice(1)]);
                        } else {
                          setNewOwnerNames(newOwnerNames.filter((_, j) => j !== i));
                          setOwnerNameErrors(ownerNameErrors.filter((_, j) => j !== i));
                        }
                      }}
                    >
                      <span className="material-icons-outlined">close</span>
                    </button>,
                  ])}
                  actionButton={
                    !s21Submitted ? (
                      <button
                        type="button"
                        className="ekyc-s21__add-icon-btn"
                        disabled={!newOwnerNames[newOwnerNames.length - 1]?.trim()}
                        onClick={() => {
                          setNewOwnerNames([...newOwnerNames, '']);
                          setOwnerNameErrors([...ownerNameErrors, '']);
                        }}
                      >
                        <span className="material-icons-outlined">add</span>
                      </button>
                    ) : undefined
                  }
                />
              </div>

              <div className="ekyc-s21__actions">
                <Button
                  variant="primary"
                  disabled={s21Submitted || (isCompany && !companyName.trim()) || newOwnerNames.every((n) => !n.trim())}
                  onClick={handleS21Submit}
                >
                  {t('s21_btn_save')}
                </Button>
                <Button variant="error" disabled={!s21Submitted} onClick={() => setShowS21EditWarn(true)}>
                  {t('s21_btn_edit')}
                </Button>
              </div>

            </div>
          )}
        </SectionBox>

        {/* ════════════════════════════════════════════════ */}
        {/* Section 2.2 — Do eKYC for all land owners      */}
        {/* ════════════════════════════════════════════════ */}
        <div ref={s22Ref}>
        <SectionBox
          number="2.2"
          title={t('s22_title')}
          open={s22Visible}
          className="ekyc-s22-box"
        >
          <p className="ekyc-s22__instruction">
            {t('s22_instruction')}
          </p>

          <div className="ekyc-s22__owner-list">
            {allOwners.map((owner, idx) => {
              const status = ekycStatus[owner.id] || 'pending';
              const data = completedEkycData[owner.id];
              return (
                <div key={owner.id} className="ekyc-s22__owner-block">
                  <div className="ekyc-s22__owner-card">
                    <div className="ekyc-s22__owner-info">
                      <span className="ekyc-s22__owner-num">{idx + 1}.</span>
                      <span className="ekyc-s22__owner-name">{owner.name}</span>
                    </div>
                    {status === 'done' && data ? (
                      <div className="ekyc-s22__done-row">
                        <Button
                          variant="primary"
                          disabled
                        >
                          {t('s22_btn_do_ekyc')}
                        </Button>
                        <span className="ekyc-s22__done-badge">
                          <span className="material-icons-outlined ekyc-s22__done-icon">check_circle_outline</span>
                          {t('s22_ekyc_successful')}
                        </span>
                      </div>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => handleDoEkyc(idx)}
                      >
                        {t('s22_btn_do_ekyc')}
                      </Button>
                    )}
                  </div>

                  {/* UIDAI failure message */}
                  {ekycFailedOwners.has(owner.id) && (
                    <div className="ekyc-popup__overlay">
                      <ErrorMessageCard
                        message={t('s22_uidai_error')}
                        onOk={() => setEkycFailedOwners((prev) => { const s = new Set(prev); s.delete(owner.id); return s; })}
                      />
                    </div>
                  )}

                  {/* Completed eKYC details card */}
                  {status === 'done' && data && (
                    <div className="ekyc-s22__detail-card">
                      <div className="ekyc-s22__detail-photo">
                        <div className="ekyc-s22__detail-photo-label">{t('s22_detail_photo')}</div>
                        <div className="ekyc-s22__detail-photo-placeholder" />
                      </div>
                      <div className="ekyc-s22__detail-table">
                        <div className="ekyc-s22__detail-row ekyc-s22__detail-row--header">
                          <div className="ekyc-s22__detail-cell">{t('s22_detail_owner_name')}</div>
                          <div className="ekyc-s22__detail-cell">{t('s22_detail_rel_name')}</div>
                          <div className="ekyc-s22__detail-cell">{t('s22_detail_doc_no')}</div>
                          <div className="ekyc-s22__detail-cell">{t('s22_detail_address')}</div>
                        </div>
                        <div className="ekyc-s22__detail-row ekyc-s22__detail-row--value">
                          <div className="ekyc-s22__detail-cell">{data.ownerName}</div>
                          <div className="ekyc-s22__detail-cell">{data.relPrefix} {data.relatedPersonName}</div>
                          <div className="ekyc-s22__detail-cell">{data.identityDocNo}</div>
                          <div className="ekyc-s22__detail-cell">{data.address}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Post all completion: review InfoBox ─────── */}
          {allDone && (
            <div className="ekyc-s22__review-info">
              <InfoBox variant="outline">
                {t('s22_review_infobox')}
              </InfoBox>
            </div>
          )}

          {/* ── Verify and Proceed button (inside 2.2) ── */}
          {allDone && !s22Verified && (
            <div className="ekyc-s22__verify-action">
              <Button variant="primary" onClick={handleVerifyAndProceed}>
                {t('s22_btn_verify')}
              </Button>
            </div>
          )}
        </SectionBox>
        </div>

        {/* ════════════════════════════════════════════════ */}
        {/* Section 2.3 — Owner Details Mismatch            */}
        {/* ════════════════════════════════════════════════ */}
        <div ref={s23Ref}>
        {hasMismatch && (
        <SectionBox
          number="2.3"
          title={t('s23_title')}
          open={s23Visible}
          className="ekyc-s23-box"
        >
          <InfoBox variant="warning">
            {t('s23_infobox_warning')}
          </InfoBox>

          {/* ── Case 1: Kaveri owners vs eKYC mismatch ─── */}
          {hasMismatchKaveri && (
            <>
              <div className="ekyc-s23__table-wrap">
                <table className="ekyc-s23__table">
                  <thead>
                    <tr>
                      <th className="ekyc-s23__th ekyc-s23__th--no">{t('s21_col_no')}</th>
                      <th className="ekyc-s23__th ekyc-s23__th--kaveri">{t('s23_col_kaveri_name')}</th>
                      <th className="ekyc-s23__th ekyc-s23__th--ekyc">{t('s23_col_ekyc_name')}</th>
                      <th className="ekyc-s23__th ekyc-s23__th--reason">{t('s23_col_reason')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allOwners.map((owner, idx) => (
                      <tr key={owner.id}>
                        <td className="ekyc-s23__td ekyc-s23__td--no">{idx + 1}</td>
                        <td className="ekyc-s23__td">{owner.name}</td>
                        <td className="ekyc-s23__td">{getEkycName(owner)}</td>
                        <td className="ekyc-s23__td ekyc-s23__td--reason">
                          <Dropdown
                            placeholder={t('s23_reason_placeholder')}
                            options={MISMATCH_REASON_OPTIONS}
                            value={mismatchReasons[owner.id] || ''}
                            onChange={(e) => handleMismatchReasonChange(owner.id, e.target.value)}
                            disabled={s23Submitted}
                            state={!s23Submitted && !mismatchReasons[owner.id] && allOwners.slice(0, idx).every((o) => mismatchReasons[o.id]) ? 'pressed' : ''}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="ekyc-s23__actions">
                <Button
                  variant="primary"
                  disabled={!allReasonsSelected || s23Submitted}
                  onClick={handleS23Save}
                >
                  {t('s23_btn_save')}
                </Button>
                <Button
                  variant="error"
                  disabled={!s23Submitted}
                  onClick={handleS23Edit}
                >
                  {t('s23_btn_edit')}
                </Button>
              </div>
            </>
          )}

          {/* ── Case 2: Added owner vs eKYC mismatch ────── */}
          {hasMismatchNew && (
            <>
              <div className="ekyc-s23__table-wrap">
                <table className="ekyc-s23__table">
                  <thead>
                    <tr>
                      <th className="ekyc-s23__th ekyc-s23__th--no">{t('s21_col_no')}</th>
                      <th className="ekyc-s23__th ekyc-s23__th--kaveri">{t('s23_col_added_name')}</th>
                      <th className="ekyc-s23__th ekyc-s23__th--ekyc">{t('s23_col_ekyc_name')}</th>
                      <th className="ekyc-s23__th ekyc-s23__th--reason">{t('s23_col_reason')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mismatchTableOwners.map((owner, idx) => (
                      <tr key={owner.id}>
                        <td className="ekyc-s23__td ekyc-s23__td--no">{idx + 1}</td>
                        <td className="ekyc-s23__td">{owner.name}</td>
                        <td className="ekyc-s23__td">{getEkycName(owner)}</td>
                        <td className="ekyc-s23__td ekyc-s23__td--reason">
                          <Dropdown
                            placeholder={t('s23_reason_placeholder')}
                            options={NEW_OWNER_MISMATCH_REASON_OPTIONS}
                            value={mismatchReasons[owner.id] || ''}
                            onChange={(e) => handleMismatchReasonChange(owner.id, e.target.value)}
                            disabled={s23Submitted}
                            state={!s23Submitted && !mismatchReasons[owner.id] && mismatchTableOwners.slice(0, idx).every((o) => mismatchReasons[o.id]) ? 'pressed' : ''}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="ekyc-s23__actions">
                <Button
                  variant="primary"
                  disabled={!allReasonsSelected || s23Submitted}
                  onClick={handleS23Save}
                >
                  {t('s23_btn_save')}
                </Button>
                <Button
                  variant="error"
                  disabled={!s23Submitted}
                  onClick={handleS23Edit}
                >
                  {t('s23_btn_edit')}
                </Button>
              </div>
            </>
          )}

          {/* ── Document upload table (shown after Save & Next) */}
          {s23Submitted && mergedDocs.length > 0 && (
            <div className="ekyc-s23__doc-section">
              <p className="ekyc-s23__doc-title">
                {t('s23_doc_title')}
              </p>
              <div className="ekyc-s23__doc-table-wrap">
                <table className="ekyc-s23__doc-table">
                  <thead>
                    <tr>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--sl">{t('s23_col_sl_no')}</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--type">{t('s23_col_doc_type')}</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--docno">{t('s23_col_doc_no')}</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--date">{t('s23_col_issued_date')}</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--upload">{t('s23_col_upload')}</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--view">{t('s23_col_view')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mergedDocs.map((doc, di) => {
                      const d = docUploads[doc.key] || {};
                      return (
                        <tr key={doc.key}>
                          <td className="ekyc-s23__doc-td ekyc-s23__doc-td--sl">{di + 1}</td>
                          <td className="ekyc-s23__doc-td ekyc-s23__doc-td--type">
                            {doc.label}
                            {doc.mandatory && <span className="ekyc-s23__mandatory">*</span>}
                          </td>
                          <td className="ekyc-s23__doc-td ekyc-s23__doc-td--docno">
                            <Input
                              placeholder={t('s23_doc_no_placeholder')}
                              value={d.docNo || ''}
                              onChange={(e) => handleDocFieldChange(doc.key, 'docNo', e.target.value)}
                              inputType="alphanumeric-code"
                            />
                          </td>
                          <td className="ekyc-s23__doc-td ekyc-s23__doc-td--date">
                            <DatePicker
                              value={d.issuedDate || ''}
                              onChange={(e) => handleDocFieldChange(doc.key, 'issuedDate', e.target.value)}
                            />
                          </td>
                          <td className="ekyc-s23__doc-td ekyc-s23__doc-td--upload">
                            {d.fileName ? (
                              <div className="ekyc-s23__upload-area">
                                <div className="ekyc-s23__file-chip">
                                  <span className="ekyc-s23__file-name">{d.fileName}</span>
                                  <button
                                    type="button"
                                    className="ekyc-s23__file-remove"
                                    onClick={() => handleRemoveFile(doc.key)}
                                  >
                                    <span className="material-icons-outlined">close</span>
                                  </button>
                                </div>
                                {(() => {
                                  const baseName = d.fileName.replace(/\.[^/.]+$/, '').toLowerCase();
                                  const docLabel = doc.label.toLowerCase();
                                  if (!baseName.includes(docLabel) && !docLabel.includes(baseName)) {
                                    return <CaptionMessage variant="warning">{t('s23_caption_reupload')}</CaptionMessage>;
                                  }
                                  return <CaptionMessage variant="success">{t('s23_caption_upload_success')}</CaptionMessage>;
                                })()}
                              </div>
                            ) : (
                              <div className="ekyc-s23__upload-area">
                                <Button
                                  variant="white"
                                  icon="upload_file"
                                  onClick={() => handleFileUpload(doc.key)}
                                >
                                  {t('s23_btn_upload_file')}
                                </Button>
                                {d.uploadStatus === 'error' ? (
                                  <CaptionMessage variant="error">{t('s23_caption_file_too_large')}</CaptionMessage>
                                ) : (
                                  <CaptionMessage variant="info">{t('s23_caption_pdf_only')}</CaptionMessage>
                                )}
                              </div>
                            )}
                          </td>
                          <td className="ekyc-s23__doc-td ekyc-s23__doc-td--view">
                            <button
                              type="button"
                              className={`ekyc-view-icon ${d.uploadStatus === 'success' ? 'ekyc-view-icon--active' : 'ekyc-view-icon--inactive'}`}
                              disabled={d.uploadStatus !== 'success'}
                              onClick={() => d.uploadStatus === 'success' && setViewFileKey(doc.key)}
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
            </div>
          )}
        </SectionBox>
        )}
        </div>

        {/* ── Save and Proceed (bottom) ──────────────── */}
        {s22Verified && (
          <div className="ekyc-page__proceed">
            <Button
              variant="primary"
              disabled={hasMismatch && !canS23Proceed}
              onClick={() => { setIsPageComplete(true); onNext?.(); }}
            >
              {t('btn_save_proceed')}
            </Button>
          </div>
        )}

      </div>

      {/* ══════════════════════════════════════════════════ */}
      {/* View File Popup                                   */}
      {/* ══════════════════════════════════════════════════ */}
      {viewFileKey !== null && (
        <div className="ekyc-popup__overlay" onClick={() => setViewFileKey(null)}>
          <div className="ekyc-viewfile-popup" onClick={(e) => e.stopPropagation()}>
            <div className="ekyc-popup__header">
              <h2 className="ekyc-popup__title">{t('popup_view_doc_title')}</h2>
              <button
                className="ekyc-popup__close"
                onClick={() => setViewFileKey(null)}
                type="button"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            <div className="ekyc-viewfile-popup__body">
              <p className="ekyc-viewfile-popup__name">
                {docUploads[viewFileKey]?.fileName || 'Document'}
              </p>
              <div className="ekyc-viewfile-popup__preview">
                <span className="material-icons-outlined ekyc-viewfile-popup__icon">picture_as_pdf</span>
                <p>{t('popup_view_doc_pdf_preview')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════ */}
      {/* eKYC Popup / Modal                                */}
      {/* ══════════════════════════════════════════════════ */}
      {popupOwnerIdx !== null && (
        <div className="ekyc-popup__overlay" onClick={handleClosePopup}>
          <div className="ekyc-popup" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="ekyc-popup__header">
              <h2 className="ekyc-popup__title">{t('popup_ekyc_title')}</h2>
              <button
                className="ekyc-popup__close"
                onClick={handleClosePopup}
                type="button"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>

            {/* Aadhar details table */}
            <div className="ekyc-popup__section">
              <p className="ekyc-popup__section-label">{t('popup_aadhar_details')}</p>
              <OwnerTable
                identityDocNo={MOCK_EKYC_DATA.identityDocNo}
                panchatantraName={MOCK_EKYC_DATA.panchatantraName}
                verifiedName={MOCK_EKYC_DATA.verifiedName}
                gender={MOCK_EKYC_DATA.gender}
                dob={MOCK_EKYC_DATA.dob}
                address={MOCK_EKYC_DATA.address}
              />
            </div>

            {/* Fill details section */}
            <div className="ekyc-popup__section">
              <p className="ekyc-popup__section-title">
                {t('popup_fill_details')}
              </p>

              <InfoBox variant="outline">
                {t('popup_rel_person_infobox')}
              </InfoBox>

              <div className="ekyc-popup__fields-row">
                <Dropdown
                  label={t('popup_rel_type_label')}
                  placeholder={t('popup_rel_type_placeholder')}
                  options={RELATIONSHIP_OPTIONS}
                  value={relationshipType}
                  onChange={(e) => setRelationshipType(e.target.value)}
                  required
                  className="ekyc-popup__field"
                />
                <Input
                  label={t('popup_rel_name_label')}
                  value={relatedPersonName}
                  required
                  frozen
                  className="ekyc-popup__field"
                />
              </div>

              {/* Mobile + OTP section */}
              <div className="ekyc-popup__mobile-section">
                <div className="ekyc-popup__mobile-row">
                  <Input
                    label={t('popup_mobile_label')}
                    placeholder={t('popup_mobile_placeholder')}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    inputType="phone"
                    maxLength={10}
                    className="ekyc-popup__field--mobile"
                  />
                  <Button
                    variant="primary"
                    disabled={mobileNumber.trim().length !== 10 || (otpSent && otpCountdown > 0 && !otpError)}
                    onClick={handleGetOtp}
                    className="ekyc-popup__get-otp-btn"
                  >
                    {t('popup_btn_get_otp')}
                  </Button>
                </div>

                <div className="ekyc-popup__otp-wrap">
                  <Input
                    label={t('popup_otp_label')}
                    placeholder=""
                    value={otp}
                    onChange={(e) => { setOtp(e.target.value); setOtpError(false); }}
                    required
                    disabled={!otpSent}
                    inputType="otp"
                    state={otpError ? 'error' : undefined}
                    caption={
                      otpError
                        ? t('popup_otp_error')
                        : (otpSent && otpCountdown > 0
                            ? t('popup_otp_countdown').replace('{n}', otpCountdown)
                            : '')
                    }
                    captionVariant={otpError ? 'error' : (otpSent && otpCountdown > 0 ? 'error' : undefined)}
                    className="ekyc-popup__field--otp"
                  />
                </div>
              </div>
            </div>

            {/* Complete eKYC button */}
            <div className="ekyc-popup__footer">
              <Button
                variant="primary"
                disabled={!relationshipType || !mobileNumber.trim() || !otpSent || !otp.trim() || otpError}
                onClick={handleCompleteEkyc}
              >
                {t('popup_btn_complete_ekyc')}
              </Button>
              {otpVerified && (
                <span className="ekyc-popup__otp-success">
                  <span className="material-icons-outlined">check_circle_outline</span>
                  {t('popup_otp_verified')}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Section 2.1 Edit warning modal ─────────────── */}
      {showS21EditWarn && (() => {
        const downstream = [];
        if (completedBCSteps.includes(2)) downstream.push(t('s21_warn_step3'));
        if (completedBCSteps.includes(3)) downstream.push(t('s21_warn_step4'));
        if (completedBCSteps.includes(4)) downstream.push(t('s21_warn_step5'));
        const suffix = downstream.length ? `, ${downstream.join(', ')}` : '';
        return (
          <div className="ekyc-popup__overlay" onClick={() => setShowS21EditWarn(false)}>
            <div onClick={(e) => e.stopPropagation()}>
              <ErrorMessageCard
                message={`${t('s21_warn_message')}${suffix}.`}
                subMessage={t('s21_warn_sub')}
                actions={[
                  { label: t('s21_warn_yes'),    onClick: () => { setShowS21EditWarn(false); onResetDownstream?.(); handleS21Edit(); } },
                  { label: t('s21_warn_cancel'), onClick: () => setShowS21EditWarn(false) },
                ]}
              />
            </div>
          </div>
        );
      })()}

    </div>
  );
};

export default OwnerEKYCPage;
