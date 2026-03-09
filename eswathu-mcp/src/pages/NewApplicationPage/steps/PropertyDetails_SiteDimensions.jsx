import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import RadioButton from '../../../components/RadioButton/RadioButton';
import ErrorMessageCard from '../../../components/ErrorMessageCard/ErrorMessageCard';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import Button from '../../../components/Button/Button';
import './PropertyDetailsPage.css';

// Site Dimensions Subsection for Section 3.2
// Follows Figma patterns for Kaveri workflow, unit = sq.ft

const ODD_EVEN_OPTIONS = [
  { value: 'even', label: 'Even' },
  { value: 'odd', label: 'Odd' },
];

const PropertyDetails_SiteDimensions = ({ siteDimsFetched, areaDetails, onSuccess, onMismatch }) => {
  // Odd/Even radio
  const [oddEven, setOddEven] = useState('even'); // 'even' | 'odd'

  // Area comparison
  const [areaMatch, setAreaMatch] = useState(true); // true = match, false = mismatch

  // ...existing code...

  return (
    <div className="pd-s32__site-dimensions">
      <div className="pd-s32__sub-heading">Site Dimensions</div>
      <div className="pd-s32__odd-even">
        <span>Are the site dimensions odd or even?</span>
        <div className="pd-s32__odd-even-radio-group">
          {ODD_EVEN_OPTIONS.map((opt) => (
            <RadioButton
              key={opt.value}
              label={opt.label}
              value={opt.value}
              checked={oddEven === opt.value}
              onChange={() => setOddEven(opt.value)}
            />
          ))}
        </div>
      </div>
      {/* Only Even flow implemented now */}
      {oddEven === 'even' && (
        <div className="pd-s32__site-fields">
          {/* Pre-fetched fields (frozen input with edit button) */}
          {siteDimsFetched.map((field, idx) => (
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
      )}
      {/* ODD DIMENSIONS YES FLOW - to be implemented later */}
      {/* Area comparison validation */}
      {oddEven === 'even' && areaMatch && (
        <div className="pd-s32__area-success">
          {/* Success UI from Figma */}
          <span className="material-icons-outlined pd-s32__success-icon">check_circle</span>
          <span>Site dimensions match the area details. You may proceed.</span>
        </div>
      )}
      {oddEven === 'even' && !areaMatch && (
        <ErrorMessageCard
          message="Site dimensions do not match the area details. Please re-enter or check the values."
        />
        /* MISMATCH - to be implemented later */
      )}
    </div>
  );
};

export default PropertyDetails_SiteDimensions;
