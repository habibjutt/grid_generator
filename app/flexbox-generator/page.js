'use client';

import { useState } from 'react';

export default function FlexboxGenerator() {
  const [flexConfig, setFlexConfig] = useState({
    // Desktop (default)
    desktop: {
      direction: 'row',
      wrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      gap: 4,
      gapX: 4,
      gapY: 4,
    },
    // Tablet (md breakpoint)
    tablet: {
      direction: 'row',
      wrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      gap: 3,
      gapX: 3,
      gapY: 3,
    },
    // Mobile (sm breakpoint)
    mobile: {
      direction: 'column',
      wrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      gap: 2,
      gapX: 2,
      gapY: 2,
    },
  });

  const [additionalOptions, setAdditionalOptions] = useState({
    containerClass: 'w-full p-4 min-h-96',
    itemClass: 'bg-blue-100 border border-blue-300 rounded-lg p-4',
    itemCount: 6,
    unevenSizing: false,
    itemSizes: [
      { width: 'w-20', height: 'h-16' },
      { width: 'w-32', height: 'h-24' },
      { width: 'w-16', height: 'h-20' },
      { width: 'w-28', height: 'h-12' },
      { width: 'w-24', height: 'h-28' },
      { width: 'w-20', height: 'h-16' }
    ],
    flexItemOptions: {
      enabled: false,
      items: [
        { flex: 'flex-1', alignSelf: 'auto', order: 0 },
        { flex: 'flex-1', alignSelf: 'auto', order: 0 },
        { flex: 'flex-1', alignSelf: 'auto', order: 0 },
        { flex: 'flex-1', alignSelf: 'auto', order: 0 },
        { flex: 'flex-1', alignSelf: 'auto', order: 0 },
        { flex: 'flex-1', alignSelf: 'auto', order: 0 }
      ]
    }
  });

  const [previewMode, setPreviewMode] = useState('desktop');

  const updateFlexConfig = (breakpoint, property, value) => {
    setFlexConfig(prev => ({
      ...prev,
      [breakpoint]: {
        ...prev[breakpoint],
        [property]: value,
      },
    }));
  };

  const updateFlexItemOptions = (itemIndex, property, value) => {
    setAdditionalOptions(prev => ({
      ...prev,
      flexItemOptions: {
        ...prev.flexItemOptions,
        items: prev.flexItemOptions.items.map((item, index) => 
          index === itemIndex 
            ? { ...item, [property]: value }
            : item
        ),
      },
    }));
  };

  const generateFlexClasses = () => {
    const { mobile, tablet, desktop } = flexConfig;
    
    let classes = '';
    
    // Helper functions for class mapping
    const getDirectionClass = (direction) => {
      const directionClasses = {
        'row': 'flex-row',
        'row-reverse': 'flex-row-reverse',
        'column': 'flex-col',
        'column-reverse': 'flex-col-reverse'
      };
      return directionClasses[direction] || 'flex-row';
    };
    
    const getWrapClass = (wrap) => {
      const wrapClasses = {
        'nowrap': 'flex-nowrap',
        'wrap': 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse'
      };
      return wrapClasses[wrap] || 'flex-wrap';
    };
    
    const getJustifyClass = (justify) => {
      const justifyClasses = {
        'flex-start': 'justify-start',
        'flex-end': 'justify-end',
        'center': 'justify-center',
        'space-between': 'justify-between',
        'space-around': 'justify-around',
        'space-evenly': 'justify-evenly'
      };
      return justifyClasses[justify] || 'justify-start';
    };
    
    const getAlignClass = (align) => {
      const alignClasses = {
        'stretch': 'items-stretch',
        'flex-start': 'items-start',
        'flex-end': 'items-end',
        'center': 'items-center',
        'baseline': 'items-baseline'
      };
      return alignClasses[align] || 'items-stretch';
    };
    
    const getAlignContentClass = (alignContent) => {
      const alignContentClasses = {
        'stretch': 'content-stretch',
        'flex-start': 'content-start',
        'flex-end': 'content-end',
        'center': 'content-center',
        'space-between': 'content-between',
        'space-around': 'content-around',
        'space-evenly': 'content-evenly'
      };
      return alignContentClasses[alignContent] || 'content-stretch';
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

    // Define default values (these are Tailwind's defaults)
    const defaults = {
      direction: 'row',
      wrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      gap: 0
    };
    
    // Mobile classes (base) - only include non-default classes
    if (mobile.direction !== defaults.direction) {
      classes += `${getDirectionClass(mobile.direction)} `;
    }
    if (mobile.wrap !== defaults.wrap) {
      classes += `${getWrapClass(mobile.wrap)} `;
    }
    if (mobile.justifyContent !== defaults.justifyContent) {
      classes += `${getJustifyClass(mobile.justifyContent)} `;
    }
    if (mobile.alignItems !== defaults.alignItems) {
      classes += `${getAlignClass(mobile.alignItems)} `;
    }
    if (mobile.alignContent !== defaults.alignContent) {
      classes += `${getAlignContentClass(mobile.alignContent)} `;
    }
    if (mobile.gap !== defaults.gap) {
      classes += `${getGapClass(mobile.gap)} `;
    }
    
    // Tablet classes (md:) - only include if different from mobile
    if (tablet.direction !== mobile.direction) {
      classes += `md:${getDirectionClass(tablet.direction)} `;
    }
    if (tablet.wrap !== mobile.wrap) {
      classes += `md:${getWrapClass(tablet.wrap)} `;
    }
    if (tablet.justifyContent !== mobile.justifyContent) {
      classes += `md:${getJustifyClass(tablet.justifyContent)} `;
    }
    if (tablet.alignItems !== mobile.alignItems) {
      classes += `md:${getAlignClass(tablet.alignItems)} `;
    }
    if (tablet.alignContent !== mobile.alignContent) {
      classes += `md:${getAlignContentClass(tablet.alignContent)} `;
    }
    if (tablet.gap !== mobile.gap) {
      classes += `md:${getGapClass(tablet.gap)} `;
    }
    
    // Desktop classes (lg:) - only include if different from tablet
    if (desktop.direction !== tablet.direction) {
      classes += `lg:${getDirectionClass(desktop.direction)} `;
    }
    if (desktop.wrap !== tablet.wrap) {
      classes += `lg:${getWrapClass(desktop.wrap)} `;
    }
    if (desktop.justifyContent !== tablet.justifyContent) {
      classes += `lg:${getJustifyClass(desktop.justifyContent)} `;
    }
    if (desktop.alignItems !== tablet.alignItems) {
      classes += `lg:${getAlignClass(desktop.alignItems)} `;
    }
    if (desktop.alignContent !== tablet.alignContent) {
      classes += `lg:${getAlignContentClass(desktop.alignContent)} `;
    }
    if (desktop.gap !== tablet.gap) {
      classes += `lg:${getGapClass(desktop.gap)} `;
    }
    
    // If no classes were added, return the minimal flex class
    return classes.trim() || 'flex';
  };

  const getPreviewClasses = () => {
    const { mobile, tablet, desktop } = flexConfig;
    
    let classes = '';
    
    // Helper functions (same as generateFlexClasses)
    const getDirectionClass = (direction) => {
      const directionClasses = {
        'row': 'flex-row',
        'row-reverse': 'flex-row-reverse',
        'column': 'flex-col',
        'column-reverse': 'flex-col-reverse'
      };
      return directionClasses[direction] || 'flex-row';
    };
    
    const getWrapClass = (wrap) => {
      const wrapClasses = {
        'nowrap': 'flex-nowrap',
        'wrap': 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse'
      };
      return wrapClasses[wrap] || 'flex-wrap';
    };
    
    const getJustifyClass = (justify) => {
      const justifyClasses = {
        'flex-start': 'justify-start',
        'flex-end': 'justify-end',
        'center': 'justify-center',
        'space-between': 'justify-between',
        'space-around': 'justify-around',
        'space-evenly': 'justify-evenly'
      };
      return justifyClasses[justify] || 'justify-start';
    };
    
    const getAlignClass = (align) => {
      const alignClasses = {
        'stretch': 'items-stretch',
        'flex-start': 'items-start',
        'flex-end': 'items-end',
        'center': 'items-center',
        'baseline': 'items-baseline'
      };
      return alignClasses[align] || 'items-stretch';
    };
    
    const getAlignContentClass = (alignContent) => {
      const alignContentClasses = {
        'stretch': 'content-stretch',
        'flex-start': 'content-start',
        'flex-end': 'content-end',
        'center': 'content-center',
        'space-between': 'content-between',
        'space-around': 'content-around',
        'space-evenly': 'content-evenly'
      };
      return alignContentClasses[alignContent] || 'content-stretch';
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
    
    if (previewMode === 'mobile') {
      classes += `${getDirectionClass(mobile.direction)} `;
      classes += `${getWrapClass(mobile.wrap)} `;
      classes += `${getJustifyClass(mobile.justifyContent)} `;
      classes += `${getAlignClass(mobile.alignItems)} `;
      classes += `${getAlignContentClass(mobile.alignContent)} `;
      classes += `${getGapClass(mobile.gap)} `;
    } else if (previewMode === 'tablet') {
      classes += `${getDirectionClass(tablet.direction)} `;
      classes += `${getWrapClass(tablet.wrap)} `;
      classes += `${getJustifyClass(tablet.justifyContent)} `;
      classes += `${getAlignClass(tablet.alignItems)} `;
      classes += `${getAlignContentClass(tablet.alignContent)} `;
      classes += `${getGapClass(tablet.gap)} `;
    } else {
      classes += `${getDirectionClass(desktop.direction)} `;
      classes += `${getWrapClass(desktop.wrap)} `;
      classes += `${getJustifyClass(desktop.justifyContent)} `;
      classes += `${getAlignClass(desktop.alignItems)} `;
      classes += `${getAlignContentClass(desktop.alignContent)} `;
      classes += `${getGapClass(desktop.gap)} `;
    }
    
    return classes.trim();
  };

  const generateHTML = () => {
    const flexClasses = generateFlexClasses();
    const containerClasses = additionalOptions.containerClass;
    const itemClasses = additionalOptions.itemClass;
    
    const items = Array.from({ length: additionalOptions.itemCount }, (_, i) => {
      const sizeClasses = additionalOptions.unevenSizing && additionalOptions.itemSizes[i] 
        ? ` ${additionalOptions.itemSizes[i].width} ${additionalOptions.itemSizes[i].height}`
        : '';
      const flexItemClasses = additionalOptions.flexItemOptions.enabled && additionalOptions.flexItemOptions.items[i]
        ? ` ${additionalOptions.flexItemOptions.items[i].flex} ${additionalOptions.flexItemOptions.items[i].alignSelf} ${additionalOptions.flexItemOptions.items[i].order !== 0 ? `order-${additionalOptions.flexItemOptions.items[i].order}` : ''}`
        : '';
      return `    <div class="${itemClasses}${sizeClasses}${flexItemClasses}">Item ${i + 1}</div>`;
    }).join('\n');
    
    return `<div class="${containerClasses}">
        <div class="flex ${flexClasses}">
${items}
        </div>
    </div>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateHTML());
    alert('HTML code copied to clipboard!');
  };

  const renderConfigSection = (breakpoint, title, prefix) => (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Direction */}
        <div>
          <label className="block text-sm font-medium mb-1">Direction</label>
          <select
            value={flexConfig[breakpoint].direction}
            onChange={(e) => updateFlexConfig(breakpoint, 'direction', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="row">Row</option>
            <option value="row-reverse">Row Reverse</option>
            <option value="column">Column</option>
            <option value="column-reverse">Column Reverse</option>
          </select>
        </div>

        {/* Wrap */}
        <div>
          <label className="block text-sm font-medium mb-1">Wrap</label>
          <select
            value={flexConfig[breakpoint].wrap}
            onChange={(e) => updateFlexConfig(breakpoint, 'wrap', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="nowrap">No Wrap</option>
            <option value="wrap">Wrap</option>
            <option value="wrap-reverse">Wrap Reverse</option>
          </select>
        </div>

        {/* Justify Content */}
        <div>
          <label className="block text-sm font-medium mb-1">Justify Content</label>
          <select
            value={flexConfig[breakpoint].justifyContent}
            onChange={(e) => updateFlexConfig(breakpoint, 'justifyContent', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
            <option value="space-evenly">Space Evenly</option>
          </select>
        </div>

        {/* Align Items */}
        <div>
          <label className="block text-sm font-medium mb-1">Align Items</label>
          <select
            value={flexConfig[breakpoint].alignItems}
            onChange={(e) => updateFlexConfig(breakpoint, 'alignItems', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="stretch">Stretch</option>
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
          </select>
        </div>

        {/* Align Content */}
        <div>
          <label className="block text-sm font-medium mb-1">Align Content</label>
          <select
            value={flexConfig[breakpoint].alignContent}
            onChange={(e) => updateFlexConfig(breakpoint, 'alignContent', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="stretch">Stretch</option>
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
            <option value="space-evenly">Space Evenly</option>
          </select>
        </div>

        {/* Gap */}
        <div>
          <label className="block text-sm font-medium mb-1">Gap</label>
          <select
            value={flexConfig[breakpoint].gap}
            onChange={(e) => updateFlexConfig(breakpoint, 'gap', parseInt(e.target.value))}
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
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Responsive Flexbox Generator</h1>
          <p className="text-gray-600">Generate responsive flexbox layouts with Tailwind CSS classes</p>
        </div>

        {/* Configuration Panel */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Flexbox Configuration</h2>
          
          {/* Mobile Configuration */}
          {renderConfigSection('mobile', 'Mobile (Default)', '')}

          {/* Tablet Configuration */}
          {renderConfigSection('tablet', 'Tablet (md: 768px+)', 'md:')}

          {/* Desktop Configuration */}
          {renderConfigSection('desktop', 'Desktop (lg: 1024px+)', 'lg:')}

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
                  placeholder="e.g., w-full p-4 min-h-96"
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
                  max="20"
                  value={additionalOptions.itemCount}
                  onChange={(e) => setAdditionalOptions(prev => ({ ...prev, itemCount: parseInt(e.target.value) || 1 }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Flex Item Options */}
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="flexItemOptions"
                  checked={additionalOptions.flexItemOptions.enabled}
                  onChange={(e) => setAdditionalOptions(prev => ({ 
                    ...prev, 
                    flexItemOptions: { 
                      ...prev.flexItemOptions, 
                      enabled: e.target.checked 
                    } 
                  }))}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="flexItemOptions" className="text-sm font-medium text-gray-700">
                  Enable flex item properties (flex, align-self, order)
                </label>
              </div>
              
              {additionalOptions.flexItemOptions.enabled && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: Math.min(additionalOptions.itemCount, 6) }, (_, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium mb-2">Item {i + 1}</h4>
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Flex</label>
                          <select
                            value={additionalOptions.flexItemOptions.items[i]?.flex || 'flex-1'}
                            onChange={(e) => updateFlexItemOptions(i, 'flex', e.target.value)}
                            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="flex-none">flex-none</option>
                            <option value="flex-1">flex-1</option>
                            <option value="flex-auto">flex-auto</option>
                            <option value="flex-initial">flex-initial</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Align Self</label>
                          <select
                            value={additionalOptions.flexItemOptions.items[i]?.alignSelf || 'auto'}
                            onChange={(e) => updateFlexItemOptions(i, 'alignSelf', e.target.value)}
                            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="auto">auto</option>
                            <option value="self-start">self-start</option>
                            <option value="self-end">self-end</option>
                            <option value="self-center">self-center</option>
                            <option value="self-stretch">self-stretch</option>
                            <option value="self-baseline">self-baseline</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Order</label>
                          <input
                            type="number"
                            min="0"
                            max="12"
                            value={additionalOptions.flexItemOptions.items[i]?.order || 0}
                            onChange={(e) => updateFlexItemOptions(i, 'order', parseInt(e.target.value) || 0)}
                            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Uneven Sizing Options */}
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="unevenSizing"
                  checked={additionalOptions.unevenSizing}
                  onChange={(e) => setAdditionalOptions(prev => ({ ...prev, unevenSizing: e.target.checked }))}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="unevenSizing" className="text-sm font-medium text-gray-700">
                  Enable uneven item sizes (better for demonstrating align-items)
                </label>
              </div>
              
              {additionalOptions.unevenSizing && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: Math.min(additionalOptions.itemCount, 6) }, (_, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium mb-2">Item {i + 1}</h4>
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Width</label>
                          <select
                            value={additionalOptions.itemSizes[i]?.width || 'w-20'}
                            onChange={(e) => {
                              const newSizes = [...additionalOptions.itemSizes];
                              if (!newSizes[i]) newSizes[i] = { width: 'w-20', height: 'h-16' };
                              newSizes[i].width = e.target.value;
                              setAdditionalOptions(prev => ({ ...prev, itemSizes: newSizes }));
                            }}
                            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="w-12">w-12</option>
                            <option value="w-16">w-16</option>
                            <option value="w-20">w-20</option>
                            <option value="w-24">w-24</option>
                            <option value="w-28">w-28</option>
                            <option value="w-32">w-32</option>
                            <option value="w-36">w-36</option>
                            <option value="w-40">w-40</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Height</label>
                          <select
                            value={additionalOptions.itemSizes[i]?.height || 'h-16'}
                            onChange={(e) => {
                              const newSizes = [...additionalOptions.itemSizes];
                              if (!newSizes[i]) newSizes[i] = { width: 'w-20', height: 'h-16' };
                              newSizes[i].height = e.target.value;
                              setAdditionalOptions(prev => ({ ...prev, itemSizes: newSizes }));
                            }}
                            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="h-8">h-8</option>
                            <option value="h-12">h-12</option>
                            <option value="h-16">h-16</option>
                            <option value="h-20">h-20</option>
                            <option value="h-24">h-24</option>
                            <option value="h-28">h-28</option>
                            <option value="h-32">h-32</option>
                            <option value="h-36">h-36</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
              <div className={`flex ${getPreviewClasses()}`}>
                {Array.from({ length: additionalOptions.itemCount }, (_, i) => {
                  const sizeClasses = additionalOptions.unevenSizing && additionalOptions.itemSizes[i] 
                    ? `${additionalOptions.itemSizes[i].width} ${additionalOptions.itemSizes[i].height}`
                    : '';
                  const flexItemClasses = additionalOptions.flexItemOptions.enabled && additionalOptions.flexItemOptions.items[i]
                    ? `${additionalOptions.flexItemOptions.items[i].flex} ${additionalOptions.flexItemOptions.items[i].alignSelf} ${additionalOptions.flexItemOptions.items[i].order !== 0 ? `order-${additionalOptions.flexItemOptions.items[i].order}` : ''}`
                    : '';
                  return (
                    <div key={i} className={`${additionalOptions.itemClass} ${sizeClasses} ${flexItemClasses}`}>
                      Item {i + 1}
                    </div>
                  );
                })}
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
                {generateFlexClasses()}
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
