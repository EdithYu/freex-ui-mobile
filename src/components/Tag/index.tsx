import * as React from 'react';
import classnames from 'classnames';

const XTag = props => {
  const {
    prefixCls,
    className,
    type,
    shape,
    text,
    children,
    fillColor,
    fontColor,
  } = props;

  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-${type}`]: !!type,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-sup`]: !!children,
  });

  const colorStyle = () => {
    let style: any = {};
    if (type === 'fill') {
      if (fillColor) {
        style.background = fillColor;
      }
    }
    if (fontColor) {
      if (type === 'ghost') {
        style.borderColor = fontColor;
      }
      style.color = fontColor;
    }
    return style;
  };

  return (
    <span className={cls}>
      {children}
      {shape === 'coupon' && (
        <div
          className="left-coupon"
          style={{
            background: fillColor
              ? 'radial-gradient(circle at left, transparent 33%, ' +
                fillColor +
                ' 33%)'
              : '',
          }}
        ></div>
      )}
      <sup className={`${prefixCls}-content`} style={{ ...colorStyle() }}>
        {shape !== 'dot' && text}
      </sup>
      {shape === 'coupon' && (
        <div
          className="right-coupon"
          style={{
            background: fillColor
              ? 'radial-gradient(circle at right, transparent 33%, ' +
                fillColor +
                ' 33%)'
              : '',
          }}
        ></div>
      )}
    </span>
  );
};

XTag.defaultProps = {
  prefixCls: 'x-tag',
  shape: 'default',
  type: 'fill',
};

export default XTag;
