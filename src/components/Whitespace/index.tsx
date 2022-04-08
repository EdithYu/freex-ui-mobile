import classnames from 'classnames';
import * as React from 'react';

export interface WhiteSpacePropsType {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface WhiteSpaceProps extends WhiteSpacePropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    prefixCls: 'x-whitespace',
    size: 'md',
  };

  render() {
    const { prefixCls, size, className, style } = this.props;
    const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);

    return <div className={wrapCls} style={style} />;
  }
}
