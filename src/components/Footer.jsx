import React from 'react';
import classNames from 'classnames';
import Logo from './Logo';
import ButtonTxt from './ButtonTxt';

export default function Footer({ className }) {
  return (
    <footer className={classNames(
      "bg-surface-white border-t border-border-gray-light flex h-8 w-full items-center justify-between px-8 box-border select-none",
      className
    )} data-name="footer">
      {/* Left side: Sub-Logo and Privacy Policy Button */}
      <div className="flex gap-7 items-center" data-name="footer-left">
        <Logo type="sub" />
        <ButtonTxt
          label="개인정보처리방침"
          size="small"
          type="secondary"
          className="font-sans font-medium"
        />
      </div>

      {/* Right side: Copyright Text */}
      <p className="text-text-disabled text-body-s-m font-sans leading-none" data-name="footer-right">
        KYOBO DASOMCARE All rights reserved.
      </p>
    </footer>
  );
}
