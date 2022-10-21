import React, { Component } from 'react';

class TaskForm extends Component {
  state = {
    title: '',
    description: ''
  }
  onSubmit = (e) => {
    this.props.addTask(this.state.title,this.state.description);
    e.preventDefault()
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          type="text" 
          placeholder='Write a Task' 
          onChange={this.onChange} 
          name="title" 
          value={this.state.title} 
        />
        <br />
        <br />
        <textarea placeholder='Write a description' onChange={this.onChange} name="description" value={this.state.description}></textarea>
        <button type='submit'>
          Save a task
        </button>
      </form>
    );
  }
}

export default TaskForm;