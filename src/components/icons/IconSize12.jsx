import React from 'react';

export function IconSize12({ size = 12, className, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.1" d="M12 12H0V0H12V12ZM1 1V11H11V1H1Z" fill="currentColor"/>
    </svg>
  );
}
