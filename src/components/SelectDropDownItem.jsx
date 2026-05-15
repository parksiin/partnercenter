import React from 'react';
import classNames from 'classnames';

const SelectDropDownItem = ({
  className,
  label = '선택하세요',
  state = 'default', // 'default', 'hover', 'pressed'
  onClick,
  ...props
}) => {
  // Figma 컴포넌트상 hover나 pressed 상태일 때 bg-action-selected(#f0fdf4) 배경
  const isHoverOrPressed = state === 'hover' || state === 'pressed';

  return (
    <div
      role="option"
      onClick={onClick}
      className={classNames(
        'flex items-center w-full cursor-pointer transition-colors duration-200 text-left overflow-hidden box-border',
        'h-7 px-6', // h-7: 48px, px-6: 16px (커스텀 테마 매핑 기준)
        isHoverOrPressed 
          ? 'bg-action-selected' 
          : 'bg-surface-white hover:bg-action-selected active:bg-action-selected',
        'text-text-basic text-body-m-r',
        className
      )}
      {...props}
    >
      <span className="flex-1 truncate">{label}</span>
    </div>
  );
};

// Next.js나 일반 React에서 디버깅을 위해 추가
SelectDropDownItem.displayName = 'SelectDropDownItem';

export default SelectDropDownItem;
