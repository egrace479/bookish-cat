/**
 * site.js — Site-Wide Functionality
 * ====================================
 * Handles theme persistence, mobile navigation toggle, and any other
 * interactive behaviour shared across all pages.
 *
 * Dependencies: components.js must be loaded before this file.
 *
 * Initialization flow (end of each HTML page):
 *   1. components.js is loaded → SiteComponents is available
 *   2. site.js is loaded → SiteApp is available
 *   3. Inline <script> calls SiteComponents.init() then SiteApp.init()
 */

const SiteApp = (() => {

  /* ── Theme ────────────────────────────────────────────────────────────────
   * Persists the user's preference in localStorage so it survives page loads.
   * The <html> element carries `data-theme="light"` or `data-theme="dark"`.
   * ──────────────────────────────────────────────────────────────────────── */

  const STORAGE_KEY = 'egrace-theme';

  /** Returns the saved theme or, as a fallback, the OS preference. */
  function getSavedTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  /** Applies the given theme to the document and updates the toggle button. */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const icon = document.getElementById('theme-icon');
    const btn  = document.getElementById('theme-toggle');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    if (btn)  btn.setAttribute('aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  /** Toggles between light and dark. */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* ── Mobile Navigation ────────────────────────────────────────────────────
   * On small screens the nav drawer slides in from the right. Tapping the
   * overlay or the close button dismisses it. Focus is trapped while open.
   * ──────────────────────────────────────────────────────────────────────── */

  /** Opens the mobile navigation drawer. */
  function openMobileMenu() {
    const nav     = document.getElementById('main-nav');
    const overlay = document.getElementById('nav-overlay');
    const toggle  = document.getElementById('mobile-menu-toggle');
    const icon    = document.getElementById('menu-icon');

    if (!nav) return;
    nav.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    if (toggle)  toggle.setAttribute('aria-expanded', 'true');
    if (icon)    icon.textContent = '✕';

    // Move focus into the first nav link for keyboard users
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  /** Closes the mobile navigation drawer. */
  function closeMobileMenu() {
    const nav     = document.getElementById('main-nav');
    const overlay = document.getElementById('nav-overlay');
    const toggle  = document.getElementById('mobile-menu-toggle');
    const icon    = document.getElementById('menu-icon');

    if (!nav) return;
    nav.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    if (toggle)  toggle.setAttribute('aria-expanded', 'false');
    if (icon)    icon.textContent = '☰';
  }

  /* ── Event Binding ──────────────────────────────────────────────────────── */

  /**
   * Uses event delegation so we can attach a single listener to the document
   * rather than querying specific elements (which may not yet exist when this
   * module loads).
   */
  function bindEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      // Theme toggle button or its child icon
      if (target.closest('#theme-toggle')) {
        toggleTheme();
        return;
      }

      // Mobile menu toggle button
      if (target.closest('#mobile-menu-toggle')) {
        const nav = document.getElementById('main-nav');
        const isOpen = nav && nav.classList.contains('is-open');
        isOpen ? closeMobileMenu() : openMobileMenu();
        return;
      }

      // Click on overlay closes mobile menu
      if (target.id === 'nav-overlay') {
        closeMobileMenu();
        return;
      }

      // Clicking any nav link also closes the mobile drawer
      if (target.closest('#main-nav a')) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  /* ── Public API ─────────────────────────────────────────────────────────── */

  /**
   * Initialize the site app. Call after SiteComponents.init() has run.
   * Applies the saved theme and binds all interactive event handlers.
   */
  function init() {
    // Apply persisted / preferred theme before first paint to avoid flash
    applyTheme(getSavedTheme());
    bindEvents();
  }

  return { init };

})();
