import { useState, useEffect } from 'react';
import Input from '../../../components/Input/Input';
import RadioButton from '../../../components/RadioButton/RadioButton';
import InfoBox from '../../../components/InfoBox/InfoBox';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import { useTranslation } from '../../../i18n';
import './PropertyDetails_AreaDetails.css';

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
  const { t } = useTranslation('step3');

  /* Unit options built from translations */
  const UNIT_OPTIONS = [
    { value: 'sqft',  label: t('unit_sqft')  },
    { value: 'sqmt',  label: t('unit_sqmt')  },
    { value: 'gunta', label: t('unit_gunta') },
    { value: 'acre',  label: t('unit_acre')  },
    { value: 'cent',  label: t('unit_cent')  },
  ];

  const [unit, setUnit]         = useState('');
  const [areaVal, setAreaVal]   = useState('');
  const [areaSqmt, setAreaSqmt] = useState('');

  /* Preserve area value when unit changes — just recalculate Sq.Mt */
  const handleUnitChange = (sel) => {
    setUnit(sel);
    if (areaVal) {
      setAreaSqmt(needsConversion(sel) ? toSqmt(areaVal, sel) : areaVal);
    }
  };

  const handleAreaChange = (e) => {
    const val = e.target.value;
    setAreaVal(val);
    setAreaSqmt(needsConversion(unit) ? toSqmt(val, unit) : val);
  };

  /* ── Notify parent reactively ─────────────────────────── */
  useEffect(() => {
    if (parseFloat(areaVal) > 0 && unit !== '') {
      const sqmt = parseFloat(needsConversion(unit) ? areaSqmt : areaVal) || 0;
      onAccept(sqmt, false, unit);
    } else {
      onAccept(0, false, unit);
    }
  }, [areaVal, areaSqmt, unit]); // eslint-disable-line react-hooks/exhaustive-deps

  const areaEntered = parseFloat(areaVal) > 0 && unit !== '';

  /* Area-in-unit pill label — uses per-unit key for correct Kannada grammar */
  const areaInUnitLabel = unit ? (t(`ad_area_in_${unit}`) || t('ad_area_in_default')) : '';

  return (
    <div className="pd-ad">
      <p className="pd-ad__heading">{t('ad_heading')}</p>

      {/* ── Area input + Unit radios (with tight success caption) ── */}
      <div className="pd-ad__input-section">
        <div className="pd-ad__unit-row">
          <div className="pd-ad__total-area-wrap">
            <Input
              label={t('ad_nk_enter_area_label')}
              value={areaVal}
              onChange={handleAreaChange}
              required
              inputType="decimal"
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

        {/* Success caption sits tight below the input row */}
        {areaEntered && (
          <CaptionMessage variant="success">{t('ad_nk_area_added')}</CaptionMessage>
        )}
      </div>

      {/* ── Sub-heading (shows once unit is selected) ─────── */}
      {unit && (
        <p className="pd-ad__subheading">{t('ad_nk_area_of_property')}</p>
      )}

      {/* ── InfoBox (non-sqmt units only) ─────────────────── */}
      {unit && needsConversion(unit) && (
        <InfoBox variant="outline">
          {t('ad_nk_conversion_infobox')}
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
              <span>{areaInUnitLabel}</span>
              <span>{areaVal}</span>
            </div>
          )}
          <div className="pd-ad__pill pd-ad__pill--blue">
            <span>{t('ad_area_in_sqmtr_pill')}</span>
            <span>{unit === 'sqmt' ? areaVal : areaSqmt}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails_AreaDetails_NoKaveri;
