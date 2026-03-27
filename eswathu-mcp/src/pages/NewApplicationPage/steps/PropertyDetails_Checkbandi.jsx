import { useState } from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import './PropertyDetails_Checkbandi.css';

/* ── Mock Kaveri boundary data ─────────────────────────────
   Empty string = Kaveri returned no value for that direction.
   ────────────────────────────────────────────────────────── */
const MOCK_BOUNDS = {
  east:  'Survey No. 112/A',
  west:  'Kaveri Nagar Road',
  north: 'Shree Ram Nagar Layout',
  south: '',               /* example: Kaveri returned no value for this direction */
};

const DIRS = [
  { key: 'east',  label: 'Checkbandi East'  },
  { key: 'west',  label: 'Checkbandi West'  },
  { key: 'north', label: 'Checkbandi North' },
  { key: 'south', label: 'Checkbandi South' },
];

const PropertyDetails_Checkbandi = ({ onSaveAndProceed }) => {
  /* values for the editable (unfrozen) fields */
  const [values, setValues] = useState({ ...MOCK_BOUNDS });
  /* set of direction keys the user has clicked X on */
  const [unfrozen, setUnfrozen] = useState(new Set());

  const handleUnfreeze = (key) => {
    setUnfrozen((prev) => new Set([...prev, key]));
    setValues((prev) => ({ ...prev, [key]: '' }));
  };

  const canProceed = DIRS.every(({ key }) => values[key]?.trim());

  return (
    <div className="pd-cb">
      <p className="pd-cb__heading">Checkbandi Details</p>
      <p className="pd-cb__subheading">Your checkbandi details as per Sale Deed</p>

      {/* ── Four boundary fields in a single row ──────────────── */}
      <div className="pd-cb__bounds-row">
        {DIRS.map(({ key, label }) => {
          const hasKaveriValue = !!MOCK_BOUNDS[key];
          const isUnfrozen = unfrozen.has(key);

          if (hasKaveriValue) {
            /* Kaveri returned a value — permanently frozen, no edit */
            return (
              <Input
                key={key}
                label={label}
                value={values[key]}
                frozen
                required
                className="pd-cb__bound-input"
              />
            );
          }

          if (!isUnfrozen) {
            /* Kaveri returned empty — frozen appearance + red X to unlock */
            return (
              <Input
                key={key}
                label={label}
                value=""
                frozenWithEdit
                required
                onUnfreeze={() => handleUnfreeze(key)}
                className="pd-cb__bound-input"
              />
            );
          }

          /* User clicked X — now a regular editable field */
          return (
            <Input
              key={key}
              label={label}
              value={values[key]}
              onChange={(e) => setValues((prev) => ({ ...prev, [key]: e.target.value }))}
              required
              placeholder={`Enter ${label}`}
              className="pd-cb__bound-input"
            />
          );
        })}
      </div>

      {/* ── Save and Proceed ──────────────────────────────────── */}
      <div className="pd-cb__actions">
        <Button
          variant="primary"
          disabled={!canProceed}
          onClick={() => onSaveAndProceed(values)}
        >
          Save and Proceed
        </Button>
      </div>
    </div>
  );
};

export default PropertyDetails_Checkbandi;
