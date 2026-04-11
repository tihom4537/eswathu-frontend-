import Table from '../../../components/Table/Table';
import { useTranslation } from '../../../i18n';
import './PropertyDetails_ReviewDetails.css';

const PropertyDetails_ReviewDetails = ({
  addressData,
  imageFile,
  acceptedAreaSqmt,
  siteDimSummary,
  checkbandiData,
}) => {
  const { t } = useTranslation('step3');

  /* ── Derived display values ─────────────────────────── */
  const areaDisplay = acceptedAreaSqmt > 0
    ? `${parseFloat(acceptedAreaSqmt).toFixed(2)} ${t('rd_sqmts_suffix')}`
    : '—';

  const dimsDisplay = siteDimSummary
    ? siteDimSummary.type === 'odd'
      ? t('rd_odd_tpl').replace('{n}', siteDimSummary.sides)
      : `${siteDimSummary.ns} ft × ${siteDimSummary.ew} ft`
    : t('rd_na');

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
    <span className="pd-rd__no-photo">{t('rd_no_photo')}</span>
  );

  return (
    <div className="pd-rd">

      {/* ── Table 1: Location ──────────────────────────── */}
      <div className="pd-rd__table-wrap pd-rd__table-wrap--location">
        <Table
          columns={[t('rd_prop_address'), t('rd_lat_lng'), t('rd_prop_photo')]}
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
          columns={[t('rd_total_area_col'), t('rd_prop_dims_col'), t('rd_irregular_site')]}
          rows={[[
            areaDisplay,
            dimsDisplay,
            siteDimSummary
              ? (siteDimSummary.type === 'odd' ? t('rd_yes') : t('rd_no_val'))
              : t('rd_na'),
          ]]}
        />
      </div>

      {/* ── Table 3: Checkbandi ────────────────────────── */}
      <div className="pd-rd__table-wrap pd-rd__table-wrap--checkbandi">
        <Table
          columns={[t('cb_east'), t('cb_west'), t('cb_north'), t('cb_south')]}
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
          {t('rd_success_caption')}
        </span>
      </div>

    </div>
  );
};

export default PropertyDetails_ReviewDetails;
