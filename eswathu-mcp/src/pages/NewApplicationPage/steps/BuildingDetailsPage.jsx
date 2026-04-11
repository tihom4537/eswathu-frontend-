import { useState, useRef, useEffect } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import PageNavigation from '../../../components/PageNavigation/PageNavigation';
import PageHeading from '../../../components/PageHeading/PageHeading';
import SectionBox from '../../../components/SectionBox/SectionBox';
import InfoBox from '../../../components/InfoBox/InfoBox';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Button from '../../../components/Button/Button';
import BuildingDetails_GeneralFlow from './BuildingDetails_GeneralFlow';
import BuildingDetails_AreaDetails from './BuildingDetails_AreaDetails';
import BuildingDetails_MultiStoreyUsage from './BuildingDetails_MultiStoreyUsage';
import BuildingDetails_ParkingDetails from './BuildingDetails_ParkingDetails';
import BuildingDetails_UndividedLand from './BuildingDetails_UndividedLand';
import BuildingDetails_ESCOMDetails from './BuildingDetails_ESCOMDetails';
import BuildingDetails_TenantDetails from './BuildingDetails_TenantDetails';
import './BuildingDetailsPage.css';

/* ── Dropdown options ──────────────────────────────────────── */

const TYPE_OPTIONS = [
  { value: 'site',       label: 'Site' },
  { value: 'building',   label: 'Building' },
  { value: 'converted',  label: 'Land to be Converted' },
];

const CATEGORY_OPTIONS = [
  { value: 'residential',                            label: 'Residential' },
  { value: 'commercial',                             label: 'Commercial' },
  { value: 'parks',                                  label: 'Parks' },
  { value: 'roads',                                  label: 'Roads' },
  { value: 'civil-facilities',                       label: 'Civil Facilities Area (CA Sites)' },
  { value: 'industry',                               label: 'Industry' },
  { value: 'multi-ownership',                        label: 'Multi-Ownership Building' },
  { value: 'non-residential',                        label: 'Non-residential' },
  { value: 'agro-manufacturing',                     label: 'An agro-based manufacturing unit' },
  { value: 'res-commercial',                         label: 'Residential and Commercial' },
  { value: 'res-non-residential',                    label: 'Residential and Non-Residential' },
  { value: 'commercial-non-residential',             label: 'Commercial and Non-Residential' },
  { value: 'res-comm-non-res',                       label: 'Residential, commercial and non-residential' },
  { value: 'res-industrial',                         label: 'Residential and Industrial' },
  { value: 'commercial-industry',                    label: 'Commercial and Industry' },
  { value: 'res-comm-industrial',                    label: 'Residential, Commercial and Industrial' },
  { value: 'apartment',                              label: 'Apartment/ flat' },
  { value: 'villament',                              label: 'Villament' },
  { value: 'tenement',                               label: 'Tenement' },
  { value: 'row-house',                              label: 'Row House' },
  { value: 'multi-storied',                          label: 'Multi-storied building' },
  { value: 'service-apartment',                      label: 'Service apartment/ flat' },
  { value: 'mall-multiplex',                         label: 'Mall/Multiplex' },
  { value: 'villa',                                  label: 'Villa' },
  { value: 'govt-property',                          label: 'Central Government/State Government/Local Body Property' },
];

const CORNER_SITE_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no',  label: 'No' },
];

/* ── Flow classifiers ──────────────────────────────────────── */

/**
 * Apartment/flat flow — Building Type 2 in spec:
 * Apartment, Row House, Villa, Villament, Multi-storey, Multi-ownership
 * (plus service-apartment and tenement which follow the same sections)
 */
const APARTMENT_CATEGORIES = new Set([
  'apartment', 'villament', 'tenement', 'row-house',
  'multi-storied', 'service-apartment', 'villa', 'multi-ownership',
]);

/**
 * General building flow — Building Type 1 in spec:
 * All other building categories (residential, commercial, mixed-use, etc.)
 */
const GENERAL_BUILDING_CATEGORIES = new Set([
  'residential', 'commercial', 'parks', 'roads', 'civil-facilities',
  'industry', 'non-residential', 'agro-manufacturing',
  'res-commercial', 'res-non-residential', 'commercial-non-residential',
  'res-comm-non-res', 'res-industrial', 'commercial-industry',
  'res-comm-industrial', 'govt-property', 'mall-multiplex',
]);

const isApartmentFlow       = (type, cat) => type === 'building' && APARTMENT_CATEGORIES.has(cat);
const isGeneralBuildingFlow = (type, cat) => type === 'building' && GENERAL_BUILDING_CATEGORIES.has(cat);

