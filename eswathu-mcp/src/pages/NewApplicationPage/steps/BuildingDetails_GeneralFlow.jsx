import { useState, useRef } from 'react';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Button from '../../../components/Button/Button';
import IconButton from '../../../components/IconButton/IconButton';
import Table from '../../../components/Table/Table';
import InfoBox from '../../../components/InfoBox/InfoBox';
import Tooltip from '../../../components/Tooltip/Tooltip';
import RadioButton from '../../../components/RadioButton/RadioButton';
import { useTranslation } from '../../../i18n';
import './BuildingDetails_GeneralFlow.css';

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

/* ── ESCOM options ─────────────────────────────────────────── */
const ESCOM_TYPE_OPTIONS = [
  { value: 'bescom',        label: 'BESCOM' },
  { value: 'hescom',        label: 'HESCOM' },
  { value: 'mescom',        label: 'MESCOM' },
  { value: 'gescom',        label: 'GESCOM' },
  { value: 'cescom',        label: 'CESCOM' },
];

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
  const { t } = useTranslation('step4');

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
  const tenantSectionRef = useRef(null);
  const saveNextRef      = useRef(null);

  /* ── Derived ──────────────────────────────────────────────── */
  const allFloorsFilled  = floorData.length > 0 && floorData.every(isFloorFilled);
  const escomRowsValid   = escomRows.some((r) => r.escomType && r.accountId && r.rrNumber);
  const saveNextEnabled  = hasTenants !== null;

  /* ── Storeys handlers ─────────────────────────────────────── */
  const handleStoreyConfirm = () => {
    const n = parseInt(numStoreys, 10);
    if (!n || n < 1) return;
    setStoreysFrozen(true);
    setFloorData(Array.from({ length: n }, initFloor));
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
    setTimeout(
      () => collapseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
      80
    );
  };

  const handleEditFloorDetails = () => {
    setFloorDetailsSaved(false);
    setFloorCollapseOpen(true);
    // Clear all downstream sections — editing floor details invalidates ESCOM, water, and tenant data
    setEscomRows([initEscomRow()]);
    setEscomFetching(false);
    setEscomFetched(false);
    setEscomFetchedRows([]);
    setWaterRows([initWaterRow()]);
    setWaterVerifying(false);
    setWaterVerified(false);
    setWaterFetchedRows([]);
    setHasTenants(null);
    setTenantRows([initTenantRow()]);
    onEdit?.();
  };

  /* ── ESCOM handlers ───────────────────────────────────────── */
  const updateEscomRow = (idx, field, val) =>
    setEscomRows((prev) => prev.map((r, i) => (i === idx ? { ...r, [field]: val } : r)));

  const addEscomRow = () => setEscomRows((prev) => [...prev, initEscomRow()]);

  const handleFetchEscom = () => {
    setEscomFetching(true);
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

  /* ── Save Building Details ────────────────────────────────── */
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
      <p className="bd-gf__section-title">{t('bd_section_area_details')}</p>
      <div className="bd-gf__plinth-wrap">
        <Input
          label={t('bd_plinth_area')}
          required
          placeholder="e.g. 2450"
          value={plinthArea}
          onChange={(e) => setPlinthArea(e.target.value)}
          inputType="numeric"
        />
      </div>

      {/* ── Usage Details ────────────────────────────────────── */}
      <p className="bd-gf__section-title">{t('bd_section_usage_details')}</p>

      {/* Enter No. of Storeys — numeric Input + Confirm button */}
      {!storeysFrozen ? (
        <div className="bd-gf__storeys-row">
          <div className="bd-gf__storeys-input-wrap">
            <Input
              label={t('bd_num_storeys')}
              required
              placeholder="e.g. 3"
              value={numStoreys}
              onChange={(e) => setNumStoreys(e.target.value)}
              inputType="numeric"
            />
          </div>
          <div className="bd-gf__storeys-confirm-btn">
            <Button
              variant="primary"
              disabled={!numStoreys || parseInt(numStoreys, 10) < 1}
              onClick={handleStoreyConfirm}
            >
              {t('bd_confirm_storeys')}
            </Button>
          </div>
        </div>
      ) : (
        <div className="bd-gf__storeys-row">
          <div className="bd-gf__frozen-storeys">
            <Input
              label={t('bd_num_storeys')}
              value={numStoreys}
              frozen
              trailingIcon={!floorDetailsSaved ? 'close' : undefined}
              onTrailingIconClick={!floorDetailsSaved ? handleStoreyReset : undefined}
              trailingIconClassName="bd-gf__storeys-close-icon"
            />
          </div>
        </div>
      )}

      {/* ── Floor wise collapse ──────────────────────────────── */}
      {storeysFrozen && (
        <div className="bd-gf__collapse-wrap" ref={collapseRef}>
          <button
            type="button"
            className="bd-gf__collapse-header"
            onClick={() => setFloorCollapseOpen((o) => !o)}
          >
            <span className="bd-gf__collapse-title">{t('bd_floor_wise_title')}</span>
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
                      <p className="bd-gf__floor-label">{t('bd_floor_prefix')} {idx + 1}</p>

                      {/* Row 1: Built Up Area + Property Type */}
                      <div className="bd-gf__floor-row bd-gf__floor-row--2col">
                        <Input
                          label={t('bd_built_up_area')}
                          required
                          placeholder="e.g. 2450"
                          value={floor.builtUpArea}
                          onChange={(e) => updateFloor(idx, 'builtUpArea', e.target.value)}
                          inputType="numeric"
                        />
                        <Dropdown
                          label={t('bd_property_type')}
                          placeholder="Choose Property Type"
                          options={FLOOR_PROPERTY_TYPE_OPTIONS}
                          value={floor.propertyType}
                          onChange={(e) => updateFloor(idx, 'propertyType', e.target.value)}
                        />
                      </div>

                      {/* Row 2: Usage Type + Year Construction + Year Demolition */}
                      <div className="bd-gf__floor-row bd-gf__floor-row--3col">
                        <Dropdown
                          label={t('bd_usage_type')}
                          required
                          placeholder="Choose Usage Type"
                          options={USAGE_TYPE_OPTIONS}
                          value={floor.usageType}
                          onChange={(e) => updateFloor(idx, 'usageType', e.target.value)}
                        />
                        <Dropdown
                          label={t('bd_year_construction')}
                          required
                          placeholder="Select year"
                          options={YEAR_OPTIONS}
                          value={floor.yearConstruction}
                          onChange={(e) => updateFloor(idx, 'yearConstruction', e.target.value)}
                        />
                        <Dropdown
                          label={t('bd_year_demolition')}
                          placeholder="Select year"
                          options={YEAR_OPTIONS}
                          value={floor.yearDemolition}
                          onChange={(e) => updateFloor(idx, 'yearDemolition', e.target.value)}
                        />
                      </div>

                      {/* Row 3: Floor Type + Roof Type + Wood Used */}
                      <div className="bd-gf__floor-row bd-gf__floor-row--3col">
                        <Dropdown
                          label={t('bd_floor_type')}
                          required
                          placeholder="Choose Floor Type"
                          options={FLOOR_TYPE_OPTIONS}
                          value={floor.floorType}
                          onChange={(e) => updateFloor(idx, 'floorType', e.target.value)}
                        />
                        <Dropdown
                          label={t('bd_roof_type')}
                          required
                          placeholder="Choose Roof Type"
                          options={ROOF_TYPE_OPTIONS}
                          value={floor.roofType}
                          onChange={(e) => updateFloor(idx, 'roofType', e.target.value)}
                        />
                        <Dropdown
                          label={t('bd_wood_used')}
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
                          label={t('bd_remarks')}
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
                      {t('bd_save_floor_details')}
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
                      <p className="bd-gf__storey-label">{t('bd_storey_prefix')} {idx + 1}</p>
                      <div className="bd-gf__kv-table">
                        <div className="bd-gf__kv-row">
                          <span className="bd-gf__kv-label">{t('bd_built_up_area')}</span>
                          <span className="bd-gf__kv-value">{floor.builtUpArea}</span>
                          <span className="bd-gf__kv-label">{t('bd_property_type')}</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(FLOOR_PROPERTY_TYPE_OPTIONS, floor.propertyType)}
                          </span>
                        </div>
                        <div className="bd-gf__kv-row">
                          <span className="bd-gf__kv-label">{t('bd_year_construction')}</span>
                          <span className="bd-gf__kv-value">{floor.yearConstruction}</span>
                          <span className="bd-gf__kv-label">{t('bd_year_demolition')}</span>
                          <span className="bd-gf__kv-value">{floor.yearDemolition || '—'}</span>
                        </div>
                        <div className="bd-gf__kv-row">
                          <span className="bd-gf__kv-label">{t('bd_usage_type')}</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(USAGE_TYPE_OPTIONS, floor.usageType)}
                          </span>
                          <span className="bd-gf__kv-label">{t('bd_floor_type')}</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(FLOOR_TYPE_OPTIONS, floor.floorType)}
                          </span>
                        </div>
                        <div className="bd-gf__kv-row">
                          <span className="bd-gf__kv-label">{t('bd_roof_type')}</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(ROOF_TYPE_OPTIONS, floor.roofType)}
                          </span>
                          <span className="bd-gf__kv-label">{t('bd_wood_used')}</span>
                          <span className="bd-gf__kv-value">
                            {labelOf(WOOD_USED_OPTIONS, floor.woodUsed)}
                          </span>
                        </div>
                        {floor.remarks && (
                          <div className="bd-gf__kv-row">
                            <span className="bd-gf__kv-label">{t('bd_remarks')}</span>
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
            <p className="bd-gf__lower-title">{t('bd_escom_add_title')}</p>

            <div className="bd-gf__infobox-wrap">
              <InfoBox variant="outline">
                {t('bd_escom_multi_info')}
              </InfoBox>
            </div>

            <div className="bd-gf__table-outer">
              <Table
                columns={[
                  t('bd_table_no'),
                  <>{t('bd_escom_type')}<span style={{ color: 'var(--danger)' }}> *</span></>,
                  <>{t('bd_escom_account_id')}<span style={{ color: 'var(--danger)' }}> *</span></>,
                  <>{t('bd_rr_number')}<span style={{ color: 'var(--danger)' }}> *</span></>,
                ]}
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
                    placeholder="Enter Account ID"
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
                  {escomFetching ? t('bd_escom_verifying') : t('bd_escom_verify_btn')}
                </Button>
                <Button
                  variant="white"
                  disabled={!escomRowsValid || escomFetching || escomFetched}
                  onClick={handleFetchEscom}
                >
                  {t('bd_escom_get_updated')}
                </Button>
              </div>
              <Tooltip
                label={t('bd_escom_where_tooltip')}
                caption={t('bd_tooltip_click')}
              />
            </div>

            {escomFetched && escomFetchedRows.length > 0 && (
              <div className="bd-gf__fetched-wrap">
                <p className="bd-gf__fetched-title">{t('bd_escom_fetched_title')}</p>
                <Table
                  columns={[
                    t('bd_table_no'),
                    t('bd_owner_name'),
                    t('bd_escom_account_id'),
                    t('bd_address'),
                    t('bd_cancel'),
                  ]}
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
          <div className="bd-gf__lower-section">
            <p className="bd-gf__lower-title">{t('bd_water_section_title')}</p>

            <div className="bd-gf__infobox-wrap">
              <InfoBox variant="outline">
                {t('bd_water_multi_info')}
              </InfoBox>
            </div>

            <div className="bd-gf__table-outer bd-gf__table-outer--narrow">
              <Table
                columns={[t('bd_table_no'), t('bd_water_meter_number')]}
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

            <div className="bd-gf__lower-actions">
              <Button
                variant="primary"
                disabled={waterVerifying || waterVerified}
                onClick={handleVerifyWater}
              >
                {waterVerifying ? t('bd_water_verifying') : t('bd_water_verify_btn')}
              </Button>
            </div>

            {waterVerified && waterFetchedRows.length > 0 && (
              <div className="bd-gf__fetched-wrap">
                <p className="bd-gf__fetched-title">{t('bd_water_fetched_title')}</p>
                <Table
                  columns={[
                    t('bd_table_no'),
                    t('bd_owner_name'),
                    t('bd_water_meter_number'),
                    t('bd_address'),
                    t('bd_cancel'),
                  ]}
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
            <p className="bd-gf__lower-title">{t('bd_tenants_section_title')}</p>

            <div className="bd-gf__tenant-q">
              <p className="bd-gf__tenant-q-label">
                {t('bd_are_tenants')}
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
                      t('bd_table_no'),
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
          {/* Save Building Details — triggers 4.3               */}
          {/* ─────────────────────────────────────────────────── */}
          <div className="bd-gf__save-next-wrap" ref={saveNextRef}>
            <Button
              variant="primary"
              disabled={!saveNextEnabled}
              onClick={handleSaveAndNext}
            >
              {t('bd_save_building_details')}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default BuildingDetails_GeneralFlow;
