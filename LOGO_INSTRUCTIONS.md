# Logo Instructions

## How to Add Your Logo

### Step 1: Add Logo File
1. Place your logo file in the `/public` folder
2. Recommended formats: PNG, SVG, or WebP
3. Recommended size: 200x200px minimum (for high quality)
4. Name it: `logo.png` (or `logo.svg`, `logo.webp`)

### Step 2: Update Components

#### In `components/Navbar.tsx` (around line 50):
Find this code:
```tsx
<div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-lg md:text-xl">T2S</span>
  {/* Uncomment when you have logo:
  <Image
    src="/logo.png"
    alt="Texas 2 Success Logo"
    width={56}
    height={56}
    className="object-contain"
  />
  */}
</div>
```

Uncomment the Image component and remove or comment out the T2S span.

#### In `components/Hero.tsx` (around line 30):
Find this code:
```tsx
<div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-green-100">
  <div className="text-4xl md:text-5xl font-bold text-green-600">
    T2S
  </div>
  {/* Uncomment when you have logo image:
  <Image
    src="/logo.png"
    alt="Texas 2 Success Logo"
    width={120}
    height={120}
    className="object-contain"
    priority
  />
  */}
</div>
```

Uncomment the Image component and remove or comment out the T2S div.

### Step 3: Test
1. Save the files
2. The logo should appear in the navbar and hero section
3. Make sure it looks good on mobile, tablet, and desktop

### Logo Requirements
- **Format**: PNG (transparent background) or SVG
- **Size**: At least 200x200px for quality
- **Background**: Transparent preferred
- **Colors**: Should work well on white/green backgrounds

### Current Placeholder
Currently using "T2S" text as placeholder. Replace with your actual logo image.

