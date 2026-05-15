# Design Tokens (For AI Coding Agent)

이 문서는 Antigravity가 Tailwind CSS 등 코드로 변환할 때 사용할 수 있도록 구조화된 디자인 토큰입니다.

## 1. Primitive Tokens (원시 토큰)

절대적인 물리적 값(Hex, px 등)이 정의된 기본 토큰입니다.

### 1.1 Color Palette

#### Brand Colors
| Token Name (Tailwind Class) | Value (HEX) |
| :--- | :--- |
| `color-primary-50` | `#f0fdf4ff` |
| `color-primary-100` | `#dcfce7ff` |
| `color-primary-200` | `#bbf7d0ff` |
| `color-primary-300` | `#87eeacff` |
| `color-primary-400` | `#4bdd80ff` |
| `color-primary-500` | `#22bf5cff` |
| `color-primary-600` | `#17a24aff` |
| `color-primary-700` | `#167f3dff` |
| `color-primary-800` | `#166534ff` |
| `color-primary-900` | `#14532dff` |
| `color-primary-950` | `#052e16ff` |
| `color-secondary-50` | `#e9faffff` |
| `color-secondary-100` | `#cef3ffff` |
| `color-secondary-200` | `#a7ebffff` |
| `color-secondary-300` | `#6be3ffff` |
| `color-secondary-400` | `#26ceffff` |
| `color-secondary-500` | `#00a8ffff` |
| `color-secondary-600` | `#007effff` |
| `color-secondary-700` | `#0063ffff` |
| `color-secondary-800` | `#0055e6ff` |
| `color-secondary-900` | `#004db3ff` |
| `color-secondary-950` | `#003577ff` |

#### Neutral Colors
| Token Name (Tailwind Class) | Value (HEX) |
| :--- | :--- |
| `color-gray-0` | `#ffffffff` |
| `color-gray-50` | `#fafafaff` |
| `color-gray-100` | `#f4f4f5ff` |
| `color-gray-200` | `#e4e4e7ff` |
| `color-gray-300` | `#d4d4d8ff` |
| `color-gray-400` | `#9f9fa9ff` |
| `color-gray-500` | `#71717bff` |
| `color-gray-600` | `#52525cff` |
| `color-gray-700` | `#3f3f46ff` |
| `color-gray-800` | `#27272aff` |
| `color-gray-900` | `#18181bff` |
| `color-gray-950` | `#09090bff` |
| `color-gray-1000` | `#000000ff` |
| `color-alpha-black100` | `#000000ff` |
| `color-alpha-black75` | `#000000bf` |
| `color-alpha-black50` | `#00000080` |
| `color-alpha-black25` | `#00000040` |
| `color-alpha-black10` | `#0000001a` |
| `color-alpha-black0` | `#00000000` |
| `color-alpha-white100` | `#ffffffff` |
| `color-alpha-white75` | `#ffffffbf` |
| `color-alpha-white50` | `#ffffff80` |
| `color-alpha-white25` | `#ffffff40` |
| `color-alpha-white10` | `#ffffff1a` |
| `color-alpha-white0` | `#ffffff00` |

#### System Colors
| Token Name (Tailwind Class) | Value (HEX) |
| :--- | :--- |
| `color-red-50` | `#fff1f2ff` |
| `color-red-100` | `#ffe4e6ff` |
| `color-red-200` | `#ffccd3ff` |
| `color-red-300` | `#ffa1adff` |
| `color-red-400` | `#ff637eff` |
| `color-red-500` | `#ff2056ff` |
| `color-red-600` | `#ec003fff` |
| `color-red-700` | `#c70036ff` |
| `color-red-800` | `#a50036ff` |
| `color-red-900` | `#8b0836ff` |
| `color-red-950` | `#4d0218ff` |
| `color-yellow-50` | `#fffbebff` |
| `color-yellow-100` | `#fef3c6ff` |
| `color-yellow-200` | `#fee685ff` |
| `color-yellow-300` | `#ffd230ff` |
| `color-yellow-400` | `#ffb900ff` |
| `color-yellow-500` | `#fe9a00ff` |
| `color-yellow-600` | `#e17100ff` |
| `color-yellow-700` | `#bb4d00ff` |
| `color-yellow-800` | `#973c00ff` |
| `color-yellow-900` | `#7b3306ff` |
| `color-yellow-950` | `#461901ff` |
| `color-green-50` | `#ecfdf5ff` |
| `color-green-100` | `#d0fae5ff` |
| `color-green-200` | `#a4f4cfff` |
| `color-green-300` | `#5ee9b5ff` |
| `color-green-400` | `#00d492ff` |
| `color-green-500` | `#00bc7dff` |
| `color-green-600` | `#009966ff` |
| `color-green-700` | `#007a55ff` |
| `color-green-800` | `#006045ff` |
| `color-green-900` | `#004f3bff` |
| `color-green-950` | `#002c22ff` |
| `color-blue-50` | `#eff6ffff` |
| `color-blue-100` | `#dbeafeff` |
| `color-blue-200` | `#bedbffff` |
| `color-blue-300` | `#8ec5ffff` |
| `color-blue-400` | `#51a2ffff` |
| `color-blue-500` | `#2b7fffff` |
| `color-blue-600` | `#155dfcff` |
| `color-blue-700` | `#1447e6ff` |
| `color-blue-800` | `#193cb8ff` |
| `color-blue-900` | `#1c398eff` |
| `color-blue-950` | `#162456ff` |

