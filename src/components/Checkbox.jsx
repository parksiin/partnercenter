import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';

/**
 * Checkbox component with accessible design and custom styling.
 * 
 * @param {boolean} checked - Controlled check state.
 * @param {function} onChange - Change handler.
 * @param {boolean} disabled - Disabled state.
 * @param {string} id - For ID and label association.
 * @param {string} label - Optional label text.
 * @param {string} className - Additional CSS classes.
 */
export default function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  id,
  label,
  className,
  ...props
}) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  // Wrapper for checkbox + label
  return (
    <div 
      className={classNames(
        "flex items-center gap-2 cursor-pointer select-none",
        disabled && "cursor-not-allowed opacity-100", // Using element-disabled color instead of simple opacity
        className
      )}
      onClick={() => !disabled && onChange && onChange(!checked)}
    >
      {/* Hidden native input for accessibility */}
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        disabled={disabled}
        onChange={(e) => !disabled && onChange && onChange(e.target.checked)}
        className="sr-only"
        {...props}
      />

      {/* Custom styled checkbox box */}
      <div
        className={classNames(
          "w-24 h-24 flex items-center justify-center rounded-xsmall border transition-all duration-200 box-border shrink-0",
          // Unchecked
          !checked && !disabled && "bg-surface-white border-border-gray",
          // Checked
          checked && !disabled && "bg-element-primary border-border-primary-dark",
          // Disabled state
          disabled && !checked && "bg-element-disabled border-border-disabled",
          disabled && checked && "bg-element-disabled border-border-disabled"
        )}
      >
        {checked && (
          <Icon 
            name="check" 
            size={24} 
            className={classNames(
              disabled ? "text-text-disabled" : "text-surface-white"
            )} 
          />
        )}
      </div>

      {/* Label text */}
      {label && (
        <span className={classNames(
          "text-label-m-m leading-none",
          disabled ? "text-text-disabled" : "text-text-basic"
        )}>
          {label}
        </span>
      )}
    </div>
  );
}

Checkbox.displayName = 'Checkbox';
