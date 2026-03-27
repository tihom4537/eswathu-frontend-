import { useState, useEffect } from 'react';
import Input from '../../../components/Input/Input';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Dropdown from '../../../components/Dropdown/Dropdown';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import Tooltip from '../../../components/Tooltip/Tooltip';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
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

/* ── Area calculation for odd (irregular) polygon ─────────── */
const computeOddArea = (sideValues, sidesCount) => {
  const n = parseInt(sidesCount);
  if (n === 3) {
    const a = parseFloat(sideValues.side1) || 0;
    const b = parseFloat(sideValues.side2) || 0;
    const c = parseFloat(sideValues.side3) || 0;
    if (a <= 0 || b <= 0 || c <= 0) return 0;
    if (a + b <= c || a + c <= b || b + c <= a) return 0;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return isNaN(area) ? 0 : area;
  }
  return 0;
};

/* ─────────────────────────────────────────────────────────────
 * Props
 *   acceptedAreaSqmt  – user-entered area converted to Sq.Mt
 *   acceptedUnit      – original unit chosen ('sqft' | 'sqmt')
 *   onAreaMatch(dimensions) – fires when calculation is done/matched
 * ───────────────────────────────────────────────────────────── */
const PropertyDetails_SiteDimensions_NoKaveri = ({ acceptedAreaSqmt, acceptedUnit, onAreaMatch }) => {

  /* ── Odd / Even question ────────────────────────────────── */
  const [oddChoice, setOddChoice] = useState(''); // '' | 'yes' | 'no'

  /* ── Even flow state ─────────────────────────────────────── */
  const [nsVal, setNsVal] = useState('');
  const [ewVal, setEwVal] = useState('');

  /* ── Odd flow state ──────────────────────────────────────── */
  const [sidesCount, setSidesCount]   = useState('');
  const [sideValues, setSideValues]   = useState({});
  const [calculating, setCalculating] = useState(false);
  const [calcOddSqft, setCalcOddSqft] = useState(0);

  /* ── Reference area (already in Sq.Mt) ───────────────────── */
  const existingSqmt = parseFloat(acceptedAreaSqmt) || 0;

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

  /* ── Odd flow: reveal Checkbandi when calc complete ─────── */
  useEffect(() => {
    if (oddChoice === 'yes' && !calculating && allSidesFilled && calcOddSqft > 0) {
      onAreaMatch({ type: 'odd', sides: sidesCount, calcSqft: calcOddSqft });
    }
  }, [oddChoice, calculating, allSidesFilled, calcOddSqft]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Odd flow: async area calculation ────────────────────── */
  useEffect(() => {
    if (!allSidesFilled) {
      setCalcOddSqft(0);
      setCalculating(false);
      return;
    }
    setCalculating(true);
    const timer = setTimeout(() => {
      const area = computeOddArea(sideValues, sidesCount);
      setCalcOddSqft(area);
      setCalculating(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [JSON.stringify(sideValues), allSidesFilled]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Handlers ────────────────────────────────────────────── */
  const handleOddChoiceChange = (val) => {
    setOddChoice(val);
    setNsVal('');
    setEwVal('');
    setSidesCount('');
    setSideValues({});
    setCalcOddSqft(0);
    setCalculating(false);
  };

  const handleSidesCountChange = (e) => {
    const n = e.target.value;
    setSidesCount(n);
    const newSides = {};
    for (let i = 1; i <= parseInt(n); i++) {
      newSides[`side${i}`] = '';
    }
    setSideValues(newSides);
    setCalcOddSqft(0);
  };

  const handleSideChange = (key, val) => {
    setSideValues((prev) => ({ ...prev, [key]: val }));
  };

  /* Odd side input label: first is "Road Facing Side Length", rest are "Side N" */
  const getSideLabel = (i) => {
    if (i === 0) return 'Road Facing Side Length (ft)';
    return `Side ${i + 1} (ft)`;
  };

  return (
    <div className="pd-sd">
      <p className="pd-sd__heading">Site Dimension Details</p>

      {/* ── Odd / Even question ──────────────────────────────── */}
      <div className="pd-sd__group">
        <p className="pd-sd__label">
          Does your property have Odd dimensions?{' '}
          <span className="pd-sd__required">*</span>
        </p>
        <div className="pd-sd__radio-row">
          <RadioButton
            name="site-odd-nk"
            value="yes"
            label="Yes"
            checked={oddChoice === 'yes'}
            onChange={() => handleOddChoiceChange('yes')}
          />
          <RadioButton
            name="site-odd-nk"
            value="no"
            label="No"
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

          <p className="pd-sd__subheading">Enter all sides dimensions</p>

          {/* Tooltip */}
          <Tooltip
            label="Where to find your property dimensions and check Bandi Details"
            caption="Click to view sample"
            className="pd-sd__odd-tooltip"
          />

          {/* Number of sides dropdown */}
          <div className="pd-sd__sides-selector">
            <Dropdown
              label="Choose the number of sides"
              placeholder="Choose number of sides"
              options={SIDES_OPTIONS}
              value={sidesCount}
              onChange={handleSidesCountChange}
              required
            />
          </div>

          {/* Dynamic side inputs */}
          {sidesCount !== '' && (
            <div className="pd-sd__sides-grid">
              {Array.from({ length: parseInt(sidesCount) }, (_, i) => (
                <Input
                  key={`side${i + 1}`}
                  label={getSideLabel(i)}
                  value={sideValues[`side${i + 1}`] || ''}
                  onChange={(e) => handleSideChange(`side${i + 1}`, e.target.value)}
                  required
                  inputType="numeric"
                />
              ))}
            </div>
          )}

          {/* Spinner while calculating */}
          {calculating && (
            <div className="pd-sd__calc-spinner">
              <ProgressCircle size={40} percentage={60} />
            </div>
          )}

          {/* Calculated Site Area card */}
          {!calculating && allSidesFilled && calcOddSqft > 0 && (
            <div className="pd-sd__area-card pd-sd__area-card--blue pd-sd__nk-single-card">
              <p className="pd-sd__area-card-title">Calculated Site Area</p>
              <div className="pd-sd__data-row">
                {acceptedUnit !== 'sqmt' && (
                  <Input
                    label="Calculated Site Area(Square Feet)"
                    value={calcOddSqft.toFixed(2)}
                    frozenBlue
                    required
                  />
                )}
                <Input
                  label="Calculated Site Area(Square Meter)"
                  value={(calcOddSqft * 0.0929).toFixed(2)}
                  frozenBlue
                  required
                />
              </div>
            </div>
          )}

          {/* Success caption */}
          {!calculating && allSidesFilled && calcOddSqft > 0 && (
            <CaptionMessage variant="success">
              Dimensions and property area details completed. Proceed to next step
            </CaptionMessage>
          )}

          {/* Placeholder for N > 3 until formula is confirmed */}
          {!calculating && sidesCount !== '' && parseInt(sidesCount) > 3 && calcOddSqft === 0 && allSidesFilled && (
            <CaptionMessage variant="info">
              Area calculation for {sidesCount}-sided properties is coming soon. Please contact support.
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
              <p className="pd-sd__subheading">Property N-S and E-W dimensions</p>
              <div className="pd-sd__dims-row">
                <Input
                  label="N-S (ft)"
                  value={nsVal}
                  onChange={(e) => setNsVal(e.target.value)}
                  required
                  inputType="numeric"
                />
                <Input
                  label="E-W (ft)"
                  value={ewVal}
                  onChange={(e) => setEwVal(e.target.value)}
                  required
                  inputType="numeric"
                />
              </div>
            </div>
            <Tooltip
              label="Where to find your property dimensions"
              caption="Click to view sample"
              className="pd-sd__dims-tooltip"
            />
          </div>

          {/* ── Calculated Plot Area card (shown once both dims entered) ── */}
          {bothEntered && (
            <div className="pd-sd__area-card pd-sd__area-card--blue pd-sd__nk-single-card">
              <p className="pd-sd__area-card-title">Calculated Plot Area (N-S*E-W)</p>
              <div className="pd-sd__data-row">
                {acceptedUnit !== 'sqmt' && (
                  <Input
                    label="Calculated Property Area (Square Feet)"
                    value={calcSqft > 0 ? calcSqft.toFixed(2) : ''}
                    frozenBlue
                    required
                  />
                )}
                <Input
                  label="Calculated Property Area (Square Meter)"
                  value={calcSqmt > 0 ? calcSqmt.toFixed(2) : ''}
                  frozenBlue
                  required
                />
              </div>
            </div>
          )}

          {/* ── Match / mismatch result ───────────────────────── */}
          <div className="pd-sd__result">
            {isMatch && (
              <CaptionMessage variant="success">
                Dimensions and property area details completed. Proceed to next step
              </CaptionMessage>
            )}
            {isMismatch && (
              <CaptionMessage variant="error">
                The calculated area does not match the entered area. Please re-check your
                dimensions or update the area in the Area Details section above.
              </CaptionMessage>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyDetails_SiteDimensions_NoKaveri;
