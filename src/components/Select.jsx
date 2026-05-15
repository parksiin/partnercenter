import React, { forwardRef, useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import InputMessage from './InputMessage';
import Icon from './Icon';
import SelectDropDownList from './SelectDropDownList';
import SelectDropDownItem from './SelectDropDownItem';

const Select = forwardRef(({
  className,
  label = '레이블',
  showLabel = true,
  required = false,
  size = 'large', // 'large', 'medium', 'small'
  state = 'default', // 'default', 'focused', 'completed', 'error', 'disabled', 'view'
  placeholder = '내용을 입력하세요',
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

  // 크기별 스타일 매핑 (h-8=56px, h-7=48px, h-6=40px / px-6=16px)
  const sizeStyles = {
    large: 'h-8 px-6 rounded-medium', 
    medium: 'h-7 px-6 rounded-small', 
    small: 'h-6 px-6 rounded-small', 
  };

  // 텍스트 크기 매핑 (본문용)
  const textSizeStyles = {
    large: 'text-body-m-r', 
    medium: 'text-body-m-r', 
    small: 'text-body-s-r', 
  };

  // 레이블 크기 매핑
  const labelSizeStyles = {
    large: 'text-body-m-r',
    medium: 'text-body-m-r',
    small: 'text-body-s-r',
  };

  // 아이콘 사이즈 매핑
  const iconSizes = {
    large: 24,
    medium: 20,
    small: 16,
  };

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

  // 상태별 내부 텍스트 색상 (Placeholder도 기본은 basic 컬러임)
  let textColorClasses = 'text-text-basic';
  if (disabled) {
    textColorClasses = 'text-text-disabled';
  }

  return (
    <div 
      ref={containerRef} 
      className={classNames('flex flex-col items-start w-full gap-3 relative', className)}
    >
      {showLabel && (
        <div className={classNames('flex items-center gap-1 w-full', labelSizeStyles[size])}>
          <span className="text-text-subtle font-sans leading-none">{label}</span>
          {required && <span className="text-text-primary font-bold leading-none">*</span>}
        </div>
      )}
      
      <div className="flex flex-col items-start w-full gap-3 relative">
        {/* 셀렉트 트리거 영역 */}
        <button
          ref={ref}
          type="button"
          disabled={disabled || isView}
          onClick={handleToggle}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classNames(
            'flex items-center w-full gap-3 cursor-pointer transition-all duration-200 box-border outline-none text-left',
            isView && 'cursor-default',
            sizeStyles[size],
            (isOpen && !disabled && !isView) ? stateStyles.focused : stateStyles[uiState] // 열렸을 땐 focused 스타일
          )}
          {...props}
        >
          <span className={classNames('flex-1 truncate', textColorClasses, textSizeStyles[size])}>
            {value || placeholder}
          </span>
          <div className="flex shrink-0 items-center justify-center">
            {isOpen ? (
              <Icon name="arrow-up" className={classNames('transition-colors duration-200 text-icon-basic')} size={iconSizes[size]} />
            ) : (
              <Icon name="arrow-down" className={classNames('transition-colors duration-200', iconColorStyles[uiState])} size={iconSizes[size]} />
            )}
          </div>
        </button>

        {/* 옵션 리스트 드롭다운 영역 */}
        {isOpen && options.length > 0 && (
          <SelectDropDownList>
            {options.map((opt, idx) => {
              const isSelected = value === opt.label || value === opt.value;
              return (
                <SelectDropDownItem 
                  key={idx} 
                  label={opt.label} 
                  state={isSelected ? 'pressed' : 'default'} // 선택된 항목은 시각적으로 표기
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
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
