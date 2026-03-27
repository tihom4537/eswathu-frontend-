import { useState } from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import './PropertyDetails_Checkbandi.css';

const DIRS = [
  { key: 'east',  label: 'Checkbandi East'  },
  { key: 'west',  label: 'Checkbandi West'  },
  { key: 'north', label: 'Checkbandi North' },
  { key: 'south', label: 'Checkbandi South' },
];

const PropertyDetails_Checkbandi_NoKaveri = ({ onSaveAndProceed }) => {
  const [values, setValues] = useState({ east: '', west: '', north: '', south: '' });

  const allFilled = Object.values(values).every((v) => v.trim() !== '');

  const handleChange = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="pd-cb">
      <p className="pd-cb__heading">Checkbandi Details</p>
      <p className="pd-cb__subheading">Enter your checkbandi details as per your Sale Deed</p>

      {/* ── Four boundary fields ──────────────────────────────── */}
      <div className="pd-cb__bounds-row">
        {DIRS.map(({ key, label }) => (
          <Input
            key={key}
            label={label}
            value={values[key]}
            onChange={(e) => handleChange(key, e.target.value)}
            required
            className="pd-cb__bound-input"
          />
        ))}
      </div>

      {/* ── Save and Proceed ─────────────────────────────────── */}
      <div className="pd-cb__actions">
        <Button
          variant="primary"
          disabled={!allFilled}
          onClick={() => onSaveAndProceed(values)}
        >
          Save and Proceed
        </Button>
      </div>
    </div>
  );
};

export default PropertyDetails_Checkbandi_NoKaveri;
