import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Layout Generator</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A comprehensive tool for generating responsive CSS Grid and Flexbox layouts with Tailwind CSS. 
              Create beautiful, responsive designs with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/grid-generator" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Grid Generator
                </a>
              </li>
              <li>
                <a href="/flexbox-generator" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Flexbox Generator
                </a>
              </li>
              <li>
                <a href="/flexbox-examples" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Flexbox Examples
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://tailwindcss.com/docs/css-grid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Tailwind CSS Grid
                </a>
              </li>
              <li>
                <a 
                  href="https://tailwindcss.com/docs/flex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Tailwind CSS Flexbox
                </a>
              </li>
              <li>
                <a 
                  href="https://css-tricks.com/snippets/css/complete-guide-grid/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  CSS Grid Guide
                </a>
              </li>
              <li>
                <a 
                  href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Flexbox Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Layout Generator. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
