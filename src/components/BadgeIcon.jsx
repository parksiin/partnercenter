import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';

export default function BadgeIcon({ className, type = 'pin' }) {
  const isNew = type === 'new';

  return (
    <div 
      className={classNames(
        'relative shrink-0 w-[24px] h-[24px] flex items-center justify-center', 
        !isNew && 'bg-element-secondary-lighter rounded-xsmall',
        className
      )}
    >
      {type === 'pin' && <Icon name="pin" className="text-icon-secondary" size={16} />}
      {isNew && <Icon name="new" className="text-icon-point" size={16} />}
    </div>
  );
}

BadgeIcon.displayName = 'BadgeIcon';
