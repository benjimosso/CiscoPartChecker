# 🔧 Cisco Part Checker

A comprehensive web application for looking up Cisco part numbers and finding their corresponding rackmounts, power supplies, and fans. Built with Next.js 15, this tool helps network engineers and IT professionals quickly identify compatible components for Cisco equipment.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Backend-green?style=flat-square&logo=supabase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?style=flat-square&logo=tailwind-css)

## 🎯 Features

### Core Functionality
- **🔍 Smart Search**: Real-time search for Cisco part numbers with auto-complete suggestions
- **📊 Detailed Information**: View comprehensive details including:
  - Product descriptions and specifications
  - Device types and form factors
  - Weight and dimensions
  - Compatible accessories and blanks
- **🔗 Component Relationships**: Discover related components:
  - **Rackmounts**: Compatible rack mounting solutions
  - **Power Supplies**: Required power components
  - **Fans**: Cooling system requirements

### User Experience
- **🌓 Dark/Light Mode**: Toggle between themes for comfortable viewing
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Next.js 15 for optimal speed
- **🖼️ Image Gallery**: Visual component identification with hover previews

### Collaboration Features
- **👤 User Authentication**: Secure login system via Supabase Auth
- **💬 Comments System**: Team collaboration with part-specific notes
- **✏️ Edit Capabilities**: Contribute to the database (authenticated users)
- **👥 Team Management**: Organization-based access control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/benjimosso/CiscoPartChecker.git
   cd CiscoPartChecker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

### Backend & Database
- **[Supabase](https://supabase.com/)** - Backend as a Service
  - PostgreSQL database
  - Authentication
  - Real-time subscriptions
  - Row Level Security (RLS)

### Additional Tools
- **[@react-pdf/renderer](https://react-pdf.org/)** - PDF generation
- **[TanStack Table](https://tanstack.com/table)** - Data tables
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring

## 📋 Usage

### Basic Search
1. Enter a Cisco part number in the search bar
2. Select from the dropdown suggestions
3. View detailed component information

### Advanced Features
- **Authentication**: Sign up for enhanced features including:
  - Personal comments and notes
  - Edit capabilities
  - Team collaboration
- **Component Navigation**: Click on related parts (rackmounts, fans, powers) to explore compatibility
- **PDF Export**: Generate documentation for your findings

## 🗂️ Project Structure

```
├── app/
│   ├── (auth)/          # Authentication pages
│   ├── (dashboard)/     # Main application pages
│   │   ├── fans/        # Fan component pages
│   │   ├── powers/      # Power supply pages
│   │   ├── rackmounts/  # Rackmount pages
│   │   └── item/        # Individual part pages
│   ├── components/      # Reusable components
│   └── globals.css      # Global styles
├── components/          # Shadcn/ui components
├── lib/                 # Utility functions
├── utils/supabase/      # Database configuration
└── public/              # Static assets
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure responsive design compatibility

## ⚠️ Disclaimer

**Accuracy Notice**: While we strive for accuracy, this tool may not be 100% accurate. Always verify critical information with official Cisco documentation before making purchasing or deployment decisions.

## 📞 Support

For questions, suggestions, or issues:
<!-- - **Email**: [dmosso@dhd.com](mailto:dmosso@dhd.com) -->
- **GitHub Issues**: [Create an issue](https://github.com/benjimosso/CiscoPartChecker/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Cisco Systems for their comprehensive product documentation
- The Next.js team for an excellent framework
- Supabase for the powerful backend platform
- The open-source community for the amazing tools and libraries

---

**Made with ❤️ for network engineers and IT professionals**
