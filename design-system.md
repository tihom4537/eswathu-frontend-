# Eswathu Design System

> Design system for the **E-Swathu 2.0** digital property document service — a property mutation/registration service for rural Karnataka citizens under the Department of Rural Development and Panchayati Raj, Government of Karnataka.

**Figma source file:** `kJ1WKNyGo5y7tZ2g8mM1vq`  
**Components section node:** `248:72020`  
**Icons section node:** `363:79894`

---

## Attributions

- **Icon library:** Google Material Icons — Outlined variant  
  License: Apache 2.0 — https://github.com/google/material-design-icons/blob/master/LICENSE  
  CDN: `https://fonts.googleapis.com/icon?family=Material+Icons+Outlined`
- **Font:** Noto Sans by Google Fonts  
  License: SIL Open Font License 1.1 — https://scripts.sil.org/OFL  
  CDN: `https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap`
- **Karnataka state seal:** Used per Government of India visual identity guidelines.
- **NIC logo (`assets/MyGov.png`):** Property of National Informatics Centre (NIC), Ministry of Electronics and Information Technology, Government of India — used per government portal branding guidelines.

---

## Design Tokens

### Colours
| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#0263C5` | Brand blue — buttons, borders, active states |
| `--primary-50` | `#E6F2FF` | Open section header background |
| `--primary-300` | `#68B2FD` | Focus ring glow |
| `--text-dark` | `#212121` | Primary body text |
| `--text-light` | `#FFFFFF` | Text on blue / dark backgrounds |
| `--white` | `#FFFFFF` | Input / card backgrounds |
| `--neutral-100` | `#DDDDDD` | Frozen input background; closed section border |
| `--neutral-300` | `#B0B0B0` | Disabled / closed section text and icons |
| `--neutral-400` | `#C6C6C6` | Default input border |
| `--neutral-500` | `#868686` | Placeholder text |
| `--neutral-600` | `#727272` | Caption / helper text |
| `--secondary` | `#F2F2F2` | Closed section box background |
| `--secondary-400` | `#999999` | Dropdown placeholder text |
| `--danger` | `#B7131A` | Error — borders, icons, text |
| `--success` | `#3C9718` | Success — borders, icons, text |
| `--warning` | `#B77224` | Warning — borders, icons, text |

### Typography
| Token | Family | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| `label-1` | Noto Sans | 500 Medium | 14px | 20px | 0.1px |
| `body-2` | Noto Sans | 400 Regular | 14px | 20px | 0.25px |
| `body-1` | Noto Sans | 400 Regular | 16px | 24px | 0.15px |
| `headline-3` | Noto Sans | 600 SemiBold | 28px | 32px | 0 |
| `headline-4` | Noto Sans | 600 SemiBold | 24px | 28px | 0 |
| `title-1` | Noto Sans | 500 Medium | 22px | 28px | 0 |
| `headline-5` | Noto Sans | 600 SemiBold | 20px | 24px | 0 |

### Spacing
| Token | Value |
|---|---|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 12px |
| `--space-lg` | 16px |
| `--space-xl` | 20px |
| `--space-2xl` | 24px |
| `--space-3xl` | 32px |

### Border Radius
| Token | Value |
|---|---|
| `--radius-none` | 0px |
| `--radius-xs` | 4px |
| `--radius-md` | 8px |

### Shadows
| Token | Value |
|---|---|
| `shadow-sm` | `0px 2px 3px 1px rgba(33,33,33,0.12)` |
| `shadow-card` | `0px 4px 6px -2px rgba(33,33,33,0.03), 0px 12px 16px -4px rgba(33,33,33,0.08)` |

---

## Page Flows (Figma Sections)

| Section name | Description |
|---|---|
| **Homepage** | Public homepage — hero, service cards, FAQ, help, footer |
| **User has KAVERI** | Main flow — user has Kaveri property records |
| **User DOES not HAVE KAVERI** | Main flow — without Kaveri |
| **Property details - yes kaveri** | Property details screen (Kaveri flow) |
| **Property details - yes kaveri with objections** | Property details with objections |
| **Property details - no kaveri** | Property details without Kaveri |
| **Property classification - all except gram tana** | Property classification steps |
| **Property classification - gram tana** | Gram tana classification variant |
| **Owner KYC - Fetched from Kaveri** | Owner KYC auto-filled from Kaveri |
| **Owner KYC - No kaveri Workflow** | Owner KYC manual entry |
| **Owner KYC - Fetched from Kaveri but want to add owners** | Adding extra owners |
| **Building details and rebate (site)** | Building info — site type |
| **Building details and rebate (building-general)** | Building info — general |
| **Building details and rebate (building-apartment)** | Building info — apartment |
| **Area details mismatch** | Error state for area discrepancy |
| **EC and Save** | Encumbrance Certificate fetch and save |
| **eKYC error states** | eKYC error flow variants |

