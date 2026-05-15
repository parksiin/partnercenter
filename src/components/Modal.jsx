import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import Icon from './Icon';
import ButtonTxt from './ButtonTxt';
import Tab from './Tab';

// Auth 이미지를 모달 내부에서 직접 임포트하여 사용 (사용자 가이드 반영)
import type01 from '../assets/icons/type=01.png';
import type02 from '../assets/icons/type=02.png';
import type03 from '../assets/icons/type=03.png';

/**
 * Modal component with multiple layout types.
 * 
 * @param {boolean} isOpen - Modal visibility state.
 * @param {function} onClose - Modal close handler.
 * @param {string} title - Modal title text.
 * @param {string} subText - Optional description text.
 * @param {string} type - "1column" | "2columns" | "tab" | "auth"
 * @param {React.ReactNode} children - Main content for non-auth types.
 * @param {React.ReactNode} footer - Optional custom footer buttons.
 */
export default function Modal({
  isOpen,
  onClose,
  title = '타이틀',
  subText,
  type = '1column',
  children,
  footer,
}) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Layout-specific configurations
  const modalWidths = {
    '1column': 'w-[480px]',
    '2columns': 'w-[800px]',
    'tab': 'w-[640px]',
    'auth': 'w-[640px]',
  };

  const currentWidth = modalWidths[type] || modalWidths['1column'];

  const renderContent = () => {
    switch (type) {
      case 'auth':
        return (
          <div className="flex flex-col gap-9 w-full">
            <p className="text-label-m-m text-text-basic leading-[1.5]">
              {subText || '인증 방식을 선택해 주세요.'}
            </p>
            <div className="flex gap-5 justify-center w-full">
              {[
                { label: '간편인증', img: type01 },
                { label: '공동인증서', img: type02 },
                { label: '휴대폰인증', img: type03 }
              ].map((item, idx) => (
                <div key={idx} className="bg-surface-gray flex flex-col gap-4 items-center justify-center p-7 rounded-xlarge min-w-[176px]">
                  <span className="text-label-m-m text-text-basic leading-[1.5]">{item.label}</span>
                  {/* One-off 100px images specifically for Auth Modal */}
                  <img src={item.img} alt={item.label} className="w-[100px] h-[100px] object-cover" />
                </div>
              ))}
            </div>
          </div>
        );
      case 'tab':
        return (
          <div className="flex flex-col gap-7 w-full">
            <Tab size="medium" tabs={[{ id: 'tab1', label: '탭 제목 01' }, { id: 'tab2', label: '탭 제목 02' }]} />
            <div className="text-body-m-r text-text-basic leading-[1.5]">
              {children || '탭 콘텐츠 영역입니다.'}
            </div>
          </div>
        );
      default:
        return <>{children}</>;
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background-dim transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Dialog */}
      <div 
        className={classNames(
          "relative bg-surface-white rounded-xlarge shadow-3 overflow-hidden flex flex-col items-start transition-all duration-300 transform",
          currentWidth
        )}
      >
        {/* Header Section */}
        <div className="flex flex-col gap-6 p-9 pb-0 w-full">
          <div className="flex justify-between items-start w-full">
            <h3 className="text-title-m-b text-text-bolder leading-[1.5]">{title}</h3>
            <button onClick={onClose} className="p-1 hover:bg-surface-gray rounded-small transition-colors">
              <Icon name="close" size={24} className="text-icon-basic" />
            </button>
          </div>
          {subText && type !== 'auth' && (
            <p className="text-body-m-r text-text-basic leading-[1.5]">{subText}</p>
          )}
        </div>

        {/* Content Section */}
        <div className={classNames(
          "p-9 w-full",
          type === '2columns' && "grid grid-cols-2 gap-5"
        )}>
          {renderContent()}
        </div>

        {/* Footer Section */}
        <div className="px-9 py-8 flex justify-end gap-5 w-full bg-surface-white">
          {footer || (
            <>
              <ButtonTxt className="min-w-64" type="secondary" label="취소" onClick={onClose} />
              <ButtonTxt className="min-w-64" type="primary" label="확인" onClick={onClose} />
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
