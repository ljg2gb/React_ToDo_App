import React from 'react'

function ToDoItem({title,content,urgent}) {
  return (
   <li className={urgent ? "to-do-item urgent" : "to-do-item"}>
            <h2>{title}</h2>
            <p>{content}</p>
        </li>
  );
}

export default ToDoItem;