export default function BuildingDetailsPage({
  onNavigate,
  onBack,
  onNext,
  isBackEnabled = true,
  currentBCStep = 3,
  completedBCSteps = [],
  onBCStepClick,
  bcStepNames = [],
  completionResetKey = 0,
}) {
  /* ── Page-level completion (enables forward arrow) ──────── */
  const [isPageComplete, setIsPageComplete] = useState(false);

  useEffect(() => {
    if (completionResetKey > 0) setIsPageComplete(false);
  }, [completionResetKey]);

  /* ── Opening dropdowns ───────────────────────────────────── */
  const [propertyType,     setPropertyType]     = useState('');
  const [propertyCategory, setPropertyCategory] = useState('');
  const [isCornerSite,     setIsCornerSite]      = useState('');

  const allDropdownsSelected  = propertyType && propertyCategory && isCornerSite;
  const showApartmentFlow     = allDropdownsSelected && isApartmentFlow(propertyType, propertyCategory);
  const showGeneralFlow       = allDropdownsSelected && isGeneralBuildingFlow(propertyType, propertyCategory);

  /* ── General flow state ─────────────────────────────────── */
  const [generalFlowSaved, setGeneralFlowSaved] = useState(false);

  /* ── Apartment flow sequential subsection state ─────────── */
  const [areaSaved,          setAreaSaved]         = useState(false);
  const [multiStoreyFilled,  setMultiStoreyFilled]  = useState(false);
  const [parkingFilled,      setParkingFilled]      = useState(false);
  const [undividedFilled,    setUndividedFilled]    = useState(false);
  const [escomSaved,         setEscomSaved]         = useState(false);
  const [tenantSaved,        setTenantSaved]        = useState(false);

  const aboveEscomComplete = multiStoreyFilled && parkingFilled && undividedFilled;

  /* ── Derived: page save enabled ─────────────────────────── */
  const allSaved =
    (showGeneralFlow  && generalFlowSaved) ||
    (showApartmentFlow && tenantSaved);

  /* ── Reset subsections when dropdowns change ─────────────── */
  const resetSubsections = () => {
    setGeneralFlowSaved(false);
    setAreaSaved(false);
    setMultiStoreyFilled(false);
    setParkingFilled(false);
    setUndividedFilled(false);
    setEscomSaved(false);
    setTenantSaved(false);
  };

  /* ── Scroll refs ─────────────────────────────────────────── */
  const areaRef      = useRef(null);
  const multiRef     = useRef(null);
  const parkingRef   = useRef(null);
  const undividedRef = useRef(null);
  const escomRef     = useRef(null);
  const tenantRef    = useRef(null);
  const generalRef   = useRef(null);
  const saveRef      = useRef(null);

  const scrollTo = (ref) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  /* Scroll when new sections appear */
  useEffect(() => {
    if (showApartmentFlow && areaRef.current)  scrollTo(areaRef);
    if (showGeneralFlow   && generalRef.current) scrollTo(generalRef);
  }, [showApartmentFlow, showGeneralFlow]); // eslint-disable-line
  useEffect(() => { if (areaSaved        && multiRef.current)     scrollTo(multiRef);     }, [areaSaved]);
  useEffect(() => { if (multiStoreyFilled && parkingRef.current)  scrollTo(parkingRef);   }, [multiStoreyFilled]);
  useEffect(() => { if (parkingFilled    && undividedRef.current) scrollTo(undividedRef); }, [parkingFilled]);
  useEffect(() => { if (undividedFilled  && escomRef.current)     scrollTo(escomRef);     }, [undividedFilled]);
  useEffect(() => { if (escomSaved       && tenantRef.current)    scrollTo(tenantRef);    }, [escomSaved]);
  useEffect(() => { if (allSaved         && saveRef.current)      scrollTo(saveRef);      }, [allSaved]);

  /* ── Edit handlers ───────────────────────────────────────── */
  const handleAreaEdit = () => {
    setAreaSaved(false);
    setMultiStoreyFilled(false);
    setParkingFilled(false);
    setUndividedFilled(false);
    setEscomSaved(false);
    setTenantSaved(false);
  };
  const handleEscomEdit  = () => { setEscomSaved(false); setTenantSaved(false); };
  const handleTenantEdit = () => { setTenantSaved(false); };

  return (
    <div className="bd-page">
      <NavigationBar variant="post-login" />

      {/* ── Page navigation arrows ─────────────────────────── */}
      <PageNavigation
        onBack={onBack}
        onNext={onNext}
        isBackEnabled={isBackEnabled}
        isNextEnabled={isPageComplete}
      />

      {/* Page heading */}
      <div className="bd-page__heading-wrap">
        <PageHeading subtitle="Step 4" title="Property Classification" />
      </div>

      <div className="bd-page__content">
        {/* ── Section 4.2: Property Type & Category Details ──── */}
        <SectionBox number="4.2" title="Property Type & Category Details" open>
          <div className="bd-page__body">

            {/* Opening three dropdowns */}
            <div className="bd-page__dropdown-row">
              <Dropdown
                label="Property Type"
                required
                options={TYPE_OPTIONS}
                value={propertyType}
                onChange={(e) => {
                  setPropertyType(e.target.value);
                  resetSubsections();
                }}
                placeholder="Select"
                className="bd-page__dropdown"
              />
              <Dropdown
                label="Property Category"
                required
                options={CATEGORY_OPTIONS}
                value={propertyCategory}
                onChange={(e) => {
                  setPropertyCategory(e.target.value);
                  resetSubsections();
                }}
                placeholder="Select"
                className="bd-page__dropdown"
              />
              <Dropdown
                label="Is it a corner site"
                required
                options={CORNER_SITE_OPTIONS}
                value={isCornerSite}
                onChange={(e) => setIsCornerSite(e.target.value)}
                placeholder="Choose Yes/No"
                className="bd-page__dropdown"
              />
            </div>

            {/* ════════════════════════════════════════════════
                GENERAL BUILDING FLOW
                Categories: residential, commercial, parks,
                roads, industry, govt, mall/multiplex, etc.
                ════════════════════════════════════════════════ */}
            {showGeneralFlow && (
              <>
                <InfoBox variant="blue">
                  Please keep sale deed document ready for entering the correct Building Details.
                </InfoBox>

                <div ref={generalRef} className="bd-page__section">
                  <BuildingDetails_GeneralFlow
                    onSave={() => setGeneralFlowSaved(true)}
                    onEdit={() => setGeneralFlowSaved(false)}
                  />
                </div>
              </>
            )}

            {/* ════════════════════════════════════════════════
                APARTMENT / FLAT FLOW
                Categories: apartment, row-house, villa,
                villament, multi-storied, multi-ownership, etc.
                ════════════════════════════════════════════════ */}
            {showApartmentFlow && (
              <>
                <InfoBox variant="blue">
                  Please keep sale deed document ready for entering the correct Building Details.
                </InfoBox>

                {/* Section 1 — Building Area Details */}
                <div ref={areaRef} className="bd-page__section">
                  <p className="bd-page__section-title">Building Area Details</p>
                  <BuildingDetails_AreaDetails
                    onSave={() => setAreaSaved(true)}
                    onEdit={handleAreaEdit}
                  />
                </div>

                {/* Section 2 — Details of Usage of Multi-Storey Flat */}
                <div className="bd-page__divider" />
                {areaSaved ? (
                  <div ref={multiRef} className="bd-page__section">
                    <p className="bd-page__section-title">Details of Usage of Multi-Storey Flat</p>
                    <BuildingDetails_MultiStoreyUsage
                      onChange={setMultiStoreyFilled}
                    />
                  </div>
                ) : (
                  <p className="bd-page__placeholder-heading">Details of Usage of Multi-Storey Flat</p>
                )}

                {/* Section 3 — Parking Details */}
                <div className="bd-page__divider" />
                {multiStoreyFilled ? (
                  <div ref={parkingRef} className="bd-page__section">
                    <p className="bd-page__section-title">Parking Details</p>
                    <BuildingDetails_ParkingDetails onChange={setParkingFilled} />
                  </div>
                ) : (
                  <p className="bd-page__placeholder-heading">Parking Details</p>
                )}

                {/* Section 4 — Undivided Land Details */}
                <div className="bd-page__divider" />
                {parkingFilled ? (
                  <div ref={undividedRef} className="bd-page__section">
                    <p className="bd-page__section-title">Undivided Land Details</p>
                    <BuildingDetails_UndividedLand onChange={setUndividedFilled} />
                  </div>
                ) : (
                  <p className="bd-page__placeholder-heading">Undivided Land Details</p>
                )}

                {/* Section 5 — ESCOM Details */}
                <div className="bd-page__divider" />
                {undividedFilled ? (
                  <div ref={escomRef} className="bd-page__section">
                    <p className="bd-page__section-title">ESCOM Details</p>
                    <BuildingDetails_ESCOMDetails
                      aboveComplete={aboveEscomComplete}
                      onSave={() => setEscomSaved(true)}
                    />
                  </div>
                ) : (
                  <p className="bd-page__placeholder-heading">ESCOM Details</p>
                )}

                {/* Tenant Details */}
                <div className="bd-page__divider" />
                {escomSaved ? (
                  <div ref={tenantRef} className="bd-page__section">
                    <p className="bd-page__section-title">Tenant Details</p>
                    <BuildingDetails_TenantDetails
                      onSave={() => setTenantSaved(true)}
                      onEdit={handleTenantEdit}
                    />
                  </div>
                ) : (
                  <p className="bd-page__placeholder-heading">Tenant Details</p>
                )}
              </>
            )}

            {/* ── Site / Land to be Converted — placeholder ────── */}
            {allDropdownsSelected && !showGeneralFlow && !showApartmentFlow && (
              <div className="bd-page__placeholder">
                <p className="bd-page__placeholder-text">
                  Details form for selected type and category — coming soon.
                </p>
              </div>
            )}

          </div>
        </SectionBox>

        {/* ── Placeholder: Section 4.3 Avail Rebates ─────────── */}
        <div className="bd-page__accordion-placeholder">
          <div className="bd-page__accordion-stub">
            <span className="bd-page__accordion-num">4.3</span>
            <span className="bd-page__accordion-label">Avail Rebates</span>
          </div>
        </div>

        {/* Save and Proceed */}
        <div ref={saveRef} className="bd-page__save-wrap">
          <Button
            variant="primary"
            disabled={!allSaved}
            onClick={() => { setIsPageComplete(true); onNext?.(); }}
          >
            Save and Proceed
          </Button>
        </div>

      </div>
    </div>
  );
}
