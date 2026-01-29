# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features bilingual support (English/Arabic) and a beautiful blue gradient design.

## Features

- 🌐 **Bilingual Support**: English and Arabic with RTL support
- 📱 **Responsive Design**: Optimized for all devices
- 🎨 **Modern UI**: Beautiful blue gradient design with smooth animations
- ⚡ **Performance**: Optimized with Next.js 14 and TypeScript
- 🎭 **Animations**: Smooth transitions with Framer Motion
- 📧 **Contact Form**: Functional contact form with validation
- 🌙 **Dark/Light Mode**: Easy theme switching
- 🔍 **SEO Optimized**: Meta tags and structured data

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx    # Root layout with i18n
│   │   └── page.tsx      # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact section
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation bar
│   ├── Projects.tsx      # Projects showcase
│   └── Skills.tsx        # Skills section
├── i18n/
│   ├── request.ts        # i18n configuration
│   └── routing.ts        # Locale routing
└── messages/
    ├── en.json           # English translations
    └── ar.json           # Arabic translations
```

## Customization

### Personal Information

Update the following files with your information:

1. **Personal Details**: Edit `messages/en.json` and `messages/ar.json`
2. **Projects**: Update the projects array in `src/components/Projects.tsx`
3. **Skills**: Modify skills data in `src/components/Skills.tsx`
4. **Contact Info**: Update contact details in `src/components/Contact.tsx`

### Colors

The blue gradient theme is defined in `tailwind.config.js`. You can customize the colors by modifying the `blue` color palette.

### Fonts

The project uses Inter and Noto Sans Arabic fonts. You can customize fonts in `src/app/globals.css`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder to your preferred hosting platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you have any questions or need help, please open an issue in the repository.
