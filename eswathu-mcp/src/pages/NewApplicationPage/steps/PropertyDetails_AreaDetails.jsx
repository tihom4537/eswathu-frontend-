import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Button from '../../../components/Button/Button';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import './PropertyDetailsPage.css';

// Area Details Subsection for Section 3.2
// Follows Figma patterns for Kaveri workflow, unit = sq.ft

const AREA_UNITS = [
  { value: 'sqft', label: 'Sq.Ft' },
  { value: 'sqmt', label: 'Sq.Mt' },
  { value: 'gunta', label: 'Gunta' },
  { value: 'acre', label: 'Acre' },
];

const PropertyDetails_AreaDetails = ({ areaFetched, unit, setUnit, areaSqft, setAreaSqft, areaSqmt, setAreaSqmt, onAccept, onReject }) => {
  // Accept/Reject radio
  const [acceptArea, setAcceptArea] = useState('accept'); // 'accept' | 'reject'

  // Conversion logic
  const handleSqftChange = (e) => {
    const val = e.target.value;
    setAreaSqft(val);
    setAreaSqmt((val && !isNaN(val)) ? (parseFloat(val) * 0.0929).toFixed(2) : '');
  };
  const handleSqmtChange = (e) => {
    const val = e.target.value;
    setAreaSqmt(val);
    setAreaSqft((val && !isNaN(val)) ? (parseFloat(val) / 0.0929).toFixed(2) : '');
  };

  return (
    <div className="pd-s32__area-details">
      <div className="pd-s32__sub-heading">Area Details</div>
      {/* Info message from Figma */}
      <div className="pd-s32__info">
        <span className="material-icons-outlined pd-s32__info-icon">info</span>
        <span>Please keep the property sale deed ready for entering the correct property area details.</span>
      </div>
      {/* Unit selector */}
      <div className="pd-s32__unit-selector">
        <span className="pd-s32__unit-label">Please choose a unit</span>
        <div className="pd-s32__unit-radio-group">
          {AREA_UNITS.map((u) => (
            <RadioButton
              key={u.value}
              label={u.label}
              value={u.value}
              checked={unit === u.value}
              onChange={() => setUnit(u.value)}
            />
          ))}
        </div>
      </div>
      {/* Fetched area (frozen input) */}
      <Input
        label="Total Area (from Kaveri)"
        value={areaFetched}
        frozen
        trailingIcon="edit"
        trailingIconClassName="pd-s32__edit-icon"
        // ...existing code...
      />
      {/* Area fields (sq.ft and sq.mt) */}
      <div className="pd-s32__area-fields">
        <Input
          label="Area in Sq.Ft"
          value={areaSqft}
          onChange={handleSqftChange}
          required
        />
        <Input
          label="Area in Sq.Mt"
          value={areaSqmt}
          onChange={handleSqmtChange}
          required
        />
      </div>
      {/* Accept/Reject radio buttons */}
      <div className="pd-s32__accept-reject">
        <RadioButton
          label="Accept fetched area"
          value="accept"
          checked={acceptArea === 'accept'}
          onChange={() => { setAcceptArea('accept'); onAccept && onAccept(); }}
        />
        <RadioButton
          label="Reject fetched area"
          value="reject"
          checked={acceptArea === 'reject'}
          onChange={() => { setAcceptArea('reject'); onReject && onReject(); }}
        />
      </div>
      {/* Only Accept flow implemented now */}
      {/* REJECT FLOW - to be implemented later */}
    </div>
  );
};

export default PropertyDetails_AreaDetails;
