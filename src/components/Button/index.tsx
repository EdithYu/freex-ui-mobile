import * as React from 'react';
import classnames from 'classnames';

export interface XButtonProps {
  prefixCls: string;
  className?: string;
  type?: 'primary' | 'ghost';
  unactivate: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const XButton: React.FC<XButtonProps> = ({
  prefixCls,
  className,
  type,
  unactivate,
  disabled,
  children,
  style,
  onClick,
}) => {
  const classstr = classnames(className, prefixCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-${type}-unactivate`]: unactivate,
    [`${prefixCls}-${type}-disable`]: disabled,
  });
  return (
    <div className={classstr} onClick={onClick} style={{ ...style }}>
      {children}
    </div>
  );
};

XButton.defaultProps = {
  prefixCls: 'x-button',
  type: 'primary',
  unactivate: false,
  disabled: false,
};

export default XButton;
