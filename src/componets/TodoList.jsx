import React, { useEffect } from 'react';
import './TodoList.css';

const TodoList = ({ list, handleDelete, handleComplete,deleteAllProp  }) => {
  useEffect(() => {
    // Save the list to local storage whenever it changes
    localStorage.setItem('todos', JSON.stringify(list));
  }, [list]);

  return (
    <ul className="todo-list">
      <button onClick={deleteAllProp} className="delete-all-btn">Delete All</button>
      {list.map((item) => (
        <li className={`todo-item ${item.isCompleted ? 'completed' : ''}`} key={item.id}>
          <div className="todo-title">{item.task}</div>
          <div className="todo-buttons">
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <input
              onClick={() => handleComplete(item.id)}
              className="todo-checkbox"
              type="checkbox"
              // checked={item.isCompleted}
              defaultChecked={item.isCompleted}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
