# Public Assets

This directory contains static assets served by Next.js.

## Recommended Structure

```
public/
├── favicon.ico          # Site favicon
├── logo.png             # Company logo
├── og-image.png         # Open Graph image (1200x630px)
├── case-studies/        # Case study images
│   ├── manufacturing.jpg
│   ├── retail.jpg
│   ├── healthcare.jpg
│   └── ecommerce.jpg
└── leadership/          # Team member photos
    ├── john-smith.jpg
    ├── jane-doe.jpg
    └── robert-williams.jpg
```

## Image Guidelines

- **Favicon**: 32x32px or 16x16px
- **Logo**: PNG with transparent background, minimum 200x200px
- **OG Image**: 1200x630px for social media sharing
- **Case Studies**: 1200x800px recommended
- **Leadership Photos**: 400x400px square format

## Optimization

Next.js automatically optimizes images when using the `next/image` component. For best performance:

- Use WebP format when possible
- Compress images before uploading
- Keep file sizes under 500KB when possible

