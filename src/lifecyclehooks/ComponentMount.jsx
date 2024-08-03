import React from "react";

class ComponentMount extends React.Component {
  constructor(props) {
    console.log("Inside ComponentMount");
    super(props);
    this.state = {
      message: "",
    };
  }
  componentDidMount() {
    // after dom renders
    setTimeout(() => {
      console.log("Component Did Mount : ");
    }, 1000);
    document.addEventListener("keydown", this.handleKeystrokes);
  }
  componentWillUnmount() {
    console.log("Component Unmounting : ");
    document.removeEventListener("keydown", this.handleKeystrokes);
  }
  handleKeystrokes = (event) => {
    this.setState({
      message: "You pressed the " + event.key + " key! ",
    });
  };

  render() {
    console.log("Component render.. ");
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default ComponentMount;
