import React, { useState } from 'react';
import Province from './province.js';
import Keyboard from './keyboard.js';
/**
 * @param onChange 数据修改回调
 */
const PlateKeyBoard = (props: any) => {
  const { onChange } = props;
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arr, setArr] = useState(new Array(8).fill(' '));

  const addText = (val: string) => {
    if (currentIndex < 8) {
      setCurrentIndex(currentIndex + 1);
      arr[currentIndex] = val;
      setArr(arr);
      onChange(arr.join('').replace(/(\s*$)/g, ''));
    } else {
      arr[currentIndex] = val;
      setArr(arr);
      onChange(arr.join('').replace(/(\s*$)/g, ''));
    }
  };

  const delText = (e: any) => {
    if (currentIndex > 0) {
      arr[currentIndex] = ' ';
      setCurrentIndex(currentIndex - 1);
      setArr(arr);
      onChange(arr.join('').replace(/(\s*$)/g, ''));
      e.stopPropagation();
    }
  };

  const closeKeyboard = (e: any) => {
    setVisible(false);
    e.stopPropagation();
  };

  const openKeyBoard = (index: number) => {
    setCurrentIndex(index);
    setVisible(true);
  };

  return (
    <div className="plate-keyboard">
      {visible ? (
        <div className="mask" onClick={() => setVisible(false)}></div>
      ) : null}
      <div className="plate-keyboard-content">
        <div className="card-bottom">
          {arr.map((item, index: number) => {
            return index === 7 ? (
              <div
                key={index}
                className="input-box center"
                style={{
                  border: currentIndex >= index ? '1px solid #1d9dff80' : '',
                }}
                onClick={() => openKeyBoard(index)}
              >
                <>
                  <span className="text-top" style={{ color: '#6DD400' }}>
                    {item || ''}
                  </span>
                  <div className="text-bot">新能源</div>
                </>
              </div>
            ) : (
              <div
                key={index}
                className="input-box center"
                style={{
                  border: currentIndex === index ? '1px solid #1d9dff80' : '',
                }}
                onClick={() => openKeyBoard(index)}
              >
                {item || ''}
              </div>
            );
          })}
        </div>
        {currentIndex === 0 ? (
          <Province
            visible={visible}
            getText={(val: string) => {
              addText(val);
            }}
            delText={(e: any) => {
              delText(e);
            }}
            closeKeyboard={(e: any) => {
              closeKeyboard(e);
            }}
          />
        ) : (
          <Keyboard
            visible={visible}
            getText={(val: string) => {
              addText(val);
            }}
            delText={(e: any) => {
              delText(e);
            }}
            closeKeyboard={(e: any) => {
              closeKeyboard(e);
            }}
          />
        )}
      </div>
    </div>
  );
};
export default PlateKeyBoard;
