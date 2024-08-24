**Props** :


---------------------------------------------------------------------------------------------------
**State**:

- Initiate State: this.state = { key: 'value' }
- Update State :
  this.setState((state, props) => ({
  key: 'updatedValue'
  }))
- Two way binding (Controlled Input) --> <input value={this.state.input} onChange={this.handleChange} />
- "this" : keyword -> Bound "this" to the current instance, which triggered the event
  - Manual Binding via Constructor:
    #
        constructor(props) {
        	this.handleChange = this.handleChange.bind(this);
        }
  - Automatic Binding via arrow functions : Eliminates the need for manual binding(via Constructor), as the **this** context is automatically handled.
    #
        handleChange = (event) => {
        	this.setState({
        	  input: event.target.value,
        	});
        };

* Example: [MyForm](https://github.com/sureshkannan19/reactbasics/blob/main/src/state/MyForm.jsx)
---------------------------------------------------------------------------------------------------

