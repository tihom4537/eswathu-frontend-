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
| Page title + breadcrumb area                  | `<PageHeading />`                                       |
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
| Step page grey banner (step + title)          | `<StepHeader />`                                        |
| Date picker field                             | `<DatePicker />` — ask user if not in src/components/  |
| File upload / view file                       | `<ViewFile />` — ask user if not in src/components/    |

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

### Auto Layout / Fill Container Rule
- Never use hardcoded pixel widths on components that should fill their parent — always use `width: 100%`
- Components must stretch to fill the container they are placed in; the parent controls sizing via CSS Grid columns, max-width on inner wrappers, or padding
- Remove `max-width` from individual components — the section's `__inner` wrapper with `max-width` + `margin: 0 auto` is the single source of constraint
- Use CSS Grid (`grid-template-columns: repeat(N, 1fr)`) for card layouts so children fill evenly
- Heights should hug content by default — never set fixed `height` unless the design explicitly requires it
- Buttons inside cards that need to stay at the bottom: use `margin-top: auto` on the button and `flex: 1` on the preceding content area
- Translate Figma "Fill container" → `width: 100%`, "Hug contents" → no fixed dimension

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
