# StrategyInsights Tile Component

This project features a high-fidelity recreation of the StrategyInsights landing page hero section, focusing on the standalone `StrategyInsightsTile` component. The component visualizes a central intelligence hub with floating metrics cards and connectivity graphs using smooth animations.

## Tech Stack
- **React 18+** (TypeScript)
- **Tailwind CSS** (Styling via CDN)
- **Framer Motion** (Orchestrated animations)
- **Lucide React** (Vector iconography)

## Usage
1. Clone the repository.
2. Install dependencies: `npm install framer-motion lucide-react`.
3. Run the development server (e.g., `npm start` or `vite`).
4. The `StrategyInsightsTile` component is located in `components/StrategyInsightsTile.tsx` and can be dropped into any Tailwind-configured React project. It is designed to be responsive within a max-width container of 600px.

## Component Details
The `StrategyInsightsTile` is an isolated component that encapsulates:
- A radial grid background.
- A pulsing central node with expanding rings.
- Three floating "glassmorphism" cards with independent floating animations.
- SVG connecting lines that draw themselves on mount.

## Design System & Styling

The application uses a specific dark-mode aesthetic centered around "Electric Violet" and "Void Black".

### Color Palette

| Usage | Hex Code | Tailwind Class | Description |
|-------|----------|----------------|-------------|
| **Background** | `#0b0a0f` | `bg-[#0b0a0f]` | Deep void black used for the main page background. |
| **Primary Brand** | `#7c3cec` | `text-[#7c3cec]` / `bg-[#7c3cec]` | Electric violet used for buttons, icons, and glowing effects. |
| **Card Base** | `#2e2938` | `bg-[#2e2938]/40` | Deep plum used as the base for glassmorphism cards (40% opacity). |
| **Accent Success** | `#34d399` | `text-emerald-400` | Bright emerald green for positive metrics/growth stats. |
| **Text Primary** | `#ffffff` | `text-white` | Pure white for headings and primary numbers. |
| **Text Muted** | `#ffffff` | `text-white/70`, `/60`, `/40` | White with opacity for subheadings and footer text. |
| **Borders** | `#ffffff` | `border-white/5`, `/10` | Subtle white borders for structural definition. |

### Typography
- **Font Family:** [Manrope](https://fonts.google.com/specimen/Manrope) (Sans-serif)
- **Weights Used:**
  - ExtraBold (800)
  - Bold (700)
  - Medium (500)
  - Regular (400)

### Visual Effects
1.  **Glassmorphism:** Achieved using `backdrop-blur-md` combined with `bg-[#2e2938]/40` and semi-transparent borders.
2.  **Glows:** Usage of `shadow-[color]/25` or `drop-shadow` with the primary brand color (`#7c3cec`) to create neon/luminescent effects.
3.  **Radial Gradients:** Used in the tile background to create a "cyber-grid" effect: `radial-gradient(circle at 2px 2px, rgba(124, 60, 236, 0.1) 1px, transparent 0)`.
