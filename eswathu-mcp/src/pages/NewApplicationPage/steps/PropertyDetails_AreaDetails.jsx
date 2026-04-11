import { useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import RadioButton from '../../../components/RadioButton/RadioButton';
import InfoBox from '../../../components/InfoBox/InfoBox';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import { useTranslation } from '../../../i18n';
import './PropertyDetails_AreaDetails.css';

/* ── Single value fetched from Kaveri ──────────────────────── */
const MOCK_KAVERI_VALUE = '2400';

/*
 * Toggle to false to simulate Kaveri returning no area value.
 * When false: Total Area pill is empty and accept/reject is
 * replaced by a direct entry form.
 */
const MOCK_KAVERI_AREA_FETCHED = true;

/* Conversion factors → Sq.Mt */
const TO_SQMT = { sqft: 0.0929, sqmt: 1, gunta: 101.17, acre: 4046.86, cent: 40.47 };

/*
 * IS_GUNTA_FLOW — exported so PropertyDetailsPage can determine
 * whether to skip the Site Dimensions subsection.
 */
export const IS_GUNTA_FLOW = (unit) => ['gunta', 'acre', 'cent'].includes(unit);

/* Silent Sq.Mt conversion — used for onAccept and blue pill */
const toSqmt = (val, unit) => {
  const num = parseFloat(val);
  if (isNaN(num) || num <= 0) return 0;
  return num * (TO_SQMT[unit] || 1);
};

/* ─────────────────────────────────────────────────────────────
 * Props
 *   onAccept(sqmt: number, wasRejected: boolean, unit: string)
 * ───────────────────────────────────────────────────────────── */
const PropertyDetails_AreaDetails = ({ onAccept }) => {
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
  const [areaSqmt, setAreaSqmt] = useState(''); // Sq.Mt conversion shown in blue pill

  const [choice, setChoice]             = useState(''); // '' | 'accept' | 'reject'
  const [entryVal, setEntryVal]         = useState('');
  const [entryConfirmed, setEntryConfirmed] = useState(false);

  /* ── Unit change ─────────────────────────────────────────── */
  const handleUnitChange = (sel) => {
    setUnit(sel);
    setAreaSqmt(toSqmt(MOCK_KAVERI_VALUE, sel).toFixed(2));
    setChoice('');
    setEntryVal('');
    setEntryConfirmed(false);
    /* Notify parent immediately so isGuntaFlow updates before user clicks accept */
    onAccept(0, false, sel);
  };

  /* ── Accept / Reject ────────────────────────────────────── */
  const handleChoiceChange = (val) => {
    setChoice(val);
    setEntryVal('');
    setEntryConfirmed(false);
    if (val === 'accept') {
      onAccept(toSqmt(MOCK_KAVERI_VALUE, unit), false, unit);
    }
  };

  const handleEntryValChange = (e) => setEntryVal(e.target.value);

  const handleConfirmArea = () => {
    setEntryConfirmed(true);
    onAccept(toSqmt(entryVal, unit), MOCK_KAVERI_AREA_FETCHED, unit);
  };

  /* ── Derived ─────────────────────────────────────────────── */
  const canConfirmEntry =
    entryVal.trim() !== '' && parseFloat(entryVal) > 0 && !entryConfirmed;

  /* Area-in-unit pill label — uses per-unit key for correct Kannada grammar */
  const areaInUnitLabel = unit ? (t(`ad_area_in_${unit}`) || t('ad_area_in_default')) : '';

  return (
    <div className="pd-ad">
      <p className="pd-ad__heading">{t('ad_heading')}</p>

      {/* ── Row: Total Area pill + unit radios ─────────────── */}
      <div className="pd-ad__unit-section">
        <p className="pd-ad__label">{t('ad_choose_unit')}</p>
        <div className="pd-ad__unit-row">
          {/* Total Area key-value pill */}
          <div className="pd-ad__pill pd-ad__pill--grey pd-ad__total-area-pill">
            <span>{t('ad_total_area')}</span>
            <span>{MOCK_KAVERI_AREA_FETCHED ? MOCK_KAVERI_VALUE : ''}</span>
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

      {/* ════ FETCHED FLOW ════════════════════════════════════
          Full section visible on load — pills empty until unit chosen */}
      {MOCK_KAVERI_AREA_FETCHED && (
        <>
          {/* Section heading */}
          <p className="pd-ad__final-heading">{t('ad_final_area_heading')}</p>

          {/* InfoBox — only relevant when a conversion is needed */}
          {unit !== 'sqmt' && unit !== '' && (
            <InfoBox variant="error">
              {t('ad_conversion_infobox')}
            </InfoBox>
          )}

          {/* Pills — grey+blue for conversion units; blue only for Sq.Mt (no conversion needed) */}
          <div className="pd-ad__area-pills">
            {unit !== 'sqmt' && unit !== '' && (
              <div className="pd-ad__pill pd-ad__pill--grey">
                <span>{areaInUnitLabel}</span>
                <span>{MOCK_KAVERI_VALUE}</span>
              </div>
            )}
            <div className="pd-ad__pill pd-ad__pill--blue">
              <span>{t('ad_area_in_sqmtr_pill')}</span>
              <span>{areaSqmt}</span>
            </div>
          </div>

          {/* Accept / Reject — visible on load, no asterisk */}
          <div className="pd-ad__group">
            <p className="pd-ad__label">
              {t('ad_accept_q')}
            </p>
            <div className="pd-ad__radio-row">
              <RadioButton
                name="area-choice"
                value="accept"
                label={t('ad_accept_yes')}
                checked={choice === 'accept'}
                onChange={() => handleChoiceChange('accept')}
              />
              <RadioButton
                name="area-choice"
                value="reject"
                label={t('ad_accept_no')}
                checked={choice === 'reject'}
                onChange={() => handleChoiceChange('reject')}
              />
            </div>

            {/* Reject sub-flow */}
            {choice === 'reject' && (
              <div className="pd-ad__reject-section">
                <InfoBox variant="outline">
                  {t('ad_pdo_infobox')}
                </InfoBox>

                <div className="pd-ad__reject-body">
                  <p className="pd-ad__subheading">{t('ad_enter_new_dims')}</p>

                  <div className="pd-ad__conv-row">
                    <Input
                      label={areaInUnitLabel || t('ad_area_in_default')}
                      value={entryVal}
                      onChange={handleEntryValChange}
                      required
                      disabled={entryConfirmed}
                      inputType="decimal"
                    />
                  </div>

                  {!entryConfirmed && (
                    <Button
                      variant="primary"
                      disabled={!canConfirmEntry}
                      onClick={handleConfirmArea}
                      className="pd-ad__confirm-btn"
                    >
                      {t('ad_confirm_area_btn')}
                    </Button>
                  )}

                  {entryConfirmed && (
                    <CaptionMessage variant="success">
                      {t('ad_new_area_entered')}
                    </CaptionMessage>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* ════ NOT-FETCHED FLOW: direct entry after unit chosen ═══ */}
      {!MOCK_KAVERI_AREA_FETCHED && unit && (
        <div className="pd-ad__group">
          <p className="pd-ad__subheading">{t('ad_enter_property_area')}</p>

          <div className="pd-ad__conv-row">
            <Input
              label={areaInUnitLabel || t('ad_area_in_default')}
              value={entryVal}
              onChange={handleEntryValChange}
              required
              disabled={entryConfirmed}
              inputType="decimal"
            />
          </div>

          {!entryConfirmed && (
            <Button
              variant="primary"
              disabled={!canConfirmEntry}
              onClick={handleConfirmArea}
              className="pd-ad__confirm-btn"
            >
              {t('ad_confirm_area_btn')}
            </Button>
          )}

          {entryConfirmed && (
            <CaptionMessage variant="success">
              {t('ad_area_entered_caption')}
            </CaptionMessage>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyDetails_AreaDetails;
