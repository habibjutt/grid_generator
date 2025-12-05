'use client';

import { useState } from 'react';

export default function FlexboxExamples() {
  const [activeExample, setActiveExample] = useState('direction');

  const examples = {
    direction: {
      title: 'Flex Direction',
      description: 'Controls the direction of flex items along the main axis',
      properties: [
        {
          name: 'flex-row',
          css: 'flex-direction: row',
          description: 'Items are laid out horizontally from left to right',
          classes: 'flex flex-row',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16' },
            { content: 'Item 2', classes: 'w-24 h-20' },
            { content: 'Item 3', classes: 'w-16 h-24' }
          ]
        },
        {
          name: 'flex-row-reverse',
          css: 'flex-direction: row-reverse',
          description: 'Items are laid out horizontally from right to left',
          classes: 'flex flex-row-reverse',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16' },
            { content: 'Item 2', classes: 'w-24 h-20' },
            { content: 'Item 3', classes: 'w-16 h-24' }
          ]
        },
        {
          name: 'flex-col',
          css: 'flex-direction: column',
          description: 'Items are laid out vertically from top to bottom',
          classes: 'flex flex-col',
          items: [
            { content: 'Item 1', classes: 'w-32 h-12' },
            { content: 'Item 2', classes: 'w-28 h-16' },
            { content: 'Item 3', classes: 'w-36 h-14' }
          ]
        },
        {
          name: 'flex-col-reverse',
          css: 'flex-direction: column-reverse',
          description: 'Items are laid out vertically from bottom to top',
          classes: 'flex flex-col-reverse',
          items: [
            { content: 'Item 1', classes: 'w-32 h-12' },
            { content: 'Item 2', classes: 'w-28 h-16' },
            { content: 'Item 3', classes: 'w-36 h-14' }
          ]
        }
      ]
    },
    wrap: {
      title: 'Flex Wrap',
      description: 'Controls whether flex items wrap to new lines when they overflow',
      properties: [
        {
          name: 'flex-nowrap',
          css: 'flex-wrap: nowrap',
          description: 'Items stay on a single line and may overflow',
          classes: 'flex flex-nowrap',
          containerClass: 'w-80',
          items: [
            { content: 'Item 1', classes: 'w-32 h-16 flex-shrink-0' },
            { content: 'Item 2', classes: 'w-32 h-16 flex-shrink-0' },
            { content: 'Item 3', classes: 'w-32 h-16 flex-shrink-0' },
            { content: 'Item 4', classes: 'w-32 h-16 flex-shrink-0' }
          ]
        },
        {
          name: 'flex-wrap',
          css: 'flex-wrap: wrap',
          description: 'Items wrap to new lines when they overflow',
          classes: 'flex flex-wrap',
          containerClass: 'w-80',
          items: [
            { content: 'Item 1', classes: 'w-32 h-16' },
            { content: 'Item 2', classes: 'w-32 h-16' },
            { content: 'Item 3', classes: 'w-32 h-16' },
            { content: 'Item 4', classes: 'w-32 h-16' }
          ]
        },
        {
          name: 'flex-wrap-reverse',
          css: 'flex-wrap: wrap-reverse',
          description: 'Items wrap to new lines in reverse order',
          classes: 'flex flex-wrap-reverse',
          containerClass: 'w-80',
          items: [
            { content: 'Item 1', classes: 'w-32 h-16' },
            { content: 'Item 2', classes: 'w-32 h-16' },
            { content: 'Item 3', classes: 'w-32 h-16' },
            { content: 'Item 4', classes: 'w-32 h-16' }
          ]
        }
      ]
    },
    justify: {
      title: 'Justify Content',
      description: 'Controls alignment of flex items along the main axis',
      properties: [
        {
          name: 'justify-start',
          css: 'justify-content: flex-start',
          description: 'Items are packed toward the start of the main axis',
          classes: 'flex justify-start',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16' },
            { content: 'Item 2', classes: 'w-16 h-20' },
            { content: 'Item 3', classes: 'w-24 h-12' }
          ]
        },
        {
          name: 'justify-end',
          css: 'justify-content: flex-end',
          description: 'Items are packed toward the end of the main axis',
          classes: 'flex justify-end',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16' },
            { content: 'Item 2', classes: 'w-16 h-20' },
            { content: 'Item 3', classes: 'w-24 h-12' }
          ]
        },
        {
          name: 'justify-center',
          css: 'justify-content: center',
          description: 'Items are centered along the main axis',
          classes: 'flex justify-center',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16' },
            { content: 'Item 2', classes: 'w-16 h-20' },
            { content: 'Item 3', classes: 'w-24 h-12' }
          ]
        },
        {
          name: 'justify-between',
          css: 'justify-content: space-between',
          description: 'Items are evenly distributed with space between them',
          classes: 'flex justify-between',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16' },
            { content: 'Item 2', classes: 'w-16 h-20' },
            { content: 'Item 3', classes: 'w-24 h-12' }
          ]
        },
        {
          name: 'justify-around',
          css: 'justify-content: space-around',
          description: 'Items are evenly distributed with equal space around them',
          classes: 'flex justify-around',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16' },
            { content: 'Item 2', classes: 'w-16 h-20' },
            { content: 'Item 3', classes: 'w-24 h-12' }
          ]
        },
        {
          name: 'justify-evenly',
          css: 'justify-content: space-evenly',
          description: 'Items are evenly distributed with equal space between and around them',
          classes: 'flex justify-evenly',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16' },
            { content: 'Item 2', classes: 'w-16 h-20' },
            { content: 'Item 3', classes: 'w-24 h-12' }
          ]
        }
      ]
    },
    align: {
      title: 'Align Items',
      description: 'Controls alignment of flex items along the cross axis',
      properties: [
        {
          name: 'items-stretch',
          css: 'align-items: stretch',
          description: 'Items stretch to fill the container height',
          classes: 'flex items-stretch',
          containerClass: 'h-32',
          items: [
            { content: 'Item 1', classes: 'w-20 bg-blue-200' },
            { content: 'Item 2', classes: 'w-24 bg-green-200' },
            { content: 'Item 3', classes: 'w-16 bg-purple-200' }
          ]
        },
        {
          name: 'items-start',
          css: 'align-items: flex-start',
          description: 'Items align to the start of the cross axis',
          classes: 'flex items-start',
          containerClass: 'h-32',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16 bg-blue-200' },
            { content: 'Item 2', classes: 'w-24 h-20 bg-green-200' },
            { content: 'Item 3', classes: 'w-16 h-12 bg-purple-200' }
          ]
        },
        {
          name: 'items-end',
          css: 'align-items: flex-end',
          description: 'Items align to the end of the cross axis',
          classes: 'flex items-end',
          containerClass: 'h-32',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16 bg-blue-200' },
            { content: 'Item 2', classes: 'w-24 h-20 bg-green-200' },
            { content: 'Item 3', classes: 'w-16 h-12 bg-purple-200' }
          ]
        },
        {
          name: 'items-center',
          css: 'align-items: center',
          description: 'Items are centered along the cross axis',
          classes: 'flex items-center',
          containerClass: 'h-32',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16 bg-blue-200' },
            { content: 'Item 2', classes: 'w-24 h-20 bg-green-200' },
            { content: 'Item 3', classes: 'w-16 h-12 bg-purple-200' }
          ]
        },
        {
          name: 'items-baseline',
          css: 'align-items: baseline',
          description: 'Items align to their text baseline',
          classes: 'flex items-baseline',
          containerClass: 'h-32',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16 bg-blue-200 text-lg' },
            { content: 'Item 2', classes: 'w-24 h-20 bg-green-200 text-sm' },
            { content: 'Item 3', classes: 'w-16 h-12 bg-purple-200 text-xl' }
          ]
        }
      ]
    },
    content: {
      title: 'Align Content',
      description: 'Controls alignment of flex lines when there are multiple lines',
      properties: [
        {
          name: 'content-stretch',
          css: 'align-content: stretch',
          description: 'Lines stretch to fill the container',
          classes: 'flex flex-wrap content-stretch',
          containerClass: 'h-40 w-80',
          items: [
            { content: 'Item 1', classes: 'w-32 h-16' },
            { content: 'Item 2', classes: 'w-32 h-16' },
            { content: 'Item 3', classes: 'w-32 h-16' },
            { content: 'Item 4', classes: 'w-32 h-16' }
          ]
        },
        {
          name: 'content-start',
          css: 'align-content: flex-start',
          description: 'Lines are packed toward the start of the cross axis',
          classes: 'flex flex-wrap content-start',
          containerClass: 'h-40 w-80',
          items: [
            { content: 'Item 1', classes: 'w-32 h-16' },
            { content: 'Item 2', classes: 'w-32 h-16' },
            { content: 'Item 3', classes: 'w-32 h-16' },
            { content: 'Item 4', classes: 'w-32 h-16' }
          ]
        },
        {
          name: 'content-end',
          css: 'align-content: flex-end',
          description: 'Lines are packed toward the end of the cross axis',
          classes: 'flex flex-wrap content-end',
          containerClass: 'h-40 w-80',
          items: [
            { content: 'Item 1', classes: 'w-32 h-16' },
            { content: 'Item 2', classes: 'w-32 h-16' },
            { content: 'Item 3', classes: 'w-32 h-16' },
            { content: 'Item 4', classes: 'w-32 h-16' }
          ]
        },
        {
          name: 'content-center',
          css: 'align-content: center',
          description: 'Lines are centered along the cross axis',
          classes: 'flex flex-wrap content-center',
          containerClass: 'h-40 w-80',
          items: [
            { content: 'Item 1', classes: 'w-32 h-16' },
            { content: 'Item 2', classes: 'w-32 h-16' },
            { content: 'Item 3', classes: 'w-32 h-16' },
            { content: 'Item 4', classes: 'w-32 h-16' }
          ]
        },
        {
          name: 'content-between',
          css: 'align-content: space-between',
          description: 'Lines are evenly distributed with space between them',
          classes: 'flex flex-wrap content-between',
          containerClass: 'h-40 w-80',
          items: [
            { content: 'Item 1', classes: 'w-32 h-16' },
            { content: 'Item 2', classes: 'w-32 h-16' },
            { content: 'Item 3', classes: 'w-32 h-16' },
            { content: 'Item 4', classes: 'w-32 h-16' }
          ]
        },
        {
          name: 'content-around',
          css: 'align-content: space-around',
          description: 'Lines are evenly distributed with equal space around them',
          classes: 'flex flex-wrap content-around',
          containerClass: 'h-40 w-80',
          items: [
            { content: 'Item 1', classes: 'w-32 h-16' },
            { content: 'Item 2', classes: 'w-32 h-16' },
            { content: 'Item 3', classes: 'w-32 h-16' },
            { content: 'Item 4', classes: 'w-32 h-16' }
          ]
        }
      ]
    },
    gap: {
      title: 'Gap',
      description: 'Controls spacing between flex items',
      properties: [
        {
          name: 'gap-0',
          css: 'gap: 0',
          description: 'No gap between items',
          classes: 'flex gap-0',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16 bg-blue-200' },
            { content: 'Item 2', classes: 'w-20 h-16 bg-green-200' },
            { content: 'Item 3', classes: 'w-20 h-16 bg-purple-200' }
          ]
        },
        {
          name: 'gap-2',
          css: 'gap: 0.5rem',
          description: 'Small gap between items',
          classes: 'flex gap-2',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16 bg-blue-200' },
            { content: 'Item 2', classes: 'w-20 h-16 bg-green-200' },
            { content: 'Item 3', classes: 'w-20 h-16 bg-purple-200' }
          ]
        },
        {
          name: 'gap-4',
          css: 'gap: 1rem',
          description: 'Medium gap between items',
          classes: 'flex gap-4',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16 bg-blue-200' },
            { content: 'Item 2', classes: 'w-20 h-16 bg-green-200' },
            { content: 'Item 3', classes: 'w-20 h-16 bg-purple-200' }
          ]
        },
        {
          name: 'gap-8',
          css: 'gap: 2rem',
          description: 'Large gap between items',
          classes: 'flex gap-8',
          items: [
            { content: 'Item 1', classes: 'w-20 h-16 bg-blue-200' },
            { content: 'Item 2', classes: 'w-20 h-16 bg-green-200' },
            { content: 'Item 3', classes: 'w-20 h-16 bg-purple-200' }
          ]
        }
      ]
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Code copied to clipboard!');
  };

  const renderExample = (example) => (
    <div key={example.name} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Example Demo */}
        <div className="flex-1 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2">{example.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{example.description}</p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className={`${example.classes} ${example.containerClass || 'w-full'}`}>
              {example.items.map((item, index) => (
                <div
                  key={index}
                  className={`${item.classes} flex items-center justify-center text-sm font-medium border border-gray-300 rounded`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-gray-700">Code</h4>
            <button
              onClick={() => copyToClipboard(example.css)}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
            >
              Copy CSS
            </button>
          </div>
          <div className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm font-mono">
            {example.css}
          </div>
          
          <div className="flex justify-between items-center mb-2 mt-4">
            <h4 className="text-sm font-medium text-gray-700">Tailwind Classes</h4>
            <button
              onClick={() => copyToClipboard(example.classes)}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
            >
              Copy Classes
            </button>
          </div>
          <div className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm font-mono">
            {example.classes}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Flexbox Examples</h1>
          <p className="text-gray-600">Learn flexbox properties with interactive examples and code</p>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Flexbox Properties</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.keys(examples).map((key) => (
              <button
                key={key}
                onClick={() => setActiveExample(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  activeExample === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {examples[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Example Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{examples[activeExample].title}</h2>
            <p className="text-gray-600">{examples[activeExample].description}</p>
          </div>

          {examples[activeExample].properties.map(renderExample)}
        </div>

        {/* Quick Reference */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Flex Direction</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• flex-row</li>
                <li>• flex-row-reverse</li>
                <li>• flex-col</li>
                <li>• flex-col-reverse</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Flex Wrap</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• flex-nowrap</li>
                <li>• flex-wrap</li>
                <li>• flex-wrap-reverse</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Justify Content</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• justify-start</li>
                <li>• justify-end</li>
                <li>• justify-center</li>
                <li>• justify-between</li>
                <li>• justify-around</li>
                <li>• justify-evenly</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Align Items</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• items-stretch</li>
                <li>• items-start</li>
                <li>• items-end</li>
                <li>• items-center</li>
                <li>• items-baseline</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Align Content</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• content-stretch</li>
                <li>• content-start</li>
                <li>• content-end</li>
                <li>• content-center</li>
                <li>• content-between</li>
                <li>• content-around</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Gap</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• gap-0</li>
                <li>• gap-2</li>
                <li>• gap-4</li>
                <li>• gap-8</li>
                <li>• gap-12</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
