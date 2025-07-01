# WiFi Market Dashboard

A modern, responsive dashboard application for managing and monitoring WiFi market operations. Built with React, TypeScript, and Tailwind CSS, featuring real-time data visualization and comprehensive management tools.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design built with Tailwind CSS and Radix UI components
- **Real-time Data**: Live data visualization with Recharts
- **Type Safety**: Full TypeScript implementation for better development experience
- **Form Management**: Advanced form handling with React Hook Form and Zod validation
- **State Management**: Efficient state management with TanStack Query
- **Authentication**: Secure authentication system with Supabase
- **Theme Support**: Dark/light mode support with next-themes
- **Accessibility**: WCAG compliant components with proper ARIA attributes

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives

### State Management & Data

- **TanStack Query** - Server state management
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Supabase** - Backend as a Service

### UI Components & Styling

- **Lucide React** - Beautiful icons
- **Recharts** - Data visualization
- **Sonner** - Toast notifications
- **React Day Picker** - Date selection
- **Embla Carousel** - Carousel components

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **SWC** - Fast TypeScript/JavaScript compiler

## 📦 Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd wifi-market-dashboard
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── features/           # Feature-based modules
│   ├── authentication/ # Auth-related components & logic
│   ├── dashboard/      # Dashboard components & data
│   └── wifi-management/# WiFi management features
├── shared/            # Shared components & utilities
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   └── types/         # Shared TypeScript types
└── app/               # App-level configuration
    ├── layout/        # Layout components
    └── routing/       # Routing configuration
```

## 🎯 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm build:dev` - Build for development
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🎨 Design System

The project uses a comprehensive design system built on:

- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible component primitives
- **Class Variance Authority** for component variants
- **Custom color scheme** with CSS variables for theming

### Color Palette

- Primary colors for main actions
- Secondary colors for supporting elements
- Semantic colors for success, warning, and error states
- Neutral colors for text and backgrounds

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.ts` includes:

- Custom color palette
- Animation utilities
- Responsive breakpoints
- Component-specific styling

### TypeScript

Strict TypeScript configuration with:

- Strict mode enabled
- Path mapping for clean imports
- Custom type definitions

### Vite

Optimized build configuration with:

- React SWC for fast compilation
- PostCSS for CSS processing
- Environment variable handling

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Environment Variables

Ensure all required environment variables are set in your deployment platform:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the established code style and architecture patterns
- Write TypeScript for all new code
- Use functional components and hooks
- Implement proper error handling
- Add tests for new features
- Follow the screaming architecture principles

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Review the code examples

## 🔮 Roadmap

- [ ] Advanced analytics dashboard
- [ ] Real-time notifications
- [ ] Mobile app companion
- [ ] Advanced reporting features
- [ ] Multi-tenant support
- [ ] API rate limiting
- [ ] Advanced security features

---

Built with ❤️ using modern web technologies
