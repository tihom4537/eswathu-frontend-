import { useState } from 'react';
import Input from '../../../components/Input/Input';
import Dropdown from '../../../components/Dropdown/Dropdown';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Button from '../../../components/Button/Button';
import './BuildingDetails_TenantDetails.css';

const RELATIONSHIP_OPTIONS = [
  { value: 'husband',  label: 'Husband' },
  { value: 'wife',     label: 'Wife' },
  { value: 'son',      label: 'Son' },
  { value: 'daughter', label: 'Daughter' },
  { value: 'father',   label: 'Father' },
  { value: 'mother',   label: 'Mother' },
  { value: 'brother',  label: 'Brother' },
  { value: 'sister',   label: 'Sister' },
  { value: 'others',   label: 'Others' },
];

const REL_LABEL = Object.fromEntries(RELATIONSHIP_OPTIONS.map((o) => [o.value, o.label]));

const newRow = () => ({ id: Date.now() + Math.random(), tenantName: '', relationshipType: '', relationName: '', mobile: '' });

const BuildingDetails_TenantDetails = ({ onSave, onEdit }) => {
  const [hasTenants, setHasTenants] = useState(null); // null | 'yes' | 'no'
  const [rows, setRows]   = useState(() => [newRow()]);
  const [saved, setSaved] = useState(false);

  const canSave = hasTenants !== null && (
    hasTenants === 'no' ||
    rows.some(
      (r) => r.tenantName.trim() && r.relationshipType && r.relationName.trim() && r.mobile.trim().length === 10,
    )
  );

  const update = (id, field, value) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));

  const handleAddRow = () => setRows((prev) => [...prev, newRow()]);
  const handleRemove = (id) => setRows((prev) => prev.filter((r) => r.id !== id));

  const handleSave = () => { setSaved(true); onSave?.({ hasTenants, rows: hasTenants === 'yes' ? rows : [] }); };
  const handleEdit = () => { setSaved(false); onEdit?.(); };

  return (
    <div className="bd-tenant">

      {/* Yes / No question */}
      <div className="bd-tenant__yesno">
        <p className="bd-tenant__yesno-label">
          Are there Tenants living in the building?
          <span className="bd-tenant__required"> *</span>
        </p>
        <div className="bd-tenant__radio-row">
          <RadioButton
            name="hasTenants"
            label="Yes"
            value="yes"
            checked={hasTenants === 'yes'}
            onChange={() => !saved && setHasTenants('yes')}
            disabled={saved}
          />
          <RadioButton
            name="hasTenants"
            label="No"
            value="no"
            checked={hasTenants === 'no'}
            onChange={() => !saved && setHasTenants('no')}
            disabled={saved}
          />
        </div>
      </div>

      {/* Tenant table — only when Yes */}
      {hasTenants === 'yes' && (
        <>
          <p className="bd-tenant__title">
            Please add Details of All Tenants (if applicable for your property)
          </p>

          <div className="bd-tenant__table-outer">
            <table className="bd-tenant__table">
              <thead>
                <tr className="bd-tenant__header-row">
                  <th className="bd-tenant__th bd-tenant__th--no">Sl No.</th>
                  <th className="bd-tenant__th">Tenant Name</th>
                  <th className="bd-tenant__th">Relationship Type</th>
                  <th className="bd-tenant__th">Tenant Relation Name</th>
                  <th className="bd-tenant__th bd-tenant__th--mobile">Tenant Mobile No.</th>
                  {!saved && <th className="bd-tenant__th bd-tenant__th--del" />}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.id} className="bd-tenant__row">
                    <td className="bd-tenant__td bd-tenant__td--no">{i + 1}</td>
                    <td className="bd-tenant__td">
                      {saved ? row.tenantName : (
                        <Input
                          value={row.tenantName}
                          onChange={(e) => update(row.id, 'tenantName', e.target.value)}
                          placeholder="Enter name"
                          inputType="alpha"
                          className="bd-tenant__cell-field"
                        />
                      )}
                    </td>
                    <td className="bd-tenant__td bd-tenant__td--rel">
                      {saved ? (REL_LABEL[row.relationshipType] ?? row.relationshipType) : (
                        <Dropdown
                          options={RELATIONSHIP_OPTIONS}
                          value={row.relationshipType}
                          onChange={(e) => update(row.id, 'relationshipType', e.target.value)}
                          placeholder="Select"
                          className="bd-tenant__cell-field"
                        />
                      )}
                    </td>
                    <td className="bd-tenant__td">
                      {saved ? row.relationName : (
                        <Input
                          value={row.relationName}
                          onChange={(e) => update(row.id, 'relationName', e.target.value)}
                          placeholder="Enter name"
                          inputType="alpha"
                          className="bd-tenant__cell-field"
                        />
                      )}
                    </td>
                    <td className="bd-tenant__td bd-tenant__td--mobile">
                      {saved ? row.mobile : (
                        <Input
                          value={row.mobile}
                          onChange={(e) => update(row.id, 'mobile', e.target.value)}
                          placeholder="Enter mobile"
                          inputType="phone"
                          className="bd-tenant__cell-field"
                        />
                      )}
                    </td>
                    {!saved && (
                      <td className="bd-tenant__td bd-tenant__td--del">
                        <button className="bd-tenant__del-btn" onClick={() => handleRemove(row.id)}>
                          <span className="material-icons-outlined">close</span>
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            {!saved && (
              <button className="bd-tenant__add-btn" onClick={handleAddRow}>
                <span className="material-icons-outlined">add</span>
              </button>
            )}
          </div>
        </>
      )}

      {/* Save / Edit */}
      <div className="bd-tenant__actions">
        <Button variant="primary" disabled={saved || !canSave} onClick={handleSave}>
          Save Tenant Details
        </Button>
        <Button variant="error" disabled={!saved} onClick={handleEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default BuildingDetails_TenantDetails;
