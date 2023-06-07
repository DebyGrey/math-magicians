import { useState } from 'react';
import ResultDisplayScreen from './ResultDisplayScreen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [buttonItem, setbuttonItem] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickButtonHandler = (event) => {
    const buttonName = event.target.innerText;
    setbuttonItem(calculate(buttonItem, buttonName));
  };

  const { total, next, operation } = buttonItem;

  return (
    <div className="calculator">
      <ResultDisplayScreen total={total} next={next} operation={operation} />
      <div className="functional-buttons">
        <button type="button" onClick={clickButtonHandler}>
          AC
        </button>
        <button type="button" onClick={clickButtonHandler}>
          +/-
        </button>
        <button type="button" onClick={clickButtonHandler}>
          %
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={clickButtonHandler}
        >
          ÷
        </button>
        <button type="button" onClick={clickButtonHandler}>
          7
        </button>
        <button type="button" onClick={clickButtonHandler}>
          8
        </button>
        <button type="button" onClick={clickButtonHandler}>
          9
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={clickButtonHandler}
        >
          x
        </button>

        <button type="button" onClick={clickButtonHandler}>
          4
        </button>
        <button type="button" onClick={clickButtonHandler}>
          5
        </button>
        <button type="button" onClick={clickButtonHandler}>
          6
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={clickButtonHandler}
        >
          -
        </button>
        <button type="button" onClick={clickButtonHandler}>
          1
        </button>
        <button type="button" onClick={clickButtonHandler}>
          2
        </button>
        <button type="button" onClick={clickButtonHandler}>
          3
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={clickButtonHandler}
        >
          +
        </button>
        <button
          type="button"
          className="grid-item"
          onClick={clickButtonHandler}
        >
          0
        </button>
        <button type="button" onClick={clickButtonHandler}>
          .
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={clickButtonHandler}
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
