import React from 'react';

export function IconSuccess({ size = 24, className, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="12" fill="#00BC7D"/>
      <path d="M10.04 16.8114L5.47998 12.2514L6.61998 11.1114L10.04 14.5314L17.38 7.19141L18.52 8.33141L10.04 16.8114Z" fill="white"/>
    </svg>
  );
}
