# Dr. Elizabeth G. Campolongo — Personal Website

A redesigned personal academic website built with plain **HTML, CSS, and JavaScript** — no build
tools, no frameworks, no Jekyll/Ruby setup required. Open any `.html` file in your browser, or
serve the directory with a single command.

---

## 🐱 Running Locally

**Option A — just open a file (simplest)**

```
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

> ⚠️ Some browsers restrict loading images or scripts from `file://` URLs. If navigation looks
> broken, use Option B instead.

**Option B — Python's built-in server (recommended)**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit <http://localhost:8000>.

**Option C — Node.js**

```bash
npx serve .
# or
npx http-server -p 8000
```

---

## 📁 Project Structure

```
bookish-cat/
├── index.html          # About / Home page
├── research.html       # Research interests and highlighted projects
├── publications.html   # Publications list
├── cv.html             # Full Curriculum Vitae
├── talks.html          # Talks, presentations, and workshop organization
├── 404.html            # Custom 404 error page
│
├── css/
│   ├── variables.css   # ← THEME: all colors, fonts, and spacing tokens live here
│   ├── reset.css       # Browser normalization
│   ├── layout.css      # Navigation, sidebar, page wrapper, footer
│   ├── typography.css  # Headings, body text, publication/CV entry styles
│   ├── components.css  # Buttons, badges, cards, notices, skill grid
│   └── responsive.css  # Media queries for tablet (≤900px) and mobile (≤600px)
│
├── js/
│   ├── components.js   # ← EDIT SHARED UI HERE: nav links, sidebar, footer templates
│   └── site.js         # Theme toggle (light/dark), mobile nav drawer, event binding
│
├── images/             # Local image assets (optional; site currently uses GitHub CDN URLs)
│
└── README.md           # This file
```

---

## 🎨 Customizing the Theme

All design tokens (colors, fonts, spacing) are in **`css/variables.css`**.

To change the color scheme, edit the CSS custom properties in `:root` (light mode) and
`[data-theme="dark"]` (dark mode). For example, to change the primary accent from teal to
indigo:

```css
/* css/variables.css */
:root {
  --accent-primary: #4F46E5;  /* indigo */
  --accent-hover:   #4338CA;
  --nav-bg:         #4F46E5;
}
```

No compilation step needed — just save and refresh.

---

## 🧩 Editing Shared Components

The site header (navigation bar), author sidebar, and footer are defined as JavaScript
template strings in **`js/components.js`** and injected into each page. This means:

- To add or rename a nav link → edit the `NAV_ITEMS` array in `components.js`
- To update the author bio or social links → edit `buildSidebar()` in `components.js`
- To update the footer → edit `buildFooter()` in `components.js`

Each HTML page calls `SiteComponents.init({ activePage: '<page-id>' })` once at the bottom,
which injects all shared markup. You only need to maintain shared content in one file.

---

## 📝 Adding / Editing Content

Each page is a standalone HTML file. The main content lives inside the
`<article class="page-content">` element. Standard HTML applies:

- Use `<h2>` and `<h3>` for section and subsection headings
- Use `<p>` for paragraphs
- Use `class="pub-entry"` divs for publications (see `publications.html` for examples)
- Use `class="cv-entry"` divs for CV-style entries (see `cv.html`)
- Use `class="card"` articles inside a `class="card-grid"` div for project cards (see `research.html`)

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Set the source to **"Deploy from a branch"**, branch **`main`** (or whichever branch you use), root folder `/`.
4. The site will be live at `https://<username>.github.io/<repo-name>/`.

> If deploying to a subdirectory (e.g. `https://egrace479.github.io/bookish-cat/`), update
> the `SITE_ROOT` constant at the top of `js/components.js` to match that path prefix:
>
> ```js
> const SITE_ROOT = '/bookish-cat';
> ```

---

## 🖼️ Images

The site uses three custom images:

| Image | Purpose | Source |
|-------|---------|--------|
| Cat with glasses at keyboard | Favicon & sidebar avatar | GitHub user-attachment |
| Cat chaos + laptop 404 screen | Custom 404 page | GitHub user-attachment |
| Cat coding at desk (banner) | Optional hero image | GitHub user-attachment |

The images are currently referenced directly from their GitHub CDN URLs. To host them locally
(for offline use or to avoid broken images if the CDN URLs expire):

1. Download the images and place them in the `images/` folder.
2. Replace the GitHub CDN URLs in `js/components.js` and `404.html` with relative paths like
   `images/favicon.png`.

---

## 🤝 Contributing

1. Fork the repository and create a feature branch.
2. Keep CSS changes scoped to the appropriate file (don't mix layout and typography, etc.).
3. Keep shared markup changes in `js/components.js`, not duplicated across HTML files.
4. Test in both light and dark modes and at desktop, tablet, and mobile widths.
5. Open a pull request with a brief description of the change.
