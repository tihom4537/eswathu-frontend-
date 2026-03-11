import { useState, useEffect } from 'react';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import './BuildingDetails_UndividedLand.css';

const SHARE_TYPE_OPTIONS = [
  { value: 'residential', label: 'Residential' },
  { value: 'commercial',  label: 'Commercial' },
];

const BuildingDetails_UndividedLand = ({ onChange }) => {
  const [shareType, setShareType] = useState('');
  const [undividedArea, setUndividedArea] = useState('');

  useEffect(() => {
    const filled = !!(shareType && undividedArea.trim());
    onChange?.(filled);
  }, [shareType, undividedArea]);

  return (
    <div className="bd-undivided">
      <div className="bd-undivided__row">
        <Dropdown
          label="Undivided Land Share Type"
          required
          options={SHARE_TYPE_OPTIONS}
          value={shareType}
          onChange={(e) => setShareType(e.target.value)}
          placeholder="Undivided Land Share Type"
          className="bd-undivided__dropdown"
        />
        <Input
          label="Area of Undivided Land (in sq. metres)"
          required
          value={undividedArea}
          onChange={(e) => setUndividedArea(e.target.value)}
          placeholder="e.g. 2450"
          inputType="numeric"
          className="bd-undivided__input"
        />
      </div>
    </div>
  );
};

export default BuildingDetails_UndividedLand;
