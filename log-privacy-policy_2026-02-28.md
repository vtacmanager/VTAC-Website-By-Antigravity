# Project Log: Privacy Policy Implementation

**Project:** VTAC Manager Website  
**Date:** 2026-02-28  
**Objective:** Embed external Privacy Policy HTML into the React codebase.

---

## 💡 Implementation Steps (Q&A)

### Q1: How was the content extracted from the large HTML file?
**A:** The original `Privacy Policy.html` was a complex Cocoa-wrapped Rich Text export (280KB+). A custom Python script was used to:
1.  Parse paragraphs from the Apple-specific HTML structure.
2.  Unescape HTML entities.
3.  Extract only the necessary content tags.
4.  Generate a clean HTML snippet (`privacy-policy-content.html`) for fast loading.

### Q2: How is the content displayed on the website?
**A:** Instead of hardcoding 100kb+ of text, we updated `pages/Privacy.tsx` to:
-   **Fetch**: Use a `useEffect` hook to asynchronously pull the clean HTML from the `/public` folder.
-   **Safe Render**: Use `dangerouslySetInnerHTML` inside a scoped container to preserve the original structure while applying brand-new styles.

### Q3: What design changes were made?
**A:** To ensure a premium feel:
-   **Container**: Created a `white` rounded card (shadow-2xl) that floats over the `slate-950` dark background. This mimics a real legal paper on a executive desk.
-   **Typography**: Re-mapped all legal text to the **Inter** font family.
-   **Branding**: All links automatically use the **Emerald Green** theme color.

### Q4: How do we update the policy in the future?
**A:** Simply overwrite `public/privacy-policy-content.html` with the new content. The website will automatically pull and display the new text without needing a rebuild of the React application.

---

## 📂 Related Files
-   `/public/Privacy Policy.html` (Original)
-   `/public/privacy-policy-content.html` (Clean Source)
-   `/pages/Privacy.tsx` (Component)
-   `/App.tsx` (Route Registration)

---
*Status: Completed and Deployed (Vercel)*
