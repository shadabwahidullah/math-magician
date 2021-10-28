import '../Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: { total: 0, next: null, operation: null },
    };
  }

  onClickListener = (event) => {
    const { obj } = this.state;
    this.setState({
      obj: calculate(obj, event.target.innerText),
    });
  };

  render() {
    const { obj } = this.state;
    return (
      <div className="wrapper">
        <p className="result">
          {obj.next}
          {obj.operation}
          {obj.total}
        </p>
        <button
          type="button"
          className="key"
          onClick={this.onClickListener}
          name="AC"
        >
          AC
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          +/-
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          %
        </button>
        <button
          type="button"
          className="key operation"
          onClick={this.onClickListener}
        >
          /
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          7
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          8
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          9
        </button>
        <button
          type="button"
          className="key operation"
          onClick={this.onClickListener}
        >
          x
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          4
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          5
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          6
        </button>
        <button
          type="button"
          className="key operation"
          onClick={this.onClickListener}
        >
          -
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          1
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          2
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          3
        </button>
        <button
          type="button"
          className="key operation"
          onClick={this.onClickListener}
        >
          +
        </button>
        <button
          type="button"
          className="key zero"
          onClick={this.onClickListener}
        >
          0
        </button>
        <button type="button" className="key" onClick={this.onClickListener}>
          .
        </button>
        <button
          type="button"
          className="key operation"
          onClick={this.onClickListener}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
