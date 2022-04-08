---
title: Popup
---

## 弹出框

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
    height: '100%',
  };

  const arr = [
    {
      title: '居中弹出',
      position: 'center',
      transitionType: 'bounce',
    },
    {
      title: '底部弹出',
      position: 'bottom',
      transitionType: 'zoom-in-bottom',
    },
    {
      title: '顶部弹出',
      position: 'top',
      transitionType: 'zoom-in-top',
    },
    {
      title: '左侧弹出',
      position: 'left',
      transitionType: 'fade-left',
    },
    {
      title: '右侧弹出',
      position: 'right',
      transitionType: 'fade-right',
    },
    {
      title: '无遮罩层',
      position: 'center',
      transitionType: 'bounce',
      hasMask: false,
    },
    {
      title: '禁用遮罩层点击',
      position: 'center',
      transitionType: 'bounce',
      maskClosable: false,
    },
  ];
  return (
    <>
      {arr.map((item: string, index: number) => {
        return (
          <div>
            <XButton
              type={'primary'}
              onClick={() => {
                if (visible === index + 1) {
                  setVisible(0);
                } else {
                  setVisible(index + 1);
                }
              }}
            >
              {item.title}
            </XButton>
            <XPopup
              visible={visible === index + 1}
              position={item.position}
              transitionType={item.transitionType}
              hasMask={item.hasMask}
              maskClosable={item.maskClosable}
              onClose={() => {
                setVisible(0);
              }}
            >
              <div style={{ ...style }}>{item.title}</div>
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

| 属性           | 说明                     | 类型    | 默认值   | 必选                                       |
| -------------- | ------------------------ | ------- | -------- | ------------------------------------------ |
| visible        | 动画元素状态             | boolean | false    |                                            |
| transitionType | 弹出层过渡动画           | String  | 'bounce' | 参考文档                                   |
| hasMask        | 是否有蒙层               | Boolean | `true`   | -                                          |
| maskClosable   | 点击蒙层是否可关闭弹出层 | Boolean | `true`   | -                                          |
| position       | 弹出层位置               | String  | `center` | `center`, `top`, `bottom`, `left`, `right` |
| onClose        | 弹出层是否可见           | Boolean | `false`  | -                                          |
