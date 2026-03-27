import { useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import RadioButton from '../../../components/RadioButton/RadioButton';
import InfoBox from '../../../components/InfoBox/InfoBox';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import './PropertyDetails_AreaDetails.css';

/* ── Mock Kaveri area values (one per unit) ────────────────── */
const MOCK_KAVERI_AREA = {
  sqft:  '2400',
  sqmt:  '222.97',
  gunta: '2.20',
  acre:  '0.055',
  cent:  '5.51',
};

const UNIT_OPTIONS = [
  { value: 'sqft',  label: 'Sq.Ft'  },
  { value: 'sqmt',  label: 'Sq.Mt'  },
  { value: 'gunta', label: 'Gunta'  },
  { value: 'acre',  label: 'Acre'   },
  { value: 'cent',  label: 'Cent'   },
];

/* Conversion factors → Sq.Mt */
const TO_SQMT = { sqft: 0.0929, sqmt: 1, gunta: 101.17, acre: 4046.86, cent: 40.47 };

/* Units that show an inline Sq.Mt conversion field */
const needsConversion = (unit) => unit && unit !== 'sqmt';

/*
 * IS_GUNTA_FLOW — exported so PropertyDetailsPage can determine
 * whether to skip the Site Dimensions subsection.
 * Gunta, Acre, and Cent flows go directly from Area → Checkbandi.
 */
export const IS_GUNTA_FLOW = (unit) => ['gunta', 'acre', 'cent'].includes(unit);

/* Convert a value in a given unit to Sq.Mt (string, 2dp) */
const toSqmt = (val, unit) => {
  const num = parseFloat(val);
  if (isNaN(num) || num <= 0) return '';
  return (num * (TO_SQMT[unit] || 1)).toFixed(2);
};

/* ─────────────────────────────────────────────────────────────
 * Props
 *   onAccept(sqmt: number, wasRejected: boolean, unit: string)
 * ───────────────────────────────────────────────────────────── */
const PropertyDetails_AreaDetails = ({ onAccept }) => {
  /* Selected unit */
  const [unit, setUnit] = useState('');

  /* Area values in selected unit + Sq.Mt equivalent */
  const [areaInUnit, setAreaInUnit] = useState('');
  const [areaSqmt, setAreaSqmt]     = useState('');

  /* Accept / Reject radio */
  const [choice, setChoice] = useState(''); // '' | 'accept' | 'reject'

  /* Reject-flow: new area entry */
  const [rejectVal, setRejectVal]               = useState('');
  const [rejectSqmt, setRejectSqmt]             = useState('');
  const [rejectConfirmed, setRejectConfirmed]   = useState(false);

  /* ── Unit change — pre-fill from Kaveri mock ────────────── */
  const handleUnitChange = (sel) => {
    setUnit(sel);
    setChoice('');
    setRejectVal('');
    setRejectSqmt('');
    setRejectConfirmed(false);
    const mock = MOCK_KAVERI_AREA[sel] || '';
    setAreaInUnit(mock);
    setAreaSqmt(needsConversion(sel) ? toSqmt(mock, sel) : mock);
  };

  /* ── Accept / Reject radio ───────────────────────────────── */
  const handleChoiceChange = (val) => {
    setChoice(val);
    setRejectVal('');
    setRejectSqmt('');
    setRejectConfirmed(false);
    if (val === 'accept') {
      const sqmt = parseFloat(areaSqmt) || 0;
      onAccept(sqmt, false, unit);
    }
  };

  /* ── Reject flow input ───────────────────────────────────── */
  const handleRejectValChange = (e) => {
    const val = e.target.value;
    setRejectVal(val);
    setRejectSqmt(needsConversion(unit) ? toSqmt(val, unit) : val);
  };

  const handleConfirmArea = () => {
    /* Use rejectSqmt when conversion exists, else rejectVal directly */
    const sqmt = parseFloat(needsConversion(unit) ? rejectSqmt : rejectVal) || 0;
    setRejectConfirmed(true);
    onAccept(sqmt, true, unit);
  };

  /* ── Derived ─────────────────────────────────────────────── */
  const unitLabel = UNIT_OPTIONS.find((u) => u.value === unit)?.label || '';

  const canConfirmReject =
    rejectVal.trim() !== '' && parseFloat(rejectVal) > 0 && !rejectConfirmed;

  return (
    <div className="pd-ad">
      <p className="pd-ad__heading">Area Details</p>

      {/* ── Unit selector row ──────────────────────────────── */}
      <div className="pd-ad__unit-section">
        <p className="pd-ad__label">
          Please choose a unit <span className="pd-ad__required">*</span>
        </p>
        <div className="pd-ad__unit-row">
          {/* Total Area from Kaveri — frozen, updates when unit changes */}
          <div className="pd-ad__total-area-wrap">
            <Input
              label="Total Area"
              value={unit ? (MOCK_KAVERI_AREA[unit] || '') : ''}
              frozen
              required
              inputType="numeric"
              className="pd-ad__area-input"
            />
          </div>

          {/* Unit radios */}
          <div className="pd-ad__radio-row">
            {UNIT_OPTIONS.map((opt) => (
              <RadioButton
                key={opt.value}
                name="area-unit"
                value={opt.value}
                label={opt.label}
                checked={unit === opt.value}
                onChange={() => handleUnitChange(opt.value)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── InfoBox + compact area pills — shown after unit selected ── */}
      {unit && (
        <>
          {unit === 'sqmt' && (
            <InfoBox variant="outline">
              The area is already in Sq.Mt — no unit conversion required.
            </InfoBox>
          )}
          {unit === 'sqft' && (
            <InfoBox variant="outline">
              The area you enter in Sq.Ft, Gunta, Acre or cent will be converted to Sq.Mt
              for displaying in E-Khata
            </InfoBox>
          )}
          {IS_GUNTA_FLOW(unit) && (
            <InfoBox variant="outline">
              The area you enter in Sq.Ft, Gunta, Acre or cent will be converted to Sq.Mt
              for displaying in E-Khata
            </InfoBox>
          )}

          {/* Compact key-value pills */}
          <div className="pd-ad__area-pills">
            <div className="pd-ad__pill pd-ad__pill--grey">
              <span>Area in {unitLabel}</span>
              <span>{areaInUnit}</span>
            </div>
            {needsConversion(unit) && (
              <div className="pd-ad__pill pd-ad__pill--blue">
                <span>Area in Sq.Mtr</span>
                <span>{areaSqmt}</span>
              </div>
            )}
          </div>
        </>
      )}

      {/* ── Accept / Reject ──────────────────────────────────── */}
      {unit && (
        <div className="pd-ad__group">
          <p className="pd-ad__label">
            Do you accept the property area dimensions shown above (as per the Kaveri
            System)?{' '}
            <span className="pd-ad__required">*</span>
          </p>
          <div className="pd-ad__radio-row">
            <RadioButton
              name="area-choice"
              value="accept"
              label="I Accept"
              checked={choice === 'accept'}
              onChange={() => handleChoiceChange('accept')}
            />
            <RadioButton
              name="area-choice"
              value="reject"
              label="No, I want to change the area dimensions"
              checked={choice === 'reject'}
              onChange={() => handleChoiceChange('reject')}
            />
          </div>

          {/* ── REJECT FLOW ────────────────────────────────── */}
          {choice === 'reject' && (
            <div className="pd-ad__reject-section">
              <InfoBox variant="outline">
                If the applicant disagrees with the area shown and enters a different
                area, the application will be sent to the Panchayat Development
                Officer (PDO) for approval.
              </InfoBox>

              <div className="pd-ad__reject-body">
                <p className="pd-ad__subheading">Please enter the new area dimensions</p>

                <div className="pd-ad__conv-row">
                  <Input
                    label={`Area in ${unitLabel}`}
                    value={rejectVal}
                    onChange={handleRejectValChange}
                    required
                    disabled={rejectConfirmed}
                    inputType="numeric"
                  />
                  {needsConversion(unit) && (
                    <Input label="Area in Sq.Mtr" value={rejectSqmt} frozenBlue required />
                  )}
                </div>

                {!rejectConfirmed && (
                  <Button
                    variant="primary"
                    disabled={!canConfirmReject}
                    onClick={handleConfirmArea}
                    className="pd-ad__confirm-btn"
                  >
                    Confirm Area
                  </Button>
                )}

                {rejectConfirmed && (
                  <CaptionMessage variant="success">
                    New Area Entered. Please proceed.
                  </CaptionMessage>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyDetails_AreaDetails;
