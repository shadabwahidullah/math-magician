import '../Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({ total: 0, next: null, operation: null });

  const onClickListener = (event) => {
    setObj(calculate(obj, event.target.innerText));
  };

  return (
    <div className="row p-3">
      <div className="col-md-6">
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div className="wrapper col-md-6">
        <p className="result">
          {obj.total}
          {obj.operation}
          {obj.next}
        </p>
        <button
          type="button"
          className="key"
          onClick={onClickListener}
          name="AC"
        >
          AC
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          +/-
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          %
        </button>
        <button
          type="button"
          className="key operation"
          onClick={onClickListener}
        >
          /
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          7
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          8
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          9
        </button>
        <button
          type="button"
          className="key operation"
          onClick={onClickListener}
        >
          x
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          4
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          5
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          6
        </button>
        <button
          type="button"
          className="key operation"
          onClick={onClickListener}
        >
          -
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          1
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          2
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          3
        </button>
        <button
          type="button"
          className="key operation"
          onClick={onClickListener}
        >
          +
        </button>
        <button type="button" className="key zero" onClick={onClickListener}>
          0
        </button>
        <button type="button" className="key" onClick={onClickListener}>
          .
        </button>
        <button
          type="button"
          className="key operation"
          onClick={onClickListener}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
