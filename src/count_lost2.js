import React, { Component } from "react";

class NumberDisplay extends Component {
  state = {
    displayNumber: false,
    number: 1
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { displayNumber, number } = this.state;
      this.setState({ displayNumber: !displayNumber });

      if (number === 9 && displayNumber) {
        this.setState({ displayNumber: false });
        clearInterval(this.intervalId);
      } else if (displayNumber) {
        setTimeout(() => {
          this.setState({ displayNumber: false, number: number + 1 });
        }, 1000);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { displayNumber, number } = this.state;

    return (
      <div>
        {displayNumber && <span>{number}</span>}
      </div>
    );
  }
}

export default NumberDisplay;
