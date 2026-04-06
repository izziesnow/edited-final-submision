# Elizabeth Ijeoma Okon - Professional Portfolio

A modern, elegant, fully responsive personal portfolio website for an IT Project Manager.

## Features
- **Premium Design**: Minimalist, contemporary aesthetic with smooth transitions and subtle animations.
- **Theme Toggle**: Support for Light Mode (Lilac-inspired) and Dark Mode (Deep Purple).
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices.
- **Comprehensive Structure**: 8 pages including Home, About, Experience, Education, Projects, Skills, Blog, and Contact.
- **Dynamic Content**: Integrated with real professional data and achievements.
- **Animations**: Subtle scroll-reveal and hover effects using Framer Motion.

## Tech Stack
- **React 18** (TypeScript)
- **Vite** (Build Tool)
- **Vanilla CSS** (Theming & Styling)
- **Lucide React** (Icons)
- **Framer Motion** (Animations)
- **React Router DOM** (Navigation)

## Getting Started

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation
1. Navigate to the project folder:
   ```bash
   cd "my website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Customization
- **Profile Photo**: Place your profile image in `public/assets/profile.jpg` (or update the path in `src/pages/Home.tsx` and `src/pages/About.tsx`).
- **CV**: Place your CV file in `public/cv.pdf` for the download buttons to work.
- **Contact Form**: Update the form submission logic in `src/pages/Contact.tsx`.
