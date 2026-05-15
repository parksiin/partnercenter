import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import TabAtomic from './TabAtomic';

/**
 * Tab component that renders a group of TabAtomics.
 * 
 * @param {Object[]} tabs - Array of tab objects. Example: [{ id: 'menu1', label: '메뉴 1', showBadge: true }]
 * @param {string} [activeTabId] - The id of the currently active tab (for controlled component).
 * @param {string} [defaultActiveTabId] - The id of the tab that should be active initially (for uncontrolled component).
 * @param {function} [onChange] - Callback fired when a tab is clicked. Passed the tab's id.
 * @param {string} [size="large"] - "large" | "medium".
 * @param {React.ReactNode} [rightElement] - Additional elements to render on the right side of the border.
 * @param {string} [className] - Additional class names for the wrapper.
 */
export default function Tab({
  tabs = [],
  activeTabId,
  defaultActiveTabId,
  onChange,
  size = 'large',
  rightElement,
  className,
  ...props
}) {
  const [internalActiveTabId, setInternalActiveTabId] = useState(
    defaultActiveTabId !== undefined ? defaultActiveTabId : tabs[0]?.id
  );

  const currentActiveTabId = activeTabId !== undefined ? activeTabId : internalActiveTabId;

  const handleTabClick = (id) => {
    if (activeTabId === undefined) {
      setInternalActiveTabId(id);
    }
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <div
      className={classNames(
        "flex items-center justify-between border-b border-border-gray-light w-full",
        className
      )}
      {...props}
    >
      <div className="flex items-center flex-nowrap overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <TabAtomic
            key={tab.id}
            size={size}
            label={tab.label}
            showBadge={tab.showBadge}
            state={tab.disabled ? 'disabled' : (currentActiveTabId === tab.id ? 'active' : 'default')}
            onClick={() => handleTabClick(tab.id)}
            // Slight negative margin on the wrapper to overlap the parent border properly if active
            // but normally flex items align. Tailwind -mb-px moves it down 1px to cover the bottom border.
            className={currentActiveTabId === tab.id ? '-mb-px' : ''}
          />
        ))}
      </div>
      
      {rightElement && (
        <div className="flex items-center ml-4 shrink-0">
          {rightElement}
        </div>
      )}
    </div>
  );
}
