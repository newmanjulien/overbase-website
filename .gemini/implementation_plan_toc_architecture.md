# Implementation Plan: Architectural Improvements for Terms of Service

## Overview

This plan addresses 4 architectural issues identified in the Table of Contents and scroll-spy implementation:

1. **Tight coupling between scroll spy and DOM structure**
2. **Single source of truth violation** _(Resolved with issue #4)_
3. **Wrong semantic element for navigation**
4. **Performance: DOM queries on every scroll frame**

---

## Issue 1: Decouple Scroll Spy from DOM Structure

### Current Problem

The `useScrollSpy` hook hardcodes knowledge of the content structure:

```typescript
const heading = element.querySelector("h2");
```

This creates fragile coupling - the hook only works if sections contain `<h2>` elements.

### Solution: Data Attribute Pattern

Use data attributes to mark observable elements, making the hook agnostic to HTML structure.

### Implementation Steps

#### Step 1.1: Update terms-content.tsx to not require h2 knowledge in hook

No changes needed - content already structured correctly.

#### Step 1.2: Modify useScrollSpy to use data attributes

**File:** `src/hooks/useScrollSpy.ts`

Replace the h2 querySelector logic with a data attribute approach:

```typescript
// Before
const heading = element.querySelector("h2");
const targetElement = heading || element;

// After
const targetElement =
  element.querySelector("[data-scroll-spy-target]") || element;
```

#### Step 1.3: Update TermsOfService.tsx to add data attributes

**File:** `src/app/legal/terms-of-service/TermsOfService.tsx`

Add `data-scroll-spy-target` to the h2 elements:

```tsx
<h2 className="text-xl font-semibold text-gray-900 mb-4" data-scroll-spy-target>
  {section.title}
</h2>
```

#### Step 1.4: Document the pattern

Add JSDoc to `useScrollSpy` explaining the data attribute convention:

```typescript
/**
 * Observes elements by ID. Within each element, looks for a child with
 * `data-scroll-spy-target` attribute to determine visibility. Falls back
 * to the element itself if no target is found.
 */
```

### Complexity: Low

### Risk: Low - backward compatible (falls back to element if no data attribute)

---

## Issue 3: Use Proper Semantic Elements for Navigation

### Current Problem

Using `ToggleGroup` for the Table of Contents:

```tsx
<ToggleGroup type="multiple" value={activeIds}>
  <ToggleGroupItem>...</ToggleGroupItem>
</ToggleGroup>
```

**Problems:**

- Screen readers announce "pressed" / "not pressed" states
- Toggles are for changing state, not navigation
- Anchor links provide better UX (can open in new tab, copy link, etc.)

### Solution: Proper nav + a elements with shadcn Button styling

### Implementation Steps

#### Step 3.1: Refactor TableOfContents to use anchor links

**File:** `src/components/TableOfContents.tsx`

Replace ToggleGroup with semantic navigation:

```tsx
import { Button } from "./ui/button";

export function TableOfContents({
  items,
  className,
  scrollOffset = 100,
}: TableOfContentsProps) {
  const sectionIds = items.map((item) => item.id);
  const activeIds = useScrollSpy(sectionIds);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id, scrollOffset);
  };

  return (
    <nav
      className={cn("sticky top-24", className)}
      aria-label="Table of Contents"
    >
      <h2 className="text-sm font-semibold text-foreground mb-4">
        Table of Contents
      </h2>
      <ul className="flex flex-col" role="list">
        {items.map((item, index) => {
          const isActive = activeIds.includes(item.id);
          const roundingClasses = getActiveRoundingClasses(
            index,
            items,
            activeIds
          );

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block py-1.5 px-3 text-sm w-full text-left transition-colors",
                  "hover:bg-muted",
                  isActive && "bg-accent font-medium",
                  roundingClasses
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
```

#### Step 3.2: Remove ToggleGroup import

Remove unused imports from TableOfContents.tsx.

#### Step 3.3: Verify rounding logic still works

The `getActiveRoundingClasses` function should work unchanged since it only returns class strings.

#### Step 3.4: Test accessibility

Verify with screen reader that:

- Navigation is announced as "Table of Contents navigation"
- Links are announced as links, not toggles
- Active item is announced with "current location"

### Complexity: Medium

### Risk: Low - visual appearance should remain the same

---

## Issue 5: Cache DOM Element References for Performance

### Current Problem

The scroll handler queries the DOM on every animation frame:

```typescript
for (const id of ids) {
  const element = document.getElementById(id); // 25 DOM lookups
  const heading = element.querySelector("h2"); // 25 more
  // ...
}
```

With 25 sections at 60fps = **3000 DOM queries/second**.

### Solution: Cache element references on mount

### Implementation Steps

#### Step 5.1: Add element cache ref to useScrollSpy

**File:** `src/hooks/useScrollSpy.ts`

Add a ref to cache element references:

```typescript
interface CachedElement {
  section: HTMLElement;
  target: HTMLElement;
}

const elementCacheRef = useRef<Map<string, CachedElement>>(new Map());
```

#### Step 5.2: Populate cache on mount and when IDs change

```typescript
useEffect(() => {
  const cache = new Map<string, CachedElement>();

  for (const id of stableIdsRef.current) {
    const section = document.getElementById(id);
    if (section) {
      const target =
        section.querySelector<HTMLElement>("[data-scroll-spy-target]") ||
        section;
      cache.set(id, { section, target });
    }
  }

  elementCacheRef.current = cache;
}, [stableIdsRef.current]);
```

#### Step 5.3: Use cached elements in scroll handler

```typescript
const handleScroll = () => {
  const active: string[] = [];
  const viewportHeight = window.innerHeight;
  const cache = elementCacheRef.current;

  for (const id of ids) {
    const cached = cache.get(id);
    if (!cached) continue;

    const rect = cached.target.getBoundingClientRect();
    // ... visibility logic unchanged
  }
};
```

#### Step 5.4: Add cache invalidation for dynamic content

For pages where sections might be added/removed dynamically:

```typescript
// Optional: expose a method to refresh cache
const refreshCache = useCallback(() => {
  // Rebuild cache
}, []);
```

### Performance Impact

| Metric                | Before | After             |
| --------------------- | ------ | ----------------- |
| DOM queries per frame | 50     | 0                 |
| DOM queries on mount  | 0      | 50 (once)         |
| Memory                | O(1)   | O(n) element refs |

### Complexity: Medium

### Risk: Low - cache invalidation only matters for dynamic pages

---

## Implementation Order

1. **Issue 5 (Performance)** - Highest impact, independent of others
2. **Issue 1 (Data Attributes)** - Enables cleaner architecture
3. **Issue 3 (Semantic HTML)** - Accessibility improvement

## Estimated Time

| Issue     | Estimated Time |
| --------- | -------------- |
| Issue 1   | 30 minutes     |
| Issue 3   | 45 minutes     |
| Issue 5   | 30 minutes     |
| Testing   | 30 minutes     |
| **Total** | **~2.5 hours** |

## Success Criteria

- [ ] Scroll spy works with any heading level (h2, h3, custom components)
- [ ] Screen reader announces TOC as navigation, not toggles
- [ ] No DOM queries during scroll (only on mount)
- [ ] All existing functionality preserved
- [ ] No visual regressions
