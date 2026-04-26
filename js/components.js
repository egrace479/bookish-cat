/**
 * components.js — Shared HTML Components
 * ========================================
 * Defines the site-wide navigation, author sidebar, and footer as JavaScript
 * template strings and injects them into every page. This keeps all shared
 * markup in one file so edits only need to happen here.
 *
 * Usage (called automatically by site.js):
 *   SiteComponents.init({ activePage: 'about' });
 *
 * Valid activePage values: 'about', 'research', 'publications', 'cv', 'talks'
 */

const SiteComponents = (() => {

  /* ── Constants ──────────────────────────────────────────────────────────── */

  /** URL base — allows the site to work from any subdirectory. */
  const BASE = (() => {
    // Determine the root path by looking at the current URL.
    // If served from the repo root (e.g. http://localhost:8000/ or
    // https://example.github.io/), BASE is ''.
    // Adjust SITE_ROOT below if your site is hosted under a subdirectory.
    const SITE_ROOT = '';
    return SITE_ROOT;
  })();

  /** Navigation items. */
  const NAV_ITEMS = [
    { id: 'about',        label: 'About',        href: `${BASE}index.html`        },
    { id: 'research',     label: 'Research',     href: `${BASE}research.html`     },
    { id: 'publications', label: 'Publications', href: `${BASE}publications.html` },
    { id: 'cv',           label: 'CV',           href: `${BASE}cv.html`           },
    { id: 'talks',        label: 'Talks',        href: `${BASE}talks.html`        },
  ];

  /** Favicon / logo image (cat with glasses). */
  const FAVICON_URL = 'https://github.com/user-attachments/assets/1509118f-3210-46f3-b133-2cf7e31e3d66';

  /* ── Template Builders ──────────────────────────────────────────────────── */

  /**
   * Builds the top navigation bar HTML.
   * @param {string} activePage — the page ID to mark as active.
   * @returns {string} HTML string.
   */
  function buildHeader(activePage) {
    const navLinks = NAV_ITEMS.map(item => `
      <li>
        <a href="${item.href}"
           class="masthead__nav-link${item.id === activePage ? ' active' : ''}"
           ${item.id === activePage ? 'aria-current="page"' : ''}>
          ${item.label}
        </a>
      </li>`).join('');

    return `
      <nav class="masthead" role="navigation" aria-label="Main navigation">
        <a href="${BASE}index.html" class="masthead__title" aria-label="Home — Dr. Campolongo">
          <img src="${FAVICON_URL}" alt="Site logo — cat with glasses"
               onerror="this.style.display='none'">
          <span>Dr. Campolongo</span>
        </a>

        <ul class="masthead__nav" id="main-nav" role="list">
          ${navLinks}
        </ul>

        <div class="masthead__controls">
          <!-- Dark / light mode toggle -->
          <button class="btn-icon" id="theme-toggle"
                  aria-label="Toggle dark/light mode"
                  title="Toggle dark/light mode">
            <span id="theme-icon" aria-hidden="true">🌙</span>
          </button>

          <!-- Mobile menu toggle (visible on small screens only) -->
          <button class="btn-icon" id="mobile-menu-toggle"
                  aria-label="Toggle navigation menu"
                  aria-controls="main-nav"
                  aria-expanded="false">
            <span id="menu-icon" aria-hidden="true">☰</span>
          </button>
        </div>
      </nav>

      <!-- Invisible overlay to close mobile menu on outside tap -->
      <div class="nav-overlay" id="nav-overlay" aria-hidden="true"></div>
    `;
  }

  /**
   * Builds the author sidebar HTML.
   * @returns {string} HTML string.
   */
  function buildSidebar() {
    return `
      <div class="author-profile">
        <img class="author-profile__avatar"
             src="${FAVICON_URL}"
             alt="Elizabeth G. Campolongo — illustrated cat avatar with glasses"
             onerror="this.outerHTML='<div class=\\'author-profile__avatar-placeholder\\' aria-hidden=\\'true\\'>🐱</div>'">

        <div class="author-profile__content">
          <p class="author-profile__name">Elizabeth G. Campolongo, Ph.D.</p>
          <p class="author-profile__bio">
            Mathematician · Quantum Researcher · Senior Data Scientist
          </p>

          <hr class="author-profile__divider" aria-hidden="true">

          <ul class="author-profile__links" role="list">
            <li>
              <span class="link-icon" aria-hidden="true">📧</span>
              <a href="mailto:e.campolongo479@gmail.com"
                 aria-label="Email Elizabeth">
                e.campolongo479@gmail.com
              </a>
            </li>
            <li>
              <span class="link-icon" aria-hidden="true">🐙</span>
              <a href="https://github.com/egrace479"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="GitHub profile (opens in new tab)">
                github.com/egrace479
              </a>
            </li>
            <li>
              <span class="link-icon" aria-hidden="true">🔗</span>
              <a href="https://www.linkedin.com/in/elizabethcampolongo/"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="LinkedIn profile (opens in new tab)">
                LinkedIn
              </a>
            </li>
            <li>
              <span class="link-icon" aria-hidden="true">🎓</span>
              <a href="https://scholar.google.com/citations?user=GO6Y7SEAAAAJ&hl=en"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="Google Scholar profile (opens in new tab)">
                Google Scholar
              </a>
            </li>
            <li>
              <span class="link-icon" aria-hidden="true">🔬</span>
              <a href="http://orcid.org/0000-0003-0846-2413"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="ORCID profile (opens in new tab)">
                ORCID
              </a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * Builds the site footer HTML.
   * @returns {string} HTML string.
   */
  function buildFooter() {
    const year = new Date().getFullYear();
    return `
      <div class="footer-inner">
        <span>© ${year} Elizabeth G. Campolongo, Ph.D. All rights reserved.</span>
        <span>
          Built with HTML · CSS · JavaScript ·
          <a href="https://github.com/egrace479/bookish-cat"
             target="_blank" rel="noopener noreferrer"
             aria-label="View site source on GitHub (opens in new tab)">
            View source on GitHub
          </a>
        </span>
      </div>
    `;
  }

  /* ── Public API ─────────────────────────────────────────────────────────── */

  /**
   * Inject all shared components into the page and initialize site behaviour.
   * Call this once per page after the DOM is ready.
   *
   * @param {Object} options
   * @param {string} options.activePage — nav item to highlight ('about', etc.)
   */
  function init({ activePage = 'about' } = {}) {
    // Inject components
    const headerEl  = document.getElementById('site-header');
    const sidebarEl = document.getElementById('site-sidebar');
    const footerEl  = document.getElementById('site-footer');

    if (headerEl)  headerEl.innerHTML  = buildHeader(activePage);
    if (sidebarEl) sidebarEl.innerHTML = buildSidebar();
    if (footerEl)  footerEl.innerHTML  = buildFooter();
  }

  return { init };

})();