### 1.2 Spacing & Sizing Primitives

| Token Name | Value (px) |
| :--- | :--- |
| `number-0` | `0px` |
| `number-1` | `1px` |
| `number-2` | `2px` |
| `number-4` | `4px` |
| `number-6` | `6px` |
| `number-8` | `8px` |
| `number-10` | `10px` |
| `number-12` | `12px` |
| `number-14` | `14px` |
| `number-16` | `16px` |
| `number-18` | `18px` |
| `number-20` | `20px` |
| `number-24` | `24px` |
| `number-28` | `28px` |
| `number-32` | `32px` |
| `number-36` | `36px` |
| `number-40` | `40px` |
| `number-44` | `44px` |
| `number-48` | `48px` |
| `number-56` | `56px` |
| `number-64` | `64px` |
| `number-72` | `72px` |
| `number-80` | `80px` |
| `number-96` | `96px` |
| `number-max` | `1000px` |

## 2. Typography (타이포그래피)

글꼴, 크기, 굵기, 줄간격에 대한 정의입니다. (보통 Semantic 레벨에서 유틸리티 클래스로 매핑됩니다.)

| Category | Token Name | Font Family | Size (px) | Weight | Line Height (px) | Letter Spacing (px) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| title | `text-title-xxlarge b` | Pretendard | 32px | 700 | 48px | 0px |
| title | `text-title-large b` | Pretendard | 24px | 700 | 36px | 0px |
| title | `text-title-medium b` | Pretendard | 20px | 700 | 30px | 0px |
| title | `text-title-small b` | Pretendard | 18px | 700 | 27px | 0px |
| body | `text-body-large r` | Pretendard | 18px | 400 | 27px | 0px |
| body | `text-body-large m` | Pretendard | 18px | 500 | 27px | 0px |
| body | `text-body-large b` | Pretendard | 18px | 700 | 27px | 0px |
| body | `text-body-medium r` | Pretendard | 16px | 400 | 24px | 0px |
| body | `text-body-medium m` | Pretendard | 16px | 500 | 24px | 0px |
| body | `text-body-medium b` | Pretendard | 16px | 700 | 24px | 0px |
| body | `text-body-small r` | Pretendard | 14px | 400 | 21px | 0px |
| body | `text-body-small m` | Pretendard | 14px | 500 | 21px | 0px |
| body | `text-body-small b` | Pretendard | 14px | 700 | 21px | 0px |
| label | `text-label-xlarge m` | Pretendard | 20px | 500 | 20px | 0px |
| label | `text-label-xlarge b` | Pretendard | 20px | 700 | 20px | 0px |
| label | `text-label-large m` | Pretendard | 18px | 500 | 18px | 0px |
| label | `text-label-large b` | Pretendard | 18px | 700 | 18px | 0px |
| label | `text-label-medium m` | Pretendard | 16px | 500 | 16px | 0px |
| label | `text-label-medium b` | Pretendard | 16px | 700 | 16px | 0px |
| label | `text-label-small m` | Pretendard | 14px | 500 | 14px | 0px |
| label | `text-label-small b` | Pretendard | 14px | 700 | 14px | 0px |

## 3. Semantic Tokens (의미론적 토큰)

