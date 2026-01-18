# Image Setup Guide

To add your profile images to the portfolio:

## Step 1: Add Images to Public Folder

Place your images in the `/public` folder with these names:

- **Profile Photo**: Save your professional photo (the one in the blue suit) as `/public/profile-photo.jpg`
- **Banner Image**: Save your banner image as `/public/banner.jpg` (optional, for future use)

## Step 2: Update Hero Component

Once you've added your profile photo, uncomment the Image component in `/components/Hero.tsx`:

1. Find this section (around line 50-60):
```tsx
{/* Uncomment and add your image path when you have the image:
<Image
  src="/profile-photo.jpg"
  alt="Manav Gupta"
  fill
  className="object-cover"
  priority
/>
*/}
```

2. Replace it with:
```tsx
<Image
  src="/profile-photo.jpg"
  alt="Manav Gupta"
  fill
  className="object-cover"
  priority
/>
```

## Image Recommendations

- **Profile Photo**: 
  - Format: JPG or PNG
  - Size: At least 800x800px (square)
  - File size: Under 500KB for best performance
  
- **Banner Image** (optional):
  - Format: JPG or PNG
  - Size: 1920x600px (wide banner)
  - File size: Under 1MB

## Supported Formats

Next.js Image component supports:
- JPG/JPEG
- PNG
- WebP (recommended for best performance)
- AVIF (modern browsers)

## Tips

- Use WebP format for smaller file sizes
- Optimize images before adding them
- The Image component will automatically optimize images in production
