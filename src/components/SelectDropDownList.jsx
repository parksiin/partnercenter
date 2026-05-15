import React, { forwardRef } from 'react';
import classNames from 'classnames';

const SelectDropDownList = forwardRef(({ className, dropdownMargin = 'mt-8', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        'flex flex-col items-start w-full overflow-y-auto max-h-60',
        'border border-border-gray rounded-medium bg-surface-white',
        `absolute left-0 right-0 top-full ${dropdownMargin} z-50 shadow-lg`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

SelectDropDownList.displayName = 'SelectDropDownList';

export default SelectDropDownList;
