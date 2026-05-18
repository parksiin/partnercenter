import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';

export default function AccordionTrigger({
  type = 'close', // 'close' (arrow-up) | 'open' (arrow-down)
  state = 'default', // 'default' | 'hover' | 'pressed'
  onClick,
  className,
  ...props
}) {
  // Explicit state backgrounds or automatic browser states
  const stateBgClass = {
    'default': 'bg-transparent hover:bg-action-secondary-hover active:bg-action-secondary-pressed',
    'hover': 'bg-action-secondary-hover',
    'pressed': 'bg-action-secondary-pressed'
  }[state] || 'bg-transparent';

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "flex items-center justify-center p-3 rounded-xsmall w-40 h-40 cursor-pointer select-none box-border outline-none border-none transition-colors duration-200",
        stateBgClass,
        className
      )}
      data-name="accordion-trigger"
      {...props}
    >
      <Icon 
        name={type === 'open' ? 'arrow-down' : 'arrow-up'} 
        size={24} 
        className="text-icon-basic transition-transform duration-200"
      />
    </button>
  );
}
