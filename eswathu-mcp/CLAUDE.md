# Eswathu MCP — Claude Instructions

## Project Overview
This is a React (Vite) project for E-Swathu, a property registration platform.
Framework: React (JSX)
Icons: Material Icons Outlined via CDN (already in index.html)
Styles: CSS Modules per component + global tokens in `src/styles/tokens.css`

## Conversation Continuity
- A `summary.md` file is maintained in the project root — it contains running summaries of past conversations as context gets compacted
- At the start of every new conversation, read `summary.md` first to understand what has already been built, what decisions were made, and what is pending
- After completing any significant work (building a page, updating a component, fixing a bug), append a brief summary of what was done to `summary.md` so it stays current

---

DO NOT USE FIGMA MCP UNLESS A LINK TO FIGMA IS PROVIDED IN THE PROMPT.

## Component Substitution Rules
When building any page or component from Figma designs, ALWAYS use these mappings.
Never generate raw divs/inputs/buttons when the equivalent component exists.

| If you see in Figma...                        | Use this React component                                |
|-----------------------------------------------|---------------------------------------------------------|
| Any text input, input field, fill-in-blank    | `<Input />`                                             |
| Any button (primary, secondary, CTA, outline) | `<Button />`                                            |
| Any dropdown / select                         | `<Dropdown />`                                          |
| Any checkbox                                  | `<Checkbox />`                                          |
| Any radio button                              | `<RadioButton />`                                       |
| Any icon button                               | `<IconButton />`                                        |
| Top navigation bar                            | `<NavigationBar />`                                     |
| Footer                                        | `<Footer />`                                            |
| Page title area                               | `<PageHeading />`                                       |
| Step indicator (horizontal)                   | `<Stepper />`                                           |
| Step indicator (vertical)                     | `<VerticalStepper />`                                   |
| Collapsible section / accordion               | `<SectionBox />`                                        |
| Image slideshow                               | `<Carousel />`                                          |
| Info/help card                                | `<HelpCards />`                                         |
| Error or warning message card                 | `<ErrorMessageCard />`                                  |
| Caption or helper text                        | `<CaptionMessage />`                                    |
| Badge / tag / pill                            | `<Badges />`                                            |
| Info box / alert box                          | `<InfoBox />`                                           |
| Progress circle / loading indicator           | `<ProgressCircle />`                                    |
| Data table                                    | `<Table />`                                             |
| Homepage card                                 | `<CardHomepage />`                                      |
| Accordion list item                           | `<AccordionItem />`                                     |
| Contextual help / sample image tooltip        | `<Tooltip />`                                           |
| Inline definition (underlined term + hover)   | `<Tooltip variant="definition" />`                      |
| Step page grey banner (step + title)          | `<StepHeader />`                                        |
| Date picker field                             | `<DatePicker />` — ask user if not in src/components/  |
| File upload / view file                       | `<FileUpload />` in `src/components/FileUpload/`       |

---

## Authoritative Component Source
- The ONLY valid UI components are those in the "Components" section/page of the Figma file, scaffolded in `src/components/`
- Any elements in screen designs from a different or older design system must be IGNORED and replaced with the matching component from `src/components/`
- Never generate code based on external/library components found in screen frames — only use what is in `src/components/`

## Icons Are the ONLY Exception to the Above Rule
- Icons always come from Material Icons Outlined CDN (already in index.html) — this is intentional
- Icons from the Figma icon library in the file are fine to reference — just map them to their Material Icons Outlined name
- Always render icons as: `<span className="material-icons-outlined">icon_name</span>`
- Never create custom SVG icon components — always use the CDN span approach
- If an icon does not have an obvious Material Icons equivalent, ask the user before proceeding

## When No Matching Component Exists — ALWAYS ASK FIRST
- If you encounter a UI element in a screen that does NOT match any component in `src/components/`, STOP and ask the user before doing anything
- Do NOT silently create a new component file
- Do NOT fall back to raw HTML without asking
- Ask: "I found [description of element] in this screen that does not match any existing component. Should I: (a) map it to [closest existing component], (b) create a new component for it, or (c) skip it for now?"
- Only proceed after the user explicitly confirms which option to take

---

## Icon Usage Rules
ALWAYS use Material Icons Outlined via span — never import icon packages.

```jsx
<span className="material-icons-outlined">icon_name</span>
```

