# Infinite Carousel: Architecture & Bug Resolutions

This document explains the technical implementation of the `InfiniteLogoCarousel` component and the specific CSS edge cases solved during its integration.

## 1. The GPU Texture Limit Bug (Disappearing Elements)

### The Problem
When dealing with extremely wide continuous scroll animations (like infinite marquees), developers often apply `will-change: transform` to move the animation to the GPU, preventing jitter and ensuring a smooth 60fps scroll.

However, GPUs (including modern Apple Silicon chips) have a hardcoded **Maximum Texture Dimension Limit**, typically `8192x8192` pixels or `4096x4096` pixels depending on the hardware. 

If the `logo-marquee-track` is duplicated too many times to fill ultra-wide screens (e.g., duplicated 4 times reaching a width of `13,000+` pixels), the browser still attempts to create a single GPU texture for the element. When the width exceeds `8192px`, the browser silently drops the overflowing portion. Visually, this results in the elements on the right side of the track rendering as completely transparent, making them "disappear" abruptly as they scroll into the viewport.

### The Solution
Instead of infinitely cloning elements into a massive container, the track is restricted to **exactly two groups** (`Group A` and `Group B`). This keeps the overall container width safely below `8192px` (usually around `4000px` max), preventing any GPU clipping.

## 2. The "Math Gap Pop" (The Infinite Loop Misalignment)

### The Problem
To achieve a pure CSS infinite scroll, the track container is translated by exactly half of its width:
```css
@keyframes logo-marquee-scroll {
  to { transform: translateX(-50%); }
}
```
If the container (`.logo-marquee-track`) uses `display: flex;` and `gap: 3rem;`, a mathematical misalignment occurs. 
Given two identical groups of `N` items:
- The container holds `2N` items.
- The container contains exactly `2N - 1` gaps.

The total width is $W = (2N \times \text{ItemWidth}) + ((2N - 1) \times \text{GapWidth})$.
Half of this width (`-50%`) is:
$W / 2 = (N \times \text{ItemWidth}) + (N \times \text{GapWidth}) - (0.5 \times \text{GapWidth})$.

The actual distance from the start of Group A to the start of Group B is:
$\text{Distance} = \text{Width of Group A} + \text{Gap between A and B}$
$\text{Distance} = (N \times \text{ItemWidth} + (N - 1) \times \text{GapWidth}) + \text{GapWidth}$
$\text{Distance} = N \times \text{ItemWidth} + N \times \text{GapWidth}$.

Because `-50%` falls short of the true distance by exactly **half a gap** (`0.5 * 3rem = 1.5rem`), the animation loop resets `1.5rem` too early. This causes the entire carousel to abruptly "jump" or "pop" backward at the end of every cycle.

### The Solution
The solution is to logically group the arrays and remove the `gap` from the parent track:

**HTML Structure:**
```tsx
<div className="logo-marquee-track">
  <div className="logo-marquee-group">{items}</div>
  <div className="logo-marquee-group">{items}</div>
</div>
```

**CSS Structure:**
```css
.logo-marquee-track {
  display: flex;
  /* gap is removed from here! */
  width: max-content;
}

.logo-marquee-group {
  display: flex;
  gap: 3rem;
  padding-right: 3rem; /* The gap between groups is shifted here */
}
```

By removing the gap from the parent and applying it as `padding-right` to the `logo-marquee-group`, the parent track now has exactly `2` children and `0` gaps. 
The `-50%` translation is now perfectly equal to the width of the first group, ensuring a mathematically flawless and invisible loop transition.
