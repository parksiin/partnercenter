import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';

export default function ButtonTxt({
  className,
  label = "버튼",
  showLabel = true,
  showLeftIcon = false,
  showRightIcon = false,
  size = "large",
  type = "primary",
  disabled = false,
  onClick,
  leftIcon = "blank",
  rightIcon = "blank",
}) {
  // 공통 베이스 스타일 (모든 텍스트 버튼은 px-2, gap-2가 공통입니다)
  const baseClasses = "relative flex items-center justify-center whitespace-nowrap font-sans font-medium leading-none cursor-pointer transition-colors duration-200 outline-none box-border gap-2 px-2";

  // Size 기반 스타일 매핑 (Button과 다르게 ButtonTxt는 40/32/24px)
  const sizeClasses = {
    large: "h-6 px-2 gap-2 rounded-small text-label-l", // 높이 40px(h-6), px 4px(p-2), gap 4px(gap-2)
    medium: "h-5 px-2 gap-2 rounded-xsmall text-label-m", // 높이 32px(h-5), px 4px(p-2), gap 4px(gap-2)
    small: "h-4 px-2 gap-2 rounded-xsmall text-body-s",  // 높이 24px(h-4), px 4px(p-2), gap 4px(gap-2)
  };

  // Type 기반 인터랙션 및 상태 스타일 매핑
  const typeClasses = {
    primary: "bg-transparent hover:bg-button-secondary-fill-hover active:bg-button-secondary-fill-pressed text-text-primary disabled:text-text-disabled disabled:hover:bg-transparent disabled:cursor-not-allowed",
    secondary: "bg-transparent hover:bg-button-text-fill-hover active:bg-button-text-fill-pressed text-text-basic disabled:text-text-disabled disabled:hover:bg-transparent disabled:cursor-not-allowed",
    inverted: "bg-transparent hover:bg-button-text-inverted-hover active:bg-button-text-inverted-pressed text-text-basic-inverted disabled:text-text-disabled-inverted disabled:hover:bg-transparent disabled:cursor-not-allowed",
  };

  const iconSizes = {
    large: 24,
    medium: 20,
    small: 16,
  };
  const currentIconSize = iconSizes[size] || 24;

  return (
    <button
      className={classNames(baseClasses, sizeClasses[size], typeClasses[type], className)}
      disabled={disabled}
      onClick={onClick}
    >
      {showLeftIcon && <Icon name={leftIcon} size={currentIconSize} className="shrink-0" />}
      {showLabel && <span>{label}</span>}
      {showRightIcon && <Icon name={rightIcon} size={currentIconSize} className="shrink-0" />}
    </button>
  );
}
