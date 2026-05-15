import React, { forwardRef } from 'react';
import classNames from 'classnames';
import BadgeIcon from './BadgeIcon';

const TabAtomic = forwardRef(({
  className,
  label = "레이블",
  showBadge = false,
  size = "large", // "large" | "medium"
  state = "active", // "active" | "default" | "hover" | "pressed" | "disabled"
  onClick,
  ...props
}, ref) => {
  const isLarge = size === "large";

  // Common wrapper styles
  const baseWrapperStyles = "group flex items-center justify-center relative cursor-pointer outline-none transition-all duration-200 box-border";
  
  // Size specific wrapper styles
  const sizeWrapperStyles = {
    large: "h-8 min-w-[160px] px-7 gap-1",
    medium: "h-7 px-6 gap-1"
  };

  // State specific wrapper styles
  // Large size: applies bottom borders in most states
  const stateWrapperStylesLarge = {
    default: "bg-surface-white hover:bg-surface-white active:bg-element-primary-lighter",
    hover: "bg-surface-white",
    pressed: "bg-element-primary-lighter",
    active: "bg-surface-white border-b-4 border-border-primary",
    disabled: "bg-element-disabled cursor-not-allowed"
  };

  // Medium size: bottom border is only for 'active'
  const stateWrapperStylesMedium = {
    default: "bg-surface-white hover:bg-surface-white active:bg-element-primary-lighter",
    hover: "bg-surface-white",
    pressed: "bg-element-primary-lighter",
    active: "bg-surface-white border-b-2 border-border-primary",
    disabled: "bg-element-disabled cursor-not-allowed"
  };

  const stateStylesMap = isLarge ? stateWrapperStylesLarge : stateWrapperStylesMedium;

  // Text color/typography state mappings
  const textColorStylesLarge = {
    default: "text-text-subtle group-hover:text-text-point group-active:text-text-primary text-label-l-m",
    hover: "text-text-point text-label-l-m",
    pressed: "text-text-primary text-label-l-m",
    active: "text-text-primary text-label-l-b",
    disabled: "text-text-disabled text-label-l-m"
  };

  const textColorStylesMedium = {
    default: "text-text-subtle group-hover:text-text-point group-active:text-text-primary text-label-m-m",
    hover: "text-text-point text-label-m-m",
    pressed: "text-text-primary text-label-m-m",
    active: "text-text-primary text-label-m-b",
    disabled: "text-text-disabled text-label-m-m"
  };

  const textColorMap = isLarge ? textColorStylesLarge : textColorStylesMedium;

  return (
    <button
      ref={ref}
      type="button"
      className={classNames(
        baseWrapperStyles,
        sizeWrapperStyles[size],
        stateStylesMap[state],
        className
      )}
      disabled={state === 'disabled'}
      onClick={(e) => {
        if (state !== 'disabled' && onClick) onClick(e);
      }}
      {...props}
    >
      <div className={classNames(
        "flex flex-col justify-center leading-none relative shrink-0 whitespace-nowrap",
        textColorMap[state]
      )}>
        <p className="leading-none">{label}</p>
      </div>

      {showBadge && state !== 'active' && (
        <BadgeIcon type="new" />
      )}
    </button>
  );
});

TabAtomic.displayName = 'TabAtomic';

export default TabAtomic;
