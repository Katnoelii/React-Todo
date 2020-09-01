import React from 'react';

const Task = (props) => {
  const { task, id, completed } = props.task;
  return (
    <div
      onClick={() => props.toggleTask(id)}
      className={`task${completed ? ' completed' : ''}`}
    >
      <p>{task}</p>
    </div>
  );
};

export default Task;