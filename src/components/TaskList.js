import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.taskId} task={task} updateTask={updateTask} />
      ))}
    </div>
  );
};

export default TaskList;
