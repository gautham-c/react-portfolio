# Gautham Chadalavada - Portfolio

A modern, responsive portfolio website built with Next.js 14, showcasing professional experience, projects, and technical skills. This application demonstrates full-stack development capabilities with a focus on clean architecture, type safety, and modern web technologies.

## 🚀 Live Demo

Visit the live portfolio at: [Your Portfolio URL]

## 📋 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Next.js 14 with App Router
- **Interactive Components**: Custom UI components with Radix UI
- **SEO Optimized**: Meta tags and structured data
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: Zustand
- **Forms**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query

### Development & Testing
- **Testing**: Vitest, Playwright, Testing Library
- **Linting**: ESLint with TypeScript support
- **Code Quality**: Prettier, Husky pre-commit hooks
- **Component Development**: Storybook
- **Mocking**: MSW (Mock Service Worker)

### DevOps & Deployment
- **Package Manager**: Yarn
- **CI/CD**: GitHub Actions (configurable)
- **Containerization**: Docker support
- **Performance**: Lighthouse optimization

## 📁 Project Structure

```
apps/nextjs-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── portfolio/          # Portfolio pages
│   │   │   ├── about/         # About page
│   │   │   ├── experience/    # Work experience
│   │   │   ├── education/     # Educational background
│   │   │   ├── projects/      # Featured projects
│   │   │   ├── skills/        # Technical skills
│   │   │   └── contact/       # Contact information
│   │   └── auth/              # Authentication pages
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # Base UI components
│   │   └── layouts/           # Layout components
│   ├── features/              # Feature-based modules
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Helper functions
├── public/                    # Static assets
├── e2e/                      # End-to-end tests
└── generators/               # Code generation templates
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gautham-c/react-portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   cd apps/nextjs-app
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn build            # Build for production
yarn start            # Start production server

# Testing
yarn test             # Run unit tests
yarn test-e2e         # Run end-to-end tests
yarn test:coverage    # Run tests with coverage

# Code Quality
yarn lint             # Run ESLint
yarn lint:fix         # Fix ESLint issues
yarn type-check       # TypeScript type checking

# Development Tools
yarn storybook        # Start Storybook
yarn generate         # Generate components
```

## 🎨 Design System

The portfolio uses a custom design system built on:

- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Custom Components**: Reusable UI components
- **Design Tokens**: Consistent spacing, colors, and typography
- **Responsive Breakpoints**: Mobile-first responsive design

## 📱 Pages & Features

### Portfolio Sections

1. **About**: Professional summary and introduction
2. **Experience**: Work history and achievements
3. **Education**: Academic background and certifications
4. **Projects**: Featured projects with detailed descriptions
5. **Skills**: Technical skills organized by category
6. **Contact**: Contact information and social links

### Key Features

- **Professional Summary**: 3+ years of software engineering experience
- **Project Showcase**: 4 featured projects including:
  - HackerNews Web App (Real-time feed with filtering)
  - SIMD-Accelerated JSON Indexing Engine (60% performance improvement)
  - Inbox/GitHub Reply Assistant (AI-powered client-side tool)
  - "What Changed?" Site Summarizer (Automated content tracking)
- **Technical Skills**: Comprehensive skill matrix across 8 categories
- **Performance Metrics**: Quantified achievements and impact

## 🔧 Customization

### Adding New Projects

1. Edit `src/app/portfolio/projects/page.tsx`
2. Add new project to the `PROJECTS` array
3. Include title, description, technologies, and highlights

### Updating Skills

1. Edit `src/app/portfolio/skills/page.tsx`
2. Update the skill arrays for each category
3. Add new categories as needed

### Styling Changes

1. Modify `tailwind.config.cjs` for theme customization
2. Update component styles in respective files
3. Use Tailwind utility classes for rapid styling

## 🧪 Testing

The project includes comprehensive testing:

- **Unit Tests**: Vitest with Testing Library
- **E2E Tests**: Playwright for browser testing
- **Component Tests**: Storybook for component development
- **Type Safety**: TypeScript for compile-time checking

```bash
# Run all tests
yarn test

# Run E2E tests
yarn test-e2e

# Run tests with coverage
yarn test:coverage
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `yarn build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Docker

```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Manual Deployment

```bash
# Build the application
yarn build

# Start production server
yarn start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Gautham Chadalavada**
- GitHub: [@gautham-c](https://github.com/gautham-c)
- LinkedIn: [gautham-c](https://www.linkedin.com/in/gautham-c/)
- Email: gautham.chadalavada@gmail.com
- Resume: [View Resume](https://drive.google.com/file/d/1rQaerEndZl24A3tm6Fb-Be20xQiYHsA3/view?usp=sharing)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Inspired by modern portfolio designs and best practices

---

⭐ If you found this portfolio helpful, please give it a star!