원시 토큰을 참조하여 목적에 맞게 매핑된 토큰입니다. Tailwind CSS 클래스로 직접 사용하기 적합합니다.

### 3.1 Semantic Colors

| Category | Token Name | Reference Primitive | Final HEX |
| :--- | :--- | :--- | :--- |
| text | `text-primary` | `primitive.color.primary.600` | `#17a24aff` |
| text | `text-secondary` | `primitive.color.secondary.700` | `#0063ffff` |
| text | `text-danger` | `primitive.color.red.600` | `#ec003fff` |
| text | `text-infomation` | `primitive.color.blue.600` | `#155dfcff` |
| text | `text-success` | `primitive.color.green.600` | `#009966ff` |
| text | `text-basic` | `primitive.color.gray.900` | `#18181bff` |
| text | `text-warning` | `primitive.color.yellow.600` | `#e17100ff` |
| text | `text-disabled` | `primitive.color.gray.400` | `#9f9fa9ff` |
| text | `text-disabled-on` | `primitive.color.gray.500` | `#71717bff` |
| text | `text-basic-inverted` | `primitive.color.gray.0` | `#ffffffff` |
| text | `text-bolder` | `primitive.color.gray.950` | `#09090bff` |
| text | `text-point` | `primitive.color.primary.500` | `#22bf5cff` |
| text | `text-subtle` | `primitive.color.gray.700` | `#3f3f46ff` |
| text | `text-disabled-inverted` | `primitive.color.gray.700` | `#3f3f46ff` |
| surface | `surface-white` | `primitive.color.gray.0` | `#ffffffff` |
| surface | `surface-inverted` | `primitive.color.gray.950` | `#09090bff` |
| surface | `surface-gray` | `primitive.color.gray.50` | `#fafafaff` |
| border | `border-gray` | `primitive.color.gray.500` | `#71717bff` |
| border | `border-primary` | `primitive.color.primary.500` | `#22bf5cff` |
| border | `border-primary-light` | `primitive.color.primary.100` | `#dcfce7ff` |
| border | `border-secondary` | `primitive.color.secondary.500` | `#00a8ffff` |
| border | `border-secondary-light` | `primitive.color.secondary.100` | `#cef3ffff` |
| border | `border-danger` | `primitive.color.red.500` | `#ff2056ff` |
| border | `border-danger-light` | `primitive.color.red.100` | `#ffe4e6ff` |
| border | `border-warning` | `primitive.color.yellow.500` | `#fe9a00ff` |
| border | `border-warning-light` | `primitive.color.yellow.100` | `#fef3c6ff` |
| border | `border-success` | `primitive.color.green.500` | `#00bc7dff` |
| border | `border-success-light` | `primitive.color.green.100` | `#d0fae5ff` |
| border | `border-infomation` | `primitive.color.blue.500` | `#2b7fffff` |
| border | `border-infomation-light` | `primitive.color.blue.100` | `#dbeafeff` |
| border | `border-inverted` | `primitive.color.gray.0` | `#ffffffff` |
| border | `border-disabled` | `primitive.color.gray.300` | `#d4d4d8ff` |
| border | `border-gray-light` | `primitive.color.gray.300` | `#d4d4d8ff` |
| border | `border-gray-dark` | `primitive.color.gray.700` | `#3f3f46ff` |
| border | `border-primary-dark` | `primitive.color.primary.600` | `#17a24aff` |
| icon | `icon-basic` | `primitive.color.gray.900` | `#18181bff` |
| icon | `icon-inverted` | `primitive.color.gray.0` | `#ffffffff` |
| icon | `icon-danger` | `primitive.color.red.500` | `#ff2056ff` |
| icon | `icon-infomation` | `primitive.color.blue.500` | `#2b7fffff` |
| icon | `icon-success` | `primitive.color.green.500` | `#00bc7dff` |
| icon | `icon-disabled` | `primitive.color.gray.400` | `#9f9fa9ff` |
| icon | `icon-primary` | `primitive.color.primary.600` | `#17a24aff` |
| icon | `icon-secondary` | `primitive.color.secondary.600` | `#007effff` |
| icon | `icon-warning` | `primitive.color.yellow.500` | `#fe9a00ff` |
| icon | `icon-disabled-on` | `primitive.color.gray.500` | `#71717bff` |
| icon | `icon-point` | `primitive.color.red.500` | `#ff2056ff` |
| icon | `icon-disabled-inverted` | `primitive.color.gray.700` | `#3f3f46ff` |
| background | `background-white` | `primitive.color.gray.0` | `#ffffffff` |
| background | `background-gray` | `primitive.color.gray.100` | `#f4f4f5ff` |
| background | `background-dim` | `primitive.color.alpha.black50` | `#00000080` |
| background | `background-inverted` | `primitive.color.gray.0` | `#ffffffff` |
| background | `background-dim-inverted` | `primitive.color.alpha.white50` | `#ffffff80` |
| button | `button-primary-fill` | `primitive.color.primary.500` | `#22bf5cff` |
| button | `button-primary-fill-hover` | `primitive.color.primary.600` | `#17a24aff` |
| button | `button-primary-fill-pressed` | `primitive.color.primary.700` | `#167f3dff` |
| button | `button-secondary-fill` | `primitive.color.primary.50` | `#f0fdf4ff` |
| button | `button-secondary-fill-hover` | `primitive.color.primary.100` | `#dcfce7ff` |
| button | `button-secondary-fill-pressed` | `primitive.color.primary.200` | `#bbf7d0ff` |
| button | `button-secondary-border` | `primitive.color.primary.500` | `#22bf5cff` |
| button | `button-tertiary-fill` | `primitive.color.gray.0` | `#ffffffff` |
| button | `button-tertiary-fill-hover` | `primitive.color.gray.100` | `#f4f4f5ff` |
| button | `button-tertiary-fill-pressed` | `primitive.color.gray.200` | `#e4e4e7ff` |
| button | `button-tertiary-fill-border` | `primitive.color.gray.500` | `#71717bff` |
| button | `button-text-fill` | `primitive.color.alpha.white0` | `#ffffff00` |
| button | `button-text-fill-hover` | `primitive.color.gray.100` | `#f4f4f5ff` |
| button | `button-text-fill-pressed` | `primitive.color.gray.200` | `#e4e4e7ff` |
| button | `button-disabled-fill` | `primitive.color.gray.300` | `#d4d4d8ff` |
| button | `button-text-inverted-fill` | `primitive.color.alpha.black0` | `#00000000` |
| button | `button-text-inverted-hover` | `primitive.color.gray.900` | `#18181bff` |
| button | `button-text-inverted-pressed` | `primitive.color.gray.800` | `#27272aff` |
| button | `button-text-inverted-disabled` | `primitive.color.alpha.black0` | `#00000000` |
| button | `button-text-disabled` | `primitive.color.alpha.white0` | `#ffffff00` |
| input | `input-surface` | `primitive.color.gray.0` | `#ffffffff` |
| input | `input-border` | `primitive.color.gray.500` | `#71717bff` |
| input | `input-border-active` | `primitive.color.blue.500` | `#2b7fffff` |
| input | `input-border-error` | `primitive.color.red.500` | `#ff2056ff` |
| input | `input-surface-disabled` | `primitive.color.gray.100` | `#f4f4f5ff` |
| input | `input-border-disabled` | `primitive.color.gray.300` | `#d4d4d8ff` |
| action | `action-primary` | `primitive.color.alpha.white0` | `#ffffff00` |
| action | `action-white` | `primitive.color.gray.0` | `#ffffffff` |
| action | `action-primary-hover` | `primitive.color.primary.50` | `#f0fdf4ff` |
| action | `action-primary-pressed` | `primitive.color.primary.100` | `#dcfce7ff` |
| action | `action-disabled` | `primitive.color.alpha.black50` | `#00000080` |
| action | `action-secondary-hover` | `primitive.color.alpha.black10` | `#0000001a` |
| action | `action-secondary` | `primitive.color.alpha.black0` | `#00000000` |
| action | `action-secondary-pressed` | `primitive.color.alpha.black25` | `#00000040` |
| action | `action-selected` | `primitive.color.primary.50` | `#f0fdf4ff` |
| element | `element-white` | `primitive.color.gray.0` | `#ffffffff` |
| element | `element-primary` | `primitive.color.primary.500` | `#22bf5cff` |
| element | `element-secondary` | `primitive.color.secondary.600` | `#007effff` |
| element | `element-primary-lighter` | `primitive.color.primary.50` | `#f0fdf4ff` |
| element | `element-secondary-lighter` | `primitive.color.secondary.50` | `#e9faffff` |
| element | `element-danger` | `primitive.color.red.600` | `#ec003fff` |
| element | `element-danger-lighter` | `primitive.color.red.50` | `#fff1f2ff` |
| element | `element-warning` | `primitive.color.yellow.600` | `#e17100ff` |
| element | `element-warning-lighter` | `primitive.color.yellow.50` | `#fffbebff` |
| element | `element-gray` | `primitive.color.gray.600` | `#52525cff` |
| element | `element-gray-lighter` | `primitive.color.gray.100` | `#f4f4f5ff` |
| element | `element-success` | `primitive.color.green.600` | `#009966ff` |
| element | `element-success-lighter` | `primitive.color.green.50` | `#ecfdf5ff` |
| element | `element-infomation` | `primitive.color.blue.600` | `#155dfcff` |
| element | `element-infomation-lighter` | `primitive.color.blue.50` | `#eff6ffff` |
| element | `element-disabled` | `primitive.color.gray.300` | `#d4d4d8ff` |
| shadow | `shadow-shadow1` | `` | `#0000000d` |
| shadow | `shadow-shadow2` | `` | `#00000014` |
| shadow | `shadow-shadow3` | `` | `#0000001f` |

