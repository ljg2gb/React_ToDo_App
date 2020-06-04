import React, { Component } from 'react';
import ToDoList from './ToDoList.js'
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  
  componentDidMount() {
    this.getTodos()
  }

  getTodos =() => {
    fetch('http://localhost:3000/api/v1/todos')
    .then(response => response.json())
    .then(todos => this.setState({todos}))
  }

  render() {
    return (
      <div className="App">
        <h2>To Do List</h2>
        <ToDoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
