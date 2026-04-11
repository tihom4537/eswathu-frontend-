import { useState } from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { useTranslation } from '../../../i18n';
import './PropertyDetails_Checkbandi.css';

const PropertyDetails_Checkbandi_NoKaveri = ({ onSaveAndProceed, saved = false, onEdit }) => {
  const { t } = useTranslation('step3');
  const [values, setValues] = useState({ east: '', west: '', north: '', south: '' });

  const DIRS = [
    { key: 'east',  label: t('cb_east')  },
    { key: 'west',  label: t('cb_west')  },
    { key: 'north', label: t('cb_north') },
    { key: 'south', label: t('cb_south') },
  ];

  const allFilled = Object.values(values).every((v) => v.trim() !== '');

  const handleChange = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="pd-cb">
      <p className="pd-cb__heading">{t('cb_heading')}</p>
      <p className="pd-cb__subheading">{t('cb_sub_no_kaveri')}</p>

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

      {/* ── Save and Proceed + Edit ───────────────────────────── */}
      <div className="pd-cb__actions">
        <Button
          variant="primary"
          disabled={!allFilled || saved}
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

export default PropertyDetails_Checkbandi_NoKaveri;
