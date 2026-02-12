# Specification

## Summary
**Goal:** Build the “Weeding Brochure” website with a branded, responsive layout, an invitation design gallery, a customization request form persisted to a Motoko backend, and a contact page for hardcopy requests.

**Planned changes:**
- Add global site branding for “Weeding Brochure” with responsive header/nav (Gallery, Customize, Contact), footer, and consistent typography/spacing.
- Create a Home page hero section with a call-to-action to view the gallery and apply a coherent wedding-themed visual style (avoiding blue/purple as the primary palette).
- Implement a Gallery page showing at least 8 static invitation designs (thumbnails + basic metadata) and a larger preview when a design is selected.
- Implement a Customize page with an English-language form (names, date, venue, notes, etc.) and optional association to a selected gallery design.
- Add a Motoko backend API to create and list customization requests with stable persistence, including createdAt and optional design identifier.
- Connect the Customize form submission to the backend and display clear success and error states (English), preserving entered data on failure.
- Create a Contact page that prominently displays “Gharpic designer owner” and the phone number “9824469590” with a mobile-friendly click-to-call link.
- Store and render generated images as static frontend assets (hero banner + gallery designs) under `frontend/public/assets/generated`.

**User-visible outcome:** Users can browse wedding invitation designs with previews, submit a customization request tied to an optional design (and see confirmation/errors), and contact the Gharpic designer owner via click-to-call for hardcopy requests.
