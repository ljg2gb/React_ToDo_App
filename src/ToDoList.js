import React from 'react';
import ToDoItem from './ToDoItem.js'

function ToDoList({todos}) {
    const showTodos = todos.map(todo => <ToDoItem {...todo}/> )
  return (
    <div className="ToDoList">
        {showTodos}
    </div>
  );
}

export default ToDoList;