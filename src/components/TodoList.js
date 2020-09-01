import React from 'react';
import Todo from './Todo';

export default function ToDoList(props) {
  return (
    <div>
      {props.tasks.map((task) => (
        <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
      ))}
    </div>
  );
}