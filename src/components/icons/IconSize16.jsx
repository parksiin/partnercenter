import React from 'react';

export function IconSize16({ size = 16, className, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.1" d="M16 16H0V0H16V16ZM1.33301 1.33301V14.667H14.667V1.33301H1.33301Z" fill="currentColor"/>
    </svg>
  );
}
