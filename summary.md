# Eswathu MCP — Project Summary

## Project
**E-Swathu 2.0** — Digital property mutation/registration service for rural Karnataka citizens.  
Department of Rural Development and Panchayati Raj, Government of Karnataka.  
**Figma file key:** `kJ1WKNyGo5y7tZ2g8mM1vq`

---

## Conversation History (Compacted)

### Phase 1 — Initial Setup (Sessions 1-2)
- Figma file `kJ1WKNyGo5y7tZ2g8mM1vq` analysed: E-Swathu 2.0 property mutation/registration service
- 34 UI components + 16 icon categories extracted from Figma
- Old prototypes deleted, clean workspace established
- `design-system.md`, `implementation-rules.md`, `summary.md` created
- React Vite project `eswathu-mcp/` scaffolded with full folder structure
- `src/styles/tokens.css` with CSS custom properties created
- Icons: Material Icons Outlined via Google Fonts CDN (no npm package)
- Assets: `assets/MyGov.png` (NIC logo), `assets/Karnataka.png` (state seal)
- `eswathu-mcp/CLAUDE.md` rules file created and confirmed

### Phase 2 — Component Verification
- Design system verified against Figma Components section (node `248:72020`)
- Found components that were from screen designs, NOT the Components section:
  - Checkbox, IconButton, AccordionItem (`11:6353` — wrong section), Badges, DefaultChips, Search, DatePickerTrigger
- User asked where these were observed → agent identified they were from page/screen designs

### Phase 3 — User Created Missing Figma Components
- User manually created missing components in the Figma Components section:
  - **IconButton** (`408:83707`) — square, replaceable Material Icon, colour variants (black/grey/blue/colour4), outline icons only
  - **SectionBoxes** — Open + Closed variants (replaces AccordionItem)
  - **CollapseHeader** (`415:83881`) — open/closed collapsible data groups
  - **DatePicker** (`408:83532`) — labelled date input with calendar icon, 7 states
  - **Checkbox** (`408:84277`) — Selected/Intermediate/Unselected × 5 states × 2 colours
  - **Search** (`408:84125`) — search bar with leading search + optional mic icon, 5 states
  - **HelpCardList** (`419:83628`) — property type info card with checklist

### Phase 4 — Design System Finalised
- `design-system.md` updated to 33 components (all from node `248:72020`)
- AccordionItem removed from valid components, replaced by SectionBoxes
- Repo memory (`eswathu-component-mapping.md`) updated with all mappings
- CLAUDE.md component substitution table updated

---

## Workspace Layout

```
c:\Users\anany\Desktop\eswathu mcp\
├── assets/
│   ├── eSwathuLogoEnglish.jpg.jpeg
│   ├── Karnataka.png              ← Karnataka state seal (NavBar left)
│   ├── MyGov.png                  ← NIC logo (NavBar right)
│   └── Screenshot 2026-03-07 202549.png
├── design-system.md               ← 33 verified components + tokens + icons
├── implementation-rules.md        ← 14 behavioural rules
├── summary.md                     ← this file
└── eswathu-mcp/                   ← React (Vite 5) project
```

---

## React Project: `eswathu-mcp/`

**Stack:** React + Vite 5, plain CSS per component, no routing library yet.

### index.html
- Title: "E-Swathu 2.0"
- CDN: Noto Sans (400/500/600/700) + Material Icons Outlined

### src/ structure
```
src/
  App.jsx                          ← bare shell
  index.css                        ← @import tokens.css + reset + body base
  main.jsx                         ← StrictMode → App
  styles/
    tokens.css                     ← CSS custom properties (colours, spacing, radius, shadows)
  components/                      ← 21 folders with empty .jsx + .css placeholders
    Button/  Input/  Dropdown/  RadioButton/  Checkbox/  NavigationBar/
    Footer/  Stepper/  SectionBox/  PageHeading/  Table/  InfoBox/
    CaptionMessage/  ErrorMessageCard/  ProgressCircle/  AccordionItem/
    Badges/  HelpCards/  CardHomepage/  IconButton/  Carousel/
  pages/                           ← empty page shells
    HomePage/  LoginPage/  DashboardPage/  NewApplicationPage/
```

**All component .jsx files are empty placeholders — building starts now.**

---

## 33 Verified Components (Figma `248:72020`)

| # | Component | React name | Figma frame |
|---|---|---|---|
| 1 | NavigationBar | `<NavigationBar />` | `363:90141` |
| 2 | Footer | `<Footer />` | `363:90243` |
| 3 | Stepper | `<Stepper />` | `249:71981` |
| 4 | PageHeading | `<PageHeading />` | `371:83349` |
| 5 | SectionBoxes | `<SectionBox />` | `330:79819` |
| 6 | FillInTheBlanks | `<Input />` | `291:82616` |
| 7 | DropdownBox | `<Dropdown />` | `329:80052` |
| 8 | RadioButtonsBlue | `<RadioButton />` | `320:79061` |
| 9 | Button | `<Button />` | `320:80645` |
| 10 | ButtonUploadFile | `<Button variant="upload" />` | `329:81854` |
| 11 | HomepageCTAButtons | `<Button variant="cta-*" />` | `270:70667` / `270:70681` |
| 12 | CardHomepage | `<CardHomepage />` | `268:70563` |
| 13 | HomepageSection | `<HomepageSection />` | `384:83458` |
| 14 | Carousel | `<Carousel />` | `384:83386` |
| 15 | HelpCards | `<HelpCards />` | `386:83667` |
| 16 | TableHeader | `<Table />` (header) | `320:78980` |
| 17 | TableContents | `<Table />` (body) | `320:82887` |
| 18 | TableWithButton | `<Table />` (with action) | `386:84305` |
| 19 | InfoBox | `<InfoBox />` | `363:79412` |
| 20 | CaptionMessage | `<CaptionMessage />` | `363:79426` |
| 21 | ErrorMessageCard | `<ErrorMessageCard />` | `330:79866` |
| 22 | ViewIcon | `<IconButton icon="visibility" />` | `109:22098` |
| 23 | ProgressCircle | `<ProgressCircle />` | `356:79269` |
| 24 | QuestionnaireFillInTheBlanks | `<Input variant="questionnaire" />` | `330:79840` |
| 25 | KarnatakaLogo | (asset in NavBar) | `367:79331` |
| 26 | NICLogo | (asset in NavBar) | `367:79271` |
| 27 | IconButton | `<IconButton />` | `408:83707` |
| 28 | DatePicker | `<DatePicker />` | `408:83532` |
| 29 | Checkbox | `<Checkbox />` | `408:84277` |
| 30 | Search | `<Search />` | `408:84125` |
| 31 | CollapseHeader | `<CollapseHeader />` | `415:83881` |
| 32 | FillInTheBlanks (alt Empty) | `<Input />` (variant) | `408:83456` |
| 33 | HelpCardList | `<HelpCardList />` | `419:83628` |

---

## Key Rules (from CLAUDE.md & implementation-rules.md)
1. Component substitution table — never use raw HTML when a component exists
2. STOP and ask before creating anything not in `src/components/`
3. Icons: CDN span only (`<span className="material-icons-outlined">name</span>`)
4. CSS per component; tokens from `tokens.css`; never hardcode hex
5. NavBar/Footer: correct variant per login state
6. Section pattern: only 1 open at a time, sequential unlock
7. Button: all 5 states (Default/Hover/Pressed/Focused/Disabled)
8. Submit → Disable → Edit (red) pattern
9. Last CTA hidden until all sections submitted
10. ProgressCircle on every async operation

---

## Phase 5 — Built All 24 Components
- All 24 React components implemented with JSX + CSS file pairs
- Build order: Button → IconButton → CaptionMessage → Input → Dropdown → RadioButton → Checkbox → NavigationBar → Footer → Stepper → SectionBox → PageHeading → InfoBox → ErrorMessageCard → ProgressCircle → Table → CardHomepage → Carousel → HelpCards → Search → DatePicker → CollapseHeader → HelpCardList → HomepageSection
- Logo assets (Karnataka.png, MyGov.png, eSwathuLogoEnglish.jpg.jpeg) copied to `public/images/`
- Production build passed: `npx vite build` — 31 modules
- **Fidelity note:** Only 3/24 had live Figma screenshots fetched (NavigationBar, Footer, Stepper). Other 21 built from written specs in design-system.md.

## Phase 6 — Rewrote NavigationBar, Footer, Stepper from Figma
User asked specific questions about the 3 Figma-verified components. All 3 were completely rewritten after re-fetching `get_design_context`:

### NavigationBar (`363:90141`)
- Two variants: `variant="homepage"` (pre-login) and `variant="postLogin"`
- Homepage variant — 3 bars:
  - Top bar: accessibility (A- A A+, theme toggle) + language dropdown (English/ಕನ್ನಡ)
  - Main bar: Karnataka seal + eSwathu logo + "eSwathu 2.0" title + subtitle + MyGov logo
  - Bottom bar: nav links (Home, About Us, **Useful Links with dropdown**, Contact Us) + Citizen Login + Department Login buttons
- Useful Links dropdown items: Bhoomi, Kaveri Online Services, KSRSAC, Survey Settlement & Land Records
- Post-login variant: breadcrumb + Username + Logout button
- Mobile hamburger menu, click-outside-to-close dropdowns

