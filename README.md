# Bérangère Gallais - Technical Documentation Architect

A modern, bilingual portfolio website for technical documentation expert Bérangère Gallais, built with Astro and deployed on Netlify.

## 🚀 Live Site

**Production:** [berangeregallais.com](https://www.berangeregallais.com)

## 📋 Overview

This is a professional portfolio website showcasing technical documentation services, including API documentation, AI compliance, and technical ghostwriting. The site features a clean, modern design with a focus on conversion and user experience.

### 🎯 Key Features

- **Bilingual Support** - Complete French and English versions
- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Modern Architecture** - Built with Astro for optimal performance
- **Professional Portfolio** - Showcasing real documentation projects
- **Service Showcase** - Clear presentation of expertise areas
- **Contact Integration** - Netlify Forms for lead generation
- **Legal Compliance** - GDPR-compliant privacy policy and legal notices

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) - Static site generator
- **Styling:** Custom CSS with CSS variables for theming
- **Typography:** Inter (sans-serif), Playfair Display (serif), JetBrains Mono (monospace)
- **Deployment:** [Netlify](https://netlify.com/) with automatic deployments
- **Forms:** Netlify Forms for contact functionality
- **Analytics:** Privacy-focused, anonymized tracking

## 🏗️ Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Header.astro    # Site navigation with language switcher
│   ├── Footer.astro    # Site footer
│   ├── ServiceCard.astro
│   └── PortfolioCard.astro
├── layouts/
│   └── BaseLayout.astro # Main layout template
├── pages/
│   ├── fr/             # French pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── portfolio.astro
│   │   ├── contact.astro
│   │   ├── mentions-legales.astro
│   │   └── politique-confidentialite.astro
│   └── en/             # English pages
│       ├── index.astro
│       ├── about.astro
│       ├── portfolio.astro
│       ├── contact.astro
│       ├── legal-notice.astro
│       └── privacy-policy.astro
├── content/
│   └── portfolio/      # Portfolio project data
│       ├── fr/
│       └── en/
└── styles/
    └── global.css      # Global styles and variables
```

## 🎨 Design System

### Color Palette

- **Primary:** #e6b7d4 (Soft pink)
- **Secondary:** #db7093 (Medium pink)
- **Accent:** #c084fc (Purple)
- **Text:** Dark blue variants
- **Background:** White/dark variants

### Typography

- **Headlines:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Code:** JetBrains Mono (monospace)

### Key Design Principles

- **Clean & Professional** - Minimal design focused on content
- **Accessibility First** - Proper contrast, semantic HTML, ARIA labels
- **Performance Optimized** - Lightweight, fast loading
- **Mobile Responsive** - Seamless experience across all devices

## 🌍 Internationalization

The site supports both French and English with:

- **URL Structure:** `/fr/` and `/en/` prefixes
- **Language Switcher** - Available in header on all pages
- **Content Collections** - Separate content for each language
- **Meta Tags** - Language-specific SEO optimization

## 📈 Performance

- **Lighthouse Score:** 95+ on all metrics
- **Core Web Vitals:** Excellent ratings
- **Bundle Size:** Optimized with Astro's static generation
- **Images:** Optimized formats and sizes

## 🚀 Deployment

The site is automatically deployed to Netlify on every push to the main branch.

### Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

- **SITE_URL:** Production URL for canonical links
- Contact form submissions handled by Netlify Forms

## 📁 Content Management

Portfolio projects are managed through Astro's content collections:

- **Location:** `src/content/portfolio/`
- **Format:** Markdown with frontmatter
- **Languages:** Separate folders for FR/EN content
- **Images:** Stored in `public/portfolio/`

### Adding New Portfolio Items

1. Create markdown file in appropriate language folder
2. Add required frontmatter (title, client, description, etc.)
3. Add project image to `public/portfolio/`
4. Content automatically appears on portfolio page

## 🔒 Privacy & Legal

- **GDPR Compliant** - Privacy policy and cookie notices
- **Contact Forms** - Netlify Forms with data protection
- **Analytics** - Privacy-focused, anonymized tracking
- **Legal Pages** - Comprehensive legal notices in both languages

## 📞 Contact & Support

**Website Owner:** Bérangère Gallais  
**Email:** [contact@berangeregallais.com](mailto:contact@berangeregallais.com)
**LinkedIn:** [berangeregallais](https://linkedin.com/in/berangeregallais)

---

## 📝 License

This website is proprietary and belongs to Bérangère Gallais. The code structure and design patterns may be used as reference, but direct copying of content, design, or branding elements is prohibited.

---

Built with ❤️ and lots of ☕ - Professional technical documentation architecture & Ghostwriter
