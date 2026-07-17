---
name: Editorial Ethereal
colors:
  surface: '#fafaf5'
  surface-dim: '#dadad5'
  surface-bright: '#fafaf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4ef'
  surface-container: '#eeeee9'
  surface-container-high: '#e8e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1a1c19'
  on-surface-variant: '#504442'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ec'
  outline: '#827472'
  outline-variant: '#d3c3c0'
  surface-tint: '#745853'
  primary: '#271310'
  on-primary: '#ffffff'
  primary-container: '#3e2723'
  on-primary-container: '#ae8d87'
  inverse-primary: '#e3beb8'
  secondary: '#6f5a52'
  on-secondary: '#ffffff'
  secondary-container: '#fadcd2'
  on-secondary-container: '#766057'
  tertiary: '#1d1815'
  on-tertiary: '#ffffff'
  tertiary-container: '#322c29'
  on-tertiary-container: '#9c938f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e3beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#fadcd2'
  secondary-fixed-dim: '#ddc1b7'
  on-secondary-fixed: '#271812'
  on-secondary-fixed-variant: '#56423b'
  tertiary-fixed: '#ece0dc'
  tertiary-fixed-dim: '#cfc4c0'
  on-tertiary-fixed: '#201a18'
  on-tertiary-fixed-variant: '#4c4542'
  background: '#fafaf5'
  on-background: '#1a1c19'
  surface-variant: '#e3e3de'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system balances the tactile warmth of high-end editorial print with the digital fluidity of modern glassmorphism. It targets a sophisticated, creative audience that values craftsmanship, academic rigor, and minimalist luxury. 

The aesthetic is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes expansive white space (beige/cream-based), high-contrast serif typography for an authoritative voice, and "Ethereal Glass" components—semi-transparent layers with deep blurs—to create a sense of physical depth and lightness. The emotional response is intended to be calm, curated, and premium.

## Colors
The palette is derived from natural earth tones and high-quality paper stocks. 
- **Primary:** Deep Chocolate Brown (#3E2723). Used for primary typography and high-emphasis icons to ensure readability and authority.
- **Secondary:** Muted Mocha (#A1887F). Used for secondary actions, subtle borders, and supporting text.
- **Tertiary:** Soft Sand (#D7CCC8). Used for background accents and container fills.
- **Neutral:** Warm Cream (#F5F5F0). The canvas for the entire system, providing a softer, more premium alternative to pure white.

Surface backgrounds use semi-transparent variations of the neutral and tertiary colors to achieve the frosted glass effect.

## Typography
The typography follows a classic editorial hierarchy. **Libre Caslon Text** provides a timeless, scholarly feel for headlines, while **DM Sans** ensures modern legibility for functional body text. 

Emphasis is placed on vertical rhythm and generous line heights to evoke the feeling of a printed journal. Use `label-md` with uppercase styling and slight tracking for metadata and small functional tags to contrast against the expressive serif headlines.

## Layout & Spacing
The layout uses a **fixed grid** approach for desktop to maintain the intentional structure of a magazine spread, transitioning to a fluid model for mobile devices.

A 12-column grid is employed with wide 32px gutters to encourage breathing room. Section padding is aggressive (often 80px-120px) to separate content themes visually. Content should be centered with wide horizontal margins to draw focus to the "ethereal" glass containers.

## Elevation & Depth
Hierarchy is established through **Glassmorphism** and soft ambient shadows. 
1. **The Base Layer:** The warm neutral cream background.
2. **The Glass Layer:** Containers use a background of `rgba(245, 245, 240, 0.6)` with a backdrop-blur of `24px`. This creates a frosted effect that feels integrated into the background.
3. **The Edge:** Glass containers feature a 1px solid border of `rgba(62, 39, 35, 0.1)` to define their shape without creating visual noise.
4. **The Shadow:** Shadows are extremely diffused—low opacity brown tints (e.g., `rgba(62, 39, 35, 0.04)`) with high blur radii (30px+) to simulate natural, soft lighting.

## Shapes
Shapes are disciplined and "Soft." We avoid aggressive curves to maintain a professional, academic aesthetic. Rectilinear forms with slight 0.25rem corner radii feel more like cut paper or architectural elements. Large image cards or main glass containers may use up to 0.75rem (`rounded-xl`) to feel more approachable and distinct from the structural grid.

## Components
- **Buttons:** Primary buttons are solid Chocolate Brown with cream text. Secondary buttons are "Glass" style with a brown border and subtle hover blur increase.
- **Chips/Labels:** Small, rectangular tags with 2px corner radii. Use the `label-md` typography. Backgrounds should be the Tertiary Sand color or a light glass tint.
- **Cards:** These are the primary expression of the "Ethereal Glass" style. Full-bleed imagery should be placed behind the glass layer or within it with a slight internal margin.
- **Input Fields:** Minimalist underlines or very subtle glass containers. Focus states are indicated by a thickening of the brown bottom border.
- **Lists:** Separated by thin, low-opacity brown dividers. Use generous vertical padding (24px+) between list items to maintain the editorial feel.
- **Image Treatments:** Images should have a slight warm filter or desaturation to align with the beige/brown palette.