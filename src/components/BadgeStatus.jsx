import React from 'react';
import classNames from 'classnames';

/**
 * BadgeStatus component for displaying approval/process status.
 *
 * @param {string} state - "pending" | "done" | "error"
 * @param {string} [className] - Additional class names.
 */
export default function BadgeStatus({ className, state = 'error' }) {
  const statusConfig = {
    pending: {
      label: '승인대기',
      bg: 'bg-element-gray-lighter',
      text: 'text-text-subtle'
    },
    done: {
      label: '승인완료',
      bg: 'bg-element-information-lighter',
      text: 'text-text-information'
    },
    error: {
      label: '처리오류',
      bg: 'bg-element-danger-lighter',
      text: 'text-text-danger'
    }
  };

  const currentStatus = statusConfig[state] || statusConfig.error;

  return (
    <div
      className={classNames(
        'flex items-center justify-center min-w-[64px] py-3 px-3 rounded-xsmall shrink-0',
        currentStatus.bg,
        className
      )}
    >
      <span className={classNames(
        'text-label-s font-bold leading-none whitespace-nowrap',
        currentStatus.text
      )}>
        {currentStatus.label}
      </span>
    </div>
  );
}

BadgeStatus.displayName = 'BadgeStatus';
