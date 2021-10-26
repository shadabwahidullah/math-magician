import '../Calculator.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <p className="result">0</p>
        <button type="button" className="key">AC</button>
        <button type="button" className="key">+/-</button>
        <button type="button" className="key">%</button>
        <button type="button" className="key operation">/</button>
        <button type="button" className="key">7</button>
        <button type="button" className="key">8</button>
        <button type="button" className="key">9</button>
        <button type="button" className="key operation">x</button>
        <button type="button" className="key">4</button>
        <button type="button" className="key">5</button>
        <button type="button" className="key">6</button>
        <button type="button" className="key operation">-</button>
        <button type="button" className="key">1</button>
        <button type="button" className="key">2</button>
        <button type="button" className="key">3</button>
        <button type="button" className="key operation">+</button>
        <button type="button" className="key zero">0</button>
        <button type="button" className="key">.</button>
        <button type="button" className="key operation">=</button>
      </div>
    );
  }
}

export default Calculator;
