import * as React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

export type transitionType =
  | 'bounce'
  | 'fade'
  | 'fly'
  | 'zoom-in-left'
  | 'zoom-in-left'
  | 'zoom-in-right'
  | 'zoom-in-top'
  | 'zoom-in-bottom'
  | 'fade-top'
  | 'fade-bottom'
  | 'fade-right'
  | 'fade-left'
  | 'mask-fade';

export interface TransitionProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: transitionType;
  visible?: boolean;
}

const Transition: React.FC<TransitionProps> = ({
  prefixCls,
  className,
  type,
  visible,
  children,
}) => {
  const classstr = classnames(className, prefixCls, type);
  return (
    <CSSTransition
      in={visible}
      timeout={200}
      classNames={classstr}
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  prefixCls: 'x-transition',
  type: 'bounce',
  visible: false,
};

export default Transition;
