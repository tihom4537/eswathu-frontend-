import { useState, useEffect } from 'react';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import RadioButton from '../../../components/RadioButton/RadioButton';
import { useTranslation } from '../../../i18n';
import './BuildingDetails_MultiStoreyUsage.css';

const YEAR_OPTIONS = Array.from({ length: 2026 - 1920 + 1 }, (_, i) => {
  const year = 2026 - i;
  return { value: String(year), label: String(year) };
});

const BuildingDetails_MultiStoreyUsage = ({ onChange }) => {
  const { t } = useTranslation('step4');

  const [superBuiltArea, setSuperBuiltArea] = useState('');
  const [carpetArea,      setCarpetArea]      = useState('');
  const [additionalArea,  setAdditionalArea]  = useState('');
  const [blockName,       setBlockName]       = useState('');
  const [flatNumber,      setFlatNumber]      = useState('');
  const [year,            setYear]            = useState('');
  const [flatType,        setFlatType]        = useState('');
  const [basement,        setBasement]        = useState('');
  const [floors,          setFloors]          = useState('');
  const [floorNo,         setFloorNo]         = useState('');


  useEffect(() => {
    const base = !!(superBuiltArea.trim() && blockName.trim() && flatNumber.trim() && year && flatType);
    const floorsDone =
      (flatType === 'single-floor' && !!floorNo.trim()) ||
      (flatType === 'multi-floor' && !!(basement.trim() && floors.trim()));
    onChange?.(base && floorsDone);
  }, [superBuiltArea, carpetArea, additionalArea, blockName, flatNumber, year, flatType, floorNo, basement, floors]); // eslint-disable-line

  return (
    <div className="bd-multi">
      {/* Row 1: Super Built Area + Carpet Area + Additional Area */}
      <div className="bd-multi__row bd-multi__row--3col">
        <Input
          label={t('bd_super_built_area')}
          value={superBuiltArea}
          onChange={(e) => setSuperBuiltArea(e.target.value)}
          placeholder="e.g. 1200"
          inputType="numeric"
        />
        <Input
          label={t('bd_carpet_area')}
          value={carpetArea}
          onChange={(e) => setCarpetArea(e.target.value)}
          placeholder="e.g. 840"
          inputType="numeric"
        />
        <Input
          label={t('bd_additional_area')}
          value={additionalArea}
          onChange={(e) => setAdditionalArea(e.target.value)}
          placeholder="e.g. 200"
          inputType="numeric"
        />
      </div>

      {/* Row 3: Block Name + Flat Number + Year of Construction */}
      <div className="bd-multi__row">
        <Input
          label={t('bd_block_name')}
          required
          value={blockName}
          onChange={(e) => setBlockName(e.target.value)}
          placeholder="e.g. A"
          className="bd-multi__input--block"
        />
        <Input
          label={t('bd_flat_number')}
          required
          value={flatNumber}
          onChange={(e) => setFlatNumber(e.target.value)}
          placeholder="e.g. 313"
          className="bd-multi__input--flat"
        />
        <Dropdown
          label={t('bd_year_construction')}
          required
          options={YEAR_OPTIONS}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Select year"
          className="bd-multi__dropdown--year"
        />
      </div>

      {/* Radio: Single floor or multi-floors */}
      <div className="bd-multi__flat-type">
        <p className="bd-multi__flat-type-label">
          {t('bd_flat_floor_q')}
          <span className="bd-multi__required"> *</span>
        </p>
        <div className="bd-multi__flat-type-options">
          <RadioButton
            name="flatType"
            label={t('bd_single_floor_flat')}
            value="single-floor"
            checked={flatType === 'single-floor'}
            onChange={() => { setFlatType('single-floor'); setBasement(''); setFloors(''); }}
          />
          <RadioButton
            name="flatType"
            label={t('bd_single_flat_multi_floors')}
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
            label={t('bd_basement')}
            required
            value={basement}
            onChange={(e) => setBasement(e.target.value)}
            placeholder="e.g. 1"
            inputType="numeric"
            className="bd-multi__floor-input"
          />
          <span className="material-icons-outlined bd-multi__floor-icon">add</span>
          <Input
            label={t('bd_ground')}
            value="0"
            frozen
            className="bd-multi__floor-input"
          />
          <span className="material-icons-outlined bd-multi__floor-icon">add</span>
          <Input
            label={t('bd_floors')}
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
