import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import './PropertyDetails_Checkbandi.css';

/* ── Mock Kaveri boundary data ───────────────────────────── */
const MOCK_BOUNDS = {
  east:  'Survey No. 112/A',
  west:  'Kaveri Nagar Road',
  north: 'Shree Ram Nagar Layout',
  south: 'BDA Main Road',
};

const DIRS = [
  { key: 'east',  label: 'Checkbandi East'  },
  { key: 'west',  label: 'Checkbandi West'  },
  { key: 'north', label: 'Checkbandi North' },
  { key: 'south', label: 'Checkbandi South' },
];

const PropertyDetails_Checkbandi = ({ onSaveAndProceed }) => {
  return (
    <div className="pd-cb">
      <p className="pd-cb__heading">Checkbandi Details</p>
      <p className="pd-cb__subheading">Your checkbandi details as per Sale Deed</p>

      {/* ── Four boundary fields in a single row ─────────────── */}
      <div className="pd-cb__bounds-row">
        {DIRS.map(({ key, label }) => (
          <Input
            key={key}
            label={label}
            value={MOCK_BOUNDS[key]}
            frozen
            required
            className="pd-cb__bound-input"
          />
        ))}
      </div>

      {/* ── Save and Proceed ─────────────────────────────────── */}
      <div className="pd-cb__actions">
        <Button
          variant="primary"
          onClick={() => onSaveAndProceed(MOCK_BOUNDS)}
        >
          Save and Proceed
        </Button>
      </div>
    </div>
  );
};

export default PropertyDetails_Checkbandi;
