import React, { useState } from 'react';
import XIcon from '../Icon';
import classnames from 'classnames';

export interface ListData {
  title: string;
  value: number | string;
}

export interface XCheckboxGroupProps {
  prefixCls?: string;
  className?: string;
  list: ListData[];
  multiple?: boolean;
  activeKey?: number | string;
  defaultActiveKey?: number | string;
  onChange?: (val?: number | string) => void;
}

const getActiveKey = (props: XCheckboxGroupProps) => {
  const { multiple, activeKey, defaultActiveKey } = props;
  let value;

  if (typeof activeKey !== 'undefined') {
    value = activeKey;
  }
  if (typeof defaultActiveKey !== 'undefined') {
    value = defaultActiveKey;
  }

  if (value) {
    return multiple ? [].concat(value) : value;
  }

  return multiple ? [] : undefined;
};

const XCheckboxGroup: React.FC<any> = (props: XCheckboxGroupProps) => {
  const { prefixCls, className, list, onChange, multiple } = props;

  const [activeKey, setActiveKey] = useState(getActiveKey(props));

  const onItemChange = key => {
    if (!key) {
      return;
    }
    let newActiveKey;

    if (multiple) {
      newActiveKey = [];
      if (activeKey.indexOf(key) > -1) {
        newActiveKey = activeKey.filter(i => i !== key);
      } else {
        newActiveKey = activeKey.slice(0);
        newActiveKey.push(key);
      }
    } else {
      newActiveKey = activeKey === key ? undefined : key;
    }
    if (!('activeKey' in props)) {
      setActiveKey(newActiveKey);
    }

    onChange && onChange(newActiveKey);
  };

  const items = list.map((item, index) => {
    const isActive = multiple
      ? activeKey.indexOf(item.value) > -1
      : activeKey === item.value;
    const itemcls = classnames(`${prefixCls}-item`, {
      [`${prefixCls}-item-checked`]: isActive,
    });

    return (
      <span
        className={itemcls}
        key={+index}
        onClick={() => onItemChange(item.value)}
      >
        {item.title}
        {isActive && (
          <XIcon type={'xcheck'} className={`${prefixCls}-icon-check`} />
        )}
      </span>
    );
  });
  const cls = classnames(prefixCls, className, {});

  return <div className={cls}>{items}</div>;
};

XCheckboxGroup.defaultProps = {
  prefixCls: 'x-checkbox-group',
  multiple: false,
  onChange: () => {},
};

export default XCheckboxGroup;
