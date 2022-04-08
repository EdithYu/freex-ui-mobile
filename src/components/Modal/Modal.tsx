import React from 'react';
import classnames from 'classnames';

const XModal: any = props => {
  const {
    prefixCls,
    visible,
    children,
    title,
    footer,
    maskClosable,
    onClose,
    image,
  } = props;
  const close = e => {
    if (onClose) {
      onClose(e);
    }
  };
  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      close(e);
    }
  };
  const getMaskElement = () => {
    const maskClass = classnames(`${prefixCls}-mask`, {
      [`${prefixCls}-mask-hidden`]: !visible,
    });
    return (
      <div
        className={maskClass}
        onClick={maskClosable ? onMaskClick : undefined}
      />
    );
  };

  const renderFooterButton = (button, i) => {
    const onClickFn = (e: React.MouseEvent) => {
      e.preventDefault();
      if (button.onPress) {
        button.onPress();
      }
    };
    return (
      <div
        key={i}
        role="button"
        className={classnames(`${prefixCls}-button`)}
        onClick={onClickFn}
      >
        {button.text || 'button'}
      </div>
    );
  };

  const getDialogElement = () => {
    const wrapClass = classnames(`${prefixCls}-wrap`, {
      [`${prefixCls}-wrap-hidden`]: !visible,
    });
    const btnGroupClass = classnames(
      `${prefixCls}-button-group-${footer.length === 2 ? 'h' : 'v'}`,
      `${prefixCls}-button-group`,
    );
    return (
      <div className={wrapClass}>
        <div className={`${prefixCls}-wrap-title`}>{title}</div>
        {image && (
          <div className={`${prefixCls}-wrap-image`}>
            <img src={image} alt="image" />
          </div>
        )}
        {children ? (
          <div className={`${prefixCls}-wrap-content`}>{children}</div>
        ) : null}
        {footer && (
          <div className={btnGroupClass}>
            {footer.map((button, i) => {
              return renderFooterButton(button, i);
            })}
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      {getMaskElement()}
      {getDialogElement()}
    </>
  );
};

XModal.defaultProps = {
  prefixCls: 'x-modal',
  maskClosable: true,
};

export default XModal;
