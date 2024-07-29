import React, { useState } from 'react';

const TaskItem = ({ task, updateTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const toggleComplete = () => {
    updateTask({ ...task, isCompleted: !task.isCompleted, updatedAt: new Date().toISOString() });
  };

  const handleUpdate = () => {
    updateTask({ ...task, title, description, updatedAt: new Date().toISOString() });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{task.title}</h3>
        {isExpanded && <p>{task.description}</p>}
        {isExpanded && <small>Last updated: {new Date(task.updatedAt).toLocaleString()}</small>}
      </div>
      {isExpanded && (
        <div>
          <button onClick={toggleComplete}>
            {task.isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          {isEditing && (
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button onClick={handleUpdate}>Save</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskItem;
