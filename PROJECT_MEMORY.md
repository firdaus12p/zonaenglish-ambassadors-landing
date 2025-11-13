# ZonaEnglish Ambassador Landing - Project Memory

## Project Identity

**Name**: ZonaEnglish School Ambassador Landing Page  
**Purpose**: Single-page recruitment website for ZonaEnglish School Ambassador program in Makassar  
**Tech Stack**: React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion  
**Target Audience**: Students (SMP & SMA, ages 13-17) in Makassar, Indonesia

## Architecture Philosophy

### Single-File Design (Critical)

**Everything lives in `src/App.tsx` (~1000+ lines)**. This is an intentional architectural decision, not technical debt.

**Reasoning**:

- Simple single-page landing with no complex routing
- Easier content updates for non-technical team members
- No need for component reusability across pages
- Performance is not bottlenecked by file size

**DO NOT refactor into multiple files unless explicitly requested.**

### Component Structure (Inside App.tsx)

```
App() - Main component with all sections
├── State Management (useState hooks)
│   ├── showModal (registration form)
│   ├── showMobileMenu (mobile navigation)
│   ├── selectedPremiumClass (tab selection)
│   └── formData (form fields)
├── Event Handlers
│   ├── handleInputChange (form inputs)
│   ├── handleSubmit (WhatsApp submission)
│   └── openWhatsApp (direct chat)
└── UI Sections (in order)
    ├── Navbar (sticky)
    ├── Hero
    ├── About
    ├── Mindset Cards
    ├── Benefits Grid
    ├── Premium Class Toggle (ZonaEnglish/Hira)
    ├── Ambassador Tasks
    ├── Announcements
    ├── School/Campus Lists
    ├── Registration Steps
    ├── Testimonials
    ├── FAQ Accordion
    ├── Footer
    ├── Floating WhatsApp Button
    └── Registration Modal

Helper Components (bottom of file):
- BenefitCard({icon, title, desc})
- Step({n, title})
- TestiCard({name, school, text})
- FAQItem({question, answer}) - with accordion animation
```

## Brand Identity & Design System

### Colors (Hardcoded, DO NOT use CSS variables)

```typescript
Navy:   #03345c  // Primary brand color
Yellow: #fcd547  // Accent/CTA color
```

**Usage Rules**:

- Primary CTAs: `bg-[#fcd547]` with `text-slate-900`
- Hero backgrounds: `bg-[#03345c]` with white text
- Gradients: `from-sky-* to-blue-*` for depth
- Neutral cards: `bg-white border-slate-200`

### Design Patterns (Critical to Maintain)

**Cards**:

```tsx
className =
  "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow";
```

**Primary Buttons**:

```tsx
className =
  "inline-flex items-center gap-2 rounded-2xl bg-[#fcd547] px-6 py-3 text-slate-900 font-semibold shadow hover:shadow-lg transition-shadow";
```

**Section Containers**:

```tsx
<section className="bg-white">
  {" "}
  {/* or bg-sky-50/60 for alternating */}
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    {/* Content */}
  </div>
</section>
```

**Responsive Breakpoints**:

- Mobile-first approach
- `sm:` (640px) - Small tablets
- `md:` (768px) - Tablets, show desktop menu
- `lg:` (1024px) - Desktop, 2-column layouts

## State Management Deep Dive

### Modal System (Framer Motion)

```typescript
const [showModal, setShowModal] = useState(false)

// Usage with AnimatePresence
<AnimatePresence>
  {showModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowModal(false)} // backdrop close
    >
      <motion.div onClick={(e) => e.stopPropagation()}> {/* prevent backdrop click */}
        {/* Modal content */}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

### Mobile Menu (Slide-in Drawer)

```typescript
const [showMobileMenu, setShowMobileMenu] = useState(false);

// Animation: x: "100%" to x: 0 (slide from right)
// Hidden on desktop: md:hidden
```

### Premium Class Toggle

```typescript
const [selectedPremiumClass, setSelectedPremiumClass] = useState<
  "zonaenglish" | "hira"
>("zonaenglish");

// Toggle buttons switch between two content panels
// Animated transition with AnimatePresence mode="wait"
```

### Form Data Management

```typescript
interface FormData {
  nama: string; // Full name
  alamat: string; // Address
  usia: string; // Age (13-17)
  jenisKelamin: string; // Gender (Laki-laki/Perempuan)
  sekolah: string; // School name
  instagram: string; // Instagram username (without @)
  alasan: string; // Reason for joining (textarea)
}

const [formData, setFormData] = useState<FormData>({
  /* initial empty state */
});

// Update pattern
const handleInputChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};
```

## WhatsApp Integration (Critical Business Logic)

### Form Submission Flow

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // 1. Format message with Markdown-style formatting
  const message = `*Pendaftaran ZonaEnglish School Ambassador 2025*

