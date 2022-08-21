import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0};
    this.sumCounter = this.sumCounter.bind(this);
  }
  sumCounter() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  render() {
    const { contador } = this.state;

    return (
      <>
        <h1>{contador}</h1>
        <button onClick={this.sumCounter}>Sumar</button>
      </>
    );
  }
}

export default Counter;
