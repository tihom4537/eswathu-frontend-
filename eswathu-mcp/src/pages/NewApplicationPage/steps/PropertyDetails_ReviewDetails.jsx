import Table from '../../../components/Table/Table';
import './PropertyDetails_ReviewDetails.css';

const PropertyDetails_ReviewDetails = ({
  addressData,
  imageFile,
  acceptedAreaSqft,
  siteDimSummary,
  checkbandiData,
}) => {
  /* ── Derived display values ─────────────────────────── */
  const areaSqmt = acceptedAreaSqft > 0
    ? (acceptedAreaSqft * 0.0929).toFixed(2)
    : '—';
  const areaDisplay = acceptedAreaSqft > 0 ? `${areaSqmt} Sq.Mts` : '—';

  const dimsDisplay = siteDimSummary
    ? siteDimSummary.type === 'odd'
      ? `Odd (${siteDimSummary.sides} sides)`
      : `${siteDimSummary.ns} ft × ${siteDimSummary.ew} ft`
    : 'N/A';

  const addr = addressData
    ? [
        addressData.doorPlotNo,
        addressData.buildingName,
        addressData.areaLocality,
        addressData.pincode,
      ]
        .filter(Boolean)
        .join(', ')
    : '—';

  const photoCell = imageFile ? (
    <img src={imageFile.url} alt="Property" className="pd-rd__photo" />
  ) : (
    <span className="pd-rd__no-photo">No photo</span>
  );

  return (
    <div className="pd-rd">

      {/* ── Table 1: Location ──────────────────────────── */}
      <div className="pd-rd__table-wrap pd-rd__table-wrap--location">
        <Table
          columns={['Property Address', 'Latitude and Longitude', 'Property Photo']}
          rows={[[
            addr,
            addressData?.latLng || '—',
            photoCell,
          ]]}
        />
      </div>

      {/* ── Table 2: Area details ──────────────────────── */}
      <div className="pd-rd__table-wrap pd-rd__table-wrap--area">
        <Table
          columns={['Total Area Details (Sq.Mts)', 'Property Dimensions (Mts)', 'Irregular site/ site with odd dimensions']}
          rows={[[areaDisplay, dimsDisplay, siteDimSummary?.type === 'odd' ? 'Yes' : 'No']]}
        />
      </div>

      {/* ── Table 3: Checkbandi ────────────────────────── */}
      <div className="pd-rd__table-wrap pd-rd__table-wrap--checkbandi">
        <Table
          columns={['Checkbandi East', 'Checkbandi West', 'Checkbandi North', 'Checkbandi South']}
          rows={[[
            checkbandiData?.east  || '—',
            checkbandiData?.west  || '—',
            checkbandiData?.north || '—',
            checkbandiData?.south || '—',
          ]]}
        />
      </div>

      {/* ── Success caption ────────────────────────────── */}
      <div className="pd-rd__caption">
        <span className="material-icons-outlined pd-rd__caption-icon">check_circle</span>
        <span className="pd-rd__caption-text">
          Property details have been entered successfully. Please proceed to the next step.
        </span>
      </div>

    </div>
  );
};

export default PropertyDetails_ReviewDetails;