Common icon name mappings:
- Search → `search`
- Home → `home`
- Settings → `settings`
- Delete → `delete`
- Edit / Create → `edit`
- Add → `add`
- Close → `close`
- Back arrow → `arrow_back`
- Forward arrow → `arrow_forward`
- Chevron down → `expand_more`
- Chevron up → `expand_less`
- Menu / hamburger → `menu`
- More options (vertical) → `more_vert`
- Upload → `upload`
- Download → `download`
- Info → `info`
- Warning → `warning`
- Error → `error_outline`
- Check / Success → `check_circle`
- Calendar → `calendar_today`
- Location → `place`
- Phone → `phone`
- Email → `email`
- User / Account → `account_circle`
- Lock → `lock`
- Verified → `verified_user`
- Document → `description`
- File copy → `file_copy`

---

## Import Paths
All components live in `src/components/`. Always import like this:

```jsx
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Dropdown from '../components/Dropdown/Dropdown';
import Checkbox from '../components/Checkbox/Checkbox';
import RadioButton from '../components/RadioButton/RadioButton';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';
// etc.
```

---

## Style Rules
- Use CSS Modules for component-level styles
- Use variables from `src/styles/tokens.css` for all colors, spacing, radius, shadows
- Never hardcode hex colors — always use token variables
- Min page width: 1280px
- Font: Noto Sans (loaded via CDN in index.html)

### Field + Button Row Alignment Rule
When placing a button (or any action element) next to a labeled `<Input>` or `<Dropdown>` in a flex row:
- **NEVER use `align-items: flex-end`** — when a validation caption appears below the field, the field grows and `flex-end` pushes the button down past the input box, breaking visual alignment
- **Always use `align-items: flex-start`** on the flex row
- **Add `margin-top: 24px`** to the button/action container — this offsets it past the label area (20px label line-height + 4px `margin-bottom` = 24px) so it visually aligns with the top of the input box
- The button will now stay locked to the input box regardless of whether a caption is showing

```css
/* ✓ Correct pattern */
.my-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.my-row .btn,
.my-row .action-container {
  margin-top: 24px;
}

/* ✗ Wrong — button shifts down when caption appears */
.my-row {
  align-items: flex-end;
}
```

Exception: `align-items: flex-end` is acceptable when the field is `frozen` (captions never appear on frozen fields) or when there is no label above the field.

### Auto Layout / Fill Container Rule
- Never use hardcoded pixel widths on components that should fill their parent — always use `width: 100%`
- Components must stretch to fill the container they are placed in; the parent controls sizing via CSS Grid columns, max-width on inner wrappers, or padding
- Remove `max-width` from individual components — the section's `__inner` wrapper with `max-width` + `margin: 0 auto` is the single source of constraint
- Use CSS Grid (`grid-template-columns: repeat(N, 1fr)`) for card layouts so children fill evenly
- Heights should hug content by default — never set fixed `height` unless the design explicitly requires it
- Buttons inside cards that need to stay at the bottom: use `margin-top: auto` on the button and `flex: 1` on the preceding content area
- Translate Figma "Fill container" → `width: 100%`, "Hug contents" → no fixed dimension
- `<FileUpload />` always fills its container (`width: 100%` on the wrapper and both button states). The uploaded state uses `justify-content: space-between` so the × button is always right-aligned and the filename truncates with ellipsis. Never constrain `FileUpload` with a fixed pixel width — let the parent column control the size.

---

## Pages Structure
Pages live in `src/pages/`:
- `HomePage/`
- `LoginPage/`
- `DashboardPage/`
- `NewApplicationPage/` (with steps: SaleDeedDetails, OwnerEKYC, PropertyDetails, PropertyClassification, BuildingDetails, EC)

---

## UX & Interaction Rules
These apply to EVERY page and component built. Never skip these.

### Navigation & Consistency
- Always use `<NavigationBar variant="homepage" />` on the HomePage and `<NavigationBar variant="post-login" />` on all post-login pages
- Always use the appropriate `<Footer />` variant to match the navigation bar
- Use `<Stepper />` consistently across all multi-step pages — keep the active state in sync with the current step

### Stepper — Mandatory Placement Rule (NEVER skip)
The `<Stepper />` component MUST appear on every step page (Steps 1–5) of the New Application flow. It sits between `<NavigationBar>` and `<StepHeader>` — always in this exact vertical order:

