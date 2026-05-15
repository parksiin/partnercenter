import React, { useState, forwardRef } from 'react';
import classNames from 'classnames';
import InputMessage from './InputMessage';
import Icon from './Icon';

const InputExcel = forwardRef(({
  className,
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

  // 상태별 테두리 및 배경 스타일 (InputRow와 동일)
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
      {/* 인풋 영역 (InputExcel: 높이 h-6(40px), 패딩 px-6(16px), 내부 간격 gap-3(8px)) */}
      <div className="flex flex-col items-start w-full gap-2">
        <label className={classNames(
          'flex items-center w-full gap-3 cursor-text transition-all duration-200 overflow-hidden box-border h-6 px-6 rounded-small',
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
              'flex-1 w-full h-full bg-transparent outline-none m-0 p-0 placeholder:text-text-disabled text-body-s-r',
              disabled ? 'text-text-disabled' : 'text-text-basic'
            )}
            {...props}
          />
          
          {/* 아이콘 영역 (InputExcel 아이콘 사이즈는 주로 16px) */}
           {type === 'password' ? (
             <button 
               type="button" 
               onClick={togglePasswordVisibility} 
               className="flex shrink-0 items-center justify-center outline-none cursor-pointer" 
               tabIndex={-1}
             >
               {isPasswordVisible ? (
                 <Icon name="eye-show" className={classNames('transition-colors duration-200', iconColorStyles[uiState])} size={16} />
               ) : (
                 <Icon name="eye-hide" className={classNames('transition-colors duration-200', iconColorStyles[uiState])} size={16} />
               )}
             </button>
          ) : customIconName ? (
             <div className="flex shrink-0 items-center justify-center">
               <Icon name={customIconName} className={classNames('transition-colors duration-200', iconColorStyles[uiState])} size={16} />
             </div>
          ) : null}
        </label>

        {/* 메시지 영역 (얼럿 및 힌트가 있을 때만 활성화) - 피그마상 wrap_input gap-2(4px) 적용 */}
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

InputExcel.displayName = 'InputExcel';

export default InputExcel;
