---
title: Toast
---

## Toast 提示

Demo:

```tsx
import React, { useState } from 'react';
import { XToast, XButton, XWhiteSpace, XIcon } from 'x-design-mobile';
export default () => {
  return (
    <>
      <XButton
        onClick={() => {
          XToast.show({
            content: '3秒自动关闭',
          });
        }}
      >
        开启
      </XButton>
      <XWhiteSpace />
      <XButton
        onClick={() => {
          XToast.show(
            <div className="box">
              <div className="box-text">预约成功</div>
            </div>,
          );
        }}
      >
        自定义内容
      </XButton>
      <XWhiteSpace />
      <XButton
        onClick={() => {
          XToast.show({
            className: 'test',
            content: 'test',
            mountContainer: document.getElementById('test-div'),
            afterClose: () => {
              console.log('Toast已关闭');
            },
          });
        }}
      >
        自定义挂载节点
      </XButton>
    </>
  );
};
```

### 代码演示

<!-- DEMO -->

### API

#### Toast Props

| 属性           | 说明                               | 类型        | 默认值            |
| -------------- | ---------------------------------- | ----------- | ----------------- |
| visible        | 是否展示                           | boolean     | false             |
| content        | 显示的内容                         | ReactNode   | -                 |
| stayTime       | 自动关闭前停留的时间（单位：毫秒） | number      | 3000              |
| onClose        | Toast 隐藏后的回调函数             | () => void  | -                 |
| mountContainer | 指定 Toast 挂载的 HTML 节点        | HTMLElement | () => HTMLElement | document.body |
