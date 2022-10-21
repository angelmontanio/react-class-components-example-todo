import React, { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

class Tasks extends Component {
  
  render() {
    const {tasks} = this.props;
    return (
      <div className="container">
        {tasks.map((task)=>(
          <Task task={task} key={task.id}/>
        ))}
      </div>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Tasks;
