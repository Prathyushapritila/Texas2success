# Design System - Texas 2 Success

## Color Palette

### Primary Colors
- **Primary 50**: `#f0f9ff` - Lightest background
- **Primary 100**: `#e0f2fe` - Light background
- **Primary 200**: `#bae6fd` - Subtle accent
- **Primary 300**: `#7dd3fc` - Light accent
- **Primary 400**: `#38bdf8` - Medium accent
- **Primary 500**: `#0ea5e9` - Base primary
- **Primary 600**: `#0284c7` - Main brand color ⭐
- **Primary 700**: `#0369a1` - Darker shade
- **Primary 800**: `#075985` - Dark shade
- **Primary 900**: `#0c4a6e` - Darkest shade

### Neutral Colors (Light Mode)
- **White**: `#ffffff` - Background
- **Gray 50**: `#f9fafb` - Lightest gray
- **Gray 100**: `#f3f4f6` - Light gray
- **Gray 200**: `#e5e7eb` - Border gray
- **Gray 300**: `#d1d5db` - Light border
- **Gray 400**: `#9ca3af` - Medium gray
- **Gray 500**: `#6b7280` - Text gray
- **Gray 600**: `#4b5563` - Dark text
- **Gray 700**: `#374151` - Darker text
- **Gray 800**: `#1f2937` - Very dark text
- **Gray 900**: `#111827` - Darkest text

### Neutral Colors (Dark Mode)
- **Slate 900**: `#0f172a` - Dark background
- **Slate 800**: `#1e293b` - Card background
- **Slate 700**: `#334155` - Border
- **Slate 600**: `#475569` - Text
- **Slate 500**: `#64748b` - Light text
- **Slate 400**: `#94a3b8` - Lighter text
- **Slate 300**: `#cbd5e1` - Lightest text

### Accent Colors
- **Success/Green**: `#10b981` - Success states
- **Warning/Yellow**: `#f59e0b` - Warnings
- **Error/Red**: `#ef4444` - Errors
- **Info/Blue**: `#3b82f6` - Information

## Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Sizes
- **Display 1**: `4.5rem` (72px) - Hero headlines
- **Display 2**: `3.75rem` (60px) - Large headlines
- **H1**: `3rem` (48px) - Main headings
- **H2**: `2.25rem` (36px) - Section headings
- **H3**: `1.875rem` (30px) - Subsection headings
- **H4**: `1.5rem` (24px) - Card titles
- **Body Large**: `1.125rem` (18px) - Large body text
- **Body**: `1rem` (16px) - Default body text
- **Body Small**: `0.875rem` (14px) - Small text
- **Caption**: `0.75rem` (12px) - Captions

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extrabold**: 800

### Line Heights
- **Tight**: 1.25
- **Normal**: 1.5
- **Relaxed**: 1.75

## Spacing Scale

- **0**: 0px
- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **5**: 1.25rem (20px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **10**: 2.5rem (40px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)
- **24**: 6rem (96px)

## Border Radius

- **None**: 0
- **Small**: 0.25rem (4px)
- **Medium**: 0.5rem (8px)
- **Large**: 0.75rem (12px)
- **XL**: 1rem (16px)
- **2XL**: 1.5rem (24px)
- **Full**: 9999px (fully rounded)

## Shadows

- **Small**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Medium**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **Large**: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- **XL**: `0 20px 25px -5px rgba(0, 0, 0, 0.1)`
- **2XL**: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`
- **Glow**: `0 0 20px rgba(2, 132, 199, 0.3)` - Primary glow

## Animations

### Duration
- **Fast**: 150ms
- **Normal**: 300ms
- **Slow**: 500ms
- **Slower**: 800ms

### Easing
- **Ease In**: `cubic-bezier(0.4, 0, 1, 1)`
- **Ease Out**: `cubic-bezier(0, 0, 0.2, 1)`
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Spring**: `spring(300, 30)` - Framer Motion

### Common Animations
- **Fade In**: opacity 0 → 1
- **Slide Up**: translateY(30px) → translateY(0)
- **Slide Down**: translateY(-30px) → translateY(0)
- **Scale**: scale(0.9) → scale(1)
- **Rotate**: rotate(-90deg) → rotate(0deg)

## Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .glass {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Component Patterns

### Buttons
- **Primary**: `bg-primary-600 text-white hover:bg-primary-700`
- **Secondary**: `bg-white text-primary-600 border-2 border-primary-600`
- **Ghost**: `text-primary-600 hover:bg-primary-50`

### Cards
- **Default**: `bg-white dark:bg-slate-800 rounded-xl shadow-lg`
- **Glass**: `glass rounded-2xl border border-gray-200 dark:border-gray-700`
- **Hover**: `hover:shadow-2xl hover:-translate-y-1 transition-all`

### Inputs
- **Default**: `border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500`

## Accessibility

### Color Contrast
- **Text on Light**: Minimum 4.5:1 ratio
- **Text on Dark**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio

### Focus States
- **Visible**: `ring-2 ring-primary-500 ring-offset-2`
- **Keyboard Navigation**: All interactive elements focusable

### ARIA Labels
- All icons have descriptive labels
- Buttons have aria-label when text is not descriptive
- Form inputs have associated labels

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## Performance Targets

- **Lighthouse Score**: 90+ on mobile
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1