```
<NavigationBar ... />
<Stepper activeStep={currentBCStep} completedBCSteps={completedBCSteps} />
<StepHeader ... />
```

**Props — always pass both:**
- `activeStep={currentBCStep}` — the bcIdx (0–4) of the page currently being viewed
- `completedBCSteps={completedBCSteps}` — array of bcIdx values the user has already saved and proceeded from

**Circle variant rules (automatically applied by the component):**
- `upcoming` → white bg, 1px `--neutral-300` border, number `--neutral-600` (grey), label `--text-dark` fw=500
- `active` → white bg, 2px transparent border (no visible outline), number `--text-dark` fw=500, label `--text-dark` fw=500 — distinguished from upcoming only by dark number colour
- `completed` → solid `--success` (green) fill, no border, white ✓ check icon, label `--text-dark` fw=500

**Connector line rules:**
- `height: 1px`
- Filled (green `--success`) when the step to its left is in `completedBCSteps`
- Otherwise grey `--neutral-400` (#C6C6C6)

**Label rules (Figma exact):**
- `font-size: 22px`, `font-weight: 500`, `line-height: 28px`
- Color: always `--text-dark` — same for all three states
- Labels are NOT bold on the active step — only the circle appearance differentiates states

**Layout rules:**
- Each step renders as `[circle 32×32] [8px gap] [label]` in a horizontal row
- Connector lines use `flex: 1` to fill available space between steps
- Stepper outer padding: `30px 0` (top/bottom), inner constrained to `max-width: 1200px`

**When adding a new step page, checklist:**
1. Import: `import Stepper from '../../../components/Stepper/Stepper';`
2. Ensure the page receives `currentBCStep` and `completedBCSteps` as props (passed via `navProps()` in App.jsx)
3. Render `<Stepper activeStep={currentBCStep} completedBCSteps={completedBCSteps} />` immediately after `<NavigationBar>`
4. Never omit or move the Stepper on any step page

### Stepper Navigation Arrows
- Add back (←) and forward (→) arrow buttons between the pages listed in the stepper
- These arrows are disabled by default and only become enabled once that step/page is fully completed
- This lets the user go back and forth to review or edit completed steps
- Arrows use `<Button />` with the `arrow_back` / `arrow_forward` material icons

### Scroll & Navigation Behaviour
- Whenever a button is clicked or the screen changes, always scroll/navigate to the same position or the relevant section the user was interacting with — never jump to the top of a new page unexpectedly
- Section open/close transitions should keep the viewport anchored to the section being acted on

### Button Rules
- Only ONE primary action button should be active at a time per section — never show two competing active blue buttons in the same section
- Always implement all button states: Default, Hover, Pressed, Focused, Disabled — using CSS `:hover`, `:active`, `:focus-visible`, and `[disabled]`
- Use `<Button variant="primary" />` (blue) for submit/confirm actions
- Use `<Button variant="error" />` (red) for cancel and edit buttons
- Use `<Button variant="white" />` wherever white buttons appear in the design

### CTA Button Enable/Disable Rules
A CTA button (Save, Proceed, Submit, Get OTP, Complete eKYC, etc.) must remain DISABLED until ALL of the following conditions are met simultaneously:
- Every mandatory field (marked with * in error/red colour) is filled — this includes text inputs, date pickers, and file upload fields
- Every required selection (dropdown chosen, radio button selected, checkbox ticked) is made
- Any preceding sequential action has been completed (e.g. OTP sent before OTP field appears)
The button must re-disable immediately if any mandatory field is cleared after it was enabled.
Never enable a CTA based on partial completion — ALL conditions must be true at once.

### Submit → Disable → Edit Pattern
- When the user clicks the primary blue submit button in a section:
  1. The submit button becomes disabled
  2. The Edit button next to it becomes enabled (only where Edit is shown in Figma)
- The Edit button (red/error variant) re-enables the section for editing and disables itself
- Sometimes a red Cancel button is used instead — specific cases explained per page prompt
- Disabled buttons can ONLY be re-enabled by clicking Edit or Cancel — never by any other action

### Last CTA Rule
- The final CTA button on every page (e.g. "Save and Proceed") must only become active AFTER:
  - The last section's submit button has been clicked and disabled (section is locked), AND
  - All mandatory fields across the entire page are satisfied
- Before that, the final CTA must be hidden or disabled

### Dropdown Rules
- Always add exactly the number of options specified in the page prompt
- Never use placeholder/dummy options — use the actual options mentioned

### Loading / Buffer
- For any action involving a server call or async operation, show `<ProgressCircle size="small" />` while waiting
- Always include for: form submissions, OTP sends, page transitions, data fetches, and file uploads
- Place inline where the result will appear, or as a full-page overlay for page transitions

### Height Changes & Page Stability
- Whenever content grows or collapses (questionnaires, accordions, dynamic content), nothing above must shift or jump
- For sections with dynamic content of unpredictable length, always pre-allocate a fixed minimum height large enough for the maximum expected content — content grows INTO the reserved space
- Add minimum 120px bottom padding to any section that grows dynamically
- Collapsing and expanding must use CSS transitions — never abrupt jumps
- When new content appears below the current view, use smooth scrolling (`behavior: smooth`) to bring it into view
- Modals/popups overlay the page with a backdrop — the page behind must never shift when a modal opens or closes

---

## When Reading Figma Designs
1. Always use the Figma MCP to read the screen before generating code
2. Match the layout, spacing, and visual hierarchy from the design exactly
3. Apply component substitution rules above — never skip them
4. Map all icons to their Material Icons Outlined equivalent
5. If any element has no matching component in `src/components/`, STOP and ask the user

---

## Updating Components
If the user says "my Figma [ComponentName] was updated":
1. Re-read the component from Figma using the MCP
2. Update only `src/components/[ComponentName]/[ComponentName].jsx` and its `.css`
3. Do not touch other files unless props/API changed

## Reusable Components Created During Build
- Any component explicitly saved to `src/components/` mid-build must always be imported from there in all future pages — never rebuilt inline
- If it needs a new variant or prop, ask the user before modifying it
- Log every new reusable component created in `summary.md`

## Modal & Popup Rules
- Modals must overlay the page using a semi-transparent dark backdrop — never push content down
- The page behind must not shift, scroll, or resize when a modal opens or closes
- Closing a modal restores the page to exactly the state before it opened
- Always use `<ErrorMessageCard />` for error popups — never build custom error UI

## Inline Definition Tooltip Pattern

Use `<Tooltip variant="definition">` to add Wikipedia-style hover definitions to specific terms in any text.

### When to use
- A term in a question, option, label, or body text has a meaning that may not be obvious to citizens
- The user provides a definition for a specific word or phrase
- Never add definitions speculatively — only add when the user confirms the term and its definition

### How it works
- The term renders as plain text with a **blue dotted underline** (`text-decoration-color: var(--primary)`)
- Hovering shows a plain white definition box below the term (no icon, no image)
- Cursor remains `default` — no question-mark cursor
- Definition box: `position: absolute`, `width: 520px`, white background, 1px border, subtle shadow

### Usage
```jsx
<Tooltip variant="definition" definition="The full definition text here.">
  Term Name
</Tooltip>
```

### GLOSSARY pattern (for questionnaire pages)
- Store all terms and definitions in the page's data file (e.g. `classifierData.js`) as:
  ```js
  export const GLOSSARY = {
    'Exact Term': 'Definition text.',
  };
  ```
- Use the `renderWithDefs(text)` helper (defined in the page file) to auto-highlight terms anywhere in question text or option text
- `renderWithDefs` splits a string on GLOSSARY keys using a dynamic regex and wraps matches in `<Tooltip variant="definition">`
- Returns the original string unchanged if no GLOSSARY terms are found — safe to call on any string
- Terms are matched case-sensitively — the key in GLOSSARY must match exactly how the term appears in the text
- Adding a new definition requires only one change: add the key/value to `GLOSSARY`

## Kaveri Key-Value Table Pattern
When displaying read-only key-value data from Kaveri (or similar API responses), use the `kaveri-table` CSS pattern from `SaleDeedDetailsPage.css`:

### Structure
```
.kaveri-table (flex-col container)
├── .kaveri-table__registration  (4-row × 4-col key-value grid)
│   └── .kaveri-table__row  (flex row, 40px height, 1px #666 border)
│       ├── .kaveri-table__label  (212px fixed, grey bg, font-weight 500)
│       ├── .kaveri-table__value  (flex-1, white bg, color #666)
│       ├── .kaveri-table__label
│       └── .kaveri-table__value--last  (no right border)
├── .kaveri-table__spacer  (30px vertical gap)
├── .kaveri-table__boundaries  (header + body, 5-col: label + 4 direction cells)
├── .kaveri-table__schedule  (2 rows, second row value spans 3 cols)
└── .kaveri-table__parties  (N party blocks, each flex-row with left/right sections)
```

### Key CSS values
- Cell border: `1px solid #666`
- Label cell: `width: 212px`, `background: var(--secondary)`, `font-weight: 500`, `font-size: 16px`
- Value cell: `flex: 1`, `background: white`, `color: #666`, `font-weight: 500`
- Row height: `40px` standard, `80px` party blocks
- Section spacer: `30px`

### When to use
- Read-only key-value data display with grey label cells
- Any fetched API data that doesn't need column headers or row selection (use `<Table />` for those)

## Global Page Navigation Rules
Every step page in the New Application flow must include the 
PageNavigation component (src/components/PageNavigation/PageNavigation.jsx)

### Two Navigation Methods — Both Must Work Identically
Users can move between steps in two ways. Both must behave the same — same guards, same state preservation:
1. **Arrow buttons** (back ← / forward →) in the StepHeader
2. **Stepper step click** — clicking a completed or active step label/circle in the Stepper bar

**Stepper click implementation:**
- `<Stepper>` accepts an `onStepClick` prop; every step page must pass `onBCStepClick` to it:
  ```jsx
  <Stepper activeStep={currentBCStep} completedBCSteps={completedBCSteps} onStepClick={onBCStepClick} />
  ```
- Inside Stepper, clicking is only enabled for **completed** steps (`completedSet.has(i)` is true). Active and upcoming steps are not clickable.
- `onBCStepClick(bcIdx)` is defined in App.jsx and calls `handleNavigate` with the route key for that BC step.

### Which Steps Are Reachable
| Step state | Arrow navigation | Stepper click |
|---|---|---|
| Completed (green ✓) | Always reachable via back arrow | Clickable |
| Active / current | You are here | Not clickable (already here) |
| Upcoming (not yet reached) | Reachable only once previous steps are done | NOT clickable |

### Back Arrow
- Always enabled on all steps except Step 1
- Navigates to previous step
- NEVER resets state — progress is always preserved
- Completed steps show in their locked state with Edit button visible

### Forward/Next Arrow  
- Disabled by default
- Only enables when the current step is fully completed (final CTA clicked and disabled)
- Disabled again while user is editing a completed step
- Re-enables after all edits are saved and page is completed again
- Hidden entirely on the last step

### Edit Button (bottom of page)
- Placed next to the final centered CTA button at the bottom of each page
- Only appears after page is fully completed
- Clicking it re-enables editing from the bottom upward — 
  last section first, working up through each section's own Edit button
- While editing, forward arrow disables
- Back arrow always remains enabled

### State Preservation — NEVER Break This
- Never reset useState values when the user navigates between steps (back, forward, or stepper click)
- Pages always show exactly as the user left them — all inputs, locks, and section states intact
- The keep-alive mount pattern in App.jsx (display:none on inactive steps) is what makes this work — do not remove it

### Warn Before Navigating When Edits Would Cause Data Loss
Some edits in a step invalidate data in downstream steps. Whenever the user triggers one of these edits — **regardless of whether they used an arrow or the stepper** — show an `ErrorMessageCard` modal (with dark backdrop) before proceeding.

**Complete warning trigger list — ALL of these must show a modal:**

| # | Page / File | Trigger | Data lost | Message |
|---|---|---|---|---|
| 1 | SaleDeedDetailsPage — S1.1 Edit | Edit button in Section 1.1 (Location Details), after Kaveri fetch succeeded | Steps 2–5 completion flags reset | "Editing this field will reset your progress on Steps 2–5." |
| 2 | OwnerEKYCPage — S2.1 Edit | Edit button in Section 2.1 (Owner Details) | ALL eKYC verifications, mismatch resolutions, and uploaded documents | "Editing Owner Details will erase all completed eKYC verifications. You will need to redo the KYC process for all owners." |
| 3 | PropertyDetailsPage — S3.1 Edit | Edit button in Section 3.1 (Location Details) | All of Section 3.2 (area, site dims, checkbandi) and 3.3 review | "Editing Location Details will reset all your property boundary data — area, dimensions, and checkbandi." |
| 4 | PropertyClassificationPage — Classification dropdown | Changing the classification dropdown when docs/survey data already exists | All uploaded documents, survey details, property type/category (all of 4.1 and 4.2) | "Changing the Property Classification will reset all uploaded documents and survey details, including property type information." |
| 5 | PropertyClassificationPage — S4.1 Edit button | Edit button in Section 4.1 after survey/RTC is done | All of 4.1 (survey, RTC) and all of 4.2 and 4.3 | "Editing the Property Classification will cause you to lose progress in the Property Classification and Documents Upload section." |
| 6 | PropertyClassificationPage — Property Type dropdown | Changing Property Type when Section 4.2 subsections have been saved | All saved 4.2 subsections (area, multi-storey, parking, ESCOM, tenant) + 4.3 rebates | "Changing the Property Type will reset all the building details you have filled in." |
| 7 | PropertyClassificationPage — Property Category dropdown | Changing Property Category when Section 4.2 subsections have been saved | Same as above | "Changing the Property Category will reset all the building details you have filled in." |
| 8 | ECStep — FINAL SAVE button | Clicking FINAL SAVE in Section 5.4 | Irreversible — no further edits possible | "Are you sure you want to FINAL SAVE? You cannot make any changes to the application once you final save." |

**Implementation rule for each trigger:**
- Only show the warning when there is actual data to lose (check the relevant state flags before opening the modal)
- On "Cancel": close modal, restore dropdown/state to its previous value, nothing changes
- On "Yes, [Action]": apply the change and reset the affected state variables
- Always use `pc-modal__backdrop` (in PropertyClassificationPage) or the page's existing overlay class for the backdrop

**Popup behaviour (all warning cases):**
- "Yes, [Action]" → execute the action, reset affected completion flags, navigate
- "Cancel" → close popup, stay exactly where the user was, nothing changes
- Use `<ErrorMessageCard>` as a modal centered over a semi-transparent dark backdrop (`rgba(0,0,0,0.55)`)
- The page behind must NOT shift or scroll when the modal opens or closes

**When NO warning is needed:**
- Navigating to a completed step to review it (no edits, just browsing)
- Going back a step without clicking any Edit button
- All other edits in Steps 2, 3 and non-critical sections of Step 4


## Input Field Validation Rules
Every Input field must have an appropriate `inputType` prop applied.
Never leave validation unspecified on user-facing input fields.

| Field type | inputType prop | Validation behaviour |
|---|---|---|
| Phone / mobile number | `phone` | Digits only, exactly 10 digits, error on blur if wrong |
| OTP | `otp` | Digits only, block non-digits on keypress |
| Name fields | `alpha` | Letters and spaces only, error if digits/symbols entered |
| Number / area / measurement | `numeric` | Digits only, block non-digits on keypress |
| Registration number (e.g. SRI-1-12481-2023-24) | `alphanumeric-code` | Letters, digits, hyphens only — no error message, just block |
| EC number (e.g. XXX-EC-X-XXXXXX-2024-25) | `alphanumeric-code` | Same as above |
| Free text / general | `text` | No validation (default) |

Error messages use CaptionMessage (error variant) shown below the field on blur.
Never show validation errors on frozen/pre-filled fields — they are read-only.
Clear error when user starts typing again.

## Preview Page Edit Behaviour
When user edits from the Preview of Khata (Section 5.3):

### Direct navigation (no warning):
- Steps 2, 3, and non-critical Step 4/5 sections navigate directly
- Edited step's completion flag resets, forward arrow disables
- All steps before and after remain unaffected
- Data is NEVER cleared — only completion flags reset
- User sees pre-filled data and just needs to re-save

### Warning required before navigating (show ErrorMessageCard popup):
1. Kaveri Registration Number (Step 1 Section 1.1)
   — Resets Steps 2, 3, 4, 5 completion flags on confirm
2. Property Classification (Step 4 Section 4.1)
   — Resets Section 4.1 on confirm
3. Property Category/Type (Step 4 Section 4.2)
   — Resets Section 4.2 on confirm


### Popup behaviour:
- "Yes, Edit" → navigate and reset relevant flags
- "Cancel" → close popup, stay on preview, nothing changes
- Use ErrorMessageCard as modal with backdrop

## Within-Section Edit Cascade Rule
When a user edits an earlier part within a section, all parts that come after it are silently cleared (no warning).

- **No warning needed** — warnings are only for entire section removal or page navigation that would discard a later step's progress
- Silently reset the state of every sub-part that follows the edited part
- This applies to all flows: General Building (floor-wise → ESCOM → water → tenants), Apartment (area → multi-storey → parking → undivided → ESCOM → tenants), and any future flows
- Implementation: the Edit handler for a sub-part must call the reset functions for every state variable belonging to all subsequent sub-parts
- The unmount-on-conditional pattern (`{flag ? <Component/> : <placeholder/>}`) achieves this automatically for downstream components; for components that stay mounted (e.g. everything inside `{floorDetailsSaved && (...)}` in GeneralFlow), explicitly reset state in the edit handler

## Sequential Section Opening Rule
This applies to EVERY page and EVERY step across the entire application.

- When a page has multiple numbered sections (e.g. 5.1, 5.2, 5.3 or 3.1, 3.2 etc.),
  only the FIRST section is open and interactive on page load
- All subsequent sections are rendered using the SectionBox closed/disabled variant
  — they are visible as grey closed headers at the bottom of the page
  — they are NOT interactive until the previous section is completed
- When the user completes a section (clicks Save/Confirm and it locks):
  — The next section's SectionBox opens automatically
  — All sections after that remain closed and grey
- This creates a clear visual progress map — users can always see what's coming
  but can only interact with the current open section
- Grey closed SectionBoxes at the bottom must always be visible on page load
  — never hide them entirely — just show them in closed/disabled state
- Section opening must be smooth — follow height change rules from CLAUDE.md

## ECStep Multi-View Structure
ECStep.jsx uses a single `ecView` state to render three distinct views:
- `'main'` → Sections 5.1 and 5.2 only
- `'preview'` → Section 5.3 (Preview of Khata) only
- `'final'` → Section 5.4 only

Views are mutually exclusive — only the active view is visible.
Scroll to top on every view transition.

Back arrow behaviour inside ECStep:
- 'preview' → back goes to 'main' (NOT previous step)
- 'final' → back goes to 'preview'
- 'main' → back goes to previous step (Step 4) as normal

---

## Application Flow — Canonical Page Structure

### Step 2 — Owner eKYC (OwnerEKYCPage.jsx)

**Section 2.1 — Owner Details**

Kaveri flow:
- Pre-filled owner table from Kaveri (read-only, No. | Owner name)
- Red InfoBox (always visible): "If owner name is spelled wrong, missing, clubbed together by mistake or there are new owner/s to be added, please add them below."
- "Do you want to add new owners?" Yes/No radio
- When Yes selected → second red InfoBox: "When you add new owners, these names will be considered by ekyc (not the ones fetched from Kaveri Deed Details)"
- When Yes selected → add-owner table with Input fields + add row button

No-Kaveri flow:
- Direct owner input table (no pre-fill)
- Same add/remove row pattern

**Section 2.3 — Name Mismatch (two distinct cases)**

Case 1: eKYC name ≠ Kaveri-fetched owner name
- Table: Kaveri name | eKYC name
- Options: Accept eKYC / Accept Kaveri / Flag as spelling difference (ONLY this case has spelling option)

Case 2: eKYC name ≠ manually added owner name
- Occurs when: (a) Kaveri flow + extra owner added, OR (b) No-Kaveri flow (all owners entered manually)
- Table: Added name | eKYC name
- Options: Accept eKYC / Accept entered name (NO spelling option)

Rule: Kaveri-fetched owner names are NEVER considered for eKYC — only manually added names go through eKYC. So cases 1 and 2 are mutually exclusive per owner.

### Step 3 — Property Details (PropertyDetailsPage.jsx)

**Unit flow matrix (Section 3.2A — Area Details):**
- Sq.Ft → conversion to Sq.Mt shown → Accept/Reject → Site Dimensions → Checkbandi
- Sq.Mt → no conversion needed → Accept/Reject → Site Dimensions → Checkbandi
- Gunta / Acre / Cent → conversion to Sq.Mt shown → Accept/Reject → **Site Dimensions SKIPPED** → Checkbandi

All three will also have No-Kaveri variants (user to provide prompts).

**Checkbandi (Section 3.2C):**
- Pre-filled from Kaveri (frozen)
- Only editable if Kaveri returns empty/null values

### Step 4 — Property Classification (PropertyClassificationPage.jsx)

Building Details is NOT a separate route — it lives inside PropertyClassificationPage.

**Type = Site OR Land to be Converted** → one shared building details flow (category irrelevant)

**Type = Building** → category determines which of 10 flows:
- General building (Residential, Commercial, etc.)
- 9 specific flows: Multi-Ownership Building, Apartment/flat, Villament, Tenement, Row House, Multi-storied building, Service apartment/flat, Mall/Multiplex, Villa

---

## Kannada (ಕನ್ನಡ) Language Support

### How it works
- Language state lives in `src/context/LanguageContext.jsx` — `LanguageProvider` wraps the entire app in `App.jsx`
- The ಕನ್ನಡ / English toggle buttons in NavigationBar's topbar are already wired to `setLang('kn')` / `setLang('en')`
- Translation strings live in `src/i18n/namespaces/` — one file per step/page

### Namespace → file mapping
| Namespace | File | Covers |
|---|---|---|
| `common` | `src/i18n/namespaces/common.js` | NavBar, Footer, shared buttons, breadcrumb labels |
| `home` | `src/i18n/namespaces/home.js` | HomePage, LoginPage, CitizenLogin-HomePage |
| `newAppFirst` | `src/i18n/namespaces/newAppFirst.js` | NewApplicationFirstPage (questionnaire) |
| `step1` | `src/i18n/namespaces/step1.js` | SaleDeedDetailsPage |
| `step2` | `src/i18n/namespaces/step2.js` | OwnerEKYCPage |
| `step3` | `src/i18n/namespaces/step3.js` | PropertyDetailsPage |
| `step4` | `src/i18n/namespaces/step4.js` | PropertyClassificationPage + BuildingDetails |
| `step5` | `src/i18n/namespaces/step5.js` | ECStep |

### Translation rules — ALWAYS follow these
1. **Never translate on your own.** Do not invent, guess, or auto-generate Kannada strings. Wait for the user to provide an MD file with the Kannada content for each namespace.
2. **English strings are the source of truth.** When building or updating any component, write all visible strings as English keys in the `en` object of the matching namespace file first.
3. **Kannada strings come from the user's MD file.** When the user provides a translations MD, populate the matching `kn` object with exactly the strings given — do not alter wording.
4. **Always use `useTranslation` in components.** No hardcoded English strings in JSX once a namespace has Kannada support. Pattern:
   ```jsx
   import { useTranslation } from '../../i18n';
   // inside the component:
   const { t } = useTranslation('step1');
   // in JSX:
   <label>{t('fieldLabel')}</label>
   ```
5. **`t(key)` auto-falls back to English** if a Kannada key is missing — so it is safe to add `useTranslation` to a component before the Kannada strings are filled in.
6. **One key per atomic string.** Do not concatenate translated fragments — each full phrase or label is one key. This avoids grammatical word-order issues between languages.
7. **Dynamic values go in via interpolation, not key splitting:**
   ```js
   // en: { greeting: 'Welcome, {name}' }
   t('greeting').replace('{name}', username)
   ```
8. **Glossary/definition terms** (used with `<Tooltip variant="definition">`) also need Kannada equivalents when the user provides them — store them in the namespace file alongside regular keys, prefixed `def_`:
   ```js
   en: { def_khata: 'A document that records ...' }
   kn: { def_khata: 'ಖಾತೆ ಎಂಬುದು ...' }
   ```

### Workflow when user provides a translation MD
1. Identify which namespace the MD covers (user will usually say which step/page).
2. Populate `kn: { ... }` in the matching namespace file with exactly the provided strings.
3. Add `useTranslation(namespace)` + `t('key')` calls inside the step component, replacing hardcoded English strings.
4. Do not modify any other files unless the English `en` keys also need to be added first.

### Do NOT
- Do not create separate Kannada page/component files — the same components render both languages via `t(key)`
- Do not add a `lang` prop to individual components — they all read from context via `useLanguage()` or `useTranslation()`
- Do not duplicate any component logic for Kannada — only the strings change