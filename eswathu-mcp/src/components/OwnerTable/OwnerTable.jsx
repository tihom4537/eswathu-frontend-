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
  return (
    <table className={`owner-table ${className}`}>
      <tbody>
        {/* All rows share left column: Owner's Photograph */}
        <tr className="owner-table__row">
          <td className="owner-table__photo-cell" rowSpan={4}>
            <div className="owner-table__photo-header">Owner&apos;s Photograph</div>
            <div className="owner-table__photo-area" />
          </td>
          <td className="owner-table__label" colSpan={2}>
            Owner&apos;s Identity Document No.
          </td>
          <td className="owner-table__value" colSpan={2}>
            {maskDocNo(identityDocNo)}
          </td>
        </tr>

        {/* Row 2: Name comparison */}
        <tr className="owner-table__row">
          <td className="owner-table__label">Name as per Panchatantra</td>
          <td className="owner-table__value">{panchatantraName}</td>
          <td className="owner-table__label">Verified e-KYC name</td>
          <td className="owner-table__value">{verifiedName}</td>
        </tr>

        {/* Row 3: Gender + DOB */}
        <tr className="owner-table__row">
          <td className="owner-table__label">Gender</td>
          <td className="owner-table__value">{gender}</td>
          <td className="owner-table__label">Date of birth (dd-mm-yyyy)</td>
          <td className="owner-table__value">{dob}</td>
        </tr>

        {/* Row 4: Address */}
        <tr className="owner-table__row">
          <td className="owner-table__label">Address</td>
          <td className="owner-table__value" colSpan={3}>
            {address}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OwnerTable;
