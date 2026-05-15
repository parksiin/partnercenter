import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';

export default function Button({
  className,
  label = "버튼",
  showLeftIcon = false,
  showRightIcon = false,
  size = "xlarge",
  type = "primary",
  disabled = false,
  onClick,
  leftIcon = "blank",
  rightIcon = "blank",
}) {
  // 공통 베이스 스타일 (모든 버튼에 적용)
  const baseClasses = "relative flex items-center justify-center whitespace-nowrap font-sans font-bold leading-none cursor-pointer transition-colors duration-200 outline-none box-border";

  // 피그마 속성(Size)을 Tailwind 유틸리티 클래스로 매핑 (프로젝트 커스텀 토큰 기준)
  const sizeClasses = {
    xlarge: "h-9 px-8 gap-2 rounded-medium text-label-l", // 높이 64px(h-9), px 24px(px-8), gap 4px(gap-2)
    large: "h-8 px-7 gap-2 rounded-medium text-label-l",  // 높이 56px(h-8), px 20px(px-7), gap 4px(gap-2)
    medium: "h-7 px-6 gap-2 rounded-small text-label-m",  // 높이 48px(h-7), px 16px(px-6), gap 4px(gap-2)
    small: "h-6 px-5 gap-2 rounded-small text-label-s",   // 높이 40px(h-6), px 12px(px-5), gap 4px(gap-2)
    xsmall: "h-5 px-4 gap-2 rounded-xsmall text-label-s", // 높이 32px(h-5), px 10px(px-4), gap 4px(gap-2)
  };

  // 피그마 속성(Type)을 Hover, Pressed, Disabled 상태와 엮어서 매핑
  const typeClasses = {
    primary: "bg-button-primary-fill hover:bg-button-primary-fill-hover active:bg-button-primary-fill-pressed text-text-basic-inverted disabled:bg-button-disabled-fill disabled:text-text-disabled disabled:cursor-not-allowed border border-transparent",
    secondary: "bg-button-secondary-fill border border-button-secondary-border hover:bg-button-secondary-fill-hover active:bg-button-secondary-fill-pressed text-text-primary disabled:bg-button-disabled-fill disabled:border-transparent disabled:text-text-disabled disabled:cursor-not-allowed",
    tertiary: "bg-button-tertiary-fill border border-button-tertiary-fill-border hover:bg-button-tertiary-fill-hover active:bg-button-tertiary-fill-pressed text-text-basic disabled:bg-button-disabled-fill disabled:border-transparent disabled:text-text-disabled disabled:cursor-not-allowed",
  };

  const iconSizes = {
    xlarge: 24,
    large: 24,
    medium: 20,
    small: 16,
    xsmall: 16,
  };
  const currentIconSize = iconSizes[size] || 24;

  return (
    <button
      className={classNames(baseClasses, sizeClasses[size], typeClasses[type], className)}
      disabled={disabled}
      onClick={onClick}
    >
      {showLeftIcon && <Icon name={leftIcon} size={currentIconSize} className="shrink-0" />}
      <span>{label}</span>
      {showRightIcon && <Icon name={rightIcon} size={currentIconSize} className="shrink-0" />}
    </button>
  );
}