📝 *Nama:* ${formData.nama}
📍 *Alamat:* ${formData.alamat}
🎂 *Usia:* ${formData.usia} tahun
👤 *Jenis Kelamin:* ${formData.jenisKelamin}
🏫 *Sekolah:* ${formData.sekolah}
📱 *Instagram:* @${formData.instagram}
💭 *Alasan Masuk:* ${formData.alasan}`;

  // 2. Open WhatsApp with pre-filled message
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");

  // 3. Reset form and close modal
  setFormData({
    /* reset to empty */
  });
  setShowModal(false);
};
```

### Direct WhatsApp Chat

```typescript
const openWhatsApp = () => {
  const message =
    "Halo, saya ingin bertanya tentang program ZonaEnglish School Ambassador 2025";
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
```

**Important**: WhatsApp number and URLs are hardcoded constants at top of `App.tsx`:

```typescript
const APPLY_URL = "https://bit.ly/ZonaEnglishAmbassador";
const IG_URL = "https://instagram.com/zonaenglish.id";
const WA_NUMBER = "6282188080688";
```

## Framer Motion Patterns

### 1. Page Load Animations (Hero)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### 2. Modal Transitions

```tsx
<AnimatePresence>
  {showModal && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      />
    </>
  )}
</AnimatePresence>
```

### 3. Accordion (FAQ)

```tsx
<AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
```

### 4. Tab/Toggle Content Switch

```tsx
<AnimatePresence mode="wait">
  {selectedPremiumClass === "zonaenglish" ? (
    <motion.div
      key="zonaenglish"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
  ) : (
    <motion.div key="hira" /* same animation */ >
  )}
</AnimatePresence>
```

## TypeScript Patterns & Conventions

### Strict Mode Compliance

- `strict: true` in `tsconfig.app.json`
- `noUnusedLocals: true` - Remove unused variables immediately
- `noUnusedParameters: true` - Prefix unused params with `_` or remove

### Event Handler Types

```typescript
// Multi-element form handler
const handleInputChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  /* ... */
};

// Button click
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  /* ... */
};

// Form submit
const handleSubmit = (e: React.FormEvent) => {
  /* ... */
};
```

### Component Prop Types

```typescript
function BenefitCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  /* ... */
}
```

## Icon System (Lucide React)

### Import Pattern

```typescript
import { ArrowRight, Mic, BookOpen, Instagram, X, Menu } from "lucide-react";
```

### Usage

```tsx
<ArrowRight size={18} />
<MessageCircle size={24} className="text-white" />
```

### Commonly Used Icons

- `ArrowRight` - CTAs, links
- `MessageCircle` - WhatsApp buttons
- `Instagram` - Social links
- `Menu`, `X` - Mobile menu toggle
- `ChevronDown` - FAQ accordion
- `CalendarClock`, `MapPin`, `Clock` - Info badges
- `Award`, `Megaphone`, `Gift`, `GraduationCap`, `Star`, `BookOpen` - Benefit cards

## Content Management

### Editable Content Locations

**Constants (top of App.tsx)**:

```typescript
const APPLY_URL = "https://bit.ly/ZonaEnglishAmbassador";
const IG_URL = "https://instagram.com/zonaenglish.id";
const WA_NUMBER = "6282188080688";
```

**Testimonials** (in render):

```tsx
<TestiCard
  name="Alya"
  school="SMA 5 Makassar"
  text="Gabung di ZonaEnglish bikin aku lebih percaya diri..."
/>
```

**FAQ Items**:

```tsx
<FAQItem
  question="Apa sih yang bakal aku dapetin kalau jadi Ambassador?"
  answer="Kamu bakal dapat sertifikat resmi..."
/>
```

**School/Campus Lists** (hardcoded in section):

- SMAN 1 Makassar
- SMAN 2 Makassar
- SMKN 1 Makassar
- Universitas Hasanuddin
- Universitas Negeri Makassar

### Documentation Files (Reference Only)

**code.md**:

- Draft version of component code
- NOT used in production
- Historical reference

**tambahan.md**:

- Content requirements
- Mindset section content source
- Ambassador tasks
- School/campus lists

**README.md**:

- Generic Vite + React boilerplate
- Not project-specific

## Development Workflow

### Local Development

```bash
npm install           # First time setup
npm run dev          # Start dev server → http://localhost:5173
npm run lint         # Check code quality
```

### Building for Production

```bash
npm run build        # TypeScript check + Vite build → dist/
npm run preview      # Test production build locally
```

### Deployment

- Build outputs to `dist/` folder
- Deploy to static hosting (Vercel, Netlify, GitHub Pages, etc.)
- No server-side rendering needed
- No environment variables required

## Testing Strategy

### No Automated Tests

Project has no test suite configured. All testing is manual.

### Critical Test Scenarios

1. **Form Validation**:

   - All required fields must be filled
   - Age must be 13-17
   - Instagram field accepts username without @

2. **WhatsApp Integration**:

   - Message formats correctly with all form data
   - Special characters encode properly (Indonesian text)
   - Opens in new tab successfully