---

## Components

All 33 components listed here are sourced exclusively from the dedicated **Components** section (`248:72020`) of the Figma file. Elements found only inside screen/page designs are not catalogued here.

> **Note:** SectionBoxes (Open/Closed) replaces the previous AccordionItem (`11:6353`) which was not in this section.

---

### 1. NavigationBar
**Figma frame:** `363:90141`

| Variant | Symbol ID | Size | Use on |
|---|---|---|---|
| Homepage (pre-login) | `363:89914` | 1440 × 230px | Homepage |
| Post-login | `13:2794` | 1440 × 264px | All authenticated screens |

Homepage nav: Karnataka seal + NIC logo (left), site title, nav links, login button.  
Post-login nav: user greeting, breadcrumb, logout.  
Assets: `assets/Karnataka.png` (Karnataka seal), `assets/MyGov.png` (NIC logo).

---

### 2. Footer
**Figma frame:** `363:90243`

| Variant | Symbol ID | Size | Use on |
|---|---|---|---|
| Homepage | `363:90241` | 1440 × 792px | Homepage |
| Post-login | `363:90242` | 1440 × 186px | Authenticated screens |

---

### 3. Stepper
**Figma frame:** `249:71981`

Horizontal progress bar for multi-step forms. Always full-width (1440px, 132px tall), placed directly below the NavigationBar.

| Step active | Symbol ID |
|---|---|
| Step 1 | `249:71980` |
| Step 2 | `249:71979` |
| Step 3 | `249:71977` |
| Step 4 | `249:71976` |
| Step 5 | `249:71978` |

---

### 4. PageHeading
**Figma symbol:** `371:83349`  
1200 × 81px. Current page/flow title. Placed below the Stepper on form pages.

---

### 5. SectionBoxes
**Figma frame:** `330:79819`

The primary layout unit for all multi-section forms. Acts as an accordion: collapsed row or expanded card.

| Variant | Symbol ID |
|---|---|
| `Open` | `330:79818` |
| `Closed/Disabled` | `330:79817` |

**Closed:**
- Background `#F2F2F2`, border-bottom 1px `#DDDDDD`, radius 8px
- Section number: headline-3 `#B0B0B0`; Title: title-1 `#B0B0B0`
- Padding 16px vertical / 20px horizontal

**Open:**
- Header bg `#E6F2FF`, top radius 8px only
- Body bg white, border `#CED4DA` all sides, shadow `shadow-card`
- Section number: headline-3 black; Title: headline-4 black
- Header padding 16px; Body padding 32px top-bottom / 24px left-right
- Full width: 1200px

**Rule:** Only one section is Open at a time. Sections unlock sequentially as the user submits each one.

---

### 6. FillInTheBlanks
**Figma frame:** `291:82616`

Standard labelled text input with optional caption/validation message. 8 states.

| State | Symbol ID | Border | Background |
|---|---|---|---|
| Empty | `291:82617` | `#C6C6C6` | White |
| Empty (alt) | `408:83456` | `#C6C6C6` | White |
| Hover | `291:82662` | `#0263C5` | White |
| Filled | `319:78745` | `#C6C6C6` | White |
| Focused | `291:82752` | `#C6C6C6` + focus ring | White |
| Error | `291:82797` | `#B7131A` | White |
| Success | `291:82842` | `#3C9718` | White |
| Warning | `291:82887` | `#B77224` | White |
| Frozen / autofetched | `330:79799` | `#C6C6C6` | `#DDDDDD` |
| Frozen with edit | `470:83704` | `#C6C6C6` | `#DDDDDD` |

Focus ring: `box-shadow: 0 0 0 4px #68B2FD`

**Anatomy:**
```
[Label]  [* required]  [ⓘ optional info icon]
┌─────────────────────────────┐
│  Placeholder / value        │
└─────────────────────────────┘
ⓘ  Caption / helper text
```

Width 358px (stretch to container), padding 12px, radius 8px, label font `label-1`, input font `body-2`.

**Frozen with edit variant (`470:83704`):**
Same as Frozen (gray `#DDDDDD` background, `#C6C6C6` border) but includes a trailing close (`close`) icon button with a `#B7131A` (danger) border and icon colour. Clicking the close icon unfreezes the field to allow editing. Used for auto-fetched values (e.g. Kaveri location fields) that the user may need to correct.

**Decorator sub-elements:** `Leading_icon` (left icon), `Trailing_icon` (right icon).

