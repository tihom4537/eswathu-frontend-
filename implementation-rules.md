# Eswathu — Implementation Rules

Rules and conventions to follow across all screens and prototypes. These take priority over any screen-specific prompt when there is a conflict.

---

## 1. Layout Shell (Every Screen)

Every screen must have this structure in order, top to bottom:
1. **NavigationBar** — correct variant for login state
2. **Stepper** — only on multi-step form pages (not homepage, not login)
3. **PageHeading** — only on multi-step form pages
4. **Page content** — max-width 1200px, horizontally centred
5. **Footer** — correct variant for login state

### NavBar variant rule
| Screen | NavBar variant |
|---|---|
| Homepage (not logged in) | `Version=Navigation bar home page` (`363:89914`) |
| All authenticated screens | `Version=Navigation bar Post login` (`13:2794`) |

### Footer variant rule
| Screen | Footer variant |
|---|---|
| Homepage | `Version=Footer- Homepage` (`363:90241`) |
| All authenticated screens | `Version=Footer Post login` (`363:90242`) |

---

## 2. Stepper

- Show the Stepper on every multi-step form page
- Reflect the correct active step at all times (states: 1–5 active)
- Do not show on: Homepage, Login, Dashboard
- Always place directly below the NavBar, full viewport width

---

## 3. Section / Accordion Pattern

All form content is organised into `SectionBoxes`. Rules:
- Only **one section is Open** at any time
- Sections unlock **sequentially** — a section cannot open until the previous one is submitted
- When a section is submitted (its blue button clicked): that section's header collapses to `Closed/Disabled` and the next section opens
- Exception: clicking the red Edit button on a completed section re-opens it without closing the currently active section

---

## 4. Button States & Submit Flow

### All interactive states required
Every button must implement all these states:

| State | CSS |
|---|---|
| Default | Normal |
| Hover | `box-shadow: 0px 2px 3px 1px rgba(33,33,33,0.12)`, `cursor: pointer` |
| Pressed | `opacity: 0.9` |
| Focused | `box-shadow: 0 0 0 4px rgba(2,99,197,0.25)` |
| Disabled | `opacity: 0.5`, `cursor: not-allowed`, `pointer-events: none` |

### Section submit → lock flow
1. User completes a section and clicks the blue (Primary) submit button
2. The blue button immediately becomes **Disabled** (`opacity: 0.5`)
3. The adjacent red (error) Edit button becomes **Default** (enabled)
4. Clicking the red Edit button: re-opens the section, re-enables the blue submit button, disables itself

### Final CTA visibility
The last CTA on a page (e.g. "Save and Proceed") is **hidden or disabled** until the last section on that page has been submitted. It becomes active only after the final section is locked.

---

## 5. Scroll Behaviour

- On any navigation action (page transition, step change, section submit), **scroll to the top** of the new screen or to the newly opened section
- Never leave the user stranded mid-page after an action

---

## 6. Form Fields

### Text input
Use `FillInTheBlanks`. Set `state` programmatically:
- Default render → `Empty`
- On focus → `focused`
- Has value, no error → `Filled`
- API pre-filled / locked → `Frozen or autofetched`
- Validation fail → `Error` (show CaptionMessage below)
- Validation pass → `Success` (show CaptionMessage below)
- Hover → `Hover`

### Select / dropdown
Use `DropdownBox`. Default to `Closed` state; toggle to `Opened` on click. Use nesting levels (`Closed-L1` to `Closed-L5`) for hierarchical selects.

### Radio buttons
Use `RadioButtonsBlue`. Exactly one option selected at a time in a group.

### Checkboxes
Use `Checkbox` for multi-select scenarios only.

### Dropdowns — option count
The number of options in any dropdown must match exactly what the screen design specifies. Do not add or remove options.

---

## 7. Validation & Error Display

- Field-level errors: show `CaptionMessage` (Error variant) immediately below the field
- Field-level success: show `CaptionMessage` (Success variant)
- Full-operation failure (API fail, eKYC error, Kaveri fetch error): use `ErrorMessageCard`
- Page-level info/notice: use `InfoBox` (Outline)
- Page-level warning or blocking alert: use `InfoBox` (Red)

---

## 8. Loading States

- Show `ProgressCircle` immediately on any async action (API call, file upload, page transition with data fetch)
- Disable the triggering button while the spinner is visible
- Remove the spinner and restore the UI on response (success or error)

---

## 9. Icons

Use **Material Icons Outlined** only. Never substitute with other icon libraries or custom SVGs unless there is no matching Material icon.

```html
<span class="material-icons-outlined">icon_name</span>
```

Icon size: 24px in all UI contexts. 18px for small inline icons (e.g. caption icons, chip icons).

---

## 10. Typography & Font

Always load Noto Sans from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Never substitute with system fonts.

---

## 11. Responsive / Width

- All page content: max-width `1200px`, horizontally centred (`margin: 0 auto`)
- NavigationBar and Footer: full viewport width (`1440px` design basis, `width: 100%`)
- Stepper: full viewport width
- All other components stretch to their container (no fixed widths unless spec'd)
- Minimum supported viewport: 1280px width

---

## 12. Colour & Token Usage

Always use the design tokens from `design-system.md`. Do not hardcode hex values directly in components — reference the token names. If implementing in CSS:

```css
:root {
  --primary: #0263C5;
  --primary-50: #E6F2FF;
  --primary-300: #68B2FD;
  --text-dark: #212121;
  --text-light: #FFFFFF;
  --white: #FFFFFF;
  --neutral-100: #DDDDDD;
  --neutral-300: #B0B0B0;
  --neutral-400: #C6C6C6;
  --neutral-500: #868686;
  --neutral-600: #727272;
  --secondary: #F2F2F2;
  --secondary-400: #999999;
  --danger: #B7131A;
  --success: #3C9718;
  --warning: #B77224;
}
```

---

## 13. Attributions (include in every HTML file or app root)

Load in `<head>`:
```html
<!-- Noto Sans font -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<!-- Material Icons Outlined -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
```

---

## 14. File / Folder Naming

- Keep all screens in the same React app (`eswathu-react/`)
- One component file per screen or reusable component
- Component names: PascalCase
- CSS class names: kebab-case
- Data files in `src/data/`
