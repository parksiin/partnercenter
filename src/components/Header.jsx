import React, { useState } from 'react';
import classNames from 'classnames';
import Logo from './Logo';
import Icon from './Icon';

export default function Header({
  className,
  username = '김다솜',
  sessionTime = '00:59:57',
  onLogout,
  onMyPage,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={classNames(
      'bg-surface-gray shadow-1 flex h-9 w-[100%] items-center justify-between px-9 py-2 relative z-50 select-none box-border',
      className
    )}>
      {/* Left Area: Logo & Service Title */}
      <div className="flex gap-3 items-end">
        <Logo />
        <span className="text-text-primary text-body-s-b font-sans pb-[2px] leading-none">
          파트너센터
        </span>
      </div>

      {/* Right Area: Session Timer & User Profile */}
      <div className="flex gap-5 h-full items-center">
        {/* Session Time Tracker */}
        <div className="flex gap-3 h-[40px] items-center px-6 py-3 rounded-max bg-transparent">
          <Icon name="time" size={20} className="text-icon-basic" />
          <span className="text-label-m-m text-text-subtle">
            {sessionTime}
          </span>
        </div>

        {/* Profile Dropdown Trigger */}
        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="bg-surface-white border border-border-gray-light flex items-center justify-between px-6 py-3 rounded-max w-[200px] h-[40px] cursor-pointer outline-none transition-all duration-200 hover:border-text-primary focus:border-text-primary active:scale-[0.98]"
          >
            <span className="text-label-m-m text-text-basic truncate pr-2">
              <strong className="font-bold">{username}</strong> 님
            </span>
            <Icon
              name="arrow-down"
              size={24}
              className={classNames(
                'text-icon-basic transition-transform duration-200',
                isDropdownOpen && 'rotate-180'
              )}
            />
          </button>

          {/* Profile Dropdown Options */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[200px] bg-surface-white border border-border-gray-light rounded-medium shadow-3 py-2 z-50 overflow-hidden animate-fadeIn">
              <button
                type="button"
                onClick={() => {
                  if (onMyPage) onMyPage();
                  setIsDropdownOpen(false);
                }}
                className="flex w-full items-center gap-3 px-6 py-3 text-label-m-m text-text-basic hover:bg-surface-gray transition-colors text-left cursor-pointer"
              >
                <Icon name="service" size={16} className="text-icon-basic" />
                마이페이지
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onLogout) onLogout();
                  setIsDropdownOpen(false);
                }}
                className="flex w-full items-center gap-3 px-6 py-3 text-label-m-m text-text-danger hover:bg-surface-gray transition-colors text-left cursor-pointer border-t border-border-gray-light"
              >
                <Icon name="delete" size={16} className="text-icon-danger" />
                로그아웃
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
