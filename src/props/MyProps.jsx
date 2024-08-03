import React from "react";

class MyProps extends React.Component {
  constructor(props) {
    console.log("Inside MyProps");
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    console.log("Inside GetInput");
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    console.log("Inside RenderInput");
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}

export default MyProps;
