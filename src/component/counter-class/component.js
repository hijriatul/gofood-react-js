import React from 'react';

class Counter extends React.Component {
  state = {
    number: 15
  };
  tambah = () => {
    this.setState({ number: this.state.number + 1 });
  };

  kurang = () => {
    this.setState({ number: this.state.number - 1 });
  };
  perkalian = () => {
    this.setState({ number: this.state.number * 2 });
  };
  pembagian = () => {
    this.setState({ number: this.state.number / 3 });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Ini Class Component</h1>
        <h1>{this.state.number}</h1>
        <button onClick={this.tambah}>+</button>
        <button onClick={this.kurang}>-</button>
        <button onClick={this.perkalian}>*</button>
        <button onClick={this.pembagian}>/</button>
      </React.Fragment>
    );
  }
}

export default Counter;
