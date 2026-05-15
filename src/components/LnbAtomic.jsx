import React, { forwardRef } from 'react';
import classNames from 'classnames';
import Icon from './Icon';

/**
 * LnbAtomic 컴포넌트
 * @param {string} type - 메뉴 타입 (01~05)
 * @param {string} state - 상태 (default, hover, selected)
 * @param {string} label - 커스텀 레이블 (기본값은 타입별로 다름)
 */
const LnbAtomic = forwardRef(({
  className,
  type = "01",
  state = "default",
  label,
  onClick,
  ...props
}, ref) => {
  const isSelected = state === "selected";

  // 타입별 데이터 매핑
  const typeData = {
    "01": { icon: "lnb-01", defaultLabel: "대시보드" },
    "02": { icon: "lnb-02", defaultLabel: "고객등록" },
    "03": { icon: "lnb-03", defaultLabel: "고객현황" },
    "04": { icon: "lnb-04", defaultLabel: "담당자관리" },
    "05": { icon: "lnb-05", defaultLabel: "공지사항" },
  };

  const currentData = typeData[type] || typeData["01"];
  const displayLabel = label || currentData.defaultLabel;

  return (
    <div
      ref={ref}
      className={classNames(
        "group w-[168px] h-9 p-2 flex items-center shrink-0 cursor-pointer overflow-hidden bg-surface-white",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <div
        className={classNames(
          "flex items-center gap-3 px-5 py-5 rounded-medium w-full transition-colors duration-200",
          isSelected ? "bg-transparent" : "bg-transparent group-hover:bg-element-primary-lighter"
        )}
      >
        <Icon
          name={currentData.icon}
          size={24}
          className={classNames(
            "shrink-0",
            isSelected ? "text-icon-primary" : "text-icon-disabled group-hover:text-icon-primary"
          )}
        />
        <div 
          className={classNames(
            "flex-1 whitespace-nowrap",
            isSelected ? "text-text-primary text-label-m-m" : "text-text-disabled text-label-m-m group-hover:text-text-primary"
          )}
        >
          <p className="leading-none">{displayLabel}</p>
        </div>
      </div>
    </div>
  );
});

LnbAtomic.displayName = 'LnbAtomic';

export default LnbAtomic;
