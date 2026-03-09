import './OwnerTable.css';

/**
 * OwnerTable — Aadhar eKYC details table shown in the eKYC popup.
 * Displays owner identity, name comparison (Panchatantra vs verified),
 * gender, DOB, and address in a key-value table layout.
 *
 * Props:
 *  - identityDocNo: string (Aadhar number / identity doc number)
 *  - panchatantraName: string
 *  - verifiedName: string
 *  - gender: string
 *  - dob: string (dd-mm-yyyy)
 *  - address: string
 */
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
        {/* Row 1: Identity Document No — spans full width */}
        <tr className="owner-table__row">
          <td className="owner-table__label owner-table__label--side" rowSpan={4}>
            Owner&apos;s Identity Document&nbsp;No.
          </td>
          <td className="owner-table__label" colSpan={2}>
            Owner&apos;s Identity Document No.
          </td>
          <td className="owner-table__value" colSpan={2}>
            {identityDocNo}
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

        {/* Row 4: Address — value spans 3 cols */}
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
