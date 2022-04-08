---
title: Navbar
---

## 导航栏

Demo:

```tsx
import React from 'react';
import { XNavBar, XWhiteSpace, XIcon } from 'x-design-mobile';

export default () => {
  const rightFunction = () => {
    alert('保存');
  };
  const closeFunction = () => {
    alert('关闭');
  };
  const leftFunction = () => {
    alert('返回');
  };
  return (
    <>
      <XNavBar
        title={'标题'}
        rightContent={'保存'}
        closeable
        onRightFunc={rightFunction}
        onCloseFunc={closeFunction}
        onLeftFunc={leftFunction}
      />
      <XWhiteSpace />
      <XNavBar title={'标题'} rightContent={'保存'} />
      <XWhiteSpace />
      <XNavBar title={'标题'} />
      <XWhiteSpace />
      <XNavBar title={'标题'} mode="dark" closeable />
    </>
  );
};
```

## API

| 属性         | 说明             | 类型                 | 默认值  | 必选  |
| ------------ | ---------------- | -------------------- | ------- | ----- |
| prefixCls    | 样式前缀         | string               |         | false |
| title        | 标题             | string               |         | false |
| rightContent | 右侧文字         | string \| React.Node |         |       |
| mode         | 背景颜色         | 'lignt' \| 'dark'    | 'light' | false |
| closeable    | 是否显示 X       | boolean              | false   | false |
| height       | 距离顶部高度     | number               | 0       | false |
| onCloseFunc  | 关闭回调事件     | () => void           |         | false |
| onRightFunc  | 右侧点击回调事件 | () => void           |         | false |
| onLeftFunc   | 左侧点击回调事件 | () => void           |         | false |
