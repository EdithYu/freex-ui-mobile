import React, { useState } from 'react';
import classnames from 'classnames';
import XPopup from '../Popup';
export interface XDropMenuProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  data: Array<any>;
  defaultValue?: Array<string>;
  disabled?: boolean;
  rowNode?: (rowObject) => React.ReactElement;
  onChange?: (data: rowObject) => void;
}

type rowObject = {
  text: string;
  value: string;
};

const XDropMenu: React.FC<XDropMenuProps> = ({
  prefixCls,
  className,
  data,
  style,
  defaultValue = [],
  rowNode,
  onChange,
}) => {
  const titleBars = data.map((item: rowObject, index: number) => {
    return {
      text: item.text,
      value: defaultValue[index],
    };
  });

  const [bars, setBars] = useState(titleBars);
  const [currentindex, setCurrentIndex] = useState(0);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [visible, setVisible] = useState(false);

  const classstr = classnames(className, prefixCls);

  const handleClickBar = index => {
    if (!visible) {
      setCurrentIndex(index);
      setCurrentOptions(data[index].options || []);
    }
    setVisible(!visible);
  };

  const handleClickRow = (item: rowObject) => {
    bars[currentindex] = item;
    setBars([...bars]);
    onChange && onChange(item);
    setVisible(false);
  };

  return (
    <div className={classstr} style={{ ...style }}>
      <div className={`${prefixCls}-bar`}>
        {bars.map((item: any, index: number) => {
          return (
            <div
              className={classnames('bar-item', {
                active: visible && currentindex === index,
                selected: item.value,
              })}
              onClick={() => {
                handleClickBar(index);
              }}
            >
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
      <XPopup
        position={'top'}
        transitionType={'fade-top'}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <div className="x-drop-menu-list">
          {currentOptions.map((item: any) => {
            return (
              <div
                className={classnames('item-row', {
                  selected:
                    bars[currentindex] &&
                    item.value === bars[currentindex].value,
                  disabled: item.disabled,
                })}
                onClick={() => {
                  handleClickRow(item);
                }}
              >
                {rowNode ? rowNode(item) : item.text}
              </div>
            );
          })}
        </div>
      </XPopup>
    </div>
  );
};

XDropMenu.defaultProps = {
  prefixCls: 'x-drop-menu',
  defaultValue: [],
};

export default XDropMenu;