---

### 7. DropdownBox
**Figma frame:** `329:80052`

Select dropdown with up to 5 nesting levels (for hierarchical selects, e.g. State → District → Taluk).

| State | Symbol ID |
|---|---|
| Closed | `329:80083` |
| Closed-L1 | `329:80087` |
| Closed-L2 | `329:80091` |
| Closed-L3 | `329:80095` |
| Closed-L4 | `329:80099` |
| Closed-L5 | `329:80103` |
| Opened | `329:80078` |
| Opened-L1 | `329:80073` |
| Opened-L2 | `329:80068` |
| Opened-L3 | `329:80063` |
| Opened-L4 | `329:80058` |
| Opened-L5 | `329:80053` |

Closed: 260 × 43px, padding 11px/24px, radius 8px. Placeholder `#999999` → selected `#212121`. Chevron rotates on open.  
Items: 42px tall, `overflow: clip`, bottom-corners rounded.

**Dropdown Item (ItemHover frame `329:80107`):**

| State | Symbol ID |
|---|---|
| Default | `329:80108` |
| Hover | `329:80116` |
| Pressing | `329:80124` |
| Selected | `329:80132` |

**Dropdown Header (frame `329:80140`):**

| State | Symbol ID |
|---|---|
| Empty | `329:80141` |
| Active | `329:80150` |

---

### 8. RadioButtonsBlue
**Figma frame:** `320:79061`

Blue radio buttons for single-select groups.

| Selected | State | Symbol ID |
|---|---|---|
| True | Default | `320:79062` |
| True | Hover | `320:79068` |
| True | Pressed | `320:79074` |
| True | Focused | `320:79080` |
| True | Disabled | `320:79086` |
| False | Enabled | `320:79092` |
| False | Hover | `320:79097` |
| False | Pressed | `320:79102` |
| False | Focused | `320:79107` |
| False | Disabled | `320:79112` |

Hit area 24 × 24px; touch target 40 × 40px.

---

### 9. Button
**Figma frame:** `320:80645`

Three types, all same structure.

| Type | Background | Text | Border |
|---|---|---|---|
| `Primary` (Blue) | `#0263C5` | White | — |
| `white` | White | `#0263C5` | 1px `#0263C5` |
| `error` | `#B7131A` | White | — |

**States:**

| State | Primary Symbol | white Symbol | error Symbol | Visual |
|---|---|---|---|---|
| Default | `320:80658` | `373:83313` | `371:83315` | Normal |
| Hover | `320:80760` | `373:83315` | `371:83331` | + `shadow-sm` |
| Pressed | `320:80790` | `373:83411` | `371:83333` | opacity 0.9 |
| Focused | `320:80820` | — | — | focus ring |
| Disabled | `320:80730` | `373:83417` | `371:83335` | opacity 0.5, not-allowed |

Padding 10px/24px, radius 8px, font `label-1`. Icon on left with 8px gap when used.

---

### 10. ButtonUploadFile
**Figma frame:** `329:81854`

Outlined upload trigger button. 171 × 44px.

| State | Symbol ID | Border | Background |
|---|---|---|---|
| Default | `329:81853` | `#0263C5` | White |
| hover | `329:81855` | `#0263C5` | `rgba(2,99,197,0.08)` |
| pressed | `329:81860` | `#0263C5` | `rgba(2,99,197,0.24)` |
| Inactive | `329:81865` | `#727272` | `#EEEEEE` |

Icon: `upload_file` 28 × 28px. Label "Upload File", `body-1`. Radius 8px.

---

### 11. HomepageCTAButtons
**Figma frame (filled):** `270:70667`  
**Figma frame (outlined):** `270:70681`  
Hero CTA buttons on the homepage only. 200 × 40px each.

| Variant | Default | Hover |
|---|---|---|
| Filled blue | `270:70666` | `270:70665` |
| Outlined | `270:70680` | `270:70679` |

---

### 12. CardHomepage
**Figma frame:** `268:70563`

Service/feature card in the homepage grid. 357 × 253px.

| State | Symbol ID |
|---|---|
| Default | `268:70562` |
| Hover | `268:70561` |

---

### 13. HomepageSection
**Figma symbol:** `384:83458`  
1200 × 122px. Section heading block used to divide homepage content areas.

---

### 14. Carousel
**Figma symbol:** `384:83386`  
1440 × 502px. Horizontal carousel on the homepage.

---

### 15. HelpCards
**Figma frame:** `386:83667`

Help/support content cards. 1300px wide.

| Variant | Symbol ID |
|---|---|
| Default | `386:83666` |
| With button | `386:83908` |

