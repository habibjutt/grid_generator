<div align="center">

# 🔲 Layout Generator

**Generate responsive CSS Grid & Flexbox layouts with Tailwind CSS — visually.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-grid--generator.devtrone.com-blue?style=for-the-badge)](https://grid-generator.devtrone.com/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

Create beautiful, responsive layouts without writing CSS by hand.  
Configure → Preview → Copy production-ready code.

[**Try it Live →**](https://grid-generator.devtrone.com/)

</div>

---

## ✨ Features

### 🔲 Grid Generator
> Create responsive CSS Grid layouts with per-breakpoint control

- 📱 **Responsive Breakpoints** — Configure columns independently for mobile, tablet, and desktop
- 🔢 **Column Control** — Set 1–12 columns per breakpoint
- ↔️ **Gap Management** — Independent X/Y gap spacing or unified gap
- 🔄 **Auto Layout** — `auto-fit` and `auto-fill` with custom min/max values
- 👁️ **Live Preview** — Real-time preview at every viewport size
- 📋 **Code Generation** — Clean HTML + Tailwind CSS classes, ready to copy

### 📐 Flexbox Generator
> Build flexible layouts with full flexbox property control

- 🧭 **Direction Control** — Row, column, and reverse variants per breakpoint
- 🔃 **Wrap Settings** — `wrap`, `nowrap`, `wrap-reverse`
- ⚖️ **Alignment** — `justify-content`, `align-items`, and `align-content`
- 📏 **Uneven Sizing** — Set different sizes for individual flex items
- 🎯 **Per-Item Options** — Flex ratio, `align-self`, and `order` per child
- 📋 **Code Output** — Responsive HTML and Tailwind CSS

### 🎓 Flexbox Examples
> Interactive learning resource for mastering flexbox

- 🧪 **Live Demos** — Visual examples for every major flexbox property
- 📝 **Code Snippets** — Both raw CSS and Tailwind class equivalents
- 📖 **Property Explanations** — Clear descriptions and use cases
- ⚡ **Quick Reference** — Perfect for learning or refreshing your memory

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + PostCSS |
| **Language** | JavaScript (with TypeScript support) |
| **Bundler** | [Turbopack](https://turbo.build/pack) |
| **Linting** | [ESLint 9](https://eslint.org/) |
| **Deployment** | Docker / Any Node.js host |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ installed
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/habibjutt/grid_generator.git
cd grid_generator

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start building layouts.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint checks |

---

## 🐳 Docker

```bash
# Build the image
docker build -t layout-generator .

# Run the container
docker run -p 3000:3000 layout-generator
```

---

## 📁 Project Structure

```
grid_generator/
├── app/
│   ├── page.js                  # Landing page with hero & feature cards
│   ├── layout.js                # Root layout (Header + Footer)
│   ├── globals.css              # Global Tailwind styles
│   ├── components/
│   │   ├── Header.js            # Responsive navigation
│   │   └── Footer.js            # Footer with resource links
│   ├── grid-generator/
│   │   └── page.js              # Grid Generator tool
│   ├── flexbox-generator/
│   │   └── page.js              # Flexbox Generator tool
│   └── flexbox-examples/
│       └── page.js              # Interactive flexbox examples
├── public/                      # Static assets
├── Dockerfile                   # Docker containerization
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Dependencies & scripts
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Habib Jutt](https://github.com/habibjutt)**

[![GitHub](https://img.shields.io/badge/GitHub-habibjutt-181717?style=flat-square&logo=github)](https://github.com/habibjutt)
[![Website](https://img.shields.io/badge/Website-devtrone.com-blue?style=flat-square&logo=google-chrome&logoColor=white)](https://devtrone.com)

⭐ Star this repo if you found it useful!

</div>
