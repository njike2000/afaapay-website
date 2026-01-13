# Afa'a Pay Website

A modern, responsive website for Afa'a Pay - a fintech platform offering secure digital payments, escrow services, and fraud protection.

## Features

- **Next.js 14** - Latest React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and structured data
- **Fast Performance** - Optimized for speed
- **Professional Design** - Navy Blue and Green branding

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Styling**: Tailwind CSS with custom theme
- **Deployment**: Ready for Vercel, Netlify, or any Node.js host

## Project Structure

```
afaapay-website/
├── app/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Features.jsx        # Features showcase
│   │   ├── HowItWorks.jsx      # Process explanation
│   │   ├── Pricing.jsx         # Pricing plans
│   │   ├── Contact.jsx         # Contact form
│   │   └── CTA.jsx             # Call-to-action
│   ├── globals.css             # Global styles
│   ├── layout.jsx              # Root layout
│   └── page.jsx                # Home page
├── public/
│   └── images/
│       └── logo.png            # Afa'a Pay logo
├── package.json                # Dependencies
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/afaapay-website.git
cd afaapay-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: '#001F3F',      // Navy Blue
  secondary: '#2ECC71',    // Green
  dark: '#0a0e27',
  light: '#f8f9fa',
}
```

### Content

Edit components in `app/components/` to update:
- Hero section text and CTA
- Features list
- Pricing plans
- Contact information
- Social links

### Logo

Replace `public/images/logo.png` with your logo file

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Deploy

### Other Hosts

Build the project:
```bash
npm run build
npm run start
```

## SEO Optimization

The website includes:
- Meta tags for social sharing
- Open Graph tags
- Mobile viewport configuration
- Semantic HTML structure
- Fast loading times

## Performance

- Optimized images
- Code splitting
- Lazy loading
- CSS optimization
- Fast First Contentful Paint (FCP)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your projects

## Support

For issues or questions, please contact: contact@afaapay.com

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ by Afa'a Pay Team