---

### 16. TableHeader
**Figma symbol:** `320:78980`  
1107 × 50px. Header row for data tables.

---

### 17. TableContents
**Figma frame:** `320:82887`

Table body rows.

| Type | Symbol ID | Height | Description |
|---|---|---|---|
| Default | `320:78981` | 40px | Standard text row |
| Icons | `320:82888` | 64px | Row with icon cells |
| Fill in the blanks | `320:82900` | 64px | Row with inline inputs |

---

### 18. TableWithButton
**Figma symbol:** `386:84305`  
1107 × 148px. Table with an action button in the last row.

---

### 18a. KaveriTable (Custom Page-level Variant)
**Used in:** SaleDeedDetailsPage Section 1.1, inside CollapseHeader  
**Not a Figma component** — built from screen frame `67:4139`.  
Custom 4-sub-table layout for displaying Kaveri registration data. All sub-tables share a common style: 1px #666 borders, grey (`--secondary`) label cells, white value cells, no hover effects.

**Sub-table 1 — Registration Info** (4 rows × 4 columns):  
Key-value grid. Each row: `[label | value | label | value]`.  Cells: label = 212px fixed width, grey bg, font-weight 500; value = flex-1, white bg, color #666, font-weight 500.  
Fields: Registration number, Village, Nature of deed, Hobli, Property ID, SRO name, Document ID, Zone name.

**Sub-table 2 — Boundaries** (2 rows × 5 columns):  
Header row (grey bg): Directions | East | West | North | South.  
Body row: Checkbandi | value | value | value | value.  
Label column = 212px fixed, direction cells = flex-1 equal width.

**Sub-table 3 — Schedule** (2 rows):  
Row 1: `[Schedule type | value | Property area | value]` (same 4-col layout as registration).  
Row 2: `[Schedule description | value spanning remaining 3 columns]`.

**Sub-table 4 — Party Details** (N parties, 2 rows each):  
Left block (flex-1): Party Name row + Party type row.  
Right block (flex-1): Party Address label + value (spans 2 rows vertically).  
All cells follow same border/color pattern.

**CSS classes (in SaleDeedDetailsPage.css):**  
`.kaveri-table` — flex-column container  
`.kaveri-table__row` — flex row, height 40px, 1px #666 border  
`.kaveri-table__label` — 212px, grey bg, font 16px/20px medium  
`.kaveri-table__value` — flex-1, white bg, 16px/20px medium #666  
`.kaveri-table__spacer` — 30px vertical gap between sub-tables  
`.kaveri-table__bnd-*` — boundaries table cells  
`.kaveri-table__party` — party block (flex row, 80px height)  

**Reuse note:** If future pages need similar key-value table displays, extract these styles into a shared `KaveriTable` component or a `KeyValueTable` variant of `<Table />`.

---

### 19. InfoBox
**Figma frame:** `363:79412`  
1107 × 46px. Full-width horizontal notice banner.

| Variant | Symbol ID | Style |
|---|---|---|
| Info Box - Outline | `363:79411` | Blue border, white bg — for information/notices |
| Info Box - Red | `363:79410` | Red border, light-red bg — for warnings/blocking alerts |

---

### 20. CaptionMessage
**Figma frame:** `363:79426`

Inline validation message shown directly beneath input fields.

| Variant | Symbol ID | Colour |
|---|---|---|
| Error | `363:79425` | `#B7131A` + error icon |
| Success | `363:79424` | `#3C9718` + check icon |

---

### 21. ErrorMessageCard
**Figma symbol:** `330:79866`  
512 × 280px. Full error state card — use when an entire operation fails (e.g. Kaveri fetch error, eKYC failure).

