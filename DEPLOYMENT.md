# Deployment Guide

This website can be deployed to various static hosting services with zero configuration.

## GitHub Pages

### Option 1: Direct Deployment
1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Select branch (e.g., `main` or `claude/redesign-personal-website`)
4. Select `/` (root) as the folder
5. Click Save
6. Your site will be available at `https://yourusername.github.io/repository-name/`

### Option 2: Custom Domain
1. Follow Option 1 above
2. Add a `CNAME` file with your domain name
3. Configure DNS settings with your domain provider
4. Enable HTTPS in GitHub Pages settings

## Netlify

1. Create a Netlify account
2. Click "Add new site" → "Import an existing project"
3. Connect to your GitHub repository
4. No build command needed
5. Publish directory: `/`
6. Click Deploy

## Vercel

1. Create a Vercel account
2. Click "Import Project"
3. Connect to your GitHub repository
4. Framework Preset: Other
5. No build settings needed
6. Click Deploy

## Local Testing

Before deploying, test locally:

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: PHP
php -S localhost:8000

# Option 3: Node.js (if installed)
npx serve

# Option 4: Just open index.html in a browser
```

## Pre-Deployment Checklist

- [ ] Add your bio photo to `images/bio-photo.jpg`
- [ ] Add favicon to `images/favicon.png`
- [ ] Add 404 image to `images/404.png`
- [ ] Test all navigation links
- [ ] Test on multiple browsers
- [ ] Test responsive design on mobile
- [ ] Update any placeholder text
- [ ] Check all external links work

## Post-Deployment

1. Test the live site on multiple devices
2. Run Google PageSpeed Insights
3. Test accessibility with WAVE or similar tool
4. Check for broken links
5. Submit sitemap to search engines (optional)

## Migrating from Jekyll Site

If you're replacing an existing GitHub Pages Jekyll site:

1. Backup your old site
2. Clear the repository or create a new branch
3. Push these files
4. Update GitHub Pages settings to use the new branch
5. The site will rebuild automatically

## Custom 404 Page

For GitHub Pages, the `404.html` will work automatically.

For other hosts:
- **Netlify**: Automatic
- **Vercel**: Automatic
- **Custom server**: Configure your server to serve `404.html` for 404 errors

## Notes

- No build process means instant updates
- Changes pushed to the repository will be live immediately (after CDN cache)
- All assets are included in the repository
- No dependencies to install or maintain
