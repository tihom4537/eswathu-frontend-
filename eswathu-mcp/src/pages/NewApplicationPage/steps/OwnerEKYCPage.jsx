import { useState, useEffect, useRef } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import Stepper from '../../../components/Stepper/Stepper';
import StepHeader from '../../../components/StepHeader/StepHeader';
import SectionBox from '../../../components/SectionBox/SectionBox';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Button from '../../../components/Button/Button';
import InfoBox from '../../../components/InfoBox/InfoBox';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import DatePicker from '../../../components/DatePicker/DatePicker';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import OwnerTable from '../../../components/OwnerTable/OwnerTable';
import EKYCRedirectScreen from './EKYCRedirectScreen';
import './OwnerEKYCPage.css';

/* ── Mock data (pre-fetched from Kaveri) ───────────────── */
const MOCK_OWNERS = [
  { id: 1, name: 'Mayuri Kumari' },
  { id: 2, name: 'Mohit Kumar Singh' },
];

const MOCK_EKYC_DATA = {
  identityDocNo: 'XXXXXXXXXXXXXXXXXXXXX',
  panchatantraName: 'Mohit Kumar Singh',
  verifiedName: 'Mohit Kumar Singh',
  gender: 'Male',
  dob: '03-08-2000',
  address:
    'No. 6, 5th main, Vidhana Soudha, Bengaluru, Karnataka- 560043',
};

const RELATIONSHIP_OPTIONS = [
  { value: 'son', label: 'Son of' },
  { value: 'daughter', label: 'Daughter of' },
  { value: 'spouse', label: 'Spouse of' },
  { value: 'care', label: 'Care of' },
];

/* Maps relationship value to prefix for display */
const REL_PREFIX = { son: 'S/o', daughter: 'D/o', spouse: 'W/o', care: 'C/o' };

/* ── Mock eKYC names (simulated mismatch) ──────────────── */
const MOCK_EKYC_NAMES = {
  1: 'Sri. Mayuri Kumari',
  2: 'Mohit Singh',
};

/* ── Mismatch reason options ───────────────────────────── */
const MISMATCH_REASON_OPTIONS = [
  { value: 'name_spelling_mismatch', label: 'Name Spelling Mismatch' },
  { value: 'sale_transferred', label: 'Sale/Transferred' },
  { value: 'unregistered_will', label: 'Unregistered Will' },
  { value: 'inheritance_succession', label: 'Inheritance/Succession' },
  { value: 'court_order', label: 'Court Order' },
  { value: 'bank_fi_sale_certificate', label: 'Bank/FI Sale Certificate' },
];

/* ── Document upload config per reason ─────────────────── */
const DOCS_BY_REASON = {
  sale_transferred: [
    { key: 'division_letter', label: 'Division Letter', mandatory: true },
    { key: 'death_certificate', label: 'Death certificate', mandatory: true },
    { key: 'will', label: 'Will', mandatory: false },
  ],
  unregistered_will: [
    { key: 'division_letter', label: 'Division Letter', mandatory: true },
    { key: 'death_certificate', label: 'Death certificate', mandatory: true },
    { key: 'will', label: 'Will', mandatory: false },
  ],
  inheritance_succession: [
    { key: 'division_letter', label: 'Division Letter', mandatory: true },
    { key: 'death_certificate', label: 'Death certificate', mandatory: true },
    { key: 'will', label: 'Will', mandatory: false },
  ],
  court_order: [
    { key: 'division_letter', label: 'Division Letter', mandatory: true },
    { key: 'death_certificate', label: 'Death certificate', mandatory: true },
    { key: 'will', label: 'Will', mandatory: false },
  ],
  bank_fi_sale_certificate: [
    { key: 'division_letter', label: 'Division Letter', mandatory: true },
    { key: 'death_certificate', label: 'Death certificate', mandatory: true },
    { key: 'will', label: 'Will', mandatory: false },
  ],
};

