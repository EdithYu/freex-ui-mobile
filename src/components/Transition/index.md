---
title: Transition
---

## 过渡动画

Demo:

```tsx
import React, { useState } from 'react';
import { XButton, XWhiteSpace, XPopup } from 'x-design-mobile';

export default () => {
  const [visible, setVisible] = useState(0);
  const style = {
    paddding: '0.5rem',
    borderRadius: '4px',
    backgroundColor: '#fff',
    position: 'relative',
    fontSize: '28px',
    fontWeight: 500,
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: '50px',
    color: '#000',
    pointerEvents: 'all',
    zIndex: 999,
  };

  const arr = [
    'bounce',
    'fly',
    'zoom-in-left',
    'zoom-in-right',
    'zoom-in-top',
    'zoom-in-bottom',
    'fade-top',
    'fade-left',
    'fade-right',
    'fade-bottom',
  ];
  return (
    <>
      {arr.map((item: string, index: number) => {
        return (
          <div>
            <XButton
              type={'ghost'}
              onClick={() => {
                if (visible === index + 1) {
                  setVisible(0);
                } else {
                  setVisible(index + 1);
                }
              }}
            >
              {item}
            </XButton>
            <XPopup
              visible={visible === index + 1}
              transitionType={item}
              onClose={() => {
                setVisible(0);
              }}
            >
              <div style={{ ...style }}>{item}</div>
            </XPopup>
            <XWhiteSpace />
          </div>
        );
      })}
    </>
  );
};
```

## API

| 属性    | 说明         | 类型    | 默认值                | 必选 |
| ------- | ------------ | ------- | --------------------- | ---- |
| visible | 动画元素状态 | boolean | false                 |      |
| type    | 按钮类型     | string  | 'bounce' 参考组件文档 |      |
