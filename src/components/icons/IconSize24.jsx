import React from 'react';

export function IconSize24({ size = 24, className, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.1" d="M24 24H0V0H24V24ZM2 2V22H22V2H2Z" fill="currentColor"/>
    </svg>
  );
}
