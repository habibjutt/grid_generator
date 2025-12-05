import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'Grid Generator',
      description: 'Create responsive CSS Grid layouts with custom breakpoints for mobile, tablet, and desktop. Generate clean Tailwind CSS classes instantly.',
      href: '/grid-generator',
      icon: '🔲',
      features: ['Responsive breakpoints', 'Custom gap controls', 'Live preview', 'HTML output']
    },
    {
      title: 'Flexbox Generator',
      description: 'Build flexible layouts with comprehensive flexbox controls. Perfect for navigation bars, card layouts, and component alignment.',
      href: '/flexbox-generator',
      icon: '📐',
      features: ['All flexbox properties', 'Uneven sizing options', 'Responsive design', 'Code generation']
    },
    {
      title: 'Flexbox Examples',
      description: 'Learn flexbox properties with interactive examples. Each property is demonstrated with live code and visual examples.',
      href: '/flexbox-examples',
      icon: '🎓',
      features: ['Interactive examples', 'Property explanations', 'Code snippets', 'Quick reference']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Layout Generator
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Generate responsive CSS Grid and Flexbox layouts with Tailwind CSS. 
              Create beautiful, responsive designs with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/grid-generator"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start with Grid Generator
              </Link>
              <Link
                href="/flexbox-generator"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Try Flexbox Generator
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Layout Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're building a simple card layout or a complex responsive design, 
            our tools help you create perfect layouts with clean, production-ready code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-2 mb-8">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={feature.href}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to create your perfect layout
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Configure</h3>
              <p className="text-gray-600">
                Set up your layout properties using our intuitive form controls. 
                Configure responsive breakpoints and styling options.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Preview</h3>
              <p className="text-gray-600">
                See your layout in real-time with our live preview. 
                Test different viewport sizes and configurations instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Copy & Use</h3>
              <p className="text-gray-600">
                Get clean, production-ready HTML and Tailwind CSS classes. 
                Copy and paste directly into your project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Amazing Layouts?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating responsive designs today with our powerful layout generators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/grid-generator"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Grid Generator
            </Link>
            <Link
              href="/flexbox-generator"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Flexbox Generator
            </Link>
            <Link
              href="/flexbox-examples"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn Flexbox
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}