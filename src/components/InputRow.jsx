import React, { useState, forwardRef } from 'react';
import classNames from 'classnames';
import InputMessage from './InputMessage';
import Icon from './Icon';

const InputRow = forwardRef(({
  className,
  label = '레이블',
  showLabel = true,
  required = false,
  size = 'large', // 'large', 'medium', 'small'
  state = 'default', // 'default', 'focused', 'completed', 'error', 'disabled', 'view'
  placeholder = '내용을 입력하세요',
  value,
  onChange,
  onFocus,
  onBlur,
  type = 'text',
  icon: customIconName,
  alertText,
  hintText,
  ...props
}, ref) => {
  const [internalFocused, setInternalFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const disabled = state === 'disabled';
  const isView = state === 'view';

  // State 우선순위 결정
  let uiState = state;
  if (disabled) uiState = 'disabled';
  else if (isView) uiState = 'view';
  else if (state === 'error') uiState = 'error';
  else if (internalFocused) uiState = 'focused';
  else if (value !== undefined && value !== '') uiState = 'completed';

  const handleFocus = (e) => {
    if (!disabled && !isView) setInternalFocused(true);
    if (onFocus) onFocus(e);
  };
  
  const handleBlur = (e) => {
    if (!disabled && !isView) setInternalFocused(false);
    if (onBlur) onBlur(e);
  };
  
  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  // 크기별 스타일 매핑
  const sizeStyles = {
    large: 'h-8 px-6 rounded-medium', // 56px, radius 8px (px-6 = 16px)
    medium: 'h-7 px-6 rounded-small', // 48px, radius 6px
    small: 'h-6 px-6 rounded-small', // 40px, radius 6px
  };

  // 텍스트 크기 매핑
  const textSizeStyles = {
    large: 'text-body-m-r', // 16px regular
    medium: 'text-body-m-r', // 16px regular
    small: 'text-body-s-r', // 14px regular
  };

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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={classNames('flex flex-col items-start w-full gap-3', className)}>
      {showLabel && (
        <div className={classNames('flex items-center gap-1 w-full', labelSizeStyles[size])}>
          <span className="text-text-subtle font-sans leading-none">{label}</span>
          {required && <span className="text-text-primary font-bold leading-none">*</span>}
        </div>
      )}
      
      <div className="flex flex-col items-start w-full gap-3">
        {/* 인풋 영역 */}
        <label className={classNames(
          'flex items-center w-full gap-3 cursor-text transition-all duration-200 overflow-hidden box-border',
          sizeStyles[size],
          stateStyles[uiState]
        )}>
          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            readOnly={isView}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={classNames(
              'flex-1 w-full h-full bg-transparent outline-none m-0 p-0 text-text-basic placeholder:text-text-disabled',
              disabled && 'text-text-disabled-on', // 비활성화 시 텍스트 색상 변경
              textSizeStyles[size]
            )}
            {...props}
          />
          
          {/* 아이콘 영역 */}
          {type === 'password' ? (
             <button 
               type="button" 
               onClick={togglePasswordVisibility} 
               className="flex shrink-0 items-center justify-center outline-none cursor-pointer" 
               tabIndex={-1}
             >
               {isPasswordVisible ? (
                 <Icon name="eye-show" className={classNames('transition-colors duration-200', iconColorStyles[uiState])} size={iconSizes[size]} />
               ) : (
                 <Icon name="eye-hide" className={classNames('transition-colors duration-200', iconColorStyles[uiState])} size={iconSizes[size]} />
               )}
             </button>
          ) : customIconName ? (
             <div className="flex shrink-0 items-center justify-center">
               <Icon name={customIconName} className={classNames('transition-colors duration-200', iconColorStyles[uiState])} size={iconSizes[size]} />
             </div>
          ) : null}
        </label>

        {/* 메시지 영역 */}
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
    </div>
  );
});

InputRow.displayName = 'InputRow';

export default InputRow;