const OwnerEKYCPage = ({ onNavigate, username = '' }) => {
  /* ── Section 2.1 State ──────────────────────────────── */
  const [isCompany, setIsCompany] = useState(false);
  const [addNewOwner, setAddNewOwner] = useState(false);
  const [newOwnerNames, setNewOwnerNames] = useState(['']);
  const [s21Submitted, setS21Submitted] = useState(false);

  /* ── Derived: combined owners (original + newly added) ── */
  const newOwners = newOwnerNames
    .filter((n) => n.trim())
    .map((n, i) => ({ id: `new-${i}`, name: n.trim() }));
  const allOwners = s21Submitted && addNewOwner
    ? newOwners
    : MOCK_OWNERS;

  /* ── Section 2.2 State ──────────────────────────────── */
  const [s22Visible, setS22Visible] = useState(false);
  const [s22Verified, setS22Verified] = useState(false);
  const [ekycStatus, setEkycStatus] = useState({}); // { [ownerId]: 'pending' | 'in-progress' | 'done' }
  const [completedEkycData, setCompletedEkycData] = useState({}); // { [ownerId]: { ownerName, relPrefix, relatedPersonName, identityDocNo, address } }

  /* ── eKYC Redirect State ────────────────────────────── */
  const [ekycOwnerIdx, setEkycOwnerIdx] = useState(null);

  /* ── eKYC Popup / Modal State ───────────────────────── */
  const [popupOwnerIdx, setPopupOwnerIdx] = useState(null);
  const [relationshipType, setRelationshipType] = useState('');
  const [relatedPersonName, setRelatedPersonName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(0);
  const otpTimerRef = useRef(null);
  const scrollPosRef = useRef(0);

  /* ── Section 2.3 State — Mismatch ───────────────────── */
  const [s23Visible, setS23Visible] = useState(false);
  const [mismatchReasons, setMismatchReasons] = useState({}); // { [ownerId]: reason value }
  const [s23Submitted, setS23Submitted] = useState(false);
  // Document upload state: { [docKey]: { docNo, issuedDate, fileName, uploadStatus } }
  // uploadStatus: undefined | 'success' | 'error'
  const [docUploads, setDocUploads] = useState({});

  /* ── View file popup state ───────────────────────────── */
  const [viewFileKey, setViewFileKey] = useState(null);

  /* ── Derived: all owners done? ──────────────────────── */
  const allDone = allOwners.every((o) => ekycStatus[o.id] === 'done');

  /* ── Derived: name mismatch exists? ──────────────────── */
  const hasMismatch = allOwners.some((o) => {
    const ekycName = MOCK_EKYC_NAMES[o.id];
    return ekycName && ekycName !== o.name;
  });

  /* ── Derived: needs document upload? ─────────────────── */
  const needsDocUpload = (reason) => reason && reason !== 'name_spelling_mismatch';

  /* ── Derived: merged unique docs for all reasons ─────── */
  const mergedDocs = (() => {
    const seen = new Set();
    const result = [];
    for (const owner of allOwners) {
      const reason = mismatchReasons[owner.id];
      if (!needsDocUpload(reason)) continue;
      const docs = DOCS_BY_REASON[reason] || [];
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
  const allReasonsSelected = allOwners.every((o) => mismatchReasons[o.id]);

  /* ── Derived: all reasons are spelling only? ──────── */
  const allSpellingOnly = allReasonsSelected && mergedDocs.length === 0;

  /* ── Derived: can Save and Proceed (bottom)? ──────────── */
  const canS23Proceed = (() => {
    if (!allReasonsSelected) return false;
    // If all reasons are spelling mismatch, no doc upload needed
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
    setS22Visible(false);
    setS22Verified(false);
    setS23Visible(false);
    // Invalidate ALL completed KYC + mismatch data
    setEkycStatus({});
    setCompletedEkycData({});
    setMismatchReasons({});
    setDocUploads({});
    setS23Submitted(false);
  };

  /* ── Handlers: Section 2.2 — Do eKYC ───────────────── */
  const handleDoEkyc = (idx) => {
    scrollPosRef.current = window.scrollY;
    setEkycStatus((prev) => ({ ...prev, [allOwners[idx].id]: 'in-progress' }));
    setEkycOwnerIdx(idx);
  };

  const handleEkycComplete = () => {
    const owner = allOwners[ekycOwnerIdx];
    setEkycStatus((prev) => ({ ...prev, [owner.id]: 'done' }));
    // Open popup for this owner
    setPopupOwnerIdx(ekycOwnerIdx);
    setEkycOwnerIdx(null);
    // Restore scroll position so user sees the detail card area
    requestAnimationFrame(() => window.scrollTo(0, scrollPosRef.current));
    // Reset popup form
    setRelationshipType('');
    setRelatedPersonName('');
    setMobileNumber('');
    setOtp('');
    setOtpSent(false);
    setOtpVerified(false);
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

  /* Cleanup OTP timer on unmount */
  useEffect(() => {
    return () => clearInterval(otpTimerRef.current);
  }, []);

  const handleCompleteEkyc = () => {
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
    // If popup is closed without completing, revert to pending
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
    // Clear all doc uploads when any reason changes
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
        onLogout={() => onNavigate('login')}
      />

      {/* ── Stepper ─────────────────────────────────────── */}
      <Stepper activeStep={1} />

      {/* ── Step Header ─────────────────────────────────── */}
      <StepHeader step="Step 2" title="Owner KYC" />

      {/* ── Sections container ──────────────────────────── */}
      <div className="ekyc-page__sections">

        {/* ── Top InfoBox ─────────────────────────────── */}
        <InfoBox variant="blue">
          Please keep the property ownership document used in the previous stage ready for entering the correct owner&apos;s details.
        </InfoBox>

        {/* ════════════════════════════════════════════════ */}
        {/* Section 2.1 — Owner Details                     */}
        {/* ════════════════════════════════════════════════ */}
        <SectionBox
          number="2.1"
          title="Ownership Details (As mentioned in your property ownership document)"
          open
          className="ekyc-s21-box"
        >
          {/* ── Company details ────────────────────────── */}
          <div className="ekyc-s21__subsection">
            <h3 className="ekyc-s21__subtitle">Company details</h3>
            <div className="ekyc-s21__question">
              <p className="ekyc-s21__question-text">
                Is this property owned by a company/ organisation?
              </p>
              <div className="ekyc-s21__radio-row">
                <RadioButton
                  label="Yes"
                  name="isCompany"
                  value="yes"
                  checked={isCompany === true}
                  onChange={() => !s21Submitted && setIsCompany(true)}
                  disabled={s21Submitted}
                />
                <RadioButton
                  label="No"
                  name="isCompany"
                  value="no"
                  checked={isCompany === false}
                  onChange={() => !s21Submitted && setIsCompany(false)}
                  disabled={s21Submitted}
                />
              </div>
            </div>
          </div>

          {/* ── Owner Name details ─────────────────────── */}
          <div className="ekyc-s21__subsection">
            <h3 className="ekyc-s21__subtitle">Owner Name details</h3>

            {/* Owner table */}
            <div className="ekyc-s21__owner-table-wrap">
              <table className="ekyc-s21__owner-table">
                <thead>
                  <tr>
                    <th className="ekyc-s21__th ekyc-s21__th--no">No.</th>
                    <th className="ekyc-s21__th">Owner name</th>
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

          {/* ── InfoBoxes ──────────────────────────────── */}
          <div className="ekyc-s21__info-boxes">
            <InfoBox variant="red">
              If there are any spelling errors in the name of the owners, please proceed to ekyc as any mismatch will be checked later
            </InfoBox>
            <InfoBox variant="red">
              If owner name is missing, clubbed together by mistake or there are new owners to be added, please add owner below
            </InfoBox>
          </div>

          {/* ── Add new owners question ────────────────── */}
          <div className="ekyc-s21__question">
            <p className="ekyc-s21__question-text">
              Do you want to add new owners?
            </p>
            <div className="ekyc-s21__radio-row">
              <RadioButton
                label="Yes"
                name="addNewOwner"
                value="yes"
                checked={addNewOwner === true}
                onChange={() => !s21Submitted && setAddNewOwner(true)}
                disabled={s21Submitted}
              />
              <RadioButton
                label="No"
                name="addNewOwner"
                value="no"
                checked={addNewOwner === false}
                onChange={() => !s21Submitted && setAddNewOwner(false)}
                disabled={s21Submitted}
              />
            </div>
          </div>

          {/* ── New owner input table (when Yes selected) ── */}
          {addNewOwner && (
            <div className="ekyc-s21__new-owner-section">
              <div className="ekyc-s21__new-owner-table-wrap">
                <table className="ekyc-s21__owner-table ekyc-s21__new-owner-table">
                  <thead>
                    <tr>
                      <th className="ekyc-s21__th ekyc-s21__th--no">No.</th>
                      <th className="ekyc-s21__th">Owner name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newOwnerNames.map((name, i) => (
                      <tr key={i} className="ekyc-s21__tr ekyc-s21__tr--input">
                        <td className="ekyc-s21__td ekyc-s21__td--no">{i + 1}</td>
                        <td className="ekyc-s21__td ekyc-s21__td--input">
                          <div className="ekyc-s21__input-wrap">
                            <input
                              type="text"
                              className="ekyc-s21__name-input"
                              placeholder="Enter owner name"
                              value={name}
                              onChange={(e) => {
                                const updated = [...newOwnerNames];
                                updated[i] = e.target.value;
                                setNewOwnerNames(updated);
                              }}
                              disabled={s21Submitted}
                            />
                            {!s21Submitted && newOwnerNames.length > 1 && (
                              <button
                                type="button"
                                className="ekyc-s21__remove-row-btn"
                                onClick={() => setNewOwnerNames((prev) => prev.filter((_, j) => j !== i))}
                              >
                                <span className="material-icons-outlined">close</span>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* + Add row button */}
                {!s21Submitted && (
                  <button
                    type="button"
                    className={`ekyc-s21__add-row-btn${!newOwnerNames[newOwnerNames.length - 1]?.trim() ? ' ekyc-s21__add-row-btn--disabled' : ''}`}
                    disabled={!newOwnerNames[newOwnerNames.length - 1]?.trim()}
                    onClick={() => setNewOwnerNames((prev) => [...prev, ''])}
                  >
                    <span className="material-icons-outlined">add</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ── Action buttons ─────────────────────────── */}
          <div className="ekyc-s21__actions">
            <Button
              variant="primary"
              disabled={s21Submitted || (addNewOwner && newOwnerNames.every((n) => !n.trim()))}
              onClick={handleS21Submit}
            >
              Proceed to KYC
            </Button>
            <Button
              variant="error"
              disabled={!s21Submitted}
              onClick={handleS21Edit}
            >
              Edit
            </Button>
          </div>

          {/* ── Success message after adding owners ────── */}
          {s21Submitted && addNewOwner && newOwnerNames.some((n) => n.trim()) && (
            <div className="ekyc-s21__success-msg">
              <span className="material-icons-outlined ekyc-s21__success-icon">check_circle_outline</span>
              <span className="ekyc-s21__success-text">
                Owners have been added. Please proceed to next step to complete eKYC.
              </span>
            </div>
          )}
        </SectionBox>

        {/* ════════════════════════════════════════════════ */}
        {/* Section 2.2 — Do eKYC for all land owners      */}
        {/* ════════════════════════════════════════════════ */}
        <SectionBox
          number="2.2"
          title="Do eKYC for all land owners"
          open={s22Visible}
          className="ekyc-s22-box"
        >
          <p className="ekyc-s22__instruction">
            Kindly do Aadhar ekyc for all the owners
          </p>

          <div className="ekyc-s22__owner-list">
            {allOwners.map((owner, idx) => {
              const status = ekycStatus[owner.id] || 'pending';
              const data = completedEkycData[owner.id];
              return (
                <div key={owner.id} className="ekyc-s22__owner-block">
                  {/* Owner row: number + name + button/badge */}
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
                          Do eKYC
                        </Button>
                        <span className="ekyc-s22__done-badge">
                          <span className="material-icons-outlined ekyc-s22__done-icon">check_circle_outline</span>
                          eKYC successful
                        </span>
                      </div>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => handleDoEkyc(idx)}
                      >
                        Do eKYC
                      </Button>
                    )}
                  </div>

                  {/* Completed eKYC details card */}
                  {status === 'done' && data && (
                    <div className="ekyc-s22__detail-card">
                      <div className="ekyc-s22__detail-photo">
                        <div className="ekyc-s22__detail-photo-label">Owner photograph</div>
                        <div className="ekyc-s22__detail-photo-placeholder" />
                      </div>
                      <div className="ekyc-s22__detail-table">
                        {/* Header row */}
                        <div className="ekyc-s22__detail-row ekyc-s22__detail-row--header">
                          <div className="ekyc-s22__detail-cell">Owner Name</div>
                          <div className="ekyc-s22__detail-cell">Father/Mother/ Guardian/ Spouse/ Name</div>
                          <div className="ekyc-s22__detail-cell">Owner&apos;s Identification Document No.</div>
                          <div className="ekyc-s22__detail-cell">Owner&apos;s Address</div>
                        </div>
                        {/* Value row */}
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
                Please review all your details before you proceed to the next stage. If there are any errors, go back and click edit to make changes to the owners added.
              </InfoBox>
            </div>
          )}

          {/* ── Verify and Proceed button (inside 2.2) ── */}
          {allDone && !s22Verified && (
            <div className="ekyc-s22__verify-action">
              <Button variant="primary" onClick={handleVerifyAndProceed}>
                Verify and Proceed
              </Button>
            </div>
          )}
        </SectionBox>

        {/* ════════════════════════════════════════════════ */}
        {/* Section 2.3 — Owner Details Mismatch            */}
        {/* ════════════════════════════════════════════════ */}
        {hasMismatch && (
        <SectionBox
          number="2.3"
          title="Owner Details Mismatch"
          open={s23Visible}
          className="ekyc-s23-box"
        >
          <InfoBox variant="red">
            There is a Mismatch in the Owner Name Details.
          </InfoBox>

          {/* ── Mismatch table ─────────────────────────── */}
          <div className="ekyc-s23__table-wrap">
            <table className="ekyc-s23__table">
              <thead>
                <tr>
                  <th className="ekyc-s23__th ekyc-s23__th--no">No.</th>
                  <th className="ekyc-s23__th ekyc-s23__th--kaveri">Owner name as per Kaveri</th>
                  <th className="ekyc-s23__th ekyc-s23__th--ekyc">Name as per eKYC</th>
                  <th className="ekyc-s23__th ekyc-s23__th--reason">Reason for not matching</th>
                </tr>
              </thead>
              <tbody>
                {allOwners.map((owner, idx) => (
                  <tr key={owner.id}>
                    <td className="ekyc-s23__td ekyc-s23__td--no">{idx + 1}</td>
                    <td className="ekyc-s23__td">{owner.name}</td>
                    <td className="ekyc-s23__td">{MOCK_EKYC_NAMES[owner.id] || owner.name}</td>
                    <td className="ekyc-s23__td ekyc-s23__td--reason">
                      <Dropdown
                        placeholder="Select reason"
                        options={MISMATCH_REASON_OPTIONS}
                        value={mismatchReasons[owner.id] || ''}
                        onChange={(e) => handleMismatchReasonChange(owner.id, e.target.value)}
                        disabled={s23Submitted}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Action buttons ─────────────────────────── */}
          <div className="ekyc-s23__actions">
            <Button
              variant="primary"
              disabled={!allReasonsSelected || s23Submitted}
              onClick={handleS23Save}
            >
              Save and Next
            </Button>
            <Button
              variant="error"
              disabled={!s23Submitted}
              onClick={handleS23Edit}
            >
              Edit
            </Button>
          </div>

          {/* ── Document upload table (shown after Save & Next) */}
          {s23Submitted && mergedDocs.length > 0 && (
            <div className="ekyc-s23__doc-section">
              <p className="ekyc-s23__doc-title">
                Please upload the documents mentioned below for the mismatch reason
              </p>
              <div className="ekyc-s23__doc-table-wrap">
                <table className="ekyc-s23__doc-table">
                  <thead>
                    <tr>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--sl">Sl No.</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--type">Document Type</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--docno">Document No.</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--date">Issued Date</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--upload">Upload File</th>
                      <th className="ekyc-s23__doc-th ekyc-s23__doc-th--view">View file</th>
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
                              placeholder="Enter document no."
                              value={d.docNo || ''}
                              onChange={(e) => handleDocFieldChange(doc.key, 'docNo', e.target.value)}
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
                                    return <CaptionMessage variant="warning">Please check and re-upload the document</CaptionMessage>;
                                  }
                                  return <CaptionMessage variant="success">Document uploaded successfully</CaptionMessage>;
                                })()}
                              </div>
                            ) : (
                              <div className="ekyc-s23__upload-area">
                                <Button
                                  variant="white"
                                  icon="upload_file"
                                  onClick={() => handleFileUpload(doc.key)}
                                >
                                  Upload File
                                </Button>
                                {d.uploadStatus === 'error' ? (
                                  <CaptionMessage variant="error">Document exceeds 5MB</CaptionMessage>
                                ) : (
                                  <CaptionMessage variant="info">Only PDF size up-to 5MB allowed</CaptionMessage>
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

        {/* ── Save and Proceed (bottom) ──────────────── */}
        {s22Verified && (
          <div className="ekyc-page__proceed">
            <Button
              variant="primary"
              disabled={hasMismatch && !canS23Proceed}
              onClick={() => onNavigate('new-application-step3')}
            >
              Save and Proceed
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
              <h2 className="ekyc-popup__title">View Document</h2>
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
                <p>PDF preview not available in prototype</p>
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
              <h2 className="ekyc-popup__title">Complete eKYC</h2>
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
              <p className="ekyc-popup__section-label">Aadhar details:</p>
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
                Kindly complete Aadhar ekyc by filling these details
              </p>

              <InfoBox variant="outline">
                Please enter name of the related person as per your Aadhar
              </InfoBox>

              <div className="ekyc-popup__fields-row">
                <Dropdown
                  label="Relationship Type"
                  placeholder="Choose Relationship Type"
                  options={RELATIONSHIP_OPTIONS}
                  value={relationshipType}
                  onChange={(e) => setRelationshipType(e.target.value)}
                  required
                  className="ekyc-popup__field"
                />
                <Input
                  label="Name of the Related Person"
                  value={relatedPersonName}
                  onChange={(e) => setRelatedPersonName(e.target.value)}
                  required
                  className="ekyc-popup__field"
                />
              </div>

              {/* Mobile + Get OTP + OTP row */}
              <div className="ekyc-popup__mobile-row">
                <Input
                  label="Mobile number"
                  placeholder="XXXXXXXXXXXX"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                  className="ekyc-popup__field--mobile"
                />
                <Button
                  variant="primary"
                  disabled={!mobileNumber.trim() || (otpSent && otpCountdown > 0)}
                  onClick={handleGetOtp}
                  className="ekyc-popup__get-otp-btn"
                >
                  Get OTP
                </Button>
                <div className="ekyc-popup__otp-wrap">
                  <Input
                    label="Enter OTP"
                    placeholder=""
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    disabled={!otpSent}
                    className="ekyc-popup__field--otp"
                  />
                  {otpSent && otpCountdown > 0 && (
                    <p className="ekyc-popup__otp-timer">
                      Please enter within {otpCountdown} seconds
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Complete eKYC button — disabled until ALL mandatory fields filled */}
            <div className="ekyc-popup__footer">
              <Button
                variant="primary"
                disabled={!relationshipType || !relatedPersonName.trim() || !mobileNumber.trim() || !otpSent || !otp.trim()}
                onClick={handleCompleteEkyc}
              >
                Complete eKYC
              </Button>
              {otpVerified && (
                <span className="ekyc-popup__otp-success">
                  <span className="material-icons-outlined">check_circle_outline</span>
                  OTP verified successfully
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerEKYCPage;
