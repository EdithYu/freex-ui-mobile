import React, { useState, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import XPopup from '../Popup';
import { getMountContainer } from './utils';

export interface XToastProps {
  content?: ReactNode;
  visible: boolean;
  prefixCls?: string;
  className?: string;
  mountContainer?: HTMLElement | (() => HTMLElement) | Window;
}

const contentIsToastProps = (content): content is XToastProps =>
  typeof content === 'object' && 'content' in content;

const XToast: any = props => {
  const [visible, setVisible] = useState(props.visible);

  let timer;

  useEffect(() => {
    autoClose();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (props.visible === true) {
      setVisible(true);
      clearTimeout(timer);
      autoClose();
    } else {
      _hide();
    }
  }, [props.visible]);

  const autoClose = () => {
    if (props.stayTime > 0) {
      timer = setTimeout(() => {
        _hide();
      }, props.stayTime);
    }
  };

  const _hide = () => {
    setVisible(false);
  };

  const onClose = () => {
    if (XToast.toast) {
      XToast.toastContainer.removeChild(XToast.toast);
      XToast.toast = null;
    }
    if (typeof props.onClose === 'function') {
      props.onClose();
    }
  };

  return (
    <XPopup
      position={'center'}
      hasMask={false}
      visible={visible}
      onClose={onClose}
    >
      <div className={props.prefixCls}>
        <div className={`${props.prefixCls}__container`}>{props.content}</div>
      </div>
    </XPopup>
  );
};

XToast.toast;
XToast.toastContainer;
XToast.show = (content: ReactNode | XToastProps) => {
  XToast.unmountNode();
  if (!XToast.toast) {
    XToast.toast = document.createElement('div');
    XToast.toast.classList.add('x-toast-container');
    if (contentIsToastProps(content) && content.className) {
      XToast.toast.classList.add(content.className);
    }
    XToast.toastContainer = contentIsToastProps(content)
      ? getMountContainer(content.mountContainer)
      : getMountContainer();
    XToast.toastContainer.appendChild(XToast.toast);
  }
  if (XToast.toast) {
    const props = contentIsToastProps(content)
      ? {
          ...XToast.defaultProps,
          ...content,
          ...{ visible: true, mountContainer: XToast.toast },
        }
      : {
          ...XToast.defaultProps,
          ...{ visible: true, mountContainer: XToast.toast, content },
        };
    ReactDOM.render(<XToast {...props} />, XToast.toast);
  }
};
XToast.hide = () => {
  if (XToast.toast) {
    ReactDOM.render(<XToast visible={false} />, XToast.toast);
  }
};

XToast.unmountNode = () => {
  const { toast } = XToast;
  if (toast) {
    ReactDOM.render(<></>, toast);
    XToast.toastContainer.removeChild(toast);
    XToast.toast = null;
  }
};

XToast.defaultProps = {
  prefixCls: 'x-toast',
  stayTime: 3000,
};

export default XToast;
