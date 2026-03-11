import { useState } from 'react';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Button from '../../../components/Button/Button';
import IconButton from '../../../components/IconButton/IconButton';
import Tooltip from '../../../components/Tooltip/Tooltip';
import ProgressCircle from '../../../components/ProgressCircle/ProgressCircle';
import './BuildingDetails_ESCOMDetails.css';

const ESCOM_OPTIONS = [
  { value: 'BESCOM', label: 'BESCOM' },
  { value: 'MESCOM', label: 'MESCOM' },
  { value: 'HESCOM', label: 'HESCOM' },
  { value: 'CESCOM', label: 'CESCOM' },
  { value: 'GESCOM', label: 'GESCOM' },
];

const MOCK_ROWS = [
  {
    id: 1,
    ownerName: 'Mohit Kumar Singh',
    accountId: 'XXXXXXXXXX',
    address: '4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
];

const BuildingDetails_ESCOMDetails = ({ aboveComplete = false, onSave }) => {
  const [escomType, setEscomType] = useState('');
  const [accountId, setAccountId] = useState('');
  const [rrNumber, setRrNumber] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [rows, setRows] = useState([]);

  const canVerify = !verifying && aboveComplete && escomType && accountId.trim();

  const handleVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
      setRows(MOCK_ROWS);
      onSave?.({ escomType, accountId, rrNumber });
    }, 1500);
  };

  const removeRow = (id) => {
    const next = rows.filter((r) => r.id !== id);
    setRows(next);
    if (next.length === 0) {
      setVerified(false);
    }
  };

  return (
    <div className="bd-escom">
      <div className="bd-escom__main">
        <div className="bd-escom__left">
          {/* ESCOM Type */}
          <div className="bd-escom__row">
            <Dropdown
              label="ESCOM Type"
              required
              options={ESCOM_OPTIONS}
              value={escomType}
              onChange={(e) => setEscomType(e.target.value)}
              placeholder="Choose ESCOM Type"
              className="bd-escom__type-dropdown"
            />
          </div>

          {/* Account ID + RR Number */}
          <div className="bd-escom__row">
            <Input
              label="ESCOM 10-digit Account ID"
              required
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              placeholder="XXXXXXXXXXXXXX"
              inputType="numeric"
              className="bd-escom__input"
            />
            <Input
              label="RR Number"
              value={rrNumber}
              onChange={(e) => setRrNumber(e.target.value)}
              placeholder="XXXXXXXX"
              inputType="alphanumeric-code"
              className="bd-escom__input"
            />
          </div>
        </div>

        <Tooltip
          label="Where to find your ESCOM Account ID and RR number"
          caption="Click to view sample"
          className="bd-escom__tooltip"
        />
      </div>

      {/* Actions */}
      <div className="bd-escom__actions">
        {verifying && <ProgressCircle size="small" />}
        <Button variant="primary" disabled={!canVerify} onClick={handleVerify}>
          Fetch ESCOM Details
        </Button>
      </div>

      {/* Fetched ESCOM table – appears after successful verification */}
      {verified && rows.length > 0 && (
        <div className="bd-escom__fetched">
          <p className="bd-escom__fetched-label">
            Please check the fetched ESCOM meter Details
          </p>
          <div className="bd-escom__table-scroll">
            <div className="bd-escom__table-wrap">
              <table className="bd-escom__table">
                <thead>
                  <tr>
                    <th className="bd-escom__th bd-escom__th--no">No.</th>
                    <th className="bd-escom__th bd-escom__th--owner">Owner Name</th>
                    <th className="bd-escom__th bd-escom__th--acc">ESCOM Account ID</th>
                    <th className="bd-escom__th bd-escom__th--addr">Address</th>
                    <th className="bd-escom__th bd-escom__th--cancel">Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.id} className="bd-escom__tr">
                      <td className="bd-escom__td bd-escom__td--no">{i + 1}</td>
                      <td className="bd-escom__td">{row.ownerName}</td>
                      <td className="bd-escom__td">{row.accountId}</td>
                      <td className="bd-escom__td">{row.address}</td>
                      <td className="bd-escom__td bd-escom__td--cancel">
                        <IconButton
                          icon="close"
                          className="bd-escom__close-btn"
                          onClick={() => removeRow(row.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildingDetails_ESCOMDetails;
