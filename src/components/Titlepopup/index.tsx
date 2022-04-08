import React, { useState } from 'react';
import classnames from 'classnames';
import XPopup from '../Popup';
import XIcon from '../Icon';
export interface XTitlePopupProps {
  prefixCls?: string;
  className?: string;
  title: string;
  onClose?: Function;
  visible: boolean;
}

const XTitlePopup: React.FC<XTitlePopupProps> = ({
  prefixCls,
  className,
  title,
  onClose,
  children,
  visible,
}) => {
  const classstr = classnames(className, prefixCls);
  return (
    <XPopup
      position={'bottom'}
      transitionType={'zoom-in-bottom'}
      visible={visible}
      onClose={() => onClose && onClose()}
    >
      <div className={classstr}>
        <div className={`${prefixCls}-top`}>
          <div className={`${prefixCls}-top-title`}>{title}</div>
          <XIcon type={'cross'} onClick={() => onClose && onClose()} />
        </div>
        {children}
      </div>
    </XPopup>
  );
};

XTitlePopup.defaultProps = {
  prefixCls: 'x-title-popup',
  onClose: () => {},
};

export default XTitlePopup;
