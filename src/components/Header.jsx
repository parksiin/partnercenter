import React, { useState } from 'react';
import classNames from 'classnames';
import Logo from './Logo';
import Profile from './Profile';
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
      'bg-surface-gray shadow-1 flex h-9 w-[100%] items-start justify-between px-9 py-1 relative z-50 select-none box-border',
      className
    )}>
      {/* Left Area: Logo & Service Title */}
      <div className="flex gap-3 items-end h-[56px] pb-6 box-border">
        <Logo />
        <span className="text-text-primary text-label-s-b font-sans">
          파트너센터
        </span>
      </div>

      {/* Right Area: Session Timer & User Profile */}
      <div className="flex gap-5 h-[56px] items-center">
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
            <Profile
              username={username}
              onLogout={() => {
                if (onLogout) onLogout();
                setIsDropdownOpen(false);
              }}
              className="absolute right-0 mt-2 z-50 animate-fadeIn"
            />
          )}
        </div>
      </div>
    </header>
  );
}
