import { useState, useEffect } from 'react';
import Input from '../../../components/Input/Input';
import RadioButton from '../../../components/RadioButton/RadioButton';
import InfoBox from '../../../components/InfoBox/InfoBox';
import './PropertyDetails_AreaDetails.css';

const UNIT_OPTIONS = [
  { value: 'sqft',  label: 'Sq.Ft'  },
  { value: 'sqmt',  label: 'Sq.Mt'  },
  { value: 'gunta', label: 'Gunta'  },
  { value: 'acre',  label: 'Acre'   },
  { value: 'cent',  label: 'Cent'   },
];

const TO_SQMT = { sqft: 0.0929, sqmt: 1, gunta: 101.17, acre: 4046.86, cent: 40.47 };

const needsConversion = (unit) => unit && unit !== 'sqmt';

export const IS_GUNTA_FLOW_NK = (unit) => ['gunta', 'acre', 'cent'].includes(unit);

const toSqmt = (val, unit) => {
  const num = parseFloat(val);
  if (isNaN(num) || num <= 0) return '';
  return (num * (TO_SQMT[unit] || 1)).toFixed(2);
};

/* ─────────────────────────────────────────────────────────────
 * Props
 *   onAccept(sqmt: number, wasRejected: boolean, unit: string)
 *   — fired reactively whenever area + unit change
 * ───────────────────────────────────────────────────────────── */
const PropertyDetails_AreaDetails_NoKaveri = ({ onAccept }) => {
  const [unit, setUnit]         = useState('');
  const [areaVal, setAreaVal]   = useState('');
  const [areaSqmt, setAreaSqmt] = useState('');

  const handleUnitChange = (sel) => {
    setUnit(sel);
    setAreaVal('');
    setAreaSqmt('');
  };

  const handleAreaChange = (e) => {
    const val = e.target.value;
    setAreaVal(val);
    setAreaSqmt(needsConversion(unit) ? toSqmt(val, unit) : val);
  };

  /* ── Notify parent reactively ─────────────────────────────── */
  useEffect(() => {
    if (parseFloat(areaVal) > 0 && unit !== '') {
      const sqmt = parseFloat(needsConversion(unit) ? areaSqmt : areaVal) || 0;
      onAccept(sqmt, false, unit);
    } else {
      onAccept(0, false, unit);
    }
  }, [areaVal, areaSqmt, unit]); // eslint-disable-line react-hooks/exhaustive-deps

  const unitLabel = UNIT_OPTIONS.find((u) => u.value === unit)?.label || '';

  return (
    <div className="pd-ad">
      <p className="pd-ad__heading">Area Details</p>

      {/* ── Area input + Unit radios ────────────────────────── */}
      <div className="pd-ad__unit-section">
        <p className="pd-ad__label">
          Please enter your property area and choose a unit{' '}
          <span className="pd-ad__required">*</span>
        </p>
        <div className="pd-ad__unit-row">
          <div className="pd-ad__total-area-wrap">
            <Input
              label="Area"
              value={areaVal}
              onChange={handleAreaChange}
              required
              inputType="numeric"
              className="pd-ad__area-input"
            />
          </div>
          <div className="pd-ad__radio-row">
            {UNIT_OPTIONS.map((opt) => (
              <RadioButton
                key={opt.value}
                name="area-unit-nk"
                value={opt.value}
                label={opt.label}
                checked={unit === opt.value}
                onChange={() => handleUnitChange(opt.value)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── InfoBox (non-sqmt units only) ─────────────────── */}
      {unit && needsConversion(unit) && (
        <InfoBox variant="outline">
          The area you enter in Sq.Ft, Gunta, Acre or cent will be converted to Sq.Mt
          for displaying in E-Khata
        </InfoBox>
      )}

      {/* ── Compact area pills ─────────────────────────────
           Sq.Mt → blue pill only (value IS already in Sq.Mt)
           All other units → grey (entered unit) + blue (Sq.Mt)
          ─────────────────────────────────────────────────── */}
      {unit && (
        <div className="pd-ad__area-pills">
          {unit !== 'sqmt' && (
            <div className="pd-ad__pill pd-ad__pill--grey">
              <span>Area in {unitLabel}</span>
              <span>{areaVal}</span>
            </div>
          )}
          <div className="pd-ad__pill pd-ad__pill--blue">
            <span>Area in Sq.Mtr</span>
            <span>{unit === 'sqmt' ? areaVal : areaSqmt}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails_AreaDetails_NoKaveri;
