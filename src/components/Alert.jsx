import React from 'react';
import classNames from 'classnames';

/**
 * Alert 컴포넌트
 * @param {string} title - 제목 (기본값: "타이틀")
 * @param {string} text - 안내 문구 (기본값: "내용을 입력해 주세요.")
 * @param {string} type - 버튼 타입 ("btn1", "btn2")
 * @param {string} confirmLabel - 확인 버튼 텍스트 (기본값: "확인")
 * @param {string} cancelLabel - 취소 버튼 텍스트 (기본값: "취소")
 * @param {function} onConfirm - 확인 클릭 핸들러
 * @param {function} onCancel - 취소 클릭 핸들러
 * @param {string} className - 추가 클래스
 */
export default function Alert({
  title = "타이틀",
  text = "내용을 입력해 주세요.",
  type = "btn1",
  confirmLabel = "확인",
  cancelLabel = "취소",
  onConfirm,
  onCancel,
  className,
}) {
  return (
    <div className={classNames(
      "w-[336px] bg-surface-white rounded-xlarge shadow-3 flex flex-col overflow-hidden",
      className
    )}>
      {/* 컨텐츠 영역 */}
      <div className="pt-9 pb-10 px-9 flex flex-col items-center gap-7 text-center">
        <h3 className="text-title-m font-bold text-text-bolder leading-[1.5]">
          {title}
        </h3>
        <p className="text-label-m font-regular text-text-basic leading-[1.5] whitespace-pre-wrap w-full">
          {text}
        </p>
      </div>

      {/* 하단 버튼 영역 */}
      <div className="h-8 flex shrink-0">
        {type === "btn2" && (
          <button
            type="button"
            className="flex-1 bg-button-secondary-fill text-text-primary text-label-m font-bold hover:bg-button-secondary-fill-hover active:bg-button-secondary-fill-pressed transition-colors duration-200 outline-none"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
        )}
        <button
          type="button"
          className="flex-1 bg-button-primary-fill text-text-basic-inverted text-label-m font-bold hover:bg-button-primary-fill-hover active:bg-button-primary-fill-pressed transition-colors duration-200 outline-none"
          onClick={onConfirm}
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}
