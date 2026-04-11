import { useState, useRef, useEffect } from 'react';
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
import PropertyDetails_AreaDetails, { IS_GUNTA_FLOW } from './PropertyDetails_AreaDetails';
import PropertyDetails_SiteDimensions from './PropertyDetails_SiteDimensions';
import PropertyDetails_Checkbandi from './PropertyDetails_Checkbandi';
import PropertyDetails_AreaDetails_NoKaveri, { IS_GUNTA_FLOW_NK } from './PropertyDetails_AreaDetails_NoKaveri';
import PropertyDetails_SiteDimensions_NoKaveri from './PropertyDetails_SiteDimensions_NoKaveri';
import PropertyDetails_Checkbandi_NoKaveri from './PropertyDetails_Checkbandi_NoKaveri';
import PropertyDetails_ReviewDetails from './PropertyDetails_ReviewDetails';
import { useTranslation } from '../../../i18n';
import './PropertyDetailsPage.css';

/* ── Mock fetched address data ─────────────────────────── */
const MOCK_ADDRESS = {
  doorPlotNo: 'No. 6',
  buildingName: 'Vidhan Soudha',
  areaLocality: 'Sampige Nagar',
  latLng: '12.9716° N, 77.5946° E',
  pincode: '560001',
};

/*
 * DEV_MODE: skips section 3.1 search/address flow so you land directly in 3.2.
 */
const DEV_MODE = false;

