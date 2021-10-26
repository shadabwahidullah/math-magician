import '../Calculator.css';
import React from 'react';

const Calculator = () => (
  <div className="wrapper">
    <p className="result">0</p>
    <p className="key">AC</p>
    <p className="key">+/-</p>
    <p className="key">%</p>
    <p className="key operation">/</p>
    <p className="key">7</p>
    <p className="key">8</p>
    <p className="key">9</p>
    <p className="key operation">x</p>
    <p className="key">4</p>
    <p className="key">5</p>
    <p className="key">6</p>
    <p className="key operation">-</p>
    <p className="key">1</p>
    <p className="key">2</p>
    <p className="key">3</p>
    <p className="key operation">+</p>
    <p className="key zero">0</p>
    <p className="key">.</p>
    <p className="key operation">=</p>
  </div>
);

export default Calculator;
