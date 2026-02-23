# Manual Verification Steps

Open DevTools (F12) on the deployed site. Paste each snippet into the **Console** tab.

---

## 1. Canonical href excludes query string and hash

**Test URL:** `/services/interior-painting?ref=test&utm_source=google#section`

```js
// After page load — canonical must NOT contain ?ref= or #section
document.querySelector('link[rel="canonical"]').href
// Expected: "https://www.hillcopaint.com/services/interior-painting"

// Address bar must have ref stripped, other params + hash preserved
window.location.href
// Expected: "https://www.hillcopaint.com/services/interior-painting?utm_source=google#section"
```

---

## 2. robots meta is noindex,follow ONLY when ?ref= existed

**Test URL A (with ref):** `/about?ref=partner`

```js
document.querySelector('meta[name="robots"]').content
// Expected: "noindex, follow"
```

**Test URL B (no ref):** `/about`

```js
document.querySelector('meta[name="robots"]').content
// Expected: "index, follow"
```

**Test URL C (other params, no ref):** `/about?utm_source=google`

```js
document.querySelector('meta[name="robots"]').content
// Expected: "index, follow"
```

**Test URL D (REF uppercase):** `/about?REF=partner`

```js
document.querySelector('meta[name="robots"]').content
// Expected: "noindex, follow"

window.location.search
// Expected: "" (ref stripped, nothing else remained)
```

---

## 3. Trailing-slash normalization preserves query and hash

**Test URL:** `/privacy/?utm_source=email#section2`

```js
// After React Router redirect, address bar should show:
window.location.pathname   // Expected: "/privacy"
window.location.search     // Expected: "?utm_source=email"
window.location.hash       // Expected: "#section2"

// Correct page rendered (not NotFound):
document.title
// Expected: something like "Privacy Policy | Hill Country Painting"

// No full page reload (check Network tab — should show NO new document request)
// The URL change is client-side via React Router navigate({ replace: true })
```

**Test URL:** `/blog/`

```js
window.location.pathname   // Expected: "/blog"
// Correct page rendered, not 404
```

---

## 4. Verify canonical is runtime-inserted (expected SPA behavior)

Because this is a client-side SPA using react-helmet-async, canonicals are NOT
present in the raw HTML source — they are injected after React hydrates.

```js
// Should show canonical set by the current page component:
document.querySelector('link[rel="canonical"]')?.outerHTML
// Expected: <link data-rh="true" rel="canonical" href="https://www.hillcopaint.com/...">

// The "data-rh" attribute confirms react-helmet-async injected it at runtime.
```

To verify in the raw HTML (SSR check), run in terminal after build:
```bash
grep -i "canonical" dist/index.html
# Expected: no match — confirmed runtime-only
```
