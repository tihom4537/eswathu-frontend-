import { useState, useRef } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import StepHeader from '../../../components/StepHeader/StepHeader';
import Stepper from '../../../components/Stepper/Stepper';
import SectionBox from '../../../components/SectionBox/SectionBox';
import InfoBox from '../../../components/InfoBox/InfoBox';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Button from '../../../components/Button/Button';
import IconButton from '../../../components/IconButton/IconButton';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import ErrorMessageCard from '../../../components/ErrorMessageCard/ErrorMessageCard';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import './PropertyDetailsPage.css';
import PropertyDetails_AreaDetails from './PropertyDetails_AreaDetails';
import PropertyDetails_SiteDimensions from './PropertyDetails_SiteDimensions';
import PropertyDetails_Checkbandi from './PropertyDetails_Checkbandi';

/* ── Mock fetched address data ─────────────────────────── */
const MOCK_ADDRESS = {
  doorPlotNo: 'No. 6',
  buildingName: 'Vidhan Soudha',
  areaLocality: 'Sampige Nagar',
  latLng: '12.9716° N, 77.5946° E',
  pincode: '560001',
};

/* ── Road type options ─────────────────────────────────── */
const ROAD_TYPE_OPTIONS = [
  { value: 'corner', label: 'Corner Property' },
  { value: 'two_side', label: 'Any Two side Roads Property' },
  { value: 'nh_bypass', label: 'Abutting to NH, Bypass, Ringroad' },
  { value: 'sh_commercial', label: 'Abutting to SH Commercial Purpose' },
  { value: 'district_main', label: 'District Main Road / 80 ft. Main Road' },
  { value: 'other', label: 'Other Roads' },
];

