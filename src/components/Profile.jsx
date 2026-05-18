import React from 'react';
import classNames from 'classnames';

export default function Profile({
  username = '김다솜',
  department = '교보다솜케어 소속',
  onLogout,
  className
}) {
  return (
    <div 
      className={classNames(
        "bg-surface-white border border-border-gray-light flex flex-col items-start min-w-[200px] overflow-hidden rounded-xlarge shadow-3 w-[200px] select-none",
        className
      )}
      data-name="profile"
    >
      {/* Detail Section */}
      <div 
        className="border-b border-border-gray-light flex flex-col gap-3 items-start justify-center px-6 py-8 w-full box-border"
        data-name="detail"
      >
        <p className="text-text-bolder text-label-m-m leading-normal select-none w-full text-left">
          <span className="font-bold">{username}</span>
          <span className="font-normal"> 님</span>
        </p>
        <p className="text-text-subtle text-body-s-r leading-normal select-none">
          {department}
        </p>
      </div>

      {/* Action Button Section */}
      <button
        type="button"
        onClick={onLogout}
        className="w-full px-6 py-6 text-left text-text-basic text-label-m-m hover:bg-surface-gray transition-colors duration-200 cursor-pointer outline-none border-none select-none flex items-center justify-start box-border"
        data-name="btn"
      >
        로그아웃
      </button>
    </div>
  );
}
