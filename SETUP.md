# Pleasant Stay Motel Website - Setup Guide

## Overview
A minimal, psychology-driven website for Pleasant Stay Motel near Hamilton, Ontario.

## Design Philosophy
The website uses hospitality psychology principles:
- **Deep blue colors** (sky-900): Trust, reliability, professionalism
- **Warm earth tones** (stone palette): Comfort, stability, cleanliness
- **Ample white space**: Perceived cleanliness and simplicity
- **Clear visual hierarchy**: Easy decision-making for potential guests
- **Minimal design**: Focus on essential information without distraction

## Adding Your Images

Place your property photos in `/public/images/` with these filenames:

1. **hero.jpg** - Main property shot for the landing page hero section (recommended: 1920x1080px or larger)
2. **room1.jpg** - Standard room photo (recommended: 800x600px)
3. **room2.jpg** - Deluxe room photo (recommended: 800x600px)
4. **room3.jpg** - Family suite photo (recommended: 800x600px)

The images will automatically display once you add them to the folder.

## Installation

1. Install dependencies:
```bash
cd psmotelwebsite2026
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Booking.com Link
In `app/page.tsx` around line 152, replace the Booking.com URL with your actual property listing:
```typescript
href="https://www.booking.com/your-property-url"
```

### Modify Content
- Business name: Line 10 in `app/page.tsx`
- Hero headline: Line 37-38
- About section text: Line 76-80
- Room descriptions: Lines 104-135

### Color Scheme
Colors are defined in `app/globals.css` (lines 4-11):
- `--primary`: Main blue color
- `--accent`: Warm brown accent
- Adjust these to match your brand

## Website Sections

1. **Header** - Fixed navigation with phone number
2. **Hero Section** - Full-screen main image with CTA
3. **About Section** - Brief description of the motel
4. **Rooms Gallery** - Three room types with images
5. **Booking Section** - Booking.com button + phone contact
6. **Footer** - Location and contact information

## Contact Information

All contact details are pulled from:
- Phone: +1 905-516-1959
- Address: 2692 2, Alberton, ON L0R 1A0, Canada
- Google Rating: 3.1/5

Update these in `app/page.tsx` if needed.
