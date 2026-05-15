import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';

export default function InputMessage({
  className,
  alert = "얼럿 메시지를 입력해 주세요",
  hint = "필요한 정보를 입력해 주세요",
  showIcon = true,
  type = "hint",
}) {
  const isHint = type === "hint";

  const typeTextStyles = {
    hint: "text-text-subtle", // 힌트 텍스트는 보통 subtle 색상을 씁니다만 피그마시안대로라면 basic
    info: "text-text-information",
    error: "text-text-danger",
    success: "text-text-success",
  };
  
  // 피그마에서 추출한 원본: text-text-basic
  if (isHint) typeTextStyles.hint = "text-text-basic";

  const iconStyles = {
    info: "text-icon-information",
    error: "text-icon-danger",
    success: "text-icon-success",
  };


  if (isHint) {
    return (
      <p className={classNames("font-sans font-medium text-body-s leading-none m-0", typeTextStyles[type], className)}>
        {hint}
      </p>
    );
  }

  return (
    <div className={classNames("flex items-center gap-3 h-3 relative box-border", className)}>
      {showIcon && type !== 'hint' && (
        <Icon name={type} size={20} className={classNames("shrink-0", iconStyles[type])} />
      )}
      <p className={classNames("font-sans font-medium text-body-s leading-none m-0 whitespace-nowrap w-full", typeTextStyles[type])}>
        {alert}
      </p>
    </div>
  );
}