| Prop | Type | Description |
|---|---|---|
| `message` | string | Primary error message (22px, white) |
| `subMessage` | string (optional) | Secondary hint text below message (13px, grey #B0B0B0) |
| `onOk` | () => void | Callback when OK button is clicked |
| `className` | string | Optional extra class |

---

### 22. ViewIcon
**Figma frame:** `109:22098`

Icon button (45 × 44px) for view/eye actions in tables/cards.

| State | Symbol ID |
|---|---|
| Default | `109:22099` |
| Hover | `329:81827` |
| Pressed | `329:81829` |
| Inactive | `109:22097` |

---

### 23. ProgressCircle
**Figma frame:** `356:79269`  
160 × 160px. Circular progress indicator.

| Variant | Symbol ID |
|---|---|
| Label=True | `356:79303` |

Show on any async operation. Disable the triggering button while visible. Remove on response.

---

### 24. QuestionnaireFillInTheBlanks
**Figma symbol:** `330:79840`  
538.5 × 56px. Compact input variant for the property classifier questionnaire screens.  
_(Figma source name is "Quesstionnaire fields" — typo in the file, one extra 's'.)_

---

### 25. KarnatakaLogo
**Figma instance:** `367:79331`  
40 × 40px. Government of Karnataka state seal. Left side of NavigationBar.

---

### 26. NICLogo
**Figma instance:** `367:79271`  
**Asset:** `assets/MyGov.png`  
40 × 40px. National Informatics Centre (NIC) logo. Right of KarnatakaLogo in NavigationBar.

---

### 27. IconButton
**Figma frame:** `408:83707`

Square icon container — any Material Icons Outlined icon can be placed inside. **Only the outlined variant of icons is used.** 32 × 32px outer, 20 × 20px icon, padding 6px, radius 8px.

| Colour | Size | Symbol ID | Dimensions | Icon colour |
|---|---|---|---|---|
| `black` | Default | `408:83517` | 32 × 32px (icon 20px) | `#212121` |
| `grey` | Default | `408:83708` | 32 × 32px (icon 20px) | `#868686` |
| `blue` | Default | `408:83713` | 32 × 32px (icon 20px) | `#0263C5` |
| `colour4` | Large | `419:83537` | 66 × 66px (icon 55px) | — |

Usage: standalone icon actions in tables, headers, toolbars. Pass the icon name as a prop. The `large` size variant is for prominent icon placements (e.g. feature icons on cards).

---

### 28. DatePicker
**Figma frame:** `408:83532`

Labelled date input with a calendar icon trigger. Same anatomy as FillInTheBlanks (label → input → caption). Width 358px, input height 43px.

| State | Symbol ID | Border | Background |
|---|---|---|---|
| Empty | `408:83531` | `#C6C6C6` | White |
| Empty (alt) | `408:83677` | `#C6C6C6` | White |
| Hover | `408:83561` | `#0263C5` | White |
| Filled | `408:83582` | `#C6C6C6` | White |
| Error | `408:83603` | `#B7131A` | White |
| Success | `408:83624` | `#3C9718` | White |
| Frozen | `408:83645` | `#C6C6C6` | `#DDDDDD` |

**Anatomy:**
```
[Label]
┌───────────────────────────┬──────┐
│  DD-MM-YYYY               │  📅  │
└───────────────────────────┴──────┘
ⓘ  Caption / helper / error text
```

The trailing calendar icon is an `IconButton` (black variant) with the `calendar_today` icon. Input padding 12px left / 8px right, radius 8px, font `body-2`. Caption uses same pattern as FillInTheBlanks (info icon for neutral, error icon for error, check icon for success).

---

### 29. Checkbox
**Figma frame:** `408:84277`

Standard checkbox with three visual types, five interaction states, and two colour variants. 24 × 24px hit area, 18 × 18px container, radius 4px.

| Type | State | Colour | Symbol ID |
|---|---|---|---|
| `Selected` | Enabled | Default | `408:84278` |
| `Selected` | Hover | Default | `408:84283` |
| `Selected` | Pressed | Default | `408:84288` |
| `Selected` | Focused | Default | `408:84293` |
| `Selected` | Disabled | Default | `408:84298` |
| `Selected` | Enabled | Green | `419:83549` |
| `Selected` | Hover | Green | `419:83559` |
| `Selected` | Pressed | Green | `419:83569` |
| `Selected` | Focused | Green | `419:83564` |
| `Selected` | Disabled | Green | `419:83554` |
| `Intermediate` | Enabled | Default | `408:84303` |
| `Intermediate` | Hover | Default | `408:84308` |
| `Intermediate` | Pressed | Default | `408:84313` |
| `Intermediate` | Focused | Default | `408:84318` |
| `Intermediate` | Disabled | Default | `408:84323` |
| `Unselected` | Enabled | Default | `408:84328` |
| `Unselected` | Hover | Default | `408:84332` |
| `Unselected` | Pressed | Default | `408:84336` |
| `Unselected` | Focused | Default | `408:84340` |
| `Unselected` | Disabled | Default | `408:84344` |

**Styles:**
- Selected/Intermediate container (Default colour): `background: #0263C5`, check/dash icon white
- Selected container (Green colour): `background: #3C9718` (`--success`), check icon white
- Unselected container: `border: 2px solid #868686`, transparent bg
- Focused: `box-shadow: 0 0 0 4px rgba(2,99,197,0.48)`
- Disabled: `opacity: 0.38`
- Disabled selected container: `background: #212121` (neutral) at 0.38 opacity

---

### 30. Search
**Figma frame:** `408:84125`

Search bar with leading search icon and optional trailing voice/mic icon. Width 358px, height 56px, radius 8px.

| State | Symbol ID | Border | Background |
|---|---|---|---|
| Default | `408:84126` | `#DDDDDD` | White |
| Hover | `408:84150` | `#0263C5` | White |
| Focused | `408:84162` | `#0263C5` + focus ring | White |
| Filled | `408:84174` | `#DDDDDD` | White |
| Disabled | `408:84138` | `#DDDDDD` | White, `opacity: 0.5` |

**Anatomy:**
```
┌──🔍──[  Search for ...           ]──🎤──┐
└──────────────────────────────────────────┘
```

Leading icon: `search` (24 × 24px) in `IconButton` container with 8px padding. Content area: font `body-1` (16px), placeholder colour `rgba(33,33,33,0.48)`, filled text `#212121`. Optional trailing mic icon: `mic` (24 × 24px). Focus ring: `box-shadow: 0 0 0 4px rgba(2,99,197,0.48)`.

---

### 31. CollapseHeader
**Figma frame:** `415:83881`

Collapsible content section with a header bar and expandable body. Width 1107px. Differs from SectionBoxes: CollapseHeader is for **data tables or content groups within a section** (e.g. Kaveri table), while SectionBoxes is for **top-level form sections** with sequential unlock.

| State | Symbol ID | Description |
|---|---|---|
| `open` | `415:83880` | Header + content area visible (1107 × 201px total) |
| `closed` | `415:83882` | Header only (1107 × 62px) |

**Header:**
- Background: `#E6E6E6` (`--secondary/100`)
- Radius: 8px
- Padding: 16px vertical / 20px horizontal
- Title: font `title-1` (22px, 500 weight), colour `#212121`
- Trailing chevron icon: rotates (points right when closed, down when open)

**Body (open state):**
- White background, border `#CED4DA` all sides, radius 8px
- Content area below the header — flexible height for child content

---

### 32. FillInTheBlanks (new Empty variant)
**Figma symbol:** `408:83456`

A second "Empty" variant of FillInTheBlanks with the same dimensions and styling as `291:82617`. This may represent a variant without the info icon in the caption area, or an alternative label layout. Use interchangeably with the original Empty state.

---

### 33. HelpCardList
**Figma symbol:** `419:83628`

Content card for displaying property type/form descriptions with a checklist of eligible criteria. Width 604px, height ~440px. Used on the homepage or help section.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  [Subtitle — e.g. "Form 11B · Khata"]   │  ← body-2, #727272
│  [Title — e.g. "11B — Outside GramTrana  │  ← headline-5, #212121
│   Land"]                                 │
│                                          │
│  [Description paragraph]                 │  ← body-2, #212121
│                                          │
│  ┌─ ✓ ─ Eligibility item 1 ───────────┐ │  ← bg #F2F2F2, radius 8px
│  └─────────────────────────────────────┘ │
│  ┌─ ✓ ─ Eligibility item 2 ───────────┐ │
│  └─────────────────────────────────────┘ │
│  ┌─ ✓ ─ Eligibility item 3 ───────────┐ │
│  └─────────────────────────────────────┘ │
│  ...                                     │
└──────────────────────────────────────────┘
```

**Styles:**
- Border: 1px `#CDE5FE` (`--primary/100`), radius 8px, overflow clip
- Background: white
- Padding: 30px
- Subtitle: font `body-2` (14px), colour `#727272` (`--text/hint`)
- Title: font `headline-5` (20px, 600 weight), colour `#212121`
- Description: font `body-2`, colour `#212121`
- Checklist items: `background: #F2F2F2`, radius 8px, padding 5px/10px, gap 10px between items
- Checklist icon: green `check_circle` (24 × 24px)
- Checklist text: font `body-2`, colour `#212121`

---

### 34. Tooltip
**Figma symbol:** `440:83623`  
**Screen usage:** `11:5332` (Yes Kaveri-2 screen)

Contextual help card that shows an info label on the left and a sample image on the right. Used next to form fields to tell users where to find a particular piece of information (e.g. registration number, asset number).

**Anatomy:**
```
┌─────────────────────────────────────────────┐
│  Where to find your    │  ┌──────────────┐  │
│  Registration Number   │  │   (image)    │  │
│                        │  └──────────────┘  │
│                        │  ⓘ Click to view   │
│                        │    sample           │
└─────────────────────────────────────────────┘
```

**Props:** `label` (string), `imageSrc` (url), `imageAlt` (string), `caption` (string), `className`

**Styles (from Figma `440:83623`):**
- Width: 380px, box-sizing border-box
- Background: white, radius 8px (no border on card)
- Padding: 20px top, 15px bottom, 15px left, 15px right
- Inner layout: flex row, gap 8px, align-items flex-start
- **Label section (left):** flex 1, min-width 0, flex row, gap 8px, align-items flex-start
  - Icon: `info_outline`, 16px, `--text-dark`, flex-shrink 0, margin-top 2px
  - Text: `label-1` (14px, weight 500, line-height 20px, letter-spacing 0.1px), colour `--text-dark`
- **Media section (right):** width 171px, flex-shrink 0, flex-col, gap 4px
  - Image: **141 × 104px**, object-fit cover, border 1px `#C6C6C6`, radius 2px
  - Caption: flex row, gap 4px, align-items center, width 171px
    - Icon: `info_outline`, 16px, `--neutral-600`
    - Text: `body-2` (14px, weight 400, line-height 20px, letter-spacing 0.25px), colour `--neutral-600`

**Page layout context:**
- Placed in a flex row (gap 48px) beside the input field block (350px fixed width)
- The tooltip itself is 380px (shrink-0)

---

### 35. StepHeader
**Figma symbol:** `442:83634`

Grey banner used at the top of each step page in the new-application flow. Displays a step label and title on the left, with optional children (e.g. Stepper) on the right.

**Anatomy:**
```
┌──────────────────────────────────────────────────────────┐
│  Step 1                                    [  Stepper  ] │
│  Sale/ property registration deed details                │
└──────────────────────────────────────────────────────────┘
```

**Props:** `step` (string — e.g. "Step 1"), `title` (string), `children` (React node — e.g. `<Stepper />`), `className`

**Styles:**
- Background: `--secondary` (#F2F2F2)
- Padding: 50px vertical, 120px horizontal
- Inner: `max-width: --content-max-width`, centered, `display: flex; align-items: flex-end; justify-content: space-between`
- Step text: 24px, weight 400, line-height 20px, letter-spacing 0.25px, colour black
- Title: 40px, weight 500, line-height 48px, colour `--primary`
- Gap between step and title: 15px

---

## Component → Screen Quick Reference

| Seen in screen as | Use this component |
|---|---|
| Text input field | `FillInTheBlanks` |
| Select / dropdown | `DropdownBox` |
| Radio button option | `RadioButtonsBlue` |
| Open / active section card | `SectionBoxes` (Open) |
| Collapsed / locked section | `SectionBoxes` (Closed/Disabled) |
| Primary blue CTA | `Button` (Primary) |
| Secondary / cancel button | `Button` (white) |
| Destructive / edit button | `Button` (error) |
| File attachment | `ButtonUploadFile` |
| Homepage hero button | `HomepageCTAButtons` |
| Loading state | `ProgressCircle` |
| Info banner | `InfoBox` (Outline) |
| Warning/blocking banner | `InfoBox` (Red) |
| Field validation error | `CaptionMessage` (Error) |
| Field validation pass | `CaptionMessage` (Success) |
| Full operation failure | `ErrorMessageCard` |
| View / eye row action | `ViewIcon` |
| Step progress bar | `Stepper` |
| Page title | `PageHeading` |
| Top navigation | `NavigationBar` |
| Bottom footer | `Footer` |
| Homepage service card | `CardHomepage` |
| Data table header row | `TableHeader` |
| Data table body row | `TableContents` |
| Questionnaire input | `QuestionnaireFillInTheBlanks` |
| Checkbox / consent | `Checkbox` |
| Icon action (edit, delete, etc.) | `IconButton` |
| Date field | `DatePicker` |
| Search / filter input | `Search` |
| Collapsible data group | `CollapseHeader` |
| FAQ accordion row | `SectionBoxes` (Open/Closed) — replaces AccordionItem |
| Property type / form info card | `HelpCardList` |

---

## Icons

The design system uses **Material Icons — Outlined** variant exclusively.

### Setup
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
```

### Usage
```html
<span class="material-icons-outlined">icon_name</span>
```

### Icon Categories in Figma (`363:79894`)
The file includes the complete Material Icons Outlined set across 16 categories:

`Action` · `Alert` · `AV` · `Communication` · `Content` · `Device` · `Editor` · `File` · `Hardware` · `Home` · `Image` · `Maps` · `Navigation` · `Notification` · `Social` · `Toggle`

### Icons Used in Eswathu Screens

#### Navigation & Layout
| Context | Icon |
|---|---|
| Back | `arrow_back` |
| Forward / Next | `arrow_forward` |
| Close / dismiss | `close` |
| Menu (hamburger) | `menu` |
| Search | `search` |
| Expand | `expand_more` |
| Collapse | `expand_less` |
| Dropdown chevron | `keyboard_arrow_down` / `arrow_drop_down` |
| More (horizontal) | `more_horiz` |
| More (vertical) | `more_vert` |
| Home | `home` |

#### Actions
| Context | Icon |
|---|---|
| Add / New | `add` / `add_circle` / `add_circle_outline` |
| Edit | `edit` |
| Delete | `delete` / `delete_outline` |
| Save | `save` |
| Download | `download` / `get_app` |
| Upload | `upload_file` |
| Print | `print` |
| Copy | `content_copy` |
| Share | `share` |
| Refresh | `autorenew` / `refresh` |
| View / eye | `visibility` / `visibility_off` |
| Filter | `filter_list` / `filter_alt` |
| Send | `send` |

#### Status & Feedback
| Context | Icon |
|---|---|
| Success / done | `check_circle` / `done` / `task_alt` |
| Error | `error` / `error_outline` |
| Warning | `warning` / `report_problem` |
| Info | `info` / `info_outline` |
| Help | `help` / `help_outline` |
| Notifications | `notifications` / `notifications_active` |
| Flag | `flag` |
| Block | `block` |

#### Documents & Content
| Context | Icon |
|---|---|
| Document / file | `description` / `article` |
| Folder | `folder` / `folder_open` |
| Assignment | `assignment` / `assignment_ind` / `assignment_turned_in` |
| Attachment | `attach_file` |
| Link | `link` |
| QR code | `qr_code` |
| Calendar | `calendar_today` / `date_range` / `event` |
| Note | `note` / `notes` |
| History | `history` |
| Clipboard | `content_paste` |

#### People & Identity
| Context | Icon |
|---|---|
| Person | `person` |
| People / group | `people` / `group` |
| Account | `account_circle` / `account_box` |
| Verified user | `verified_user` |
| Add person | `person_add` |
| Admin | `admin_panel_settings` |
| Fingerprint / KYC | `fingerprint` |
| Face / biometrics | `face` |
| Person search | `person_search` |

#### Property & Location
| Context | Icon |
|---|---|
| Building | `apartment` |
| House | `house` / `home` |
| Location pin | `location_on` |
| Map | `map` |
| GPS | `my_location` / `navigation` |
| City | `location_city` |

#### Government & Finance
| Context | Icon |
|---|---|
| Government building / bank | `account_balance` |
| Wallet | `account_balance_wallet` |
| Payment | `payment` / `credit_card` |
| Money | `attach_money` |
| Receipt | `receipt` |
| Legal / gavel | `gavel` |
| Policy | `policy` |

#### Communication
| Context | Icon |
|---|---|
| Phone | `phone` / `call` |
| Email | `email` / `mail` |
| SMS | `sms` |
| Chat | `chat` / `message` |
| Contact | `contact_page` / `contacts` |

### Icon Sizing
- Standard UI icons: `24 × 24px` (`font-size: 24px`)
- Small inline / caption icons: `18px`
- All icons: Outlined variant only

---

## Figma Node ID Master Reference

| Component | Node ID |
|---|---|
| Components section (root) | `248:72020` |
| Icons Outlined (root) | `363:79894` |
| NavigationBar frame | `363:90141` |
| Footer frame | `363:90243` |
| Stepper frame | `249:71981` |
| PageHeading symbol | `371:83349` |
| SectionBoxes frame | `330:79819` |
| FillInTheBlanks frame | `291:82616` |
| DropdownBox frame | `329:80052` |
| DropdownItem (ItemHover) | `329:80107` |
| DropdownHeader | `329:80140` |
| RadioButtonsBlue frame | `320:79061` |
| Button frame (Blue/White/Error) | `320:80645` |
| ButtonUploadFile frame | `329:81854` |
| HomepageCTAButtons (filled) | `270:70667` |
| HomepageCTAButtons (outlined) | `270:70681` |
| CardHomepage frame | `268:70563` |
| HomepageSection symbol | `384:83458` |
| Carousel symbol | `384:83386` |
| HelpCards frame | `386:83667` |
| TableHeader symbol | `320:78980` |
| TableContents frame | `320:82887` |
| TableWithButton symbol | `386:84305` |
| InfoBox frame | `363:79412` |
| CaptionMessage frame | `363:79426` |
| ErrorMessageCard symbol | `330:79866` |
| ViewIcon frame | `109:22098` |
| ProgressCircle frame | `356:79269` |
| QuestionnaireFillInTheBlanks symbol | `330:79840` |
| KarnatakaLogo instance | `367:79331` |
| NICLogo instance | `367:79271` |
| Tooltip symbol | `440:83623` |
