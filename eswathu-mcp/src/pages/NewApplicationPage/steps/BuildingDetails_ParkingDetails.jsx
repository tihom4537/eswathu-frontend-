import { useState, useEffect } from 'react';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { useTranslation } from '../../../i18n';
import './BuildingDetails_ParkingDetails.css';

const PARKING_OPTIONS = [
  { value: '0',  label: '0' },
  { value: '1',  label: '1' },
  { value: '2',  label: '2' },
  { value: '3',  label: '3' },
  { value: '4',  label: '4' },
  { value: '5',  label: '5' },
  { value: '6+', label: '6 or more' },
];

const BuildingDetails_ParkingDetails = ({ onChange }) => {
  const { t } = useTranslation('step4');

  const [numParking,   setNumParking]  = useState('');
  const [parkingArea,  setParkingArea] = useState('');

  useEffect(() => {
    onChange?.(!!(numParking && parkingArea.trim()));
  }, [numParking, parkingArea]); // eslint-disable-line

  return (
    <div className="bd-parking">
      <div className="bd-parking__row">
        <Dropdown
          label={t('bd_num_parking')}
          required
          options={PARKING_OPTIONS}
          value={numParking}
          onChange={(e) => setNumParking(e.target.value)}
          placeholder="Select number"
          className="bd-parking__dropdown"
        />
        <Input
          label={t('bd_parking_area')}
          required
          value={parkingArea}
          onChange={(e) => setParkingArea(e.target.value)}
          placeholder="e.g. 2450"
          inputType="numeric"
          className="bd-parking__input"
        />
      </div>
    </div>
  );
};

export default BuildingDetails_ParkingDetails;
