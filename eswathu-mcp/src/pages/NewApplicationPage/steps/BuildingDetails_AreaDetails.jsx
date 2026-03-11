import { useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import './BuildingDetails_AreaDetails.css';

const BuildingDetails_AreaDetails = ({ onSave, onEdit }) => {
  const [plinthArea, setPlinthArea] = useState('');
  const [undividedPlotSize, setUndividedPlotSize] = useState('');
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
          label="Plinth Area of the Building (in sq. metres)"
          required
          value={plinthArea}
          onChange={(e) => setPlinthArea(e.target.value)}
          placeholder="e.g. 2450"
          frozen={saved}
          inputType="numeric"
          className="bd-area__input"
        />
        <Input
          label="Undivided Plot Size. (in sq. metres)"
          required
          value={undividedPlotSize}
          onChange={(e) => setUndividedPlotSize(e.target.value)}
          placeholder="e.g. 2450"
          frozen={saved}
          inputType="numeric"
          className="bd-area__input"
        />
        <Input
          label="Total Undivided Plot Size. (in sq. metres)"
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
          Save Building Area Details
        </Button>
        <Button variant="error" disabled={!saved} onClick={handleEdit}>
          Edit
        </Button>
      </div>
      {saved && (
        <div className="bd-area__success">
          <span className="material-icons-outlined bd-area__success-icon">check_circle_outline</span>
          <span className="bd-area__success-text">
            Building Area Details have been saved. Please proceed to next step.
          </span>
        </div>
      )}
    </div>
  );
};

export default BuildingDetails_AreaDetails;
