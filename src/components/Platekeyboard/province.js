import React from 'react';
import delIcon from './del.svg';

function Province(props) {
  let provinces = [
    '京',
    '津',
    '渝',
    '沪',
    '翼',
    '晋',
    '辽',
    '吉',
    '黑',
    '苏',
    '浙',
    '皖',
    '闽',
    '赣',
    '鲁',
    '豫',
    '鄂',
    '湘',
    '粤',
    '琼',
    '川',
    '贵',
    '云',
    '陕',
    '甘',
    '青',
    '蒙',
    '桂',
    '宁',
    '新',
    '藏',
    'del',
    '完成',
  ];
  const { visible, getText, delText, closeKeyboard } = props;
  return (
    <div className="province" style={{ display: visible ? 'block' : 'none' }}>
      <div className="p-box">
        {provinces.map((item, i) => {
          return item === 'del' ? (
            <p
              key={i}
              onClick={e => {
                delText(e);
              }}
              style={{ width: 'fit-content' }}
            >
              <span
                className="other"
                style={{ backgroundImage: `url(${delIcon})` }}
              ></span>
            </p>
          ) : item === '完成' ? (
            <p
              key={i}
              onClick={e => {
                closeKeyboard(e);
              }}
            >
              <span className="other">{item}</span>
            </p>
          ) : (
            <p
              key={i}
              onClick={() => {
                getText(item);
              }}
            >
              <span>{item}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default Province;
