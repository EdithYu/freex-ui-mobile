---
title: Titlepopup
---

## 按钮

Demo:

```tsx
import React, { useState } from 'react';
import { XTitlePopup, XButton, XWhiteSpace } from 'x-design-mobile';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <XButton
        type={'primary'}
        onClick={() => {
          setVisible(true);
        }}
      >
        标题底部弹出框
      </XButton>
      <XTitlePopup
        title={'标题'}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div>
          <img
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt="loading"
            style={{ width: '100%' }}
          />
        </div>
      </XTitlePopup>
      <XWhiteSpace />
    </>
  );
};
```

## API

| 属性         | 说明         | 类型          | 默认值                                      | 必选  |
| ------------ | ------------ | ------------- | ------------------------------------------- | ----- |
| prefixCls    | 样式前缀     | string        | x-drop-menu                                 | false |
| className    | 样式类名     | string        |                                             | false |
| data         | 数据源       | array         |                                             | true  |
| defaultValue | 默认值       | array<string> | []                                          | false |
| disabled     | 禁用         | boolean       | false                                       | false |
| rowNode      | 自定义选择项 | function      | ({text: '',value:''}) => React.ReactElement | false |
| onChange     | 点击回调     | function      | ({text: '',value:''}) => void               | false |
