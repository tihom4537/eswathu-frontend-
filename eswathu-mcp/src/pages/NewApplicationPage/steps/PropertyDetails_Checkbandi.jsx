import React from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import './PropertyDetailsPage.css';

// Checkbandi Details Subsection for Section 3.2
// Follows Figma patterns for Kaveri workflow

const PropertyDetails_Checkbandi = ({ checkbandiFetched, onSave }) => {
  return (
    <div className="pd-s32__checkbandi-details">
      <div className="pd-s32__sub-heading">Checkbandi Details</div>
      <div className="pd-s32__checkbandi-fields">
        {/* Pre-fetched fields (frozen input with edit button) */}
        {checkbandiFetched.map((field, idx) => (
          <Input
            key={idx}
            label={field.label}
            value={field.value}
            frozen
            trailingIcon="edit"
            trailingIconClassName="pd-s32__edit-icon"
            // ...existing code...
          />
        ))}
      </div>
      <Button
        variant="primary"
        onClick={onSave}
        className="pd-s32__save-btn"
      >
        Save and Proceed
      </Button>
    </div>
  );
};

export default PropertyDetails_Checkbandi;
