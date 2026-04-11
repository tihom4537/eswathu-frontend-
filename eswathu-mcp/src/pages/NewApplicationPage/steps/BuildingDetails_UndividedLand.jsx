import { useState, useEffect } from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { useTranslation } from '../../../i18n';
import './BuildingDetails_UndividedLand.css';

const SHARE_TYPE_OPTIONS = [
  { value: 'residential', label: 'Residential' },
  { value: 'commercial',  label: 'Commercial' },
  { value: 'industrial',  label: 'Industrial' },
  { value: 'mixed',       label: 'Mixed' },
];

const BuildingDetails_UndividedLand = ({ onChange }) => {
  const { t } = useTranslation('step4');
  const [shareType, setShareType] = useState('');

  useEffect(() => {
    onChange?.(!!shareType);
  }, [shareType]); // eslint-disable-line

  return (
    <div className="bd-undivided">
      <div className="bd-undivided__row">
        <Dropdown
          label={t('bd_undivided_land_share_type')}
          required
          options={SHARE_TYPE_OPTIONS}
          value={shareType}
          onChange={(e) => setShareType(e.target.value)}
          placeholder="Select type"
          className="bd-undivided__dropdown"
        />
      </div>
    </div>
  );
};

export default BuildingDetails_UndividedLand;
