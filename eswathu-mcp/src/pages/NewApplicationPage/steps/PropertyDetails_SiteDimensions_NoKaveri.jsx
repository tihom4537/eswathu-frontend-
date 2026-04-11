import { useState, useEffect } from 'react';
import Input from '../../../components/Input/Input';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Dropdown from '../../../components/Dropdown/Dropdown';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import Tooltip from '../../../components/Tooltip/Tooltip';
import { useTranslation } from '../../../i18n';
import './PropertyDetails_SiteDimensions.css';
import './PropertyDetails_SiteDimensions_NoKaveri.css';

/* ── Number of sides options (3 – 8) ─────────────────────── */
const SIDES_OPTIONS = [
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
];

/* ─────────────────────────────────────────────────────────────
 * Props
 *   acceptedAreaSqmt  – user-entered area converted to Sq.Mt
 *   acceptedUnit      – original unit chosen ('sqft' | 'sqmt')
 *   onAreaMatch(dimensions) – fires when dimensions are complete
 * ───────────────────────────────────────────────────────────── */
const PropertyDetails_SiteDimensions_NoKaveri = ({ acceptedAreaSqmt, acceptedUnit, onAreaMatch }) => {
  const { t } = useTranslation('step3');

  /* ── Odd / Even question ────────────────────────────────── */
  const [oddChoice, setOddChoice] = useState(''); // '' | 'yes' | 'no'

  /* ── Even flow state ─────────────────────────────────────── */
  const [nsVal, setNsVal] = useState('');
  const [ewVal, setEwVal] = useState('');

  /* ── Odd flow state ──────────────────────────────────────── */
  const [sidesCount, setSidesCount] = useState('');
  const [sideValues, setSideValues] = useState({});

  /* ── Reference area (already in Sq.Mt) ───────────────────── */
  const existingSqmt = parseFloat(acceptedAreaSqmt) || 0;
  const existingSqft = existingSqmt > 0 ? (existingSqmt / 0.0929) : 0;

  /* ── Even flow: derived ──────────────────────────────────── */
  const ns       = parseFloat(nsVal) || 0;
  const ew       = parseFloat(ewVal) || 0;
  const calcSqft = ns * ew;
  const calcSqmt = calcSqft > 0 ? (calcSqft * 0.0929) : 0;

  const bothEntered = ns > 0 && ew > 0;
  const isMatch     = bothEntered && Math.abs(calcSqmt - existingSqmt) < 0.5;
  const isMismatch  = bothEntered && !isMatch;

  /* ── Odd flow: derived ───────────────────────────────────── */
  const allSidesFilled =
    sidesCount !== '' &&
    Object.keys(sideValues).length === parseInt(sidesCount) &&
    Object.values(sideValues).every((v) => v.trim() !== '' && parseFloat(v) > 0);

  /* ── Even flow: reveal Checkbandi when areas match ───────── */
  useEffect(() => {
    if (isMatch) onAreaMatch({ ns: nsVal, ew: ewVal });
  }, [isMatch]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Odd flow: reveal Checkbandi as soon as all sides filled ─ */
  useEffect(() => {
    if (oddChoice === 'yes' && allSidesFilled) {
      onAreaMatch({ type: 'odd', sides: sidesCount });
    }
  }, [oddChoice, allSidesFilled]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Handlers ────────────────────────────────────────────── */
  const handleOddChoiceChange = (val) => {
    setOddChoice(val);
    setNsVal('');
    setEwVal('');
    setSidesCount('');
    setSideValues({});
  };

  const handleSidesCountChange = (e) => {
    const n = e.target.value;
    setSidesCount(n);
    const newSides = {};
    for (let i = 1; i <= parseInt(n); i++) {
      newSides[`side${i}`] = '';
    }
    setSideValues(newSides);
  };

  const handleSideChange = (key, val) => {
    setSideValues((prev) => ({ ...prev, [key]: val }));
  };

  /* Odd side input label: first is "Road Facing Side Length", rest are "Side N" */
  const getSideLabel = (i) => {
    if (i === 0) return t('sd_nk_road_facing');
    return t('sd_side_tpl').replace('{n}', i + 1);
  };

  return (
    <div className="pd-sd">
      <p className="pd-sd__heading">{t('sd_heading')}</p>

      {/* ── Odd / Even question ──────────────────────────────── */}
      <div className="pd-sd__group">
        <p className="pd-sd__label">
          {t('sd_odd_q')}{' '}
          <span className="pd-sd__required">*</span>
        </p>
        <div className="pd-sd__radio-row">
          <RadioButton
            name="site-odd-nk"
            value="yes"
            label={t('sd_yes')}
            checked={oddChoice === 'yes'}
            onChange={() => handleOddChoiceChange('yes')}
          />
          <RadioButton
            name="site-odd-nk"
            value="no"
            label={t('sd_no')}
            checked={oddChoice === 'no'}
            onChange={() => handleOddChoiceChange('no')}
          />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          ODD DIMENSIONS = YES FLOW
          ════════════════════════════════════════════════════════ */}
      {oddChoice === 'yes' && (
        <div className="pd-sd__odd-section">

          <p className="pd-sd__subheading">{t('sd_enter_all_sides')}</p>

          <Tooltip
            label={t('sd_nk_where_dims')}
            caption={t('sd_click_sample')}
            className="pd-sd__odd-tooltip"
          />

          <div className="pd-sd__sides-selector">
            <Dropdown
              label={t('sd_nk_choose_sides')}
              placeholder={t('sd_choose_num_sides')}
              options={SIDES_OPTIONS}
              value={sidesCount}
              onChange={handleSidesCountChange}
              required
            />
          </div>

          {sidesCount !== '' && (
            <div className="pd-sd__sides-grid">
              {Array.from({ length: parseInt(sidesCount) }, (_, i) => (
                <Input
                  key={`side${i + 1}`}
                  label={getSideLabel(i)}
                  value={sideValues[`side${i + 1}`] || ''}
                  onChange={(e) => handleSideChange(`side${i + 1}`, e.target.value)}
                  required
                  inputType="decimal"
                />
              ))}
            </div>
          )}

          {allSidesFilled && (
            <CaptionMessage variant="success">
              {t('sd_match_success')}
            </CaptionMessage>
          )}

        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          EVEN DIMENSIONS (ODD = NO) FLOW
          ════════════════════════════════════════════════════════ */}
      {oddChoice === 'no' && (
        <>
          {/* ── N-S / E-W inputs + Tooltip ───────────────────── */}
          <div className="pd-sd__dims-section">
            <div className="pd-sd__dims-left">
              <p className="pd-sd__subheading">{t('sd_ns_ew_sub')}</p>
              <div className="pd-sd__dims-row">
                <Input
                  label={t('sd_nk_ns_short')}
                  value={nsVal}
                  onChange={(e) => setNsVal(e.target.value)}
                  required
                  inputType="decimal"
                />
                <Input
                  label={t('sd_nk_ew_short')}
                  value={ewVal}
                  onChange={(e) => setEwVal(e.target.value)}
                  required
                  inputType="decimal"
                />
              </div>
            </div>
            <Tooltip
              label={t('sd_where_dims')}
              caption={t('sd_click_sample')}
              className="pd-sd__dims-tooltip"
            />
          </div>

          {/* ── Match: single calculated card ────────────────────── */}
          {isMatch && (
            <div className="pd-sd__area-card pd-sd__area-card--blue pd-sd__nk-single-card">
              <p className="pd-sd__area-card-title">{t('sd_nk_calc_plot')}</p>
              <div className="pd-sd__data-row">
                {acceptedUnit !== 'sqmt' && (
                  <Input
                    label={t('sd_calc_sqft')}
                    value={calcSqft > 0 ? calcSqft.toFixed(2) : ''}
                    frozenBlue
                    required
                  />
                )}
                <Input
                  label={t('sd_calc_sqmt')}
                  value={calcSqmt > 0 ? calcSqmt.toFixed(2) : ''}
                  frozenBlue
                  required
                />
              </div>
            </div>
          )}

          {/* ── Mismatch: two-card comparison ────────────────────── */}
          {isMismatch && (
            <div className="pd-sd__comparison-grid">
              <div className="pd-sd__area-card pd-sd__area-card--grey">
                <p className="pd-sd__area-card-title">{t('sd_property_area')}</p>
                <div className="pd-sd__data-row">
                  {acceptedUnit !== 'sqmt' && (
                    <Input
                      label={t('sd_current_sqft')}
                      value={existingSqft > 0 ? existingSqft.toFixed(2) : ''}
                      frozen
                      required
                    />
                  )}
                  <Input
                    label={t('sd_current_sqmt')}
                    value={existingSqmt > 0 ? existingSqmt.toFixed(2) : ''}
                    frozenBlue
                    required
                  />
                </div>
              </div>
              <div className="pd-sd__area-card pd-sd__area-card--blue">
                <p className="pd-sd__area-card-title">{t('sd_calc_ns_ew')}</p>
                <div className="pd-sd__data-row">
                  {acceptedUnit !== 'sqmt' && (
                    <Input
                      label={t('sd_calc_sqft')}
                      value={calcSqft > 0 ? calcSqft.toFixed(2) : ''}
                      frozenBlue
                      required
                    />
                  )}
                  <Input
                    label={t('sd_calc_sqmt')}
                    value={calcSqmt > 0 ? calcSqmt.toFixed(2) : ''}
                    frozenBlue
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── Captions ─────────────────────────────────────────── */}
          <div className="pd-sd__result">
            {isMatch && (
              <CaptionMessage variant="success">
                {t('sd_match_success')}
              </CaptionMessage>
            )}
            {isMismatch && (
              <CaptionMessage variant="error">
                {t('sd_mismatch_rejected')}
              </CaptionMessage>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyDetails_SiteDimensions_NoKaveri;
