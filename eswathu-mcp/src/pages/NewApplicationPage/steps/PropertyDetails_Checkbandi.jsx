import { useState } from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { useTranslation } from '../../../i18n';
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

const PropertyDetails_Checkbandi = ({ onSaveAndProceed, saved = false, onEdit }) => {
  const { t } = useTranslation('step3');
  const [values, setValues] = useState({ ...MOCK_BOUNDS });

  const DIRS = [
    { key: 'east',  label: t('cb_east')  },
    { key: 'west',  label: t('cb_west')  },
    { key: 'north', label: t('cb_north') },
    { key: 'south', label: t('cb_south') },
  ];

  const canProceed = DIRS.every(({ key }) => values[key]?.trim());

  return (
    <div className="pd-cb">
      <p className="pd-cb__heading">{t('cb_heading')}</p>
      <p className="pd-cb__subheading">{t('cb_sub_kaveri')}</p>

      {/* ── Four boundary fields in a single row ──────────────── */}
      <div className="pd-cb__bounds-row">
        {DIRS.map(({ key, label }) => {
          const hasKaveriValue = !!MOCK_BOUNDS[key];

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

          /* Kaveri returned empty — plain editable field */
          return (
            <Input
              key={key}
              label={label}
              value={values[key]}
              onChange={(e) => setValues((prev) => ({ ...prev, [key]: e.target.value }))}
              required
              className="pd-cb__bound-input"
            />
          );
        })}
      </div>

      {/* ── Save and Proceed + Edit ───────────────────────────── */}
      <div className="pd-cb__actions">
        <Button
          variant="primary"
          disabled={!canProceed || saved}
          onClick={() => onSaveAndProceed(values)}
        >
          {t('cb_save_btn')}
        </Button>
        <Button
          variant="error"
          disabled={!saved}
          onClick={onEdit}
        >
          {t('cb_edit_btn')}
        </Button>
      </div>
    </div>
  );
};

export default PropertyDetails_Checkbandi;
