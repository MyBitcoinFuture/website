# Deployment Guide

## GitHub Pages Deployment

This website is configured for automatic deployment to GitHub Pages with a custom domain.

### Prerequisites

1. **GitHub Repository**: The code should be in a GitHub repository named `mybitcoinfuture.com`
2. **Custom Domain**: You should own `mybitcoinfuture.com` and have DNS access

### Setup Steps

#### 1. Repository Setup

1. Create a new repository on GitHub named `mybitcoinfuture.com`
2. Push this code to the repository
3. Go to repository Settings → Pages

#### 2. GitHub Pages Configuration

1. **Source**: Select "GitHub Actions" as the source
2. **Custom Domain**: Enter `mybitcoinfuture.com`
3. **Enforce HTTPS**: Check this box (recommended)

#### 3. DNS Configuration

Add these DNS records to your domain registrar:

```
Type: CNAME
Name: @ (or leave blank)
Value: yourusername.github.io
TTL: 3600 (or default)
```

#### 4. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build the website when you push to the `main` branch
- Deploy to GitHub Pages
- Use your custom domain

### Manual Deployment

If you need to deploy manually:

```bash
# Build the static files
npm run build

# The dist/ folder contains the deployable files
# Upload these to your web server
```

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Custom Domain SSL

GitHub Pages automatically provides SSL certificates for custom domains. The process may take up to 24 hours for the certificate to be issued.

### Troubleshooting

1. **DNS Issues**: Ensure your CNAME record points to `yourusername.github.io`
2. **Build Failures**: Check the GitHub Actions logs for build errors
3. **Custom Domain Not Working**: Wait up to 24 hours for DNS propagation

### File Structure

```
dist/                    # Built static files (deployed to GitHub Pages)
├── index.html          # Main HTML file
├── favicon.png         # Website favicon
└── assets/             # CSS and JS files
    ├── index-*.css     # Compiled CSS
    └── index-*.js      # Compiled JavaScript
```

The website will be available at `https://mybitcoinfuture.com` once deployed.
