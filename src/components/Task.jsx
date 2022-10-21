import React, { Component } from "react";
import PropTypes from "prop-types";
class Task extends Component {
  StyledCompleted(){
    return {
      fontSize: "20px",
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none"
    }
  }
  render() {
    const { task: { description, name } } = this.props;
    return (
      <div style={this.StyledCompleted()} >
        <p>{name}</p>
        <p>{description}</p>
        <input type="checkbox" />
        <button style={btnDelete}>
          x
        </button>
      </div>
    )
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  width: "40px",
  height: "40px",
  margin: "0 10px",
  borderRadius: "50%",
  cursor: "pointer", 
}

export default Task;