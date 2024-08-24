import React from "react";

class OnlyEvens extends React.Component {
  constructor(props) {
    console.log("Inside OnlyEvens");
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    return nextProps.value % 2 == 0;
  }
  componentDidMount() {
    console.log("Component didmount.");
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class ComponentUpdate extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inside ComponentUpdate");
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

export default ComponentUpdate;
