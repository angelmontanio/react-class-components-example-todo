import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";
//Components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
// class Helloworld extends Component {
//   state = {
//     show: true,
//   };
//   toggleShow = () => {
//     this.setState({ show: false });
//   };
//   render() {
//     if (this.state.show) {
//       return (
//         <div className="card-hello">
//           <h1>{this.props.myText}</h1>
//           <div>{this.props.subtitle}</div>
//           <button onClick={() => this.toggleShow()}>Togle</button>
//         </div>
//       );
//     } else {
//       return (
//         <>
//           <h1>No hay elementos</h1>
//           <button onClick={this.toggleShow}/>
//         </>
//       );
//     }
//   }
// }

// const Helloworld = ({myText})=>{
//   return(
//     <div>{myText}</div>
//   )
// }

export default class App extends Component {
  state = {
    tasks,
  };

  addTask = (title, description) =>{
    console.log(title, description);
  }
  render() {

    return (
      <div className="App">
        <TaskForm addTask={this.addTask}/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
}
