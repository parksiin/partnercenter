import React from 'react';
import classNames from 'classnames';
import ButtonTxt from './ButtonTxt';

/**
 * Pagination 컴포넌트
 * @param {number} currentPage - 현재 페이지 번호
 * @param {number} totalPages - 전체 페이지 수
 * @param {function} onPageChange - 페이지 변경 핸들러
 */
export default function Pagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}) {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  /**
   * 페이지 번호 배열 생성 (최대 10개 슬롯)
   */
  const getPageNumbers = () => {
    const totalSlots = 10;
    
    // 전체 페이지가 10개 이하인 경우 모두 노출
    if (totalPages <= totalSlots) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];
    const leftSiblingCount = 3;
    const rightSiblingCount = 3;

    const showLeftDots = currentPage > 5;
    const showRightDots = currentPage < totalPages - 4;

    if (!showLeftDots && showRightDots) {
      // 초반부: [1, 2, 3, 4, 5, 6, 7, 8, '...', totalPages]
      const leftRange = Array.from({ length: 8 }, (_, i) => i + 1);
      return [...leftRange, '...', totalPages];
    }

    if (showLeftDots && !showRightDots) {
      // 후반부: [1, '...', totalPages-7, ... , totalPages]
      const rightRange = Array.from({ length: 8 }, (_, i) => totalPages - 7 + i);
      return [1, '...', ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      // 중간부: [1, '...', c-2, c-1, c, c+1, c+2, c+3, '...', totalPages]
      const middleRange = Array.from({ length: 6 }, (_, i) => currentPage - 2 + i);
      return [1, '...', ...middleRange, '...', totalPages];
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center gap-9 select-none">
      {/* 이전 버튼 */}
      <ButtonTxt
        label="이전"
        size="medium"
        type="secondary"
        showLeftIcon={true}
        leftIcon="arrow-left"
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      />

      {/* 페이지 번호 영역 */}
      <div className="flex items-center gap-5">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <div
                key={`dots-${index}`}
                className="w-5 h-5 flex items-center justify-center text-label-m text-text-disabled"
              >
                ...
              </div>
            );
          }

          const isSelected = page === currentPage;

          return (
            <ButtonTxt
              key={page}
              label={String(page)}
              size="medium"
              type="secondary"
              // 선택된 페이지 스타일 (Figma: bg-button-text-fill-pressed)
              className={classNames(
                "min-w-[32px] flex items-center justify-center",
                isSelected && "!bg-button-text-fill-pressed !text-text-basic"
              )}
              onClick={() => handlePageClick(page)}
            />
          );
        })}
      </div>

      {/* 다음 버튼 */}
      <ButtonTxt
        label="다음"
        size="medium"
        type="secondary"
        showRightIcon={true}
        rightIcon="arrow-right"
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      />
    </div>
  );
}
