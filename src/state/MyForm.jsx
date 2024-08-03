import React from "react";

class MyForm extends React.Component {
  constructor(props) {
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
    // Change code below this line
    event.preventDefault();
    this.setState((state) => ({
      submit: state.input,
    }));
    // Change code above this line
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
          {/* Change code below this line */}
          {/* Two way binding -> value={this.state.input} 
              If input value property is removed, then it wont update the change in DOM once state changed*/}
          <input value={this.state.input} onChange={this.handleChange} />
          {/* Change code above this line */}
          <button type="submit">Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

export default MyForm;
