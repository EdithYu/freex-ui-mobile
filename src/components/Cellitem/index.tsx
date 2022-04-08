import * as React from 'react';
import classnames from 'classnames';
import XIcon from '../Icon';

export interface CellItemProps {
  title: string;
  brief?: string;
  addon?: string;
  disabled?: boolean;
  arrow?: boolean;
  noBorder?: boolean;
  rightSlot?: React.ReactElement;
  leftSlot?: React.ReactElement;
  onClick: Function;
}

const CellItem: React.FC<CellItemProps> = ({
  title,
  brief,
  addon,
  disabled,
  arrow,
  noBorder,
  rightSlot,
  leftSlot,
  onClick,
  ...resetProps
}) => {
  const prefixCls = 'x-cell-item';
  return (
    <div
      className={classnames(`${prefixCls}`, {
        'x-cell-item-noborder': noBorder,
        'x-cell-item-is-disabled': disabled,
      })}
      onClick={() => {
        onClick();
      }}
      {...resetProps}
    >
      <div className={`${prefixCls}-body`}>
        {leftSlot ? (
          <div className={`${prefixCls}-left`}>{leftSlot}</div>
        ) : null}
        <div
          className={classnames(`${prefixCls}-content`, {
            multilines: brief ? true : false,
          })}
        >
          <p className={`${prefixCls}-title`}>{title}</p>
          <p className={`${prefixCls}-brief`}>{brief}</p>
        </div>
        <div className={`${prefixCls}-right`}>
          {rightSlot ? (
            rightSlot
          ) : (
            <>
              {addon}
              {arrow ? <XIcon type={'right'} /> : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

CellItem.defaultProps = {
  disabled: false,
  arrow: false,
  noBorder: false,
  onClick: () => {},
};

export default CellItem;
