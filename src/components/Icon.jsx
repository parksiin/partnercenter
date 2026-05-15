import React, { forwardRef } from 'react';
import * as Icons from './icons';

const iconMap = {
  'arrow-down': Icons.IconArrowDown,
  'arrow-left': Icons.IconArrowLeft,
  'arrow-right': Icons.IconArrowRight,
  'arrow-up': Icons.IconArrowUp,
  'blank': Icons.IconBlank,
  'calendar': Icons.IconCalendar,
  'check': Icons.IconCheck,
  'delete': Icons.IconDelete,
  'error': Icons.IconError,
  'success': Icons.IconSuccess,
  'info': Icons.IconInfo,
  'search': Icons.IconSearch,
  'reset': Icons.IconReset,
  'excel-lined': Icons.IconExcelLined,
  'excel': Icons.IconExcel,
  'eye-hide': Icons.IconEyeHide,
  'eye-show': Icons.IconEyeShow,
  'file': Icons.IconFile,
  'save': Icons.IconSave,
  'lnb-01': Icons.IconLnb01,
  'lnb-02': Icons.IconLnb02,
  'lnb-03': Icons.IconLnb03,
  'lnb-04': Icons.IconLnb04,
  'lnb-05': Icons.IconLnb05,
  'new': Icons.IconNew,
  'pin': Icons.IconPin,
  'service': Icons.IconService,
  'time': Icons.IconTime
};

const validSizes = [12, 16, 20, 24];

const Icon = forwardRef(({ name, size = 24, className, ...props }, ref) => {
  const SvgIcon = iconMap[name];
  
  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  // Force size to be one of the allowed sizes, default to size 24 if invalid
  const finalSize = validSizes.includes(size) ? size : 24;

  return <SvgIcon ref={ref} size={finalSize} className={className} {...props} />;
});

Icon.displayName = 'Icon';
export default Icon;
