import * as React from 'react';
import classnames from 'classnames';
import XTransition, { transitionType } from '../Transition';

export interface PopupProps {
  prefixCls?: string;
  className?: string;
  transitionType?: transitionType;
  hasMask?: boolean;
  maskClosable?: boolean;
  position?: string;
  visible?: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  prefixCls,
  className,
  hasMask,
  transitionType,
  maskClosable,
  position,
  visible,
  children,
  onClose,
}) => {
  const classstr = classnames(
    className,
    prefixCls,
    { 'x-popup-with-mask': hasMask },
    `${prefixCls}-${position}`,
  );

  const handleMaskClick = (e: MouseEvent) => {
    maskClosable ? onClose() : () => {};
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className={classstr}>
      {hasMask ? (
        <XTransition visible={visible} type={'mask-fade'}>
          <div
            className={`${prefixCls}-mask`}
            onClick={(e: any) => {
              handleMaskClick(e);
            }}
          ></div>
        </XTransition>
      ) : null}
      <XTransition visible={visible} type={transitionType}>
        <div className={`${prefixCls}-box`}>{children}</div>
      </XTransition>
    </div>
  );
};

Popup.defaultProps = {
  prefixCls: 'x-popup',
  transitionType: 'bounce',
  visible: false,
  hasMask: true,
  maskClosable: true,
  position: 'center',
  onClose: () => {},
};

export default Popup;
