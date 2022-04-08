---
title: Noticebar
---

## 通告栏

Demo:

```tsx
import React, { useState } from 'react';
import { XNoticebar, XIcon, XWhiteSpace } from 'x-design-mobile';

export default () => {
  return (
    <>
      <XNoticebar icon={<XIcon type="check" />}>
        这里是文案这里是文案
      </XNoticebar>
      <XWhiteSpace />
      <XNoticebar icon={<XIcon type="check" />} closable theme="danger">
        这里是文案这里是文案
      </XNoticebar>
      <XWhiteSpace />
      <XNoticebar
        icon={<XIcon type="check" />}
        closable
        theme="danger"
        action={<span>不再提示</span>}
      >
        这里是文案这里是文案
      </XNoticebar>
      <XWhiteSpace />
      <XNoticebar icon={<XIcon type="check" />} theme="danger">
        这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案
      </XNoticebar>
    </>
  );
};
```

## API

| 属性        | 说明                                     | 类型         | 默认值  | 必选  |
| ----------- | ---------------------------------------- | ------------ | ------- | ----- |
| theme       | 主题，可选 default, danger               | string       | default | false |
| icon        | 设置图标                                 | ReactNode    |         | false |
| hasArrow    | 是否显示箭头                             | boolean      | -       | false |
| closable    | 是否显示关闭按钮                         | boolean      | -       | false |
| handleClick | 点击后触发的回调函数                     | () => void   | -       | false |
| speed       | 滚动时的速度（单位：px/s）               | number       | 50      | false |
| delay       | 开启滚动功能时前后停留的时间（单位：ms） | number       | 2000    | false |
| action      | 用于替换右边操作的文案                   | ReactElement |         | false |
