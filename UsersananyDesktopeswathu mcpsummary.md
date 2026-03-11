

---

## Phase 8 - Section 3.2 Completion + Section 3.3 ReviewDetails + Step 4 PropertyClassificationPage

### Session goal
Complete Section 3.2 (PropertyDetails subcomponents) and build the full Step 4 PropertyClassificationPage including Section 4.1 classification dropdown/docs/questionnaire and Section 4.2 survey number -> Surnoc/Hissa -> RTC Owner Details flow.

---

### Section 3.2 - Completed sub-components

#### PropertyDetails_AreaDetails.jsx/.css
- Kaveri-fetched area (1200 sq.ft) in frozenBlue Input; red Edit button to unlock
- 4 RadioButton unit options (sq.ft / sq.mt / guntas / yards)
- Bidirectional unit conversion (sq.ft <-> sq.mt etc.)
- Accept / Reject flow: Accept calls onAreaAccepted, Reject shows manual entry then calls onAreaAccepted with user value
- onAreaRejected callback fires if user does not proceed

#### PropertyDetails_SiteDimensions.jsx/.css
- Kaveri mock dims (30N / 30S / 40E / 40W ft)
- Even flow: 2x2 frozen dimension grid; computed sqft = NS x EW; shown in green success box
- Odd flow: polygon sides entry (variable rows) with computed sqft
- Area match check vs AreaDetails accepted value
- Callbacks: onAreaMatch({ ns, ew }) even or onAreaMatch({ type: 'odd', sides, calcSqft }) odd
- Proceed to Checkbandi CTA enabled after match confirmed

#### PropertyDetails_Checkbandi.jsx/.css
- 4 boundary frozen Input fields (North / South / East / West)
- Mock boundary strings pre-filled, red Edit buttons per field
- Save and Proceed CTA -> onSaveAndProceed(bounds) callback

#### PropertyDetails_ReviewDetails.jsx/.css (Section 3.3)
- Three stacked custom tables: Location | Area | Checkbandi
- Location table: address + lat/lng + site photo row
- Area table: total sqft + dimension breakdown row
- Checkbandi table: 4 boundary direction rows
- Tables use kaveri-table CSS pattern (212px label cells, grey bg)
- Border color override: #727272 (Figma spec)

#### PropertyDetailsPage.jsx - state wiring
- DEV_MODE = true (skips Section 3.1 interactions so Section 3.2 opens immediately)
- Sequential state: areaAccepted -> areaMatched -> s32Saved -> s33Visible
- Scroll refs: s32Ref, siteDimsRef, checkbandiRef, s33Ref
- Bottom nav CTA: Save and Proceed to Property Classification -> onNavigate('new-application-step4')

---

### Step 4 - PropertyClassificationPage

#### Files
| File | Description |
|---|---|
| src/pages/NewApplicationPage/steps/PropertyClassificationPage.jsx | Full Step 4 page |
| src/pages/NewApplicationPage/steps/PropertyClassificationPage.css | Styles |
| src/App.jsx | Added page === 'new-application-step4' route |

#### Architecture
All content (classification dropdown + document table + survey number flow + RTC table) lives inside ONE SectionBox (Section 4.1). A visual divider (pc-s41__divider) separates classification from survey number logically inside the same box body.

Pre-allocated height: .pc-s41-box .section-box__body has min-height: 2400px

---

### Section 4.1 - Classification + Document Upload + Questionnaire

#### Classification Dropdown (300px wide, mandatory *)
20 options: Agricultural, Revenue Site, Inam Land, Govt. Acquired Land, Converted Agricultural, Private Layout Converted, BDA Approved, BBMP Converted, BMRDA Converted, A-Khata (x4 variants), B-Khata (x4 variants), Mutation (x2 variants)

#### Document Upload Table (3 rows)
- Division Letter (mandatory *), Death Certificate (mandatory *), Will (non-mandatory)
- Columns: Sr. No. | Document Name | Upload (ViewFile, blue header th--upload) | Date (DatePicker) | Doc. No. (Input) | View

#### Questionnaire Modal
3-step flow -> suggests classification -> Apply button sets dropdown value. Backdrop overlay, page does not shift.

---

### Section 4.1 Body - Survey Number Flow (Stages)

Stage 1 (always visible after section opens):
- Village frozen Input (300px), Survey No.* editable Input (300px), Search button (94px) disabled until survey no entered
- Tooltip: Where to find your Survey Number

Stage 2 (after Search):
- Surnoc & Hissa No.* Dropdown (184px, mandatory), options: *2, *3, *4, *5, *6
- Fetch RTC Owner Details button (primary blue), DISABLED until dropdown selected
- ProgressCircle small while fetching
- Tooltip: Where to find your Surnoc and Hissa Number

Stage 3 (after Fetch):
- 3 frozen Inputs in a row (163px each, 32px gap): Survey No. | Surnoc (shows /, frozen) | Hissa No.
- RTC Owner Details Table
- Radio question: Are the owner details correct?

---

### RTC Owner Details Table (pc-rtc-table)
Total width ~1107px. Columns: Checkbox (45px) | Owner No. (80px) | Main Owner No. (80px) | Owner Name (276px) | Father Name (276px) | Land Code (80px) | Ext. Acre (80px) | Ext. Gunta (80px) | Ext. Fgunta (80px)
Header: background var(--secondary), height 90px, border #727272. Row height: 66px.
Each row has Checkbox variant=blue.
Mock data: 2 owners (Mohit Kumar Singh, Mohit Singh).

---

### Radio Question: Are the owner details correct?
- RadioButton, options Yes / No, default Yes
- State: ownerMatch (default 'yes')

IF YES: Save and Next button enables -> navigates to next section

IF NO:
- Add Owners Table (pc-addowner-table, 553px): No. (56px) | Owner name (flex, Input per row)
  - Full-width add-row button: 30px tall, background var(--primary-50), + icon centered
  - State: addOwners = [{ id, name }]
- Re-entry Fields (163px each, 32px gap): Survey No.* (editable) | Surnoc (frozen, shows /) | Hissa No.* (editable)

canSave42 condition: fetchDone AND (ownerMatch=yes OR (ownerMatch=no AND all addOwners names filled AND reSurveyNo and reHissaNo not empty))

---

### Checkbox Component Update

Checkbox.jsx: added variant prop; const colorClass = variant ?? color (variant takes priority)
Checkbox.css: added .checkbox--selected.checkbox--blue and .checkbox--intermediate.checkbox--blue (both use var(--primary) for background and border-color)
Usage: Checkbox variant=blue in RTC table rows

---

### Current Status

Step 3 - PropertyDetailsPage: COMPLETE (3.1 Property Search, 3.2 Property Boundary, 3.3 Review Details all done)

Step 4 - PropertyClassificationPage: IN PROGRESS
- 4.1 Classification Dropdown + Docs + Questionnaire modal: Done
- 4.2 Survey Number -> Surnoc/Hissa -> Fetch RTC -> Radio Q -> Yes/No flows: Done
- 4.3+ (remaining step 4 sections): Pending
