import { useTranslation } from '../../i18n';
import './OwnerTable.css';

/* Mask identity doc number — show only last 4 digits */
const maskDocNo = (docNo) => {
  if (!docNo) return '';
  const digits = docNo.replace(/\s/g, '');
  const last4 = digits.slice(-4);
  return `XXXX XXXX XXXX ${last4}`;
};

const OwnerTable = ({
  identityDocNo = '',
  panchatantraName = '',
  verifiedName = '',
  gender = '',
  dob = '',
  address = '',
  className = '',
}) => {
  const { t } = useTranslation('step2');

  return (
    <table className={`owner-table ${className}`}>
      <tbody>
        {/* All rows share left column: Owner's Photograph */}
        <tr className="owner-table__row">
          <td className="owner-table__photo-cell" rowSpan={4}>
            <div className="owner-table__photo-header">{t('ot_photograph')}</div>
            <div className="owner-table__photo-area" />
          </td>
          <td className="owner-table__label" colSpan={2}>
            {t('ot_doc_no')}
          </td>
          <td className="owner-table__value" colSpan={2}>
            {maskDocNo(identityDocNo)}
          </td>
        </tr>

        {/* Row 2: Name comparison */}
        <tr className="owner-table__row">
          <td className="owner-table__label">{t('ot_panchatantra_name')}</td>
          <td className="owner-table__value">{panchatantraName}</td>
          <td className="owner-table__label">{t('ot_verified_name')}</td>
          <td className="owner-table__value">{verifiedName}</td>
        </tr>

        {/* Row 3: Gender + DOB */}
        <tr className="owner-table__row">
          <td className="owner-table__label">{t('ot_gender')}</td>
          <td className="owner-table__value">{gender}</td>
          <td className="owner-table__label">{t('ot_dob')}</td>
          <td className="owner-table__value">{dob}</td>
        </tr>

        {/* Row 4: Address */}
        <tr className="owner-table__row">
          <td className="owner-table__label">{t('ot_address')}</td>
          <td className="owner-table__value" colSpan={3}>
            {address}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OwnerTable;
