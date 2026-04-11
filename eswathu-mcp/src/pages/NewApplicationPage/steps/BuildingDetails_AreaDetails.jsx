import { useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { useTranslation } from '../../../i18n';
import './BuildingDetails_AreaDetails.css';

const BuildingDetails_AreaDetails = ({ onSave, onEdit }) => {
  const { t } = useTranslation('step4');

  const [plinthArea,           setPlinthArea]           = useState('');
  const [undividedPlotSize,    setUndividedPlotSize]    = useState('');
  const [totalUndividedPlotSize, setTotalUndividedPlotSize] = useState('');
  const [saved, setSaved] = useState(false);

  const canSave =
    !saved &&
    plinthArea.trim() &&
    undividedPlotSize.trim() &&
    totalUndividedPlotSize.trim();

  const handleSave = () => {
    setSaved(true);
    onSave?.({ plinthArea, undividedPlotSize, totalUndividedPlotSize });
  };

  const handleEdit = () => {
    setSaved(false);
    onEdit?.();
  };

  return (
    <div className="bd-area">
      <div className="bd-area__row">
        <Input
          label={t('bd_plinth_area')}
          required
          value={plinthArea}
          onChange={(e) => setPlinthArea(e.target.value)}
          placeholder="e.g. 2450"
          frozen={saved}
          inputType="numeric"
          className="bd-area__input"
        />
        <Input
          label={t('bd_undivided_plot_size')}
          required
          value={undividedPlotSize}
          onChange={(e) => setUndividedPlotSize(e.target.value)}
          placeholder="e.g. 2450"
          frozen={saved}
          inputType="numeric"
          className="bd-area__input"
        />
        <Input
          label={t('bd_total_undivided_plot_size')}
          required
          value={totalUndividedPlotSize}
          onChange={(e) => setTotalUndividedPlotSize(e.target.value)}
          placeholder="e.g. 2450"
          frozen={saved}
          inputType="numeric"
          className="bd-area__input"
        />
      </div>
      <div className="bd-area__actions">
        <Button variant="primary" disabled={!canSave} onClick={handleSave}>
          {t('bd_save_area_details')}
        </Button>
        <Button variant="error" disabled={!saved} onClick={handleEdit}>
          Edit
        </Button>
      </div>
      {saved && (
        <div className="bd-area__success">
          <span className="material-icons-outlined bd-area__success-icon">check_circle_outline</span>
          <span className="bd-area__success-text">
            {t('bd_area_saved_msg')}
          </span>
        </div>
      )}
    </div>
  );
};

export default BuildingDetails_AreaDetails;
