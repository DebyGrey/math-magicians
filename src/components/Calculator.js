import ResultDisplayScreen from './ResultDisplayScreen';

const Calculator = () => (
  <div className="calculator">
    <ResultDisplayScreen />
    <div className="functional-buttons">
      <button type="button" id="ac">AC</button>
      <button type="button" id="+/-">+/-</button>
      <button type="button" id="%">%</button>
      <button type="button" className="orange-btn" id="/">
        /
      </button>
      <button type="button" id="7">7</button>
      <button type="button" id="8">8</button>
      <button type="button" id="9">9</button>
      <button type="button" className="orange-btn" id="*">
        *
      </button>

      <button type="button" id="4">4</button>
      <button type="button" id="5">5</button>
      <button type="button" id="6">6</button>
      <button type="button" className="orange-btn" id="-">
        -
      </button>
      <button type="button" id="1">1</button>
      <button type="button" id="2">2</button>
      <button type="button" id="3">3</button>
      <button type="button" className="orange-btn">
        +
      </button>
      <button type="button" className="grid-item" id="0">0</button>
      <button type="button" id=".">.</button>
      <button type="button" className="orange-btn" id="=">
        =
      </button>
    </div>
  </div>
);
export default Calculator;