const PropertyDetailsPage = ({ onNavigate, username = '' }) => {
  /* ── Section 3.1 State ──────────────────────────────── */
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState('idle'); // idle | loading | error | found
  const searchAttempt = useRef(0);

  /* Address fields (frozen, fetched from geocode) */
  const [addressData, setAddressData] = useState(null);
  const [clearedFields, setClearedFields] = useState({}); // { doorPlotNo: true, ... }

  /* Editable fields */
  const [roadType, setRoadType] = useState('');
  const [landmark, setLandmark] = useState('');

  /* Image upload */
  const [imageFile, setImageFile] = useState(null); // { name, url, status: 'success' | 'warning' }
  const fileInputRef = useRef(null);

  /* Section state */
  const [s31Saved, setS31Saved] = useState(false);

  /* ── Section 3.2 State ──────────────────────────────── */
  const [s32Visible, setS32Visible] = useState(false);

  // Section 3.2 state
  const [areaFetched, setAreaFetched] = useState('2400'); // mock
  const [unit, setUnit] = useState('sqft');
  const [areaSqft, setAreaSqft] = useState('2400');
  const [areaSqmt, setAreaSqmt] = useState((2400 * 0.0929).toFixed(2));
  const [siteDimsFetched, setSiteDimsFetched] = useState([
    { label: 'Length', value: '60' },
    { label: 'Breadth', value: '40' },
  ]);
  const [checkbandiFetched, setCheckbandiFetched] = useState([
    { label: 'North Boundary', value: 'Road' },
    { label: 'South Boundary', value: 'Building' },
    { label: 'East Boundary', value: 'Land' },
    { label: 'West Boundary', value: 'Plot' },
  ]);

  /* ── Handlers: Search ───────────────────────────────── */
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    searchAttempt.current += 1;

    /* First attempt: simulate "not found exactly" → error card */
    if (searchAttempt.current === 1) {
      setSearchStatus('loading');
      setTimeout(() => {
        setSearchStatus('error');
      }, 1200);
      return;
    }

    /* Second attempt: found */
    setSearchStatus('loading');
    setTimeout(() => {
      setSearchStatus('found');
      setAddressData({ ...MOCK_ADDRESS });
      setClearedFields({});
    }, 1200);
  };

  const handleErrorDismiss = () => {
    setSearchStatus('idle');
  };

  /* ── Handlers: Address field clear ──────────────────── */
  const handleClearField = (field) => {
    setAddressData((prev) => (prev ? { ...prev, [field]: '' } : prev));
    setClearedFields((prev) => ({ ...prev, [field]: true }));
  };

  /* ── Handlers: Image upload ─────────────────────────── */
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    /* Mock: if filename contains "partial" treat as warning, else success */
    const status = file.name.toLowerCase().includes('partial') ? 'warning' : 'success';
    setImageFile({ name: file.name, url, status });
    /* Reset input so same file can be re-selected */
    e.target.value = '';
  };

  const handleRemoveImage = () => {
    if (imageFile?.url) URL.revokeObjectURL(imageFile.url);
    setImageFile(null);
  };

  /* ── Handlers: Section actions ──────────────────────── */
  const handleSave31 = () => {
    setS31Saved(true);
    setS32Visible(true);
  };

  const handleEdit31 = () => {
    setS31Saved(false);
    setS32Visible(false);
  };

  /* ── Derived: can save? ─────────────────────────────── */
  const canSave31 =
    !s31Saved &&
    searchStatus === 'found' &&
    roadType !== '' &&
    landmark.trim() !== '' &&
    imageFile !== null &&
    imageFile.status !== 'error';

  return (
    <div className="pd-page">
      {/* ── Navigation ────────────────────────────────── */}
      <NavigationBar
        variant="postLogin"
        username={username}
        onLogout={() => onNavigate?.('login')}
      />

      {/* ── Stepper ───────────────────────────────────── */}
      <Stepper activeStep={2} />

      {/* ── Step Header ───────────────────────────────── */}
      <StepHeader step="Step 3" title="Property details" />

      <div className="pd-page__sections">

        {/* ═══ SECTION 3.1 — Location Details ═══════════ */}
        <SectionBox
          number="3.1"
          title="Location Details"
          open
          className="pd-s31-box"
        >
          <div className="pd-s31">

            {/* Sub-heading */}
            <p className="pd-s31__sub-heading">Location search</p>

            {/* Info box */}
            <InfoBox variant="outline">
              Enter a landmark near your property and then drag the red pin to select your specific property. In case, you cannot find your property, proceed with the nearest landmark
            </InfoBox>

            {/* Search row + Map area */}
            <div className="pd-s31__map-area">

              {/* Search + button */}
              <div className="pd-s31__search-row">
                <Input
                  placeholder="Search for a landmark near your property"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  disabled={s31Saved || searchStatus === 'loading'}
                  leadingIcon="search"
                  className="pd-s31__search-input"
                />
                <Button
                  variant="primary"
                  disabled={!searchQuery.trim() || searchStatus === 'loading' || s31Saved}
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>

              {/* Map placeholder */}
              <div className="pd-s31__map-frame">
                {/* TODO: Replace with Google Maps embed with draggable pin */}
                <div className="pd-s31__map-placeholder">
                  <span className="material-icons-outlined pd-s31__map-icon">map</span>
                  <span className="pd-s31__map-text">
                    Google Maps will be embedded here with a draggable pin
                  </span>
                  {searchStatus === 'found' && (
                    <span className="pd-s31__map-pin">
                      <span className="material-icons-outlined">location_on</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* ── Divider + Address section (after location found) ── */}
            {searchStatus === 'found' && addressData && (
              <>
                <div className="pd-s31__divider" />
                <p className="pd-s31__sub-heading">Address of the Property</p>

                {/* Row 1: 3 columns */}
                <div className="pd-s31__addr-row pd-s31__addr-row--three">
                  <Input
                    label="Door/ Plot No."
                    value={addressData.doorPlotNo}
                    onChange={(e) => setAddressData((prev) => ({ ...prev, doorPlotNo: e.target.value }))}
                    frozen={!clearedFields.doorPlotNo}
                    required
                    trailingIcon={!clearedFields.doorPlotNo ? 'close' : undefined}
                    onTrailingIconClick={!clearedFields.doorPlotNo ? () => handleClearField('doorPlotNo') : undefined}
                    trailingIconClassName="pd-s31__close-icon"
                    disabled={s31Saved}
                  />
                  <Input
                    label="Building/ Land Name"
                    value={addressData.buildingName}
                    onChange={(e) => setAddressData((prev) => ({ ...prev, buildingName: e.target.value }))}
                    frozen={!clearedFields.buildingName}
                    required
                    trailingIcon={!clearedFields.buildingName ? 'close' : undefined}
                    onTrailingIconClick={!clearedFields.buildingName ? () => handleClearField('buildingName') : undefined}
                    trailingIconClassName="pd-s31__close-icon"
                    disabled={s31Saved}
                  />
                  <Input
                    label="Area/ Locality"
                    value={addressData.areaLocality}
                    onChange={(e) => setAddressData((prev) => ({ ...prev, areaLocality: e.target.value }))}
                    frozen={!clearedFields.areaLocality}
                    required
                    trailingIcon={!clearedFields.areaLocality ? 'close' : undefined}
                    onTrailingIconClick={!clearedFields.areaLocality ? () => handleClearField('areaLocality') : undefined}
                    trailingIconClassName="pd-s31__close-icon"
                    disabled={s31Saved}
                  />
                </div>

                {/* Row 2: 2 columns */}
                <div className="pd-s31__addr-row pd-s31__addr-row--two">
                  <Input
                    label="Latitude &amp; Longitude"
                    value={addressData.latLng}
                    onChange={(e) => setAddressData((prev) => ({ ...prev, latLng: e.target.value }))}
                    frozen={!clearedFields.latLng}
                    required
                    trailingIcon={!clearedFields.latLng ? 'close' : undefined}
                    onTrailingIconClick={!clearedFields.latLng ? () => handleClearField('latLng') : undefined}
                    trailingIconClassName="pd-s31__close-icon"
                    disabled={s31Saved}
                  />
                  <Input
                    label="Pincode"
                    value={addressData.pincode}
                    onChange={(e) => setAddressData((prev) => ({ ...prev, pincode: e.target.value }))}
                    frozen={!clearedFields.pincode}
                    required
                    trailingIcon={!clearedFields.pincode ? 'close' : undefined}
                    onTrailingIconClick={!clearedFields.pincode ? () => handleClearField('pincode') : undefined}
                    trailingIconClassName="pd-s31__close-icon"
                    disabled={s31Saved}
                  />
                </div>

                {/* Row 3: Road type + Nearest Landmark */}
                <div className="pd-s31__addr-row pd-s31__addr-row--two">
                  <div className="pd-s31__road-type-wrap">
                    <Dropdown
                      label="What type of road does the property reside on"
                      placeholder="Choose Road Type"
                      options={ROAD_TYPE_OPTIONS}
                      value={roadType}
                      onChange={(e) => setRoadType(e.target.value)}
                      required
                      disabled={s31Saved}
                    />
                    <CaptionMessage variant="info">Please choose road type</CaptionMessage>
                  </div>
                  <Input
                    label="Nearest Landmark"
                    placeholder=""
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    required
                    caption="Please enter the nearest landmark"
                    captionVariant="info"
                    disabled={s31Saved}
                  />
                </div>

                {/* Row 4: Property Image upload */}
                <div className="pd-s31__upload-section">
                  <span className="pd-s31__upload-label">
                    Property Image<span className="pd-s31__required">*</span>
                  </span>

                  {imageFile ? (
                    /* Image preview replaces the upload button */
                    <div className="pd-s31__preview-frame">
                      <div className="pd-s31__preview-inner">
                        <img
                          src={imageFile.url}
                          alt="Property"
                          className="pd-s31__preview-img"
                        />
                        {!s31Saved && (
                          <IconButton
                            icon="close"
                            color="black"
                            onClick={handleRemoveImage}
                            className="pd-s31__preview-close"
                          />
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Upload button */
                    <Button
                      variant="white"
                      icon="upload_file"
                      onClick={handleUploadClick}
                      disabled={s31Saved}
                    >
                      Upload File
                    </Button>
                  )}

                  {/* Caption swaps based on upload status */}
                  {!imageFile && (
                    <CaptionMessage variant="error">
                      Click property photo with it&apos;s front elevation visible
                    </CaptionMessage>
                  )}
                  {imageFile && imageFile.status === 'success' && (
                    <CaptionMessage variant="success">Image uploaded successfully</CaptionMessage>
                  )}
                  {imageFile && imageFile.status === 'warning' && (
                    <CaptionMessage variant="warning">
                      The uploaded image does not show the complete building. Please re-upload with full front elevation.
                    </CaptionMessage>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="pd-s31__file-input"
                    onChange={handleFileChange}
                  />
                </div>

                {/* Save and Continue / Edit */}
                <div className="pd-s31__actions">
                  <Button
                    variant="primary"
                    disabled={!canSave31}
                    onClick={handleSave31}
                  >
                    Save and Continue
                  </Button>
                  <Button
                    variant="error"
                    disabled={!s31Saved}
                    onClick={handleEdit31}
                  >
                    Edit
                  </Button>
                </div>
              </>
            )}
          </div>
        </SectionBox>

        {/* ═══ SECTION 3.2 — Property boundary details ════ */}
        <SectionBox
          number="3.2"
          title="Property boundary details"
          open={s32Visible}
          className="pd-s32-box"
        >
          {/* Area Details Subsection */}
          <PropertyDetails_AreaDetails
            areaFetched={areaFetched}
            unit={unit}
            setUnit={setUnit}
            areaSqft={areaSqft}
            setAreaSqft={setAreaSqft}
            areaSqmt={areaSqmt}
            setAreaSqmt={setAreaSqmt}
            onAccept={() => {/* proceed to Site Dimensions */}}
            onReject={() => {/* REJECT FLOW - to be implemented later */}}
          />
          <div className="pd-s32__divider" />
          {/* Site Dimensions Subsection */}
          <PropertyDetails_SiteDimensions
            siteDimsFetched={siteDimsFetched}
            areaDetails={{ areaSqft, areaSqmt }}
            onSuccess={() => {/* proceed to Checkbandi */}}
            onMismatch={() => {/* MISMATCH - to be implemented later */}}
          />
          <div className="pd-s32__divider" />
          {/* Checkbandi Details Subsection */}
          <PropertyDetails_Checkbandi
            checkbandiFetched={checkbandiFetched}
            onSave={() => onNavigate && onNavigate('step4')}
          />
        </SectionBox>

      </div>

      {/* ── Fullscreen overlays ───────────────────────── */}
      {searchStatus === 'loading' && (
        <div className="pd-page__overlay">
          <ProgressCircle size={80} percentage={60} />
        </div>
      )}

      {searchStatus === 'error' && (
        <div className="pd-page__overlay">
          <ErrorMessageCard
            message="Your exact property location was not found. Please choose a landmark near your property and proceed to add address details."
            onOk={handleErrorDismiss}
          />
        </div>
      )}
    </div>
  );
};

export default PropertyDetailsPage;
