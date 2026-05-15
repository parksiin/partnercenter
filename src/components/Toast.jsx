import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import ButtonTxt from './ButtonTxt';

/**
 * Toast 컴포넌트
 * @param {string} message - 표시할 메시지
 * @param {boolean} showAction - 액션 버튼(되돌리기 등) 표시 여부
 * @param {string} actionLabel - 액션 버튼 레이블 (기본값: "되돌리기")
 * @param {function} onAction - 액션 버튼 클릭 핸들러
 * @param {function} onClose - 토스트 종료 시 호출되는 핸들러
 * @param {string} className - 추가 클래스
 */
export default function Toast({
  message = "메시지",
  showAction = false,
  actionLabel = "되돌리기",
  onAction,
  onClose,
  className,
}) {
  const defaultDuration = showAction ? 8000 : 4000;
  const [isPaused, setIsPaused] = useState(false);
  const timeLeft = useRef(defaultDuration);
  const timerId = useRef(null);

  // 처음 마운트되거나 지속 시간이 변경될 때만 시간 초기화
  useEffect(() => {
    timeLeft.current = defaultDuration;
  }, [defaultDuration]);

  useEffect(() => {
    // 100ms마다 체크하는 인터벌 타이머 시작
    timerId.current = setInterval(() => {
      if (!isPaused) {
        timeLeft.current -= 100;
        if (timeLeft.current <= 0) {
          clearInterval(timerId.current);
          if (onClose) onClose();
        }
      }
    }, 100);

    return () => {
      if (timerId.current) clearInterval(timerId.current);
    };
  }, [isPaused, onClose]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className={classNames(
        "w-[480px] h-8 bg-surface-inverted rounded-xsmall px-8 py-5 flex items-center gap-5 transition-opacity duration-300",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 메시지 영역 */}
      <div className="flex-1 text-body-m font-regular text-text-basic-inverted leading-[1.5]">
        {message}
      </div>

      {/* 액션 버튼 영역 */}
      {showAction && (
        <ButtonTxt
          label={actionLabel}
          type="inverted"
          size="medium"
          onClick={onAction}
          className="shrink-0"
        />
      )}
    </div>
  );
}
