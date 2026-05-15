import React from 'react';

export function IconCheck({ size = 24, className, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_92_36180)">
        <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_92_36180">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
