import * as React from 'react';
import classnames from 'classnames';
import XIcon from '../Icon';
export type XNavBarBgType = 'light' | 'dark';

export interface XNavBarProps {
  prefixCls?: string;
  className?: string;
  title: string; // 标题
  rightContent?: string; // 右侧内容
  mode?: XNavBarBgType; // 背景模式
  closeable?: boolean;
  height: number;
  onCloseFunc?: () => void;
  onRightFunc?: () => void;
  onLeftFunc?: () => void;
}

const XNavBar: React.FC<XNavBarProps> = ({
  prefixCls,
  className,
  title,
  rightContent,
  mode,
  closeable,
  height,
  onCloseFunc,
  onRightFunc,
  onLeftFunc,
}) => {
  return (
    <div
      className={classnames(className, prefixCls, `${prefixCls}-${mode}`)}
      style={{ paddingTop: height + 10 }}
    >
      <div className={`${prefixCls}-left-arrow-${mode}`} onClick={onLeftFunc}>
        <XIcon type={'xleft'} />
      </div>
      {closeable ? (
        <XIcon
          type={'xclose'}
          className={classnames(`${prefixCls}-close`, `${prefixCls}-${mode}`)}
          onClick={onCloseFunc}
        />
      ) : null}
      <span className={`${prefixCls}-title`}>{title}</span>
      <span className={`${prefixCls}-right-text`} onClick={onRightFunc}>
        {rightContent}
      </span>
    </div>
  );
};

XNavBar.defaultProps = {
  prefixCls: 'x-navbar',
  mode: 'light',
  closeable: false,
  height: 0,
};

export default XNavBar;