### 3.2 Spacing (Padding & Gap & Margin)

| Type | Token Name | Reference Primitive | Final Value (px) |
| :--- | :--- | :--- | :--- |
| gap | `gap-1` | `primitive.number.2` | `2px` |
| gap | `gap-2` | `primitive.number.4` | `4px` |
| gap | `gap-3` | `primitive.number.8` | `8px` |
| gap | `gap-4` | `primitive.number.12` | `12px` |
| gap | `gap-5` | `primitive.number.16` | `16px` |
| gap | `gap-6` | `primitive.number.20` | `20px` |
| gap | `gap-7` | `primitive.number.24` | `24px` |
| gap | `gap-8` | `primitive.number.32` | `32px` |
| gap | `gap-9` | `primitive.number.40` | `40px` |
| gap | `gap-10` | `primitive.number.48` | `48px` |
| gap | `gap-11` | `primitive.number.64` | `64px` |
| gap | `gap-12` | `primitive.number.80` | `80px` |
| padding | `padding-1` | `primitive.number.2` | `2px` |
| padding | `padding-2` | `primitive.number.4` | `4px` |
| padding | `padding-3` | `primitive.number.8` | `8px` |
| padding | `padding-4` | `primitive.number.10` | `10px` |
| padding | `padding-5` | `primitive.number.12` | `12px` |
| padding | `padding-6` | `primitive.number.16` | `16px` |
| padding | `padding-7` | `primitive.number.20` | `20px` |
| padding | `padding-8` | `primitive.number.24` | `24px` |
| padding | `padding-9` | `primitive.number.32` | `32px` |
| padding | `padding-10` | `primitive.number.40` | `40px` |

