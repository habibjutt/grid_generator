'use client';

import { useState } from 'react';

export default function GridGenerator() {
  const [gridConfig, setGridConfig] = useState({
    // Desktop (default)
    desktop: {
      columns: 3,
      gap: 4,
      gapX: 4,
      gapY: 4,
    },
    // Tablet (md breakpoint)
    tablet: {
      columns: 2,
      gap: 3,
      gapX: 3,
      gapY: 3,
    },
    // Mobile (sm breakpoint)
    mobile: {
      columns: 1,
      gap: 2,
      gapX: 2,
      gapY: 2,
    },
  });

  const [additionalOptions, setAdditionalOptions] = useState({
    containerClass: 'w-full p-4',
    itemClass: 'bg-blue-100 border border-blue-300 rounded-lg p-4',
    itemCount: 12,
    autoFit: false,
    autoFill: false,
    autoFitOptions: {
      mobile: { minWidth: 200, maxWidth: '1fr' },
      tablet: { minWidth: 250, maxWidth: '1fr' },
      desktop: { minWidth: 300, maxWidth: '1fr' }
    },
    autoFillOptions: {
      mobile: { minWidth: 200, maxWidth: '1fr' },
      tablet: { minWidth: 250, maxWidth: '1fr' },
      desktop: { minWidth: 300, maxWidth: '1fr' }
    }
  });

  const [previewMode, setPreviewMode] = useState('desktop');

  const updateGridConfig = (breakpoint, property, value) => {
    setGridConfig(prev => ({
      ...prev,
      [breakpoint]: {
        ...prev[breakpoint],
        [property]: parseInt(value) || 0,
      },
    }));
  };

  const updateAutoLayoutOptions = (type, breakpoint, property, value) => {
    setAdditionalOptions(prev => ({
      ...prev,
      [`${type}Options`]: {
        ...prev[`${type}Options`],
        [breakpoint]: {
          ...prev[`${type}Options`][breakpoint],
          [property]: value,
        },
      },
    }));
  };

  const generateGridClasses = () => {
    const { mobile, tablet, desktop } = gridConfig;
    const { autoFit, autoFill, autoFitOptions, autoFillOptions } = additionalOptions;
    
    let classes = '';
    
    // Helper functions for class mapping
    const getColClass = (count) => {
      const colClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
        10: 'grid-cols-10',
        11: 'grid-cols-11',
        12: 'grid-cols-12'
      };
      return colClasses[count] || 'grid-cols-1';
    };
    
    const getGapClass = (gap) => {
      const gapClasses = {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        8: 'gap-8',
        10: 'gap-10',
        12: 'gap-12',
        16: 'gap-16',
        20: 'gap-20',
        24: 'gap-24'
      };
      return gapClasses[gap] || 'gap-0';
    };

    const getAutoLayoutClass = (type, breakpoint) => {
      const options = type === 'autoFit' ? autoFitOptions : autoFillOptions;
      const minWidth = options[breakpoint].minWidth;
      const maxWidth = options[breakpoint].maxWidth;
      return `grid-cols-[repeat(${type === 'autoFit' ? 'auto-fit' : 'auto-fill'},minmax(${minWidth}px,${maxWidth}))]`;
    };
    
    // Mobile classes (base)
    if (autoFit) {
      classes += `${getAutoLayoutClass('autoFit', 'mobile')} `;
    } else if (autoFill) {
      classes += `${getAutoLayoutClass('autoFill', 'mobile')} `;
    } else {
      classes += `${getColClass(mobile.columns)} `;
    }
    
    classes += `${getGapClass(mobile.gap)} `;
    
    // Tablet classes (md:)
    if (autoFit) {
      classes += `md:${getAutoLayoutClass('autoFit', 'tablet')} `;
    } else if (autoFill) {
      classes += `md:${getAutoLayoutClass('autoFill', 'tablet')} `;
    } else {
      classes += `md:${getColClass(tablet.columns)} `;
    }
    
    classes += `md:${getGapClass(tablet.gap)} `;
    
    // Desktop classes (lg:)
    if (autoFit) {
      classes += `lg:${getAutoLayoutClass('autoFit', 'desktop')} `;
    } else if (autoFill) {
      classes += `lg:${getAutoLayoutClass('autoFill', 'desktop')} `;
    } else {
      classes += `lg:${getColClass(desktop.columns)} `;
    }
    
    classes += `lg:${getGapClass(desktop.gap)} `;
    
    return classes.trim();
  };

  const getPreviewClasses = () => {
    const { mobile, tablet, desktop } = gridConfig;
    const { autoFit, autoFill, autoFitOptions, autoFillOptions } = additionalOptions;
    
    let classes = '';
    
    // Helper functions
    const getColClass = (count) => {
      const colClasses = {
        1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4',
        5: 'grid-cols-5', 6: 'grid-cols-6', 7: 'grid-cols-7', 8: 'grid-cols-8',
        9: 'grid-cols-9', 10: 'grid-cols-10', 11: 'grid-cols-11', 12: 'grid-cols-12'
      };
      return colClasses[count] || 'grid-cols-1';
    };
    
    const getGapClass = (gap) => {
      const gapClasses = {
        0: 'gap-0', 1: 'gap-1', 2: 'gap-2', 3: 'gap-3', 4: 'gap-4', 5: 'gap-5',
        6: 'gap-6', 8: 'gap-8', 10: 'gap-10', 12: 'gap-12', 16: 'gap-16',
        20: 'gap-20', 24: 'gap-24'
      };
      return gapClasses[gap] || 'gap-0';
    };

    const getAutoLayoutClass = (type, breakpoint) => {
      const options = type === 'autoFit' ? autoFitOptions : autoFillOptions;
      const minWidth = options[breakpoint].minWidth;
      const maxWidth = options[breakpoint].maxWidth;
      return `grid-cols-[repeat(${type === 'autoFit' ? 'auto-fit' : 'auto-fill'},minmax(${minWidth}px,${maxWidth}))]`;
    };
    
    if (previewMode === 'mobile') {
      if (autoFit) {
        classes = getAutoLayoutClass('autoFit', 'mobile');
      } else if (autoFill) {
        classes = getAutoLayoutClass('autoFill', 'mobile');
      } else {
        classes = getColClass(mobile.columns);
      }
      classes += ` ${getGapClass(mobile.gap)}`;
    } else if (previewMode === 'tablet') {
      if (autoFit) {
        classes = getAutoLayoutClass('autoFit', 'tablet');
      } else if (autoFill) {
        classes = getAutoLayoutClass('autoFill', 'tablet');
      } else {
        classes = getColClass(tablet.columns);
      }
      classes += ` ${getGapClass(tablet.gap)}`;
    } else {
      if (autoFit) {
        classes = getAutoLayoutClass('autoFit', 'desktop');
      } else if (autoFill) {
        classes = getAutoLayoutClass('autoFill', 'desktop');
      } else {
        classes = getColClass(desktop.columns);
      }
      classes += ` ${getGapClass(desktop.gap)}`;
    }
    
    return classes.trim();
  };

  const generateHTML = () => {
    const gridClasses = generateGridClasses();
    const containerClasses = additionalOptions.containerClass;
    const itemClasses = additionalOptions.itemClass;
    const totalItems = additionalOptions.itemCount;
    
    const items = Array.from({ length: totalItems }, (_, i) => 
      `    <div class="${itemClasses}">Item ${i + 1}</div>`
    ).join('\n');
    
    return `<div class="${containerClasses}">
        <div class="grid ${gridClasses}">
${items}
        </div>
    </div>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateHTML());
    alert('HTML code copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Responsive Grid Generator</h1>
          <p className="text-gray-600">Generate responsive HTML grids with Tailwind CSS classes</p>
        </div>

        {/* Configuration Panel */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Grid Configuration</h2>
            
            {/* Auto Layout Options */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Auto Layout</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={additionalOptions.autoFit}
                    onChange={(e) => setAdditionalOptions(prev => ({
                      ...prev,
                      autoFit: e.target.checked,
                      autoFill: e.target.checked ? false : prev.autoFill,
                    }))}
                    className="mr-2"
                  />
                  Auto-fit columns (responsive column sizing)
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={additionalOptions.autoFill}
                    onChange={(e) => setAdditionalOptions(prev => ({
                      ...prev,
                      autoFill: e.target.checked,
                      autoFit: e.target.checked ? false : prev.autoFit,
                    }))}
                    className="mr-2"
                  />
                  Auto-fill columns (fixed column sizing)
                </label>
              </div>

              {/* Auto Layout Customization */}
              {(additionalOptions.autoFit || additionalOptions.autoFill) && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-md font-medium mb-3">
                    {additionalOptions.autoFit ? 'Auto-fit' : 'Auto-fill'} Customization
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Mobile Settings */}
                    <div>
                      <h5 className="text-sm font-medium mb-2">Mobile</h5>
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Min Width (px)</label>
                          <input
                            type="number"
                            min="50"
                            max="500"
                            value={additionalOptions[additionalOptions.autoFit ? 'autoFitOptions' : 'autoFillOptions'].mobile.minWidth}
                            onChange={(e) => updateAutoLayoutOptions(
                              additionalOptions.autoFit ? 'autoFit' : 'autoFill',
                              'mobile',
                              'minWidth',
                              parseInt(e.target.value) || 200
                            )}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Max Width</label>
                          <select
                            value={additionalOptions[additionalOptions.autoFit ? 'autoFitOptions' : 'autoFillOptions'].mobile.maxWidth}
                            onChange={(e) => updateAutoLayoutOptions(
                              additionalOptions.autoFit ? 'autoFit' : 'autoFill',
                              'mobile',
                              'maxWidth',
                              e.target.value
                            )}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="1fr">1fr (flexible)</option>
                            <option value="auto">auto (content-based)</option>
                            <option value="200px">200px (fixed)</option>
                            <option value="250px">250px (fixed)</option>
                            <option value="300px">300px (fixed)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Tablet Settings */}
                    <div>
                      <h5 className="text-sm font-medium mb-2">Tablet</h5>
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Min Width (px)</label>
                          <input
                            type="number"
                            min="50"
                            max="500"
                            value={additionalOptions[additionalOptions.autoFit ? 'autoFitOptions' : 'autoFillOptions'].tablet.minWidth}
                            onChange={(e) => updateAutoLayoutOptions(
                              additionalOptions.autoFit ? 'autoFit' : 'autoFill',
                              'tablet',
                              'minWidth',
                              parseInt(e.target.value) || 250
                            )}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Max Width</label>
                          <select
                            value={additionalOptions[additionalOptions.autoFit ? 'autoFitOptions' : 'autoFillOptions'].tablet.maxWidth}
                            onChange={(e) => updateAutoLayoutOptions(
                              additionalOptions.autoFit ? 'autoFit' : 'autoFill',
                              'tablet',
                              'maxWidth',
                              e.target.value
                            )}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="1fr">1fr (flexible)</option>
                            <option value="auto">auto (content-based)</option>
                            <option value="200px">200px (fixed)</option>
                            <option value="250px">250px (fixed)</option>
                            <option value="300px">300px (fixed)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Settings */}
                    <div>
                      <h5 className="text-sm font-medium mb-2">Desktop</h5>
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Min Width (px)</label>
                          <input
                            type="number"
                            min="50"
                            max="500"
                            value={additionalOptions[additionalOptions.autoFit ? 'autoFitOptions' : 'autoFillOptions'].desktop.minWidth}
                            onChange={(e) => updateAutoLayoutOptions(
                              additionalOptions.autoFit ? 'autoFit' : 'autoFill',
                              'desktop',
                              'minWidth',
                              parseInt(e.target.value) || 300
                            )}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Max Width</label>
                          <select
                            value={additionalOptions[additionalOptions.autoFit ? 'autoFitOptions' : 'autoFillOptions'].desktop.maxWidth}
                            onChange={(e) => updateAutoLayoutOptions(
                              additionalOptions.autoFit ? 'autoFit' : 'autoFill',
                              'desktop',
                              'maxWidth',
                              e.target.value
                            )}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="1fr">1fr (flexible)</option>
                            <option value="auto">auto (content-based)</option>
                            <option value="200px">200px (fixed)</option>
                            <option value="250px">250px (fixed)</option>
                            <option value="300px">300px (fixed)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Configuration */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Mobile (Default)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Columns</label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={gridConfig.mobile.columns}
                    onChange={(e) => updateGridConfig('mobile', 'columns', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={additionalOptions.autoFit || additionalOptions.autoFill}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Gap</label>
                  <select
                    value={gridConfig.mobile.gap}
                    onChange={(e) => updateGridConfig('mobile', 'gap', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                    <option value={10}>10</option>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                    <option value={24}>24</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tablet Configuration */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Tablet (md: 768px+)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Columns</label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={gridConfig.tablet.columns}
                    onChange={(e) => updateGridConfig('tablet', 'columns', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={additionalOptions.autoFit || additionalOptions.autoFill}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Gap</label>
                  <select
                    value={gridConfig.tablet.gap}
                    onChange={(e) => updateGridConfig('tablet', 'gap', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                    <option value={10}>10</option>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                    <option value={24}>24</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Desktop Configuration */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Desktop (lg: 1024px+)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Columns</label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={gridConfig.desktop.columns}
                    onChange={(e) => updateGridConfig('desktop', 'columns', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={additionalOptions.autoFit || additionalOptions.autoFill}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Gap</label>
                  <select
                    value={gridConfig.desktop.gap}
                    onChange={(e) => updateGridConfig('desktop', 'gap', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                    <option value={10}>10</option>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                    <option value={24}>24</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Options */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Styling Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Container Classes</label>
                  <input
                    type="text"
                    value={additionalOptions.containerClass}
                    onChange={(e) => setAdditionalOptions(prev => ({ ...prev, containerClass: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., w-full h-screen p-4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Item Classes</label>
                  <input
                    type="text"
                    value={additionalOptions.itemClass}
                    onChange={(e) => setAdditionalOptions(prev => ({ ...prev, itemClass: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., bg-blue-100 border border-blue-300 rounded-lg p-4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Number of Items</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={additionalOptions.itemCount}
                    onChange={(e) => setAdditionalOptions(prev => ({ ...prev, itemCount: parseInt(e.target.value) || 1 }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

        {/* Preview Panel */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
            <h2 className="text-2xl font-semibold mb-4 lg:mb-0">Live Preview</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  previewMode === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Mobile
              </button>
              <button
                onClick={() => setPreviewMode('tablet')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  previewMode === 'tablet'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Tablet
              </button>
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  previewMode === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Desktop
              </button>
            </div>
          </div>
          
          <div className="mb-2 text-sm text-gray-600">
            <strong>Applied classes:</strong> <code className="bg-gray-200 px-2 py-1 rounded">{getPreviewClasses()}</code>
          </div>
          <div className={`border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 ${
            previewMode === 'mobile' ? 'max-w-sm mx-auto' : 
            previewMode === 'tablet' ? 'max-w-2xl mx-auto' : 
            'w-full'
          }`}>
            <div className={`${additionalOptions.containerClass}`}>
              <div className={`grid ${getPreviewClasses()}`}>
                {Array.from({ length: additionalOptions.itemCount }, (_, i) => (
                  <div key={i} className={additionalOptions.itemClass}>
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Generated Classes */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Generated Tailwind Classes</h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <code className="text-sm font-mono break-all">
                {generateGridClasses()}
              </code>
            </div>
          </div>

          {/* HTML Output */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Generated HTML</h2>
              <button
                onClick={copyToClipboard}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Copy HTML
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-xs font-mono whitespace-pre-wrap">
                {generateHTML()}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