const PropertyDetailsPage = ({
  onNavigate,
  username = '',
  onBack,
  onNext,
  isBackEnabled = true,
  currentBCStep = 2,
  completedBCSteps = [],
  onBCStepClick,
  bcStepNames = [],
  completionResetKey = 0,
  hasKaveri = true,
  onResetDownstream,
}) => {
  const { t } = useTranslation('step3');

  /* ── Road type options (translated) ──────────────────── */
  const ROAD_TYPE_OPTIONS = [
    { value: 'corner',        label: t('road_corner') },
    { value: 'two_side',      label: t('road_two_side') },
    { value: 'nh_bypass',     label: t('road_nh_bypass') },
    { value: 'sh_commercial', label: t('road_sh_commercial') },
    { value: 'district_main', label: t('road_district_main') },
    { value: 'other',         label: t('road_other') },
  ];

  /* ── Page-level completion (enables forward arrow) ──────── */
  const [isPageComplete, setIsPageComplete] = useState(false);

  useEffect(() => {
    if (completionResetKey > 0) setIsPageComplete(false);
  }, [completionResetKey]);

  /* ── Section 3.1 State ──────────────────────────────── */
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState(DEV_MODE ? 'found' : 'idle'); // idle | loading | error | found
  const searchAttempt = useRef(0);

  /* Address fields (frozen, fetched from geocode) */
  const [addressData, setAddressData] = useState(DEV_MODE ? { ...MOCK_ADDRESS } : null);
  const [clearedFields, setClearedFields] = useState({}); // { doorPlotNo: true, ... }

  /* Editable fields */
  const [roadType, setRoadType] = useState('');
  const [landmark, setLandmark] = useState('');

  /* Image upload */
  const [imageFile, setImageFile] = useState(null); // { name, url, status: 'success' | 'warning' }
  const fileInputRef = useRef(null);

  /* Section state */
  const [s31Saved, setS31Saved] = useState(DEV_MODE ? true : false);

  /* ── Section 3.2 State ──────────────────────────────── */
  const [s32Visible, setS32Visible] = useState(DEV_MODE ? true : false);
  const [areaAccepted, setAreaAccepted] = useState(false);
  const [acceptedAreaSqmt, setAcceptedAreaSqmt] = useState(0);
  const [acceptedUnit, setAcceptedUnit] = useState('');
  const [wasRejected, setWasRejected] = useState(false);
  const [areaMatched, setAreaMatched] = useState(false);
  const [s32Saved, setS32Saved] = useState(false);
  /* Increment to force-remount the AreaDetails component on Edit */
  const [areaDetailsKey, setAreaDetailsKey] = useState(0);

  /* ── Section 3.3 State ──────────────────────────────── */
  const [s33Visible, setS33Visible] = useState(DEV_MODE ? true : false);
  const [siteDimSummary, setSiteDimSummary] = useState(
    DEV_MODE ? { ns: '48', ew: '50' } : null
  );
  const [checkbandiData, setCheckbandiData] = useState(
    DEV_MODE
      ? { north: 'Shree Ram Nagar Layout', south: 'BDA Main Road', east: 'Survey No. 112/A', west: 'Kaveri Nagar Road' }
      : null
  );

  /* ── Section 3.1 edit warning ───────────────────────── */
  const [showEdit31Warn, setShowEdit31Warn] = useState(false);

  /* ── Scroll refs for smooth reveal ─────────────────── */
  const addressFormRef = useRef(null);
  const s32Ref = useRef(null);
  const siteDimsRef = useRef(null);
  const checkbandiRef = useRef(null);
  const s33Ref = useRef(null);

  /* ── Scroll into view when sections/subsections appear ─ */
  useEffect(() => {
    if (searchStatus === 'found' && addressFormRef.current) {
      addressFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchStatus]);

  useEffect(() => {
    if (s32Visible && s32Ref.current) {
      s32Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [s32Visible]);

  /* Derived: whether the selected unit skips Site Dimensions */
  const isGuntaFlow = hasKaveri ? IS_GUNTA_FLOW(acceptedUnit) : IS_GUNTA_FLOW_NK(acceptedUnit);

  useEffect(() => {
    if (areaAccepted && !isGuntaFlow && siteDimsRef.current) {
      siteDimsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [areaAccepted, isGuntaFlow]);

  useEffect(() => {
    const showCheckbandi = areaMatched || (areaAccepted && isGuntaFlow);
    if (showCheckbandi && checkbandiRef.current) {
      checkbandiRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [areaMatched, areaAccepted, isGuntaFlow]);

  useEffect(() => {
    if (s33Visible && s33Ref.current) {
      s33Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [s33Visible]);

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
    setAreaAccepted(false);
    setAcceptedAreaSqmt(0);
    setAcceptedUnit('');
    setWasRejected(false);
    setAreaMatched(false);
    setS32Saved(false);
    setS33Visible(false);
    setSiteDimSummary(null);
    setCheckbandiData(null);
  };

  /* ── Handlers: Section 3.2 ──────────────────────────── */
  const handleAreaConfirm = (sqmt, rejected, unit) => {
    /* Any new acceptance resets downstream sub-sections */
    setAreaMatched(false);
    setSiteDimSummary(null);
    setCheckbandiData(null);
    setS32Saved(false);

    if (!hasKaveri) {
      if (unit !== acceptedUnit) {
        setAreaAccepted(false);
      }
      if (sqmt > 0) setAreaAccepted(true);
    } else {
      setAreaAccepted(sqmt > 0);
    }
    setAcceptedAreaSqmt(sqmt);
    setAcceptedUnit(unit);
    setWasRejected(rejected);
  };

  const handleAreaMatch = (dimensions) => {
    setAreaMatched(true);
    setSiteDimSummary(dimensions);
  };

  const handleS32Complete = (bounds) => {
    setS32Saved(true);
    setCheckbandiData(bounds);
    setS33Visible(true);
  };

  const handleEdit32 = () => {
    setS33Visible(false);
    setS32Saved(false);
    setAreaAccepted(false);
    setAreaMatched(false);
    setSiteDimSummary(null);
    setCheckbandiData(null);
    setAcceptedAreaSqmt(0);
    setAcceptedUnit('');
    setWasRejected(false);
    setAreaDetailsKey((k) => k + 1);
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
        onNavigate={onNavigate}
        onLogout={() => onNavigate?.('login')}
      />

      <Stepper steps={bcStepNames} activeStep={currentBCStep} completedBCSteps={completedBCSteps} onStepClick={onBCStepClick} />

      {/* ── Step Header ───────────────────────────────── */}
      <StepHeader
        step={t('page_step_label')}
        title={t('page_title')}
        onBack={onBack}
        onNext={onNext}
        isBackEnabled={isBackEnabled}
        isNextEnabled={isPageComplete}
      />

      <div className="pd-page__sections">

        {/* ═══ SECTION 3.1 — Location Details ═══════════ */}
        <SectionBox
          number="3.1"
          title={t('s31_title')}
          open
          className="pd-s31-box"
        >
          <div className="pd-s31">

            {/* Sub-heading */}
            <p className="pd-s31__sub-heading">{t('s31_sub_location_search')}</p>

            {/* Info box */}
            <InfoBox variant="outline">
              {t('s31_infobox')}
            </InfoBox>

            {/* Search row + Map area */}
            <div className="pd-s31__map-area">

              {/* Search + button */}
              <div className="pd-s31__search-row">
                <Input
                  placeholder={t('s31_search_placeholder')}
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
                  {t('s31_search_btn')}
                </Button>
              </div>

              {/* Map placeholder */}
              <div className="pd-s31__map-frame">
                <div className="pd-s31__map-placeholder">
                  <img
                    src="/images/google-maps-satellite.jpg"
                    alt="Google Maps Satellite Placeholder"
                    className="pd-s31__map-img"
                  />
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
                <div className="pd-s31__divider" ref={addressFormRef} />
                <p className="pd-s31__sub-heading">{t('s31_address_sub')}</p>

                {/* Row 1: 3 columns */}
                <div className="pd-s31__addr-row pd-s31__addr-row--three">
                  <Input
                    label={t('s31_door_plot')}
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
                    label={t('s31_building_name')}
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
                    label={t('s31_area_locality')}
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
                    label={t('s31_lat_lng')}
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
                    label={t('s31_pincode')}
                    value={addressData.pincode}
                    onChange={(e) => setAddressData((prev) => ({ ...prev, pincode: e.target.value }))}
                    frozen={!clearedFields.pincode}
                    required
                    inputType="numeric"
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
                      label={t('s31_road_type_label')}
                      placeholder={t('s31_road_type_placeholder')}
                      options={ROAD_TYPE_OPTIONS}
                      value={roadType}
                      onChange={(e) => setRoadType(e.target.value)}
                      required
                      disabled={s31Saved}
                    />
                  </div>
                  <Input
                    label={t('s31_landmark')}
                    placeholder=""
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    required
                    disabled={s31Saved}
                  />
                </div>

                {/* Row 4: Property Image upload */}
                <div className="pd-s31__upload-section">
                  <span className="pd-s31__upload-label">
                    {t('s31_property_image')}<span className="pd-s31__required">*</span>
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
                      {t('s31_upload_btn')}
                    </Button>
                  )}

                  {/* Caption swaps based on upload status */}
                  {!imageFile && (
                    <CaptionMessage variant="error">
                      {t('s31_upload_caption')}
                    </CaptionMessage>
                  )}
                  {imageFile && imageFile.status === 'success' && (
                    <CaptionMessage variant="success">{t('s31_upload_success')}</CaptionMessage>
                  )}
                  {imageFile && imageFile.status === 'warning' && (
                    <CaptionMessage variant="warning">
                      {t('s31_upload_warning')}
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
                    {t('s31_save_btn')}
                  </Button>
                  <Button
                    variant="error"
                    disabled={!s31Saved}
                    onClick={() => setShowEdit31Warn(true)}
                  >
                    {t('s31_edit_btn')}
                  </Button>
                </div>
              </>
            )}
          </div>
        </SectionBox>

        {/* ═══ SECTION 3.2 — Property boundary details ════ */}
        {s32Visible && (
          <InfoBox variant="outline">
            {hasKaveri
              ? t('s32_infobox_kaveri')
              : t('s32_infobox_no_kaveri')}
          </InfoBox>
        )}
        <div ref={s32Ref}>
        <SectionBox
          number="3.2"
          title={t('s32_title')}
          open={s32Visible}
          className="pd-s32-box"
        >
          <div className="pd-s32">

            {/* ── Subsection A: Area Details ─────────────── */}
            {hasKaveri ? (
              <PropertyDetails_AreaDetails key={areaDetailsKey} onAccept={handleAreaConfirm} />
            ) : (
              <PropertyDetails_AreaDetails_NoKaveri key={areaDetailsKey} onAccept={handleAreaConfirm} />
            )}

            {/* ── Subsection B: Site Dimensions (skipped for Gunta/Acre/Cent) ── */}
            {!isGuntaFlow && (
              <>
                <div className="pd-s32__divider" />
                {areaAccepted ? (
                  <div ref={siteDimsRef}>
                    {hasKaveri ? (
                      <PropertyDetails_SiteDimensions
                        acceptedAreaSqmt={acceptedAreaSqmt}
                        wasRejected={wasRejected}
                        onAreaMatch={handleAreaMatch}
                      />
                    ) : (
                      <PropertyDetails_SiteDimensions_NoKaveri
                        acceptedAreaSqmt={acceptedAreaSqmt}
                        acceptedUnit={acceptedUnit}
                        onAreaMatch={handleAreaMatch}
                      />
                    )}
                  </div>
                ) : (
                  <p className="pd-s32__placeholder-heading">{t('s32_site_dim_placeholder')}</p>
                )}
              </>
            )}

            {/* ── Subsection C: Checkbandi ───────────────── */}
            <div className="pd-s32__divider" />
            {(areaMatched || (areaAccepted && isGuntaFlow)) ? (
              <div ref={checkbandiRef}>
                {hasKaveri ? (
                  <PropertyDetails_Checkbandi
                    onSaveAndProceed={handleS32Complete}
                    saved={s32Saved}
                    onEdit={handleEdit32}
                  />
                ) : (
                  <PropertyDetails_Checkbandi_NoKaveri
                    onSaveAndProceed={handleS32Complete}
                    saved={s32Saved}
                    onEdit={handleEdit32}
                  />
                )}
              </div>
            ) : (
              <p className="pd-s32__placeholder-heading">{t('s32_checkbandi_placeholder')}</p>
            )}

          </div>
        </SectionBox>
        </div>

        {/* ═══ SECTION 3.3 — Review Details ════════════ */}
        {s33Visible && (
          <div ref={s33Ref}>
            <SectionBox
              number="3.3"
              title={t('s33_title')}
              open
              className="pd-s33-box"
            >
              <PropertyDetails_ReviewDetails
                addressData={addressData}
                imageFile={imageFile}
                acceptedAreaSqmt={acceptedAreaSqmt}
                siteDimSummary={siteDimSummary}
                checkbandiData={checkbandiData}
              />
            </SectionBox>
          </div>
        )}

      </div>

      {/* ═══ BOTTOM NAVIGATION ════════════════════════════ */}
      {s33Visible && (
        <div className="pd-page__bottom-nav">
          <Button
            variant="primary"
            onClick={() => { setIsPageComplete(true); onNext?.(); }}
          >
            {t('save_and_proceed_btn')}
          </Button>
          <Button variant="error" onClick={handleEdit32}>
            {t('s31_edit_btn')}
          </Button>
        </div>
      )}

      {/* ── Fullscreen overlays ───────────────────────── */}
      {searchStatus === 'loading' && (
        <div className="pd-page__overlay">
          <ProgressCircle size={80} percentage={60} />
        </div>
      )}

      {searchStatus === 'error' && (
        <div className="pd-page__overlay">
          <ErrorMessageCard
            message={t('error_not_found_msg')}
            onOk={handleErrorDismiss}
          />
        </div>
      )}

      {/* ── Section 3.1 Edit warning modal ───────────────── */}
      {showEdit31Warn && (() => {
        const downstream = [];
        if (completedBCSteps.includes(3)) downstream.push(t('step4_short'));
        if (completedBCSteps.includes(4)) downstream.push(t('step5_short'));
        const suffix = downstream.length ? `, ${downstream.join(', ')}` : '';
        return (
          <div className="pd-page__overlay" onClick={() => setShowEdit31Warn(false)}>
            <div onClick={(e) => e.stopPropagation()}>
              <ErrorMessageCard
                message={`${t('edit31_warn_base')}${suffix}.`}
                subMessage={t('edit31_warn_sub')}
                actions={[
                  { label: t('yes_edit_btn'), onClick: () => { setShowEdit31Warn(false); onResetDownstream?.(); handleEdit31(); } },
                  { label: t('cancel_btn'),   onClick: () => setShowEdit31Warn(false) },
                ]}
              />
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default PropertyDetailsPage;