### 3.3 Component Sizing (Height)

| Token Name | Reference Primitive | Final Value (px) |
| :--- | :--- | :--- |
| `h-1` | `primitive.number.8` | `8px` |
| `h-2` | `primitive.number.16` | `16px` |
| `h-3` | `primitive.number.20` | `20px` |
| `h-4` | `primitive.number.24` | `24px` |
| `h-5` | `primitive.number.32` | `32px` |
| `h-6` | `primitive.number.40` | `40px` |
| `h-7` | `primitive.number.48` | `48px` |
| `h-8` | `primitive.number.56` | `56px` |
| `h-9` | `primitive.number.64` | `64px` |
| `h-10` | `primitive.number.72` | `72px` |
| `h-11` | `primitive.number.80` | `80px` |

### 3.4 Border Radius (둥글기)

| Token Name       | Reference Primitive    | Final Value (px) |
| :--------------- | :--------------------- | :--------------- |
| `rounded-xsmall` | `primitive.number.4`   | `4px`            |
| `rounded-small`  | `primitive.number.6`   | `6px`            |
| `rounded-medium` | `primitive.number.8`   | `8px`            |
| `rounded-large`  | `primitive.number.10`  | `10px`           |
| `rounded-xlarge` | `primitive.number.12`  | `12px`           |
| `rounded-max`    | `primitive.number.max` | `1000px`         |

