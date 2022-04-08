---
title: Button
---

## 按钮

Demo:

```tsx
import React from 'react';
import { XButton, XWhiteSpace } from 'x-design-mobile';

export default () => {
  return (
    <>
      <XButton
        type={'primary'}
        onClick={() => {
          alert('点击事件');
        }}
      >
        全局按钮
      </XButton>
      <XWhiteSpace />
      <XButton type={'primary'} unactivate>
        未激活按钮
      </XButton>
      <XWhiteSpace />
      <XButton type={'primary'} disabled>
        禁用按钮
      </XButton>
      <XWhiteSpace />
      <XButton type={'ghost'}>线性按钮</XButton>
      <XWhiteSpace />
      <XButton type={'ghost'} disabled>
        线性按钮
      </XButton>
    </>
  );
};
```

## API

| 属性       | 说明                         | 类型                 | 默认值    | 必选  |
| ---------- | ---------------------------- | -------------------- | --------- | ----- |
| prefixCls  | 样式前缀                     | string               | x-button  | false |
| className  | 样式类名                     | string               |           | false |
| type       | 按钮类型                     | 'primary' \| 'ghost' | 'primary' | false |
| unactivate | 未激活,只在 primary 类型生效 | boolean              | false     | false |
| disabled   | 禁用                         | boolean              | false     | false |
| onClick    | 点击回调                     | funciton             |           | false |
