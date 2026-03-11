import { useState, useEffect } from 'react';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import RadioButton from '../../../components/RadioButton/RadioButton';
import './BuildingDetails_MultiStoreyUsage.css';

const YEAR_OPTIONS = Array.from({ length: 2026 - 1920 + 1 }, (_, i) => {
  const year = 2026 - i;
  return { value: String(year), label: String(year) };
});

const BuildingDetails_MultiStoreyUsage = ({ superBuiltArea = '', onChange }) => {
  const [additionalArea, setAdditionalArea] = useState('');
  const [blockName, setBlockName] = useState('');
  const [flatNumber, setFlatNumber] = useState('');
  const [year, setYear] = useState('');
  const [flatType, setFlatType] = useState('');
  const [basement, setBasement] = useState('');
  const [floors, setFloors] = useState('');
  const [floorNo, setFloorNo] = useState('');

  // Carpet area is auto-calculated as 70% of super built (= plinth) area
  const carpetArea = superBuiltArea && !isNaN(parseFloat(superBuiltArea))
    ? String(Math.round(parseFloat(superBuiltArea) * 0.7))
    : '';

  useEffect(() => {
    const base = !!(additionalArea.trim() && blockName.trim() && flatNumber.trim() && year && flatType);
    const floorsDone =
      (flatType === 'single-floor' && !!floorNo.trim()) ||
      (flatType === 'multi-floor' && !!(basement.trim() && floors.trim()));
    onChange?.(base && floorsDone);
  }, [additionalArea, blockName, flatNumber, year, flatType, floorNo, basement, floors]); // eslint-disable-line

  return (
    <div className="bd-multi">
      {/* Row 1: Super Built Area (frozen, pre-filled from Building Area Details) */}
      <div className="bd-multi__row">
        <Input
          label="Super Built Area (in sq. metres)"
          value={superBuiltArea}
          frozen
          className="bd-multi__input--single"
        />
      </div>

      {/* Row 2: Carpet Area (frozen, auto-calculated) + Additional Area */}
      <div className="bd-multi__row">
        <Input
          label="Carpet Area (Roughly 70 % of built-up area) (in sq. metres)"
          required
          value={carpetArea}
          frozen
          className="bd-multi__input--carpet"
        />
        <Input
          label="Additional Area (in sq. metres)"
          required
          value={additionalArea}
          onChange={(e) => setAdditionalArea(e.target.value)}
          placeholder="e.g. 2450"
          inputType="numeric"
          className="bd-multi__input--add"
        />
      </div>

      {/* Row 3: Block Name + Flat Number + Year of Construction */}
      <div className="bd-multi__row">
        <Input
          label="Block Name"
          required
          value={blockName}
          onChange={(e) => setBlockName(e.target.value)}
          placeholder="e.g. A"
          className="bd-multi__input--block"
        />
        <Input
          label="Flat Number"
          required
          value={flatNumber}
          onChange={(e) => setFlatNumber(e.target.value)}
          placeholder="e.g. 313"
          inputType="numeric"
          className="bd-multi__input--flat"
        />
        <Dropdown
          label="Year of Construction/ Usage Started"
          required
          options={YEAR_OPTIONS}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Choose Year of Construction/ Usage Started"
          className="bd-multi__dropdown--year"
        />
      </div>

      {/* Radio: Type of Flat */}
      <div className="bd-multi__flat-type">
        <p className="bd-multi__flat-type-label">Choose the Type of Flat</p>
        <div className="bd-multi__flat-type-options">
          <RadioButton
            name="flatType"
            label="Single Floor Flat"
            value="single-floor"
            checked={flatType === 'single-floor'}
            onChange={() => { setFlatType('single-floor'); setBasement(''); setFloors(''); }}
          />
          <RadioButton
            name="flatType"
            label="Single Flat on Multi-Floors"
            value="multi-floor"
            checked={flatType === 'multi-floor'}
            onChange={() => { setFlatType('multi-floor'); setFloorNo(''); }}
          />
        </div>
      </div>

      {/* Floor No. – shown only for Single Floor Flat */}
      {flatType === 'single-floor' && (
        <div className="bd-multi__floor-row">
          <Input
            label="Floor No."
            required
            value={floorNo}
            onChange={(e) => setFloorNo(e.target.value)}
            placeholder="e.g. 3"
            inputType="numeric"
            className="bd-multi__floor-input"
          />
        </div>
      )}

      {/* Basement + Ground + Floors – shown only for Single Flat on Multi-Floors */}
      {flatType === 'multi-floor' && (
        <div className="bd-multi__floor-row">
          <Input
            label="Basement"
            required
            value={basement}
            onChange={(e) => setBasement(e.target.value)}
            placeholder="e.g. 1"
            inputType="numeric"
            className="bd-multi__floor-input"
          />
          <span className="material-icons-outlined bd-multi__floor-icon">add</span>
          <Input
            label="Ground"
            value="0"
            frozen
            className="bd-multi__floor-input"
          />
          <span className="material-icons-outlined bd-multi__floor-icon">add</span>
          <Input
            label="Floors"
            required
            value={floors}
            onChange={(e) => setFloors(e.target.value)}
            placeholder="e.g. 2"
            inputType="numeric"
            className="bd-multi__floor-input"
          />
        </div>
      )}

    </div>
  );
};

export default BuildingDetails_MultiStoreyUsage;
