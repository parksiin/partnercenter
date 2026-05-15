import React from 'react';
import classNames from 'classnames';
import LnbAtomic from './LnbAtomic';

/**
 * LNB (Left Navigation Bar) 컴포넌트
 * @param {string} activeType - 현재 활성화된 메뉴 타입 (01~05)
 * @param {function} onMenuClick - 메뉴 클릭 시 핸들러
 */
const Lnb = ({
  className,
  activeType = "01",
  onMenuClick,
}) => {
  const menuItems = [
    { type: "01", id: "dashboard" },
    { type: "02", id: "register" },
    { type: "03", id: "status" },
    { type: "04", id: "manager" },
    { type: "05", id: "notice" },
  ];

  return (
    <nav
      className={classNames(
        "bg-surface-white w-[168px] flex flex-col pt-6 min-h-screen",
        className
      )}
    >
      <div className="flex flex-col">
        {menuItems.map((item) => (
          <LnbAtomic
            key={item.type}
            type={item.type}
            state={item.type === activeType ? "selected" : "default"}
            onClick={() => onMenuClick?.(item.type)}
            // 호버는 CSS로 처리하거나 state 관리를 통해 처리 가능하지만, 
            // 현재 구조에서는 LnbAtomic 내부의 state prop을 통해 전달받습니다.
            // 데모용으로 마우스 엔터/리브 시 상태 변경 로직은 사용하는 쪽(App.jsx)에서 처리하도록 열어둡니다.
          />
        ))}
      </div>
    </nav>
  );
};

export default Lnb;
