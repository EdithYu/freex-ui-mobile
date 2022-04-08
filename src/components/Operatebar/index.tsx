import * as React from 'react';
import classnames from 'classnames';

export interface XOperateBarProps {
  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
}

const XOperateBar: React.FC<XOperateBarProps> = ({
  prefixCls,
  className,
  children,
  style,
}) => {
  return (
    <div className={classnames(className, prefixCls)} style={{ ...style }}>
      <div className={`${prefixCls}-wrap`}>{children}</div>
    </div>
  );
};

XOperateBar.defaultProps = {
  prefixCls: 'x-operate-bar',
};

export default XOperateBar;
