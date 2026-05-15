import React from 'react';
import classNames from 'classnames';

/**
 * BadgeCount component for displaying quantity with status labels.
 * 
 * @param {string} state - "new" | "cancel" | "total"
 * @param {number|string} [count=0] - The quantity to display.
 * @param {string} [className] - Additional class names for the wrapper.
 */
export default function BadgeCount({ 
  state = 'new', 
  count = 0, 
  className,
  ...props 
}) {
  const statusConfig = {
    new: {
      label: '신규',
      bg: 'bg-element-primary-lighter',
      text: 'text-text-primary'
    },
    cancel: {
      label: '종료',
      bg: 'bg-element-gray-lighter',
      text: 'text-text-subtle'
    },
    total: {
      label: '총',
      bg: 'bg-element-white',
      text: 'text-text-basic'
    }
  };

  const currentStatus = statusConfig[state] || statusConfig.new;

  return (
    <div
      className={classNames(
        'flex items-center justify-center gap-2 min-w-[64px] py-3 px-3 rounded-xsmall shrink-0',
        currentStatus.bg,
        currentStatus.text,
        className
      )}
      {...props}
    >
      <span className="text-label-s-m leading-none whitespace-nowrap">
        {currentStatus.label}
      </span>
      <span className="text-label-s-m leading-none font-bold">
        {count}
      </span>
    </div>
  );
}

BadgeCount.displayName = 'BadgeCount';
