# ZonaEnglish Ambassador Landing - AI Agent Instructions

## Project Overview

Single-page React landing site for ZonaEnglish School Ambassador recruitment program in Makassar. Built with **React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion**. All UI is in one file (`App.tsx`) - no component splitting yet.

## Architecture

### Single-File Component Pattern

- **Everything lives in `src/App.tsx`** (~1000+ lines): navbar, hero, sections, modal form, FAQ accordion
- Component functions defined at bottom: `BenefitCard`, `Step`, `TestiCard`, `FAQItem`
- State managed with `useState` hooks (form data, modals, mobile menu, tab selection)
- No routing - uses anchor links (`#about`, `#benefits`) for navigation

### Key Dependencies

- **Framer Motion**: Used for page animations, modal transitions, FAQ accordions (`AnimatePresence`, `motion.div`)
- **Lucide React**: Icon library (all icons imported from `lucide-react`)
- **Tailwind**: Utility-first styling with custom brand colors `#03345c` (navy), `#fcd547` (yellow)

## Design System

### Brand Colors

```css
Navy: #03345c (primary brand)
Yellow: #fcd547 (accent/CTA)
Sky/Blue: Tailwind sky-* and blue-* shades
```

### Component Patterns

- **Cards**: `rounded-3xl border shadow-sm` with gradient backgrounds
- **Buttons**: `rounded-2xl` with `#fcd547` yellow for CTAs
- **Spacing**: Sections use `py-16`, max-width `max-w-7xl mx-auto`
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints

## Development Workflow

### Commands (from package.json)

```bash
npm run dev      # Vite dev server (default port 5173)
npm run build    # TypeScript check + Vite build → dist/
npm run lint     # ESLint (flat config, TypeScript-aware)
npm run preview  # Preview production build
```

### Build Setup

- **Strict TypeScript**: `strict: true`, no unused vars/params
- **ESLint**: Flat config (`eslint.config.js`) with `typescript-eslint`, `react-hooks`, `react-refresh` plugins
- **Vite**: Standard React plugin, no custom config

## Content Management

### Editable Constants (top of App.tsx)

```typescript
const APPLY_URL = "https://bit.ly/ZonaEnglishAmbassador";
const IG_URL = "https://instagram.com/zonaenglish.id";
const WA_NUMBER = "6282188080688";
```

### Form Data Flow

1. User fills modal form (nama, alamat, usia, jenisKelamin, sekolah, instagram, alasan)
2. On submit → formats WhatsApp message with all fields
3. Opens `https://wa.me/{WA_NUMBER}?text={encoded message}`
4. Form resets, modal closes

## State Management Patterns

### Modal State

```typescript
const [showModal, setShowModal] = useState(false);
```

Modal uses Framer Motion `AnimatePresence` for enter/exit animations. Click backdrop to close.

### Mobile Menu

```typescript
const [showMobileMenu, setShowMobileMenu] = useState(false);
```

Slide-in drawer from right on mobile, hidden on desktop (`md:hidden`).

### Premium Class Toggle

```typescript
const [selectedPremiumClass, setSelectedPremiumClass] = useState<
  "zonaenglish" | "hira"
>("zonaenglish");
```

Switches between two content panels with animated transitions.

## Common Tasks

### Adding New Section

1. Insert between existing `<section>` blocks in `App.tsx`
2. Use structure: `<section id="..." className="bg-white|bg-sky-50/60">`
3. Wrap in `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16`
4. Add anchor link to navbar if needed

### Adding New FAQ

Find `FAQItem` components in FAQ section, add new:

```tsx
<FAQItem question="Your question?" answer="Your answer here." />
```

### Updating Colors/Branding

- Replace `#03345c` (navy) or `#fcd547` (yellow) in `App.tsx`
- Tailwind custom classes in `tailwind.config.js` if needed (currently extends empty)

### Adding Icons

1. Import from `lucide-react`: `import { IconName } from "lucide-react"`
2. Use inline: `<IconName size={18} />`

## File References

### Documentation Files

- `code.md`: Draft React component code (older version, not used)
- `tambahan.md`: Additional requirements/content (mindset, tasks, schools list)
- `README.md`: Vite + React boilerplate (generic, not project-specific)

### Assets

- `src/assets/`: Contains PNG images (`Zona-English-Ambassador.png`, `gabung-affiliate.png`)
- Not currently imported in code (uses placeholder text)

## Testing & QA

### No Test Suite

Project has no tests configured. Manual testing only.

### Key Test Points

- Form validation (required fields, age 13-17)
- WhatsApp link generation with correct formatting
- Modal open/close behavior
- Mobile menu drawer
- FAQ accordion animations
- Responsive layout on mobile/tablet/desktop

## TypeScript Patterns

### Interface Definitions

```typescript
interface FormData {
  nama: string;
  alamat: string;
  usia: string;
  jenisKelamin: string;
  sekolah: string;
  instagram: string;
  alasan: string;
}
```

### React Event Handlers

Use union type for multi-element events:

```typescript
const handleInputChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};
```

## Production Considerations

### Build Output

- Run `npm run build` → outputs to `dist/`
- TypeScript compiles with `tsc -b` before Vite build
- Deploy `dist/` folder to static hosting (Vercel, Netlify, etc.)

### Environment Variables

None currently used. All URLs hardcoded in constants.

### Performance

- Single bundle includes all code (no code splitting)
- Framer Motion adds ~70KB to bundle size
- No lazy loading or route-based splitting (single page)

---

**Key Principle**: Keep everything in `App.tsx` unless explicitly asked to refactor. Maintain consistent Tailwind patterns and Framer Motion animations when adding features.
