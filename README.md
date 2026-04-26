# Dr. Elizabeth G. Campolongo - Personal Website

A professional, responsive personal website built with HTML and CSS. No build tools required!

## Features

- **No Build Tools**: Just open `index.html` in a browser or use `python -m http.server 8000`
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Google Fonts**: Uses Alegreya (serif) and Alegreya Sans (sans-serif) font families
- **Sidebar Layout**: Clean sidebar with profile photo and social links
- **Cross-Browser Compatible**: Works consistently across modern browsers
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation support
- **Print-Friendly**: Optimized CSS for printing CV and other pages

## Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Use Python's Built-in Server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 3: Use PHP's Built-in Server
```bash
php -S localhost:8000
```
Then visit `http://localhost:8000` in your browser.

## Structure

```
bookish-cat/
├── index.html          # About page (home)
├── research.html       # Research interests and projects
├── cv.html            # Curriculum Vitae
├── 404.html           # Custom 404 error page
├── css/
│   └── style.css      # Main stylesheet with CSS variables
├── images/
│   ├── favicon.png    # Favicon (add your own)
│   ├── bio-photo.jpg  # Profile photo (add your own)
│   ├── 404.png        # 404 page image (add your own)
│   └── placeholder-profile.svg  # Fallback profile image
└── README.md          # This file
```

## Adding Your Images

### Required Images

1. **Favicon** (`images/favicon.png`)
   - Download the favicon image from: https://github.com/user-attachments/assets/3a039120-e5a7-422b-9b79-c624792f31ec
   - Save as `images/favicon.png`
   - Recommended size: 32x32 or 64x64 pixels

2. **404 Image** (`images/404.png`)
   - Download the 404 image from: https://github.com/user-attachments/assets/c7f31993-ce6e-4c2f-8315-9777b47b592c
   - Save as `images/404.png`

3. **Bio Photo** (`images/bio-photo.jpg`)
   - Add your professional headshot
   - Recommended size: 400x400 pixels or larger (square format)
   - Supported formats: JPG, PNG, WebP

### How to Add Images

1. Download the images from the URLs above
2. Place them in the `images/` folder with the correct filenames
3. The website will automatically use them

If images are not added, the site will gracefully fall back to placeholders.

## Customization

### Colors and Themes

The website uses CSS variables for easy customization. Edit `css/style.css` and modify the `:root` section:

```css
:root {
    --primary-color: #2c5f7c;      /* Main brand color */
    --accent-color: #e67e22;       /* Accent/highlight color */
    --text-dark: #2c3e50;          /* Main text color */
    /* ... more variables ... */
}
```

### Fonts

To change fonts, update the Google Fonts link in the `<head>` of each HTML file and modify the CSS variables:

```css
:root {
    --font-serif: 'YourSerifFont', Georgia, serif;
    --font-sans: 'YourSansFont', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Content

All content is in the HTML files and can be edited directly:
- `index.html` - About page content
- `research.html` - Research interests and projects
- `cv.html` - Curriculum vitae

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

This website follows accessibility best practices:
- Semantic HTML structure
- ARIA labels for icon links
- Keyboard navigation support
- Focus indicators
- Color contrast ratios meet WCAG AA standards
- Responsive text sizing
- Reduced motion support for users with motion sensitivity

## Project Goals

This website redesign meets the following requirements:
- ✅ Easy to run locally (no build process)
- ✅ Professional but fun aesthetic
- ✅ Efficient use of browser window space
- ✅ Consistent display across browsers
- ✅ Modular, well-documented code
- ✅ Responsive sidebar layout with social links
- ✅ All content from original Jekyll site included
- ✅ Google Fonts (Alegreya + Alegreya Sans)

## License

Content © 2025 Elizabeth G. Campolongo. All rights reserved.

Website code structure available for reference and learning purposes.

## Credits

- Fonts: [Alegreya](https://fonts.google.com/specimen/Alegreya) and [Alegreya Sans](https://fonts.google.com/specimen/Alegreya+Sans) by Juan Pablo del Peral (Huerta Tipográfica)
- Icons: Inline SVG icons for social links
- Design: Custom responsive layout

## Questions or Issues?

For questions about the website content, please contact Dr. Campolongo at e.campolongo479@gmail.com

---

**Note**: This website is designed to be simple, maintainable, and easy to deploy to GitHub Pages or any static hosting service.