3. **Modal Behavior**:

   - Opens on button click
   - Closes on backdrop click
   - Closes on X button click
   - Form resets after submission

4. **Mobile Menu**:

   - Hamburger menu shows on mobile only
   - Drawer slides in from right
   - Navigation links work
   - Closes after clicking link

5. **FAQ Accordion**:

   - Opens/closes smoothly
   - Only one can be open (no, actually multiple can be open)
   - Animation doesn't glitch

6. **Responsive Design**:

   - Mobile (320px - 640px): Single column, mobile menu
   - Tablet (640px - 1024px): Some 2-column grids
   - Desktop (1024px+): Full 2-column layouts, desktop menu

7. **Premium Class Toggle**:
   - Switches between ZonaEnglish and Hira content
   - Animation smooth
   - Content updates correctly

## Common Issues & Solutions

### Build Errors

**TypeScript unused variable**:

```typescript
// ❌ Error: 'data' is defined but never used
const [data, setData] = useState();

// ✅ Fix: Prefix with underscore or remove
const [_data, setData] = useState();
// or just remove if truly unused
```

**Import not used**:

- ESLint will complain about unused imports
- Remove immediately to pass build

### Styling Issues

**Color not applying**:

- Check exact hex code: `#03345c` and `#fcd547`
- Use bracket notation for custom colors: `bg-[#fcd547]`
- Tailwind arbitrary values require brackets

**Card shadows not showing**:

- Ensure `shadow-sm` or `shadow-md` is applied
- Check for `hover:shadow-lg` on interactive cards

### Animation Glitches

**Modal doesn't unmount**:

- Ensure `AnimatePresence` wraps the conditional
- Component must have `key` prop if using mode="wait"

**Accordion jumps**:

- Verify `height: 0` to `height: "auto"` transition
- Use `overflow: hidden` during transition

### Form Issues

**WhatsApp message malformed**:

- Check template literal formatting
- Verify `encodeURIComponent()` is used
- Test with Indonesian characters (special chars)

**Form doesn't reset**:

- Ensure `setFormData()` called with empty object after submit
- Check all field names match state keys

## Performance Considerations

### Current State

- **Bundle Size**: ~70KB added by Framer Motion
- **Code Splitting**: None (single page, single bundle)
- **Lazy Loading**: None implemented
- **Images**: Placeholder text used, actual PNGs not imported

### Optimization Opportunities (If Needed)

1. Import images and use WebP format
2. Lazy load Framer Motion components
3. Code split FAQ and Testimonial sections
4. Add image optimization in Vite config

**However**: Current performance is acceptable for a landing page. Don't optimize prematurely.

## Future Considerations (Not Implemented)

### Environment Variables

Currently all URLs are hardcoded. Could move to `.env`:

```
VITE_APPLY_URL=https://bit.ly/ZonaEnglishAmbassador
VITE_IG_URL=https://instagram.com/zonaenglish.id
VITE_WA_NUMBER=6282188080688
```

### Component Refactoring

If file grows beyond ~1500 lines, consider splitting:

- `components/sections/` - Hero, About, Benefits, etc.
- `components/ui/` - BenefitCard, Step, TestiCard, FAQItem
- `components/modals/` - RegistrationModal, MobileMenu

**But**: Only do this if explicitly requested or file becomes unmaintainable.

### CMS Integration

Content could be managed via:

- Headless CMS (Strapi, Contentful)
- Markdown files
- JSON data files

**But**: Current hardcoded approach works fine for low-frequency updates.

## Critical "Don'ts"

1. ❌ **Don't split App.tsx** unless explicitly asked
2. ❌ **Don't change brand colors** without approval
3. ❌ **Don't add routing** (single page by design)
4. ❌ **Don't remove Framer Motion** (animations are key to UX)
5. ❌ **Don't change WhatsApp integration** (business-critical)
6. ❌ **Don't add complex state management** (useState is sufficient)
7. ❌ **Don't remove TypeScript strict mode** (code quality requirement)
8. ❌ **Don't add CSS modules or styled-components** (Tailwind only)

## Quick Reference: Common Tasks

### Add New Section

```tsx
{
  /* After existing section, before footer */
}
<section id="new-section" className="bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
      Section Title
    </h2>
    {/* Content */}
  </div>
</section>;
```

### Add FAQ

```tsx
<FAQItem
  question="New question here?"
  answer="Answer text here. Can be multiple sentences."
/>
```

### Add Testimonial

```tsx
<TestiCard name="Student Name" school="School Name" text="Quote text here" />
```

### Update Constants

1. Find constant declarations at top of `App.tsx`
2. Update URL or number
3. Search for usage throughout file if needed

### Add Icon

1. Import at top: `import { NewIcon } from "lucide-react"`
2. Use inline: `<NewIcon size={18} />`
3. Find icon name at: https://lucide.dev/icons

---

**Last Updated**: November 13, 2025  
**Project Status**: Production-ready  
**Maintenance Mode**: Content updates only, no major refactoring planned
