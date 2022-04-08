import * as React from 'react';
import classnames from 'classnames';

export interface XSwitchProps {
  value?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const XSwitch: React.FC<XSwitchProps> = ({ value, disabled, onClick }) => {
  const prefixCls = 'x-switch';
  return (
    <div
      className={classnames(`${prefixCls}`, {
        active: value,
        disabled: disabled,
      })}
      onClick={onClick}
    ></div>
  );
};

XSwitch.defaultProps = {
  disabled: false,
};

export default XSwitch;
