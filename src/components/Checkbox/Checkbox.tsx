import React, { ChangeEvent, useState, useEffect } from 'react';
import classnames from 'classnames';

export interface XCheckboxProps {
  prefixCls?: string;
  className?: string;
  disabled?: boolean;
  children?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event?: ChangeEvent) => void;
}

const getChecked = (props: any, defaultChecked: boolean) => {
  if (typeof props.checked !== 'undefined') {
    return props.checked;
  }
  if (typeof props.defaultChecked !== 'undefined') {
    return props.defaultChecked;
  }
  return defaultChecked;
};

const XCheckbox: any = (props: XCheckboxProps) => {
  const { prefixCls, className, disabled, children, checked } = props;

  const [checkedState, setChecked] = useState(getChecked(props, false));

  useEffect(() => {
    setChecked(getChecked(props, false));
  }, [checked]);

  const onValueChange = (e: ChangeEvent) => {
    const { disabled, onChange } = props;

    if (disabled) {
      return;
    }

    const newChecked = !checkedState;
    if (!('checked' in props)) {
      setChecked(newChecked);
    }

    typeof onChange === 'function' && onChange(e);
  };

  const classString = classnames(prefixCls, className, {
    [`${prefixCls}-checked`]: checkedState,
    [`${prefixCls}-disabled`]: disabled,
  });

  const inputRender = (
    <input
      type="checkbox"
      className={`${prefixCls}-input`}
      disabled={disabled}
      checked={!!checkedState}
      onChange={onValueChange}
    />
  );

  const checkboxRender = (
    <span className={classString}>
      {inputRender}
      <span className={`${prefixCls}-inner`} />
      {children && <span className={`${prefixCls}-text`}>{children}</span>}
    </span>
  );

  return checkboxRender;
};

XCheckbox.defaultProps = {
  prefixCls: 'x-checkbox',
};

export default XCheckbox;
