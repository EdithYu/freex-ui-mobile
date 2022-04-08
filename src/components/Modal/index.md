---
title: Modal
---

## 弹出框

Demo:

```tsx
import React, { useState } from 'react';
import { XModal, XButton, XWhiteSpace } from 'x-design-mobile';

export default () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  return (
    <>
      <XButton onClick={() => setVisible1(true)}>确认弹窗</XButton>
      <XModal
        title="下线通知"
        footer={[
          { text: '取消', onPress: () => setVisible1(false) },
          { text: '我知道了', onPress: () => setVisible1(false) },
        ]}
        onClose={() => setVisible1(false)}
        visible={visible1}
      >
        您的锐小卸账号于12:45在另一台设备登录，如非本人操作，则手机号可能被盗用。
      </XModal>
      <XWhiteSpace />
      <XButton onClick={() => setVisible2(true)}>基本</XButton>
      <XModal
        title="选择苏A12345将顶替现驾驶员陈磊是否确认"
        footer={[{ text: '我知道了', onPress: () => setVisible2(false) }]}
        onClose={() => setVisible2(false)}
        visible={visible2}
      ></XModal>
      <XWhiteSpace />
      <XButton onClick={() => setVisible3(true)}>带图片</XButton>
      <XModal
        image={
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
        footer={[{ text: '我知道了', onPress: () => setVisible3(false) }]}
        onClose={() => setVisible2(false)}
        visible={visible3}
      >
        该项目停工中，无法签认运输
      </XModal>
      <XWhiteSpace />
      <XButton onClick={() => setVisible4(true)}>多按钮</XButton>
      <XModal
        title="选择苏A12345将顶替现驾驶员陈磊是否确认"
        footer={[
          { text: '操作1', onPress: () => setVisible4(false) },
          { text: '操作2', onPress: () => setVisible4(false) },
          { text: '操作3', onPress: () => setVisible4(false) },
        ]}
        onClose={() => setVisible4(false)}
        visible={visible4}
      ></XModal>
    </>
  );
};
```

## API

| 属性         | 说明                 | 类型                  | 默认值 | 必选  |
| ------------ | -------------------- | --------------------- | ------ | ----- |
| visible      | 对话框是否可见       | boolean               | false  | false |
| title        | 标题                 | React.Element         |        | false |
| footer       | 底部内容             | Array {text, onPress} | []     | false |
| maskClosable | 是否点击遮罩层时关闭 | boolean               | false  | false |
| onClose      | 点击 x 或 mask 回调  | (): void              |        | false |
| image        | 图片                 | url                   |        | false |
