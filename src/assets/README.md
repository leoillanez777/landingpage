# Assets Directory

This directory contains all the image assets used throughout the Excelencia Digital landing page.

## Files

### `logo.png`
- **Description**: Official Excelencia Digital company logo
- **Usage**: Navigation header, Footer
- **Recommended size**: 512x512px or similar square format
- **Format**: PNG with transparency preferred
- **Notes**: Used in both light and dark contexts (footer inverts colors)

### `ISO9001.webp`
- **Description**: ISO 9001 certification badge/certificate image
- **Usage**: Benefits section, Footer, ISO9001Badge component
- **Recommended size**: 200x200px minimum
- **Format**: WebP for optimal performance, PNG/JPG acceptable
- **Notes**: Used to display quality certification throughout the site

### `background.png`
- **Description**: Hero section background image
- **Usage**: Hero component background
- **Recommended size**: 1920x1080px or higher resolution
- **Format**: PNG/JPG optimized for web
- **Notes**: Applied with 30% opacity and gradient overlay

## Usage in Code

Import assets using the centralized assets index:

```typescript
import { logo, iso9001Certificate, backgroundImage } from '@/assets';
```

## Components Using Assets

- **Navigation**: Uses `logo` for brand identity
- **Footer**: Uses `logo` (inverted) and `iso9001Certificate` (minimal badge)
- **Hero**: Uses `backgroundImage` as section background
- **Benefits**: Uses `iso9001Certificate` in detailed trust badge
- **ISO9001Badge**: Dedicated component using `iso9001Certificate`

## Optimization Notes

- All images should be optimized for web (compressed)
- WebP format preferred for better performance
- Use appropriate alt text for accessibility
- Consider lazy loading for background images

## Replacement Instructions

To replace any asset:
1. Replace the file in this directory with the same filename
2. Ensure the new image meets the recommended specifications
3. The import statements will automatically use the new file
4. Test across all components to ensure proper display