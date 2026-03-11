import { useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import RadioButton from '../../../components/RadioButton/RadioButton';
import InfoBox from '../../../components/InfoBox/InfoBox';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import './PropertyDetails_AreaDetails.css';

/* ── Mock Kaveri fetched area ─────────────────────────────── */
const MOCK_KAVERI_AREA = '2400'; // sq.ft (matches Figma mock)

const UNIT_OPTIONS = [
  { value: 'sqft',  label: 'Sq.Ft' },
  { value: 'sqmt',  label: 'Sq.Mt' },
  { value: 'gunta', label: 'Gunta' },
  { value: 'acre',  label: 'Acre'  },
  { value: 'cent',  label: 'Cent'  },
];

/* Conversion factor: unit → Sq.Mt */
const TO_SQMT = { sqft: 0.0929, sqmt: 1, gunta: 101.17, acre: 4046.86, cent: 40.47 };

const PropertyDetails_AreaDetails = ({ onAccept }) => {
  const [areaValue, setAreaValue]         = useState(MOCK_KAVERI_AREA);
  const [unit, setUnit]                   = useState('');
  const [areaSqft, setAreaSqft]           = useState('');
  const [areaSqmt, setAreaSqmt]           = useState('');
  const [choice, setChoice]               = useState(''); // '' | 'accept' | 'reject'

  /* ── Reject-flow state ─────────────────────────────────── */
  const [rejectSqft, setRejectSqft]       = useState('');
  const [rejectSqmt, setRejectSqmt]       = useState('');
  const [rejectConfirmed, setRejectConfirmed] = useState(false);

  /* ── Handlers: kaveri area ─────────────────────────────── */
  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
    setChoice('');
    setRejectSqft('');
    setRejectSqmt('');
    setRejectConfirmed(false);
    if (selectedUnit === 'sqft') {
      const sqft = parseFloat(areaValue) || 0;
      setAreaSqft(String(sqft));
      setAreaSqmt((sqft * 0.0929).toFixed(2));
    } else {
      setAreaSqft('');
      setAreaSqmt('');
    }
    /* SQ.MT / GUNTA / ACRE / CENT FLOWS — to be implemented later */
  };

  const handleSqftChange = (e) => {
    const val = e.target.value;
    setAreaSqft(val);
    const sqft = parseFloat(val);
    setAreaSqmt(!isNaN(sqft) ? (sqft * 0.0929).toFixed(2) : '');
  };

  /* ── Handlers: accept / reject radio ─────────────────────── */
  const handleChoiceChange = (val) => {
    setChoice(val);
    setRejectSqft('');
    setRejectSqmt('');
    setRejectConfirmed(false);
    if (val === 'accept') {
      const sqft = parseFloat(areaSqft) || parseFloat(areaValue) || 0;
      onAccept(sqft, false); // false = was not rejected
    }
  };

  /* ── Handlers: reject flow ─────────────────────────────── */
  const handleRejectSqftChange = (e) => {
    const val = e.target.value;
    setRejectSqft(val);
    const num = parseFloat(val);
    const factor = TO_SQMT[unit] || 0.0929;
    setRejectSqmt(!isNaN(num) && num > 0 ? (num * factor).toFixed(2) : '');
  };

  const handleConfirmArea = () => {
    const sqft = parseFloat(rejectSqft) || 0;
    setRejectConfirmed(true);
    onAccept(sqft, true); // true = was rejected
  };

  /* ── Derived ───────────────────────────────────────────── */
  const unitLabel = UNIT_OPTIONS.find((u) => u.value === unit)?.label || 'Sq.Ft';

  const canConfirmReject =
    rejectSqft.trim() !== '' &&
    parseFloat(rejectSqft) > 0 &&
    !rejectConfirmed;

  return (
    <div className="pd-ad">
      <p className="pd-ad__heading">Area Details</p>

      {/* ── Unit selector row: Total Area frozen display + radios ── */}
      <div className="pd-ad__unit-section">
        <p className="pd-ad__label">
          Please choose a unit <span className="pd-ad__required">*</span>
        </p>
        <div className="pd-ad__unit-row">
          {/* Total Area from Kaveri (frozen — no edit) */}
          <div className="pd-ad__total-area-wrap">
            <Input
              label="Total Area"
              value={areaValue}
              frozen
              required
              inputType="numeric"
              className="pd-ad__area-input"
            />
          </div>

          {/* Unit radio buttons */}
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

      {/* ── Sq.Ft flow: heading + info + conversion fields ───── */}
      {unit === 'sqft' && (
        <div className="pd-ad__final-area">
          <p className="pd-ad__subheading">Your Final Property Area (in Sq.Mt)</p>
          <InfoBox variant="outline">
            The area you enter in Sq.Ft, Gunta, Acre or cent will be converted to Sq.Mt
          </InfoBox>
          <div className="pd-ad__conv-row">
            <Input
              label="Area in Sq.Ft"
              value={areaSqft}
              onChange={handleSqftChange}
              required
              inputType="numeric"
            />
            {/* Sq.Mt is auto-calculated — read-only */}
            <Input
              label="Area in Sq.Mtr"
              value={areaSqmt}
              frozenBlue
              required
            />
          </div>
        </div>
      )}

      {/* SQ.MT ONLY FLOW — to be implemented later */}
      {/* GUNTA UNIT FLOW — to be implemented later */}
      {/* ACRE UNIT FLOW  — to be implemented later */}
      {/* CENT UNIT FLOW  — to be implemented later */}

      {/* ── Accept / Reject question ─────────────────────────── */}
      {unit && (
        <div className="pd-ad__group">
          <p className="pd-ad__label">
            Do you accept the property area dimensions shown above (as per the Kaveri System)?{' '}
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

          {/* ── REJECT FLOW ──────────────────────────────────── */}
          {choice === 'reject' && (
            <div className="pd-ad__reject-section">
              {/* PDO approval warning */}
              <InfoBox variant="outline">
                If the applicant disagrees with the area shown and enters a different area, the application will be sent to the Panchayat Development Officer(PDO) for approval.
              </InfoBox>

              <div className="pd-ad__reject-body">
                <p className="pd-ad__subheading">Please enter the new area dimensions</p>

                <div className="pd-ad__conv-row">
                  <Input
                    label={`Area in ${unitLabel}`}
                    value={rejectSqft}
                    onChange={handleRejectSqftChange}
                    required
                    disabled={rejectConfirmed}
                    inputType="numeric"
                  />
                  {/* Auto-calculated read-only — hidden when unit is already Sq.Mt */}
                  {unit !== 'sqmt' && (
                    <Input
                      label="Area in Sq.Mtr"
                      value={rejectSqmt}
                      frozenBlue
                      required
                    />
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
