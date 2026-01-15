# Terms of Service Page Implementation Plan

## Overview

Create a Terms of Service page with a scroll-spy Table of Contents sidebar that highlights multiple sections as they become visible in the viewport.

---

## Phase 1: Create the Terms of Service Route Structure

### Step 1.1: Create the page directory and files

**Files to create:**

- `src/app/terms-of-service/page.tsx` - The Next.js page component
- `src/app/terms-of-service/TermsOfService.tsx` - Main content component

**Implementation:**

- Follow existing pattern from `src/app/referrals/page.tsx`
- Include Header and Footer components
- Set up the two-column layout (content + sidebar)

---

## Phase 2: Create the useScrollSpy Hook

### Step 2.1: Create custom scroll spy hook

**File to create:**

- `src/hooks/useScrollSpy.ts`

**Features:**

- Uses Intersection Observer API for performance
- Returns an **array** of currently visible section IDs (not just one)
- Supports configurable `rootMargin` for tuning when sections become "active"
- Cleanup on unmount

**Key code pattern:**

```typescript
export function useScrollSpy(
  sectionIds: string[],
  options?: { rootMargin?: string; threshold?: number }
): string[] {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveIds((prev) => {
          const newActive = new Set(prev);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              newActive.add(entry.target.id);
            } else {
              newActive.delete(entry.target.id);
            }
          });
          return Array.from(newActive);
        });
      },
      {
        rootMargin: options?.rootMargin ?? "-10% 0px -80% 0px",
        threshold: options?.threshold ?? 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, options?.rootMargin, options?.threshold]);

  return activeIds;
}
```

---

## Phase 3: Create the TableOfContents Component

### Step 3.1: Create reusable TOC component

**File to create:**

- `src/components/TableOfContents.tsx`

**Features:**

- Accepts array of `{ id: string; title: string }` items
- Uses `useScrollSpy` hook to track visible sections
- Highlights **all** currently visible sections (not just one)
- Smooth scroll on click
- Visual styling matching the reference screenshots:
  - Gray left border on active items
  - Slightly bolder/darker text on active items
  - Clean, minimal design

**Props interface:**

```typescript
interface TableOfContentsProps {
  items: { id: string; title: string }[];
  className?: string;
}
```

**Visual design (matching screenshots):**

- Sticky positioning: `position: sticky; top: 100px;`
- "Table of Contents" header text
- List of clickable section titles
- Active state: light gray background pill or left border accent
- Hover state: subtle text color change

---

## Phase 4: Create the Terms of Service Content

### Step 4.1: Build the TermsOfService component

**File:** `src/app/terms-of-service/TermsOfService.tsx`

**Layout structure:**

```
┌─────────────────────────────────────────────────────┐
│                     HEADER                          │
├──────────────────────────────┬──────────────────────┤
│                              │                      │
│   Terms of Service           │   Table of Contents  │
│   [Main content with         │   ├─ Section 1 ●     │
│    multiple sections]        │   ├─ Section 2 ●     │
│                              │   ├─ Section 3       │
│   ─────────────────          │   ├─ Section 4       │
│   Section 1: Our Services    │   └─ ...             │
│   Lorem ipsum dolor sit...   │                      │
│                              │   (sticky sidebar)   │
│   ─────────────────          │                      │
│   Section 2: User Rights     │                      │
│   Lorem ipsum dolor sit...   │                      │
│                              │                      │
└──────────────────────────────┴──────────────────────┘
│                     FOOTER                          │
└─────────────────────────────────────────────────────┘
```

**Sections to include (with lorem ipsum):**

1. Our services
2. Intellectual property rights
3. User representations
4. User registration
5. Purchases and payment
6. Subscriptions
7. Software
8. Prohibited activities
9. User generated contributions
10. Contribution license
11. Social media
12. Third-party websites and content
13. Services management
14. Privacy policy
15. Copyright infringements
16. Term and termination
17. Modifications and interruptions
18. Governing law
19. Dispute resolution
20. Corrections
21. Disclaimer
22. Limitations of liability
23. Indemnification
24. User data
25. Contact us

**Each section:**

- `<section id="section-slug">` for anchor targeting
- `<h2>` for section title
- 2-4 paragraphs of lorem ipsum text

---

## Phase 5: Style Polish

### Step 5.1: Typography and spacing

- Clean, readable body text
- Proper heading hierarchy (h1 for page title, h2 for sections)
- Comfortable line-height and paragraph spacing
- Responsive: sidebar hidden on mobile, shown on desktop

### Step 5.2: Table of Contents styling

- Match the reference design:
  - Light gray background on active items
  - Smooth transitions
  - Proper spacing between items

---

## Phase 6: Footer Link Verification

### Step 6.1: Verify footer link works

The footer already has: `href="/terms-of-service"` ✓

Just need to ensure the route matches.

---

## File Summary

| File                                          | Purpose                        |
| --------------------------------------------- | ------------------------------ |
| `src/app/terms-of-service/page.tsx`           | Next.js route page             |
| `src/app/terms-of-service/TermsOfService.tsx` | Main content component         |
| `src/hooks/useScrollSpy.ts`                   | Scroll spy custom hook         |
| `src/components/TableOfContents.tsx`          | Reusable TOC sidebar component |

---

## Implementation Order

1. ✅ Create `src/hooks/useScrollSpy.ts`
2. ✅ Create `src/components/TableOfContents.tsx`
3. ✅ Create `src/app/terms-of-service/TermsOfService.tsx`
4. ✅ Create `src/app/terms-of-service/page.tsx`
5. ✅ Test scroll spy behavior
6. ✅ Polish styling

---

## Technical Notes

- **Intersection Observer** is more performant than scroll event listeners
- **rootMargin: '-10% 0px -80% 0px'** means a section is "active" when it's in the top 10-20% of the viewport
- The hook returns an **array** to support multiple highlighted sections simultaneously
- **Smooth scroll**: `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`
