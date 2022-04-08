import React, { MouseEventHandler, useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import XIcon from '../Icon';
import { addKeyframe, removeKeyframe, existKeyframe } from './utils';

const NOTICEBAR_KEYFRAME_NAME = 'x-notice-bar-scrolling';

const XNoticebar: any = props => {
  const {
    prefixCls,
    className,
    theme,
    icon,
    hasArrow,
    closable,
    children,
    handleClick,
    speed,
    delay,
    action,
  } = props;
  useEffect(() => {
    updateScrolling();
  }, []);
  const wrapper = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(0);

  const onClick: MouseEventHandler<HTMLDivElement> = e => {
    if (hasArrow && typeof handleClick === 'function') {
      handleClick(e);
    }
    if (closable) {
      setVisible(false);
    }
  };

  const updateScrolling = () => {
    const wrapWidth = wrapper?.current?.getBoundingClientRect().width;
    const offsetWidth = content?.current?.getBoundingClientRect().width;
    if (offsetWidth && wrapWidth && offsetWidth > wrapWidth) {
      // 完整的执行时间 = 前后停留时间 + 移动时间
      const animationDuration = Math.round(
        delay! * 2 + (offsetWidth / speed!) * 1000,
      );

      // 计算停留时间占总时间的百分比
      const delayPercent = Math.round((delay! * 100) / animationDuration);

      // 删除之前的 keyframe 定义
      if (existKeyframe(NOTICEBAR_KEYFRAME_NAME)) {
        removeKeyframe(NOTICEBAR_KEYFRAME_NAME);
      }

      // 增加重新计算后的 keyframe
      addKeyframe(
        NOTICEBAR_KEYFRAME_NAME,
        `
            0%, ${delayPercent}% {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }

            ${100 - delayPercent}%, 100% {
              -webkit-transform: translate3d(${-(
                offsetWidth - wrapWidth
              )}px, 0, 0);
              transform: translate3d(${-(offsetWidth - wrapWidth)}px, 0, 0);
            }
          `,
      );

      setAnimationDuration(animationDuration);
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-${theme}`]: !!theme,
  });

  const iconRender = icon && <div className={`${prefixCls}-icon`}>{icon}</div>;
  const renderCloseIcon = closable ? (
    action ? (
      action
    ) : (
      <XIcon type="cross" onClick={onClose} />
    )
  ) : null;
  const renderArrow = hasArrow && <XIcon type="right" />;
  const noFooter = !closable && !hasArrow;
  return (
    visible && (
      <div className={classes}>
        {iconRender}
        <div className={`${prefixCls}-body`} ref={wrapper}>
          <div
            className={`${prefixCls}-marquee`}
            ref={content}
            style={
              animationDuration! > 0
                ? {
                    WebkitAnimation: `${NOTICEBAR_KEYFRAME_NAME} ${animationDuration}ms linear infinite`,
                    animation: `${NOTICEBAR_KEYFRAME_NAME} ${animationDuration}ms linear infinite`,
                  }
                : undefined
            }
          >
            {children}
          </div>
        </div>
        {!noFooter && (
          <div className={`${prefixCls}-footer`} onClick={onClick}>
            {renderArrow}
            {renderCloseIcon}
          </div>
        )}
      </div>
    )
  );
};

XNoticebar.defaultProps = {
  prefixCls: 'x-noticebar',
  speed: 50,
  delay: 2000,
  theme: 'default',
};

export default XNoticebar;
