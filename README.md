# MW Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Hero Section**: Eye-catching introduction with animated gradients
- **About Section**: Personal bio with statistics and achievements
- **Projects Showcase**: Highlight your best work with tech stack details
- **Skills Section**: Interactive skill categories with progress indicators
- **Contact Form**: Fully functional contact form with validation
- **Animations**: Smooth transitions and blob animations throughout
- **Dark Theme**: Professional dark mode design
- **Responsive Design**: Optimized for all screen sizes
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Turbopack
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 20.17+ (or higher)
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── icon.ico            # Favicon
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects section
│   ├── Skills.tsx          # Skills section
│   └── Contact.tsx         # Contact form
├── public/                 # Static assets
└── package.json            # Dependencies
```

## Customization

### Update Portfolio Content

Edit the following files to customize your portfolio:

- **Hero**: Update the intro text in `components/Hero.tsx`
- **About**: Modify bio and statistics in `components/About.tsx`
- **Projects**: Add your projects in `components/Projects.tsx`
- **Skills**: Update skills and categories in `components/Skills.tsx`
- **Contact**: Modify contact info in `components/Contact.tsx`

### Update Metadata

Edit `app/layout.tsx` to update the title and description for your portfolio.

### Styling

- Global styles: `app/globals.css`
- Tailwind config is built-in through Next.js
- Customize animations in `globals.css`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- GitHub Pages
- AWS Amplify
- DigitalOcean
- Railway
- Render

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available under the MIT License.

## Contact

Update the contact information in `components/Contact.tsx` with your actual email, phone, and location.

---

Made with ❤️ using Next.js
