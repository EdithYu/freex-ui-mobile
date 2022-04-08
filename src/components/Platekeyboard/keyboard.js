import React from 'react';
import delIcon from './del.svg';
const Keyboard = props => {
  const { visible, getText, delText, closeKeyboard } = props;

  const add = e => {
    if (e.target.innerText.length === 1) {
      getText(e.target.innerText);
    }
  };

  return (
    <div className="keyboard" style={{ display: visible ? 'block' : 'none' }}>
      <ul onClick={e => add(e)}>
        <li className="number">
          <span className="text">1</span>
        </li>
        <li className="number">
          <span className="text">2</span>
        </li>
        <li className="number">
          <span className="text">3</span>
        </li>
        <li className="number">
          <span className="text">4</span>
        </li>
        <li className="number">
          <span className="text">5</span>
        </li>
        <li className="number">
          <span className="text">6</span>
        </li>
        <li className="number">
          <span className="text">7</span>
        </li>
        <li className="number">
          <span className="text">8</span>
        </li>
        <li className="number">
          <span className="text">9</span>
        </li>
        <li className="number">
          <span className="text">0</span>
        </li>
        <li>
          <span className="text">Q</span>
        </li>
        <li>
          <span>W</span>
        </li>
        <li>
          <span>E</span>
        </li>
        <li>
          <span>R</span>
        </li>
        <li>
          <span>T</span>
        </li>
        <li>
          <span>Y</span>
        </li>
        <li>
          <span>U</span>
        </li>
        <li>
          <span>I</span>
        </li>
        <li>
          <span>O</span>
        </li>
        <li>
          <span>P</span>
        </li>
        <li>
          <span>A</span>
        </li>
        <li>
          <span>S</span>
        </li>
        <li>
          <span>D</span>
        </li>
        <li>
          <span>F</span>
        </li>
        <li>
          <span>G</span>
        </li>
        <li>
          <span>H</span>
        </li>
        <li>
          <span>J</span>
        </li>
        <li>
          <span>K</span>
        </li>
        <li>
          <span>L</span>
        </li>
        <li>
          <span>Z</span>
        </li>
        <li>
          <span>X</span>
        </li>
        <li>
          <span>C</span>
        </li>
        <li>
          <span>V</span>
        </li>
        <li>
          <span>B</span>
        </li>
        <li>
          <span>N</span>
        </li>
        <li>
          <span>M</span>
        </li>
        <li>
          <span
            className="other"
            style={{ backgroundImage: `url(${delIcon})` }}
            onClick={e => {
              delText(e);
            }}
          ></span>
        </li>
        <li>
          <span
            className="other"
            onClick={e => {
              closeKeyboard(e);
            }}
          >
            完成
          </span>
        </li>
      </ul>
    </div>
  );
};
export default Keyboard;
