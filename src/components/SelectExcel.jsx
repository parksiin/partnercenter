import React, { forwardRef, useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import InputMessage from './InputMessage';
import Icon from './Icon';
import SelectDropDownList from './SelectDropDownList';
import SelectDropDownItem from './SelectDropDownItem';

const SelectExcel = forwardRef(({
  className,
  state = 'default', // 'default', 'focused', 'completed', 'error', 'disabled', 'view'
  placeholder = '선택하세요',
  value,
  options = [], // [{ label: '옵션1', value: 'opt1' }] 형태 지원
  onChange, // 선택 시 콜백
  onClick,
  onFocus,
  onBlur,
  alertText,
  hintText,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const disabled = state === 'disabled';
  const isView = state === 'view';

  // 외부 영역 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = (e) => {
    if (disabled || isView) return;
    setIsOpen((prev) => !prev);
    if (onClick) onClick(e);
  };

  const handleSelect = (option) => {
    if (onChange) onChange(option);
    setIsOpen(false);
  };

  // State 로직 결정 (값을 채웠을 경우 기본 completed)
  let uiState = state;
  if (uiState === 'default' && value !== undefined && value !== '') {
    uiState = 'completed';
  }

  // 상태별 테두리 및 배경 스타일
  const stateStyles = {
    default: 'bg-input-surface border border-input-border',
    focused: 'bg-input-surface border-2 border-input-border-active',
    completed: 'bg-input-surface border border-input-border',
    error: 'bg-input-surface border-2 border-input-border-error',
    disabled: 'bg-input-surface-disabled border border-input-border-disabled',
    view: 'bg-input-surface-disabled border border-input-border-disabled',
  };

  // 상태별 아이콘 색상 매핑
  const iconColorStyles = {
    default: 'text-icon-basic',
    focused: 'text-icon-basic',
    completed: 'text-icon-basic',
    error: 'text-icon-basic',
    disabled: 'text-icon-disabled',
    view: 'text-icon-disabled-on',
  };

  // 텍스트 색상 결정 (placeholder와 value 모두 동일 기준 적용)
  let textColorClasses = 'text-text-basic';
  if (disabled) {
    textColorClasses = 'text-text-disabled';
  }

  return (
    <div 
      ref={containerRef} 
      className={classNames('flex flex-col items-start w-full gap-2 relative', className)}
    >
      {/* 셀렉트 트리거 영역 */}
      <button
        ref={ref}
        type="button"
        disabled={disabled || isView}
        onClick={handleToggle}
        onFocus={onFocus}
        onBlur={onBlur}
        className={classNames(
          'flex items-center w-full gap-3 cursor-pointer transition-all duration-200 box-border outline-none text-left h-6 px-6 rounded-small',
          isView && 'cursor-default',
          (isOpen && !disabled && !isView) ? stateStyles.focused : stateStyles[uiState] // 열렸을 땐 focused 스타일
        )}
        {...props}
      >
        <span className={classNames('flex-1 truncate text-body-s-r', textColorClasses)}>
          {value || placeholder}
        </span>
        <div className="flex shrink-0 items-center justify-center">
          {isOpen ? (
            <Icon name="arrow-up" className={classNames('transition-colors duration-200 text-icon-basic')} size={16} />
          ) : (
            <Icon name="arrow-down" className={classNames('transition-colors duration-200', iconColorStyles[uiState])} size={16} />
          )}
        </div>
      </button>

      {/* 옵션 리스트 드롭다운 영역 - SelectExcel은 mt-4 (4px) 띄움 */}
      {isOpen && options.length > 0 && (
        <SelectDropDownList dropdownMargin="mt-4">
          {options.map((opt, idx) => {
            const isSelected = value === opt.label || value === opt.value;
            return (
              <SelectDropDownItem 
                key={idx} 
                label={opt.label} 
                state={isSelected ? 'pressed' : 'default'} 
                onClick={() => handleSelect(opt)} 
              />
            );
          })}
        </SelectDropDownList>
      )}

      {/* 메시지 영역 */}
      {(alertText || hintText) && (
        <div className="w-full">
          {alertText ? (
            (uiState === 'error' || uiState === 'default') ? (
              <InputMessage type="error" alert={alertText} className="w-full" />
            ) : uiState === 'focused' ? (
              <InputMessage type="info" alert={alertText} className="w-full" />
            ) : uiState === 'completed' ? (
              <InputMessage type="success" alert={alertText} className="w-full" />
            ) : null
          ) : hintText ? (
            <InputMessage type="hint" hint={hintText} className="w-full" />
          ) : null}
        </div>
      )}
    </div>
  );
});

SelectExcel.displayName = 'SelectExcel';

export default SelectExcel;
