import React from 'react';
import classNames from 'classnames';

/**
 * Count 컴포넌트
 * @param {string} label - 레이블 텍스트
 * @param {number|string} value - 표시할 값
 * @param {string} unit - 단위 텍스트
 * @param {boolean} showLabel - 레이블 노출 여부
 * @param {string} className - 추가적인 커스텀 클래스
 */
export default function Count({
  label = "레이블",
  value = 0,
  unit = "명",
  showLabel = true,
  className,
}) {
  return (
    <div className={classNames(
      "flex items-center gap-4 text-text-basic", // gap-4 = 12px
      className
    )}>
      {showLabel && (
        <span className="text-label-m font-regular whitespace-nowrap">
          {label}
        </span>
      )}
      
      <div className={classNames(
        "flex items-center px-7 gap-3 h-6 w-[200px]", // px-7 = 20px, gap-3 = 8px, h-6 = 40px
        "bg-element-white border border-border-gray rounded-max"
      )}>
        <span className="flex-1 text-right text-body-l font-bold">
          {value.toLocaleString()}
        </span>
        <span className="text-label-m font-regular whitespace-nowrap">
          {unit}
        </span>
      </div>
    </div>
  );
}
