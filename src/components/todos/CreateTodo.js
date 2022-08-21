import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = { // 1. set the components initial state
      text: '',
    };
  }

  // 3. add handleChange arrow function
  // handleChange() will always be bound to the particular instance of the component it is defined in
  // therefore, we can shorten the onChange callback -> onChange={this.handleChange}

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}> 
          <input 
            type="text" 
            placeholder="add todo" 
            onChange={this.handleChange} // 2. add event handler to input element
            value={this.state.text} // 4. Set value attribute to make it a completely controlled form
            />
          <input type="submit"/> 
          {this.state.text} 
        </form>
      </div>
    )
  }
}

// 5. Create mapDispatchToProps function
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (formData) => dispatch({ type: "ADD_TODO", payload: formData })
  };
};

// pass null as first arg to connect() since we're not concerned with writing mapStateToProps() function
export default connect(null, mapDispatchToProps)(CreateTodo);
