# StudieBuddie Website

A professional landing page for StudieBuddie, the AI-powered study assistant application. Built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design
- High-performance static site generation
- SEO optimized
- Interactive UI components
- Mobile-first approach

## Tech Stack

- **Next.js**: React framework for production
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: For type safety and better developer experience
- **ESLint**: For code linting

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/studiebuddie-website.git
cd studiebuddie-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
studiebuddie-website/
├── public/                  # Static files
│   └── images/              # Image assets
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Page sections
│   │   └── ui/              # Reusable UI components
│   └── styles/              # CSS/Tailwind styles
├── .eslintrc.json           # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies
├── postcss.config.mjs       # PostCSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Image Requirements

For optimal website performance, the following image assets should be prepared:

- **Logo**: 
  - Format: PNG with transparent background
  - Size: 512x512 px (will be displayed smaller)
  - Path: `/public/images/logo.png`

- **App Screenshot**: 
  - Format: PNG or JPG
  - Size: At least 1200x2400 px (for mobile display)
  - Path: `/public/images/app-screenshot.png`

- **Feature Screenshots**: 
  - Format: PNG or JPG
  - Size: At least 1200x800 px
  - Path: `/public/images/ai-features.png`

- **App Store & Play Store Badges**:
  - Format: PNG with transparent background
  - Path: `/public/images/app-store-badge.png` and `/public/images/google-play-badge.png`

- **Testimonial Avatars**:
  - Format: JPG or PNG
  - Size: 200x200 px (will be displayed as circles)
  - Path: `/public/images/testimonials/avatar-1.jpg` through `avatar-6.jpg`

## Deployment

The site can be deployed using Vercel, Netlify, or any other static site hosting service.

For Vercel deployment (recommended with Next.js):

```bash
npm install -g vercel
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please reach out to [your-email@example.com]
