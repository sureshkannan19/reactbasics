import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    console.log("Inside MyForm");
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    // manual binding
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Automatic Binding through arrow functions
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      submit: state.input,
    }));
  };

  componentDidMount() {
    // Simulate state change after initial render
    setTimeout(() => {
      this.setState({ input: "World" });
    }, 2000);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Two way binding -> value={this.state.input} 
              If input value property is removed, then it wont update the change in DOM once state changed*/}
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

export default MyForm;