### Footer (`363:90243`)
- Two variants: `variant="homepage"` and `variant="postLogin"`
- Homepage: dark blue (#0B2447) background, 4 columns (All Pages, Help, Working Hours, Office Address)
- Bottom bar: "Last Updated on 15 Oct 2024" | "Visitor's Count: 1256"
- Post-login: compact single bar, copyright centered
- Typography: 16px bold headings, 14px links/body, 13px copyright, Noto Sans

### Stepper (`249:71981`)
- Props: `currentStep` (1-5), `steps` array, `onStepClick` callback
- Default steps: Sale Deed Details → Owner KYC → Property Details → Property Classification → Upload EC
- 3 visual states: Completed (green filled + checkmark), Active (green outlined + number), Upcoming (grey + number)
- Completed steps clickable for back-navigation

Build verified passing after all rewrites.

---

---
NOTE TO CLAUDE: Always read this file at the start of every conversation before doing anything else. 
Then append a summary of what you did at the end of each session.

## Phase 7 — Visual Verification of Remaining 21 Components (IN PROGRESS)
After the 3 Figma-verified rewrites (NavigationBar, Footer, Stepper), visual verification began for the remaining 21 components by fetching Figma `get_design_context` data in batches.

### Figma Data Fetched (18/21 components):
**Batch 1:** Button (`320:80645`), Input/FillInTheBlanks (`291:82616`), Dropdown (`329:80052`), RadioButton (`320:79061`), SectionBox (`330:79819`), PageHeading (`371:83349`)
**Batch 2:** InfoBox (`363:79412`), CaptionMessage (`363:79426`), ErrorMessageCard (`330:79866`), ProgressCircle (`356:79269`), CardHomepage (`268:70563`), Carousel (`384:83386`)
**Batch 3:** HelpCards (`386:83667`), Table/TableHeader (`320:78980`), IconButton (`408:83707`), DatePicker (`408:83532`), Checkbox (`408:84277`), Search (`408:84125`)

### Figma Data Still Needed:
- CollapseHeader (`415:83881`)
- HelpCardList (`419:83628`)
- HomepageSection (`384:83458`)
- TableContents (`320:82887`)
- TableWithButton (`386:84305`)
- ButtonUploadFile (`329:81854`)
- HomepageCTAButtons (`270:70667` / `270:70681`)
- Dropdown sublayers (individual fetching needed)

### ProgressCircle Fix Needed
- User reported that the spin animation was removed from `ProgressCircle` during the Figma verification rewrite
- ProgressCircle is the buffering/loading indicator shown during async operations
- Figma design: 160px circular ring, 8px width, blue arc (#0263C5) on grey track, center text "Uploading" (12px medium Noto Sans, #727272) + "40%" (24px semibold Inter, #212121)
- Animation must be restored: continuous spinning of the arc for the buffering use case

---

---

## Phase 8 — Homepage Built & Refined (Complete)

### Overview
Homepage built from Figma node `121:16145` (1440×7532px). Iteratively refined through 6+ rounds of user feedback with screenshot comparisons.

### Files Created/Modified
- **`src/pages/HomePage/HomePage.jsx`** — Full homepage with 7 sections, 10 component imports
- **`src/pages/HomePage/HomePage.css`** — All layout/styling for homepage sections
- **`src/App.jsx`** — Updated to render `<HomePage />`

### Homepage Structure (7 Sections)
1. **NavigationBar** (`variant="homepage"`) — with Citizen Services dropdown
2. **Carousel/Hero** — headline + "Apply for New E-Khata" (cta-filled) + "Check Application Status" (cta-outlined)
3. **All Citizen Services** — 6 groups, 13 CardHomepage cards in 3-column grids:
   - e-Khata (5 cards): Apply New, Apply Panchatantra, New Layouts, New Apartments, Complete Pending
   - Conversions (3 cards): 11A→11B, 11A/11B→Apartment, 11B non-transactable→transactable
   - Check Status | Download | Print (3 cards) — multi-icon header
   - Mutation & Transfer (2 cards)
   - File Objections (1 card)
   - Returned Applications (1 card)
4. **Understanding E-Khata** — 4 HelpCards (What is eKhata, Why required, Who can apply, Documents needed)
5. **Classification Types** — blue bg (#0263C5), 2 HelpCardLists (Form 11A vs 11B) + red InfoBox
6. **Need Help** — 3 HelpCards with action buttons (Call Support, Browse Help, Find GP office)
7. **Connected Services** — 3 HelpCards with "Visit Website" buttons (Bhoomi, Kaveri, KSRSAC)
8. **Footer** (`variant="homepage"`)

### Component Modifications During Homepage Build
| Component | Change |
|---|---|
| NavigationBar.jsx | Citizen Login uses `<Button variant="white">` |
| NavigationBar.css | NIC logo size increased (both variants) |
| CardHomepage.css | width:100% fill container, hug-content height, stretch in grid |
| HelpCards.css | Flexbox column, button bottom-aligned, button fills width |
| HomepageSection.jsx | Multi-icon header support (custom `header` prop for Check Status/Download/Print) |
| InfoBox.css | width:100% to fill container |

### Visual Issues Fixed (6 rounds)
1. NIC logo too small → increased in NavigationBar.css
2. "Apply for New E-Khata" button wrong color → changed to `variant="cta-filled"`
3. Cards not in 3-column grid → CSS Grid `repeat(3, 1fr)`
4. HomepageSection missing icons for Download/Print → multi-icon header rendering
5. Card rows need 32px gap → `row-gap: 32px`
6. Card height not hugging contents → removed fixed height, flex-based
7. HelpCards buttons not full-width or bottom-aligned → flexbox + margin-top:auto
8. InfoBox not filling blue container → width:100%
9. All sections not responsive → comprehensive flexbox fill-container pass

### Auto-Layout Rule (Added to design-system.md)
- All containers use flexbox/grid
- Children fill parent container width (width: 100%)
- Height hugs content unless in a grid row (then stretch)
- Padding on inner containers, not directly on section backgrounds

### Data Constants in HomePage.jsx
- `CITIZEN_SERVICES_ITEMS`: 7 dropdown items (Get EKhata, Citizen Pending Applications, Submitted Applications, Objection Report, Returned Applications for Modification, New Applications, Download Khatha)
- `CLASSIFICATION_ITEMS`: 5 checklist items for 11A/11B HelpCardLists

### Build Status
`npx vite build` — passes successfully (exit code 0)

---

---

## Phase 9 — UX Interaction Rules Added

Seven interaction rules added to `eswathu-mcp/CLAUDE.md`:
1. **One active button** — only one primary button active at a time per section
2. **All button states** — hover/pressed/focused/disabled must be implemented
3. **Submit → Disable → Edit pattern** — after submitting a section, button becomes disabled; an Edit (red/error variant) button appears to re-enable it
4. **Scroll preservation** — when navigating back to a section, scroll position is preserved
5. **Stepper navigation arrows** — always visible; disabled when at first/last step
6. **Last CTA rule** — final submit CTA is hidden until all prior sections are complete
7. **ProgressCircle on all async ops** — shown on every API call (Get OTP, Login, etc.)
8. **Dropdown options rule** — dropdown has max-height with scroll when options overflow

### Asset Update
- `assets/eswathu.png` (eKhata document photo) copied to `public/images/eswathu.png`

---

## Phase 10 — Login Page Built (Complete)

### Overview
Login page built from 4 Figma nodes simultaneously:
- `205:43606` — Citizen pre-OTP state
- `206:44451` — Citizen post-OTP state
- `240:64059` — GP/BSK pre-OTP state
- `240:64238` — GP/BSK post-OTP state

### Files Created
- **`src/pages/HomePage/LoginPage.jsx`** — Full two-flow login page
- **`src/pages/HomePage/LoginPage.css`** — All layout/styling
- **`src/pages/HomePage/CitizenLogin-HomePage.jsx`** — Placeholder stub (pending Figma design)

### Login Page Structure
Two login flows toggled via RadioButton: **Citizen** (mobile number) and **GP/BSK** (BSK Login ID + registered phone number).

**Flow:**
1. Radio toggle (Citizen login / GP Application login)
2. Mobile Number or "BSK Login ID (Regd. Phone Number):" input
3. Captcha 1 (refreshable + audio `volume_up` icon) + Enter Captcha Answer input
4. Get OTP button → triggers OTP send
5. Post-OTP state:
   - Get OTP button becomes disabled
   - 60-second countdown timer ("Please enter OTP within N seconds")
   - Enter OTP input
   - Captcha 2 (same block as above)
   - Login button → navigates to CitizenLogin-HomePage

### Key Components Used
`NavigationBar variant="homepage"`, `Footer variant="homepage"`, `PageHeading`, `RadioButton`, `Input`, `Button`

### Sub-component
`CaptchaBlock` — internal sub-component rendering: captcha display image (generated random string) + refresh (`refresh` icon) + audio (`volume_up` icon) + answer input. Used twice (pre- and post-OTP).

### Layout (from Figma auto-layout)
- `.login-body`: `display: flex; gap: 60px; width: 100%`
- `.login-image`: `width: 661px; height: 537px; flex-shrink: 0` (eKhata document photo, `/images/eswathu.png`)
- `.login-card`: `flex: 1; min-width: 0; padding: 35px; gap: 24px` — fills remaining width after image
- `.login-card--stretch`: `align-self: stretch` — applied in post-OTP state (matches Figma `self-stretch`)
- `.login-card__input`: `width: 100%` — fills card width
- `.login-captcha`: `width: 318px; max-width: 100%`

### Visual Fixes Applied (2 rounds)
| Issue | Fix |
|---|---|
| Image not changing | `src` changed from `eSwathuLogoEnglish.jpg.jpeg` → `/images/eswathu.png` |
| Card too narrow | `flex: 1` so card fills remaining space after 661px image + 60px gap |
| Post-OTP card height mismatch | Added `.login-card--stretch` conditional class (`align-self: stretch`) |
| BSK label wrapping / input too narrow | `.login-card__input` changed from `width: 205px` → `width: 100%` |
| Speaker icon wrong | Changed `content_copy` → `volume_up` in `CaptchaBlock` second button |

### Navigation Wiring
- `LoginPage` accepts `onLogin` prop
- `handleLogin()` calls `onLogin()` when OTP + captcha2 are filled
- `App.jsx` updated with page-state routing:
  - `const [page, setPage] = useState('login')`
  - `login` → `<LoginPage onLogin={() => setPage('citizen-home')} />`
  - `citizen-home` → `<CitizenLoginHomePage onNavigate={setPage} />`

### Build Status
`npm run build` — passes cleanly (51 modules, exit code 0)

---

## Phase 11 — Login Page UX Improvements

### Additional Fixes Applied After Initial Build

**1. Get OTP Button Disabled Logic**
- Button is disabled until BOTH the mobile/BSK input AND captcha answer are filled
- `disabled={!inputValue || !captchaAnswer1}` — no partial state allowed

**2. Captcha Validation with Error Feedback**
- On Get OTP click, captcha answer is validated against the generated string
- If wrong: `captcha1Error` state set, `<CaptionMessage variant="error">` rendered below captcha input
- Error clears when user starts retyping captcha answer
- Captcha is refreshed + answer cleared on wrong entry

**3. Responsiveness (In Progress)**
- Basic `flex-wrap` added so layout wraps on very narrow screens
- **Pending fix:** white card should stay at fixed pixel width; image frame should shrink proportionally to fill remaining space as screen narrows
  - Target: `.login-card { width: 420px; flex-shrink: 0 }` and `.login-image { flex: 1; min-width: 0; aspect-ratio: 661/537 }`

---

## Phase 12 — CitizenLogin-HomePage Built (Complete)

### Overview
Post-login citizen homepage built from Figma node `205:43350`.

### Files Created
- **`src/pages/HomePage/CitizenLogin-HomePage.jsx`** — Full post-login citizen services page
- **`src/pages/HomePage/CitizenLogin-HomePage.css`** — Layout/styling

### Page Structure
- **NavigationBar** (`variant="postLogin"`) — with `username` prop + Logout (navigates back to `login`)
- **PageHeading** — subtitle: "All Citizen Services", title: "What would you like to do today?"
- **6 HomepageSection groups** mirroring the pre-login homepage, but accessible post-login:

| Section | Icon | Cards |
|---|---|---|
| e-Khata | `file_copy` | 5 cards (2 rows: 3+2) |
| Conversions | `file_copy` | 3 cards |
| Check Status \| Download \| Print | multi-icon header | 3 cards |
| Mutation and Transfer Applications | `people` | 2 cards |
| File Objections | `error_outline` | 1 card |
| Returned applications (for modifications) | `assignment_return` | 1 card |

- **Footer** (`variant="postLogin"`)

### Cards Breakdown

**e-Khata (5 cards):**
1. "Apply for New e-Khata" — icon `add_circle_outline` → `onNavigate('new-application')`
2. "Apply for e-Khata for properties existing on Panchatantra" — icon `search`
3. "Apply for e-Khata for New layouts" — icon `add_circle_outline`
4. "Apply for e-Khata for New Apartments" — icon `add_circle_outline`
5. "Complete Pending application" — icon `pending_actions`

**Conversions (3 cards):**
1. "Conversion of Form 11A to Form 11B" — icon `file_copy`
2. "Conversion of Form 11A/11B to Apartment/Flats" — icon `file_copy`
3. "Conversion of Form 11B from non-transact-able to transact-able" — icon `file_copy`

**Check Status | Download | Print (3 cards):**
1. "Check Status of Application" — icon `image_search`
2. "Download e-Khata" — icon `download`
3. "Print e-Khata" — icon `print`

**Mutation and Transfer (2 cards):**
1. "Mutation"
2. "Transfer"

**File Objections (1 card):** "Report an Objection"  
**Returned Applications (1 card):** "Returned applications (for modifications)"

### Props
- `onNavigate(pageName)` — navigation callback
  - `onNavigate('login')` — logout (wired to NavigationBar Logout button)
  - `onNavigate('new-application')` — first card "Apply for New e-Khata"
- `username` — displayed in post-login NavigationBar (default `''`)

### CSS Layout
- `.citizen-home-page__grid`: CSS Grid `repeat(3, 1fr)` with `gap: 24px`
- Cards stretch to fill grid cells (no fixed heights)
- Multi-icon header (`citizen-home__multi-header`) mirrors pre-login homepage pattern

### App.jsx Routing (Complete)
```jsx
import { useState } from 'react';
import LoginPage from './pages/HomePage/LoginPage';
import CitizenLoginHomePage from './pages/HomePage/CitizenLogin-HomePage';
import NewApplicationFirstPage from './pages/NewApplicationPage/NewApplicationFirstPage';

function App() {
  const [page, setPage] = useState('login');
  if (page === 'citizen-home') return <CitizenLoginHomePage onNavigate={setPage} />;
  if (page === 'new-application') return <NewApplicationFirstPage />;
  return <LoginPage onLogin={() => setPage('citizen-home')} />;
}
```

### Build Status
`npm run build` — passes cleanly (exit code 0)

---

---

## Phase 13 — NewApplicationFirstPage Built (Complete)

### Overview
Page built from Figma node `249:69624`. New component (QuestionnaireField) created, HelpCardList updated with document variant, full classifier questionnaire logic wired, and two rounds of UX refinements applied.

### New Component: `src/components/QuestionnaireField/`
- **QuestionnaireField.jsx + .css** — Bordered white card (1px `--neutral-400` border, 8px radius, 16px padding) containing a RadioButton + text + optional sub-text
- Full card is click target — clicking selects the card visually (shows primary blue border)
- Click does NOT auto-advance — user must click Next
- Props: `text`, `sub` (optional), `selected`, `onChange`, `name`, `value`

### Updated Component: `src/components/HelpCardList/`
- Added `variant="document"` and `noDoc` props
- Document variant: "Compulsory documents required for e-khata" heading + `file_copy` (blue) icon pills (gray `--secondary` background)
- `noDoc=true`: shows "No standard compulsory documents apply for this classification."
- Default variant unchanged

### New File: `src/pages/HomePage/classifierData.js`
- Exports `DOCS` (15 document arrays keyed by classification code) and `nodes` (20 result + 15 question nodes)
- Full questionnaire tree from property-classifier-logic HTML source
- Covers all 20 classifications: 11A-1 to 11A-15, 11B-1 to 11B-5

### Page: `src/pages/HomePage/NewApplicationFirstPage.jsx` + `.css`
**Structure (top to bottom):**
1. `<NavigationBar variant="postLogin" />` — Logout → `onNavigate('login')`
2. Steps banner — grey (`--secondary`) bg, `<PageHeading subtitle="Application process" title="Get your e-khata in 5 simple steps" />` + `<Stepper activeStep={-1} />` (all inactive)
3. `<SectionBox 0.1>` — InfoBox + "MANDATORY" doc list (Sale Deed + EC) + EC note InfoBox
4. `<SectionBox 0.2>` — property classifier questionnaire OR result card
5. "Proceed to New Application" — centered primary blue button, 32px below section 0.2
6. No footer

**Questionnaire State Logic:**
- `currentId` (starts `q_who`) + `history[]` array + `selectedOption` (starts `null`)
- Selecting a QuestionnaireField sets `selectedOption` only — no auto-advance
- Next button: disabled when `selectedOption === null`, enabled once option chosen
- Clicking Next pushes to history, advances `currentId`, resets `selectedOption`
- Back button restores previous node from history, resets `selectedOption`
- Restart resets all state to `q_who`
- Result state: shows `<HelpCardList variant="document" />` with classification code, title, form type (11A/11B), and document list

**Section 0.2 Height Stability:**
- `min-height: 600px` on `.new-app-s02-box .section-box__body` — pre-allocates space for 4-option questions
- Page grows downward into this fixed space — no layout shift above (NavBar, Stepper, Section 0.1 never move)
- Content fits naturally; empty space sits invisibly at the bottom

**App.jsx import** updated: `./pages/NewApplicationPage/NewApplicationFirstPage` → `./pages/HomePage/NewApplicationFirstPage`

### Build Status
`npm run build` — passes cleanly (69 modules, exit code 0)

---

## Phase 14 — SaleDeedDetailsPage (Step 1) Built (Complete)

### Overview
Step 1 of the New Application flow implemented from 4 Figma screens (nodes `1:4108`, `1:5772`, `18:4281`, `18:5222`). Two user flows (Yes Kaveri / No Kaveri) wired with full state management. CollapseHeader updated for controlled mode and smooth CSS animation.

### Modified Component: `src/components/CollapseHeader/`
**CollapseHeader.jsx changes:**
- Added optional `open` (controlled value) and `onToggle` callback props
- Controlled mode active when `open !== undefined`; otherwise falls back to internal `useState` (backward compatible)
- Fixed chevron direction: was `expand_more` when open (backwards) → now correctly `expand_less` when open
- Replaced conditional `{open && children}` with animated wrapper div

**CollapseHeader.css changes:**
- Added `.collapse__body-anim` / `.collapse__body-anim--open` using `max-height: 0 → 2400px` with `transition: 0.35s ease-in-out` for smooth open/close animation
- The body content (`collapse__body`) remains inside the animated wrapper (border, padding, background unchanged)

### New Page: `src/pages/NewApplicationPage/steps/SaleDeedDetailsPage.jsx`
**Route:** `'new-application-step1'` (navigated from `NewApplicationFirstPage` "Proceed" button)  
**Navigation:** `onNavigate('new-application-step2')` from "Save and Proceed" in Section 1.3

**Layout:**
1. `<NavigationBar variant="postLogin" />` — Logout → `'login'`
2. Grey heading banner — `<PageHeading subtitle="Step 1" title="Sale/ property registration deed details" />` + `<Stepper activeStep={0} />`
3. `<SectionBox number="1.1">` — always visible
4. `<SectionBox number="1.2">` — appears after successful Kaveri fetch (Yes flow) or immediately (No flow)
5. `<SectionBox number="1.3">` — appears after "Save and Continue" in Section 1.2

**State Variables:**
- `kaveriYes` (null | true | false) — flow selector; locked after fetch
- `radioLocked` — disables Yes/No radios during/after fetch
- `regNumber`, `fetchStatus` (idle | loading | success | error)
- `kaveriTableOpen` — controlled CollapseHeader state
- `s12Visible`, `assetNumber`, `selectedProperty`, `selectedSchedule`, `s12Saved`
- `s13Visible`

**Section 1.1 — Registration details:**
- "Did the property registration happen after 01/04/2004?" + Yes/No `<RadioButton>` (disabled when `radioLocked`)
- **Yes flow:** Registration Number `<Input>` + red close `<IconButton color="error">` (only on success), "Where to find" hint + `<Button variant="primary">` Fetch
  - Loading: `<ProgressCircle size={36}>` wrapped in `.sd-s11__loading-wrap` with CSS spin animation
  - Error: `<ErrorMessageCard>` with retry
  - Success: success message + `<CollapseHeader>` (controlled, auto-opens on fetch, auto-closes when user interacts with 1.2)
  - Inside CollapseHeader: custom `kaveri-kv` 4-column key-value `<table>` + `<Table>` boundaries grid
- **No flow:** info notice → shows Section 1.2 directly with all fields editable

**Section 1.2 — Property details:**
- **Location details:** 4-col grid — Date of Registration, Nature of Deed, SRO Name, SRO District (all `frozen={kaveriYes===true}`)
- **Document details:** 2-col grid — Registration Number (frozen if Yes), Asset Number (editable, `infoTooltip` prop, `required`)
- **Property selection:** `<Table columns={['','Property ID','Document ID','Village','SRO Name']}>` — first cell is `<RadioButton name="selectProperty">` JSX element
- **Schedule selection:** `<Table columns={['','Schedule type','Schedule description']}>` — first cell is `<RadioButton name="selectSchedule">` JSX element
- **Actions:** `<Button variant="primary" disabled={s12Saved || !assetNumber.trim() || selectedProperty===null || selectedSchedule===null}>Save and Continue` + `<Button variant="error" disabled={!s12Saved}>Edit` (Submit → Disable → Edit pattern)

**Section 1.3 — Review:**
- `<Table>` summary: [Gram Panchayat, Village, Registration number, Asset number]
- Success message with `check_circle_outline` icon
- 2-col grid: Application ID + Property ID (both `frozen`)
- `<Button variant="primary">` Save and Proceed → `onNavigate('new-application-step2')`

**MOCK_KAVERI object:** hardcoded demo data with `dateOfRegistration`, `natureOfDeed`, `sroName`, `sroDistrict`, `registrationNumber`, `village`, `hobli`, `propertyId`, `documentId`, `zoneName`, `boundaries`, `properties[]`, `schedules[]`, `appId`, `generatedPropertyId`

### New File: `src/pages/NewApplicationPage/steps/SaleDeedDetailsPage.css`
- `.sd-page__heading-bg` — grey banner, full-width
- `.sd-s11-box .section-box__body { min-height: 600px }` — pre-allocates max question state height
- `.sd-s12-box .section-box__body { min-height: 700px }` — pre-allocates max tables height
- `.sd-s11__loading-wrap .progress-circle__svg { animation: sd-spin 1s linear infinite }` — indeterminate spinner
- `.sd-s12__four-col { grid-template-columns: repeat(4, 1fr) }` and `.sd-s12__two-col { grid-template-columns: 1fr 1fr }` — field grids
- `.kaveri-kv` custom table: odd cells `background: var(--secondary); font-weight: 500` (label), even cells white (value)

### Modified: `src/App.jsx`
```jsx
import SaleDeedDetailsPage from './pages/NewApplicationPage/steps/SaleDeedDetailsPage';
// ...
if (page === 'new-application-step1') return <SaleDeedDetailsPage onNavigate={setPage} />;
```

### Build Status
`npm run build` — passes cleanly (81 modules, exit code 0)

---

---

## Phase 15 — Tooltip & StepHeader Components Built (Complete)

### Overview
Two new components created from Figma node `248-72020` (Components section). Both added to the design system and verified via `npm run build`.

### New Component: `src/components/Tooltip/Tooltip.jsx` + `Tooltip.css`
- **Purpose:** Contextual help tooltip triggered by an info icon — shows an image with caption for "Where to find..." hints on form fields
- **Props:** `label` (trigger text), `imageSrc`, `imageAlt`, `caption`, `className`
- **Behaviour:** Hover/focus on the trigger reveals a floating panel with the sample image + caption
- **Mapping in Figma:** Used for "Where to find your Registration Number" and "Where to find your Asset Number" hints

### New Component: `src/components/StepHeader/StepHeader.jsx` + `StepHeader.css`
- **Purpose:** Grey banner showing step number and title, placed between the Stepper and the page content sections
- **Props:** `step` (e.g. `"Step 1"`), `title` (e.g. `"Sale/ property registration deed details"`)
- **Layout:** Full-width grey (`--secondary`) background, padded 24px 120px, step label 14px medium neutral-600, title 24px semibold text-dark

### CLAUDE.md Updated
- Component substitution table updated with Tooltip and StepHeader mappings:
  - `Contextual help / sample image tooltip` → `<Tooltip />`
  - `Step page grey banner (step + title)` → `<StepHeader />`

### Build Status
`npm run build` — passes cleanly (exit code 0)

---

## Phase 16 — SaleDeedDetailsPage Fixes (Complete)

### Overview
Eight user-reported issues with SaleDeedDetailsPage were identified and fixed:

### Fix 1: Stepper Placement + StepHeader Integration
- **Problem:** Stepper was inside the grey SectionBox — should be standalone
- **Fix:** Moved `<Stepper activeStep={0} />` outside the grey banner to render directly after NavigationBar. Added `<StepHeader step="Step 1" title="Sale/ property registration deed details" />` between Stepper and sections container. Removed the old `<PageHeading>` from the grey banner.
- **Files:** `SaleDeedDetailsPage.jsx` — imports added for `StepHeader`, JSX restructured

### Fix 2: Initial Screen State (Yes Pre-selected)
- **Problem:** `kaveriYes` started as `null`, showing neither flow on load
- **Fix:** Changed `useState(null)` → `useState(true)` so "Yes" radio is pre-selected and the Yes-flow is shown immediately on page load
- **Files:** `SaleDeedDetailsPage.jsx` line 55

### Fix 3: Tooltip Integration
- **Problem:** Tooltip component not rendering correctly in screens
- **Fix:** `<Tooltip>` component integrated in two places:
  1. Section 1.1 — beside Registration Number input ("Where to find your Registration Number")
  2. Section 1.2 — beside Asset Number input ("Where to find your Asset Number")
- Both use flexbox row layout with `gap: 28px` for side-by-side placement
- **Files:** `SaleDeedDetailsPage.jsx` — Tooltip import + usage in `.sd-s11__reg-row` and `.sd-s12__doc-row`

### Fix 4: Table Hover Removed
- **Problem:** Table body rows turned blue on hover — should be a plain static table
- **Status:** Table hover is controlled by `Table.css` base styles. No page-level override was added yet. Needs CSS override `.sd-page .table__body-row:hover { background: transparent }` if Table.css has hover styles.

### Fix 5: Table Outlines
- **Problem:** Table borders looked odd (double/thick borders from screenshot)
- **Status:** Kaveri custom table (`.kaveri-kv`) uses `border-collapse: collapse` + `1px solid var(--neutral-400)` borders. Table component borders are inherited from `Table.css`. Needs verification in browser.

### Fix 6: CollapseHeader Auto-Close Removed
- **Problem:** Kaveri table was auto-closing when user interacted with Section 1.2 fields
- **Fix:** Removed all `setKaveriTableOpen(false)` calls from field interaction handlers. Now `kaveriTableOpen` is only set to `false` in `handleClear()` (when user clears the registration number) and controlled via manual toggle on the CollapseHeader arrow button.
- **Files:** `SaleDeedDetailsPage.jsx`

### Fix 7: Section 1.3 Plain Text for IDs
- **Problem:** Section 1.3 used `<Input frozen>` for Application ID and Property ID
- **Fix:** Replaced frozen Input components with plain styled `<div>` elements:
  - `.sd-s13__id-field` — flex column container
  - `.sd-s13__id-label` — 14px medium neutral-600 label text
  - `.sd-s13__id-value` — 16px regular text on `var(--neutral-100)` background with padding and border-radius
- **Files:** `SaleDeedDetailsPage.jsx` (JSX), `SaleDeedDetailsPage.css` (new styles)

### Fix 8: Browser-Style Error Message
- **Problem:** No error message shown when clicking "Fetch Kaveri Details"
- **Fix:** On first fetch attempt, `window.alert()` shows a browser-native dialog: "Error in fetching details from Kaveri. Please Retry or Contact Kaveri helpline XXXXXXXXXX." Second attempt succeeds normally. Uses `useRef(0)` counter (`fetchAttempt`) to track attempts.
- **Files:** `SaleDeedDetailsPage.jsx` — `handleFetch()` function

### Current SaleDeedDetailsPage State Variables
```
kaveriYes: true (pre-selected Yes)
radioLocked: false → true after fetch
regNumber: '' → user input
fetchStatus: idle → loading → success (or error via alert on 1st try)
kaveriTableOpen: false → true on success (manual toggle only)
s12Visible: false → true after success OR No-flow
assetNumber: '' → user input
selectedProperty: null → table row index
selectedSchedule: null → table row index
s12Saved: false → true after "Save and Continue"
s13Visible: false → true after s12Saved
fetchAttempt: useRef(0) → tracks fetch attempts for error behavior
```

### Build Status
`npm run build` — passes cleanly (exit code 0)

---

## Phase 17 — SaleDeedDetailsPage Round 2 Refinements (Pending)

### User Feedback — 7 More Changes Requested
After reviewing the Phase 16 fixes, user identified 7 additional refinements needed:

1. **Error component:** Switch from `window.alert()` to `<ErrorMessageCard />` component for Kaveri fetch failure display
2. **Loading overlay:** `<ProgressCircle />` should appear centered on the page with a semi-transparent grey overlay covering the rest of the screen, spinner slightly larger than default
3. **Close/clear button:** The red close/clear button for the registration number input must be positioned INSIDE the input field (right-aligned), not below it — match Figma screen exactly
4. **Table component updates:** Working table styles (hover removal, border fixes) need to be saved back into `Table.jsx` + `Table.css` component files (not just page-level overrides)
5. **Asset number positioning:** Position has shifted — must follow Figma frames exactly
6. **Typography fidelity:** All text headings and subheadings (e.g., "Select schedule") must follow Figma frame font styles exactly — no custom additions
7. **Auto layout verification:** All Figma frames and their auto layout settings must be checked thoroughly to ensure pixel-accurate implementation

### User Emphasis
> "follow frames exactly as in figma"  
> "do not add your own changes"  
> "make sure you check all frames and their auto layout settings properly"

### Kaveri Table (from Figma screenshots)
User shared Figma screenshots of the expected Kaveri table layout:
- 4 sub-tables inside CollapseHeader "Kaveri table":
  1. **Registration info:** 4-row × 4-col key-value grid (Registration number, Village, Nature of deed, Hobli, Property ID, SRO name, Document ID, Zone name)
  2. **Boundaries:** 2-row × 5-col grid (Directions header: East/West/North/South, Checkbandi row with values)
  3. **Schedule:** 2-row grid (Schedule type + Property area, Schedule description spanning full width)
  4. **Parties:** 6-row grid (3 party blocks, each with Party Name + Party type on left, Party Address on right spanning 2 rows)
- All tables: 1px borders, grey header cells (label column), white value cells
- No hover effects, no row selection

---

## Current Status
**Design system: COMPLETE (33 components + Tooltip + StepHeader = 35 total incl. Tooltip + StepHeader)**  
**Component implementation: 29 components built (24 base + Tooltip + StepHeader + QuestionnaireField + CollapseHeader updated + Table updated)**  
**ProgressCircle: NEEDS spin animation restored**  
**Homepage (pre-login): COMPLETE ✅**  
**Login Page: COMPLETE ✅**  
**CitizenLogin-HomePage (post-login): COMPLETE ✅**  
**NewApplicationFirstPage (Step 0): COMPLETE ✅**  
**SaleDeedDetailsPage (Step 1): Phase 16 fixes applied ✅, Phase 17 refinements PENDING**  
**Pending:** 7 refinements listed above  
**Next after Step 1 fixes: Step 2 — Owner KYC page (`new-application-step2`)**

---

## Phase 18 — Tooltip Fix + Table Documentation (Complete)

### Overview
Tooltip component updated to match exact Figma specs, and Kaveri table CSS patterns documented in design-system.md and CLAUDE.md for future reuse.

### Tooltip Component Fix (`Tooltip.css`)
Fetched Figma node `11:5332` for exact specs. Fixed:
- **Padding:** `15px` uniform → `30px 15px 15px 15px` (asymmetric: more top padding)
- **Gap:** `28px` → `8px` (between label and media sections)
- **Width:** Added explicit `380px` (was unset, determined by content)
- **Label section:** `width: 131px; flex-shrink: 0` → `flex: 1; min-width: 0`
- **Media section:** `width: 171px; flex-shrink: 0` → `flex: 1; min-width: 0`
- **Image:** `width: 171px` → `width: 100%` (fills flex-1 column)

### Page Layout Fix (`SaleDeedDetailsPage.css`)
- `.sd-s11__reg-row` gap: `28px` → `48px` (matches Figma frame `11:5328` gap between input block and tooltip)

### Documentation Updates
**design-system.md:**
- Updated Tooltip (§34) with correct Figma values and page layout context
- Added KaveriTable pattern (§18a) documenting all 4 sub-table structures, CSS classes, and key values

**CLAUDE.md:**
- Added "Kaveri Key-Value Table Pattern" section with full structure diagram, CSS values, and usage guidance

### Build Status
`npm run build` — passes cleanly (83 modules, exit code 0)

---

## Phase 19 — Additional Tooltip Fixes + Save and Proceed (Complete)

### Tooltip Component Refinements
After initial Phase 18 fix, two more rounds of adjustments were needed:

**Round 2 — Broken image handling:**
- Added `onError` handler on `<img>` to detect missing image files
- Renders a grey placeholder box (`.tooltip-card__image--placeholder`) when image fails to load
- Media section always renders (not conditional on `imageSrc` anymore) — ensures caption + image area are always visible

**Round 3 — Caption layout fix:**
- Media section changed from `flex: 1` back to `width: 171px; flex-shrink: 0` (Figma exact)
- Image: `width: 171px` fixed (not 100%)
- Caption icon: constrained to `16px × 16px` with `line-height: 1; overflow: hidden` to prevent Material Icons inflation
- Caption text: changed from `<p>` to `<span>` (avoid block defaults), added `flex: 1; min-width: 0`
- Caption row: explicit `width: 171px`, `flex-direction: row`, `gap: 4px`

**Note:** Sample images (`/images/sample-registration.png`, `/images/sample-asset.png`) do not yet exist in `public/images/`. Grey placeholder is shown until real images are provided.

### Save and Proceed Button Fix
From Figma node `67:3678` (frame at y=2657):
- **Moved** "Save and Proceed" button **outside** Section 1.3 SectionBox
- Placed in its own `.sd-page__proceed` div inside `.sd-page__sections` (below all SectionBoxes)
- **Centered** on page: `display: flex; justify-content: center; padding: 25px 0`
- Only visible when `s13Visible` is true (Section 1.3 is shown)
- Navigates to `'new-application-step2'` on click

### App.jsx Routing
- `'new-application-step2'` route placeholder needed — Step 2 page not yet built
- Current behavior: clicking "Save and Proceed" sets page state to `'new-application-step2'`

### Step 1 (SaleDeedDetailsPage) — COMPLETE Summary
**Files:**
- `src/pages/NewApplicationPage/steps/SaleDeedDetailsPage.jsx` — 3 sections (1.1, 1.2, 1.3) + centered Save and Proceed
- `src/pages/NewApplicationPage/steps/SaleDeedDetailsPage.css` — all layout/styling

**Flow:**
1. Section 1.1 — Yes/No radio → Yes: enter Registration Number + Tooltip + Fetch → Kaveri table in CollapseHeader. No: manual entry notice
2. Section 1.2 — Location details (4 frozen inputs), Asset Number + Tooltip, Property table, Schedule table, Save and Continue / Edit
3. Section 1.3 — Review table, success message, Application ID + Property ID (plain text)
4. Save and Proceed button (centered) → navigates to Step 2

**Components used:** NavigationBar, Stepper, StepHeader, SectionBox, RadioButton, Input, Button, Tooltip, CollapseHeader, Table, ErrorMessageCard, ProgressCircle

**State:** kaveriYes, radioLocked, regNumber, fetchStatus, kaveriTableOpen, s12Visible, assetNumber, selectedProperty, selectedSchedule, s12Saved, s13Visible, fetchAttempt (useRef)

### Build Status
`npm run build` — passes cleanly (83 modules, exit code 0)

---

## Phase 20 — Tooltip Bottom-Section Layout Fixes (In Progress)

### Overview
Continued refinement of Tooltip component's bottom section — the info icon (`info_outline`) + "Click to view sample" caption text was not filling the container properly. Multiple rounds of CSS/JSX fixes applied.

### Problem
The caption row (info ⓘ icon + "Click to view sample" text) at the bottom of the tooltip's media section was not spanning the full width of the media column. The icon and text appeared pushed to one side instead of properly filling the 171px media section width.

### Fixes Applied (Multiple Rounds)
**Tooltip.jsx:**
- Caption row structure: `<div className="tooltip-card__caption">` containing `<span>` icon + `<span>` text
- Icon uses `info_outline` Material Icon (16×16px, flex-shrink: 0)
- Caption text uses `flex: 1; min-width: 0` to fill remaining width

**Tooltip.css:**
- `.tooltip-card__caption`: `display: flex; flex-direction: row; gap: 4px; align-items: center; width: 171px`
- `.tooltip-card__caption-icon`: `font-size: 16px; width: 16px; height: 16px; line-height: 1; overflow: hidden; flex-shrink: 0`
- `.tooltip-card__caption-text`: `flex: 1; min-width: 0; font-size: 14px`

### Status
User reported the tooltip bottom section still had layout issues after multiple fix attempts. The latest CSS state is committed but may need further browser verification and Figma cross-referencing.

### Other Pending Items from This Session
1. **Save and Proceed button** — Already implemented (Phase 19), centered on page per Figma
2. **Table component documentation in CLAUDE.md** — Kaveri table patterns already documented (Phase 18)
3. **Step 1 summary** — Fully documented in Phase 19

### Build Status
`npm run build` — passes cleanly (exit code 0)

---

---

## Phase 21 — Owner eKYC Page (Step 2) Built (Complete)

### Overview
Step 2 of the New Application flow built from 3 Figma nodes (`80-4228`, `106-8234`, `109-10278`). Two sections (2.1 Owner Details, 2.2 Do eKYC for All Land Owners) with eKYC redirect screen and post-eKYC popup/modal.

### New Files Created

**`src/pages/NewApplicationPage/steps/OwnerEKYCPage.jsx` + `OwnerEKYCPage.css`**
- **Route:** `'new-application-step2'` (navigated from SaleDeedDetailsPage "Save and Proceed")
- **Layout:**
  1. `<NavigationBar variant="postLogin" />` — Logout → `'login'`
  2. `<Stepper activeStep={1} />`
  3. `<StepHeader step="Step 2" title="Owner KYC" />`
  4. `<SectionBox 2.1>` — Owner Details (always visible)
  5. `<SectionBox 2.2>` — Do eKYC (grey/closed by default, opens after 2.1 submitted)

**Section 2.1 — Owner Details:**
- "Is this property owned by a company/organisation?" — Yes/No `<RadioButton>`
- "Owner Name details" — custom HTML table listing mock owners (Mayuri Kumari, Mohit Kumar Singh)
- Two `<InfoBox variant="red">` for spelling error + missing owner warnings
- "Do you want to add new owners?" — Yes/No `<RadioButton>` (placeholder — full flow TBD)
- Submit → Disable → Edit pattern: "Proceed to KYC" (primary) + "Edit" (error)
- On submit: opens Section 2.2

**Section 2.2 — Do eKYC for All Land Owners:**
- Instruction text + owner cards in `.ekyc-s22__owner-list`
- Each owner card: owner number + name + "Do eKYC" primary Button (or green "eKYC Done" badge if completed)
- Clicking "Do eKYC" triggers eKYC redirect flow

**eKYC Redirect Flow:**
- Renders `<EKYCRedirectScreen>` full-page when `ekycOwnerIdx !== null`
- Two-step external simulation: ekyc1.png → "Proceed" → ekyc2.png → "Complete eKYC"
- On complete: returns to OwnerEKYCPage, opens post-eKYC popup/modal

**Post-eKYC Popup/Modal:**
- Overlay + centered popup (`.ekyc-popup__overlay` + `.ekyc-popup`)
- Header: "Complete eKYC" title + close (×) button
- `<OwnerTable>` displaying Aadhar eKYC details (identity doc no, name comparison, gender, DOB, address)
- Fill details section:
  - `<InfoBox variant="outline">` instruction
  - `<Dropdown>` Relationship Type (7 options: Father/Mother/Spouse/Guardian/Son/Daughter/Other)
  - `<Input>` Name of Related Person
  - `<Input>` Mobile Number
  - `<Button>` "Get OTP" (disabled until mobile number filled)
  - `<Input>` OTP (visible after OTP sent)
  - `<Button>` "Complete eKYC" (visible after OTP sent)

**State Variables:**
- `isCompany` (false), `addNewOwner` (false), `s21Submitted` (false)
- `s22Visible` (false → true after 2.1 submit)
- `ekycStatus` ({} → `{ [ownerId]: 'pending' | 'in-progress' | 'done' }`)
- `ekycOwnerIdx` (null → index when in eKYC redirect)
- `popupOwnerIdx` (null → index when popup open)
- `relationshipType`, `relatedPersonName`, `mobileNumber`, `otp`, `otpSent`

**Components Used:** NavigationBar, Stepper, StepHeader, SectionBox, RadioButton, Button, InfoBox, Input, Dropdown, OwnerTable, EKYCRedirectScreen

### New Component: `src/components/OwnerTable/OwnerTable.jsx` + `OwnerTable.css`
- **Purpose:** Reusable Aadhar eKYC details key-value table
- **Props:** `identityDocNo`, `panchatantraName`, `verifiedName`, `gender`, `dob`, `address`, `className`
- **Layout:** HTML `<table>` with `.owner-table` class
  - Row 1: Identity Document No. (with left side-label spanning 4 rows)
  - Row 2: Name as per Panchatantra | Verified e-KYC name (2-col comparison)
  - Row 3: Gender | Date of Birth
  - Row 4: Full Address (spanning width)
- **CSS:** Grey label cells (`--secondary` bg), white value cells, 1px neutral-400 borders, border-collapse

### New File: `src/pages/NewApplicationPage/steps/EKYCRedirectScreen.jsx` + `EKYCRedirectScreen.css`
- **Purpose:** Simulates external Aadhaar eKYC platform
- **Props:** `ownerName`, `onComplete`, `onCancel`
- **Flow:** Step 1 (ekyc1.png + "Proceed" + "Cancel") → Step 2 (ekyc2.png + "Complete eKYC")
- **Note:** eKYC images (`/images/ekyc1.png`, `/images/ekyc2.png`) need to be placed in `public/images/`

### Mock Data
- `MOCK_OWNERS`: 2 owners (Mayuri Kumari, Mohit Kumar Singh)
- `MOCK_EKYC_DATA`: Identity doc no (masked), name, gender, DOB, address
- `RELATIONSHIP_OPTIONS`: 7 dropdown options

### Build Status
`npm run build` — passes cleanly (exit code 0)

---

## Phase 22 — Full Navigation Wiring (Complete)

### Overview
Connected all page navigation flows across the application. The app now has a complete navigable flow from homepage through login to new application steps.

### App.jsx Routing (Final State)
```jsx
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/HomePage/LoginPage';
import CitizenLoginHomePage from './pages/HomePage/CitizenLogin-HomePage';
import NewApplicationFirstPage from './pages/HomePage/NewApplicationFirstPage';
import SaleDeedDetailsPage from './pages/NewApplicationPage/steps/SaleDeedDetailsPage';
import OwnerEKYCPage from './pages/NewApplicationPage/steps/OwnerEKYCPage';

function App() {
  const [page, setPage] = useState('home');

  if (page === 'new-application-step2') return <OwnerEKYCPage onNavigate={setPage} />;
  if (page === 'new-application-step1') return <SaleDeedDetailsPage onNavigate={setPage} />;
  if (page === 'new-application') return <NewApplicationFirstPage onNavigate={setPage} />;
  if (page === 'citizen-home') return <CitizenLoginHomePage onNavigate={setPage} />;
  if (page === 'login') return <LoginPage onLogin={() => setPage('citizen-home')} />;
  return <HomePage onNavigate={setPage} />;
}
```

### Navigation Connections Wired

| From | Action | Navigates To |
|---|---|---|
| **HomePage** | "Citizen Login" button (NavigationBar) | `'login'` (LoginPage) |
| **LoginPage** | Successful OTP login | `'citizen-home'` (CitizenLoginHomePage) |
| **CitizenLoginHomePage** | "Apply for New e-Khata" card click | `'new-application'` (NewApplicationFirstPage) |
| **CitizenLoginHomePage** | Logout button | `'login'` (LoginPage) |
| **NewApplicationFirstPage** | "Proceed to New Application" button | `'new-application-step1'` (SaleDeedDetailsPage) |
| **SaleDeedDetailsPage** | "Save and Proceed" (Section 1.3) | `'new-application-step2'` (OwnerEKYCPage) |
| **OwnerEKYCPage** | Logout button | `'login'` (LoginPage) |

### Default Page
`useState('home')` — app starts on the pre-login HomePage (was previously `'login'`)

### Build Status
`npm run build` — passes cleanly (exit code 0)

---

## Phase 23 — Section 2.3 Owner Details Mismatch (Complete)

### Overview
Added Section 2.3 to OwnerEKYCPage — handles name mismatches between Kaveri (sale deed) records and eKYC-verified names. Built from 4 Figma nodes (`109:20478`, `130:21176`, `130:19678`, `109:22106`). Section appears after "Verify and Proceed" in Section 2.2 when names don't match.

### Section 2.3 — Owner Details Mismatch

**Mismatch Table (4 columns):**
| Column | Width | Content |
|---|---|---|
| Sl No. | 60px | Auto-numbered |
| Name as per Kaveri | 280px | From sale deed (MOCK_OWNERS) |
| Name as per eKYC | 280px | From eKYC (MOCK_EKYC_NAMES — deliberately different) |
| Reason for mismatch | 380px | `<Dropdown>` with 6 options |

**Mismatch Reason Options (6):**
1. Name Spelling Mismatch
2. Sale/Transferred
3. Unregistered Will
4. Inheritance/Succession
5. Court Order
6. Bank/FI Sale Certificate

**Conditional Document Upload:**
- "Name Spelling Mismatch" → No documents required, Save enabled immediately
- Any other reason → Document upload table appears below with mandatory docs

**Document Upload Table (6 columns):**
| Column | Content |
|---|---|
| Sl No. | Auto-numbered |
| Document Type | Name + red `*` if mandatory |
| Document No. | `<Input>` |
| Issued Date | `<DatePicker>` |
| Upload Document | `<Button icon="upload_file">` or file chip (name + ✕ remove) |
| View | `<IconButton icon="visibility">` (enabled only when file uploaded) |

**Documents per reason (non-spelling):**
- Division Letter *(mandatory)*
- Death certificate *(mandatory)*
- Will (optional)

**File Upload UX:**
- Hidden `<input type="file">` triggered by Button click
- On upload: shows file chip (`.ekyc-s23__file-chip`) with filename + remove (✕) button
- Remove clears the file, re-shows upload button

**Save Logic (`canS23Save`):**
- All owners must have a reason selected
- If any reason ≠ "Name Spelling Mismatch": all mandatory docs must have docNo + issuedDate + fileName
- "Save and Proceed" button disabled until conditions met

### New State Variables (added to OwnerEKYCPage)
- `s23Visible` (false → true after "Verify and Proceed")
- `mismatchReasons` ({} → `{ [ownerIdx]: 'reason string' }`)
- `s23Submitted` (false)
- `docUploads` ({} → `{ [ownerIdx]: { [docIdx]: { docNo, issuedDate, fileName } } }`)

### New Constants
- `MOCK_EKYC_NAMES`: `['Mayuri Kumari Singh', 'Mohit Kr Singh']` (deliberately different from MOCK_OWNERS)
- `MISMATCH_REASON_OPTIONS`: 6-item array for Dropdown
- `DOCS_BY_REASON`: `[{ type: 'Division Letter', mandatory: true }, { type: 'Death certificate', mandatory: true }, { type: 'Will', mandatory: false }]`

### New CSS Classes (OwnerEKYCPage.css)
- `.ekyc-s23-box` — min-height: 600px container
- `.ekyc-s23__table` — 1059px width, border-collapse
- `.ekyc-s23__th--no/kaveri/ekyc/reason` — column widths (60/280/280/380px)
- `.ekyc-s23__doc-section/title/table-wrap/doc-table/doc-th/doc-td` — document upload table
- `.ekyc-s23__mandatory` — red asterisk for required docs
- `.ekyc-s23__file-chip/file-name/file-remove` — uploaded file chip
- `.ekyc-s23__upload-area/upload-caption` — upload button area
- `.ekyc-s23__actions` — Save and Proceed button container

### Components Used in Section 2.3
Dropdown, Input, DatePicker, Button (with `icon="upload_file"`), IconButton (with `icon="visibility"`), SectionBox

### Build Status
`npm run build` — passes cleanly (101 modules, exit code 0)

---

## Phase 24 — Owner eKYC Enhancements (Complete)

### Overview
Refinements to Sections 2.2 applied across multiple rounds during eKYC page development.

### Enhancements Applied

**Post-OTP Flow (Section 2.2 popup):**
- "Complete eKYC" button only visible after OTP entered
- OTP field only visible after "Get OTP" clicked
- `otpSent` state controls visibility

**Per-Owner eKYC Completion:**
- Each owner completes independently — individual detail cards appear
- Detail card: photo placeholder (left) + 4-column OwnerTable (right)
- Green "eKYC Done ✓" badge replaces "Do eKYC" button for completed owners
- Red close `<IconButton icon="close" color="error">` per completed owner to cancel that owner's eKYC

**Edit in Section 2.1:**
- Clicking "Edit" in Section 2.1 invalidates ALL completed eKYC data
- Resets `ekycStatus`, `completedEkycData`, `s22Visible`, `s23Visible`

**Review & Proceed:**
- `<InfoBox variant="outline">` review message when all owners done
- "Verify and Proceed" button enabled only when ALL owners have `ekycStatus === 'done'`

**Top InfoBox:**
- `<InfoBox variant="blue">` "Please keep the property ownership document ready for eKYC verification"

**Scroll-to-Top:**
- `useEffect(() => { window.scrollTo(0, 0); }, [page])` in App.jsx
- Ensures page starts at top on every navigation

**Combined eKYC Images:**
- EKYCRedirectScreen shows both ekyc1.png + ekyc2.png stacked in one scrollable page
- Sticky bottom buttons

**Relationship Dropdown Fix:**
- Options changed to: "Daughter of", "Son of", "Spouse of" (with `REL_PREFIX` constant)
- `RELATIONSHIP_OPTIONS` updated accordingly

### Build Status
`npm run build` — passes cleanly (101 modules, exit code 0)

---

## Phase 25 — Step 2 UI Refinements & Component Fixes (Complete)

### Overview
Multiple corrections to OwnerEKYCPage popup, Dropdown component, InfoBox component, and Input component based on Figma cross-referencing and user feedback.

### InfoBox — New `blue` Variant
- Added `variant="blue"` to InfoBox component
- CSS: white background, `var(--primary)` border, `var(--primary)` icon color
- Top page InfoBox on OwnerEKYCPage now uses `variant="blue"` (blue outline + blue icon, no red)

### Section 2.1 Title Updated
- Changed from "Owner details" to **"Ownership Details (As mentioned in your property ownership document)"**

### Dropdown Component Fixes
- **Selection bug:** `onChange` now passes `{ target: { value } }` synthetic event object instead of raw value — fixes click-to-select not working
- **Selected state:** Dark blue background (`var(--primary)`) + white text for selected item
- **Hover on selected:** Stays dark blue + white (explicit `--selected:hover` rule prevents light-blue override)
- **Hover on non-selected:** Light blue bg + dark text (readable)

### Relationship Options Updated
- Options: "Son of", "Daughter of", "Spouse of", "Care of"
- Prefixes: `S/o`, `D/o`, `W/o`, `C/o`

### Popup Field Widths (from Figma node 109:10278)
- Relationship Type dropdown: **400px**
- Name of Related Person input: **499px**
- Mobile number input: **400px**
- Get OTP button: auto
- OTP field: **369px**

### Owner Card Post-KYC (from Figma screenshot)
- Removed cancel/close `IconButton` from completed owners
- Post-KYC row now shows: disabled "Do eKYC" button + green "eKYC successful" badge
- Removed `handleCancelOwnerKyc` handler (unused)

### Related Person Input
- Starts empty (no pre-fill with owner name)
- No success state/caption — plain empty Input

### OTP Field & Timer
- OTP field always visible (not conditional on `otpSent`)
- Starts **disabled** (looks like empty state, non-interactive)
- Gets **enabled** when "Get OTP" is clicked
- Success caption: "OTP verified successfully" shown when OTP text entered
- "Get OTP" button disables during 60s countdown
- Red timer text "Please enter within X seconds" renders directly under OTP field
- Timer re-enables "Get OTP" button when it reaches 0
- State: `otpCountdown` (number), `otpTimerRef` (useRef for interval cleanup)

### Input Component — Disabled Variant Update
- Disabled state now looks like empty state (white background, normal border, no opacity reduction)
- Only `cursor: not-allowed` and non-interactive
- Placeholder text color: `var(--neutral-500)`

### Files Modified
- `src/components/InfoBox/InfoBox.css` — added `.info-box--blue` + `.info-box--blue .info-box__icon`
- `src/components/Dropdown/Dropdown.jsx` — onChange passes synthetic event
- `src/components/Dropdown/Dropdown.css` — selected/hover state fixes
- `src/components/Input/Input.css` — disabled variant restyled
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.jsx` — all JSX changes
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.css` — field widths, OTP wrap/timer

### Build Status
`npm run build` — passes cleanly (101 modules, exit code 0)

---

## Phase 26 — Section 2.3 Table & Component Fixes (Complete)

### Overview
Fixed mismatch table layout, dropdown disabled variant, DatePicker issues, Save/Edit button logic, and merged document upload into a single table.

### Mismatch Table Width
- Changed `.ekyc-s23__table` and `.ekyc-s23__doc-table` from `width: 1059px` (fixed) to `width: 100%` to properly fill their SectionBox container

### Save/Edit Button Logic (Section 2.3)
- "Save and Next" now only locks the form (`s23Submitted = true`) — does NOT navigate away
- "Edit" re-enables the dropdowns and document fields
- Removed duplicate "Save and Proceed" floating button from bottom

### Dropdown Disabled Variant
- Replaced old `opacity: 0.5` approach with proper disabled styling:
  - `cursor: not-allowed`
  - `background: var(--neutral-100)` (light grey)
  - Greyed-out text color (`var(--neutral-500)`) showing chosen option
  - Chevron color dimmed (`var(--neutral-400)`)

### Single Merged Document Upload Table
- Previously: one doc upload table per owner
- Now: all required documents from all selected reasons are **deduplicated** and shown in a single table
- `mergedDocs` computed value collects unique docs across all owners' reasons
- `docUploads` state flattened from `{ [ownerId]: { [docKey]: {...} } }` to `{ [docKey]: {...} }`
- Handler signatures simplified: `handleDocFieldChange(docKey, field, value)`, `handleFileUpload(docKey)`, `handleRemoveFile(docKey)`

### DatePicker — Double Icon Fix
- Native browser calendar icon was overlapping the custom Material Icon
- Added `::-webkit-calendar-picker-indicator` CSS to set `opacity: 0` but remain clickable (invisible overlay on right side)
- `.datepicker__box` gets `position: relative` for the absolute-positioned indicator

### DatePicker — Max Date Restriction
- Added `max={new Date().toISOString().split('T')[0]}` attribute to `<input type="date">`
- Prevents selecting any date in the future

### Files Modified
- `src/components/DatePicker/DatePicker.jsx` — added `max` prop
- `src/components/DatePicker/DatePicker.css` — `::-webkit-calendar-picker-indicator` hide + `position: relative` on box
- `src/components/Dropdown/Dropdown.css` — new disabled styles (background, text color, chevron)
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.jsx` — merged doc table, flattened state, handler refactors, Save/Edit logic
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.css` — tables `width: 100%`

### Build Status
`npm run build` — passes cleanly (101 modules, exit code 0)

---

## Phase 27 — Upload File UX, View File Popup, Caption Messages (Complete)

### Overview
Overhauled the document upload column in Section 2.3 document table. Added file size validation, upload success/error states using CaptionMessage component, Figma-matching uploaded file chip, view file popup, and Save and Proceed button logic.

### Upload File Column — Three States

**1. Empty / Default State:**
- `<Button variant="white" icon="upload_file">Upload File</Button>`
- Below: `<CaptionMessage variant="info">Only PDF size up-to 5MB allowed</CaptionMessage>`

**2. Error State (file > 5MB):**
- Same Upload File button (file not saved)
- Below: `<CaptionMessage variant="error">Document exceeds 5MB</CaptionMessage>`

**3. Success State (file uploaded):**
- File chip matching Figma "uploaded" variant:
  - Blue border (`var(--primary)`), 171px width, 44px min-height
  - Filename with text truncation
  - Red close button (round, `var(--danger)` bg, white × icon)
- Below: `<CaptionMessage variant="success">Document uploaded successfully</CaptionMessage>`

### File Size Validation
- `handleFileUpload` now checks `file.size > 5 * 1024 * 1024`
- If too large: sets `uploadStatus: 'error'`, clears `fileName`
- If valid: sets `uploadStatus: 'success'`, saves `fileName`
- `handleRemoveFile` resets both `fileName` and `uploadStatus`

### CaptionMessage Integration
- Imported `CaptionMessage` component into OwnerEKYCPage
- Used for all three upload states (info, error, success)
- `.ekyc-s23__upload-area .caption-msg { margin-top: 0 }` to align directly under button

### View File Column
- **Before upload:** Grey icon (`color="grey"`), disabled — non-interactive
- **After successful upload:** Blue icon (`color="blue"`), enabled — clickable
- Clicking opens a **View File Popup** modal:
  - Reuses `.ekyc-popup__overlay` and `.ekyc-popup__header` styles
  - Shows filename and a PDF preview placeholder area
  - Close button (×) or overlay click to dismiss
  - New state: `viewFileKey` (null or doc key string)

### Save and Proceed Button
- Added at bottom of page (inside `ekyc-page__sections`) when Section 2.3 is visible
- **Disabled** until `canS23Save` is true (all reasons selected + all mandatory docs have docNo + issuedDate + successful upload)
- Navigates to `'new-application-step3'` when clicked

### Upload State Extended
- `docUploads` state shape: `{ [docKey]: { docNo, issuedDate, fileName, uploadStatus } }`
- `uploadStatus`: `undefined` (initial) | `'success'` | `'error'`

### New CSS Classes
- `.ekyc-s23__file-chip` — redesigned: `border: 1px solid var(--primary)`, `width: 171px`, `gap: 20px`
- `.ekyc-s23__file-remove` — red circle bg (`var(--danger)`), white × icon, 16×16px
- `.ekyc-s23__upload-area .caption-msg` — `margin-top: 0`
- `.ekyc-viewfile-popup` — 700px wide popup
- `.ekyc-viewfile-popup__body/name/preview/icon` — popup content styles

### Files Modified
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.jsx` — CaptionMessage import, upload states, view popup, Save and Proceed
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.css` — file chip, upload area, view popup styles

### Build Status
`npm run build` — passes cleanly (101 modules, exit code 0)

---

---

## Current Status
**Design system: 36 components documented (33 base + Tooltip + StepHeader + OwnerTable)**
**Homepage (pre-login): COMPLETE ✅**
**Login Page: COMPLETE ✅**
**CitizenLogin-HomePage (post-login): COMPLETE ✅**
**NewApplicationFirstPage (Step 0): COMPLETE ✅**
**SaleDeedDetailsPage (Step 1): COMPLETE ✅**
**OwnerEKYCPage (Step 2): COMPLETE ✅ (Sections 2.1 + 2.2 + 2.3)**
**Full Navigation Wiring: COMPLETE ✅**
**EKYCRedirectScreen: COMPLETE ✅**
**OwnerTable component: COMPLETE ✅**

### Complete User Flow
`HomePage → LoginPage → CitizenLoginHomePage → NewApplicationFirstPage (Step 0) → SaleDeedDetailsPage (Step 1) → OwnerEKYCPage (Step 2)`

### OwnerEKYCPage Section Summary
| Section | Title | Status |
|---|---|---|
| 2.1 | Ownership Details | ✅ Company question, owner table, add owner question, Proceed/Edit |
| 2.2 | Do eKYC for All Land Owners | ✅ Per-owner cards, eKYC redirect, popup modal, detail cards, review |
| 2.3 | Owner Details Mismatch | ✅ Mismatch table, reason dropdown, merged doc upload table, file validation, view popup, Save and Proceed |

### Component Fixes Applied
- **Dropdown:** Click selection, hover/selected states, disabled variant (greyed text + light bg)
- **InfoBox:** Blue variant (`variant="blue"`)
- **Input:** Disabled variant (white bg, not-allowed cursor)
- **DatePicker:** No double icons, max date = today
- **CaptionMessage:** Used for upload info/error/success states

### Build
101 modules, 0 errors

---

## Phase 28 — Popup Mandatory Validation & Mismatch Branching (Complete)

### Overview
Added mandatory field validation to the eKYC popup, implemented mismatch/no-mismatch branching logic, and moved OTP success message placement.

### eKYC Popup — Mandatory Field Validation
- "Complete eKYC" button now requires ALL mandatory fields filled:
  - `relationshipType` selected
  - `relatedPersonName` not empty
  - `mobileNumber` not empty
  - `otpSent` is true (Get OTP was clicked)
  - `otp` not empty
- Previously only checked `otp.trim()`

### OTP Success Message Moved
- **Removed** "OTP verified successfully" caption + green success state from the OTP Input field
- OTP field now only shows the countdown timer ("Please enter within X seconds") below it
- **Added** green "✓ OTP verified successfully" message next to the "Complete eKYC" button in the footer
- New `otpVerified` state: set to `true` when "Complete eKYC" is clicked, reset on popup open
- CSS: `.ekyc-popup__footer` changed to `display: flex; align-items: center; gap: 16px`
- `.ekyc-popup__otp-success` — green text + check icon inline with button

### Name Mismatch Branching
- **`hasMismatch`** computed: compares `MOCK_EKYC_NAMES[id]` vs `owner.name` for each owner
- **`s22Verified`** new state: tracks whether "Verify and Proceed" has been clicked
- **IF mismatch exists** → "Verify and Proceed" opens Section 2.3, then "Save and Proceed" appears (disabled until mismatch resolved)
- **IF no mismatch** → Section 2.3 never renders, "Save and Proceed" appears immediately enabled
- `handleVerifyAndProceed` handler: sets `s22Verified=true`, conditionally sets `s23Visible` based on `hasMismatch`

### Navigation Wiring
- "Save and Proceed" button navigates to `'new-application-step3'` (both paths)
- Disabled logic: `disabled={hasMismatch && !canS23Proceed}`

### Verify and Proceed Button — Moved Inside Section 2.2
- Previously was a standalone centered button between sections
- Now renders inside Section 2.2 body, left-aligned (`.ekyc-s22__verify-action`)
- Only shown when `allDone && !s22Verified`

### Scroll Position Preservation
- **Problem:** eKYC redirect screen replaces the entire page; returning scrolled to top
- **Fix:** `scrollPosRef` (useRef) saves `window.scrollY` before entering redirect
- `handleEkycComplete` and `handleEkycCancel` restore scroll position via `requestAnimationFrame`
- User now sees the detail card table area after completing eKYC, not the page top

### Section 2.3 Conditional Rendering
- Section 2.3 `<SectionBox>` wrapped in `{hasMismatch && ( ... )}` — never renders if no mismatch

### Files Modified
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.jsx` — all logic changes
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.css` — footer flex, otp-success, verify-action, doc-section animation

### Build Status
`npm run build` — passes cleanly (101 modules, exit code 0)

---

## Phase 29 — Section 2.3 UX Improvements (Complete)

### Overview
Multiple refinements to Section 2.3: doc table timing, caption message sizing, warning variant, filename mismatch detection, view icon redesign, height/layout fixes, and Save and Proceed validation.

### Document Table — Show After Save and Next
- Doc upload table now gated behind `s23Submitted` (only appears after clicking "Save and Next")
- Previously showed immediately when reasons with doc requirements were selected
- "Save and Next" enables when all reasons selected (`allReasonsSelected`), no doc upload check needed

### Spelling-Only Fast Path
- `allSpellingOnly` computed: true when all reasons are "Name Spelling Mismatch" (no docs needed)
- If all spelling-only → "Save and Proceed" enabled immediately (no Save and Next required)
- `canS23Proceed` checks: spelling-only → true; otherwise needs s23Submitted + all mandatory docs filled

### Document Table Fields — Fixed Disabled Bug
- Input, DatePicker, Upload Button in doc table had `disabled={s23Submitted}` but table only renders when `s23Submitted=true`
- **Removed all `disabled` props** from doc table fields — they're now always interactive when visible

### Section 2.3 Height
- Removed `min-height: 600px` from `.ekyc-s23-box .section-box__body`
- Section now sizes naturally to fit mismatch table + buttons only
- Doc table appearance uses fade-in animation (`.ekyc-s23__doc-section`)

### CaptionMessage — Warning Variant Added
- New variant: `variant="warning"` with amber color `#b77224` and `warning_amber` icon
- Added to `ICON_MAP` in CaptionMessage.jsx
- CSS: `.caption-msg--warning` with amber icon + text color, font-weight 500
- Matches Figma node `363-79426` Variant4

### CaptionMessage — Size Reduced
- Font size: 16px → **12px**
- Line height: 24px → **16px**
- Icon size: 18px → **14px**
- Prevents caption text from wrapping to second line in the upload column

### Filename Mismatch Warning
- After uploading a file, compares PDF filename (without extension) against document type label
- If names don't match: `<CaptionMessage variant="warning">Please check and re-upload the document</CaptionMessage>`
- If names match: `<CaptionMessage variant="success">Document uploaded successfully</CaptionMessage>`

### View Icon — Redesigned from Figma
- Replaced `<IconButton>` with custom `<button>` matching Figma node `109-22098`
- **4 states:** Default (blue border, blue eye icon), Hover (8% blue bg), Pressed (16% blue bg), Inactive (grey bg, grey border, grey icon)
- Size: 45×44px with 8px border-radius, 1px solid border
- CSS classes: `.ekyc-view-icon`, `.ekyc-view-icon--active`, `.ekyc-view-icon--inactive`
- Removed `IconButton` import from OwnerEKYCPage (no longer used)

### Save and Proceed — Enhanced Validation
- Mandatory docs require: `docNo` filled + `issuedDate` filled + `fileName` present + `uploadStatus !== 'error'`
- Warning uploads (filename mismatch) are allowed — user can proceed
- Error uploads (>5MB) block proceeding

### Column Width Adjustments
- Document Type: 214px → **244px** (wider for longer names)
- Document No.: 214px → **164px** (narrower — just needs number)
- Upload File: 263px → **293px** (wider for caption + chip)

### Files Modified
- `src/components/CaptionMessage/CaptionMessage.jsx` — warning variant in ICON_MAP
- `src/components/CaptionMessage/CaptionMessage.css` — warning styles, reduced font/icon sizes
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.jsx` — all logic/JSX changes
- `src/pages/NewApplicationPage/steps/OwnerEKYCPage.css` — view icon styles, column widths, removed min-height, doc-section animation

### Build Status
`npm run build` — passes cleanly (99 modules, exit code 0)

---

---

## Current Status
**Design system: 36 components documented (33 base + Tooltip + StepHeader + OwnerTable)**
**Homepage (pre-login): COMPLETE ✅**
**Login Page: COMPLETE ✅**
**CitizenLogin-HomePage (post-login): COMPLETE ✅**
**NewApplicationFirstPage (Step 0): COMPLETE ✅**
**SaleDeedDetailsPage (Step 1): COMPLETE ✅**
**OwnerEKYCPage (Step 2): COMPLETE ✅ (Sections 2.1 + 2.2 + 2.3)**
**Full Navigation Wiring: COMPLETE ✅**
**EKYCRedirectScreen: COMPLETE ✅**
**OwnerTable component: COMPLETE ✅**
**CaptionMessage component: COMPLETE ✅ (info/error/success/warning variants)**

### Complete User Flow
`HomePage → LoginPage → CitizenLoginHomePage → NewApplicationFirstPage (Step 0) → SaleDeedDetailsPage (Step 1) → OwnerEKYCPage (Step 2) → Step 3 (TBD)`

### OwnerEKYCPage Section Summary
| Section | Title | Status |
|---|---|---|
| 2.1 | Ownership Details | ✅ Company question, owner table, add owner question, Proceed/Edit |
| 2.2 | Do eKYC for All Land Owners | ✅ Per-owner cards, eKYC redirect, popup modal with full validation, detail cards, review, Verify and Proceed |
| 2.3 | Owner Details Mismatch | ✅ Conditional (only if mismatch), reason dropdown, Save and Next → doc upload table, file validation with warning/error, view icon (Figma), Save and Proceed |

### Key Behaviors
- **No mismatch path:** Verify and Proceed → Save and Proceed enabled immediately
- **Mismatch path:** Verify and Proceed → Section 2.3 opens → select reasons → Save and Next → doc table → fill + upload → Save and Proceed
- **Spelling-only mismatch:** Save and Proceed enabled without doc uploads
- **Popup validation:** All fields (relationship, name, mobile, OTP) mandatory before Complete eKYC

### Build
99 modules, 0 errors

### Pending
- ❌ Step 3 — Property Details page (`new-application-step3`)
- ❌ "Add New Owner" full flow in Step 2
- ❌ eKYC images and tooltip sample images in `public/images/`
