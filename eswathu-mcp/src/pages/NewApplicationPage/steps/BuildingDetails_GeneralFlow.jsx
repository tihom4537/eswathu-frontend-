import { useState, useRef } from 'react';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Button from '../../../components/Button/Button';
import IconButton from '../../../components/IconButton/IconButton';
import Table from '../../../components/Table/Table';
import InfoBox from '../../../components/InfoBox/InfoBox';
import Tooltip from '../../../components/Tooltip/Tooltip';
import RadioButton from '../../../components/RadioButton/RadioButton';
import './BuildingDetails_GeneralFlow.css';

/* ── Storeys 1–50 ──────────────────────────────────────────── */
const STOREY_OPTIONS = Array.from({ length: 50 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

/* ── Per-floor dropdown options ────────────────────────────── */
const FLOOR_PROPERTY_TYPE_OPTIONS = [
  { value: 'residential',   label: 'Residential' },
  { value: 'commercial',    label: 'Commercial' },
  { value: 'industrial',    label: 'Industrial' },
  { value: 'mixed',         label: 'Mixed Use' },
];

const USAGE_TYPE_OPTIONS = [
  { value: 'owner',         label: 'Owner occupied' },
  { value: 'rented',        label: 'Rented' },
  { value: 'vacant',        label: 'Vacant' },
  { value: 'mixed',         label: 'Mixed' },
];

const YEAR_OPTIONS = Array.from({ length: 126 }, (_, i) => ({
  value: String(1900 + i),
  label: String(1900 + i),
}));

const FLOOR_TYPE_OPTIONS = [
  { value: 'rcc',           label: 'RCC' },
  { value: 'mosaic',        label: 'Mosaic' },
  { value: 'tiles',         label: 'Tiles' },
  { value: 'marble',        label: 'Marble' },
  { value: 'mud',           label: 'Mud' },
  { value: 'wooden',        label: 'Wooden' },
];

const ROOF_TYPE_OPTIONS = [
  { value: 'rcc',           label: 'RCC' },
  { value: 'tiled',         label: 'Tiled' },
  { value: 'asbestos',      label: 'Asbestos' },
  { value: 'mangalore',     label: 'Mangalore tiles' },
  { value: 'sheet',         label: 'Sheet' },
  { value: 'mud',           label: 'Mud' },
];

const WOOD_USED_OPTIONS = [
  { value: 'teak',          label: 'Teak' },
  { value: 'sal',           label: 'Sal' },
  { value: 'pine',          label: 'Pine' },
  { value: 'none',          label: 'None' },
];

/* ── ESCOM / Water / Tenant options ───────────────────────── */
// TODO: replace with actual domain list
const ESCOM_TYPE_OPTIONS = [
  { value: 'bescom',        label: 'BESCOM' },
  { value: 'hescom',        label: 'HESCOM' },
  { value: 'mescom',        label: 'MESCOM' },
  { value: 'gescom',        label: 'GESCOM' },
  { value: 'cescom',        label: 'CESCOM' },
];

// TODO: replace with actual domain list
const RELATIONSHIP_OPTIONS = [
  { value: 'friend',        label: 'Friend' },
  { value: 'relative',      label: 'Relative' },
  { value: 'colleague',     label: 'Colleague' },
  { value: 'other',         label: 'Other' },
];

/* ── Blank-state factories ─────────────────────────────────── */
const initFloor = () => ({
  builtUpArea: '', propertyType: '', usageType: '',
  yearConstruction: '', yearDemolition: '',
  floorType: '', roofType: '', woodUsed: '', remarks: '',
});

const initEscomRow  = () => ({ escomType: '', accountId: '', rrNumber: '' });
const initWaterRow  = () => ({ meterNumber: '' });
const initTenantRow = () => ({ name: '', relationshipType: '', relationName: '', mobile: '' });

/* ── Helpers ───────────────────────────────────────────────── */
const isFloorFilled = (f) =>
  f.builtUpArea && f.propertyType && f.usageType &&
  f.yearConstruction && f.floorType && f.roofType && f.woodUsed;

const labelOf = (options, val) =>
  options.find((o) => o.value === val)?.label || val || '—';

/* ══════════════════════════════════════════════════════════════
   BuildingDetails_GeneralFlow
   ══════════════════════════════════════════════════════════════ */
const BuildingDetails_GeneralFlow = ({ onSave, onEdit }) => {
  /* ── Floor state ──────────────────────────────────────────── */
  const [plinthArea,        setPlinthArea]        = useState('');
  const [numStoreys,        setNumStoreys]         = useState('');
  const [storeysFrozen,     setStoreysFrozen]      = useState(false);
  const [floorCollapseOpen, setFloorCollapseOpen]  = useState(false);
  const [floorData,         setFloorData]          = useState([]);
  const [floorDetailsSaved, setFloorDetailsSaved]  = useState(false);

  /* ── ESCOM state ──────────────────────────────────────────── */
  const [escomRows,         setEscomRows]          = useState([initEscomRow()]);
  const [escomFetching,     setEscomFetching]      = useState(false);
  const [escomFetched,      setEscomFetched]       = useState(false);
  const [escomFetchedRows,  setEscomFetchedRows]   = useState([]);

  /* ── Water meter state ────────────────────────────────────── */
  const [waterRows,         setWaterRows]          = useState([initWaterRow()]);
  const [waterVerifying,    setWaterVerifying]     = useState(false);
  const [waterVerified,     setWaterVerified]      = useState(false);
  const [waterFetchedRows,  setWaterFetchedRows]   = useState([]);

  /* ── Tenant state ─────────────────────────────────────────── */
  const [hasTenants,        setHasTenants]         = useState(null);
  const [tenantRows,        setTenantRows]         = useState([initTenantRow()]);

  const collapseRef      = useRef(null);
  const escomSectionRef  = useRef(null);
  const waterSectionRef  = useRef(null);
  const tenantSectionRef = useRef(null);
  const saveNextRef      = useRef(null);

  /* ── Derived ──────────────────────────────────────────────── */
  const allFloorsFilled  = floorData.length > 0 && floorData.every(isFloorFilled);
  const escomRowsValid   = escomRows.some((r) => r.escomType && r.accountId);
  const saveNextEnabled  = hasTenants !== null;

  /* ── Storeys handlers ─────────────────────────────────────── */
  const handleStoreySelect = (e) => {
    const val = e.target.value;
    setNumStoreys(val);
    setStoreysFrozen(true);
    setFloorData(Array.from({ length: Number(val) }, initFloor));
    setFloorCollapseOpen(true);
    setTimeout(
      () => collapseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      80
    );
  };

  const handleStoreyReset = () => {
    setNumStoreys('');
    setStoreysFrozen(false);
    setFloorCollapseOpen(false);
    setFloorData([]);
    setFloorDetailsSaved(false);
    setEscomRows([initEscomRow()]);
    setEscomFetched(false);
    setEscomFetchedRows([]);
    setWaterRows([initWaterRow()]);
    setWaterVerified(false);
    setWaterFetchedRows([]);
    setHasTenants(null);
    setTenantRows([initTenantRow()]);
  };

  /* ── Floor field update ───────────────────────────────────── */
  const updateFloor = (idx, field, val) =>
    setFloorData((prev) =>
      prev.map((f, i) => (i === idx ? { ...f, [field]: val } : f))
    );

  /* ── Floor save / edit ────────────────────────────────────── */
  const handleSaveFloorDetails = () => {
    setFloorDetailsSaved(true);
    setFloorCollapseOpen(false);
    setTimeout(
      () => escomSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      80
    );
  };

  const handleEditFloorDetails = () => {
    setFloorDetailsSaved(false);
    setFloorCollapseOpen(true);
    onEdit?.();
  };

  /* ── ESCOM handlers ───────────────────────────────────────── */
  const updateEscomRow = (idx, field, val) =>
    setEscomRows((prev) => prev.map((r, i) => (i === idx ? { ...r, [field]: val } : r)));

  const addEscomRow = () => setEscomRows((prev) => [...prev, initEscomRow()]);

  const handleFetchEscom = () => {
    setEscomFetching(true);
    // TODO: replace with real API call
    setTimeout(() => {
      setEscomFetchedRows(
        escomRows
          .filter((r) => r.escomType && r.accountId)
          .map((r) => ({
            ownerName: 'Owner Name',
            accountId: r.accountId,
            address:   'Address will appear here after verification',
          }))
      );
      setEscomFetched(true);
      setEscomFetching(false);
    }, 1500);
  };

  const cancelEscomFetchedRow = (idx) => {
    const updated = escomFetchedRows.filter((_, i) => i !== idx);
    setEscomFetchedRows(updated);
    if (updated.length === 0) setEscomFetched(false);
  };

  /* ── Water handlers ───────────────────────────────────────── */
  const updateWaterRow = (idx, val) =>
    setWaterRows((prev) => prev.map((r, i) => (i === idx ? { meterNumber: val } : r)));

  const addWaterRow = () => setWaterRows((prev) => [...prev, initWaterRow()]);

  const handleVerifyWater = () => {
    setWaterVerifying(true);
    // TODO: replace with real API call
    setTimeout(() => {
      setWaterFetchedRows(
        waterRows
          .filter((r) => r.meterNumber)
          .map((r) => ({
            ownerName: 'Owner Name',
            meterNo:   r.meterNumber,
            address:   'Address will appear here after verification',
          }))
      );
      setWaterVerified(true);
      setWaterVerifying(false);
      setTimeout(
        () => tenantSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        80
      );
    }, 1500);
  };

  const cancelWaterFetchedRow = (idx) => {
    const updated = waterFetchedRows.filter((_, i) => i !== idx);
    setWaterFetchedRows(updated);
    if (updated.length === 0) setWaterVerified(false);
  };

  /* ── Tenant handlers ──────────────────────────────────────── */
  const updateTenantRow = (idx, field, val) =>
    setTenantRows((prev) => prev.map((r, i) => (i === idx ? { ...r, [field]: val } : r)));

  const addTenantRow = () => setTenantRows((prev) => [...prev, initTenantRow()]);

  /* ── Save and Next ────────────────────────────────────────── */
  const handleSaveAndNext = () => {
    onSave?.({ plinthArea, numStoreys: Number(numStoreys), floors: floorData });
    setTimeout(
      () => saveNextRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
      80
    );
  };

  /* ══════════════════════════════════════════════════════════
     Render
     ══════════════════════════════════════════════════════════ */
  return (
    <div className="bd-gf">

      {/* ── Building Area Details ────────────────────────────── */}
      <p className="bd-gf__section-title">Building Area Details</p>
      <div className="bd-gf__plinth-wrap">
        <Input
          label="Plinth Area of the Building (in sq. metres)"
          required
          placeholder="e.g. 2450"
          caption="Enter Plinth Area of the Building"
          value={plinthArea}
          onChange={(e) => setPlinthArea(e.target.value)}
          inputType="numeric"
        />
      </div>

      {/* ── Usage Details ────────────────────────────────────── */}
      <p className="bd-gf__section-title">Usage Details</p>
      <div className="bd-gf__storeys-row">
        {!storeysFrozen ? (
          <div className="bd-gf__storeys-dropdown">
            <Dropdown
              label="Enter No. of Storeys"
              required
              placeholder="Enter No. of Storeys"
              options={STOREY_OPTIONS}
              value={numStoreys}
              onChange={handleStoreySelect}
            />
          </div>
        ) : (
          <div className="bd-gf__frozen-storeys">
            <div className="bd-gf__frozen-input-wrap">
              <Input label="Enter No. of Storeys" value={numStoreys} frozen />
            </div>
            <button
              type="button"
              className="bd-gf__storeys-reset"
              onClick={handleStoreyReset}
              disabled={floorDetailsSaved}
              aria-label="Reset number of storeys"
            >
              <span className="material-icons-outlined">close</span>
            </button>
          </div>
        )}
      </div>

      {/* ── Floor wise collapse ──────────────────────────────── */}
      {storeysFrozen && (
        <div className="bd-gf__collapse-wrap" ref={collapseRef}>
          <button
            type="button"
            className="bd-gf__collapse-header"
            onClick={() => setFloorCollapseOpen((o) => !o)}
          >
            <span className="bd-gf__collapse-title">Please add Floor wise Details</span>
            <span
              className={`material-icons-outlined bd-gf__collapse-chevron${
                floorCollapseOpen ? ' bd-gf__collapse-chevron--open' : ''
              }`}
            >
              expand_more
            </span>
          </button>

          {floorCollapseOpen && (
            <div className="bd-gf__collapse-body">
              {!floorDetailsSaved ? (
                /* ─── EDIT MODE: floor forms ─────────────────── */
                <>
                  {floorData.map((floor, idx) => (
                    <div key={idx} className="bd-gf__floor-box">
                      <p className="bd-gf__floor-label">Floor {idx + 1}</p>

                      {/* Row 1: Built Up Area + Property Type */}
                      <div className="bd-gf__floor-row bd-gf__floor-row--2col">
                        <Input
                          label="Enter Built Up Area (in sq. metres)"
                          required
                          placeholder="Enter Built Up Area (in sq. metres)"
                          value={floor.builtUpArea}
                          onChange={(e) => updateFloor(idx, 'builtUpArea', e.target.value)}
                          inputType="numeric"
                        />
                        <Dropdown
                          label="Property Type"
                          required
                          placeholder="Choose Property Type"
                          options={FLOOR_PROPERTY_TYPE_OPTIONS}
                          value={floor.propertyType}
                          onChange={(e) => updateFloor(idx, 'propertyType', e.target.value)}
                        />
                      </div>

                      {/* Row 2: Usage Type + Year Construction + Year Demolition */}
                      <div className="bd-gf__floor-row bd-gf__floor-row--3col">
                        <Dropdown
                          label="Usage Type"
                          required
                          placeholder="Choose Usage Type"
                          options={USAGE_TYPE_OPTIONS}
                          value={floor.usageType}
                          onChange={(e) => updateFloor(idx, 'usageType', e.target.value)}
                        />
                        <Dropdown
                          label="Year of Construction/ Usage Started"
                          required
                          placeholder="Year of Construction/ Usage Started"
                          options={YEAR_OPTIONS}
                          value={floor.yearConstruction}
                          onChange={(e) => updateFloor(idx, 'yearConstruction', e.target.value)}
                        />
                        <Dropdown
                          label="Year of Demolition"
                          placeholder="Choose Year of Demolition"
                          options={YEAR_OPTIONS}
                          value={floor.yearDemolition}
                          onChange={(e) => updateFloor(idx, 'yearDemolition', e.target.value)}
                        />
                      </div>

                      {/* Row 3: Floor Type + Roof Type + Wood Used */}
                      <div className="bd-gf__floor-row bd-gf__floor-row--3col">
                        <Dropdown
                          label="Floor Type"
                          required
                          placeholder="Choose Floor Type"
                          options={FLOOR_TYPE_OPTIONS}
                          value={floor.floorType}
                          onChange={(e) => updateFloor(idx, 'floorType', e.target.value)}
                        />
                        <Dropdown
                          label="Roof Type"
                          required
                          placeholder="Choose Roof Type"
                          options={ROOF_TYPE_OPTIONS}
                          value={floor.roofType}
                          onChange={(e) => updateFloor(idx, 'roofType', e.target.value)}
                        />
                        <Dropdown
                          label="Wood Used"
                          required
                          placeholder="Choose Wood Used"
                          options={WOOD_USED_OPTIONS}
                          value={floor.woodUsed}
                          onChange={(e) => updateFloor(idx, 'woodUsed', e.target.value)}
                        />
                      </div>

                      {/* Row 4: Remarks (optional, full width) */}
                      <div className="bd-gf__floor-row bd-gf__floor-row--full">
                        <Input
                          label="Remarks"
                          placeholder="(if any)"
                          value={floor.remarks}
                          onChange={(e) => updateFloor(idx, 'remarks', e.target.value)}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="bd-gf__floor-actions">
                    <Button
                      variant="primary"
                      disabled={!allFloorsFilled}
                      onClick={handleSaveFloorDetails}
                    >
                      Save Floor wise Details
                    </Button>
                    <Button variant="error" disabled>
                      Edit
                    </Button>
                  </div>
                </>
              ) : (
                /* ─── SAVED MODE: read-only storey tables ─────── */
                <>
                  {floorData.map((floor, idx) => (
                    <div key={idx} className="bd-gf__storey-summary">
                      <p className="bd-gf__storey-label">Storey {idx + 1}</p>
                      <div className="bd-gf__kv-table">
                        <div className="bd-gf__kv-row">
                          <span className="bd-gf__kv-label">Enter Built Up Area (in sq. metres)</span>
                          <span className="bd-gf__kv-value">{floor.builtUpArea}</span>
                          <span className="bd-gf__kv-label">Property Type</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(FLOOR_PROPERTY_TYPE_OPTIONS, floor.propertyType)}
                          </span>
                        </div>
                        <div className="bd-gf__kv-row">
                          <span className="bd-gf__kv-label">Year of Construction/ Usage Started</span>
                          <span className="bd-gf__kv-value">{floor.yearConstruction}</span>
                          <span className="bd-gf__kv-label">Year of Demolition</span>
                          <span className="bd-gf__kv-value">{floor.yearDemolition || '—'}</span>
                        </div>
                        <div className="bd-gf__kv-row">
                          <span className="bd-gf__kv-label">Usage Type</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(USAGE_TYPE_OPTIONS, floor.usageType)}
                          </span>
                          <span className="bd-gf__kv-label">Floor Type</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(FLOOR_TYPE_OPTIONS, floor.floorType)}
                          </span>
                        </div>
                        <div className="bd-gf__kv-row">
                          <span className="bd-gf__kv-label">Roof Type</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(ROOF_TYPE_OPTIONS, floor.roofType)}
                          </span>
                          <span className="bd-gf__kv-label">Wood Used</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(WOOD_USED_OPTIONS, floor.woodUsed)}
                          </span>
                        </div>
                        {floor.remarks && (
                          <div className="bd-gf__kv-row">
                            <span className="bd-gf__kv-label">Remarks (if any)</span>
                            <span className="bd-gf__kv-value bd-gf__kv-value--span3">
                              {floor.remarks}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="bd-gf__floor-actions">
                    <Button variant="error" onClick={handleEditFloorDetails}>
                      Edit
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════
          Lower sections — visible after floor details saved
          ═══════════════════════════════════════════════════════ */}
      {floorDetailsSaved && (
        <>
          {/* ─────────────────────────────────────────────────── */}
          {/* ESCOM Meters                                        */}
          {/* ─────────────────────────────────────────────────── */}
          <div className="bd-gf__divider" />
          <div className="bd-gf__lower-section" ref={escomSectionRef}>
            <p className="bd-gf__lower-title">Please add Details of All ESCOM Meters</p>

            <div className="bd-gf__infobox-wrap">
              <InfoBox variant="outline">
                If same property has multiple ESCOM meters, please add all of them
              </InfoBox>
            </div>

            <div className="bd-gf__table-outer">
              <Table
                columns={['No.', 'ESCOM Type*', 'ESCOM 10-digit Account ID*', 'RR Number']}
                rows={escomRows.map((row, idx) => [
                  <span className="bd-gf__td-no">{idx + 1}</span>,
                  <Dropdown
                    placeholder="Choose ESCOM Type"
                    options={ESCOM_TYPE_OPTIONS}
                    value={row.escomType}
                    onChange={(e) => updateEscomRow(idx, 'escomType', e.target.value)}
                    disabled={escomFetched}
                  />,
                  <Input
                    placeholder="Enter 10-digit Account ID"
                    value={row.accountId}
                    onChange={(e) => updateEscomRow(idx, 'accountId', e.target.value)}
                    inputType="numeric"
                    disabled={escomFetched}
                  />,
                  <Input
                    placeholder="Enter RR Number"
                    value={row.rrNumber}
                    onChange={(e) => updateEscomRow(idx, 'rrNumber', e.target.value)}
                    disabled={escomFetched}
                  />,
                ])}
                actionButton={
                  !escomFetched ? (
                    <IconButton icon="add" color="blue" onClick={addEscomRow} />
                  ) : null
                }
              />
            </div>

            <div className="bd-gf__escom-action-row">
              <div className="bd-gf__escom-buttons">
                <Button
                  variant="primary"
                  disabled={!escomRowsValid || escomFetching || escomFetched}
                  onClick={handleFetchEscom}
                >
                  {escomFetching ? 'Verifying…' : 'Verify ESCOM meter/s'}
                </Button>
                <Button
                  variant="white"
                  disabled={!escomRowsValid || escomFetching || escomFetched}
                  onClick={handleFetchEscom}
                >
                  Get updated details from ESCOM
                </Button>
              </div>
              <Tooltip
                label="Where to find your Account ID and RR number"
                caption="Click to view sample"
              />
            </div>

            {escomFetched && escomFetchedRows.length > 0 && (
              <div className="bd-gf__fetched-wrap">
                <p className="bd-gf__fetched-title">
                  Please check the fetched ESCOM meter Details
                </p>
                <Table
                  columns={['No.', 'Owner Name', 'ESCOM Account ID', 'Address', 'Cancel bill']}
                  rows={escomFetchedRows.map((row, idx) => [
                    <span className="bd-gf__td-no">{idx + 1}</span>,
                    row.ownerName,
                    row.accountId,
                    row.address,
                    <IconButton
                      icon="close"
                      color="grey"
                      className="bd-gf__cancel-icon"
                      onClick={() => cancelEscomFetchedRow(idx)}
                      aria-label="Cancel this ESCOM entry"
                    />,
                  ])}
                />
              </div>
            )}
          </div>

          {/* ─────────────────────────────────────────────────── */}
          {/* Water Meters                                        */}
          {/* ─────────────────────────────────────────────────── */}
          <div className="bd-gf__divider" />
          <div className="bd-gf__lower-section" ref={waterSectionRef}>
            <p className="bd-gf__lower-title">
              Please add Details of All Water Meters (if applicable to you)
            </p>

            <div className="bd-gf__infobox-wrap">
              <InfoBox variant="outline">
                If same property has multiple water meters, please add all of them
              </InfoBox>
            </div>

            <div className="bd-gf__table-outer bd-gf__table-outer--narrow">
              <Table
                columns={['No.', 'Water Meter Number']}
                rows={waterRows.map((row, idx) => [
                  <span className="bd-gf__td-no">{idx + 1}</span>,
                  <Input
                    placeholder="Enter Water Meter Number"
                    value={row.meterNumber}
                    onChange={(e) => updateWaterRow(idx, e.target.value)}
                    disabled={waterVerified}
                  />,
                ])}
                actionButton={
                  !waterVerified ? (
                    <IconButton icon="add" color="blue" onClick={addWaterRow} />
                  ) : null
                }
              />
            </div>

            {/* Verify button — always enabled (section is not mandatory) */}
            <div className="bd-gf__lower-actions">
              <Button
                variant="primary"
                disabled={waterVerifying || waterVerified}
                onClick={handleVerifyWater}
              >
                {waterVerifying ? 'Verifying…' : 'Verify Water meter/s'}
              </Button>
            </div>

            {waterVerified && waterFetchedRows.length > 0 && (
              <div className="bd-gf__fetched-wrap">
                <p className="bd-gf__fetched-title">
                  Please check the fetched Water Meter Details
                </p>
                <Table
                  columns={['No.', 'Owner Name', 'Water Meter No.', 'Address', 'Cancel bill']}
                  rows={waterFetchedRows.map((row, idx) => [
                    <span className="bd-gf__td-no">{idx + 1}</span>,
                    row.ownerName,
                    row.meterNo,
                    row.address,
                    <IconButton
                      icon="close"
                      color="grey"
                      className="bd-gf__cancel-icon"
                      onClick={() => cancelWaterFetchedRow(idx)}
                      aria-label="Cancel this water meter entry"
                    />,
                  ])}
                />
              </div>
            )}
          </div>

          {/* ─────────────────────────────────────────────────── */}
          {/* Tenants                                             */}
          {/* ─────────────────────────────────────────────────── */}
          <div className="bd-gf__divider" />
          <div className="bd-gf__lower-section" ref={tenantSectionRef}>
            <p className="bd-gf__lower-title">
              Please add Details of All Tenants (if applicable for your property)
            </p>

            <div className="bd-gf__tenant-q">
              <p className="bd-gf__tenant-q-label">
                Are there Tenants living in the building?
                <span className="bd-gf__required">*</span>
              </p>
              <div className="bd-gf__radio-row">
                <RadioButton
                  name="hasTenants"
                  label="Yes"
                  value="yes"
                  checked={hasTenants === 'yes'}
                  onChange={() => setHasTenants('yes')}
                />
                <RadioButton
                  name="hasTenants"
                  label="No"
                  value="no"
                  checked={hasTenants === 'no'}
                  onChange={() => setHasTenants('no')}
                />
              </div>
            </div>

            {hasTenants === 'yes' && (
              <>
                <p className="bd-gf__lower-subtitle">Please add Details of All Tenants</p>
                <div className="bd-gf__table-outer">
                  <Table
                    columns={[
                      'No.',
                      'Tenant Name',
                      'Relationship type',
                      'Tenant Relation Name',
                      'Tenant Mobile No.',
                    ]}
                    rows={tenantRows.map((row, idx) => [
                      <span className="bd-gf__td-no">{idx + 1}</span>,
                      <Input
                        placeholder="Enter Tenant Name"
                        value={row.name}
                        onChange={(e) => updateTenantRow(idx, 'name', e.target.value)}
                        inputType="alpha"
                      />,
                      <Dropdown
                        placeholder="Choose Relationship Type"
                        options={RELATIONSHIP_OPTIONS}
                        value={row.relationshipType}
                        onChange={(e) => updateTenantRow(idx, 'relationshipType', e.target.value)}
                      />,
                      <Input
                        placeholder="Enter Relation Name"
                        value={row.relationName}
                        onChange={(e) => updateTenantRow(idx, 'relationName', e.target.value)}
                        inputType="alpha"
                      />,
                      <Input
                        placeholder="Enter Mobile No."
                        value={row.mobile}
                        onChange={(e) => updateTenantRow(idx, 'mobile', e.target.value)}
                        inputType="phone"
                      />,
                    ])}
                    actionButton={
                      <IconButton icon="add" color="blue" onClick={addTenantRow} />
                    }
                  />
                </div>
              </>
            )}
          </div>

          {/* ─────────────────────────────────────────────────── */}
          {/* Save and Next — opens section 4.3                  */}
          {/* ─────────────────────────────────────────────────── */}
          <div className="bd-gf__save-next-wrap" ref={saveNextRef}>
            <Button
              variant="primary"
              disabled={!saveNextEnabled}
              onClick={handleSaveAndNext}
            >
              Save and Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default BuildingDetails_GeneralFlow;
